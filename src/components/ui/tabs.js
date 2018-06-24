import React from 'react'
import ContentContainer from './content-container'
import styled from 'react-emotion'
import theme from '../utils/theme'
import mq from '../utils/breakpoints'

import arrow from './assets/tabs-bullet-arrow.svg'

const TabsContainer = styled('div')(
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  mq({
    padding: [20, 0],
  })
)

const TabsMenu = styled('ul')(
  {
    listStyle: 'none',
  },
  mq({ width: ['100%', 'auto'] })
)

const TabsItemTitle = styled('h4')(
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.white,
    transition: 'color 250ms',
    marginBottom: 20,
  },
  mq({
    textAlign: ['center', 'left'],
  })
)

const TabsItemSubTitle = styled('p')(
  {
    lineHeight: '175%',
    color: theme.color.white,
    fontSize: theme.fontSize.navMenuSubItem,
    fontWeight: theme.fontWeight.regular,
  },
  mq({
    textAlign: ['center', 'left'],
  })
)

const TabsItemContainer = styled('a')({
  display: 'block',
  cursor: 'pointer',
  '&:hover': {
    [TabsItemTitle]: {
      textDecoration: 'underline',
    },
  },
})

const TabsItem = styled('li')(
  {
    '&.active': {
      [TabsItemTitle]: {
        color: theme.color.white,
      },
      listStyleImage: 'url(' + arrow + ')',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  mq({
    width: ['100%', 300],
    height: ['auto', 'auto'],
    borderBottom: ['none', '1px solid ' + theme.color.darkGray],
  })
)

const TabsContentContainer = styled('div')(
  {
    position: 'relative',
  },
  mq({
    width: ['100%', 750],
    height: ['auto', 550],
    marginTop: ['0', 25],
  })
)

class Tabs extends React.Component {
  state = { items: [], activeItem: 0, width: 0 }

  setItems = items => {
    this.setState({ items })
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ width: window.innerWidth })
    })
    this.setItems(this.props.items)
  }

  setActiveItem = index => {
    this.setState({ activeItem: index })
  }

  renderDesktop = () => {
    return (
      <ContentContainer>
        <TabsContainer right={this.props.right}>
          <TabsMenu>
            {this.state.items.map((item, index) => {
              return (
                <TabsItem
                  onClick={() => this.setActiveItem(index)}
                  key={item.title}
                  content={item.content}
                  className={this.state.activeItem === index ? 'active' : ''}
                >
                  <TabsItemContainer>
                    <TabsItemTitle>{item.title}</TabsItemTitle>
                    <TabsItemSubTitle>{item.subTitle}</TabsItemSubTitle>
                  </TabsItemContainer>
                </TabsItem>
              )
            })}
          </TabsMenu>
          <TabsContentContainer>
            {this.state.items[this.state.activeItem].content}
          </TabsContentContainer>
        </TabsContainer>
      </ContentContainer>
    )
  }

  renderMobile = () => {
    return (
      <TabsContainer right={this.props.right}>
        <TabsMenu>
          {this.state.items.map((item, index) => {
            return (
              <TabsItem key={item.title}>
                <TabsItemContainer>
                  <TabsItemTitle>{item.title}</TabsItemTitle>
                  <TabsItemSubTitle>{item.subTitle}</TabsItemSubTitle>
                  <TabsContentContainer>{item.content}</TabsContentContainer>
                </TabsItemContainer>
              </TabsItem>
            )
          })}
        </TabsMenu>
      </TabsContainer>
    )
  }

  render() {
    if (this.state.items.length < 1) {
      return null
    }

    if (this.state.width < 1200) {
      return this.renderMobile()
    } else {
      return this.renderDesktop()
    }
  }
}

export default Tabs
