import React from "react";
import styled from "react-emotion";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/styles/hljs";

import theme from "../utils/theme";

const Container = styled("div")({
    background: theme.color.codeBg,
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.50)",
    borderRadius: 8,
    padding: 25,
});

const CodeBlock = ({ code, language }) => {
    return (
        <Container>
            <SyntaxHighlighter language={language} style={monokai}>
                {code}
            </SyntaxHighlighter>
        </Container>
    );
};

export default CodeBlock;
