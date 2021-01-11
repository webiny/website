import React from "react";
import styled from "react-emotion";
import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import {css} from "emotion";
import MainImg from "../assets/main.svg";
import QuoteImg from "../assets/quote.svg";

const MainSection = styled("div")(
    {        
        
    },
    mq({
        width: ["auto", "75%"],
        padding: ["20px", "0 20px"],
        borderRight: ["none", "1px solid #E2E2E2"]
    })
)

const Title = styled("h3")(
    {
        fontWeight: 700,
        marginTop: 0
    }
)

const CaseItemSection = styled("div")(
    {
        margin: "20px 0",
        position: "relative",

        "& ol": {
            paddingLeft: 15,

            "& li": {
                paddingLeft: 10,
                marginTop: 10
            }
        },

        "& .flex-item": {            
            width: "100%",

            "& .half": {
                "&:nth-child(2)": {
                    marginTop: 15
                }
            }
        },

        "& .underline": {
            textDecoration: "underline"
        },

        "& ul": {
            listStyle: "none",
            marginBottom: 30,

            "& li": {
                position: "relative",
                paddingLeft: 30,
                marginBottom: 10,

                "& span": {
                    position: "absolute",
                    top: 4,
                    left: 0,
                    height: 15,
                    width: 15,
                    backgroundColor: "#798099",
                    borderRadius: "50%",

                    "&::after": {
                        content: '" "',
                        position: "absolute",
                        top: 4,
                        left: 4,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#fff",
                    }
                }
            }
        },

        "& a": {
            color: theme.color.purple
        }
    },
    mq({
        "& .flex-item": {
            display: ["block", "flex"],

            "& .half": {
                width: ["auto", "50%"],
            }
        }
    })
)

const SummarySection = styled("div")(
    {
        borderLeft: "5px solid " + theme.color.purple,
        margin: "20px 0",
        padding: "10px 30px",
        color: theme.color.purple,
        
        "&.half": {
            width: "50%"
        },

        "& .main-title": {
            fontSize: "2rem",
            marginBottom: 15,
            lineHeight: 1.2
        },

        "& .sub-title": {            
            marginBottom: 5        
        }
    }
)

const QuoteImage = styled("img")(
    {
        position: "absolute",
        top: -27,
        left: -27
    }
)

const MainImage = styled("img")(
    {
        width: "100%"
    }
)

const MainContent = () => {
    return (
        <MainSection>
            <CaseItemSection>
                <QuoteImage src={QuoteImg} alt=""/>               
                <Title>
                    ActiveCampaign is so flexible. I was able to create a loyalty program that has helped us learn more about our customers and keep them engaged.
                    We are now understanding our customers better and becoming more personal at every touchpoint.
                </Title>
                <p>
                    When <a href="#">Koia's</a> founders saw firsthand the toll that stress and poor nutrition can have on people, they decided to create a product 
                    that helped people live healthier lives.
                </p>
                <p>
                    To do so, they studied regions in the world where people live longer than others - and eat predominantly plant-based diets, 
                    make movement part of every day, and stay socially active.
                </p>
                <p>
                    Koia's name is inspired by one of those studied places, the lush Nicoya Peninsula in Costa Rica.
                    Plant-powered Koia brings these values to life with protein, keto, and coffee plan-based drinks and shakes, designed to provide people a 
                    balance of complete protein, fiber, and healthy fats.
                </p>
                <p>
                    To bring their product to a broader audience and build the Koia community, the Koia team turned to Customer Experience Automation(CXA).
                </p>
                <p className="underline">
                    Keep reading to learn how the Koia team:
                </p>
                <ul>
                    <li><span></span> Grew out of their original email marketing platform - and found a new platform that could grow with them</li>
                    <li><span></span> Uses CXA apps to create an engaging customer experience across channels</li>
                    <li><span></span> Built the Koia Krew, a loyalty program that brings together a community and gamifies brand advocacy</li>
                    <li><span></span> Uses segmentation to personalize and tailor messaging based on customer's hobbies, location, and more</li>
                </ul>
                <MainImage src={MainImg} alt=""/>
            </CaseItemSection>            
            <CaseItemSection>
                <Title>Finding a platform to grow alongside your business</Title>
                <p>
                    When they started email marketing, the Koia team used Mailchimp, which was great way to get their feet we with email campaigns. 
                    But as Koia experienced tremendous growth, they wanted a platform that could grow with them.
                </p>
                <div className="flex-item">
                    <SummarySection className="half">
                        <p className="main-title">Engaging subscribers with welcome series, flexible automations, and loyalty program</p>
                        <p className="sub-title">Lorem ipsum, nullelarum</p>
                    </SummarySection>
                    <div className="half">
                        More than anything else, Koia wanted to learn more about their subscribers, so they could cater personalized messages, so each of them - at scale.
                        That's why the Koia team chose ActiveCampaign as their Customer Experience Automation platform.
                    </div>
                </div>
            </CaseItemSection>
            <CaseItemSection>
                <Title>Engaging subscribers with welcome series, flexible automations, and loyalty program</Title>
                <p>With ActiveCampaign, a new Koia subscriber's journey looks like this:</p>
                <ol>
                    <li>A new subscriber signs up for the Koia newsletter or enters a giveaway, giving the Koia team their email address and location</li>
                    <li>The susbscriber enters a welcome series that nurtures the lead, shares promotions and coupons, and educates theme about all things Koia</li>
                    <li>If the new subscriber is active, clicking on links an dopening emails, they're added to a Facebook Custom Audience</li>
                    <li>Koia uses the Facebook Custom Audience to find a similiar audiences on Facebook to target with future giveaways</li>
                    <li>Active subscribers also receive the Koia Krew loyalty program recruitment email</li>
                </ol>
                <SummarySection>
                    <p className="main-title">Engaging subscribers with welcome series, flexible automations, and loyalty program</p>
                    <p className="sub-title">Lorem ipsum, nullelarum</p>
                </SummarySection>
                <p>Customer Experience Automation lets the Koia team create a personalized experience that delights customers, build brand advocacy, and continue to grow their business with their customers top-of-mind</p>
            </CaseItemSection>
        </MainSection>
    )
}

export default MainContent
