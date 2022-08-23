import React, { useState } from "react";

import WebinyLogo from "./assets/logo.svg";
import arrow from "../../../assets/new-homepage/table-section/arrow.svg";
import Minus from "./assets/minus.svg";
import ArrowImg from "./assets/arrow.svg";

import {
    WhyWebinyTableMobileWrapper,
    ItemWrapper,
    Arrow,
    P,
} from "./why-webiny-table-mobile.styled";
import { H2 } from "./why-webiny-table-desktop.styled";

const CellRendered = ({ cellItem }) => {
    if (cellItem.image === "yes") {
        if (cellItem.text) {
            return (
                <div className="text-right">
                    <img src={ArrowImg} alt="arrow" />
                    <P>{cellItem.text}</P>
                </div>
            );
        } else {
            return <img src={ArrowImg} alt="arrow" />;
        }
    } else if (cellItem.image === "no") {
        return <img src={Minus} alt="minus" />;
    } else if (!cellItem.image) {
        if (cellItem.text) {
            return (
                <div>
                    <P>{cellItem.text}</P>
                </div>
            );
        } else {
            return null;
        }
    }
};

const CollapsibleItem = ({ data, plan, collapseName, border }) => {
    const [showMenu, setShowMenu] = useState(false);
    const choosePlan = (function() {
        if (plan === "webiny") {
            return "webiny";
        } else if (plan === "contentful") {
            return "contentful";
        } else if (plan === "strapi") {
            return "strapi";
        } else if (plan === "storyblok") {
            return "storyblok";
        } else if (plan === "sanity") {
            return "sanity";
        } else if (plan === "webflow") {
            return "webflow";
        }
    })();
    return (
        <ItemWrapper border={border} showMenu={showMenu}>
            <div onClick={() => setShowMenu(!showMenu)} className="collapsible-title-wrapper">
                <h3 className="collapsible-title">{collapseName}</h3>
                <Arrow showMenu={showMenu}>
                    <img src={arrow} alt="arrow" />
                </Arrow>
            </div>
            <div className="main-items-wrapper">
                {data.map((item, index) => {
                    return (
                        <div className="item-plan-block" key={index}>
                            {item.label === "Product fundamentals" ? (
                                <div className="plan-block-title-wrap">
                                    <h3 className="plan-block-title">{item.label}</h3>
                                    {collapseName === "Webiny" ? (
                                        <img
                                            src={WebinyLogo}
                                            alt="webiny logo"
                                            className="plan-block-logo"
                                        />
                                    ) : (
                                        <h3 className="plan-block-title">{collapseName}</h3>
                                    )}
                                </div>
                            ) : (
                                <h3 className="plan-block-title">{item.label}</h3>
                            )}
                            <div>
                                {item.arr.map((item, index) => {
                                    return (
                                        <div key={index} className="plan-items">
                                            <p className="plan-title">{item.label}</p>
                                            <div className="plan-mark">
                                                {item[choosePlan] ? (
                                                    <CellRendered cellItem={item[choosePlan]} />
                                                ) : (
                                                    "-"
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </ItemWrapper>
    );
};

const WhyWebinyTableMobile = ({ cmsNames, data, mainTitle }) => {
    return (
        <WhyWebinyTableMobileWrapper>
            <H2>{mainTitle}</H2>
            {cmsNames.map((cmsName, index) => (
                <CollapsibleItem
                    key={index}
                    data={data}
                    plan={cmsName.toLowerCase()}
                    collapseName={cmsName}
                    border
                />
            ))}
            <hr className="hr-line" />
        </WhyWebinyTableMobileWrapper>
    );
};

export default WhyWebinyTableMobile;
