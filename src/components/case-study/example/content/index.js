import React from "react";
import styled from "react-emotion";
import {css} from "emotion";
import mq from "../../../utils/breakpoints";
import MainContent from "./main-content";
import SideContent from "./side-content";
import ContentContainer from "../../../ui/content-container";

const containerClass = css(
    {
        maxWidth: 1200,
    },
    mq(
        {
            width: ["100%", "100%"],
            display: ["block", "flex"]
        }
    )

)

const ContentSection = styled("section")(
    {
        padding: "50px 0"
    },
    mq(
        {
            padding: ["50px 20px", "50px 0"]
        }
    )
)

const Content = () => {
    return (
        <ContentSection>
            <ContentContainer className={containerClass}>
                <MainContent />
                <SideContent />
            </ContentContainer>            
        </ContentSection>
    )
}

export default Content
