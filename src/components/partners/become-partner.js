import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";

import highLightImg from "./assets/highlight-become.svg";
import freeImg from "./assets/free.svg";
import insightImg from "./assets/insight.svg";
import clientImg from "./assets/client.svg";
import commissionImg from "./assets/commission.svg";

const ctaBtn = css({
    maxWidth: 260,
    width: "260px !important",
    backgroundColor: theme.color.purple + "!important",

    "& img": {
        marginLeft: 15
    }
})

const containerClass = css(
    {
        maxWidth: 1200
    },
    mq({
        width: ["100%", "100%"],
    }),
)

const Section = styled("section")(    
    mq({
        padding: ["0px 15px 15px", "100px 15px 100px"],
    }),
)

const Wrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",

        "& p": {
            margin: "20px 0 0"
        }
    },
    mq({
        width: ["100%", "100%"],
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
        margin: "60px 0px 0px"        
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
        fontSize: [40, theme.fontSize["5xl"]],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + highLightImg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const BecomePartnerList = styled("div")(
    {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)"
    }
)

const BecomePartnerItem = styled("div")(
    {        
        padding: 15,

        "& div": {
            textAlign: "center",

            "& img": {
                width: "80%",
                height: 180,
                objectFit: "contain"
            }
        },

        "& p": {
            maxWidth: 230,
            margin: "0 auto",
            fontWeight: 700,
            textAlign: "center"
        }
    }
)

const partnerList = [
    {image: freeImg, title: "Free consultancy and technical support"},    
    {image: insightImg, title: "Insight into Webiny roadmap"},
    {image: clientImg, title: "Client introductions"},
    {image: commissionImg, title: "Commission on Webiny Enterprise sales"},
]

const CaseStudy = () => {
    return (
        <Section>
            <ContentContainer className={containerClass}>
                <Wrapper>
                    <Title>
                        Want to becoma a {" "}
                        <TitleHighlight>
                            Webiny partner?
                        </TitleHighlight>
                    </Title>
                    <p>Being a Webiny partner comes with many benefits.</p>
                    <p>Here are just a few:</p>
                </Wrapper>
                <BecomePartnerList>
                    {
                        partnerList.map((partner, index) => 
                            <BecomePartnerItem key={index}>
                                <div>
                                    <img src={partner.image} alt=""/>
                                </div>                                
                                <p>{partner.title}</p>
                            </BecomePartnerItem>
                        )
                    }
                </BecomePartnerList>
            </ContentContainer>
        </Section>
    )
}

export default CaseStudy
