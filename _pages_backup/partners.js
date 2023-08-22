import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/partners/hero";
import OurPartners from "../components/partners/our-partners";
import BecomePartner from "../components/partners/become-partner";
import CaseStudy from "../components/ui/case-study";

const Partners = () => {
    return (
        <BaseLayout
            title="Partners - Webiny"
            description="Meet the great companies that are pushing the boundaries of serverless solutions using Webiny."
        >
            <Hero />
            <OurPartners />
            <BecomePartner />
            <CaseStudy />
            <br />
        </BaseLayout>
    );
};

export default Partners;
