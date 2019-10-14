import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import ContentContainer from '../ui/content-container';
import {Grid, Cell} from '../ui/layout/layout';

import heroBg from './assets/swag-hero-bg.svg';
import webinyShirt from './assets/webiny-shirt.png';
import webinyStickers from './assets/webiny-stickers.png';
import webinyShirtAndStickers from './assets/webiny-shirt-and-stickers.png';
import ambassadorBg from './assets/webiny-ambassador-bg.svg';
import ambassadorBadge from './assets/webiny-ambassador-badge.svg';

const Bold = styled ('span') ({
  fontWeight: 600,
});

const hero = css (
  {},
  mq ({
    marginTop: [75, 100],
  })
);

const Title = styled ('h1') ({
  fontSize: 32,
  fontWeight: theme.fontWeight.semiBold,
  marginBottom: 25,
  textAlign: 'center',
});

const SubTitle = styled ('h2') (
  {
    paddingTop: 0,
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
  },
  mq ({
    fontSize: [32, 48],
  })
);

const IntroTextWrapper = styled ('div') (
  {
    backgroundColor: '#f2eecb',
    borderRadius: 10,
    boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
    boxSizing: 'border-box',
  },
  mq ({
    padding: [25, 50],
    width: ['auto', 600],
    margin: [15, '0 auto'],
  })
);

