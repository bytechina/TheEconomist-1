(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function n(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||la});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ra={a:!0},sa={};try{sa.__proto__=ra;qa=sa.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ta=pa;
function t(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(ta)ta(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function ua(){this.B=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.s=0;this.v=this.l=null}
function wa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
ua.prototype.N=function(a){this.j=a};
function xa(a,b){a.l={Sb:b,Zb:!0};a.i=a.s||a.o}
ua.prototype.return=function(a){this.l={return:a};this.i=this.o};
function v(a,b,c){a.i=c;return{value:b}}
ua.prototype.u=function(a){this.i=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function za(a,b){a.i=b;a.s=0}
function Aa(a){a.s=0;var b=a.l.Sb;a.l=null;return b}
function Ba(a){a.v=[a.l];a.s=0;a.o=0}
function Ca(a){var b=a.v.splice(0)[0];(b=a.l=a.l||b)?b.Zb?a.i=a.s||a.o:void 0!=b.u&&a.o<b.u?(a.i=b.u,a.l=null):a.i=a.o:a.i=0}
function Da(a){this.i=new ua;this.j=a}
function Ea(a,b){wa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.B=!1,e;var f=e.value}catch(g){return a.i.m=null,xa(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.B=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,xa(a.i,c)}a.i.B=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Zb)throw b.Sb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.N):(a.i.N(b),b=Ga(a));return b};
this.throw=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.N):(xa(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return oa});
n("Reflect.setPrototypeOf",function(a){return a?a:ta?function(b,c){try{return ta(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.B=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=ea.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.J),reject:g(this.o)}};
b.prototype.J=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.s(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.T(h,g):this.s(g)};
b.prototype.o=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.v()};
b.prototype.P=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.F=function(){if(this.B)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.v=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.m();g.Va(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(w,u){return"function"==typeof w?function(A){try{m(w(A))}catch(E){q(E)}}:u}
var m,q,r=new b(function(w,u){m=w;q=u});
this.Va(k(g,m),k(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Va=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Va(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function r(A){return function(E){w[A]=E;u--;0==u&&m(w)}}
var w=[],u=0;do w.push(void 0),u++,d(k.value).Va(r(w.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ia(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return fa(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ia(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.setPrototypeOf",function(a){return a||ta});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||ea});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.ub=void 0;a.getInstance=function(){return a.ub?a.ub:a.ub=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.wq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function rb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var yb;function zb(){if(void 0===yb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}yb=a}else yb=a}return yb}
;function Ab(a,b){this.l=a===Bb&&b||""}
Ab.prototype.j=!0;Ab.prototype.i=function(){return this.l};
function Cb(a){return new Ab(Bb,a)}
var Bb={};Cb("");var Db={};function Eb(a){this.l=Db===Db?a:"";this.j=!0}
Eb.prototype.toString=function(){return this.l.toString()};
Eb.prototype.i=function(){return this.l.toString()};function Fb(a,b){this.l=b===Gb?a:""}
Fb.prototype.toString=function(){return this.l+""};
Fb.prototype.j=!0;Fb.prototype.i=function(){return this.l.toString()};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Ib(a){var b=zb();a=b?b.createScriptURL(a):a;return new Fb(a,Gb)}
;var Lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Mb(a,b){return a<b?-1:a>b?1:0}
;function Nb(a,b){this.l=b===Ob?a:""}
Nb.prototype.toString=function(){return this.l.toString()};
Nb.prototype.j=!0;Nb.prototype.i=function(){return this.l.toString()};
function Pb(a){if(a instanceof Nb&&a.constructor===Nb)return a.l;Oa(a);return"type_error:SafeUrl"}
var Qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ob={},Rb=new Nb("about:invalid#zClosurez",Ob);function Sb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Sb().indexOf(a)}
;function Tb(){return C("Trident")||C("MSIE")}
function Ub(){return C("Firefox")||C("FxiOS")}
function Vb(){return C("Safari")&&!(Wb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Ub()||C("Silk")||C("Android"))}
function Wb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Xb(){return C("Android")&&!(Wb()||Ub()||C("Opera")||C("Silk"))}
function Yb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function Zb(a){var b=Sb();if("Internet Explorer"===a){if(Tb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Yb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Wb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Ub()||"Safari"===a&&Vb()||"Android Browser"===a&&Xb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function $b(a){a=Zb(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var ac={};function bc(a){this.l=ac===ac?a:"";this.j=!0}
bc.prototype.i=function(){return this.l.toString()};
bc.prototype.toString=function(){return this.l.toString()};function ec(a,b){b instanceof Nb||b instanceof Nb||(b="object"==typeof b&&b.j?b.i():String(b),Qb.test(b)||(b="about:invalid#zClosurez"),b=new Nb(b,Ob));a.href=Pb(b)}
function fc(a,b){a.rel="stylesheet";a.href=Hb(b).toString();(b=gc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function hc(){return gc("script[nonce]")}
var ic=/^[\w+/_-]+[=]{0,2}$/;function gc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&ic.test(a)?a:"":""}
;function jc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lc(a){return a?decodeURI(a):a}
function mc(a,b){return b.match(kc)[a]||null}
function nc(a){return lc(mc(3,a))}
function oc(a){var b=a.match(kc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function pc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function qc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)qc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function rc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)qc(a[b],a[b+1],c);return c.join("&")}
function sc(a){var b=[],c;for(c in a)qc(c,a[c],b);return b.join("&")}
function tc(a,b){var c=2==arguments.length?rc(arguments[1],0):rc(arguments,1);return pc(a,c)}
function uc(a,b){b=sc(b);return pc(a,b)}
function vc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return pc(a,b+c)}
function wc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var xc=/#|$/,yc=/[?&]($|#)/;function zc(a,b){for(var c=a.search(xc),d=0,e,f=[];0<=(e=wc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(yc,"$1")}
;var Dc={};function Ec(a){if(a!==Dc)throw Error("requires a valid immutable API token");}
;function Fc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Gc(){var a=Sb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Fc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Sb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Hc(a){Hc[" "](a);return a}
Hc[" "]=function(){};
function Ic(a){var b=Jc;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Kc=C("Opera"),Lc=Tb(),Mc=C("Edge"),Nc=C("Gecko")&&!(-1!=Sb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Oc=-1!=Sb().toLowerCase().indexOf("webkit")&&!C("Edge"),Pc=C("Android");function Qc(){var a=y.document;return a?a.documentMode:void 0}
var Rc;a:{var Sc="",Tc=function(){var a=Sb();if(Nc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Mc)return/Edge\/([\d\.]+)/.exec(a);if(Lc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Oc)return/WebKit\/(\S+)/.exec(a);if(Kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Tc&&(Sc=Tc?Tc[1]:"");if(Lc){var Uc=Qc();if(null!=Uc&&Uc>parseFloat(Sc)){Rc=String(Uc);break a}}Rc=Sc}var Vc=Rc,Jc={};
function Wc(){return Ic(function(){for(var a=0,b=Lb(String(Vc)).split("."),c=Lb("9").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Mb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Mb(0==f[2].length,0==g[2].length)||Mb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return 0<=a})}
var Xc;if(y.document&&Lc){var Yc=Qc();Xc=Yc?Yc:parseInt(Vc,10)||void 0}else Xc=void 0;var Zc=Xc;var $c=Fc()||C("iPod"),ad=C("iPad");Xb();Wb();var bd=Vb()&&!(Fc()||C("iPad")||C("iPod"));var cd={},dd=null;
function ed(a,b){Pa(a);void 0===b&&(b=0);if(!dd){dd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));cd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===dd[h]&&(dd[h]=g)}}}b=cd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var fd="undefined"!==typeof Uint8Array,gd={};var hd;function id(){if(gd!==gd)throw Error("illegal external caller");}
function jd(a){id();this.ja=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
jd.prototype.isEmpty=function(){return null==this.ja};var kd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ld(a,b){Object.isFrozen(a)||(kd?a[kd]|=b:void 0!==a.ta?a.ta|=b:Object.defineProperties(a,{ta:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function md(a){var b;kd?b=a[kd]:b=a.ta;return null==b?0:b}
function nd(a){return Array.isArray(a)?!!(md(a)&1):!1}
function od(a){ld(a,1);return a}
function pd(a){return Array.isArray(a)?!!(md(a)&2):!1}
function qd(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");ld(a,2)}
function rd(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?ld(a,8):Object.isFrozen(a)||(kd?a[kd]&=-9:void 0!==a.ta&&(a.ta&=-9))}
;function sd(a){return pd(a.L)}
function td(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var ud,vd=Object.freeze(od([]));function Cd(a){if(sd(a))throw Error("Cannot mutate an immutable Message");}
var Dd="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Ed(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Fd(a){return a.displayName||a.name||"unknown type name"}
function Gd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Fd(b)+" but got "+(a&&Fd(a.constructor)));return a}
function Hd(a,b){var c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Id(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(fd&&null!=a&&a instanceof Uint8Array)return ed(a);if(a instanceof jd){var b=a.ja;null!=b&&"string"!==typeof b&&(fd&&b instanceof Uint8Array?b=ed(b):(Oa(b),b=null));return null==b?"":a.ja=b}}}return a}
;function Jd(a,b){b=void 0===b?Kd:b;return Ld(a,b)}
function Md(a,b){if(null!=a){if(Array.isArray(a))a=Ld(a,b);else if(td(a)){var c={},d;for(d in a)c[d]=Md(a[d],b);a=c}else a=b(a);return a}}
function Ld(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Md(c[d],b);nd(a)&&od(c);return c}
function Nd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Id(a);return Array.isArray(a)?Jd(a,Nd):a}
function Kd(a){return fd&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Od(a){return a.j||(a.j=a.L[a.l+a.ra]={})}
function Pd(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.L[b+a.ra]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Cd(a);b<a.l&&!d?(a.L[b+a.ra]=c,void 0!==a.j&&b in a.j&&delete a.j[b]):Od(a)[b]=c;return a}
function Qd(a,b,c,d){c=void 0===c?!0:c;var e=Pd(a,b,d);Array.isArray(e)||(e=vd);if(sd(a))c&&(qd(e),Object.freeze(e));else if(e===vd||pd(e))e=od(e.slice()),D(a,b,e,d);return e}
function Rd(a,b,c){a=Pd(a,b);return null==a?c:a}
function Sd(a,b,c){null==c?c=vd:od(c);return D(a,b,c)}
function Td(a,b,c,d){Cd(a);(c=Ud(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),D(a,c));return D(a,b,d)}
function Ud(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Pd(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function Vd(a,b,c,d){d=void 0===d?!1:d;var e=d;a.i||(a.i={});var f=a.i[c];if(f)b=f;else if(b=Hd(Pd(a,c,e),b))a.i[c]=b,sd(a)&&qd(b.L);if(null==b)return b;sd(b)&&!sd(a)&&(b=b.Db(),D(a,c,b.L,d),a.i[c]=b);return b}
function Wd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=sd(a),g=a.i[c];d=Qd(a,c,!0,d);var h=f||pd(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var m=d[k];f=f||pd(m);m=Hd(m,b);void 0!==m&&(g.push(m),h&&qd(m.L))}a.i[c]=g;rd(d,!f)}b=h||e;e=pd(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),qd(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function Xd(a,b,c,d){d=void 0===d?!1:d;var e=sd(a);b=Wd(a,b,c,d,e);a=Qd(a,c,d);if(!(c=e)&&(c=a)){if(!Array.isArray(a))throw Error("cannot check mutability state of non-array");c=!(md(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&sd(d)&&!e&&(b[c]=b[c].Db(),a[c]=b[c].L);rd(a,!0)}return b}
function G(a,b,c,d){Cd(a);a.i||(a.i={});null==d?b=d=void 0:b=Gd(d,b).L;a.i[c]=d;return D(a,c,b)}
function Yd(a,b,c,d,e){Cd(a);a.i||(a.i={});null!=e?b=Gd(e,b).L:b=e=void 0;a.i[c]=e;Td(a,c,d,b)}
function Zd(a,b,c,d){Cd(a);if(null!=d){var e=od([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Gd(d[g],b).L,f=f||pd(e[g]);a.i||(a.i={});a.i[c]=d;rd(e,!f)}else a.i&&(a.i[c]=void 0),e=vd;return D(a,c,e)}
function $d(a,b,c,d){Cd(a);var e=Wd(a,c,b,void 0,!1);c=null!=d?Gd(d,c):new c;a=Qd(a,b);e.push(c);a.push(c.L);Ec(Dc);sd(c)&&rd(a,!1)}
;function ae(a,b,c){a||(a=be);be=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.ra=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.L=a;a:{d=this.L.length;a=d-1;if(d&&(d=this.L[a],td(d))){this.l=a-this.ra;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.ra),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.ra,(d=this.L[a])?Array.isArray(d)&&od(d):this.L[a]=vd;else{d=Od(this);var e=d[a];e?Array.isArray(e)&&od(e):d[a]=vd}}
ae.prototype.toJSON=function(){var a=this.L;return ud?a:Jd(a,Nd)};
function ce(a){ud=!0;try{return JSON.stringify(a.toJSON(),de)}finally{ud=!1}}
ae.prototype.clone=function(){var a=Jd(this.L);be=a;a=new this.constructor(a);be=null;ee(a,this);return a};
ae.prototype.isMutable=function(a){Ec(a);return!sd(this)};
ae.prototype.toString=function(){return this.L.toString()};
function de(a,b){return Id(b)}
function ee(a,b){b.Ia&&(a.Ia=b.Ia.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Xd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ee(f[g],e[g])}else(f=Vd(a,e.constructor,g,f))&&ee(f,e)}}}}
var be;function fe(){ae.apply(this,arguments)}
t(fe,ae);fe.prototype.Db=function(){return this};
if(Dd){var ge={};Object.defineProperties(fe,(ge[Symbol.hasInstance]=Ed(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),ge))};function he(a){var b=this.i,c=this.j;return this.isRepeated?Xd(a,b,c,!0):Vd(a,b,c,!0)}
;function ie(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.mb?od(a.slice()):a,Zd(b,0<e.length?e[0].constructor:void 0,c,e)):G(b,a.constructor,c,a):(fd&&d instanceof Uint8Array?e=d.length?new jd(new Uint8Array(d)):hd||(hd=new jd(null)):(Array.isArray(d)&&(e?qd(d):nd(d)&&f.mb&&(d=d.slice())),e=d),D(b,c,e))}
;function I(){fe.apply(this,arguments)}
t(I,fe);I.prototype.Db=function(){if(sd(this)){var a={mb:!0};var b=sd(this);if(b&&!a.mb)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.Ia&&(c.Ia=this.Ia.slice());for(var d=this.L,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&td(f))for(var g in f){var h=+g;Number.isNaN(h)?Od(c)[g]=f[g]:ie(this,c,h,f[g],b,a)}else ie(this,c,e-this.ra,f,b,a)}a=c}else a=this;return a};
if(Dd){var je={};Object.defineProperties(I,(je[Symbol.hasInstance]=Ed(Object[Symbol.hasInstance]),je))};function ke(a){this.Mb=a}
;function le(a,b,c){this.j=a;this.m=b;this.i=c||[];this.ya=new Map}
l=le.prototype;l.yc=function(a){var b=Ja.apply(1,arguments),c=this.pb(b);c?c.push(new ke(a)):this.mc(a,b)};
l.mc=function(a){this.ya.set(this.Tb(Ja.apply(1,arguments)),[new ke(a)])};
l.pb=function(){var a=this.Tb(Ja.apply(0,arguments));return this.ya.has(a)?this.ya.get(a):void 0};
l.Lc=function(){var a=this.pb(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.ya.clear()};
l.Tb=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function me(a,b){le.call(this,a,3,b)}
t(me,le);me.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Lc(b);d&&(c=d.Mb);this.mc(c+a,b)};function ne(a,b){le.call(this,a,2,b)}
t(ne,le);ne.prototype.l=function(a){this.yc(a,Ja.apply(1,arguments))};function oe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function pe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?pe.apply(null,d):oe(d)}}
;function J(){this.N=this.N;this.B=this.B}
J.prototype.N=!1;J.prototype.i=function(){return this.N};
J.prototype.dispose=function(){this.N||(this.N=!0,this.C())};
function qe(a,b){re(a,Ya(oe,b))}
function re(a,b){a.N?b():(a.B||(a.B=[]),a.B.push(b))}
J.prototype.C=function(){if(this.B)for(;this.B.length;)this.B.shift()()};function se(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
se.prototype.stopPropagation=function(){this.l=!0};
se.prototype.preventDefault=function(){this.defaultPrevented=!0};function te(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ue(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ve[c])c=ve[c];else{c=String(c);if(!ve[c]){var f=/function\s+([^\(]+)/m.exec(c);ve[c]=f?f[1]:"[Anonymous]"}c=ve[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ue(a,b){b||(b={});b[we(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[we(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ue(a,b));return c}
function we(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ve={};var xe=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function ye(a,b){se.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(ye,se);var ze={2:"touch",3:"pen",4:"mouse"};
ye.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Nc){a:{try{Hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ze[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ye.Y.preventDefault.call(this)};
ye.prototype.stopPropagation=function(){ye.Y.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ye.prototype.preventDefault=function(){ye.Y.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ae="closure_listenable_"+(1E6*Math.random()|0);var Be=0;function Ce(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Za=e;this.key=++Be;this.Ka=this.Ua=!1}
function De(a){a.Ka=!0;a.listener=null;a.proxy=null;a.src=null;a.Za=null}
;function Ee(a){this.src=a;this.listeners={};this.i=0}
Ee.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Ke(a,b,d,e);-1<g?(b=a[g],c||(b.Ua=!1)):(b=new Ce(b,this.src,f,!!d,e),b.Ua=c,a.push(b));return b};
Ee.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ke(e,b,c,d);return-1<b?(De(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Le(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(De(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Ke(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ka&&f.listener==b&&f.capture==!!c&&f.Za==d)return e}return-1}
;var Me="closure_lm_"+(1E6*Math.random()|0),Ne={},Oe=0;function Pe(a,b,c,d,e){if(d&&d.once)Qe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Pe(a,b[f],c,d,e);else c=Re(c),a&&a[Ae]?a.aa(b,c,Qa(d)?!!d.capture:!!d,e):Se(a,b,c,!1,d,e)}
function Se(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Te(a);h||(a[Me]=h=new Ee(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ue();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)xe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ve(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Oe++}}
function Ue(){function a(c){return b.call(a.src,a.listener,c)}
var b=We;return a}
function Qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else c=Re(c),a&&a[Ae]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Se(a,b,c,!0,d,e)}
function Xe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xe(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Re(c),a&&a[Ae])?a.m.remove(String(b),c,d,e):a&&(a=Te(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ke(b,c,d,e)),(c=-1<a?b[a]:null)&&Ye(c))}
function Ye(a){if("number"!==typeof a&&a&&!a.Ka){var b=a.src;if(b&&b[Ae])Le(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ve(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Oe--;(c=Te(b))?(Le(c,a),0==c.i&&(c.src=null,b[Me]=null)):De(a)}}}
function Ve(a){return a in Ne?Ne[a]:Ne[a]="on"+a}
function We(a,b){if(a.Ka)a=!0;else{b=new ye(b,this);var c=a.listener,d=a.Za||a.src;a.Ua&&Ye(a);a=c.call(d,b)}return a}
function Te(a){a=a[Me];return a instanceof Ee?a:null}
var Ze="__closure_events_fn_"+(1E9*Math.random()>>>0);function Re(a){if("function"===typeof a)return a;a[Ze]||(a[Ze]=function(b){return a.handleEvent(b)});
return a[Ze]}
;function $e(){J.call(this);this.m=new Ee(this);this.vc=this;this.ka=null}
Za($e,J);$e.prototype[Ae]=!0;$e.prototype.addEventListener=function(a,b,c,d){Pe(this,a,b,c,d)};
$e.prototype.removeEventListener=function(a,b,c,d){Xe(this,a,b,c,d)};
function af(a,b){var c=a.ka;if(c){var d=[];for(var e=1;c;c=c.ka)d.push(c),++e}a=a.vc;c=b.type||b;"string"===typeof b?b=new se(b,a):b instanceof se?b.target=b.target||a:(e=b,b=new se(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=bf(g,c,!0,b)&&e}b.l||(g=b.i=a,e=bf(g,c,!0,b)&&e,b.l||(e=bf(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=bf(g,c,!1,b)&&e}
$e.prototype.C=function(){$e.Y.C.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,De(d[e]);delete a.listeners[c];a.i--}}this.ka=null};
$e.prototype.aa=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function bf(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ka&&g.capture==c){var h=g.listener,k=g.Za||g.src;g.Ua&&Le(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function cf(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
cf.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function df(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function ef(a,b){return a+Math.random()*(b-a)}
;function ff(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=ff.prototype;l.clone=function(){return new ff(this.x,this.y)};
l.equals=function(a){return a instanceof ff&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function gf(a,b){this.width=a;this.height=b}
l=gf.prototype;l.clone=function(){return new gf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function hf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function jf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function kf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var lf;function mf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=jf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Lb;c.Lb=null;e()}};
return function(e){d.next={Lb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function nf(a){y.setTimeout(function(){throw a;},0)}
;function of(){this.j=this.i=null}
of.prototype.add=function(a,b){var c=pf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
of.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var pf=new cf(function(){return new qf},function(a){return a.reset()});
function qf(){this.next=this.scope=this.i=null}
qf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
qf.prototype.reset=function(){this.next=this.scope=this.i=null};var rf,sf=!1,tf=new of;function uf(a,b){rf||vf();sf||(rf(),sf=!0);tf.add(a,b)}
function vf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);rf=function(){a.then(wf)}}else rf=function(){var b=wf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(lf||(lf=mf()),lf(b)):y.setImmediate(b)}}
function wf(){for(var a;a=tf.remove();){try{a.i.call(a.scope)}catch(b){nf(b)}df(pf,a)}sf=!1}
;function xf(a){this.i=0;this.B=void 0;this.m=this.j=this.l=null;this.o=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){yf(b,2,c)},function(c){yf(b,3,c)})}catch(c){yf(this,3,c)}}
function zf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
zf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Af=new cf(function(){return new zf},function(a){a.reset()});
function Bf(a,b,c){var d=Af.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Cf(a){return new xf(function(b,c){c(a)})}
xf.prototype.then=function(a,b,c){return Df(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
xf.prototype.$goog_Thenable=!0;l=xf.prototype;l.ib=function(a,b){return Df(this,null,a,b)};
l.catch=xf.prototype.ib;l.cancel=function(a){if(0==this.i){var b=new Ef(a);uf(function(){Ff(this,b)},this)}};
function Ff(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Ff(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Gf(c),Hf(c,e,3,b)))}a.l=null}else yf(a,3,b)}
function If(a,b){a.j||2!=a.i&&3!=a.i||Jf(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Df(a,b,c,d){var e=Bf(null,null,null);e.i=new xf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ef?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;If(a,e);return e.i}
l.td=function(a){this.i=0;yf(this,2,a)};
l.ud=function(a){this.i=0;yf(this,3,a)};
function yf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.td,f=a.ud;if(d instanceof xf){If(d,Bf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Kf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.B=c,a.i=b,a.l=null,Jf(a),3!=b||c instanceof Ef||Lf(a,c))}}
function Kf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Jf(a){a.s||(a.s=!0,uf(a.Jc,a))}
function Gf(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
l.Jc=function(){for(var a;a=Gf(this);)Hf(this,a,this.i,this.B);this.s=!1};
function Hf(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,Mf(b,c,d);else try{b.l?b.j.call(b.context):Mf(b,c,d)}catch(e){Nf.call(null,e)}df(Af,b)}
function Mf(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Lf(a,b){a.o=!0;uf(function(){a.o&&Nf.call(null,b)})}
var Nf=nf;function Ef(a){ab.call(this,a)}
Za(Ef,ab);Ef.prototype.name="cancel";function Of(a,b){$e.call(this);this.l=a||1;this.j=b||y;this.o=Wa(this.rd,this);this.s=Date.now()}
Za(Of,$e);l=Of.prototype;l.enabled=!1;l.ca=null;function Pf(a,b){a.l=b;a.ca&&a.enabled?(a.stop(),a.start()):a.ca&&a.stop()}
l.rd=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.ca=this.j.setTimeout(this.o,this.l-a):(this.ca&&(this.j.clearTimeout(this.ca),this.ca=null),af(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ca||(this.ca=this.j.setTimeout(this.o,this.l),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ca&&(this.j.clearTimeout(this.ca),this.ca=null)};
l.C=function(){Of.Y.C.call(this);this.stop();delete this.j};
function Qf(a,b,c){if("function"===typeof a)c&&(a=Wa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Wa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Rf(a){this.B=a;this.i=new Map;this.s=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.j=new Of(this.flushInterval);this.j.aa("tick",this.kb,!1,this);this.o=!1}
l=Rf.prototype;l.kc=function(a){this.o=a;this.m=1};
function Sf(a){a.j.enabled||a.j.start();a.l++;a.l>=a.m&&a.kb()}
l.kb=function(){var a=this.i.values();a=[].concat(ha(a)).filter(function(b){return b.ya.size});
a.length&&this.B.flush(a,this.o);Tf(a);this.l=0;this.j.enabled&&this.j.stop()};
l.zc=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new me(a,b))};
l.Jb=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new ne(a,b))};
function Uf(a,b){return a.s.has(b)?void 0:a.i.get(b)}
l.Eb=function(a){this.tc.apply(this,[a,1].concat(ha(Ja.apply(1,arguments))))};
l.tc=function(a,b){var c=Ja.apply(2,arguments),d=Uf(this,a);d&&d instanceof me&&(d.l(b,c),Sf(this))};
l.jb=function(a,b){var c=Ja.apply(2,arguments),d=Uf(this,a);d&&d instanceof ne&&(d.l(b,c),Sf(this))};
function Tf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Vf(a){this.i=a;this.i.Jb("/client_streamz/bg/fil",{ob:3,nb:"rk"})}
function Wf(a){this.i=a;this.i.zc("/client_streamz/bg/fsc",{ob:3,nb:"rk"})}
function Xf(a){this.i=a;this.i.Jb("/client_streamz/bg/fsl",{ob:3,nb:"rk"})}
;function Yf(a){I.call(this,a,-1,Zf)}
t(Yf,I);function $f(a){I.call(this,a,-1,ag)}
t($f,I);function bg(a){I.call(this,a)}
t(bg,I);function cg(a){I.call(this,a)}
t(cg,I);var Zf=[3,6,4],ag=[1],dg=[1,2,3],eg=[1,2,3];function fg(a){I.call(this,a,-1,gg)}
t(fg,I);var gg=[1];function hg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ig(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var w=g,u=0;64>u;u+=4)w[u/4]=r[u]<<24|r[u+1]<<16|r[u+2]<<8|r[u+3];for(u=16;80>u;u++)r=w[u-3]^w[u-8]^w[u-14]^w[u-16],w[u]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],E=e[2],F=e[3],N=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var O=F^A&(E^F);var R=1518500249}else O=A^E^F,R=1859775393;else 60>u?(O=A&E|F&(A|E),R=2400959708):(O=A^E^F,R=3395469782);O=((r<<5|r>>>27)&4294967295)+O+N+R+w[u]&4294967295;N=F;F=E;E=(A<<30|A>>>2)&4294967295;A=r;r=O}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+N&4294967295}
function c(r,w){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var u=[],A=0,E=r.length;A<E;++A)u.push(r.charCodeAt(A));r=u}w||(w=r.length);u=0;if(0==m)for(;u+64<w;)b(r.slice(u,u+64)),u+=64,q+=64;for(;u<w;)if(f[m++]=r[u++],q++,64==m)for(m=0,b(f);u+64<w;)b(r.slice(u,u+64)),u+=64,q+=64}
function d(){var r=[],w=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=w&255,w>>>=8;b(f);for(u=w=0;5>u;u++)for(var A=24;0<=A;A-=8)r[w++]=e[u]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Fc:function(){for(var r=d(),w="",u=0;u<r.length;u++)w+="0123456789ABCDEF".charAt(Math.floor(r[u]/16))+"0123456789ABCDEF".charAt(r[u]%16);return w}}}
;function jg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,kg(hg(d),a,c||null)].join(" "):null}
function kg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),lg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=lg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function lg(a){var b=ig();b.update(a);return b.Fc().toLowerCase()}
;var mg={};function ng(a){this.i=a||{cookie:""}}
l=ng.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{bb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Lq;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.bb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Lb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{bb:0,path:b,domain:c});return d};
l.sb=function(){return og(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=og(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function og(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var pg=new ng("undefined"==typeof document?null:document);function qg(a){return!!mg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function rg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;qg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new ng(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");qg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function sg(a,b,c,d){(a=y[a])||(a=(new ng(document)).get(b));return a?jg(a,c,d):null}
function tg(a,b){b=void 0===b?!1:b;var c=hg(String(y.location.href)),d=[];if(rg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new ng(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?jg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&qg(b)&&((b=sg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=sg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ug(a){I.call(this,a,-1,vg)}
t(ug,I);var vg=[2];function wg(a){this.i=this.j=this.l=a}
wg.prototype.reset=function(){this.i=this.j=this.l};
wg.prototype.getValue=function(){return this.j};function xg(a){var b=[];yg(new zg,a,b);return b.join("")}
function zg(){}
function yg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),yg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ag(d,c),c.push(":"),yg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ag(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Bg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Cg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ag(a,b){b.push('"',a.replace(Cg,function(c){var d=Bg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Bg[c]=d);return d}),'"')}
;function Dg(){}
Dg.prototype.i=null;Dg.prototype.getOptions=function(){var a;(a=this.i)||(a={},Eg(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var Fg;function Gg(){}
Za(Gg,Dg);function Hg(a){return(a=Eg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Eg(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
Fg=new Gg;function Ig(a){$e.call(this);this.headers=new Map;this.J=a||null;this.j=!1;this.I=this.A=null;this.o=this.T="";this.l=this.R=this.v=this.P=!1;this.s=0;this.F=null;this.da="";this.W=this.X=!1}
Za(Ig,$e);var Jg=/^https?$/i,Kg=["POST","PUT"],Lg=[];function Mg(a,b,c,d,e,f,g){var h=new Ig;Lg.push(h);b&&h.aa("complete",b);h.m.add("ready",h.Dc,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.X=g);h.send(a,c,d,e)}
l=Ig.prototype;l.Dc=function(){this.dispose();kb(Lg,this)};
l.send=function(a,b,c,d){if(this.A)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.o="";this.P=!1;this.j=!0;this.A=this.J?Hg(this.J):Hg(Fg);this.I=this.J?this.J.getOptions():Fg.getOptions();this.A.onreadystatechange=Wa(this.cc,this);try{this.getStatus(),this.R=!0,this.A.open(b,String(a),!0),this.R=!1}catch(g){this.getStatus();Ng(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=eb(Kg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.A.setRequestHeader(d,c);this.da&&(this.A.responseType=this.da);"withCredentials"in this.A&&this.A.withCredentials!==this.X&&(this.A.withCredentials=this.X);try{Og(this),0<this.s&&(this.W=Pg(this.A),this.getStatus(),this.W?(this.A.timeout=this.s,this.A.ontimeout=Wa(this.oc,this)):
this.F=Qf(this.oc,this.s,this)),this.getStatus(),this.v=!0,this.A.send(a),this.v=!1}catch(g){this.getStatus(),Ng(this,g)}};
function Pg(a){return Lc&&Wc()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.oc=function(){"undefined"!=typeof Ma&&this.A&&(this.o="Timed out after "+this.s+"ms, aborting",this.getStatus(),af(this,"timeout"),this.abort(8))};
function Ng(a,b){a.j=!1;a.A&&(a.l=!0,a.A.abort(),a.l=!1);a.o=b;Qg(a);Rg(a)}
function Qg(a){a.P||(a.P=!0,af(a,"complete"),af(a,"error"))}
l.abort=function(){this.A&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.A.abort(),this.l=!1,af(this,"complete"),af(this,"abort"),Rg(this))};
l.C=function(){this.A&&(this.j&&(this.j=!1,this.l=!0,this.A.abort(),this.l=!1),Rg(this,!0));Ig.Y.C.call(this)};
l.cc=function(){this.i()||(this.R||this.v||this.l?Sg(this):this.Uc())};
l.Uc=function(){Sg(this)};
function Sg(a){if(a.j&&"undefined"!=typeof Ma)if(a.I[1]&&4==Vg(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Vg(a))Qf(a.cc,0,a);else if(af(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Wg(a))af(a,"complete"),af(a,"success");else{try{var b=2<Vg(a)?a.A.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Qg(a)}}finally{Rg(a)}}}
function Rg(a,b){if(a.A){Og(a);var c=a.A,d=a.I[0]?function(){}:null;
a.A=null;a.I=null;b||af(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Og(a){a.A&&a.W&&(a.A.ontimeout=null);a.F&&(y.clearTimeout(a.F),a.F=null)}
l.isActive=function(){return!!this.A};
l.isComplete=function(){return 4==Vg(this)};
function Wg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=mc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Jg.test(a?a.toLowerCase():"");c=b}return c}
function Vg(a){return a.A?a.A.readyState:0}
l.getStatus=function(){try{return 2<Vg(this)?this.A.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.o?this.o:String(this.o)};function Xg(a){I.call(this,a)}
t(Xg,I);function Yg(a){I.call(this,a,-1,Zg)}
t(Yg,I);var Zg=[1];var $g=["platform","platformVersion","architecture","model","uaFullVersion"];new Yg;function ah(a){I.call(this,a)}
t(ah,I);function bh(a){I.call(this,a,31,ch)}
t(bh,I);var ch=[3,20,27];function dh(a){I.call(this,a,17,eh)}
t(dh,I);var eh=[3,5];function fh(a){I.call(this,a,6,gh)}
t(fh,I);var gh=[5];function hh(a){I.call(this,a)}
t(hh,I);var ih;ih=new function(a,b,c){this.j=a;this.fieldName=b;this.i=c;this.isRepeated=0;this.l=he}(175237375,{Cq:0},hh);function jh(a,b,c,d,e,f,g,h,k,m,q){$e.call(this);var r=this;this.P="";this.l=[];this.Hb="";this.Ib=this.qa=-1;this.Ra=!1;this.I=this.o=null;this.F=0;this.wc=1;this.timeoutMillis=0;this.da=!1;$e.call(this);this.Gb=b||function(){};
this.v=new kh(a,f);this.uc=d;this.Qa=q;this.xc=Ya(ef,0,1);this.T=e||null;this.J=c||null;this.W=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Fa=f||!1;!this.Fa&&(65<=$b("Chromium")||45<=$b("Firefox")||12<=$b("Safari")||(Fc()||C("iPad")||C("iPod"))&&Gc());a=D(new ah,1,1);lh(this.v,a);this.s=new wg(1E4);this.j=new Of(this.s.getValue());qe(this,this.j);m=mh(this,m);Pe(this.j,"tick",m,!1,this);this.R=new Of(6E5);qe(this,this.R);Pe(this.R,"tick",m,!1,this);this.W||this.R.start();
this.Fa||(Pe(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.X()}),Pe(document,"pagehide",this.X,!1,this))}
t(jh,$e);function mh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
jh.prototype.C=function(){this.X();$e.prototype.C.call(this)};
function nh(a){a.T||(a.T=.01>a.xc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function oh(a,b){a.s=new wg(1>b?1:b);Pf(a.j,a.s.getValue())}
jh.prototype.log=function(a){a=a.clone();var b=this.wc++;D(a,21,b);this.P&&D(a,26,this.P);if(!Pd(a,1)){b=a;var c=Date.now().toString();D(b,1,c)}null!=Pd(a,15)||D(a,15,60*(new Date).getTimezoneOffset());this.o&&(b=this.o.clone(),G(a,ug,16,b));for(;1E3<=this.l.length;)this.l.shift(),++this.F;this.l.push(a);af(this,new ph(a));this.W||this.j.enabled||this.j.start()};
jh.prototype.flush=function(a,b){var c=this;if(0===this.l.length)a&&a();else if(this.da)qh(this);else{var d=Date.now();if(this.Ib>d&&this.qa<d)b&&b("throttled");else{var e=rh(this.v,this.l,this.F);d={};var f=this.Gb();f&&(d.Authorization=f);var g=nh(this);this.J&&(d["X-Goog-AuthUser"]=this.J,g=vc(g,"authuser",this.J));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=vc(g,"pageId",this.pageId));if(f&&this.Hb===f)b&&b("stale-auth-token");else{this.l=[];this.j.enabled&&this.j.stop();this.F=0;var h=ce(e),
k;this.I&&this.I.isSupported(h.length)&&(k=this.I.compress(h));var m={url:g,body:h,Bc:1,Ab:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(u){c.s.reset();Pf(c.j,c.s.getValue());if(u){var A=null;try{var E=JSON.parse(u.replace(")]}'\n",""));A=new fh(E)}catch(F){}A&&(u=Number(Rd(A,1,"-1")),0<u&&(c.qa=Date.now(),c.Ib=c.qa+u),A=ih.l(A))&&(A=Rd(A,1,-1),-1!=A&&(c.Ra||oh(c,A)))}a&&a()},r=function(u,A){var E=Xd(e,bh,3),F=c.s;
F.i=Math.min(3E5,2*F.i);F.j=Math.min(3E5,F.i+Math.round(.2*(Math.random()-.5)*F.i));Pf(c.j,c.s.getValue());401===u&&f&&(c.Hb=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.l=E.concat(c.l),c.W||c.j.enabled||c.j.start());b&&b("net-send-failed",u)},w=function(){c.Qa?c.Qa.send(m,q,r):c.uc(m,q,r)};
k?k.then(function(u){m.Ab["Content-Encoding"]="gzip";m.Ab["Content-Type"]="application/binary";m.body=u;m.Bc=2;w()},function(){w()}):w()}}}};
jh.prototype.X=function(){this.flush()};
function qh(a){sh(a,function(b,c){b=vc(b,"format","json");b=window.navigator.sendBeacon(b,ce(c));a.da&&!b&&(a.da=!1);return b})}
function sh(a,b){if(0!==a.l.length){var c=zc(nh(a),"format");c=tc(c,"auth",a.Gb(),"authuser",a.J||"0");for(var d=0;10>d&&a.l.length;++d){var e=a.l.slice(0,32),f=rh(a.v,e,a.F);if(!b(c,f))break;a.F=0;a.l=a.l.slice(e.length)}a.j.enabled&&a.j.stop()}}
function ph(){se.call(this,"event-logged",void 0)}
t(ph,se);function kh(a,b){this.j=b=void 0===b?!1:b;this.uach=this.locale=null;this.i=new dh;D(this.i,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));lh(this,new ah)}
function lh(a,b){G(a.i,ah,1,b);Pd(b,1)||D(b,1,1);a.j||(b=th(a),Pd(b,5)||D(b,5,a.locale));a.uach&&(b=th(a),Vd(b,Yg,9)||G(b,Yg,9,a.uach))}
function uh(a,b){var c=void 0===c?$g:c;b(window,c).then(function(d){a.uach=d;d=th(a);G(d,Yg,9,a.uach);return!0}).catch(function(){return!1})}
function th(a){a=Vd(a.i,ah,1);var b=Vd(a,Xg,11);b||(b=new Xg,G(a,Xg,11,b));return b}
function rh(a,b,c){c=void 0===c?0:c;a=a.i.clone();var d=Date.now().toString();a=D(a,4,d);b=Zd(a,bh,3,b);c&&D(b,14,c);return b}
;function vh(a,b,c){Mg(a.url,function(d){d=d.target;if(Wg(d)){try{var e=d.A?d.A.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Ab,a.timeoutMillis,a.withCredentials)}
;function wh(){this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.s=vh;this.i=""}
;function xh(){var a=void 0===a?"":a;var b=void 0===b?!1:b;var c=void 0===c?"":c;var d=new wh;d.i="";""!=a&&(d.l=a);b&&(d.m=!0);c&&(d.j=c);a=new jh(1828,d.I?d.I:tg,"0",d.s,d.l,d.m,!1,d.R,void 0,void 0,d.B?d.B:void 0);d.v&&lh(a.v,d.v);d.j&&(b=d.j,c=th(a.v),D(c,7,b));d.o&&(a.I=d.o);d.i&&(a.P=d.i);d.N&&((b=d.N)?(a.o||(a.o=new ug),b=ce(b),D(a.o,4,b)):a.o&&D(a.o,4,void 0,!1));d.J&&(b=d.J,a.o||(a.o=new ug),Sd(a.o,2,b));d.F&&(b=d.F,a.Ra=!0,oh(a,b));d.P&&uh(a.v,d.P);this.i=a}
xh.prototype.flush=function(a){var b=a||[];if(b.length){a=new fg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new Yf;g=D(g,1,f.j);for(var h=f,k=[],m=0;m<h.i.length;m++)k.push(h.i[m].nb);g=Sd(g,3,k);h=[];k=[];m=p(f.ya.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var r=f.m;for(var w=f.pb(q)||[],u=[],A=0;A<w.length;A++){var E=w[A];E=E&&E.Mb;var F=new cg;switch(r){case 3:Td(F,1,eg,Number(E));break;case 2:Td(F,2,eg,Number(E))}u.push(F)}r=
u;for(w=0;w<r.length;w++){u=r[w];A=new $f;u=G(A,cg,2,u);A=q;E=[];F=f;for(var N=[],O=0;O<F.i.length;O++)N.push(F.i[O].ob);F=N;for(N=0;N<F.length;N++){O=F[N];var R=A[N],U=new bg;switch(O){case 3:Td(U,1,dg,String(R));break;case 2:Td(U,2,dg,Number(R));break;case 1:Td(U,3,dg,"true"==R)}E.push(U)}Zd(u,bg,1,E);h.push(u)}}Zd(g,$f,4,h);c.push(g);e.clear()}Zd(a,Yf,1,c);b=this.i;a instanceof bh?b.log(a):(c=new bh,a=ce(a),a=D(c,8,a),b.log(a));this.i.flush()}};function yh(){this.o=zh();this.transport=new xh;this.i=new Rf(this.transport);this.m=new Vf(this.i);this.j=new Wf(this.i);this.l=new Xf(this.i);this.Ca=window.document.location.hostname}
function zh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Ah(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Bh(a){var b=this;this.Xa=!1;if(a.Jq){var c;this.sa=null!=(c=a.sa)?c:new yh}c=a.program;a=a.globalName;var d=new Ah;this.j=d.promise;this.pd=p((0,y[a].a)(c,function(e,f){Promise.resolve().then(function(){var g;if(null!=(g=b.sa)){var h=zh()-g.o;g.m.i.jb("/client_streamz/bg/fil",h,g.Ca)}d.resolve({Ac:e,md:f})})},!0)).next().value;
this.ld=d.promise.then(function(){})}
Bh.prototype.snapshot=function(a){var b=this;if(this.Xa)throw Error("Already disposed");var c=zh(),d;null!=(d=this.sa)&&d.j.i.Eb("/client_streamz/bg/fsc",d.Ca);return this.j.then(function(e){var f=e.Ac;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.sa)){var m=zh()-c;k.l.i.jb("/client_streamz/bg/fsl",m,k.Ca)}g(h)},[a.Ob,
a.nd])})})};
Bh.prototype.dispose=function(){var a;null!=(a=this.sa)&&a.i.kb();this.Xa=!0;this.j.then(function(b){(b=b.md)&&b()})};
Bh.prototype.i=function(){return this.Xa};var Ch=window;Cb("csi.gstatic.com");Cb("googleads.g.doubleclick.net");Cb("partner.googleadservices.com");Cb("pubads.g.doubleclick.net");Cb("securepubads.g.doubleclick.net");Cb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Dh;try{new URL("s://g"),Dh=!0}catch(a){Dh=!1}var Eh=Dh;function Fh(a,b){a.src=Hb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Gh(a){var b=Hh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ih(){var a=[];Gh(function(b){a.push(b)});
return a}
var Hh={Hd:"allow-forms",Id:"allow-modals",Jd:"allow-orientation-lock",Kd:"allow-pointer-lock",Ld:"allow-popups",Md:"allow-popups-to-escape-sandbox",Nd:"allow-presentation",Od:"allow-same-origin",Pd:"allow-scripts",Qd:"allow-top-navigation",Rd:"allow-top-navigation-by-user-activation"},Jh=db(function(){return Ih()});
function Kh(){var a=Lh(),b={};fb(Jh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Lh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Mh(a){this.isValid=a}
function Nh(a){return new Mh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Oh=[Nh("data"),Nh("http"),Nh("https"),Nh("mailto"),Nh("ftp"),new Mh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Ph(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Qh=(new Date).getTime();var Rh="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ha(Rh);function Sh(a){$e.call(this);var b=this;this.v=this.l=0;this.Z=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
fa:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return v(e,Th(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.v||Uh(this)}
t(Sh,$e);function Vh(){var a=Wh;Sh.i||(Sh.i=new Sh(a));return Sh.i}
Sh.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Z.fa(this.v);delete Sh.i};
Sh.prototype.K=function(){return this.j};
function Uh(a){a.v=a.Z.S(function(){var b;return x(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,Th(a),3):v(c,Th(a),3);Uh(a);c.i=0})},3E4)}
function Th(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.l=a.Z.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.s=void 0;a.l&&(a.Z.fa(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?af(a,"networkstatus-online"):af(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.u(3)}})})}
;var Xh={Vh:"EMBEDDED_PLAYER_MODE_UNKNOWN",Sh:"EMBEDDED_PLAYER_MODE_DEFAULT",Uh:"EMBEDDED_PLAYER_MODE_PFP",Th:"EMBEDDED_PLAYER_MODE_PFL"},Yh={bq:"WEB_DISPLAY_MODE_UNKNOWN",Xp:"WEB_DISPLAY_MODE_BROWSER",Zp:"WEB_DISPLAY_MODE_MINIMAL_UI",aq:"WEB_DISPLAY_MODE_STANDALONE",Yp:"WEB_DISPLAY_MODE_FULLSCREEN"};function Zh(){this.data_=[];this.i=-1}
Zh.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Zh.prototype.get=function(a){return!!this.data_[a]};
function $h(a){-1===a.i&&(a.i=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function ai(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
ai.prototype[Symbol.iterator]=function(){return this};
ai.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function bi(a,b){return new ai(a,b)}
;function ci(){this.blockSize=-1}
;function di(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Za(di,ci);di.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function ei(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
di.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)ei(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ei(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ei(this,e);f=0;break}}this.j=f;this.m+=b}};
di.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;ei(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function fi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function gi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function hi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:fi(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function ii(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):hi(a,"inverted-hdpi")&&gi(a,Array.prototype.filter.call(a.classList?a.classList:fi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ji(){}
ji.prototype.next=function(){return ki};
var ki={done:!0,value:void 0};function li(a){return{value:a,done:!1}}
ji.prototype.ea=function(){return this};function mi(a){if(a instanceof ni||a instanceof oi||a instanceof pi)return a;if("function"==typeof a.next)return new ni(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ni(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ea)return new ni(function(){return a.ea()});
throw Error("Not an iterator or iterable.");}
function ni(a){this.j=a}
ni.prototype.ea=function(){return new oi(this.j())};
ni.prototype[Symbol.iterator]=function(){return new pi(this.j())};
ni.prototype.i=function(){return new pi(this.j())};
function oi(a){this.j=a}
t(oi,ji);oi.prototype.next=function(){return this.j.next()};
oi.prototype[Symbol.iterator]=function(){return new pi(this.j)};
oi.prototype.i=function(){return new pi(this.j)};
function pi(a){ni.call(this,function(){return a});
this.l=a}
t(pi,ni);pi.prototype.next=function(){return this.l.next()};function qi(a,b){this.j={};this.i=[];this.na=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof qi)for(c=a.sb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=qi.prototype;l.sb=function(){ri(this);return this.i.concat()};
l.has=function(a){return si(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ti;ri(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ti(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.na=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return si(this.j,a)?(delete this.j[a],--this.size,this.na++,this.i.length>2*this.size&&ri(this),!0):!1};
function ri(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];si(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],si(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return si(this.j,a)?this.j[a]:b};
l.set=function(a,b){si(this.j,a)||(this.size+=1,this.i.push(a),this.na++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.sb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new qi(this)};
l.keys=function(){return mi(this.ea(!0)).i()};
l.values=function(){return mi(this.ea(!1)).i()};
l.entries=function(){var a=this;return bi(this.keys(),function(b){return[b,a.get(b)]})};
l.ea=function(a){ri(this);var b=0,c=this.na,d=this,e=new ji;e.next=function(){if(c!=d.na)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return ki;var f=d.i[b++];return li(a?f:d.j[f])};
return e};
function si(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.s=1;this.m=[];this.o=0;this.j=[];this.l={};this.v=!!a}
Za(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.s=e+3;d.push(e);return e};
function ui(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Ea(b)}}
l.Ea=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&kb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.oa=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];vi(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.Ea(c)}}return 0!=e}return!1};
function vi(a,b,c){uf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Ea,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.C=function(){K.Y.C.call(this);this.clear();this.m.length=0};function wi(a){this.i=a}
wi.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,xg(b))};
wi.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
wi.prototype.remove=function(a){this.i.remove(a)};function xi(a){this.i=a}
Za(xi,wi);function yi(a){this.data=a}
function zi(a){return void 0===a||a instanceof yi?a:new yi(a)}
xi.prototype.set=function(a,b){xi.Y.set.call(this,a,zi(b))};
xi.prototype.j=function(a){a=xi.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
xi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ai(a){this.i=a}
Za(Ai,xi);Ai.prototype.set=function(a,b,c){if(b=zi(b)){if(c){if(c<Date.now()){Ai.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ai.Y.set.call(this,a,b)};
Ai.prototype.j=function(a){var b=Ai.Y.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ai.prototype.remove.call(this,a);else return b}};function Bi(){}
;function Ci(){}
Za(Ci,Bi);Ci.prototype[Symbol.iterator]=function(){return mi(this.ea(!0)).i()};
Ci.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Di(a){this.i=a}
Za(Di,Ci);l=Di.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.ea=function(a){var b=0,c=this.i,d=new ji;d.next=function(){if(b>=c.length)return ki;var e=c.key(b++);if(a)return li(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return li(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function Ei(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Za(Ei,Di);function Fi(a,b){this.j=a;this.i=null;var c;if(c=Lc)c=!(9<=Number(Zc));if(c){Gi||(Gi=new qi);this.i=Gi.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Gi.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Za(Fi,Ci);var Hi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Gi=null;function Ii(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Hi[b]})}
l=Fi.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(Ii(a),b);Ji(this)};
l.get=function(a){a=this.i.getAttribute(Ii(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(Ii(a));Ji(this)};
l.ea=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new ji;d.next=function(){if(b>=c.length)return ki;var e=c[b++];if(a)return li(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return li(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ji(this)};
function Ji(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ki(a,b){this.j=a;this.i=b+"::"}
Za(Ki,Ci);Ki.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Ki.prototype.get=function(a){return this.j.get(this.i+a)};
Ki.prototype.remove=function(a){this.j.remove(this.i+a)};
Ki.prototype.ea=function(a){var b=this.j[Symbol.iterator](),c=this,d=new ji;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return li(a?e.slice(c.i.length):c.j.get(e))};
return d};function Li(a){I.call(this,a)}
t(Li,I);function Mi(a){I.call(this,a)}
t(Mi,I);Mi.prototype.getKey=function(){return Pd(this,1)};
Mi.prototype.getValue=function(){return Pd(this,2===Ud(this,Ni)?2:-1)};
Mi.prototype.setValue=function(a){return Td(this,2,Ni,a)};
var Ni=[2,3,4,5,6];function Oi(a){I.call(this,a)}
t(Oi,I);function Pi(a){I.call(this,a)}
t(Pi,I);function Qi(a){I.call(this,a,-1,Ri)}
t(Qi,I);var Ri=[2];function Si(a){I.call(this,a,-1,Ti)}
t(Si,I);Si.prototype.getPlayerType=function(){return Pd(this,36)};
Si.prototype.setHomeGroupInfo=function(a){return G(this,Qi,81,a)};
var Ti=[9,66,24,32,86,100,101];function Ui(a){I.call(this,a,-1,Vi)}
t(Ui,I);var Vi=[15,26,28];function Wi(a){I.call(this,a)}
t(Wi,I);Wi.prototype.setToken=function(a){return D(this,2,a)};function Xi(a){I.call(this,a,-1,Yi)}
t(Xi,I);Xi.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Yi=[12];function Zi(a){I.call(this,a,-1,$i)}
t(Zi,I);Zi.prototype.s=function(a){G(this,Si,1,a)};
var $i=[12];function aj(a){this.name=a}
;var bj=new aj("continuationCommand");var cj=new aj("webCommandMetadata");var dj=new aj("signalServiceEndpoint");var ej=new aj("feedbackEndpoint");function fj(a){I.call(this,a,-1,gj)}
t(fj,I);function hj(a){I.call(this,a)}
t(hj,I);hj.prototype.getKey=function(){return Rd(this,1,"")};
hj.prototype.getValue=function(){return Rd(this,2,"")};
hj.prototype.setValue=function(a){return D(this,2,a)};
var gj=[4,5];function ij(a){I.call(this,a)}
t(ij,I);function jj(a){I.call(this,a)}
t(jj,I);var kj=[2,3,4];function lj(a){I.call(this,a)}
t(lj,I);lj.prototype.getMessage=function(){return Rd(this,1,"")};function mj(a){I.call(this,a)}
t(mj,I);function nj(a){I.call(this,a)}
t(nj,I);function oj(a){I.call(this,a,-1,pj)}
t(oj,I);var pj=[10,17];function qj(a){I.call(this,a)}
t(qj,I);function rj(a){I.call(this,a)}
t(rj,I);rj.prototype.V=function(a){D(this,1,a)};function sj(a){I.call(this,a)}
t(sj,I);function tj(a){I.call(this,a)}
t(tj,I);function uj(a){I.call(this,a)}
t(uj,I);function vj(a){I.call(this,a,-1,wj)}
t(vj,I);vj.prototype.getVideoData=function(){return Vd(this,uj,15)};
var wj=[4];function xj(a){I.call(this,a)}
t(xj,I);function yj(a,b){G(a,sj,1,b)}
xj.prototype.V=function(a){D(this,2,a)};
function zj(a){I.call(this,a)}
t(zj,I);function Aj(a,b){G(a,sj,1,b)}
;function Bj(a){I.call(this,a,-1,Cj)}
t(Bj,I);Bj.prototype.V=function(a){D(this,1,a)};
function Dj(a,b){G(a,sj,2,b)}
var Cj=[3];function Ej(a){I.call(this,a)}
t(Ej,I);Ej.prototype.V=function(a){D(this,1,a)};function Fj(a){I.call(this,a)}
t(Fj,I);Fj.prototype.V=function(a){D(this,1,a)};function Gj(a){I.call(this,a)}
t(Gj,I);Gj.prototype.V=function(a){D(this,1,a)};function Hj(a){I.call(this,a)}
t(Hj,I);Hj.prototype.V=function(a){D(this,1,a)};function Ij(a){I.call(this,a)}
t(Ij,I);function Jj(a){I.call(this,a)}
t(Jj,I);function Kj(a){I.call(this,a,-1,Lj)}
t(Kj,I);function Mj(a,b){return D(a,1,b)}
Kj.prototype.getPlayerType=function(){return Rd(this,7,0)};
Kj.prototype.setVideoId=function(a){return D(this,19,a)};
function Nj(a,b){return D(a,25,b)}
function Oj(a,b){$d(a,68,Pj,b)}
function Pj(a){I.call(this,a)}
t(Pj,I);Pj.prototype.getId=function(){return Rd(this,2,"")};
var Lj=[83,68];function Qj(a){I.call(this,a)}
t(Qj,I);function Rj(a){I.call(this,a)}
t(Rj,I);function Sj(a){I.call(this,a)}
t(Sj,I);function Tj(a){I.call(this,a,432)}
t(Tj,I);
var Uj=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];var Vj={Wi:0,Hi:1,Ni:2,Oi:4,Ti:8,Pi:16,Qi:32,Vi:64,Ui:128,Ji:256,Li:512,Si:1024,Ki:2048,Mi:4096,Ii:8192,Ri:16384};function Wj(a){I.call(this,a)}
t(Wj,I);function qk(a){I.call(this,a)}
t(qk,I);qk.prototype.setVideoId=function(a){return Td(this,1,rk,a)};
qk.prototype.getPlaylistId=function(){return Pd(this,2===Ud(this,rk)?2:-1)};
var rk=[1,2];function sk(a){I.call(this,a,-1,tk)}
t(sk,I);var tk=[3];var uk=new aj("webPlayerShareEntityServiceEndpoint");var vk=new aj("playlistEditEndpoint");var wk=new aj("modifyChannelNotificationPreferenceEndpoint");var xk=new aj("unsubscribeEndpoint");var yk=new aj("subscribeEndpoint");function zk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ak=y.window,Bk,Ck,Dk=(null==Ak?void 0:null==(Bk=Ak.yt)?void 0:Bk.config_)||(null==Ak?void 0:null==(Ck=Ak.ytcfg)?void 0:Ck.data_)||{};z("yt.config_",Dk);function Ek(){zk(Dk,arguments)}
function L(a,b){return a in Dk?Dk[a]:b}
function Fk(){var a=Dk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Gk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Hk(a,b){a=Gk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ik(){return L("EXPERIMENTS_TOKEN","")}
function Gk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Jk(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Kk=[];function Lk(a){Kk.forEach(function(b){return b(a)})}
function Mk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Nk(b)}}:a}
function Nk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Ek("ERRORS",e));Lk(a)}
function Ok(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Ek("ERRORS",e))}
;function Pk(){var a=Qk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Rk(a){z("yt.ads.biscotti.lastId_",a)}
;var Sk=/^[\w.]*$/,Tk={q:!0,search_query:!0};function Uk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Vk(f[0]||""),h=Vk(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,m=f[0],q=String(Uk);k.args=[{key:m,value:f[1],query:a,method:Wk==q?"unchanged":q}];Tk.hasOwnProperty(m)||Ok(k)}}return c}
var Wk=String(Uk);function Xk(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Yk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Uk(a,"&")}
function Zk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Yk(1<a.length?a[1]:a[0])):{}}
function $k(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Yk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return uc(a,e)+d}
function al(a){if(!b)var b=window.location.href;var c=mc(1,a),d=nc(a);c&&d?(a=a.match(kc),b=b.match(kc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?nc(b)==d&&(Number(mc(4,b))||null)==(Number(mc(4,a))||null):!0;return a}
function Vk(a){return a&&a.match(Sk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function bl(a){var b=cl;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Qh;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ma){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ch:g;try{var h=g.history.length}catch(ma){h=0}e.u_his=h;var k;e.u_h=null==(k=Ch.screen)?void 0:k.height;var m;e.u_w=null==(m=Ch.screen)?void 0:m.width;var q;e.u_ah=null==(q=Ch.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=Ch.screen)?void 0:r.availWidth;var w;e.u_cd=null==(w=Ch.screen)?void 0:w.colorDepth}catch(ma){}h=b.i;try{var u=h.screenX;var A=h.screenY}catch(ma){}try{var E=h.outerWidth;var F=h.outerHeight}catch(ma){}try{var N=h.innerWidth;var O=h.innerHeight}catch(ma){}try{var R=h.screenLeft;var U=h.screenTop}catch(ma){}try{N=h.innerWidth,O=h.innerHeight}catch(ma){}try{var ca=h.screen.availWidth;var lb=h.screen.availTop}catch(ma){}u=[R,U,u,A,ca,lb,E,F,N,O];try{var Xa=(b.i.top||window).document,ja="CSS1Compat"==
Xa.compatMode?Xa.documentElement:Xa.body;var H=(new gf(ja.clientWidth,ja.clientHeight)).round()}catch(ma){H=new gf(-12245933,-12245933)}Xa=H;H={};var ka=void 0===ka?y:ka;ja=new Zh;ka.SVGElement&&ka.document.createElementNS&&ja.set(0);A=Kh();A["allow-top-navigation-by-user-activation"]&&ja.set(1);A["allow-popups-to-escape-sandbox"]&&ja.set(2);ka.crypto&&ka.crypto.subtle&&ja.set(3);ka.TextDecoder&&ka.TextEncoder&&ja.set(4);ka=$h(ja);H.bc=ka;H.bih=Xa.height;H.biw=Xa.width;H.brdim=u.join();b=b.j;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!Ch.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var cl=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Xk(bl(a))});Date.now();var dl="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function el(){if(!dl)return null;var a=dl();return"open"in a?a:null}
function fl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function gl(a,b){"function"===typeof a&&(a=Mk(a));return window.setTimeout(a,b)}
function hl(a){window.clearTimeout(a)}
;var il={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},jl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha(Rh)),kl=!1;
function ll(a,b){b=void 0===b?{}:b;var c=al(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in il){var f=L(il[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&nc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!nc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!nc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!nc(a))b["X-YouTube-Ad-Signals"]=Xk(bl());return b}
function ml(a){var b=window.location.search,c=nc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!al(a)||(c=document.location.hostname);var d=lc(mc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Yk(b),f={};fb(jl,function(g){e[g]&&(f[g]=e[g])});
return $k(a,f||{},!1)}
function nl(a,b){var c=b.format||"JSON";a=ol(a,b);var d=pl(a,b),e=!1,f=ql(a,function(k){if(!e){e=!0;h&&hl(h);var m=fl(k),q=null,r=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(m||r||w)q=rl(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,k,q):b.onError&&b.onError.call(r,k,q);b.onFinish&&b.onFinish.call(r,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=gl(function(){e||(e=!0,f.abort(),hl(h),g.call(b.context||y,f))},d)}return f}
function ol(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=$k(a,b||{},!0);return a}
function pl(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||nc(a)&&!b.withCredentials&&nc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Yk(e),xb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):sc(e));f=e||f&&!qb(f);!kl&&f&&"POST"!=b.method&&(kl=
!0,Nk(Error("AJAX request with postData should use POST")));return e}
function rl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ok(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?sl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=tl(g)})}d&&ul(e);
return e}
function ul(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Cb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=zb();d=e?e.createHTML(d):d;a[c]=new bc(d)}else ul(a[b])}}
function sl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function tl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ql(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Mk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=el();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=ml(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ll(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function vl(a){var b=this;this.j=void 0;this.i=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.j=c});
a.addEventListener("appinstalled",function(){b.i=!0},{once:!0})}
function wl(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function xl(a,b,c,d,e){pg.set(""+a,b,{bb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function yl(){if(!pg.isEnabled())return!1;if(!pg.isEmpty())return!0;pg.set("TESTCOOKIESENABLED","1",{bb:60});if("1"!==pg.get("TESTCOOKIESENABLED"))return!1;pg.remove("TESTCOOKIESENABLED");return!0}
;var zl=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",zl);function Al(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=pg.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(zl[d]=c.toString())}}}
Al.prototype.get=function(a,b){Bl(a);Cl(a);a=void 0!==zl[a]?zl[a].toString():null;return null!=a?a:b?b:""};
Al.prototype.set=function(a,b){Bl(a);Cl(a);if(null==b)throw Error("ExpectedNotNull");zl[a]=b.toString()};
function Dl(a){return!!((El("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Al.prototype.remove=function(a){Bl(a);Cl(a);delete zl[a]};
Al.prototype.clear=function(){for(var a in zl)delete zl[a]};
function Cl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Bl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function El(a){a=void 0!==zl[a]?zl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(Al);var Fl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Gl={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Hl={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Il={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Jl(){var a=y.navigator;return a?a.connection:void 0}
function Kl(){var a=Jl();if(a){var b=Fl[a.type||"unknown"]||"CONN_UNKNOWN";a=Fl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Ll(){var a=Jl();if(null!=a&&a.effectiveType)return Il.hasOwnProperty(a.effectiveType)?Il[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Ml(){return"INNERTUBE_API_KEY"in Dk&&"INNERTUBE_API_VERSION"in Dk}
function Nl(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),tb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Wb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Nc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Yb:L("INNERTUBE_CONTEXT_HL"),Xb:L("INNERTUBE_CONTEXT_GL"),Oc:L("INNERTUBE_HOST_OVERRIDE")||"",Qc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Pc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ol(a){var b={client:{hl:a.Yb,gl:a.Xb,clientName:a.Wb,clientVersion:a.innertubeContextClientVersion,configInfo:a.tb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Ik();""!==c&&(b.client.experimentsToken=c);c=Jk();0<c.length&&(b.request={internalExperimentFlags:c});Pl(a,void 0,b);Ql(void 0,b);Rl(a,void 0,b);Sl(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(Yk(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Tl(a){var b=new Zi,c=new Si;D(c,1,a.Yb);D(c,2,a.Xb);D(c,16,a.Nc);D(c,17,a.innertubeContextClientVersion);if(a.tb){var d=a.tb,e=new Oi;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);G(c,Oi,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=Ik();""!==d&&D(c,54,d);d=Jk();if(0<d.length){e=new Ui;for(var f=0;f<d.length;f++){var g=new Mi;D(g,1,d[f].key);g.setValue(d[f].value);$d(e,15,Mi,
g)}G(b,Ui,5,e)}Pl(a,c);Ql(c);Rl(a,c);Sl(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Xi,D(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(Yk(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);b.s(c);return b}
function Pl(a,b,c){a=a.Wb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Vd(b,Pi,96)||new Pi;var d=wl();d=Object.keys(Yh).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);G(b,Pi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=wl())}
function Ql(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Rl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Vd(b,Oi,62))?d:new Oi;D(c,6,a.appInstallData);G(b,Oi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Sl(a,b){var c=Kl();c&&(a?D(a,61,Gl[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Ll())&&(a?D(a,94,Hl[c]):b&&(b.client.effectiveConnectionType=c))}
function Ul(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.uq||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().tq:b=tg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Vl(a){a=Object.assign({},a);delete a.Authorization;var b=tg();if(b){var c=new di;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=ed(c.digest(),3)}return a}
;function Wl(a){var b=new Ei;(b=b.isAvailable()?a?new Ki(b,a):b:null)||(a=new Fi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Ai(a):null;this.j=document.domain||window.location.hostname}
Wl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(xg(b))}catch(f){return}else e=escape(b);xl(a,e,c,this.j)};
Wl.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=pg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Wl.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;pg.remove(""+a,"/",void 0===b?"youtube.com":b)};var Xl=window,P=Xl.ytcsi&&Xl.ytcsi.now?Xl.ytcsi.now:Xl.performance&&Xl.performance.timing&&Xl.performance.now&&Xl.performance.timing.navigationStart?function(){return Xl.performance.timing.navigationStart+Xl.performance.now()}:function(){return(new Date).getTime()};var Yl;function Zl(){Yl||(Yl=new Wl("yt.innertube"));return Yl}
function $l(a,b,c,d){if(d)return null;d=Zl().get("nextId",!0)||1;var e=Zl().get("requests",!0)||{};e[d]={method:a,request:b,authState:Vl(c),requestTime:Math.round(P())};Zl().set("nextId",d+1,86400,!0);Zl().set("requests",e,86400,!0);return d}
function am(a){var b=Zl().get("requests",!0)||{};delete b[a];Zl().set("requests",b,86400,!0)}
function bm(a){var b=Zl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Vl(Ul(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),cm(a,d.method,e,{}));delete b[c]}}Zl().set("requests",b,86400,!0)}}
;function dm(){}
dm.prototype.S=function(a,b){return em(a,1,b)};
function fm(a,b){em(a,2,b)}
function gm(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function hm(){dm.apply(this,arguments)}
t(hm,dm);function im(){hm.i||(hm.i=new hm);return hm.i}
function em(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):gl(a,c||0)}
hm.prototype.fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):hl(a)}};
hm.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
hm.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};var Wh=im();var jm=$c||ad;function km(a){var b=Sb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var lm=function(){var a;return function(){a||(a=new Wl("ytidb"));return a}}();
function mm(){var a;return null==(a=lm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var nm=[],om,pm=!1;function qm(){var a={};for(om=new rm(void 0===a.handleError?sm:a.handleError,void 0===a.logEvent?tm:a.logEvent);0<nm.length;)switch(a=nm.shift(),a.type){case "ERROR":om.handleError(a.payload);break;case "EVENT":om.logEvent(a.eventType,a.payload)}}
function um(a){pm||(om?om.handleError(a):(nm.push({type:"ERROR",payload:a}),10<nm.length&&nm.shift()))}
function vm(a,b){pm||(om?om.logEvent(a,b):(nm.push({type:"EVENT",eventType:a,payload:b}),10<nm.length&&nm.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ha(b))}
t(Q,Error);function wm(){try{return xm(),!0}catch(a){return!1}}
function xm(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function ym(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function zm(a){return a.substr(0,a.indexOf(":"))||a}
;var Am={},Bm=(Am.AUTH_INVALID="No user identifier specified.",Am.EXPLICIT_ABORT="Transaction was explicitly aborted.",Am.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Am.MISSING_INDEX="Index not created.",Am.MISSING_OBJECT_STORES="Object stores not created.",Am.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Am.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Am.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Am.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Am.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Am.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Am.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Am),Cm={},Dm=(Cm.AUTH_INVALID="ERROR",Cm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Cm.EXPLICIT_ABORT="IGNORED",Cm.IDB_NOT_SUPPORTED="ERROR",Cm.MISSING_INDEX=
"WARNING",Cm.MISSING_OBJECT_STORES="ERROR",Cm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Cm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Cm.QUOTA_EXCEEDED="WARNING",Cm.QUOTA_MAYBE_EXCEEDED="WARNING",Cm.UNKNOWN_ABORT="WARNING",Cm.INCOMPATIBLE_DB_VERSION="WARNING",Cm),Em={},Fm=(Em.AUTH_INVALID=!1,Em.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Em.EXPLICIT_ABORT=!1,Em.IDB_NOT_SUPPORTED=!1,Em.MISSING_INDEX=!1,Em.MISSING_OBJECT_STORES=!1,Em.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Em.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Em.QUOTA_EXCEEDED=!1,Em.QUOTA_MAYBE_EXCEEDED=!0,Em.UNKNOWN_ABORT=!0,Em.INCOMPATIBLE_DB_VERSION=!1,Em);function Gm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Bm[a]:c;d=void 0===d?Dm[a]:d;e=void 0===e?Fm[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,Gm.prototype)}
t(Gm,Q);function Hm(a,b){Gm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Bm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Hm.prototype)}
t(Hm,Gm);function Im(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Im.prototype)}
t(Im,Error);var Jm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Km(a,b,c,d){b=zm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Gm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Gm("QUOTA_EXCEEDED",a);if(bd&&"UnknownError"===e.name)return new Gm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Im)return new Gm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Jm.some(function(f){return e.message.includes(f)}))return new Gm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Gm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",dc:e.name})];e.level="WARNING";return e}
function Lm(a,b,c){var d=mm();return new Gm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Mm(a){if(!a)throw Error();throw a;}
function Nm(a){return a}
function Om(a){this.i=a}
function Pm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Pm.all=function(a){return new Pm(new Om(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={xa:0};f.xa<a.length;f={xa:f.xa},++f.xa)Pm.resolve(a[f.xa]).then(function(g){return function(h){d[g.xa]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Pm.resolve=function(a){return new Pm(new Om(function(b,c){a instanceof Pm?a.then(b,c):b(a)}))};
Pm.reject=function(a){return new Pm(new Om(function(b,c){c(a)}))};
Pm.prototype.then=function(a,b){var c=this,d=null!=a?a:Nm,e=null!=b?b:Mm;return new Pm(new Om(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Qm(c,c,d,f,g)}),c.onRejected.push(function(){Rm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Qm(c,c,d,f,g):"REJECTED"===c.state.status&&Rm(c,c,e,f,g)}))};
Pm.prototype.catch=function(a){return this.then(void 0,a)};
function Qm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Pm?Sm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Pm?Sm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Pm?Sm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Tm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Um(a){return new Promise(function(b,c){Tm(a,b,c)})}
function Vm(a){return new Pm(new Om(function(b,c){Tm(a,b,c)}))}
;function Wm(a,b){return new Pm(new Om(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Xm(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Xm.prototype;l.add=function(a,b,c){return Ym(this,[a],{mode:"readwrite",U:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Ym(this,[a],{mode:"readwrite",U:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Ym(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).count(b)})};
function Zm(a,b,c){a=a.i.createObjectStore(b,c);return new $m(a)}
l.delete=function(a,b){return Ym(this,[a],{mode:"readwrite",U:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Ym(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).get(b)})};
function an(a,b){return Ym(a,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(c){c=c.objectStore("LogsRequestsStore");return Vm(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Ym(a,b,c,d){var e,f,g,h,k,m,q,r,w,u,A,E;return x(function(F){switch(F.i){case 1:var N={mode:"readonly",U:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.U?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(P());ya(F,4);m=a.i.transaction(b,e.mode);N=new bn(m);N=cn(N,d);return v(F,N,6);case 6:return q=F.j,r=Math.round(P()),dn(a,k,r,g,void 0,b.join(),e),F.return(q);case 4:w=Aa(F);u=Math.round(P());A=Km(w,a.i.name,b.join(),a.i.version);
if((E=A instanceof Gm&&!A.i)||g>=f)dn(a,k,u,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function dn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Gm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&vm("QUOTA_EXCEEDED",{dbName:zm(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Gm&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),vm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),en(a,!1,d,f,b,g.tag),um(e)):en(a,!0,d,f,b,g.tag)}
function en(a,b,c,d,e,f){vm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function $m(a){this.i=a}
l=$m.prototype;l.add=function(a,b){return Vm(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Vm(this.i.clear()).then(function(){})};
l.count=function(a){return Vm(this.i.count(a))};
function fn(a,b){return gn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?fn(this,a):Vm(this.i.delete(a))};
l.get=function(a){return Vm(this.i.get(a))};
l.index=function(a){try{return new hn(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Im(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function gn(a,b,c){a=a.i.openCursor(b.query,b.direction);return jn(a).then(function(d){return Wm(d,c)})}
function bn(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=Gm;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function cn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
bn.prototype.abort=function(){this.i.abort();this.j=!0;throw new Gm("EXPLICIT_ABORT");};
bn.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new $m(a),this.l.set(a,b));return b};
function hn(a){this.i=a}
l=hn.prototype;l.count=function(a){return Vm(this.i.count(a))};
l.delete=function(a){return kn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Vm(this.i.get(a))};
l.getKey=function(a){return Vm(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function kn(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return jn(a).then(function(d){return Wm(d,c)})}
function ln(a,b){this.request=a;this.cursor=b}
function jn(a){return Vm(a).then(function(b){return b?new ln(a,b):null})}
l=ln.prototype;l.advance=function(a){this.cursor.advance(a);return jn(this.request)};
l.continue=function(a){this.cursor.continue(a);return jn(this.request)};
l.delete=function(){return Vm(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Vm(this.cursor.update(a))};function mn(a,b,c){return new Promise(function(d,e){function f(){w||(w=new Xm(g.result,{closed:r}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.qd,q=c.upgrade,r=c.closed,w;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&vm("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:zm(a)});var A=f(),E=new bn(g.transaction);
q&&q(A,function(F){return u.oldVersion<F&&u.newVersion>=F},E);
E.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){vm("IDB_UNEXPECTEDLY_CLOSED",{dbName:zm(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function nn(a,b,c){c=void 0===c?{}:c;return mn(a,b,c)}
function on(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Um(c),4);
if(2!=g.i)return za(g,0);f=Aa(g);throw Km(f,a,"",-1);})}
;function pn(a){return new Promise(function(b){fm(function(){b()},a)})}
function qn(a,b){this.name=a;this.options=b;this.m=!0;this.s=this.o=0;this.j=500}
qn.prototype.l=function(a,b,c){c=void 0===c?{}:c;return nn(a,b,c)};
qn.prototype.delete=function(a){a=void 0===a?{}:a;return on(this.name,a)};
function rn(a,b){return new Gm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function sn(a,b){if(!b)throw Lm("openWithToken",zm(a.name));return tn(a)}
function tn(a){function b(){var f,g,h,k,m,q,r,w,u,A;return x(function(E){switch(E.i){case 1:return g=null!=(f=Error().stack)?f:"",ya(E,2),v(E,a.l(a.name,a.options.version,d),4);case 4:h=E.j;for(var F=a.options,N=[],O=p(Object.keys(F.Ja)),R=O.next();!R.done;R=O.next()){R=R.value;var U=F.Ja[R],ca=void 0===U.Yc?Number.MAX_VALUE:U.Yc;!(h.i.version>=U.lb)||h.i.version>=ca||h.i.objectStoreNames.contains(R)||N.push(R)}k=N;if(0===k.length){E.u(5);break}m=Object.keys(a.options.Ja);q=h.objectStoreNames();if(a.s<
Hk("ytidb_reopen_db_retries",0))return a.s++,h.close(),um(new Gm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());if(!(a.o<Hk("ytidb_remake_db_retries",1))){E.u(6);break}a.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.u(7);break}return v(E,pn(a.j),8);case 8:a.j*=2;case 7:return v(E,a.delete(),9);case 9:return um(new Gm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());
case 6:throw new Hm(q,m);case 5:return E.return(h);case 2:r=Aa(E);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){E.u(10);break}return v(E,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=E.j;u=w.i.version;if(void 0!==a.options.version&&u>a.options.version+1)throw w.close(),
a.m=!1,rn(a,u);return E.return(w);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),Km(r,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw rn(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,qd:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var un=new qn("YtIdbMeta",{Ja:{databases:{lb:1}},upgrade:function(a,b){b(1)&&Zm(a,"databases",{keyPath:"actualName"})}});
function vn(a,b){var c;return x(function(d){if(1==d.i)return v(d,sn(un,b),2);c=d.j;return d.return(Ym(c,["databases"],{U:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Vm(f.i.put(a,void 0)).then(function(){})})}))})}
function wn(a,b){var c;return x(function(d){if(1==d.i)return a?v(d,sn(un,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function xn(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],v(e,sn(un,b),2)):3!=e.i?(d=e.j,v(e,Ym(d,["databases"],{U:!0,mode:"readonly"},function(f){c.length=0;return gn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function yn(a){return xn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function zn(a,b,c){return xn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function An(a){var b,c;return x(function(d){if(1==d.i)return b=xm("YtIdbMeta hasAnyMeta other"),v(d,xn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var Bn,Cn=new function(){}(new function(){});
function Dn(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=mm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=jm)f=/WebKit\/([0-9]+)/.exec(Sb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Sb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Mc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,vn(d,Cn),4);case 4:return v(e,wn("yt-idb-test-do-not-use",Cn),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function En(){if(void 0!==Bn)return Bn;pm=!0;return Bn=Dn().then(function(a){pm=!1;var b;if(null!=(b=lm())&&b.i){var c;b={hasSucceededOnce:(null==(c=mm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=lm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Fn(){return B("ytglobal.idbToken_")||void 0}
function Gn(){var a=Fn();return a?Promise.resolve(a):En().then(function(b){(b=b?Cn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var Hn=0;function In(a,b){Hn||(Hn=Wh.S(function(){var c,d,e,f,g;return x(function(h){switch(h.i){case 1:return v(h,Gn(),2);case 2:c=h.j;if(!c)return h.return();d=!0;ya(h,3);return v(h,zn(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,on(f.actualName),7);case 7:return v(h,wn(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),um(g),d=!1;case 4:Wh.fa(Hn),Hn=0,d&&In(a,b),h.i=0}})}))}
function Jn(){var a;return x(function(b){return 1==b.i?v(b,Gn(),2):(a=b.j)?b.return(An(a)):b.return(!1)})}
new Ah;function Kn(a){if(!wm())throw a=new Gm("AUTH_INVALID",{dbName:a}),um(a),a;var b=xm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ln(a,b,c,d){var e,f,g,h,k,m;return x(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",v(q,Gn(),2);case 2:g=q.j;if(!g)throw h=Lm("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),um(h),h;ym(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Kn(a);ya(q,3);return v(q,vn(k,g),5);case 5:return v(q,nn(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=Aa(q),ya(q,7),v(q,wn(k.actualName,g),9);case 9:za(q,
8);break;case 7:Aa(q);case 8:throw m;}})}
function Mn(a,b,c){c=void 0===c?{}:c;return Ln(a,b,!1,c)}
function Nn(a,b,c){c=void 0===c?{}:c;return Ln(a,b,!0,c)}
function On(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return v(e,Gn(),2);if(3!=e.i){c=e.j;if(!c)return e.return();ym(a);d=Kn(a);return v(e,on(d.actualName,b),3)}return v(e,wn(d.actualName,c),0)})}
function Pn(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?v(e,on(d.actualName,b),2):v(e,wn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Qn(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return v(d,Gn(),2);if(3!=d.i){b=d.j;if(!b)return d.return();ym("LogsDatabaseV2");return v(d,yn(b),3)}c=d.j;return v(d,Pn(c,a,b),0)})}
function Rn(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return v(d,Gn(),2);if(3!=d.i){c=d.j;if(!c)return d.return();ym(a);return v(d,on(a,b),3)}return v(d,wn(a,c),0)})}
;function Sn(a){this.Ta=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.Ba=function(){};
this.now=Date.now;this.Ha=!1;var b;this.nc=null!=(b=a.nc)?b:100;var c;this.jc=null!=(c=a.jc)?c:1;var d;this.hc=null!=(d=a.hc)?d:2592E6;var e;this.ec=null!=(e=a.ec)?e:12E4;var f;this.ic=null!=(f=a.ic)?f:5E3;var g;this.G=null!=(g=a.G)?g:void 0;this.Ya=!!a.Ya;var h;this.Wa=null!=(h=a.Wa)?h:.1;var k;this.eb=null!=(k=a.eb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ba&&(this.Ba=a.Ba);a.Ha&&(this.Ha=a.Ha);a.Ta&&(this.Ta=a.Ta);this.H=a.H;this.Z=a.Z;this.O=a.O;this.M=a.M;this.ia=a.ia;this.yb=
a.yb;this.xb=a.xb;Tn(this)&&(!this.H||this.H("networkless_logging"))&&Un(this)}
function Un(a){Tn(a)&&!a.Ha&&(a.i=!0,a.Ya&&Math.random()<=a.Wa&&a.O.Cc(a.G),Vn(a),a.M.K()&&a.Na(),a.M.aa(a.yb,a.Na.bind(a)),a.M.aa(a.xb,a.Kb.bind(a)))}
l=Sn.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Tn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.G).then(function(e){d.id=e;c.M.K()&&Wn(c,d)}).catch(function(e){Wn(c,d);
Xn(c,e)})}else this.ia(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Tn(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.H&&this.H("nwl_skip_retry")&&(e.skipRetry=c);if(this.M.K()||this.H&&this.H("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return v(k,d.O.set(e,d.G).catch(function(m){Xn(d,m)}),2);
f(g,h);k.i=0})}}this.ia(a,b,e.skipRetry)}else this.O.set(e,this.G).catch(function(g){d.ia(a,b,e.skipRetry);
Xn(d,g)})}else this.ia(a,b,this.H&&this.H("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Tn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.za(d.id,c.G):e=!0;c.M.ha&&c.H&&c.H("vss_network_hint")&&c.M.ha(!0);f(g,h)};
this.ia(d.url,d.options);this.O.set(d,this.G).then(function(g){d.id=g;e&&c.O.za(d.id,c.G)}).catch(function(g){Xn(c,g)})}else this.ia(a,b)};
l.Na=function(){var a=this;if(!Tn(this))throw Lm("throttleSend");this.j||(this.j=this.Z.S(function(){var b;return x(function(c){if(1==c.i)return v(c,a.O.Ub("NEW",a.G),2);if(3!=c.i)return b=c.j,b?v(c,Wn(a,b),3):(a.Kb(),c.return());a.j&&(a.j=0,a.Na());c.i=0})},this.nc))};
l.Kb=function(){this.Z.fa(this.j);this.j=0};
function Wn(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!Tn(a))throw c=Lm("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.O.Sc(b.id,a.G),3);case 3:(d=e.j)?b=d:a.Ba(Error("The request cannot be found in the database."));case 2:if(Yn(a,b,a.hc)){e.u(4);break}a.Ba(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.O.za(b.id,a.G),5);case 5:return e.return();case 4:b.skipRetry||(b=Zn(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.O.za(b.id,a.G),8);case 8:a.ia(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Zn(a,b){if(!Tn(a))throw Lm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.i){case 1:g=$n(f);if(!(a.H&&a.H("nwl_consider_error_code")&&g||a.H&&!a.H("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.eb)){m.u(2);break}if(!a.M.La){m.u(3);break}return v(m,a.M.La(),3);case 3:if(a.M.K()){m.u(2);break}c(e,f);if(!a.H||!a.H("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.O.Bb(b.id,a.G,!1),6);case 6:return m.return();case 2:if(a.H&&a.H("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.eb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.jc?v(m,a.O.Bb(b.id,a.G),12):v(m,a.O.za(b.id,a.G),8);case 12:a.Z.S(function(){a.M.K()&&a.Na()},a.ic);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.O.za(b.id,a.G),2);a.M.ha&&a.H&&a.H("vss_network_hint")&&a.M.ha(!0);d(e,f);h.i=0})};
return b}
function Yn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Vn(a){if(!Tn(a))throw Lm("retryQueuedRequests");a.O.Ub("QUEUED",a.G).then(function(b){b&&!Yn(a,b,a.ec)?a.Z.S(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,a.O.Bb(b.id,a.G),2);Vn(a);c.i=0})}):a.M.K()&&a.Na()})}
function Xn(a,b){a.sc&&!a.M.K()?a.sc(b):a.handleError(b)}
function Tn(a){return!!a.G||a.Ta}
function $n(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function ao(a,b){this.version=a;this.args=b}
;function bo(a,b){this.topic=a;this.i=b}
bo.prototype.toString=function(){return this.topic};var co=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ea;K.prototype.publish=K.prototype.oa;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",co);var eo=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",eo);var fo=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",fo);var go=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",go);
z("ytPubsub2Pubsub2SkipSubKey",null);function ho(a,b){var c=io();c&&c.publish.call(c,a.toString(),a,b)}
function jo(a){var b=ko,c=io();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(eo[d])try{if(f&&b instanceof bo&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.na){var m=new h;h.na=m.version}var q=h.na}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var w=k.args,u=w.length;if(0<u){var A=Array(u);for(k=0;k<u;k++)A[k]=w[k];var E=A}else E=[];f=r.call(q,h,E)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Nk(F)}},go[b.toString()]?B("yt.scheduler.instance")?Wh.S(g):gl(g,0):g())});
eo[d]=!0;fo[b.toString()]||(fo[b.toString()]=[]);fo[b.toString()].push(d);return d}
function lo(){var a=mo,b=jo(function(c){a.apply(void 0,arguments);no(b)});
return b}
function no(a){var b=io();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete eo[c]}))}
function io(){return B("ytPubsub2Pubsub2Instance")}
;function oo(a,b){qn.call(this,a,b);this.options=b;ym(a)}
t(oo,qn);function po(a,b){var c;return function(){c||(c=new oo(a,b));return c}}
oo.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Cb?Nn:Mn)(a,b,Object.assign({},c))};
oo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Cb?Rn:On)(this.name,a)};
function qo(a,b){return po(a,b)}
;var ro;
function so(){if(ro)return ro();var a={};ro=qo("LogsDatabaseV2",{Ja:(a.LogsRequestsStore={lb:2},a),Cb:!1,upgrade:function(b,c,d){c(2)&&Zm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return ro()}
;function to(a){return sn(so(),a)}
function uo(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,to(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,an(d,e),3);f=g.j;c.sd=P();vo(c);return g.return(f)})}
function wo(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,to(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,Ym(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(q){return kn(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===a&&(k.status="QUEUED",
r.update(k)))})}),3);
c.sd=P();vo(c);return m.return(k)})}
function xo(a,b){var c;return x(function(d){if(1==d.i)return v(d,to(b),2);c=d.j;return d.return(Ym(c,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Vm(f.i.put(g,void 0)).then(function(){return g})})}))})}
function yo(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return v(e,to(b),2);d=e.j;return e.return(Ym(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Vm(g.i.put(h,void 0)).then(function(){return h})):Pm.resolve(void 0)})}))})}
function zo(a,b){var c;return x(function(d){if(1==d.i)return v(d,to(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Ao(a){var b,c;return x(function(d){if(1==d.i)return v(d,to(a),2);b=d.j;c=P()-2592E6;return v(d,Ym(b,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){return gn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Bo(){return x(function(a){return v(a,Qn(),0)})}
function vo(a){M("nwl_csi_killswitch")||.01>=Math.random()&&ho("nwl_transaction_latency_payload",a)}
;var Co={},Do=qo("ServiceWorkerLogsDatabase",{Ja:(Co.SWHealthLog={lb:1},Co),Cb:!0,upgrade:function(a,b){b(1)&&Zm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Eo(a){return sn(Do(),a)}
function Fo(a){var b,c;return x(function(d){if(1==d.i)return v(d,Eo(a),2);b=d.j;c=P()-2592E6;return v(d,Ym(b,["SWHealthLog"],{mode:"readwrite",U:!0},function(e){return gn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Go(a){var b;return x(function(c){if(1==c.i)return v(c,Eo(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var Ho={},Io=0;
function Jo(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)ql(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ql(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new bb({url:a});if(d.l&&d.j||d.m){var e=lc(mc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(xc),h=wc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(w){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var r=!0;break b}}catch(w){}r=!1}b=r?!0:!1}else b=!1;b||Ko(a)}}
function Ko(a){var b=new Image,c=""+Io++;Ho[c]=b;b.onload=b.onerror=function(){delete Ho[c]};
b.src=a}
;function Lo(){this.i=new Map;this.j=!1}
function Mo(){if(!Lo.i){var a=B("yt.networkRequestMonitor.instance")||new Lo;z("yt.networkRequestMonitor.instance",a);Lo.i=a}return Lo.i}
Lo.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Lo.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Lo.prototype.removeParams=function(a){return a.split("?")[0]};
Lo.prototype.removeParams=Lo.prototype.removeParams;Lo.prototype.isEndpointCFR=Lo.prototype.isEndpointCFR;Lo.prototype.requestComplete=Lo.prototype.requestComplete;Lo.getInstance=Mo;var No;function Oo(){No||(No=new Wl("yt.offline"));return No}
function Po(a){if(M("offline_error_handling")){var b=Oo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Oo().set("errors",b,2592E3,!0)}}
;function Qo(){$e.call(this);var a=this;this.l=!1;this.j=Vh();this.j.aa("networkstatus-online",function(){if(a.l&&M("offline_error_handling")){var b=Oo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Q(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Nk(d)}Oo().set("errors",{},2592E3,!0)}}})}
t(Qo,$e);function Ro(){if(!Qo.i){var a=B("yt.networkStatusManager.instance")||new Qo;z("yt.networkStatusManager.instance",a);Qo.i=a}return Qo.i}
l=Qo.prototype;l.K=function(){return this.j.K()};
l.ha=function(a){this.j.j=a};
l.Mc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Gc=function(){this.l=!0};
l.aa=function(a,b){return this.j.aa(a,b)};
l.La=function(a){a=Th(this.j,a);a.then(function(b){M("use_cfr_monitor")&&Mo().requestComplete("generate_204",b)});
return a};
Qo.prototype.sendNetworkCheckRequest=Qo.prototype.La;Qo.prototype.listen=Qo.prototype.aa;Qo.prototype.enableErrorFlushing=Qo.prototype.Gc;Qo.prototype.getWindowStatus=Qo.prototype.Mc;Qo.prototype.networkStatusHint=Qo.prototype.ha;Qo.prototype.isNetworkAvailable=Qo.prototype.K;Qo.getInstance=Ro;function So(a){a=void 0===a?{}:a;$e.call(this);var b=this;this.j=this.s=0;this.l=Ro();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.gb?(this.gb=a.gb,c("networkstatus-online",function(){To(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){To(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){af(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){af(b,"publicytnetworkstatus-offline")})))}
t(So,$e);So.prototype.K=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
So.prototype.ha=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
So.prototype.La=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return M("skip_network_check_if_cfr")&&Mo().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ha((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.K())})):c?d.return(c(a)):d.return(!0)})};
function To(a,b){a.gb?a.j?(Wh.fa(a.s),a.s=Wh.S(function(){a.o!==b&&(af(a,b),a.o=b,a.j=P())},a.gb-(P()-a.j))):(af(a,b),a.o=b,a.j=P()):af(a,b)}
;var Uo;function Vo(){Sn.call(this,{O:{Cc:Ao,za:zo,Ub:wo,Sc:xo,Bb:yo,set:uo},M:Wo(),handleError:Nk,Ba:Ok,ia:Xo,now:P,sc:Po,Z:im(),yb:"publicytnetworkstatus-online",xb:"publicytnetworkstatus-offline",Ya:!0,Wa:.1,eb:Hk("potential_esf_error_limit",10),H:M,Ha:!(wm()&&Yo())});this.l=new Ah;M("networkless_immediately_drop_all_requests")&&Bo();Rn("LogsDatabaseV2")}
t(Vo,Sn);function Zo(){var a=B("yt.networklessRequestController.instance");a||(a=new Vo,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&Gn().then(function(b){a.G=b;Un(a);a.l.resolve();a.Ya&&Math.random()<=a.Wa&&a.G&&Fo(a.G);M("networkless_immediately_drop_sw_health_store")&&$o(a)}));
return a}
Vo.prototype.writeThenSend=function(a,b){b||(b={});wm()||(this.i=!1);Sn.prototype.writeThenSend.call(this,a,b)};
Vo.prototype.sendThenWrite=function(a,b,c){b||(b={});wm()||(this.i=!1);Sn.prototype.sendThenWrite.call(this,a,b,c)};
Vo.prototype.sendAndWrite=function(a,b){b||(b={});wm()||(this.i=!1);Sn.prototype.sendAndWrite.call(this,a,b)};
Vo.prototype.awaitInitialization=function(){return this.l.promise};
function $o(a){var b;x(function(c){if(!a.G)throw b=Lm("clearSWHealthLogsDb"),b;return c.return(Go(a.G).catch(function(d){a.handleError(d)}))})}
function Xo(a,b,c){M("use_cfr_monitor")&&ap(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P())}c&&0===Object.keys(b).length?Jo(a):nl(a,b)}
function Wo(){Uo||(Uo=new So({Rc:!0,Hc:!0}));return Uo}
function ap(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Mo().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Mo().requestComplete(a,!0);d(e,f)}}
function Yo(){return"www.youtube-nocookie.com"!==nc(document.location.toString())}
;var bp=!1,cp=0,dp=0,ep,fp=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:bp,potentialEsfErrorCounter:dp};z("ytNetworklessLoggingInitializationOptions",fp);
function gp(){var a;x(function(b){switch(b.i){case 1:return v(b,Gn(),2);case 2:a=b.j;if(!a||!wm()&&!M("nwl_init_require_datasync_id_killswitch")||!Yo()){b.u(0);break}bp=!0;fp.isNwlInitialized=bp;if(!M("use_new_nwl_initialization")){b.u(4);break}return v(b,Zo().awaitInitialization(),5);case 5:return b.return();case 4:return v(b,Rn("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return v(b,Ao(a),8);case 8:return v(b,Fo(a),7);case 7:hp();ip().K()&&jp();ip().aa("publicytnetworkstatus-online",
jp);ip().aa("publicytnetworkstatus-offline",kp);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return v(b,lp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return v(b,Bo(),0);b.u(0)}})}
function mp(a,b){function c(d){var e=ip().K();if(!np()||!d||e&&M("vss_networkless_bypass_write"))op(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};uo(f,d).then(function(g){f.id=g;ip().K()&&pp(f)}).catch(function(g){pp(f);
ip().K()?Nk(g):Po(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Gn().then(function(d){c(d)}):c(Fn())}
function qp(a,b){function c(d){if(np()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&Mo().requestComplete(e.url,!0);void 0!==e.id?zo(e.id,d):f=!0;M("vss_network_hint")&&ip().ha(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Mo().requestComplete(e.url,!1);h(k,m)}}op(e.url,e.options);
uo(e,d).then(function(k){e.id=k;f&&zo(e.id,d)}).catch(function(k){ip().K()?Nk(k):Po(k)})}else op(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Gn().then(function(d){c(d)}):c(Fn())}
function jp(){var a=Fn();if(!a)throw Lm("throttleSend");cp||(cp=Wh.S(function(){var b;return x(function(c){if(1==c.i)return v(c,wo("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,pp(b),3):(kp(),c.return());cp&&(cp=0,jp());c.i=0})},100))}
function kp(){Wh.fa(cp);cp=0}
function pp(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=Fn();if(!b)throw c=Lm("immediateSend"),c;if(void 0===a.id){e.u(2);break}return v(e,xo(a.id,b),3);case 3:(d=e.j)?a=d:Ok(Error("The request cannot be found in the database."));case 2:if(rp(a,2592E6)){e.u(4);break}Ok(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return v(e,zo(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=sp(a));var f=a;if(M("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P())}a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return v(e,zo(a.id,b),8);case 8:op(a.url,a.options,!!a.skipRetry),e.i=0}})}
function sp(a){var b=Fn();if(!b)throw Lm("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&Mo().requestComplete(a.url,!1);g=$n(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&tp()<=Hk("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||Mo().isEndpointCFR(a.url))){m.u(3);break}return v(m,ip().La(),3);case 3:if(ip().K()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return v(m,yo(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&tp()>Hk("potential_esf_error_limit",10))return m.return();B("ytNetworklessLoggingInitializationOptions")&&fp.potentialEsfErrorCounter++;dp++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?v(m,yo(a.id,b),12):v(m,zo(a.id,b),8);case 12:Wh.S(function(){ip().K()&&jp()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return M("use_cfr_monitor")&&Mo().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):v(h,zo(a.id,b),2);M("vss_network_hint")&&ip().ha(!0);d(e,f);h.i=0})};
return a}
function rp(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function hp(){var a=Fn();if(!a)throw Lm("retryQueuedRequests");wo("QUEUED",a).then(function(b){b&&!rp(b,12E4)?Wh.S(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,yo(b.id,a),2);hp();c.i=0})}):ip().K()&&jp()})}
function lp(){var a,b;return x(function(c){a=Fn();if(!a)throw b=Lm("clearSWHealthLogsDb"),b;return c.return(Go(a).catch(function(d){Nk(d)}))})}
function ip(){if(M("use_new_nwl"))return Wo();ep||(ep=new So({Rc:!0,Hc:!0}));return ep}
function op(a,b,c){c&&0===Object.keys(b).length?Jo(a):nl(a,b)}
function np(){return B("ytNetworklessLoggingInitializationOptions")?fp.isNwlInitialized:bp}
function tp(){return B("ytNetworklessLoggingInitializationOptions")?fp.potentialEsfErrorCounter:dp}
;function up(a){var b=this;this.config_=null;a?this.config_=a:Ml()&&(this.config_=Nl());em(function(){bm(b)},0,5E3)}
up.prototype.isReady=function(){!this.config_&&Ml()&&(this.config_=Nl());return!!this.config_};
function cm(a,b,c,d){function e(A){A=void 0===A?!1:A;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=$l(b,c,m,k)),E)){var F=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(O,R){am(E);F(O,R)};
c.onFetchSuccess=function(O,R){am(E);N(O,R)}}try{A&&d.retry&&!d.ac.bypassNetworkless?(g.method="POST",d.ac.writeThenSend?M("use_new_nwl_wts")?Zo().writeThenSend(u,g):mp(u,g):M("use_new_nwl_saw")?Zo().sendAndWrite(u,g):qp(u,g)):(g.method="POST",g.postParams||(g.postParams={}),nl(u,g))}catch(O){if("InvalidAccessError"==O.name)E&&(am(E),E=0),Ok(Error("An extension is blocking network request."));
else throw O;}E&&em(function(){bm(a)},0,5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ok(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Nk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,E){if(d.onError)d.onError(E)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Oc)&&(h=f);var k=a.config_.Qc||!1,m=Ul(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},w=a.config_.Pc&&f;w=w&&f.startsWith("Bearer");w||(r.key=a.config_.innertubeApiKey);var u=$k(""+h+q,r||{},!0);M("use_new_nwl")&&Zo().i||!M("use_new_nwl")&&
np()?En().then(function(A){e(A)}):e(!1)}
;var Hp=0,fq=Oc?"webkit":Nc?"moz":Lc?"ms":Kc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Hp});var gq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function hq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in gq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function iq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
hq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
hq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
hq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",pb);var jq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",jq);
function kq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var lq=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function mq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=kq(a,b,c,d);if(e)return e;e=++jq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new hq(h);if(!kf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new hq(h);
h.currentTarget=a;return c.call(a,h)};
g=Mk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),lq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function nq(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?lq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;var oq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function pq(a){this.F=a;this.j=null;this.o=0;this.v=null;this.s=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.J=mq(window,"mousemove",Wa(this.P,this));a=Wa(this.I,this);"function"===typeof a&&(a=Mk(a));this.R=window.setInterval(a,25)}
Za(pq,J);pq.prototype.P=function(a){void 0===a.i&&iq(a);var b=a.i;void 0===a.j&&iq(a);this.j=new ff(b,a.j)};
pq.prototype.I=function(){if(this.j){var a=oq();if(0!=this.o){var b=this.v,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.F();this.s=d}this.o=a;this.v=this.j;this.m=(this.m+1)%4}};
pq.prototype.C=function(){window.clearInterval(this.R);nq(this.J)};var qq={};
function rq(a){var b=void 0===a?{}:a;a=void 0===b.Wc?!1:b.Wc;b=void 0===b.Ic?!0:b.Ic;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&sq();mq(document,"keydown",sq);mq(document,"keyup",sq);mq(document,"mousedown",sq);mq(document,"mouseup",sq);a?mq(window,"touchmove",function(){tq("touchmove",200)},{passive:!0}):(mq(window,"resize",function(){tq("resize",200)}),b&&mq(window,"scroll",function(){tq("scroll",200)}));
new pq(function(){tq("mouse",100)});
mq(document,"touchstart",sq,{passive:!0});mq(document,"touchend",sq,{passive:!0})}}
function tq(a,b){qq[a]||(qq[a]=!0,Wh.S(function(){sq();qq[a]=!1},b))}
function sq(){null==B("_lact",window)&&rq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function uq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var vq=y.ytPubsubPubsubInstance||new K,wq=y.ytPubsubPubsubSubscribedKeys||{},xq=y.ytPubsubPubsubTopicToKeys||{},yq=y.ytPubsubPubsubIsSynchronous||{};function zq(a,b){var c=Aq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){wq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{yq[a]?f():gl(f,0)}catch(g){Nk(g)}},void 0);
wq[d]=!0;xq[a]||(xq[a]=[]);xq[a].push(d);return d}return 0}
function Bq(a){var b=Aq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete wq[c]}))}
function Cq(a,b){var c=Aq();c&&c.publish.apply(c,arguments)}
function Dq(a){var b=Aq();if(b)if(b.clear(a),a)Eq(a);else for(var c in xq)Eq(c)}
function Aq(){return y.ytPubsubPubsubInstance}
function Eq(a){xq[a]&&(a=xq[a],fb(a,function(b){wq[b]&&delete wq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ea;K.prototype.publish=K.prototype.oa;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",vq);z("ytPubsubPubsubTopicToKeys",xq);z("ytPubsubPubsubIsSynchronous",yq);z("ytPubsubPubsubSubscribedKeys",wq);function Fq(a){this.policy=a;this.store=[];this.i={}}
Fq.prototype.hb=function(a,b){this.store.push({payload:b,keys:a});b=[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.isLeader?"undefined":a.isLeader,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/");this.i[b]?this.i[b]++:this.i[b]=1;this.i[b]>=this.policy.maxBatchSize&&(this.policy.onBatchSizeExceeded(a),this.i[b]=0);return b};
Fq.prototype.Aa=function(a){for(var b=[],c=[],d=p(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=p(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?b.push(e.payload):c.push(e)}this.store=c;c=0;a=Gq(this,a);a=p(a);for(d=a.next();!d.done;d=a.next())d=d.value,c+=this.i[d],this.i[d]=0;c!==b.length&&Ok(new Q("Transport IMS extracted entries count != keyCounter sum",b.length,c));return b};
Fq.prototype.Vb=function(a){var b=Gq(this,a);a=0;b=p(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function Gq(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED",g="THIS_KEY_FIELD_NOT_FILLED";c=p(c);for(var h=c.next();!h.done;h=c.next())h=h.value,"auth"===h?d=Hq(b.auth):"isJspb"===h?e=JSON.stringify(b.isJspb):"isLeader"===h?f=JSON.stringify(b.isLeader):"cttAuthInfo"===h&&(g=Hq(b.cttAuthInfo));b=[];d=[d,e,f,g];a=p(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");g=!0;for(c=0;c<d.length;c++)if("THIS_KEY_FIELD_NOT_FILLED"!==
d[c]&&d[c]!==f[c]){g=!1;break}g&&b.push(e)}return b}
Fq.prototype.getSequenceCount=Fq.prototype.Vb;Fq.prototype.extractMatchingEntries=Fq.prototype.Aa;Fq.prototype.storePayload=Fq.prototype.hb;function Hq(a){return void 0===a?"undefined":a}
;var Iq=y.window;Iq.ytExports||(Iq.ytExports={logging:{transport:{leaderQueueLength:0,leaderChosen:!1}}});var Jq=Hk("initial_gel_batch_timeout",2E3),Kq=Math.pow(2,16)-1,Lq=!1,Mq=void 0;function Nq(){this.l=this.i=this.j=0}
var Oq=new Nq,Pq=new Nq,Qq=!0,Rq=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Rq);var Sq=new Map,Tq=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Tq);var Uq=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Uq);var Vq=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Vq);var Wq={};
function Xq(){var a=B("yt.logging.ims");a||(a=new Fq({maxBatchSize:Hk("tvhtml5_logging_max_batch")||Hk("web_logging_max_batch")||100,onBatchSizeExceeded:function(b){Yq({writeThenSend:!0},void 0,b.isJspb)}}),z("yt.logging.ims",a));
return a}
function Zq(){M("jspb_with_transport_leader")&&!Iq.ytExports.logging.transport.leaderChosen&&(Lq=Iq.ytExports.logging.transport.leaderChosen=!0,document.addEventListener("FLUSH_REQUEST",function(){Yq(void 0,void 0,!0)}))}
function $q(a,b){Zq();if("log_event"===a.endpoint){ar(a);var c=br(a);if(M("use_new_in_memory_storage")){Wq[c]=!0;var d={cttAuthInfo:c,isJspb:!1,isLeader:Lq};Xq().hb(d,a.payload);cr(b,[],c,!1,d)}else d=Rq.get(c)||[],Rq.set(c,d),d.push(a.payload),cr(b,d,c)}}
function dr(a,b){Zq();if("log_event"===a.endpoint){ar(void 0,a);var c=br(a,!0);if(M("jspb_with_transport_leader")&&Lq)if(M("use_new_in_memory_storage")){Wq[c]=!0;var d={cttAuthInfo:c,isJspb:!0,isLeader:Lq};Xq().hb(d,a.payload);Iq.ytExports.logging.transport.leaderQueueLength++;cr(b,[],c,!0,d)}else d=Sq.get(c)||[],Sq.set(c,d),Iq.ytExports.logging.transport.leaderQueueLength++,d.push(a.payload),cr(b,d,c,!0);else M("use_new_in_memory_storage")?(Wq[c]=!0,d={cttAuthInfo:c,isJspb:!0,isLeader:Lq},Xq().hb(d,
a.payload.toJSON()),cr(b,[],c,!0,d)):(d=Tq.get(c)||[],Tq.set(c,d),a=a.payload.toJSON(),d.push(a),cr(b,d,c,!0))}}
function cr(a,b,c,d,e){d=void 0===d?!1:d;a&&(Mq=new a);a=Hk("tvhtml5_logging_max_batch")||Hk("web_logging_max_batch")||100;var f=P(),g=d?Pq.l:Oq.l,h=Tq.get(c)||[];b=b.length;e&&(e=ub(e),delete e.isLeader,b=Xq().Vb(e));M("jspb_with_transport_leader")&&(Lq&&b+h.length>=a||!Lq&&Iq.ytExports.logging.transport.leaderQueueLength+b>=a)||b>=a?Yq({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=f-g&&(er(d),d?Pq.l=f:Oq.l=f)}
function fr(a,b){Zq();if("log_event"===a.endpoint){ar(a);var c=br(a),d=new Map;d.set(c,[a.payload]);b&&(Mq=new b);return new xf(function(e,f){Mq&&Mq.isReady()?gr(d,Mq,e,f,{bypassNetworkless:!0},!0):e()})}}
function hr(a,b){Zq();if("log_event"===a.endpoint){ar(void 0,a);var c=br(a,!0),d=new Map,e=new Map;M("jspb_with_transport_leader")&&Lq?e.set(c,[a.payload]):d.set(c,[a.payload.toJSON()]);b&&(Mq=new b);return new xf(function(f){Mq&&Mq.isReady()?ir(d,e,Mq,f,{bypassNetworkless:!0},!0):f()})}}
function br(a,b){var c="";if(a.Ga)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new qk;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Td(d,2,rk,c.playlistId);Vq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Uq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Yq(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new xf(function(d,e){c?(hl(Pq.j),hl(Pq.i),Pq.i=0):(hl(Oq.j),hl(Oq.i),Oq.i=0);if(M("jspb_with_transport_leader")&&!Lq&&c)document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")),d();else if(Mq&&Mq.isReady())if(M("use_new_in_memory_storage"))a:{var f=a,g=c,h=Mq;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map,q=new Map;if(void 0!==b){if(g){e=Xq().Aa({isJspb:g,cttAuthInfo:b,isLeader:!1});k.set(b,e);if(M("jspb_with_transport_leader")){e=
Xq().Aa({isJspb:!0,cttAuthInfo:b,isLeader:!0});if(0===e.length)break a;m.set(b,e)}ir(k,m,h,d,f)}}else if(g){e=p(Object.keys(Wq));for(g=e.next();!g.done;g=e.next())q=g.value,g=Xq().Aa({isJspb:!0,isLeader:!1,cttAuthInfo:q}),0<g.length&&k.set(q,g),M("jspb_with_transport_leader")&&(g=Xq().Aa({isJspb:!0,isLeader:!0,cttAuthInfo:q}),0<g.length&&m.set(q,g)),Wq[q]=!1;ir(k,m,h,d,f)}else{k=p(Object.keys(Wq));for(g=k.next();!g.done;g=k.next())m=g.value,g=Xq().Aa({isJspb:!1,cttAuthInfo:m}),0!==g.length&&q.set(m,
g);gr(q,h,d,e,f)}}else f=a,k=c,h=Mq,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=new Map,m=Tq.get(b)||[],e.set(b,m),M("jspb_with_transport_leader")&&(m=Sq.get(b)||[],k.set(b,m)),ir(e,k,h,d,f),M("jspb_with_transport_leader")&&Sq.delete(b),Tq.delete(b)):(k=new Map,m=Rq.get(b)||[],k.set(b,m),gr(k,h,d,e,f),Rq.delete(b)):k?(ir(Tq,Sq,h,d,f),Tq.clear(),M("jspb_with_transport_leader")&&Sq.clear()):(gr(Rq,h,d,e,f),Rq.clear());else er(c),d()})}
function er(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Oq.i||a&&!Pq.i)){var b=gl(function(){Yq({writeThenSend:!0},void 0,a)},6E4);
a?Pq.i=b:Oq.i=b}hl(a?Pq.j:Oq.j);b=L("LOGGING_BATCH_TIMEOUT",Hk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Qq&&(b=Jq);b=gl(function(){Yq({writeThenSend:!0},void 0,a)},b);
a?Pq.j=b:Oq.j=b}
function gr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(P()),h=a.size;a=p(a);for(var k=a.next();!k.done;k=a.next()){var m=p(k.value);k=m.next().value;var q=m.next().value;m=k;k=vb({context:Ol(b.config_||Nl())});if(!Pa(q)&&!M("throw_err_when_logevent_malformed_killswitch")){Nk(new Q("LogEvent value at event was not an array",q));d();break}k.events=q;(q=Uq[m])&&jr(k,m,q);delete Uq[m];m="visitorOnlyApprovedKey"===m;kr(k,g,m);lr(e);q=function(){h--;h||c()};
var r=function(){h--;h||c()};
try{cm(b,"log_event",k,mr(e,m,q,r,f)),Qq=!1}catch(w){Nk(w),d()}}}
function ir(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(P()),h=a.size+b.size,k=new Map([].concat(ha(a),ha(b)));k=p(k);for(var m=k.next();!m.done;m=k.next()){var q=p(m.value).next().value,r=a.get(q),w=b.get(q)||[];m=new sk;var u=Tl(c.config_||Nl());G(m,Zi,1,u);r=r?nr(r):[];r=p(r);for(u=r.next();!u.done;u=r.next())$d(m,3,Tj,u.value);w=p(w);for(r=w.next();!r.done;r=w.next())$d(m,3,Tj,r.value);(w=Vq[q])&&or(m,q,w);delete Vq[q];q="visitorOnlyApprovedKey"===q;pr(m,g,q);lr(e);m=ce(m);q=mr(e,q,function(){Iq.ytExports.logging.transport.leaderQueueLength=
0;h--;h||d()},function(){Iq.ytExports.logging.transport.leaderQueueLength=0;
h--;h||d()},f);
q.headers["Content-Type"]="application/json+protobuf";q.postBodyFormat="JSPB";q.postBody=m;cm(c,"log_event","",q);Qq=!1}}
function lr(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function mr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,ac:a,Ga:b,xq:!!e,headers:{},postBodyFormat:"",postBody:""};M("use_request_time_ms_header")&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));return a}
function kr(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=qr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function pr(a,b,c){D(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=qr();var d=new Wj;D(d,1,b);D(d,2,c);G(a,Wj,5,d)}}
function qr(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Kq/2));a++;a>Kq&&(a=1);Ek("BATCH_CLIENT_COUNTER",a);return a}
function jr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function or(a,b,c){if(Pd(c,1===Ud(c,rk)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,qk,4,c);a=Vd(a,Zi,1)||new Zi;c=Vd(a,Xi,3)||new Xi;var e=new Wi;e.setToken(b);D(e,1,d);$d(c,12,Wi,e);G(a,Xi,3,c)}
function nr(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Tj(a[c]))}catch(d){Nk(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function ar(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var rr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",rr);function sr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=uq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ba&&(a=e.context,b=d.ba,b={index:tr(b),groupKey:b},a.sequence=b,d.Rb&&delete rr[d.ba]);(d.kc?fr:$q)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,Ga:d.Ga},c)}
function ur(a){Yq(void 0,void 0,void 0===a?!1:a)}
function tr(a){rr[a]=a in rr?rr[a]+1:0;return rr[a]}
;var vr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",vr);function wr(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=uq();d=new Sj;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.ba){e=c.ba;var f=tr(e),g=new Rj;D(g,2,f);D(g,1,e);G(d,Rj,3,g);c.Rb&&delete vr[c.ba]}G(a,Sj,33,d);(c.kc?hr:dr)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Ga:c.Ga},b)}
;function xr(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);wr(a,c?null:up,b)}
;function yr(a,b){var c=new Tj;Yd(c,Gj,72,Uj,a);xr(c,b)}
function zr(a,b,c){var d=new Tj;Yd(d,Fj,73,Uj,a);c?wr(d,c,b):xr(d,b)}
function Ar(a,b,c){var d=new Tj;Yd(d,Ej,78,Uj,a);c?wr(d,c,b):xr(d,b)}
function Br(a,b,c){var d=new Tj;Yd(d,Hj,208,Uj,a);c?wr(d,c,b):xr(d,b)}
function Cr(a,b,c){var d=new Tj;Yd(d,xj,156,Uj,a);c?wr(d,c,b):xr(d,b)}
function Dr(a,b,c){var d=new Tj;Yd(d,Bj,215,Uj,a);c?wr(d,c,b):xr(d,b)}
function Er(a,b,c){var d=new Tj;Yd(d,tj,111,Uj,a);c?wr(d,c,b):xr(d,b)}
;function tm(a,b,c){c=void 0===c?{}:c;if(M("migrate_events_to_ts")){c=void 0===c?{}:c;var d=up;L("ytLoggingEventsDefaultDisabled",!1)&&up===up&&(d=null);sr(a,b,d,c)}else d=up,L("ytLoggingEventsDefaultDisabled",!1)&&up==up&&(d=null),sr(a,b,d,c)}
;var Fr=[{wb:function(a){return"Cannot read property '"+a.key+"'"},
cb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{wb:function(a){return"Cannot call '"+a.key+"'"},
cb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{wb:function(a){return a.key+" is not defined"},
cb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Hr={ma:[],la:[{callback:Gr,weight:500}]};function Gr(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ir(){this.la=[];this.ma=[]}
var Jr;function Kr(){if(!Jr){var a=Jr=new Ir;a.ma.length=0;a.la.length=0;Hr.ma&&a.ma.push.apply(a.ma,Hr.ma);Hr.la&&a.la.push.apply(a.la,Hr.la)}return Jr}
;var Lr=new K;function Mr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Nr(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Nr(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Nr(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Nr(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Or(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Pr(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Mr(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Pr(e+".ve",f,g,h):0;d+=g;d+=Pr(e,a[e],b,c);if(500<d)break}}else c[b]=Qr(a),d+=c[b].length;else c[b]=Qr(a),d+=c[b].length;return d}
function Pr(a,b,c,d){c+="."+a;a=Qr(b);d[c]=a;return c.length+a.length}
function Qr(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Rr=new Set,Sr=0,Tr=0,Ur=0,Vr=[],Wr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function sm(a){Xr(a)}
function Yr(a){Xr(a,"WARNING")}
function Xr(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Sr)){var m=Vr,q=te(a),r=q.message||"Unknown Error",w=q.name||"UnknownError",u=q.stack||a.j||"Not available";if(u.startsWith(w+": "+r)){var A=u.split("\n");A.shift();u=A.join("\n")}var E=q.lineNumber||"Not available",F=q.fileName||"Not available",N=u,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(O=Or(a.args[R],"params."+R,g,O),500<=O);R++);else if(a.hasOwnProperty("params")&&
a.params){var U=a.params;if("object"===typeof a.params)for(var ca in U){if(U[ca]){var lb="params."+ca,Xa=Qr(U[ca]);g[lb]=Xa;O+=lb.length+Xa.length;if(500<O)break}}else g.params=Qr(U)}if(m.length)for(var ja=0;ja<m.length&&!(O=Or(m[ja],"params.context."+ja,g,O),500<=O);ja++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:r,name:w,lineNumber:E,fileName:F,stack:N,params:g,sampleWeight:1},ka=Number(a.columnNumber);isNaN(ka)||(H.lineNumber=H.lineNumber+
":"+ka);if("IGNORED"===a.level)var ma=0;else a:{for(var Fe=Kr(),Ge=p(Fe.ma),wd=Ge.next();!wd.done;wd=Ge.next()){var xd=wd.value;if(H.message&&H.message.match(xd.Fq)){ma=xd.weight;break a}}for(var yd=p(Fe.la),va=yd.next();!va.done;va=yd.next()){var vp=va.value;if(vp.callback(H)){ma=vp.weight;break a}}ma=1}H.sampleWeight=ma;for(var wp=p(Fr),Xj=wp.next();!Xj.done;Xj=wp.next()){var Yj=Xj.value;if(Yj.cb[H.name])for(var xp=p(Yj.cb[H.name]),Zj=xp.next();!Zj.done;Zj=xp.next()){var yp=Zj.value,Tg=H.message.match(yp.regexp);
if(Tg){H.params["params.error.original"]=Tg[0];for(var ak=yp.groups,zp={},zd=0;zd<ak.length;zd++)zp[ak[zd]]=Tg[zd+1],H.params["params.error."+ak[zd]]=Tg[zd+1];H.message=Yj.wb(zp);break}}}H.params||(H.params={});var Ap=Kr();H.params["params.errorServiceSignature"]="msg="+Ap.ma.length+"&cb="+Ap.la.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Cb("sample").constructor!==
Ab&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!Rr.has(H.message)){if("ERROR"===h){Lr.oa("handleError",H);if(M("record_app_crashed_web")&&0===Ur&&1===H.sampleWeight)if(Ur++,M("errors_via_jspb")){var bk=new qj;D(bk,1,1);if(!M("report_client_error_with_app_crash_ks")){var Bp=new lj;D(Bp,1,H.message);var Cp=new mj;G(Cp,lj,3,Bp);var Dp=new nj;G(Dp,mj,5,Cp);var Ep=new oj;G(Ep,nj,9,Dp);G(bk,oj,4,Ep)}var Fp=new Tj;Yd(Fp,qj,20,
Uj,bk);xr(Fp)}else{var Gp={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Gp.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});tm("appCrashed",Gp)}Tr++}else"WARNING"===h&&Lr.oa("handleWarning",H);if(M("kevlar_gel_error_routing"))a:{var He=h;if(M("errors_via_jspb")){if(Zr())var Ip=void 0;else{var Ad=new ij;D(Ad,1,H.stack);H.fileName&&D(Ad,4,H.fileName);var Jb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Jb.length&&(1!==
Jb.length||isNaN(Number(Jb[0]))?2!==Jb.length||isNaN(Number(Jb[0]))||isNaN(Number(Jb[1]))||(D(Ad,2,Number(Jb[0])),D(Ad,3,Number(Jb[1]))):D(Ad,2,Number(Jb[0])));var Ac=new lj;D(Ac,1,H.message);D(Ac,3,H.name);D(Ac,6,H.sampleWeight);"ERROR"===He?D(Ac,2,2):"WARNING"===He?D(Ac,2,1):D(Ac,2,0);var ck=new jj;D(ck,1,!0);Yd(ck,ij,3,kj,Ad);var cc=new fj;D(cc,3,window.location.href);for(var Jp=L("FEXP_EXPERIMENTS",[]),dk=0;dk<Jp.length;dk++){var Ov=Jp[dk];Cd(cc);Qd(cc,5).push(Ov)}var ek=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Fk()&&ek)for(var Kp=p(Object.keys(ek)),Bc=Kp.next();!Bc.done;Bc=Kp.next()){var Lp=Bc.value,fk=new hj;D(fk,1,Lp);fk.setValue(String(ek[Lp]));$d(cc,4,hj,fk)}var gk=H.params;if(gk){var Mp=p(Object.keys(gk));for(Bc=Mp.next();!Bc.done;Bc=Mp.next()){var Np=Bc.value,hk=new hj;D(hk,1,"client."+Np);hk.setValue(String(gk[Np]));$d(cc,4,hj,hk)}}var Op=L("SERVER_NAME"),Pp=L("SERVER_VERSION");if(Op&&Pp){var ik=new hj;D(ik,1,"server.name");ik.setValue(Op);$d(cc,4,hj,ik);var jk=new hj;D(jk,1,"server.version");
jk.setValue(Pp);$d(cc,4,hj,jk)}var Ug=new mj;G(Ug,fj,1,cc);G(Ug,jj,2,ck);G(Ug,lj,3,Ac);Ip=Ug}var Qp=Ip;if(!Qp)break a;var Rp=new Tj;Yd(Rp,mj,163,Uj,Qp);xr(Rp)}else{if(Zr())var Sp=void 0;else{var Ie={stackTrace:H.stack};H.fileName&&(Ie.filename=H.fileName);var Kb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Kb.length&&(1!==Kb.length||isNaN(Number(Kb[0]))?2!==Kb.length||isNaN(Number(Kb[0]))||isNaN(Number(Kb[1]))||(Ie.lineNumber=Number(Kb[0]),Ie.columnNumber=Number(Kb[1])):Ie.lineNumber=
Number(Kb[0]));var kk={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===He?kk.level="ERROR_LEVEL_ERROR":"WARNING"===He&&(kk.level="ERROR_LEVEL_WARNNING");var Pv={isObfuscated:!0,browserStackInfo:Ie},Bd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(Bd.experimentIds=L("FEXP_EXPERIMENTS"));var lk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Fk()&&lk)for(var Tp=p(Object.keys(lk)),Cc=Tp.next();!Cc.done;Cc=Tp.next()){var Up=
Cc.value;Bd.kvPairs.push({key:Up,value:String(lk[Up])})}var mk=H.params;if(mk){var Vp=p(Object.keys(mk));for(Cc=Vp.next();!Cc.done;Cc=Vp.next()){var Wp=Cc.value;Bd.kvPairs.push({key:"client."+Wp,value:String(mk[Wp])})}}var Xp=L("SERVER_NAME"),Yp=L("SERVER_VERSION");Xp&&Yp&&(Bd.kvPairs.push({key:"server.name",value:Xp}),Bd.kvPairs.push({key:"server.version",value:Yp}));Sp={errorMetadata:Bd,stackTrace:Pv,logMessage:kk}}var Zp=Sp;if(!Zp)break a;tm("clientError",Zp)}if("ERROR"===He||M("errors_flush_gel_always_killswitch"))b:if(M("migrate_events_to_ts"))c:{if(M("web_fp_via_jspb")&&
(ur(!0),!M("web_fp_via_jspb_and_json")))break c;ur()}else{if(M("web_fp_via_jspb")&&(ur(!0),!M("web_fp_via_jspb_and_json")))break b;ur()}}if(!M("suppress_error_204_logging")){var Je=H.params||{},dc={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":Je.name},postParams:{url:L("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};Je.version&&(dc["client.version"]=Je.version);if(dc.postParams){H.stack&&(dc.postParams.stack=
H.stack);for(var $p=p(Object.keys(Je)),nk=$p.next();!nk.done;nk=$p.next()){var aq=nk.value;dc.postParams["client."+aq]=Je[aq]}var ok=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(ok)for(var bq=p(Object.keys(ok)),pk=bq.next();!pk.done;pk=bq.next()){var cq=pk.value;dc.postParams[cq]=ok[cq]}var dq=L("SERVER_NAME"),eq=L("SERVER_VERSION");dq&&eq&&(dc.postParams["server.name"]=dq,dc.postParams["server.version"]=eq)}nl(L("ECATCHER_REPORT_HOST","")+"/error_204",dc)}try{Rr.add(H.message)}catch(rx){}Sr++}}}}
function Zr(){for(var a=p(Wr),b=a.next();!b.done;b=a.next())if(km(b.value.toLowerCase()))return!0;return!1}
function $r(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ha(b))}
;function as(){this.register=new Map}
function bs(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Iq("ABORTED")}
as.prototype.clear=function(){bs(this);this.register.clear()};
var cs=new as;var ds=Date.now().toString();
function es(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ds)for(a=1,b=0;b<ds.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ds.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var fs=y.ytLoggingDocDocumentNonce_;fs||(fs=es(),z("ytLoggingDocDocumentNonce_",fs));var gs=fs;var hs={Hh:0,le:1,we:2,Bl:3,Jh:4,Op:5,qm:6,Xn:7,tn:8,Ln:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function is(a){this.i=a}
function js(a){return new is({trackingParams:a})}
is.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
is.prototype.getAsJspb=function(){var a=new sj;if(void 0!==this.i.trackingParams){var b=this.i.trackingParams;null!=b&&b instanceof jd&&id();D(a,1,b)}else void 0!==this.i.veType&&D(a,2,this.i.veType),void 0!==this.i.veCounter&&D(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&D(a,3,this.i.elementIndex);void 0!==this.i.dataElement&&(b=this.i.dataElement.getAsJspb(),G(a,sj,7,b));void 0!==this.i.youtubeData&&G(a,Li,8,this.i.jspbYoutubeData);return a};
is.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
is.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function ks(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function ls(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ms(a){return L(ls(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",ms);function ns(a){return(a=ms(void 0===a?0:a))?new is({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function os(){var a=L("csn-to-ctt-auth-info");a||(a={},Ek("csn-to-ctt-auth-info",a));return a}
function ps(a){a=L(ks(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",ps);function qs(a,b,c){var d=os();(c=ps(c))&&delete d[c];b&&(d[a]=b)}
function rs(a){return os()[a]}
z("yt_logging_screen.getCttAuthInfo",rs);
function ss(a,b,c,d){c=void 0===c?0:c;if(a!==L(ks(c))||b!==L(ls(c)))if(qs(a,d,c),Ek(ks(c),a),Ek(ls(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new tj;D(e,1,gs);D(e,2,a);M("use_default_heartbeat_client")?Er(e):Er(e,void 0,up)}else e={clientDocumentNonce:gs,clientScreenNonce:a},M("use_default_heartbeat_client")?tm("foregroundHeartbeatScreenAssociated",e):sr("foregroundHeartbeatScreenAssociated",e,up)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",ss);var ts=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",ts);function us(a){zk(ts,arguments)}
;var vs={ke:3611,wd:27686,xd:85013,yd:23462,Ad:42016,Bd:62407,Cd:26926,zd:43781,Dd:51236,Ed:79148,Fd:50160,Gd:77504,Sd:153587,Td:87907,Ud:18630,Vd:54445,Wd:80935,Xd:152172,Yd:105675,Zd:150723,ae:37521,be:147285,ce:47786,de:98349,ee:123695,ge:6827,he:29434,ie:7282,je:124448,ne:32276,me:76278,oe:147868,pe:147869,qe:93911,re:106531,se:27259,te:27262,ue:27263,xe:21759,ye:27107,ze:62936,Ae:49568,Be:38408,Ce:80637,De:68727,Ee:68728,Fe:80353,Ge:80356,He:74610,Ie:45707,Je:83962,Ke:83970,Le:46713,Me:89711,
Ne:74612,Oe:155792,Pe:93265,Qe:74611,Re:131380,Te:128979,Ue:139311,Ve:128978,Se:131391,We:105350,Ye:139312,Ze:134800,Xe:131392,bf:113533,cf:93252,df:99357,ff:94521,gf:114252,hf:113532,jf:94522,ef:94583,kf:88E3,lf:139580,mf:93253,nf:93254,pf:94387,qf:94388,rf:93255,sf:97424,af:72502,tf:110111,uf:76019,wf:117092,xf:117093,vf:89431,yf:110466,zf:77240,Af:60508,Bf:148123,Cf:148124,Df:137401,Ef:137402,Ff:137046,Gf:73393,Hf:113534,If:92098,Jf:131381,Kf:84517,Lf:83759,Mf:80357,Nf:86113,Of:72598,Pf:72733,
Qf:107349,Rf:124275,Sf:118203,Tf:133275,Uf:152569,Vf:156651,Wf:133274,Xf:133272,Yf:133273,Zf:133276,ag:144507,cg:143247,dg:156652,eg:143248,fg:143249,gg:143250,hg:143251,ig:156653,jg:144401,lg:117431,kg:133797,mg:153964,ng:128572,og:133405,pg:117429,qg:117430,rg:117432,sg:120080,tg:117259,ug:156655,vg:156654,wg:121692,xg:145656,yg:156656,zg:145655,Ag:145653,Bg:145654,Cg:145657,Dg:132972,Eg:133051,Fg:133658,Gg:132971,Hg:97615,Jg:143359,Ig:143356,Lg:143361,Kg:143358,Ng:143360,Mg:143357,Og:142303,Pg:143353,
Qg:143354,Rg:144479,Sg:143355,Tg:31402,Vg:133624,Wg:146477,Xg:133623,Yg:133622,Ug:133621,Zg:84774,ah:95117,bh:150497,dh:98930,eh:98931,fh:98932,gh:43347,hh:129889,ih:149123,jh:45474,kh:100352,lh:84758,mh:98443,nh:117985,oh:74613,ph:155911,qh:74614,rh:64502,sh:136032,th:74615,uh:74616,vh:122224,wh:74617,xh:77820,yh:74618,zh:93278,Ah:93274,Bh:93275,Ch:93276,Dh:22110,Eh:29433,Fh:133798,Gh:132295,Ih:120541,Kh:82047,Lh:113550,Mh:75836,Nh:75837,Oh:42352,Ph:84512,Qh:76065,Rh:75989,Wh:16623,Xh:32594,Yh:27240,
Zh:32633,ai:74858,bi:156999,di:3945,ci:16989,fi:45520,gi:25488,hi:25492,ii:25494,ji:55760,ki:14057,li:18451,mi:57204,ni:57203,oi:17897,ri:57205,si:18198,ti:17898,vi:17909,wi:43980,xi:46220,yi:11721,zi:147994,Ai:49954,Bi:96369,Ci:3854,Di:151633,Ei:56251,Fi:25624,Gi:152036,Xi:16906,Yi:99999,Zi:68172,aj:27068,bj:47973,cj:72773,dj:26970,ej:26971,fj:96805,gj:17752,hj:73233,ij:109512,jj:22256,kj:14115,lj:22696,mj:89278,nj:89277,oj:109513,pj:43278,qj:43459,rj:43464,sj:89279,tj:43717,uj:55764,vj:22255,wj:147912,
xj:89281,yj:40963,zj:43277,Aj:43442,Bj:91824,Cj:120137,Dj:96367,Ej:36850,Fj:72694,Gj:37414,Hj:36851,Jj:124863,Ij:121343,Kj:73491,Lj:54473,Mj:43375,Nj:46674,Oj:143815,Pj:139095,Qj:144402,Rj:149968,Sj:149969,Tj:32473,Uj:72901,Vj:72906,Wj:50947,Xj:50612,Yj:50613,Zj:50942,ak:84938,bk:84943,ck:84939,dk:84941,ek:84944,fk:84940,gk:84942,hk:35585,ik:51926,jk:79983,kk:63238,lk:18921,mk:63241,nk:57893,pk:41182,qk:135732,rk:33424,sk:22207,tk:42993,uk:36229,vk:22206,wk:22205,xk:18993,yk:19001,zk:18990,Ak:18991,
Bk:18997,Ck:18725,Dk:19003,Ek:36874,Fk:44763,Gk:33427,Hk:67793,Ik:22182,Jk:37091,Kk:34650,Lk:50617,Mk:47261,Nk:22287,Ok:25144,Pk:97917,Qk:62397,Rk:150871,Sk:150874,Tk:125598,Uk:137935,Vk:36961,Wk:108035,Xk:27426,Yk:27857,Zk:27846,al:27854,bl:69692,dl:61411,fl:39299,il:38696,jl:62520,kl:36382,ll:108701,ml:50663,nl:36387,ol:14908,pl:37533,ql:105443,rl:61635,sl:62274,ul:133818,vl:65702,wl:65703,xl:65701,yl:76256,zl:37671,Al:49953,Cl:36216,Dl:28237,El:39553,Fl:29222,Gl:26107,Hl:38050,Il:26108,Kl:120745,
Jl:26109,Ll:26110,Ml:66881,Nl:28236,Ol:14586,Pl:57929,Ql:74723,Rl:44098,Sl:44099,Vl:23528,Wl:61699,Tl:134104,Ul:134103,Xl:59149,Yl:101951,Zl:97346,am:118051,bm:95102,cm:64882,dm:119505,em:63595,fm:63349,gm:95101,hm:75240,im:27039,jm:68823,km:21537,lm:83464,mm:75707,nm:83113,om:101952,pm:101953,rm:79610,sm:125755,tm:24402,um:24400,vm:32925,xm:57173,wm:156421,ym:122502,zm:145268,Am:138480,Bm:64423,Cm:64424,Dm:33986,Em:100828,Fm:129089,Gm:21409,Km:135155,Lm:135156,Mm:135157,Nm:135158,Om:135159,Pm:135160,
Qm:135161,Rm:135162,Sm:135163,Tm:135164,Um:135165,Vm:135166,Hm:11070,Im:11074,Jm:17880,Wm:14001,Ym:30709,Zm:30707,an:30711,bn:30710,cn:30708,Xm:26984,dn:146143,en:63648,fn:63649,gn:51879,hn:111059,jn:5754,kn:20445,ln:151308,mn:151152,pn:130975,nn:130976,qn:110386,rn:113746,sn:66557,un:17310,vn:28631,wn:21589,xn:154946,yn:68012,zn:60480,An:138664,Bn:141121,Cn:31571,Dn:141978,En:150105,Fn:150106,Gn:150107,Hn:150108,In:76980,Jn:41577,Kn:45469,Mn:38669,Nn:13768,On:13777,Pn:141842,Qn:62985,Rn:4724,Sn:59369,
Tn:43927,Un:43928,Vn:12924,Wn:100355,Zn:56219,ao:27669,bo:10337,Yn:47896,co:122629,fo:139723,eo:139722,ho:121258,jo:107598,ko:127991,lo:96639,mo:107536,no:130169,oo:96661,po:145188,qo:96658,ro:116646,so:121122,to:96660,uo:127738,vo:127083,wo:147842,xo:104443,yo:96659,zo:147595,Ao:106442,Bo:134840,Co:63667,Do:63668,Eo:63669,Fo:130686,Go:147036,Ho:78314,Io:147799,Jo:148649,Ko:55761,Lo:127098,Mo:134841,No:96368,Oo:67374,Po:48992,Qo:146176,Ro:49956,So:31961,To:26388,Uo:23811,Vo:5E4,Wo:126250,Xo:96370,
Yo:47355,Zo:47356,ap:37935,bp:45521,cp:21760,ep:83769,fp:49977,gp:49974,hp:93497,ip:93498,jp:34325,kp:140759,lp:115803,mp:123707,np:100081,qp:35309,rp:68314,sp:25602,tp:100339,up:143516,vp:59018,wp:18248,xp:50625,yp:9729,zp:37168,Ap:37169,Bp:21667,Cp:16749,Dp:18635,Ep:39305,Fp:18046,Gp:53969,Hp:8213,Ip:93926,Jp:102852,Kp:110099,Lp:22678,Mp:69076,Np:137575,Pp:139224,Qp:100856,Rp:154430,Sp:17736,Tp:3832,Up:147111,Vp:55759,Wp:64031,cq:93044,fq:93045,gq:34388,hq:17657,iq:17655,jq:39579,kq:39578,lq:77448,
mq:8196,nq:11357,oq:69877,pq:8197,qq:156512,rq:156509,sq:82039};function ws(){var a=ub(xs),b;return(new xf(function(c,d){a.onSuccess=function(e){fl(e)?c(new ys(e)):d(new zs("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new zs("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new zs("Request timed out","net.timeout",e))};
b=nl("//googleads.g.doubleclick.net/pagead/id",a)})).ib(function(c){c instanceof Ef&&b.abort();
return Cf(c)})}
function zs(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
t(zs,ab);function ys(a){this.xhr=a}
;function As(){this.i=0;this.ja=null}
As.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.ja))&&"function"===typeof a.then?a:Bs(a):2===this.i&&b?(a=b.call(c,this.ja))&&"function"===typeof a.then?a:Cs(a):this};
As.prototype.getValue=function(){return this.ja};
As.prototype.$goog_Thenable=!0;function Cs(a){var b=new As;a=void 0===a?null:a;b.i=2;b.ja=void 0===a?null:a;return b}
function Bs(a){var b=new As;a=void 0===a?null:a;b.i=1;b.ja=void 0===a?null:a;return b}
;function Ds(a,b){if(a)return a[b.name]}
;function Es(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:al(a)?"same-origin":"cors",credentials:al(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Fs(){return rg()||jm&&km("applewebkit")&&!km("version")&&(!km("safari")||km("gsa/"))||Pc&&km("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function Gs(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Xh)if(Xh[c]==b.embeddedPlayerMode){b=Xh[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Hs(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Is;this.isTimeout=a instanceof zs&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ef}
t(Hs,ab);Hs.prototype.name="BiscottiError";function Is(){ab.call(this,"Biscotti ID is missing from server")}
t(Is,ab);Is.prototype.name="BiscottiMissingError";var xs={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Js=null;function Ks(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Fs())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==sb(a))return Error("Biscotti ID is not available in private embed mode");if(Gs(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Qk(){var a=Ks();if(void 0!==a)return Cf(a);Js||(Js=ws().then(Ls).ib(function(b){return Ms(2,b)}));
return Js}
function Ls(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Is;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Is;a=a.id;Rk(a);Js=Bs(a);Ns(18E5,2);return a}
function Ms(a,b){b=new Hs(b);Rk("");Js=Cs(b);0<a&&Ns(12E4,a-1);throw b;}
function Ns(a,b){gl(function(){ws().then(Ls,function(c){return Ms(b,c)}).ib(cb)},a)}
function Os(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Qk()}catch(b){return Cf(b)}}
;function Ps(a){if("1"!=sb(L("PLAYER_VARS",{}))){a&&Pk();try{Os().then(function(){},function(){}),gl(Ps,18E5)}catch(b){Nk(b)}}}
;function Qs(){this.od=!0}
function Rs(a){var b={},c=tg([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Dk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Dk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Ss=Symbol("injectionDeps");function Ts(a){this.name=a}
Ts.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Us(){this.key=Vs}
function Ws(){this.providers=new Map;this.i=new Map}
Ws.prototype.resolve=function(a){return a instanceof Us?Xs(this,a.key,[],!0):Xs(this,a,[])};
function Xs(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.qc)var e=d.qc;else if(d.vd)e=d[Ss]?Ys(a,d[Ss],c):[],e=d.vd.apply(d,ha(e));else if(d.pc){e=d.pc;var f=e[Ss]?Ys(a,e[Ss],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ha(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Oq||a.i.set(b,e);
return e}
function Ys(a,b,c){return b?b.map(function(d){return d instanceof Us?Xs(a,d.key,c,!0):Xs(a,d,c)}):[]}
;var Zs;function $s(){Zs||(Zs=new Ws);return Zs}
;var at={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var bt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function ct(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;lc(mc(5,a));try{var b=Zk(a).theme;return bt.get(b)||null}catch(c){}return null}
;function dt(){this.i={};if(this.j=yl()){var a=pg.get("CONSISTENCY",void 0);a&&et(this,{encryptedTokenJarContents:a})}}
dt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ga.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];et(this,a)}};
function et(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&xl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ft=window.location.hostname.split(".").slice(-2).join(".");function gt(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=ht(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var jt;gt.getInstance=function(){jt=B("yt.clientLocationService.instance");jt||(jt=new gt,z("yt.clientLocationService.instance",jt));return jt};
gt.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
gt.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=ht(this))&&this.i.set("yt-location-playability-token",a,15552E3):xl("YT_CL",JSON.stringify({loctok:a}),15552E3,ft,!0))};
function ht(a){return void 0===a.i?new Wl("yt-client-location"):a.i}
gt.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
gt.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function kt(a,b){var c,d=null==(c=Ds(a,dj))?void 0:c.signal;if(d&&b.Ma&&(c=b.Ma[d]))return c();var e;if((c=null==(e=Ds(a,bj))?void 0:e.request)&&b.Ec&&(e=b.Ec[c]))return e();for(var f in a)if(b.Nb[f]&&(a=b.Nb[f]))return a()}
;function lt(a){return function(){return new a}}
;var mt={},nt=(mt.WEB_UNPLUGGED="^unplugged/",mt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",mt.WEB_UNPLUGGED_OPS="^unplugged/",mt.WEB_UNPLUGGED_PUBLIC="^unplugged/",mt.WEB_CREATOR="^creator/",mt.WEB_KIDS="^kids/",mt.WEB_EXPERIMENTS="^experiments/",mt.WEB_MUSIC="^music/",mt.WEB_REMIX="^music/",mt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",mt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",mt);
function ot(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=nt[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(nt).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function pt(){}
pt.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?at:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=vb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Al.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Dl(165)?m="USER_INTERFACE_THEME_DARK":Dl(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:ct()||m;h.userInterfaceTheme=k;if(!f){if(k=
Kl())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Ll())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=Zk(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
vl.i&&(r=vl.i,h.mainAppWebInfo.pwaInstallabilityStatus=!r.i&&r.j?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=wl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var w=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(lb){}w=void 0}w&&(h.timeZone=w)}(w=Ik())?h.experimentsToken=w:delete h.experimentsToken;w=Jk();dt.i||(dt.i=new dt);h=dt.i.i;r=[];q=0;for(var u in h)r[q++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:w,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(u=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=u);w=Al.getInstance();u=Dl(58);w=w.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);w&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=ps())&&(g.clientScreenNonce=f):!f&&(f=ps())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&gt.getInstance().setLocationOnInnerTubeContext(g);try{var A=bl(),E=A.bid;delete A.bid;
g.adSignalsInfo={params:[],bid:E};var F=p(Object.entries(A));for(var N=F.next();!N.done;N=F.next()){var O=p(N.value),R=O.next().value,U=O.next().value;A=R;E=U;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+E})}}catch(lb){Xr(lb)}F=g}else Xr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(N=this.i(a)){this.j(F,N,b);var ca;b="/youtubei/v1/"+ot(this.l());(N=null==(ca=Ds(a.commandMetadata,cj))?void 0:ca.apiUrl)&&(b=N);ca=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&
(ca=String(b)+String(oc(ca)));b={};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");ca=$k(ca,b||{},!1);a=M("kevlar_response_command_processor_page")?Object.assign({},{command:a},void 0):Object.assign({},void 0);a={input:ca,va:Es(ca),ga:F,config:a};a.config.Sa?a.config.Sa.identity=c:a.config.Sa={identity:c};return a}Xr(new Q("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(pt.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function qt(){}
t(qt,pt);qt.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",va:Es("/getDatasyncIdsEndpoint","GET"),ga:{}}};
qt.prototype.l=function(){return[]};
qt.prototype.i=function(){};
qt.prototype.j=function(){};var rt={},st=(rt.GET_DATASYNC_IDS=lt(qt),rt);function tt(a){var b=Ja.apply(1,arguments);if(!ut(a)||b.some(function(d){return!ut(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())vt(a,c.value);return a}
function vt(a,b){for(var c in b)if(ut(b[c])){if(c in a&&!ut(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});vt(a[c],b[c])}else if(wt(b[c])){if(c in a&&!wt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);xt(a[c],b[c])}else a[c]=b[c];return a}
function xt(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ut(c)?a.push(vt({},c)):wt(c)?a.push(xt([],c)):a.push(c);return a}
function ut(a){return"object"===typeof a&&!Array.isArray(a)}
function wt(a){return"object"===typeof a&&Array.isArray(a)}
;function zt(a,b){ao.call(this,1,arguments);this.timer=b}
t(zt,ao);var At=new bo("aft-recorded",zt);var Bt=window;function Ct(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=Bt.performance||Bt.mozPerformance||Bt.msPerformance||Bt.webkitPerformance||new Ct;var Dt=!1,Et={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||cb,S);function Ft(a){var b=Gt(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Ht(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=It(e.requestStart),e.responseEnd=It(e.responseEnd),e.redirectStart=It(e.redirectStart),e.redirectEnd=It(e.redirectEnd),e.domainLookupEnd=It(e.domainLookupEnd),e.connectStart=It(e.connectStart),e.connectEnd=
It(e.connectEnd),e.responseStart=It(e.responseStart),e.secureConnectionStart=It(e.secureConnectionStart),e.domainLookupStart=It(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function Jt(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function It(a){return Math.round(Jt()+a)}
function Kt(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Lt(a){a=Kt(a);a.info||(a.info={});return a.info}
function Gt(a){a=Kt(a);a.tick||(a.tick={});return a.tick}
function Mt(a){a=Kt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Nt(a){a=Mt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ot(a){a=Mt(a);a.jspbInfos||(a.jspbInfos=[]);return a.jspbInfos}
function Pt(a){var b=Kt(a).nonce;b||(b=es(),Kt(a).nonce=b);return b}
function Qt(a){var b=Gt(a||""),c=Ft(a);c&&!Dt&&(ho(At,new zt(Math.round(c-b._start),a)),Dt=!0)}
function Rt(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Rt(a[d],b[d]))return!1;return!0}
function St(){for(var a=Ot(),b=0;b<a.length&&"cold"!==Rd(a[b],3,"");b++);}
;function Tt(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return It(a.startTime)}a=S.timing;
return a.Tc?Math.max(0,a.Tc):0}
;function Ut(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Vt(a){a=a||"";var b=B("ytcsi.reference");b||(Ut(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Ut(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Wt=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home="LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",
T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch=
"LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",
T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",
T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),V={},Xt=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",
V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",
V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",
V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",
V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),Yt="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Zt={},$t=(Zt.ccs="CANARY_STATE_",Zt.mver="MEASUREMENT_VERSION_",Zt.pis="PLAYER_INITIALIZED_STATE_",Zt.yt_pt="LATENCY_PLAYER_",Zt.pa="LATENCY_ACTION_",Zt.ctop="TOP_ENTITY_TYPE_",Zt.yt_vst="VIDEO_STREAM_TYPE_",Zt),au="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function bu(a){return Wt[a]||"LATENCY_ACTION_UNKNOWN"}
function cu(a,b,c){c=Mt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Xt){c=Xt[a];0<=eb(Yt,c)&&(b=!!b);a in $t&&"string"===typeof b&&(b=$t[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return tt({},d)}0<=eb(au,a)||Yr(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,
LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,
LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,
LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,
LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,
LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,
LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,
LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,
LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,
LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,
LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,
LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,
LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";
W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";
W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";
W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";
W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";
W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";
W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";
W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";
W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";
W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";
W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";
W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";
W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";
var du={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};du[du.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";du[du.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";du[du.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};
X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";
X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var eu={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};eu[eu.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
eu[eu.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";eu[eu.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";eu[eu.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";eu[eu.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";eu[eu.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";eu[eu.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";eu[eu.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var fu={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};fu[fu.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";fu[fu.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";fu[fu.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";fu[fu.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var gu={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
gu[gu.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";gu[gu.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var hu={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};hu[hu.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";hu[hu.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";hu[hu.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
hu[hu.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";hu[hu.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";hu[hu.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var iu={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};iu[iu.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";iu[iu.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";iu[iu.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";iu[iu.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var ju={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};ju[ju.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";ju[ju.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";ju[ju.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var ku={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};ku[ku.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
ku[ku.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";ku[ku.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var lu="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var mu=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",mu);function nu(){this.i=0}
function ou(){nu.i||(nu.i=new nu);return nu.i}
nu.prototype.tick=function(a,b,c,d){pu(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Qj,D(d,1,a),D(d,2,b),a=new Tj,Yd(a,Qj,5,Uj,d),xr(a,c)):tm("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
nu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");pu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,tm("latencyActionInfo",a,{cttAuthInfo:c}))};
nu.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));pu(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new Tj,Yd(c,Kj,7,Uj,a),xr(c,b))};
nu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");pu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,tm("latencyActionSpan",a,{cttAuthInfo:c}))};
function pu(a,b){mu[b]=mu[b]||{count:0};var c=mu[b];c.count++;c.time=P();a.i||(a.i=em(function(){var d=P(),e;for(e in mu)mu[e]&&6E4<d-mu[e].time&&delete mu[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Yr(c)),!0):!1}
;function qu(){var a=["ol"];Vt("").info.actionType="embed";a&&Ek("TIMING_AFT_KEYS",a);Ek("TIMING_ACTION","embed");ru();a=Lt();var b=Nt();if("cold"===a.yt_lt||"cold"===b.loadType){var c=Gt(),d=Mt();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=p(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=cu(f,a[f]))&&!Rt(Nt(),f)&&(tt(b,f),tt(e,f),c=!0);c&&su(e)}z("ytglobal.timingready_",!0);a=L("TIMING_ACTION");B("ytglobal.timingready_")&&a&&"_start"in Gt()&&
Ft()&&Qt()}
function tu(a,b,c,d){null!==b&&(Lt(c)[a]=b,(a=cu(a,b,c))&&su(a,c,d))}
function su(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Vt(b||""),tt(c.info,a),tt(Nt(b),a),c=Pt(b),b=Kt(b).cttAuthInfo,ou().info(a,c,b);else{c=new Kj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":Mj(c,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,
5,du[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,eu[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);
break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,fu[a[e]]);break;case "isNavigation":Nj(c,a[e]);break;case "viewportHeight":D(c,29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,
84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;
case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,gu[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "videoOutputFrames":D(c,93,a[e]);break;case "isResume":D(c,104,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,
hu[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,53,iu[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,ju[a[e]]);break;case "playerRotationType":D(c,101,ku[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;
case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:lu.includes(f)&&Nk(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Nk(Error("Codegen laipb translator failed to set "+f))}}uu(c,b)}}
function uu(a,b){Ot(b).push(a);Vt(b||"").jspbInfo.push(a);var c=Pt(b);b=Kt(b).cttAuthInfo;ou().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=Vt(c||"");d.tick[a]=b||P();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Mt(c);d.gelTicks&&(d.gelTicks[a]=!0);d=Gt(c);e=b||P();d[a]=e;e=Pt(c);var f=Kt(c).cttAuthInfo;if("_start"===a){var g=ou();pu(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new Ij,D(f,1,e),e=new Tj,Yd(e,Ij,6,Uj,f),xr(e,
b)):tm("latencyActionBaselined",{clientActionNonce:e},b))}else ou().tick(a,e,b,f);Qt(c);return d[a]}
function vu(){var a=Pt();requestAnimationFrame(function(){setTimeout(function(){a===Pt()&&Z("ol",void 0,void 0)},0)})}
function wu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=fq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function ru(){function a(f){var g=Ht(),h=Jt(),k=L("CSI_START_TIMESTAMP_MILLIS",0);0<k&&!M("embeds_web_enable_csi_start_override_killswitch")&&(h=k);h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=Tt();0<f&&Z("fpt",f);f=Ht();f.isPerformanceNavigationTiming&&su({performanceNavigationTiming:!0});Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,
void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=Jt()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));S&&"getEntriesByType"in S&&xu()}
var b=L("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=yu(b);uu(b);b=Mj(Nj(new Kj,!0),W[bu(L("TIMING_ACTION"))]);var c=L("PREVIOUS_ACTION");c&&D(b,13,W[bu(c)]);(c=L("CLIENT_PROTOCOL"))&&D(b,33,c);(c=L("CLIENT_TRANSPORT"))&&D(b,34,c);(c=ps())&&"UNDEFINED_CSN"!==c&&D(b,4,c);c=wu();1!==c&&-1!==c||D(b,6,!0);c=Lt();St();D(b,3,"cold");a(c);c=zu();if(0<c.length){c=p(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new Jj;D(e,1,d);$d(b,83,Jj,e)}}uu(b)}else{for(c in b)b.hasOwnProperty(c)&&tu(c,b[c]);
b={isNavigation:!0,actionType:bu(L("TIMING_ACTION"))};if(c=L("PREVIOUS_ACTION"))b.previousAction=bu(c);if(c=L("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=L("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=ps())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=wu();if(1===c||-1===c)b.isVisible=!0;c=Lt();b.loadType="cold";a(c);c=zu();if(0<c.length)for(b.resourceInfo=[],c=p(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});su(b)}}
function yu(a){var b=new Kj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Pj;D(e,1,c);D(e,2,String(d));Oj(b,e);break;case "GetGuide_rid":e=new Pj;D(e,1,c);D(e,2,String(d));Oj(b,e);break;case "GetHome_rid":e=new Pj;D(e,1,c);D(e,2,String(d));Oj(b,e);break;case "GetPlayer_rid":e=new Pj;D(e,1,c);D(e,2,String(d));Oj(b,e);break;case "GetSearch_rid":e=new Pj;D(e,1,c);D(e,2,String(d));Oj(b,e);break;
case "GetSettings_rid":e=new Pj;D(e,1,c);D(e,2,String(d));Oj(b,e);break;case "GetTrending_rid":e=new Pj;D(e,1,c);D(e,2,String(d));Oj(b,e);break;case "GetWatchNext_rid":e=new Pj;D(e,1,c);D(e,2,String(d));Oj(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}return b}
function Au(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);hc()&&a.setAttribute("nonce",hc());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=Jt(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function zu(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in Et)if(Et.hasOwnProperty(b)){var c=Et[b];Au(b,c)&&a.push(c)}return a}
function xu(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",It(b.startTime)),Z("wffe",It(b.responseEnd)))}
var Bu=window;Bu.ytcsi&&(Bu.ytcsi.info=tu,Bu.ytcsi.tick=Z);var Cu="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Du=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Eu(a,b,c,d){this.o=a;this.M=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.Ma||(a.Ma={});a.Ma=Object.assign({},st,a.Ma)}
function Fu(a,b,c,d){if(void 0!==Eu.i){if(d=Eu.i,a=[a!==d.o,b!==d.M,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else Eu.i=new Eu(a,b,c,d)}
function Gu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?at:c;var d=kt(b,a.o);if(!d)return Cf(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new xf(function(f){var g,h,k;return x(function(m){if(1==m.i){h="cors"===(null==(g=e.va)?void 0:g.mode)?"cors":void 0;if(a.m.od){var q=e.config,r;q=null==q?void 0:null==(r=q.Sa)?void 0:r.sessionIndex;r=Rs({sessionIndex:q});k=Object.assign({},Hu(h),r);return m.u(2)}return v(m,Iu(e.config,
h),3)}2!=m.i&&(k=m.j);f(Ju(a,e,k));m.i=0})}):Cf(new Q("Error: Failed to build request for command.",b))}
function Ju(a,b,c){var d,e,f,g,h,k,m,q,r,w,u,A,E,F,N,O,R,U,ca,lb,Xa,ja,H,ka,ma,Fe,Ge,wd,xd,yd;return x(function(va){switch(va.i){case 1:va.u(2);break;case 3:if((d=va.j)&&!d.isExpired())return va.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.ga)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.Hq(b.ga.context);if(null==(m=a.j)?0:m.Nq(b.input,b.ga))return va.return(a.j.Eq(b.input,b.ga));(w=null==(r=b.config)?void 0:r.Ca)&&a.i.has(w)&&M("web_memoize_inflight_requests")?
q=a.i.get(w):(u=JSON.stringify(b.ga),F=null!=(E=null==(A=b.va)?void 0:A.headers)?E:{},b.va=Object.assign({},b.va,{headers:Object.assign({},F,c)}),N=Object.assign({},b.va),"POST"===b.va.method&&(N=Object.assign({},N,{body:u})),(null==(O=b.config)?0:O.Zc)&&Z(b.config.Zc),R=function(){return a.M.fetch(b.input,N,b.config)},q=R(),w&&a.i.set(w,q));
return v(va,q,4);case 4:U=va.j;if(M("web_one_platform_error_handling")&&(null==(ca=U)?0:null==(lb=ca.error)?0:lb.details))for(Xa=U.error.details,ja=p(Xa),H=ja.next();!H.done;H=ja.next())ka=H.value,(ma=ka["@type"])&&-1<Du.indexOf(ma)&&(delete ka["@type"],U=ka);w&&a.i.has(w)&&a.i.delete(w);(null==(Fe=b.config)?0:Fe.bd)&&Z(b.config.bd);if(U||null==(Ge=a.j)||!Ge.yq(b.input,b.ga)){va.u(5);break}return v(va,a.j.Dq(b.input,b.ga),6);case 6:U=va.j;case 5:if(U&&(null==(wd=U.Mq)||!wd.Pq)&&a.l)for(xd=p(Cu),h=
xd.next();!h.done;h=xd.next())yd=h.value,a.l[yd]&&a.l[yd].handleResponse(U,b);return va.return(U)}})}
function Iu(a,b){var c,d,e,f;return x(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Sa)?void 0:d.sessionIndex;var h=Rs({sessionIndex:e});if(!(h instanceof xf)){var k=new xf(cb);yf(k,2,h);h=k}return v(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},Hu(b),f)))})}
function Hu(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=
a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Ku=new Ts("INNERTUBE_TRANSPORT_TOKEN");var Lu=["share/get_web_player_share_panel"],Mu=["feedback"],Nu=["notification/modify_channel_preference"],Ou=["browse/edit_playlist"],Pu=["subscription/subscribe"],Qu=["subscription/unsubscribe"];function Ru(){}
t(Ru,pt);Ru.prototype.l=function(){return Pu};
Ru.prototype.i=function(a){return Ds(a,yk)||void 0};
Ru.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Ru.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Su(){}
t(Su,pt);Su.prototype.l=function(){return Qu};
Su.prototype.i=function(a){return Ds(a,xk)||void 0};
Su.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Su.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Tu(){}
t(Tu,pt);Tu.prototype.l=function(){return Mu};
Tu.prototype.i=function(a){return Ds(a,ej)||void 0};
Tu.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Tu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Uu(){}
t(Uu,pt);Uu.prototype.l=function(){return Nu};
Uu.prototype.i=function(a){return Ds(a,wk)||void 0};
Uu.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Vu(){}
t(Vu,pt);Vu.prototype.l=function(){return Ou};
Vu.prototype.i=function(a){return Ds(a,vk)||void 0};
Vu.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Wu(){}
t(Wu,pt);Wu.prototype.l=function(){return Lu};
Wu.prototype.i=function(a){return Ds(a,uk)};
Wu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Vs=new Ts("NETWORK_SLI_TOKEN");function Xu(a){this.i=a}
Xu.prototype.fetch=function(a,b){var c=this,d,e;return x(function(f){c.i&&(d=lc(mc(5,zc(a,"key")))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Yr(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Yr(g)}))})};
Xu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Yr(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Xu[Ss]=[new Us];var Yu=new Ts("NETWORK_MANAGER_TOKEN");var Zu;function $u(a){ao.call(this,1,arguments);this.csn=a}
t($u,ao);var ko=new bo("screen-created",$u),av=[],cv=bv,dv=0;function ev(a,b,c,d,e,f,g){function h(){Yr(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=cv();f=new is({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,ba:k};if(M("il_via_jspb")){var m=new xj;m.V(k);yj(m,f.getAsJspb());c&&c.visualElement?(f=new zj,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),Aj(f,c.visualElement.getAsJspb()),g&&D(f,4,Vj[g]),G(m,zj,5,f)):c&&h();d&&D(m,3,d);Cr(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=
g)):c&&h(),d&&(f.cloneCsn=d),a?sr("screenCreated",f,a,e):tm("screenCreated",f,e);ho(ko,new $u(k));return k}
function fv(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:rs(b),
ba:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&Yr(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new Bj;h.V(b);Dj(h,c.getAsJspb());hb(e,function(k){k=k.getAsJspb();$d(h,3,sj,k)});
"UNDEFINED_CSN"==b?gv("visualElementAttached",h,f):Dr(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?gv("visualElementAttached",c,f):a?sr("visualElementAttached",c,a,f):tm("visualElementAttached",c,f)}
function bv(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return ed(b,3)}
function gv(a,b,c){av.push({payloadName:a,payload:b,options:c});dv||(dv=lo())}
function mo(a){if(av){for(var b=p(av),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.V(a.csn),c.payloadName){case "screenCreated":Cr(c.payload,c.options);break;case "visualElementAttached":Dr(c.payload,c.options);break;case "visualElementShown":yr(c.payload,c.options);break;case "visualElementHidden":zr(c.payload,c.options);break;case "visualElementGestured":Ar(c.payload,c.options);break;case "visualElementStateChanged":Br(c.payload,c.options);break;default:Yr(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,sr(c.payloadName,c.payload,null,c.options);av.length=0}dv=0}
;function hv(){this.j=new Set;this.i=new Set;this.l=new Map}
hv.prototype.s=function(){};
hv.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Na(hv);function iv(){this.o=[];this.N=[];this.i=[];this.m=[];this.B=[];this.j=new Set;this.v=new Map}
iv.prototype.s=function(a){this.client=a};
function jv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=ps(c),f=ns(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&fv(a.client,e,f,[js(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&fv(a.client,e,f,[js(d.playerResponse.trackingParams)])}})}
function kv(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=ps(d);c=c||ns(d);e&&c&&fv(a.client,e,c,[b])}}
iv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=ps(void 0===c?0:c)){a=this.client;var e=js(d);d={cttAuthInfo:rs(c),ba:c};if(M("il_via_jspb")){var f=new Ej;f.V(c);e=e.getAsJspb();G(f,sj,2,e);D(f,4,Vj.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);b&&G(f,vj,3);"UNDEFINED_CSN"==c?gv("visualElementGestured",f,d):Ar(f,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(f.clientData=b),"UNDEFINED_CSN"==c?
gv("visualElementGestured",f,d):a?sr("visualElementGestured",f,a,d):tm("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function lv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){mv(a,b,c);var f=ns(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,kv(a,h[0],h[1]||f,c.layer);f=p(a.N);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=ps(g);var m=k[0]||ns(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:rs(h),ba:h};M("il_via_jspb")?(q=new Hj,q.V(h),m=m.getAsJspb(),G(q,sj,2,m),"UNDEFINED_CSN"==h?gv("visualElementStateChanged",q,k):Br(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?gv("visualElementStateChanged",m,k):g?sr("visualElementStateChanged",m,g,k):tm("visualElementStateChanged",m,k))}}}};
ps(c.layer)||a.l();if(c.Qb)for(var d=p(c.Qb),e=d.next();!e.done;e=d.next())jv(a,e.value,c.layer);else Xr(Error("Delayed screen needs a data promise."))}
function mv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Vc?c.Vc:c.layer;var e=ps(d);d=ns(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=ev(a.client,b,f,c.Pb,c.cttAuthInfo,g,c.Bq)}catch(m){$r(m,{Kq:b,rootVe:d,parentVisualElement:void 0,zq:e,Gq:f,Pb:c.Pb});Xr(m);return}ss(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(hs));for(f=b.next();!f.done;f=b.next())if(ps(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:rs(e),ba:e,Rb:g},M("il_via_jspb")?(h=new Fj,h.V(e),d=d.getAsJspb(),G(h,sj,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?gv("visualElementHidden",h,f):zr(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?gv("visualElementHidden",d,f):b?sr("visualElementHidden",d,b,f):tm("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");su({clientScreenNonce:k});hv.getInstance().clear();d=ns(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:rs(e),ba:e},M("il_via_jspb")?(b=new Gj,b.V(e),f=d.getAsJspb(),G(b,sj,2,f),D(b,4,1),"UNDEFINED_CSN"==e?gv("visualElementShown",b,k):yr(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?gv("visualElementShown",b,k):tm("visualElementShown",
b,k)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&kv(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Xr(m)}}for(c=a.m.length=0;c<a.B.length;c++){e=a.B[c];try{e()}catch(m){Xr(m)}}}
;function nv(){var a,b;return x(function(c){if(1==c.i)return a=$s().resolve(Ku),a?v(c,Gu(a),2):(Yr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Yr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.Aq);Yr(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var ov=y.caches,pv;function qv(a){var b=a.indexOf(":");return-1===b?{dc:a}:{dc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function rv(){return x(function(a){if(void 0!==pv)return a.return(pv);pv=new Promise(function(b){var c;return x(function(d){switch(d.i){case 1:return ya(d,2),v(d,ov.open("test-only"),4);case 4:return v(d,ov.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(pv)})}
function sv(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.i)return v(k,rv(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return v(k,ov.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=qv(f),h=g.datasyncId,!h||a.includes(h)||b.push(ov.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function tv(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.i)return v(h,rv(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=xm("cache contains other");return v(h,ov.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=qv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function uv(){try{return!!self.localStorage}catch(a){return!1}}
;function vv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function wv(a){if(uv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=vv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function xv(){if(!uv())return!1;var a=xm(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=vv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function yv(){nv().then(function(a){a&&(In(a),sv(a),wv(a))})}
function zv(){var a=new So;Wh.S(function(){var b,c,d,e;return x(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=xm("clear");if(b.startsWith("V")){var g=[b];In(g);sv(g);wv(g);return f.return()}c=xv();return v(f,tv(),3);case 3:return d=f.j,v(f,Jn(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.K()?yv():a.m.add("publicytnetworkstatus-online",yv,!0,void 0,void 0),f.i=0}})})}
;function Av(a){a&&(a.dataset?a.dataset[Bv("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Cv(a,b){return a?a.dataset?a.dataset[Bv(b)]:a.getAttribute("data-"+b):null}
var Dv={};function Bv(a){return Dv[a]||(Dv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ev=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Fv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Gv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ev,""),c=c.replace(Fv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Hv(a,b,c)}
function Hv(a,b,c){c=void 0===c?null:c;var d=Iv(a),e=document.getElementById(d),f=e&&Cv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=zq(d,b),b=""+Ra(b),Jv[b]=f),g||(e=Kv(a,d,function(){Cv(e,"loaded")||(Av(e),Cq(d),gl(Ya(Dq,d),0))},c)))}
function Kv(a,b,c,d){d=void 0===d?null:d;var e=jf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Fh(e,Ib(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Lv(a){a=Iv(a);var b=document.getElementById(a);b&&(Dq(a),b.parentNode.removeChild(b))}
function Mv(a,b){a&&b&&(a=""+Ra(b),(a=Jv[a])&&Bq(a))}
function Iv(a){var b=document.createElement("a");ec(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+jc(a)}
var Jv={};var Nv=[],Qv=!1;function Rv(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&Fs()){var a=L("PLAYER_VARS",{});if("1"!=sb(a)&&!Gs(a)){var b=function(){Qv=!0;"google_ad_status"in window?Ek("DCLKSTAT",1):Ek("DCLKSTAT",2)};
try{Gv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Nv.push(Wh.S(function(){if(!(Qv||"google_ad_status"in window)){try{Mv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Qv=!0;Ek("DCLKSTAT",3)}},5E3))}}}
function Sv(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function Tv(){this.state=1;this.i=null}
Tv.prototype.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Cb("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=zb())?f.createScript(e):e,e=(new Eb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Cb("From proto message. b/166824318"),d=Ib(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
Uv(this,e,d,a.program,b,c)}else Yr(Error("Cannot initialize botguard without program"))};
function Uv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Gv(c,function(){window[g]?Vv(a,d,g,e):(a.state=3,Lv(c),Yr(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=jf("SCRIPT"),f.textContent=b,f.nonce=hc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Vv(a,d,g,e):(a.state=4,Yr(new Q("Unable to load Botguard from JS")))):Yr(new Q("Unable to load VM; no url or JS provided"))}
Tv.prototype.isInitialized=function(){return!!this.i};
function Vv(a,b,c,d){a.state=5;try{var e=new Bh({program:b,globalName:c});e.ld.then(function(){a.state=6;d&&d(b)});
Wv(a,e)}catch(f){a.state=7,f instanceof Error&&Yr(f)}}
Tv.prototype.invoke=function(a){a=void 0===a?{}:a;var b=this.i;if(b){var c={Ob:a};if(b.Xa)throw Error("Already disposed");a=zh();var d;null!=(d=b.sa)&&d.j.i.Eb("/client_streamz/bg/fsc",d.Ca);d=b.pd([c.Ob,c.nd]);null!=(b=b.sa)&&(a=zh()-a,b.l.i.jb("/client_streamz/bg/fsl",a,b.Ca));b=d}else b=null;return b};
Tv.prototype.dispose=function(){Wv(this,null);this.state=8};
function Wv(a,b){oe(a.i);a.i=b}
;var Xv=new Tv;function Yv(){return Xv.isInitialized()}
function Zv(a){a=void 0===a?{}:a;return Xv.invoke(a)}
;function $v(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?im():d;this.m=c;this.l=d;this.j=new Ah;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={Da:a.Da,Oa:a.Oa},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Oa=d;a.Da=e;d=function(f){return function(){f.Da.vb();b.i[f.Oa].fb=!0;b.i.every(function(g){return!0===g.fb})&&b.j.resolve()}}(a);
e=em(d,aw(this,a.Da));this.i[a.Oa]=Object.assign({},a.Da,{vb:d,ab:e})}}
function bw(a){var b=Array.from(a.i.keys()).sort(function(d,e){return aw(a,a.i[e])-aw(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.ab||c.fb||(a.l.fa(c.ab),em(c.vb,10))}
$v.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.ab||b.fb||this.l.fa(b.ab),b.fb=!0;this.j.resolve()};
function aw(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function cw(a){this.state=a;this.plugins=[];this.s=void 0}
cw.prototype.install=function(){this.plugins.push.apply(this.plugins,ha(Ja.apply(0,arguments)))};
cw.prototype.transition=function(a,b){var c=this,d=this.B.find(function(f){return f.from===c.state&&f.D===a});
if(d){this.l&&(bw(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(dw(this,e,this.s),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function dw(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
im();var g={};e=p(e);for(var h=e.next();!h.done;g={Pa:g.Pa},h=e.next())g.Pa=h.value,gm(function(k){return function(){k.Pa.callback.apply(k.Pa,ha(d))}}(g));
f=f.map(function(k){var m;return{vb:function(){k.callback.apply(k,ha(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new $v(f))}}
ea.Object.defineProperties(cw.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function ew(a){cw.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.i=new Map;this.B=[{from:"document_active",D:"document_disposed_preventable",action:this.N},{from:"document_active",D:"document_disposed",action:this.m},{from:"document_disposed_preventable",D:"document_disposed",action:this.m},{from:"document_disposed_preventable",D:"flush_logs",action:this.o},{from:"document_disposed_preventable",D:"document_active",action:this.j},{from:"document_disposed",D:"flush_logs",action:this.o},
{from:"document_disposed",D:"document_active",action:this.j},{from:"document_disposed",D:"document_disposed",action:function(){}},
{from:"flush_logs",D:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
t(ew,cw);ew.prototype.N=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
ew.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
ew.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
ew.prototype.j=function(){this.i=new Map};function fw(a){cw.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.B=[{from:"document_visibility_unknown",D:"document_visible",action:this.j},{from:"document_visibility_unknown",D:"document_hidden",action:this.i},{from:"document_visibility_unknown",D:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",D:"document_backgrounded",action:this.m},{from:"document_visible",D:"document_hidden",action:this.i},{from:"document_visible",D:"document_foregrounded",action:this.o},
{from:"document_visible",D:"document_visible",action:this.j},{from:"document_foregrounded",D:"document_visible",action:this.j},{from:"document_foregrounded",D:"document_hidden",action:this.i},{from:"document_foregrounded",D:"document_foregrounded",action:this.o},{from:"document_hidden",D:"document_visible",action:this.j},{from:"document_hidden",D:"document_backgrounded",action:this.m},{from:"document_hidden",D:"document_hidden",action:this.i},{from:"document_backgrounded",D:"document_hidden",action:this.i},
{from:"document_backgrounded",D:"document_backgrounded",action:this.m},{from:"document_backgrounded",D:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
t(fw,cw);fw.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
fw.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
fw.prototype.m=function(a,b){a(null==b?void 0:b.event)};
fw.prototype.o=function(a,b){a(null==b?void 0:b.event)};function gw(){this.i=new ew;this.j=new fw}
gw.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,ha(a));this.j.install.apply(this.j,ha(a))};function hw(){gw.call(this);var a={};this.install((a.document_disposed={callback:this.l},a));a={};this.install((a.flush_logs={callback:this.m},a))}
var iw;t(hw,gw);hw.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new rj,b=ps();b&&a.V(b);b=new Tj;Yd(b,rj,380,Uj,a);xr(b);M("web_fp_via_jspb_and_json")&&tm("finalPayload",{csn:ps()})}else tm("finalPayload",{csn:ps()})};
hw.prototype.l=function(){bs(cs)};function jw(){}
jw.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new jw,z("ytglobal.storage_",a));return a};
jw.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(kw()):d.return()})};
function kw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",jw);function rm(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=Hk("ytidb_transaction_ended_event_rate_limit",.02)}
rm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":lw(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function lw(a,b){jw.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:mw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:mw(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function mw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function nw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.v=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=eb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.v)}
t(nw,J);nw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Ok(d)}}};
nw.prototype.C=function(){window.removeEventListener("message",this.v);J.prototype.C.call(this)};function ow(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new nw(!!L("WIDGET_ID_ENFORCE")),b=this.Xc.bind(this);a.o=b;a.s=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=ow.prototype;l.Xc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,pw(this,a)),this.l[a]=!0)):this.Fb(a,b,c)};
l.Fb=function(){};
function pw(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Kc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.rb());this.sendMessage("onReady");fb(this.j,this.lc,this);this.j=[]};
l.rb=function(){return null};
function qw(a,b){a.sendMessage("infoDelivery",b)}
l.lc=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.lc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};var rw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function sw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function tw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(rw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function uw(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function vw(a){ow.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.hd.bind(this));this.addEventListener("onVolumeChange",this.jd.bind(this));this.addEventListener("onApiChange",this.cd.bind(this));this.addEventListener("onPlaybackQualityChange",this.ed.bind(this));this.addEventListener("onPlaybackRateChange",this.fd.bind(this));this.addEventListener("onStateChange",this.gd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.kd.bind(this))}
t(vw,ow);l=vw.prototype;
l.Fb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&sw(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=tw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=tw(e);break;case "loadPlaylist":case "cuePlaylist":e=uw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);sw(a)&&qw(this,this.rb())}};
l.onReady=function(){var a=this.Kc.bind(this);this.i.j=a;a=this.api.getVideoData();!1===a.isPlayable&&this.sendMessage("onError",a.errorCode)};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.rb=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.gd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());qw(this,a)};
l.ed=function(a){qw(this,{playbackQuality:a})};
l.fd=function(a){qw(this,{playbackRate:a})};
l.cd=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jd=function(){qw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.hd=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());qw(this,a)};
l.kd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};qw(this,a)};
l.dispose=function(){ow.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function ww(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.fc,this)}
t(ww,J);l=ww.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.wa("RECEIVING"))};
l.wa=function(a,b){this.started&&!this.i()&&this.connection.wa(a,b)};
l.fc=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=xw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=yw(a,c))&&this.wa(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.dd.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.dd=function(a,b){this.started&&!this.i()&&this.connection.wa(a,this.qb(a,b))};
l.qb=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.C=function(){var a=this.connection;a.i()||ui(a.j,"command",this.fc,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.C.call(this)};function zw(a,b){ww.call(this,b);this.api=a;this.start()}
t(zw,ww);zw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
zw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function xw(a,b){switch(a){case "loadVideoById":return a=tw(b),[a];case "cueVideoById":return a=tw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=uw(b),[a];case "cuePlaylist":return a=uw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function yw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
zw.prototype.qb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ww.prototype.qb.call(this,a,b)};
zw.prototype.C=function(){ww.prototype.C.call(this);delete this.api};function Aw(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);qe(this,this.j)}
Za(Aw,J);Aw.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
Aw.prototype.m=function(a,b){this.i()||this.j.oa.apply(this.j,arguments)};function Bw(a,b,c){Aw.call(this);this.l=a;this.destination=b;this.id=c}
t(Bw,Aw);Bw.prototype.wa=function(a,b){this.i()||this.l.wa(this.destination,this.id,a,b)};
Bw.prototype.C=function(){this.destination=this.l=null;Aw.prototype.C.call(this)};function Cw(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=mq(window,"message",this.l.bind(this));this.connection=new Bw(this,a,b);qe(this,this.connection)}
t(Cw,J);Cw.prototype.wa=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(JSON.stringify(a),this.origin))};
Cw.prototype.l=function(a){if(!this.i()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.i()||c.m("command",b.command,b.data,a.origin)}}}};
Cw.prototype.C=function(){nq(this.j);this.destination=null;J.prototype.C.call(this)};function Dw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Dw.prototype.clone=function(){var a=new Dw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=ub(c):a[b]=c}return a};var Ew=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Fw(a){a=a||"";if(window.spf){var b=a.match(Ew);spf.style.load(a,b?b[1]:"",void 0)}else Gw(a)}
function Gw(a){var b=Hw(a),c=document.getElementById(b),d=c&&Cv(c,"loaded");d||c&&!d||(c=Iw(a,b,function(){Cv(c,"loaded")||(Av(c),Cq(b),gl(Ya(Dq,b),0))}))}
function Iw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ib(a);fc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Hw(a){var b=jf("A");Cb("This URL is never added to the DOM");ec(b,new Nb(a,Ob));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+jc(a)}
;function Jw(){J.call(this);this.j=[]}
t(Jw,J);Jw.prototype.C=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.C.call(this)};function Kw(){Jw.apply(this,arguments)}
t(Kw,Jw);function Lw(a,b,c,d){J.call(this);var e=this;this.v=b;this.webPlayerContextConfig=d;this.da=!1;this.api={};this.W=this.s=null;this.J=new K;this.j={};this.R=this.X=this.elementId=this.qa=this.config=null;this.P=!1;this.m=this.F=null;this.ka={};this.Qa=["onReady"];this.lastError=null;this.Fa=NaN;this.I={};this.Ra=new Kw(this);this.T=0;this.l=this.o=a;qe(this,this.J);Mw(this);Nw(this);qe(this,this.Ra);c?this.T=gl(function(){e.loadNewVideoConfig(c)},0):d&&(Ow(this),Pw(this))}
t(Lw,J);l=Lw.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.i()){this.T&&(hl(this.T),this.T=0);var b=a||{};b instanceof Dw||(b=new Dw(b));this.config=b;this.setConfig(a);Pw(this);this.isReady()&&Qw(this)}};
function Ow(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.qa=a;this.config=Rw(a);Ow(this);if(!this.X){var b;this.X=Sw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Ph(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Ph(Number(a)||a))};
function Qw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Tw(a){var b=!0,c=Uw(a);c&&a.config&&(a=Vw(a),b=Cv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Pw(a){if(!a.i()&&!a.P){var b=Tw(a);if(b&&"html5"===(Uw(a)?"html5":null))a.R="html5",a.isReady()||Ww(a);else if(Xw(a),a.R="html5",b&&a.m&&a.o)a.o.appendChild(a.m),Ww(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Yw(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Rw(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Ww(a)};
a.P=!0;b?a.F():(Gv(Vw(a),a.F),(b=Zw(a))&&Fw(b),$w(a)&&!c&&z("yt.player.Application.create",null))}}}
function Uw(a){var b=hf(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function Ww(a){if(!a.i()){var b=Uw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.P=!1;if(!Yw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}ax(a)}else a.Fa=gl(function(){Ww(a)},50)}}
function ax(a){Mw(a);a.da=!0;var b=Uw(a);if(b){a.s=bx(a,b,"addEventListener");a.W=bx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=bx(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.s&&a.s(g,a.j[g]);Qw(a);a.X&&a.X(a.api);a.J.oa("onReady",a.api)}
function bx(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Yr(f))}}}
function Mw(a){a.da=!1;if(a.W)for(var b in a.j)a.j.hasOwnProperty(b)&&a.W(b,a.j[b]);for(var c in a.I)a.I.hasOwnProperty(c)&&hl(Number(c));a.I={};a.s=null;a.W=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.da};
function Nw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Cq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Cq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Sw(this,b);d&&(0<=eb(this.Qa,a)||this.j[a]||(b=cx(this,a),this.s&&this.s(a,b)),this.J.subscribe(a,d),"onReady"===a&&this.isReady()&&gl(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=Sw(this,b))&&ui(this.J,a,b)};
function Sw(a,b){var c=b;if("string"===typeof b){if(a.ka[b])return a.ka[b];c=function(){var d=Ja.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Xr(f)}};
a.ka[b]=c}return c?c:null}
function cx(a,b){var c="ytPlayer"+b+a.v;a.j[b]=c;y[c]=function(d){var e=gl(function(){if(!a.i()){try{a.J.oa(b,null!=d?d:void 0)}catch(h){Yr(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.I,g=String(e);g in f&&delete f[g]}},0);
rb(a.I,String(e))};
return c}
l.getPlayerType=function(){return this.R||(Uw(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Xw(a){a.cancel();Mw(a);a.R=null;a.config&&(a.config.loaded=!1);var b=Uw(a);b&&(Tw(a)||!$w(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.F&&Mv(Vw(this),this.F);hl(this.Fa);this.P=!1};
l.C=function(){Xw(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Xr(b)}this.ka=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.qa=this.config=this.api=null;delete this.o;delete this.l;J.prototype.C.call(this)};
function $w(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Vw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Zw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Yw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Uk(c||"","&")[b]}
function Rw(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var dx={},ex="player_uid_"+(1E9*Math.random()>>>0);function fx(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?hf(d):d;var e=ex+"_"+Ra(d),f=dx[e];if(f&&c)return gx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Lw(d,e,a,b);dx[e]=f;Cq("player-added",f.api);re(f,function(){delete dx[f.getId()]});
return f.api}
function gx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var hx=null,ix=null,jx=null;function kx(){lx()}
function mx(){lx()}
function lx(){var a=hx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function nx(a,b,c){a="ST-"+jc(a).toString(36);b=b?sc(b):"";c=c||5;Fs()&&xl(a,b,c)}
;function ox(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=nc(window.location.href);g&&f.push(g);g=nc(d);if(0<=eb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),ec(f,d),d=f.href),d&&(d=oc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ps()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
nx(d,b,h)}else nx(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=uc(a,k)+m;var r=void 0===r?Oh:r;a:{r=void 0===r?Oh:r;for(k=0;k<r.length;++k)if(m=r[k],m instanceof Mh&&m.isValid(a)){r=new Nb(a,Ob);break a}r=void 0}r=r||Rb;if(r instanceof Nb)var w=Pb(r);else{a:if(Eh){try{w=new URL(r)}catch(u){w="https:";break a}w=w.protocol}else b:{w=document.createElement("a");try{w.href=r}catch(u){w=void 0;
break b}w=-1!==[":",""].indexOf(w.protocol)?"https:":w.protocol}w="javascript:"===w?"about:invalid":r}c.href=w}return!0}
;z("yt.setConfig",Ek);z("yt.config.set",Ek);z("yt.setMsg",us);z("yt.msgs.set",us);z("yt.logging.errors.log",Xr);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}Ps(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=Zk(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));qu();if((c=L("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Zk(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}hx=fx(a,c,!1)}else hx=fx(a);hx.addEventListener("onVideoDataChange",kx);hx.addEventListener("onReady",mx);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?jx=new vw(hx):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(ix=new Cw(window.parent,
a,b),jx=new zw(hx,ix.connection));Rv();M("ytidb_create_logger_embed_killswitch")||qm();a={};iw||(iw=new hw);iw.install((a.flush_logs={callback:function(){Yq()}},a));
M("embeds_web_enable_new_nwl")?Zo():gp();M("ytidb_clear_embedded_player")&&Wh.S(function(){var e;if(!Zu){var f=$s(),g={zb:Yu,pc:Xu};f.providers.set(g.zb,g);g={Nb:{feedbackEndpoint:lt(Tu),modifyChannelNotificationPreferenceEndpoint:lt(Uu),playlistEditEndpoint:lt(Vu),subscribeEndpoint:lt(Ru),unsubscribeEndpoint:lt(Su),webPlayerShareEntityServiceEndpoint:lt(Wu)}};var h=M("web_enable_client_location_service")?gt.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){Qs.i||(Qs.i=new Qs);var m=
Qs.i}void 0===e&&(e=f.resolve(Yu));Fu(g,e,m,k);m={zb:Ku,qc:Eu.i};f.providers.set(m.zb,m);Zu=f.resolve(Ku)}zv()})});
var px=Mk(function(){vu();var a=Al.getInstance(),b=Dl(119),c=1<window.devicePixelRatio;if(document.body&&hi(document.body,"exp-invert-logo"))if(c&&!hi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!hi(d,"inverted-hdpi")){var e=fi(d);gi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&hi(document.body,"inverted-hdpi")&&ii();if(b!=c){b="f"+(Math.floor(119/31)+1);d=El(b)||0;d=c?d|67108864:d&-67108865;0==d?delete zl[b]:(c=d.toString(16),
zl[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in zl)d.push(f+"="+encodeURIComponent(String(zl[f])));xl(b,d.join("&"),63072E3,a.j,c)}iv.i||(iv.i=new iv);a=iv.i;f=16623;var g=void 0===g?{}:g;Object.values(vs).includes(f)||(Yr(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.o=[];a.N=[];g.Qb?lv(a,f,g):mv(a,f,g)}),qx=Mk(function(){hx&&hx.sendAbandonmentPing&&hx.sendAbandonmentPing();
L("PL_ATT")&&Xv.dispose();for(var a=Wh,b=0,c=Nv.length;b<c;b++)a.fa(Nv[b]);Nv.length=0;Lv("//static.doubleclick.net/instream/ad_status.js");Qv=!1;Ek("DCLKSTAT",0);pe(jx,ix);hx&&(hx.removeEventListener("onVideoDataChange",kx),hx.destroy())});
window.addEventListener?(window.addEventListener("load",px),window.addEventListener("pagehide",qx)):window.attachEvent&&(window.attachEvent("onload",px),window.attachEvent("onunload",qx));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Yv);z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Zv);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Sv);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||ox);
z("yt.util.activity.init",B("yt.util.activity.init")||rq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||uq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||sq);}).call(this);
