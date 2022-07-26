import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

const ContentContainer = styled.div(
    {
        margin: "0 auto",
        position: "relative",
    },
    mq({
        width: ["100%", theme.contentWidth],
    }),
);

export default ({ children, ...props }) => (
    <ContentContainer {...props}>{children}</ContentContainer>
);
