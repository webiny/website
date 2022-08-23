import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import checkImg from "../assets/circle-check.svg";
import Button from "../../ui/button";

const buttonOutlinePrimary = css({
    backgroundColor: `${theme.color.white} !important`,
    color: `${theme.color.primaryDark} !important`,
    border: `solid 2px ${theme.color.primaryDark} !important`,
    padding: "12px 20px !important",
});

const PriceGroupItem = styled("div")({
    maxWidth: "90%",
    margin: "0 auto",

    "& h3": {
        textAlign: "center",
    },

    "& h4": {
        marginTop: 0,
        textAlign: "center",
    },
    ">p": {
        textAlign: "center",
    },

    ">a": {
        marginTop: 15,
    },

    "& .price-mobile-item": {
        display: "flex",
        marginBottom: 10,
        alignItems: "flex-start",

        "& div": {
            width: 21,
            display: "flex",
            justifyContent: "center",
        },

        "& p": {
            margin: "0 0 0 10px",
            textTransform: "uppercase",
            color: theme.color.blue100,
        },
    },
});

const PriceListMobile = ({ priceList }) => {
    return (
        <>
            <PriceGroupItem>
                <h3>Open Source</h3>
                <h4>Free</h4>
                <p>Build full-stack serverless web applications free forever</p>
                {priceList.map((item, index) => (
                    <div className="price-mobile-item" key={index}>
                        <div>{item.open_source ? <img src={checkImg} alt="" /> : "-"}</div>
                        <p>{item.label}</p>
                    </div>
                ))}
                <Button
                    Button
                    target="_blank"
                    className={buttonOutlinePrimary}
                    link="/docs/webiny/introduction/"
                >
                    Get Started
                </Button>
            </PriceGroupItem>
            <PriceGroupItem>
                <h3>Enterprise</h3>
                <h4>Custom</h4>
                <p>For businesses that want extra security and support</p>
                {priceList.map((item, index) => (
                    <div className="price-mobile-item" key={index}>
                        <div>{item.enterprise && <img src={checkImg} alt="" />}</div>
                        <p>{item.label}</p>
                    </div>
                ))}
                <Button
                    target="_blank"
                    link="https://site.webiny.com/forms/product-demo"
                    type="primary"
                >
                    Talk to Us
                </Button>
            </PriceGroupItem>
        </>
    );
};

export default PriceListMobile;
