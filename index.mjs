// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";var o=["values","keys","*"];function u(t,r){return e(r)?(n(r,"thisArg")&&(t.thisArg=r.thisArg),n(r,"returns")&&(t.returns=r.returns,-1===i(o,t.returns))?new TypeError(s('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",o.join('", "'),t.returns)):null):new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",r))}function l(t,r,s){var e,i,o,u,l;for(o in e=r.thisArg,i={},t)n(t,o)&&(u=t[o],l=s.call(e,u,o),n(i,l)?i[l].push(u):i[l]=[u]);return i}function a(t,r,s){var e,i,o,u;for(o in e=r.thisArg,i={},t)n(t,o)&&(u=s.call(e,t[o],o),n(i,u)?i[u].push(o):i[u]=[o]);return i}function m(t,r,s){var e,i,o,u,l;for(o in e=r.thisArg,i={},t)n(t,o)&&(u=t[o],l=s.call(e,u,o),n(i,l)?i[l].push([o,u]):i[l]=[[o,u]]);return i}function d(e,n,i){var o,d,h;if(!t(e))throw new TypeError(s("invalid argument. First argument must be an object. Value: `%s`.",e));if(o={returns:"values"},2===arguments.length)h=n;else{if(d=u(o,n))throw d;h=i}if(!r(h))throw new TypeError(s("invalid argument. Last argument must be a function. Value: `%s`.",h));return"values"===o.returns?l(e,o,h):"keys"===o.returns?a(e,o,h):m(e,o,h)}export{d as default};
//# sourceMappingURL=index.mjs.map
