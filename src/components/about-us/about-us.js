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
import Andrei from './assets/andrei-webiny-profile.png';
import E1 from './assets/e1-logo.png';
import MkLogo from './assets/mk-logo.svg';
import MkFounders from './assets/mk-founders.png';
import MkProduct from './assets/mk-product.png';

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
      '&.investors, &.media-kit, &.traits': {
        padding: '25px 0',
        margin: '50px 0',
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
      '&.media-kit': {
        justifyContent: 'space-between',
        alignItems: 'center',
        div: {
          '&:last-child': {
            margin: '0 !important',
          },
        },
        img: {
          width: 350,
          outline: '0',
          boxShadow: '0 1px 5px 0 rgba(0,0,0,0.15)',
          borderRadius: 5,
          display: 'block',
        },
      },
    },
  },
  mq ({
    '.title': {
      marginTop: [45, 0],
      marginBottom: [0, 0],
      padding: [0, '85px 0 0 0'],
      h2: {
        textAlign: 'center',
      },
    },
    '.grid': {
      flexDirection: ['column', 'row'],
      '&.about div:first-child': {
        marginRight: [0, 100],
      },
      h2: {
        textAlign: ['center', 'left'],
      },
      '&.media-kit': {
        margin: [0, '50px 0'],
        div: {
          flexBasis: ['100%', 350],
          marginBottom: [25, 0],
        },
        img: {
          margin: ['0 auto', 0],
        },
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

const TraitBullet = styled ('div') ({
  display: 'flex',
  alignItems: 'center',
  height: 150,
  span: {
    color: theme.color.primaryDark,
    backgroundColor: '#FEC4B2',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    fontSize: 32,
    fontWeight: theme.fontWeight.bold,
  },
  p: {
    fontSize: 20,
    paddingLeft: 20,
    textAlign: 'left !important',
    width: '100%',
    margin: '0',
  },
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
        {props.twitter &&
          <a href={'https://twitter.com/' + props.twitter}>Twitter, </a>}
        <a href={'https://github.com/' + props.github}>GitHub</a>
      </ProfileLinks>
    </div>
  </Profile>
);

const Trait = props => (
  <TraitBullet>
    <span>{props.num}</span>
    <p>{props.children}</p>
  </TraitBullet>
);

export default ({children, ...props}) => (
  <section>
    <Hero {...props}>
      <ContentContainer>
        <Title>
          Creating the CMS for the<br />Serverless Era
        </Title>

      </ContentContainer>
    </Hero>
    <ContentContainer className={styleSet}>
      <Grid className={'grid about'}>
        <Cell>
          <h2>Hello and welcome</h2>
          <p>
            At Webiny we have a mission to empower developers. We do that by providing tools, processes and ready-made apps. As a result, developers can create serverless applications with ease.
          </p>
          <p><Bold>Our story</Bold></p>

          <p>
            Many moons ago, Webiny was just another digital agency. We were building websites, fighting the technology and fixing bugs, many bugs.
          </p>

          <p>
            Eventually, we saw that the way we build and manage web applications is changing. We saw that this “serverless” trend is actually here to stay. Even more than that, we now believe that in a few years time, serverless will be the way how most of the web is created.
          </p>

          <p>
            With this belief, we decided to close down our service business and focus on a mission to built a serverless CMS. One this will become a foundation for all serverless applications. One that developers will see as a core part of their serverless stack.
          </p>
          <p>
            We want to do all that, but with a community in mind, one that will help us achieve this goal.  As a result, we released Webiny under the MIT open-source licence so everyone can use it completely free of charge.
          </p>
        </Cell>
        <Cell>
          <h2>Team</h2>
          <ProfileCard
            img={Sven}
            name={'🇬🇧 Sven Al Hamad'}
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
            name={'🇭🇷 Pavel Denisjuk'}
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
            name={'🇭🇷 Adrian Smijulj'}
            title={'Core developer'}
            desc={
              "CTO's right hand. Created apps like Form Builder and File Manager. Authored several core components."
            }
            twitter={'doitadrian'}
            github={'doitadrian'}
            linkedin={'adriansmijulj'}
          />
          <ProfileCard
            img={Andrei}
            name={'🇷🇴 Andrei Puiu'}
            title={'Full-stack developer'}
            desc={
              'Working on webiny scaffolding, documentation and improving the DX.'
            }
            github={'Fsalker'}
            linkedin={'antonio-andrei-p-a51b42116'}
          />
        </Cell>
      </Grid>
    </ContentContainer>

    <Divider />
    <ContentContainer className={styleSet}>
      <Grid className={'grid traits'}>
        <Cell>
          <h2>Traits We Value</h2>
          <Grid className={'grid'}>
            <Cell>
              <Trait num={1}>
                We are curious and will never stop learning.
              </Trait>
              <Trait num={3}>
                We respect and treat others the same way we want to be treated.
              </Trait>
              <Trait num={5}>
                We are motivated by the problem we are solving and not just by money.
              </Trait>
              <Trait num={7}>
                We value flexibility and freedom but also take on the responsibility and accountability for our work.
              </Trait>
              <Trait num={9}>
                We truly believe that our work has impact and that Webiny will become the future of web development.
              </Trait>
            </Cell>
            <Cell>
              <Trait num={2}>
                We always find time to help our fellow peers.
              </Trait>
              <Trait num={4}>
                Each one of us has a voice and is  not afraid to speak their mind.
              </Trait>

              <Trait num={6}>
                We strive to communicate as much and as clearly as possible as this is the lifestream of successful remote working.
              </Trait>

              <Trait num={8}>
                We deeply care about the quality of our work.
              </Trait>

              <Trait num={10}>
                More than anything I'm happy to help out a community member and make their day.
              </Trait>
            </Cell>
          </Grid>

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

    <Divider />
    <ContentContainer className={styleSet}>
      <Grid className={'title'}>
        <Cell>
          <h2>Media Kit</h2>
        </Cell>
      </Grid>
      <Grid className={'grid media-kit'}>
        <Cell>
          <a
            href="https://drive.google.com/drive/u/2/folders/19BiuDSOrJ_H0HshmtQhsDGeslB-lVpom"
            target="_blank"
          >
            <img src={MkLogo} alt="Webiny Logo" />
            Download Webiny Logo
          </a>
        </Cell>
        <Cell>
          <a
            href="https://drive.google.com/drive/u/2/folders/17ujXOoBMFwpyV4HtPUebeWs9_dZYF3u7"
            target="_blank"
          >
            <img src={MkFounders} alt="Webiny Founders" />
            Download Founders Photo
          </a>
        </Cell>
        <Cell>
          <a
            href="https://drive.google.com/drive/u/2/folders/1CThk-B2_hl2Tg_5vLTPHSSv6zyYLsnTz"
            target="_blank"
          >
            <img src={MkProduct} alt="Webiny Product Screenshot" />
            Download Product Screenshots
          </a>
        </Cell>
      </Grid>
    </ContentContainer>
  </section>
);
