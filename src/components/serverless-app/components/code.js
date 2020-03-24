import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {
  tomorrow as theme,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {css} from 'emotion';

const codeStyle = css ({
  borderRadius: 5,
  fontSize: 14,
  maxWidth: 500,
  maxHeight: 350,
});

const Code = ({children, language, ...props}) => (
  <SyntaxHighlighter language={language} style={theme} className={codeStyle}>
    {children}
  </SyntaxHighlighter>
);

export default Code;
