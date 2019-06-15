import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../../ui/content-container';

import imgCutDevTime from './assets/cut-dev-time.svg';
import imgHostYourCode from './assets/host-your-code.svg';
import imgHappyMeal from './assets/happy-meal.svg';
import imgModernStack from './assets/modern-stack.svg';
import imgTechPartner from './assets/tech-partner.svg';
import imgMultiSite from './assets/multi-site.svg';

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginBottom: 50,
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
    '&.first': {
      margin: [0, '100px 0px'],
    },
  })
);

const Cell = styled ('div') (
  {
    boxSizing: 'border-box',
    flexBasis: '100%',
    textAlign: 'center',
    h3: {
      fontSize: theme.fontSize.h4,
      color: theme.color.black,
      marginTop: 15,
      fontWeight: theme.fontWeight.bold,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      img: {
        marginRight: 0,
      },
    },
    p: {
      fontSize: theme.fontSize.paragraph,
      color: theme.color.black,
      lineHeight: '160%',
    },
    '&.headingCell': {
      h3: {
        fontSize: theme.fontSize.h2,
        fontWeight: theme.fontWeight.semiBold,
      },
      p: {
        fontSize: 18,
      },
    },
    '&:nth-child(2)': {
      marginRight: '50px !important',
      marginLeft: '50px !important',
    },
  },
  mq ({
    marginRight: [0, 25],
    '&:last-child': {
      marginRight: ['0 !important', '0 !important'],
      marginLeft: ['0 !important', '50px !important'],
    },
    '.image': {
      border: '1px solid #E6E6E6',
      boxShadow: '0 4px 8px 0 rgba(209,209,209,0.50)',
      borderRadius: 5,
      width: ['100%', '630px'],
    },
    '.image-small': {
      height: [150, 150],
    },
  })
);

class Components extends React.Component {
  render () {
    return (
      <section {...this.props}>
        <ContentContainer>
          <Grid>
            <Cell>
              <img className={'image-small'} src={imgCutDevTime} />
              <h3>Cut Development Time</h3>
              <p>
                Get projects into customers hands much faster. Webiny provides you with all the components you'll need.
              </p>
            </Cell>
            <Cell>
              <img className={'image-small'} src={imgHostYourCode} />
              <h3>Host Your Code</h3>
              <p>
                Upload your own functions that will run inside the managed serverless cloud. You're able to fully adapt Webiny so it fits your needs.
                {' '}
              </p>
            </Cell>
            <Cell>
              <img className={'image-small'} src={imgHappyMeal} />
              <h3>Have a Happy Meal</h3>
              <p>
                CDN, managed serverless hosting, a CMS and devops tools to automatically create and deploy projects. It's a happy meal for any developer.
              </p>
            </Cell>

          </Grid>
          <Grid>
            <Cell>
              <img className={'image-small'} src={imgModernStack} />
              <h3>Use a Modern Development Stack</h3>
              <p>
                Modern stack means efficient development, a happier team, a company more developers will want to work for, and finally a satisfied client.
              </p>
            </Cell>
            <Cell>
              <img className={'image-small'} src={imgTechPartner} />
              <h3>We’re a Technology Partner</h3>
              <p>
                As an agency or a company, you can become a Webiny Partner and have access to the people that created the platform and much more.
              </p>
            </Cell>
            <Cell>
              <img className={'image-small'} src={imgMultiSite} />
              <h3>Multi Website</h3>
              <p>
                No need to switch between CMSes, Webiny SiteManager has all your sites in a single place. One system, unlimited websites.
              </p>
            </Cell>

          </Grid>
        </ContentContainer>
      </section>
    );
  }
}

export default Components;
