import React from "react";
import Head from "../layouts/components/head";

class SlackPage extends React.Component {
    componentDidMount() {
        const _w = typeof window !== "undefined" ? window : false;
        if (_w !== false) {
            window.location =
                "https://join.slack.com/t/webiny-community/shared_invite/zt-guwcjc0y-7PUrLCBLvxYFoWm0pdpW4g";
        }
    }
    render() {
        return (
            <React.Fragment>
                <Head
                    title={"Webiny - Slack Community"}
                    description={"Join Webiny community on Slack."}
                />
            </React.Fragment>
        );
    }
}

export default SlackPage;
