import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/contact-us/hero/hero";

class ContactUsPage extends React.Component {
    render() {
        return (
            <BaseLayout title="Contact Us">
                <Hero />
            </BaseLayout>
        );
    }
}

export default ContactUsPage;
