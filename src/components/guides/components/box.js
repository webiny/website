import React from 'react';
import styled from 'react-emotion';
import mq from '../../utils/breakpoints';

import theme from '../../utils/theme';

const AnchorOffset = styled ('div') (
  {
    display: 'block',
    position: 'relative',
    paddingTop: 175,
    boxSizing: 'border-box',
  },
  mq ({
    width: ['auto', 'calc(100% - 300px)'],
    marginLeft: [15, 300],
    marginRight: [15, 0],
  })
);

const BoxWrapper = styled ('div') (
  {
    background: theme.color.white,
    border: '1px solid #E6E6E6',
    boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
    borderRadius: 5,
    boxSizing: 'border-box',
    marginBottom: -100,
    width: '100%',
    h2: {
      marginTop: 0,
      fontSize: theme.fontSize.h2,
    },
    a: {
      color: theme.color.primaryDark,
      fontWeight: theme.fontWeight.semiBold,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    p: {
      fontSize: 18,
      lineHeight: '180%',
    },
  },
  mq ({
    padding: [25, 40],
    h2: {
      fontSize: ['2rem', '3rem'],
    },
  })
);

class Box extends React.Component {
  render () {
    return (
      <AnchorOffset name={this.props.name} id={this.props.name}>
        <BoxWrapper>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </BoxWrapper>
      </AnchorOffset>
    );
  }
}

export default Box;
