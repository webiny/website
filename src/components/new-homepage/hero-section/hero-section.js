import React from "react";
import { Link } from "gatsby";

import copyIcon from "../../../assets/new-homepage/hero/copy-icon.svg";
import advantageIcon1 from "../../../assets/new-homepage/hero/advantage-icon-1.svg";
import advantageIcon2 from "../../../assets/new-homepage/hero/advantage-icon-2.svg";
import advantageIcon3 from "../../../assets/new-homepage/hero/advantage-icon-3.svg";
import advantageIcon4 from "../../../assets/new-homepage/hero/advantage-icon-4.svg";
import advantageIcon5 from "../../../assets/new-homepage/hero/advantage-icon-5.svg";
import linesDesktop from "../../../assets/new-homepage/hero/lines.svg";
import leftlines from "../../../assets/new-homepage/hero/left-lines.svg";
import rightRines from "../../../assets/new-homepage/hero/right-lines.svg";
import iconArrow from "../../../assets/new-homepage/hero/icon-arrow.svg";

import {
    HeroSection,
    HeroContainer,
    Title,
    SubTitle,
    CodeField,
    CodeFieldText,
    CodeFieldBorder,
    LinesImageDesktop,
    LinesImageMobile,
    AdvantagesContainer,
    AdvantagesContainerMobile,
    AdvantageTileStyle,
    CopyIcon,
    ImageArrow,
    AdvantageTileImage,
    AdvantageTileTitle,
} from "./hero.styled";

const AdvantageTile = ({ image, title }) => {
    return (
        <AdvantageTileStyle>
            <AdvantageTileImage src={image} />
            <AdvantageTileTitle>{title}</AdvantageTileTitle>
        </AdvantageTileStyle>
    );
};

const HeroComponent = ({
    buttonTopLink,
    buttonBottomLink,
    title,
    subTitle,
    codeFieldText,
    buttonTopLabel,
    buttomBottomLabel,
}) => {
    return (
        <HeroSection>
            <HeroContainer>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <CodeFieldBorder>
                    <CodeField>
                        <CodeFieldText>{codeFieldText}</CodeFieldText>
                        <CopyIcon
                            src={copyIcon}
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    "npx create-webiny-project my-new-project",
                                )
                            }
                        />
                    </CodeField>
                </CodeFieldBorder>
                <LinesImageDesktop src={linesDesktop} />
                <AdvantagesContainerMobile>
                    <LinesImageMobile src={leftlines} />
                    <AdvantagesContainer>
                        <AdvantageTile image={advantageIcon1} title="Headless CMS" />
                        <AdvantageTile image={advantageIcon2} title="No code Page Builder" />
                        <AdvantageTile image={advantageIcon3} title="Publishing workflows" />
                        <AdvantageTile image={advantageIcon4} title="Multi site support" />
                        <AdvantageTile image={advantageIcon5} title="Serverless infrastructure" />
                    </AdvantagesContainer>
                    <LinesImageMobile src={rightRines} />
                </AdvantagesContainerMobile>
                <Link className="orange-button" to={buttonTopLink}>
                    {buttonTopLabel}
                </Link>
                <Link className="request-link" to={buttonBottomLink}>
                    {buttomBottomLabel} <ImageArrow src={iconArrow} />
                </Link>
            </HeroContainer>
        </HeroSection>
    );
};

export default HeroComponent;
