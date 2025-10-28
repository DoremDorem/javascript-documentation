import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

import TopicNavigation from "../components/TopicNavigation";

const code = `
// ES6 Features Examples

// Arrow Function
const add = (a, b) => a + b;

// Template Literals
const name = "Akash";
console.log(\`Hello, \${name}!\`);

// Destructuring
const user = { id: 1, username: "jsdev" };
const { id, username } = user;

// Spread Operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
`;

export default function ES6Features() {
  return (
    <div>
      <h1>⚙️ ES6 (ECMAScript 2015) Features</h1>
      <p>
        ES6 introduced several new features to JavaScript that make coding cleaner and more powerful.
      </p>

      <SyntaxHighlighter language="javascript" style={oneDark}>
        {code}
      </SyntaxHighlighter>

      <ul>
        <li>Arrow Functions → shorter syntax for functions.</li>
        <li>Template Literals → embed variables in strings easily.</li>
        <li>Destructuring → unpack values from objects or arrays.</li>
        <li>Spread Operator → expand arrays and objects efficiently.</li>
      </ul>

      <TopicNavigation />
    </div>
  );
}
