import {initializeEvalHandler} from './execute-js-func';
import url from 'url';

initializeEvalHandler();

try {
  const fullPath = url.parse(window.location.href, true).query.module;
  window.requiredModule = require(fullPath);
} catch (e) {
  window.moduleLoadFailure = e;
}
