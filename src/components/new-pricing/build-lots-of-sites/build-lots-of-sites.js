import React from "react";
import BuildLotsOfSitesSection from "./build-lots-of-sites-section";
import links from "../links";

const BuildLotsOfSites = () => {
    return (
        <BuildLotsOfSitesSection
            title="Build lots of sites?"
            buttonLinkLabel="DISCOVER NOW"
            buttonLink={links.agency}
        />
    );
};
export default BuildLotsOfSites;
