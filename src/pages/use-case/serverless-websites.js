import React from "react";

import BaseLayout from "../../layouts/base";
import Websites from "../../components/use-case/websites";

class Components extends React.Component {
    render() {
        return (
            <BaseLayout title="Build serverless websites">
                <Websites />
            </BaseLayout>
        );
    }
}

export default Components;
