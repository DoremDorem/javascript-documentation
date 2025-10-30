import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

// ✅ Example Codes
const example1 = `
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Akash")); // Output: Hello, Akash!
`;

const example2 = `
// Function Expression
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // 8
`;

const arrowExample = `
// Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // 20
`;

const defaultParamExample = `
// Default Parameters
function greetUser(name = "Guest") {
  return \`Welcome, \${name}!\`;
}
console.log(greetUser());       // Welcome, Guest!
console.log(greetUser("Akash"));// Welcome, Akash!
`;

const returnExample = `
// Return Statement
function square(num) {
  return num * num;
}
const result = square(6);
console.log(result); // 36
`;

const callbackExample = `
// Callback Function
function processUserInput(callback) {
  const name = "Akash";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hello, " + name);
});
`;

const iifeExample = `
// IIFE Example
(function() {
  console.log("This function runs immediately!");
})();
`;

const hoistingExample = `
// Function Hoisting
sayHello();
function sayHello() {
  console.log("Hello before declaration!");
}
`;



const hofIntroExample = `
// Example of Higher-Order Function
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(operate(5, 3, add)); // 8
`;

// --- Individual HOF Examples ---
const mapExample = `
// 🗺️ map() - transforms each element of an array
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
`;

const filterExample = `
// 🔍 filter() - filters elements based on a condition
const numbers = [10, 25, 30, 45, 50];
const above30 = numbers.filter(num => num > 30);
console.log(above30); // [45, 50]
`;

const reduceExample = `
// ➕ reduce() - reduces array to a single value
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 15
`;

const forEachExample = `
// 🔁 forEach() - executes function for each array element
const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log("I like", fruit));
`;

const findExample = `
// 🔎 find() - returns first element that matches a condition
const users = [
  { id: 1, name: "Akash" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" },
];
const found = users.find(user => user.name === "Rahul");
console.log(found); // { id: 2, name: "Rahul" }
`;



const scenario1 = `
// 🧮 1. Function for Calculating Discount
function calculateDiscount(price, discountPercent) {
  const discount = (price * discountPercent) / 100;
  return price - discount;
}

console.log(calculateDiscount(1000, 10)); // 900
`;

const scenario2 = `
// 📅 2. Function to Format Dates
function formatDate(date) {
  const d = new Date(date);
  return \`\${d.getDate()}-\${d.getMonth() + 1}-\${d.getFullYear()}\`;
}

console.log(formatDate("2025-10-30")); // 30-10-2025
`;

const scenario3 = `
// 💬 3. Function to Capitalize User Input
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("akash")); // Akash
`;

const scenario4 = `
// 🧭 4. Function for Filtering Data (Higher-Order Function)
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
`;

const scenario5 = `
// 🔁 5. Function for Fetching API Data (Async Function)
async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  console.log("User Name:", user.name);
}
fetchUser();
`;

