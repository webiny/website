import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../../layouts/base";

import HeadlessCMS from "../../components/serverless-app/headless-cms/headless-cms";

export default () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <BaseLayout
            title="Serverless Headless CMS - Open Source"
            description="GraphQL based headless CMS with powerful content modeling features."
        >
            <HeadlessCMS />
        </BaseLayout>
    );
};
