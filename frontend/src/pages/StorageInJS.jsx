import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function StorageInJS() {
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          🗂️ LocalStorage, SessionStorage & Cookies in JavaScript
        </h1>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            📖 Introduction
          </h2>
          <p className="leading-relaxed mb-3">
            In modern web development, we often need to store small pieces of data
            directly inside the user's browser — such as user preferences, login
            status, or form data. JavaScript provides three main mechanisms for
            browser-based storage: <strong>localStorage</strong>,{" "}
            <strong>sessionStorage</strong>, and <strong>cookies</strong>.
          </p>
          <p>
            These storage options allow your applications to remember user data
            across page reloads, browser sessions, or even communicate with the
            server for authentication.
          </p>
        </section>

        {/* LOCALSTORAGE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-3">
            1️⃣ localStorage
          </h2>
          <p className="leading-relaxed mb-3">
            <strong>localStorage</strong> allows you to store key-value pairs in
            a web browser permanently. Data persists even after the browser is
            closed or the computer is restarted.
          </p>

          <h3 className="text-xl font-semibold text-blue-300 mb-2">🔧 Syntax:</h3>
          <div className="relative mb-4">
            <button
              onClick={() =>
                handleCopy(`localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();`)
              }
              className="absolute top-2 right-2 bg-blue-600 px-3 py-1 rounded text-sm"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");
localStorage.clear();`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-xl font-semibold text-blue-300 mb-2">
            💡 Example:
          </h3>
          <div className="relative mb-4">
            <button
              onClick={() =>
                handleCopy(`localStorage.setItem("username", "Akash");
let name = localStorage.getItem("username");
console.log(name); // Akash
localStorage.removeItem("username");`)
              }
              className="absolute top-2 right-2 bg-blue-600 px-3 py-1 rounded text-sm"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`localStorage.setItem("username", "Akash");
let name = localStorage.getItem("username");
console.log(name); // Akash
localStorage.removeItem("username");`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-xl font-semibold text-blue-300 mb-2">
            🧩 Real-World Use Case:
          </h3>
          <p>Saving user theme (dark/light mode):</p>
          <div className="relative mb-4">
            <button
              onClick={() =>
                handleCopy(`function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

window.onload = function () {
  const theme = localStorage.getItem("theme");
  document.body.className = theme || "light";
};`)
              }
              className="absolute top-2 right-2 bg-blue-600 px-3 py-1 rounded text-sm"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

window.onload = function () {
  const theme = localStorage.getItem("theme");
  document.body.className = theme || "light";
};`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* SESSION STORAGE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            2️⃣ sessionStorage
          </h2>
          <p className="leading-relaxed mb-3">
            <strong>sessionStorage</strong> works similar to localStorage, but
            the data is cleared when the tab or browser window is closed.
          </p>

          <h3 className="text-xl font-semibold text-blue-300 mb-2">💡 Example:</h3>
          <div className="relative mb-4">
            <button
              onClick={() =>
                handleCopy(`sessionStorage.setItem("page", "home");
let currentPage = sessionStorage.getItem("page");
console.log(currentPage); // home`)
              }
              className="absolute top-2 right-2 bg-yellow-600 px-3 py-1 rounded text-sm"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`sessionStorage.setItem("page", "home");
let currentPage = sessionStorage.getItem("page");
console.log(currentPage); // home`}
            </SyntaxHighlighter>
          </div>

          <p>
            🧩 <strong>Use Case:</strong> Temporary storage for items like form
            inputs, cart data, or session state that should reset when the user
            closes the tab.
          </p>
        </section>

        {/* COOKIES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-pink-400 mb-3">
            3️⃣ Cookies
          </h2>
          <p className="leading-relaxed mb-3">
            Cookies are small pieces of data stored in the browser and sent to
            the server with every request. They are mainly used for authentication,
            analytics, and saving user preferences.
          </p>

          <h3 className="text-xl font-semibold text-blue-300 mb-2">💡 Example:</h3>
          <div className="relative mb-4">
            <button
              onClick={() =>
                handleCopy(`document.cookie = "username=Akash; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
console.log(document.cookie);
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`)
              }
              className="absolute top-2 right-2 bg-pink-600 px-3 py-1 rounded text-sm"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`document.cookie = "username=Akash; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
console.log(document.cookie);
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`}
            </SyntaxHighlighter>
          </div>

          <p>
            🧩 <strong>Use Case:</strong> “Remember Me” login options, storing
            session tokens, or tracking site analytics.
          </p>
        </section>

        {/* COMPARISON */}
        <section className="mb-10 border-t border-slate-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ⚖️ Comparison Table
          </h2>
          <table className="w-full text-left border border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-slate-800 text-slate-200">
              <tr>
                <th className="p-3 border border-slate-700">Feature</th>
                <th className="p-3 border border-slate-700">localStorage</th>
                <th className="p-3 border border-slate-700">sessionStorage</th>
                <th className="p-3 border border-slate-700">Cookies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-slate-700">Lifetime</td>
                <td className="p-3 border border-slate-700">Permanent</td>
                <td className="p-3 border border-slate-700">Until tab closes</td>
                <td className="p-3 border border-slate-700">Set by expiry</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-700">Size Limit</td>
                <td className="p-3 border border-slate-700">~5–10 MB</td>
                <td className="p-3 border border-slate-700">~5 MB</td>
                <td className="p-3 border border-slate-700">~4 KB</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-700">Sent to Server</td>
                <td className="p-3 border border-slate-700">❌</td>
                <td className="p-3 border border-slate-700">❌</td>
                <td className="p-3 border border-slate-700">✅</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-700">Use Case</td>
                <td className="p-3 border border-slate-700">Preferences</td>
                <td className="p-3 border border-slate-700">Session Data</td>
                <td className="p-3 border border-slate-700">Authentication</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* SUMMARY */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🧾 Summary</h2>
          <ul className="list-disc list-inside leading-relaxed">
            <li><strong>localStorage</strong> → Stores data permanently.</li>
            <li><strong>sessionStorage</strong> → Temporary storage per tab.</li>
            <li><strong>Cookies</strong> → Small data sent to the server with requests.</li>
          </ul>
        </section>

        <footer className="text-center text-slate-400 border-t border-slate-700 pt-4 mt-10">
          © 2025 JavaScript Docs | Built by Akash 🚀
        </footer>
      </div>

      <TopicNavigation />
    </div>
  );
}
