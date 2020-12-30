import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/pricing/hero";
import PriceList from "../components/pricing/price-list";
import FAQAccordion from "../components/pricing/faq-accordion";
import HaveMoreQuestoins from "../components/pricing/have-more-questions";

const PricingPage = () => {
    return  (
        <BaseLayout title="Pricing">
            <Hero />
            <PriceList />
            <FAQAccordion />
            <HaveMoreQuestoins />
        </BaseLayout> 
    )
}

export default PricingPage;
