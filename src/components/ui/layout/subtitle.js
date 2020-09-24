import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";

const Subtitle = styled("p")(
    {
        fontSize: 24,
        fontWeight: theme.fontWeight.regular,
        textAlign: "center",
        margin: "0 auto 25px auto",
    },
    mq({
        width: ["100%", "650px"],
    }),
);

const SubtitleComponent = props => <Subtitle>{props.children}</Subtitle>;

export default SubtitleComponent;
