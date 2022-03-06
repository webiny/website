import React from "react";
import ViewBigTiles from "./view-big-tiles";

import { OrangeText } from "./view-big-tiles.styled";

const DeliveryExcellence = () => {
    return (
        <ViewBigTiles
            tileLink1="/docs/overview/features/site-reliability"
            tileLink2="/docs/overview/applications/apw"
            tileLink3="/docs/overview/features/access-control"
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
