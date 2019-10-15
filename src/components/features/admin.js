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
                It's the perfect way to start building serverless applications. No need to waste time on configuring deployment scripts, webpack, and babel plugins or figuring out how to structure a project. With Webiny, just jump right in.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="Users, groups and roles">
              <p>
                Security is a crucial layer in any application. Webiny includes a full-featured security module that's also connected to the GraphQL API layer. The built-in UI, to manage users, groups, and roles, is intuitive and easy to use.
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
                Each user that has access to your site, will also have access to a module that allows them to control their profile. They can change their name, avatar, and similar info. They can also update their password.
              </p>
              <p>
                All the UI and processes are there for you to use and integrate into your own apps. The data is automatically synced with an authentication provider, like AWS Cognito.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="Search bar that's always there">
              <p>
                The admin theme is inspired and influenced by Google Material Design. One of the more noticeable UI components is the search bar. It's a single bar that any module can register its own search function. There is also the option to register advance search filters to enable more powerful filtering.
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
                As a developer, you are required to have a great understanding of your API as a whole. Webiny comes with a built-in GraphQL playground to view the full schema and the docs. You can also control who has access to it and inside which environment.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="React components">
              <p>
                We have created over 30 React UI components while building Webiny. We open-sourced all of them so it's easy for others to include them into their own Webiny apps. They are available on our
                {' '}
                <a href="https://storybook.webiny.com/" target="_blank">
                  storybook
                </a>
                {' '}
                page.
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
            <Cell title="A theme that adapts">
              <p>
                The built-in admin theme is customizable through CSS and React components. The admin theme is built as a set of plugins that can you can extend and altered. Even the simplest parts, like the Webiny logo, are made as plugins that you can change. This gives you full control over the look and feel.
              </p>
            </Cell>
          </Grid>
          <Grid right>
            <Cell title="Extensible Login component">
              <p>
                Webiny uses AWS Cognito to handle user authentication and creation of new user accounts. The integration is seamless and done behind the scene. By using AWS Cognito Webiny brings bullet-proof security to all your apps.
              </p>
              <p>
                In case you want to use a different identity provider, like Auth0 or any other, you can do that by creating your own plugin. More details are available on our docs portal.
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
