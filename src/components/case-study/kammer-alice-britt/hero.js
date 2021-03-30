import Hero from "../components/hero";
import React from "react";
import logoImg from "./assets/kammer-alise-britt-logo-2.png";

const HeroContent = props => {
    return (
        <React.Fragment>
            <Hero title="Versicherungskammer & Alice&Britt" logo={logoImg} />
        </React.Fragment>
    );
};

export default HeroContent;
