import React from "react";
import styled from "react-emotion";
import mq from "../../utils/breakpoints";

const Hero = styled("section")(
    {
        width: "100%",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
        backgroundSize: "cover !important",
        backgroundRepeat: "no-repeat",
    },
    mq({
        padding: ["100px 20px 25px", "150px 0 75px"],
        marginBottom: [50, 100],
        backgroundPosition: ["center top", "center bottom", "center bottom"],
    }),
);

const Header = props => (
    <Hero className={props.className} style={{ backgroundImage: "url(" + props.bg + ")" }}>
        {props.children}
    </Hero>
);

export default Header;
