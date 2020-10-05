import React from "react";
import BaseLayout from "../../layouts/base";

import Serverless from "../../components/guides/serverless";

export default ({ children, ...props }) => (
    <BaseLayout
        fixedHeader={true}
        title="Guide to Serverless"
        description="Learn about serverless. What it is, what are the main products, terms and basic know-how."
    >
        <Serverless />
    </BaseLayout>
);
