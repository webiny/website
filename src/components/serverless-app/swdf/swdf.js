import React from 'react';
import {css} from 'emotion';
import Hero from '../components/hero';
import {List, ListItem} from '../components/list';
import FeatureBox from '../components/feature-box';
import ContentContainer from '../../ui/content-container';
import {SubTitle} from '../components/typography';
import {Grid, Cell} from '../../ui/layout/layout';
import QuickStart from '../../ui/layout/footer';
import AppList from '../components/app-list';
import mq from '../../utils/breakpoints';
import SlsDesign from '../components/serverless-design';
import Code from '../components/code';
import DeveloperFeatures from './more-than-cms/more-than-cms';
import SlsBenefits
  from '../../homepage/serverless-benefits/serverless-benefits';

import HeroImage from './assets/serverless-web-development-framework.png';
import HeroBg from './assets/hero-bg.svg';

const featureContainer = css (
  {
    display: 'flex',
    marginBottom: 50,
  },
  mq ({
    flexDirection: ['column', 'row'],
  })
);

const heroImageStyle = css ({
  maxHeight: 550,
  border: 'none !important',
  boxShadow: 'none !important',
});

const heroStyles = css (
  {},
  mq ({
    '.hero-left': {
      width: ['100%', '500px !important'],
    },
    '.hero-right': {
      width: ['100%', '550px !important'],
    },
  })
);

export default ({children, ...props}) => (
  <React.Fragment>
    <Hero
      className={heroStyles}
      bg={HeroBg}
      title={'Serverless Web Development Framework'}
      getStarted="https://docs.webiny.com/"
      media={
        <img
          className={heroImageStyle}
          src={HeroImage}
          alt="Webiny Serverless Web Development Framework"
        />
      }
    >
      <List>
        <ListItem title={'Build Serverless Apps FASTER'}>
          - All-in-one framework designed from  ground up specifically for development of serverless applications.
        </ListItem>
        <ListItem title={'Everything you need'}>
          - ACL layer, Apollo GraphQL API, Admin UI,  deployment mechanism, SSR, webpack & babel configurations, React components and much more.
        </ListItem>
        <ListItem title={'Just add business logic'}>
          - All is pre-configured so you can start coding your app right away without losing time on bootstrap  and setup.
        </ListItem>
      </List>
    </Hero>

    <SlsDesign />

    <ContentContainer className={featureContainer}>
      <FeatureBox>
        The foundation for building serverless applications
      </FeatureBox>
      <FeatureBox>
        100% JavaScript - powered by React and Node.js
      </FeatureBox>
      <FeatureBox>
        Designed using a microservices architecture
      </FeatureBox>
    </ContentContainer>
    <ContentContainer className={featureContainer}>
      <FeatureBox>
        React-based Admin UI theme included
      </FeatureBox>
      <FeatureBox>
        Deploy your app using Serverless Components
      </FeatureBox>
      <FeatureBox>
        Support for multiple environments (dev/prod/stage)
      </FeatureBox>
    </ContentContainer>

    <section>
      <ContentContainer>
        <SubTitle>Features</SubTitle>

        <Grid right>
          <Cell title="Powered by plugins">
            <p>
              From the ground up, Webiny is built on top of plugins, which are basically simple objects that consist of base "type" and "name" properties, and any other custom ones that you might need to get the job done.
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
              Every single-page application consists of routes, and Webiny is no different! Adding new routes to your app is just a matter of creating a simple "route" plugin.
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
              What good are routes if you cannot access them via the user interface. But don't worry, Webiny's got you covered here as well! With "menu" plugins, you can easily create menus that can be organized in any way you like.
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
              All Webiny apps are powered by a GraphQL HTTP API which can be easily expanded with new fields, types, and resolvers. Creating a simple "graphql-schema" plugin is all that is needed in order to do that.
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
                getProduct(id: ID): ProductResponse

                listProducts(page: Int, perPage: Int, where: JSON, sort: JSON): ProductsListResponse
            }

            type MyAppMutation {
                createProduct(data: ProductInput!): ProductResponse

                updateProduct(id: ID!, data: ProductInput!): ProductResponse
            }

            type Query {
                myApp: MyAppQuery
            }

            type Mutation {
                myApp: MyAppMutation
            }
            
            (...)
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
            
            (...)
        }
    }
}`}
            </Code>
          </Cell>
        </Grid>

        <Grid right>
          <Cell title="Models">
            <p>
              For all database-related tasks, Webiny relies on the Commodo library, which is basically a set of higher order functions (HOFs) that let you define rich data model objects. Once you've defined your models, you can selectively expose needed data and functionality via your GraphQL schema.
            </p>
          </Cell>
          <Cell>
            <Code language="javascript">
              {`import { pipe, withFields, string, number, boolean } from "@webiny/commodo";
import { validation } from "@webiny/validation";

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
