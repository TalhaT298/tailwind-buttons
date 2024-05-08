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

//h

import { getAllDivision } from 'bd-divisions-to-unions';
import React, { useState, useEffect } from 'react';

const ButtonOne = () => {
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    // Fetch the divisions in English and update the state
    const divisionsData = getAllDivision("en");
    setDivisions(divisionsData);
  }, []);

  return (
    <div>
      {divisions.map((division, index) => (
        <p key={index}>{division.title}</p>
      ))}
    </div>
  );
};

export default ButtonOne;
