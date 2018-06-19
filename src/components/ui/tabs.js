import React from 'react'
import ContentContainer from './content-container'
import styled from 'react-emotion'
import theme from '../utils/theme'
import arrow from './assets/tabs-bullet-arrow.svg'

const TabsContainer = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
})

const TabsMenu = styled('ul')({
  listStyle: 'none',
})

const TabsItemTitle = styled('h4')({
  fontSize: theme.fontSize.subText,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  transition: 'color 250ms',
  marginBottom: 20,
})

const TabsItemSubTitle = styled('p')({
  lineHeight: '175%',
  color: theme.color.black,
  fontSize: theme.fontSize.navMenuSubItem,
  fontWeight: theme.fontWeight.regular,
})

const TabsItemContainer = styled('a')({
  display: 'block',
  cursor: 'pointer',
  '&:hover': {
    [TabsItemTitle]: {
      textDecoration: 'underline',
    },
  },
})

const TabsItem = styled('li')({
  width: 300,
  borderBottom: '1px solid ' + theme.color.darkGray,
  '&.active': {
    [TabsItemTitle]: {
      color: theme.color.primaryDark,
    },
    listStyleImage: 'url(' + arrow + ')',
  },
  '&:last-child': {
    borderBottom: 'none',
  },
})

const TabsContentContainer = styled('div')({
  width: 750,
  height: 550,
  position: 'relative',
})

class Tabs extends React.Component {
  state = { items: [], activeItem: 0 }

  setItems = items => {
    this.setState({ items })
  }

  componentDidMount() {
    this.setItems(this.props.items)
  }

  setActiveItem = index => {
    this.setState({ activeItem: index })
  }

  render() {
    if (this.state.items.length < 1) {
      return null
    }

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
}

export default Tabs
