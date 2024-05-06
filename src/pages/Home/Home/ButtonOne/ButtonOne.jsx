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
import shortenUrl from 'shorten-url';

const ButtonOne = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  const shorten = () => {
    shortenUrl(inputUrl, 30)
      .then((shortUrl) => {
        console.log('Shortened URL obtained:', shortUrl); // Debugging
        setShortenedUrl(shortUrl);
        console.log('Shortened URL state:', shortenedUrl); // Debugging
      })
      .catch((error) => {
        console.error('Error shortening URL:', error);
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    alert('Shortened URL copied to clipboard!');
  };

  return (
    <div>
      <input
        type="text"
        value={inputUrl}
        onChange={handleChange}
        placeholder="Enter URL to shorten"
      />
      <button onClick={shorten}>Shorten URL</button>
      {shortenedUrl && (
        <div>
          <p>Shortened URL: {shortenedUrl}</p>
          <button onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default ButtonOne;





