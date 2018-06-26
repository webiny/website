import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import mq from '../../utils/breakpoints'
import FaqComponent from '../../ui/faq'

import arrowFaq from './assets/arrow-faq.svg'

const FaqContainer = styled('section')(
  {},
  mq({
    padding: [20, 0],
  })
)

const AdditionalFaq = styled('a')({
  marginTop: 25,
  display: 'block',
  width: '100%',
  textTransform: 'uppercase',
  textDecoration: 'none',
  textAlign: 'right',
  color: theme.color.black,
  fontWeight: theme.fontWeight.semiBold,
})

class Faq extends React.Component {
  state = {
    questions: [
      {
        question: "What's my name?",
        answer: 'Pero',
      },
    ],
  }
  render() {
    return (
      <FaqContainer>
        <div>
          <FaqComponent
            title="Frequently Asked Questions"
            questions={this.state.questions}
          />
        </div>
        <AdditionalFaq href="#">
          Additional FAQ <img alt="arrow" src={arrowFaq} />
        </AdditionalFaq>
      </FaqContainer>
    )
  }
}

export default Faq
