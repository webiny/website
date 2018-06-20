import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'

import questionExpand from './assets/question-expand.svg'
import questionContract from './assets/question-contract.svg'

const QuestionWrapper = styled('div')(
  {
    display: 'block',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    border: '1px solid ' + theme.color.darkGray,
    marginTop: -1,
  },
  props => ({
    [Answer]: {
      //display: props.expanded ? 'block' : 'none',
      height: props.expanded ? 'auto' : 0,
      margin: props.expanded ? '25px 25px' : 0,
      opacity: props.expanded ? 1 : 0,
      visibility: props.expanded ? 'visible' : 'hidden',
    },
    [QuestionBlock]: {
      background:
        'url(' +
        (props.expanded ? questionContract : questionExpand) +
        ') no-repeat right center',
      color: props.expanded ? theme.color.primaryDark : '',
    },
  })
)

const QuestionBlock = styled('p')({
  display: 'block',
  width: '100%',
  fontWeight: theme.fontWeight.semiBold,
  background: 'url(' + questionExpand + ') no-repeat right center',
  marginBottom: 0,
  cursor: 'pointer',
})

const Answer = styled('p')({
  fontSize: theme.fontSize.paragraph,
  display: 'block',
  width: 'auto',
  height: 0,
  transition: 'all 250ms',
  li: {
    margin: 15,
  },
})

class Question extends React.Component {
  state = { expanded: false }
  toggle = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <QuestionWrapper expanded={this.state.expanded}>
        <QuestionBlock onClick={this.toggle}>{this.props.title}</QuestionBlock>
        <Answer>{this.props.children}</Answer>
      </QuestionWrapper>
    )
  }
}

export default Question
