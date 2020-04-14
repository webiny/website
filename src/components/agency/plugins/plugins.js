import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import Button from '../../ui/button';
import ContentContainer from '../../ui/content-container';

import pluginsImage from './assets/plugins-image.svg'
import demoIcon from './assets/demo-icon.svg';

const wrapperClass = css (
  {
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: 'url(' + pluginsImage + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  mq ({
    backgroundSize: ['cover', 'contain'],
    marginTop: [24, 40],
    marginBottom: [40, 80]
  })
);

const contentContainerClass = css (
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200
  },
  mq ({
    width: ['100%', '100%'],
    height: ['100%'],
    paddingTop: [200, 300],
    paddingBottom: [200, 200]
  })
);

const TextWrapper = styled ('div') (
  {
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    background: '#F4F4F4',
    boxShadow: '2px 3px 15px rgba(100, 100, 100, 0.239216)',
    borderRadius: 8
  },
  mq ({
    width: ['80%', '100%'],
    maxWidth: 500,
    padding: ['20px 20px', '20px 70px']
  })
);

const Title = styled ('h2') (
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    lineHeight: '42px',
    textAlign: 'center',
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 20
  }
);


const SubTitle = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    lineHeight: '30px',
    textAlign: 'center',
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 18
  }
);

const ctaButton = css(
  {
    textTransform: 'uppercase',
    paddingTop: '10px !important',
    paddingBottom: '10px !important',
    marginTop: -20,
    zIndex: 1
  },
  mq ({
    width: ['216px !important']
  })
);

const DemoIcon = styled ('img') (
  {
    position: 'relative',
    marginRight: 5
  },
  mq ({
    display: ['block']
  })
);

class Plugins extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <ContentContainer className={contentContainerClass}>
          <TextWrapper>
            <Title>
            Extendable via plugins
            </Title>
            <SubTitle>
            Webiny is meant to be extended and customized via plugins. You can easily add your own plugins and integrate with systems like Stripe, Shopify, Mailchimp and others.
            </SubTitle>
          </TextWrapper>
          <Button
            className={ctaButton}
            link="https://docs.webiny.com/"
            type="secondary"
            >
            <DemoIcon src={demoIcon}/>
            Schedule a 1:1 Demo
          </Button>
        </ContentContainer>
      </section>
    );
  }
}

export default Plugins;
