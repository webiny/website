import React from "react";
import Head from "./components/head";

class RedirectLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head title={this.props.title} description={this.props.description} />
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default RedirectLayout;
