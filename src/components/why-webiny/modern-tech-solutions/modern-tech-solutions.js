import React from "react";
import {
    ModernTechSolutionsWrapper,
    Container,
    Title,
    Subtitle,
    TileTitle,
    TileDescription,
    TilesContainer,
    TileWrapper,
} from "./modern-tech-solutions.styled";

const ModernTechSolutionsTile = ({ title, image, description }) => {
    return (
        <TileWrapper>
            <img src={image} alt="" />
            <TileTitle>{title}</TileTitle>
            <TileDescription>{description}</TileDescription>
        </TileWrapper>
    );
};

const ModernTechSolutions = ({ tiles, title, subtitle }) => {
    return (
        <ModernTechSolutionsWrapper>
            <Container>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <TilesContainer>
                    {tiles.map((tile, index) => {
                        return (
                            <ModernTechSolutionsTile
                                key={index}
                                title={tile.title}
                                image={tile.image}
                                description={tile.description}
                            />
                        );
                    })}
                </TilesContainer>
            </Container>
        </ModernTechSolutionsWrapper>
    );
};
export default ModernTechSolutions;
