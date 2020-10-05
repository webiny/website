import manageInterfaceImg from "./assets/manage-interface.svg";
import manageUIImg from "./assets/ui.svg";
import manageTeamsImg from "./assets/manage-teams.svg";
import integrationAndDeploymentImg from "./assets/ci-cd.svg";
import cloudInfrastructureImg from "./assets/cloud.svg";
import reportingAndMonitoringImg from "./assets/reporting-monitoring.svg";

export const FEATURES = [
    {
        id: 0,
        image: { src: manageInterfaceImg, alt: "Management interface" },
        title: "Management interface",
        body:
            "Using Webiny Control Panel (WCP) manage all your projects and teams from a single place.",
    },
    {
        id: 1,
        image: { src: manageUIImg, alt: "Create projects through a UI" },
        title: "Create projects through a UI",
        body: "Creating new Webiny projects takes only a few mouse clicks.",
    },
    {
        id: 2,
        image: { src: manageTeamsImg, alt: "Manage your team and permissions" },
        title: "Manage your team and permissions",
        body: "Place team members in groups. Set group permissions and projects they can access.",
    },
    {
        id: 3,
        image: { src: integrationAndDeploymentImg, alt: "CI/CD is built-in" },
        title: "CI/CD is built-in",
        body:
            "WCP comes with CI/CD built-in. Any change to your code repository automatically triggers a build.",
    },
    {
        id: 4,
        image: { src: cloudInfrastructureImg, alt: "Hosted on your own AWS cloud" },
        title: "Hosted on your own AWS cloud",
        body:
            "Projects created through WCP get deployed to your own AWS cloud. You own all of your data, networking, and have full control over the security access.",
    },
    {
        id: 5,
        image: { src: reportingAndMonitoringImg, alt: "Reporting and monitoring" },
        title: "Reporting and monitoring",
        body:
            "WCP will tell you how much a certain project is costing you in terms of your AWS resources. You can set alerts and budget limits ensuring things don't go out of hand. ",
    },
];
