import React from 'react';
import {cx, css} from 'emotion';
import mq from '../utils/breakpoints';
import theme from '../utils/theme';
import Link from 'gatsby-link';

const buttonDefault = css (
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
    marginLeft: 0,
    padding: '14px 20px',
    verticalAlign: 'top',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 1,
    borderRadius: 4,
    willChange: 'opacity',
    transition: 'all 0.2s',
    cursor: 'pointer',
    color: theme.color.black,
    backgroundColor: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '.025em',
    fontWeight: 600,
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    '&:hover': {
      boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
  },
  mq ({
    width: ['100%', 'inherit'],
  })
);

const buttonFullWidthStyle = css ({
  width: '100% !important',
});

const buttonPrimary = css ({
  backgroundColor: theme.color.primaryDark,
  color: theme.color.white,
  textTransform: 'uppercase',
  //fontSize: 20,
  //border: '1px solid #ED4005',
  //boxShadow: '0 2px 3px 0 rgba(160,160,160,0.50)',
  '&:hover, &:active': {
    background: '#ED4005',
    //boxShadow: '0px 0px 0px 3px #FA5723',
    //borderColor: '#ED4005',
  },
});

const buttonSecondary = css ({
  backgroundColor: theme.color.secondaryDark,
  color: theme.color.white,
  textTransform: 'uppercase',
  //fontSize: 20,
  //border: '1px solid #3FBFB0',
  '&:hover, &:active': {
    background: '#3FBFB0',
    //boxShadow: '0px 0px 0px 3px #3FBFB0',
    //borderColor: '#3FBFB0',
  },
});

const buttonDark = css ({
  backgroundColor: theme.color.dark,
  color: theme.color.white,
  textTransform: 'uppercase',
});

const buttonOutline = css ({
  backgroundColor: 'transparent',
  color: theme.color.white,
  textTransform: 'uppercase',
  border: 'solid 2px #fff',
  padding: '12px 20px',
});

const buttonOutlineDark = css ({
  backgroundColor: 'transparent',
  color: theme.color.dark,
  textTransform: 'uppercase',
  border: 'solid 2px ' + theme.color.dark,
  padding: '12px 20px',
});

class Button extends React.Component {
  styles = {
    fullWidth: buttonFullWidthStyle,
    primary: buttonPrimary,
    secondary: buttonSecondary,
    default: buttonDefault,
    dark: buttonDark,
    outline: buttonOutline,
    outlineDark: buttonOutlineDark,
  };

  render () {
    let style = 'default';
    if (this.props.hasOwnProperty ('type')) {
      style = this.props.type;
    }
    style = cx (this.styles['default'], this.styles[style]);

    if (this.props.hasOwnProperty ('className')) {
      style += ' ' + this.props.className;
    }

    if (this.props.hasOwnProperty ('fullWidth')) {
      style += ' ' + this.styles.fullWidth;
    }

    if (this.props.hasOwnProperty ('link')) {
      if (this.props.link.startsWith ('http')) {
        return (
          <a href={this.props.link} className={style}>
            {this.props.children}
          </a>
        );
      } else {
        return (
          <Link to={this.props.link} className={style}>
            {this.props.children}
          </Link>
        );
      }
    } else {
      return (
        <button className={style} onClick={this.props.onClick}>
          {this.props.children}
        </button>
      );
    }
  }
}

export default Button;
