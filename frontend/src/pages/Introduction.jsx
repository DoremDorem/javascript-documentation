import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import { FaCheckCircle } from "react-icons/fa";
import TopicNavigation from "../components/TopicNavigation";

const code = `
// A simple JavaScript example
console.log("Welcome to JavaScript!");
`;

export default function Introduction() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">🟡 Introduction to JavaScript</h1>
        <p className="mb-2 text-md font-semibold">
          "JavaScript is a versatile, dynamically typed programming language that brings life to
           web pages by making them interactive. It is used for building interactive web 
           applications, supports both client-side and server-side development, 
           and integrates seamlessly with HTML, CSS, and a rich standard library."
        </p>
        <img src="int.webp" className="mb-3" alt="" />
        <p className="mb-2 flex">
        🔹 JavaScript ka janm 1995 me hua tha, jab Brendan Eich ne isse Netscape company me banaya.
         Shuru me iska naam Mocha tha, phir LiveScript rakha gaya, aur baad me marketing 
         ke liye iska naam JavaScript rakh diya gaya — taaki us time popular language
        “Java” ke sath relate lage.
      </p>
      <p className="mb-2">
        🔹 JavaScript ka main purpose web pages ko interactive aur dynamic banana tha,
         jaise button click hone par kuch action lena, form validate karna,
        ya page me animation dikhana.
      </p>
      <p className="mb-2">
        🔹 1996 me Microsoft ne apna version banaya jise JScript kaha gaya. 
        Isse dono browsers me alag behavior hone laga, isliye ek common rule banana zaruri tha.
      </p>
      <p className="mb-2">
        🔹 1997 me ECMA International ne JavaScript ke liye ek standard banaya jise ECMAScript (ES) kaha gaya. Iska matlab ye hua ki ab sab browsers ek hi set of rules follow karein.
        Uske baad JavaScript me har kuch saal me naye features add hote gaye:
      </p>
      <p className="mb-2">
         🔹 ES3 (1999) me naye syntax aur error handling aaye.

            🔹 ES5 (2009) ne JavaScript ko stable aur strong banaya.

            🔹 ES6 (2015) ek major update tha jisme let/const, arrow function, classes, modules jaise modern features aaye.

            🔹 Uske baad har saal naye version release hone lage jaise ES7 (2016), ES8 (2017), ES9 (2018), aur aaj tak naye features aate ja rahe hain.
      </p>
      <p className="mb-2">
        🔹 2009 me Node.js launch hua, jisse JavaScript sirf browser 
        tak limited nahi rahi — ab isse server-side programming bhi ki ja sakti hai.
      </p>

       <p>
        🔹 It supports both object-oriented and functional programming styles and is one of the core technologies of the web alongside HTML and CSS.
      </p>

      <h1 className="text-2xl mt-1">👉"Hello, World!" Program in Browser Console</h1>
      <p>A "Hello, World!" program is the simplest way to get started with any programming language. Here’s how you can write one using JavaScript.</p>

      <SyntaxHighlighter language="javascript" style={oneDark}>
        {
                  `<html>
        <head></head>
        <body>
            <h1>Check the console for the message!</h1>
            <script>
                // This is our first JavaScript program
                console.log("Hello, World!");
            </script>
        </body>
        </html>
         //Output Hello,World!
        `
        }
      </SyntaxHighlighter>

      <h4>In this example</h4>
      <p>The <span className="text-green-600">script</span> tag is used to include JavaScript code inside an HTML document.</p>
      <p className="mb-2">console.log() prints messages to the browser's developer console. Open the browser console to see the "Hello, World!" message.</p>
      <h1 className="mt-1 text-2xl mb-1">Comments in JavaScript</h1>
      <p className="mb-2">Comments are notes in your code that the JavaScript interpreter ignores.
        They’re great for explaining what your code does or for testing purposes.</p>
        <p className="mb-2">🔹 Single-line comment: Starts with //</p>
         <SyntaxHighlighter language="javascript" style={oneDark}>
          {
            `// This is a single-line comment`
          }
         </SyntaxHighlighter>

         <p className="mb-2">🔹 Multiple-line comment: Starts with //</p>
         <SyntaxHighlighter language="javascript" style={oneDark}>
          {
          `/* This is a multi-line comment 
          spanning multiple lines */`
          }
         </SyntaxHighlighter>

         <h1 className="mt-1 mb-2 text-2xl">Key Features of JavaScript</h1>
         <p className="mb-2">🔹 Here are some key features of JavaScript that make it a powerful language for web development:</p>
         <p className="mb-2"><span className="text-md font-bold">Client-Side Scripting:</span>JavaScript runs on the user's browser, so has a faster response time without needing to communicate with the server.</p>
        <p className="mb-2"><span className="text-md font-bold">Versatile:</span>Can be used for a wide range of tasks, from simple calculations to complex server-side applications.</p>
        <p className="mb-2"><span className="text-md font-bold">Event Driver:</span>Responds to user actions (clicks, keystrokes) in real-time.</p>
        <p className="mb-3"><span className="text-md font-bold">Asynchronous:</span>It can handle tasks like fetching data from servers without freezing the user interface.</p>
        <h1 className="mb-2 mt-1 text-2xl">Client Side and Server Side nature of JavaScript</h1>
        <img src="server.webp" alt="" />
        <p className="mb-2">
          🔹 JavaScript's flexibility extends to both the client-side and server-side, allowing developers to create 
          complete web applications. Here’s how it functions in each environment:
        </p>
        <h3 className="text-xl font-semibold mb-1">Client-Side:</h3>
        <p className="mb-2">🔹 Involves controlling the browser and its DOM (Document Object Model).</p>
        <p className="mb-2">🔹 Handles user events like clicks and form inputs.</p>
        <p className="mb-4">Common libraries include AngularJS, ReactJS, and VueJS.</p>
        <h3 className="text-xl font-semibold mb-1">Server-Side:</h3>
        <p className="mb-2">🔹 Involves interacting with databases, manipulating files, and generating responses.</p>
        <p className="mb-4">🔹 Node.js and frameworks like Express.js are widely used for server-side JavaScript, enabling full-stack development.</p>
        <img src="work.webp" alt="" />
        <h1 className="mt-2 text-2xl font-bold">Limitations of JavaScript</h1>
        <p className="mb-2">Despite its power, JavaScript has some limitations to consider:</p>

         <p className="mb-2"><span className="font-bold text-md">Security Risks</span> : Can be used for attacks like Cross-Site Scripting (XSS), where malicious scripts are injected into a website to steal data by exploiting elements like {`<img>, <object>, or <script>`} tags.</p>
         <p className="mb-2"><span className="font-bold text-md">Performance </span>: Slower than traditional languages for complex tasks, but for simple tasks in a browser, performance is usually not a major issue.</p>
         <p className="mb-2"><span className="font-bold text-md">Complexity</span> : To write advanced JavaScript, programmers need to understand core programming concepts, objects, and both client- and server-side scripting, which can be challenging.</p>
         <p className="mb-2"><span className="font-bold text-md">Weak Error Handling and Type Checking</span> : Weakly typed, meaning variables don’t require explicit types. This can lead to issues as type checking is not strictly enforced.</p>


      <TopicNavigation />
    </div>
  );
}
