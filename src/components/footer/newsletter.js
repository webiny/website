import React from "react";
import styled from "@emotion/styled";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

import emailIcon from "./assets/email-icon.svg";
import newsletterBullet from "./assets/newsletter-bullet.svg";

const Form = styled("form")({});

const Title = styled("label")(
    {
        fontSize: theme.fontSize.h3,
        color: "var(--nl-text-color)", //theme.color.lightGray,
        fontWeight: theme.fontWeight.bold,
        marginTop: 0,
        lineHeight: "150%",
        textAlign: "var(--nl-text-align)",
        width: "100%",
        display: "inline-block",
    },
    mq({
        textAlign: ["center", "center", "right"],
    }),
);

const InputWrapper = styled("form")(
    {
        position: "relative",
        maxWidth: "392px",
    },
    mq({
        margin: ["0 auto 9px auto", "0 auto 0 auto", "0 0 0 0"],
    }),
);

const Input = styled("input")({
    background: theme.color.white,
    border: "1px solid #979797",
    borderRadius: 8,
    fontSize: 18,
    padding: "15px 25px 15px 50px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
});

const Submit = styled("button")({
    background: "#282C34",
    borderRadius: 8,
    position: "absolute",
    color: theme.color.lightGray,
    textTransform: "uppercase",
    padding: "5px 20px",
    fontWeight: theme.fontWeight.semiBold,
    fontSize: theme.fontSize.footer,
    right: 15,
    top: 12,
    outline: "none",
    cursor: "pointer",
});

const EmailIcon = styled("img")({
    position: "absolute",
    left: 15,
    top: "calc(50% - 7px)",
});

const NlReasons = styled("ul")(
    {
        margin: 0,
    },
    mq({
        paddingTop: [4, 13, 24],
    }),
);

const NlReason = styled("li")(
    {
        listStyle: "none",
        listStylePosition: "outside",
        backgroundPosition: "right 0 center",
        backgroundRepeat: "no-repeat",
        color: theme.color.lightGray,
        fontSize: theme.fontSize.footer,
        textAlign: "right",
        lineHeight: "16px",

        "&:last-child": {
            marginBottom: "0px",
        },
    },
    mq({
        textAlign: ["center", "center", "right"],
        paddingRight: [0, 0, 25],
        backgroundImage: ["none", "none", "url(" + newsletterBullet + ")"],
        marginBottom: [9, 9, 20],
    }),
);

const Paragraph = styled("span")(
    {
        fontSize: "14px",
        color: "hsl(0,0%,86%)",
    },
    mq({
        display: ["block", "block", "none"],
    }),
);

class Newsletter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { email: "" };
        this.inputRef = React.createRef();
    }

    handleChange = event => {
        this.setState({ email: event.target.value });
    };

    handleSubmit = event => {
        if (this.state.email !== "") {
            this.setState({ email: "Thanks! You're on the list." });

            /*
      const formData = Object.keys (this.state)
        .map (key => {
          return (
            encodeURIComponent (key) +
            '=' +
            encodeURIComponent (this.state[key])
          );
        })
        .join ('&');
      */

            fetch(
                "https://app.mailerlite.com/webforms/submit/g9f1i1?fields%5Bemail%5D=" +
                    encodeURIComponent(this.state.email) +
                    "&ml-submit=1&ajax=1",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    //body: formData,
                },
            );
        }

        event.preventDefault();
    };

    render() {
        return (
            <React.Fragment>
                <Title htmlFor="newsletter_email">Join Webiny Newsletter</Title>
                <InputWrapper
                    action="https://app.mailerlite.com/webforms/landing/g9f1i1"
                    data-code="g9f1i1"
                    method="get"
                    target="_blank"
                >
                    <Input
                        ref={this.inputRef}
                        placeholder="email@domain.com"
                        type="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        name="fields[email]"
                        id="newsletter_email"
                        required
                    />
                    <EmailIcon alt="Email" src={emailIcon} />
                    <Submit onClick={this.handleSubmit}>Join</Submit>
                </InputWrapper>
                <NlReasons className="webiny-nl-reason-list">
                    <NlReason>We send one newsletter a week.</NlReason>
                    <NlReason>Contains only Webiny relevant content.</NlReason>
                    <NlReason>Your email is not shared with any 3rd parties.</NlReason>
                </NlReasons>
                <Paragraph>Webiny Ltd © 2022</Paragraph>
            </React.Fragment>
        );
    }
}

export default Newsletter;
