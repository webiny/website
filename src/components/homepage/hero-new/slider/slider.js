import React from "react";
import styled from "react-emotion";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { css } from "emotion";
import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";

import stepDivider from "../assets/step-divider.svg";
import Create from "./create";
import Deploy from "./deploy";
import enjoyVideo from "../assets/webiny-install-enjoy-step.mp4";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Wrapper = styled("div")({
    display: "flex",
    width: "calc(100% - 100px)",
    flexDirection: "column",
    marginLeft: 100,
});

const Content = styled("div")({
    width: "100%",
    marginTop: 25,
    marginLeft: 10,
    position: "relative",
});

const Spinner = styled("div")({
    position: "absolute",
    bottom: 15,
    right: 15,
    cursor: "pointer",
});

const Steps = styled("div")({
    display: "flex",
    width: "100%",
    fontSize: 22,
    fontWeight: theme.fontWeight.semiBold,
    alignItems: "center",
    lineHeight: "100%",
});

const Step = styled("div")({
    display: "block",
    color: "#CBCBCB",
    borderBottom: "2px solid transparent",
    cursor: "pointer",
    padding: "0 0 10px 0",
    marginLeft: 10,
    "&:hover": {
        color: "#fff",
    },
    "&.active": {
        color: "#DBD346",
        borderColor: "#DBD346",
    },
});

const StepDivider = styled("div")({
    display: "block",
    width: 15,
    height: 25,
    margin: "0 40px",
    backgroundImage: "url(" + stepDivider + ");",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginBottom: 9,
    opacity: 0.7,
});

const Video = styled("video")({
    borderRadius: 5,
    width: "567",
    //border: "1px solid #000",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.25)",
    height: 363,
    marginRight: -5,
});

class Slider extends React.Component {
    state = {
        activeTab: 0,
        isPlaying: false,
        content: null,
        duration: null,
    };

    tabs = {
        1: {
            content: <Create />,
            duration: 12,
        },
        2: {
            content: <Deploy />,
            duration: 10,
        },
        3: {
            content: <Video controls={false} autoPlay={true} src={enjoyVideo} />,
            duration: 15,
        },
    };

    componentDidMount() {
        this.changeTab(1);
    }

    changeTab = tab => {
        this.setState({
            activeTab: tab,
            isPlaying: true,
            content: this.tabs[tab].content,
            duration: this.tabs[tab].duration,
        });
    };

    render() {
        if (this.state.activeTab === 0) {
            return null;
        }

        return (
            <Wrapper>
                <Steps>
                    <Step
                        className={this.state.activeTab === 1 && "active"}
                        onClick={() => this.changeTab(1)}
                    >
                        Create
                    </Step>
                    <StepDivider />
                    <Step
                        className={this.state.activeTab === 2 && "active"}
                        onClick={() => this.changeTab(2)}
                    >
                        Deploy
                    </Step>
                    <StepDivider />
                    <Step
                        className={this.state.activeTab === 3 && "active"}
                        onClick={() => this.changeTab(3)}
                    >
                        Enjoy
                    </Step>
                </Steps>
                <Content>
                    {this.state.content}
                    <Spinner
                        onClick={() => {
                            this.setState({ isPlaying: !this.state.isPlaying });
                            console.log(this.state.isPlaying);
                        }}
                    >
                        <CountdownCircleTimer
                            key={this.state.activeTab}
                            isPlaying={this.state.isPlaying}
                            duration={this.state.duration}
                            colors={[["#E8653B"]]}
                            onComplete={() => {
                                let activeTab = this.state.activeTab;
                                if (activeTab > 3) {
                                    activeTab = 1;
                                }
                                this.changeTab(activeTab);
                                return [true, 0];
                            }}
                            size={24}
                            strokeWidth={3}
                            strokeLinecap={"square"}
                        />
                    </Spinner>
                </Content>
            </Wrapper>
        );
    }
}

export default Slider;
