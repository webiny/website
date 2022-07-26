import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import sectionBg from "./assets/grey-bg.svg";
import amazonLogo from "./assets/amazon.svg";
import microsoftLogo from "./assets/microsoft.svg";
import tencentLogo from "./assets/tencent.svg";
import biaduLogo from "./assets/baidu.svg";
import alibabaLogo from "./assets/alibaba.svg";
import salesforceLogo from "./assets/salesforce.svg";
import IBMLogo from "./assets/IBM.svg";
import intuitLogo from "./assets/Intuit.svg";
import accentureLogo from "./assets/accenture.svg";
import teslaLogo from "./assets/tesla.svg";

const wrapperClass = css(
    {
        //backgroundImage: "url(" + sectionBg + ")",
        backgroundColor: '#F6F4F8',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        padding: [0, 0],
    }),
);

const contentContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        maxWidth: 1200,
        boxSizing: "border-box",
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", "auto"],
        padding: ["100px 0px 80px", "80px 0px 40px"],
    }),
);

const LogosWrapper = styled("div")(
    {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 930,
        "& .logo": {
            width: 180,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    mq({
        flexDirection: ["column", "row"],
        margin: ["0px 0px 50px", "0px auto 50px"],
    }),
);

const SubTitle = styled("h4")({
    fontSize: 16,
    fontWeight: 700,
    color: theme.color.darkPurple,
    textAlign: "center",
    textTransform: "uppercase",
    maxWidth: 360,
    margin: "0px auto 44px",
});

class ClientsLogo extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <SubTitle>Webiny is being used by developers from:</SubTitle>
                    <LogosWrapper>
                        <div className={"logo"}>
                            <img src={amazonLogo} alt={"amazon logo"} />
                        </div>
                        <div className={"logo"}>
                            <img src={microsoftLogo} alt={"microsoft logo"} />
                        </div>
                        <div className={"logo"}>
                            <img src={tencentLogo} alt={"tencent logo"} />
                        </div>
                        <div className={"logo"}>
                            <img src={biaduLogo} alt={"baidu logo"} />
                        </div>
                        <div className={"logo"}>
                            <img src={alibabaLogo} alt={"alibaba logo"} />
                        </div>

                        <div className={"logo"}>
                            <img src={salesforceLogo} alt={"salesforce logo"} />
                        </div>
                        <div className={"logo"}>
                            <img src={IBMLogo} alt={"IBM logo"} />
                        </div>
                        <div className={"logo"}>
                            <img src={intuitLogo} alt={"intuit logo"} />
                        </div>
                        <div className={"logo"}>
                            <img src={accentureLogo} alt={"accenture logo"} />
                        </div>
                        <div className={"logo"}>
                            <img src={teslaLogo} alt={"tesla logo"} />
                        </div>
                    </LogosWrapper>
                </ContentContainer>
            </section>
        );
    }
}

export default ClientsLogo;
