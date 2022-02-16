import React from "react";
import InstallWebinySection from "./install-webiny-section";

import { OrangeText } from "./install-webiny-section.styled";

const InstallWebiny = () => {
    return (
        <InstallWebinySection
            title={
                <>
                    <OrangeText>Install Webiny</OrangeText> for your team in 4 minutes
                </>
            }
            buttonLinkLabel="TRY IT NOW FOR FREE"
            buttonLink="docs/webiny/introduction/"
            demoLink="/"
            demoLinkLabel="Or schedule a demo with our team"
        />
    );
};
export default InstallWebiny;
