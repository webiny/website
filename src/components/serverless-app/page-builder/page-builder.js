import React from "react";
import { css, keyframes } from "emotion";
import Hero from "../components/hero";
import { List, ListItem } from "../components/list";
import FeatureBox from "../components/feature-box";
import ContentContainer from "../../ui/content-container";
import mq from "../../utils/breakpoints";
import YTVideo from "../components/yt-video";
import { SubTitle } from "../components/typography";
import { Grid, Cell } from "../../ui/layout/layout";
import VideoBox from "../../ui/layout/video-box";
import QuickStart from "../../ui/layout/footer";
import AppList from "../components/app-list";
import SlsDesign from "../components/serverless-design.js";

import HeroImage from "./assets/page-builder.png";
import HeroBg from "./assets/hero-bg.svg";
import PageBuilderDemoImg from "./assets/page-builder-demo.png";
import PageBuilderVideo from "./assets/01-page-builder.mp4";
import BuildingBlocksVideo from "./assets/02-building-blocks.mp4";
import PageRevisionsVideo from "./assets/03-page-revisions.mp4";
import PageElementsVideo from "./assets/04-page-elements.mp4";
import SeoVideo from "./assets/05-seo.mp4";
import MenuVideo from "./assets/06-menu.mp4";
import PageCategoriesVideo from "./assets/07-page-categories.mp4";

const featureContainer = css(
  {
    display: "flex",
    marginBottom: 50,
    boxSizing: "border-box",
  },
  mq({
    flexDirection: ["column", "row"],
  })
);

export default ({ children, ...props }) => (
  <React.Fragment>
    <Hero
      bg={HeroBg}
      appName={"Page Builder"}
      title={
        "Build Stunning Landing Pages With an Easy to Use Drag&Drop Editor"
      }
      getStarted="https://docs.webiny.com/docs/webiny-apps/page-builder/getting-started"
      media={<img src={HeroImage} alt="Webiny Serverless Page Builder" />}
    >
      <List>
        <ListItem title={"Serverless & Self-hosted"}>
          - Quick and easy deployment using Webiny CLI.
        </ListItem>
        <ListItem title={"Easy Theming"}>
          - Themes are created using JavaScript and SCSS.{" "}
        </ListItem>
        <ListItem title={"Mobile responsive"}>
          - All the generated pages will look great on any device and screen
          size.
        </ListItem>
      </List>
    </Hero>
    <SlsDesign />

    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Great for building landing pages and marketing sites
      </FeatureBox>
      <FeatureBox>Simple and intuitive UI that anyone can use</FeatureBox>
      <FeatureBox>Expand the capabilities by developing plugins</FeatureBox>
    </ContentContainer>
    <ContentContainer className={featureContainer}>
      <FeatureBox>Build your own theme</FeatureBox>
      <FeatureBox>All pages are mobile responsive</FeatureBox>
      <FeatureBox>SEO and Social media friendly</FeatureBox>
    </ContentContainer>

    <YTVideo img={PageBuilderDemoImg} id={"OQOmJZxT5dg"} />

    <ContentContainer>
      <SubTitle>Features</SubTitle>
      <Grid left>
        <Cell>
          <VideoBox file={PageBuilderVideo} />
        </Cell>
        <Cell title="Drag&drop page builder">
          <p>
            Unleash your creativity. Don’t constrain your content inside a
            "textarea". Webiny features, not a text editor, but a full featured
            drag&drop builder. This allows you to build more engaging pages and
            present your content in the way it deserves. Your users will thank
            you.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Building blocks included">
          <p>
            Often a CMS gives you the option to arrange your content in a crude
            and boring way and your users will notice that. So, what good is a
            CMS if it’s not keeping your users engaged?
          </p>
          <p>
            To spin things around, Webiny features a set of built-in
            inspirational content blocks. You can drop into your page and adjust
            them to fit your needs. It will make every page a unique engaging
            experience.
          </p>
        </Cell>
        <Cell>
          <VideoBox file={BuildingBlocksVideo} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <VideoBox file={PageRevisionsVideo} />
        </Cell>
        <Cell title="Page revisions">
          <p>
            Never lose sight of who changed what. Go back in time and restore
            previous versions of a page. Work on new content drafts without
            publishing them until ready.{" "}
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Page elements">
          <p>
            Page builder features over 15 different elements you can add to a
            page. Create rich experiences for your visitors. If an element is
            missing, it’s easy to create one as they are simple React
            components. Each element controls its presentation layer, as well as
            settings and configuration options.
          </p>
        </Cell>
        <Cell>
          <VideoBox file={PageElementsVideo} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <VideoBox file={SeoVideo} />
        </Cell>
        <Cell title="SEO & social media">
          <p>
            Control the SEO aspects of a page. Tags like page title,
            description, keywords as well as any other. Page builder comes with
            a set of predefined OpenGraph fields. They define how a page looks
            when share across different social media sites.{" "}
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Navigation menus">
          <p>
            Menus and navigation are crucial part of every site. Page builder
            includes a module for building navigation menus. Insert pages, list
            of pages, or create a sub-tree navigation. You can also add external
            links and control the arrangement of menu items.
          </p>
        </Cell>
        <Cell>
          <VideoBox file={MenuVideo} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <VideoBox file={PageCategoriesVideo} />
        </Cell>
        <Cell title="Organize your content">
          <p>
            To better organise the content, each page belongs to a specific page
            category. A page category defines which theme layout it will used to
            display the content. Page categories also control the URL prefix
            used for all page in this group. This makes the page URL look nice
            and structured.
          </p>
        </Cell>
      </Grid>
    </ContentContainer>
    <AppList />
    <QuickStart />
  </React.Fragment>
);
