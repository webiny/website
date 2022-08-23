import React from "react";

import BaseLayout from "../layouts/base";
import PrivacyPolicy from "../components/static/privacy";

class PrivacyPolicyPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Privacy Policy"
                description="Privacy Policy and Cookie Policy for Website"
            >
                <PrivacyPolicy />
            </BaseLayout>
        );
    }
}

export default PrivacyPolicyPage;
