import React from "react";

import iconTile1 from "../../../assets/new-homepage/view-tiles/icon-tile-1.svg";
import iconTile2 from "../../../assets/new-homepage/view-tiles/icon-tile-2.svg";
import iconTile3 from "../../../assets/new-homepage/view-tiles/icon-tile-3.svg";
import iconArrow from "../../../assets/new-homepage/view-tiles/icon-arrow.svg";

import {
    ViewBigTilesContainer,
    Title,
    TileBorder,
    SubTitle,
    TileStyle,
    TileTitle,
    TileLink,
    TileDescription,
    ViewTileWrapper,
} from "./view-big-tiles.styled";

const BigTile = ({ title, description, image, link }) => {
    return (
        <TileBorder>
            <TileStyle>
                <img src={image} />
                <div>
                    <TileTitle>{title}</TileTitle>
                    <TileDescription>{description}</TileDescription>
                    <TileLink target="_blank" href={link}>
                        Learn more
                        <img src={iconArrow} />
                    </TileLink>
                </div>
            </TileStyle>
        </TileBorder>
    );
};

const ViewBigTiles = ({ tileLink1, tileLink2, tileLink3, subTitle, title }) => {
    return (
        <ViewBigTilesContainer>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
            <ViewTileWrapper>
                <BigTile
                    title="Site reliability"
                    description="Easily implement industry best-practices for site reliability and devops
            workflows using Webiny Control Panel."
                    image={iconTile1}
                    link={tileLink1}
                />
                <BigTile
                    title="Content control"
                    description="Changing a copy for a homepage is not the same as changing a blog post. Using APW you can attach a peer review process to specific content pieces."
                    image={iconTile2}
                    link={tileLink2}
                />
                <BigTile
                    title="Access control"
                    description="The built-in ACL allows you to define fine-grain content control for your user groups. It integrates with different IdPs such as OKTA and Cognito."
                    image={iconTile3}
                    link={tileLink3}
                />
            </ViewTileWrapper>
        </ViewBigTilesContainer>
    );
};

export default ViewBigTiles;
