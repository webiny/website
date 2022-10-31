import React from "react";
import Body from "./body";
import { css } from "emotion";

const containerStyle = css({
    "a":{
        display: "inline-block",
        flexDirection: "column",
        svg:{
            display: 'none'
        }
    },
    "h1":{
        fontSize: '2.4em'
    }
});

export default ({ children, ...props }) => (
    <Body title={props.title}>
        <div className={containerStyle}>
            {children}
        </div>
    </Body>
);
