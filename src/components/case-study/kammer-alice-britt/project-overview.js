import ProjectOverview from "../components/project-overview";
import React from "react";
import partnerLogo from "./assets/oev-partner-logo.png";

const LeftSide = () => {
    return (
        <React.Fragment>
            <h3>Project requirements</h3>
            <ul>
                <li>
                    <span />
                    Microservices architecture to publish content to other channels
                </li>
                <li>
                    <span />
                    Flexible tech stack for individual frontend features
                </li>
                <li>
                    <span />
                    Smart content models for fast and easy publishing of the new content
                </li>
                <li>
                    <span />
                    Fast go live
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
            <a title="OEV Online" href="https://digitalcampus360.de/" target="_blank">
                <img src={partnerLogo} alt="OEV Logo" />
            </a>
            <p>
                OEV Online Dienste GmbH (OEV) was founded in Düsseldorf (Germany) in 2001. It is an
                expert for digital media with distinct expertise in CMS systems. It develops
                comprehensive, cross-media concepts and advises clients on all aspects of digital
                distribution.{" "}
            </p>
        </React.Fragment>
    );
};

const ProjectOverviewContent = props => {
    return (
        <React.Fragment>
            <ProjectOverview left={<LeftSide />} right={<RightSide />} />
        </React.Fragment>
    );
};

export default ProjectOverviewContent;
