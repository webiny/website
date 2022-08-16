import React from "react";
import BaseLayout from "../layouts/base";
import Hero from "../components/contact-form/hero";

const metaDescription = "We send around one email per month exclusively about Webiny. We don't share your email address with anyone else."
class NewsletterPage extends React.Component {
    render() {
        return (
        <BaseLayout title="Sign up for our newsletter" description={metaDescription}>
            <Hero />
        </BaseLayout>
        );
    }
}

export default NewsletterPage;
