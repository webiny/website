import React from 'react';
import styled from 'react-emotion';
import mq from '../../utils/breakpoints';
import theme from '../../utils/theme';

const SubTitle = styled ('h2') (
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 50,
    margin: '25px auto 40px auto',
  },
  mq ({
    width: ['100%', 650],
  })
);

export {SubTitle};
