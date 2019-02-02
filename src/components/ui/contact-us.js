import React from 'react';
import styled from 'react-emotion';
import theme from '../utils/theme';
import {css} from 'emotion';
import mq from '../utils/breakpoints';
import Button from './button';

import arrow from './assets/gs-btn-arrow.svg';

const BoxWrapper = styled ('div') ({
  position: 'relative',
  paddingTop: 25,
});

const Box = styled ('form') ({
  background: theme.color.white,
  boxShadow: '0 2px 40px 10px rgba(152,152,152,0.50)',
  borderRadius: 8,
  padding: '50px 50px',
  boxSizing: 'border-box',
  maxWidth: 550,
  margin: '0 auto',
  color: theme.color.black,
});

const Input = styled ('input') ({
  display: 'block',
  margin: '0 auto',
  boxSizing: 'border-box',
  width: '100%',
  marginBottom: 25,
  padding: 15,
  fontSize: theme.fontSize.paragraph,
  fontWeight: theme.fontWeight.regular,
  border: '1px solid ' + theme.color.darkGray,
  backgroundColor: theme.color.lightGray,
  borderRadius: 4,
  outline: 'none',
  transition: '225ms all',
  '&:focus, &:active': {
    border: '1px solid ' + theme.color.grayText,
  },
});
const Textarea = styled ('textarea') ({
  display: 'block',
  margin: '0 auto',
  boxSizing: 'border-box',
  width: '100%',
  marginBottom: 40,
  height: 150,
  padding: 15,
  fontSize: theme.fontSize.paragraph,
  fontWeight: theme.fontWeight.regular,
  border: '1px solid ' + theme.color.darkGray,
  backgroundColor: theme.color.lightGray,
  borderRadius: 4,
  outline: 'none',
  transition: '225ms all',
  '&:focus, &:active': {
    border: '1px solid ' + theme.color.grayText,
  },
});

const button = css (
  {
    boxShadow: '0 2px 3px 0 rgba(160,160,160,0.50)',
    '> img': {
      marginLeft: 10,
    },
  },
  mq ({
    padding: [15, '14px 100px !important'],
  })
);

const Arrow = styled ('img') ({
  height: 9,
  marginLeft: 5,
});

class ContactUs extends React.Component {
  constructor (props) {
    super (props);

    this.state = {name: '', email: '', message: '', submitted: false};
    this.nameRef = React.createRef ();
    this.emailRef = React.createRef ();
    this.messageRef = React.createRef ();
  }

  handleChange = event => {
    this.setState ({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    if (
      this.state.email !== '' &&
      this.state.name !== '' &&
      this.state.message !== ''
    ) {
      this.setState ({submitted: true});

      window['$crisp'].push (['set', 'user:nickname', [this.state.email]]);
      window['$crisp'].push (['set', 'user:email', [this.state.email]]);
      window['$crisp'].push ([
        'do',
        'message:send',
        ['text', this.state.message],
      ]);
      window['$crisp'].push (['set', 'session:data', [[['contact-us', true]]]]);

      /*
      const formData = Object.keys(this.state)
        .map(key => {
          return (
            encodeURIComponent(key) + '=' + encodeURIComponent(this.state[key])
          )
        })
        .join('&')

      fetch('https://web-api.cloud.webiny.com/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      })
      */
    }

    event.preventDefault ();
  };
  render () {
    return (
      <BoxWrapper>
        {!this.state.submitted &&
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
              name="message"
              ref={this.messageRef}
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
              value={this.state.question}
              required
            />
            <Button className={button} type="primary">
              Submit
              <Arrow alt="Submit" src={arrow} />
            </Button>
          </Box>}
        {this.state.submitted &&
          <Box>
            Thank you for your message. We will respond at the earliest
            convenience.
          </Box>}
      </BoxWrapper>
    );
  }
}

export default ContactUs;
