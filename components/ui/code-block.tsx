"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Copy , CopyCheckIcon} from "lucide-react";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div
      className="relative w-full h-auto rounded-xl border shadow-xl p-2  text-sm transition-all duration-300 hover:shadow-2xl overflow-hidden mb-4"
      style={{
        background:
          "linear-gradient(120deg, rgba(24,24,28,0.95) 0%, rgba(36,37,42,0.92) 100%)",
        border: "1.5px solid rgba(200,200,255,0.13)",
        boxShadow:
          "0 4px 32px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.12)",
        backdropFilter: "blur(12px) saturate(160%)",
      }}
    >
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex overflow-x-auto rounded-xl bg-black/30 p-1 mb-2 border border-white/10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors font-sans focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:z-10 backdrop-blur-md border border-transparent ${
                  activeTab === index
                    ? "bg-white/10 text-blue-300 shadow-sm border-blue-300/30"
                    : "text-zinc-300 hover:bg-white/5"
                }`}
                style={{
                  marginRight: index !== tabs.length - 1 ? "0.5rem" : 0,
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex items-center py-2 px-2 rounded-xl bg-black/30 border border-white/10 mb-2">
            <ul className="flex gap-x-1.5">
              <li className="w-3 h-3 rounded-full bg-red-400" />
              <li className="w-3 h-3 rounded-full bg-yellow-300" />
              <li className="w-3 h-3 rounded-full bg-green-400" />
            </ul>
            <div className="text-xs text-zinc-400 font-mono tracking-wide text-start flex-1 mx-4">
              {filename}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-xs text-zinc-400 hover:text-blue-300 transition-colors font-sans px-2 py-1 rounded-lg bg-white/5 border border-white/10 hover:bg-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              >
                {copied ? <CopyCheckIcon size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: 10,
            paddingBottom: 20,
            background: "transparent",
            fontSize: "0.95rem",
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: activeHighlightLines.includes(lineNumber)
                ? "rgba(59,130,246,0.10)"
                : "transparent",
              display: "block",
              width: "100%",
              borderLeft: activeHighlightLines.includes(lineNumber)
                ? "3px solid #60a5fa"
                : "3px solid transparent",
              transition: "background 0.2s, border-color 0.2s",
            },
          })}
          PreTag="div"
        >
          {String(activeCode)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
