import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import ContentContainer from '../../ui/content-container';
import FaqComponent from '../../ui/faq';
import Link from 'gatsby-link';

const FaqContainer = styled ('section') ({
  backgroundColor: theme.color.lightGray,
  padding: '50px 0',
});

const maxWidth = css ({
  maxWidth: 750,
});

const AdditionalQuestions = styled ('h4') ({
  textAlign: 'center',
  fontWeight: theme.fontWeight.semiBold,
  fontSize: theme.fontSize.h4,
});

const contactUs = css ({
  display: 'block',
  textAlign: 'center',
  fontSize: theme.fontSize.paragraph,
  color: theme.color.black,
});

const howLambda = (
  <React.Fragment>
    <p>
      Each request that lands on the API of your site is counted as one request.
      The time from when the request was recieved, until the time a response is
      delivered, or request it terminated, is counted as the run time. The run
      time is rounded to the nearest 100ms.
    </p>
  </React.Fragment>
);

const lambdaLimits = (
  <React.Fragment>
    <p>
      In case your site is on the <strong>Free Package</strong> all requests
      will be denied, including the ones for static assets.
    </p>
    <p>
      In case you are on the <strong>Paid Package</strong>, and extra usage
      package are available, your requests will be served without any
      interruptions.
    </p>
    <p>
      In case an extra usage package is not available, all requests will be
      denied, including the ones for static assets.
    </p>
  </React.Fragment>
);

const extraUsagePackageLimit = (
  <React.Fragment>
    <p>
      Yes, you can. In your site manager you can define the maximum amount of
      extra packages a website can consume.
    </p>
  </React.Fragment>
);

const cancelSub = (
  <React.Fragment>
    <p>
      From the site manager interface you can upgrade or downgrade your
      subscription at any time. An active subscription that is downgraded will
      expire at the end of the billing period and automatically transition to a
      free package if viable.
    </p>
    <p>
      As for refunds, we do not offer refunds. You are welcome to try and use
      our free package as long as you like, before you migrate onto a paid
      package.
    </p>
  </React.Fragment>
);

const paymentMethods = (
  <React.Fragment>
    <p>
      To sign up for the <strong>Free Package</strong> you don't need a credit
      card.
    </p>
    <p>
      To sign up for a <strong>Paid Package</strong> a credit card is required.
      We accept all major credit and debit cards such as Visa, Mastercard or
      American Express. For larger accounts we also accept bank transfers.
    </p>
  </React.Fragment>
);

const paymentCycles = (
  <React.Fragment>
    <p>
      The payment cycles are once a month for the paid package, and your subscription is automatically renewed.
      {' '}
    </p>
    <p>
      In case you use up any extra usaged packages, they are billed the moment an extra usage package starts getting utilized.
    </p>
  </React.Fragment>
);

const extraPackageExpire = (
  <React.Fragment>
    <p>
      Extra packages do not expire.
    </p>
    <p>
      For example, say you bought an extra package and used only half of the lambda requests before your paid package renewed. The system will automatically transfer the remainder of your extra package allowance to the next month.
      {' '}
    </p>
    <p>
      Note: this doesn't apply to your paid package. When a paid package expires, the remainder of your allowance is not transfered to the next month.
    </p>
  </React.Fragment>
);

const taxIncluded = (
  <React.Fragment>
    <p>
      Webiny as a legal UK entity is required by law to charge tax for all EU customers.
      {' '}
      The tax amount depends on your country of origin. For more information, visit our support page.
    </p>
    <p>
      For all other customers, there will be no to additional tax on top of the prices displayed above.
      {' '}
    </p>
  </React.Fragment>
);

class Faq extends React.Component {
  state = {
    questions: [
      {
        question: 'How are Lambda requests and run time calculated?',
        answer: howLambda,
      },
      {
        question: 'What happens if I go above the lambda package limits?',
        answer: lambdaLimits,
      },
      {
        question: 'Can I limit the extra usage packages?',
        answer: extraUsagePackageLimit,
      },
      {
        question: 'How can I cancel my subscription? Can I get a refund?',
        answer: cancelSub,
      },
      {
        question: 'Do I need a credit-card to signup and what payment methods you accept?',
        answer: paymentMethods,
      },
      {
        question: 'What are the payment cycles?',
        answer: paymentCycles,
      },
      {
        question: 'Do extra packages expire?',
        answer: extraPackageExpire,
      },
      {
        question: 'Is tax included in the price?',
        answer: taxIncluded,
      },
    ],
  };
  render () {
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
    );
  }
}

export default Faq;
