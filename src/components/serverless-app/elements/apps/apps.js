import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { navigate } from "gatsby-link";

import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import Button from "../../../ui/button";
import ContentContainer from "../../../ui/content-container";
// assets
import sectionBg from "./assets/bgwaves.svg";
import headlessCMSIcon from "./assets/headless-cms-icon.svg";
import pageBuilderIcon from "./assets/page-builder-icon.svg";
import formBuilderIcon from "./assets/form-builder-icon.svg";
import fileManagerIcon from "./assets/file-manager-icon.svg";

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
        padding: ["0px 15px 15px", "100px 15px 0"],
    }),
);

const containerClass = css(
    {
        flexDirection: "column",
        maxWidth: "1200px",
    },
    mq({
        width: ["100%", "100%"],
        display: ["block", "flex"],
        justifyContent: ["center", "space-between"],
        padding: ["100px 0px 25px", "100px 0px 25px"],
    }),
);

const WebinyAppsWrapper = styled("div")(
    {
        display: "grid",
        position: "relative",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"],
        gap: ["40px 0px", "40px 24px", "0px 18px"],
        marginBottom: [0, 100],
        height: ["auto", 360],
    }),
);

const WebinyApp = styled("div")(
    props => ({
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.color.white,

        borderRadius: 8,
        borderTop: `6px solid ${props.color}`,

        "& .app__img": {
            marginBottom: 20,
            height: 140,
            cursor: "pointer",
            transition: "transform 300ms ease-in",

            "&:hover": {
                transform: "translateY(-5px) scale(1.05)",
            },
        },

        "& .app__title": {
            margin: "0px 0px 20px",
            fontSize: theme.fontSize["2xl"],
            fontWeight: theme.fontWeight.bold,
            textAlign: "center",
        },
        "& .app__body": {
            fontSize: 22,
            fontWeight: theme.fontWeight.regular,
            textAlign: "center",
            margin: "0px 0px 35px",
            minHeight: 93,
        },
        "& .app__button": {
            backgroundColor: props.color ? props.color : "inherit",
            width: "100%",
            maxWidth: 217,
        },
    }),
    mq({
        width: [283],
        height: ["100%"],
        padding: ["10px 12px 24px"],
        margin: ["0px auto", 0],
    }),
);

const WEBINY_APPS = [
    {
        id: 0,
        title: "Headless CMS",
        body: "GraphQL based headless CMS with powerful content modeling features.",
        color: theme.color.black,
        actionType: "dark",
        actionLabel: "learn more",
        actionLink: "/serverless-app/headless-cms",
        imgSrc: headlessCMSIcon,
        imgAlt: "webiny app: headless cms",
    },
    {
        id: 1,
        title: "Page Builder",
        body: "For when you need a quick landing page created without any coding.",
        color: theme.color.primaryDark,
        actionType: "primary",
        actionLabel: "learn more",
        actionLink: "/serverless-app/page-builder",
        imgSrc: pageBuilderIcon,
        imgAlt: "webiny app: page builder",
    },
    {
        id: 2,
        title: "Form Builder",
        body: "Create forms using a drag&drop interface and track how they convert.",
        color: theme.color.secondaryDark,
        actionType: "secondary",
        actionLabel: "learn more",
        actionLink: "/serverless-app/form-builder",
        imgSrc: formBuilderIcon,
        imgAlt: "webiny app: Form builder",
    },
    {
        id: 3,
        title: "File Manager",
        body: "Upload, categorize, search and edit your files.",
        color: theme.color.purple,
        actionType: "dark",
        actionLabel: "learn more",
        actionLink: "/serverless-app/file-manager",
        imgSrc: fileManagerIcon,
        imgAlt: "webiny app: file manager",
    },
];

const WebinyAppsComponent = ({ className }) => (
    <Section className={className}>
        <ContentContainer className={containerClass}>
            <WebinyAppsWrapper>
                {WEBINY_APPS.map(app => (
                    <WebinyApp key={app.id} color={app.color}>
                        <img
                            className={"app__img"}
                            src={app.imgSrc}
                            alt={app.imgAlt}
                            onClick={() => navigate(app.actionLink)}
                        />
                        <h3 className="app__title">{app.title}</h3>
                        <p className="app__body">{app.body}</p>
                        <Button
                            className={"app__button"}
                            link={app.actionLink}
                            type={app.actionType}
                        >
                            {app.actionLabel}
                        </Button>
                    </WebinyApp>
                ))}
            </WebinyAppsWrapper>
        </ContentContainer>
    </Section>
);

export default WebinyAppsComponent;