export default function Functions() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          Functions in JavaScript
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧠 Introduction
          </h2>
          <p className="leading-relaxed">
            A <strong>function</strong> in JavaScript is a reusable block of code designed to
            perform a specific task. You can define a function using the
            <code className="px-1 rounded"> function </code> keyword or using
            <code className="px-1 rounded"> arrow syntax (() =&gt; )</code>.
            Functions make your code modular, reusable, and organized.
          </p>
        </section>

        {/* Basic Function */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-300 mb-2">
            📘 Basic Function Example
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {example1}
          </SyntaxHighlighter>
        </section>

        {/* Syntax */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧩 Function Syntax
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Function Declaration</li>
            <li>Function Expression</li>
            <li>Arrow Function</li>
            <li>Anonymous Function</li>
            <li>Callback Function</li>
            <li>IIFE (Immediately Invoked Function Expression)</li>
          </ul>
        </section>

        {/* Function Expression */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-300 mb-2">
            ⚙️ Function Expression
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {example2}
          </SyntaxHighlighter>
        </section>

        {/* Arrow Functions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🚀 Arrow Functions
          </h2>
          <p className="leading-relaxed mb-3">
            Introduced in <strong>ES6</strong>, arrow functions provide a shorter syntax.
            They don’t have their own <code>this</code> or <code>arguments</code>.
            Perfect for short, one-line operations.
          </p>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {arrowExample}
          </SyntaxHighlighter>
        </section>

        {/* Default Parameters */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🎯 Default Parameters
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {defaultParamExample}
          </SyntaxHighlighter>
        </section>

        {/* Return Statement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🔁 Return Statement
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {returnExample}
          </SyntaxHighlighter>
        </section>

        {/* Callback */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            📞 Callback Functions
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {callbackExample}
          </SyntaxHighlighter>
        </section>

        {/* IIFE */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ⚡ IIFE (Immediately Invoked Function Expression)
          </h2>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {iifeExample}
          </SyntaxHighlighter>
        </section>


         {/* 💡 Higher Order Functions Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-300 mb-3">
            ⚡ Higher-Order Functions (HOFs)
          </h2>
          <p className="leading-relaxed mb-3">
            A <strong>Higher-Order Function</strong> is a function that can take another function
            as an argument or return a function as its result.  
            In JavaScript, functions are treated as <strong>first-class citizens</strong>, meaning they
            can be assigned to variables, passed as arguments, and returned from other functions.
          </p>

          <p className="leading-relaxed mb-3">
            Common examples of Higher-Order Functions in JavaScript are:
            <code className="px-1 rounded"> map()</code>,{" "}
            <code className="px-1 rounded"> filter()</code>,{" "}
            <code className="px-1 rounded"> reduce()</code>,{" "}
            <code className="px-1 rounded"> forEach()</code>, and{" "}
            <code className="px-1 rounded"> find()</code>.
          </p>

          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {hofIntroExample}
          </SyntaxHighlighter>

          {/* map() */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">🗺️ map()</h3>
            <p className="leading-relaxed mb-3">
              The <code>map()</code> function is used to transform each element of an array and
              return a new array with the transformed results.
            </p>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
              {mapExample}
            </SyntaxHighlighter>
          </div>

          {/* filter() */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">🔍 filter()</h3>
            <p className="leading-relaxed mb-3">
              The <code>filter()</code> function creates a new array containing all elements that
              pass a specific condition (returns true).
            </p>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
              {filterExample}
            </SyntaxHighlighter>
          </div>

          {/* reduce() */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">➕ reduce()</h3>
            <p className="leading-relaxed mb-3">
              The <code>reduce()</code> function reduces an array to a single value by repeatedly
              applying a callback function to each element. It’s powerful for performing sums,
              averages, and complex data transformations.
            </p>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
              {reduceExample}
            </SyntaxHighlighter>
          </div>

          {/* forEach() */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">🔁 forEach()</h3>
            <p className="leading-relaxed mb-3">
              The <code>forEach()</code> function executes a provided function once for each
              element in the array. It does not return a new array.
            </p>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
              {forEachExample}
            </SyntaxHighlighter>
          </div>

          {/* find() */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">🔎 find()</h3>
            <p className="leading-relaxed mb-3">
              The <code>find()</code> function returns the <strong>first element</strong> in the array
              that satisfies the given condition. If no element matches, it returns{" "}
              <code>undefined</code>.
            </p>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
              {findExample}
            </SyntaxHighlighter>
          </div>

          {/* Summary */}
          <div className="mt-8 p-4 border border-slate-700 rounded-lg bg-slate-800">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">
              🧾 Summary of HOFs
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><strong>map()</strong> → Transform each element of an array.</li>
              <li><strong>filter()</strong> → Keep only the elements that pass a condition.</li>
              <li><strong>reduce()</strong> → Combine all elements into a single result.</li>
              <li><strong>forEach()</strong> → Execute a side effect for each element (no return).</li>
              <li><strong>find()</strong> → Get the first element that matches a condition.</li>
            </ul>
          </div>
        </section>





        {/* 🎯 Real-World Use Scenarios */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            💼 Real-World Use Scenarios
          </h2>
          <p className="leading-relaxed mb-4">
            Let's explore how functions are used in real-world JavaScript applications:
          </p>

          <h3 className="text-xl font-semibold text-blue-300 mb-2">🧮 Calculate Discount</h3>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {scenario1}
          </SyntaxHighlighter>

          <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">📅 Format Date</h3>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {scenario2}
          </SyntaxHighlighter>

          <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">💬 Capitalize Input</h3>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {scenario3}
          </SyntaxHighlighter>

          <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">🧭 Filter Data</h3>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {scenario4}
          </SyntaxHighlighter>

          <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">🔁 Async Function (API Fetch)</h3>
          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
            {scenario5}
          </SyntaxHighlighter>
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
