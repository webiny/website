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

    border: '1px solid ' + theme.color.darkGray,
    marginTop: -1,
    '&:last-child': {
      boxShadow: '0 2px 4px 0 rgba(222,222,222,0.50)',
    },
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
      backgroundImage:
        'url(' + (props.expanded ? questionContract : questionExpand) + ')',
      color: props.expanded ? theme.color.primaryDark : '',
    },
  })
)

const QuestionBlock = styled('p')({
  display: 'block',
  width: 'auto',
  fontWeight: theme.fontWeight.semiBold,
  backgroundImage: 'url(' + questionExpand + ')',
  backgroundPosition: 'right 25px center',
  backgroundRepeat: 'no-repeat',
  marginBottom: 0,
  padding: 25,
  cursor: 'pointer',
})

const Answer = styled('div')({
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
