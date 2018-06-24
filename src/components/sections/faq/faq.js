import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import theme from '../../utils/theme'
import mq from '../../utils/breakpoints'
import Question from './question'

import arrowFaq from './assets/arrow-faq.svg'

const FaqContainer = styled('section')(
  {},
  mq({
    padding: [20, 0],
  })
)

const Title = styled('h2')(
  {
    color: theme.color.black,
    fontSize: theme.fontSize.h2,
    marginBottom: 50,
    marginTop: 25,
  },
  mq({
    textAlign: ['center', 'left'],
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
          <Title>Frequently Asked Questions</Title>
          <Question title="Why should I use Webiny?">
            There are several benefits, some you might discover only once you
            start using it, but on a high-level, most developers can immediately
            benefit from the following:
            <ol>
              <li>
                Webiny is designed to run in a serverless environment. This
                gives you instant scalability and you no longer need to worry
                about updating your server as serveless services, like AWS
                Lambda provide a managed environment for you.
              </li>
              <li>
                Webiny is all in one. You will literally get all the components,
                layers, services and structures for your project. This will
                significantly reduce your coding time. But don’t take our word
                for it, take it for a sping and let us know how you liked it.
              </li>
              <li>
                Webiny is FREE and open source. The code is released under the
                MIT license so you have full control and can change literally
                every little thing you don’t like.
              </li>
            </ol>
          </Question>
          <Question title="How much does Webiny cost?">It's FREE</Question>
          <Question title="Where can I host Webiny?">It's FREE</Question>
          <Question title="What can I build using Webiny?">It's FREE</Question>
        </div>
        <AdditionalFaq href="#">
          Additional FAQ <img src={arrowFaq} />
        </AdditionalFaq>
      </FaqContainer>
    )
  }
}

export default Faq
