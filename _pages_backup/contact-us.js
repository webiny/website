import React from "react";
import BaseLayout from "../layouts/base";
import Hero from "../components/contact-us/hero/hero";

const metaDescription =
    "You are welcome to contact us with any question, feedback or comment you might have. We'll try to respond in shortest possible time.";
class ContactUsPage extends React.Component {
    render() {
        return (
            <BaseLayout title="Contact Us" description={metaDescription}>
                <Hero />
            </BaseLayout>
        );
    }
}

export default ContactUsPage;
