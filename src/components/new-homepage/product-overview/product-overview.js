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
    Preloader,
} from "./product-overview.styled";

import ArrowClosed from "../../../assets/new-homepage/product-overview/arrow-closed.svg";
import ArrowOpen from "../../../assets/new-homepage/product-overview/arrow-open.svg";
import PlusIcon from "../../../assets/new-homepage/product-overview/plus.svg";
import PageBuilderVideo from "../../../assets/new-homepage/product-overview/page-builder.mp4";
import HeadlessCmsVideo from "../../../assets/new-homepage/product-overview/headless-cms-preview.mp4";
import loadingAnimation from "../../../assets/new-homepage/product-overview/loading.svg";

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
            wcpImage: file(relativePath: { eq: "new-homepage/product-overview/wcp.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            apwImage: file(relativePath: { eq: "new-homepage/product-overview/apw-preview.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const accordionItems = [
        {
            title: "Headless CMS",
            content: "Create, organize, distribute and consume your content on any device.",
            video: HeadlessCmsVideo,
            isComingSoon: false,
        },
        {
            title: "Page Builder",
            content:
                "Empower your marketing team to manage a website without the support from your development team.",
            video: PageBuilderVideo,
            isComingSoon: false,
        },
        {
            title: "Webiny Control Panel",
            content:
                "Streamline the operations around managing, monitoring and scaling your Webiny CMS self-hosted instance.",
            image: images.wcpImage.childImageSharp.fluid,
            isComingSoon: true,
        },
        {
            title: "Advanced Publishing Workflow",
            content: "Enforce content changes through an approval process before it's published.",
            image: images.apwImage.childImageSharp.fluid,
            isComingSoon: true,
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
                        autoPlay="autoplay"
                        loop
                        muted
                        controls
                        webkit-playsinline
                        playsInline
                        poster={loadingAnimation}
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
