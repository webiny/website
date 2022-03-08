import React from "react";

import {
    GridWrapper,
    Title,
    BuildLotsSection,
    FlexContainer,
    TitleContainer,
    ButtonPurple,
    Subtitle,
    PurpleText,
} from "./build-lots-of-sites-section.styled";

const BuildLotsOfSitesSection = ({ title, buttonLinkLabel, buttonLink }) => {
    return (
        <BuildLotsSection>
            <GridWrapper>
                <FlexContainer>
                    <TitleContainer>
                        <Title>{title}</Title>
                        <Subtitle>
                            Discover our <PurpleText>Agency Partner Program</PurpleText>
                        </Subtitle>
                    </TitleContainer>
                    <ButtonPurple target="_blank" link={buttonLink} type={"purple"}>
                        {buttonLinkLabel}
                    </ButtonPurple>
                </FlexContainer>
            </GridWrapper>
        </BuildLotsSection>
    );
};

export default BuildLotsOfSitesSection;
