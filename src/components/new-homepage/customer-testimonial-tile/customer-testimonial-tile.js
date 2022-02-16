import React from "react";
import Img from "gatsby-image";

import starIcon from "../../../assets/new-homepage/customer-testimonial-slider/star-icon.svg";

import {
    TileWrapper,
    TileName,
    TilePosition,
    TileDescription,
    StarBlock,
} from "./customer-testimonial-tile.styled";

const CustomerTestimonialTile = ({ name, image, position, description }) => {
    return (
        <TileWrapper>
            <Img
                fluid={image}
                className="tile-image"
                alt="text image"
                imgStyle={{ objectFit: "contain" }}
            />
            <TileName>{name}</TileName>
            <TilePosition>{position}</TilePosition>
            <StarBlock>
                <img src={starIcon} alt="star" />
                <img src={starIcon} alt="star" />
                <img src={starIcon} alt="star" />
                <img src={starIcon} alt="star" />
                <img src={starIcon} alt="star" />
            </StarBlock>

            <TileDescription>{description}</TileDescription>
        </TileWrapper>
    );
};
export default CustomerTestimonialTile;
