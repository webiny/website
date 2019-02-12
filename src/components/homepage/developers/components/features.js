import React from 'react';
import styled from 'react-emotion';

import theme from '../../../utils/theme';
import mq from '../../../utils/breakpoints';
import ContentContainer from '../../../ui/content-container';

import serverlessIcon from '../assets/serverless-icon.svg';
//import testCoverageIcon from '../assets/test-coverage-icon.svg';
import craIcon from '../assets/cra-icon.svg';
import graphqlIcon from '../assets/graphql-icon.svg';
import uiComponentsIcon from '../assets/ui-components-icon.svg';
import documentedIcon from '../assets/documented-icon.svg';
import openSourceIcon from '../assets/open-source-icon.svg';
import materialThemeIcon from '../assets/material-theme-icon.svg';
import flowjsIcon from '../assets/flowjs-icon.svg';
import databaseIcon from '../assets/database-icon.svg';
//import i18nIcon from '../assets/i18n-icon.svg';
import integrationsIcon from '../assets/integrations-icon.svg';
import securityIcon from '../assets/security-icon.svg';
import externalLinkIcon from '../assets/external-link-symbol.svg';
import visualBuilderIcon from '../assets/visual-builder-icon.svg';
//import testPassing from '../assets/passing.svg';
//import testCoverage from '../assets/coveralls_95.svg';

const BoxContainer = styled ('div') (
  {
    justifyContent: 'space-between',
    marginBottom: 30,
    boxSizing: 'border-box',
  },
  mq ({
    display: ['block', 'flex'],
  })
);

const Box = styled ('div') (
  {
    backgroundColor: theme.color.white,
    boxShadow: '0 2px 4px 0 rgba(125,69,69,0.50)',
    borderRadius: 2,
    position: 'relative',
    boxSizing: 'border-box',
    transition: 'box-shadow 0.3s ease-in-out',
    transitionProperty: 'opacity,transform,-webkit-transform, box-shadow !important',
    '&:hover': {
      boxShadow: '0 15px 15px 0 rgba(125,69,69,0.50)',
    },
  },
  mq ({
    width: ['auto', '33%'],
    margin: [20, '0px 15px'],
    padding: ['80px 30px 50px', '90px 30px 30px'],
  })
);

const BoxTitle = styled ('h5') ({
  color: theme.color.black,
  fontSize: theme.fontSize.h5,
  fontWeight: theme.fontWeight.semiBold,
  textTransform: 'uppercase ',
  position: 'absolute',
  top: 35,
  left: 100,
});

const BoxIcon = styled ('img') ({
  position: 'absolute',
  top: 20,
  left: 30,
  height: 50,
});

const BoxDescription = styled ('p') ({
  fontSize: 16,
  lineHeight: '150%',
  color: theme.color.black,
  marginBottom: 0, //30,
  letterSpacing: '0.3px',
});

const BoxFooter = styled ('div') ({
  position: 'absolute',
  bottom: 20,
});

const Italic = styled ('p') ({
  fontStyle: 'italic',
  fontSize: 14,
  marginBottom: 0,
});

const SmallText = styled ('span') ({
  fontSize: 12,
  marginBottom: 0,
});

const ExternalLink = styled ('a') ({
  background: 'url(' + externalLinkIcon + ') no-repeat 0px 3px',
  color: theme.color.grayText,
  fontSize: theme.fontSize.paragraph,
  paddingLeft: 20,
  textDecoration: 'none',
});

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: 500,
  textTransform: 'uppercase',
  color: theme.color.white,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 0,
  marginBottom: 75,
});

