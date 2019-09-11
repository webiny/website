import React from 'react';
import styled from 'react-emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../ui/content-container';
import {Grid, Cell} from '../ui/layout/layout';

import heroBg from './assets/hero-bg.svg';
import Sven from './assets/sven-webiny-profile.png';
import Pavel from './assets/pavel-webiny-profile.png';
import Adrian from './assets/adrian-webiny-profile.png';
import E1 from './assets/e1-logo.png';

const Hero = styled ('section') (
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat center top',
    color: '#fff',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  mq ({
    padding: ['100px 20px 25px', '150px 0 25px'],
    //height: ['auto', 'calc(100vh - 150px)'],
    minHeight: ['auto', '360px'],
    //maxHeight: ['auto'],
    marginBottom: [50, 0],
    backgroundSize: ['cover'],
    backgroundPosition: ['top', 'top', 'bottom'],
  })
);

const Title = styled ('h1') ({
  fontSize: theme.fontSize.h1,
  fontWeight: theme.fontWeight.semiBold,
  marginBottom: 25,
  maxWidth: 600,
  margin: '0 auto',
});

const styleSet = css (
  {
    h2: {
      paddingTop: 0,
      marginTop: 0,
      fontSize: 48,
    },
    p: {
      fontSize: 24,
    },
    '.grid': {
      alignItems: 'flex-start',
      '&.investors': {
        padding: '25px 0',
        h2: {
          textAlign: 'center',
          marginBottom: 0,
        },
        p: {
          textAlign: 'center',
        },
        '.logos': {
          textAlign: 'center',
          img: {
            height: 80,
            width: 'auto',
          },
        },
      },
    },
  },
  mq ({
    '.grid': {
      flexDirection: ['column', 'row'],
      '>div:first-child': {
        marginRight: [0, 100],
      },
      h2: {
        textAlign: ['center', 'left'],
      },
    },
  })
);

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.semiBold,
});

const Profile = styled ('div') (
  {
    display: 'flex',
    marginBottom: 50,
    img: {
      height: '100%',
      width: '150px !important',
      boxShadow: '0 10px 5px rgba(91,107,174,.05)',
      borderRadius: '50%',
    },
    h3: {
      marginBottom: 0,
      fontSize: 24,
      fontWeight: theme.fontWeight.semiBold,
    },
    a: {
      color: theme.color.grayText,
      textDecoration: 'underline',
      '&:hover': {
        color: theme.color.primaryDark,
      },
    },
  },
  mq ({
    flexDirection: ['column', 'row'],
    img: {
      margin: ['0 auto 15px auto', 0],
    },
    '>div': {
      marginLeft: [0, 50],
    },
  })
);

const ProfileTitle = styled ('div') ({
  marginBottom: 15,
});
const ProfileDesc = styled ('div') ({
  fontSize: 14,
  color: theme.color.grayText,
  marginBottom: 15,
});
const ProfileLinks = styled ('div') (
  {
    //display: 'flex',
    //justifyContent: 'space-between',
  }
);

const Divider = styled ('div') ({
  width: '100%',
  height: 20,
  backgroundColor: '#F4F6F8',
  borderTop: '1px solid #E5E5E5',
  borderBottom: '1px solid #E5E5E5',
});

const ProfileCard = props => (
  <Profile>
    <img src={props.img} alt={props.name} />
    <div>
      <h3>{props.name}</h3>
      <ProfileTitle>{props.title}</ProfileTitle>
      <ProfileDesc>{props.desc}</ProfileDesc>
      <ProfileLinks>
        <a href={'https://www.linkedin.com/in/' + props.linkedin}>LinkedIn</a>
        ,
        {' '}
        {' '}
        <a href={'https://twitter.com/' + props.twitter}>Twitter</a>, {' '}
        <a href={'https://github.com/' + props.github}>GitHub</a>
      </ProfileLinks>
    </div>
  </Profile>
);

export default ({children, ...props}) => (
  <section>
    <Hero {...props}>
      <ContentContainer>
        <Title>
          Webiny Empowers Developers to Build Serverless Applications
        </Title>

      </ContentContainer>
    </Hero>
    <ContentContainer className={styleSet}>
      <Grid className={'grid'}>
        <Cell>
          <h2>Hello and welcome</h2>
          <p>
            We at Webiny have a mission to empower developers with tools, processes and ready-made apps so that they can create serverless applications with ease.
          </p>
          <p><Bold>Our story</Bold></p>

          <p>
            Many moons ago, Webiny was just another digital agency building websites, fighting the technology and fixing bugs, many bugs.
          </p>

          <p>
            Eventually, we saw that the way we build and manage web applications is changing, that this “serverless” trend is actually here to stay, and not just that, we believe that in a few years time, serverless will be the way how most of the web is being built.
          </p>

          <p>
            With this belief, we decided to close down our service business and focus 100% of our effort towards building a CMS specifically for serverless web development, and thus Webiny CMS was born. 100% free and open source.
          </p>
        </Cell>
        <Cell>
          <h2>Team</h2>
          <ProfileCard
            img={Sven}
            name={'Sven Al Hamad'}
            title={'CEO'}
            desc={
              'Mainly responsible for the vision and direction of the company. Also in charge of UX and overall visuals.'
            }
            twitter={'SvenAlHamad'}
            github={'SvenAlHamad'}
            linkedin={'svenalhamad'}
          />
          <ProfileCard
            img={Pavel}
            name={'Pavel Denisjuk'}
            title={'CTO'}
            desc={
              'In charge of the technology focus and architecture. Author of main core components and apps like Page Builder and Headless CMS.'
            }
            twitter={'paveldenisjuk'}
            github={'Pavel910'}
            linkedin={'paveldenisjuk'}
          />
          <ProfileCard
            img={Adrian}
            name={'Adrian Smijulj'}
            title={'Core developer'}
            desc={
              "CTO's right hand. Created apps like Form Builder and File Manager. Authored several core components."
            }
            twitter={'doitadrian'}
            github={'doitadrian'}
            linkedin={'adriansmijulj'}
          />
        </Cell>
      </Grid>
    </ContentContainer>
    <Divider />
    <ContentContainer className={styleSet}>
      <Grid className={'grid investors'}>
        <Cell>
          <h2>Our Investors</h2>
          <p>We are proud to be backed by visionary investors</p>
          <div className={'logos'}>
            <img src={E1} alt="Episode 1" />
          </div>
        </Cell>
      </Grid>
    </ContentContainer>
  </section>
);
