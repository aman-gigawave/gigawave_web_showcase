// components/LiveViewport.tsx
import React, { useEffect, useRef } from "react";

interface LiveViewportProps {
  code: string; // Combined HTML/CSS/JS code
  height?: number | string;
}

const LiveViewport = ({ code, height = 400 }: LiveViewportProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current?.contentWindow) return;

    // Inject code into iframe
    const doc = iframeRef.current.contentWindow.document;
    doc.open();
    doc.write(generatePreviewHtml(code));
    doc.close();
  }, [code]);

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <iframe
        ref={iframeRef}
        title="live-preview"
        sandbox="allow-scripts"
        className="w-full bg-white"
        style={{ height: typeof height === "number" ? `${height}px` : height }}
      />
    </div>
  );
};

// Helper function to generate full HTML document
const generatePreviewHtml = (code: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { 
        margin: 0; 
        padding: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    </style>
  </head>
  <body>
    ${code}
  </body>
</html>
`;

export default LiveViewport;
