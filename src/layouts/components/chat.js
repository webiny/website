import React from "react";
import styled from "react-emotion";
import theme from "../../components/utils/theme";
import { trackJoinSlack } from "../../components/ui/functions";

import chatIcon from "./assets/comment-dots-regular.svg";
import slackIcon from "./assets/slack-brands.svg";

const Chat = styled("a")({
    willChange: "all",
    transition: "all 0.25s",
    backgroundColor: "#7B49D7",
    width: 55,
    height: 55,
    borderRadius: "50%",
    position: "fixed",
    bottom: 10,
    right: 10,
    zIndex: 1001,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid transparent",
    cursor: "pointer",
    ".chat-icon": {
        height: 25,
        width: "auto",
    },
    ".join-slack": {
        visibility: "hidden",
        opacity: 0,
        transition: "opacity .25s ease-out",
        position: "absolute",
        overflow: "hidden",
        width: 0,
        height: 0,
        img: {
            height: 25,
            width: "auto",
        },
        h4: {
            fontSize: 14,
            fontWeight: 600,
            color: theme.color.black,
            lineHeight: "100%",
            margin: 0,
            padding: 0,
            display: "block",
        },
    },
    "&:hover": {
        width: 180,
        borderRadius: 40,
        backgroundColor: "white",
        border: "1px solid " + theme.color.grayBorder,
        ".chat-icon": {
            display: "none",
        },
        ".join-slack": {
            position: "relative",
            opacity: 1,
            visibility: "visible",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            height: "auto",
            padding: "0 25px",
        },
    },
});

export default () => (
    <Chat
        onClick={() => {
            trackJoinSlack({ placement: "chat" });
        }}
        href="/slack"
        target="_blank"
    >
        <img className="chat-icon" src={chatIcon} alt="Webiny Chat" />
        <div className="join-slack">
            <h4>Find us on Slack</h4>
            <img src={slackIcon} alt="Webiny Community Slack" />
        </div>
    </Chat>
);
