import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import FaqComponent from '../../ui/faq';
import Link from 'gatsby-link';

import arrowFaq from './assets/arrow-faq.svg';

const FaqContainer = styled ('section') (
  {},
  mq ({
    padding: [20, 0],
  })
);

const additionalFaq = css ({
  marginTop: 25,
  display: 'block',
  width: '100%',
  textTransform: 'uppercase',
  textDecoration: 'none',
  textAlign: 'right',
  color: theme.color.black,
  fontWeight: theme.fontWeight.semiBold,
});

const isItFree = (
  <React.Fragment>
    <p>
      <strong>100% YES!</strong>
    </p>
    <p>
      Webiny is an open source project under MIT license. You can download the
      source code from our GitHub on <a href="https://github.com/webiny/webiny-js">https://github.com/webiny/webiny-js</a>.
    </p>
  </React.Fragment>
);

const canIUseWebiny = (
  <React.Fragment>
    <p>
      <strong>Yes, you can!</strong>
    </p>
    <p>
      Webiny is first and foremost a content management system that allows you
      to build and organise your pages and its visual builder helps you create
      stunning content in no time.
    </p>
  </React.Fragment>
);

const howHard = (
  <React.Fragment>
    <p>
      Learning Webiny will take about the same time it takes to finish a good
      cup of coffee.
    </p>
    <p>
      Our interface is clean, uncluttered and intuitive. The visual builder uses
      drag&drop gestures to design and create your pages, so zero technical
      knowledge is required.
    </p>
    <p>
      Additionally, we put in extra effort in writing our{' '}
      <a href="https://docs.webiny.com/">documentation</a> which is full of
      guides and examples to help you out in case you need extra pointers
    </p>
    <p>
      Finally, you can use the{' '}
      <a href="https://community.webiny.com/">community forum</a> to ask other
      members for help, or in case you are a paid customer, you are welcome to
      contact our support team which is always glad to help a member in need.
    </p>
  </React.Fragment>
);

const hereToHost = (
  <React.Fragment>
    <p>
      To host Webiny you need a MySQL database server, NodeJs server, and a
      generic webserver to serve static assets.
    </p>
    <p>
      We do provide a <strong>free hosting</strong> enviroment with
      pre-installed Webiny instances.{' '}
      <Link to="/pricing">Click here to get started.</Link>
    </p>
  </React.Fragment>
);

const canIBuildCustom = (
  <React.Fragment>
    <p>
      Let's answer it this way. We've build the CMS module for Webiny to
      showcase the power of the underlying technology.
    </p>
    <p>
      Webiny features numerous modules that you as a developer can leverage when
      creating a custom app.
      Some examples of these modules
      are: ORM, GraphQL API layer, security, user management,
      translations numerous React UI components and many more.
    </p>
    <p>
      For the full list and detailed guides check our{' '}
      <a href="https://docs.webiny.com/reference-manual">reference manual</a>.
    </p>
  </React.Fragment>
);

const howToSupport = (
  <React.Fragment>
    <p>
      As with many open source projects, their fate depends on the people
      supporting the project and ensuring its future development.
    </p>
    <p>
      The best way to support our project is by subscribing to a{' '}
      <Link to="/pricing">paid package</Link>. This ensures a steady revenue
      flow, so our engineers can keep the lights on and new features coming out.
    </p>
    <p>
      Another way to support the project is by becoming a contributor. To learn
      more about how to contribute, checkout{' '}
      <a href="https://docs.webiny.com/contribution-guide">this page</a>.
    </p>
  </React.Fragment>
);

class Faq extends React.Component {
  state = {
    questions: [
      {
        question: 'Is Webiny free?',
        answer: isItFree,
      },
      {
        question: 'Can I use Webiny to build a website?',
        answer: canIUseWebiny,
      },
      {
        question: 'Do I need a lot of time to learn how to use Webiny?',
        answer: howHard,
      },
      {
        question: 'Where can I host Webiny?',
        answer: hereToHost,
      },
      {
        question: 'Can I build custom apps and modules with Webiny?',
        answer: canIBuildCustom,
      },
      {
        question: 'How can I support the project?',
        answer: howToSupport,
      },
    ],
  };
  render () {
    return (
      <FaqContainer>
        <div>
          <FaqComponent
            title="Frequently Asked Questions"
            questions={this.state.questions}
          />
        </div>
        <Link className={additionalFaq} to="/contact-us">
          Additional Questions <img alt="arrow" src={arrowFaq} />
        </Link>
      </FaqContainer>
    );
  }
}

export default Faq;
