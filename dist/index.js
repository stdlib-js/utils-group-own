"use strict";var v=function(e,u){return function(){return u||e((u={exports:{}}).exports,u),u.exports}};var c=v(function(N,o){
var E=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-has-own-property/dist'),T=require('@stdlib/utils-index-of/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist'),g=["values","keys","*"];function V(e,u){return E(u)?(f(u,"thisArg")&&(e.thisArg=u.thisArg),f(u,"returns")&&(e.returns=u.returns,T(g,e.returns)===-1)?new TypeError(l('1UH4S',"returns",g.join('", "'),e.returns)):null):new TypeError(l('1UH2V',u));}o.exports=V
});var w=v(function(Q,p){
var h=require('@stdlib/assert-has-own-property/dist');function F(e,u,s){var i,t,r,a,n;i=u.thisArg,t={};for(r in e)h(e,r)&&(a=e[r],n=s.call(i,a,r),h(t,n)?t[n].push(a):t[n]=[a]);return t}p.exports=F
});var O=v(function(R,m){
var q=require('@stdlib/assert-has-own-property/dist');function L(e,u,s){var i,t,r,a;i=u.thisArg,t={};for(r in e)q(e,r)&&(a=s.call(i,e[r],r),q(t,a)?t[a].push(r):t[a]=[r]);return t}m.exports=L
});var d=v(function(S,A){
var y=require('@stdlib/assert-has-own-property/dist');function K(e,u,s){var i,t,r,a,n;i=u.thisArg,t={};for(r in e)y(e,r)&&(a=e[r],n=s.call(i,a,r),y(t,n)?t[n].push([r,a]):t[n]=[[r,a]]);return t}A.exports=K
});var P=v(function(U,k){
var z=require('@stdlib/assert-is-object-like/dist'),B=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist'),C=c(),D=w(),G=O(),H=d();function I(e,u,s){var i,t,r;if(!z(e))throw new TypeError(x('1UH3L',e));if(i={returns:"values"},arguments.length===2)r=u;else{if(t=C(i,u),t)throw t;r=s}if(!B(r))throw new TypeError(x('1UH3q',r));return i.returns==="values"?D(e,i,r):i.returns==="keys"?G(e,i,r):H(e,i,r)}k.exports=I
});var J=P();module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
