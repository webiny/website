import React from "react";

import BaseLayout from "../layouts/base";
import HeroSectionPrices from "../components/new-pricing/hero-section-with-tiles/hero-section-prices";
import PriceList from "../components/new-pricing/price-list";
import BuildLotsOfSites from "../components/new-pricing/build-lots-of-sites/build-lots-of-sites";
import FrequentlyAskedQuestions from "../components/new-pricing/frequently-asked-questions/frequently-asked-questions";
import InstallWebiny from "../components/new-homepage/install-webiny-section/install-webiny";
import shareCard from "../components/new-pricing/assets/pricing-share-card.png"

const PricingPage = () => {
    return (
        <BaseLayout
            title="Pricing"
            description="Transparent fees, no contracts or long term commitments.
        "
            image={shareCard}
        >
            <HeroSectionPrices />
            <PriceList />
            <BuildLotsOfSites />
            <FrequentlyAskedQuestions />
            <InstallWebiny />
        </BaseLayout>
    );
};

export default PricingPage;
