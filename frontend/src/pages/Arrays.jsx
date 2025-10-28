import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

import TopicNavigation from "../components/TopicNavigation";

const code = `
// Creating and using arrays
const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");

console.log(fruits.length); // 4
console.log(fruits[1]);     // Banana

fruits.forEach(fruit => console.log(fruit));
`;

export default function Arrays() {
  return (
    <div>
      <h1>🍏 Arrays in JavaScript</h1>
      <p>
        Arrays are ordered collections of values. You can store multiple items in a single variable.
      </p>

      <SyntaxHighlighter language="javascript" style={oneDark}>
        {code}
      </SyntaxHighlighter>

      <p>
        Arrays have many useful methods like <code>map()</code>, <code>filter()</code>, and <code>reduce()</code> that allow powerful data manipulation.
      </p>

      <TopicNavigation />
    </div>
  );
}
