import React from 'react'
import styled from 'react-emotion'

const ButtonInner = styled('a')(
  {
    display: 'inline-block',
    marginRight: 0,
    marginLeft: 0,
    padding: '14px 20px',
    verticalAlign: 'top',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 1,
    borderRadius: 10,
    willChange: 'opacity',
    transition: 'all 0.2s',
    cursor: 'pointer',
    color: '#000',
    backgroundColor: '#fff',
    border: '1px solid #cdcdcd',
    boxSizing: 'border-box',
    textDecoration: 'none',
    '&:hover': {
      boxShadow: '0px 0px 0px 3px #3FBFB0',
    },
    '&:active': {
      border: '1px solid #3FBFB0',
      boxShadow: 'inset 0px 0px 2px 0px #3FBFB0',
    },
  },
  props => ({
    color: props.navBar ? '#000 !important' : '',
    width: props.fullWidth ? '100%' : 'auto',
  })
)

export default ({ children, link, ...props }) => (
  <ButtonInner href={link} {...props}>
    {children}
  </ButtonInner>
)
