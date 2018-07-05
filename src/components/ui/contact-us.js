import React from 'react'
import styled from 'react-emotion'
import theme from '../utils/theme'
import { css } from 'emotion'
import mq from '../utils/breakpoints'
import Button from './button'

import arrow from './assets/gs-btn-arrow.svg'

const BoxWrapper = styled('div')({
  position: 'relative',
  paddingTop: 25,
})

const Box = styled('form')({
  background: theme.color.white,
  boxShadow: '0 2px 40px 10px rgba(152,152,152,0.50)',
  borderRadius: 8,
  padding: '50px 50px',
  boxSizing: 'border-box',
  maxWidth: 550,
  margin: '0 auto',
  color: theme.color.black,
})

const Input = styled('input')({
  display: 'block',
  margin: '0 auto',
  boxSizing: 'border-box',
  width: '100%',
  marginBottom: 25,
  padding: 10,
  fontSize: theme.fontSize.paragraph,
  fontWeight: theme.fontWeight.semiBold,
  border: '2px solid ' + theme.color.darkGray,
  borderRadius: 4,
  outline: 'none',
  '&:focus, &:active': {
    border: '2px solid ' + theme.color.grayText,
  },
})
const Textarea = styled('textarea')({
  display: 'block',
  margin: '0 auto',
  boxSizing: 'border-box',
  width: '100%',
  marginBottom: 40,
  height: 150,
  padding: '7px 10px',
  fontSize: theme.fontSize.paragraph,
  fontWeight: theme.fontWeight.semiBold,
  border: '2px solid ' + theme.color.darkGray,
  borderRadius: 4,
  outline: 'none',
  '&:focus, &:active': {
    border: '2px solid ' + theme.color.grayText,
  },
})

const button = css(
  {
    boxShadow: '0 2px 3px 0 rgba(160,160,160,0.50)',
    '> img': {
      marginLeft: 10,
    },
  },
  mq({
    padding: [15, '14px 100px !important'],
  })
)

class ContactUs extends React.Component {
  constructor(props) {
    super(props)

    this.state = { name: '', email: '', question: '', submitted: false }
    this.nameRef = React.createRef()
    this.emailRef = React.createRef()
    this.questionRef = React.createRef()
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    if (
      this.state.email !== '' &&
      this.state.name !== '' &&
      this.state.question !== ''
    ) {
      this.setState({ submitted: true })
    }

    event.preventDefault()
  }
  render() {
    return (
      <BoxWrapper>
        {!this.state.submitted && (
          <Box onSubmit={this.handleSubmit}>
            <Input
              name="name"
              ref={this.nameRef}
              placeholder="Your name"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
            <Input
              name="email"
              ref={this.emailRef}
              placeholder="email@domain.com"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
            <Textarea
              name="question"
              ref={this.questionRef}
              placeholder="Your question, comment, feedback"
              onChange={this.handleChange}
              value={this.state.question}
              required
            />
            <Button className={button} type="primary">
              Submit
              <img alt="Submit" src={arrow} />
            </Button>
          </Box>
        )}
      </BoxWrapper>
    )
  }
}

export default ContactUs
