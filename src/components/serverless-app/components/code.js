import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { css } from "emotion";
import mq from "../../utils/breakpoints";

const codeStyle = css(
    {
        borderRadius: 5,
        fontSize: 14,
        maxHeight: 350,
    },
    mq({
        width: ["calc(100vw - 20px)", 650],
    }),
);

const Code = ({ children, language, ...props }) => (
    <SyntaxHighlighter language={language} style={theme} className={codeStyle}>
        {children}
    </SyntaxHighlighter>
);

export default Code;
