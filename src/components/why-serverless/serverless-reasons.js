import React from "react";
import { css } from "emotion";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import { Grid, Cell } from "../ui/layout/layout";

import zeroServers from "./assets/zero-servers.svg";
import usagePay from "./assets/usage-pay.svg";
import buildFaster from "./assets/build-faster.svg";
import scaling from "./assets/scaling.svg";

const containerStyle = css(
    {
        display: "flex",
        justifyContent: "space-around",
        marginTop: -150,
        flexWrap: "wrap",
        width: "100%",
        ">div": {
            boxSizing: "border-box",
            img: {
                width: 250,
            },
        },
    },
    mq({
        flexDirection: ["column !important", "row !important"],
        ">div": {
            width: ["100%", "50%"],
            marginBottom: [25, 50],
            "&:nth-child(odd)": {
                paddingRight: [0, 25],
            },
            "&:nth-child(even)": {
                paddingLeft: [0, 25],
            },
        },
    }),
);

const ServerlessReasons = () => (
    <React.Fragment>
        <ContentContainer>
            <Grid top className={containerStyle}>
                <div>
                    <Cell>
                        <img src={zeroServers} alt="Zero servers to manage" />
                    </Cell>
                    <Cell title="Forget about server management">
                        <p>
                            Servers are still there, but they are abstracted away and managed by
                            your cloud provider. They are not your problem anymore, the same goes
                            for load balancers and autoscaling.
                        </p>
                    </Cell>
                </div>
                <div>
                    <Cell>
                        <img src={usagePay} alt="Pay for what you use" />
                    </Cell>
                    <Cell title="Stop paying for stuff you don't use">
                        <p>
                            Pay for each function execution. This means you don’t need to
                            over-provision and thus over-pay for infrastructure. Especially for
                            those periods of peak demand.
                        </p>
                    </Cell>
                </div>
                <div>
                    <Cell>
                        <img src={buildFaster} alt="Build things faster" />
                    </Cell>
                    <Cell title="Build things faster">
                        <p>
                            Because all you need to do is deploy your code, you won't lose time on
                            spinning up and configuring servers. As a result you’ll iterate and
                            launch products faster.
                        </p>
                    </Cell>
                </div>
                <div>
                    <Cell>
                        <img src={scaling} alt="No more scaling headaches" />
                    </Cell>
                    <Cell title="No more scaling headaches">
                        <p>
                            Serverless functions spin up in milliseconds the moment there is a
                            demand increase. The newly created functions are immediately ready to
                            handle new requests. And you, just sit and relax.
                        </p>
                    </Cell>
                </div>
            </Grid>
        </ContentContainer>
    </React.Fragment>
);

export default ServerlessReasons;
