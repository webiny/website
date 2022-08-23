import React from "react";

import BaseLayout from "../layouts/base";
import Tos from "../components/static/tos";

class TosPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Terms of Service"
                description="Welcome to Webiny's website. Please read on to learn the rules and restrictions that govern your use of our website"
            >
                <Tos />
            </BaseLayout>
        );
    }
}

export default TosPage;
