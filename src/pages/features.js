import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/features/hero";
import About from "../components/features/about";
import Features from "../components/features/components/features";
import Admin from "../components/features/admin";
import QuickStart from "../components/ui/quick-start/quick-start";

class FeaturesPage extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Webiny - Features"
        description="Create reliable serverless apps with ease"
      >
        <Hero />
        <About />
        <Admin />
        <Features />
        <QuickStart />
      </BaseLayout>
    );
  }
}

export default FeaturesPage;
