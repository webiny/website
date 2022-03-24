import React from "react";

import { useSyncScroller } from "../../../utils/useScrollSync";
import useWindowWidth from "../../../utils/useWindowWidth";

import WebinyLogo from "./assets/logo.svg";
import Minus from "./assets/minus.svg";
import Arrow from "./assets/arrow.svg";
import ArrowRight from "./assets/arrow-right.svg";

import { H2, H4, H5, P, WhyWebinyTableContainer, Link } from "./why-webiny-table-desktop.styled";

const CellRendered = ({ cellItem }) => {
    if (cellItem.image === "yes") {
        if (cellItem.text) {
            return (
                <div className="why-webiny-table-cell">
                    <img src={Arrow} alt="Arrow" />
                    <P>{cellItem.text}</P>
                </div>
            );
        } else {
            return <img src={Arrow} alt="Arrow" />;
        }
    } else if (cellItem.image === "no") {
        return <img src={Minus} alt="Minus" />;
    } else if (!cellItem.image) {
        if (cellItem.text) {
            return (
                <div className="why-webiny-table-cell">
                    <P>{cellItem.text}</P>
                </div>
            );
        } else {
            return null;
        }
    }
};

const WhyWebinyTableDesktop = ({ cmsCompareData, data, mainTitle }) => {
    const isDesktop = useWindowWidth() > 1240;

    const headingRightRef = useSyncScroller("WhyWebinyTable");
    const tableRightRef = useSyncScroller("WhyWebinyTable");

    return (
        <WhyWebinyTableContainer>
            <H2>{mainTitle}</H2>
            <div className="why-webiny-table">
                <div className="why-webiny-table-row-left sticky-header heading-height background-white">
                    <H4 className="changed-title">{data[0].label}</H4>
                    <img src={WebinyLogo} alt="Webiny Logo" />
                </div>
                <div className="sticky-header heading-height background-white">
                    <div ref={headingRightRef} className="syncscroll sticky-header-right">
                        {cmsCompareData.map((cmsItem, cmsIndex) => (
                            <div className="sticky-header-right-item" key={cmsIndex}>
                                <H5>{cmsItem.label}</H5>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            {index !== 0 && (
                                <div className="sticky-header heading-height why-webiny-table-row-left table-space">
                                    <H4 className="background-white changed-title">{item.label}</H4>
                                </div>
                            )}
                            <div>
                                {item.arr.map((arrItem, idx) =>
                                    idx % 2 === 0 ? (
                                        <div
                                            key={idx}
                                            className="why-webiny-table-row-left background-grey"
                                            style={
                                                !arrItem.tabletHeight || isDesktop
                                                    ? { height: arrItem.height }
                                                    : { height: arrItem.tabletHeight }
                                            }
                                        >
                                            <P>{arrItem.label}</P>
                                            <CellRendered cellItem={arrItem.webiny} />
                                        </div>
                                    ) : (
                                        <div
                                            key={idx}
                                            className="why-webiny-table-row-left"
                                            style={
                                                !arrItem.tabletHeight || isDesktop
                                                    ? { height: arrItem.height }
                                                    : { height: arrItem.tabletHeight }
                                            }
                                        >
                                            <P>{arrItem.label}</P>
                                            <CellRendered cellItem={arrItem.webiny} />
                                        </div>
                                    ),
                                )}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <div ref={tableRightRef} className="syncscroll table-right-overflow">
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            {index !== 0 && (
                                <div className="why-webiny-table-row-right table-space heading-height" />
                            )}
                            <div>
                                {item.arr.map((arrItem, idx) =>
                                    idx % 2 === 0 ? (
                                        <div
                                            className="why-webiny-table-row-right background-grey"
                                            style={
                                                !arrItem.tabletHeight || isDesktop
                                                    ? { height: arrItem.height }
                                                    : { height: arrItem.tabletHeight }
                                            }
                                        >
                                            <CellRendered cellItem={arrItem.contentful} />
                                            <CellRendered cellItem={arrItem.strapi} />
                                            <CellRendered cellItem={arrItem.storyblok} />
                                            <CellRendered cellItem={arrItem.sanity} />
                                            <CellRendered cellItem={arrItem.webflow} />
                                        </div>
                                    ) : (
                                        <div
                                            className="why-webiny-table-row-right"
                                            style={
                                                !arrItem.tabletHeight || isDesktop
                                                    ? { height: arrItem.height }
                                                    : { height: arrItem.tabletHeight }
                                            }
                                        >
                                            <CellRendered cellItem={arrItem.contentful} />
                                            <CellRendered cellItem={arrItem.strapi} />
                                            <CellRendered cellItem={arrItem.storyblok} />
                                            <CellRendered cellItem={arrItem.sanity} />
                                            <CellRendered cellItem={arrItem.webflow} />
                                        </div>
                                    ),
                                )}
                            </div>
                            {/* TODO: Put back once other comparison pages are complete */}
                            {/* {index === data.length - 1 && (
                                <div className="why-webiny-table-row-right row-bottom-spacing">
                                    {cmsCompareData.map((cmsItem, cmsIndex) => (
                                        <Link key={cmsIndex}>
                                            <div className="text-center">
                                                <span>Webiny</span> Vs. {cmsItem.label}
                                            </div>
                                            <img src={ArrowRight} alt="Arrow right" />
                                        </Link>
                                    ))}
                                </div>
                            )} */}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </WhyWebinyTableContainer>
    );
};

export default WhyWebinyTableDesktop;
