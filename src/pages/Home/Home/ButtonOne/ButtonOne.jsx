// import React from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// const ButtonOne = () => {
//     const codeString = '<button className="rounded-lg bg-sky-500 px-8 py-3 text-xl text-white duration-300 active:scale-95">Button</button>';
//     const codeString2 = '<button className="rounded-lg border-2 border-sky-500 px-8 py-3 text-xl text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Button</button>';
//     return (
//         <div className=''>
//               <div>
//               <button className="rounded-lg bg-sky-500 px-8 py-3 text-xl text-white duration-300 active:scale-95">Button</button>

//               <SyntaxHighlighter language="javascript" style={docco}>
//       {codeString}
//     </SyntaxHighlighter>
//               </div>

//               <div>
//               <button className="rounded-lg border-2 border-sky-500 px-8 py-3 text-xl text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Button</button>

//               <SyntaxHighlighter language="javascript" style={docco}>
//       {codeString2}
//     </SyntaxHighlighter>
//               </div>

//         </div>
//     );
// };

// export default ButtonOne;
import React from "react";

const ButtonOne = () => {
  return (
    <div>
      <div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:rotate-3 animate-hinge"
        onClick={() => alert("Clicked!")}
      >
        Click me
      </button>
      <code>Hinge Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:rotate-3 animate-hinge" onClick={() => alert('Clicked!')}>Click me</button>`}
          
        </pre>
      </div>
      </div>
      {/* 2nd */}
      <div>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-wiggle" onclick="alert('Clicked!')">Click me</button>
      <code>Rubber Band Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:rotate-3 animate-swing" onclick="alert('Clicked!')">Click me</button>`}
         
        </pre>
      </div>
      </div>

      {/* 3rd */}
      <div>
      <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-bounce" onclick="alert('Clicked!')">Click me</button>
      <code>Tada Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-bounce" onclick="alert('Clicked!')">Click me</button>`}
          
        </pre>
      </div>
      </div>
      {/* 4t */}
      <div>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out animate-pulse hover:animate-ping" onclick="alert('Clicked!')">Click me</button>

      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out animate-pulse hover:animate-ping" onclick="alert('Clicked!')">Click me</button>`}
          <code>Heartbeat Animation Button</code>
        </pre>
      </div>
      </div>
      {/* 5th */}
      <div>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-ping" onclick="alert('Clicked!')">Click me</button>
      <code>Rubber Band Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-ping" onclick="alert('Clicked!')">Click me</button>`}
          
        </pre>
      </div>
      </div>
      {/* 6th */}
      <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out animate-flash" onclick="alert('Clicked!')">Click me</button>
      <code>Swing Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out animate-flash" onclick="alert('Clicked!')">Click me</button>`}
          
        </pre>
      </div>
      </div>
      {/* 7th */}
      <div>
      <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:translate-x-1 animate-shake" onclick="alert('Clicked!')">Click me</button>
      <code>Flash Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:translate-x-1 animate-shake" onclick="alert('Clicked!')">Click me</button>`}
         
        </pre>
      </div>
      </div>
      {/* 8th */}
      <div>
      <button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:rotate-180" onclick="alert('Clicked!')">Click me</button>
      <code>Flip Animation Button</code>
      <div className="mockup-code bg-black">
      
        <pre>
          {`<button class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:rotate-180" onclick="alert('Clicked!')">Click me</button>`}
          
        </pre>
      </div>
      </div>
      {/* 9th */}
      <div>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out opacity-0 hover:opacity-100" onclick="alert('Clicked!')">Click me</button>
      <code>Fade-in Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out opacity-0 hover:opacity-100" onclick="alert('Clicked!')">Click me</button>`}
        </pre>
      </div>
      </div>
      {/* 10 */}
      <div>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:translate-y-1" onclick="alert('Clicked!')">Click me</button>
      <code>Slide-in Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:translate-y-1" onclick="alert('Clicked!')">Click me</button>`}
        </pre>
      </div>
      </div>
      {/* 11 */}
      <div>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 animate-pulse" onclick="alert('Clicked!')">Click me</button>
      <code>Pulse Animation Button</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 animate-pulse" onclick="alert('Clicked!')">Click me</button>`}
        </pre>
      </div>
      </div>
      {/* 12 */}
      <div>
      <button class="bg-purple-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-pulse" onclick="alert('Clicked!')">Click me</button>
      <code>Pulse Animation Button with Color Change</code>
      <div className="mockup-code bg-black">
        <pre>
          {` <button class="bg-purple-500 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-pulse" onclick="alert('Clicked!')">Click me</button>`}
        </pre>
      </div>
      </div>
      {/* 13 */}
      <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-wiggle hover:skew-y-6" onclick="alert('Clicked!')">Click me</button>
      <code>Rubber Band Animation Button with Skew</code>
      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-wiggle hover:skew-y-6" onclick="alert('Clicked!')">Click me</button>`}
        </pre>
      </div>
      </div>
    </div>
  );
};

export default ButtonOne;
