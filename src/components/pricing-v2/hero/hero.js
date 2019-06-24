import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import {css} from 'emotion';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Tooltip from '../../ui/tooltip';

import heroBg from './assets/pricing-hero-bg.svg';
import pricingBullet from './assets/pricing-bullet.svg';

const Hero = styled ('section') (
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat center top',
    color: '#fff',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  mq ({
    padding: ['100px 20px 25px', '120px 0 25px'],
    height: ['auto', '700px'],
    minHeight: ['auto', 400],
    maxHeight: ['auto', 768],
    marginBottom: [50, 50],
    backgroundSize: ['cover'],
    backgroundPosition: ['top', 'top', 'bottom'],
  })
);

const Title = styled ('h1') ({
  fontSize: theme.fontSize.h1,
  fontWeight: theme.fontWeight.semiBold,
  marginBottom: 25,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.white,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq ({
    margin: ['20px 20px', '0 20% 40px 20%'],
  })
);

const PricingBoxWrapper = styled ('div') ({
  position: 'relative',
  paddingTop: 85,
});

const PricingBox = styled ('div') (
  {
    background: theme.color.white,
    boxShadow: '0 2px 40px 10px rgba(152,152,152,0.50)',
    borderRadius: 8,
    boxSizing: 'border-box',
    maxWidth: 700,
    margin: '0 auto',
    position: 'relative',
    color: theme.color.black,
  },
  mq ({
    padding: ['125px 25px 25px 25px', '85px 30px 50px'],
  })
);

const ReasonWrapper = styled ('div') (
  {
    justifyContent: 'space-evenly',
    marginBottom: 0,
  },
  mq ({
    display: ['block', 'flex'],
  })
);

const ReasonsList = styled ('ul') (
  {},
  mq ({
    width: ['100%', '40%'],
    margin: ['0 0 15px 0', 0],
  })
);

const ReasonsItem = styled ('li') (
  {
    listStyle: 'none',
    paddingLeft: 40,
    marginBottom: 15,
    paddingRight: 0,
    textAlign: 'left',
    cursor: 'pointer',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  mq ({
    background: [
      'url(' + pricingBullet + ') no-repeat left 2px',
      'url(' + pricingBullet + ') no-repeat left 2px',
    ],
  })
);

const reasonsItemRight = css (
  {},
  mq ({
    background: [
      'url(' + pricingBullet + ') no-repeat left 2px',
      'url(' + pricingBullet + ') no-repeat right 2px',
    ],
    textAlign: ['left', 'right'],
    paddingLeft: [40, 0],
    paddingRight: [0, 40],
  })
);

const BoxTitle = styled ('div') (
  {
    textTransform: 'uppercase',
    color: theme.color.white,
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.semiBold,
    backgroundColor: theme.color.secondaryDark,
    padding: 15,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    boxShadow: '0 5px 2px 0 #fff',
    borderRadius: 2,
    small: {
      display: 'block',
      fontSize: 12,
    },
  },
  mq ({
    top: [-60, -30],
  })
);

export default ({children, ...props}) => (
  <Hero {...props}>
    <ContentContainer>
      <Title>Simple and Flexible Pricing</Title>
      <SubText>
        No matter if you start with a small or a large project, you can scale up and down depending on your usage.
        {' '}
        Our pricing tiers automatically adjust with your requirements.
      </SubText>
      <PricingBoxWrapper>
        <PricingBox>
          <BoxTitle>
            Included with every package
            <small>Hover over items for more detail</small>
          </BoxTitle>
          <ReasonWrapper>
            <ReasonsList>
              <ReasonsItem
                className={reasonsItemRight}
                data-tip
                data-for="users-and-roles"
              >
                Unlimited users & roles
              </ReasonsItem>
              <ReasonsItem
                className={reasonsItemRight}
                data-tip
                data-for="pages-and-forms"
              >
                Unlimited pages & forms
              </ReasonsItem>
              <ReasonsItem
                className={reasonsItemRight}
                data-tip
                data-for="content-types"
              >
                Unlimited content types
              </ReasonsItem>
              <ReasonsItem
                className={reasonsItemRight}
                data-tip
                data-for="records"
              >
                Unlimited records
              </ReasonsItem>
            </ReasonsList>
            <ReasonsList>
              <ReasonsItem data-tip data-for="locales">
                Unlimited locales
              </ReasonsItem>
              <ReasonsItem data-tip data-for="file-storage">
                Unlimited file storage
              </ReasonsItem>
              <ReasonsItem data-tip data-for="domain-ssl">
                Custom domain with SSL
              </ReasonsItem>
              <ReasonsItem data-tip data-for="cdn">
                Content delivery network
              </ReasonsItem>
            </ReasonsList>
          </ReasonWrapper>
        </PricingBox>

        <Tooltip id="users-and-roles">
          Each website can have as many users and as many security roles, it requires.
        </Tooltip>
        <Tooltip id="pages-and-forms">
          No limit on how many pages and forms you can build and host.
        </Tooltip>
        <Tooltip id="content-types">
          In the headless module, you can create any number of content types your application needs.
        </Tooltip>
        <Tooltip id="records">
          No limit is set on how many records you can add to your headless content types.
        </Tooltip>
        <Tooltip id="locales">
          Add as many locales as you wish.
        </Tooltip>
        <Tooltip id="file-storage">
          Upload images and other files, there is no limit on how much space you can use.
        </Tooltip>
        <Tooltip id="domain-ssl">
          Add your custom domain, and we'll provide you with an SSL certificate.
        </Tooltip>
        <Tooltip id="cdn">
          We partner with Cloudflare, so each Webiny website gets a free CDN to boost you site's performance.
        </Tooltip>
      </PricingBoxWrapper>
    </ContentContainer>
  </Hero>
);
