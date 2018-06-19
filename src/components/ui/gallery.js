import React from 'react'
import ReactDOM from 'react-dom'
import ContentContainer from './content-container'
import styled from 'react-emotion'
import theme from '../utils/theme'
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

const GalleryItem = styled('li')({
  width: 300,
  borderBottom: '1px solid ' + theme.color.darkGray,
  '&.active': {
    [GalleryItemTitle]: {
      color: theme.color.primaryDark,
    },
    listStyleImage: 'url(' + arrow + ')',
  },
  '&:last-child': {
    borderBottom: 'none',
  },
})

const GalleryImageContainer = styled('div')({
  width: 750,
  height: 550,
  position: 'relative',
})

const GalleryImage = styled('img')({
  width: 750,
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
})

class Gallery extends React.Component {
  state = { items: [], activeItem: 0 }
  topImage = ''
  bottomImage = ''

  constructor(props) {
    super(props)
  }

  setItems = items => {
    this.bottomImage = items[this.state.activeItem].image
    this.topImage = items[this.state.activeItem].image
    this.setState({ items })
  }

  componentDidMount() {
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

  render() {
    if (this.state.items.length < 1) {
      return null
    }

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
}

export default Gallery
