import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import mq from '../../utils/breakpoints'
import ContentContainer from '../../ui/content-container';

import scaleImg from './assets/serverless-scale.svg';
import costConstrolImg from './assets/serverless-cost-control.svg';
import zeroMaintenanceImg from './assets/serverless-zero-management.svg';

const SubTitle = styled('h2')({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 0,
})

const SubText = styled('p')(
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    textAlign: 'center',
    lineHeight: '150%',
    maxWidth: 750,
  },
  mq({
    margin: ['0 20px', '0 auto 50px auto'],
  })
)

const Grid = styled("div")({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    '&.first':{
      marginTop: 100,
      marginBottom: 50,
    },
  },
  mq({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
  })
);

const Cell = styled("div")({
  boxSizing: 'border-box',
  textAlign: 'center',
  'h3':{
    fontSize: theme.fontSize.h3,
    color: theme.color.black,
    margin: '25px 0 15px 0',
    fontWeight: theme.fontWeight.bold,
    textAlign: 'center',
  },
  'p':{
    fontSize: theme.fontSize.paragraph,
    color: theme.color.black,
    lineHeight: '160%',
    padding: '0 25px'
  },
  '&.headingCell':{
    'h3':{
      fontSize: theme.fontSize.h2,
      fontWeight: theme.fontWeight.semiBold
    },
    'p':{
      fontSize: 18
    },
  },
  '&:last-child':{
    marginRight: '0 !important'
  }

}, mq({
  marginRight: [0, 50],
  '.image':{
    width: ['100%', 'auto'],
  }
}));

class Serverless extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SubTitle>
          Go Serverless - Join The Next Cloud Revolution
        </SubTitle>
        <SubText>
          Forget about servers, maintenance, capacity provisioning and many other tasks.
          Serverless is changing how we are building applications and deploying infrastructure. Here are some of the benefits you will enjoy by going serverless.
        </SubText>

        <ContentContainer>

          <Grid>
            <Cell>
              <img src={scaleImg}/>
              <h3>Scale</h3>
              <p>
                They say that there are no two eyes alike. Some prefer white, some black.
                Webiny features a light and a dark mode, make your pick.
              </p>
            </Cell>
            <Cell>
              <img src={costConstrolImg}/>
              <h3>Cost Control</h3>
              <p>
                Full security control allows you to share your Webiny with others from your
                team, but still control who can access what.
              </p>
            </Cell>
            <Cell>
              <img src={zeroMaintenanceImg}/>
              <h3>Zero Maintenance</h3>
              <p>
                Starting with a new system can be challenging, so we’ve prepared several guides and tutorials to make it easier.
              </p>
            </Cell>
          </Grid>

        </ContentContainer>
      </React.Fragment>
    )
  }
}

export default Serverless;