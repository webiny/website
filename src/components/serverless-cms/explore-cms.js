import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import rectangleBg from "./assets/exploreBG.svg";
import Explore1 from "./assets/explore1.svg";
import Explore2 from "./assets/explore2.svg";
import Explore3 from "./assets/explore3.svg";
import Explore4 from "./assets/explore4.svg";
import Explore5 from "./assets/explore5.svg";
import Explore6 from "./assets/explore6.svg";

const experienceList = [
    {id: 1, title: "Scalable", body: "No matter the demand, Webiny Serverless CMS can easily scale to meet even the most challenging workloads.", imageSrc: Explore1},
    {id: 2, title: "Adaptable", body: "Being an open-source project, it's easy to modify and adapt things to your own needs.", imageSrc: Explore2},
    {id: 3, title: "Lower cost of ownership", body: "Self-hosted on top of serverless infrastructure. No infrastructure to manage, less people required to operate and maintain.", imageSrc: Explore3},
    {id: 4, title: "Secure", body: "Secured by AWS Cognito. It's also easy to integrate services like OKTA, Auth0 and similar.", imageSrc: Explore4},
    {id: 5, title: "Data ownership", body: "Webiny is self-hosted, it means your data stays within your data center.", imageSrc: Explore5},
    {id: 6, title: "Permission control", body: "Powerful options to control the permissions your users will have. They perfectly align with your business requirements.", imageSrc: Explore6},
]


const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundSize: ["cover", "auto", "cover"],
        padding: ["80px 15px 40px", "110px 15px 30px"]
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 769,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 26,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + rectangleBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const overviewContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 1200,
        padding: 0,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"]
    }),
);

const LogosWrapper = styled("div")(
    {
        display: "grid",
        gridGap: 73,
        marginTop: 100
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
    }),
);

const FeatureCard = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
        backgroundColor: theme.color.white,
        textAlign: "center",

        "& .feature-card__img": {
            width: "100%",
            height: 160,
            maxWidth: 261,
        },

        "& .feature-card__title": {
            margin: "17px 0px 12px",
            color: theme.color.black,
            fontSize: 28,
            fontWeight: theme.fontWeight.bold,
            lineHeight: "40px"
        },
        "& .feature-card__body": {
            margin: 0,
            color: theme.color.black,
            fontSize: 18,
            fontWeight: theme.fontWeight.lg,
            lineHeight: "26px",
            "& a": {
                color: theme.color.primaryDark,
            },
        },
        "& .feature-card__connector": {
            position: "absolute",
            top: "-13%",
            zIndex: 1,
        },
    },  
    mq({
        width: [360, 360, 352],
        height: ["auto", 380],
        justifySelf: ["center"],
        borderColor: ["white", "white", "#E2E2E2"],

        "& .feature-card__connector": {
            display: ["none", "block"],
            width: ["auto", 400, "auto"],
        },
    }),
);

const ExploreCMS = () => {
    return (
        <Section>
            <ContentContainer className={overviewContainerClass}>
                <Title>
                    Explore the Benefits of Webiny <TitleHighlight>Serverless CMS</TitleHighlight>
                </Title>
                <LogosWrapper>
                    {experienceList.map((item, index) => (
                        <FeatureCard key={item.id} key={index} {...item}>
                            <img
                                className="feature-card__img"
                                src={item.imageSrc}                                
                            />
                            <h4 className="feature-card__title">{item.title}</h4>
                            <p className="feature-card__body">{item.body}</p>
                        </FeatureCard>
                    ))}
                </LogosWrapper>
            </ContentContainer>
        </Section>
    );
};

export default ExploreCMS;
