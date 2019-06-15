import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import {css} from 'emotion';
import mq from '../../utils/breakpoints';
import Button from '../../ui/button';
import ContentContainer from '../../ui/content-container';

import heroBg from './assets/hero-bg.svg';
import heroImg from './assets/hero-img.svg';
import bullet from './assets/bullet.svg';

const Hero = styled ('section') (
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat center top',
    backgroundColor: theme.color.white,
    color: '#fff',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  mq ({
    padding: ['100px 20px 25px', '150px 0 25px'],
    height: ['auto', 'calc(100vh - 150px)'],
    minHeight: ['auto', 725],
    maxHeight: ['auto', 768],
    marginBottom: [25, 75],
    backgroundSize: ['cover'],
    backgroundPosition: ['top', 'top', 'bottom'],
  })
);

const Title = styled ('h1') (
  {
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 40,
    marginTop: 0,
    padding: 0,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.light,
    lineHeight: '25px',
    marginBottom: 40,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const UpperText = styled ('h3') (
  {
    margin: 0,
    padding: 0,
    fontSize: theme.fontSize.h5,
    color: theme.color.darkGray,
    textTransform: 'uppercase',
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const LeftSide = styled ('div') (
  {},
  mq ({
    textAlign: ['center', 'left'],
    width: ['100%', 400],
  })
);

const RightSide = styled ('div') (
  {},
  mq ({
    textAlign: ['center', 'right'],
    width: ['100%', 600],
  })
);

const container = css (
  {},
  mq ({
    display: ['block', 'flex'],
  })
);

const Image = styled ('img') (
  {
    transform: 'scaleX(-1)',
  },
  mq ({
    width: [250, 'auto'],
    paddingRight: [0, 200],
    height: ['auto', 400],
  })
);

const List = styled ('ul') ({
  boxSizing: 'border-box',
  padding: 0,
  width: '100%',
  marginBottom: 25,
});

const ListItem = styled ('li') ({
  listStyle: 'none',
  textAlign: 'left',
  marginBottom: 15,
  background: 'url(' + bullet + ') no-repeat left 2px',
  paddingLeft: 40,
  '&:last-child': {
    marginBottom: 0,
  },
  a: {
    color: theme.color.secondaryDark,
  },
});

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.bold,
});

const Arrow = styled ('img') ({
  height: 10,
  marginLeft: 5,
});

export default ({children, ...props}) => (
  <Hero {...props}>
    <ContentContainer className={container}>
      <LeftSide>
        <UpperText>Why Webiny?</UpperText>
        <Title>One system, many possibilities</Title>
        <SubText>
          Webiny brings many benefits to your organization and your team.
        </SubText>
        <List>
          <ListItem>
            <Bold>Save time</Bold> -
            Because with Webiny you get the tools,
            components, apps and a managed environment.
            All those things are off your plate now.
          </ListItem>
          <ListItem>
            <Bold>Grow</Bold> - Our managed serverless cloud empowers you
            to scale to any level, and handle the biggest flash crowds.
          </ListItem>
          <ListItem>
            <Bold>Unify</Bold>
            {' '}
            - Manage multiple websites and distribute content to different devices, from a single place.
          </ListItem>
        </List>
      </LeftSide>
      <RightSide>
        <Image src={heroImg} alt="Why Webiny" />
      </RightSide>
    </ContentContainer>
  </Hero>
);
