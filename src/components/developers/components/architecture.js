import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import serverSide from "../assets/webiny-server-side.svg";
import clientSide from "../assets/webiny-client-side.svg";
import clientDeploy from "../assets/client-deploy.svg";
import apiDeploy from "../assets/api-deploy.svg";

const archContainer = css(
    {},
    mq({
        marginTop: [20, 70]
    })
);

const Grid = styled("div")(
    {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        "&.first": {
            margin: "100px 20px"
        }
    },
    mq({
        flexDirection: ["column", "row"],
        marginLeft: [0, 0],
        marginRight: [0, 0],
        padding: ["0 25px", 0],
        "&.first": {
            margin: ["50px 0", "100px 20px"]
        }
    })
);

const Cell = styled("div")(
    {
        width: "100%",
        "h2,h3": {
            fontSize: theme.fontSize.h2,
            color: theme.color.black,
            marginTop: 0,
            fontWeight: theme.fontWeight.bold,
            display: "flex",
            alignItems: "center",
            img: {
                marginRight: 20
            }
        },
        h3: {
            fontSize: theme.fontSize.h3
        },
        ol: {
            marginLeft: 20,
            marginBottom: 25
        },
        li: {
            fontSize: 18,
            color: theme.color.black,
            lineHeight: "160%",
            marginBottom: 10,
            position: "relative",
            listStyle: "none",
            counterIncrement: "a",
            paddingTop: 6,
            marginLeft: 15,
            "&:before": {
                position: "absolute",
                color: theme.color.black,
                background: theme.color.white,
                width: 19,
                height: 20,
                lineHeight: "18px",
                fontSize: 14,
                display: "block",
                content: "counter(a)",
                left: "-35px",
                top: 15,
                textAlign: "center",
                paddingLeft: 1,
                fontWeight: theme.fontWeight.bold,
                verticalAlign: "initial",
                borderRadius: "50%"
            }
        }
    },
    mq({
        marginRight: [0, 0],
        img: {
            width: ["100%", "100%"]
        },
        "&:first-child": {
            marginRight: [0, 50]
        },
        "&:last-child": {
            marginLeft: [0, 50]
        }
    })
);

const ClientBlock = styled("div")(
    {},
    mq({
        marginTop: [25, 0],
        marginBottom: [25, 220]
    })
);
const ServerBlock = styled("div")({});

const SubTitle = styled("h2")({
    fontSize: theme.fontSize.h2,
    fontWeight: 500,
    textTransform: "uppercase",
    color: theme.color.black,
    textAlign: "center",
    paddingTop: 25,
    marginTop: 0,
    marginBottom: 75
});

class Architecture extends React.Component {
    render() {
        return (
            <ContentContainer className={archContainer}>
                <SubTitle>Architecture</SubTitle>
                <Grid>
                    <Cell>
                        <img src={serverSide} />
                    </Cell>
                    <Cell>
                        <img src={clientSide} />
                    </Cell>
                </Grid>
                <Grid>
                    <Cell>
                        <h3>Server Side - Microservices</h3>
                        <p>
                            It’s the latest and greatest that the technology provides. Scalable
                            serverless functions that scale together with your demand. There is no
                            load it can’t handle.
                        </p>
                    </Cell>
                    <Cell>
                        <h3>Client Side</h3>
                        <p>
                            Webiny is built with React. In our managed serverless cloud, your
                            client-side assets are served from an S3 object store.
                        </p>
                    </Cell>
                </Grid>
            </ContentContainer>
        );
    }
}

export default Architecture;
