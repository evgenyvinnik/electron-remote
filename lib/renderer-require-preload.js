'use strict';

var _executeJsFunc = require('./execute-js-func');

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _executeJsFunc.initializeEvalHandler)();

try {
  const fullPath = _url2.default.parse(window.location.href, true).query.module;
  window.requiredModule = require(fullPath);
} catch (e) {
  window.moduleLoadFailure = e;
}