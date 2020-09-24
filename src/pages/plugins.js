import React from "react";

import BaseLayout from "../layouts/base";
import Plugins from "../components/plugins/plugins.js";

class PluginPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Webiny Plugins"
                description="Webiny plugin repository. Find the right plugin for your Webiny serverless website."
            >
                <Plugins />
            </BaseLayout>
        );
    }
}

export default PluginPage;
