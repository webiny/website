import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
import sectionBg from "./assets/footer.svg";

const ctaBtn = css({
    maxWidth: 260,
    width: "260px !important",
});

const containerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const Section = styled("section")(
    {
        backgroundImage: "url(" + sectionBg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "top",
    },
    mq({
        padding: ["0px 15px 15px", "100px 15px 100px"],
    }),
);

const WebinyAppsWrapper = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
    },
    mq({}),
);

const Title = styled("h3")({
    margin: "30px 0px",
    color: theme.color.white,
    fontSize: "3rem",
    fontWeight: 700,
    textAlign: "center",
    maxWidth: 458,
});

const WebinyJourney = () => {
    return (
        <Section>
            <ContentContainer className={containerClass}>
                <WebinyAppsWrapper>
                    <Title>Get started with your Webiny journey</Title>
                    <Button
                        type="outline"
                        className={ctaBtn}
                        link="http://calendly.com/webiny/30min"
                    >
                        Book a Call
                    </Button>
                </WebinyAppsWrapper>
            </ContentContainer>
        </Section>
    );
};

export default WebinyJourney;
