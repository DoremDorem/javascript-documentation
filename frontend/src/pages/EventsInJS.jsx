import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function EventsInJS() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          ⚡ JavaScript Events — Complete Guide
        </h1>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧠 What Are JavaScript Events?
          </h2>
          <p className="leading-relaxed mb-3">
            JavaScript <strong>events</strong> are actions or occurrences that
            happen in the browser — for example, when a user clicks a button,
            moves the mouse, presses a key, or submits a form.
          </p>
          <p className="leading-relaxed mb-3">
            The browser lets JavaScript “listen” for these events and run
            specific pieces of code when they happen. This is known as{" "}
            <strong>event handling</strong>. Events make web pages interactive,
            dynamic, and user-friendly.
          </p>
          <p className="leading-relaxed mb-3">
            In simple terms — <em>an event is something that happens, and JavaScript
            decides what to do when it happens.</em>
          </p>
        </section>

        {/* EVENT FLOW */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🌊 Event Flow in JavaScript
          </h2>
          <p className="leading-relaxed mb-3">
            When an event occurs in a web page (like clicking a button), it goes
            through two main phases:
          </p>
          <ul className="list-disc list-inside leading-relaxed mb-3">
            <li>
              <strong>Capturing Phase:</strong> The event moves from the window
              → document → parent → target element.
            </li>
            <li>
              <strong>Bubbling Phase:</strong> After reaching the target, it
              bubbles back up in reverse order.
            </li>
          </ul>
          <p className="leading-relaxed">
            Most of the time, developers handle the event in the{" "}
            <strong>bubbling phase</strong> (default), but you can choose to
            capture it as well.
          </p>
        </section>

        {/* EVENT HANDLING METHODS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧩 How to Handle Events
          </h2>
          <p className="leading-relaxed mb-3">
            There are three main ways to handle events in JavaScript:
          </p>
          <ol className="list-decimal list-inside leading-relaxed mb-3">
            <li><strong>Inline Event Handlers</strong> — Using attributes directly in HTML.</li>
            <li><strong>DOM Property Method</strong> — Assigning an event to an element property.</li>
            <li><strong>addEventListener()</strong> — The modern, recommended way to attach events.</li>
          </ol>

          {/* Example 1 */}
          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`<button onclick="greet()">Click Me</button>
<script>
function greet() {
  alert("Hello! Welcome to JavaScript Events 😊");
}
</script>`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`<button onclick="greet()">Click Me</button>
<script>
function greet() {
  alert("Hello! Welcome to JavaScript Events 😊");
}
</script>`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* TYPES OF EVENTS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🎯 Types of JavaScript Events
          </h2>

          <h3 className="text-xl font-semibold text-blue-200 mb-2">
            1️⃣ Mouse Events
          </h3>
          <p className="leading-relaxed mb-3">
            These occur when the user interacts with the mouse.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li><code>onclick</code> – When an element is clicked.</li>
            <li><code>ondblclick</code> – On double-click.</li>
            <li><code>onmouseover</code> – Mouse pointer moves over an element.</li>
            <li><code>onmouseout</code> – Pointer leaves an element.</li>
          </ul>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`document.querySelector("button").onclick = () => {
  console.log("Button clicked!");
};`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`document.querySelector("button").onclick = () => {
  console.log("Button clicked!");
};`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-xl font-semibold text-blue-200 mb-2">
            2️⃣ Keyboard Events
          </h3>
          <p className="leading-relaxed mb-3">
            These events occur when a user presses or releases a key.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li><code>onkeydown</code> – When a key is pressed down.</li>
            <li><code>onkeyup</code> – When a key is released.</li>
            <li><code>onkeypress</code> – While a key is being pressed.</li>
          </ul>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-xl font-semibold text-blue-200 mb-2">
            3️⃣ Form Events
          </h3>
          <p className="leading-relaxed mb-3">
            These are triggered when users interact with HTML forms.
          </p>
          <ul className="list-disc list-inside mb-3">
            <li><code>onsubmit</code> – When a form is submitted.</li>
            <li><code>onchange</code> – When the value of an input changes.</li>
            <li><code>onfocus</code> – When an input gets focus.</li>
            <li><code>onblur</code> – When input loses focus.</li>
          </ul>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`<form id="loginForm">
  <input type="text" id="username" placeholder="Enter username">
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
</script>`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`<form id="loginForm">
  <input type="text" id="username" placeholder="Enter username">
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
</script>`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* REAL-WORLD EXAMPLE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🌍 Real-World Use Case: Login Validation
          </h2>
          <p className="leading-relaxed mb-3">
            Events are the foundation of interactive websites. For example, in a
            login page, events detect when the user submits a form, presses a
            key, or clicks a button — allowing you to validate inputs, give
            feedback, and update the interface instantly.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`document.querySelector("#loginBtn").addEventListener("click", () => {
  const username = document.querySelector("#user").value;
  if (username.trim() === "") {
    alert("Please enter your username.");
  } else {
    alert("Welcome, " + username + "!");
  }
});`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`document.querySelector("#loginBtn").addEventListener("click", () => {
  const username = document.querySelector("#user").value;
  if (username.trim() === "") {
    alert("Please enter your username.");
  } else {
    alert("Welcome, " + username + "!");
  }
});`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="mb-10 border-t border-slate-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧾 Summary
          </h2>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Events are actions like clicks, keypresses, or form submissions.</li>
            <li>Handled using inline, property, or <code>addEventListener()</code> methods.</li>
            <li>Different categories: Mouse, Keyboard, Form, Window, etc.</li>
            <li>Essential for creating dynamic, interactive web experiences.</li>
            <li>Used in forms, validation, animations, navigation, and games.</li>
          </ul>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-slate-400 border-t border-slate-700 pt-4 mt-10">
          © 2025 JavaScript Docs | Built by Akash 🚀
        </footer>
      </div>

      <TopicNavigation />
    </div>
  );
}
