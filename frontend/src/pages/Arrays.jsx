import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

// ✅ Register the JavaScript language
SyntaxHighlighter.registerLanguage("javascript", js);

// ✅ Code Examples
const basicArray = `
// Creating and using arrays
const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");

console.log(fruits.length); // 4
console.log(fruits[1]);     // Banana

fruits.forEach(fruit => console.log(fruit));
`;

const methodsExample = `
// Common Array Methods
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(3));  // 2
console.log(numbers.includes(4)); // true
console.log(numbers.join(", "));  // "1, 2, 3, 4, 5"

numbers.pop();    // Removes last element
numbers.shift();  // Removes first element
numbers.unshift(0); // Adds at start
console.log(numbers); // [0, 2, 3, 4]
`;

const mapExample = `
// map() - Transform each element
const nums = [1, 2, 3, 4];
const squares = nums.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]
`;

const filterExample = `
// filter() - Keep elements that pass a condition
const ages = [12, 18, 25, 10, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]
`;

const reduceExample = `
// reduce() - Combine all values into one
const prices = [10, 20, 30];
const total = prices.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 60
`;

const multidimensionalExample = `
// Nested (2D) Arrays
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(matrix[1][0]); // 3
`;

const copyExample = `
// Copying Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Using spread operator
arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]
`;

const destructureExample = `
// Array Destructuring
const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;
console.log(first);  // Red
console.log(second); // Green
`;

const codeBasic = `
// Creating and using arrays
const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");

console.log(fruits.length); // 4
console.log(fruits[1]);     // Banana

fruits.forEach(fruit => console.log(fruit));
`;

