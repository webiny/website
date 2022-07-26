import styled from "@emotion/styled";

import mq from "../../utils/breakpoints";

export const ModernTechSolutionsWrapper = styled.div(
    {
        maxWidth: "1150px",
        margin: "0px auto",

        "& *": {
            color: "#000E1A",
        },
    },
    mq({
        paddingTop: "50px",
    }),
);
export const Container = styled.div(
    mq({
        margin: ["0px 16px", "0px 40px", "0px"],
    }),
);
export const TileWrapper = styled.div(
    mq({
        textAlign: ["center", "left", ""],
        maxWidth: ["387px", "", "395px"],
        width: ["100%", "100%", "355px"],
    }),
);
export const Title = styled.h2(
    {
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "44px",
        width: "100%",
        margin: "0px auto",
    },
    mq({
        fontSize: ["36px", "36px", "42px"],
        maxWidth: ["", "663px", "663px"],
    }),
);
export const Subtitle = styled.h4(
    {
        width: "100%",
        textAlign: "center",
    },
    mq({
        fontSize: ["20px", "20px", "24px"],
        maxWidth: ["", "", "824px"],
        margin: ["32px auto 19px auto", "32px auto 49px auto", "32px auto 125px auto"],
        lineHeight: ["30px", "30px", "34px"],
    }),
);
export const TileTitle = styled.h3({
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "11px",
    marginBottom: "17px",
});
export const TileDescription = styled.p({
    fontSize: "20px",
    lineHeight: "25px",
});
export const TilesContainer = styled.div(
    {
        margin: "0px auto",
        display: "grid",
        justifyContent: "center",
    },
    mq({
        rowGap: ["4px", "73px", "73px"],
        columnGap: ["", "47px", "55px"],
        gridTemplateColumns: ["", "repeat(2, minmax(0, 1fr))", "repeat(3, minmax(0, 1fr))"],
    }),
);
export const OrangeText = styled("span")({
    color: "#FA5A28 !important",
    fontWeight: "bold",
});
