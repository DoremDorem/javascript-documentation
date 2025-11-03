import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Operator() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">⚙️ JavaScript Operators</h1>
      <p className="mb-3">
        Operators are symbols used to perform operations on values and
        variables. JavaScript supports different kinds of operators such as
        arithmetic, assignment, comparison, logical, bitwise, and more.
      </p>

      {/* Arithmetic Operators */}
      <h2 className="text-2xl font-bold mt-4 mb-2">1️⃣ Arithmetic Operators</h2>
      <p>Arithmetic operators are used to perform mathematical calculations.</p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let a = 10;
let b = 3;

console.log(a + b); // Addition => 13
console.log(a - b); // Subtraction => 7
console.log(a * b); // Multiplication => 30
console.log(a / b); // Division => 3.333...
console.log(a % b); // Modulus => 1
console.log(a ** b); // Exponentiation => 1000
console.log(++a); // Increment => 11
console.log(--b); // Decrement => 2`}
      </SyntaxHighlighter>
      <p className="mb-2">
        The increment (<code>++</code>) and decrement (<code>--</code>) operators
        increase or decrease the value of a variable by 1.
      </p>

      {/* Assignment Operators */}
      <h2 className="text-2xl font-bold mt-4 mb-2">2️⃣ Assignment Operators</h2>
      <p>Used to assign values to variables.</p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let x = 5;
x += 2; // x = x + 2 => 7
x -= 1; // x = x - 1 => 6
x *= 3; // x = x * 3 => 18
x /= 2; // x = x / 2 => 9
x %= 4; // x = x % 4 => 1
x **= 2; // x = x ** 2 => 1`}
      </SyntaxHighlighter>
      <p>These help simplify repeated operations on a single variable.</p>

      {/* Comparison Operators */}
      <h2 className="text-2xl font-bold mt-4 mb-2">3️⃣ Comparison Operators</h2>
      <p>
        Comparison operators compare two values and return a boolean (
        <code>true</code> or <code>false</code>).
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let x = 10, y = 5;

console.log(x == 10);   // true (equal)
console.log(x === "10"); // false (strict equal)
console.log(x != 5);    // true
console.log(x !== 10);  // false (strict not equal)
console.log(x > y);     // true
console.log(x < y);     // false
console.log(x >= 10);   // true
console.log(y <= 5);    // true`}
      </SyntaxHighlighter>
      <p className="mb-2">
        <code>==</code> compares values only, while <code>===</code> compares both
        value and type.
      </p>

      {/* Logical Operators */}
      <h2 className="text-2xl font-bold mt-4 mb-2">4️⃣ Logical Operators</h2>
      <p>
        Logical operators combine multiple conditions and return boolean results.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let a = true, b = false;

console.log(a && b); // AND => false
console.log(a || b); // OR => true
console.log(!a);     // NOT => false`}
      </SyntaxHighlighter>
      <p className="mb-2">
        The <code>&&</code> operator returns true only if all conditions are true.
        The <code>||</code> operator returns true if at least one is true.
      </p>

      {/* Bitwise Operators */}
      <h2 className="text-2xl font-bold mt-4 mb-2">5️⃣ Bitwise Operators</h2>
      <p>
        Bitwise operators work on binary representations of numbers (0s and 1s).
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let x = 5;  // 0101
let y = 1;  // 0001

console.log(x & y);  // AND => 1
console.log(x | y);  // OR => 5
console.log(x ^ y);  // XOR => 4
console.log(~x);     // NOT => -6
console.log(x << 1); // Left shift => 10
console.log(x >> 1); // Right shift => 2`}
      </SyntaxHighlighter>
      <p className="mb-2">
        Bitwise operations are mainly used in low-level programming or
        performance optimization.
      </p>

      {/* Ternary Operator */}
      <h2 className="text-2xl font-bold mt-4 mb-2">6️⃣ Ternary Operator</h2>
      <p>
        The ternary (<code>?</code>) operator acts as a shorthand for if-else
        statements.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";

console.log(status); // "Adult"`}
      </SyntaxHighlighter>

      {/* Type Operators */}
      <h2 className="text-2xl font-bold mt-4 mb-2">7️⃣ Type Operators</h2>
      <p>
        Type operators help determine or convert data types. Common ones include{" "}
        <code>typeof</code> and <code>instanceof</code>.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let name = "Akash";
console.log(typeof name); // "string"

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true`}
      </SyntaxHighlighter>

      {/* String Operators */}
      <h2 className="text-2xl font-bold mt-4 mb-2">8️⃣ String Operators</h2>
      <p>
        The <code>+</code> operator can also be used to concatenate (combine)
        strings.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let firstName = "Akash";
let lastName = "Gupta";

console.log(firstName + " " + lastName); // Akash Gupta
console.log(\`Hello, \${firstName}!\`); // Template Literal => Hello, Akash!`}
      </SyntaxHighlighter>

      {/* Nullish Coalescing & Optional Chaining */}
      <h2 className="text-2xl font-bold mt-4 mb-2">
        9️⃣ Advanced: Nullish Coalescing (??) & Optional Chaining (?.)
      </h2>
      <p>
        The <code>??</code> operator returns the right-hand value if the
        left-hand value is <code>null</code> or <code>undefined</code>.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let name = null;
let user = name ?? "Guest"; 
console.log(user); // Guest`}
      </SyntaxHighlighter>

      <p className="mb-2">
        The <code>?.</code> operator prevents errors when accessing properties of
        undefined or null objects.
      </p>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`let userInfo = {};
console.log(userInfo.address?.city); // undefined (no error!)`}
      </SyntaxHighlighter>

      {/* Summary */}
      <div className="p-5 mt-5 shadow-lg border border-gray-500 bg-light">
        <h2 className="text-xl font-bold mb-2">🧩 Summary of Operators</h2>
        <ul className="list-disc ml-5">
          <li>Arithmetic → +, -, *, /, %, **</li>
          <li>Assignment → =, +=, -=, *=, /=</li>
          <li>Comparison → ==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</li>
          <li>Logical → &&, ||, !</li>
          <li>Bitwise → &, |, ^, ~, &lt;&lt;, &gt;&gt;</li>
          <li>Ternary → condition ? true : false</li>
          <li>Type → typeof, instanceof</li>
          <li>String → +, Template literals</li>
          <li>Advanced → ??, ?.</li>
        </ul>
        <p className="mt-2">
          Operators are the foundation of all JavaScript expressions — they
          define how values interact with one another.
        </p>
      </div>

      <TopicNavigation />
    </div>
  );
}
