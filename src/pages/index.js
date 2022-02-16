import React from "react";

import BaseLayout from "../layouts/base";
import HeroHomePage from "../components/new-homepage/hero-section/hero-home-page";
import ProductOverview from "../components/new-homepage/product-overview/product-overview";
import SelfHosted from "../components/new-homepage/text-with-image/self-hosted";
import Serverless from "../components/new-homepage/text-with-image/serverless";
import NoCodeSuite from "../components/new-homepage/text-with-image/no-code-suite";
import MultiSiteSupport from "../components/new-homepage/text-with-image/multi-site-support";
import Investors from "../components/new-homepage/investors/investors";
import DeliveryExcellence from "../components/new-homepage/view-big-tiles/delivery-excellence";
import OpenSourceBenefits from "../components/new-homepage/open-source-benefits/open-source-benefits";
import CustomerTestimonial from "../components/new-homepage/customer-testimonial-slider/customer-testimonial";
import InstallWebiny from "../components/new-homepage/install-webiny-section/install-webiny";

class IndexPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Open-Source Serverless CMS and Serverless Application Framework"
                description="Webiny is an open-source framework for building serverless applications with a drop-in CMS. Webiny is powered by React, Node and GraphQL."
            >
                <HeroHomePage />
                <Investors />
                <ProductOverview />
                <SelfHosted />
                <Serverless />
                <NoCodeSuite />
                <MultiSiteSupport />
                <DeliveryExcellence />
                <OpenSourceBenefits />
                <CustomerTestimonial />
                <InstallWebiny />
            </BaseLayout>
        );
    }
}

export default IndexPage;
