import React from "react";
import BaseLayout from "../../layouts/base";

import FileManager from "../../components/serverless-app/file-manager/file-manager";

export default ({ children, ...props }) => (
  <BaseLayout
    title="Serverless File Manager - Open Source"
    description="Upload, categorize, search and edit your files. Deploy using serverless framework."
  >
    <FileManager />
  </BaseLayout>
);
