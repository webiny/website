import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import ContentContainer from "../../ui/content-container";
import mq from "../../utils/breakpoints";
import vectorIcon from "./assets/highlight.svg";
import Icon1 from "./assets/icon1.svg";
import Icon2 from "./assets/icon2.svg";
import Icon3 from "./assets/icon3.svg";
import Icon4 from "./assets/icon4.svg";

const FocusBusinessSection = styled("section")({
    width: "100%",
    margin: "0 auto 50px 0",
    backgroundSize: "cover",
    color: theme.color.black,
    boxSizing: "border-box",
    position: "relative",
    padding: "20px 20px 70px",
    background: '#F6F4F8'
});

const Title = styled("h1")(
    {
        fontSize: 26,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        lineHeight: "48px",
    },
    mq({
        textAlign: ['center', 'left']
    })
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const SubTitle = styled("h3")(
    {
        fontSize: 16,
        fontWeight: theme.fontWeight.bold,
        lineHeight: "20px",
        marginBottom: 2,
        color: '#44486C',
    },
    mq({
        maxWidth: [337, 887],
        textAlign: ['center', 'left'],
        margin: ['0 auto', 0]
    }),
);

const contentContainerClass = css(
    {
        position: "relative",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const DescriptionList = styled("div")(
    {
        display: 'grid',
        marginTop: 38,
        gridGap: 30,

        '& .description-item': {
            '& div': {
                display: 'flex',
                alignItems: 'center',
                marginBottom: 15,

                '& img': {
                    marginRight: 15
                }
            },

            '& h6': {
                fontWeight: 'bold',                    
                fontSize: 18,
                lineHeight: '23px',
                color: '#000E1A',
                margin: 0
            },

            '& p': {
                fontWeight: 600,                    
                fontSize: 16,
                lineHeight: '23px',
                color: '#000E1A',
                margin: 0
            }
        }
    },
    mq({
        gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(4, 1fr)'],
        '& .description-item': {
            marginBottom: [20, 0],

            '&.bordered': {
                borderRight: [0, '2px solid white'],
            },
        }
    }),
)

const descriptionList = [
    {img: Icon1, title: 'SEO', description: 'The built-in prerendering services makes your pages crawlable by search engines.'},
    {img: Icon2, title: 'Images', description: 'Manage digital assets, resize and deliver images on multiple resolutions.'},
    {img: Icon3, title: 'Plugins', description: 'Expand and change any aspact of the system with custom plugins and business logic.'},
    {img: Icon4, title: 'Performance', description: 'Numerous built-in performance optimizations make your sites fast and scalable.'}
];

const FocusBusiness = () => {
    return (
        <FocusBusinessSection>            
            <ContentContainer className={contentContainerClass}>
                <SubTitle>Explore the products</SubTitle>
                <Title>
                    Focus on <TitleHighlight>Your Business Requirements,</TitleHighlight> Not Serverless Infrastructure Complexities                    
                </Title>
                <DescriptionList>
                    {
                        descriptionList.map((item, index) => (
                            <div className="description-item" key={index}>
                                <div>
                                    <img src={item.img} alt=""/>
                                    <h6>{item.title}</h6>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </DescriptionList>
            </ContentContainer>
        </FocusBusinessSection>
    );
};

export default FocusBusiness;
