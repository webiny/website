import React from "react";

import WebinyUnlocksSection from "./webiny-unlocks-section";

import numberOne from "../../../assets/why-webiny/number-one.svg";
import numberTwo from "../../../assets/why-webiny/number-two.svg";
import numberThree from "../../../assets/why-webiny/number-three.svg";
import numberFour from "../../../assets/why-webiny/number-four.svg";

import { OrangeText } from "./webiny-unlocks-section.styled";

const unlocksSectionData = {
    title: (
        <>
            <OrangeText>Webiny unlocks</OrangeText> significant business benefits
        </>
    ),
};

const tilesData = [
    {
        image: numberOne,
        title: "Reduce infrastructure costs",
        description:
            "Cut  infrastructure and operations costs by 60% to 80% compared to running on VMs.",
    },
    {
        image: numberTwo,
        title: "Scale when you need it",
        description:
            "Online sales, product launches, marketing events. Performant capacity that’s automatically provisioned when it’s most needed.",
    },
    {
        image: numberThree,
        title: "Streamline the creative process",
        description:
            "Have teams focused on what they’re better at. Engineering delivering new features, creators building amazing digital experiencies.",
    },
    {
        image: numberFour,
        title: "Future-proof",
        description:
            "A product that scales as you grow, and adapts to meet today’s and future needs.",
    },
];

const WebinyUnlocks = () => {
    return <WebinyUnlocksSection unlocksSectionData={unlocksSectionData} tiles={tilesData} />;
};

export default WebinyUnlocks;
