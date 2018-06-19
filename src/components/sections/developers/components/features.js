import React from 'react'
import styled from 'react-emotion'

import theme from '../../../utils/theme'
import ContentContainer from '../../../ui/content-container'

import serverlessIcon from '../assets/serverless-icon.svg'
import testCoverageIcon from '../assets/test-coverage-icon.svg'
import graphqlIcon from '../assets/graphql-icon.svg'
import uiComponentsIcon from '../assets/ui-components-icon.svg'
import documentedIcon from '../assets/documented-icon.svg'
import openSourceIcon from '../assets/open-source-icon.svg'
import headlessIcon from '../assets/headless-icon.svg'
import materialThemeIcon from '../assets/material-theme-icon.svg'
import flowjsIcon from '../assets/flowjs-icon.svg'
import ormIcon from '../assets/orm-icon.svg'
import i18nIcon from '../assets/i18n-icon.svg'
import securityIcon from '../assets/security-icon.svg'
import externalLinkIcon from '../assets/external-link-symbol.svg'

const BoxContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 30,
})

const Box = styled('div')({
  width: '26%',
  backgroundColor: theme.color.white,
  boxShadow: '0 2px 4px 0 rgba(125,69,69,0.50)',
  borderRadius: 8,
  padding: '100px 30px 30px',
  position: 'relative',
})

const BoxTitle = styled('h5')({
  color: theme.color.black,
  fontSize: theme.fontSize.h5,
  fontWeight: theme.fontWeight.semiBold,
  textTransform: 'uppercase ',
  position: 'absolute',
  top: 35,
  left: 100,
})

const BoxIcon = styled('img')({
  position: 'absolute',
  top: 20,
  left: 30,
  height: 50,
})

const BoxDescription = styled('p')({
  fontSize: theme.fontSize.paragraph,
  lineHeight: '150%',
  color: theme.color.black,
  marginBottom: 20,
})

const BoxFooter = styled('div')({
  position: 'absolute',
  bottom: 20,
})

const Italic = styled('p')({
  fontStyle: 'italic',
  fontSize: 14,
  marginBottom: 0,
})

const SmallText = styled('span')({
  fontSize: 12,
  marginBottom: 0,
})

const ExternalLink = styled('a')({
  background: 'url(' + externalLinkIcon + ') no-repeat 0px 3px',
  color: theme.color.grayText,
  fontSize: theme.fontSize.paragraph,
  paddingLeft: 20,
  textDecoration: 'none',
})

