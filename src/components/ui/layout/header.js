import React from "react";
import styled from "react-emotion";
import mq from "../../utils/breakpoints";

const Hero = styled("section")(
    {
        width: "100%",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
        backgroundSize: "cover !important"
    },
    mq({
        padding: ["100px 20px 25px", "150px 0 75px"],
        marginBottom: [50, 100],
        backgroundPosition: ["top", "bottom", "bottom"]
    })
);

const Header = props => (
    <Hero style={{ background: "url(" + props.bg + ") no-repeat center top" }}>
        {props.children}
    </Hero>
);

export default Header;
