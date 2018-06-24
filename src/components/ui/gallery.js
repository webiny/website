import React from 'react'
import ReactDOM from 'react-dom'
import ContentContainer from './content-container'
import styled from 'react-emotion'
import theme from '../utils/theme'
import mq from '../utils/breakpoints'

import arrow from './assets/bullet-arrow.svg'

const GalleryContainer = styled('div')(
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  props => ({
    flexDirection: props.right ? 'row-reverse' : 'row',
  })
)

const GalleryMenu = styled('ul')({
  listStyle: 'none',
})

const GalleryItemTitle = styled('h4')({
  fontSize: theme.fontSize.subText,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  transition: 'color 250ms',
  marginBottom: 20,
})

const GalleryItemSubTitle = styled('p')({
  lineHeight: '175%',
  color: theme.color.black,
  fontSize: theme.fontSize.navMenuSubItem,
  fontWeight: theme.fontWeight.regular,
})

const GalleryItemContainer = styled('a')({
  display: 'block',
  cursor: 'pointer',
  '&:hover': {
    [GalleryItemTitle]: {
      textDecoration: 'underline',
    },
  },
})

const GalleryItem = styled('li')(
  {
    boxSizing: 'border-box',
    '&.active': {
      [GalleryItemTitle]: {
        color: theme.color.primaryDark,
      },
      listStyleImage: 'url(' + arrow + ')',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  mq({
    width: ['100%', 300],
    textAlign: ['center', 'left'],
    padding: [20, 0],
    borderBottom: ['none', '1px solid ' + theme.color.darkGray],
  })
)

const GalleryImageContainer = styled('div')(
  {
    position: 'relative',
  },
  mq({
    width: ['100%', 750],
    height: ['auto', 550],
  })
)

const GalleryImage = styled('img')(
  {
    transition: 'opacity 250ms ease-in-out',
    boxShadow: '0 2px 4px 0 rgba(211,211,211,0.50)',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 1,
    '&.inactive': {
      opacity: 0,
    },
    '&.top': {
      zIndex: 10,
    },
    '&.bottom': {
      zIndex: 9,
    },
  },
  mq({
    width: ['100%', 750],
    position: ['relative', 'absolute'],
  })
)

class Gallery extends React.Component {
  state = { items: [], activeItem: 0, width: 0 }
  topImage = ''
  bottomImage = ''

  setItems = items => {
    this.bottomImage = items[this.state.activeItem].image
    this.topImage = items[this.state.activeItem].image
    this.setState({ items })
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ width: window.innerWidth })
    })
    this.setItems(this.props.items)
  }

  setActiveItem = index => {
    let imageTopNode = ReactDOM.findDOMNode(this.imageTop)
    let imageBottomNode = ReactDOM.findDOMNode(this.imageBottom)
    imageBottomNode.classList.add('bottom')
    imageTopNode.classList.add('top')

    // set the new image to bottom first
    this.bottomImage = this.state.items[index].image

    // fade out the top with the old image
    imageTopNode.classList.add('inactive')
    this.forceUpdate()

    setTimeout(() => {
      // once the animation is done, add the new image to the top image
      //this.topImage = this.state.items[index].image
      imageTopNode.classList.remove('inactive')
      this.setState({ activeItem: index })
    }, 250)
  }

  renderDesktop = () => {
    return (
      <ContentContainer>
        <GalleryContainer right={this.props.right}>
          <GalleryMenu>
            {this.state.items.map((item, index) => {
              return (
                <GalleryItem
                  onClick={() => this.setActiveItem(index)}
                  key={item.title}
                  image={item.image}
                  className={this.state.activeItem === index ? 'active' : ''}
                >
                  <GalleryItemContainer>
                    <GalleryItemTitle>{item.title}</GalleryItemTitle>
                    <GalleryItemSubTitle>{item.subTitle}</GalleryItemSubTitle>
                  </GalleryItemContainer>
                </GalleryItem>
              )
            })}
          </GalleryMenu>
          <GalleryImageContainer>
            <GalleryImage
              src={this.state.items[this.state.activeItem].image}
              ref={image => {
                this.imageTop = image
              }}
            />
            <GalleryImage
              src={this.bottomImage}
              ref={image => {
                this.imageBottom = image
              }}
            />
          </GalleryImageContainer>
        </GalleryContainer>
      </ContentContainer>
    )
  }

  renderMobile = () => {
    return (
      <GalleryContainer>
        <GalleryMenu>
          {this.state.items.map((item, index) => {
            return (
              <GalleryItem key={item.title}>
                <GalleryItemContainer>
                  <GalleryItemTitle>{item.title}</GalleryItemTitle>
                  <GalleryItemSubTitle>{item.subTitle}</GalleryItemSubTitle>
                  <GalleryImage src={item.image} />
                </GalleryItemContainer>
              </GalleryItem>
            )
          })}
        </GalleryMenu>
      </GalleryContainer>
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

export default Gallery
