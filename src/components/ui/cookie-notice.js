import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import Cookies from "js-cookie";
import mq from "../utils/breakpoints";

import closeBtn from "./assets/round-close-24px.svg";

const Wrapper = styled("div")(
    {
        position: "fixed",
        zIndex: 1000,
        left: 0,
        right: 0,
    },
    mq({
        bottom: [15, 10],
        textAlign: ["left", "center"],
    }),
);

const Box = styled("div")(
    {
        boxShadow: "0 4px 6px rgba(50,50,93,.1), 0 1px 3px rgba(0,0,0,.075)",
        backgroundColor: "rgba(246,249,252,.9)",
        padding: "8px 5px 8px 15px",
        borderRadius: 8,
        fontSize: theme.fontSize.paragraph,
        color: theme.color.black,
        position: "relative",
        display: "flex",
        alignItems: "center",
        a: {
            color: theme.color.primaryDark,
            textDecoration: "none",
            transition: "225ms all",
            margin: "0 5px",
            "&:hover": {
                opacity: "0.75",
            },
        },
    },
    mq({
        width: ["250px", "400px"],
        margin: ["0 15px", "0 auto"],
    }),
);

const CloseBtn = styled("img")({
    opacity: "0.5",
    cursor: "pointer",
    height: 20,
    transition: "225ms all",
    "&:hover": {
        opacity: "0.75",
    },
});

class CookieNotice extends React.Component {
    state = { ack: false };

    componentDidMount() {
        let val = Cookies.get("cookie_banner_ack");
        if (val === "true") {
            this.setState({ ack: true });
        }
    }

    closePolicy = () => {
        this.setState({ ack: true }, () => {
            Cookies.set("cookie_banner_ack", "true", { expires: 3650 });
        });
    };
    render() {
        if (this.state.ack) {
            return null;
        }

        return (
            <Wrapper>
                <Box>
                    By using this website you agree to our{" "}
                    <a href="/privacy-policy">privacy policy</a>
                    <CloseBtn src={closeBtn} onClick={this.closePolicy} />
                </Box>
            </Wrapper>
        );
    }
}

export default CookieNotice;
