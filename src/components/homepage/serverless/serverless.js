import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import scaleImg from './assets/serverless-scale.svg';
import costConstrolImg from './assets/serverless-cost-control.svg';
import zeroMaintenanceImg from './assets/serverless-zero-management.svg';
import awsLogo from './assets/amazon-web-services.svg';

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 0,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    textAlign: 'center',
    lineHeight: '150%',
    maxWidth: 750,
  },
  mq ({
    margin: ['0 20px', '0 auto 50px auto'],
  })
);

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginBottom: 50,
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
  })
);

const Cell = styled ('div') (
  {
    boxSizing: 'border-box',
    textAlign: 'center',
    h3: {
      fontSize: theme.fontSize.h3,
      color: theme.color.black,
      margin: '25px 0 15px 0',
      fontWeight: theme.fontWeight.bold,
      textAlign: 'center',
    },
    p: {
      fontSize: theme.fontSize.paragraph,
      color: theme.color.black,
      lineHeight: '160%',
      padding: '0 25px',
    },
    '&.headingCell': {
      h3: {
        fontSize: theme.fontSize.h2,
        fontWeight: theme.fontWeight.semiBold,
      },
      p: {
        fontSize: 18,
      },
    },
    '&:last-child': {
      marginRight: '0 !important',
    },
  },
  mq ({
    marginRight: [0, 50],
    '.image': {
      width: ['100%', 'auto'],
    },
  })
);

const quote = css ({
  border: '4px solid ' + theme.color.primaryDark,
  padding: '40px 20px',
  fontSize: theme.fontSize.h2,
  width: '100%',
});

const QuoteDetails = styled ('div') (
  {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.fontSize.h5,
    textAlign: 'left',
    alignItems: 'center',
  },
  mq ({
    flexDirection: ['column', 'row'],
    padding: [20, '25px 245px 0 260px'],
  })
);

class Serverless extends React.Component {
  render () {
    return (
      <section {...this.props}>
        <SubTitle>Go Serverless - Join The Next Cloud Revolution</SubTitle>
        <SubText>
          Forget about servers, maintenance, capacity provisioning and many
          other tasks. Serverless is changing how we build applications and
          deploy infrastructure. Here are some of the benefits you will enjoy by
          going serverless.
        </SubText>

        <ContentContainer>
          <Grid>
            <Cell data-aos="fade-up" data-aos-delay="100" data-aos-offset="200">
              <img src={scaleImg} />
              <h3>Scale</h3>
              <p>
                Grow your website, visitors and revenue, worry free. Don’t
                stress about your origin infrastructure on those crucial days
                when potential loses are highest.
              </p>
            </Cell>
            <Cell data-aos="fade-up" data-aos-delay="200" data-aos-offset="200">
              <img src={costConstrolImg} />
              <h3>Cost Control</h3>
              <p>
                No need to drastically overpay your infrastructure or constantly
                run with a large spare capacity. Your cost should match what you
                are using.
              </p>
            </Cell>
            <Cell data-aos="fade-up" data-aos-delay="300" data-aos-offset="200">
              <img src={zeroMaintenanceImg} />
              <h3>Zero Maintenance</h3>
              <p>
                No servers, no problems. Make your time count by doing the
                important work, not yum’s and apt-get’s, you're better than
                that.
              </p>
            </Cell>
          </Grid>
          <Grid>
            <Cell
              className={quote}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="300"
            >
              <i>"Serverless is the future of development."</i>
              <QuoteDetails>
                <div>
                  Werner Vogels <br />
                  <small>Chief Technology Officer</small>
                </div>
                <img style={{height: '40px'}} src={awsLogo} />
              </QuoteDetails>
            </Cell>
          </Grid>
        </ContentContainer>
      </section>
    );
  }
}

export default Serverless;
