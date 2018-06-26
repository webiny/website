import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import theme from '../../utils/theme'
import ContentContainer from '../../ui/content-container'
import FaqComponent from '../../ui/faq'

const FaqContainer = styled('section')({
  backgroundColor: theme.color.lightGray,
  padding: '50px 0',
})

const maxWidth = css({
  maxWidth: 750,
})

const AdditionalQuestions = styled('h4')({
  textAlign: 'center',
  fontWeight: theme.fontWeight.semiBold,
  fontSize: theme.fontSize.h4,
})

const ContactUs = styled('a')({
  display: 'block',
  textAlign: 'center',
  fontSize: theme.fontSize.paragraph,
  color: theme.color.black,
})

class Faq extends React.Component {
  state = {
    questions: [
      {
        question: 'How much does it cost?',
        answer: '$25 per month per site',
      },
    ],
  }
  render() {
    return (
      <FaqContainer>
        <ContentContainer className={maxWidth}>
          <FaqComponent
            title="Frequently Asked Questions"
            questions={this.state.questions}
          />
        </ContentContainer>
        <AdditionalQuestions>More questions?</AdditionalQuestions>
        <ContactUs href="mailto:info@webiny.com">Contact Us</ContactUs>
      </FaqContainer>
    )
  }
}

export default Faq
