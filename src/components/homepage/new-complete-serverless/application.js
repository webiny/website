import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import Button from "../../ui/button";
import Logo from "./assets/application/logo.svg";
import vectorIcon from "./assets/application/highlight.svg";
import MainImage from "./assets/application/main.svg";
import Icon1 from "./assets/application/icon1.svg";
import Icon2 from "./assets/application/icon2.svg";
import Icon3 from "./assets/application/icon3.svg";
import Icon4 from "./assets/application/icon4.svg";
import arrowIcon from "./assets/arrow-white.svg";

const ctaBtn = css({
    maxWidth: 260,
    width: "260px !important",
    backgroundColor: theme.color.purple + "!important",

    "& img": {
        marginLeft: 15,
    },
});

const ApplicationPart = styled("div")(
    {
        marginTop: 120
    }
)

const ApplicationSection = styled("div")(
    {
        display: "flex",
    },
    mq({
        width: ["auto", "100%"],
        alignItems: ["center", "stretch"],
        flexDirection: ["column", "row"],
    }),
);

const LeftPart = styled("div")(
    {
        padding: '0 20px',

        "& .navigation-header": {
            display: "flex",
            alignItems: "center",
            padding: "0 0 33px",
            borderBottom: "1px solid #E6E6E6",

            img: {
                marginRight: 30
            },

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

        '& .description-item': {
            padding: 30,
            background: '#F9F5FF',

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
    {icon: Icon1, text: 'Full-stack web applications'},
    {icon: Icon2, text: 'Multi-tenant SaaS applications'},
    {icon: Icon3, text: 'Microservices'},
    {icon: Icon4, text: 'GraphQL APIs'}
];

const descriptionList = [
    {title: 'Modern dev toolchain', description: 'Develop using the best tools in the industry - TypeScript, Jest, ESLint, Yarn 2, Pulumi, and more.'},
    {title: 'Scaffolding', description: 'Use scaffold templates to quickly create a new web app, REST or GraphQL API and more.'},
    {title: 'IaC', description: 'Manage your project’s cloud resources via code and deploy into multiple environments.'},
    {title: 'CI/CD', description: 'Built-in CI/CD support with Jest and Cypress tests.'}
]

const Application = () => {
    return (
        <ApplicationPart>
            <ApplicationSection>
                <LeftPart>
                    <div className="navigation-header">
                        <img src={Logo} alt="" />
                        <h5>
                            Webiny Serverless <span> Application Framework</span>
                        </h5>
                    </div>
                    <p className="description">Open-source framework that helps you to <span>architect, build and deploy</span> solutions on top of serverless infrastructure.</p>
                    <p className="sub-title">USE THE FRAMEWORK TO BUILD:</p>
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
            </ApplicationSection>
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
        </ApplicationPart>        
    );
};

export default Application;
