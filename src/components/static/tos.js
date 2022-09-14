import React from "react";
import Body from "./body";

export default ({ children, ...props }) => (
    <Body title={"Terms of Service"}>
        {children}
    </Body>
);
