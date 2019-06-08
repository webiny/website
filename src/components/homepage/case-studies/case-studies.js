import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import mq from '../../utils/breakpoints';
import theme from '../../utils/theme';
import ContentContainer from '../../ui/content-container';
import Testimonial from '../../ui/testimonial';

import logoCocaCola from './assets/coca-cola-logo.svg';
import logoAutodesk from './assets/autodesk-logo.png';
import logoSeattleTimes from './assets/the-seattle-times-logo.svg';
import logoAmazon from './assets/amazon-logo.svg';

const sectionStyle = css ({
  marginBottom: 100,
});

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

class CaseStudies extends React.Component {
  state = {
    items: [
      {
        image: logoAmazon,
        quote: 'Serverless is the future of development.',
        name: 'Werner Vogels',
        position: 'Chief Technology Officer',
        reference: 'https://www.youtube.com/watch?v=XXbF6cUIgfs',
        company: 'Amazon',
      },
      {
        image: logoCocaCola,
        quote: '65% cost savings at 30M lambda hits per month. 99% cost savings at 1M hits per month.',
        name: 'Michael Connor',
        position: 'Director of Software, Tools and Innovation',
        reference: 'https://www.youtube.com/watch?v=yErmil00DYs',
        company: 'Coca Cola',
      },
      {
        image: logoAutodesk,
        quote: 'Going serverless with AWS Lambda relieves us from managing servers and lets us concentrate on building features.',
        name: 'Alan Williams',
        position: 'Enterprise Architect',
        reference: 'https://aws.amazon.com/solutions/case-studies/autodesk-serverless/',
        company: 'Autodesk',
      },
      {
        image: logoSeattleTimes,
        quote: 'Before, if we needed an image resized in 10 different sizes, it would happen serially. With AWS Lambda, all 10 images get created at the same time, so it’s quite a bit faster and it involves no server maintenance.',
        name: 'Rob Grutko',
        position: 'Director of Technology',
        reference: 'https://aws.amazon.com/solutions/case-studies/the-seattle-times/',
        company: 'The Seattle Times',
      },
    ],
  };

  render () {
    return (
      <section {...this.props} className={sectionStyle}>
        <SubTitle>
          Serverless case studies
        </SubTitle>
        <SubText>
          These are some of the industry case-studies showcasing companies and what they achived by migrating towards a serverless infrastructure and technology.
        </SubText>
        <ContentContainer>
          <Testimonial items={this.state.items} />
        </ContentContainer>
      </section>
    );
  }
}

export default CaseStudies;
