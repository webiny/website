"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PageRenderer = exports.StaticQuery = exports.StaticQueryContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsbyLink = _interopRequireWildcard(require("gatsby-link"));

exports.Link = _gatsbyLink.default;
exports.withPrefix = _gatsbyLink.withPrefix;
exports.push = _gatsbyLink.push;
exports.replace = _gatsbyLink.replace;
exports.navigateTo = _gatsbyLink.navigateTo;

var _pages = _interopRequireDefault(require("./pages.json"));

var _loader = _interopRequireDefault(require("./loader"));

var _jsonStore = _interopRequireDefault(require("./json-store"));

var PageRenderer = function PageRenderer(_ref) {
  var location = _ref.location;

  var pageResources = _loader.default.getResourcesForPathname(location.pathname);

  return _react.default.createElement(_jsonStore.default, {
    pages: _pages.default,
    location: location,
    pageResources: pageResources
  });
};

exports.PageRenderer = PageRenderer;
PageRenderer.propTypes = {
  location: _propTypes.default.shape({
    pathname: _propTypes.default.string.isRequired
  }).isRequired
};

var StaticQueryContext = _react.default.createContext({});

exports.StaticQueryContext = StaticQueryContext;

var StaticQuery = function StaticQuery(props) {
  return _react.default.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return _react.default.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

exports.StaticQuery = StaticQuery;
StaticQuery.propTypes = {
  data: _propTypes.default.object,
  query: _propTypes.default.string.isRequired,
  render: _propTypes.default.func,
  children: _propTypes.default.func
};