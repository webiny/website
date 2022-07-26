import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";

const Title = styled("h1")(
    {
        fontSize: 48,
        fontWeight: theme.fontWeight.semiBold,
        textAlign: "center",
        margin: "0 auto 25px auto",
    },
    mq({
        width: ["100%", "650px"],
    }),
);

const TitleComponent = props => <Title>{props.children}</Title>;

export default TitleComponent;
