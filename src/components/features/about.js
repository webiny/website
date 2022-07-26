import React from "react";
import mq from "../utils/breakpoints";
import { css } from "@emotion/css";
import ContentContainer from "../ui/content-container";
import Link from "gatsby-link";
import { Grid, Cell } from "../ui/layout/layout";

import imgArchitecture from "./assets/webiny-server-side.svg";
import imgStack from "./assets/platform-stack.svg";
import imgReadyMadeApps from "./assets/ready-made-apps.svg";
import imgBuildWith from "./assets/build-stuff.svg";

const wrapperClass = css(
    {
        //background: 'url(' + background + ') no-repeat left top',
        backgroundSize: "cover",
        backgroundColor: "transparent",
    },
    mq({
        marginTop: [125, -80],
        paddingTop: [0, 150],
    }),
);

const containerStyle = css(
    {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "baseline",
        marginTop: -150,
        flexWrap: "wrap",
        width: "100%",
        ">div": {
            boxSizing: "border-box",
            img: {
                height: 280,
            },
        },
    },
    mq({
        flexDirection: ["column !important", "row !important"],
        ">div": {
            width: ["100%", "50%"],
            marginBottom: [25, 50],
            "&:nth-child(odd)": {
                paddingRight: [0, 25],
            },
            "&:nth-child(even)": {
                paddingLeft: [0, 25],
            },
        },
    }),
);

class About extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer>
                    <Grid top className={containerStyle}>
                        <div>
                            <Cell>
                                <img src={imgBuildWith} />
                            </Cell>
                            <Cell title="Build more than websites">
                                <p>
                                    Webiny makes it easy to build{" "}
                                    <Link to="/use-case/serverless-websites">websites</Link>,{" "}
                                    <Link to="/use-case/serverless-web-applications">
                                        web applications
                                    </Link>
                                    , <Link to="/use-case/serverless-graphql-api">APIs</Link> and{" "}
                                    <Link to="/use-case/microservices">microservices</Link> inside
                                    the serverless environment.
                                </p>
                            </Cell>
                        </div>

                        <div>
                            <Cell>
                                <img src={imgArchitecture} />
                            </Cell>
                            <Cell title="Microservice architecture">
                                <p>
                                    It’s the latest and greatest that technology provides. Run
                                    microservices inside scaleable serverless functions. There is no
                                    load it can’t handle.
                                </p>
                            </Cell>
                        </div>

                        <div>
                            <Cell>
                                <img src={imgStack} />
                            </Cell>
                            <Cell title="Everything you need is included">
                                <p>
                                    Seamless development experience, faster project turnaround time,
                                    fewer bugs and greater quality output.
                                </p>
                            </Cell>
                        </div>

                        <div>
                            <Cell>
                                <img src={imgReadyMadeApps} />
                            </Cell>
                            <Cell title="Ready-made apps to speed up your development">
                                <p>
                                    Webiny comes with several applications that are specifically
                                    built for the serverless environment. Learn more about the{" "}
                                    <Link to="/serverless-app/headless-cms">Headless CMS</Link>,{" "}
                                    <Link to="/serverless-app/page-builder">Page Builder</Link>,{" "}
                                    <Link to="/serverless-app/form-builder">Form Builder</Link> and{" "}
                                    <Link to="/serverless-app/file-manager">File Manager</Link>.
                                </p>
                            </Cell>
                        </div>
                    </Grid>
                </ContentContainer>
            </section>
        );
    }
}

export default About;
