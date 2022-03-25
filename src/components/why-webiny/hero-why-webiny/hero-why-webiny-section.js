import React from "react";

import {
    ContentWrapper,
    TitleContainer,
    Title,
    Subtitle,
    HeroWhyContainer,
    ComplexityCardsWrap,
    TextFirstCardWrap,
    TextSecondCardWrap,
    TextThirdCardWrap,
    TextFourthCardWrap,
    TextFirstCard,
    TextSecondCard,
    TextThirdCard,
    TextFourthCard,
} from "./hero-why-webiny-section.styled";

const HeroWhyWebinySection = ({ heroSectionData }) => {
    return (
        <HeroWhyContainer>
            <ContentWrapper>
                <TitleContainer>
                    <Title>{heroSectionData.title}</Title>
                    <Subtitle>{heroSectionData.subtitle}</Subtitle>
                </TitleContainer>
                <ComplexityCardsWrap>
                    <TextFirstCardWrap>
                        <TextFirstCard>{heroSectionData.textFirstCard}</TextFirstCard>
                    </TextFirstCardWrap>
                    <TextSecondCardWrap>
                        <TextSecondCard>{heroSectionData.textSecondCard}</TextSecondCard>
                    </TextSecondCardWrap>
                    <TextThirdCardWrap>
                        <TextThirdCard>{heroSectionData.textThirdCard}</TextThirdCard>
                    </TextThirdCardWrap>
                    <TextFourthCardWrap>
                        <TextFourthCard>{heroSectionData.textFourthCard}</TextFourthCard>
                    </TextFourthCardWrap>
                </ComplexityCardsWrap>
            </ContentWrapper>
        </HeroWhyContainer>
    );
};

export default HeroWhyWebinySection;
