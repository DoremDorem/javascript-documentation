import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function ConditionalStatement() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          ⚖️ JavaScript Conditional Statements
        </h1>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧠 Introduction to Conditional Statements
          </h2>
          <p className="leading-relaxed mb-3">
            In the real world, we constantly make decisions — if it rains, we take an umbrella;
            if we’re hungry, we eat. Computers also need this ability to make logical decisions,
            and that’s where <strong>conditional statements</strong> come in.
          </p>
          <p className="leading-relaxed mb-3">
            Conditional statements in JavaScript allow your program to make choices and 
            control the flow of execution based on conditions. They evaluate whether 
            an expression is <code>true</code> or <code>false</code>, and execute different 
            blocks of code accordingly.
          </p>
          <p className="leading-relaxed mb-3">
            JavaScript provides several conditional constructs:
            <strong> if</strong>, <strong>else if</strong>, <strong>else</strong>, and
            <strong> switch</strong>. Together, these help you create flexible, intelligent,
            and dynamic applications.
          </p>
        </section>

        {/* IF STATEMENT */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🟢 The if Statement</h2>
          <p className="leading-relaxed mb-3">
            The <strong>if</strong> statement is the simplest form of decision-making.
            It checks whether a condition is <code>true</code>; if yes, a block of code executes.
            Otherwise, the program skips it.
          </p>
          <p className="leading-relaxed mb-3">
            Think of it like: <em>“If I have money, I’ll buy ice cream.”</em> — if the condition
            (having money) is true, the action (buying ice cream) happens.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
}`)
              }
              className="absolute top-2 right-2 bg-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
}`}
            </SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            Here, the condition <code>{`age >= 18`}</code> is checked. Since it’s true, 
            the message “You are eligible to vote.” will be displayed.
          </p>
        </section>

        {/* IF ELSE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🟡 if...else Statement</h2>
          <p className="leading-relaxed mb-3">
            Sometimes you want to perform one action when a condition is true 
            and another when it’s false. The <strong>if...else</strong> statement 
            helps handle both possibilities.
          </p>
          <p className="leading-relaxed mb-3">
            Example: “If it’s raining, take an umbrella. Otherwise, enjoy the sunshine.”
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella ☂️");
} else {
  console.log("Enjoy the sunshine ☀️");
}`)}
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella ☂️");
} else {
  console.log("Enjoy the sunshine ☀️");
}`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* ELSE IF */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🟠 else if Statement</h2>
          <p className="leading-relaxed mb-3">
            When you have multiple conditions to test, use <strong>else if</strong>. 
            It checks conditions sequentially and executes the first one that’s true.
          </p>
          <p className="leading-relaxed mb-3">
            Think of grading logic — if a student scores above 90, they get an A+; 
            if above 75, A; if above 50, B; otherwise fail.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let score = 75;
if (score >= 90) {
  console.log("Grade: A+");
} else if (score >= 75) {
  console.log("Grade: A");
} else if (score >= 50) {
  console.log("Grade: B");
} else {
  console.log("Fail");
}`)}
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let score = 75;
if (score >= 90) {
  console.log("Grade: A+");
} else if (score >= 75) {
  console.log("Grade: A");
} else if (score >= 50) {
  console.log("Grade: B");
} else {
  console.log("Fail");
}`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* NESTED IF */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🔁 Nested if Statements</h2>
          <p className="leading-relaxed mb-3">
            Sometimes, decisions depend on multiple layers of conditions. 
            In such cases, you can place one <strong>if</strong> inside another — this is called a 
            <strong> nested if</strong>.
          </p>
          <p className="leading-relaxed mb-3">
            Example: “If a person is over 18 and has an ID, allow entry; otherwise, deny access.”
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let age = 25;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Access granted ✅");
  } else {
    console.log("Please show your ID card ❌");
  }
} else {
  console.log("You must be 18 or older.");
}`)}
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let age = 25;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Access granted ✅");
  } else {
    console.log("Please show your ID card ❌");
  }
} else {
  console.log("You must be 18 or older.");
}`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* SWITCH CASE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🔀 switch Statement</h2>
          <p className="leading-relaxed mb-3">
            The <strong>switch</strong> statement is used when you need to compare one 
            value against many possible options. It’s a cleaner and more readable 
            alternative to multiple <strong>else if</strong> statements.
          </p>
          <p className="leading-relaxed mb-3">
            Think of it as a multi-lane highway — depending on the value, 
            the program takes one specific route.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Wednesday":
    console.log("Midweek hustle!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Regular day!");
}`)}
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Wednesday":
    console.log("Midweek hustle!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Regular day!");
}`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* REAL WORLD */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">💼 Real-World Use Case</h2>
          <p className="leading-relaxed mb-3">
            Conditional statements are used in almost every program — 
            from login systems, banking apps, and e-commerce websites 
            to video games and weather dashboards.
          </p>
          <p className="leading-relaxed mb-3">
            Example: Checking if a user is logged in and displaying personalized content:
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const user = {
  isLoggedIn: true,
  role: "admin"
};

if (user.isLoggedIn) {
  if (user.role === "admin") {
    console.log("Welcome Admin 👑");
  } else {
    console.log("Welcome User 😊");
  }
} else {
  console.log("Please log in to continue.");
}`)}
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const user = {
  isLoggedIn: true,
  role: "admin"
};

if (user.isLoggedIn) {
  if (user.role === "admin") {
    console.log("Welcome Admin 👑");
  } else {
    console.log("Welcome User 😊");
  }
} else {
  console.log("Please log in to continue.");
}`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="mb-10 border-t border-slate-700 pt-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🧾 Summary</h2>
          <ul className="list-disc list-inside leading-relaxed">
            <li><strong>if</strong> → Executes a block when condition is true.</li>
            <li><strong>if...else</strong> → Adds an alternative block for false conditions.</li>
            <li><strong>else if</strong> → Handles multiple logical cases in sequence.</li>
            <li><strong>nested if</strong> → For multiple dependent decisions.</li>
            <li><strong>switch</strong> → Best when one value has many possible outcomes.</li>
          </ul>
          <p className="mt-4">
            ✅ Mastering conditionals is the foundation of logical thinking in programming.
            Almost every real-world app relies on them for decision-making and user flow control.
          </p>
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
