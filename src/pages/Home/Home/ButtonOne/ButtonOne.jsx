import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const ButtonOne = () => {
    const codeString = '(num) => num + 1';
    return (
        <div className=''>
              
              <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
        </div>
    );
};

export default ButtonOne;