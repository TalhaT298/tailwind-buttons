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
      <div className="mockup-code bg-black">
        <pre>
          {`<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:rotate-3 animate-hinge" onClick={() => alert('Clicked!')}>Click me</button>`}
          <code>npm i daisyui</code>
        </pre>
      </div>
      </div>

      <div>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-wiggle" onclick="alert('Clicked!')">Click me</button>

      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:rotate-3 animate-swing" onclick="alert('Clicked!')">Click me</button>`}
          <code>npm i daisyui</code>
        </pre>
      </div>
      </div>

      
      <div>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 animate-wiggle" onclick="alert('Clicked!')">Click me</button>

      <div className="mockup-code bg-black">
        <pre>
          {`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:rotate-3 animate-swing" onclick="alert('Clicked!')">Click me</button>`}
          <code>npm i daisyui</code>
        </pre>
      </div>
      </div>
    </div>
  );
};

export default ButtonOne;