const IntroText = styled ('p') (
  {
    color: theme.color.black,
    textAlign: 'justify',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  mq ({
    fontSize: [20, 24],
  })
);

const Divider = styled ('div') ({
  width: '100%',
  height: 20,
  backgroundColor: '#F4F6F8',
  borderTop: '1px solid #E5E5E5',
  borderBottom: '1px solid #E5E5E5',
});

const containerStyle = css ({
  maxWidth: 1100,
  marginBottom: 50,
});

const swagImage = css ({
  width: '350px !important',
  height: 'auto !important',
  display: 'block',
  margin: '0 auto',
});

const swagText = css ({
  fontSize: 20,
});

const ambassadorBlock = css (
  {
    background: 'url(' + ambassadorBg + ') no-repeat center top',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: 0,
  },
  mq ({
    padding: ['100px 20px 25px', '150px 0 25px'],
    backgroundSize: ['cover'],
    backgroundPosition: ['top', 'top'],
  })
);

const ambassadorContent = css ({
  h2: {
    fontSize: theme.fontSize.h2,
    color: theme.color.white,
  },
  p: {
    color: theme.color.white,
  },
  ul: {
    color: theme.color.white,
    padding: 0,
    margin: '-20px 0 20px 0',
    li: {
      marginLeft: 20,
      fontSize: 20,
      textAlign: 'left',
    },
  },
  '.joinTeam': {
    color: theme.color.white,
    fontSize: 20,
    fontWeight: 600,
    display: 'inline-block',
    backgroundColor: '#F5A723',
    padding: '2px 4px',
    borderRadius: 5,
  },
});

const claimSwagBlock = css (
  {
    backgroundColor: '#292929',
    color: theme.color.white,
    padding: '50px 0 150px 0',
    p: {
      fontSize: 20,
    },
  },
  mq ({
    marginBottom: [-100, -100, -150],
  })
);

const ClaimInstructions = styled ('div') (
  {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 20,
    ul: {
      color: theme.color.white,
      padding: 0,
      margin: '10px 0 25px 20px',
      li: {
        marginLeft: 20,
        fontSize: 20,
      },
    },
  },
  mq ({
    flexDirection: ['column', 'row'],
  })
);

const ClaimNote = styled ('p') ({
  fontSize: '14px !important',
  color: '#9B9B9B',
  textAlign: 'center',
  marginTop: 25,
});

export default ({children, ...props}) => (
  <React.Fragment>
    <ContentContainer className={containerStyle + ' ' + hero}>
      <IntroTextWrapper>
        <Title>
          FREE SWAG<br />
          {'{'}for all our contributors and supporters{'}'}
          <br /><br />
        </Title>
        <IntroText>
          To show our appreciation to all our contributors and supporters, we are giving away free swag. The section below defines what swag is available, and how you can claim yours.
        </IntroText>
        <IntroText>
          <Bold>Why are we doing this?</Bold>
          <br />
          An open-source project, such as ours, can’t exist without a community around it. The community contributes and improves the project. This is the secret ingredient to a great open-source product. At Webiny we decided to offer a little token of appreciation to all our community members.
        </IntroText>
        <IntroText>
          This might look like free marketing, but our goal is sincere. Building a community around Webiny and advancing the adoption of serverless technology.
        </IntroText>
        <IntroText>
          If you share the same goal, jump in and help us spread the word.
        </IntroText>
        <IntroText style={{textAlign: 'right'}}>
          Sven, Co-founder & CEO
        </IntroText>
      </IntroTextWrapper>
    </ContentContainer>
    <Divider />
    <ContentContainer className={containerStyle}>
      <SubTitle>What’s Available for Grabs</SubTitle>
      <Grid left>
        <Cell>
          <img
            className={swagImage}
            src={webinyStickers}
            alt="Webiny SWAG - Stickers"
          />
        </Cell>
        <Cell title="Become a Fan">
          <p>
            A fan is someone who loves what we do here. Fans give us support to keep going forward. And everything we do, we do it for them. A Webiny fan is someone who 1.) starred our GitHub 2.) subscribed to our newsletter 4) follows us on either Twitter or YouTube.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Spread the Knowledge">
          <p>
            You have created a blog post, a tutorial or a video guide for Webiny related content? We would love to know about it, so we can spread the word through our channels. On top of that, we’ll send you a Webiny branded t-shirt.
          </p>
        </Cell>
        <Cell>
          <img
            className={swagImage}
            src={webinyShirt}
            alt="Webiny SWAG - Shirt"
          />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <img
            className={swagImage}
            src={webinyStickers}
            alt="Webiny SWAG - Stickers"
          />
        </Cell>
        <Cell title="Show us Your Work">
          <p>
            Have you recently launched a project, a website, or an app, that runs on Webiny? Or if you have created a Webiny plugin? If so, please send it over, and we’ll have a look and send you some stickers in return. Selected projects and teams have the chance to be showcased on our website.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Our Thanks to All Contributors">
          <p>
            Got your first Webiny PR merged, that’s awesome! Thank you so much for contributing your time to our project. Expect this small token of appreciation. We will also add you to our contributors' page, as well as promote your profile on our website.
          </p>
        </Cell>
        <Cell>
          <img
            className={swagImage}
            src={webinyShirtAndStickers}
            alt="Webiny SWAG - Shirt and Stickers"
          />
        </Cell>
      </Grid>
    </ContentContainer>

    <section className={claimSwagBlock}>
      <ContentContainer className={containerStyle}>
        <SubTitle>How to Claim Your SWAG</SubTitle>
        <p>
          Send an email to community@webiny.com with the following information:
        </p>
        <ClaimInstructions>
          <div>
            <Bold>1. Personal information:</Bold>
            <ul>
              <li>First name</li>
              <li>Last name</li>
              <li>Shirt size (if applies)</li>
            </ul>
          </div>
          <div>
            <Bold>2. Claim details:</Bold>
            <ul>
              <li>Your GitHub username</li>
              <li>Any URLs that are relevant</li>
              <li>Any other information you think is important</li>
            </ul>
          </div>
          <div>
            <Bold>3. Shipping details:</Bold>
            <ul>
              <li>Your full address</li>
              <li>Postcode</li>
              <li>Country</li>
            </ul>
          </div>
        </ClaimInstructions>
        <ClaimNote>
          * The provided information
          {' '}
          <Bold><u>won’t</u></Bold>
          {' '}
          be used for  marketing, retargeting or any types of promotions,
          {' '}
          <br />
          and it
          {' '}
          <Bold><u>won’t</u></Bold>
          {' '}
          be shared with any 3rd parties. We just need the details to know where to send your package.
        </ClaimNote>
      </ContentContainer>
    </section>

    <section className={ambassadorBlock}>
      <ContentContainer className={containerStyle}>
        <Grid left>
          <Cell>
            <img src={ambassadorBadge} alt="Webiny Ambassador" />
          </Cell>
          <Cell className={ambassadorContent}>
            <h2>Webiny Ambassador</h2>
            <p>
              If you organized a Webiny meetup group, or want to organize one, we are happy to support you.
            </p>
            <p>
              <Bold>What we can offer:</Bold>
            </p>
            <ul>
              <li>sponsorship for local meetup groups</li>
              <li>review your Webiny related content/presentation/talk</li>
              <li>help with visuals and other material</li>
              <li>more SWAG</li>
            </ul>
            <h4 className="joinTeam">Join Our Team</h4>
            <p>
              For active ambassadors, we can go a step further. If you enjoy educating others, love building communities, organizing meetups, attending conferences, and spreading the word about Webiny, we are ready to offer you a full-time paid position in our team.
            </p>
            <p>
              To apply, please send your CV to info@webiny.com.
            </p>
          </Cell>
        </Grid>
      </ContentContainer>
    </section>
  </React.Fragment>
);
