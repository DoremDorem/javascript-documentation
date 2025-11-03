import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function DOMInJS() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          🌐 JavaScript DOM (Document Object Model)
        </h1>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧠 What is the DOM?
          </h2>
          <p className="leading-relaxed mb-3">
            The <strong>DOM (Document Object Model)</strong> is a programming
            interface for web documents. It represents the structure of an HTML
            page as a <strong>tree of objects</strong>, where each element (like
            <code> &lt;div&gt; </code>, <code>&lt;p&gt;</code>, or
            <code>&lt;button&gt;</code>) becomes a node that JavaScript can
            access and manipulate.
          </p>
          <p className="leading-relaxed mb-3">
            In simple words, the DOM lets JavaScript **interact with the web
            page** — you can read, change, add, or delete elements and their
            contents dynamically.
          </p>
          <p className="leading-relaxed">
            Every time the browser loads a webpage, it creates a DOM tree. This
            allows scripts to make live updates without reloading the entire
            page.
          </p>
        </section>

        {/* DOM TREE VISUALIZATION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🌳 DOM Tree Structure
          </h2>
          <p className="leading-relaxed mb-3">
            The HTML structure is converted into a tree-like representation
            called the <strong>DOM Tree</strong>.
          </p>
          <p className="leading-relaxed mb-3">
            Example:
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome</h1>
    <p>Hello, World!</p>
  </body>
</html>`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="html" style={oneDark} showLineNumbers>
{`<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome</h1>
    <p>Hello, World!</p>
  </body>
</html>`}
            </SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            The DOM tree would look like this:
          </p>
          <ul className="list-disc list-inside leading-relaxed mt-2">
            <li><strong>Document</strong></li>
            <ul className="list-disc ml-6">
              <li>HTML</li>
              <ul className="list-disc ml-6">
                <li>BODY</li>
                <ul className="list-disc ml-6">
                  <li>H1 → “Welcome”</li>
                  <li>P → “Hello, World!”</li>
                </ul>
              </ul>
            </ul>
          </ul>
        </section>

        {/* ACCESSING ELEMENTS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🔍 Accessing Elements in the DOM
          </h2>
          <p className="leading-relaxed mb-3">
            You can access HTML elements using several DOM methods. These allow
            JavaScript to find and manipulate specific parts of the page.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`document.getElementById("idName");
document.getElementsByClassName("className");
document.getElementsByTagName("p");
document.querySelector(".myClass");
document.querySelectorAll("div");`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`document.getElementById("idName");
document.getElementsByClassName("className");
document.getElementsByTagName("p");
document.querySelector(".myClass");
document.querySelectorAll("div");`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* MODIFYING ELEMENTS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ✏️ Modifying HTML Elements
          </h2>
          <p className="leading-relaxed mb-3">
            Once an element is selected, you can change its text, HTML content,
            style, or attributes using DOM properties.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let heading = document.getElementById("title");
heading.innerText = "Hello DOM!";
heading.style.color = "blue";`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let heading = document.getElementById("title");
heading.innerText = "Hello DOM!";
heading.style.color = "blue";`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* CREATING AND REMOVING ELEMENTS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧱 Creating & Removing Elements
          </h2>
          <p className="leading-relaxed mb-3">
            You can dynamically create new HTML elements or remove existing ones
            using DOM methods like <code>createElement()</code> and{" "}
            <code>remove()</code>.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);

newPara.remove(); // Removes the element`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph.";
document.body.appendChild(newPara);

newPara.remove(); // Removes the element`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* EVENT + DOM INTERACTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ⚡ DOM + Events Example
          </h2>
          <p className="leading-relaxed mb-3">
            DOM and events often work together — for example, changing an
            element when a button is clicked.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`<button id="btn">Click Me</button>
<p id="msg">Hello!</p>

<script>
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("msg").innerText = "You clicked the button!";
});
</script>`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="html" style={oneDark} showLineNumbers>
{`<button id="btn">Click Me</button>
<p id="msg">Hello!</p>

<script>
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("msg").innerText = "You clicked the button!";
});
</script>`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* REAL-WORLD USE CASE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            💼 Real-World Use Case
          </h2>
          <p className="leading-relaxed mb-3">
            The DOM is used in almost every interactive website — examples
            include:
          </p>
          <ul className="list-disc list-inside leading-relaxed">
            <li>Form validation and dynamic error messages.</li>
            <li>Live search results and filtering lists.</li>
            <li>Dark mode toggling and UI customization.</li>
            <li>Dynamic content updates without reloading (AJAX / SPA).</li>
          </ul>
        </section>

        {/* SUMMARY */}
        <section className="mb-10 border-t border-slate-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧾 Summary
          </h2>
          <ul className="list-disc list-inside leading-relaxed">
            <li>The DOM represents an HTML document as a tree structure.</li>
            <li>Each element is a node that can be accessed or modified.</li>
            <li>Use <code>getElementById</code> or <code>querySelector</code> to find elements.</li>
            <li>Change content with <code>innerText</code> or <code>innerHTML</code>.</li>
            <li>Create, append, or remove elements dynamically.</li>
            <li>DOM + Events = interactive, modern web experiences.</li>
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
