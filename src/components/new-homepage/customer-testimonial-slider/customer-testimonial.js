import React from "react";
import CustomerTestimonialSlider from "./customer-testimonial-slider";
import { useStaticQuery, graphql } from "gatsby";

import { OrangeText } from "./customer-testimonial-slider.styled";

const CustomerTestimonial = () => {
    const images = useStaticQuery(graphql`
        query CustomerTestimonialSliderWrapper {
            sam: file(
                relativePath: {
                    eq: "new-homepage/customer-testimonial-slider/sam-gallagher-bishop.jpg"
                }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            serge: file(
                relativePath: { eq: "new-homepage/customer-testimonial-slider/serge-morel.jpg" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            placeholder: file(
                relativePath: {
                    eq: "new-homepage/customer-testimonial-slider/avatar-placeholder.png"
                }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            kazi: file(
                relativePath: {
                    eq: "new-homepage/customer-testimonial-slider/kazi-sadman-ahmed.jpg"
                }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            alexandru: file(
                relativePath: { eq: "new-homepage/customer-testimonial-slider/alexandru-Iaru.jpg" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            alan: file(
                relativePath: { eq: "new-homepage/customer-testimonial-slider/alan-lam.jpg" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            michael: file(
                relativePath: { eq: "new-homepage/customer-testimonial-slider/michael-papette.png" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            james: file(
                relativePath: { eq: "new-homepage/customer-testimonial-slider/james-hunter.jpg" }
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
            name: "Sam Gallagher-Bishop",
            image: images.sam.childImageSharp.fluid,
            position: "Technical Director, Secret Location",
            description:
                "We've been very happy with our experiences using Webiny. The documentation is clear and concise, and the community is quick to help out which has made for a pleasant developer experience.",
        },
        {
            name: "Serge Morel",
            image: images.serge.childImageSharp.fluid,
            position: "CTO, Stampix",
            description:
                "Stampix has always focused on using serverless technologies, something that the CMS world hasn't picked up on yet, especially given their pricing strategies. The serverless focus from Webiny has been a real godsend for us. Speaking for our entire team, we are loving the active and very dedicated open-source community behind Webiny.",
        },
        {
            name: "Sandor Molnar",
            image: images.placeholder.childImageSharp.fluid,
            position: "Senior Web Developer, Beyerdynamic",
            description:
                "If someone is looking for a Modern Web framework with React, Serverless, then Webiny should be the first and only choice. It has everything that we need from a modern development environment. In addition, Dev experience is far beyond anything in my previous experience.",
        },
        {
            name: "Kazi Sadman Ahmed",
            image: images.kazi.childImageSharp.fluid,
            position: "Cloud Solution Architect, InNeed Intelligent Cloud",
            description:
                "We are using Webiny for ourselves as well as for some of our major clients. So far, we are loving it and getting good feedback from our clients. Webiny is exactly what I want a CMS to be. It is free, open-source, serverless, and cloud-native.",
        },
        {
            name: "Alexandru Iaru",
            image: images.alexandru.childImageSharp.fluid,
            position: "Full Stack Developer, Code11",
            description:
                "Webiny enabled us to quickly and intelligently craft a new Online Travel Agency website for our client.",
        },
        {
            name: "Alan Lam",
            image: images.alan.childImageSharp.fluid,
            position: "Full Stack Web Developer, ddaapp studio",
            description:
                "We really impressed by the features of Webiny which allow us to build a serverless CMS so quickly. The support from staff is so quick and direct, helping us a lot to solve problems. Very well experience working with Webiny.",
        },
        {
            name: "Michael Papette",
            image: images.michael.childImageSharp.fluid,
            position: "Web Developer, Anyt1me s.r.l.",
            description:
                "We were looking for a product that offered a scalable and performant CMS, and Webiny turned out to be a perfect choice. The CMS is really simple and intuitive, clearly documented and easy to use and customize. In addition to being a great product, it is constantly updated with the implementation of new features/improvements that the large community requests from the development team.",
        },
        {
            name: "James Hunter",
            image: images.james.childImageSharp.fluid,
            position: "Founder, Scafld",
            description:
                "Webiny really is head and shoulders above any other open source application framework out there. Its superb out-of-the-box marketing-focused applications combined with a great developer experience that's supported by the most responsive core team we've ever worked with, make it the only choice for us when it comes to building custom data-driven applications. And as if that wasn't good enough, it's serverless by design, so it's incredibly cost-effective, even at production scale.",
        },
    ];
    return (
        <CustomerTestimonialSlider
            peoples={sliderItems}
            title={
                <>
                    Customer <br /> <OrangeText>testimonials</OrangeText>
                </>
            }
        />
    );
};
export default CustomerTestimonial;
