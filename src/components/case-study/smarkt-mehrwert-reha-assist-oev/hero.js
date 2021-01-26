import React from "react";

import Hero from "../components/hero";
import logoImg from "./assets/smarkt-reha-logo.png";

const HeroContent = props => {
    return (
        <React.Fragment>
            <Hero title="S-MARKT & MEHRWERT" logo={logoImg} />
        </React.Fragment>
    );
};

export default HeroContent;
