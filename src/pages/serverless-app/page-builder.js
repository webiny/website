import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../../layouts/base";

import PageBuilder from "../../components/serverless-app/page-builder/page-builder";

export default () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout
            title="Serverless Drag&Drop Page Builder - Open Source"
            description="Build stunning landing pages with an easy to use drag&drop editor. Deploy using serverless framework."
        >
            <PageBuilder />
        </BaseLayout>
    );
};
