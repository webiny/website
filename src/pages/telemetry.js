import React from "react";

import BaseLayout from "../layouts/base";
import Telemetry from "../components/static/telemetry";

class TelemetryPage extends React.Component {
  render() {
    return (
      <BaseLayout title="Telemetry - Webiny">
        <Telemetry />
      </BaseLayout>
    );
  }
}

export default TelemetryPage;
