/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("prismjs/themes/prism.css");

exports.onRouteUpdate = ({ location, prevLocation }) => {
    if (window.posthog) {
        window.posthog.capture("$pageview");
    }
};
