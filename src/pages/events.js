import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/events/hero";
import Events from "../components/events/events";
import Register from "../components/events/register";
import ScheduleTalk from "../components/events/schedule-talk";
// import ServerlessReasons from '../components/why-serverless/serverless-reasons';
// import Challenges from '../components/why-serverless/challenges';
import QuickStart from "../components/ui/quick-start/quick-start";

class IndexPage extends React.Component {
  render() {
    return (
      <BaseLayout title="Events" description="Webiny Online Meetups">
        <Hero />
        <Events />
        <Register />
        <QuickStart />
        <ScheduleTalk />
      </BaseLayout>
    );
  }
}

export default IndexPage;
