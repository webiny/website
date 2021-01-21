import React from "react";
import BaseLayout from "../layouts/base";
import Hero from "../components/serverless-cms/hero";
import EasyPart from "../components/serverless-cms/easy-part";
import OneSize from "../components/serverless-cms/one-size";
import GoServerless from "../components/serverless-cms/go-serverless";
import CaseStudy from "../components/serverless-cms/case-study";
import BuildCMS from "../components/serverless-cms/build-framework";
import ExploreCMS from "../components/serverless-cms/explore-cms";
import Power from "../components/serverless-cms/power";
import Framework from "../components/serverless-cms/framework";

const ServerlessCMS = () => {
    const breadcrumbs = [
        {link: '/', text: 'Home'},
        {link: '/serverless-cms', text: 'Serverless CMS'},
    ]
    return (
        <BaseLayout title="Serverless CMS - Webiny" >
            <Hero breadcrumbs={breadcrumbs}/>
            <OneSize />
            <EasyPart />            
            <BuildCMS />
            <Power />
            <CaseStudy />
            <ExploreCMS />
            <Framework />
            <GoServerless />
        </BaseLayout>
    );
}

export default ServerlessCMS;
