import BaseLayout from "../../layouts/base";
import Content from "../../components/case-study/smarkt-mehrwert-reha-assist-oev/content";
import Hero from "../../components/case-study/smarkt-mehrwert-reha-assist-oev/hero";
import ProjectOverviewContent from "../../components/case-study/smarkt-mehrwert-reha-assist-oev/project-overview";
import React from "react";

const Example = () => {
    return (
        <BaseLayout title="Case Study: S-MARKT & MEHRWERT / REHA ASSIST">
            <Hero />
            <ProjectOverviewContent />
            <Content />
        </BaseLayout>
    );
};

export default Example;
