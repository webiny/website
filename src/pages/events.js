import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/events/hero';
import Events from '../components/events/events';
// import ServerlessReasons from '../components/why-serverless/serverless-reasons';
// import Challenges from '../components/why-serverless/challenges';
// import QuickStart from '../components/ui/quick-start/quick-start';

class IndexPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Events"
                description="Webiny Events. Conferences, Workshops, Webinars"
            >
                <Hero />
                <Events />

                {/* <ServerlessReasons />
                <Challenges />
                <QuickStart /> */}
            </BaseLayout>
        );
    }
}

export default IndexPage;
