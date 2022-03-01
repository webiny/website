import React, { useState } from "react";

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
    ImageArrow,
    AdvantageTileImage,
    AdvantageTileTitle,
    ButtonPrimary,
    ToolTip,
    ToolTipText,
    RequestLink,
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
    buttonTopLink = "/pricing",
    buttonBottomLink,
    title,
    subTitle,
    codeFieldText,
    buttonTopLabel,
    buttomBottomLabel,
}) => {
    const [copyButtonState, setCopyButtonState] = useState(false);
    return (
        <HeroSection>
            <HeroContainer>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <CodeFieldBorder>
                    <CodeField>
                        <CodeFieldText>{codeFieldText}</CodeFieldText>
                        <ToolTip
                            onClick={() => {
                                setCopyButtonState(true);
                                setTimeout(() => setCopyButtonState(false), 2000);
                                navigator.clipboard.writeText(
                                    "npx create-webiny-project my-new-project",
                                );
                            }}
                            className={copyButtonState ? "stiky-tooltip" : ""}
                        >
                            <ToolTipText>{copyButtonState ? "Copied" : "Copy"}</ToolTipText>
                        </ToolTip>
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
                <ButtonPrimary link={buttonTopLink} type={"primary"}>
                    {buttonTopLabel}
                </ButtonPrimary>
                <RequestLink to={buttonBottomLink}>
                    {buttomBottomLabel} <ImageArrow src={iconArrow} />
                </RequestLink>
            </HeroContainer>
        </HeroSection>
    );
};

export default HeroComponent;
