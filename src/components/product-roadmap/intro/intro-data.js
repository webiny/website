import theme from "../../utils/theme";

export const TASKS = [
    {
        id: 0,
        tag: { accent: theme.color.darkWine, text: "help needed" },
        title: "DynamoDB support",
        body: "Add DynamoDB as one of the supported databases.",
        action: {
            label: "learn more",
            link: "/"
        }
    },
    {
        id: 1,
        tag: { accent: theme.color.secondaryDark, text: "approved" },
        title: "Page builder i18n integration",
        body: "Add multi-language support to Webiny",
        action: {
            label: "learn more",
            link: "/"
        }
    },
    {
        id: 2,
        tag: { accent: theme.color.darkWine, text: "help needed" },
        title: "Multi-cloud support",
        body: "Add support for GCP and Azure.",
        action: {
            label: "learn more",
            link: "/"
        }
    },
    {
        id: 3,
        tag: { accent: theme.color.secondaryDark, text: "approved" },
        title: "Plugin repository",
        body: "Public searchable repository of Webiny plugins.",
        action: {
            label: "learn more",
            link: "/"
        }
    },
    {
        id: 4,
        tag: { accent: theme.color.secondaryDark, text: "approved" },
        title: "Support 3rd party identity providers (Okta, Auth0)",
        body: "Manage access to Webiny using 3rd party identity providers",
        action: {
            label: "learn more",
            link: "/"
        }
    },
    {
        id: 5,
        tag: { accent: theme.color.darkWine, text: "help needed" },
        title: "Amazon Aurora Serverless",
        body: "Run Webiny using an SQL database on Serverless Aurora",
        action: {
            label: "learn more",
            link: "/"
        }
    }
];

