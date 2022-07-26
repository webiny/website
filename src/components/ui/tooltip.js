import React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import ReactTooltip from "react-tooltip";

const tooltip = css({
    opacity: "1",
    backgroundColor: "black !important",
});

const TooltipContent = styled("div")({
    width: 250,
    textAlign: "center",
});

export default ({ children, id, ...props }) => (
    <ReactTooltip id={id} effect="solid" place="top" className={tooltip}>
        <TooltipContent>{children}</TooltipContent>
    </ReactTooltip>
);
