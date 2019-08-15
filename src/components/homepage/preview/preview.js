import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Video from "./video";

import background from "./assets/platform-bg.svg";

const wrapperClass = css(
    {
        background: "url(" + background + ") no-repeat left top",
        backgroundSize: "cover",
        backgroundColor: "#fff"
    },
    mq({
        marginTop: [0, 0],
        paddingTop: [0, 120],
        paddingBottom: [0, 50]
    })
);

const SubTitle = styled("h2")({
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.white,
    textAlign: "center",
    paddingTop: 50,
    marginTop: 25,
    marginBottom: 10
});

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.h3,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.white,
        textAlign: "center",
        margin: "0 20%",
        lineHeight: "150%",
        maxWidth: 680
    },
    mq({
        margin: ["20px", "0 auto 75px auto"]
    })
);

const Grid = styled("div")(
    {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        "&.first": {
            marginTop: 100,
            marginBottom: 50
        }
    },
    mq({
        flexDirection: ["column", "row"],
        marginLeft: [0, 0],
        marginRight: [0, 0],
        padding: ["0 25px", 0],
        "&.first": {
            margin: [0, "100px 0px"]
        }
    })
);

const Cell = styled("div")(
    {
        boxSizing: "border-box",
        flexBasis: "100%",
        backgroundRepeat: "no-repeat",
        padding: 40,
        h3: {
            fontSize: theme.fontSize.h4,
            color: theme.color.white,
            marginTop: 0,
            fontWeight: theme.fontWeight.bold,
            display: "flex",
            alignItems: "center",
            img: {
                marginRight: 20
            }
        },
        p: {
            fontSize: theme.fontSize.paragraph,
            color: theme.color.white,
            lineHeight: "160%"
        },
        "&.headingCell": {
            h3: {
                fontSize: theme.fontSize.h2,
                fontWeight: theme.fontWeight.semiBold
            },
            p: {
                fontSize: 18
            }
        },
        "&:last-child": {
            marginRight: "0 !important"
        }
    },
    mq({
        marginRight: [0, 50],
        minHeight: [400, 380],
        textAlign: ["center", "left"],
        ".image": {
            border: "1px solid #E6E6E6",
            boxShadow: "0 4px 8px 0 rgba(209,209,209,0.50)",
            borderRadius: 5,
            width: ["100%", "630px"]
        },
        ".image-small": {
            border: "1px solid #E6E6E6",
            boxShadow: "0 2px 4px 0 rgba(209,209,209,0.50)",
            borderRadius: 5,
            width: ["100%", "330px"]
        },
        h3: {
            justifyContent: ["center", "flex-start"]
        }
    })
);

class Platform extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer>
                    <Grid>
                        <Cell>
                            <Video />
                        </Cell>
                    </Grid>
                </ContentContainer>
            </section>
        );
    }
}

export default Platform;
