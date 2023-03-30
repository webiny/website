import BaseLayout from "../../layouts/base";
import Content from "../../components/case-study/example/content";
import Hero from "../../components/case-study/example/hero";
import ProblemSolution from "../../components/case-study/example/problem-solution";
import React from "react";
import WebinyJourney from "../../components/case-study/example/webiny-journey";

const Example = () => {
    return (
        <BaseLayout title="Case Study Example - Webiny">
            <Hero />
            <ProblemSolution />
            <Content />
            <WebinyJourney />
        </BaseLayout>
    );
};

export default Example;
