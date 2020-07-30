import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../../layouts/base";
import FileManager from "../../components/serverless-app/file-manager/file-manager";

export default () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout
            title="Serverless File Manager - Open Source"
            description="Upload, categorize, search and edit your files. Deploy using serverless framework."
        >
            <FileManager />
        </BaseLayout>
    );
};
