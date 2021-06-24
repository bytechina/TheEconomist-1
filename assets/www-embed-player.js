(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function oa(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.C=this.j=null}
function pa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
oa.prototype.A=function(a){this.i=a};
function qa(a,b){a.j={Ha:b,Ia:!0};a.h=a.m||a.o}
oa.prototype.return=function(a){this.j={return:a};this.h=this.o};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.B=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function sa(a){a.m=0;var b=a.j.Ha;a.j=null;return b}
function ta(a){a.C=[a.j];a.m=0;a.o=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.j=a.j||b)?b.Ia?a.h=a.m||a.o:void 0!=b.B&&a.o<b.B?(a.h=b.B,a.j=null):a.h=a.o:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ia)throw b.Ha;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.A):(a.h.A(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.A):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){b=new za(new va(b));na&&a.prototype&&na(b,a.prototype);return b}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Aa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Aa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Aa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Aa(k,g)&&Aa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Aa(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,H:p}}return{id:l,list:n,index:-1,H:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.H?l.H.value=k:(l.H={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.H),this.h.previous.next=l.H,this.h.previous=l.H,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.H&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.H.previous.next=h.H.next,h.H.next.previous=h.H.previous,h.H.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).H};
e.prototype.get=function(h){return(h=d(this,h).H)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Aa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Y(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.m(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.Z(h,g):this.m(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.m=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.M();this.C()};
b.prototype.M=function(){var g=this;e(function(){if(g.G()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.C=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Y=function(g){var h=this.l();g.ia(h.resolve,h.reject)};
b.prototype.Z=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(A){try{l(r(A))}catch(I){n(I)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.ia(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(A){return function(I){r[A]=I;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ia(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Aa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ea(){}
function Fa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ga(a){var b=Fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ia(a){return Object.prototype.hasOwnProperty.call(a,Ja)&&a[Ja]||(a[Ja]=++Ka)}
var Ja="closure_uid_"+(1E9*Math.random()>>>0),Ka=0;function La(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Na(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Na=La:Na=Ma;return Na.apply(null,arguments)}
function Oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Pa(a,b){z(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.dl=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Qa(a){return a}
;function Ra(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ra);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b&&(this.Pa=b)}
C(Ra,Error);Ra.prototype.name="CustomError";function Sa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Ta(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Va=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Xa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ya=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Za(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function $a(a,b){b=Va(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function ab(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function bb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function cb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(){var a=E("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var nb;function ob(){if(void 0===nb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Qa,createScript:Qa,createScriptURL:Qa})}catch(c){y.console&&y.console.error(c.message)}nb=a}else nb=a}return nb}
;function pb(a,b){this.h=b===qb?a:""}
m=pb.prototype;m.ba=!0;m.aa=function(){return this.h.toString()};
m.wa=!0;m.ra=function(){return 1};
m.toString=function(){return this.h+""};
function rb(a){if(a instanceof pb&&a.constructor===pb)return a.h;Fa(a);return"type_error:TrustedResourceUrl"}
var qb={};var sb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function tb(a,b){if(b)a=a.replace(ub,"&amp;").replace(vb,"&lt;").replace(wb,"&gt;").replace(xb,"&quot;").replace(yb,"&#39;").replace(zb,"&#0;");else{if(!Ab.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ub,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(vb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(wb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(xb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(yb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(zb,"&#0;"))}return a}
var ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;function Bb(a,b){this.h=b===Cb?a:""}
m=Bb.prototype;m.ba=!0;m.aa=function(){return this.h.toString()};
m.wa=!0;m.ra=function(){return 1};
m.toString=function(){return this.h.toString()};
function Db(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;Fa(a);return"type_error:SafeUrl"}
var Eb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Fb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Cb={},Hb=new Bb("about:invalid#zClosurez",Cb);var Ib;a:{var Jb=y.navigator;if(Jb){var Kb=Jb.userAgent;if(Kb){Ib=Kb;break a}}Ib=""}function F(a){return-1!=Ib.indexOf(a)}
;function Lb(a,b,c){this.h=c===Mb?a:"";this.i=b}
m=Lb.prototype;m.wa=!0;m.ra=function(){return this.i};
m.ba=!0;m.aa=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Mb={};function Nb(a,b){var c=ob();a=c?c.createHTML(a):a;return new Lb(a,b,Mb)}
;function Ob(a,b){b instanceof Bb||b instanceof Bb||(b="object"==typeof b&&b.ba?b.aa():String(b),Gb.test(b)||(b="about:invalid#zClosurez"),b=new Bb(b,Cb));a.href=Db(b)}
function Pb(a,b){a.rel="stylesheet";a.href=rb(b).toString();(b=Qb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Rb(){return Qb("script[nonce]",void 0)}
var Sb=/^[\w+/_-]+[=]{0,2}$/;function Qb(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Sb.test(a)?a:"":""}
;function Tb(a){return a=tb(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){b=Zb(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var ac=/#|$/;function G(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function bc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function cc(a){cc[" "](a);return a}
cc[" "]=Ea;var dc=F("Opera"),ec=F("Trident")||F("MSIE"),fc=F("Edge"),gc=F("Gecko")&&!(-1!=Ib.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),hc=-1!=Ib.toLowerCase().indexOf("webkit")&&!F("Edge"),ic=F("Android");function jc(){var a=y.document;return a?a.documentMode:void 0}
var kc;a:{var lc="",mc=function(){var a=Ib;if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mc&&(lc=mc?mc[1]:"");if(ec){var nc=jc();if(null!=nc&&nc>parseFloat(lc)){kc=String(nc);break a}}kc=lc}var oc=kc,pc;if(y.document&&ec){var qc=jc();pc=qc?qc:parseInt(oc,10)||void 0}else pc=void 0;var rc=pc;var sc=bc()||F("iPod"),tc=F("iPad"),uc=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!F("Edge")||F("Coast")||F("Opera")||F("Edge")||F("Edg/")||F("OPR")||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(bc()||F("iPad")||F("iPod"));var vc={},wc=null;
function xc(a){var b=3;Ga(a);void 0===b&&(b=0);if(!wc){wc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));vc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===wc[h]&&(wc[h]=g)}}}b=vc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var yc={il:{value:!0,configurable:!0}};var zc=Object,Ac=zc.freeze,Bc=[];Array.isArray(Bc)&&!Object.isFrozen(Bc)&&Object.defineProperties(Bc,yc);Ac.call(zc,Bc);var H=window;var Cc={};function Dc(a){if(a!==Cc)throw Error("Bad secret");}
;function Ec(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
var Fc;function Gc(){var a,b;void 0===Fc&&(Fc=null!==(b=null===(a=Ec())||void 0===a?void 0:a.createPolicy("google#safe",{createHTML:function(c){return c},
createScript:function(c){return c},
createScriptURL:function(c){return c}}))&&void 0!==b?b:null);
return Fc}
;function Hc(){}
function Ic(a,b){Dc(b);this.h=a}
v(Ic,Hc);Ic.prototype.toString=function(){return this.h.toString()};function Jc(){}
function Kc(a,b){Dc(b);this.h=a}
v(Kc,Jc);Kc.prototype.toString=function(){return this.h};
var Lc=new Kc("about:invalid#zTSz",Cc);function Mc(){}
function Nc(a,b){Dc(b);this.i=a}
v(Nc,Mc);Nc.prototype.toString=function(){return this.i.toString()};function Oc(a){if(a instanceof Jc)if(a instanceof Kc)a=a.h;else throw Error("wrong type");else a=Db(a);return a}
;function Pc(a,b){if(b instanceof Mc){var c;if(null===(c=Ec())||void 0===c||!c.isScriptURL(b))if(b instanceof Nc)b=b.i;else throw Error("wrong type");}else b=rb(b);a.src=b;var d;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;(d=(b=null===(d=b.querySelector)||void 0===d?void 0:d.call(b,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",d)}
;var Qc=!ec||9<=Number(rc);function Rc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Rc.prototype;m.clone=function(){return new Rc(this.x,this.y)};
m.equals=function(a){return a instanceof Rc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Sc(a,b){this.width=a;this.height=b}
m=Sc.prototype;m.clone=function(){return new Sc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Tc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Uc(a,b){cb(b,function(c,d){c&&"object"==typeof c&&c.ba&&(c=c.aa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Vc.hasOwnProperty(d)?a.setAttribute(Vc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Vc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Wc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Qc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};mb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Xc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Uc(f,g));2<d.length&&Yc(e,f,d);return f}
function Yc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ga(f)||Ha(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ha(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?ab(f):f,d)}}}
function Xc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Zc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function $c(a){var b=ad;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function bd(){var a=[];$c(function(b){a.push(b)});
return a}
var ad={Jb:"allow-forms",Kb:"allow-modals",Lb:"allow-orientation-lock",Mb:"allow-pointer-lock",Nb:"allow-popups",Ob:"allow-popups-to-escape-sandbox",Pb:"allow-presentation",Qb:"allow-same-origin",Rb:"allow-scripts",Sb:"allow-top-navigation",Tb:"allow-top-navigation-by-user-activation"},cd=Ta(function(){return bd()});
function dd(){var a=Xc(document,"IFRAME"),b={};D(cd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function ed(a){this.isValid=a}
function fd(a){return new ed(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var gd=[fd("data"),fd("http"),fd("https"),fd("mailto"),fd("ftp"),new ed(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function hd(a){id();var b=ob();a=b?b.createScriptURL(a):a;return new pb(a,qb)}
var id=Ea;function jd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var kd=(new Date).getTime();function ld(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function md(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var A=e[1],I=e[2],K=e[3],X=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Y=K^A&(I^K);var L=1518500249}else Y=A^I^K,L=1859775393;else 60>q?(Y=A&I|K&(A|I),L=2400959708):(Y=A^I^K,L=3395469782);Y=((p<<5|p>>>27)&4294967295)+Y+X+L+r[q]&4294967295;X=K;K=I;I=(A<<30|A>>>2)&4294967295;A=p;p=Y}e[0]=e[0]+p&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+I&4294967295;e[3]=e[3]+K&4294967295;e[4]=e[4]+X&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],A=0,I=p.length;A<I;++A)q.push(p.charCodeAt(A));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var A=24;0<=A;A-=8)p[r++]=e[q]>>A&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Qa:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function nd(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,od(ld(d),a,c||null)].join(" "):null}
function od(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),pd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=pd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function pd(a){var b=md();b.update(a);return b.Qa().toLowerCase()}
;var qd={};function rd(a){this.h=a||{cookie:""}}
m=rd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ya:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.nl;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ya}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=sb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ya:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=sb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var sd=new rd("undefined"==typeof document?null:document);function td(a){return!!qd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ud(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;td(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new rd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");td(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function vd(a,b,c,d){(a=y[a])||(a=(new rd(document)).get(b));return a?nd(a,c,d):null}
function wd(a){var b=void 0===b?!1:b;var c=ld(String(y.location.href)),d=[];if(ud(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new rd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?nd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&td(b)&&((b=vd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=vd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function xd(){this.data_=[];this.h=-1}
xd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
xd.prototype.get=function(a){return!!this.data_[a]};
function yd(a){-1==a.h&&(a.h=Ya(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function zd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
zd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ad(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Bd;
function Cd(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Xc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Na(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ea;c.Ea=null;e()}};
return function(e){d.next={Ea:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Dd(a){y.setTimeout(function(){throw a;},0)}
;function Ed(){this.i=this.h=null}
Ed.prototype.add=function(a,b){var c=Fd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ed.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Fd=new zd(function(){return new Gd},function(a){return a.reset()});
function Gd(){this.next=this.scope=this.h=null}
Gd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Gd.prototype.reset=function(){this.next=this.scope=this.h=null};function Hd(a,b){Id||Jd();Kd||(Id(),Kd=!0);Ld.add(a,b)}
var Id;function Jd(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Id=function(){a.then(Md)}}else Id=function(){var b=Md;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!F("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Bd||(Bd=Cd()),Bd(b)):y.setImmediate(b)}}
var Kd=!1,Ld=new Ed;function Md(){for(var a;a=Ld.remove();){try{a.h.call(a.scope)}catch(b){Dd(b)}Ad(Fd,a)}Kd=!1}
;function Nd(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Nd.prototype[Symbol.iterator]=function(){return this};
Nd.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Od(a,b){return new Nd(a,b)}
;function Pd(){this.blockSize=-1}
;function Qd(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
C(Qd,Pd);Qd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Rd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Qd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)Rd(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Rd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Rd(this,e);f=0;break}}this.i=f;this.l+=b}};
Qd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Rd(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Sd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Td(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ud[c])c=Ud[c];else{c=String(c);if(!Ud[c]){var f=/function\s+([^\(]+)/m.exec(c);Ud[c]=f?f[1]:"[Anonymous]"}c=Ud[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Td(a,b){b||(b={});b[Vd(a)]=!0;var c=a.stack||"";(a=a.Pa)&&!b[Vd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Td(a,b));return c}
function Vd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ud={};function Wd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Xd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ga(d)?Xd.apply(null,d):Wd(d)}}
;function J(){this.h=this.h;this.o=this.o}
J.prototype.h=!1;J.prototype.dispose=function(){this.h||(this.h=!0,this.D())};
function Yd(a,b){a.h?b():(a.o||(a.o=[]),a.o.push(b))}
J.prototype.D=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function Zd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function $d(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ae(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Zd(a).match(/\S+/g)||[],b=0<=Va(a,b));return b}
function be(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ae(a,"inverted-hdpi")&&$d(a,Array.prototype.filter.call(a.classList?a.classList:Zd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var ce="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function de(){}
de.prototype.next=function(){return de.prototype.h.call(this)};
de.prototype.h=function(){throw ce;};
de.prototype.L=function(){return this};function ee(a){if(a instanceof fe||a instanceof ge||a instanceof he)return a;if("function"==typeof a.next)return new fe(function(){return ie(a)});
if("function"==typeof a[Symbol.iterator])return new fe(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new fe(function(){return ie(a.L())});
throw Error("Not an iterator or iterable.");}
function ie(a){if(!(a instanceof de))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.next();break}catch(d){if(d!==ce)throw d;b=!0}return{value:c,done:b}}}}
function fe(a){this.h=a}
fe.prototype.L=function(){return new ge(this.h())};
fe.prototype[Symbol.iterator]=function(){return new he(this.h())};
fe.prototype.i=function(){return new he(this.h())};
function ge(a){this.j=a}
v(ge,de);ge.prototype.h=function(){var a=this.j.next();if(a.done)throw ce;return a.value};
ge.prototype.next=function(){return ge.prototype.h.call(this)};
ge.prototype[Symbol.iterator]=function(){return new he(this.j)};
ge.prototype.i=function(){return new he(this.j)};
function he(a){fe.call(this,function(){return a});
this.j=a}
v(he,fe);he.prototype.next=function(){return this.j.next()};function je(a,b){this.i={};this.h=[];this.T=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof je)for(c=ke(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ke(a){le(a);return a.h.concat()}
m=je.prototype;m.has=function(a){return me(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ne;le(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ne(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.T=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return me(this.i,a)?(delete this.i[a],--this.size,this.T++,this.h.length>2*this.size&&le(this),!0):!1};
function le(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];me(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],me(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return me(this.i,a)?this.i[a]:b};
m.set=function(a,b){me(this.i,a)||(this.size+=1,this.h.push(a),this.T++);this.i[a]=b};
m.forEach=function(a,b){for(var c=ke(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new je(this)};
m.keys=function(){return ee(this.L(!0)).i()};
m.values=function(){return ee(this.L(!1)).i()};
m.entries=function(){var a=this;return Od(this.keys(),function(b){return[b,a.get(b)]})};
m.L=function(a){le(this);var b=0,c=this.T,d=this,e=new de;e.h=function(){if(c!=d.T)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw ce;var f=d.h[b++];return a?f:d.i[f]};
e.next=e.h.bind(e);return e};
function me(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var oe=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function pe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
pe.prototype.stopPropagation=function(){this.j=!0};
pe.prototype.preventDefault=function(){this.defaultPrevented=!0};function qe(a,b){pe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
C(qe,pe);var re={2:"touch",3:"pen",4:"mouse"};
qe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(gc){a:{try{cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:re[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&qe.O.preventDefault.call(this)};
qe.prototype.stopPropagation=function(){qe.O.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
qe.prototype.preventDefault=function(){qe.O.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var se="closure_listenable_"+(1E6*Math.random()|0);var te=0;function ue(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ka=e;this.key=++te;this.ea=this.ha=!1}
function ve(a){a.ea=!0;a.listener=null;a.h=null;a.src=null;a.ka=null}
;function we(a){this.src=a;this.listeners={};this.h=0}
we.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=xe(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new ue(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
we.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=xe(e,b,c,d);return-1<b?(ve(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ye(a,b){var c=b.type;c in a.listeners&&$a(a.listeners[c],b)&&(ve(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function xe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ea&&f.listener==b&&f.capture==!!c&&f.ka==d)return e}return-1}
;var ze="closure_lm_"+(1E6*Math.random()|0),Ae={},Be=0;function Ce(a,b,c,d,e){if(d&&d.once)De(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);else c=Ee(c),a&&a[se]?a.ca(b,c,Ha(d)?!!d.capture:!!d,e):Fe(a,b,c,!1,d,e)}
function Fe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ha(e)?!!e.capture:!!e,h=Ge(a);h||(a[ze]=h=new we(a));c=h.add(b,c,d,g,f);if(!c.h){d=He();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)oe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ie(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Be++}}
function He(){function a(c){return b.call(a.src,a.listener,c)}
var b=Je;return a}
function De(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)De(a,b[f],c,d,e);else c=Ee(c),a&&a[se]?a.i.add(String(b),c,!0,Ha(d)?!!d.capture:!!d,e):Fe(a,b,c,!0,d,e)}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else(d=Ha(d)?!!d.capture:!!d,c=Ee(c),a&&a[se])?a.i.remove(String(b),c,d,e):a&&(a=Ge(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=xe(b,c,d,e)),(c=-1<a?b[a]:null)&&Le(c))}
function Le(a){if("number"!==typeof a&&a&&!a.ea){var b=a.src;if(b&&b[se])ye(b.i,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ie(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Be--;(c=Ge(b))?(ye(c,a),0==c.h&&(c.src=null,b[ze]=null)):ve(a)}}}
function Ie(a){return a in Ae?Ae[a]:Ae[a]="on"+a}
function Je(a,b){if(a.ea)a=!0;else{b=new qe(b,this);var c=a.listener,d=a.ka||a.src;a.ha&&Le(a);a=c.call(d,b)}return a}
function Ge(a){a=a[ze];return a instanceof we?a:null}
var Me="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ee(a){if("function"===typeof a)return a;a[Me]||(a[Me]=function(b){return a.handleEvent(b)});
return a[Me]}
;function Ne(){J.call(this);this.i=new we(this);this.M=this;this.u=null}
C(Ne,J);Ne.prototype[se]=!0;Ne.prototype.addEventListener=function(a,b,c,d){Ce(this,a,b,c,d)};
Ne.prototype.removeEventListener=function(a,b,c,d){Ke(this,a,b,c,d)};
function Oe(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new pe(b,a):b instanceof pe?b.target=b.target||a:(e=b,b=new pe(c,a),mb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Pe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Pe(g,c,!0,b)&&e,b.j||(e=Pe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Pe(g,c,!1,b)&&e}
Ne.prototype.D=function(){Ne.O.D.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ve(d[e]);delete a.listeners[c];a.h--}}this.u=null};
Ne.prototype.ca=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Pe(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ea&&g.capture==c){var h=g.listener,k=g.ka||g.src;g.ha&&ye(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Qe(a){var b=[];Re(new Se,a,b);return b.join("")}
function Se(){}
function Re(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Re(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Te(d,c),c.push(":"),Re(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Te(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ue={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ve=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Te(a,b){b.push('"',a.replace(Ve,function(c){var d=Ue[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ue[c]=d);return d}),'"')}
;function We(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Xe(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){Ye(b,2,c)},function(c){Ye(b,3,c)})}catch(c){Ye(this,3,c)}}
function Ze(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Ze.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var $e=new zd(function(){return new Ze},function(a){a.reset()});
function af(a,b,c){var d=$e.get();d.i=a;d.onRejected=b;d.context=c;return d}
function bf(a){return new Xe(function(b,c){c(a)})}
Xe.prototype.then=function(a,b,c){return cf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Xe.prototype.$goog_Thenable=!0;function df(a,b){return cf(a,null,b,void 0)}
Xe.prototype.cancel=function(a){if(0==this.h){var b=new ef(a);Hd(function(){ff(this,b)},this)}};
function ff(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ff(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):gf(c),hf(c,e,3,b)))}a.j=null}else Ye(a,3,b)}
function jf(a,b){a.i||2!=a.h&&3!=a.h||kf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function cf(a,b,c,d){var e=af(null,null,null);e.h=new Xe(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ef?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;jf(a,e);return e.h}
Xe.prototype.C=function(a){this.h=0;Ye(this,2,a)};
Xe.prototype.G=function(a){this.h=0;Ye(this,3,a)};
function Ye(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.C,f=a.G;if(d instanceof Xe){jf(d,af(e||Ea,f||null,a));var g=!0}else if(We(d))d.then(e,f,a),g=!0;else{if(Ha(d))try{var h=d.then;if("function"===typeof h){lf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,kf(a),3!=b||c instanceof ef||mf(a,c))}}
function lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function kf(a){a.m||(a.m=!0,Hd(a.A,a))}
function gf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Xe.prototype.A=function(){for(var a;a=gf(this);)hf(this,a,this.h,this.u);this.m=!1};
function hf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,nf(b,c,d);else try{b.j?b.i.call(b.context):nf(b,c,d)}catch(e){of.call(null,e)}Ad($e,b)}
function nf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function mf(a,b){a.o=!0;Hd(function(){a.o&&of.call(null,b)})}
var of=Dd;function ef(a){Ra.call(this,a)}
C(ef,Ra);ef.prototype.name="cancel";function M(a){J.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
C(M,J);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function pf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.da(b)}}
m.da=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ea):(c&&$a(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.U=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];qf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.da(c)}}return 0!=e}return!1};
function qf(a,b,c){Hd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.da,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){M.O.D.call(this);this.clear();this.l.length=0};function rf(a){if(a.xa&&a.hasOwnProperty("xa"))return a.xa;var b=new a;return a.xa=b}
;function sf(a){this.h=a}
sf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Qe(b))};
sf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
sf.prototype.remove=function(a){this.h.remove(a)};function tf(a){this.h=a}
C(tf,sf);function uf(a){this.data=a}
function vf(a){return void 0===a||a instanceof uf?a:new uf(a)}
tf.prototype.set=function(a,b){tf.O.set.call(this,a,vf(b))};
tf.prototype.i=function(a){a=tf.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
tf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function wf(a){this.h=a}
C(wf,tf);wf.prototype.set=function(a,b,c){if(b=vf(b)){if(c){if(c<Date.now()){wf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}wf.O.set.call(this,a,b)};
wf.prototype.i=function(a){var b=wf.O.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())wf.prototype.remove.call(this,a);else return b}};function xf(){}
;function yf(){}
C(yf,xf);yf.prototype[Symbol.iterator]=function(){return ee(this.L(!0)).i()};
yf.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function zf(a){this.h=a}
C(zf,yf);m=zf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.L=function(a){var b=0,c=this.h,d=new de;d.h=function(){if(b>=c.length)throw ce;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Af(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
C(Af,zf);function Bf(a,b){this.i=a;this.h=null;if(ec&&!(9<=Number(rc))){Cf||(Cf=new je);this.h=Cf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Cf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
C(Bf,yf);var Df={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Cf=null;function Ef(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Df[b]})}
m=Bf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Ef(a),b);Ff(this)};
m.get=function(a){a=this.h.getAttribute(Ef(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Ef(a));Ff(this)};
m.L=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new de;d.h=function(){if(b>=c.length)throw ce;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
d.next=d.h.bind(d);return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ff(this)};
function Ff(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Gf(a,b){this.i=a;this.h=b+"::"}
C(Gf,yf);Gf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Gf.prototype.get=function(a){return this.i.get(this.h+a)};
Gf.prototype.remove=function(a){this.i.remove(this.h+a)};
Gf.prototype.L=function(a){var b=this.i.L(!0),c=this,d=new de;d.h=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
d.next=d.h.bind(d);return d};function Hf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var If,Jf,Kf=y.window,Lf=(null===(If=null===Kf||void 0===Kf?void 0:Kf.yt)||void 0===If?void 0:If.config_)||(null===(Jf=null===Kf||void 0===Kf?void 0:Kf.ytcfg)||void 0===Jf?void 0:Jf.data_)||{};z("yt.config_",Lf,void 0);function N(a){for(var b=0;b<arguments.length;++b);Hf(Lf,arguments)}
function E(a,b){return a in Lf?Lf[a]:b}
;var Mf=[];function Nf(a){Mf.forEach(function(b){return b(a)})}
function Of(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Pf(b)}}:a}
function Pf(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b));Nf(a)}
function Qf(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=E("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var Rf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Rf,void 0);function Sf(a){Hf(Rf,arguments)}
;function O(a){a=Tf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Uf(a,b){a=Tf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Tf(a){var b=E("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:E("EXPERIMENT_FLAGS",{})[a]}
;var Vf=0,Wf=hc?"webkit":gc?"moz":ec?"ms":dc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Vf},void 0);var Xf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Yf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xf||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Zf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Yf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Yf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Yf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",eb,void 0);var $f=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",$f,void 0);
function ag(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ha(e[4])&&Ha(d)&&ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var bg=Ta(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function cg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ag(a,b,c,d);if(e)return e;e=++$f.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Yf(h);if(!Zc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Yf(h);
h.currentTarget=a;return c.call(a,h)};
g=Of(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),bg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function dg(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?bg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var eg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function fg(a,b){"function"===typeof a&&(a=Of(a));return window.setTimeout(a,b)}
function gg(a){window.clearTimeout(a)}
;function hg(a){this.C=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.J=cg(window,"mousemove",Na(this.K,this));a=Na(this.G,this);"function"===typeof a&&(a=Of(a));this.M=window.setInterval(a,25)}
C(hg,J);hg.prototype.K=function(a){void 0===a.h&&Zf(a);var b=a.h;void 0===a.i&&Zf(a);this.i=new Rc(b,a.i)};
hg.prototype.G=function(){if(this.i){var a=eg();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.C();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
hg.prototype.D=function(){window.clearInterval(this.M);dg(this.J)};function ig(){}
function jg(a,b){return kg(a,0,b)}
function lg(a,b){return kg(a,1,b)}
;function mg(){ig.apply(this,arguments)}
v(mg,ig);function kg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):fg(a,c||0)}
function ng(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):gg(a)}}
mg.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
mg.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};mg.h||(mg.h=new mg);var og={};
function pg(a){var b=void 0===a?{}:a;a=void 0===b.kb?!1:b.kb;b=void 0===b.Ta?!0:b.Ta;if(null==B("_lact",window)){var c=parseInt(E("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&qg();cg(document,"keydown",qg);cg(document,"keyup",qg);cg(document,"mousedown",qg);cg(document,"mouseup",qg);a?cg(window,"touchmove",function(){rg("touchmove",200)},{passive:!0}):(cg(window,"resize",function(){rg("resize",200)}),b&&cg(window,"scroll",function(){rg("scroll",200)}));
new hg(function(){rg("mouse",100)});
cg(document,"touchstart",qg,{passive:!0});cg(document,"touchend",qg,{passive:!0})}}
function rg(a,b){og[a]||(og[a]=!0,lg(function(){qg();og[a]=!1},b))}
function qg(){null==B("_lact",window)&&pg();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function sg(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function tg(){var a=ug;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function vg(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var wg=/^[\w.]*$/,xg={q:!0,search_query:!0};function yg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=zg(f[0]||""),h=zg(f[1]||"");g in c?Array.isArray(c[g])?bb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(yg);k.args=[{key:l,value:f[1],query:a,method:Ag==n?"unchanged":n}];xg.hasOwnProperty(l)||Qf(k)}}return c}
var Ag=String(yg);function Bg(a){var b=[];cb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Cg(a){"?"==a.charAt(0)&&(a=a.substr(1));return yg(a,"&")}
function Dg(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Cg(1<a.length?a[1]:a[0])):{}}
function Eg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Cg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
function Fg(a){if(!b)var b=window.location.href;var c=a.match(Vb)[1]||null,d=Xb(a);c&&d?(a=a.match(Vb),b=b.match(Vb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Xb(b)==d&&(Number(b.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;return a}
function zg(a){return a&&a.match(wg)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Gg(a){var b=Hg;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=kd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?H:g;try{var h=g.history.length}catch(Ua){h=0}e.u_his=h;e.u_java=!!H.navigator&&"unknown"!==typeof H.navigator.javaEnabled&&!!H.navigator.javaEnabled&&H.navigator.javaEnabled();H.screen&&(e.u_h=H.screen.height,e.u_w=H.screen.width,
e.u_ah=H.screen.availHeight,e.u_aw=H.screen.availWidth,e.u_cd=H.screen.colorDepth);H.navigator&&H.navigator.plugins&&(e.u_nplug=H.navigator.plugins.length);H.navigator&&H.navigator.mimeTypes&&(e.u_nmime=H.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(Ua){}try{var n=h.outerWidth;var p=h.outerHeight}catch(Ua){}try{var r=h.innerWidth;var q=h.innerHeight}catch(Ua){}try{var A=h.screenLeft;var I=h.screenTop}catch(Ua){}try{r=h.innerWidth,q=h.innerHeight}catch(Ua){}try{var K=
h.screen.availWidth;var X=h.screen.availTop}catch(Ua){}k=[A,I,k,l,K,X,n,p,r,q];l=b.h.top;try{var Y=(l||window).document,L="CSS1Compat"==Y.compatMode?Y.documentElement:Y.body;var T=(new Sc(L.clientWidth,L.clientHeight)).round()}catch(Ua){T=new Sc(-12245933,-12245933)}Y=T;T={};L=new xd;y.SVGElement&&y.document.createElementNS&&L.set(0);l=dd();l["allow-top-navigation-by-user-activation"]&&L.set(1);l["allow-popups-to-escape-sandbox"]&&L.set(2);y.crypto&&y.crypto.subtle&&L.set(3);y.TextDecoder&&y.TextEncoder&&
L.set(4);L=yd(L);T.bc=L;T.bih=Y.height;T.biw=Y.width;T.brdim=k.join();b=b.i;b=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,T.wgl=!!H.WebGLRenderingContext,T);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Hg=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Bg(Gg(a))},void 0);var Ig="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Jg(){if(!Ig)return null;var a=Ig();return"open"in a?a:null}
function Kg(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var Lg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
Mg="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url client_dev_regex_map".split(" "),Ng=!1;
function Og(a,b){b=void 0===b?{}:b;var c=Fg(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in Lg){var f=E(Lg[e]);!f||!c&&Xb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Xb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Xb(a))b["X-YouTube-Ad-Signals"]=Bg(Gg(void 0));return b}
function Pg(a){var b=window.location.search,c=Xb(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!Fg(a)||(c=document.location.hostname);var d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Cg(b),f={};D(Mg,function(g){e[g]&&(f[g]=e[g])});
return Eg(a,f||{},!1)}
function Qg(a,b){var c=b.format||"JSON";a=Rg(a,b);var d=Sg(a,b),e=!1,f=Tg(a,function(k){if(!e){e=!0;h&&gg(h);var l=Kg(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Ug(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=fg(function(){e||(e=!0,f.abort(),gg(h),g.call(b.context||y,f))},b.timeout)}return f}
function Rg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=E("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Eg(a,b||{},!0);return a}
function Sg(a,b){var c=E("XSRF_FIELD_NAME",void 0),d=E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=E("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Cg(e),mb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Zb(e));f=e||f&&!fb(f);!Ng&&f&&
"POST"!=b.method&&(Ng=!0,Pf(Error("AJAX request with postData should use POST")));return e}
function Ug(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Qf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Vg(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Wg(g)})}d&&Xg(e);
return e}
function Xg(a){if(Ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Nb(a[b],null);a[c]=d}else Xg(a[b])}}
function Vg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Wg(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Tg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Of(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Jg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=Pg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Og(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Yg=sc||tc;function Zg(a){var b=Ib;return b?0<=b.toLowerCase().indexOf(a):!1}
;var $g={},ah=0;
function bh(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Zg("cobalt")){if(a){a instanceof Bb||(a="object"==typeof a&&a.ba?a.aa():String(a),Gb.test(a)?a=new Bb(a,Cb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Fb))&&Eb.test(b[1])?new Bb(a,Cb):null));a=Db(a||Hb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Lb)){b="object"==typeof a;var f=null;b&&a.wa&&(f=a.ra());a=Nb(tb(b&&a.ba?a.aa():String(a)),f)}a instanceof Lb&&a.constructor===Lb?a=a.h:(Fa(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Qe(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Wc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Tg(a,b,"POST",e,d);else if(E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Tg(a,b,"GET","",d);else{b:{try{var g=new Sa({url:a});if(g.j&&g.i||g.l){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var A=a.indexOf("&",r);if(0>A||A>l)A=l;r+=3;q=decodeURIComponent(a.substr(r,A-r).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(I){}f=!1}f?ch(a)?(b&&b(),f=!0):f=!1:f=!1;f||dh(a,b)}}
function eh(a,b,c){c=void 0===c?"":c;ch(a,c)?b&&b():bh(a,b,void 0,void 0,c)}
function ch(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function dh(a,b){var c=new Image,d=""+ah++;$g[d]=c;c.onload=c.onerror=function(){b&&$g[d]&&b();delete $g[d]};
c.src=a}
;var fh=y.ytPubsubPubsubInstance||new M,gh=y.ytPubsubPubsubSubscribedKeys||{},hh=y.ytPubsubPubsubTopicToKeys||{},ih=y.ytPubsubPubsubIsSynchronous||{};function jh(a,b){var c=kh();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){gh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{ih[a]?f():fg(f,0)}catch(g){Pf(g)}},void 0);
gh[d]=!0;hh[a]||(hh[a]=[]);hh[a].push(d);return d}return 0}
function lh(a){var b=kh();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),D(a,function(c){b.unsubscribeByKey(c);delete gh[c]}))}
function mh(a,b){var c=kh();c&&c.publish.apply(c,arguments)}
function nh(a){var b=kh();if(b)if(b.clear(a),a)oh(a);else for(var c in hh)oh(c)}
function kh(){return y.ytPubsubPubsubInstance}
function oh(a){hh[a]&&(a=hh[a],D(a,function(b){gh[b]&&delete gh[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.U;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",fh,void 0);z("ytPubsubPubsubTopicToKeys",hh,void 0);z("ytPubsubPubsubIsSynchronous",ih,void 0);z("ytPubsubPubsubSubscribedKeys",gh,void 0);var ph=window,P=ph.ytcsi&&ph.ytcsi.now?ph.ytcsi.now:ph.performance&&ph.performance.timing&&ph.performance.now&&ph.performance.timing.navigationStart?function(){return ph.performance.timing.navigationStart+ph.performance.now()}:function(){return(new Date).getTime()};var qh=Uf("initial_gel_batch_timeout",2E3),rh=Math.pow(2,16)-1,sh=null,th=0,uh=void 0,vh=0,wh=0,xh=0,yh=!0,zh=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",zh,void 0);var Ah=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Ah,void 0);
function Bh(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.F&&(Ah[a.F.token]=Ch(a.F),c=a.F.token);var d=zh.get(c)||[];zh.set(c,d);d.push(a.payload);b&&(uh=new b);a=Uf("tvhtml5_logging_max_batch")||Uf("web_logging_max_batch")||100;b=P();d.length>=a?Dh({writeThenSend:!0}):10<=b-xh&&(Eh(),xh=b)}}
function Fh(a,b){if("log_event"===a.endpoint){var c="";a.ja?c="visitorOnlyApprovedKey":a.F&&(Ah[a.F.token]=Ch(a.F),c=a.F.token);var d=new Map;d.set(c,[a.payload]);b&&(uh=new b);return new Xe(function(e){uh&&uh.isReady()?Gh(d,e,{bypassNetworkless:!0}):e()})}}
function Dh(a){a=void 0===a?{}:a;new Xe(function(b){gg(vh);gg(wh);wh=0;uh&&uh.isReady()?(Gh(zh,b,a),zh.clear()):(Eh(),b())})}
function Eh(){O("web_gel_timeout_cap")&&!wh&&(wh=fg(function(){Dh({writeThenSend:!0})},6E4));
gg(vh);var a=E("LOGGING_BATCH_TIMEOUT",Uf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&yh&&(a=qh);vh=fg(function(){Dh({writeThenSend:!0})},a)}
function Gh(a,b,c){var d=uh;c=void 0===c?{}:c;var e=Math.round(P()),f=a.size;a=u(a);for(var g=a.next();!g.done;g=a.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=kb({context:Hh(d.config_||Ih())});h.events=k;(k=Ah[g])&&Jh(h,g,k);delete Ah[g];g="visitorOnlyApprovedKey"===g;Kh(h,e,g);O("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&eh("/generate_204");Lh(d,"log_event",h,{retry:!0,onSuccess:function(){f--;f||b();th=Math.round(P()-e)},
onError:function(){f--;f||b()},
Ka:c,ja:g});yh=!1}}
function Kh(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=E("EVENT_ID",void 0))&&((c=E("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*rh/2)),c++,c>rh&&(c=1),N("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,sh&&th&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:sh,roundtripMs:String(th)}),sh=b,th=0)}
function Jh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ch(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var Mh=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Mh,void 0);function Nh(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=sg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.S&&(a=e.context,b=d.S,Mh[b]=b in Mh?Mh[b]+1:0,a.sequence={index:Mh[b],groupKey:b},d.Ua&&delete Mh[d.S]);(d.ol?Fh:Bh)({endpoint:"log_event",payload:e,F:d.F,ja:d.ja},c)}
;function Oh(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Ph(a,b,c,d,e){sd.set(""+a,b,{ya:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var Qh=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Qh,void 0);function Rh(){this.h=E("ALT_PREF_COOKIE_NAME","PREF");this.i=E("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=sd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Qh[d]=c.toString())}}}
Rh.prototype.get=function(a,b){Sh(a);Th(a);a=void 0!==Qh[a]?Qh[a].toString():null;return null!=a?a:b?b:""};
Rh.prototype.set=function(a,b){Sh(a);Th(a);if(null==b)throw Error("ExpectedNotNull");Qh[a]=b.toString()};
Rh.prototype.remove=function(a){Sh(a);Th(a);delete Qh[a]};
Rh.prototype.clear=function(){for(var a in Qh)delete Qh[a]};
function Th(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Sh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Uh(a){a=void 0!==Qh[a]?Qh[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
;var Vh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Wh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Xh(){var a=y.navigator;return a?a.connection:void 0}
;function Yh(){return"INNERTUBE_API_KEY"in Lf&&"INNERTUBE_API_VERSION"in Lf}
function Ih(){return{innertubeApiKey:E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:E("INNERTUBE_API_VERSION",void 0),Wa:E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Xa:E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Za:E("INNERTUBE_CONTEXT_HL",void 0),Ya:E("INNERTUBE_CONTEXT_GL",void 0),ab:E("INNERTUBE_HOST_OVERRIDE",void 0)||"",cb:!!E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),bb:!!E("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:E("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Hh(a){var b={client:{hl:a.Za,gl:a.Ya,clientName:a.Xa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Wa}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=E("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=E("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=E("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!O("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=Oh()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!O("music_web_display_mode_killswitch")){var h;b.client.Ja=null!=(h=b.client.Ja)?h:{};b.client.Ja.webDisplayMode=Oh()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);E("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:E("DELEGATED_SESSION_ID")});a:{if(h=Xh()){a=Vh[h.type||"unknown"]||"CONN_UNKNOWN";h=Vh[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);O("web_log_effective_connection_type")&&
(a=Xh(),a=null!==a&&void 0!==a&&a.effectiveType?Wh.hasOwnProperty(a.effectiveType)?Wh[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;f={};e=u(Object.entries(Cg(E("DEVICE",""))));for(c=e.next();!c.done;c=e.next())d=u(c.value),c=d.next().value,d=d.next().value,"cbrand"===c?f.deviceMake=d:"cmodel"===c?f.deviceModel=d:"cbr"===c?f.browserName=d:"cbrver"===c?f.browserVersion=d:"cos"===c?f.osName=d:"cosver"===c?f.osVersion=
d:"cplatform"===c&&(f.platform=d);b.client=h.call(a,g,f);return b}
function Zh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.bl||E("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Zk:b=wd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=E("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));return d}
;function $h(a){a=Object.assign({},a);delete a.Authorization;var b=wd();if(b){var c=new Qd;c.update(E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=xc(c.digest())}return a}
;function ai(a){var b=new Af;(b=b.isAvailable()?a?new Gf(b,a):b:null)||(a=new Bf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new wf(a):null;this.i=document.domain||window.location.hostname}
ai.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Qe(b))}catch(f){return}else e=escape(b);Ph(a,e,c,this.i)};
ai.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=sd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ai.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;sd.remove(""+a,"/",void 0===b?"youtube.com":b)};var bi;function ci(){bi||(bi=new ai("yt.innertube"));return bi}
function di(a,b,c,d){if(d)return null;d=ci().get("nextId",!0)||1;var e=ci().get("requests",!0)||{};e[d]={method:a,request:b,authState:$h(c),requestTime:Math.round(P())};ci().set("nextId",d+1,86400,!0);ci().set("requests",e,86400,!0);return d}
function ei(a){var b=ci().get("requests",!0)||{};delete b[a];ci().set("requests",b,86400,!0)}
function fi(a){var b=ci().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=$h(Zh(!1));ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Lh(a,d.method,e,{}));delete b[c]}}ci().set("requests",b,86400,!0)}}
;function gi(a,b){this.version=a;this.args=b}
;function hi(a,b){this.topic=a;this.h=b}
hi.prototype.toString=function(){return this.topic};var ii=B("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.da;M.prototype.publish=M.prototype.U;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",ii,void 0);var ji=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",ji,void 0);var ki=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",ki,void 0);var li=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",li,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function mi(a,b){var c=ni();c&&c.publish.call(c,a.toString(),a,b)}
function oi(a){var b=pi,c=ni();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ji[d])try{if(f&&b instanceof hi&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.T){var l=new h;h.T=l.version}var n=h.T}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
ab(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Pf(p)}},li[b.toString()]?B("yt.scheduler.instance")?lg(g):fg(g,0):g())});
ji[d]=!0;ki[b.toString()]||(ki[b.toString()]=[]);ki[b.toString()].push(d);return d}
function qi(){var a=ri,b=oi(function(c){a.apply(void 0,arguments);si(b)});
return b}
function si(a){var b=ni();b&&("number"===typeof a&&(a=[a]),D(a,function(c){b.unsubscribeByKey(c);delete ji[c]}))}
function ni(){return B("ytPubsub2Pubsub2Instance")}
;function ti(){}
;var ui=function(){var a;return function(){a||(a=new ai("ytidb"));return a}}();
function vi(){var a;return null===(a=ui())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
function wi(a){this.h=void 0===a?!1:a;(a=vi())||(a={hasSucceededOnce:this.h});this.i=a;var b,c;null!==(b=ui())&&void 0!==b&&b.h&&(b={hasSucceededOnce:this.i.hasSucceededOnce||this.h},null===(c=ui())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0))}
wi.prototype.isSupported=function(){return this.h};var xi=[],yi=!1;function zi(a){yi||(xi.push({type:"ERROR",payload:a}),10<xi.length&&xi.shift())}
function Ai(a,b){yi||(xi.push({type:"EVENT",eventType:a,payload:b}),10<xi.length&&xi.shift())}
;function Bi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(Bi,Error);function Ci(){if(void 0!==E("DATASYNC_ID",void 0))return E("DATASYNC_ID",void 0);throw new Bi("Datasync ID not set","unknown");}
;function Di(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ei(a){return a.substr(0,a.indexOf(":"))||a}
;var Fi={},Gi=(Fi.AUTH_INVALID="No user identifier specified.",Fi.EXPLICIT_ABORT="Transaction was explicitly aborted.",Fi.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Fi.MISSING_OBJECT_STORE="Object store not created.",Fi.DB_DELETED_BY_MISSING_OBJECT_STORE="Database is deleted because an expected object store was not created.",Fi.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Fi.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Fi.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",
Fi.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Fi),Hi={},Ii=(Hi.AUTH_INVALID="ERROR",Hi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Hi.EXPLICIT_ABORT="IGNORED",Hi.IDB_NOT_SUPPORTED="ERROR",Hi.MISSING_OBJECT_STORE="ERROR",Hi.DB_DELETED_BY_MISSING_OBJECT_STORE="WARNING",Hi.QUOTA_EXCEEDED="WARNING",Hi.QUOTA_MAYBE_EXCEEDED="WARNING",Hi.UNKNOWN_ABORT="WARNING",Hi),Ji={},Ki=(Ji.AUTH_INVALID=!1,Ji.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ji.EXPLICIT_ABORT=!1,Ji.IDB_NOT_SUPPORTED=
!1,Ji.MISSING_OBJECT_STORE=!1,Ji.DB_DELETED_BY_MISSING_OBJECT_STORE=!1,Ji.QUOTA_EXCEEDED=!1,Ji.QUOTA_MAYBE_EXCEEDED=!0,Ji.UNKNOWN_ABORT=!0,Ji);function Q(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Gi[a]:c;d=void 0===d?Ii[a]:d;e=void 0===e?Ki[a]:e;Bi.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Q.prototype)}
v(Q,Bi);function Li(a){Q.call(this,"MISSING_OBJECT_STORE",{gb:a},Gi.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Li.prototype)}
v(Li,Q);var Mi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ni(a,b,c){b=Ei(b);var d=a instanceof Error?a:Error("Unexpected error: "+a);if(d instanceof Q)return d;if("QuotaExceededError"===d.name)return new Q("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(uc&&"UnknownError"===d.name)return new Q("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Mi.some(function(e){return d.message.includes(e)}))return new Q("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new Q("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",kl:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function Oi(a){if(!a)throw Error();throw a;}
function Pi(a){return a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];try{this.i(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={X:0};f.X<a.length;f={X:f.X},++f.X)Qi(R.resolve(a[f.X]).then(function(g){return function(h){d[g.X]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
R.resolve=function(a){return new R(function(b,c){a instanceof R?a.then(b,c):b(a)})};
R.reject=function(a){return new R(function(b,c){c(a)})};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Pi,e=null!==b&&void 0!==b?b:Oi;return new R(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ri(c,c,d,f,g)}),c.onRejected.push(function(){Si(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ri(c,c,d,f,g):"REJECTED"===c.state.status&&Si(c,c,e,f,g)})};
function Qi(a,b){a.then(void 0,b)}
function Ri(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?Ti(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Si(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?Ti(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ti(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?Ti(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ui(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vi(a){return new Promise(function(b,c){Ui(a,b,c)})}
function Wi(a){return new R(function(b,c){Ui(a,b,c)})}
;function Xi(a,b){return new R(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Yi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
m=Yi.prototype;m.add=function(a,b,c){return Zi(this,[a],{mode:"readwrite",I:!0},function(d){return $i(d,a).add(b,c)})};
m.clear=function(a){return Zi(this,[a],{mode:"readwrite",I:!0},function(b){return $i(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Zi(this,[a],{mode:"readonly",I:!0},function(c){return $i(c,a).count(b)})};
function aj(a,b,c){a=a.h.createObjectStore(b,c);return new bj(a)}
m.delete=function(a,b){return Zi(this,[a],{mode:"readwrite",I:!0},function(c){return $i(c,a).delete(b)})};
m.get=function(a,b){return Zi(this,[a],{mode:"readonly",I:!0},function(c){return $i(c,a).get(b)})};
function cj(a,b,c,d){return Zi(a,[b],{mode:"readwrite",I:!0},function(e){e=$i(e,b);return Wi(e.h.put(c,d))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Zi(a,b,c,d){return G(a,function f(){var g=this,h,k,l,n,p,r,q,A,I,K,X,Y;return x(f,function(L){switch(L.h){case 1:var T={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?T.mode=c:Object.assign(T,c);h=T;g.transactionCount++;k=h.I?3:1;l=0;case 2:if(n){L.B(3);break}l++;p=Math.round(P());ra(L,4);r=g.h.transaction(b,h.mode);T=new dj(r);T=ej(T,d);return w(L,T,6);case 6:return q=L.i,A=Math.round(P()),fj(g,p,A,l,void 0,b.join(),h),L.return(q);case 4:I=sa(L);K=Math.round(P());
X=Ni(I,g.h.name,b.join());if((Y=X instanceof Q&&!X.h)||l>=k)fj(g,p,K,l,X,b.join(),h),n=X;L.B(2);break;case 3:return L.return(Promise.reject(n))}})})}
function fj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Q&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Ai("QUOTA_EXCEEDED",{dbName:Ei(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Q&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Ai("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),gj(a,!1,d,f,b,g.tag),zi(e)):gj(a,!0,d,f,b,g.tag)}
function gj(a,b,c,d,e,f){Ai("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function bj(a){this.h=a}
m=bj.prototype;m.add=function(a,b){return Wi(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Wi(this.h.clear()).then(function(){})};
m.count=function(a){return Wi(this.h.count(a))};
function hj(a,b){return ij(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?hj(this,a):Wi(this.h.delete(a))};
m.get=function(a){return Wi(this.h.get(a))};
m.index=function(a){return new jj(this.h.index(a))};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function ij(a,b,c){a=a.h.openCursor(b.query,b.direction);return kj(a).then(function(d){return Xi(d,c)})}
function dj(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Q;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ej(a,b){var c=new Promise(function(d,e){try{Qi(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
dj.prototype.abort=function(){this.h.abort();this.i=!0;throw new Q("EXPLICIT_ABORT");};
function $i(a,b){b=a.h.objectStore(b);var c=a.j.get(b);c||(c=new bj(b),a.j.set(b,c));return c}
function jj(a){this.h=a}
m=jj.prototype;m.count=function(a){return Wi(this.h.count(a))};
m.delete=function(a){return lj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Wi(this.h.get(a))};
m.getKey=function(a){return Wi(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function lj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return kj(a).then(function(d){return Xi(d,c)})}
function mj(a,b){this.request=a;this.cursor=b}
function kj(a){return Wi(a).then(function(b){return null===b?null:new mj(a,b)})}
m=mj.prototype;m.advance=function(a){this.cursor.advance(a);return kj(this.request)};
m.continue=function(a){this.cursor.continue(a);return kj(this.request)};
m.delete=function(){return Wi(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Wi(this.cursor.update(a))};function nj(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Yi(g.result,{closed:p}));return r}
var g=self.indexedDB.open(a,b),h=c.blocked,k=c.blocking,l=c.wb,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Ai("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Ei(a)});var A=f(),I=new dj(g.transaction);n&&n(A,q.oldVersion,q.newVersion,
I);I.done.catch(function(K){e(K)})}catch(K){e(K)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Ai("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ei(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function oj(a,b,c){c=void 0===c?{}:c;return nj(a,b,c)}
function pj(a,b){b=void 0===b?{}:b;return G(this,function d(){var e,f,g;return x(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,Vi(e),0)})})}
;function qj(a,b){this.name=a;this.options=b;this.j=!1}
qj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return oj(a,b,c)};
qj.prototype.delete=function(a){a=void 0===a?{}:a;return pj(this.name,a)};
qj.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,wb:c,upgrade:this.options.upgrade},e=function(){return G(a,function g(){var h=this,k,l,n;return x(g,function(p){switch(p.h){case 1:return ra(p,2),w(p,h.i(h.name,h.options.version,d),4);case 4:k=p.i;a:{var r=h.options;for(var q=u(Object.keys(r.la)),A=q.next();!A.done;A=q.next()){A=A.value;var I=r.la[A];if("boolean"===typeof I){if(!k.h.objectStoreNames.contains(A)){r=A;break a}}else{var K=void 0===I.mb?Number.MAX_VALUE:I.mb;if(k.h.version>=I.al&&!(k.h.version>=K)&&!k.h.objectStoreNames.contains(A)){r=
A;break a}}}r=void 0}l=r;if(void 0===l){p.B(5);break}if(h.j){p.B(6);break}h.j=!0;return w(p,h.delete(),7);case 7:return zi(new Q("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:h.name,gb:l})),p.return(e());case 6:throw new Li(l);case 5:return p.return(k);case 2:n=sa(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===
n.message)return p.return(h.i(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw n;}})})};
this.h=b=e()}return this.h};var rj=new qj("YtIdbMeta",{la:{databases:!0},upgrade:function(a,b){1>b&&aj(a,"databases",{keyPath:"actualName"})}});
function sj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,rj.open(),2);d=e.i;return e.return(Zi(d,["databases"],{I:!0,mode:"readwrite"},function(f){var g=$i(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier:1)return Wi(g.h.put(a,void 0)).then(function(){})})}))})})}
function tj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,rj.open(),2);d=e.i;return e.return(d.delete("databases",a))})})}
function uj(a){return G(this,function c(){var d,e;return x(c,function(f){return 1==f.h?(d=[],w(f,rj.open(),2)):3!=f.h?(e=f.i,w(f,Zi(e,["databases"],{I:!0,mode:"readonly"},function(g){d.length=0;return ij($i(g,"databases"),{},function(h){a(h.getValue())&&d.push(h.getValue());return h.continue()})}),3)):f.return(d)})})}
function vj(){return uj(function(a){return"LogsDatabaseV2"===a.publicName&&void 0!==a.userIdentifier})}
;var wj;
function xj(){return G(this,function b(){var c,d,e;return x(b,function(f){switch(f.h){case 1:c=vi();if(null===c||void 0===c?0:c.hasSucceededOnce)return f.return(new wi(!0));var g;if(g=Yg)g=/WebKit\/([0-9]+)/.exec(Ib),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Ib),g=!(g&&602<=parseInt(g[1],10)));if(g||fc)return f.return(new wi(!1));try{if(d=self,!(d.indexedDB&&d.IDBIndex&&d.IDBKeyRange&&d.IDBObjectStore))return f.return(new wi(!1))}catch(h){return f.return(new wi(!1))}if(!("IDBTransaction"in self&&
"objectStoreNames"in IDBTransaction.prototype))return f.return(new wi(!1));ra(f,2);e={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(f,sj(e),4);case 4:return w(f,tj("yt-idb-test-do-not-use"),5);case 5:return f.return(new wi(!0));case 2:return sa(f),f.return(new wi(!1))}})})}
function yj(){if(void 0!==wj)return wj;yi=!0;return wj=xj().then(function(a){yi=!1;return a.isSupported()})}
;function zj(a){try{Ci();var b=!0}catch(c){b=!1}if(!b)throw a=new Q("AUTH_INVALID"),zi(a),a;b=Ci();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Aj(a,b,c,d){return G(this,function f(){var g,h;return x(f,function(k){switch(k.h){case 1:return w(k,Bj({caller:"openDbImpl",publicName:a,version:b}),2);case 2:return Di(a),g=c?{actualName:a,publicName:a,userIdentifier:void 0}:zj(a),ra(k,3),w(k,sj(g),5);case 5:return w(k,oj(g.actualName,b,d),6);case 6:return k.return(k.i);case 3:return h=sa(k),ra(k,7),w(k,tj(g.actualName),9);case 9:k.h=8;k.m=0;break;case 7:sa(k);case 8:throw h;}})})}
function Bj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,yj(),2);if(!e.i)throw d=new Q("IDB_NOT_SUPPORTED",{context:a}),zi(d),d;e.h=0})})}
function Cj(a,b,c){c=void 0===c?{}:c;return Aj(a,b,!1,c)}
function Dj(a,b,c){c=void 0===c?{}:c;return Aj(a,b,!0,c)}
function Ej(a,b){b=void 0===b?{}:b;return G(this,function d(){var e;return x(d,function(f){if(1==f.h)return w(f,yj(),2);if(3!=f.h){if(!f.i)return f.return();Di(a);e=zj(a);return w(f,pj(e.actualName,b),3)}return w(f,tj(e.actualName),0)})})}
function Fj(a,b){var c=this;a=a.map(function(d){return G(c,function f(){return x(f,function(g){return 1==g.h?w(g,pj(d.actualName,b),2):w(g,tj(d.actualName),0)})})});
return Promise.all(a).then(function(){})}
function Gj(){var a=void 0===a?{}:a;return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,yj(),2);if(3!=e.h){if(!e.i)return e.return();Di("LogsDatabaseV2");return w(e,vj(),3)}d=e.i;return w(e,Fj(d,a),0)})})}
function Hj(a,b){b=void 0===b?{}:b;return G(this,function d(){return x(d,function(e){if(1==e.h)return w(e,yj(),2);if(3!=e.h){if(!e.i)return e.return();Di(a);return w(e,pj(a,b),3)}return w(e,tj(a),0)})})}
;function Ij(){R.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
v(Ij,R);Ij.reject=R.reject;Ij.resolve=R.resolve;Ij.all=R.all;function Jj(a,b){qj.call(this,a,b);this.options=b;Di(a)}
v(Jj,qj);function Kj(a,b){var c;return function(){c||(c=new Jj(a,b));return c}}
Jj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Aa?Dj:Cj)(a,b,Object.assign({},c))};
Jj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Aa?Hj:Ej)(this.name,a)};
function Lj(a,b){return Kj(a,b)}
;var Mj;function Nj(){if(Mj)return Mj();var a={};Mj=Lj("LogsDatabaseV2",{la:(a.LogsRequestsStore=!0,a.sapisid=!0,a.SWHealthLog=!0,a),Aa:!1,upgrade:function(b,c,d){2>c&&2<=d&&(aj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).h.createIndex("newRequest",["status","authHash","interface","timestamp"],{unique:!1}),aj(b,"sapisid"));3>c&&3<=d&&aj(b,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:4});return Mj()}
;function Oj(){return Nj().open()}
function Pj(a){return G(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(k,Oj(),2);case 2:e=k.i;if(5<=e.h.version){f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",0)});k.B(3);break}return w(k,Qj(),4);case 4:g=k.i,f=Object.assign(Object.assign({},a),{authHash:g,options:JSON.parse(JSON.stringify(a.options)),interface:E("INNERTUBE_CONTEXT_CLIENT_NAME",
0)});case 3:return w(k,cj(e,"LogsRequestsStore",f),5);case 5:return h=k.i,d.xb=P(),Rj(d),k.return(h)}})})}
function Sj(a){return G(this,function c(){var d,e,f,g,h,k,l,n,p;return x(c,function(r){switch(r.h){case 1:return d={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(r,Oj(),2);case 2:e=r.i;f=E("INNERTUBE_CONTEXT_CLIENT_NAME",0);if(5<=e.h.version){g=[a,f,0];h=[a,f,P()];r.B(3);break}return w(r,Qj(),4);case 4:k=r.i,g=[a,k,f,0],h=[a,k,f,P()];case 3:return l=IDBKeyRange.bound(g,h),n=void 0,p=5<=e.h.version?"newRequestV2":"newRequest",w(r,Zi(e,["LogsRequestsStore"],{mode:"readwrite",I:!0},
function(q){return lj($i(q,"LogsRequestsStore").index(p),{query:l,direction:"prev"},function(A){A.getValue()&&(n=A.getValue(),"NEW"===a&&(n.status="QUEUED",A.update(n)))})}),5);
case 5:return d.xb=P(),Rj(d),r.return(n)}})})}
function Tj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Oj(),2);d=e.i;return e.return(Zi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=$i(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",Wi(g.h.put(h,void 0)).then(function(){return h})})}))})})}
function Uj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Oj(),2);d=e.i;return e.return(Zi(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=$i(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,Wi(g.h.put(h,void 0)).then(function(){return h})):Ij.resolve(void 0)})}))})})}
function Vj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Oj(),2);d=e.i;return e.return(d.delete("LogsRequestsStore",a))})})}
function Wj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h)return w(d,Oj(),2);c=d.i;return d.return(c.clear("LogsRequestsStore"))})})}
function Xj(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Oj(),2);c=e.i;d=P()-2592E6;return w(e,Zi(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){return ij($i(f,"LogsRequestsStore"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function Yj(){return G(this,function b(){return x(b,function(c){return w(c,Gj(),0)})})}
function Qj(){return G(this,function b(){var c;return x(b,function(d){if(1==d.h){ti.h||(ti.h=new ti);var e={};var f=wd([]);f&&(e.Authorization=f,f=void 0,void 0===f&&(f=Number(E("SESSION_INDEX",0)),f=isNaN(f)?0:f),e["X-Goog-AuthUser"]=f,"INNERTUBE_HOST_OVERRIDE"in Lf||(e["X-Origin"]=window.location.origin),O("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in Lf&&(e["X-Goog-PageId"]=E("DELEGATED_SESSION_ID")));e instanceof Xe||(f=new Xe(Ea),Ye(f,2,e),e=f);return w(d,e,2)}c=d.i;e=d.return;f=$h(c);var g=
new Qd;g.update(JSON.stringify(f,Object.keys(f).sort()));f=g.digest();g="";for(var h=0;h<f.length;h++)g+="0123456789ABCDEF".charAt(Math.floor(f[h]/16))+"0123456789ABCDEF".charAt(f[h]%16);return e.call(d,g)})})}
function Zj(a){return G(this,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Oj(),2);d=e.i;return w(e,cj(d,"sapisid",a,"sapisid"),0)})})}
function ak(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return w(e,Oj(),2);if(3!=e.h)return c=e.i,w(e,c.get("sapisid","sapisid"),3);d=e.i;return e.return(d||"")})})}
function Rj(a){var b=Uf("nwl_latency_sampling_rate",.01);.02<b||Math.random()<=b&&mi("nwl_transaction_latency_payload",a)}
;var bk={},ck=Lj("ServiceWorkerLogsDatabase",{la:(bk.SWHealthLog=!0,bk),Aa:!0,upgrade:function(a,b,c){1>b&&1<=c&&aj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function dk(){return G(this,function b(){var c,d;return x(b,function(e){if(1==e.h)return O("web_clean_sw_logs_store")?w(e,ck().open(),3):e.B(0);c=e.i;d=P()-2592E6;return w(e,Zi(c,["SWHealthLog"],{mode:"readwrite",I:!0},function(f){return ij($i(f,"SWHealthLog"),{},function(g){if(g.getValue().timestamp<=d)return g.delete().then(function(){return g.continue()})})}),0)})})}
function ek(){return G(this,function b(){var c,d;return x(b,function(e){switch(e.h){case 1:return w(e,ck().open(),2);case 2:return c=e.i,w(e,c.clear("SWHealthLog"),3);case 3:return w(e,Oj(),4);case 4:return d=e.i,e.return(d.clear("SWHealthLog"))}})})}
;var fk=["__Secure-1PAPISID","SAPISID","__Secure-3PAPISID"];function gk(){for(var a=u(fk),b=a.next();!b.done;b=a.next())if(b=sd.get(b.value))return b;return"LOGGED_OUT"}
function hk(){Ne.call(this);this.pollingInterval=3E3;this.j=[null,null,null];this.m=!1;ik(this)}
v(hk,Ne);function jk(){hk.h||(hk.h=new hk);var a=hk.h;a.m=!0;a.verifyUser();kk(a)}
hk.prototype.verifyUser=function(){var a=ik(this),b=a.fb;if(!a.vb)return kk(this),!0;Oe(this,"ytsessionchange");b&&Oe(this,"ytuserinvalid");kk(this);return!1};
function ik(a){var b=fk.map(function(e){var f;return null!==(f=sd.get(e))&&void 0!==f?f:""}),c=b.some(function(e,f){return a.j&&""!==a.j[f]&&""===e}),d=b.some(function(e,f){return a.j&&a.j[f]!==e});
a.j=b;return{fb:c,vb:d}}
function kk(a){a.m&&(lk(a),a.l=jg(function(){a.verifyUser()},a.pollingInterval))}
function lk(a){a.l&&(ng(a.l),a.l=void 0)}
;var mk;function nk(){mk||(mk=new ai("yt.offline"));return mk}
function ok(a){if(O("offline_error_handling")){var b=nk().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);nk().set("errors",b,2592E3,!0)}}
;var pk=Uf("network_polling_interval",3E4);function S(){Ne.call(this);this.J=0;this.A=this.l=!1;this.G=0;this.K=!1;this.j=this.va();qk(this);rk(this)}
v(S,Ne);function sk(){if(!S.h){var a=B("yt.networkStatusManager.instance")||new S;z("yt.networkStatusManager.instance",a,void 0);S.h=a}return S.h}
m=S.prototype;m.N=function(){return this.j};
m.hb=function(a){this.l=!0;if(void 0===a?0:a)this.J||tk(this)};
m.va=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Ra=function(){this.K=!0};
m.ca=function(a,b){return Ne.prototype.ca.call(this,a,b)};
function rk(a){window.addEventListener("online",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return w(e,d.W(),2);uk(d);if(d.K&&O("offline_error_handling")){var f=nk().get("errors",!0);if(f){for(var g in f)if(f[g]){var h=new Bi(g,"sent via offline_errors");h.name=f[g].name;h.stack=f[g].stack;h.level=f[g].level;Pf(h)}nk().set("errors",{},2592E3,!0)}}e.h=0})})})}
function qk(a){window.addEventListener("offline",function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h)return w(e,d.W(),2);uk(d);e.h=0})})})}
function tk(a){a.J=jg(function(){return G(a,function c(){var d=this;return x(c,function(e){if(1==e.h){if(!d.j)return w(e,d.W(),3);if(d.va())return e.B(3);d.A=!0;d.G=P();return d.l?w(e,d.W(),3):e.B(3)}tk(d);e.h=0})})},pk)}
function uk(a){a.A&&(Qf(new Bi("NetworkStatusManager state did not match poll",P()-a.G)),a.A=!1)}
m.W=function(a){var b=this;return this.m?this.m:this.m=new Promise(function(c){return G(b,function e(){var f,g,h,k=this;return x(e,function(l){switch(l.h){case 1:return f=window.AbortController?new window.AbortController:void 0,g=null===f||void 0===f?void 0:f.signal,h=!1,ra(l,2,3),f&&(k.C=lg(function(){f.abort()},a||2E4)),w(l,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ta(l);k.m=void 0;k.C&&ng(k.C);h!==k.j&&(k.j=h,k.j&&k.l?Oe(k,"ytnetworkstatus-online"):k.l&&Oe(k,"ytnetworkstatus-offline"));c(h);ua(l);break;case 2:sa(l),h=!1,l.B(3)}})})})};
S.prototype.sendNetworkCheckRequest=S.prototype.W;S.prototype.listen=S.prototype.ca;S.prototype.enableErrorFlushing=S.prototype.Ra;S.prototype.getWindowStatus=S.prototype.va;S.prototype.monitorNetworkStatusChange=S.prototype.hb;S.prototype.isNetworkAvailable=S.prototype.N;S.getInstance=sk;function vk(a){a=void 0===a?{}:a;Ne.call(this);var b=this;this.l=this.A=0;this.j=sk();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.Sa);a.eb&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.j))a.na?(this.na=a.na,c("ytnetworkstatus-online",function(){wk(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){wk(b,"publicytnetworkstatus-offline")})):
(c("ytnetworkstatus-online",function(){Oe(b,"publicytnetworkstatus-online")}),c("ytnetworkstatus-offline",function(){Oe(b,"publicytnetworkstatus-offline")}))}
v(vk,Ne);vk.prototype.N=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
vk.prototype.W=function(a){return G(this,function c(){var d=this,e;return x(c,function(f){return(e=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(d.j))?f.return(e(a)):f.return(!0)})})};
function wk(a,b){a.na?a.l?(ng(a.A),a.A=lg(function(){a.m!==b&&(Oe(a,b),a.m=b,a.l=P())},a.na-(P()-a.l))):(Oe(a,b),a.m=b,a.l=P()):Oe(a,b)}
;var xk=!1,yk=!1,zk=0,Ak=0,Bk,Ck=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:xk,isIdbSupported:yk,potentialEsfErrorCounter:Ak};O("export_networkless_options")&&z("ytNetworklessLoggingInitializationOptions",Ck,void 0);
function Dk(){G(this,function b(){var c,d,e,f;return x(b,function(g){switch(g.h){case 1:return w(g,yj(),2);case 2:(c=g.i)&&(yk=!0);d=O("networkless_logging");if(c&&d)return O("nwl_use_ytidb_partitioning")?w(g,Hj("LogsDatabaseV2"),8):w(g,Gj(),8);if(!c){g.B(0);break}return w(g,Yj(),0);case 8:return jk(),document.addEventListener("ytsessionchange",function(){Ek()}),w(g,ak(),11);
case 11:e=g.i;f=gk();if(e===f){g.B(12);break}Ek();return w(g,Zj(f),12);case 12:if(!(O("enable_nwl_cleaning_logic")&&Math.random()<=Uf("nwl_cleaning_rate",.1))){g.B(14);break}return w(g,Xj(),15);case 15:return w(g,dk(),14);case 14:xk=!0;Fk();Gk().N()&&Hk();Gk().ca("publicytnetworkstatus-online",Hk);Gk().ca("publicytnetworkstatus-offline",Ik);if(!O("networkless_immediately_drop_sw_health_store")){g.B(17);break}return w(g,Jk(),17);case 17:if(!O("networkless_immediately_drop_all_requests")){g.B(19);break}return w(g,
Yj(),19);case 19:O("export_networkless_options")&&(Ck.isNwlInitialized=xk,Ck.isIdbSupported=yk),g.h=0}})})}
function Kk(a,b){function c(d){var e=Gk().N();if(!Lk()||!d||e&&O("vss_networkless_bypass_write"))Mk(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Pj(f).then(function(g){f.id=g;(Gk().N()||O("networkless_always_online"))&&Nk(f)}).catch(function(g){Nk(f);
Gk().N()?Pf(g):ok(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?yj().then(function(d){c(d)}):c(Ok())}
function Pk(a,b){function c(d){if(Lk()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Vj(e.id):f=!0;g(h,k)};
Mk(e.url,e.options);Pj(e).then(function(h){e.id=h;f&&Vj(e.id)}).catch(function(h){Gk().N()?Pf(h):ok(h)})}else Mk(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?yj().then(function(d){c(d)}):c(Ok())}
function Hk(){var a=this;zk||(zk=lg(function(){return G(a,function c(){var d;return x(c,function(e){if(1==e.h)return w(e,Sj("NEW"),2);if(3!=e.h)return d=e.i,d?w(e,Nk(d),3):(Ik(),e.return());zk&&(zk=0,Hk());e.h=0})})},100))}
function Ik(){ng(zk);zk=0}
function Nk(a){return G(this,function c(){var d;return x(c,function(e){switch(e.h){case 1:if(void 0===a.id){e.B(2);break}return w(e,Tj(a.id),3);case 3:(d=e.i)?a=d:Qf(Error("The request cannot be found in the database."));case 2:if(Qk(a,2592E6)){e.B(4);break}Qf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.B(5);break}return w(e,Vj(a.id),5);case 5:return e.return();case 4:var f=a=Rk(a),g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||void 0===
g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());(a=f)&&Mk(a.url,a.options);e.h=0}})})}
function Rk(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return G(b,function h(){return x(h,function(k){switch(k.h){case 1:if(!((B("ytNetworklessLoggingInitializationOptions")?Ck.potentialEsfErrorCounter:Ak)<=Uf("potential_esf_error_limit",10))){k.B(2);break}return w(k,Gk().W(),3);case 3:if(Gk().N())B("ytNetworklessLoggingInitializationOptions")&&Ck.potentialEsfErrorCounter++,Ak++;else return c(e,f),k.return();case 2:if(void 0===(null===a||void 0===a?void 0:a.id)){k.B(4);break}return 1>a.sendCount?w(k,Uj(a.id),8):w(k,Vj(a.id),
4);case 8:lg(function(){Gk().N()&&Hk()},5E3);
case 4:c(e,f),k.h=0}})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return G(b,function h(){return x(h,function(k){if(1==k.h)return void 0===(null===a||void 0===a?void 0:a.id)?k.B(2):w(k,Vj(a.id),2);d(e,f);k.h=0})})};
return a}
function Qk(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Fk(){var a=this;Sj("QUEUED").then(function(b){b&&!Qk(b,12E4)?lg(function(){return G(a,function d(){return x(d,function(e){if(1==e.h)return void 0===b.id?e.B(2):w(e,Uj(b.id),2);Fk();e.h=0})})}):Gk().N()&&Hk()})}
function Ek(){Wj().catch(function(a){Pf(a)})}
function Jk(){return G(this,function b(){return x(b,function(c){return c.return(ek().catch(function(d){Pf(d)}))})})}
function Gk(){Bk||(Bk=new vk({eb:!0,Sa:!0}));return Bk}
function Mk(a,b){if(O("networkless_with_beacon")){var c=["method","postBody"];if(Object.keys(b).length>c.length)var d=!0;else{d=0;c=u(c);for(var e=c.next();!e.done;e=c.next())b.hasOwnProperty(e.value)&&d++;d=Object.keys(b).length!==d}d?Qg(a,b):O("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?bh(a):eh(a,void 0,b.postBody)}else O("networkless_with_ping_send")&&1===Object.keys(b).length&&b.allowPingSend?bh(a):Qg(a,b)}
function Lk(){return B("ytNetworklessLoggingInitializationOptions")?Ck.isNwlInitialized:xk}
function Ok(){return B("ytNetworklessLoggingInitializationOptions")?Ck.isIdbSupported:yk}
;function Sk(a){var b=this;this.config_=null;a?this.config_=a:Yh()&&(this.config_=Ih());jg(function(){fi(b)},5E3)}
Sk.prototype.isReady=function(){!this.config_&&Yh()&&(this.config_=Ih());return!!this.config_};
function Lh(a,b,c,d){function e(r){r=void 0===r?!1:r;var q;if(d.retry&&"www.youtube-nocookie.com"!=h&&(r||(q=di(b,c,l,k)),q)){var A=g.onSuccess,I=g.onFetchSuccess;g.onSuccess=function(K,X){ei(q);A(K,X)};
c.onFetchSuccess=function(K,X){ei(q);I(K,X)}}try{r&&d.retry&&!d.Ka.bypassNetworkless?(g.method="POST",!d.Ka.writeThenSend&&O("nwl_send_fast_on_unload")?Pk(p,g):Kk(p,g)):(g.method="POST",g.postParams||(g.postParams={}),Qg(p,g))}catch(K){if("InvalidAccessError"==K.name)q&&(ei(q),q=0),Qf(Error("An extension is blocking network request."));
else throw K;}q&&jg(function(){fi(a)},5E3)}
!E("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Qf(new Bi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Bi("innertube xhrclient not ready",b,c,d);Pf(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
onFetchError:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.ab)&&(h=f);var k=a.config_.cb||!1,l=Zh(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&(g.headers["x-origin"]=window.location.origin);f="/youtubei/"+a.config_.innertubeApiVersion+"/"+b;var n={alt:"json"};a.config_.bb&&g.headers.Authorization||(n.key=a.config_.innertubeApiKey);var p=Eg(""+h+f,n||{},!0);Lk()?yj().then(function(r){e(r)}):e(!1)}
;function Tk(a,b,c){c=void 0===c?{}:c;var d=Sk;E("ytLoggingEventsDefaultDisabled",!1)&&Sk==Sk&&(d=null);Nh(a,b,d,c)}
;var Uk=[{za:function(a){return"Cannot read property '"+a.key+"'"},
ma:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{za:function(a){return"Cannot call '"+a.key+"'"},
ma:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{za:function(a){return a.key+" is not defined"},
ma:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Wk={R:[],P:[{Da:Vk,weight:500}]};function Vk(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Xk(){this.P=[];this.R=[]}
var Yk;function Zk(){if(!Yk){var a=Yk=new Xk;a.R.length=0;a.P.length=0;Wk.R&&a.R.push.apply(a.R,Wk.R);Wk.P&&a.P.push.apply(a.P,Wk.P)}return Yk}
;var $k=new M;function al(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=bl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=bl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=bl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function bl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function cl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=dl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=al(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?dl(f+".ve",g,h,k):0;d+=f;d+=dl(e,a[e],b,c);if(500<d)break}}else c[b]=el(a),d+=c[b].length;else c[b]=el(a),d+=c[b].length;return d}
function dl(a,b,c,d){c+="."+a;a=el(b);d[c]=a;return c.length+a.length}
function el(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var fl=new Set,gl=0,hl=0,il=0,jl=[],kl=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ll(a){ml(a,"WARNING")}
function ml(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||E("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=gl))){var g=Sd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=cl(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,r=el(n[l]);c[p]=r;k+=p.length+r.length;if(500<k)break}}else c.params=el(n)}if(jl.length)for(l=0;l<jl.length&&!(k=cl(jl[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Zk();c=u(a.R);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.jl)){a=d.weight;break a}a=u(a.P);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Da(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Uk);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ma[l.name])for(e=u(c.ma[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.za(f);break}l.params||(l.params={});a=Zk();l.params["params.errorServiceSignature"]="msg="+a.R.length+"&cb="+a.P.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!fl.has(l.message)){"ERROR"===b?($k.U("handleError",l),O("record_app_crashed_web")&&0===il&&1===l.sampleWeight&&
(il++,Tk("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),hl++):"WARNING"===b&&$k.U("handleWarning",l);if(O("kevlar_gel_error_routing")){a=b;b:{c=u(kl);for(d=c.next();!d.done;d=c.next())if(Zg(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),
d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};E("FEXP_EXPERIMENTS")&&(e.experimentIds=E("FEXP_EXPERIMENTS"));if(f=l.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});
f=E("SERVER_NAME",void 0);g=E("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(Tk("clientError",c),("ERROR"===a||O("errors_flush_gel_always_killswitch"))&&Dh())}if(!O("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:E("PAGE_NAME",window.location.href),
file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=E("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=E("SERVER_NAME",void 0);c=E("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}Qg(E("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}fl.add(l.message);gl++}}}
function nl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;var ol={jc:3611,yb:27686,zb:85013,Ab:23462,Cb:42016,Db:62407,Eb:26926,Bb:43781,Fb:51236,Gb:79148,Hb:50160,Ib:77504,Ub:87907,Vb:18630,Wb:54445,Xb:80935,Yb:105675,Zb:37521,ac:47786,cc:98349,dc:123695,ec:6827,fc:29434,hc:7282,ic:124448,mc:32276,lc:76278,nc:93911,oc:106531,pc:27259,qc:27262,sc:27263,uc:21759,wc:27107,xc:62936,yc:49568,zc:38408,Ac:80637,Bc:68727,Cc:68728,Dc:80353,Ec:80356,Fc:74610,Gc:45707,Hc:83962,Ic:83970,Jc:46713,Kc:89711,Lc:74612,Mc:93265,Nc:74611,Oc:128979,Pc:128978,Rc:113533,Sc:93252,
Tc:99357,Vc:94521,Wc:114252,Xc:113532,Yc:94522,Uc:94583,Zc:88E3,bd:93253,cd:93254,dd:94387,ed:94388,fd:93255,gd:97424,Qc:72502,hd:110111,jd:76019,ld:117092,md:117093,kd:89431,nd:110466,od:77240,pd:60508,qd:105350,rd:73393,sd:113534,td:92098,ud:84517,vd:83759,wd:80357,xd:86113,yd:72598,zd:72733,Ad:107349,Bd:124275,Cd:118203,Dd:117431,Ed:117429,Fd:117430,Gd:117432,Hd:120080,Id:117259,Jd:121692,Kd:97615,Ld:31402,Md:84774,Nd:95117,Od:98930,Pd:98931,Qd:98932,Rd:43347,Sd:45474,Td:100352,Ud:84758,Vd:98443,
Wd:117985,Xd:74613,Yd:74614,Zd:64502,ae:74615,be:74616,ce:122224,de:74617,ee:77820,ge:74618,he:93278,ie:93274,je:93275,ke:93276,le:22110,me:29433,oe:120541,qe:82047,re:113550,se:75836,te:75837,ue:42352,we:84512,xe:76065,ye:75989,ze:16623,Ae:32594,Be:27240,Ce:32633,De:74858,Fe:3945,Ee:16989,Ge:45520,He:25488,Ie:25492,Je:25494,Ke:55760,Le:14057,Me:18451,Ne:57204,Oe:57203,Pe:17897,Qe:57205,Re:18198,Se:17898,Te:17909,Ue:43980,Ve:46220,We:11721,Xe:49954,Ye:96369,Ze:3854,af:56251,bf:25624,cf:16906,df:99999,
ef:68172,ff:27068,gf:47973,hf:72773,jf:26970,kf:26971,lf:96805,mf:17752,nf:73233,pf:109512,qf:22256,rf:14115,sf:22696,tf:89278,uf:89277,vf:109513,wf:43278,xf:43459,yf:43464,zf:89279,Af:43717,Bf:55764,Cf:22255,Df:89281,Ef:40963,Ff:43277,Gf:43442,Hf:91824,If:120137,Jf:96367,Kf:36850,Lf:72694,Mf:37414,Nf:36851,Pf:124863,Of:121343,Qf:73491,Rf:54473,Sf:43375,Tf:46674,Uf:32473,Vf:72901,Wf:72906,Xf:50947,Yf:50612,Zf:50613,ag:50942,cg:84938,dg:84943,eg:84939,fg:84941,gg:84944,hg:84940,ig:84942,jg:35585,kg:51926,
lg:79983,mg:63238,ng:18921,og:63241,pg:57893,qg:41182,rg:33424,sg:22207,tg:42993,ug:36229,vg:22206,wg:22205,xg:18993,yg:19001,zg:18990,Ag:18991,Bg:18997,Cg:18725,Dg:19003,Eg:36874,Fg:44763,Gg:33427,Hg:67793,Ig:22182,Jg:37091,Kg:34650,Lg:50617,Mg:47261,Ng:22287,Og:25144,Pg:97917,Qg:62397,Rg:125598,Sg:36961,Tg:108035,Ug:27426,Vg:27857,Wg:27846,Xg:27854,Yg:69692,Zg:61411,ah:39299,bh:38696,dh:62520,eh:36382,fh:108701,gh:50663,hh:36387,ih:14908,jh:37533,kh:105443,lh:61635,mh:62274,nh:65702,oh:65703,ph:65701,
qh:76256,rh:37671,sh:49953,uh:36216,vh:28237,wh:39553,xh:29222,yh:26107,zh:38050,Ah:26108,Ch:120745,Bh:26109,Dh:26110,Eh:66881,Fh:28236,Gh:14586,Hh:57929,Ih:74723,Jh:44098,Kh:44099,Lh:23528,Mh:61699,Nh:59149,Oh:101951,Ph:97346,Qh:118051,Rh:95102,Sh:64882,Th:119505,Uh:63595,Vh:63349,Wh:95101,Xh:75240,Yh:27039,Zh:68823,ai:21537,bi:83464,ci:75707,di:83113,fi:101952,gi:101953,ii:79610,ji:125755,ki:24402,li:24400,mi:32925,ni:57173,oi:122502,ri:64423,si:64424,ti:33986,vi:100828,wi:129089,xi:21409,yi:11070,
zi:11074,Ai:17880,Bi:14001,Di:30709,Ei:30707,Fi:30711,Gi:30710,Hi:30708,Ci:26984,Ii:63648,Ji:63649,Ki:51879,Li:111059,Mi:5754,Ni:20445,Oi:110386,Pi:113746,Qi:66557,Ri:17310,Si:28631,Ti:21589,Ui:68012,Vi:60480,Wi:31571,Xi:76980,Yi:41577,Zi:45469,aj:38669,bj:13768,cj:13777,dj:62985,ej:4724,fj:59369,gj:43927,hj:43928,ij:12924,jj:100355,mj:56219,nj:27669,oj:10337,lj:47896,pj:122629,qj:121258,rj:107598,sj:127991,tj:96639,uj:107536,vj:96661,wj:96658,xj:116646,yj:121122,zj:96660,Aj:127738,Bj:127083,Cj:104443,
Dj:96659,Ej:106442,Fj:63667,Gj:63668,Hj:63669,Ij:78314,Jj:55761,Kj:127098,Lj:96368,Mj:67374,Nj:48992,Oj:49956,Pj:31961,Qj:26388,Rj:23811,Sj:5E4,Tj:126250,Uj:96370,Vj:47355,Wj:47356,Xj:37935,Yj:45521,Zj:21760,ak:83769,bk:49977,ck:49974,dk:93497,ek:93498,fk:34325,gk:115803,hk:123707,ik:100081,jk:35309,kk:68314,lk:25602,mk:100339,nk:59018,pk:18248,qk:50625,rk:9729,sk:37168,tk:37169,uk:21667,vk:16749,wk:18635,xk:39305,yk:18046,zk:53969,Ak:8213,Bk:93926,Ck:102852,Dk:110099,Ek:22678,Fk:69076,Hk:100856,
Ik:17736,Jk:3832,Kk:55759,Lk:64031,Mk:93044,Nk:93045,Ok:34388,Pk:17657,Qk:17655,Rk:39579,Sk:39578,Tk:77448,Uk:8196,Vk:11357,Wk:69877,Xk:8197,Yk:82039};function pl(){var a=jb(ql),b;return df(new Xe(function(c,d){a.onSuccess=function(e){Kg(e)?c(new rl(e)):d(new sl("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new sl("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new sl("Request timed out","net.timeout",e))};
b=Qg("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ef&&b.abort();
return bf(c)})}
function sl(a,b,c){Ra.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(sl,Ra);function rl(a){this.xhr=a}
;function tl(){this.i=0;this.h=null}
tl.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),We(a)?a:ul(a)):2===this.i&&b?(a=b.call(c,this.h),We(a)?a:vl(a)):this};
tl.prototype.getValue=function(){return this.h};
tl.prototype.$goog_Thenable=!0;function vl(a){var b=new tl;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function ul(a){var b=new tl;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function wl(){if(ud())return!0;var a=E("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Yg&&Zg("applewebkit")&&!Zg("version")&&(!Zg("safari")||Zg("gsa/"))||ic&&Zg("version/")?!0:(a=sd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function xl(a){Ra.call(this,a.message||a.description||a.name);this.isMissing=a instanceof yl;this.isTimeout=a instanceof sl&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ef}
v(xl,Ra);xl.prototype.name="BiscottiError";function yl(){Ra.call(this,"Biscotti ID is missing from server")}
v(yl,Ra);yl.prototype.name="BiscottiMissingError";var ql={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},zl=null;function ug(){if(O("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!wl())return bf(Error("User has not consented - not fetching biscotti id."));if("1"==hb())return bf(Error("Biscotti ID is not available in private embed mode"));zl||(zl=df(pl().then(Al),function(a){return Bl(2,a)}));
return zl}
function Al(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new yl;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new yl;a=a.id;vg(a);zl=ul(a);Cl(18E5,2);return a}
function Bl(a,b){b=new xl(b);vg("");zl=vl(b);0<a&&Cl(12E4,a-1);throw b;}
function Cl(a,b){fg(function(){df(pl().then(Al,function(c){return Bl(b,c)}),Ea)},a)}
function Dl(){try{var a=B("yt.ads.biscotti.getId_");return a?a():ug()}catch(b){return bf(b)}}
;function El(a){if("1"!=hb()){a&&tg();try{Dl().then(function(){},function(){}),fg(El,18E5)}catch(b){Pf(b)}}}
;var Fl=Date.now().toString();
function Gl(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Fl)for(a=1,b=0;b<Fl.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Fl.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Hl,Il=y.ytLoggingDocDocumentNonce_;Il||(Il=Gl(),Pa("ytLoggingDocDocumentNonce_",Il));Hl=Il;var Jl={ne:0,kc:1,tc:2,th:3,pe:4,Gk:5,hi:6,kj:7,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE"};function Kl(a){this.h=a}
function Ll(a){return new Kl({trackingParams:a})}
Kl.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Kl.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Kl.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Ml(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Nl(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ol(a){return E(Nl(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Ol,void 0);function Pl(a){return(a=Ol(void 0===a?0:a))?new Kl({veType:a,youtubeData:void 0}):null}
function Ql(){var a=E("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function Rl(a){a=void 0===a?0:a;var b=E(Ml(a));if(!b&&!E("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",Rl,void 0);function Sl(a,b,c){var d=Ql();(c=Rl(c))&&delete d[c];b&&(d[a]=b)}
function Tl(a){return Ql()[a]}
z("yt_logging_screen.getCttAuthInfo",Tl,void 0);function Ul(a,b,c,d){c=void 0===c?0:c;if(a!==E(Ml(c))||b!==E(Nl(c)))Sl(a,d,c),N(Ml(c),a),N(Nl(c),b),b=function(){setTimeout(function(){a&&Nh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Hl,clientScreenNonce:a},Sk)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",Ul,void 0);function Vl(a){gi.call(this,1,arguments);this.csn=a}
v(Vl,gi);var pi=new hi("screen-created",Vl),Wl=[],Yl=Xl,Zl=0;function $l(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:Xa(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(fb(e)||!e.trackingParams&&!e.veType)&&ll(Error("Child VE logged with no data"));d={F:Tl(b),S:b};"UNDEFINED_CSN"==b?am("visualElementAttached",c,d):a?Nh("visualElementAttached",c,a,d):Tk("visualElementAttached",c,d)}
function Xl(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return xc(b)}
function am(a,b,c){Wl.push({payloadName:a,payload:b,options:c});Zl||(Zl=qi())}
function ri(a){if(Wl){for(var b=u(Wl),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Nh(c.payloadName,c.payload,null,c.options));Wl.length=0}Zl=0}
;function bm(){this.i=new Set;this.h=new Set;this.j=new Map}
bm.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};function cm(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!dm(a)||c.some(function(e){return!dm(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())em(a,d.value);return a}
function em(a,b){for(var c in b)if(dm(b[c])){if(c in a&&!dm(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});em(a[c],b[c])}else if(fm(b[c])){if(c in a&&!fm(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);gm(a[c],b[c])}else a[c]=b[c];return a}
function gm(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,dm(c)?a.push(em({},c)):fm(c)?a.push(gm([],c)):a.push(c);return a}
function dm(a){return"object"===typeof a&&!Array.isArray(a)}
function fm(a){return"object"===typeof a&&Array.isArray(a)}
;function hm(a,b){gi.call(this,1,arguments)}
v(hm,gi);function im(a,b){gi.call(this,1,arguments)}
v(im,gi);var jm=new hi("aft-recorded",hm),km=new hi("timing-sent",im);var lm=window;function mm(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var U=lm.performance||lm.mozPerformance||lm.msPerformance||lm.webkitPerformance||new mm;var nm=!1,om={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Na(U.clearResourceTimings||U.webkitClearResourceTimings||U.mozClearResourceTimings||U.msClearResourceTimings||U.oClearResourceTimings||Ea,U);function pm(a){var b=qm(a);if(b.aft)return b.aft;a=E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function rm(){var a;if(O("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===U||void 0===U?void 0:U.getEntriesByType)||void 0===a?void 0:a.call(U,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=sm(e.requestStart),e.responseEnd=sm(e.responseEnd),e.redirectStart=sm(e.redirectStart),e.redirectEnd=sm(e.redirectEnd),e.domainLookupEnd=sm(e.domainLookupEnd),e.connectStart=sm(e.connectStart),
e.connectEnd=sm(e.connectEnd),e.responseStart=sm(e.responseStart),e.secureConnectionStart=sm(e.secureConnectionStart),e.domainLookupStart=sm(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=U.timing}else a=U.timing;return a}
function tm(){return O("csi_use_time_origin")&&U.timeOrigin?Math.floor(U.timeOrigin):U.timing.navigationStart}
function sm(a){return Math.round(tm()+a)}
function um(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Pa("ytcsi."+(a||"")+"data_",b));return b}
function vm(a){a=um(a);a.info||(a.info={});return a.info}
function qm(a){a=um(a);a.tick||(a.tick={});return a.tick}
function wm(a){var b=um(a).nonce;b||(b=Gl(),um(a).nonce=b);return b}
function xm(a){var b=qm(a||""),c=pm(a);c&&!nm&&(mi(jm,new hm(Math.round(c-b._start),a)),nm=!0)}
;function ym(){if(U.getEntriesByType){var a=U.getEntriesByType("paint");if(a=Za(a,function(b){return"first-paint"===b.name}))return sm(a.startTime)}a=U.timing;
return a.ib?Math.max(0,a.ib):0}
;function zm(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function Am(a){a=a||"";var b=B("ytcsi.reference");b||(zm(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=zm(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Bm=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Bm,void 0);function Cm(){this.h=0}
function Dm(){Cm.h||(Cm.h=new Cm);return Cm.h}
Cm.prototype.tick=function(a,b,c){Em(this,"tick_"+a+"_"+b)||Tk("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Cm.prototype.info=function(a,b){var c=Object.keys(a).join("");Em(this,"info_"+c+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Tk("latencyActionInfo",a))};
Cm.prototype.span=function(a,b){var c=Object.keys(a).join("");Em(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Tk("latencyActionSpan",a))};
function Em(a,b){Bm[b]=Bm[b]||{count:0};var c=Bm[b];c.count++;c.time=P();a.h||(a.h=jg(function(){var d=P(),e;for(e in Bm)Bm[e]&&6E4<d-Bm[e].time&&delete Bm[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Bi("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||ll(c)),!0):!1}
;var V={},Fm=(V.auto_search="LATENCY_ACTION_AUTO_SEARCH",V.ad_to_ad="LATENCY_ACTION_AD_TO_AD",V.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",V.app_startup="LATENCY_ACTION_APP_STARTUP",V["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",V["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",V["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",V.browse="LATENCY_ACTION_BROWSE",V.channels="LATENCY_ACTION_CHANNELS",V.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",
V["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",V["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",V["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",V["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",V["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",V["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",V["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",V["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
V["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",V["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",V.chips="LATENCY_ACTION_CHIPS",V["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",V["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",V.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",V.embed="LATENCY_ACTION_EMBED",V.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",V.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",
V.home="LATENCY_ACTION_HOME",V.library="LATENCY_ACTION_LIBRARY",V.live="LATENCY_ACTION_LIVE",V.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",V.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",V.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",V.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",V.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",V.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",V["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",
V["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",V.prebuffer="LATENCY_ACTION_PREBUFFER",V.prefetch="LATENCY_ACTION_PREFETCH",V.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",V.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",V.reel_watch="LATENCY_ACTION_REEL_WATCH",V.results="LATENCY_ACTION_RESULTS",V.search_ui="LATENCY_ACTION_SEARCH_UI",V.search_suggest="LATENCY_ACTION_SUGGEST",V.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",V.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
V.seek="LATENCY_ACTION_PLAYER_SEEK",V.settings="LATENCY_ACTION_SETTINGS",V.tenx="LATENCY_ACTION_TENX",V.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",V.watch="LATENCY_ACTION_WATCH",V.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",V["watch,watch7"]="LATENCY_ACTION_WATCH",V["watch,watch7_html5"]="LATENCY_ACTION_WATCH",V["watch,watch7ad"]="LATENCY_ACTION_WATCH",V["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",V.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",V.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",V["video.analytics"]=
"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",V["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",V["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",V["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",V["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",V["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",V["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",V.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",V.cast_load_by_entity_to_watch=
"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",V.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",V),W={},Gm=(W.ad_allowed="adTypesAllowed",W.yt_abt="adBreakType",W.ad_cpn="adClientPlaybackNonce",W.ad_docid="adVideoId",W.yt_ad_an="adNetworks",W.ad_at="adType",W.aida="appInstallDataAgeMs",W.browse_id="browseId",W.p="httpProtocol",W.t="transportProtocol",W.cpn="clientPlaybackNonce",W.ccs="creatorInfo.creatorCanaryState",W.csn="clientScreenNonce",W.docid="videoId",W.GetHome_rid="requestIds",
W.GetSearch_rid="requestIds",W.GetPlayer_rid="requestIds",W.GetWatchNext_rid="requestIds",W.GetBrowse_rid="requestIds",W.GetLibrary_rid="requestIds",W.is_continuation="isContinuation",W.is_nav="isNavigation",W.b_p="kabukiInfo.browseParams",W.is_prefetch="kabukiInfo.isPrefetch",W.is_secondary_nav="kabukiInfo.isSecondaryNav",W.prev_browse_id="kabukiInfo.prevBrowseId",W.query_source="kabukiInfo.querySource",W.voz_type="kabukiInfo.vozType",W.yt_lt="loadType",W.mver="creatorInfo.measurementVersion",W.yt_ad=
"isMonetized",W.nr="webInfo.navigationReason",W.nrsu="navigationRequestedSameUrl",W.ncnp="webInfo.nonPreloadedNodeCount",W.pnt="performanceNavigationTiming",W.prt="playbackRequiresTap",W.plt="playerInfo.playbackType",W.pis="playerInfo.playerInitializedState",W.paused="playerInfo.isPausedOnLoad",W.yt_pt="playerType",W.fmt="playerInfo.itag",W.yt_pl="watchInfo.isPlaylist",W.yt_pre="playerInfo.preloadType",W.yt_ad_pr="prerollAllowed",W.pa="previousAction",W.yt_red="isRedSubscriber",W.rce="mwebInfo.responseContentEncoding",
W.scrh="screenHeight",W.scrw="screenWidth",W.st="serverTimeMs",W.ssdm="shellStartupDurationMs",W.br_trs="tvInfo.bedrockTriggerState",W.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",W.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",W.label="tvInfo.label",W.is_mdx="tvInfo.isMdx",W.preloaded="tvInfo.isPreloaded",W.upg_player_vis="playerInfo.visibilityState",W.query="unpluggedInfo.query",W.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",W.yt_vst="videoStreamType",W.vph="viewportHeight",
W.vpw="viewportWidth",W.yt_vis="isVisible",W.rcl="mwebInfo.responseContentLength",W.GetSettings_rid="requestIds",W.GetTrending_rid="requestIds",W.GetMusicSearchSuggestions_rid="requestIds",W.REQUEST_ID="requestIds",W),Hm="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Im={},Jm=(Im.ccs="CANARY_STATE_",Im.mver="MEASUREMENT_VERSION_",Im.pis="PLAYER_INITIALIZED_STATE_",Im.yt_pt="LATENCY_PLAYER_",Im.pa="LATENCY_ACTION_",Im.yt_vst="VIDEO_STREAM_TYPE_",Im),Km="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Lm(a){return!!E("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||O("enable_csi_on_gel")||!!um(a).useGel}
function Mm(a,b,c){var d=Nm(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||P();return Lm(c)?(Am(c||"").tick[a]=b||P(),d=wm(c),"_start"===a?(a=Dm(),Em(a,"baseline_"+d)||Tk("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):Dm().tick(a,d,b),xm(c),!0):!1}
function Om(a,b,c){c=Nm(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Gm){c=Gm[a];0<=Va(Hm,c)&&(b=!!b);a in Jm&&"string"===typeof b&&(b=Jm[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return cm({},d)}0<=Va(Km,a)||ll(new Bi("Unknown label logged with GEL CSI",a))}
function Nm(a){a=um(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Pm(a){a=Nm(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Qm(a,b,c){null!==b&&(vm(c)[a]=b,Lm(c)?(a=Om(a,b,c))&&Lm(c)&&(b=Am(c||""),cm(b.info,a),cm(Pm(c),a),c=wm(c),Dm().info(a,c)):Am(c||"").info[a]=b)}
function Z(a,b,c){var d=qm(c);if(!b&&"_"!==a[0]){var e=a;U.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),U.mark(e))}e=b||P();d[a]=e;Mm(a,b,c)||(Rm(c),Am(c||"").tick[a]=b||P());return d[a]}
function Sm(a,b){if(Lm(void 0)){var c=Nm(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}a={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};Am("").span[String(a.spanName)]=a;b=Nm(void 0);b.gelSpans||(b.gelSpans={});cm(b.gelSpans,a);b=wm(void 0);Dm().span(a,b)}}
function Tm(){var a=wm(void 0);requestAnimationFrame(function(){setTimeout(function(){a===wm(void 0)&&Z("ol",void 0,void 0)},0)})}
function Rm(a){if(!B("yt.timing."+(a||"")+"pingSent_")){var b=E((a||"")+"TIMING_ACTION",void 0),c=qm(a);if(b=!!B("ytglobal.timing"+(a||"")+"ready_")&&b)b="_start"in qm(void 0);if(b&&pm(a))if(xm(a),a)Um(a);else{b=!0;var d=E("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&Um(a)}}}
function Vm(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Wf+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Um(a){if(!Lm(a)){var b=qm(a),c=vm(a),d=b._start,e=E("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:E((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=pm(a);var h=qm(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&vm(a).yt_pvis&&"youtube"===e&&(Qm("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=P();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&(b||O("always_send_csi_204_with_beacon"))?eh(f):bh(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);mi(km,new im(n.aft+(Number(g)||0),a))}}
function Wm(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Rb()&&a.setAttribute("nonce",Rb());return c?(a=U.getEntriesByName(c))&&a[0]&&(a=a[0],c=tm(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&(b=vm(void 0),c=Pm(void 0),"rc"in b||"rc"in c||Qm("rc",""),0===a.transferSize))?!0:!1:!1}
function Xm(){var a=window.location.protocol,b=U.getEntriesByType("resource");b=Wa(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Ya(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",sm(b.startTime)),Z("wffe",sm(b.responseEnd)))}
var Ym=window;Ym.ytcsi&&(Ym.ytcsi.info=Qm,Ym.ytcsi.tick=Z);function Zm(){this.l=[];this.o=[];this.h=[];this.i=new Set;this.m=new Map}
function $m(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Rl(c),h=Pl(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&$l(a.client,g,h,[Ll(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&$l(a.client,g,h,[Ll(d.playerResponse.trackingParams)]))})}
function an(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=Rl(d);c=c||Pl(d);e&&c&&$l(a.client,e,c,[b])}}
Zm.prototype.clickCommand=function(a,b,c){c=Rl(void 0===c?0:c);if(!a.clickTrackingParams||!c)return!1;var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:Ll(a.clickTrackingParams).getAsJson(),gestureType:e};b&&(a.clientData=b);b={F:Tl(c),S:c};"UNDEFINED_CSN"==c?am("visualElementGestured",a,b):d?Nh("visualElementGestured",a,d,b):Tk("visualElementGestured",a,b);return!0};
function bn(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){cn(a,b,c);var f=Pl(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,an(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Rl(g);var l=k[0]||Pl(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={F:Tl(h),S:h},"UNDEFINED_CSN"==h?am("visualElementStateChanged",k,l):g?Nh("visualElementStateChanged",k,g,l):Tk("visualElementStateChanged",
k,l))}}};
Rl(c.layer)||a.j();if(c.Ga)for(var d=u(c.Ga),e=d.next();!e.done;e=d.next())$m(a,e.value,c.layer);else ml(Error("Delayed screen needs a data promise."))}
function cn(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.jb?c.jb:c.layer;var e=Rl(d);d=Pl(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=E("EVENT_ID");O("screen_manager_log_servlet_ei")&&"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.Fa,n=c.F,p=Yl(),r={csn:p,pageVe:(new Kl({veType:b,youtubeData:g})).getAsJson()};h&&
h.visualElement?r.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&ll(new Bi("newScreen() parent element does not have a VE - rootVe",b));l&&(r.cloneCsn=l);l={F:n,S:p};k?Nh("screenCreated",r,k,l):Tk("screenCreated",r,l);mi(pi,new Vl(p));var q=p}catch(A){nl(A,{ml:b,rootVe:d,parentVisualElement:void 0,fl:e,ll:f,Fa:c.Fa});ml(A);return}Ul(q,b,c.layer,c.F);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(Jl));
for(f=b.next();!f.done;f=b.next())if(Rl(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={F:Tl(e),S:e,Ua:f},"UNDEFINED_CSN"==e?am("visualElementHidden",d,f):b?Nh("visualElementHidden",d,b,f):Tk("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");Qm("csn",q);rf(bm).clear();d=Pl(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&
(e=q,q=O("use_default_events_client")?void 0:Sk,b={csn:e,ve:d.getAsJson(),eventType:1},f={F:Tl(e),S:e},"UNDEFINED_CSN"==e?am("visualElementShown",b,f):q?Nh("visualElementShown",b,q,f):Tk("visualElementShown",b,f));a.i.delete(c.layer||0);a.j=void 0;e=u(a.m);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value.has(c.layer)&&d&&an(a,b,d,c.layer)}
;function dn(a){a&&(a.dataset?a.dataset[en("loaded")]="true":a.setAttribute("data-loaded","true"))}
function fn(a,b){return a?a.dataset?a.dataset[en(b)]:a.getAttribute("data-"+b):null}
var gn={};function en(a){return gn[a]||(gn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var hn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,jn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function kn(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(hn,""),c=c.replace(jn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ln(a,b,c)}
function ln(a,b,c){c=void 0===c?null:c;var d=mn(a),e=document.getElementById(d),f=e&&fn(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=jh(d,b),b=""+Ia(b),nn[b]=f),g||(e=on(a,d,function(){fn(e,"loaded")||(dn(e),mh(d),fg(Oa(nh,d),0))},c)))}
function on(a,b,c,d){d=void 0===d?null:d;var e=Xc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Pc(e,hd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function pn(a){a=mn(a);var b=document.getElementById(a);b&&(nh(a),b.parentNode.removeChild(b))}
function qn(a,b){a&&b&&(a=""+Ia(b),(a=nn[a])&&lh(a))}
function mn(a){var b=document.createElement("a");Ob(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var nn={};var rn=[],sn=!1;function tn(){if((!O("condition_ad_status_fetch_on_consent_cookie_html5_clients")||wl())&&"1"!=hb()){var a=function(){sn=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{kn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}rn.push(lg(function(){if(!(sn||"google_ad_status"in window)){try{qn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}sn=!0;N("DCLKSTAT",3)}},5E3))}}
function un(){var a=Number(E("DCLKSTAT",0));return isNaN(a)?0:a}
;function vn(){this.i=!1;this.h=null}
vn.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){if(g=a.interpreterSafeScript)if(g=g.privateDoNotAccessOrElseSafeScriptWrappedValue){var k,l=null===(k=Gc())||void 0===k?void 0:k.createScript(g);g=new Ic(null!==l&&void 0!==l?l:g,Cc)}else g=null;else g=null;g=g.toString()}if(a.interpreterSafeUrl){var n;(h=a.interpreterSafeUrl)?(h=h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?
(k=null===(n=Gc())||void 0===n?void 0:n.createScriptURL(h),n=new Nc(null!==k&&void 0!==k?k:h,Cc)):n=null:n=null;h=n.toString()}wn(this,g,h,a.program,b,c,d)}else ll(Error("Cannot initialize botguard without program"))};
function wn(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,kn(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?xn(a,d,!!g,h,e):(pn(c),ll(new Bi("Unable to load Botguard","from "+c)))},f)):b&&(f=Xc(document,"SCRIPT"),f.textContent=b,f.nonce=Rb(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?xn(a,d,!!g,b,e):ll(Error("Unable to load Botguard from JS")))}
function xn(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{yn(a,new d(b,e?function(){return e(b)}:Ea))}catch(h){h instanceof Error&&ll(h)}else{try{yn(a,new d(b))}catch(h){h instanceof Error&&ll(h)}e&&e(b)}else ll(Error("Failed to finish initializing VM"))}
vn.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
vn.prototype.dispose=function(){this.h=null};
function yn(a,b){a.h=b}
;var zn=new vn;function An(){return!!zn.h}
function Bn(a){a=void 0===a?{}:a;return zn.invoke(a)}
;var Cn=window,Dn=/[A-Za-z]+\/[0-9.]+/g;function En(a,b){if(a.replace(Dn,"")!==b.replace(Dn,""))return!1;a=a.match(Dn);b=b.match(Dn);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function Fn(){var a=Cn.uaChPolyfill.state;if(0===a.type)Tk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&En(a.syntheticUa,b);Tk("clientHintsPolyfillEvent",{clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c});c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(d){return'"'+d.brand+'"; v="'+d.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&
(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),Tk("clientHintsPolyfillDiagnostics",b))}}
var Gn=!1;function Hn(){var a;1===(null===(a=Cn.uaChPolyfill)||void 0===a?void 0:a.state.type)?Gn||(Cn.uaChPolyfill.onReady=Hn,Gn=!0):Cn.uaChPolyfill&&Fn()}
;function In(a,b,c){J.call(this);var d=this;c=c||E("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.C="*";this.l=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.C=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=Va(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
v(In,J);In.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.C)}catch(d){Qf(d)}}};
In.prototype.D=function(){window.removeEventListener("message",this.A);J.prototype.D.call(this)};function Jn(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new In(!!E("WIDGET_ID_ENFORCE")),b=this.lb.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=E("WIDGET_ID"))this.h.sessionId=a}
m=Jn.prototype;m.lb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Kn(this,a)),this.j[a]=!0)):this.Ba(a,b,c)};
m.Ba=function(){};
function Kn(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Va=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.ta());this.sendMessage("onReady");D(this.i,this.Ma,this);this.i=[]};
m.ta=function(){return null};
function Ln(a,b){a.sendMessage("infoDelivery",b)}
m.Ma=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ma({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function Mn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Nn(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function On(a,b,c,d){if(Ha(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Pn(a){Jn.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.sb.bind(this));this.addEventListener("onVolumeChange",this.tb.bind(this));this.addEventListener("onApiChange",this.nb.bind(this));this.addEventListener("onPlaybackQualityChange",this.pb.bind(this));this.addEventListener("onPlaybackRateChange",this.qb.bind(this));this.addEventListener("onStateChange",this.rb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.ub.bind(this))}
v(Pn,Jn);m=Pn.prototype;
m.Ba=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Mn(a)){var d=b;if(Ha(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Nn(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Nn(e);break;case "loadPlaylist":case "cuePlaylist":e=On(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Mn(a)&&Ln(this,this.ta())}};
m.onReady=function(){var a=this.Va.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.ta=function(){if(!this.api)return null;var a=this.api.getApiInterface();$a(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.rb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ln(this,a)};
m.pb=function(a){Ln(this,{playbackQuality:a})};
m.qb=function(a){Ln(this,{playbackRate:a})};
m.nb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.tb=function(){Ln(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.sb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ln(this,a)};
m.ub=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ln(this,a)};
m.dispose=function(){Jn.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Qn(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.La,this)}
v(Qn,J);m=Qn.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.V("RECEIVING"))};
m.V=function(a,b){this.started&&!this.h&&this.connection.V(a,b)};
m.La=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Rn(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Sn(a,c))&&this.V(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.ob.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.ob=function(a,b){this.started&&!this.h&&this.connection.V(a,this.sa(a,b))};
m.sa=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h||pf(a.i,"command",this.La,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function Tn(a,b){Qn.call(this,b);this.api=a;this.start()}
v(Tn,Qn);Tn.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Tn.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Rn(a,b){switch(a){case "loadVideoById":return a=Nn(b),[a];case "cueVideoById":return a=Nn(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=On(b),[a];case "cuePlaylist":return a=On(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Sn(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Tn.prototype.sa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Qn.prototype.sa.call(this,a,b)};
Tn.prototype.D=function(){Qn.prototype.D.call(this);delete this.api};function Un(a){a=void 0===a?!1:a;J.call(this);this.i=new M(a);Yd(this,Oa(Wd,this.i))}
C(Un,J);Un.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Un.prototype.l=function(a,b){this.h||this.i.U.apply(this.i,arguments)};function Vn(a,b,c){Un.call(this);this.j=a;this.destination=b;this.id=c}
v(Vn,Un);Vn.prototype.V=function(a,b){this.h||this.j.V(this.destination,this.id,a,b)};
Vn.prototype.D=function(){this.destination=this.j=null;Un.prototype.D.call(this)};function Wn(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=cg(window,"message",this.j.bind(this));this.connection=new Vn(this,a,b);Yd(this,Oa(Wd,this.connection))}
v(Wn,J);Wn.prototype.V=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Qe(a),this.origin))};
Wn.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Wn.prototype.D=function(){dg(this.i);this.destination=null;J.prototype.D.call(this)};function Xn(){J.call(this);this.i=[]}
v(Xn,J);Xn.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Da)}J.prototype.D.call(this)};function Yn(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||jb(b);this.assets=a.assets||{};this.attrs=a.attrs||jb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Yn.prototype.clone=function(){var a=new Yn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Fa(c)?a[b]=jb(c):a[b]=c}return a};var Zn=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function $n(a){a=a||"";if(window.spf){var b=a.match(Zn);spf.style.load(a,b?b[1]:"",void 0)}else ao(a)}
function ao(a){var b=bo(a),c=document.getElementById(b),d=c&&fn(c,"loaded");d||c&&!d||(c=co(a,b,function(){fn(c,"loaded")||(dn(c),mh(b),fg(Oa(nh,b),0))}))}
function co(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=hd(a);Pb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function bo(a){var b=Xc(document,"A");Ob(b,new Bb(a,Cb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function eo(a,b,c,d){J.call(this);var e=this;this.G=b;this.webPlayerContextConfig=d;this.oa=!1;this.api={};this.Z=this.m=null;this.J=new M;this.i={};this.M=this.fa=this.elementId=this.qa=this.config=null;this.K=!1;this.l=this.A=null;this.ga={};this.Na=["onReady"];this.lastError=null;this.Ca=NaN;this.C={};this.Oa=new Xn(this);this.Y=0;this.j=this.u=a;Yd(this,Oa(Wd,this.J));fo(this);go(this);Yd(this,Oa(Wd,this.Oa));c?this.Y=fg(function(){e.loadNewVideoConfig(c)},0):d&&(ho(this),io(this))}
v(eo,J);m=eo.prototype;m.getId=function(){return this.G};
m.loadNewVideoConfig=function(a){if(!this.h){this.Y&&(gg(this.Y),this.Y=0);var b=a||{};b instanceof Yn||(b=new Yn(b));this.config=b;this.setConfig(a);io(this);this.isReady()&&jo(this)}};
function ho(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.G,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.G:a.config.attrs.id=a.G);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.qa=a;this.config=ko(a);ho(this);this.fa||(this.fa=lo(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=jd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=jd(Number(a)||a))};
function jo(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function mo(a){var b=!0,c=no(a);c&&a.config&&(a=oo(a),b=fn(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function io(a){if(!a.h&&!a.K){var b=mo(a);if(b&&"html5"===(no(a)?"html5":null))a.M="html5",a.isReady()||po(a);else if(qo(a),a.M="html5",b&&a.l&&a.u)a.u.appendChild(a.l),po(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=ro(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?ko(a.config):void 0;d&&d(a.u,e,a.webPlayerContextConfig);po(a)};
a.K=!0;b?a.A():(kn(oo(a),a.A),(b=so(a))&&$n(b),to(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function no(a){var b=Tc(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function po(a){var b;if(!a.h){var c=no(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.K=!1,!ro(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||uo(a)):a.Ca=fg(function(){po(a)},50)}}
function uo(a){fo(a);a.oa=!0;var b=no(a);if(b){a.m=vo(a,b,"addEventListener");a.Z=vo(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=vo(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.m&&a.m(g,a.i[g]);jo(a);a.fa&&a.fa(a.api);a.J.U("onReady",a.api)}
function vo(a,b,c){var d=b[c];return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];try{return a.lastError=null,d.apply(b,f)}catch(h){"sendAbandonmentPing"!==c&&(h.params=c,a.lastError=h,ll(h))}}}
function fo(a){a.oa=!1;if(a.Z)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Z(b,a.i[b]);for(var c in a.C)a.C.hasOwnProperty(c)&&gg(Number(c));a.C={};a.m=null;a.Z=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.oa};
function go(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){mh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){mh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){mh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=lo(this,b);d&&(0<=Va(this.Na,a)||this.i[a]||(b=wo(this,a),this.m&&this.m(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&fg(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=lo(this,b))&&pf(this.J,a,b)};
function lo(a,b){var c=b;if("string"===typeof b){if(a.ga[b])return a.ga[b];c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];if(f=B(b))try{f.apply(y,e)}catch(g){ml(g)}};
a.ga[b]=c}return c?c:null}
function wo(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;y[c]=function(d){var e=fg(function(){if(!a.h){a.J.U(b,d);var f=a.C,g=String(e);g in f&&delete f[g]}},0);
gb(a.C,String(e))};
return c}
m.getPlayerType=function(){return this.M||(no(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function qo(a){a.cancel();fo(a);a.M=null;a.config&&(a.config.loaded=!1);var b=no(a);b&&(mo(a)||!to(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.u)for(a=a.u;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&qn(oo(this),this.A);gg(this.Ca);this.K=!1};
m.D=function(){qo(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){ml(b)}this.ga=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.qa=this.config=this.api=null;delete this.u;delete this.j;J.prototype.D.call(this)};
function to(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function oo(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function so(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function ro(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===yg(d||"","&")[b]}
function ko(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?jb(e):e}return b}
;var xo={},yo="player_uid_"+(1E9*Math.random()>>>0);function zo(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Tc(d):d;var e=yo+"_"+Ia(d),f=xo[e];if(f&&c)return Ao(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new eo(d,e,a,b);xo[e]=f;mh("player-added",f.api);Yd(f,function(){delete xo[f.getId()]});
return f.api}
function Ao(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Bo=null,Co=null,Do=null;function Eo(){var a=Bo.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Fo(a,b,c){a="ST-"+Ub(a).toString(36);b=b?Zb(b):"";c=c||5;O("drop_st_cookie_before_cb")&&!wl()||Ph(a,b,c)}
;function Go(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=E("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=E("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Xb(window.location.href);g&&f.push(g);g=Xb(d);if(0<=Va(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Ob(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Rl()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Fo(d,b,k)}else Fo(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=$b(a,l)+n;var r=void 0===r?gd:r;a:{r=void 0===r?gd:r;for(l=0;l<r.length;++l)if(n=r[l],n instanceof ed&&n.isValid(a)){r=new Kc(a,Cc);break a}r=void 0}c.href=Oc(r||Lc)}return!0}
;z("yt.setConfig",N,void 0);z("yt.config.set",N,void 0);z("yt.setMsg",Sf,void 0);z("yt.msgs.set",Sf,void 0);z("yt.logging.errors.log",ml,void 0);
z("writeEmbed",function(){var a=E("PLAYER_CONFIG",void 0);if(!a){var b=E("PLAYER_VARS",void 0);b&&(a={args:b})}El(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=E("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);O("embeds_js_api_set_1p_cookie")&&(c=Dg(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));N("FORCE_CSI_ON_GEL",!0);
c=["ol"];Am("").info.actionType="embed";c&&N("TIMING_AFT_KEYS",c);N("TIMING_ACTION","embed");c=E("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Qm(d,c[d]);Qm("is_nav",1);(d=Rl())&&Qm("csn",d);(d=E("PREVIOUS_ACTION",void 0))&&!Lm()&&Qm("pa",d);d=vm();c=E("CLIENT_PROTOCOL");var e=E("CLIENT_TRANSPORT");c&&Qm("p",c);e&&Qm("t",e);Qm("yt_vis",Vm());Qm("yt_lt","cold");c=rm();if(e=tm())Z("srt",c.responseStart),1!==d.prerender&&(Qm("yt_sts","n",void 0),Z("_start",e,void 0));d=ym();0<d&&Z("fpt",d);if(!O("log_deltas_killswitch")){var f,
g,h,k;U&&U.timing&&(U.timeOrigin&&U.timing.navigationStart&&Sm("startTimeDelta",Math.floor(U.timeOrigin)-U.timing.navigationStart),(d=null===(k=null===(h=null===(g=null===(f=U.getEntriesByType)||void 0===f?void 0:f.call(U,"navigation"))||void 0===g?void 0:g[0])||void 0===h?void 0:h.toJSON)||void 0===k?void 0:k.call(h))&&d.responseEnd&&U.timing.responseEnd&&Sm("responseEndDelta",sm(d.responseEnd)-U.timing.responseEnd))}f=rm();f.isPerformanceNavigationTiming&&Qm("pnt",1,void 0);Z("nreqs",f.requestStart,
void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=tm()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",
f.connectEnd,void 0));U&&U.getEntriesByType&&Xm();f=[];if(document.querySelector&&U&&U.getEntriesByName)for(var l in om)om.hasOwnProperty(l)&&(g=om[l],Wm(l,g)&&f.push(g));f.length&&Qm("rc",f.join(","));if(Lm(void 0)){l={actionType:Fm[E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Fm[E("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(f=Rl())l.clientScreenNonce=f;f=wm(void 0);Dm().info(l,f)}l=vm();g=qm();if("cold"===l.yt_lt&&(f=Nm(),h=f.gelTicks?f.gelTicks:f.gelTicks={},
f=f.gelInfos?f.gelInfos:f.gelInfos={},Lm())){for(var n in g)"tick_"+n in h||Mm(n,g[n]);n=Pm();g=wm();h={};for(var p in l)"info_"+p in f||!(k=Om(p,l[p]))||(cm(n,k),cm(h,k));Dm().info(h,g)}z("ytglobal.timingready_",!0,void 0);Rm();(p=E("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in p?(p=p.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,p.serializedForcedExperimentIds||(n=Dg(),n.forced_experiments&&(p.serializedForcedExperimentIds=n.forced_experiments)),Bo=zo(a,
p,!1)):Bo=zo(a);Bo.addEventListener("onVideoDataChange",Eo);a=E("POST_MESSAGE_ID","player");E("ENABLE_JS_API")?Do=new Pn(Bo):E("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Co=new Wn(window.parent,a,b),Do=new Tn(Bo,Co.connection));tn();O("networkless_logging_web_embedded")&&Dk();O("embeds_enable_ua_ch_polyfill")&&Hn()},void 0);
var Ho=Of(function(){Tm();var a=rf(Rh),b=!!((Uh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&ae(document.body,"exp-invert-logo"))if(c&&!ae(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ae(d,"inverted-hdpi")){var e=Zd(d);$d(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ae(document.body,"inverted-hdpi")&&be();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Uh(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete Qh[b]:(c=d.toString(16),Qh[b]=c.toString());c=!0;O("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Qh)d.push(f+"="+encodeURIComponent(String(Qh[f])));Ph(b,d.join("&"),63072E3,a.i,c)}Zm.h||(Zm.h=new Zm);a=Zm.h;f=16623;var g=void 0===g?{}:g;Object.values(ol).includes(f)||(ll(new Bi("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.l=[];a.o=[];g.Ga?bn(a,f,g):cn(a,f,g)}),Io=Of(function(){Bo&&Bo.sendAbandonmentPing&&
Bo.sendAbandonmentPing();
E("PL_ATT")&&zn.dispose();for(var a=0,b=rn.length;a<b;a++)ng(rn[a]);rn.length=0;pn("//static.doubleclick.net/instream/ad_status.js");sn=!1;N("DCLKSTAT",0);Xd(Do,Co);Bo&&(Bo.removeEventListener("onVideoDataChange",Eo),Bo.destroy())});
window.addEventListener?(window.addEventListener("load",Ho),window.addEventListener("unload",Io)):window.attachEvent&&(window.attachEvent("onload",Ho),window.attachEvent("onunload",Io));Pa("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||An);Pa("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Bn);Pa("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||un);
Pa("yt.player.exports.navigate",B("yt.player.exports.navigate")||Go);Pa("yt.util.activity.init",B("yt.util.activity.init")||pg);Pa("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||sg);Pa("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||qg);}).call(this);
