import BaseLayout from "../../layouts/base";
import Content from "../../components/case-study/kammer-alice-britt/content";
import Hero from "../../components/case-study/kammer-alice-britt/hero";
import ProblemSolution from "../../components/case-study/example/problem-solution";
import ProjectOverviewContent from "../../components/case-study/smarkt-mehrwert-reha-assist-oev/project-overview";
import React from "react";
import WebinyJourney from "../../components/case-study/example/webiny-journey";

const Example = () => {
    return (
        <BaseLayout title="Case Study: Versicherungskammer & Alice&Britt">
            <Hero />

            <ProjectOverviewContent />
            <Content />
        </BaseLayout>
    );
};

export default Example;
