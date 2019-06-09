import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import Wave from '../../ui/waves';
import Button from '../../ui/button';

import bullet from './assets/bullet.svg';
import arrow from './assets/gs-btn-arrow.svg';

const List = styled ('ul') ({
  boxSizing: 'border-box',
  padding: 0,
  width: '100%',
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
    color: theme.color.primaryDark,
  },
});

const Title = styled ('h3') (
  {
    marginTop: 0,
    padding: 0,
    fontSize: 24,
    fontWeight: theme.fontWeight.semiBold,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    lineHeight: '150%',
    maxWidth: 750,
  },
  mq ({
    margin: ['0 0 25px 0', '0 0 25px 0'],
    textAlign: ['center', 'left'],
  })
);

const wave = css (
  {},
  mq ({
    display: ['none', 'block'],
  })
);

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.bold,
});

const Buttons = styled ('div') (
  {
    display: 'flex',
    marginBottom: 25,
  },
  mq ({
    justifyContent: ['space-around', 'flex-start'],
  })
);

const ctaButton = css (
  {
    position: 'relative',
    marginTop: 35,
  },
  mq ({
    marginRight: [0, '25px !important'],
    width: ['120px !important', 'auto !important'],
  })
);

const Arrow = styled ('img') ({
  height: 10,
  marginLeft: 5,
});

export default ({children, ...props}) => (
  <React.Fragment>
    <Title>Frontend, backend, full stack, ninja</Title>
    <SubText>
      No matter your role, we will equip you with all the tools, knowledge and support you
      need to be successful in your next project.
    </SubText>
    <List>
      <ListItem>
        <Bold>Documented</Bold>
        {' '}
        - Our
        {' '}
        <a href="https://docs.webiny.com/">docs</a>
        {' '}
        portal has
        tutorials for beginners and more advance coders.
      </ListItem>
      <ListItem>
        <Bold>Customizable</Bold>
        {' '}
        - Webiny is meant to be built upon, adapt everything from
        the UI to the API.
      </ListItem>
      <ListItem>
        <Bold>Open source</Bold>
        {' '}
        - There are not magic black boxes here. Our code is
        available on <a href="https://github.com/webiny/webiny-js">GitHub</a>
        .
      </ListItem>
      <ListItem>
        <Bold>100% JavaScript</Bold>
        {' '}
        - Just one language is all you need to know.
      </ListItem>
    </List>
    <Buttons>
      <Button className={ctaButton} link="/developers" type="outlineDark">
        See all developer features
        <Arrow alt="Get Started" src={arrow} />
      </Button>
    </Buttons>
    <Wave className={wave} />
  </React.Fragment>
);
