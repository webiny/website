import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../../layouts/base";
import APIs from "../../components/use-case/apis/apis";

const ServerlessAPIs = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout title="Build serverless GraphQL APIs">
            <APIs />
        </BaseLayout>
    );
};

export default ServerlessAPIs;
