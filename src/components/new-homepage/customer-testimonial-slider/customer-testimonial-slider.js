import React, { useState } from "react";
import Slider from "react-slick";

import CustomerTestimonialTile from "../customer-testimonial-tile/customer-testimonial-tile";

import grayArrow from "../../../assets/new-homepage/customer-testimonial-slider/gray-arrow.svg";
import blackArrow from "../../../assets/new-homepage/customer-testimonial-slider/black-arrow.svg";

import {
    Wrapper,
    CustomerTestimonialContainer,
    ArrowContainer,
    Title,
    Border,
    PrevSlide,
    NextSlide,
} from "./customer-testimonial-slider.styled";

const CustomerTestimonialSlider = ({ peoples, title }) => {
    const [slider, setSlider] = useState(null);
    const [index, setIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        touchMove: true,
        swipeToSlide: true,
        afterChange: next => setIndex(next),
    };

    return (
        <Wrapper>
            <CustomerTestimonialContainer>
                <div>
                    <Title>{title}</Title>
                    <ArrowContainer>
                        <PrevSlide
                            alt="prev-slide"
                            src={index === 0 ? grayArrow : blackArrow}
                            onClick={() => slider.slickPrev()}
                        />

                        <Border />
                        <NextSlide
                            alt="next-slide"
                            className="next-slide"
                            src={index === peoples.length - 1 ? grayArrow : blackArrow}
                            onClick={() => slider.slickNext()}
                        />
                    </ArrowContainer>
                </div>
                <Slider ref={e => setSlider(e)} className="slider" {...settings}>
                    {peoples.map((item, index) => {
                        return (
                            <CustomerTestimonialTile
                                key={index}
                                name={item.name}
                                image={item.image}
                                position={item.position}
                                description={item.description}
                            />
                        );
                    })}
                </Slider>
            </CustomerTestimonialContainer>
        </Wrapper>
    );
};
export default CustomerTestimonialSlider;
