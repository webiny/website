import React from "react";
import {MDXProvider} from '@mdx-js/react'
import Policy from './privacy.mdx'
import BaseLayout from "../layouts/base";
import PrivacyPolicy from "../components/static/privacy";

class PrivacyPolicyPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Privacy Policy"
                description="Privacy Policy and Cookie Policy for Website"
            >
                <MDXProvider>
                    <PrivacyPolicy>
                        <Policy />
                    </PrivacyPolicy>
                </MDXProvider>
            </BaseLayout>
        );
    }
}

export default PrivacyPolicyPage;
