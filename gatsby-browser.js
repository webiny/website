/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("prismjs/themes/prism.css");
const { WTS } = require("wts/src/web");

exports.onInitialClientRender = ({ location, prevLocation }) => {
    setTimeout(async () => {
        if (window.heap) {
            window.wts = new WTS();
            window.wts.identify();
        }
    }, 500);
};

exports.onRouteUpdate = async ({ location, prevLocation }) => {
    if (window.wts) {
        window.wts.identify();
    }
};
