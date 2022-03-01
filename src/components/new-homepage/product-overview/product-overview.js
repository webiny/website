import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { useStaticQuery, graphql } from "gatsby";

import {
    H2,
    P,
    CollapsibleTriggerContainer,
    CollapsibleContainer,
    AccordionItemsContainer,
    PlusImg,
    AccordionContainer,
    ContainerForImage,
    ProductOverviewImg,
    ProductOverviewVideo,
    ProductsOverviewContainer,
} from "./product-overview.styled";

import ArrowClosed from "../../../assets/new-homepage/product-overview/arrow-closed.svg";
import ArrowOpen from "../../../assets/new-homepage/product-overview/arrow-open.svg";
import PlusIcon from "../../../assets/new-homepage/product-overview/plus.svg";
import Video from "../../../assets/new-homepage/product-overview/video1.mp4";

const Trigger = ({ isOpen, title, isComingSoon }) => {
    return (
        <CollapsibleTriggerContainer>
            <img src={isOpen ? ArrowOpen : ArrowClosed} className="arrow-image" alt="arrow" />
            <p className={`collapsible-title ${isOpen ? "collapsible-title-opened" : null}`}>
                {title}
            </p>
            {isComingSoon ? <div className="comming-soon">coming soon</div> : null}
        </CollapsibleTriggerContainer>
    );
};

const AccordionItem = ({
    isOpen,
    accordionPosition,
    onOpenClose,
    title,
    content,
    isComingSoon,
}) => {
    return (
        <CollapsibleContainer
            backgroundColor={isOpen ? "#fef7f4" : "transparent"}
            paddingBottom={isOpen ? "12px" : "0"}
        >
            <Collapsible
                open={isOpen}
                accordionPosition={accordionPosition}
                handleTriggerClick={onOpenClose}
                transitionTime={250}
                transitionCloseTime={100}
                easing={"ease-in-out"}
                trigger={<Trigger isOpen={false} title={title} isComingSoon={isComingSoon} />}
                triggerWhenOpen={
                    <Trigger isOpen={true} title={title} isComingSoon={isComingSoon} />
                }
            >
                <p className="collapsible-content">{content}</p>
            </Collapsible>
        </CollapsibleContainer>
    );
};

const Accordion = ({ accordionItems, openIndex, onOpenClose }) => {
    return (
        <AccordionContainer>
            <AccordionItemsContainer>
                <PlusImg src={PlusIcon} alt="plus" />
                {accordionItems.map((item, index) => (
                    <AccordionItem
                        key={index}
                        isOpen={index === openIndex}
                        accordionPosition={index}
                        onOpenClose={onOpenClose}
                        title={item.title}
                        content={item.content}
                        isComingSoon={item.isComingSoon}
                    />
                ))}
            </AccordionItemsContainer>
        </AccordionContainer>
    );
};

const ProductOverview = () => {
    const images = useStaticQuery(graphql`
        query ProductOverviewQuery {
            browserImage: file(relativePath: { eq: "new-homepage/product-overview/browser.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1175) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image1: file(relativePath: { eq: "new-homepage/product-overview/image1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1175) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image2: file(relativePath: { eq: "new-homepage/product-overview/image2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1175) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image3: file(relativePath: { eq: "new-homepage/product-overview/image3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1175) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image4: file(relativePath: { eq: "new-homepage/product-overview/image4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1175) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const accordionItems = [
        {
            title: "Webiny Control Panel",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex consequat aliquet.",
            image: images.browserImage.childImageSharp.fluid,
            isComingSoon: true,
        },
        {
            title: "Page Builder",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex consequat aliquet.",
            image: images.image1.childImageSharp.fluid,
            isComingSoon: false,
        },
        {
            title: "Headless CMS",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex consequat aliquet.",
            image: images.image2.childImageSharp.fluid,
            isComingSoon: false,
        },
        {
            title: "Advanced Publishing Workflow",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex consequat aliquet.",
            image: images.image3.childImageSharp.fluid,
            isComingSoon: true,
        },
        {
            title: "Tenant Manager",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex consequat aliquet.",
            video: Video,
            isComingSoon: false,
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const onOpenClose = accordionPosition => {
        setOpenIndex(accordionPosition);
    };

    return (
        <ProductsOverviewContainer>
            <H2>
                Everything an enterprise needs to <br />
                <span>build, manage and deliver</span> content at scale
            </H2>
            <P>
                Webiny doesn’t just manage your content. It allows you to also build and deploy
                sites and forms, manage all your projects centrally and use advanced processes that
                support organization-wide collaboration.
            </P>
            <ContainerForImage>
                {accordionItems[openIndex].image ? (
                    <ProductOverviewImg
                        fluid={accordionItems[openIndex].image}
                        alt={accordionItems[openIndex].title}
                    />
                ) : (
                    <ProductOverviewVideo
                        autoplay="autoplay"
                        muted
                        src={accordionItems[openIndex].video}
                    />
                )}

                <Accordion
                    accordionItems={accordionItems}
                    openIndex={openIndex}
                    onOpenClose={onOpenClose}
                />
            </ContainerForImage>
        </ProductsOverviewContainer>
    );
};

export default ProductOverview;
