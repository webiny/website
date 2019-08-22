import React from 'react';
import styled from 'react-emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../ui/content-container';
import Link from 'gatsby-link';

import imgArchitecture from './assets/webiny-server-side.svg';
import imgStack from './assets/platform-stack.svg';
import imgReadyMadeApps from './assets/ready-made-apps.svg';
import imgBuildWith from './assets/build-stuff.svg';

const wrapperClass = css (
  {
    //background: 'url(' + background + ') no-repeat left top',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
  },
  mq ({
    marginTop: [0, -80],
    paddingTop: [0, 150],
  })
);

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  mq ({
    '&.img-left': {
      flexDirection: ['column', 'row'],
    },
    '&.img-right': {
      flexDirection: ['column-reverse', 'row'],
    },
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', '85px 0'],
  })
);

const Cell = styled ('div') (
  {
    boxSizing: 'border-box',
    flexBasis: '100%',
    h3: {
      fontSize: '42px',
      color: theme.color.black,
      marginTop: 0,
      fontWeight: theme.fontWeight.bold,
      display: 'flex',
      alignItems: 'center',
      img: {
        marginRight: 0,
      },
    },
    p: {
      fontSize: '20px',
      color: theme.color.black,
      lineHeight: '160%',
    },
    a: {
      color: theme.color.primaryDark,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  mq ({
    marginRight: [0, 15],
    textAlign: ['center', 'left'],
    '&:last-child': {
      marginRight: ['0 !important', '0 !important'],
      marginLeft: ['0 !important', '15px !important'],
    },
    img: {
      //border: "1px solid #E6E6E6",
      //boxShadow: "0 4px 8px 0 rgba(209,209,209,0.50)",
      //borderRadius: 5,
      maxWidth: ['100%', '750px'],
      width: ['100%', '100%'],
    },
    h3: {
      justifyContent: ['center', 'flex-start'],
    },
  })
);

class About extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <ContentContainer>
          <Grid className="img-left">
            <Cell>
              <img src={imgBuildWith} />
            </Cell>
            <Cell>
              <h3>Build more than websites</h3>
              <p>
                Webiny makes it easy to build
                {' '}
                <Link to="/use-case/serverless-websites">websites</Link>
                ,
                {' '}
                <Link to="/use-case/serverless-web-applications">
                  web applications
                </Link>
                ,
                {' '}
                <Link to="/use-case/serverless-graphql-api">APIs</Link>
                {' '}
                and{' '}
                <Link to="/use-case/microservices">microservices</Link>
                {' '}
                inside the serverless environment.
              </p>
            </Cell>
          </Grid>
          <Grid className="img-right">
            <Cell>
              <h3>Everything you need is included</h3>
              <p>
                This means seamless development experience, faster project
                turnaround time, less bugs and greater quality output.
              </p>
            </Cell>
            <Cell>
              <img src={imgStack} />
            </Cell>
          </Grid>
          <Grid className="img-left">
            <Cell>
              <img src={imgArchitecture} />
            </Cell>
            <Cell>
              <h3>Microservice architecture</h3>
              <p>
                It’s the latest and greatest that the technology provides. Scalable
                serverless functions that scale together with your demand. There is
                no load it can’t handle.
              </p>
            </Cell>
          </Grid>
          <Grid className="img-right">
            <Cell>
              <h3>Ready-made apps to speed up your development</h3>
              <p>
                Webiny comes with several applications that are specifically built for the serverless environment.
                {' '}
                Learn more about the
                {' '}
                <Link to="/serverless-app/headless-cms">
                  Headless CMS module
                </Link>
                ,
                {' '}
                <Link to="/serverless-app/page-builder">
                  Visual Page Builder
                </Link>
                ,
                {' '}
                <Link to="/serverless-app/form-builder">Form builder</Link>
                {' '}
                and
                {' '}
                <Link to="/serverless-app/file-manager">File Manager</Link>
                .
              </p>
            </Cell>
            <Cell>
              <img src={imgReadyMadeApps} />
            </Cell>
          </Grid>
        </ContentContainer>
      </section>
    );
  }
}

export default About;
