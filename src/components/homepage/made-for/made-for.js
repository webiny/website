import React from 'react';
import styled from 'react-emotion';
import mq from '../../utils/breakpoints';
import theme from '../../utils/theme';
import ContentContainer from '../../ui/content-container';
import Tabs from '../../ui/tabs';

import Developers from './developers';
import Agencies from './agencies';
import Enterprise from './enterprise';

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 0,
  marginTop: 25,
  marginBottom: 10,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq ({
    margin: ['0 20px', '0 20% 40px 20%'],
  })
);

class MadeFor extends React.Component {
  state = {
    tabs: [
      {
        title: 'Developers',
        subTitle: 'Create websites and applications in less time. Webiny provides you with all tools you need.',
        content: <Developers />,
      },
      {
        title: 'Digital agencies & partners',
        subTitle: 'We are your partner, not just a new technology. We are here to build a long lasting relationships, with real humans involved.',
        content: <Agencies />,
      },
      {
        title: 'Enterprises',
        subTitle: 'Security, SSO, dedicated deployments, scale, customization, training, consultation and priority support. Webiny has the offering that your corporation needs to feel safe.',
        content: <Enterprise />,
      },
    ],
  };

  render () {
    return (
      <section {...this.props}>
        <SubTitle>Webiny is made for ...</SubTitle>
        <SubText>
          We focus on the makers. Our purpose is to help you succeed.
        </SubText>
        <ContentContainer>
          <Tabs items={this.state.tabs} />
        </ContentContainer>
      </section>
    );
  }
}

export default MadeFor;
