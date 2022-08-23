import React from "react";
import styled from "react-emotion";
import ModalVideo from "react-modal-video";
import mq from "../../utils/breakpoints";

import playIcon from "./assets/play-button.svg";
import "./assets/modal-video.min.css";

const VideoImage = styled("img")(
    {
        border: "1px solid #E6E6E6",
        borderRadius: 5,
        // opacity: '0.7',
        // boxShadow: "0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3)",
        boxShadow: "0px 0px 20px rgba(100, 100, 100, 0.3)",
        cursor: "pointer",
        transition: "opacity 0.3s",
        boxSizing: "border-box",
    },
    mq({
        width: ["calc(100% - 50px)", 800],
        margin: [25, 0],
    }),
);

const PlayButtonWrapper = styled("div")({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1,
    cursor: "pointer",
    backgroundColor: "rgb(0, 0, 0)",
    boxShadow: "rgba(0,0,0,0.33) 0px 0px 35px 5px",
    borderRadius: 50,
    transition: "all 0.2s ease-in-out 0s",
    width: 100,
    height: 100,
    color: "red",
    opacity: "0.5",
    img: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 2,
        color: "red",
    },
});

const VideoWrapper = styled("div")({
    position: "relative",
    transform: "translateY(0)",
    "&:hover": {
        [PlayButtonWrapper]: {
            opacity: 1,
        },
    },
});

class YTVideo extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <>
                <VideoWrapper onClick={this.openModal}>
                    <VideoImage src={this.props.img} />
                    <PlayButtonWrapper>
                        <img height="75" src={playIcon} alt="" />
                    </PlayButtonWrapper>
                </VideoWrapper>
                <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId={this.props.id}
                    onClose={() => this.setState({ isOpen: false })}
                />
            </>
        );
    }
}

export default YTVideo;
