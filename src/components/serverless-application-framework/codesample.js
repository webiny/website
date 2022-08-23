import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { css } from "emotion";
import mq from "../utils/breakpoints";

const codeStyle = css(
    {
        fontSize: 14,
        width: "100%",
        padding: "0 !important",
        backgroundColor: "#2b2c55 !important",
        minHeight: 600,
    },
    mq({}),
);

const CodeSample = ({ children, language, ...props }) => (
    <SyntaxHighlighter language={language} style={theme} className={codeStyle}>
        {children}
    </SyntaxHighlighter>
);

export default CodeSample;
