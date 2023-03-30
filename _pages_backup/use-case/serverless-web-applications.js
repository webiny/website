import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../../layouts/base";
import Applications from "../../components/use-case/applications/applications";

const ServerlessWebApplications = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout title="Build serverless web applications">
            <Applications />
        </BaseLayout>
    );
};

export default ServerlessWebApplications;
