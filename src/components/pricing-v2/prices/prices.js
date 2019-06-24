import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import {css} from 'emotion';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Tooltip from '../../ui/tooltip';
import Button from '../../ui/button';
import Link from 'gatsby-link';

import arrow from './assets/gs-btn-arrow.svg';
import arrowBlack from './assets/gs-btn-arrow-black.svg';
import freelancerBg from './assets/pricing-freelancer.png';
import agencyBg from './assets/pricing-agency.png';
import enterpriseBg from './assets/pricing-enterprise.png';
import tooltipBg from './assets/round-help-24px.svg';
import pricingBullet from './assets/pricing-bullet.svg';

const Title = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  marginBottom: 25,
  textAlign: 'center',
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq ({
    margin: ['20px 20px', '0 20% 40px 20%'],
  })
);

const PricingWrapper = styled ('div') (
  {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  mq ({
    flexDirection: ['column', 'row'],
    alignItems: ['center', 'flex-start'],
  })
);

const Package = styled ('div') (
  {
    height: 'auto',
    borderRadius: 2,
    boxShadow: '0 2px 20px 5px rgba(152,152,152,0.50)',
    backgroundSize: '101%',
    backgroundPosition: '-2px 0px',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fff',
    padding: '45px 25px 25px',
    boxSizing: 'border-box',
    width: 350,
    '&.freelancer': {
      backgroundImage: 'url("' + freelancerBg + '")',
    },
    '&.agency': {
      backgroundImage: 'url("' + agencyBg + '")',
    },
    '&.enterprise': {
      backgroundImage: 'url("' + enterpriseBg + '")',
      backgroundPosition: '-2px -2px',
      backgroundColor: '#282B33',
      color: '#fff !important',
      'ul li': {
        backgroundImage: 'none !important',
        borderColor: 'gray',
      },
    },
    small: {
      textAlign: 'center',
      display: 'inline-block',
      width: '100%',
    },
  },
  mq ({
    marginBottom: ['25px', 0],
  })
);

const PackageTitle = styled ('h3') ({
  fontSize: 42,
  fontWeight: theme.fontWeight.semiBold,
  textAlign: 'center',
  margin: '15px 25px',
});

const PackageDescription = styled ('div') ({
  fontSize: 18,
  textAlign: 'center',
});

const PackageFeatures = styled ('ul') ({
  padding: 0,
  margin: '50px 0 15px 0',
  listStyle: 'none',
  li: {
    textAlign: 'center',
    fontSize: 18,
    position: 'relative',
    paddingBottom: 15,
    borderBottom: '1px solid #D8D8D8',
    background: 'url(' + tooltipBg + ') no-repeat right top',
    cursor: 'pointer',
    marginBottom: 15,
  },
});

const BetaBoxWrapper = styled ('div') ({
  boxSizing: 'border-box',
  padding: '10px 00px 0px 0px',
  marginBottom: '-15px',
});

const BetaBox = styled ('div') ({
  background: '#FEF7D6',
  border: '2px solid #FFE564',
  borderRadius: 5,
  width: '100%',
  color: '#4A4A4A',
  fontSize: '14px',
  lineHeight: '140%',
  fontWeight: 'normal',
  position: 'relative',
  boxSizing: 'border-box',
  padding: '10px 7px 10px 60px',
  marginTop: 0,
  minHeight: 80,
  textAlign: 'left',
  '.questionMark': {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: theme.fontWeight.bold,
    top: 0,
    left: 0,
    height: '100%',
    width: 50,
    background: '#FFE564',
    fontSize: 64,
    color: '#FFFFFF',
    lineHeight: '120%',
  },
});

const Price = styled ('div') ({
  fontSize: 72,
  fontWeight: theme.fontWeight.semiBold,
  textAlign: 'center',
  margin: '35px 0 0 0',
  lineHeight: '100%',
  '&.quote': {
    fontSize: 52,
    lineHeight: '135%',
  },
});

const PriceDescription = styled ('div') ({
  fontSize: 18,
  textAlign: 'center',
  marginBottom: 15,
});

const PriceFrom = styled ('div') ({
  fontSize: 18,
  textAlign: 'center',
  marginBottom: -35,
  marginTop: 25,
});

const button = css (
  {
    marginTop: 15,
    boxShadow: '0 2px 3px 0 rgba(160,160,160,0.50)',
    flexDirection: 'column',
    '> img': {
      marginLeft: 10,
    },
  },
  mq ({
    padding: [15, '14px 75px !important'],
  })
);

const Arrow = styled ('img') ({
  height: 9,
  marginLeft: 5,
});

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.bold,
});

