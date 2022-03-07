import React from "react";

import m2 from "../../../assets/new-homepage/investors-image/m2.svg";
import next from "../../../assets/new-homepage/investors-image/next.svg";
import y from "../../../assets/new-homepage/investors-image/y.svg";
import episode1 from "../../../assets/new-homepage/investors-image/episode1.svg";

import {
    Container,
    ContentSection,
    H2,
    CurlyBrackets,
    CurlyBracketsSection,
    Content,
    StatsCount,
    StatsText,
    StatsSection,
    InvestorsSection,
    H3,
    InvestorsImage,
} from "./investors.styled";

const Stats = ({ count, text }) => {
    return (
        <StatsSection className="stats-section">
            <StatsCount>{count}</StatsCount>
            <StatsText>{text}</StatsText>
        </StatsSection>
    );
};

const Investors = () => {
    return (
        <Container>
            <ContentSection>
                <H2>
                    Developed by an <span>open source community</span>
                </H2>
                <CurlyBracketsSection>
                    <CurlyBrackets>{"{"}</CurlyBrackets>
                    <Content>
                        <Stats count="60+" text="contributors" />
                        <Stats count="5000+" text="GITHUB stars" />
                        <Stats count="1200+" text="DEVELOPERS ON SLACK" />
                    </Content>
                    <CurlyBrackets>{"}"}</CurlyBrackets>
                </CurlyBracketsSection>
                <InvestorsSection>
                    <H3>Backed by the world's top investors</H3>
                    <InvestorsImage>
                        <img src={m2} alt="icon m 2" />
                        <img src={next} alt="icon next" />
                        <img src={y} alt="icon y" />
                        <img src={episode1} alt="icon episode 1" />
                    </InvestorsImage>
                </InvestorsSection>
            </ContentSection>
        </Container>
    );
};

export default Investors;
