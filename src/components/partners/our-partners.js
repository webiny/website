import Button from "../ui/button";
import ContentContainer from "../ui/content-container";
import Iconis from "./logos/iconis-logo.jpeg";
import Kipanga from "./logos/kipanga-logo.png";
import React from "react";
import arrowIcon from "./assets/arrow-default.svg";
import { css } from "emotion";
import logoAlpine from "./logos/alpine-logo.png";
import logoAntStack from "./logos/antstack-logo.svg";
import logoAnthill from "./logos/anthill-logo.png";
import logoCasaSoft from "./logos/casasoft-logo.svg";
import logoCodingSans from "./logos/coding-sans-logo.png";
import logoIan from "./logos/ian-logo.png";
import logoNttData from "./logos/ntt-data-logo.png";
import logoOev from "./logos/oev-logo.png";
import mq from "../utils/breakpoints";
import startImg from "./assets/star.svg";
import styled from "react-emotion";
import theme from "../utils/theme";
import titleHightlightImage from "./assets/partner-highlight.svg";

const wrapperClass = css({
    position: "relative",
    paddingTop: 0,
    paddingBottom: 0,
});

const contentContainerClass = css(
    {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%"],
        paddingTop: [0, 80],
        paddingBottom: [0, 80],
        "&::before": {
            display: ["none", "block"],
            left: [0, "-10%", "-10%"],
        },
    }),
);

const visitSiteBtn = css(
    {
        maxWidth: 320,
        borderColor: "#ED4005 !important",
        color: "#ED4005 !important",

        "& img": {
            marginLeft: 15,
        },
    },
    mq({
        marginLeft: [0, "15px !important"],
    }),
);

const Feature = styled("div")(
    {
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
    },
    mq({
        flexDirection: ["column", "row"],
        paddingBottom: [2],
        "&:nth-child(odd)": {
            flexDirection: ["column", "row-reverse"],
        },
    }),
);

const FeatureImagePart = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    mq({
        width: [320, "50%"],
        maxWidth: [600, "none"],
        padding: [0, "0px 45px"],
        marginBottom: [30, 0],
    }),
);

const FeatureImageInner = styled("div")(
    {
        position: "relative",
        margin: "0 auto",
        boxShadow: "rgba(100,100,100,0.24) 2px 3px 15px",
        height: 130,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 8,
        boxSizing: "border-box",
        img: {
            maxWidth: "100%",
            height: "auto",
            maxHeight: "100px",
            objectFit: "contain",
        },
    },
    mq({
        maxWidth: ["auto", 350],
        minWidth: ["auto", "65%"],
        padding: ["30px", 30],
        width: ["100%", "auto"],
    }),
);

const FeatureInfo = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",

        "& .location": {
            color: "#4F4F4F",
            fontSize: 15,
        },

        "& .description": {
            cololr: "#000E1A",
            fontSize: 20,
        },
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        padding: ["0px 30px", "0px 45px"],
        marginBottom: [30, 0],

        "& h3": {
            marginTop: [0, "0.7em"],
        },

        "&.border-right": {
            borderRight: ["none", "2px dashed #FA5A28"],
        },

        "&.border-left": {
            borderLeft: ["none", "2px dashed #FA5A28"],
        },
    }),
);

const RoundDot = styled("div")(
    {
        position: "absolute",
        width: 15,
        height: 15,
        backgroundColor: theme.color.white,
        border: "2px solid #FA5A28",
        borderRadius: 30,

        "&.right": {
            right: -10,
        },

        "&.left": {
            left: -11,
        },
    },
    mq({
        display: ["none", "block"],
    }),
);

