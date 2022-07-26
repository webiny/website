import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import { css } from "emotion";
import ContentContainer from "../../ui/content-container";

import featuresBg from "./assets/features-bg.svg";
import heavyLiftingForYouImage from "./assets/heavy-lift.svg";
import toolsWeLoveImage from "./assets/love-tool.svg";
import dynamicCMSImage from "./assets/dynamic-cms.svg";
import rocketSpeedImage from "./assets/speed-rocket.svg";

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
            content: "url(" + featuresBg + ")",
            top: 0,
            zIndex: 0,
        },
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%"],
        paddingTop: [40, 80],
        paddingBottom: [40, 80],
        "&::before": {
            display: ["none", "block"],
            left: [0, "-10%", "-10%"],
        },
    }),
);

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
        "&:nth-child(even)": {
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
        marginBottom: 0,
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

class WebinyFeatures extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <Feature>
                        <FeatureImage
                            src={heavyLiftingForYouImage}
                            alt="webiny handles the heavy-lifting for you"
                        />
                        <FeatureInfo>
                            <FeatureTitle className="medium-width">
                                Be efficient - let Webiny handle the heavy-lifting
                            </FeatureTitle>
                            <FeatureDescription>
                                Webiny automates code-splitting, image optimizations, prefetching
                                pages and resources, server-side rendering, caching and much more.
                                There are no knobs you need to be fiddling to get things working,
                                and working fast. Webiny makes your team more efficient at what they
                                do.
                            </FeatureDescription>
                        </FeatureInfo>
                    </Feature>
                    <Feature>
                        <FeatureImage
                            src={toolsWeLoveImage}
                            alt="use tools like React, GraphQL, Nodejs, Typescript, Babel and Webpack"
                        />
                        <FeatureInfo>
                            <FeatureTitle className="medium-width">
                                Use tools you already know and love
                            </FeatureTitle>
                            <FeatureDescription>
                                We don't want Webiny to have a steep learning curve, so we built it
                                using the modern technologies your developers already use today -
                                such as Webpack, Javascript, JS-in-CSS, hot-reloading. It's all
                                there, connected and configured so they are ready to start building
                                right away.
                            </FeatureDescription>
                        </FeatureInfo>
                    </Feature>
                    <Feature>
                        <FeatureImage
                            src={dynamicCMSImage}
                            alt="webiny is a dynamic CMS not a static site generator"
                        />
                        <FeatureInfo>
                            <FeatureTitle className="full-width">
                                Build beyond static sites
                            </FeatureTitle>
                            <FeatureDescription>
                                Building sites with Webiny doesn't require you to constantly build
                                and deploy the whole website. Webiny is a dynamic system, edit a
                                page, press publish and the page is live!
                            </FeatureDescription>
                        </FeatureInfo>
                    </Feature>
                    <Feature>
                        <FeatureImage
                            src={rocketSpeedImage}
                            alt="no need to do scaling and infrastructure management"
                        />
                        <FeatureInfo>
                            <FeatureTitle className="large-width">
                                Scaling and infrastructure management are things of the past
                            </FeatureTitle>
                            <FeatureDescription>
                                Because Webiny is a 100% serverless system it scales up and down
                                instantaneously with your demand. As an added benefit, there are
                                literally ZERO servers for you to manage. Handling peak events like
                                Black Friday and similar, it's gonna be "just another day at work"
                                and you can forget about sleepless nights. And best of all, it will
                                save you money and increase your bottom line.
                            </FeatureDescription>
                        </FeatureInfo>
                    </Feature>
                </ContentContainer>
            </section>
        );
    }
}

export default WebinyFeatures;
