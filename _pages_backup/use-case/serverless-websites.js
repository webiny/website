import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../../layouts/base";
import Websites from "../../components/use-case/websites/websites";

const ServerlessWebsites = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout title="Build serverless websites">
            <Websites />
        </BaseLayout>
    );
};

export default ServerlessWebsites;