const TopBorder = styled("div")(
    {
        width: 30,
        position: "absolute",
        border: "1px solid #FA5A28",
        top: 0,
        left: -17,
    },
    mq({
        display: ["none", "block"],
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
        maxWidth: 807,
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

const ButtonGroup = styled("div")(
    {
        display: "flex",
        marginBottom: 30,

        "& a": {
            width: "200px !important",
        },
    },
    mq({
        flexDirection: ["column", "row"],
        alignItems: ["center", "flex-start"],
        justifyContent: ["center", "flex-start"],

        "& a:first-child": {
            marginBottom: [10, 0],
        },
    }),
);

const BottomMark = styled("div")(
    {
        position: "absolute",
        bottom: -90,
        padding: 10,
        borderRadius: 50,
        border: "2px dashed #FA5A28",
        left: -47,
        width: 65,
        height: 65,

        "& .inner": {
            width: 65,
            height: 65,
            backgroundColor: "#FA5A28",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,

            "& img": {
                width: 35,
            },
        },
        "&.right": {
            right: -45,
            left: "auto",
        },

        "&.left": {
            left: -45,
            right: "auto",
        },
    },
    mq({
        display: ["none", "block"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + titleHightlightImage + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const ourPartners = [
    {
        image: logoAlpine,
        name: "Alpine Consulting Partners",
        location: "United States of America",
        website: "https://alpine-consulting.com/",
        description:
            "Alpine Consulting Partners is a full-service technology consultancy that provides design and implementation services to help clients tackle complex data challenges. We leverage industry leading enterprise performance management and analytics tools to help our clients improve business processes and reduce time to insight. We serve clients across multiple sectors including all levels of Government, Hospitality, Insurance, Banking, Technology, Manufacturing, Automotive and Energy industries.",
    },
    {
        image: logoAnthill,
        name: "Anthill",
        website: "https://www.anthillagency.com/",
        location: "Denmark / Germany",
        description:
            "Anthill is a digital communications agency for the life sciences. We believe that understanding human beliefs and behaviors is the missing piece in pharma digital communications. We call it the Human Factor. And when applied to each stage of the development process, it results in truly empowering experiences for customers. As a specialist life sciences digital communications agency, we work closely with global and regional teams: ensuring that every project has a strong strategy; developing the technical and creative solutions; building internal belief and support; and scaling adoption across organizations.",
    },
    {
        image: logoAntStack,
        name: "AntStack",
        website: "https://www.antstack.io/",
        location: "India",
        description:
            "AntStack is a fullstack serverless company aiming at providing holistic solutions to get you up and running with serverless!",
    },
    {
        image: logoCasaSoft,
        name: "Casasoft",
        location: "Malta",
        website: "https://www.casasoft.mt/",
        description:
            "CasaSoft is an award-winning ISO 9001:2015 certified software company based in Malta helping businesses succeed by increasing their productivity, efficiency, sales and competitiveness whilst reducing costs by working smarter, not harder.",
    },
    {
        image: logoCodingSans,
        name: "Coding Sans",
        location: "Hungary",
        website: "https://codingsans.com/",
        description:
            "Coding Sans is a full-stack web development agency building complex, market-ready products from design to delivery.",
    },
    {
        image: logoIan,
        name: "Ian Digital Talent",
        location: "Argentina",
        website: "https://iandigitaltalent.com/en/",
        description:
            "Ian Digital Talent adopts a cost-effective approach to provide retail companies around the world with customized e-commerce and marketplace serverless solutions",
    },
    {
        image: logoNttData,
        name: "NTT Data",
        website: "https://www.nttdata.com/",
        location: "Global",
        description:
            "NTT DATA is a top 10 global IT services provider, headquartered in Tokyo and operating in more than 50 countries. For us, work is not only for technological innovation, it is about connecting people to create better solutions for everyday life. NTT DATA offers an advanced portfolio of consulting, application, business process, cloud, and infrastructure services to businesses and governments worldwide. Our roots cross continents and cultures, dating back five decades. Since the foundation of NTT DATA , we have made sustainable business growth through our DNA to be people-oriented. Through our long-term perspective, we hope to make a big difference in this world by getting the small things right. This pedigree yields a characteristic unique to NTT DATA: the opportunity for a global brand with the creative energy and enthusiasm of an entrepreneur.",
    },
    {
        image: logoOev,
        name: "OEV",
        website: "https://www.oev-online.de/",
        location: "Germany",
        description:
            "OEV Online Dienste GmbH was founded in Düsseldorf (Germany) in 2001. It is an expert for digital media with distinct expertise in CMS systems. It develops comprehensive, cross-media concepts and advises clients on all aspects of digital distribution.",
    },
    {
        image: Iconis,
        name: "Iconis",
        website: "https://iconisagency.com/",
        location: "Croatia",
        description:
            "We are highly experienced, creative, motivated, dedicated professionals that will do everything necessary to produce the best possible results for our clients. Our team is comprised of talented marketers, brand strategy experts, web developers, designers, and social media managers. We specialise in digital marketing strategy, web development, eCommerce, content production, branding, design. This means that we invest every available resource in developing and improving our skills so that we are able to provide a better service.",
    },
    {
        image: Kipanga,
        name: "Kipanga",
        website: "www.kipanga.com.au/",
        location: "Australia",
        description:
            "With more than 20 years of software development experience; building online solutions for clients in retail, supply chain, medical, automotive and education industries, Kipanga is equipped with the experience and knowledge to help businesses with their online endeavours - branding websites, e-commerce solutions, and any custom software. Our process starts with understanding our client needs and goals, and then architect and develop a suitable solution within budget. We are certified AWS experts, and utilise their services to develop robust, resilient, scalable and cost effective solutions to our clients.",
    },
];

const ServerLessAdvantage = () => {
    return (
        <section className={wrapperClass}>
            <ContentContainer className={contentContainerClass}>
                <Wrapper>
                    <Title>
                        Our <TitleHighlight>partners</TitleHighlight>
                    </Title>
                </Wrapper>
                {ourPartners.map((partner, index) => (
                    <Feature key={index}>
                        <FeatureImagePart>
                            <FeatureImageInner>
                                <img src={partner.image} alt="partner iamge" />
                            </FeatureImageInner>
                        </FeatureImagePart>
                        <FeatureInfo className={index % 2 ? "border-right" : "border-left"}>
                            {index === 0 && <TopBorder />}
                            <h3>{partner.name}</h3>
                            <p className="location">{partner.location}</p>
                            <p className="description">{partner.description}</p>
                            <ButtonGroup>
                                <Button type="primary" link="mailto:partners@webiny.com">
                                    Contact this Partner
                                </Button>
                                <Button
                                    link={partner.website}
                                    target="_blank"
                                    type="outline"
                                    className={visitSiteBtn}
                                >
                                    Visit Website <img src={arrowIcon} alt="" className="icon" />
                                </Button>
                            </ButtonGroup>
                            <RoundDot className={index % 2 ? "right" : "left"} />
                            {index === ourPartners.length - 1 && (
                                <BottomMark className={index % 2 ? "right" : "left"}>
                                    <div className="inner">
                                        <img src={startImg} alt="" />
                                    </div>
                                </BottomMark>
                            )}
                        </FeatureInfo>
                    </Feature>
                ))}
            </ContentContainer>
        </section>
    );
};

export default ServerLessAdvantage;
