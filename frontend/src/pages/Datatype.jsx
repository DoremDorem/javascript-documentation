import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function DataType() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          💡 JavaScript Data Types
        </h1>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧠 Introduction to Data Types
          </h2>
          <p className="leading-relaxed mb-3">
            JavaScript is a <strong>dynamically typed</strong> language — this means you don’t have to specify a variable’s data type explicitly. 
            The type of a variable is determined automatically when you assign a value to it.
          </p>
          <p className="leading-relaxed mb-3">
            Data types define the kind of value a variable can hold. They help JavaScript engines decide how to handle and operate on data efficiently.
          </p>
        </section>

        {/* TYPES OVERVIEW */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🔹 JavaScript Data Type Categories
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Primitive Types:</strong> String, Number, Boolean, Undefined, Null, Symbol, BigInt</li>
            <li><strong>Non-Primitive (Reference) Types:</strong> Object, Array, Function, Date, etc.</li>
          </ul>
        </section>

        {/* PRIMITIVE TYPES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧩 Primitive Data Types
          </h2>

          {/* String */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">1️⃣ String</h3>
          <p className="mb-3">
            Strings represent text and are written inside quotes (<code>''</code>, <code>""</code>, or <code>``</code>).
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let name = "Akash";
let message = \`Hello, \${name}!\`;
console.log(message); // Hello, Akash!`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let name = "Akash";
let message = \`Hello, \${name}!\`;
console.log(message); // Hello, Akash!`}
            </SyntaxHighlighter>
          </div>

          {/* Number */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">2️⃣ Number</h3>
          <p className="mb-3">
            Numbers include both integers and floating-point values.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let age = 25;
let price = 199.99;
let sum = age + price;
console.log(sum); // 224.99`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let age = 25;
let price = 199.99;
let sum = age + price;
console.log(sum); // 224.99`}
            </SyntaxHighlighter>
          </div>

          {/* Boolean */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">3️⃣ Boolean</h3>
          <p className="mb-3">
            Boolean represents logical values — <code>true</code> or <code>false</code>.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let isLoggedIn = true;
if (isLoggedIn) console.log("Welcome back!");`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let isLoggedIn = true;
if (isLoggedIn) console.log("Welcome back!");`}
            </SyntaxHighlighter>
          </div>

          {/* Undefined */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">4️⃣ Undefined</h3>
          <p className="mb-3">
            A variable declared but not assigned any value is <code>undefined</code>.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let city;
console.log(city); // undefined`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let city;
console.log(city); // undefined`}
            </SyntaxHighlighter>
          </div>

          {/* Null */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">5️⃣ Null</h3>
          <p className="mb-3">
            <code>null</code> is an intentional empty value. It represents “nothing”.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let result = null;
console.log(result); // null`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let result = null;
console.log(result); // null`}
            </SyntaxHighlighter>
          </div>

          {/* Symbol */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">6️⃣ Symbol</h3>
          <p className="mb-3">
            Symbols are unique identifiers, often used as object keys to avoid naming conflicts.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false`}
            </SyntaxHighlighter>
          </div>

          {/* BigInt */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">7️⃣ BigInt</h3>
          <p className="mb-3">
            BigInt is used for handling numbers larger than <code>2^53 - 1</code>.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let big = 9007199254740991n;
console.log(big + 10n); // 9007199254741001n`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let big = 9007199254740991n;
console.log(big + 10n); // 9007199254741001n`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* NON-PRIMITIVE TYPES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ⚙️ Non-Primitive (Reference) Data Types
          </h2>
          <p className="leading-relaxed mb-3">
            Non-primitive types hold references (memory addresses) of data instead of values themselves.
            Examples include objects, arrays, and functions.
          </p>

          {/* Object Example */}
          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const person = { name: "Akash", age: 21 };
console.log(person.name); // Akash`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const person = { name: "Akash", age: 21 };
console.log(person.name); // Akash`}
            </SyntaxHighlighter>
          </div>

          {/* Array Example */}
          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const colors = ["red", "green", "blue"];
console.log(colors[1]); // green`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const colors = ["red", "green", "blue"];
console.log(colors[1]); // green`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* TYPE CHECKING */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🔍 Checking Data Types
          </h2>
          <p className="leading-relaxed mb-3">
            You can check the type of a value using the <code>typeof</code> operator.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof null); // object (quirk)
console.log(typeof undefined); // undefined`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`console.log(typeof "Hello"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof null); // object (quirk)
console.log(typeof undefined); // undefined`}
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
