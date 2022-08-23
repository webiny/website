import React, { useMemo, useState } from "react";

import infoIcon from "../../../assets/new-homepage/hero/info-icon.svg";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import {
    HeroSection,
    HeroContainer,
    TilesContainer,
    MainTileStyle,
    MinorTileStyle,
    MainTileBorder,
    BorderContainer,
    GrayBorder,
    OrangerBorder,
    DollarIcon,
    TilePrice,
    Li,
    Ul,
    HeroTitle,
    HeroSubTitle,
    MainTileTitle,
    MinorTileTitle,
    P,
    Span,
    ListTileContainer,
    GrayBackground,
    OptionalTitle,
    InputCheckBox,
    ButtonPrimary,
    ButtonOutline,
    TogglerWrapper,
    ToolTip,
    IconFree,
    PricePerMount,
    RangeSlider,
    PriceWrapper,
    GreenLabel,
    ToolTipText,
    TogglerTextContainer,
    TogglerTextBottomContainer,
} from "./hero-section-with-tiles.styled";

const BASE_PRICE = 9;
const PUBLISHING_WORKFLOW_PRICE = 9;
const ADVANCED_ROLES_PRICE = 9;

const MainTile = ({ dataTile }) => {
    const [usersNumber, setUsersNumber] = useState(1);
    const [togglePublishingWorkflow, setTogglePublishingWorkflow] = useState(false);
    const [toggleAdvancedRoles, setToggleAdvancedRoles] = useState(false);

    const pricePerUser = useMemo(() => {
        let calculatedPrice = BASE_PRICE;
        if (togglePublishingWorkflow) {
            calculatedPrice += PUBLISHING_WORKFLOW_PRICE;
        }
        if (toggleAdvancedRoles) {
            calculatedPrice += ADVANCED_ROLES_PRICE;
        }

        return calculatedPrice;
    }, [togglePublishingWorkflow, toggleAdvancedRoles]);

    const totalPrice = useMemo(() => {
        return pricePerUser * (usersNumber - 1);
    }, [usersNumber, pricePerUser]);

    return (
        <MainTileBorder>
            <MainTileStyle>
                <GreenLabel>{dataTile.subtitle}</GreenLabel>
                <GrayBackground>
                    <MainTileTitle>{dataTile.title}</MainTileTitle>
                    <BorderContainer className="main-border">
                        <GrayBorder />
                        <OrangerBorder />
                        <GrayBorder />
                    </BorderContainer>
                    <P>from</P>
                    <TilePrice>
                        {usersNumber >= 100 ? (
                            "Contact Us"
                        ) : (
                            <>
                                <DollarIcon>$</DollarIcon> {totalPrice}
                            </>
                        )}
                    </TilePrice>
                    <P className="mounth">/ month</P>
                    <Span>SELF HOSTED</Span>
                    <PriceWrapper>
                        <P className="users">Users: {usersNumber}</P>
                        <PricePerMount>${pricePerUser} per user / month</PricePerMount>
                    </PriceWrapper>
                    <RangeSlider visibleMaxValue={usersNumber > 0}>
                        <InputRange
                            maxValue={dataTile.maxUsers}
                            minValue={dataTile.minUsers}
                            value={usersNumber}
                            step={1}
                            onChange={value => setUsersNumber(value)}
                            draggableTrack={false}
                        />
                    </RangeSlider>
                </GrayBackground>
                <ListTileContainer>
                    <ButtonPrimary link={dataTile.buttonLink} target="_blank" type="primary">
                        {dataTile.buttonLabel}
                    </ButtonPrimary>
                    <Ul>
                        {dataTile.benefits.map((item, index) => {
                            return (
                                <Li key={index}>
                                    {item.benefitName}

                                    <ToolTip>
                                        {!item.info ? (
                                            <IconFree>FREE</IconFree>
                                        ) : (
                                            <img src={infoIcon} alt="icon info" />
                                        )}

                                        {item.toolTipDecription === "" ? null : (
                                            <ToolTipText>{item.toolTipDecription}</ToolTipText>
                                        )}
                                    </ToolTip>
                                </Li>
                            );
                        })}
                    </Ul>
                    <OptionalTitle>{dataTile.optionalLabel}</OptionalTitle>
                    <TogglerWrapper>
                        <TogglerTextContainer>
                            {dataTile.optional[0].optionalName}
                            <ToolTip>
                                <img src={infoIcon} alt="icon info" />
                                <ToolTipText>{dataTile.optional[0].toolTipDecription}</ToolTipText>
                            </ToolTip>
                        </TogglerTextContainer>
                        <InputCheckBox
                            type="checkbox"
                            onClick={() => setTogglePublishingWorkflow(!togglePublishingWorkflow)}
                            className={togglePublishingWorkflow ? "toggle-on" : ""}
                        />
                    </TogglerWrapper>
                    <TogglerWrapper>
                        <TogglerTextBottomContainer>
                            {dataTile.optional[1].optionalName}
                            <ToolTip>
                                <img src={infoIcon} alt="icon info" />
                                <ToolTipText>{dataTile.optional[1].toolTipDecription}</ToolTipText>
                            </ToolTip>
                        </TogglerTextBottomContainer>
                        <InputCheckBox
                            type="checkbox"
                            onClick={() => setToggleAdvancedRoles(!toggleAdvancedRoles)}
                            className={toggleAdvancedRoles ? "toggle-on" : ""}
                        />
                    </TogglerWrapper>
                </ListTileContainer>
            </MainTileStyle>
        </MainTileBorder>
    );
};
const LeftTile = ({ dataTile }) => {
    return (
        <MinorTileStyle>
            <GrayBackground>
                <MinorTileTitle>{dataTile.title}</MinorTileTitle>
                <BorderContainer className="gray-orange-border">
                    <GrayBorder />
                    <OrangerBorder />
                    <GrayBorder />
                </BorderContainer>
                <TilePrice className="left-tile">{dataTile.price}</TilePrice>
                <P className="forever">forever</P>
                <Span>SELF HOSTED</Span>
            </GrayBackground>
            <ListTileContainer className="left-tile">
                <ButtonPrimary link={dataTile.buttonLink} className="left-tile" type="primary">
                    {dataTile.buttonLabel}
                </ButtonPrimary>
                <Ul className="left-tile">
                    {dataTile.benefits.map((item, index) => {
                        return (
                            <Li key={index}>
                                {item.benefitName}
                                {item.info ? (
                                    <ToolTip>
                                        <img src={infoIcon} alt="icon info" />
                                        {item.toolTipDecription === "" ? null : (
                                            <ToolTipText>{item.toolTipDecription}</ToolTipText>
                                        )}
                                    </ToolTip>
                                ) : (
                                    <IconFree>FREE</IconFree>
                                )}
                            </Li>
                        );
                    })}
                </Ul>
            </ListTileContainer>
        </MinorTileStyle>
    );
};
const RightTIle = ({ dataTile }) => {
    return (
        <MinorTileStyle>
            <GrayBackground className="right-tile">
                <MinorTileTitle>{dataTile.title}</MinorTileTitle>
                <BorderContainer className="orange-border">
                    <GrayBorder />
                    <OrangerBorder />
                    <GrayBorder />
                </BorderContainer>
                <P className="right-tile">from</P>
                <TilePrice className="right-tile">
                    <DollarIcon>$</DollarIcon>
                    {dataTile.price}
                </TilePrice>
                <P className="mounth">/ month</P>
                <Span>SELF HOSTED</Span>
            </GrayBackground>
            <ListTileContainer className="right-tile">
                <ButtonOutline
                    className="right-tile"
                    link={dataTile.buttonLink}
                    type="outlineOrange"
                    target="_blank"
                >
                    {dataTile.buttonLabel}
                </ButtonOutline>
                <Ul className="right-tile">
                    {dataTile.benefits.map((item, index) => {
                        return (
                            <Li key={index}>
                                {item.benefitName}
                                {item.info ? (
                                    <ToolTip>
                                        <img src={infoIcon} alt="icon info" />
                                        {item.toolTipDecription === "" ? null : (
                                            <ToolTipText>{item.toolTipDecription}</ToolTipText>
                                        )}
                                    </ToolTip>
                                ) : (
                                    <IconFree>FREE</IconFree>
                                )}
                            </Li>
                        );
                    })}
                </Ul>
            </ListTileContainer>
        </MinorTileStyle>
    );
};

const HeroSectionWithTiles = ({ heroSectionData }) => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroTitle>{heroSectionData.title}</HeroTitle>
                <HeroSubTitle>{heroSectionData.subTitle}</HeroSubTitle>
                <TilesContainer>
                    <LeftTile dataTile={heroSectionData.dataLeftTile} />
                    <MainTile dataTile={heroSectionData.dataMainTile} />
                    <RightTIle dataTile={heroSectionData.dataRightTile} />
                </TilesContainer>
            </HeroContainer>
        </HeroSection>
    );
};

export default HeroSectionWithTiles;
