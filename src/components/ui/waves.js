import React from 'react';
import {css, keyframes} from 'emotion';

const wrapper = css`
    width: 100%;
    height: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
    overflow: hidden;
`;

const waveAnim = keyframes`
    from { transform: rotate(0deg);}
    from { transform: rotate(360deg);}
`;

const wave = css`
    width: 1000px;
    height: 1025px;
    position: absolute;
    top: -25%;
    left: 50%;
    margin-left: -500px;
    margin-top: -500px;
    border-radius: 35%;
    background: rgba(255, 255, 255, .75);
    animation: ${waveAnim} 15s infinite linear;
`;

export default ({children, ...props}) => (
  <React.Fragment>
    <div className={wrapper}>
      <div class={wave} />
    </div>
  </React.Fragment>
);
