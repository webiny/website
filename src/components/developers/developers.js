import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

import Features from "./components/features";
import TechTools from "./components/tech-tools";
import AsDeveloper from "./components/as-developer-v2";
import Architecture from "./components/architecture";

import bg from "./assets/developers-bg.svg";

const DevelopersContainer = styled("section")(
    {
        background: "url(" + bg + ") no-repeat center top",
        width: "100%"
    },
    mq({
        backgroundSize: ["cover", "cover", "cover"],
        backgroundPosition: ["right 0px top 70px", "right 0px top 0px", "right 0px top 0px"],
        paddingTop: [50, 150],
        paddingBottom: [25, 50]
    })
);

class Developers extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AsDeveloper />
                <Architecture />
                <DevelopersContainer>
                    <Features />
                    <TechTools />
                </DevelopersContainer>
            </React.Fragment>
        );
    }
}

export default Developers;
