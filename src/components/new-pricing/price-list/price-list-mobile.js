import React, { useState } from "react";
import CheckType from "./check-type";
import arrow from "../../../assets/new-homepage/table-section/arrow.svg";

import { ItemWrapper, Arrow, ButtonMobile } from "./price-list-mobile.styled";

const CollapsibleItem = ({ priceList, plan, buttonText, collapseName, border, buttonType }) => {
    const [showMenu, setShowMenu] = useState(false);
    const choosePlan = (function() {
        if (plan === "open source") {
            return "open_source";
        } else if (plan === "business") {
            return "business";
        } else if (plan === "enterprise") {
            return "enterprise";
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
                <ButtonMobile className="button" link="/" type={buttonType}>
                    {buttonText}
                </ButtonMobile>
                {priceList.map((item, index) => {
                    return (
                        <div className="item-plan-block" key={index}>
                            <h3 className="plan-block-title">{item.label}</h3>
                            <div>
                                {item.values.map((item, index) => {
                                    return (
                                        <div key={index} className="plan-items">
                                            <p className="plan-title">{item.label}</p>
                                            <div className="plan-mark">
                                                {item[choosePlan] ? (
                                                    <CheckType item={item[choosePlan]} />
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

const PriceListMobile = ({ priceList }) => {
    return (
        <div>
            <div>
                <CollapsibleItem
                    priceList={priceList}
                    plan="open source"
                    buttonText="Get Started"
                    collapseName="Open source"
                    buttonType="primary"
                    link={"/docs/"}
                />
                <CollapsibleItem
                    priceList={priceList}
                    plan="business"
                    buttonText="Try it now for free"
                    collapseName="Business"
                    buttonType="primary"
                    link={"https://docs.google.com/forms/d/1IRniZ3Qevx1LQkMEpOtdOdOLD-DLmMUdKn-_q1huNVs/"}
                    border
                />
                <CollapsibleItem
                    priceList={priceList}
                    plan="enterprise"
                    buttonText="Contact us"
                    collapseName="Enterprice"
                    buttonType="outlineOrange"
                    link={"/call/demo"}
                    border
                />
            </div>
        </div>
    );
};

export default PriceListMobile;
