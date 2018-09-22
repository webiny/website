var plugins = [{
      plugin: require('/Users/svenalhamad/Dev/webiny-gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/svenalhamad/Dev/webiny-gatsby/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["source sans pro:300,400,500,600,700","source code pro:400,700","open sans:300,400,600,700"]},
    },{
      plugin: require('/Users/svenalhamad/Dev/webiny-gatsby/node_modules/gatsby-plugin-emotion/gatsby-ssr'),
      options: {"plugins":[],"sourceMap":true,"autoLabel":true},
    }]
"use strict";

// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
var apis = require("./api-ssr-docs"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);
    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};