import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import pattern from './assets/pattern.png';
import archImg from './assets/webiny-architecture.png';
import starBullet from './assets/star-bullet.svg';

const Contaner = styled ('div') ({
  maxWidth: '100%',
  width: '100%',
  paddingBottom: 25,
  backgroundImage: 'url(' + pattern + ')',
});

const ArchImg = styled ('img') (
  {
    display: 'block',
    boxSizing: 'border-box',
  },
  mq ({
    padding: [20, '100px 25px 50px 25px'],
    width: ['100%', 'auto'],
    margin: [0, '0 auto'],
  })
);

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.white,
  textAlign: 'center',
  paddingTop: 0,
  marginTop: 0,
  marginBottom: 40,
});

const Box = styled ('div') (
  {
    background: theme.color.black,
    boxShadow: '0 2px 40px 10px rgba(152,152,152,0.50)',
    borderRadius: 8,
    padding: '30px 20px',
    boxSizing: 'border-box',
    maxWidth: 750,
    color: theme.color.black,
  },
  mq ({
    margin: [20, '0 auto'],
  })
);

const ReasonWrapper = styled ('div') (
  {
    justifyContent: 'space-evenly',
  },
  mq ({
    display: ['block', 'flex'],
  })
);

const ReasonsList = styled ('ul') (
  {
    color: theme.color.white,
  },
  mq ({
    width: ['100%', '45%'],
  })
);

const ReasonsItem = styled ('li') (
  {
    listStyle: 'none',
    paddingLeft: 40,
    marginBottom: 15,
    paddingRight: 0,
    textAlign: 'left',
  },
  mq ({
    background: [
      'url(' + starBullet + ') no-repeat left 2px',
      'url(' + starBullet + ') no-repeat left 2px',
    ],
  })
);

const reasonsItemRight = css (
  {},
  mq ({
    background: [
      'url(' + starBullet + ') no-repeat left 2px',
      'url(' + starBullet + ') no-repeat right 2px',
    ],
    textAlign: ['left', 'right'],
    paddingLeft: [40, 0],
    paddingRight: [0, 40],
  })
);

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.bold,
});

class Architecture extends React.Component {
  render () {
    return (
      <Contaner>
        <ArchImg src={archImg} />

        <Box>
          <SubTitle>Webiny Serverless Stack</SubTitle>
          <ReasonWrapper>
            <ReasonsList>
              <ReasonsItem className={reasonsItemRight}>
                Global Content Delivery Network for great performance and origin offload
              </ReasonsItem>
              <ReasonsItem className={reasonsItemRight}>
                Web Application Firewall that protects your website against brute force attacks and DOS.
              </ReasonsItem>
              <ReasonsItem className={reasonsItemRight}>
                Lambda edgecompute ensures that your API always has room to respond to requests, no matter how many users are visting your website.
              </ReasonsItem>
            </ReasonsList>
            <ReasonsList>
              <ReasonsItem>
                Your database is automatically replicated in 6 locations with auto heal and failover.
              </ReasonsItem>
              <ReasonsItem>
                Cloud storage with 99.999999999%  durability. You can sleep peacefully, because your data is safe.
              </ReasonsItem>
              <ReasonsItem>
                Although our stack has many moving parts, deploying your website and custom apps onto the platform is done via a single CLI command.
              </ReasonsItem>
            </ReasonsList>
          </ReasonWrapper>
        </Box>

      </Contaner>
    );
  }
}

export default Architecture;
