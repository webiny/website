import React from "react";

import BaseLayout from "../layouts/base";
import Telemetry from "../components/static/telemetry";

class TelemetryPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Telemetry"
                description="Webiny telemetry is a service that collects anonymous usage information."
            >
                <Telemetry />
            </BaseLayout>
        );
    }
}

export default TelemetryPage;
