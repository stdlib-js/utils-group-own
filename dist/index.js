"use strict";var v=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw (t=0, n)}};};var c=v(function(N,o){
var E=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-has-own-property/dist'),T=require('@stdlib/utils-index-of/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist'),g=["values","keys","*"];function V(e,t){return E(t)?(f(t,"thisArg")&&(e.thisArg=t.thisArg),f(t,"returns")&&(e.returns=t.returns,T(g,e.returns)===-1)?new TypeError(l('1UH4S',"returns",g.join('", "'),e.returns)):null):new TypeError(l('1UH2V',t));}o.exports=V
});var w=v(function(Q,p){
var h=require('@stdlib/assert-has-own-property/dist');function F(e,t,n){var i,u,r,a,s;i=t.thisArg,u={};for(r in e)h(e,r)&&(a=e[r],s=n.call(i,a,r),h(u,s)?u[s].push(a):u[s]=[a]);return u}p.exports=F
});var O=v(function(R,m){
var q=require('@stdlib/assert-has-own-property/dist');function L(e,t,n){var i,u,r,a;i=t.thisArg,u={};for(r in e)q(e,r)&&(a=n.call(i,e[r],r),q(u,a)?u[a].push(r):u[a]=[r]);return u}m.exports=L
});var d=v(function(S,A){
var y=require('@stdlib/assert-has-own-property/dist');function K(e,t,n){var i,u,r,a,s;i=t.thisArg,u={};for(r in e)y(e,r)&&(a=e[r],s=n.call(i,a,r),y(u,s)?u[s].push([r,a]):u[s]=[[r,a]]);return u}A.exports=K
});var P=v(function(U,k){
var z=require('@stdlib/assert-is-object-like/dist'),B=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist'),C=c(),D=w(),G=O(),H=d();function I(e,t,n){var i,u,r;if(!z(e))throw new TypeError(x('1UH3L',e));if(i={returns:"values"},arguments.length===2)r=t;else{if(u=C(i,t),u)throw u;r=n}if(!B(r))throw new TypeError(x('1UH3q',r));return i.returns==="values"?D(e,i,r):i.returns==="keys"?G(e,i,r):H(e,i,r)}k.exports=I
});var J=P();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
