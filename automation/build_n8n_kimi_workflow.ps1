$ErrorActionPreference = 'Stop'
$skillPath = 'C:\Users\amank\Desktop\blog automation\gigawave-kimik25-blog-raw-skill.md'
$outPath = 'C:\Users\amank\Desktop\blog automation\n8n-kimi25-gigawave-blog-generator.json'
$skillContent = Get-Content -LiteralPath $skillPath -Raw

$workflow = [ordered]@{
  name = 'Gigawave Blog Generator - Kimi K2.5 (Cloudflare Workers AI)'
  nodes = @(
    [ordered]@{ parameters = @{}; id = 'manual-trigger-1'; name = 'Manual Trigger'; type = 'n8n-nodes-base.manualTrigger'; typeVersion = 1; position = @(-860, 300) },
    [ordered]@{
      parameters = [ordered]@{ keepOnlySet = $true; values = [ordered]@{ string = @(
        [ordered]@{ name = 'topic'; value = 'Understanding and Fixing Hydration Errors in Next.js' },
        [ordered]@{ name = 'skill_file_content'; value = $skillContent },
        [ordered]@{ name = 'target_model'; value = '@cf/moonshotai/kimi-k2.5' }
      ) } }
      id = 'set-inputs-1'; name = 'Set Topic + Skill File'; type = 'n8n-nodes-base.set'; typeVersion = 2; position = @(-620, 300)
    },
    [ordered]@{
      parameters = [ordered]@{ keepOnlySet = $true; values = [ordered]@{ string = @(
        [ordered]@{ name = 'cloudflare_account_id'; value = '={{$env.CLOUDFLARE_ACCOUNT_ID}}' },
        [ordered]@{ name = 'cloudflare_auth_token'; value = '={{$env.CLOUDFLARE_AUTH_TOKEN}}' },
        [ordered]@{ name = 'session_affinity'; value = '={{`gw-blog-` + $execution.id}}' }
      ) } }
      id = 'set-auth-1'; name = 'Set Cloudflare Auth'; type = 'n8n-nodes-base.set'; typeVersion = 2; position = @(-390, 300)
    },
    [ordered]@{ parameters = [ordered]@{ mode = 'mergeByPosition' }; id = 'merge-1'; name = 'Merge Input + Auth'; type = 'n8n-nodes-base.merge'; typeVersion = 2; position = @(-160, 300) },
    [ordered]@{
      parameters = [ordered]@{
        method = 'POST'
        url = '={{`https://api.cloudflare.com/client/v4/accounts/` + $json.cloudflare_account_id + `/ai/run/` + encodeURIComponent($json.target_model)}}'
        sendHeaders = $true
        headerParameters = [ordered]@{ parameters = @(
          [ordered]@{ name = 'Authorization'; value = '={{`Bearer ` + $json.cloudflare_auth_token}}' },
          [ordered]@{ name = 'Content-Type'; value = 'application/json' },
          [ordered]@{ name = 'x-session-affinity'; value = '={{$json.session_affinity}}' }
        ) }
        sendBody = $true
        specifyBody = 'json'
        jsonBody = '={
  "messages": [
    {
      "role": "system",
      "content": "You are generating raw technical blog content for Gigawave. Follow the provided skill file exactly and return all required tags in strict order."
    },
    {
      "role": "user",
      "content": "SKILL_FILE_CONTENT:\n" + $json.skill_file_content
    },
    {
      "role": "user",
      "content": "TOPIC:\n" + $json.topic
    }
  ],
  "temperature": 0.4,
  "top_p": 0.9,
  "max_completion_tokens": 7000,
  "chat_template_kwargs": {
    "enable_thinking": true,
    "clear_thinking": true
  },
  "stream": false
}'
        options = [ordered]@{ timeout = 180000 }
      }
      id = 'http-kimi-1'; name = 'Call Kimi K2.5 (Workers AI)'; type = 'n8n-nodes-base.httpRequest'; typeVersion = 4.2; position = @(100, 300)
    },
    [ordered]@{
      parameters = [ordered]@{ keepOnlySet = $true; values = [ordered]@{ string = @(
        [ordered]@{ name = 'topic'; value = '={{$item(0).$node["Set Topic + Skill File"].json["topic"]}}' },
        [ordered]@{ name = 'model'; value = '={{$item(0).$node["Set Topic + Skill File"].json["target_model"]}}' },
        [ordered]@{ name = 'raw_response_text'; value = '={{$json.result.response || $json.result.output_text || ($json.choices && $json.choices[0] && $json.choices[0].message && $json.choices[0].message.content) || JSON.stringify($json)}}' }
      ) } }
      id = 'set-output-1'; name = 'Format Output'; type = 'n8n-nodes-base.set'; typeVersion = 2; position = @(350, 300)
    }
  )
  connections = [ordered]@{
    'Manual Trigger' = [ordered]@{ main = @(@([ordered]@{ node = 'Set Topic + Skill File'; type = 'main'; index = 0 }, [ordered]@{ node = 'Set Cloudflare Auth'; type = 'main'; index = 0 })) }
    'Set Topic + Skill File' = [ordered]@{ main = @(@([ordered]@{ node = 'Merge Input + Auth'; type = 'main'; index = 0 })) }
    'Set Cloudflare Auth' = [ordered]@{ main = @(@([ordered]@{ node = 'Merge Input + Auth'; type = 'main'; index = 1 })) }
    'Merge Input + Auth' = [ordered]@{ main = @(@([ordered]@{ node = 'Call Kimi K2.5 (Workers AI)'; type = 'main'; index = 0 })) }
    'Call Kimi K2.5 (Workers AI)' = [ordered]@{ main = @(@([ordered]@{ node = 'Format Output'; type = 'main'; index = 0 })) }
  }
  settings = [ordered]@{}
  staticData = $null
  pinData = [ordered]@{}
  active = $false
  tags = @()
}

$workflow | ConvertTo-Json -Depth 50 | Set-Content -LiteralPath $outPath -Encoding UTF8
Write-Output "Created: $outPath"
