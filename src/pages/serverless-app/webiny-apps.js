import React from 'react';

import BaseLayout from '../../layouts/base';
import GoServerless from '../../components/homepage/go-serverless/go-serverless';
import WebinyApps from "../../components/serverless-app/webiny-apps/webiny-apps";

const WebinyAppsPage = () => {
    return (
        <BaseLayout
            title="The easiest way to adopt serverless | Webiny"
            description="Webiny is an open-source framework for building serverless applications. Webiny is powered by React, Node and GraphQL."
            fixedHeader={false}
        >
            <WebinyApps />
            <GoServerless />
        </BaseLayout>
    );
}

export default WebinyAppsPage;
