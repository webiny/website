import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../../ui/content-container';

import background from './assets/bg.svg';
import imgMatrix from './assets/webiny-compare-matrix.png';

const wrapperClass = css (
  {
    background: 'url(' + background + ') no-repeat left top',
    backgroundSize: 'contain',
  },
  mq ({
    marginTop: [0, -80, -150],
    paddingTop: [0, 150],
    backgroundSize: ['cover', 'contain', 'cover'],
    backgroundColor: ['#F7F7F7', 'transparent'],
  })
);

const matrixWrapper = css (
  {
    textAlign: 'center',
    padding: '50px 0',
    width: '100% !important',
    backgroundColor: '#F7F7F7',
  },
  mq ({
    img: {
      width: ['100%', '1200px'],
    },
  })
);

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  margin: '10px auto 25px auto',
  maxWidth: 650,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    maxWidth: 700,
  },
  mq ({
    margin: ['20px', '0 auto 75px auto'],
  })
);

class Components extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>
          This is how we compare against other managed solutions
        </SubTitle>
        <SubText>
          Before we built Webiny, we ran a web agency for several years,
          and in that time we tried every CMS under the sun, but we were not happy with any of them. That’s why we decided to create Webiny.
        </SubText>

        <ContentContainer className={matrixWrapper}>
          <img src={imgMatrix} />
        </ContentContainer>
      </section>
    );
  }
}

export default Components;
