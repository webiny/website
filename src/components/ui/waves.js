import React from "react";
import { css, keyframes } from "emotion";

import waveBg from "./assets/wave.svg";

const animSpeed = "60s";

const ocean = css`
    height: 5%;
    width: 100%;
    position: absolute;
    bottom: -120px;
    left: 0;
    background: #015871;
`;

const animWave = keyframes`
0% {
  margin-left: 0;
}
100% {
  margin-left: -1600px;
}`;

const animSwell = keyframes`
0%, 100% {
  transform: translate3d(0,-25px,0);
}
50% {
  transform: translate3d(0,5px,0);
}`;

const wave = css`
    background: url(${waveBg}) repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: ${animWave} ${animSpeed} cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    &:nth-of-type(2) {
        top: -175px;
        animation: ${animWave} ${animSpeed} cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
            ${animSwell} ${animSpeed} ease -1.25s infinite;
        opacity: 1;
    }
`;

export default ({ children, ...props }) => (
    <React.Fragment>
        <div className={ocean + " " + props.className}>
            <div className={wave} />
            <div className={wave} />
        </div>
    </React.Fragment>
);
