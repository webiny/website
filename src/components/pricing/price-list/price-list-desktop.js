import React from "react"
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import Button from "../../ui/button";
import circleCheck from "../assets/circle-check.svg"

const buttonOutlinePrimary = css({
    backgroundColor: `${theme.color.white} !important`,
    color: `${theme.color.primaryDark} !important`,
    border: `solid 2px ${theme.color.primaryDark} !important`,
    padding: "12px 20px !important",
});

const FlexWrapper = styled("div")(
    {
        display: "flex"
    }
);

const MainWrapper = styled("div")(
    {
        width: "55%",
        textTransform: "uppercase",

        "& p": {
            maxWidth: 440,
            color: theme.color.blue100
        }
    }
);

const SubWrapper = styled("div")(
    {
        width: "22.5%",
        textAlign: "center",

        "& p": {
            maxWidth: 232,
            margin: "10px auto"
        },

        "&.with-button": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            "& button": {
                width: 150
            }
        }
    }
);

const PriceListDesktop = ({priceList}) => {
    return (
        <>
            <FlexWrapper>
                <MainWrapper />
                <SubWrapper>
                    <h4>Open Source</h4>
                    <p>Build full-stack serverless web applications free forever</p>
                </SubWrapper>
                <SubWrapper>
                    <h4>Enterprise</h4>
                    <p>For businesses that want extra security and support</p>
                </SubWrapper>
            </FlexWrapper>
            {
                priceList.map((item, index) => 
                    <FlexWrapper key={index}>
                        <MainWrapper>
                            <p>{item.label}</p>
                        </MainWrapper>
                        <SubWrapper>{ item.open_source ? <img src={circleCheck} alt=""/> :  '-'}</SubWrapper>
                        <SubWrapper>{ item.enterprise && <img src={circleCheck} alt=""/>}</SubWrapper>                            
                    </FlexWrapper>
                )
            }
            <FlexWrapper>
                <MainWrapper />
                <SubWrapper className="with-button">
                    <Button type="outline" className={buttonOutlinePrimary}>
                        Get Started
                    </Button>
                </SubWrapper>
                <SubWrapper className="with-button">
                    <Button type="primary">
                        Book a Call
                    </Button>
                </SubWrapper>
            </FlexWrapper>
        </>
    )
}

export default PriceListDesktop
