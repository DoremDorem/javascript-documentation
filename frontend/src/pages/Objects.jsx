import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

import TopicNavigation from "../components/TopicNavigation";

const code = `
// Creating and accessing objects
const person = {
  name: "Akash",
  age: 21,
  greet: function() {
    return "Hello " + this.name;
  }
};

console.log(person.greet()); // Hello Akash
`;

export default function Objects() {
  return (
    <div>
      <h1>🧱 JavaScript Objects</h1>
      <p>
        Objects are key-value pairs used to store structured data. 
        Each property can hold any type of value — including functions.
      </p>

      <SyntaxHighlighter language="javascript" style={oneDark}>
        {code}
      </SyntaxHighlighter>

      <p>
        You can access object properties using dot notation (<code>person.name</code>) or bracket notation (<code>person["name"]</code>).
      </p>

      <TopicNavigation />
    </div>
  );
}
