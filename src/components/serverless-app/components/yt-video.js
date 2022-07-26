import React from "react";
import { css } from "emotion";
import YTVideoComponent from "../../ui/layout/yt-video";
import { SubTitle } from "./typography";
import background from "./assets/video-bg.svg";

const videoContainer = css({
    background: "url(" + background + ") no-repeat left top",
    backgroundSize: "cover",
    textAlign: "center",
    margin: "-125px auto 0 auto",
    padding: "150px 0 50px 0",
});

class YTVideo extends React.Component {
    render() {
        return (
            <section className={videoContainer}>
                <SubTitle>See It in Action</SubTitle>
                <YTVideoComponent img={this.props.img} id={this.props.id} />
            </section>
        );
    }
}

export default YTVideo;
