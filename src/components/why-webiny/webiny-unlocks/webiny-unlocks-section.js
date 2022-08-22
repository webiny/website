import React from "react";

import {
    WebinyUnlocksContainer,
    WebinyUnlocksContentWrapper,
    WebinyUnlocksTitleWrapper,
    WebinyUnlocksTitle,
    ArrowFirst,
    ArrowSecond,
    ArrowThird,
    ArrowFourth,
    TileContainer,
    UnlocksTileWrap,
    TileContentWrap,
    TileImage,
    TileTitle,
    TileDescription,
} from "./webiny-unlocks-section.styled";

const UnlocksTile = ({ title, image, description, tileWrapClassName }) => {
    return (
        <UnlocksTileWrap className={tileWrapClassName}>
            <TileImage>
                <img src={image} alt="" />
            </TileImage>
            <TileContentWrap>
                <TileTitle>{title}</TileTitle>
                <TileDescription>{description}</TileDescription>
            </TileContentWrap>
        </UnlocksTileWrap>
    );
};

const WebinyUnlocksSection = ({ unlocksSectionData, tiles }) => {
    return (
        <WebinyUnlocksContainer>
            <WebinyUnlocksContentWrapper>
                <WebinyUnlocksTitleWrapper>
                    <WebinyUnlocksTitle>{unlocksSectionData.title}</WebinyUnlocksTitle>
                    <ArrowFirst />
                    <ArrowSecond />
                    <ArrowThird />
                    <ArrowFourth />
                </WebinyUnlocksTitleWrapper>
                <TileContainer>
                    {tiles.map((tile, index) => {
                        return (
                            <UnlocksTile
                                key={index}
                                title={tile.title}
                                image={tile.image}
                                description={tile.description}
                                tileWrapClassName={
                                    index === 1 || index === 2 ? "tile-container-above" : ""
                                }
                            />
                        );
                    })}
                </TileContainer>
            </WebinyUnlocksContentWrapper>
        </WebinyUnlocksContainer>
    );
};

export default WebinyUnlocksSection;