class Features extends React.Component {
  render() {
    return (
      <ContentContainer>
        <BoxContainer>
          <Box>
            <BoxIcon src={serverlessIcon} />
            <BoxTitle>Serverless</BoxTitle>
            <BoxDescription>
              Serverless technology enables you to execute your code inside a
              safe environment that is automatically managed for you. So no more
              worries about patching your systems, more efficient cost, and
              instant scalability.
            </BoxDescription>
            <BoxFooter>
              <Italic>
                "Serverless is the future of development"
                <SmallText>- Werner Vogels, Amazon.com CTO</SmallText>
              </Italic>
            </BoxFooter>
          </Box>
          <Box>
            <BoxIcon src={testCoverageIcon} />
            <BoxTitle>95% TEST COVERAGE</BoxTitle>
            <BoxDescription>
              Having great test coverage is essential for any continuous
              development and deployment environment. Webiny has 95% coverage
              set as the minumum requirement for all the server side components.
            </BoxDescription>
            <BoxFooter>
              <img
                alt="Webiny Build"
                src="https://travis-ci.org/Webiny/webiny-js.svg?branch=master"
              />{' '}
              &nbsp;
              <img
                alt="Webiny Coverage"
                src="https://coveralls.io/repos/github/Webiny/webiny-js/badge.svg?branch=master"
              />
            </BoxFooter>
          </Box>
          <Box>
            <BoxIcon src={graphqlIcon} />
            <BoxTitle>GraphQL</BoxTitle>
            <BoxDescription>
              GraphQL is the next evolution of API. Powerful instructions and
              intuitive schema discovery enable developers to quickly get
              familiar with the API endpoints. Popular companies like GitHub,
              Twitter, Facebook all use GraphQL, and so does Webiny.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">
                Webiny GraphQL Schema Explorer
              </ExternalLink>
            </BoxFooter>
          </Box>
        </BoxContainer>
        <BoxContainer>
          <Box>
            <BoxIcon src={uiComponentsIcon} />
            <BoxTitle>UI Components</BoxTitle>
            <BoxDescription>
              Building web applications can sometimes be a difficult task
              especially if you don’t have all the right components. To help
              with that Webiny comes with over 70 React UI components which
              enable you to build your apps in less time.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about UI Components
              </ExternalLink>
            </BoxFooter>
          </Box>
          <Box>
            <BoxIcon src={documentedIcon} />
            <BoxTitle>Documented</BoxTitle>
            <BoxDescription>
              StackOverflow developer survey report stated that developers are
              most frustrated with bad, or lack of proper, documentation, and so
              are we! Therefore we invested extra effort into creating ours.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">Webiny Documentation</ExternalLink>
            </BoxFooter>
          </Box>
          <Box>
            <BoxIcon src={openSourceIcon} />
            <BoxTitle>Open Source</BoxTitle>
            <BoxDescription>
              Our believe is that software should be open, because it directly
              benefits the community and the people around it. For this reason
              Webiny is released under the MIT open-source license and will
              always remain FREE.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">Webiny License</ExternalLink>
            </BoxFooter>
          </Box>
        </BoxContainer>
        <BoxContainer>
          <Box>
            <BoxIcon src={headlessIcon} />
            <BoxTitle>Headless</BoxTitle>
            <BoxDescription>
              Although Webiny comes with a frontend for your website, that part
              is optional. You can use existing, or build a new, frontend in any
              language or technology. Just use our GraphQL API to retrieve and
              display your content.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about Webiny Headless CMS
              </ExternalLink>
            </BoxFooter>
          </Box>
          <Box>
            <BoxIcon src={materialThemeIcon} />
            <BoxTitle>Material Theme</BoxTitle>
            <BoxDescription>
              Every website requires a theme. At Webiny we provide one based on
              the latest Google Material UI, which can be adapted to fit any
              brand requirements and pretty much any visual style.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about the Material Theme
              </ExternalLink>
            </BoxFooter>
          </Box>
          <Box>
            <BoxIcon src={flowjsIcon} />
            <BoxTitle>FlowJS</BoxTitle>
            <BoxDescription>
              Documentation is important, but so is having a readable and easy
              to understand source code. Reading somebody elses code can be
              “challenging” at times. To make it easier for everyone, our code
              is written using FlowJS static types for extra clarity.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">Webiny License</ExternalLink>
            </BoxFooter>
          </Box>
        </BoxContainer>
        <BoxContainer>
          <Box>
            <BoxIcon src={ormIcon} />
            <BoxTitle>ORM</BoxTitle>
            <BoxDescription>
              Good ORM is important for developer experience. Webiny ORM, also
              called “Entities” is designed for working with GraphQL, as well as
              it’s easy to use and flexible enough to support any use case.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">Entities Documentation</ExternalLink>
            </BoxFooter>
          </Box>
          <Box>
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
          <Box>
            <BoxIcon src={securityIcon} />
            <BoxTitle>Security</BoxTitle>
            <BoxDescription>
              Security is at core of Webiny. Our GraphQL API permissions, as
              best practices, are managed as part of the business logic. Webiny
              also supports multiple middlewares for authentication providesr,
              so you can easily hook a custom provider like SSO.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">Security Documentation</ExternalLink>
            </BoxFooter>
          </Box>
        </BoxContainer>
      </ContentContainer>
    )
  }
}

export default Features
