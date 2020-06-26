import React from "react";
import BaseLayout from "../../layouts/base";

import FileManager from "../../components/serverless-app/form-builder/form-builder";

export default ({ children, ...props }) => (
  <BaseLayout
    title="Serverless Form Builder - Open Source"
    description="Create forms using a drag&drop interface and track how they convert. Deploy using serverless framework."
  >
    <FileManager />
  </BaseLayout>
);
