import React from "react";

import Button from "../../ui/button";

import {
    buttonOutlinePrimary,
    FlexWrapper,
    MainWrapper,
    SubWrapper,
    SubWrapperTable,
    MainWrapperTitle,
    OddWrapper,
    ButtonsWrapper,
    LeftContainer,
    RightContainer,
} from "./price-list-desktop.styled";

import CheckType from "./check-type";

const PriceListDesktop = ({ priceList, showPriceList }) => {
    if (showPriceList) {
        return (
            <>
                <ButtonsWrapper>
                    <FlexWrapper>
                        <LeftContainer />
                        <RightContainer>
                            <SubWrapper className="with-button">
                                <h4>Open Source</h4>
                                <Button
                                    target="_blank"
                                    link="/docs"
                                    type="primary"
                                    className="button-border-line"
                                >
                                    Get Started
                                </Button>
                            </SubWrapper>
                            <SubWrapper className="with-button">
                                <h4>Business</h4>
                                <Button
                                    link="https://docs.google.com/forms/d/1IRniZ3Qevx1LQkMEpOtdOdOLD-DLmMUdKn-_q1huNVs/"
                                    type="primary"
                                    className="try-it-now-for-free_button button-border-line"
                                >
                                    Join the waiting list
                                </Button>
                                <Button
                                    link="/"
                                    type="primary"
                                    className="try-it-now_button button-border-line"
                                >
                                    Try it now
                                </Button>
                            </SubWrapper>
                            <SubWrapper className="with-button">
                                <h4>Enterprise</h4>
                                <Button
                                    link="/call/demo"
                                    type="outline"
                                    className={`${buttonOutlinePrimary} button-border-line`}
                                >
                                    Contact us
                                </Button>
                            </SubWrapper>
                        </RightContainer>
                    </FlexWrapper>
                </ButtonsWrapper>
                {priceList.map((item, index) => (
                    <div className="list" key={index}>
                        <MainWrapperTitle>
                            <p>{item.label}</p>
                        </MainWrapperTitle>
                        <OddWrapper>
                            {item.values.map((item, index) => {
                                return (
                                    <FlexWrapper tableWrapper key={index}>
                                        <LeftContainer>
                                            <MainWrapper>
                                                <p>{item.label}</p>
                                            </MainWrapper>
                                        </LeftContainer>
                                        <RightContainer>
                                            <SubWrapperTable>
                                                {item.open_source ? (
                                                    <CheckType item={item.open_source} />
                                                ) : (
                                                    "-"
                                                )}
                                            </SubWrapperTable>
                                            <SubWrapperTable>
                                                {item.business ? (
                                                    <CheckType item={item.business} />
                                                ) : (
                                                    "-"
                                                )}
                                            </SubWrapperTable>
                                            <SubWrapperTable>
                                                {item.enterprise ? (
                                                    <CheckType item={item.enterprise} />
                                                ) : (
                                                    "-"
                                                )}
                                            </SubWrapperTable>
                                        </RightContainer>
                                    </FlexWrapper>
                                );
                            })}
                        </OddWrapper>
                    </div>
                ))}
                <ButtonsWrapper bottom>
                    <FlexWrapper>
                        <LeftContainer />
                        <RightContainer>
                            <SubWrapper className="with-button">
                                <Button
                                    target="_blank"
                                    link="/docs/webiny/introduction/"
                                    type="primary"
                                    className="button-border-line"
                                >
                                    Get Started
                                </Button>
                            </SubWrapper>
                            <SubWrapper className="with-button">
                                <Button link="/" type="primary" className="button-border-line">
                                    Try it now for free
                                </Button>
                            </SubWrapper>
                            <SubWrapper className="with-button">
                                <Button
                                    link="/"
                                    type="outline"
                                    className={`${buttonOutlinePrimary} button-border-line`}
                                >
                                    Contact us
                                </Button>
                            </SubWrapper>
                        </RightContainer>
                    </FlexWrapper>
                </ButtonsWrapper>
            </>
        );
    }
    return null;
};

export default PriceListDesktop;
