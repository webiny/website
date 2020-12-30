import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";


const contentContainerClass = css(
    {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200        
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

const ctaButton = css(
    {
        maxWidth: 320,
        margin: "30px auto !important"
    }
)

const WebinyEnterpriseSection = styled("section")(
    {
        backgroundColor: theme.color.backgroundGray
    }
)

const Feature = styled("div")(
    {
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative"    
    },
    mq({
        flexDirection: ["column", "row"],
        backgroundColor: ["transparent", theme.color.white],
        boxShadow: ["none", "0px 0px 15px rgba(0,0,0,0.0941176)"],
        borderRadius: [0, 8]
    }),
);

const FeatureContent = styled("div")(
    {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        "&.enterprise": {        
            backgroundColor: "#FA5A28",
            padding: 40,            

            "&:before": {
                content: '" "',
                position: "absolute",
                right: -37,
                bottom: 0,
                width: 0,
                height: 0,
                borderLeft: "37px solid #FA5A28",
                borderTop: "191px solid transparent",
                borderBottom: "161px solid transparent",
            }
        },

        "& p": {
            textAlign: "center",
            fontSize: 20,

            "&.white-color": {
                color: theme.color.white
            },

            "&.discuss-step": {
                maxWidth: 400
            }
        },

        "& ul": {
            listStyle: "none",

            "& li": {
                position: "relative",
                paddingLeft: 25,
                fontSize: 18,
                color: theme.color.white,
                
                "& span": {
                    position: "absolute",
                    top: 5,
                    left: 0,
                    height: 15,
                    width: 15,
                    backgroundColor: "#00CCB0",
                    borderRadius: "50%",

                    "&:after": {
                        content: '" "',
                        position: "absolute",
                        top: 4,
                        left: 4,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "white"                        
                    }
                }
            }
        }
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        padding: [0, "0px 45px"],
        marginBottom: [30, 0],

        "&.enterprise": {
            borderBottomLeftRadius: [8, 8],
            borderTopLeftRadius: [8, 8],            
            borderTopRightRadius: [8, 0],
            borderBottomRightRadius: [8, 0],

            "&:before": {
                display: ["none", "block"]
            }
        }
    }),
)

const Title = styled("h2")(
    {
        fontSize: 38,
        fontWeight: theme.fontWeight.bold,        
        marginTop: 0,

        "& span": {
            color: "#00CCB0"
        },

        "&.white-color": {
            color: theme.color.white
        },

        "&.black-color": {
            color: theme.color.black
        }
    },
    mq({
        marginBottom: [24, 40]
    }),
);

const WebinyEnterprise = () => {
    return (
        <WebinyEnterpriseSection>   
            <ContentContainer className={contentContainerClass}>
                <Feature>
                    <FeatureContent className="enterprise">
                        <Title className="white-color">Webiny Enterprise</Title>
                        <p className="white-color">For businesses that want extra security and support</p>
                        <ul>
                            <li><span></span> Priority-based SLA support service</li>
                            <li><span></span> Consultation services</li>
                            <li><span></span> Developer training</li>
                            <li><span></span> Ability to request features</li>
                            <li><span></span> Safe migration path for new updates</li>
                        </ul>
                    </FeatureContent>
                    <FeatureContent>
                        <Title className="black-color"><span>Ready</span> to try it out?</Title>
                        <p className="discuss-step">Let's discuss the next steps, a proof-of-concept, your specific needs or any technical or business questions you might have.</p>
                    </FeatureContent>                
                </Feature>
                <Button type="secondary" className={ctaButton}>
                    Talk to Us
                </Button>
            </ContentContainer>
        </WebinyEnterpriseSection>
    )
}

export default WebinyEnterprise
