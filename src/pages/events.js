import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/events/hero";
import Events from "../components/events/events";
import Register from "../components/events/register";
import ScheduleTalk from "../components/events/schedule-talk";
import QuickStart from "../components/ui/quick-start/quick-start";

class IndexPage extends React.Component {  
    scheduleATalkRef = React.createRef();
    
goToScheduleTalkSection = () => {
    if (this.scheduleADemoRef && this.scheduleADemoRef.current) {
      const { offsetTop } = this.scheduleADemoRef.current;
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  render() {
    return (
      <BaseLayout title="Events" description="Webiny Online Meetups">
        <Hero />
        <Events />
        <Register handleTalkClick={this.goToScheduleTalkSection}  />
        <QuickStart />
        <ScheduleTalk refFromParent={this.scheduleATalkRef} />
      </BaseLayout>
    );
  }
}

export default IndexPage;
