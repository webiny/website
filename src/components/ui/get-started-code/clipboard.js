import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";

const ClipBoardItem = styled("div")(
    {
        "&.code-sample": {
            position: "relative",
            marginBottom: 11,
            overflow: "hidden",
            textOverflow: "wrap",
            cursor: "pointer",
            width: "100%",
            color: theme.color.white,
            backgroundColor: theme.color.black,
            borderRadius: 8,

            "& pre": {
                padding: 20,
                margin: 0,
                display: "flex",
                alignItems: "center",

                "& .yellow-rectangle": {
                    display: "inline-block",
                    width: 10,
                    height: 19,
                    background: theme.color.yellow,
                    color: theme.color.yellow,
                    marginLeft: 10,
                },
            },

            "& .clip-button": {
                position: "absolute",
                right: 5,
                top: 5,
                padding: "3px 10px",
                fontSize: 12,
                color: theme.color.black,
                background: theme.color.white,
                transition: "all 0.2s ease",
                borderRadius: 4,
            },
        },
    },
    mq({
        "& pre": {
            fontSize: [14, 16],
        },
    }),
);

class ClipBoard extends React.Component {
    handleDidCopy() {
        this.setState({
            pop: "clip-pop",
        });
    }

    handleMouseOut() {
        if (this.state && this.state.pop) {
            this.setState({
                pop: null,
            });
        }
    }

    handleCopy() {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNode(this.sample);
        selection.empty();
        selection.addRange(range);

        if (document.execCommand("copy")) {
            this.handleDidCopy();
            this.setState({ copied: true });
        } else {
            // console.log('Copy failed');
        }
    }

    render() {
        const FakeButton = ({ text, onMouseOut }) => (
            <div className="clip-button" onMouseOut={onMouseOut} onBlur={onMouseOut}>
                {text}
            </div>
        );

        const Pre = ({ setRef, text }) => (
            <pre ref={setRef}>
                <span>{text}</span> <span className="yellow-rectangle"></span>
            </pre>
        );

        try {
            const { pop, copied } = this.state || {},
                classNames = `code-sample ${pop || ""}`;

            return (
                <ClipBoardItem
                    className={classNames}
                    onClick={() => this.handleCopy()}
                    onMouseOut={() => this.handleMouseOut()}
                >
                    <Pre setRef={r => (this.sample = r)} text={this.props.text} />
                    {copied ? <FakeButton text="Copied" /> : <FakeButton text="Copy" />}
                </ClipBoardItem>
            );
        } catch (e) {
            debugger;
        }
    }
}

export default ClipBoard;
