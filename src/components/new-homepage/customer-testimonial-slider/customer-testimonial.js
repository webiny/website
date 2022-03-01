import React from "react";
import CustomerTestimonialSlider from "./customer-testimonial-slider";
import { useStaticQuery, graphql } from "gatsby";

import { OrangeText } from "./customer-testimonial-slider.styled";

const CustomerTestimonial = () => {
    const images = useStaticQuery(graphql`
        query CustomerTestimonialSliderWrapper {
            image1: file(
                relativePath: { eq: "new-homepage/customer-testimonial-slider/photo-1.png" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image2: file(
                relativePath: { eq: "new-homepage/customer-testimonial-slider/photo-2.png" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image3: file(
                relativePath: { eq: "new-homepage/customer-testimonial-slider/photo-3.png" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const sliderItems = [
        {
            name: "Ana Hunter",
            image: images.image1.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Josh Hunter",
            image: images.image2.childImageSharp.fluid,
            position: "CEO, Anthill",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "John Hunter",
            image: images.image3.childImageSharp.fluid,
            position: "Co-Founder, Anttask",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Joe Hunter Lorem",
            image: images.image1.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Ana Hunter",
            image: images.image2.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Ana Hunter",
            image: images.image3.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Joe Hunter Lorem",
            image: images.image1.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Ana Hunter",
            image: images.image2.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Ana Hunter",
            image: images.image3.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Joe Hunter Lorem",
            image: images.image1.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Ana Hunter",
            image: images.image2.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
        {
            name: "Ana Hunter",
            image: images.image3.childImageSharp.fluid,
            position: "CEO & Co-Founder, Apline",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat.",
        },
    ];
    return (
        <CustomerTestimonialSlider
            peoples={sliderItems}
            title={
                <>
                    Customer <br /> <OrangeText>testimonial</OrangeText> quotes
                </>
            }
        />
    );
};
export default CustomerTestimonial;
