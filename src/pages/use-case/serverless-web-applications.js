import React from "react";

import BaseLayout from "../../layouts/base";
import Apps from "../../components/use-case/applications";

class Components extends React.Component {
    render() {
        return (
            <BaseLayout title="Build serverless web applications">
                <Apps />
            </BaseLayout>
        );
    }
}

export default Components;
