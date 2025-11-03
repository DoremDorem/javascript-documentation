import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Loop() {
  return (
    <div className="min-h-screen p-6 ">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          🔁 JavaScript Loops — Complete Theory & Examples
        </h1>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧠 What Are Loops in JavaScript?
          </h2>
          <p className="leading-relaxed mb-3">
            In programming, a <strong>loop</strong> is a control structure that
            allows you to execute a block of code repeatedly until a certain
            condition is met. Loops help reduce code repetition and make
            programs more efficient and readable.
          </p>
          <p className="leading-relaxed mb-3">
            Imagine you want to print numbers from 1 to 100. Without loops,
            you’d have to write 100 lines of code! But with a loop, you can
            accomplish that with just 3–4 lines.
          </p>
          <p className="leading-relaxed">
            In JavaScript, loops are essential for tasks such as iterating over
            arrays, fetching multiple records from an API, validating forms,
            or updating UI elements dynamically.
          </p>
        </section>

        {/* HOW LOOPS WORK */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ⚙️ How Loops Work Internally
          </h2>
          <p className="leading-relaxed mb-3">
            Every loop has three main parts — an <strong>initialization</strong>,
            a <strong>condition</strong>, and an <strong>iteration</strong> (or
            increment/decrement).
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>
              <strong>Initialization:</strong> Sets the starting point of the loop (e.g. <code>let i = 1;</code>)
            </li>
            <li>
              <strong>Condition:</strong> Defines when the loop should continue or stop (e.g. <code>i &lt;= 5</code>)
            </li>
            <li>
              <strong>Iteration:</strong> Updates the loop variable after each run (e.g. <code>i++</code>)
            </li>
          </ul>
          <p className="leading-relaxed">
            The loop will run repeatedly as long as the condition is{" "}
            <code>true</code>. Once the condition becomes <code>false</code>,
            the loop stops.
          </p>
        </section>

        {/* FOR LOOP */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">📘 for Loop</h2>
          <p className="leading-relaxed mb-3">
            The <strong>for loop</strong> is used when you know exactly how many
            times you want to repeat an action. It’s commonly used for counting,
            iterating over arrays, or performing a fixed number of operations.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}`)}
              className="absolute top-2 right-2 bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}`}</SyntaxHighlighter>
          </div>

          <p className="leading-relaxed mb-3">
            🔍 Here, the loop starts with <code>i = 1</code> and keeps running
            until <code>i</code> becomes greater than 5. After each iteration,
            <code>i</code> increases by 1.
          </p>
          <p className="leading-relaxed">
            👉 Common Use: Running a fixed number of tasks like printing
            messages, generating sequences, or processing list items.
          </p>
        </section>

        {/* WHILE LOOP */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">📙 while Loop</h2>
          <p className="leading-relaxed mb-3">
            The <strong>while loop</strong> is used when you don’t know in
            advance how many times you need to repeat the action — you keep
            looping until a condition becomes false.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let count = 1;
while (count <= 3) {
  console.log("Count is:", count);
  count++;
}`)}
              className="absolute top-2 right-2 bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let count = 1;
while (count <= 3) {
  console.log("Count is:", count);
  count++;
}`}</SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            👉 Example: Keep checking if a user is online until they log out.
          </p>
        </section>

        {/* DO WHILE LOOP */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            📗 do...while Loop
          </h2>
          <p className="leading-relaxed mb-3">
            The <strong>do...while</strong> loop is similar to the{" "}
            <strong>while</strong> loop, except it runs the block at least once,
            even if the condition is false. This is because the condition is
            checked *after* the code block runs.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 3);`)}
              className="absolute top-2 right-2 bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 3);`}</SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            💡 Use Case: Getting valid user input at least once before checking its value.
          </p>
        </section>

        {/* FOR OF */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">📒 for...of Loop</h2>
          <p className="leading-relaxed mb-3">
            The <strong>for...of</strong> loop is used to iterate directly over
            iterable objects like arrays, strings, maps, or sets. It gives you
            values directly, not indexes.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log(fruit);
}`)}
              className="absolute top-2 right-2 bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
  console.log(fruit);
}`}</SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            ✅ Ideal for looping through arrays or collections when you only
            need the values, not their positions.
          </p>
        </section>

        {/* FOR IN */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">📕 for...in Loop</h2>
          <p className="leading-relaxed mb-3">
            The <strong>for...in</strong> loop iterates over the{" "}
            <strong>keys</strong> (property names) of an object.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const person = { name: "Akash", age: 22, city: "Delhi" };
for (const key in person) {
  console.log(key + ": " + person[key]);
}`)}
              className="absolute top-2 right-2 bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const person = { name: "Akash", age: 22, city: "Delhi" };
for (const key in person) {
  console.log(key + ": " + person[key]);
}`}</SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            💡 Great for reading data from JSON objects or configurations.
          </p>
        </section>

        {/* CONDITIONAL LOOP */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ⚙️ Conditional Loops
          </h2>
          <p className="leading-relaxed mb-3">
            A <strong>conditional loop</strong> continues to execute as long as
            a specific logical condition is true. These are very useful in
            situations like ATM withdrawals, login retries, or progress updates.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let balance = 1000;
while (balance > 0) {
  console.log("Remaining balance:", balance);
  balance -= 250;
}
console.log("Balance is empty!");`)}
              className="absolute top-2 right-2 bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let balance = 1000;
while (balance > 0) {
  console.log("Remaining balance:", balance);
  balance -= 250;
}
console.log("Balance is empty!");`}</SyntaxHighlighter>
          </div>
        </section>

        {/* REAL LIFE USE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            💼 Real-Life Example — Calculating Total Price
          </h2>
          <p className="leading-relaxed mb-3">
            Suppose we’re building an e-commerce website and we want to calculate
            the total cost of items in a shopping cart. Loops help process each
            item efficiently.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 25000 },
  { name: "Tablet", price: 30000 }
];

let total = 0;
for (const item of cart) {
  total += item.price;
}
console.log("Total Price:", total);`)}
              className="absolute top-2 right-2 bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 25000 },
  { name: "Tablet", price: 30000 }
];

let total = 0;
for (const item of cart) {
  total += item.price;
}
console.log("Total Price:", total);`}</SyntaxHighlighter>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="border-t border-slate-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🧾 Summary</h2>
          <ul className="list-disc list-inside leading-relaxed">
            <li><strong>for</strong> → Best when number of iterations is known.</li>
            <li><strong>while</strong> → Best for unknown repetitions until a condition fails.</li>
            <li><strong>do...while</strong> → Runs at least once, then checks condition.</li>
            <li><strong>for...of</strong> → Ideal for arrays and iterable values.</li>
            <li><strong>for...in</strong> → Used for object properties.</li>
            <li><strong>Conditional loops</strong> → Continue execution based on dynamic conditions.</li>
          </ul>
        </section>

        <footer className="text-center text-slate-400 border-t border-slate-700 pt-4 mt-10">
          © 2025 JavaScript Learning Hub | Built by Akash 🚀
        </footer>
      </div>
      <TopicNavigation />
    </div>
  );
}
