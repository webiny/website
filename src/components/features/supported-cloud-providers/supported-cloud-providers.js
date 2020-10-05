import React, { Fragment } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import cloudsBg from "./assets/supported-cloud-providers-bg.svg";
import rectangleBg from "./assets/cloud-rectangle.svg";
import cloudProvidersImg from "./assets/cloud-providers-support-img.svg";

import { LOGOS } from "./supported-cloud-providers-data";
import { TitleHighlight, Title as BaseTitle, OverviewSectionWrapper } from "../features-styles";
import heartImg from "./assets/heart.svg";

const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundImage: "url(" + cloudsBg + ")",
        backgroundSize: ["cover", "auto", "cover"],
        padding: ["0px 15px 110px", "0px 15px 110px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0,
        },
    }),
);

export const overviewContainerClass = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 1200,
    padding: 0,
    position: "relative",
});

const Title = styled(BaseTitle)({
    color: theme.color.white,
    marginBottom: 60,
});

const CLIHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + rectangleBg + ")",
});

const SupportedCloudProvidersImg = styled("img")({
    marginBottom: 200,
    maxWidth: "100%",
});

const TechnologyCard = styled("div")(
    {
        boxSizing: "border-box",
        marginTop: -150,
        marginBottom: 60,
        padding: "45px 30px",

        backgroundColor: theme.color.white,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.0980392)",
        borderRadius: 8,
    },
    mq({
        width: ["100%", 896],
        height: ["auto", 298],
    }),
);

const SubTitle = styled("h4")({
    fontSize: 28,
    fontWeight: 700,
    lineHeight: "36px",
    color: theme.color.black,
    textAlign: "center",
    maxWidth: 360,
    margin: "0px auto 44px",

    "& span": {
        position: "relative",
        display: "block",
        fontSize: 40,
        "&::after": {
            content: "url(" + heartImg + ")",
            position: "absolute",
            top: -15,
            right: "30%",
        },
    },
});

const LogosWrapper = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 560,
        margin: "0px auto",
        "& .logo": {
            width: 100,
            height: 75,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    mq({
        flexDirection: ["row", "row"],
        flexWrap: ["wrap", "nowrap"],
    }),
);

const SupportedCloudProviders = props => {
    return (
        <Fragment>
            <Section {...props}>
                <ContentContainer className={overviewContainerClass}>
                    <OverviewSectionWrapper>
                        <TechnologyCard>
                            <SubTitle>
                                Created with technology and tools you know and <span>Love!</span>
                            </SubTitle>
                            <LogosWrapper>
                                {LOGOS.map(logo => (
                                    <div key={logo.id} className={"logo"}>
                                        <img src={logo.src} alt={logo.alt} />
                                    </div>
                                ))}
                            </LogosWrapper>
                        </TechnologyCard>
                        <Title>
                            Supported <CLIHighlight>cloud providers</CLIHighlight>
                        </Title>
                        <SupportedCloudProvidersImg src={cloudProvidersImg} alt={""} />
                    </OverviewSectionWrapper>
                </ContentContainer>
            </Section>
        </Fragment>
    );
};

export default SupportedCloudProviders;
