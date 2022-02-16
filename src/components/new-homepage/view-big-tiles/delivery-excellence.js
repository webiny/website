import React from "react";
import ViewBigTiles from "./view-big-tiles";

import { OrangeText } from "./view-big-tiles.styled";

const DeliveryExcellence = () => {
    return (
        <ViewBigTiles
            tileLink1="/"
            tileLink2="/"
            tileLink3="/"
            subTitle="DELIVERY EXCELLENCE"
            title={
                <>
                    <OrangeText>Built-in utilities</OrangeText> that reduce risk and ensure quality
                    and control
                </>
            }
        />
    );
};
export default DeliveryExcellence;
