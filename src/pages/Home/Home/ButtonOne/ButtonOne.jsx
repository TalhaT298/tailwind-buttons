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
import React, { useState } from 'react';
import axios from 'axios';

const ButtonOne = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedLink)
      .then(() => {
        setCopySuccess(true);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <div>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-8 py-3 ml-4 rounded-md"
        onClick={fetchData}
      >
        Submit URL
      </button>
      <div className="mt-5">
        {shortenedLink && (
          <>
            <span>{shortenedLink}</span>
            <button
              className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md"
              onClick={copyToClipboard}
            >
              okkkkkkkkkkkkkkkkkkkkkkk
              {copySuccess ? 'Copied!' : 'Copy URL to Clipboard'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ButtonOne;
