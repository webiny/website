import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import ReactTooltip from 'react-tooltip';

import pricingBullet from './assets/pricing-bullet.svg';
import arrow from './assets/gs-btn-arrow.svg';
import Button from '../../ui/button';

const maxWidth = css ({
  maxWidth: 750,
  marginBottom: 25,
});

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 25,
  marginTop: 0,
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
    margin: ['0 20px', '0 20% 40px 20%'],
  })
);

const Box = styled ('div') (
  {
    background: theme.color.white,
    boxShadow: '0 2px 40px 10px rgba(152,152,152,0.50)',
    borderRadius: 8,
    padding: 0,
    boxSizing: 'border-box',
  },
  mq ({
    display: ['block', 'flex'],
    margin: [20, '0 auto'],
  })
);

const Price = styled ('div') (
  {
    backgroundImage: 'linear-gradient(-135deg, #09E7D3 0%, #008BB6 68%)',
    borderTopLeftRadius: 8,
    fontSize: 80,
    color: theme.color.white,
    fontWeight: theme.fontWeight.bold,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end', //'center',
    lineHeight: '100%',
    boxSizing: 'border-box',
    'span.price': {
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: '""',
        left: '-20%',
        top: '50%',
        borderTop: '10px solid ' + theme.color.primaryDark,
        transform: 'rotate(-45deg)',
        width: 200,
      },
    },
  },
  mq ({
    width: ['100%', '50%'],
    borderBottomLeftRadius: [0, 8],
    borderTopRightRadius: [8, 0],
    padding: ['45px 0 25px 0', '0 0 25px 0'],
  })
);

const PriceSubText = styled ('span') ({
  fontSize: theme.fontSize.subText,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.white,
  lineHeight: '150%',
});

const ReasonsList = styled ('ul') (
  {
    width: '50%',
    boxSizing: 'border-box',
    padding: 25,
  },
  mq ({
    width: ['100%', '50%'],
  })
);

const ReasonsItem = styled ('li') ({
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

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.bold,
});

const ExtraTitle = styled ('h3') (
  {
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.semiBold,

    color: theme.color.black,
    marginTop: 50,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const ExtraReasonsList = css (
  {
    justifyContent: 'space-between',
    padding: '10px 0',
    boxSizing: 'border-box',
  },
  mq ({
    display: ['block', 'flex'],
    margin: ['0 25px 25px 25px', '0'],
    textAlign: ['center', 'left'],
    width: ['auto', '100%'],
  })
);

const BetaBoxWrapper = styled ('div') ({
  boxSizing: 'border-box',
  padding: '40px 10px 0px 10px',
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
  marginTop: 30,
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

const button = css (
  {
    boxShadow: '0 2px 3px 0 rgba(160,160,160,0.50)',
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

const TooltipContent = styled ('div') ({
  width: 150,
  textAlign: 'center',
});

class PaidPackage extends React.Component {
  render () {
    return (
      <ContentContainer className={maxWidth}>
        <Box>
          <Price>
            <span className="price">$49</span>
            <PriceSubText>/month</PriceSubText>
            <BetaBoxWrapper>
              <BetaBox>
                <div className={'questionMark'}>!</div>
                <strong>Beta Period:</strong> During the beta, this package is
                available free of charge. No credit card is required, later you can decide if you want to upgrade to the paid package.
              </BetaBox>
            </BetaBoxWrapper>
          </Price>
          <ReasonsList>
            <ReasonsItem data-tip data-for="database-storage">
              <Bold>1GB</Bold> database storage
            </ReasonsItem>
            <ReasonsItem data-tip data-for="api-requests">
              <Bold>250k</Bold> API requests with <Bold>250h</Bold> of runtime
            </ReasonsItem>
            <ReasonsItem data-tip data-for="your-domain">
              Your domain with HTTPS
            </ReasonsItem>
            <ReasonsItem data-tip data-for="global-cdn">
              Global CDN
            </ReasonsItem>
            <ReasonsItem data-tip data-for="email-support">
              Email {'&'} chat support
            </ReasonsItem>
            <ReasonsItem data-tip data-for="static-storage">
              Unlimited static storage
            </ReasonsItem>
            <ReasonsItem data-tip data-for="custom-apps">
              Upload custom apps and packages
            </ReasonsItem>
            <ReasonsItem data-tip data-for="auto-scaling">
              Auto scaling using extra usage packages
            </ReasonsItem>
            <Button
              className={button}
              fullWidth={true}
              type="primary"
              link="https://cloud.webiny.com/"
            >
              Get Started
              <Arrow alt="Get Started" src={arrow} />
              <br />
              <small>(No credit card required)</small>
            </Button>
          </ReasonsList>
          <ReactTooltip id="database-storage" effect="solid">
            <TooltipContent>
              With Webiny you get your very own database where you can store
              your data.
            </TooltipContent>
          </ReactTooltip>
          <ReactTooltip id="api-requests" effect="solid">
            <TooltipContent>
              Your API requests are served by a dedicated Lambda function.
            </TooltipContent>
          </ReactTooltip>
          <ReactTooltip id="your-domain" effect="solid">
            <TooltipContent>
              Add your own domain, and we'll throw in a free SSL certificate.
            </TooltipContent>
          </ReactTooltip>
          <ReactTooltip id="static-storage" effect="solid">
            <TooltipContent>
              Store all your static content, not just your application.
            </TooltipContent>
          </ReactTooltip>
          <ReactTooltip id="email-support" effect="solid">
            <TooltipContent>
              Paid users get support from our team of professionals.
            </TooltipContent>
          </ReactTooltip>
          <ReactTooltip id="custom-apps" effect="solid">
            <TooltipContent>
              Build and customize Webiny on your local machine, both the database
              and the code, and then upload it to your Webiny Cloud account and
              we'll host it for you.
            </TooltipContent>
          </ReactTooltip>
          <ReactTooltip id="global-cdn" effect="solid">
            <TooltipContent>
              We'll automatically cache your content around the world for faster
              load times.
            </TooltipContent>
          </ReactTooltip>
          <ReactTooltip id="auto-scaling" effect="solid">
            <TooltipContent>
              No need to make any upgrades to your plan. It automatically grows
              with your website.
            </TooltipContent>
          </ReactTooltip>
        </Box>
        <ExtraTitle>Extra usage: $29/package</ExtraTitle>
        <ReasonsList className={ExtraReasonsList}>
          <ReasonsItem>
            <Bold>+1GB</Bold> database storage
          </ReasonsItem>
          <ReasonsItem>
            <Bold>+100k</Bold> Lambda requests
          </ReasonsItem>
          <ReasonsItem>
            <Bold>+100h</Bold> Lambda runtime
          </ReasonsItem>
        </ReasonsList>
      </ContentContainer>
    );
  }
}

export default PaidPackage;
