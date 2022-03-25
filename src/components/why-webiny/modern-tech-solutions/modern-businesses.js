import React from "react";
import { OrangeText } from "./modern-tech-solutions.styled";
import image1 from "../../../assets/why-webiny/modern-tech-solutions/image1.svg";
import image2 from "../../../assets/why-webiny/modern-tech-solutions/image2.svg";
import image3 from "../../../assets/why-webiny/modern-tech-solutions/image3.svg";
import image4 from "../../../assets/why-webiny/modern-tech-solutions/image4.svg";
import image5 from "../../../assets/why-webiny/modern-tech-solutions/image5.svg";
import image6 from "../../../assets/why-webiny/modern-tech-solutions/image6.svg";
import ModernTechSolutions from "./modern-tech-solutions";

const tilesData = [
    {
        image: image1,
        title: "Self-hosted",
        description: (
            <>
                Webiny runs<OrangeText> inside your own AWS cloud.</OrangeText> Your data, under
                your own rules.
            </>
        ),
    },
    {
        image: image2,
        title: "Open-Source",
        description: (
            <>
                Released under an MIT license and architected for
                <OrangeText> extensibility</OrangeText>.
            </>
        ),
    },
    {
        image: image3,
        title: "Serverless",
        description: (
            <>
                Unlimited, responsive and adaptable <OrangeText>scale</OrangeText> that’s{" "}
                <OrangeText>cost effective </OrangeText> and <OrangeText>fully managed.</OrangeText>
            </>
        ),
    },
    {
        image: image4,
        title: "Unified",
        description: (
            <>
                {" "}
                <OrangeText>Single experience</OrangeText> that brings content creators and
                developers together.
            </>
        ),
    },
    {
        image: image5,
        title: "Accessible",
        description: (
            <>
                Enterprise-grade capabilities <OrangeText>accessible to everyone.</OrangeText>
            </>
        ),
    },
    {
        image: image6,
        title: "Advanced features",
        description: (
            <>
                <OrangeText>Integrations</OrangeText> with enterprise systems, data{" "}
                <OrangeText>compliance </OrangeText>
                mechanisms, <OrangeText>security</OrangeText>, best-in-class{" "}
                <OrangeText>tooling</OrangeText> for Site Reliability Engineering, SLA based
                <OrangeText> support</OrangeText>, <OrangeText>consultancy</OrangeText> services.
            </>
        ),
    },
];
const ModernBusinesses = () => {
    return (
        <ModernTechSolutions
            tiles={tilesData}
            title={
                <>
                    Modern businesses need <OrangeText>modern tech solutions</OrangeText>
                </>
            }
            subtitle="We have created Webiny CMS to provide solutions to these problems and support the web products of the future."
        />
    );
};
export default ModernBusinesses;
