import React from "react";
import BaseLayout from "../../layouts/base";

import HeadlessCMS from "../../components/serverless-app/headless-cms/headless-cms";

export default ({ children, ...props }) => (
  <BaseLayout
    title="Serverless Headless CMS - Open Source"
    description="GraphQL based headless CMS with powerful content modeling features."
  >
    <HeadlessCMS />
  </BaseLayout>
);
