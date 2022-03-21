import React from "react";

import WhyWebinyTableMobile from "./why-webiny-table-mobile";
import WhyWebinyTableDesktop from "./why-webiny-table-desktop";
import data, { cmsCompareData, cmsNames, mainTitle } from "./why-webiny-table-data";
import useWindowWidth from "../../../utils/useWindowWidth";

const WhyWebinyTable = () => {
    const isDesktop = useWindowWidth() > 835;

    return isDesktop ? (
        <WhyWebinyTableDesktop cmsCompareData={cmsCompareData} data={data} mainTitle={mainTitle} />
    ) : (
        <WhyWebinyTableMobile cmsNames={cmsNames} data={data} mainTitle={mainTitle} />
    );
};

export default WhyWebinyTable;
