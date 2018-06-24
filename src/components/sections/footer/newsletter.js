import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import mq from '../../utils/breakpoints'

import emailIcon from './assets/email-icon.svg'
import newsletterBullet from './assets/newsletter-bullet.svg'

const Title = styled('h3')({
  fontSize: theme.fontSize.h3,
  color: theme.color.lightGray,
  fontWeight: theme.fontWeight.bold,
  marginTop: 0,
})

const InputWrapper = styled('form')({
  position: 'relative',
})

const Input = styled('input')({
  background: theme.color.white,
  border: '1px solid #979797',
  borderRadius: 8,
  fontSize: 18,
  padding: '15px 25px 15px 50px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
})

const Submit = styled('button')({
  background: '#282C34',
  borderRadius: 8,
  position: 'absolute',
  color: theme.color.lightGray,
  textTransform: 'uppercase',
  padding: '5px 20px',
  fontWeight: theme.fontWeight.semiBold,
  fontSize: theme.fontSize.footer,
  right: 15,
  top: 12,
  outline: 'none',
})

const EmailIcon = styled('img')({
  position: 'absolute',
  left: 15,
  top: 'calc(50% - 7px)',
})

const NlReasons = styled('ul')({
  margin: 0,
  paddingTop: 15,
})

const NlReason = styled('li')({
  listStyle: 'none',
  listStylePosition: 'right',
  backgroundImage: 'url(' + newsletterBullet + ')',
  backgroundPosition: 'right 0 center',
  backgroundRepeat: 'no-repeat',
  color: theme.color.lightGray,
  paddingRight: 25,
  fontSize: theme.fontSize.footer,
  marginBottom: 5,
})

class Newsletter extends React.Component {
  constructor(props) {
    super(props)

    this.state = { email: '' }
    this.inputRef = React.createRef()
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = event => {
    if (this.state.email != '') {
      this.setState({ email: 'Thanks!' })
    }

    event.preventDefault()
  }
  render() {
    return (
      <React.Fragment>
        <Title>Join Webiny Newsletter</Title>
        <InputWrapper onSubmit={this.handleSubmit}>
          <Input
            ref={this.inputRef}
            placeholder="email@domain.com"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <EmailIcon alt="Email" src={emailIcon} />
          <Submit>Join</Submit>
        </InputWrapper>
        <NlReasons>
          <NlReason>We send one nesletter a week.</NlReason>
          <NlReason>Contains only Webiny relevant content.</NlReason>
          <NlReason>Your email is not shared with any 3rd parties.</NlReason>
        </NlReasons>
      </React.Fragment>
    )
  }
}

export default Newsletter
