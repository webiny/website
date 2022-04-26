import React from "react";

import BaseLayout from "../layouts/base";
import Support from "../components/support/support";

class SupportPage extends React.Component {
    render() {
        return (
            <BaseLayout title="Support" description="Need some help? Explore the options below.">
                <Support />
            </BaseLayout>
        );
    }
}

export default SupportPage;
