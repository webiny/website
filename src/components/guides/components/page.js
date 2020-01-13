import React from 'react';
import styled from 'react-emotion';

import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

const PageWrapper = styled ('div') (
  {
    width: '100%',
    height: '100%',
    paddingTop: 150,
    paddingBottom: 200,
    backgroundColor: theme.color.lightGray,
    h1: {
      textAlign: 'center',
    },
    '.guide-content': {
      marginTop: -150,
    },
  },
  mq ({
    h1: {
      width: ['auto', 'calc(100% - 300px)'],
      marginLeft: [15, 300],
      marginRight: [15, 0],
    },
  })
);

class Page extends React.Component {
  render () {
    return (
      <PageWrapper>
        <h1>{this.props.title}</h1>
        <ContentContainer className="guide-content">
          {this.props.children}
        </ContentContainer>
      </PageWrapper>
    );
  }
}

export default Page;
