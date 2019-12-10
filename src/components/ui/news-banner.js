import React from 'react';
import styled from 'react-emotion';
import theme from '../utils/theme';

const NewsBanner = styled ('div') ({
  width: '100%',
  textAlign: 'center',
  marginBottom: 10,
  fontSize: 14,
  position: 'fixed',
  top: 0,
  zIndex: 10,
  backgroundColor: '#292C33',
  paddingBottom: 5,
  paddingTop: 7,
  display: 'block',
  minHeight: 40,
  a: {
    color: theme.color.white,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default ({...props}) => (
  <NewsBanner>
    <a href={props.link} target="_blank">{props.title}</a>
  </NewsBanner>
);
