import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import TopicNavigation from "../components/TopicNavigation";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Objects() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          🧱 JavaScript Objects
        </h1>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧠 Introduction to Objects
          </h2>
          <p className="leading-relaxed mb-3">
            In JavaScript, <strong>objects</strong> are one of the most fundamental and powerful
            data types. They allow developers to store, organize, and manage data using
            <strong> key-value pairs</strong>. An object groups related information together, making
            it easier to represent real-world entities such as a user, car, or product.
          </p>
          <p className="leading-relaxed mb-3">
            Each property in an object consists of a <em>key</em> (also called a property name)
            and a <em>value</em>. The value can be any JavaScript data type — a string, number,
            array, another object, or even a function. Objects are mutable, meaning their
            properties can be updated or deleted after creation.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const person = {
  name: "Akash",
  age: 21,
  city: "Delhi"
};
console.log(person.name); // Akash`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const person = {
  name: "Akash",
  age: 21,
  city: "Delhi"
};
console.log(person.name); // Akash`}
            </SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            👉 This example shows an object with three properties: <code>name</code>,
            <code>age</code>, and <code>city</code>. You can access properties using either
            dot or bracket notation.
          </p>
        </section>

        {/* OBJECT CREATION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧩 Creating Objects
          </h2>
          <p className="leading-relaxed mb-3">
            There are multiple ways to create objects in JavaScript:
            using object literals, the <code>new Object()</code> syntax,
            or using constructor functions and classes.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`// 1️⃣ Using Object Literal
const user = { name: "Akash", age: 21 };

// 2️⃣ Using new Object()
const car = new Object();
car.brand = "Tesla";
car.model = "Model S";

// 3️⃣ Using a Constructor Function
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}
const student1 = new Student("Riya", "A");`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`// 1️⃣ Using Object Literal
const user = { name: "Akash", age: 21 };

// 2️⃣ Using new Object()
const car = new Object();
car.brand = "Tesla";
car.model = "Model S";

// 3️⃣ Using a Constructor Function
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}
const student1 = new Student("Riya", "A");`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* PROPERTY ACCESS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🏷️ Accessing and Modifying Properties
          </h2>
          <p className="leading-relaxed mb-3">
            Object properties can be accessed using either <strong>dot notation</strong> or
            <strong> bracket notation</strong>. The dot notation is simpler and more common,
            but bracket notation is useful when keys have spaces or are stored in variables.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const book = { title: "JS Mastery", pages: 250 };
console.log(book.title); // JS Mastery
book.pages = 300;
book["author"] = "Akash";
console.log(book);`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const book = { title: "JS Mastery", pages: 250 };
console.log(book.title); // JS Mastery
book.pages = 300;
book["author"] = "Akash";
console.log(book);`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* METHODS AND THIS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ⚙️ Methods and the this Keyword
          </h2>
          <p className="leading-relaxed mb-3">
            When a function is defined inside an object, it is called a <strong>method</strong>.
            Inside a method, <code>this</code> refers to the current object.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const person = {
  name: "Akash",
  greet() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Akash`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const person = {
  name: "Akash",
  greet() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Akash`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* OBJECT DESTRUCTURING */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🪞 Object Destructuring
          </h2>
          <p className="leading-relaxed mb-3">
            Destructuring allows you to extract specific properties from an object
            into individual variables easily.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const user = { name: "Akash", age: 21, city: "Delhi" };
const { name, city } = user;
console.log(name, city); // Akash Delhi`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const user = { name: "Akash", age: 21, city: "Delhi" };
const { name, city } = user;
console.log(name, city); // Akash Delhi`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* OBJECT METHODS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🧾 Common Object Methods
          </h2>
          <p className="leading-relaxed mb-3">
            JavaScript provides built-in methods to work efficiently with objects:
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const person = { name: "Akash", age: 21 };
console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Akash", 21]
console.log(Object.entries(person)); // [["name","Akash"],["age",21]]

const clone = Object.assign({}, person);
console.log(clone); // { name: "Akash", age: 21 }

Object.freeze(person);
person.age = 30; // won't change
console.log(person.age); // 21`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const person = { name: "Akash", age: 21 };
console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Akash", 21]
console.log(Object.entries(person)); // [["name","Akash"],["age",21]]

const clone = Object.assign({}, person);
console.log(clone); // { name: "Akash", age: 21 }

Object.freeze(person);
person.age = 30; // won't change
console.log(person.age); // 21`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* NESTED OBJECTS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🔁 Nested Objects
          </h2>
          <p className="leading-relaxed mb-3">
            Objects can contain other objects, creating nested structures — ideal for
            representing complex data like API responses.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`const student = {
  name: "Riya",
  marks: {
    math: 95,
    english: 88
  }
};
console.log(student.marks.math); // 95`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`const student = {
  name: "Riya",
  marks: {
    math: 95,
    english: 88
  }
};
console.log(student.marks.math); // 95`}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* REAL-WORLD USE CASES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            💼 Real-World Use Scenarios
          </h2>
          <p className="leading-relaxed mb-3">
            Objects are everywhere in JavaScript — used for configurations, user profiles,
            API data, and more.
          </p>

          <div className="relative mb-4">
            <button
              onClick={() =>
                navigator.clipboard.writeText(`// Example: Representing a Product
const product = {
  id: 101,
  name: "Laptop",
  price: 50000,
  specs: {
    brand: "HP",
    processor: "i5"
  },
  applyDiscount(percent) {
    return this.price - (this.price * percent) / 100;
  }
};
console.log(product.applyDiscount(10)); // 45000`)
              }
              className="absolute top-2 right-2 bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
            >
              Copy
            </button>
            <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
{`// Example: Representing a Product
const product = {
  id: 101,
  name: "Laptop",
  price: 50000,
  specs: {
    brand: "HP",
    processor: "i5"
  },
  applyDiscount(percent) {
    return this.price - (this.price * percent) / 100;
  }
};
console.log(product.applyDiscount(10)); // 45000`}
            </SyntaxHighlighter>
          </div>

          <p className="leading-relaxed">
            👉 Here, an object stores product details and behavior. This kind of structure is
            used extensively in **e-commerce**, **user management**, and **backend APIs**.
          </p>
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
