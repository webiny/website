import React from "react";
import styled from "react-emotion";
import { keyframes } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ModalVideo from "react-modal-video";

//import videoBg from './assets/webiny-hero-video.jpg';
import videoBg from "./assets/webiny-video-bg.jpg";
import playIcon from "./assets/play-button.svg";
import "./assets/modal-video.min.css";

const float = keyframes`
0% {
  
  transform: translatey(0px);
}
50% {
  transform: translatey(-20px);
}
100% {
  transform: translatey(0px);
}
`;

const VideoImage = styled("img")({
    width: 800,
    height: 450,
    border: "1px solid #E6E6E6",
    borderRadius: 5,
    //opacity: '0.7',
    boxShadow: "0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3)",
    cursor: "pointer",
    transition: "opacity 0.3s"
});

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
        color: "red"
    }
});

const VideoWrapper = styled("div")({
    position: "relative",
    width: "100%",
    height: "100%",
    transform: "translateY(0)",
    animation: float + " 12s ease-in-out infinite",
    "&:hover": {
        [PlayButtonWrapper]: {
            opacity: 1
        }
    }
});

class Video extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <React.Fragment>
                <VideoWrapper onClick={this.openModal}>
                    <VideoImage src={videoBg} />
                    <PlayButtonWrapper>
                        <img height="75" src={playIcon} />
                    </PlayButtonWrapper>
                </VideoWrapper>
                <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="OQOmJZxT5dg"
                    onClose={() => this.setState({ isOpen: false })}
                />
            </React.Fragment>
        );
    }
}

export default Video;
