import React from 'react'
import styled from 'react-emotion'
import theme from '../../../utils/theme'
import mq from '../../../utils/breakpoints'
import ContentContainer from '../../../ui/content-container'

import architecture from '../assets/webiny-architecture.svg'
import clientDeploy from '../assets/client-deploy.svg';
import serviceDeploy from '../assets/service-deploy.svg';

const Grid = styled("div")({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  boxSizing: 'border-box',
    '&.first':{
      margin: '100px 20px'
    },
  },
  mq({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
    '&.first':{
      margin: ['50px 0', '100px 20px']
    },
  })
);

const Cell = styled("div")({
  'h3':{
    fontSize: theme.fontSize.h3,
    color: theme.color.white,
    marginTop: 0,
    fontWeight: theme.fontWeight.bold,
    display:'flex',
    alignItems: 'center',
    'img':{
      marginRight: 20
    }
  },
  'ol':{
    marginLeft: 20,
    marginBottom: 25,
  },
  'li':{
    fontSize: 18,
    color: theme.color.white,
    lineHeight: '160%',
    marginBottom: 10
  }
}, mq({
  marginRight: [0, 150],
  img:{
    width: ['100%', 'auto'],
  }
}));

const ClientBlock = styled("div")({
},mq({
  marginTop: [25, 0],
  marginBottom: [25, 220]
}));
const ServerBlock = styled("div")({});

class Architecture extends React.Component {
  render() {
    return (
      <ContentContainer>
        <Grid className={"first"}>
          <Cell>
            <img src={architecture}/>
          </Cell>
          <Cell>
            <ClientBlock>
              <h3>Client Side</h3>
              <ol>
                <li>Quickly start building client side apps inside a ready made admin interface. </li>
                <li>Webiny comes with a set of predefined React UI components, no need to reinvent the wheel.</li>
                <li>Bundle and deploy your app using Webiny CLI  to Webiny Hosted platform.</li>
              </ol>
              <img src={clientDeploy}/>
            </ClientBlock>
            <ServerBlock>
              <h3>Server Side</h3>
              <ol>
                <li>Take the microservices approach, and move yourself away from having a monolithic system.</li>
                <li>Webiny comes with several built-in microservices, and you also have the option to register new ones.</li>
                <li>Bundle and deploy your services using Webiny CLI to Webiny Hosted platform.</li>
              </ol>
              <img src={serviceDeploy}/>
            </ServerBlock>
          </Cell>
        </Grid>
      </ContentContainer>
    )
  }
}

export default Architecture