class Features extends React.Component {
  render () {
    return (
      <ContentContainer>
        <SubTitle>Features</SubTitle>
        <BoxContainer>
          <Box data-aos="fade-up" data-aos-delay="150" data-aos-offset="300">
            <BoxIcon src={serverlessIcon} />
            <BoxTitle>Serverless</BoxTitle>
            <BoxDescription>
              Webiny is built on top of modern serverless technologies, which ensure
              your apps run flawlessly in any circumstances. Focus completely on
              developing your app instead of managing servers and other resources.
            </BoxDescription>
          </Box>
          <Box data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
            <BoxIcon src={craIcon} />
            <BoxTitle>CRA v2</BoxTitle>
            <BoxDescription>
              To make app development easier, we decided to use Create React App,
              an environment many developers already know and love, so getting
              started with Webiny will be a familiar experience from the start.
            </BoxDescription>
          </Box>
          <Box data-aos="fade-up" data-aos-delay="450" data-aos-offset="300">
            <BoxIcon src={graphqlIcon} />
            <BoxTitle>GraphQL</BoxTitle>
            <BoxDescription>
              GraphQL is the next evolution of API. Powerful instructions and
              intuitive schema discovery enable you to quickly get
              familiar with the API. Popular companies like GitHub,
              Twitter, Facebook all use GraphQL, and we follow that trend.
            </BoxDescription>
            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Webiny GraphQL Schema Explorer
              </ExternalLink>
            </BoxFooter>
            */}
          </Box>
        </BoxContainer>
        <BoxContainer>
          <Box data-aos="fade-up" data-aos-delay="150" data-aos-offset="300">
            <BoxIcon src={uiComponentsIcon} />
            <BoxTitle>UI Components</BoxTitle>
            <BoxDescription>
              Webiny is not just about building websites, but also custom
              plugins and apps. To help with that, we included a number of
              React UI components which will speed up your development and
              maintain consistency across your project.
            </BoxDescription>
            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about UI Components
              </ExternalLink>
            </BoxFooter>
            */}
          </Box>
          <Box data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
            <BoxIcon src={documentedIcon} />
            <BoxTitle>Documented</BoxTitle>
            <BoxDescription>
              StackOverflow developer survey report stated that developers are
              most frustrated with bad, or lack of proper, documentation, and so
              are we! Therefore we invested extra effort into creating ours.
            </BoxDescription>
            {/*
            <BoxFooter>
              <ExternalLink href="#">Webiny Documentation</ExternalLink>
            </BoxFooter>
             */}
          </Box>
          <Box data-aos="fade-up" data-aos-delay="450" data-aos-offset="300">
            <BoxIcon src={openSourceIcon} />
            <BoxTitle>Open Source</BoxTitle>
            <BoxDescription>
              Our believe is that software should be open, because it directly
              benefits the community and the people around it. For this reason
              Webiny is released under the MIT open-source license and will
              always remain FREE.
            </BoxDescription>
            {/*
            <BoxFooter>
              <ExternalLink href="#">Webiny License</ExternalLink>
            </BoxFooter>
            */}
          </Box>
        </BoxContainer>
        <BoxContainer>
          <Box data-aos="fade-up" data-aos-delay="150" data-aos-offset="300">
            <BoxIcon src={visualBuilderIcon} />
            <BoxTitle>Visual Builder</BoxTitle>
            <BoxDescription>
              Unlike most visual website builders that work with static HTML
              blocks, our visual builder actually works with React components.
              If you know how to create a React component, you can
              quickly and easily create new custom plugins and elements for the page builder.
            </BoxDescription>
            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about Visual Builder
              </ExternalLink>
            </BoxFooter>
            */}
          </Box>
          <Box data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
            <BoxIcon src={materialThemeIcon} />
            <BoxTitle>Theme</BoxTitle>
            <BoxDescription>
              Every website requires a theme. Webiny CMS comes with two built-in
              themes. One for the administration, and one for the website. Both can
              be fully customized to fit any visual style required. The website theme
              is also fully mobile responsive.
            </BoxDescription>
            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about the CMS Theme
              </ExternalLink>
            </BoxFooter>
            */}
          </Box>
          <Box data-aos="fade-up" data-aos-delay="450" data-aos-offset="300">
            <BoxIcon src={flowjsIcon} />
            <BoxTitle>FlowJS</BoxTitle>
            <BoxDescription>
              Documentation is important, but so is having a readable and easy
              to understand source code. Reading somebody elses code can be
              “challenging” at times. To make it easier for everyone, our code
              is written using FlowJS static types for extra clarity.
            </BoxDescription>
            {/*
            <BoxFooter>
              <ExternalLink href="#">Webiny License</ExternalLink>
            </BoxFooter>
            */}
          </Box>
        </BoxContainer>
        <BoxContainer>
          <Box data-aos="fade-up" data-aos-delay="150" data-aos-offset="300">
            <BoxIcon src={databaseIcon} />
            <BoxTitle>Document Database</BoxTitle>
            <BoxDescription>
              Webiny uses a document database, as they feature semi-structured documents which are perfect for modern API layers and easy for developers to work with.
              By default you can use either MongoDb or the latest Amazon DocumentDB.
            </BoxDescription>
            {/*
            <BoxFooter>
              <ExternalLink href="#">Entities Documentation</ExternalLink>
            </BoxFooter>
            */}
          </Box>
          <Box data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
            <BoxIcon src={integrationsIcon} />
            <BoxTitle>Integrations</BoxTitle>
            <BoxDescription>
              Webiny is designed as a platform on top of which you can build custom applications, and not just webpages.
              The integrated plugin system allows you to hook in into any part of the existing code and add or change current features and behaviors.
            </BoxDescription>
          </Box>
          {/*
          <Box data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
            <BoxIcon src={i18nIcon} />
            <BoxTitle>I18N</BoxTitle>
            <BoxDescription>
              A translation system is essential for most of web applications.
              Webiny comes with a built in API and a UI to manage the
              translations for your whole website or web application.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">I18n Documentation</ExternalLink>
            </BoxFooter>
          </Box>
          */}
          <Box data-aos="fade-up" data-aos-delay="450" data-aos-offset="300">
            <BoxIcon src={securityIcon} />
            <BoxTitle>Security</BoxTitle>
            <BoxDescription>
              Webiny provides a simple yet effective security layer comprising
              of scopes, roles and groups, which gives you fine-grained control
              over data access. Define your scopes in code, then manage roles via user-friendly UI.
            </BoxDescription>
            {/*
              <BoxFooter>
                <ExternalLink href="#">Security Documentation</ExternalLink>
              </BoxFooter>
              */}
          </Box>
        </BoxContainer>
      </ContentContainer>
    );
  }
}

export default Features;
