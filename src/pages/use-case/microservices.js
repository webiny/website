import React from "react";

import BaseLayout from "../../layouts/base";
import Microservices from "../../components/use-case/microservices";

class Components extends React.Component {
  render() {
    return (
      <BaseLayout title="Build microservices inside a serverless cloud">
        <Microservices />
      </BaseLayout>
    );
  }
}

export default Components;
