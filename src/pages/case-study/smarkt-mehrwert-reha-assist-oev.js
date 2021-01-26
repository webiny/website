import React from "react";

import BaseLayout from "../../layouts/base";
import Hero from "../../components/case-study/smarkt-mehrwert-reha-assist-oev/hero";
import ProjectOverviewContent from "../../components/case-study/smarkt-mehrwert-reha-assist-oev/project-overview";
import Content from "../../components/case-study/smarkt-mehrwert-reha-assist-oev/content";

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
