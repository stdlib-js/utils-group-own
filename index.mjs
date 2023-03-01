// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";var o=["values","keys","*"];function l(r,s){return e(s)?(n(s,"thisArg")&&(r.thisArg=s.thisArg),n(s,"returns")&&(r.returns=s.returns,-1===i(o,r.returns))?new TypeError(t("0jz3t","returns",o.join('", "'),r.returns)):null):new TypeError(t("0jz2h",s))}function u(r,s,t){var e,i,o,l,u;for(o in e=s.thisArg,i={},r)n(r,o)&&(l=r[o],u=t.call(e,l,o),n(i,u)?i[u].push(l):i[u]=[l]);return i}function d(r,s,t){var e,i,o,l;for(o in e=s.thisArg,i={},r)n(r,o)&&(l=t.call(e,r[o],o),n(i,l)?i[l].push(o):i[l]=[o]);return i}function h(r,s,t){var e,i,o,l,u;for(o in e=s.thisArg,i={},r)n(r,o)&&(l=r[o],u=t.call(e,l,o),n(i,u)?i[u].push([o,l]):i[u]=[[o,l]]);return i}function m(e,n,i){var o,m,j;if(!r(e))throw new TypeError(t("0jz3X",e));if(o={returns:"values"},2===arguments.length)j=n;else{if(m=l(o,n))throw m;j=i}if(!s(j))throw new TypeError(t("0jz43",j));return"values"===o.returns?u(e,o,j):"keys"===o.returns?d(e,o,j):h(e,o,j)}export{m as default};
//# sourceMappingURL=index.mjs.map