import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../../layouts/base";
import FileManager from "../../components/serverless-app/form-builder/form-builder";

export default () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout
            title="Serverless Form Builder - Open Source"
            description="Create forms using a drag&drop interface and track how they convert. Deploy using serverless framework."
        >
            <FileManager />
        </BaseLayout>
    );
};
