import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Button from '../../ui/button';

import buttonArrow from './assets/button-arrow.svg';

const Section = styled ('section') (
  {
    backgroundColor: theme.color.lightGray,
  },
  mq ({
    padding: [25, 50],
  })
);

const Wrapper = styled ('div') (
  {
    background: theme.color.white,
    border: '1px solid #E6E6E6',
    boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mq ({
    display: ['block', 'flex'],
    padding: [20, '25px 50px'],
    textAlign: ['center', 'left'],
  })
);

const Text = styled ('p') (
  {
    fontSize: 18,
    fontWeight: theme.fontWeight.regular,
  },
  mq ({
    marginBottom: [20, 0],
  })
);

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.semiBold,
});

const Arrow = styled ('img') ({
  height: 9,
  marginLeft: 5,
});

class OpenSource extends React.Component {
  render () {
    return (
      <Section>
        <ContentContainer>
          <Wrapper>
            <Text>
              <Bold>Prefer the open source version?</Bold> You can install
              Webiny on your own servers and self manage it.
            </Text>
            <Button type="dark">
              Open source <Arrow alt="arrow" src={buttonArrow} />
            </Button>
          </Wrapper>
        </ContentContainer>
      </Section>
    );
  }
}

export default OpenSource;
