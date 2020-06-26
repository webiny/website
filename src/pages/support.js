import React from "react";

import BaseLayout from "../layouts/base";
import Support from "../components/support/support";

class SupportPage extends React.Component {
  render() {
    return (
      <BaseLayout title="Support - Webiny">
        <Support />
      </BaseLayout>
    );
  }
}

export default SupportPage;
