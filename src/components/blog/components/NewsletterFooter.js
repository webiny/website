import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';

import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';

import Button from '../../ui/button';
import ContentContainer from '../../ui/content-container';
// assets
import sectionBg from '../assets/bgwaves.svg';

const Section = styled ('section') (
  {
    backgroundImage: 'url(' + sectionBg + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    zIndex: 0,
    backgroundPosition: 'top',
  },
  mq ({
    padding: ['0px 15px 15px', '100px 15px 0'],
  })
);

const containerClass = css (
  {
    maxWidth: '1200px',
  },
  mq ({
    width: ['100%', '100%'],
    display: ['block', 'flex'],
    justifyContent: ['center', 'space-between'],
    padding: ['100px 0px 25px', '100px 0px'],
  })
);

const WebinyAppsWrapper = styled ('div') (
  {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  mq ({
    flexDirection: ['column', 'row'],
  })
);

export const WebinyCTACard = styled ('div') (
  props => ({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.color.white,

    width: '100%',
    maxWidth: 688,
    borderRadius: 8,
    borderTop: `6px solid ${props.color}`,

    '&.card--large': {
      maxWidth: 843,
    },

    '& .app__title': {
      margin: '0px 0px 10px',
      color: theme.color.black,
      fontSize: theme.fontSize.h4,
      fontWeight: theme.fontWeight.semiBold,
      textAlign: 'center',
    },
    '& .app__body': {
      fontSize: theme.fontSize.xl,
      fontWeight: theme.fontWeight.regular,
      textAlign: 'center',
      margin: '0px 0px 24px',
      maxWidth: 370,
    },
    '& .app__button': {
      width: '100%',
      maxWidth: 217,
      marginTop: 25,
      a: {
        backgroundColor: props.color ? props.color : 'inherit',
      },
    },
  }),
  mq ({
    height: ['100%', 286],
    padding: ['10px 12px 24px', '40px 40px 45px'],
    margin: ['0px auto', 0],

    '&.card--large': {
      height: ['100%', 430],
      padding: ['10px 12px 24px', '65px 40px'],
      '& .app__body': {
        maxWidth: ['100%'],
        margin: '0px 0px 50px',
      },
    },
  })
);

const Wrapper = styled ('div') (
  {
    position: 'relative',
    background: theme.color.white,

    boxShadow: '2px 3px 15px rgba(100, 100, 100, 0.239216)',
    borderRadius: 8,
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',

    h4: {
      margin: '0px 0px 14px',
      fontSize: theme.fontSize['2xl'],
    },

    p: {
      fontSize: '1em',
      fontWeight: theme.fontWeight.regular,
      margin: 0,
      textAlign: 'center',
    },

    '& .button': {
      position: 'absolute',
      bottom: -20,
      color: theme.color.white,
      textDecoration: 'none',
      a: {
        color: theme.color.white,
        textDecoration: 'none',
      },
    },
  },
  mq ({
    width: ['100%', '50%'],
    display: ['block', 'flex'],
    padding: ['50px 20px', '48px 50px 60px'],
    textAlign: ['center', 'left'],
    marginBottom: [60, 0],
    '&:first-child': {
      marginRight: [0, 25],
    },
    '&:last-child': {
      marginLeft: [0, 25],
    },
    '& .button': {
      left: ['10%', 'unset'],
      width: ['80%', 'inherit'],
    },
    '& .button>a': {
      left: ['10%', 'unset'],
      width: '100%',
    },
  })
);

class NewsletterFooter extends React.Component {
  render () {
    return (
      <Section>
        <ContentContainer className={containerClass}>
          <WebinyAppsWrapper>
            <Wrapper>
              <h4>About Webiny</h4>
              <p>
                Webiny is an open-source framework that helps developers and organizations to build applications that run on top of the serverless infrastructure.
                {' '}
              </p>
              <Button
                className={'button'}
                type="primary"
                target="_blank"
                link={'https://www.webiny.com/'}
              >
                Lean More
              </Button>
            </Wrapper>
            <Wrapper>
              <h4>Newsletter</h4>
              <p>
                Want to get more great articles like this one in your inbox. We only send one newsletter a week, don't spam, nor share your data with 3rd parties.
              </p>
              <div className={'button'}>
                <Button
                  type="dark"
                  target="_blank"
                  link={
                    'https://landing.mailerlite.com/webforms/landing/g9f1i1'
                  }
                >
                  Subscribe
                </Button>
              </div>
            </Wrapper>
          </WebinyAppsWrapper>
        </ContentContainer>
      </Section>
    );
  }
}

export default NewsletterFooter;
