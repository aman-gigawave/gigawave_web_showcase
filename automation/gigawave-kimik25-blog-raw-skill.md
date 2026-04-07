---
name: gigawave-kimik25-blog-raw-generator
description: Generate raw technical blog content in Gigawave style from any topic using strict tagged components. Use when the input is a topic (optionally with code snippets, references, or product context) and the output must follow Gigawave blog flow, tone, and reusable section tags for downstream automation.
---

# Gigawave Kimi/Kimik 2.5 Blog Raw Skill

## Goal
Create a full raw blog package for Gigawave that matches the existing style:
- practical and implementation-first
- developer pain point -> clear fix
- step-by-step explanation with usable snippets
- pro tips, best practices, resources, and concise close

The topic can change. The content architecture must stay consistent.

## Input Contract
Accept:
- `topic` (required)
- `target_stack` (optional; e.g., Flutter, Next.js, Node, AI)
- `audience_level` (optional; beginner/intermediate/advanced)
- `reference_code` (optional)
- `constraints` (optional; SEO keyword, word count range, CTA preference)

If optional fields are missing, infer sensible defaults from `topic`.

## Voice + Style Rules (Derived from Existing Gigawave Blogs)
1. Start with a concrete real-world dev problem, not theory.
2. Keep tone mentor-like, direct, and practical.
3. Prefer short sections with clear headings (`####` style).
4. Use "Step 1/2/3..." for implementation when suitable.
5. Include runnable or realistic code blocks with filename hints.
6. Add "Pro Tip" style callouts where they increase clarity.
7. Include best-practice bullets and edge-case notes.
8. End with useful resources + final takeaway.
9. Avoid fluff, generic hype, and vague claims.
10. Keep explanations grounded in tradeoffs (what you gain, what breaks if ignored).

## Mandatory Tagged Components
Every output must include all core components below exactly once unless marked optional.
Use these tags exactly as written so downstream systems can parse them.

`[GW_TAG_01_BLOG_IDENTITY]`
- title
- slug (kebab-case)
- primary topic keyword
- target stack

`[GW_TAG_02_SEO_METADATA]`
- seoTitle (55-65 chars ideal)
- metaDescription (140-160 chars ideal)
- suggestedTags (3-6)
- suggestedReadTime

`[GW_TAG_03_HERO_HOOK]`
- 1-2 paragraph hook based on a practical dev pain
- why this matters now

`[GW_TAG_04_CONTEXT_SETUP]`
- concise background
- assumptions/prerequisites

`[GW_TAG_05_PROBLEM_BREAKDOWN]`
- key failure points/pitfalls
- symptoms in real projects

`[GW_TAG_06_SOLUTION_OVERVIEW]`
- chosen approach
- why this approach over alternatives

`[GW_TAG_07_IMPLEMENTATION_STEPS]`
- step-by-step sections (`Step 1`, `Step 2`, ...)
- each step includes short explanation + actionable instruction

`[GW_TAG_08_CODE_SNIPPETS]`
- list of code blocks with:
  - `filename`
  - `language`
  - `purpose`
  - `code`

`[GW_TAG_09_CODE_EXPLANATION]`
- map important code lines/concepts to outcomes
- include at least one "what can go wrong" note

`[GW_TAG_10_VALIDATION_CHECKLIST]`
- quick checks to confirm implementation works
- include expected behavior/results

`[GW_TAG_11_EDGE_CASES]`
- non-happy paths
- fallback behavior

`[GW_TAG_12_BEST_PRACTICES]`
- concise do/don't bullets

`[GW_TAG_13_PRO_TIPS]`
- short advanced tips (2-5 bullets)

`[GW_TAG_14_RESOURCES]`
- official docs and high-signal references
- avoid low-quality sources

`[GW_TAG_15_FINAL_THOUGHTS]`
- clear conclusion
- practical next step for reader

`[GW_TAG_16_PREVIEW_CARD_DATA]`
- previewTitle
- previewDescription
- previewDateText
- previewReadTime
- previewTags

`[GW_TAG_17_IMAGE_PLAN]` (optional but preferred)
- hero image idea
- 2-4 inline visual ideas
- alt text intent for each

## Output Format (Strict)
Return content in this exact top-level order:
1. `[GW_TAG_01_BLOG_IDENTITY]`
2. `[GW_TAG_02_SEO_METADATA]`
3. `[GW_TAG_03_HERO_HOOK]`
4. `[GW_TAG_04_CONTEXT_SETUP]`
5. `[GW_TAG_05_PROBLEM_BREAKDOWN]`
6. `[GW_TAG_06_SOLUTION_OVERVIEW]`
7. `[GW_TAG_07_IMPLEMENTATION_STEPS]`
8. `[GW_TAG_08_CODE_SNIPPETS]`
9. `[GW_TAG_09_CODE_EXPLANATION]`
10. `[GW_TAG_10_VALIDATION_CHECKLIST]`
11. `[GW_TAG_11_EDGE_CASES]`
12. `[GW_TAG_12_BEST_PRACTICES]`
13. `[GW_TAG_13_PRO_TIPS]`
14. `[GW_TAG_14_RESOURCES]`
15. `[GW_TAG_15_FINAL_THOUGHTS]`
16. `[GW_TAG_16_PREVIEW_CARD_DATA]`
17. `[GW_TAG_17_IMAGE_PLAN]`

Do not omit tags. If a section is short, still include the tag with concise content.

## Quality Gate Before Final Output
Validate internally before returning:
1. All 17 tags exist in correct order.
2. Content is topic-specific (not template-like filler).
3. At least 2 meaningful code snippets for technical topics.
4. Best practices and edge cases are non-generic.
5. SEO fields are coherent with title and topic.
6. Final thoughts include one practical next action.

## Generation Prompt Template (for Kimi/Kimik 2.5)
Use this when invoking the model:

```text
You are generating raw technical blog content for Gigawave.
Follow the skill: gigawave-kimik25-blog-raw-generator.

Input:
- topic: {{TOPIC}}
- target_stack: {{STACK_OR_AUTO}}
- audience_level: {{LEVEL_OR_AUTO}}
- reference_code: {{OPTIONAL}}
- constraints: {{OPTIONAL}}

Rules:
- Follow the exact tagged component order and names.
- Keep tone practical, implementation-first, and developer-centric.
- Include concrete steps, realistic code, edge cases, and best practices.
- Avoid fluff and avoid generic high-level text.
- Ensure SEO metadata and preview data are production-ready.
```
