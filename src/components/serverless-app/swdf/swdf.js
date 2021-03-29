import React from "react";
import { css } from "emotion";
import Hero from "../components/hero";
import { List, ListItem } from "../components/list";
import FeatureBox from "../components/feature-box";
import ContentContainer from "../../ui/content-container";
import { SubTitle } from "../components/typography";
import { Grid, Cell } from "../../ui/layout/layout";
import QuickStart from "../../ui/layout/footer";
import AppList from "../components/app-list";
import mq from "../../utils/breakpoints";
import SlsDesign from "../components/serverless-design";
import Code from "../components/code";
import DeveloperFeatures from "./more-than-cms/more-than-cms";
import SlsBenefits from "../../homepage/serverless-benefits/serverless-benefits";
import StackAndBlocks from "./stack-and-blocks";

import HeroImage from "./assets/serverless-web-development-framework.png";
import HeroBg from "./assets/hero-bg.svg";

const featureContainer = css(
    {
        display: "flex",
        marginBottom: 50,
    },
    mq({
        flexDirection: ["column", "row"],
    }),
);

const heroImageStyle = css({
    maxHeight: 550,
    border: "none !important",
    boxShadow: "none !important",
});

const heroStyles = css(
    {},
    mq({
        ".hero-left": {
            width: ["100%", "500px !important"],
        },
        ".hero-right": {
            width: ["100%", "550px !important"],
        },
    }),
);

