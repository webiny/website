import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import techLogos from "../assets/tech-logos.svg";

const Tools = styled("h4")(
    {
        fontSize: theme.fontSize.h4,
        textTransform: "uppercase",
        color: theme.color.white,
        fontWeight: theme.fontWeight.light,
        margin: "50px auto",
        textAlign: "center",
    },
    mq({
        margin: ["50px 20px", "50px auto"],
    }),
);

const ToolsLogos = styled("img")(
    {
        marginTop: 30,
    },
    mq({
        width: ["100%", "auto"],
    }),
);

class TechTools extends React.Component {
    render() {
        return (
            <ContentContainer>
                <Tools>
                    CREATED WITH TECHNOLOGY AND TOOLS YOU KNOW AND LOVE
                    <br />
                    <ToolsLogos src={techLogos} />
                </Tools>
            </ContentContainer>
        );
    }
}

export default TechTools;
