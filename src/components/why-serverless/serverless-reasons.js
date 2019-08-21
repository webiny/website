import React from 'react';
import {css} from 'emotion';
import mq from '../utils/breakpoints';
import ContentContainer from '../ui/content-container';
import {Grid, Cell} from '../ui/layout/layout';

import zeroServers from './assets/zero-servers.svg';
import usagePay from './assets/usage-pay.svg';
import buildFaster from './assets/build-faster.svg';
import scaling from './assets/scaling.svg';

const containerStyle = css (
  {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: -150,
    flexWrap: 'wrap',
    width: '100%',
    '>div': {
      boxSizing: 'border-box',
      img: {
        width: 250,
      },
    },
  },
  mq ({
    flexDirection: ['column !important', 'row !important'],
    '>div': {
      width: ['100%', '50%'],
      marginBottom: [25, 50],
      '&:nth-child(odd)': {
        paddingRight: [0, 25],
      },
      '&:nth-child(even)': {
        paddingLeft: [0, 25],
      },
    },
  })
);

const ServerlessReasons = () => (
  <React.Fragment>
    <ContentContainer>
      <Grid top className={containerStyle}>
        <div>
          <Cell>
            <img src={zeroServers} />
          </Cell>
          <Cell title="Zero servers to manage">
            <p>
              Servers are still there, but they are abstracted away and managed by your
              cloud provider. They are not your problem any more, same goes for
              loadbalancers and autoscaling.
            </p>
          </Cell>
        </div>
        <div>
          <Cell>
            <img src={usagePay} />
          </Cell>
          <Cell title="Pay for what you use">
            <p>
              You pay for each execution of your function. This means you don’t need to
              over-provision and therefore over-pay for infrastructure, especially for
              those periods of peak demand.
            </p>
          </Cell>
        </div>
        <div>
          <Cell>
            <img src={buildFaster} />
          </Cell>
          <Cell title="Build things faster">
            <p>
              Because all you need to do is deploy your code, and not lose time on
              spinning up and configuring servers, you’ll iterate and launch your products
              faster.
            </p>
          </Cell>
        </div>
        <div>
          <Cell>
            <img src={scaling} />
          </Cell>
          <Cell title="No more scaling headaches">
            <p>
              Serverless functions spin up in milliseconds. The moment there is a big
              increase in demand, new functions are created and are instantly ready to
              handle the new requests.
            </p>
          </Cell>
        </div>
      </Grid>
    </ContentContainer>
  </React.Fragment>
);

export default ServerlessReasons;
