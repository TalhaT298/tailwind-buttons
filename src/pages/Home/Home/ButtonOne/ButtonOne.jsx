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

const ButtonOne = () => {
  const [originalLink, setOriginalLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setOriginalLink(event.target.value);
  };

  const shortenLink = async () => {
    try {
      const response = await fetch(`YOUR_SHORTENER_API_ENDPOINT?url=${encodeURIComponent(originalLink)}`);
      if (!response.ok) {
        throw new Error(`Failed to shorten link: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      if (data && data.shortened_url) {
        setShortenedLink(data.shortened_url);
        setError(null);
      } else {
        throw new Error('Invalid response from URL shortening service');
      }
    } catch (error) {
      console.error('Error shortening link:', error);
      setError('Error shortening link');
    }
  };

  return (
    <div>
      <input type="text" value={originalLink} onChange={handleInputChange} placeholder="Enter your link" />
      <button onClick={shortenLink}>Shorten Link</button>
      {shortenedLink && (
        <div>
          <p>Original Link: {originalLink}</p>
          <p>Shortened Link: {shortenedLink}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ButtonOne;


