import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../../layouts/base";
import Microservices from "../../components/use-case/micro-services/micro-services";

const ServerlessMicroServices = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout title="Build microservices inside a serverless cloud">
            <Microservices />
        </BaseLayout>
    );
};

export default ServerlessMicroServices;
