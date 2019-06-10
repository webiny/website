import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import {css} from 'emotion';
import mq from '../../utils/breakpoints';
import Button from '../../ui/button';
import ContentContainer from '../../ui/content-container';

import heroBg from './assets/agency-hero-bg.svg';
import superhero from './assets/undraw_business_deal_cpi9.svg';
import bullet from './assets/bullet.svg';
import arrowImg from './assets/gs-btn-arrow.svg';

const Hero = styled ('section') (
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat center top',
    color: '#fff',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  mq ({
    padding: ['100px 20px 25px', '150px 0 25px'],
    height: ['auto', 'calc(100vh - 150px)'],
    minHeight: ['auto', 725],
    maxHeight: ['auto', 768],
    marginBottom: [50, 100],
    backgroundSize: ['cover'],
    backgroundPosition: ['top', 'top', 'bottom'],
  })
);

const Title = styled ('h1') (
  {
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 40,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const LeftSide = styled ('div') (
  {},
  mq ({
    textAlign: ['center', 'left'],
    width: ['100%', 400],
  })
);

const RightSide = styled ('div') (
  {},
  mq ({
    textAlign: ['center', 'right'],
    width: ['100%', 750],
  })
);

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.light,
    lineHeight: '25px',
    marginBottom: 40,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const container = css (
  {},
  mq ({
    display: ['block', 'flex'],
  })
);

const Image = styled ('img') (
  {},
  mq ({
    width: [300, 550],
  })
);

const List = styled ('ul') ({
  boxSizing: 'border-box',
  padding: 0,
  width: '100%',
  marginBottom: 25,
});

const ListItem = styled ('li') ({
  listStyle: 'none',
  textAlign: 'left',
  marginBottom: 15,
  background: 'url(' + bullet + ') no-repeat left 2px',
  paddingLeft: 40,
  '&:last-child': {
    marginBottom: 0,
  },
  a: {
    color: theme.color.secondaryDark,
  },
});

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.bold,
});

const Arrow = styled ('img') ({
  height: 10,
  marginLeft: 5,
});

export default ({children, ...props}) => (
  <Hero {...props}>
    <ContentContainer className={container}>
      <LeftSide>
        <Title>Digital Agencies & Partners</Title>
        <SubText>
          Focus on building your business, not another CMS. Let's join forces and ship product faster.
        </SubText>
        <List>
          <ListItem>
            <Bold>Partnership</Bold>
            {' '}
            - You will be treated as a partner, we know your business
            relies on us.
          </ListItem>
          <ListItem>
            <Bold>Time to market</Bold>
            {' '}
            - Webiny will get you faster to a finished project.
            Customers, and your margins, both will benefit.
          </ListItem>
          <ListItem>
            <Bold>All inclusive</Bold>
            {' '}
            - We aim to provide a premium service to our partners ensuring each project is a success.
          </ListItem>
        </List>
        <Button link="/contact-us" type="dark">
          Let's talk
          <Arrow src={arrowImg} />
        </Button>

      </LeftSide>
      <RightSide>
        <Image src={superhero} alt="Agency Superhero" />
      </RightSide>
    </ContentContainer>
  </Hero>
);
