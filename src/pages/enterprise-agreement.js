import React from "react";
import {MDXProvider} from '@mdx-js/react'
import Policy from './enterprise-agreement-standard.mdx'
import BaseLayout from "../layouts/base";
import StaticTemplateBase from "../components/static/static-base";

class PrivacyPolicyPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Webiny - Enterprise License Terms"
                description="Webiny - Enterprise Agreement"
            >
                <MDXProvider>
                    <StaticTemplateBase title={"Webiny Enterprise Agreement"}>
                        <Policy />
                    </StaticTemplateBase>
                </MDXProvider>
            </BaseLayout>
        );
    }
}

export default PrivacyPolicyPage;
