import React from "react";

import BaseLayout from "../layouts/base";
import Swag from "../components/static/swag";

class TelemetryPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Swag"
                fixedHeader={true}
                description="To show our appreciation to all our contributors and supporters, we are giving away free swag."
            >
                <Swag />
            </BaseLayout>
        );
    }
}

export default TelemetryPage;
