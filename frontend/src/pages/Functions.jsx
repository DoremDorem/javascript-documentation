import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

const code = `
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Akash"));
`;

export default function Functions() {
  return (
    <div>
      <h1>Functions in JavaScript</h1>
      <p>
        Functions are reusable blocks of code that perform a specific task. You
        can define functions using <code>function</code> keyword or arrow syntax.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
