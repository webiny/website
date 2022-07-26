import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import theme from "../../utils/theme";
import Button from "../../ui/button";
import circleCheck from "../assets/circle-check.svg";

const buttonOutlinePrimary = css({
    backgroundColor: `${theme.color.white} !important`,
    color: `${theme.color.primaryDark} !important`,
    border: `solid 2px ${theme.color.primaryDark} !important`,
    padding: "12px 20px !important",
});

const FlexWrapper = styled("div")({
    display: "flex",
    "&.list": {
        lineHeight: "100%",
        alignItems: "center",
        "&:nth-child(even)": {
            backgroundColor: "#f2f2f2",
        },
        img: {
            lineHeight: "100%",
        },
        p: {
            marginBottom: 0,
            padding: "15px",
            lineHeight: "125%",
        },
    },
});

const MainWrapper = styled("div")({
    width: "50%",
    textTransform: "uppercase",

    "& p": {
        maxWidth: 440,
        color: theme.color.blue100,
    },
});

const SubWrapper = styled("div")({
    width: "22.5%",
    textAlign: "center",

    "& h4": {
        fontWeight: "bold",
    },

    "& p": {
        maxWidth: 232,
        margin: "0 auto 20px",
    },

    "&.with-button": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,

        a: {
            width: 150,
            display: "block",
        },
        h3: {
            marginTop: 0,
        },
    },
});

const PriceListDesktop = ({ priceList }) => {
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
            {priceList.map((item, index) => (
                <FlexWrapper className="list" key={index}>
                    <MainWrapper>
                        <p>{item.label}</p>
                    </MainWrapper>
                    <SubWrapper>
                        {item.open_source ? <img src={circleCheck} alt="" /> : "-"}
                    </SubWrapper>
                    <SubWrapper>{item.enterprise && <img src={circleCheck} alt="" />}</SubWrapper>
                </FlexWrapper>
            ))}
            <FlexWrapper>
                <MainWrapper />
                <SubWrapper className="with-button">
                    <h3>Free</h3>
                    <Button
                        type="outline"
                        Button
                        target="_blank"
                        className={buttonOutlinePrimary}
                        link="/docs/webiny/introduction/"
                    >
                        Get Started
                    </Button>
                </SubWrapper>
                <SubWrapper className="with-button">
                    <h3>Custom</h3>
                    <Button target="_blank" link="https://site.webiny.com/forms/product-demo" type="primary">
                        Book a Call
                    </Button>
                </SubWrapper>
            </FlexWrapper>
        </>
    );
};

export default PriceListDesktop;
