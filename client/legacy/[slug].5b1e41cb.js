import{K as t,_ as n,a as e,b as r,c as a,i as s,d as o,S as c,s as u,v as i,w as f,x as l,j as p,y as $,z as h,l as m,A as v,o as d,B as y,C as g,D as x,e as w,t as b,G as j,f as R,g as D,h as G,L as P,m as S,p as k}from"./client.0338bb41.js";import{G as E,a as q}from"./GridItem.ca2eac24.js";function z(t,n,e,r,a,s,o){try{var c=t[s](o),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,a)}function A(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var s=t.apply(n,e);function o(t){z(s,r,a,o,c,"next",t)}function c(t){z(s,r,a,o,c,"throw",t)}o(void 0)}))}}function B(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var o=e(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return r(this,a)}}function C(t){var n,e,r,a,s,o=t[0].title+"",c=t[0].html+"";return{c:function(){n=w("h1"),e=b(o),r=i(),s=j(),this.h()},l:function(t){n=R(t,"H1",{});var a=D(n);e=G(a,o),a.forEach(p),r=$(t),s=j(),this.h()},h:function(){a=new P(s)},m:function(t,o){m(t,n,o),S(n,e),m(t,r,o),a.m(c,t,o),m(t,s,o)},p:function(t,n){1&n&&o!==(o=t[0].title+"")&&k(e,o),1&n&&c!==(c=t[0].html+"")&&a.p(c)},d:function(t){t&&p(n),t&&p(r),t&&p(s),t&&a.d()}}}function H(t){var n,e;return n=new q({props:{colSpan:"6",$$slots:{default:[C]},$$scope:{ctx:t}}}),{c:function(){f(n.$$.fragment)},l:function(t){h(n.$$.fragment,t)},m:function(t,r){v(n,t,r),e=!0},p:function(t,e){var r={};3&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i:function(t){e||(y(n.$$.fragment,t),e=!0)},o:function(t){g(n.$$.fragment,t),e=!1},d:function(t){x(n,t)}}}function I(t){var n,e,r,a;return document.title=n=t[0].title,r=new E({props:{class:"content",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c:function(){e=i(),f(r.$$.fragment)},l:function(t){l('[data-svelte="svelte-iu3vwn"]',document.head).forEach(p),e=$(t),h(r.$$.fragment,t)},m:function(t,n){m(t,e,n),v(r,t,n),a=!0},p:function(t,e){var s=d(e,1)[0];(!a||1&s)&&n!==(n=t[0].title)&&(document.title=n);var o={};3&s&&(o.$$scope={dirty:s,ctx:t}),r.$set(o)},i:function(t){a||(y(r.$$.fragment,t),a=!0)},o:function(t){g(r.$$.fragment,t),a=!1},d:function(t){t&&p(e),x(r,t)}}}function K(t){return L.apply(this,arguments)}function L(){return(L=A(t.mark((function n(e){var r,a,s;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,e.query,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:s});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function _(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var F=function(t){n(r,c);var e=B(r);function r(t){var n;return a(this,r),n=e.call(this),s(o(n),t,_,I,u,{post:0}),n}return r}();export default F;export{K as preload};
