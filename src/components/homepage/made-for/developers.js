import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import Wave from '../../ui/waves';

import bullet from './assets/bullet.svg';

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

const Title = styled ('h3') ({
  marginTop: 0,
  padding: 0,
  fontSize: 24,
  fontWeight: theme.fontWeight.semiBold,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    textAlign: 'left',
    lineHeight: '150%',
    maxWidth: 750,
  },
  mq ({
    margin: ['0 20px', '0 auto 50px auto'],
  })
);

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.bold,
});

export default ({children, ...props}) => (
  <React.Fragment>
    <Title>Frontend, backend, full stack, ninja</Title>
    <SubText>
      No matter your role, we will equip you with all the tools, knowledge and support you need to get started with your next project.
    </SubText>
    <List>
      <ListItem>
        <Bold>Documented</Bold>
        {' '}
        -
        {' '}
        Our
        {' '}
        <a href="https://docs.webiny.com/">docs</a>
        {' '}
        portal has tutorials for beginners and more advance coders.
      </ListItem>
      <ListItem>
        <Bold>Customizable</Bold>
        {' '}
        - Webiny is meant to be built upon, adapt everything from the UI to the API.
      </ListItem>
      <ListItem>
        <Bold>Open source</Bold>
        {' '}
        - There are not magic black boxes here. Our code is available on
        {' '}
        <a href="https://github.com/webiny/webiny-js">GitHub</a>
        .
      </ListItem>
    </List>
    <Wave />

  </React.Fragment>
);
