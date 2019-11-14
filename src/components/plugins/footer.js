import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import ContentContainer from '../ui/content-container';
import Button from '../ui/button';

const Section = styled ('section') (
  {
    backgroundColor: theme.color.lightGray,
    borderTop: '1px solid ' + theme.color.darkGray,
  },
  mq ({
    padding: [25, 50],
  })
);

const flexContainer = css (
  {
    display: 'flex',
    justifyContent: 'center',
  },
  mq ({
    flexDirection: ['column', 'row'],
  })
);

const Wrapper = styled ('div') (
  {
    background: theme.color.white,
    border: '1px solid #E6E6E6',
    boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
    borderRadius: 5,
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    h4: {
      marginTop: 0,
    },
  },
  mq ({
    width: ['100%', '50%'],
    display: ['block', 'flex'],
    padding: [20, '50px'],
    textAlign: ['center', 'left'],
    marginBottom: [25, 0],
    '&:first-child': {
      marginRight: [0, 25],
    },
    '&:last-child': {
      marginLeft: [0, 25],
    },
  })
);

const Text = styled ('p') ({
  fontSize: 18,
  fontWeight: theme.fontWeight.regular,
  marginBottom: 20,
  textAlign: 'center',
});

class Footer extends React.Component {
  render () {
    return (
      <Section>
        <ContentContainer className={flexContainer}>
          <Wrapper>
            <h4>Want to submit a plugin?</h4>
            <Text>
              That's great, we love to have it!
              <br />
              We have prepared a quick and easy to follow guide that explains how to add your plugin to the list.
            </Text>
            <Button
              type="primary"
              link="https://docs.webiny.com/docs/plugins/adding-your-plugin"
            >
              Add Plugin Guide
            </Button>
          </Wrapper>
        </ContentContainer>
      </Section>
    );
  }
}

export default Footer;
