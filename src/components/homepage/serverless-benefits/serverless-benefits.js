import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../../ui/content-container';

import awsLogo from './assets/aws-logo.svg';
import apiGatewayLogo from './assets/aws-api-gateway.svg';
import cloudFrontLogo from './assets/aws-cloudfront.svg';
import cognitoLogo from './assets/aws-cognito.svg';
import lambdaLogo from './assets/aws-lambda.svg';
import s3Logo from './assets/aws-s3.svg';

const wrapperClass = css (
  {
    backgroundColor: theme.color.white,
    backgroundSize: 'cover',
  },
  mq ({
    padding: ['0 15px 25px 15px', '25px 0 50px 0'],
  })
);

const SubTitle = styled ('h2') ({
  fontSize: 42,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  maxWidth: 750,
  margin: '25px auto',
});

const BenefitsList = styled ('div') (
  {
    position: 'relative',
  },
  mq ({
    width: ['auto', '100%'],
    height: ['auto', 600],
    marginLeft: [0, 35],
  })
);

const BenefitBox = styled ('div') (
  {
    background: theme.color.white,
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.20)',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    transition: 'box-shadow 0.5s ease',
    cursor: 'default',
    '&:hover': {
      boxShadow: '0 0 10px 4px rgba(0,0,0,0.20)',
      img: {
        filter: 'grayscale(0)',
      },
    },
    h4: {
      margin: 0,
    },
    img: {
      maxWidth: 45,
      maxHeight: 45,
      width: '100%',
      height: 'auto',
      marginRight: 25,
      filter: 'grayscale(75%)',
      transition: 'all 0.5s ease',
    },
    '&.b1': {
      top: 75,
      left: 0,
    },
    '&.b2': {
      top: 75,
      left: 500,
    },
    '&.b3': {
      top: 250,
      right: 65,
    },
    '&.b4': {
      top: 250,
      right: 565,
    },
    '&.b5': {
      top: 425,
      left: 0,
    },
    '&.b6': {
      top: 425,
      left: 500,
    },
  },
  mq ({
    width: ['auto', 335],
    position: ['initial', 'absolute'],
    marginBottom: [25, 0],
  })
);

class ServerlessBenefits extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>
          Using Webiny You Get the Full Spectrum
          of Serverless Benefits Out of the Box
        </SubTitle>

        <ContentContainer>
          <BenefitsList>
            <BenefitBox className={'b1'}>
              <img src={awsLogo} alt="AWS Logo" />
              <h4>High-availability and fault tolerance built in</h4>
            </BenefitBox>
            <BenefitBox className={'b2'}>
              <img src={s3Logo} alt="AWS Logo" />
              <h4>99.999999999% (11 9’s) of data durability</h4>
            </BenefitBox>
            <BenefitBox className={'b3'}>
              <img src={lambdaLogo} alt="AWS Logo" />
              <h4>Event-driven scalability - pay for what you use</h4>
            </BenefitBox>
            <BenefitBox className={'b4'}>
              <img src={cognitoLogo} alt="AWS Logo" />
              <h4>Enterprise-grade secure and scalable ACL</h4>
            </BenefitBox>
            <BenefitBox className={'b5'}>
              <img src={cloudFrontLogo} alt="AWS Logo" />
              <h4>Great performance using a global CDN</h4>
            </BenefitBox>
            <BenefitBox className={'b6'}>
              <img src={apiGatewayLogo} alt="AWS Logo" />
              <h4>DDoS Protection of your<br />APIs</h4>
            </BenefitBox>

          </BenefitsList>
        </ContentContainer>
      </section>
    );
  }
}

export default ServerlessBenefits;
