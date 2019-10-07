import React from 'react';
import styled from 'react-emotion';
import Body from './body';

const Bold = styled ('span') ({
  fontWeight: 600,
});

const List = styled ('dl') ({
  dt: {
    fontWeight: 600,
  },
  dd: {
    paddingLeft: 20,
    marginBottom: 10,
  },
});

export default ({children, ...props}) => (
  <Body title={'Telemetry'}>
    <div>
      <h2>Telemetry</h2>
      <o>Last updated 7th of October, 2019</o>
      <h3>What is it?</h3>
      <p>
        Webiny telemetry is a service that collects
        {' '}
        <Bold>anonymous</Bold>
        {' '}
        usage information.
      </p>
      <p>
        We highly value your privacy and have created this page to be fully transparent about the information we collect, how we use it, and what options you have to opt-out. We just want to add that this data doesn't reveal a single identifiable information of you as a private individual. The data is used in an honest way and with a single purpose - improving Webiny as a product for yourself and the wider community.
      </p>
      <h3>What information is collected?</h3>
      <List>
        <dt>
          1) Number of deployments - each time you invoke
          {' '}
          <code>sls</code> command inside a Webiny project folder
        </dt>
        <dd>Why: So we know how actively the Webiny library is used.</dd>
        <dt>
          2) Number of new project created - each time you invoke
          {' '}
          <code>webiny create-project</code> command
        </dt>
        <dd>Why: So we know how many projects are created.</dd>
        <dt>3) List of Webiny components that were deployed</dt>
        <dd>Why: So we know which Webiny components are used the most.</dd>
        <dt>4) Timestamp</dt>
        <dd>
          Why: So we can track the trends between when different operations are invoked.
        </dd>
        <dt>5) Current Webiny version</dt>
        <dd>
          Why: It's important to determine how backwards compatible new releases should be, as well as providing a migration path.
        </dd>
      </List>
      <h3>What is the information used for?</h3>
      <p>
        We use the information strictly internally for improving the product and understanding the usage patterns.
        This helps us to build an overall better product, prioritize the important features, and fix the most urgent bugs.
        {' '}
      </p>
      <h3>Can I opt-out?</h3>
      <p>
        Yes - in the terminal, just run the command
        {' '}
        <code>webiny disable-tracking</code>
        .<br />
        This disables tracking across all your Webiny projects.
      </p>
      <h3>What about sensitive data? (e.g. secrets)</h3>
      <o>We do not track anything other than what is specified above.</o>
      <h3>I have a comment or more questions, where can I send it to?</h3>
      <p>Please send all your inquiries to privacy@webiny.com</p>
    </div>
  </Body>
);
