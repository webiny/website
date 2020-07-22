import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BaseLayout from "../layouts/base";
import GoServerless from "../components/homepage/go-serverless/go-serverless";
import WebinyApps from "../components/serverless-app/webiny-apps/webiny-apps";

const WebinyAppsPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout
            title="Open-source serverless applications | Webiny"
            description="Webiny is an open-source framework for building serverless applications. Webiny is powered by React, Node and GraphQL."
            fixedHeader={false}
        >
            <WebinyApps />
            <GoServerless />
        </BaseLayout>
    );
};

export default WebinyAppsPage;
