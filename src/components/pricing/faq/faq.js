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
  cursor: 'pointer',
  textDecoration: 'underline',
});

const howLambda = (
  <React.Fragment>
    <p>
      Each request that invokes a Lambda is counted as one request. Usually that's a call to your API, or the Files service to retrieve a file.
      The time from when the request was received, until the time a response is
      delivered, or request it terminated, is counted as the run time. The run
      time is rounded to the nearest 100ms.
    </p>
  </React.Fragment>
);

const lambdaLimits = (
  <React.Fragment>
    <p>
      If an extra usage package is available, your requests will be served without any
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
      From the site manager interface you can cancel your
      subscription at any time. An active subscription that is canceled will
      expire at the end of the billing period and automatically deactivate the website.
    </p>
    <p>
      As for refunds, please contact the support.
    </p>
  </React.Fragment>
);

const paymentMethods = (
  <React.Fragment>
    <p>
      To sign up for a{' '}
      <strong>Paid Package</strong>
      {' '}
      a credit card is required only after the trial period expires.
    </p>
    <p>
      We accept all major credit and debit cards such as Visa, Mastercard or
      American Express. For larger accounts we also accept bank transfers.
    </p>
  </React.Fragment>
);

const paymentCycles = (
  <React.Fragment>
    <p>
      The payment cycles are once a month for the paid package, and your
      subscription is automatically renewed.{' '}
    </p>
    <p>
      In case you use up any extra usage packages, they are billed the moment
      an extra usage package starts getting utilized.
    </p>
  </React.Fragment>
);

const extraPackageExpire = (
  <React.Fragment>
    <p>Extra packages do not expire.</p>
    <p>
      For example, say you bought an extra package and used only half of the
      lambda requests before your paid package renewed. The system will
      automatically transfer the remainder of your extra package allowance to
      the next month.{' '}
    </p>
    <p>
      Note: this doesn't apply to your paid package. When a paid package
      expires, the remainder of your allowance is not transferred to the next
      month.
    </p>
  </React.Fragment>
);

const taxIncluded = (
  <React.Fragment>
    <p>
      Webiny as a legal UK entity is required by law to charge tax for all EU
      customers. The tax amount depends on your country of origin. For more
      information, visit our support page.
    </p>
    <p>
      For all other customers, there will be no to additional tax on top of the
      prices displayed above.{' '}
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

  openChat = () => {
    window['$crisp'].push (['do', 'chat:open']);
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
        <a className={contactUs} onClick={this.openChat}>
          Send us a message
        </a>
      </FaqContainer>
    );
  }
}

export default Faq;
