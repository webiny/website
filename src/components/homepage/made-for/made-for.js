import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Tabs from '../../ui/tabs';

import Developers from './developers';

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 25,
  marginBottom: 75,
});

class MadeFor extends React.Component {
  state = {
    tabs: [
      {
        title: 'Developers',
        subTitle: 'Create websites and applications is less time. Webiny provides you with all tools you need.',
        content: <Developers />,
      },
      {
        title: 'Digital agencies',
        subTitle: 'We are your partner, not just a new technology. We are here to build a long lasting relationships, with real humans involved.',
        content: '<div>test content2 </div>',
      },
      {
        title: 'Enterprises',
        subTitle: 'Security, SSO, dedicated deployments, scale, customization, training, consultation and priority support. Webiny has the offering that your corporation needs to feel safe.',
        content: '<div>test content3</div>',
      },
    ],
  };

  render () {
    return (
      <section {...this.props}>
        <SubTitle>Webiny is made for ...</SubTitle>
        <ContentContainer>
          <Tabs items={this.state.tabs} />
        </ContentContainer>
      </section>
    );
  }
}

export default MadeFor;
