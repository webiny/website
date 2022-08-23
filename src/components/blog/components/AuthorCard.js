import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import twitterIcon from "../assets/twitter-icon.svg";
import authors from "./blogAuthors";

const AuthorContainer = styled("div")({
    width: "100%",
    position: "relative",
    textAlign: "center",
});

const AuthorImage = styled("img")({
    border: "2px solid " + theme.color.primaryDark,
    borderRadius: "50%",
    width: 74,
    height: 74,
    zIndex: 2,
    position: "relative",
});

const Divider = styled("span")({
    width: "100%",
    height: 2,
    backgroundColor: theme.color.primaryDark,
    position: "absolute",
    top: 37,
    left: 0,
    zIndex: 1,
});

const AuthorMeta = styled("div")({});
const AuthorName = styled("div")(
    {
        fontSize: "1em",
        marginLeft: "-8px",
        marginTop: 2,
        a: {
            position: "relative",
            img: {
                height: 16,
                color: theme.color.grayText,
                position: "absolute",
            },
        },
    },
    mq({
        a: {
            img: {
                left: [8, 5],
                top: [2, 4],
            },
        },
    }),
);

const DatePublished = styled("div")({
    fontSize: "0.8em",
    color: theme.color.grayText,
});

class Author extends React.Component {
    render() {
        return (
            <AuthorContainer>
                <AuthorImage src={authors[this.props.author].avatar} />
                <AuthorMeta>
                    <Divider />
                    <AuthorName>
                        {authors[this.props.author].name}
                        <a
                            href={"https://twitter.com/" + authors[this.props.author].twitter}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={twitterIcon} alt="Twitter" />
                        </a>
                    </AuthorName>
                    <DatePublished>{this.props.publishedDate}</DatePublished>
                </AuthorMeta>
            </AuthorContainer>
        );
    }
}

export default Author;
