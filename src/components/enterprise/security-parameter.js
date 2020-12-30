import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";
import Button from "../ui/button";
import ContentContainer from "../ui/content-container";

import customBg from "./assets/custom-rectangle.svg";
import vpcBg from "./assets/vpc-rectangle.svg";
import databaseImage from "./assets/database.svg";
import vpcImage from "./assets/vpc.svg";
import securityImage from "./assets/code-security.svg";
import customizeImage from "./assets/customize.svg";
import titleHightlightImage from "./assets/highlight-parameter.svg";
import havebackImage from "./assets/have-back.svg";

const wrapperClass = css(
    {
        position: "relative",
    },
    mq({
        paddingTop: [40, 0],
        paddingBottom: [40, 0],
    }),
);

const contentContainerClass = css(
    {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        "&::before": {
            position: "absolute",
            height: 800,
            top: 0,
            zIndex: 0,
        },
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%"],
        paddingTop: [40, 100],
        paddingBottom: [40, 90],
        "&::before": {
            display: ["none", "block"],
            left: [0, "-10%", "-10%"],
        },
    }),
);

const vpcClass = css({
    backgroundImage: "url(" + vpcBg + ")",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
});

const customClass = css({
    backgroundImage: "url(" + customBg + ")",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
});

const ctaButton = css({
    maxWidth: 320,
});

const Feature = styled("div")(
    {
        width: "100%",
        display: "flex",
        alignItems: "center",
        "&:last-child": {
            paddingBottom: 0,
        },
    },
    mq({
        flexDirection: ["column", "row"],
        paddingBottom: [100, 130],
        "&.reverse": {
            flexDirection: ["column", "row-reverse"],
        },
    }),
);

const FeatureImage = styled("img")(
    {
        position: "relative",
        margin: "0 auto",
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: ["80%", 473],
        paddingBottom: [24, 0],
    }),
);

const FeatureInfo = styled("div")(
    {
        position: "relative",
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        padding: ["0px 16px", "0px 24px"],
    }),
);

const FeatureTitle = styled("h2")(
    {
        fontSize: 38,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        marginTop: 0,

        "& span": {
            color: theme.color.purple,
        },
    },
    mq({
        marginBottom: [24, 40],
        textAlign: ["center", "left"],
        "&.medium-width": {
            maxWidth: ["100%", 420],
        },
        "&.large-width": {
            maxWidth: ["100%", 490],
        },
        "&.full-width": {
            maxWidth: ["100%", "92%"],
        },
    }),
);

const FeatureDescription = styled("p")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.regular,
        lineHeight: "30px",
        color: theme.color.black,
        marginBottom: 15,
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

const Wrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
        marginBottom: [60],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        margin: "60px 0px 0px",
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
        fontSize: [40, theme.fontSize["5xl"]],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + titleHightlightImage + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const SecurityParameters = () => {
    return (
        <section className={wrapperClass}>
            <ContentContainer>
                <Wrapper>
                    <Title>
                        Webiny security <TitleHighlight>perimeter</TitleHighlight>
                    </Title>
                </Wrapper>
            </ContentContainer>
            <ContentContainer className={contentContainerClass}>
                <Feature>
                    <FeatureInfo>
                        <FeatureTitle className="medium-width">
                            <span>Your cloud,</span> your database, your data
                        </FeatureTitle>
                        <FeatureDescription>
                            Webiny is hosted inside your own AWS cloud. You own all the networking,
                            security and databases. Webiny doesn't break your data regulation
                            compliancies nor make it hard for your legal team and your dev team to
                            integrate the solution.
                        </FeatureDescription>
                        <FeatureDescription>
                            All the data stays within your cloud giving you a peace of mind which
                            only comes when you have the full control.
                        </FeatureDescription>
                    </FeatureInfo>
                    <FeatureImage src={databaseImage} alt="Your cloud, your database, your data" />
                </Feature>
            </ContentContainer>
            <div className={vpcClass}>
                <ContentContainer className={contentContainerClass}>
                    <Feature className="reverse">
                        <FeatureInfo>
                            <FeatureTitle className="medium-width">
                                <span>Runs inside</span> a VPC
                            </FeatureTitle>
                            <FeatureDescription>
                                You have the full control over how open or closed you want your
                                Webiny instance to be. Webiny can be deployed both inside a VPC, as
                                well as outside.
                            </FeatureDescription>
                            <FeatureDescription>
                                Define custom security policies and networking rules, allow only
                                access from certain IPs, or the public internet.
                            </FeatureDescription>
                        </FeatureInfo>
                        <FeatureImage src={vpcImage} alt="Run inside a VPC" />
                    </Feature>
                </ContentContainer>
            </div>
            <ContentContainer className={contentContainerClass}>
                <Feature>
                    <FeatureInfo>
                        <FeatureTitle className="full-width">
                            <span>Code</span> security
                        </FeatureTitle>
                        <FeatureDescription>
                            Webiny, being a public open-source project, our code is our product. But
                            it's also our pride accomplishment. To tighten the security, our code
                            base is constantly scanned by CodeQL - the world's most powerful code
                            analysis engine for any security vulnerabilities.
                        </FeatureDescription>
                        <FeatureDescription>
                            We also use Dependabot to scan for any security vulnerabilities in our
                            dependencies and 3rd party libraries.
                        </FeatureDescription>
                    </FeatureInfo>
                    <FeatureImage
                        src={securityImage}
                        alt="webiny is a dynamic CMS not a static site generator"
                    />
                </Feature>
            </ContentContainer>
            <div className={customClass}>
                <ContentContainer className={contentContainerClass}>
                    <Feature className="reverse">
                        <FeatureInfo>
                            <FeatureTitle className="large-width">
                                <span>Customise</span> the deployment workflow
                            </FeatureTitle>
                            <FeatureDescription>
                                Webiny deployment mechanism is completely customisable. By default
                                Webiny uses Pulumi, however, you can change this and integrate
                                solutions like CloudFormation, Serverless Framework, TerraForm, or
                                any other process.
                            </FeatureDescription>
                            <FeatureDescription>
                                We intentionally separated our deployment process as many
                                enterprises want to have full control over how infrastructure get
                                created within their cloud platform.
                            </FeatureDescription>
                        </FeatureInfo>
                        <FeatureImage
                            src={customizeImage}
                            alt="no need to do scaling and infrastructure management"
                        />
                    </Feature>
                </ContentContainer>
            </div>
            <ContentContainer className={contentContainerClass}>
                <Feature>
                    <FeatureInfo>
                        <FeatureTitle className="large-width">
                            <span>We have</span> your back
                        </FeatureTitle>
                        <FeatureDescription>
                            Our team of professionals is here for you. We will work with you to
                            ensure your team uses serverless and Webiny best practices.
                        </FeatureDescription>
                        <FeatureDescription>
                            We will help you get the right architecture in place and train your
                            developers ensuring your project is a success.
                        </FeatureDescription>
                    </FeatureInfo>
                    <FeatureImage
                        src={havebackImage}
                        alt="no need to do scaling and infrastructure management"
                    />
                </Feature>
                <Button
                    link="https://calendly.com/webiny/30min"
                    target="_blank"
                    type="secondary"
                    className={ctaButton}
                >
                    Talk to Us
                </Button>
            </ContentContainer>
        </section>
    );
};

export default SecurityParameters;
