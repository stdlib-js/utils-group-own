// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).groupOwn=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var l,a,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(r,t)||f.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var l=t;function a(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function v(r,t){return null!=r&&b.call(r,t)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=p()?function(r){var t,e,n;if(null==r)return y.call(r);e=r[g],t=v(r,g);try{r[g]=void 0}catch(t){return y.call(r)}return n=y.call(r),t?r[g]=e:delete r[g],n}:function(r){return y.call(r)};var h=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function m(r){return null!==r&&"object"==typeof r}a(m,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!h(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(m));var d=/./;function _(r){return"boolean"==typeof r}var w=Boolean.prototype.toString;var O=p();function E(r){return"object"==typeof r&&(r instanceof Boolean||(O?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function S(r){return _(r)||E(r)}function T(){return new Function("return this;")()}a(S,"isPrimitive",_),a(S,"isObject",E);var A="object"==typeof self?self:null,P="object"==typeof window?window:null,I="object"==typeof global?global:null;var N=function(r){if(arguments.length){if(!_(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return T()}if(A)return A;if(P)return P;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),V=N.document&&N.document.childNodes,B=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;function x(r){var t,e,n,o;if(("Object"===(e=j(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=k.exec(n.toString()))return t[1]}return m(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(F,"REGEXP",k);var z="function"==typeof d||"object"==typeof B||"function"==typeof V?function(r){return x(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?x(r).toLowerCase():t};function C(r){return"function"===z(r)}function G(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}var L,M=Object.getPrototypeOf;L=C(Object.getPrototypeOf)?M:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var R=L;var U=Object.prototype;function X(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!h(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),R(r))}(r),!t||!v(r,"constructor")&&v(t,"constructor")&&C(t.constructor)&&"[object Function]"===j(t.constructor)&&v(t,"isPrototypeOf")&&C(t.isPrototypeOf)&&(t===U||function(r){var t;for(t in r)if(!v(r,t))return!1;return!0}(r)))}function Y(r){return"number"==typeof r}var q=Number,D=q.prototype.toString;var H=p();function J(r){return"object"==typeof r&&(r instanceof q||(H?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function K(r){return Y(r)||J(r)}function Q(r){return r!=r}function W(r){return Y(r)&&Q(r)}function Z(r){return J(r)&&Q(r.valueOf())}function $(r){return W(r)||Z(r)}a(K,"isPrimitive",Y),a(K,"isObject",J),a($,"isPrimitive",W),a($,"isObject",Z);var rr=Math.floor;function tr(r){return rr(r)===r}function er(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&tr(r.length)&&r.length>=0&&r.length<=9007199254740991}function nr(r){return"string"==typeof r}var or=String.prototype.valueOf;var ur=p();function ir(r){return"object"==typeof r&&(r instanceof String||(ur?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object String]"===j(r)))}function cr(r){return nr(r)||ir(r)}a(cr,"isPrimitive",nr),a(cr,"isObject",ir);var fr=Number.POSITIVE_INFINITY,lr=q.NEGATIVE_INFINITY;function ar(r){return r<fr&&r>lr&&tr(r)}function sr(r){return Y(r)&&ar(r)}function pr(r){return J(r)&&ar(r.valueOf())}function yr(r){return sr(r)||pr(r)}a(yr,"isPrimitive",sr),a(yr,"isObject",pr);var br=["values","keys","*"];function vr(r,t){return X(t)?(v(t,"thisArg")&&(r.thisArg=t.thisArg),v(t,"returns")&&(r.returns=t.returns,-1===function(r,t,e){var n,o;if(!er(r)&&!nr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!sr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if($(t)){for(;o<n;o++)if($(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}(br,r.returns))?new TypeError(G("0jz3t","returns",br.join('", "'),r.returns)):null):new TypeError(G("0jz2h",t))}function gr(r,t,e){var n,o,u,i,c;for(u in n=t.thisArg,o={},r)v(r,u)&&(i=r[u],v(o,c=e.call(n,i,u))?o[c].push(i):o[c]=[i]);return o}function jr(r,t,e){var n,o,u,i;for(u in n=t.thisArg,o={},r)v(r,u)&&(v(o,i=e.call(n,r[u],u))?o[i].push(u):o[i]=[u]);return o}function hr(r,t,e){var n,o,u,i,c;for(u in n=t.thisArg,o={},r)v(r,u)&&(i=r[u],v(o,c=e.call(n,i,u))?o[c].push([u,i]):o[c]=[[u,i]]);return o}return function(r,t,e){var n,o,u;if(!m(r))throw new TypeError(G("0jz3X",r));if(n={returns:"values"},2===arguments.length)u=t;else{if(o=vr(n,t))throw o;u=e}if(!C(u))throw new TypeError(G("0jz43",u));return"values"===n.returns?gr(r,n,u):"keys"===n.returns?jr(r,n,u):hr(r,n,u)}}));
//# sourceMappingURL=index.js.map
