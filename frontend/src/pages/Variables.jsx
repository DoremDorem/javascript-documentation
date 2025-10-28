import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

import TopicNavigation from "../components/TopicNavigation";

const code = `
// Declaring variables
var x = 5;      // function-scoped
let y = 10;     // block-scoped
const z = 20;   // constant value

console.log(x, y, z);
`;

export default function Variables() {
  return (
    <div>
      <h1 className="text-2xl font-bold">🔹 Variables in JavaScript</h1>
      <p>
        Variables are containers for storing data. You can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.
      </p>
      <p className="mb-1 mt-1">Most of the time, a JavaScript application needs to work with information. Here are two examples:</p>
      <p className="mb-1">1. An online shop – the information might include goods being sold and a shopping cart</p>
      <p className="mb-2">2. A chat application – the information might include users, messages, and much more.</p>
      <p className="mb-2">To create a variable in JavaScript, use the let keyword.</p>
      <p className="mb-2">The statement below creates (in other words: declares) a variable with the name “message”:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let message;`}
      </SyntaxHighlighter>
      <p className="mb-2">Now, we can put some data into it by using the assignment operator =:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
    {`
    let message;
    message = 'Hello'; // store the string 'Hello' in the variable named message
    `}
      </SyntaxHighlighter>
     <p className="mb-2">The string is now saved into the memory area associated with the variable. We can access it using the variable name:</p>  
      <SyntaxHighlighter language="javascript" style={oneDark}>
         {
       `let message;
message = 'Hello!';
alert(message); // shows the variable content`
         }
      </SyntaxHighlighter>
      <p className="mb-2">To be concise, we can combine the variable declaration and assignment into a single line:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
       {` let message = 'Hello!'; // define the variable and assign the value
alert(message); // Hello!`}
      </SyntaxHighlighter>
      <p className="mb-2">We can also declare multiple variables in one line:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let user = 'John', age = 25, message = 'Hello';`}
      </SyntaxHighlighter>
      <p className="mb-2">That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.</p>
      <p className="mb-2">The multiline variant is a bit longer, but easier to read:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let user = 'John';
let age = 25;
let message = 'Hello';`}
      </SyntaxHighlighter>
      <p className="mb-2">Some people also define multiple variables in this multiline style:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let user = 'John',
  age = 25,
  message = 'Hello';`}
      </SyntaxHighlighter>
      <p className="mb-2">…Or even in the “comma-first” style:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let user = 'John'
  , age = 25
  , message = 'Hello';`}
      </SyntaxHighlighter>
      <p className="mb-2">Technically, all these variants do the same thing. So, it’s a matter of personal taste and aesthetics.</p>
      <div className="p-5 shadow-lg bg-light border border-gray-500">
         <p className="mb-2"><strong>var</strong> instead of <strong>let</strong></p>
         <p className="mb-2">In older scripts, you may also find another keyword: <strong>var</strong> instead of <strong>let</strong>:</p>
         <SyntaxHighlighter language="javascript" style={oneDark}>
          {`var message = 'Hello';`}
         </SyntaxHighlighter>
         <p className="mb-2">The <strong>var</strong> keyword is almost the same as <strong>let</strong>. It also declares a variable but in a slightly different, “old-school” way.</p>
         <p className="mb-2">There are subtle differences between let and var, but they do not matter to us yet. We’ll cover them in detail in the chapter The old "var".</p>
      </div>
      <h1 className="mb-2 mt-2 text-2xl font-bold">A real-life analogy</h1>
      <p className="mb-2">We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.</p>
      <p className="mb-2">For instance, the variable message can be imagined as a box labelled "message" with the value "Hello!" in it:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);`}
      </SyntaxHighlighter>
      <p className="mb-2">When the value is changed, the old data is removed from the variable:</p>
      <p className="mb-2">We can also declare two variables and copy data from one into the other.</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!`}
      </SyntaxHighlighter>
      <div className="p-5 shadow-lg border border-gray-500 mt-2">
      <p className="font-bold mb-2">Declaring twice triggers an error</p>
      <p className="mb-2">A variable should be declared only once.</p>
      <p className="mb-2">A repeated declaration of the same variable is an error:</p>
      <SyntaxHighlighter language="javascript" style={oneDark}>
       {`let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared`}
      </SyntaxHighlighter>
      <p className="mt-2">So, we should declare a variable once and then refer to it without let.</p>
      </div>
      <div className="p-5 shadow-lg border border-gray-500 mt-2">
         <h3 className="mb-2 font-bold">Functional languages</h3>
         <p className="mb-2">It’s interesting to note that there exist so-called pure functional programming languages, such as Haskell, that forbid changing variable values.</p>
         <p className="mb-2">In such languages, once the value is stored “in the box”, it’s there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can’t reuse the old one.</p>
         <p className="mb-2">Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits.</p>
      </div>

       <h1 className="font-bold text-2xl mb-2 mt-3">Variable naming</h1>
       <p className="mb-2">There are two limitations on variable names in JavaScript:</p>
       <p>1. The name must contain only letters, digits, or the symbols <strong>$</strong> and <strong>_</strong>.</p>
       <p>2. The first character must not be a digit.</p>
       <p className="mb-2">Examples of valid names:</p>
       <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let userName;
