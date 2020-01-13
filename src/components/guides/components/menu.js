import React from 'react';
import styled from 'react-emotion';
import mq from '../../utils/breakpoints';

import theme from '../../utils/theme';

const MenuWrapper = styled ('div') (
  {
    background: theme.color.white,
    border: '1px solid #E6E6E6',
    boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
    borderRadius: 5,
    boxSizing: 'border-box',
    width: 250,
    position: 'fixed',
    top: 175,
    ul: {
      padding: '10px 0',
      li: {
        listStyle: 'none',
        padding: '10px 15px',
        borderBottom: '1px solid ' + theme.color.lightGray,
        '&:last-child': {
          borderBottom: 'none',
          paddingBottom: 5,
        },
        a: {
          color: theme.color.primaryDark,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  mq ({
    display: ['none', 'block'],
  })
);

class Menu extends React.Component {
  render () {
    return (
      <MenuWrapper>
        <ul>
          {this.props.items.map (el => {
            return (
              <li key={el.href}>
                <a href={el.href}>{el.title}</a>
              </li>
            );
          })}
        </ul>
      </MenuWrapper>
    );
  }
}

export default Menu;