const ExtraWrapper = styled ('div') (
  {
    margin: '0 auto 50px auto',
    textAlign: 'center',
    a: {
      color: theme.color.primaryDark,
    },
  },
  mq ({
    width: ['auto', 650],
  })
);

const ExtraTitle = styled ('h3') ({
  fontSize: theme.fontSize.h3,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  marginTop: 50,
  textAlign: 'center',
});

const ExtraReasonsList = styled ('ul') (
  {
    justifyContent: 'space-between',
    padding: '10px 0',
    boxSizing: 'border-box',
  },
  mq ({
    display: ['block', 'flex'],
    margin: ['0 25px 25px 25px', '25px auto'],
    textAlign: ['center', 'left'],
    width: ['auto', '100%'],
  })
);

const ExtraReasonsListItem = styled ('li') ({
  listStyle: 'none',
  textAlign: 'left',
  marginBottom: 15,
  background: 'url(' + pricingBullet + ') no-repeat left 2px',
  paddingLeft: 40,
  cursor: 'pointer',
  '&:last-child': {
    marginBottom: 0,
  },
});

export default ({children, ...props}) => (
  <ContentContainer>
    <Title>Paid Packages</Title>
    <SubText>
      These are some of our options to get you started.
    </SubText>
    <PricingWrapper>
      <Package className={'freelancer'}>
        <PackageTitle>Freelancer</PackageTitle>
        <PackageDescription>
          Best for individual developers and smaller projects
        </PackageDescription>
        <PriceFrom>{'\u00A0'}</PriceFrom>
        <Price>$29</Price>
        <PriceDescription>per website per month</PriceDescription>
        <Button
          className={button}
          fullWidth={true}
          type="primary"
          link="https://cloud.webiny.com/"
        >
          <container>
            Get Started
            <Arrow alt="Get Started" src={arrow} />
          </container>
        </Button>
        <small>(No credit card required)</small>
        <BetaBoxWrapper>
          <BetaBox>
            <div className={'questionMark'}>!</div>
            <strong>Beta Period:</strong> During the beta, this package is
            available free of charge. No credit card is required, later you can
            decide if you want to upgrade to the paid package.
          </BetaBox>
        </BetaBoxWrapper>

        <PackageFeatures>
          <li data-tip data-for="freelancer-api-calls">50.000 API Call</li>
          <li data-tip data-for="freelancer-db-storage">
            250MB Database Storage
          </li>
          <li data-tip data-for="freelancer-deployments">100 Deployments</li>
          <li data-tip data-for="freelancer-function">1 Serverless Function</li>
          <li data-tip data-for="freelancer-support">Standard Support</li>
        </PackageFeatures>
      </Package>
      <Package className={'agency'}>
        <PackageTitle>Agency</PackageTitle>
        <PackageDescription>
          For agencies working on medium to large projects that require extra support
        </PackageDescription>
        <PriceFrom>From</PriceFrom>
        <Price>$499</Price>
        <PriceDescription>per website per month</PriceDescription>
        <Button
          className={button}
          fullWidth={true}
          type="outlineDark"
          link="/contact-us"
        >
          <container>
            Talk to us
            <Arrow alt="Get Started" src={arrowBlack} />
          </container>
        </Button>
        <PackageFeatures>
          <li data-tip data-for="agency-api-calls">1.000.000 API Call</li>
          <li data-tip data-for="agency-db-storage">1GB Database Storage</li>
          <li data-tip data-for="agency-deployments">1.000 Deployments</li>
          <li data-tip data-for="agency-functions">5 Serverless Function</li>
          <li data-tip data-for="agency-support">Priority Support</li>
          <li data-tip data-for="agency-consultation">Consultation Service</li>
          <li data-tip data-for="agency-band-pricing">Band Pricing</li>
        </PackageFeatures>

      </Package>
      <Package className={'enterprise'}>
        <PackageTitle>Enterprise</PackageTitle>
        <PackageDescription>
          Aimed at corporations wanting a premium bespoke service
        </PackageDescription>
        <PriceFrom>{'\u00A0'}</PriceFrom>
        <Price className={'quote'}>Get a Quote</Price>
        <PriceDescription>{'\u00A0'}</PriceDescription>
        <Button
          className={button}
          fullWidth={true}
          type="outline"
          link="/contact-us"
        >
          <container>
            Talk to us
            <Arrow alt="Get Started" src={arrow} />
          </container>
        </Button>
        <PackageFeatures>
          <li data-tip data-for="api-calls">Training & Onboarding</li>
          <li data-tip data-for="db-storage">
            Dedicated or Private Deployment
          </li>
          <li data-tip data-for="api-calls">Priority SLA Based-Support</li>
          <li data-tip data-for="api-calls">User Management API</li>
          <li data-tip data-for="api-calls">Consultation Service</li>
          <li data-tip data-for="api-calls">Band Pricing</li>
          <li data-tip data-for="api-calls">Account Management</li>
          <li data-tip data-for="api-calls">Custom Limits</li>
        </PackageFeatures>
      </Package>
    </PricingWrapper>

    <ExtraWrapper>
      <ExtraTitle>Extra usage: $39/package</ExtraTitle>
      <ExtraReasonsList>
        <ExtraReasonsListItem>
          <Bold>+100.000</Bold> API Calls
        </ExtraReasonsListItem>
        <ExtraReasonsListItem>
          <Bold>+1.000</Bold> Deployments
        </ExtraReasonsListItem>
        <ExtraReasonsListItem>
          <Bold>+250MB</Bold> DB Storage
        </ExtraReasonsListItem>
      </ExtraReasonsList>
      <p>
        For when you run out and need extra resources.
        The price is per usage-package, and you can limit the number of packages each website can consume.
        These packages do not expire and resources that have not been used, roll over to the next month.
      </p>
      <p>
        Each Webiny website is subject to our
        {' '}
        <a href="/fair-usage" target="_blank">Fair Usage Policy</a>
        .
      </p>
      <p>
        <Bold>Need help to decide?</Bold>
        {' '}
        Please
        {' '}
        <Link to="/contact-us">reach out to us</Link>
        , and our team will help you out.
      </p>
    </ExtraWrapper>

    <Tooltip id="freelancer-api-calls">
      Call your website APIs up to 50k times.
    </Tooltip>

    <Tooltip id="freelancer-db-storage">
      Your own database which can store up to 250MB of data and indexes.
      Note: file storage is  unlimited and is separate from DB storage.
    </Tooltip>

    <Tooltip id="freelancer-deployments">
      How many times you can deploy a new version of your function per month.
    </Tooltip>

    <Tooltip id="freelancer-function">
      You get one serverless function which includes the Webiny Core API.
      You can modify the API to fit your need.
    </Tooltip>

    <Tooltip id="freelancer-support">
      Standard email and chat support.
    </Tooltip>

    <Tooltip id="agency-api-calls">
      Call your website APIs up to 1 million times.
    </Tooltip>

    <Tooltip id="agency-db-storage">
      Your own database which can store up to 1GB of data and indexes.
      Note: file storage is  unlimited and is separate from DB storage.
    </Tooltip>

    <Tooltip id="agency-deployments">
      How many times you can deploy a new version of your function per month.
    </Tooltip>

    <Tooltip id="agency-functions">
      You get 5 serverless functions.
      One is used for the Webiny Core API, and the rest can host your custom APIs.
    </Tooltip>

    <Tooltip id="agency-support">
      Around the clock support team is available to address any issues you might report.
    </Tooltip>

    <Tooltip id="agency-consultation">
      The team that built Webiny and knows every line of code, can work with you and help you
      {' '}
      architect your application the right way, getting the maximum benefit out of Webiny.
    </Tooltip>

    <Tooltip id="agency-band-pricing">
      The more websites you onboard, the better price we can offer.
    </Tooltip>

  </ContentContainer>
);
