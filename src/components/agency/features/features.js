import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../../ui/content-container';
import ContactUs from '../../ui/contact-us';

import prioritySupport from './assets/priority-support.jpg';
import dedicatedDeployment from './assets/dedicated-deployment.jpg';
import teamAccount from './assets/team-account.jpg';
import increaseValue from './assets/increase-value.jpg';
import professionalServices from './assets/professional-services.jpg';
import contactBg from './assets/contact-bg.svg';

const container = css (
  {},
  mq ({
    width: ['100%', 800],
  })
);

const Box = styled ('div') (
  {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  mq ({
    flexWrap: ['wrap', 'nowrap'],
    textAlign: ['center', 'left'],
    margin: ['0px 20px', '0 0 100px 0'],
  })
);

const zebra = css ({}, mq ({flexDirection: ['column-reverse', 'row']}));

const BoxInner = styled ('div') (
  {},
  mq ({
    width: ['100%', '50%'],
  })
);

const BoxTitle = styled ('h3') ({
  fontSize: theme.fontSize.h3,
  fontWeight: theme.fontWeight.semiBold,
  marginBottom: 25,
});

const Desc = styled ('p') ({
  fontSize: theme.fontSize.paragraph,
  lineHeight: '200%',
});

const Image = styled ('img') ({
  height: 250,
});

const alignRight = css (
  {},
  mq ({
    textAlign: ['center', 'right'],
  })
);

const ContactBlock = styled ('div') ({
  background: 'url(' + contactBg + ') no-repeat center top',
  backgroundSize: 'cover',
  textAlign: 'center',
  padding: 50,
});

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.white,
  textAlign: 'center',
  paddingTop: 25,
  marginTop: 0,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.white,
    textAlign: 'center',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq ({
    margin: ['0 20px', '0 auto 40px auto'],
    width: ['100%', '400px'],
  })
);

export default ({children, ...props}) => (
  <React.Fragment>
    <ContentContainer className={container}>
      <Box>
        <BoxInner>
          <BoxTitle>Priority support</BoxTitle>
          <Desc>
            We know your clients count on you to resolve any problems they might have in
            the shortest possible time. Having priority support when contacting us
            ensures your tickets get addressed with the same expectation.
          </Desc>
        </BoxInner>
        <BoxInner className={alignRight}>
          <Image src={prioritySupport} alt="Priority support" />
        </BoxInner>
      </Box>

      <Box className={zebra}>
        <BoxInner>
          <Image src={dedicatedDeployment} alt="Dedicated deployment" />
        </BoxInner>
        <BoxInner>
          <BoxTitle>Dedicated deployment</BoxTitle>
          <Desc>
            All your deployments will go to an AWS region of your choice. You
            environment will be isolated from others, making sure there are no noisy
            neighbors interfering with your client websites.
          </Desc>
        </BoxInner>
      </Box>

      <Box>
        <BoxInner>
          <BoxTitle>Team account</BoxTitle>
          <Desc>
            Webiny allows your team to have master account, for controlling access to
            all websites, as well as handling billing. Under each website you can have
            individual users with tailor-made roles and permissions, giving you
            fine-grain control over access rights.
          </Desc>
        </BoxInner>
        <BoxInner className={alignRight}>
          <Image src={teamAccount} alt="Team account" />
        </BoxInner>
      </Box>

      <Box className={zebra}>
        <BoxInner>
          <Image src={increaseValue} alt="Increased value" />
        </BoxInner>
        <BoxInner>
          <BoxTitle>Increase your value, and bottom line</BoxTitle>
          <Desc>
            Removing the technology worry and complexity out of the way, enables you to
            create additional value for your clients, cut production time and increase
            your profitability.
          </Desc>
        </BoxInner>
      </Box>

      <Box>
        <BoxInner>
          <BoxTitle>Professional Services</BoxTitle>
          <Desc>
            Working on a larger project and need access to Webiny experts? We got you
            covered, as an agency you have access to the developers and architects that
            built Webiny. There is no better equipped team to help you out.
          </Desc>
        </BoxInner>
        <BoxInner className={alignRight}>
          <Image src={professionalServices} alt="Professional Services" />
        </BoxInner>
      </Box>
    </ContentContainer>
    <ContactBlock>
      <SubTitle>Let's Work Together</SubTitle>
      <SubText>
        Let us know about your agency, type or projects you usually do, and any ideas you
        want to share for us working together.
      </SubText>
      <ContactUs placeholder="Your message" />
    </ContactBlock>
  </React.Fragment>
);
