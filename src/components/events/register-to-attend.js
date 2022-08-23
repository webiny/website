import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";
import ContentContainer from "../ui/content-container";

import Button from "../ui/button";
import pinkBg from "./assets/pink-rectangle.svg";

const ButtonWrapper = styled("div")({
    position: "relative",
    display: "flex",
    justifyContent: "center",
});

const ctaButton = css(
    {
        textTransform: "uppercase",
        padding: "20px 12px !important",
    },
    mq({
        width: ["230px !important"],
    }),
);

const wrapperClass = css(
    {
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundImage: "url(" + pinkBg + ")",

        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
    },
    mq({
        backgroundSize: ["cover", "cover"],
        paddingTop: [0, 0],
        paddingBottom: [0, 0],
        marginTop: [-110, -143],
    }),
);

const contentContainerClass = css(
    {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        marginTop: ["30px"],
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%"],
        paddingTop: [80, 180],
        paddingBottom: [80, 146],
        marginBottom: [0, 0],
    }),
);

const TextWrapper = styled("div")(
    {
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 60,
    },
    mq({
        paddingTop: [40, 0],
    }),
);

const Title = styled("h2")({
    fontSize: 48,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.white,
    lineHeight: "42px",
    textAlign: "center",
    paddingTop: 0,
    margin: 0,
});

class RegisterToAttend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { refFromParent, ...restProps } = this.props;
        const openForm = () => {
            return window.open("https://forms.gle/12xXgy7vPXugUpS7A", "_self", "", "");
        };
        return (
            <section ref={refFromParent} {...restProps} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <TextWrapper>
                        <Title>Do you Want to attend our Online Meetups? </Title>
                    </TextWrapper>
                    <ButtonWrapper>
                        <Button onClick={openForm} className={ctaButton} type="secondary">
                            REGISTER HERE
                        </Button>
                    </ButtonWrapper>
                </ContentContainer>
            </section>
        );
    }
}

export default RegisterToAttend;