export default ({ children, ...props }) => (
    <React.Fragment>
        <Hero
            className={heroStyles}
            bg={HeroBg}
            title={"Serverless Web Development Framework"}
            getStarted="/docs/webiny/introduction/"
            media={
                <img
                    className={heroImageStyle}
                    src={HeroImage}
                    alt="Webiny Serverless Web Development Framework"
                />
            }
        >
            <List>
                <ListItem title={"Build Serverless Apps FASTER"}>
                    - All-in-one framework designed from ground up specifically for development of
                    serverless applications.
                </ListItem>
                <ListItem title={"Everything you need"}>
                    - ACL layer, Apollo GraphQL API, Admin UI, deployment mechanism, SSR, webpack &
                    babel configurations, React components and much more.
                </ListItem>
                <ListItem title={"Just add business logic"}>
                    - All is pre-configured so you can start coding your app right away without
                    losing time on bootstrap and setup.
                </ListItem>
            </List>
        </Hero>

        <SlsDesign />

        <ContentContainer className={featureContainer}>
            <FeatureBox>The foundation for building serverless applications</FeatureBox>
            <FeatureBox>100% JavaScript - powered by React and Node.js</FeatureBox>
            <FeatureBox>Designed using a microservices architecture</FeatureBox>
        </ContentContainer>
        <ContentContainer className={featureContainer}>
            <FeatureBox>React-based Admin UI theme included</FeatureBox>
            <FeatureBox>Deploy your app using Serverless Components</FeatureBox>
            <FeatureBox>Support for multiple environments (dev/prod/stage)</FeatureBox>
        </ContentContainer>

        <StackAndBlocks />

        <section>
            <ContentContainer>
                <SubTitle>Features</SubTitle>

                <Grid right>
                    <Cell title="Install via Yarn">
                        <p>
                            To configure and install the complete environment, it’s a simple `yarn`
                            command and just one configuration file. Learn more >
                        </p>
                    </Cell>
                    <Cell>
                        <Code language="shell">
                            {`# Step 1. Install webiny-cli
$ yarn global add @webiny/cli

# Step 2. Create a project
$ webiny create my-project-name

# Step 3. deploy the API services
$ webiny deploy-api

# Step 4. deploy the API services
$ webiny deploy-apps

# Your project is live!
https://xyz.amazonaws.com/`}
                        </Code>
                    </Cell>
                </Grid>

                <Grid right>
                    <Cell title="Webiny CLI">
                        <p>
                            Webiny CLI is the tool that you will use to build, watch and deploy your
                            serverless applications.
                        </p>
                        <p>
                            CLI supports command like deploying only a specific service/API instead
                            of the whole set, for much faster development experience.
                        </p>
                        <p>
                            CLI will also notify you via desktop notifications when the deployment
                            is done, so you don’t need to watch the terminal all the time.
                        </p>
                    </Cell>
                    <Cell>
                        <Code language="shell">
                            {`Usage: webiny <command> [options]

Commands:
webiny run <command> [options]         Run command defined in
                                       webiny.config.js.
                                       (NOTE: run from folder containing
                                       webiny.config.js)
webiny enable-tracking                 Enable tracking of Webiny stats.
webiny disable-tracking                Disable tracking of Webiny stats.
webiny deploy <folder> [resources...]  Deploy resources from <folder>.
                                       (NOTE: run from project root)
webiny remove <folder>                 Remove resources from <folder>.
                                       (NOTE: run from project root)
webiny scaffold                        Generate boilerplate code

Options:
--help     Show help                                                 [boolean]
--version  Show version number                                       [boolean]

Examples:
webiny deploy api --env=dev
webiny remove api --env=dev`}
                        </Code>
                    </Cell>
                </Grid>

                <Grid right>
                    <Cell title="Powered by plugins">
                        <p>
                            From the ground up, Webiny is built on top of plugins, which are
                            basically simple objects that consist of base "type" and "name"
                            properties, and any other custom ones that you might need to get the job
                            done.
                        </p>
                    </Cell>
                    <Cell>
                        <Code language="javascript">
                            {`{
  type: "my-plugin",
  name: "my-plugin-xyz",
  anAwesomePlugin: true,
  somethingNested: {
    myCurrentMood: "happy",
    getANewDate: () => new Date()
  }
}`}
                        </Code>
                    </Cell>
                </Grid>

                <Grid right>
                    <Cell title="Routes">
                        <p>
                            Every single-page application consists of routes, and Webiny is no
                            different! Adding new routes to your app is just a matter of creating a
                            simple "route" plugin.
                        </p>
                    </Cell>
                    <Cell>
                        <Code language="javascript">
                            {`import { Route } from "@webiny/react-router";

(...)

{
    type: "route",
    name: "route-my-app-products",
    route: (
        <Route
            exact
            path={"/my-app/products/:id"}
            render={() => <ProductsForm/>}
        />
    )
}`}
                        </Code>
                    </Cell>
                </Grid>

                <Grid right>
                    <Cell title="Menus">
                        <p>
                            What good are routes if you cannot access them via the user interface.
                            But don't worry, Webiny's got you covered here as well! With "menu"
                            plugins, you can easily create menus that can be organized in any way
                            you like.
                        </p>
                    </Cell>
                    <Cell>
                        <Code language="jsx">
                            {`{
  type: "menu",
  name: "menu-my-app",
  render({ Menu, Section, Item }) {
    return (
      <Menu name="my-app" label={"My App"}>
        <Section label={"Products"}>
          <Item label={"Products List"} path="/my-app/products" />
          <Item label={"Manage stock"} path="/my-app/products/stock" />
        </Section>
        <Section label={"Customers"}>
          <Item label={"Customers"} path="/my-app/customers" />
          <Item label={"Discounts"} path="/my-app/customers/discounts" />
        </Section>
      </Menu>
    );
  }
};`}
                        </Code>
                    </Cell>
                </Grid>

                <Grid right>
                    <Cell title="GraphQL">
                        <p>
                            All Webiny apps are powered by a GraphQL HTTP API which can be easily
                            expanded with new fields, types, and resolvers. Creating a simple
                            "graphql-schema" plugin is all that is needed in order to do that.
                        </p>
                    </Cell>
                    <Cell>
                        <Code language="javascript">
                            {`{
    type: "graphql-schema",
    name: "graphql-schema-my-app",
    schema: {
        typeDefs: gql\`
            (...)
            
            type MyAppQuery {
                # Returns a single product.
                getProduct(id: ID): ProductResponse

                # Returns a list of products.
                listProducts(page: Int, perPage: Int, where: JSON, sort: JSON): ProductsListResponse
            }

            type MyAppMutation {
                # Creates a new product.
                createProduct(data: ProductInput!): ProductResponse
                
                # Updates an existing product.
                updateProduct(id: ID!, data: ProductInput!): ProductResponse
            }

            type Query {
                myApp: MyAppQuery
            }

            type Mutation {
                myApp: MyAppMutation
            }
        \`,
        resolvers: {
            (...)
        
            MyAppQuery: {
                getProduct: resolveGet,
                listProducts: resolveList
            },
            MyAppMutation: {
                createProduct: resolveGet,
                updateProduct: resolveList
            }
        }
    }
}`}
                        </Code>
                    </Cell>
                </Grid>

                <Grid right>
                    <Cell title="Models">
                        <p>
                            For all database-related tasks, Webiny relies on the Commodo library,
                            which is basically a set of higher order functions (HOFs) that let you
                            define rich data model objects. Once you've defined your models, you can
                            selectively expose needed data and functionality via your GraphQL
                            schema.
                        </p>
                    </Cell>
                    <Cell>
                        <Code language="javascript">
                            {`import { pipe, withFields, string, number, boolean } from "@webiny/commodo";
import { validation } from "@webiny/validation";

// Create a new "User" model that consist of a couple of fields.
const User = pipe(
    withFields({
        firstName: string(),
        lastName: string(),
        email: string({ validation: validation.create("required,email") }),
        age: number(),
        enabled: boolean({ value: false })
    })
)();

(...)

// Later down the road, you can create model instances, populate them
// with data, do complex data validations, and save the data to a database.
const user = new User();
user.populate({
    firstName: "Adrian",
    lastName: "Smith",
    email: "aDrIan@google.com",
    enabled: true,
});

await user.save();`}
                        </Code>
                    </Cell>
                </Grid>
            </ContentContainer>
            <QuickStart />
            <DeveloperFeatures />
            <SlsBenefits />
        </section>
        <AppList />
        <QuickStart />
    </React.Fragment>
);
