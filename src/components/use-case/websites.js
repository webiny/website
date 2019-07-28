import React from "react";
import ContentContainer from "../ui/content-container";
import Footer from "./components/footer";
import Title from "./components/title";
import Header from "./components/header";
import { Grid, Cell } from "./components/layout";

import headerBg from "./assets/header-bg-websites.svg";

import imgBuilder from "./assets/website/builder.svg";
import imgHeadless from "./assets/website/headless.svg";
import imgHosted from "./assets/website/hosted-env.svg";
import imgI18n from "./assets/website/i18n.svg";
import imgTheme from "./assets/website/theme.svg";
import imgMultiSite from "./assets/website/multi-site.svg";
import imgIntegrations from "./assets/website/integrations.svg";

const Websites = () => (
    <React.Fragment>
        <Header bg={headerBg}>
            <Title>Create amazing dynamic websites with stellar performance</Title>
        </Header>
        <ContentContainer>
            <Grid left>
                <Cell>
                    <img src={imgBuilder} />
                </Cell>
                <Cell title="Build pages and forms without code">
                    <p>
                        Use the intuitive and powerful drag&drop builder to create stunning pages as
                        well as forms to capture your leads. No coding required!
                    </p>
                </Cell>
            </Grid>
            <Grid right>
                <Cell
                    comingSoon={true}
                    title={"For more complex structures, there is a headless module"}
                >
                    <p>
                        Content modeling and a GraphQL API for content distribution, the headless
                        module allows you to go beyond the web to display your content.{" "}
                    </p>
                </Cell>
                <Cell>
                    <img src={imgHeadless} />
                </Cell>
            </Grid>
            <Grid left>
                <Cell>
                    <img src={imgI18n} />
                </Cell>
                <Cell title="Creating content for multiple languages is a built-in feature">
                    <p>
                        The built-in multi-language support allows you to create content for
                        multiple languages.
                    </p>
                </Cell>
            </Grid>
            <Grid right>
                <Cell title="Use the ready-made integrations or create your own">
                    <p>
                        Things like youtube videos, cookie policy consents, google tag manager and
                        many more, are all included by default. If something is missing, just create
                        a new plugin.
                    </p>
                </Cell>
                <Cell>
                    <img src={imgIntegrations} />
                </Cell>
            </Grid>
            <Grid left>
                <Cell>
                    <img src={imgTheme} />
                </Cell>
                <Cell title="Build your own theme">
                    <p>
                        Webiny allows you to create your theme. Have full control over your HTML and
                        CSS. You can also import any library from NPM to help you create added
                        functionality.
                    </p>
                </Cell>
            </Grid>
            <Grid right>
                <Cell title="Great performance with the managed serverless cloud">
                    <p>
                        From the included CDN to several caching layers, built-in server-side
                        rendering and image optimization feature, Webiny sites will perform
                        amazingly well in any geo, device, and throughput and you don’t need to
                        worry about uptime.
                    </p>
                </Cell>
                <Cell>
                    <img src={imgHosted} />
                </Cell>
            </Grid>
            <Grid left>
                <Cell>
                    <img src={imgMultiSite} />
                </Cell>
                <Cell title="Manage multiple websites">
                    <p>
                        With Webiny Serverless Cloud you can create and host multiple websites. Know
                        the usage and cost of each website. Access the admin section of each website
                        from a single place.
                    </p>
                </Cell>
            </Grid>
        </ContentContainer>
        <Footer />
    </React.Fragment>
);

export default Websites;
