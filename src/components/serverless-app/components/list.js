import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";

import bullet from "./assets/bullet.svg";

const ListUl = styled("ul")({
    boxSizing: "border-box",
    padding: 0,
    width: "100%",
    marginBottom: 25,
});

const ListItemLi = styled("li")({
    listStyle: "none",
    textAlign: "left",
    marginBottom: 15,
    background: "url(" + bullet + ") no-repeat left 2px",
    paddingLeft: 40,
    "&:last-child": {
        marginBottom: 0,
    },
    a: {
        color: theme.color.secondaryDark,
    },
});

const Bold = styled("span")({
    fontWeight: theme.fontWeight.bold,
});

const List = ({ children, ...props }) => <ListUl {...props}>{children}</ListUl>;

const ListItem = props => (
    <ListItemLi>
        <Bold>{props.title}</Bold> {props.children}
    </ListItemLi>
);

export { List, ListItem };
