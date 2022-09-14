import React from "react";
import Body from "./body";

export default ({ children, ...props }) => (
    <Body title={"Privacy Policy"}>
        {children}
    </Body>
);
