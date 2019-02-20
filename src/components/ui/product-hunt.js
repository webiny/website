import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import Cookies from "js-cookie";
import mq from "../utils/breakpoints";
import Button from "./button";
import { keyframes } from "emotion";

import closeBtn from "./assets/round-close-24px.svg";

const fadeAnim = keyframes`
    90% {
      visibility: hidden;
      opacity: 0;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
`;

const Wrapper = styled("div")({
    position: "fixed",
    bottom: 25,
    zIndex: 1000,
    left: 25,
    textAlign: "center"
});

const Box = styled("div")(
    {
        boxShadow: "0 4px 8px 0 rgba(209,209,209,0.50)",
        border: "1px solid #E6E6E6",
        backgroundColor: "#fff",
        padding: "25px",
        borderRadius: 8,
        fontSize: theme.fontSize.paragraph,
        color: theme.color.black,
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        animation: "5s " + fadeAnim,
        animationFillMode: "forwards",
        opacity: 0,
        visibility: "hidden"
    },
    mq({
        width: ["95%", "260px"]
    })
);

const CloseBtn = styled("img")({
    opacity: "0.5",
    cursor: "pointer",
    height: 20,
    transition: "225ms all",
    position: "absolute",
    right: 5,
    top: 5,
    "&:hover": {
        opacity: "0.75"
    }
});

class ProductHunt extends React.Component {
    state = { ack: false };

    componentDidMount() {
        let val = Cookies.get("producthunt_banner_ack");
        if (val === "true") {
            this.setState({ ack: true });
        }
    }

    closeBox = () => {
        this.setState({ ack: true }, () => {
            Cookies.set("producthunt_banner_ack", "true", { expires: 3650 });
        });
    };
    render() {
        if (this.state.ack) {
            return null;
        }

        return (
            <Wrapper>
                <Box>
                    Hi 👋 do you like Webiny? Don't forget to show us your love on Product Hunt 🚀
                    <br />
                    <br />
                    <Button type="primary" link="https://producthunt.com/">
                        Webiny on Product Hunt
                    </Button>
                    <CloseBtn src={closeBtn} onClick={this.closeBox} />
                </Box>
            </Wrapper>
        );
    }
}

export default ProductHunt;
