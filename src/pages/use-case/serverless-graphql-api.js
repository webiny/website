import React from "react";

import BaseLayout from "../../layouts/base";
import Apis from "../../components/use-case/apis";

class Components extends React.Component {
    render() {
        return (
            <BaseLayout title="Build serverless GraphQL APIs">
                <Apis />
            </BaseLayout>
        );
    }
}

export default Components;
