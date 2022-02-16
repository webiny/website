import React from "react";
import { Link } from "gatsby";

import { Wrapper, Title, Container } from "./install-webiny-section.styled";

const InstallWebinySection = ({ title, buttonLinkLabel, buttonLink, demoLink, demoLinkLabel }) => {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <Link className="orange-button" to={buttonLink}>
                    {buttonLinkLabel}
                </Link>
                <Link className="demo-link" to={demoLink}>
                    {demoLinkLabel}
                </Link>
            </Container>
        </Wrapper>
    );
};

export default InstallWebinySection;
