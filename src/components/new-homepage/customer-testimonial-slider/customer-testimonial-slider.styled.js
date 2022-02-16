import styled from "react-emotion";

import mq from "../../utils/breakpoints";

export const Wrapper = styled.div(
    mq({
        padding: ["30px 0px", "40px 0px", "50px 0px 50px 85px"],
    }),
);
export const CustomerTestimonialContainer = styled.div(
    {
        alignItems: "center",
        overflow: "hidden",
        gap: "30px",
        " .slick-track": {
            display: "flex",
            padding: "40px 0px",
        },
    },
    mq({
        display: ["block", "block", "flex"],
        textAlign: ["center", "center", "right"],
        " .slick-track:first-of-type": {
            marginLeft: ["20px", "18px", "35px"],
        },
        " .slick-track": {
            gap: ["16px", "17px", "17px"],
            marginBottom: ["0px", "0px", "50px"],
        },
    }),
);

export const Title = styled.h2(
    {
        margin: "0px auto",
        fontSize: "36px",
        fontWeight: "700",
    },
    mq({
        width: ["", "", "300px"],
    }),
);
export const OrangeText = styled.span({
    color: "#FA5A28",
});

export const ArrowContainer = styled.div(
    {
        display: "flex",
        ".next-slide": { transform: "rotate(180deg)" },
        marginBottom: "16px",
    },
    mq({
        justifyContent: ["center", "center", "end"],
        marginTop: ["33px", "33px", "60px"],
    }),
);
export const Border = styled.div({
    margin: "0px 27px",
    height: "47px",
    borderLeft: "1px solid #E5E5E5",
});
export const PrevSlide = styled.img({
    cursor: "pointer",
});
export const NextSlide = styled.img({
    cursor: "pointer",
});
