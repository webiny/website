import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import mq from '../../utils/breakpoints'

import documentationIcon from './assets/documentation.svg'
import forumIcon from './assets/forum.svg'
import githubIcon from './assets/github.svg'
import blogIcon from './assets/blog.svg'
import twitterIcon from './assets/twitter.svg'
import arrowIcon from './assets/bullet-arrow-sidebar.svg'

const Wrapper = styled('div')(
  {
    border: '1px solid ' + theme.color.darkGray,
    boxShadow: '0 2px 4px 0 rgba(222,222,222,0.50)',
    marginTop: 25,
  },
  mq({
    marginLeft: [20, 50],
    marginRight: [20, 0],
    marginBottom: [20, 0],
  })
)

const Menu = styled('div')({})

const Item = styled('a')({
  listStyle: 'none',
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  borderBottom: '1px solid ' + theme.color.darkGray,
  padding: '0px 25px',
  backgroundImage: 'url(' + arrowIcon + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 20px center',
  '&:last-child': {
    border: 'none',
  },
  '&:hover': {
    backgroundColor: theme.color.lightGray,
  },
})

const BoxTitle = styled('h5')({
  color: theme.color.black,
  fontSize: theme.fontSize.h5,
  fontWeight: theme.fontWeight.semiBold,
  textTransform: 'uppercase ',
  position: 'absolute',
  top: 25,
  left: 90,
})

const BoxIcon = styled('img')({
  position: 'absolute',
  top: 'calc(50% - 25px)',
  left: 20,
  height: 50,
})

const BoxDescription = styled('p')({
  fontSize: theme.fontSize.paragraph,
  lineHeight: '150%',
  color: theme.color.black,
  padding: '65px 25px 25px 65px',
  marginBottom: 0,
})

const Sidebar = () => (
  <Wrapper>
    <Menu>
      <Item href="https://docs.webiny.com/">
        <BoxIcon src={documentationIcon} />
        <BoxTitle>Documentation</BoxTitle>
        <BoxDescription>
          Get started with tutorials, components and our API.
        </BoxDescription>
      </Item>
      <Item href="https://community.webiny.com/">
        <BoxIcon src={forumIcon} />
        <BoxTitle>Community</BoxTitle>
        <BoxDescription>
          Get started with tutorials, components and our API.
        </BoxDescription>
      </Item>
      <Item href="https://github.com/Webiny/webiny-js">
        <BoxIcon src={githubIcon} />
        <BoxTitle>GitHub</BoxTitle>
        <BoxDescription>
          Get started with tutorials, components and our API.
        </BoxDescription>
      </Item>
      <Item href="https://blog.webiny.com/">
        <BoxIcon src={blogIcon} />
        <BoxTitle>Blog</BoxTitle>
        <BoxDescription>
          Get started with tutorials, components and our API.
        </BoxDescription>
      </Item>
      <Item href="https://twitter.com/WebinyPlatform">
        <BoxIcon src={twitterIcon} />
        <BoxTitle>Twitter</BoxTitle>
        <BoxDescription>
          Get started with tutorials, components and our API.
        </BoxDescription>
      </Item>
    </Menu>
  </Wrapper>
)

export default Sidebar
