import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import Link from 'gatsby-link';
import ContentContainer from '../../ui/content-container';

const sectionStyle = css (
  {
    backgroundColor: theme.color.lightGray,
    paddingBottom: 25,
  },
  mq ({
    paddingTop: [50, 50],
  })
);

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

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginBottom: 0,
    borderRadius: 2,
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 50],
    border: ['none', '1px solid ' + theme.color.darkGray],
  })
);

const Cell = styled ('div') (
  {
    backgroundColor: theme.color.white,
    boxShadow: 'rgba(46, 41, 51, 0.08) 2px 2px 2px, rgba(71, 63, 79, 0.08) 2px 2px 4px',
    borderRadius: 2,
    padding: '0 25px 10px 25px',
    alignItems: 'center',
    boxSizing: 'border-box',
    textAlign: 'center',
    flexBasis: '100%',
    marginRight: 40,
    display: 'flex',
    flexDirection: 'row',
    '&:last-child': {
      marginRight: '0 !important',
    },
    a: {
      color: theme.color.primaryDark,
    },
  },
  mq ({
    width: ['100%', 300],
  })
);

const Number = styled ('h3') ({
  fontSize: 96,
  width: 100,
  lineHeight: '100px',
  marginBottom: 0,
  marginTop: 0,
  textAlign: 'left',
  marginLeft: 10,
});

const Text = styled ('p') ({
  fontSize: 18,
  width: 200,
  textAlign: 'left',
  fontWeight: theme.fontWeight.semiBold,
  marginTop: 5,
  marginBottom: 0,
  '.orange': {
    color: theme.color.primaryDark,
  },
});

class WhatCanYouDo extends React.Component {
  render () {
    return (
      <section {...this.props} className={sectionStyle}>
        <ContentContainer>
          <SubTitle>Get started with Webiny in minutes</SubTitle>
          <SubText>
            Kick start your next project as quickly as 1, 2, 3
          </SubText>
          <Grid>
            <Cell>
              <Number>1.</Number>
              <Text>
                <a
                  href="https://docs.webiny.com/docs/developer-tutorials/local-setup"
                  target="_blank"
                >
                  Install Webiny locally using the CLI
                </a>
              </Text>
            </Cell>
            <Cell>
              <Number>2.</Number>
              <Text>
                <Link to="/pricing">
                  Create an account and get your API token
                </Link>
              </Text>
            </Cell>
            <Cell>
              <Number>3.</Number>
              <Text>
                <a
                  href="https://docs.webiny.com/docs/developer-tutorials/deploy-local-project"
                  target="_blank"
                >
                  Using the CLI deploy your project to Webiny Serverless Cloud
                </a>
              </Text>
            </Cell>
          </Grid>
        </ContentContainer>
      </section>
    );
  }
}

export default WhatCanYouDo;
