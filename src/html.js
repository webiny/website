'use strict';

var _interopRequireDefault = require ('@babel/runtime/helpers/interopRequireDefault');

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault (
  require ('@babel/runtime/helpers/inheritsLoose')
);

var _react = _interopRequireDefault (require ('react'));

var _propTypes = _interopRequireDefault (require ('prop-types'));

var HTML =
  /*#__PURE__*/
  (function (_React$Component) {
    (0, _inheritsLoose2.default) (HTML, _React$Component);

    function HTML () {
      return _React$Component.apply (this, arguments) || this;
    }

    var _proto = HTML.prototype;

    _proto.render = function render () {
      return _react.default.createElement (
        'html',
        this.props.htmlAttributes,
        _react.default.createElement (
          'head',
          null,
          _react.default.createElement ('meta', {
            charSet: 'utf-8',
          }),
          _react.default.createElement ('meta', {
            httpEquiv: 'x-ua-compatible',
            content: 'ie=edge',
          }),
          _react.default.createElement ('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          }),
          this.props.headComponents
        ),
        _react.default.createElement (
          'body',
          this.props.bodyAttributes,
          this.props.preBodyComponents,
          _react.default.createElement ('div', {
            key: 'body',
            id: '___gatsby',
            dangerouslySetInnerHTML: {
              __html: this.props.body +
                `<script>(function(d,a){function c(){var b=d.createElement("script");b.async=!0;b.type="text/javascript";b.src=a._settings.messengerUrl;b.crossOrigin="anonymous";var c=d.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}window.kayako=a;a.readyQueue=[];a.newEmbedCode=!0;a.ready=function(b){a.readyQueue.push(b)};a._settings={apiUrl:"https://webiny.kayako.com/api/v1",messengerUrl:"https://webiny.kayakocdn.com/messenger",realtimeUrl:"wss://kre.kayako.net/socket"};window.attachEvent?window.attachEvent("onload",c):window.addEventListener("load",c,!1)})(document,window.kayako||{});</script>`,
            },
          }),
          this.props.postBodyComponents
        )
      );
    };

    return HTML;
  }) (_react.default.Component);

exports.default = HTML;
HTML.propTypes = {
  htmlAttributes: _propTypes.default.object,
  headComponents: _propTypes.default.array,
  bodyAttributes: _propTypes.default.object,
  preBodyComponents: _propTypes.default.array,
  body: _propTypes.default.string,
  postBodyComponents: _propTypes.default.array,
};
