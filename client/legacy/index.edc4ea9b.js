import{_ as t,a as n,b as e,c as r,i as o,d as c,S as a,s as f,e as s,f as i,q as u,g as l,h as $,j as h,k as m,m as p,l as g,t as d,n as v,o as y,p as x,v as w,r as D,w as E,x as R,u as j,y as S,L as I,H as b}from"./client.eef7f290.js";import{G as H,a as L}from"./GridItem.09112f33.js";import{H as F}from"./Heading.d989a470.js";function T(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var a=n(this).constructor;o=Reflect.construct(c,arguments,a)}else o=c.apply(this,arguments);return e(this,o)}}function X(t,n,e){var r=t.slice();return r[1]=n[e],r}function q(t){var n;return{c:function(){n=w("Design Systems Engineer")},l:function(t){n=R(t,"Design Systems Engineer")},m:function(t,e){m(t,n,e)},d:function(t){t&&l(n)}}}function G(t){var n,e;return n=new F({props:{size:"XXXL",$$slots:{default:[q]},$$scope:{ctx:t}}}),{c:function(){i(n.$$.fragment)},l:function(t){h(n.$$.fragment,t)},m:function(t,r){p(n,t,r),e=!0},p:function(t,e){var r={};16&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i:function(t){e||(d(n.$$.fragment,t),e=!0)},o:function(t){v(n.$$.fragment,t),e=!1},d:function(t){y(n,t)}}}function k(t){var n,e,r,o,c,a,f,s=t[1].title+"",i=U(t[1].date)+"";return{c:function(){n=x("li"),e=x("a"),r=w(s),c=w(" ("),a=w(i),f=w(")"),this.h()},l:function(t){n=D(t,"LI",{});var o=E(n);e=D(o,"A",{rel:!0,href:!0});var u=E(e);r=R(u,s),u.forEach(l),c=R(o," ("),a=R(o,i),f=R(o,")"),o.forEach(l),this.h()},h:function(){j(e,"rel","prefetch"),j(e,"href",o="blog/"+t[1].slug)},m:function(t,o){m(t,n,o),S(n,e),S(e,r),S(n,c),S(n,a),S(n,f)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&I(r,s),1&n&&o!==(o="blog/"+t[1].slug)&&j(e,"href",o),1&n&&i!==(i=U(t[1].date)+"")&&I(a,i)},d:function(t){t&&l(n)}}}function z(t){for(var n,e,r,o,c=t[0],a=[],f=0;f<c.length;f+=1)a[f]=k(X(t,c,f));return{c:function(){n=x("h1"),e=w("Recent posts"),r=s(),o=x("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){n=D(t,"H1",{});var c=E(n);e=R(c,"Recent posts"),c.forEach(l),r=$(t),o=D(t,"UL",{class:!0});for(var f=E(o),s=0;s<a.length;s+=1)a[s].l(f);f.forEach(l),this.h()},h:function(){j(o,"class","svelte-99d933")},m:function(t,c){m(t,n,c),S(n,e),m(t,r,c),m(t,o,c);for(var f=0;f<a.length;f+=1)a[f].m(o,null)},p:function(t,n){if(1&n){var e;for(c=t[0],e=0;e<c.length;e+=1){var r=X(t,c,e);a[e]?a[e].p(r,n):(a[e]=k(r),a[e].c(),a[e].m(o,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=c.length}},d:function(t){t&&l(n),t&&l(r),t&&l(o),b(a,t)}}}function A(t){var n,e,r,o;return n=new L({props:{colSpan:"3",$$slots:{default:[G]},$$scope:{ctx:t}}}),r=new L({props:{colSpan:"6",$$slots:{default:[z]},$$scope:{ctx:t}}}),{c:function(){i(n.$$.fragment),e=s(),i(r.$$.fragment)},l:function(t){h(n.$$.fragment,t),e=$(t),h(r.$$.fragment,t)},m:function(t,c){p(n,t,c),m(t,e,c),p(r,t,c),o=!0},p:function(t,e){var o={};16&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);var c={};17&e&&(c.$$scope={dirty:e,ctx:t}),r.$set(c)},i:function(t){o||(d(n.$$.fragment,t),d(r.$$.fragment,t),o=!0)},o:function(t){v(n.$$.fragment,t),v(r.$$.fragment,t),o=!1},d:function(t){y(n,t),t&&l(e),y(r,t)}}}function B(t){var n,e,r;return e=new H({props:{class:"content",$$slots:{default:[A]},$$scope:{ctx:t}}}),{c:function(){n=s(),i(e.$$.fragment),this.h()},l:function(t){u('[data-svelte="svelte-10h7psl"]',document.head).forEach(l),n=$(t),h(e.$$.fragment,t),this.h()},h:function(){document.title="Blog"},m:function(t,o){m(t,n,o),p(e,t,o),r=!0},p:function(t,n){var r=g(n,1)[0],o={};17&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i:function(t){r||(d(e.$$.fragment,t),r=!0)},o:function(t){v(e.$$.fragment,t),r=!1},d:function(t){t&&l(n),y(e,t)}}}function P(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function U(t){var n=new Date(t),e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(n),r=new Intl.DateTimeFormat("en",{month:"short"}).format(n),o=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(n);return"".concat(o,"-").concat(r,"-").concat(e)}function _(t,n,e){var r=n.posts;return t.$$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}var C=function(n){t(s,a);var e=T(s);function s(t){var n;return r(this,s),n=e.call(this),o(c(n),t,_,B,f,{posts:0}),n}return s}();export default C;export{P as preload};
