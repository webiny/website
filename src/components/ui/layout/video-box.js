import React from "react";
//import {DefaultPlayer as Video} from 'react-html5video';
import "react-html5video/dist/styles.css";
import mq from "../../utils/breakpoints";
import { css } from "emotion";

const videoPlayer = css(
    {
        backgroundColor: "transparent",
        border: "1px solid #E6E6E6",
        boxShadow: "0 2px 4px 0 rgba(209,209,209,0.50)",
        borderRadius: 5,
        overflow: "hidden",
    },
    mq({
        height: ["auto", 329],
    }),
);

class VideoBox extends React.Component {
    state = {
        Video: null,
    };

    componentWillMount() {
        import("react-html5video").then(VideoLib => {
            this.setState({ Video: VideoLib.DefaultPlayer });
        });
    }

    componentDidMount() {
        /*eslint-disable */
        import("react-html5video");
        /*eslint-enable */
    }
    render() {
        let { Video } = this.state;
        if (!Video) {
            return <div>Loading...</div>;
        } else {
            return (
                <Video
                    loop
                    muted
                    controls={["PlayPause", "Seek", "Fullscreen"]}
                    className={videoPlayer}
                >
                    <source src={this.props.file} type="video/mp4" />
                </Video>
            );
        }
    }
}

export default VideoBox;
