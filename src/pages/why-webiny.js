import React from "react";

import WebinyUnlocks from "../components/why-webiny/webiny-unlocks/webiny-unlocks";
import ModernBusinesses from "../components/why-webiny/modern-tech-solutions/modern-businesses";
import InstallWebiny from "../components/new-homepage/install-webiny-section/install-webiny";
import HeroWhyWebiny from "../components/why-webiny/hero-why-webiny/hero-why-webiny";
import WhyWebinyTable from "../components/why-webiny/why-webiny-table/why-webiny-table";

import BaseLayout from "../layouts/base";

const WhyWebinyPage = () => {
    return (
        <BaseLayout
            title="Why Webiny?"
            description="Discover the serverless benefits, its challenges and how Webiny overcomes them."
        >
            <HeroWhyWebiny />
            <ModernBusinesses />
            <WebinyUnlocks />
            <WhyWebinyTable />
            <InstallWebiny />
        </BaseLayout>
    );
};

export default WhyWebinyPage;
