import React from "react";
import ProjectOverview from "../components/project-overview";

import partnerLogo from "./assets/oev-partner-logo.png";

const LeftSide = () => {
    return (
        <React.Fragment>
            <h3>Project requirements</h3>
            <ul>
                <li>
                    <span />
                    Flexible tech stack on the frontend
                </li>
                <li>
                    <span />
                    Microservices architecture
                </li>
                <li>
                    <span />
                    Quick turnaround time for publishing new content
                </li>
                <li>
                    <span />
                    Future-proof the stack beyond the MVP stage
                </li>
            </ul>
            <h3>Product used</h3>
            <ul>
                <li>
                    <span />
                    Webiny Serverless CMS
                </li>
            </ul>
        </React.Fragment>
    );
};

const RightSide = () => {
    return (
        <React.Fragment>
            <h3>Partner</h3>
            <a title="OEV Online" href="https://oev-online.de" target="_blank" rel="noreferrer">
                <img src={partnerLogo} alt="OEV Logo" />
            </a>
            <p>
                OEV Online Dienste GmbH was founded in Düsseldorf (Germany) in 2001. It is an expert
                for digital media with distinct expertise in CMS systems. It develops comprehensive,
                cross-media concepts and advises clients on all aspects of digital distribution.{" "}
            </p>
        </React.Fragment>
    );
};

const ProjectOverviewContent = () => {
    return (
        <React.Fragment>
            <ProjectOverview left={<LeftSide />} right={<RightSide />} />
        </React.Fragment>
    );
};

export default ProjectOverviewContent;
