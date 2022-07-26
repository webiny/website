import styled from "@emotion/styled";

import mq from "../../utils/breakpoints";

import backgroundImg from "../../../assets/why-webiny/webiny-unlocks-bg.svg";
import arrowImgFirst from "../../../assets/why-webiny/arrow-1.svg";
import arrowImgSecond from "../../../assets/why-webiny/arrow-2.svg";
import arrowImgThird from "../../../assets/why-webiny/arrow-3.svg";
import arrowImgFourth from "../../../assets/why-webiny/arrow-4.svg";

export const WebinyUnlocksContainer = styled.div(
    {
        paddingTop: "115px",
        marginTop: "70px",
        marginBottom: "100px",
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundPosition: "top",
    },
    mq({
        backgroundSize: ["none", "none", "cover"],
        marginBottom: ["45px", "45px", "100px"],
        paddingBottom: ["45px", "45px", "50px"],
    }),
);

export const OrangeText = styled.span({
    color: "#FA5A28",
});

export const WebinyUnlocksContentWrapper = styled.div(
    {
        margin: "0 auto",
    },
    mq({
        maxWidth: ["396px", "805px", "1140px"],
    }),
);

export const WebinyUnlocksTitleWrapper = styled.div(
    {
        position: "relative",
        margin: "0 auto",
    },
    mq({
        paddingBottom: ["85px", "70px", "120px"],
    }),
);

export const WebinyUnlocksTitle = styled.div(
    {
        textAlign: "center",
        fontWeight: "700",
        color: "#000E1A",
    },
    mq({
        fontSize: ["36px", "36px", "42px"],
        lineHeight: ["45px", "45px", "53px"],
        paddingLeft: ["25px", "50px", "250px"],
        paddingRight: ["25px", "50px", "250px"],
    }),
);

export const ArrowFirst = styled.div(
    {
        position: "absolute",
        top: "75px",
        left: "135px",
        content: `url(${arrowImgFirst})`,
    },
    mq({
        display: ["none", "none", "block"],
    }),
);

export const ArrowSecond = styled.div(
    {
        position: "absolute",
        top: "115px",
        left: "427px",
        content: `url(${arrowImgSecond})`,
    },
    mq({
        display: ["none", "none", "block"],
    }),
);

export const ArrowThird = styled.div(
    {
        position: "absolute",
        top: "115px",
        right: "423px",
        content: `url(${arrowImgThird})`,
    },
    mq({
        display: ["none", "none", "block"],
    }),
);

export const ArrowFourth = styled.div(
    {
        position: "absolute",
        top: "73px",
        right: "138px",
        content: `url(${arrowImgFourth})`,
    },
    mq({
        display: ["none", "none", "block"],
    }),
);

export const TileContainer = styled.div(
    {
        display: "grid",
        justifyContent: "center",
        paddingBottom: "10px",
    },
    mq({
        gridTemplateColumns: ["392px", "359px 359px", "238px 238px 238px 238px"],
        columnGap: ["none", "46px", "44px"],
        rowGap: ["55px", "75px", "none"],
    }),
);

export const UnlocksTileWrap = styled.div(
    {
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        position: "relative",
        width: "100%",
        backgroundColor: "#ffffff",
        textAlign: "center",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "6px",
        "@media (max-width: 405px)": {
            transform: "scale(0.9)",
        },
        "&.tile-container-above": mq({
            paddingTop: ["5px", "0px", "0px"],
            paddingBottom: ["6px", "0px", "0px"],
        }),
    },
    mq({
        height: ["147px", "175px", "175px"],
    }),
);

export const TileImage = styled.div(
    {
        position: "absolute",
        top: "-25px",
    },
    mq({
        left: ["171px", "155px", "94px"],
    }),
);

export const TileContentWrap = styled.div(
    {
        display: "grid",
        justifyContent: "center",
        alignContent: "space-evenly",
        margin: "0 auto",
        color: "#000E1A",
    },
    mq({
        width: ["360px", "328px", "217px"],
        height: ["100px", "120px", "133px"],
        marginTop: ["18px", "0px", "27px"],
    }),
);

export const TileTitle = styled.h3(
    {
        fontSize: "18px",
        lineHeight: "23px",
        fontWeight: "700",
        marginTop: "0px",
        marginBottom: "0px",
    },
    mq({
        paddingLeft: ["25px", "30px", "15px"],
        paddingRight: ["25px", "30px", "15px"],
    }),
);

export const TileDescription = styled.p(
    {
        fontSize: "14px",
        lineHeight: "18px",
        marginBottom: "0px",
    },
    mq({
        paddingLeft: ["0px", "5px", "3px"],
        paddingRight: ["0px", "5px", "3px"],
    }),
);
