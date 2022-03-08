import React from "react";

import {
    Wrapper,
    Title,
    Container,
    ButtonPrimary,
    DemoLink,
} from "./install-webiny-section.styled";

const InstallWebinySection = ({ title, buttonLinkLabel, buttonLink, demoLink, demoLinkLabel }) => {
    return (
        <Wrapper>
            <Container>
                <Title>{title}</Title>
                <ButtonPrimary link={buttonLink} type={"primary"}>
                    {buttonLinkLabel}
                </ButtonPrimary>
                <DemoLink target="_blank" href={demoLink}>
                    {demoLinkLabel}
                </DemoLink>
            </Container>
        </Wrapper>
    );
};

export default InstallWebinySection;
