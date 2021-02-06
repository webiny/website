import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import Button from "../../ui/button";
import Logo from "./assets/cms/logo.svg";
import vectorIcon from "./assets/cms/highlight.svg";
import MainImage from "./assets/cms/main.png";
import Icon1 from "./assets/cms/icon1.svg";
import Icon2 from "./assets/cms/icon2.svg";
import Icon3 from "./assets/cms/icon3.svg";
import Icon4 from "./assets/cms/icon4.svg";
import arrowIcon from "./assets/arrow-white.svg";

const ctaBtn = css(
    {
        maxWidth: 260,
        width: "260px !important",
        backgroundColor: theme.color.primaryDark + "!important",
        margin: '0 auto',

        "& img": {
            marginLeft: 15,
        },
    },
    mq({
        
    })
);

const CMSInner = styled("div")(
    {
        display: "flex",
    },
    mq({
        width: ["auto", "100%"],
        alignItems: ["center", "stretch"],
        flexDirection: ["column", "row-reverse"],
    }),
);

const CMSPart = styled("div")(
    {
        marginTop: 150
    }
)

const LeftPart = styled("div")(
    {
        padding: '0 20px',

        "& .navigation-header": {
            display: "flex",
            alignItems: "center",
            padding: "0 0 33px",
            borderBottom: "1px solid #E6E6E6",

            "& h5": {
                fontSize: 42,
                color: theme.color.black,
                lineHeight: "44px",
            },

            "& span": {
                backgroundImage: "url(" + vectorIcon + ")",
                backgroundPositionX: "right",
                backgroundPositionY: "bottom",
                backgroundRepeat: "no-repeat",
            },
        },

        '& .description': {
            marginTop: 25,            
            fontSize: 20,
            lineHeight: '32px',
            letterSpacing: '0.08px',
            color: '#000E1A',

            '& span': {
                fontWeight: 700
            }
        },

        '& .sub-title': {
            fontWeight: 600,                    
            fontSize: 16,
            lineHeight: '20px',
            color: '#000'
        },

        '& .build-list': {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',

            '& .build-item': {
                display: 'flex',
                alignItems: 'center',
                marginBottom: 40,

                '& img': {
                    marginRight: 18
                },

                '& p': {
                    margin: 0,
                    maxWidth: 142,
                    fontWeight: 600,                    
                    fontSize: 18,
                    lineHeight: '23px',
                    color: '#000'
                }
            }
        },

        '& .action-part': {
            display: 'flex',
            alignItems: 'center'
        }
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        marginBottom: [0, 0],

        '& .action-part': {
            justifyContent: ['center', 'flex-start']
        },

        "& .navigation-header": {
            flexDirection: ['column', 'row'],
            textAlign: ['center', 'left'],

            '& img': {
                marginRight: [0, 30]
            },
        }
    }),
);

const RightPart = styled("div")(
    {
        '& img': {
            width: '100%'
        }
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        marginBottom: [30, 0],
        padding: ['40px 20px 0', '0 20px'],
    }),
);

const DescriptionList = styled("div")(
    {
        display: 'grid',
        marginTop: 38,
        padding: '0 20px',

        '& .description-item': {
            padding: 30,
            background: '#FFF5F5',

            '&.bordered': {
                borderRight: '2px solid white',
            },

            '& h6': {
                fontWeight: 'bold',                    
                fontSize: 18,
                lineHeight: '23px',
                color: '#000E1A',
                marginBottom: 15
            },

            '& p': {
                fontWeight: 600,                    
                fontSize: 16,
                lineHeight: '23px',
                color: '#313C48',
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

const buildList = [
    {icon: Icon1, text: 'No-code GraphQL APIs'},
    {icon: Icon2, text: 'Marketing sites and forms'},
    {icon: Icon3, text: 'Multi-website solutions'},
    {icon: Icon4, text: 'Multi-language sites'}
];

const descriptionList = [
    {title: 'SEO', description: 'The built-in prerendering services makes your pages crawlable by search engines.'},
    {title: 'Images', description: 'Manage digital assets, resize and deliver images on multiple resolutions.'},
    {title: 'Plugins', description: 'Expand and change any aspact of the system with custom plugins and business logic.'},
    {title: 'Performance', description: 'Numerous built-in performance optimizations make your sites fast and scalable.'}
]

const CMSSection = () => {
    return (
        <CMSPart>
            <CMSInner>
                <LeftPart>
                    <div className="navigation-header">
                        <img src={Logo} alt="" />
                        <h5>
                            Webiny Serverless <span> CMS</span>
                        </h5>
                    </div>
                    <p className="description">
                        A <span>self-hosted serverless CMS</span> that includes a headless GraphQL API, asset management, and a no-code builder for static pages and forms. Scaleable & cost-effective.
                    </p>
                    <p className="sub-title">USE THE CMS TO CREATE:</p>
                    <div className="build-list">
                        {
                            buildList.map((item, index) => (
                                <div className="build-item"  key={index}>
                                    <img src={item.icon} alt=""/>
                                    <p>{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="action-part">
                        <Button
                            type="primary"
                            className={ctaBtn}                    
                        >
                            Learn More <img src={arrowIcon} alt="" className="icon" />
                        </Button>
                    </div>
                </LeftPart>
                <RightPart>
                    <img src={MainImage} alt=""/>
                </RightPart>
            </CMSInner>
            <DescriptionList>
                {
                    descriptionList.map((item, index) => (
                        <div className={`description-item ${index < 3 ? "bordered" : ""}`} key={index}>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </DescriptionList>
        </CMSPart>        
    );
};

export default CMSSection;
