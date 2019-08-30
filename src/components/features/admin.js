import {css} from 'emotion';
import React from 'react';
import styled from 'react-emotion';
import mq from '../utils/breakpoints';
import theme from '../utils/theme';
import {Grid, Cell} from '../ui/layout/layout';
import ContentContainer from '../ui/content-container';
import VideoBox from '../ui/layout/video-box';

import background from './assets/gray-bg-with-bg.svg';
import components from './assets/webiny-components.svg';

import ServerlessBootstrapVideo from './assets/01-serverless-bootstrap.mp4';
import ACLVideo from './assets/02-acl.mp4';
import UserProfileVideo from './assets/03-user-profile.mp4';
import SearchBarVideo from './assets/04-search-bar.mp4';
import GraphQLPlaygroundVideo from './assets/05-graphql-playground.mp4';
import ReactComponentsVideo from './assets/06-react-components.mp4';
import AdaptableThemeVideo from './assets/07-adaptable-theme.mp4';
import LoginFormVideo from './assets/08-login-form.mp4';
import DarkModeVideo from './assets/09-dark-mode.mp4';
import MenuVideo from './assets/10-menu.mp4';

const SubTitle = styled ('h2') (
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 50,
    margin: '25px auto 40px auto',
  },
  mq ({
    width: ['100%', 650],
  })
);

const Description = styled ('p') (
  {
    fontSize: 18,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 0,
    margin: '0 auto',
  },
  mq ({
    width: ['100%', 650],
  })
);

const container = css ({
  background: 'url(' + background + ') no-repeat left top',
  backgroundSize: 'contain',
  textAlign: 'center',
  margin: '-250px auto 0 auto',
  padding: '150px 0 50px 0',
  backgroundColor: '#F7F7F7',
  backgroundPosition: '0 -5px',
});

class YTVideo extends React.Component {
  render () {
    return (
      <section className={container}>
        <ContentContainer>
          {/*
          <SubTitle>Webiny Admin</SubTitle>
          <Description>
            Admin interface with user management, security and much more. All you need to build your next serverless application.
            {' '}
            All Webiny serverless apps are built on top of this platform.
          </Description>
          <img src={components} style={{maxWidth: '850px'}} />
          */}
          <Grid left>
            <Cell>
              <VideoBox file={ServerlessBootstrapVideo} />
            </Cell>
            <Cell title="Serverless boilerplate">
              <p>
                It's the perfect way to start building serverless applications.
                You don't need to lose time on configuring the deployment scripts, webpack, and babel plugins, as well as figuring out how to structure your project.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="Users, roles and groups">
              <p>
                Security is a crucial layer in any application. Webiny includes a full-featured security module that's also connected to the GraphQL API layer. The built-in UI, to manage users, roles and groups, is intuitive and easy to use.
              </p>
            </Cell>
            <Cell>
              <VideoBox file={ACLVideo} />
            </Cell>
          </Grid>
          <Grid left>
            <Cell>
              <VideoBox file={UserProfileVideo} />
            </Cell>
            <Cell title="User profile module">
              <p>
                Each user that has access to your site, will also have access to a module that allows them to control their profile info, like name, avatar and similar. They can also update their password.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="Search bar that is always there">
              <p>
                The admin theme is inspired and influenced by Google Material Design, as well as several Google products. One of the more noticeable UI components is the search bar. It's a single bar that any module can register its search function, as well as details for the advance search options.
              </p>
            </Cell>
            <Cell>
              <VideoBox file={SearchBarVideo} />
            </Cell>
          </Grid>
          <Grid left>
            <Cell>
              <VideoBox file={GraphQLPlaygroundVideo} />
            </Cell>
            <Cell title="GraphQL playground">
              <p>
                As a developer, you require a great understanding of your API as a whole. Webiny comes with a built-in GraphQL playground, which you control who can access and on which environment.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="React components">
              <p>
                We have created over 30 React UI components while creating Webiny. We open-sourced all of them so it's easy for others to include them into their Webiny apps. They are available on our
                {' '}
                <a href="https://storybook.webiny.com/" target="_blank">
                  storybook
                </a>
                {' '}
                page and are part of the Webiny Admin package.
              </p>
            </Cell>
            <Cell>
              <VideoBox file={ReactComponentsVideo} />
            </Cell>
          </Grid>
          <Grid left>
            <Cell>
              <VideoBox file={AdaptableThemeVideo} />
            </Cell>
            <Cell title="Adaptable theme">
              <p>
                The built-in admin theme is fully customizable through CSS and React components.
                The admin theme is built as a set of plugins that can be extended and altered.
                {' '}
                Even the simplest parts, like the Webiny logo, are made as a plugin that can be changed, giving you full control over the look and feel.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="Extensible Login component">
              <p>
                The given Login component by default uses the users in your database to authenticate them, but you can extend it by adding, for example, a  different authentication provider, such as AWS Cognito.
              </p>
            </Cell>
            <Cell>
              <VideoBox file={LoginFormVideo} />
            </Cell>
          </Grid>
          <Grid left>
            <Cell>
              <VideoBox file={DarkModeVideo} />
            </Cell>
            <Cell title="Dark mode">
              <p>
                They say that there are no two eyes alike. Some prefer white, some black. Webiny features a light and a dark mode, make your pick.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="Menu component">
              <p>
                Each app can register its menu entries. The current menu component is designed to handle and present easy to use navigation for both large and small applications.
              </p>
            </Cell>
            <Cell>
              <VideoBox file={MenuVideo} />
            </Cell>
          </Grid>

        </ContentContainer>

      </section>
    );
  }
}

export default YTVideo;
