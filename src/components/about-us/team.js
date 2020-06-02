import React from 'react';
import styled from 'react-emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../ui/content-container';
import {Grid, Cell} from '../ui/layout/layout';

import Sven from './assets/sven-webiny-profile.png';
import Pavel from './assets/pavel-webiny-profile.png';
import Adrian from './assets/adrian-webiny-profile.png';
import Andrei from './assets/andrei-webiny-profile.png';
import Emil from './assets/emil.png';
import Ashu from './assets/ashutosh.png';
import Albiona from './assets/albiona.png';
import Mislav from './assets/mislav.png';

const styleSet = css (
  {
    h2: {
      paddingTop: 0,
      fontSize: 48,
      margin: '75px auto 85px auto',
      width: '100%',
      textAlign: 'center',
    },
    p: {
      fontSize: 24,
    },
    '.grid': {
      alignItems: 'flex-start',
      '&.team': {
        paddingTop: 10,
        paddingBottom: 10,
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
    },
  })
);

const Profile = styled ('div') (
  {
    display: 'flex',
    marginBottom: 50,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
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
      justifyContent: 'center',
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
    img: {
      margin: ['0 auto 15px auto', 25],
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

const ProfileCard = props => (
  <Profile>
    <img src={props.img} alt={props.name} />
    <div>
      <h3>{props.name}</h3>
      <ProfileTitle>{props.title}</ProfileTitle>
      {/*<ProfileDesc>{props.desc}</ProfileDesc>*/}
      <ProfileLinks>
        {props.linkedin &&
          <a href={'https://www.linkedin.com/in/' + props.linkedin}>
            LinkedIn
          </a>}
        {(props.twitter || props.github) && props.linkedin && ','}
        {' '}
        {props.twitter &&
          <a href={'https://twitter.com/' + props.twitter}>Twitter, </a>}
        {' '}
        {props.github &&
          <a href={'https://github.com/' + props.github}>GitHub</a>}
      </ProfileLinks>
    </div>
  </Profile>
);

export default ({children, ...props}) => (
  <section>
    <ContentContainer className={styleSet}>
      <h2>Team</h2>
      <Grid className="grid team">
        <Cell>
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
        </Cell>
        <Cell>
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
        </Cell>
        <Cell>
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
        </Cell>
        <Cell>
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
      <Grid className="grid team">
        <Cell>
          <ProfileCard
            img={Emil}
            name={'🇨🇦 Emil Kais'}
            title={'Full-stack developer'}
            github={'EmilK15'}
          />
        </Cell>
        <Cell>
          <ProfileCard
            img={Ashu}
            name={'🇮🇳 Ashutosh'}
            title={'Full-stack developer'}
            github={'Ashu96'}
          />
        </Cell>
        <Cell>
          <ProfileCard
            img={Albiona}
            name={'🇽🇰 Albiona Hoti'}
            title={'Developer relations'}
            desc={
              "CTO's right hand. Created apps like Form Builder and File Manager. Authored several core components."
            }
            twitter={'albionaitoh'}
            github={'albionahoti'}
          />
        </Cell>
        <Cell>
          <ProfileCard
            img={Mislav}
            name={'🇬🇧 Mislav Streicher'}
            title={'Business development'}
            desc={
              'Working on webiny scaffolding, documentation and improving the DX.'
            }
            linkedin={'mislavstreicher'}
          />
        </Cell>
      </Grid>
    </ContentContainer>
  </section>
);
