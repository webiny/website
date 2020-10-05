import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";

const ComingSoon = styled("span")({
    fontSize: 10,
    textTransform: "uppercase",
    color: theme.color.grayText,
    backgroundColor: theme.color.darkGray,
    borderRadius: 5,
    padding: "2px 5px",
    marginTop: 2,
    marginLeft: 0,
});

export default () => <ComingSoon>Coming Soon</ComingSoon>;
