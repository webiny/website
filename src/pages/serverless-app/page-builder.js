import React from "react";
import BaseLayout from "../../layouts/base";

import PageBuilder from "../../components/serverless-app/page-builder/page-builder";

export default ({ children, ...props }) => (
  <BaseLayout
    title="Serverless Drag&Drop Page Builder - Open Source"
    description="Build stunning landing pages with an easy to use drag&drop editor. Deploy using serverless framework."
  >
    <PageBuilder />
  </BaseLayout>
);