// ✅ Copy Button Component
const CodeBlock = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("✅ Code copied!");
  };

  return (
    <div className="relative my-4">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded"
      >
        Copy
      </button>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default function Arrays() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          🍏 Arrays in JavaScript
        </h1>

          {/* 🔹 Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          In JavaScript, an <strong>Array</strong> is a special type of object
          used to store multiple values in a single variable. It helps organize
          related data elements together and allows you to easily access,
          manipulate, and iterate over them. Arrays are zero-indexed, meaning
          the first element starts at index <code>0</code>. For example, if an
          array has five items, the last item will be at index <code>4</code>.
          Arrays can hold values of any data type — strings, numbers, objects,
          or even other arrays — making them very flexible. They are dynamic,
          so you can add or remove elements without needing to specify their
          size beforehand.
        </p>
        <p className="mb-4">
          JavaScript arrays also come with powerful built-in methods that make
          working with data much easier. For example, you can add elements using{" "}
          <code>push()</code>, remove them with <code>pop()</code>, loop through
          them using <code>forEach()</code>, or transform them with{" "}
          <code>map()</code> and <code>filter()</code>. These features make
          arrays one of the most frequently used structures in everyday coding.
          Whether you are building a shopping cart, managing user data, or
          storing API results, arrays are essential for structuring and
          manipulating collections of information.
        </p>

        <h3 className="text-xl font-semibold">Basic Example:</h3>
        <p className="mb-3">
          Below is a simple example showing how to create an array, add elements
          to it, and iterate over its items:
        </p>

        <div className="relative">
          <button
            onClick={() => copyToClipboard(codeBasic)}
            className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
          >
            Copy
          </button>
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {codeBasic}
          </SyntaxHighlighter>
        </div>

        <p className="mt-4">
          In this example, we created an array of fruits and added a new element
          using <code>push()</code>. The <code>forEach()</code> method allows us
          to loop through the array and display each fruit individually. Arrays
          make it easy to manage lists of data dynamically.
        </p>
      </section>

        {/* Common Methods */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">🧩 Common Array Methods</h2>
          <p className="leading-relaxed mb-3">
            JavaScript provides several built-in methods to manipulate arrays efficiently:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><code>push()</code> — Add to the end</li>
            <li><code>pop()</code> — Remove from the end</li>
            <li><code>shift()</code> — Remove from the start</li>
            <li><code>unshift()</code> — Add to the start</li>
            <li><code>includes()</code> — Check if a value exists</li>
            <li><code>join()</code> — Combine all values into a string</li>
          </ul>
          <CodeBlock code={methodsExample} />
        </section>

       {/* Higher-Order Functions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🚀 Higher-Order Array Methods
          </h2>
          <p className="leading-relaxed mb-5">
            JavaScript provides several powerful methods to manipulate and transform arrays in a functional style.
            These are called <strong>Higher-Order Functions</strong> because they take another function as an argument.
            They make code more readable, expressive, and reduce the need for traditional loops.
            The most commonly used higher-order methods are <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>.
          </p>

          {/* map() */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">1️⃣ map()</h3>
          <p className="leading-relaxed mb-3">
            The <strong>map()</strong> method is used to transform every element of an array and return a new array without modifying the original.
            It takes a callback function that runs once for each element, performing a specific operation.
            The new array contains the results of applying that function.
            This is very useful for tasks such as mathematical transformations, formatting data, or creating JSX lists in React.
            <br /><br />
            For example, if you want to square every number in an array, instead of using a loop, you can use <code>map()</code> to perform the transformation in one clean line.
            It improves readability and makes the code more functional.
          </p>
          <CodeBlock code={`const nums = [1, 2, 3, 4];
        const squares = nums.map(num => num * num);
        console.log(squares); // [1, 4, 9, 16]`} />
          <p className="mt-2 mb-8 leading-relaxed">
            👉 In the example above, <code>map()</code> takes each number from <code>nums</code>, multiplies it by itself,
            and returns a new array <code>[1, 4, 9, 16]</code>. The original array <code>nums</code> remains unchanged.
            This demonstrates the immutability of higher-order functions.
          </p>

          {/* filter() */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">2️⃣ filter()</h3>
          <p className="leading-relaxed mb-3">
            The <strong>filter()</strong> method is used to create a new array containing only the elements that meet a specific condition.
            It loops through each item in the array and applies a callback function that returns either <code>true</code> or <code>false</code>.
            Only the elements for which the callback returns <code>true</code> are included in the new array.
            <br /><br />
            This is useful for filtering out unwanted data — for example, selecting users over a certain age,
            finding completed tasks, or removing null values. It’s a cleaner and more readable alternative to using <code>for</code> loops with conditionals.
          </p>
          <CodeBlock code={`const ages = [12, 18, 25, 10, 30];
        const adults = ages.filter(age => age >= 18);
        console.log(adults); // [18, 25, 30]`} />
          <p className="mt-2 mb-8 leading-relaxed">
            👉 In this example, <code>filter()</code> checks each age in the array.
            Only those ages that are <code>18</code> or older pass the test, forming a new array <code>[18, 25, 30]</code>.
            The original <code>ages</code> array remains unchanged, showing how <code>filter()</code> helps extract specific data efficiently.
          </p>

          {/* reduce() */}
          <h3 className="text-xl font-semibold text-blue-200 mb-2">3️⃣ reduce()</h3>
          <p className="leading-relaxed mb-3">
            The <strong>reduce()</strong> method is one of the most powerful and flexible array methods.
            It’s used to “reduce” all elements of an array into a single output value — such as a sum, product, or even an object.
            It takes a callback function with two parameters: an <code>accumulator</code> (which stores the ongoing result) and the <code>current</code> value.
            <br /><br />
            This method is commonly used for mathematical totals, grouping data, counting occurrences, or flattening nested arrays.
            It’s particularly helpful when processing data structures like arrays of objects in APIs or databases.
          </p>
          <CodeBlock code={`const prices = [10, 20, 30];
        const total = prices.reduce((acc, curr) => acc + curr, 0);
        console.log(total); // 60`} />
          <p className="mt-2 mb-8 leading-relaxed">
            👉 Here, <code>reduce()</code> starts with an initial value of <code>0</code>.
            It iterates through each <code>price</code> and adds it to <code>acc</code>.
            After all iterations, the final result is <code>60</code>.
            This single function elegantly replaces the need for multiple variables and loops to calculate totals.
          </p>
        </section>


        {/* 🌐 Multidimensional Arrays */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">
              🌐 Multidimensional Arrays
            </h2>
            <p className="leading-relaxed mb-3">
              A <strong>multidimensional array</strong> is an array that contains other arrays as elements.
              It allows you to represent complex data structures like matrices, tables, or grids.
              In JavaScript, you can easily create and access them using nested brackets.
              For example, a 2D array can represent rows and columns of a table.
              <br /><br />
              Multidimensional arrays are widely used in data science, gaming, or applications that require
              matrix-like data (e.g., representing a chessboard or image pixel grid). You can access elements
              using multiple indices — for example, <code>array[row][column]</code>.
              <br /><br />
              When working with nested arrays, you can also combine loops or array methods like
              <code> forEach() </code> and <code> map() </code> to traverse data more effectively.
            </p>

            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
          {`// Creating a 2D array
          const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
          ];

          // Accessing elements
          console.log(matrix[0][1]); // 2
          console.log(matrix[2][2]); // 9

          // Looping through all elements
          matrix.forEach(row => {
            console.log(row.join(" "));
          });
          `}
            </SyntaxHighlighter>

            <p className="leading-relaxed mt-2">
              👉 In this example, we created a <code>3x3 matrix</code> representing rows and columns.
              We accessed specific elements using <code>matrix[row][column]</code>.  
              The <code>forEach()</code> loop helps print all rows in a clean format.
            </p>
          </section>

       {/* 🧩 Copying Arrays */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-300 mb-3">
              🧩 Copying Arrays
            </h2>
            <p className="leading-relaxed mb-3">
              In JavaScript, arrays are **reference types**, which means assigning one array to another does
              not create a new copy — it simply references the same memory location. Modifying one array
              affects the other.
              <br /><br />
              To avoid this, you can use **shallow copy methods** such as:
              <code> slice() </code>, the **spread operator** (<code>[...array]</code>), or
              <code> Array.from() </code>.  
              These create a new independent array with the same elements.
              <br /><br />
              For nested arrays or objects, a **deep copy** is required using structured cloning or libraries like
              <code> structuredClone() </code> or <code> JSON.parse(JSON.stringify(array)) </code>.
            </p>

            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
          {`const original = [10, 20, 30];

          // ❌ Wrong: reference copy
          const refCopy = original;
          refCopy.push(40);

          console.log(original); // [10, 20, 30, 40] (modified)

          // ✅ Right: shallow copies
          const copy1 = original.slice();
          const copy2 = [...original];
          const copy3 = Array.from(original);

          copy1.push(50);
          console.log(original); // [10, 20, 30, 40]
          console.log(copy1);    // [10, 20, 30, 40, 50]
          `}
            </SyntaxHighlighter>

            <p className="leading-relaxed mt-2">
              👉 The first example shows how assigning an array copies the reference.
              Using methods like <code>slice()</code> or the <code>spread operator</code> creates
              a new independent array. This ensures the original array remains unaffected by future changes.
            </p>
          </section>

        {/* 🧱 Array Destructuring */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧱 Array Destructuring
          </h2>
          <p className="leading-relaxed mb-3">
            <strong>Array Destructuring</strong> is an ES6 feature that allows you to extract values
            from arrays and assign them to variables in a concise way. Instead of accessing each index manually,
            destructuring simplifies your code by unpacking values directly.
            <br /><br />
            You can also use default values, skip elements, or use the rest operator (<code>...</code>)
            to collect remaining items. Destructuring is extremely useful when handling function returns,
            arrays of data, or API responses.
          </p>

          <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {`// Basic Destructuring
        const colors = ["red", "green", "blue"];
        const [first, second, third] = colors;
        console.log(first); // red
        console.log(third); // blue

        // Skipping and default values
        const [a, , c = "yellow"] = ["white", "black"];
        console.log(a); // white
        console.log(c); // yellow

        // Using Rest Operator
        const numbers = [1, 2, 3, 4, 5];
        const [head, ...tail] = numbers;
        console.log(head); // 1
        console.log(tail); // [2, 3, 4, 5]
        `}
          </SyntaxHighlighter>

          <p className="leading-relaxed mt-2">
            👉 In the first example, we extracted values from an array into separate variables using
            destructuring.  
            The second example skips elements and assigns a default value.  
            Finally, using the <code>rest operator (...)</code> allows you to gather all remaining items
            into another array, making code cleaner and easier to maintain.
          </p>
        </section>


       {/* 🧩 Real-World Use Case Scenarios of Arrays */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-blue-300 mb-3">
    🧩 Real-World Use Case Scenarios of Arrays
  </h2>
  <p className="leading-relaxed mb-3">
    Arrays are one of the most powerful and frequently used data structures in JavaScript.
    They are ideal for managing **collections of related data** that can be processed, searched,
    filtered, and displayed. Arrays are used across every type of application — from small
    websites to complex enterprise systems. They help developers store lists of items,
    manage user inputs, perform mathematical operations, handle API data, and much more.
  </p>

  <p className="leading-relaxed mb-3">
    For instance, you can use arrays to store a list of user names, to-do tasks, or
    numeric values like scores. Arrays can also hold complex objects, making them
    perfect for representing JSON data fetched from an API. They work beautifully with
    JavaScript’s built-in methods like <code>map()</code>, <code>filter()</code>, and
    <code>reduce()</code> to perform transformations and computations efficiently.
    Understanding arrays deeply allows you to build cleaner, more scalable code in
    real-world projects such as dashboards, games, and web apps.
  </p>

  {/* 🧾 Example 1: Managing a To-Do List */}
  <h3 className="text-xl font-semibold mt-6 mb-2">🧾 Example 1: Managing a To-Do List</h3>
  <p className="mb-3">
    Arrays are great for managing dynamic lists such as a to-do app. You can add,
    remove, and display tasks efficiently.
  </p>

  <div className="relative mb-4">
    <button
      onClick={() =>
        navigator.clipboard.writeText(`let todos = ["Buy milk", "Study JS", "Go for a walk"];
todos.push("Cook dinner");
todos.splice(1, 1); // Remove 'Study JS'
console.log(todos); // ["Buy milk", "Go for a walk", "Cook dinner"];`)
      }
      className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
    >
      Copy
    </button>
    <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`let todos = ["Buy milk", "Study JS", "Go for a walk"];
todos.push("Cook dinner");
todos.splice(1, 1); // Remove 'Study JS'
console.log(todos); // ["Buy milk", "Go for a walk", "Cook dinner"];`}
    </SyntaxHighlighter>
  </div>

  <p className="leading-relaxed">
    👉 In this example, the array stores a list of tasks. We used <code>push()</code> to add a
    new item and <code>splice()</code> to remove one. Arrays make dynamic list management simple
    and efficient.
  </p>

  {/* 📊 Example 2: Calculating Average Scores */}
  <h3 className="text-xl font-semibold mt-6 mb-2">📊 Example 2: Calculating Average Scores</h3>
  <p className="mb-3">
    Arrays are often used in data processing tasks, such as calculating average values or
    analyzing statistics from datasets.
  </p>

  <div className="relative mb-4">
    <button
      onClick={() =>
        navigator.clipboard.writeText(`const scores = [85, 90, 78, 92, 88];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average.toFixed(2)); // 86.6`)
      }
      className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
    >
      Copy
    </button>
    <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const scores = [85, 90, 78, 92, 88];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average.toFixed(2)); // 86.6`}
    </SyntaxHighlighter>
  </div>

  <p className="leading-relaxed">
    👉 Here, we use the <code>reduce()</code> method to calculate the total sum and divide it by
    the number of elements to find the average. This approach is common in analytics, games,
    and dashboard data handling.
  </p>

  {/* 🌍 Example 3: Handling API Response Data */}
  <h3 className="text-xl font-semibold mt-6 mb-2">🌍 Example 3: Handling API Response Data</h3>
  <p className="mb-3">
    Arrays are essential when working with data fetched from APIs. Usually, APIs return JSON
    arrays, which can be iterated and transformed using methods like <code>map()</code> and
    <code>filter()</code>.
  </p>

  <div className="relative mb-4">
    <button
      onClick={() =>
        navigator.clipboard.writeText(`const users = [
  { name: "Akash", age: 22 },
  { name: "Riya", age: 19 },
  { name: "Arjun", age: 25 }
];

// Get names of users above 20
const adults = users
  .filter(user => user.age > 20)
  .map(user => user.name);

console.log(adults); // ["Akash", "Arjun"];`)
      }
      className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
    >
      Copy
    </button>
    <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const users = [
  { name: "Akash", age: 22 },
  { name: "Riya", age: 19 },
  { name: "Arjun", age: 25 }
];

// Get names of users above 20
const adults = users
  .filter(user => user.age > 20)
  .map(user => user.name);

console.log(adults); // ["Akash", "Arjun"];`}
    </SyntaxHighlighter>
  </div>

  <p className="leading-relaxed">
    👉 This example shows how arrays make API data filtering and transformation easy. You can
    use <code>filter()</code> to extract relevant information and <code>map()</code> to convert
    or reformat it for display in your UI.
  </p>
</section>




        {/* Best Practices */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">✅ Best Practices</h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Always use <code>const</code> for arrays unless you plan to reassign them.</li>
            <li>Use higher-order functions like <code>map()</code> and <code>filter()</code> instead of loops when possible.</li>
            <li>Prefer spread syntax (<code>[...arr]</code>) for copying arrays.</li>
            <li>Use <code>for...of</code> for simple iteration over array values.</li>
            <li>Avoid modifying the original array unless necessary.</li>
          </ul>
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
