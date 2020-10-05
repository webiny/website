import React from "react";
import BaseLayout from "../layouts/base";

import Swdf from "../components/serverless-app/swdf/swdf";

export default ({ children, ...props }) => (
    <BaseLayout
        title="Serverless Web Development Framework - Open Source"
        description="Everything you need to build, deploy and operate serverless web applications."
    >
        <Swdf />
    </BaseLayout>
);
