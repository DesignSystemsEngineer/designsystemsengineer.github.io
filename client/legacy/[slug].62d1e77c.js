import{R as t,_ as n,a as e,b as r,c as o,i as s,d as c,S as a,s as f,e as i,f as u,q as $,g as p,h as l,j as m,k as g,m as d,l as h,t as v,n as x,o as y,p as b,v as w,D as j,r as k,w as R,x as S,M as D,y as E,L as H}from"./client.3f15bfb6.js";import"./Icon.ee966f98.js";import{G as q,a as B,H as G}from"./Heading.08a57889.js";import{_ as I,L}from"./asyncToGenerator.1fd09730.js";function M(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,s=e(t);if(n){var c=e(this).constructor;o=Reflect.construct(s,arguments,c)}else o=s.apply(this,arguments);return r(this,o)}}function _(t){var n;return{c:function(){n=w("Design Systems Engineer")},l:function(t){n=S(t,"Design Systems Engineer")},m:function(t,e){g(t,n,e)},d:function(t){t&&p(n)}}}function z(t){var n;return{c:function(){n=w("Back to blog list")},l:function(t){n=S(t,"Back to blog list")},m:function(t,e){g(t,n,e)},d:function(t){t&&p(n)}}}function P(t){var n,e,r,o;return n=new G({props:{size:"M",$$slots:{default:[_]},$$scope:{ctx:t}}}),r=new L({props:{href:"blog",iconId:"back-chevron",$$slots:{default:[z]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment),e=i(),u(r.$$.fragment)},l:function(t){m(n.$$.fragment,t),e=l(t),m(r.$$.fragment,t)},m:function(t,s){d(n,t,s),g(t,e,s),d(r,t,s),o=!0},p:function(t,e){var o={};2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);var s={};2&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s)},i:function(t){o||(v(n.$$.fragment,t),v(r.$$.fragment,t),o=!0)},o:function(t){x(n.$$.fragment,t),x(r.$$.fragment,t),o=!1},d:function(t){y(n,t),t&&p(e),y(r,t)}}}function T(t){var n,e,r,o,s,c=t[0].title+"",a=t[0].html+"";return{c:function(){n=b("h1"),e=w(c),r=i(),s=j(),this.h()},l:function(t){n=k(t,"H1",{});var o=R(n);e=S(o,c),o.forEach(p),r=l(t),s=j(),this.h()},h:function(){o=new D(s)},m:function(t,c){g(t,n,c),E(n,e),g(t,r,c),o.m(a,t,c),g(t,s,c)},p:function(t,n){1&n&&c!==(c=t[0].title+"")&&H(e,c),1&n&&a!==(a=t[0].html+"")&&o.p(a)},d:function(t){t&&p(n),t&&p(r),t&&p(s),t&&o.d()}}}function A(t){var n,e,r,o;return n=new B({props:{colSpan:"3",$$slots:{default:[P]},$$scope:{ctx:t}}}),r=new B({props:{colSpan:"6",$$slots:{default:[T]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment),e=i(),u(r.$$.fragment)},l:function(t){m(n.$$.fragment,t),e=l(t),m(r.$$.fragment,t)},m:function(t,s){d(n,t,s),g(t,e,s),d(r,t,s),o=!0},p:function(t,e){var o={};2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);var s={};3&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s)},i:function(t){o||(v(n.$$.fragment,t),v(r.$$.fragment,t),o=!0)},o:function(t){x(n.$$.fragment,t),x(r.$$.fragment,t),o=!1},d:function(t){y(n,t),t&&p(e),y(r,t)}}}function C(t){var n,e,r,o;return document.title=n=t[0].title,r=new q({props:{class:"content",$$slots:{default:[A]},$$scope:{ctx:t}}}),{c:function(){e=i(),u(r.$$.fragment)},l:function(t){$('[data-svelte="svelte-iu3vwn"]',document.head).forEach(p),e=l(t),m(r.$$.fragment,t)},m:function(t,n){g(t,e,n),d(r,t,n),o=!0},p:function(t,e){var s=h(e,1)[0];(!o||1&s)&&n!==(n=t[0].title)&&(document.title=n);var c={};3&s&&(c.$$scope={dirty:s,ctx:t}),r.$set(c)},i:function(t){o||(v(r.$$.fragment,t),o=!0)},o:function(t){x(r.$$.fragment,t),o=!1},d:function(t){t&&p(e),y(r,t)}}}function F(t){return J.apply(this,arguments)}function J(){return(J=I(t.mark((function n(e){var r,o,s;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,e.query,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return o=t.sent,t.next=6,o.json();case 6:if(s=t.sent,200!==o.status){t.next=11;break}return t.abrupt("return",{post:s});case 11:this.error(o.status,s.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function K(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var N=function(t){n(r,a);var e=M(r);function r(t){var n;return o(this,r),n=e.call(this),s(c(n),t,K,C,f,{post:0}),n}return r}();export default N;export{F as preload};
