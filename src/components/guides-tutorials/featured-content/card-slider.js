import React from "react";
import Slider from "react-slick";
import styled from "react-emotion";
import { css } from "emotion";
// utils
import mq from "../../utils/breakpoints";
import Button from "../../ui/button";
import ContentCard from "./card";
// assets
import leftArrowIcon from "./assets/left-arrow.svg";
import rightArrowIcon from "./assets/right-arrow.svg";

const SlideWrapper = styled("div")(
    {
        width: "100%",
    },
    mq({
        marginBottom: [60, 80],
    }),
);
const LeftArrowImage = styled("img")({
    width: "100%",
});

const RightArrowImage = styled("img")({
    width: "100%",
});

const leftArrowClass = css(
    {
        position: "absolute",
        top: "40%",
        left: 0,
        padding: "0px !important",
        backgroundColor: "transparent !important",
        zIndex: 5,
        "&:hover": {
            boxShadow: "none !important",
        },
    },
    mq({
        display: ["none !important", "block !important"],
        width: ["30px !important", "50px !important"],
    }),
);

const rightArrowClass = css(
    {
        position: "absolute",
        top: "40%",
        right: 0,
        padding: "0px !important",
        backgroundColor: "transparent !important",
        zIndex: 5,
        "&:hover": {
            boxShadow: "none !important",
        },
    },
    mq({
        display: ["none !important", "block !important"],
        width: ["30px !important", "50px !important"],
    }),
);

function PrevArrow(props) {
    const { style, onClick } = props;
    return (
        <Button type="default" className={leftArrowClass} style={style} onClick={onClick}>
            <LeftArrowImage src={leftArrowIcon} alt="arrow to left" />
        </Button>
    );
}

function NextArrow(props) {
    const { style, onClick } = props;
    return (
        <Button type="default" className={rightArrowClass} style={style} onClick={onClick}>
            <RightArrowImage src={rightArrowIcon} alt="arrow to right" />
        </Button>
    );
}

const webinyAppsImage = css(
    {
        maxWidth: 1100,
        overflow: "visible",
        paddingBottom: 40,
        margin: "0 auto",
        ".slick-slide .card": {
            margin: "40px auto",
        },
        ".slick-center .card": {
            transform: "scale(1.1)",
        },
        ".slick-dots": {
            zIndex: 10,
            "li button:before": {
                fontSize: 30,
            },
        },
    },
    mq({
        ".slick-dots": {
            bottom: [0],
        },
    }),
);

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const CardSlider = ({ data }) => {
    return (
        <SlideWrapper>
            <Slider
                className={webinyAppsImage}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
                {...sliderSettings}
            >
                {data.map(tutorial => (
                    <ContentCard key={tutorial.id} {...tutorial} />
                ))}
            </Slider>
        </SlideWrapper>
    );
};

export default CardSlider;
