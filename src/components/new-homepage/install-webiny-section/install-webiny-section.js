import React from "react";
import { Link } from "gatsby";

import { Wrapper, Title, Container, ButtonPrimary } from "./install-webiny-section.styled";

const InstallWebinySection = ({ title, buttonLinkLabel, buttonLink, demoLink, demoLinkLabel }) => {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <ButtonPrimary link={buttonLink} type={"primary"}>
                    {buttonLinkLabel}
                </ButtonPrimary>
                <Link className="demo-link" to={demoLink}>
                    {demoLinkLabel}
                </Link>
            </Container>
        </Wrapper>
    );
};

export default InstallWebinySection;
