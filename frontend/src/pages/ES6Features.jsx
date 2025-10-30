import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function ES6Features() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          ⚙️ ES6 (ECMAScript 2015) Features
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          ES6, or ECMAScript 2015, brought revolutionary updates to JavaScript that made the
          language more powerful, readable, and developer-friendly. It introduced features
          like <strong>arrow functions</strong>, <strong>template literals</strong>,
          <strong>destructuring</strong>, <strong>spread/rest operators</strong>, and
          <strong>modules</strong>, all of which simplified coding and improved performance.
        </p>

        {/* 1️⃣ Arrow Functions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">➡️ Arrow Functions</h2>
          <p className="leading-relaxed mb-3">
            Arrow functions provide a cleaner and shorter syntax for defining functions.
            Unlike traditional functions, they do not have their own <code>this</code> context,
            which makes them perfect for callbacks or array methods like <code>map()</code> and
            <code>filter()</code>. They are also more readable and reduce boilerplate code.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]`}
            </SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            👉 Arrow functions make code concise and avoid issues related to <code>this</code>
            binding inside methods or callbacks.
          </p>
        </section>

        {/* 2️⃣ Template Literals */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🧱 Template Literals</h2>
          <p className="leading-relaxed mb-3">
            Template literals (backticks <code>`</code>) allow embedding variables and expressions
            inside strings easily using <code>${"{ }"}</code>. They support multi-line strings
            without needing concatenation, making dynamic text creation much cleaner.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const name = "Akash";
const age = 21;
console.log(\`Hello, my name is \${name} and I am \${age} years old.\`);

const multiline = \`
This is line one.
This is line two.
\`;
console.log(multiline);`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const name = "Akash";
const age = 21;
console.log(\`Hello, my name is \${name} and I am \${age} years old.\`);

const multiline = \`
This is line one.
This is line two.
\`;
console.log(multiline);`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* 3️⃣ Destructuring */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🧩 Destructuring</h2>
          <p className="leading-relaxed mb-3">
            Destructuring allows you to extract values from arrays or properties from objects
            into separate variables. This reduces redundancy and improves readability.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`// Object Destructuring
const user = { id: 1, name: "Akash", city: "Delhi" };
const { name, city } = user;
console.log(name, city); // Akash Delhi

// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second); // red green`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`// Object Destructuring
const user = { id: 1, name: "Akash", city: "Delhi" };
const { name, city } = user;
console.log(name, city); // Akash Delhi

// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second); // red green`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* 4️⃣ Spread and Rest Operators */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🌈 Spread & Rest Operators
          </h2>
          <p className="leading-relaxed mb-3">
            The <code>...</code> (spread) operator expands arrays or objects into individual
            elements. The <strong>rest</strong> operator collects multiple elements into one
            variable. These make copying, merging, and parameter handling simple and elegant.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`// Spread Operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Rest Operator
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`// Spread Operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Rest Operator
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* 5️⃣ Default Parameters */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧮 Default Parameters
          </h2>
          <p className="leading-relaxed mb-3">
            Default parameters allow you to set fallback values for function arguments if no
            value is passed. This avoids undefined errors and makes your functions more
            robust.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet(); // Hello, Guest
greet("Akash"); // Hello, Akash`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet(); // Hello, Guest
greet("Akash"); // Hello, Akash`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* 6️⃣ Let, Const & Block Scope */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🔒 Let, Const & Block Scope
          </h2>
          <p className="leading-relaxed mb-3">
            ES6 introduced <code>let</code> and <code>const</code> as replacements for
            <code>var</code>. Variables declared with <code>let</code> or <code>const</code> are
            block-scoped and cannot be redeclared in the same scope. <code>const</code> is used
            for constants whose value should not be reassigned.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let x = 10;
if (true) {
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 10

const PI = 3.14;
// PI = 3.15; ❌ Error: Assignment to constant variable`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let x = 10;
if (true) {
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 10

const PI = 3.14;
// PI = 3.15; ❌ Error: Assignment to constant variable`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* 7️⃣ Modules */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">📦 Modules (import/export)</h2>
          <p className="leading-relaxed mb-3">
            ES6 introduced native module support, allowing you to split your code into multiple
            files and reuse functionality using <code>export</code> and <code>import</code>.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`// utils.js
export const add = (a, b) => a + b;

// main.js
import { add } from './utils.js';
console.log(add(5, 10)); // 15`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`// utils.js
export const add = (a, b) => a + b;

// main.js
import { add } from './utils.js';
console.log(add(5, 10)); // 15`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* 8️⃣ Promises and Async/Await */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">⚡ Promises & Async/Await</h2>
          <p className="leading-relaxed mb-3">
            Promises and <code>async/await</code> simplify asynchronous programming in JavaScript.
            A Promise represents a value that may be available now, later, or never. Using
            <code>async</code> and <code>await</code> makes asynchronous code look synchronous.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
};

async function showData() {
  const data = await fetchData();
  console.log(data);
}

showData(); // Output after 2 sec: Data fetched!`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
};

async function showData() {
  const data = await fetchData();
  console.log(data);
}

showData(); // Output after 2 sec: Data fetched!`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-400 border-t border-slate-700 pt-4 mt-10">
          © 2025 JavaScript Docs | Built by Akash 🚀
        </footer>
      </div>

      <TopicNavigation />
    </div>
  );
}
