import React from "react";

import BaseLayout from "../../layouts/base";
import Hero from "../../components/case-study/example/hero";
import ProblemSolution from "../../components/case-study/example/problem-solution";
import Content from "../../components/case-study/example/content";
import WebinyJourney from "../../components/case-study/example/webiny-journey";

const Example = () => {
    return (
        <BaseLayout title="Case Study Example - Webiny">
            <Hero />
            <ProblemSolution />
            <Content />
            <WebinyJourney />
        </BaseLayout>
    )
}

export default Example
