import React from "react";
import Head from "../../layouts/components/head"; 

class SlackPage extends React.Component {
    componentDidMount() {
        const _w = typeof window !== "undefined" ? window : false;
        if (_w !== false) {
            window.location =
                "https://webiny.orthisbe.com/calendar/team/t/2";
        }
    }
    render() {
        return (
            <React.Fragment>
                <Head
                    title={"Webiny - Partnership call"}
                    description={"Partnership call"}
                />
            </React.Fragment>
        );
    }
}

export default SlackPage;
