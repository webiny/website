import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import theme from '../../utils/theme'
import ContentContainer from '../../ui/content-container'
import FaqComponent from '../../ui/faq'
import Link from 'gatsby-link'

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

const contactUs = css({
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
        <Link className={contactUs} to="/contact-us">
          Contact Us
        </Link>
      </FaqContainer>
    )
  }
}

export default Faq
