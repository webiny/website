import React from 'react'
import styled from 'react-emotion'
import theme from '../../../utils/theme'
import mq from '../../../utils/breakpoints'
import ContentContainer from '../../../ui/content-container'

import architecture from '../assets/webiny-architecture.png'
import clientDeploy from '../assets/client-deploy.svg';
import apiDeploy from '../assets/api-deploy.svg';

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
  'h2,h3':{
    fontSize: theme.fontSize.h2,
    color: theme.color.white,
    marginTop: 0,
    fontWeight: theme.fontWeight.bold,
    display:'flex',
    alignItems: 'center',
    'img':{
      marginRight: 20
    }
  },
  'h3':{
    fontSize: theme.fontSize.h3,
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
    width: ['100%', '400px'],
  }
}));

const ClientBlock = styled("div")({
},mq({
  marginTop: [25, 0],
  marginBottom: [25, 220]
}));
const ServerBlock = styled("div")({});

const SubTitle = styled('h2')({
  fontSize: theme.fontSize.h2,
  fontWeight: 500,
  textTransform: 'uppercase',
  color: theme.color.white,
  textAlign: 'center',
  paddingTop: 25,
  marginTop: 0,
  marginBottom: 75
})


class Architecture extends React.Component {
  render() {
    return (
      <ContentContainer>
        <SubTitle>Architecture</SubTitle>
        <Grid>
          <Cell>
            <img src={architecture}/>
          </Cell>
          <Cell>
            <ClientBlock>
              <h3>Client Side</h3>
              <ol>
                <li>Quickly start building client side apps inside a ready made admin interface. </li>
                <li>Webiny comes with a set of predefined React UI components, no need to reinvent the wheel.</li>
                <li>Quickly bundle and deploy your app to Webiny Cloud using Webiny CLI.</li>
              </ol>
              <img src={clientDeploy}/>
            </ClientBlock>
            <ServerBlock>
              <h3>Server Side</h3>
              <ol>
                <li>Take the API approach, use the built-in ORM and GraphQL SDL to quickly create new endpoints.</li>
                <li>Webiny also comes with several built-in API endpoints that you can leverage in your apps.</li>
                <li>Same as for the client side, using the CLI you can deploy your app to Webiny Cloud.</li>
              </ol>
              <img src={apiDeploy}/>
            </ServerBlock>
          </Cell>
        </Grid>
      </ContentContainer>
    )
  }
}

export default Architecture