import BaseLayout from "../../layouts/base";
import Content from "../../components/case-study/kammer-alice-britt/content";
import Hero from "../../components/case-study/kammer-alice-britt/hero";
import ProjectOverviewContent from "../../components/case-study/kammer-alice-britt/project-overview";
import React from "react";

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