let test123;`}
       </SyntaxHighlighter>

       <p className="mb-2">When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.</p>
       <p className="mb-2">What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.</p>
       <p className="mb-2">These names are valid:</p>
       <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3`}
       </SyntaxHighlighter>
       <p className="mb-2">Examples of incorrect variable names:</p>
       <SyntaxHighlighter language="javascript" style={oneDark}>
        {`let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name`}
       </SyntaxHighlighter>
       <div className="p-5 bg-light shadow-lg border border-gray-500">
        <p className="font-bold">‼️Case matters</p>
        <p>Variables named <strong>apple</strong> and <strong>APPLE</strong> are two different variables.</p>
       </div>
       <div  className="p-5 bg-light shadow-lg border border-gray-500 mt-4">
        <p className="font-bold mb-2">⚠️ Non-Latin letters are allowed, but not recommended</p>
        <p>It is possible to use any language, including Cyrillic letters, Chinese logograms and so on, like this:</p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`let имя = '...';
let 我 = '...';`}
        </SyntaxHighlighter>
        <p>Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we’re writing a small script, it may have a long life ahead. People from other countries may need to read it sometime.</p>
       </div>
       <div className="p-5 bg-light shadow-lg border border-gray-500 mt-4">
        <p className="font-bold mb-2">⚠️Reserved names</p>
        <p className="mb-2">There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.</p>
        <p className="mb-2">For example: <span className="bg-gray-300">let</span>, <span className="bg-gray-300">class</span>, <span className="bg-gray-300">return</span>, and <span className="bg-gray-300">function</span> are reserved.</p>
        <p className="mb-2">The code below gives a syntax error:</p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!`}
        </SyntaxHighlighter>
       </div>

        <div className="p-5 bg-light shadow-lg border border-gray-500 mt-4">
          <p className="mb-2 font-bold">⚠️An assignment without use strict</p>
          <p className="mb-2">Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using <span className="bg-gray-300">let</span>. This still works now if we don’t put <span className="bg-gray-300">use strict</span> in our scripts to maintain compatibility with old scripts.</p>
          <SyntaxHighlighter language="javascript" style={oneDark}>
            {`// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5`}
          </SyntaxHighlighter>
          <p className="mb-2">This is a bad practice and would cause an error in strict mode:</p>
          <SyntaxHighlighter language="javascript" style={oneDark}>
             {`"use strict";

num = 5; // error: num is not defined`}
          </SyntaxHighlighter>

        </div>

        <h1 className="mt-3 mb-2 text-2xl font-bold">Constants</h1>
        <p className="mb-2">To declare a constant (unchanging) <span className="bg-gray-200">variable</span>, use <span className="bg-gray-200">const</span> instead of let:</p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`const myBirthday = '18.04.1982';`}
        </SyntaxHighlighter>
        <p className="mb-2">Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:</p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!`}
        </SyntaxHighlighter>
        <p className="mb-2">When a programmer is sure that a variable will never change, they can declare it with const to guarantee and communicate that fact to everyone.</p>
        <h1 className="mb-2 mt-3 text-2xl font-bold">Uppercase constants</h1>
        <p className="mb-2">There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.</p>
        <p className="mb-2">Such constants are named using capital letters and underscores.</p>
        <p className="mb-2">For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:</p>
         <SyntaxHighlighter language="javascript" style={oneDark}>
          {`const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00`}
         </SyntaxHighlighter>
         <p className="mb-3">Benefits:</p>
         <p className="mb-2"><span className="bg-gray-300">COLOR_ORANGE</span> is much easier to remember than <span className="bg-gray-300">"#FF7F00"</span>.</p>
         <p className="mb-2">It is much easier to mistype <span className="bg-gray-300">"#FF7F00"</span> than <span className="bg-gray-300">COLOR_ORANGE</span>.</p>
         <p className="mb-2">When reading the code, <span className="bg-gray-300">COLOR_ORANGE</span> is much more meaningful than #<span className="bg-gray-300">#FF7F00</span>.</p>
         <p className="mb-2">When should we use capitals for a constant and when should we name it normally? Let’s make that clear.</p>
         <p className="mb-2">Being a “constant” just means that a variable’s value never changes. But some constants are known before execution (like a hexadecimal value for red) and some constants are calculated in run-time, during the execution, but do not change after their initial assignment.</p>
         <p className="mb-2">For instance:</p>
         <SyntaxHighlighter language="javascript" style={oneDark}>
          {`const pageLoadTime = /* time taken by a webpage to load */;`}
         </SyntaxHighlighter>
         <p className="mb-2">The value of <span className="bg-gray-300">pageLoadTime</span> is not known before the page load, so it’s named normally. But it’s still a constant because it doesn’t change after the assignment.</p>
         <p className="mt-2">In other words, capital-named constants are only used as aliases for “hard-coded” values.</p>
         <h1 className="mt-3 mb-2 text-2xl font-bold">Name things right</h1>
         <p className="mb-2">Talking about variables, there’s one more extremely important thing.</p>
         <p className="mb-2">A variable name should have a clean, obvious meaning, describing the data that it stores.</p>
         <p className="mb-2">Variable naming is one of the most important and complex skills in programming. A glance at variable names can reveal which code was written by a beginner versus an experienced developer.</p>
         <p className="mb-2">In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it’s much easier to find information that is well-labelled. Or, in other words, when the variables have good names.</p>
         <p className="mb-2">Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.</p>
         <p className="mb-2">Some good-to-follow rules are:</p>
         <p className="mb-2">🔹Use human-readable names like <span className="bg-gray-300">userName</span> or <span className="bg-gray-300">shoppingCart</span>.</p>
         <p className="mb-2">🔹 Stay away from abbreviations or short names like <span className="bg-gray-300">a</span>, <span className="bg-gray-300">b</span>, and <span className="bg-gray-300">c</span>, unless you know what you’re doing.</p>
        <p className="mb-2">🔹Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.</p> 
        <p className="mb-2">Agree on terms within your team and in your mind. If a site visitor is called a “user” then we should name related variables <span className="bg-gray-300">currentUser</span> or <span className="bg-gray-300">newUser</span> instead of <span className="bg-gray-300">currentVisitor</span> or <span className="bg-gray-300">newManInTown</span>.</p>
      <p>
        <div className="p-5 bg-light shadow-lg border border-gray-500 mt-4">
          <p className="mb-2 font-bold">⚠️Reuse or create?</p>
          <p className="mb-2">And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.</p>
          <p className="mb-2">As a result, their variables are like boxes into which people throw different things without changing their stickers. What’s inside the box now? Who knows? We need to come closer and check.</p>
          <p className="mb-2">Such programmers save a little bit on variable declaration but lose ten times more on debugging.</p>
          <p className="mb-2">An extra variable is good, not evil.</p>
          <p className="mb-2">Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can even help the engine optimize your code.</p>
        </div>
        <h1 className="mb-2 mt-3 text-2xl font-bold">Summary</h1>
        <p className="mb-2">We can declare variables to store data by using the <span className="bg-gray-300">var</span>, <span className="bg-gray-300">let</span>, or <span className="bg-gray-300">const</span> keywords.</p>
        <p className="mb-2">🔹<span className="bg-gray-300">let</span> – is a modern variable declaration.</p>
        <p className="mb-2">🔹<span className="bg-gray-300">var</span> – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from <span className="bg-gray-300">let</span> in the chapter The old <span className="bg-gray-300">"var"</span>, just in case you need them.</p>
        <p className="mb-2">🔹<span className="bg-gray-300">const</span> – is like <span className="bg-gray-300">let</span>, but the value of the variable can’t be changed. – is like let, but the value of the variable can’t be changed.</p>
        <p className="mb-2">🔹Variables should be named in a way that allows us to easily understand what’s inside them.</p>
        - <b>var</b> is function-scoped and can be redeclared. <br />
        - <b>let</b> is block-scoped and can be reassigned. <br />
        - <b>const</b> is block-scoped and cannot be reassigned.
      </p>

      <TopicNavigation />
    </div>
  );
}
