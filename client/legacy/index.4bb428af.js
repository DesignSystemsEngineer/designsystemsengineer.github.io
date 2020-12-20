import{_ as t,a as n,b as e,c as r,i as o,d as c,S as a,s,G as f,e as i,f as u,q as l,g as $,h,j as m,k as p,m as g,l as d,t as v,n as y,o as x,p as w,r as D,w as E,u as R,x as S,y as j,v as b,z as I,N as F,J as H}from"./client.80e2d1dd.js";import{H as L}from"./Heading.4136e454.js";function T(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,c=n(t);if(r){var a=n(this).constructor;o=Reflect.construct(c,arguments,a)}else o=c.apply(this,arguments);return e(this,o)}}function X(t,n,e){var r=t.slice();return r[1]=n[e],r}function q(t){var n;return{c:function(){n=E("Design Systems Engineer")},l:function(t){n=j(t,"Design Systems Engineer")},m:function(t,e){p(t,n,e)},d:function(t){t&&$(n)}}}function z(t){var n,e;return n=new L({props:{size:"XXXL",$$slots:{default:[q]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment)},l:function(t){m(n.$$.fragment,t)},m:function(t,r){g(n,t,r),e=!0},p:function(t,e){var r={};16&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i:function(t){e||(v(n.$$.fragment,t),e=!0)},o:function(t){y(n.$$.fragment,t),e=!1},d:function(t){x(n,t)}}}function k(t){var n,e,r,o,c,a,s,f=t[1].title+"",i=N(t[1].date)+"";return{c:function(){n=D("li"),e=D("a"),r=E(f),c=E("\n          ("),a=E(i),s=E(")\n        "),this.h()},l:function(t){n=R(t,"LI",{});var o=S(n);e=R(o,"A",{rel:!0,href:!0});var u=S(e);r=j(u,f),u.forEach($),c=j(o,"\n          ("),a=j(o,i),s=j(o,")\n        "),o.forEach($),this.h()},h:function(){b(e,"rel","prefetch"),b(e,"href",o="blog/"+t[1].slug)},m:function(t,o){p(t,n,o),I(n,e),I(e,r),I(n,c),I(n,a),I(n,s)},p:function(t,n){1&n&&f!==(f=t[1].title+"")&&F(r,f),1&n&&o!==(o="blog/"+t[1].slug)&&b(e,"href",o),1&n&&i!==(i=N(t[1].date)+"")&&F(a,i)},d:function(t){t&&$(n)}}}function A(t){for(var n,e,r,o,c=t[0],a=[],s=0;s<c.length;s+=1)a[s]=k(X(t,c,s));return{c:function(){n=D("h1"),e=E("Recent posts"),r=i(),o=D("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){n=R(t,"H1",{});var c=S(n);e=j(c,"Recent posts"),c.forEach($),r=h(t),o=R(t,"UL",{class:!0});for(var s=S(o),f=0;f<a.length;f+=1)a[f].l(s);s.forEach($),this.h()},h:function(){b(o,"class","svelte-99d933")},m:function(t,c){p(t,n,c),I(n,e),p(t,r,c),p(t,o,c);for(var s=0;s<a.length;s+=1)a[s].m(o,null)},p:function(t,n){if(1&n){var e;for(c=t[0],e=0;e<c.length;e+=1){var r=X(t,c,e);a[e]?a[e].p(r,n):(a[e]=k(r),a[e].c(),a[e].m(o,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=c.length}},d:function(t){t&&$(n),t&&$(r),t&&$(o),H(a,t)}}}function B(t){var n,e,r,o;return n=new w({props:{colSpan:"3",$$slots:{default:[z]},$$scope:{ctx:t}}}),r=new w({props:{colSpan:"6",$$slots:{default:[A]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment),e=i(),u(r.$$.fragment)},l:function(t){m(n.$$.fragment,t),e=h(t),m(r.$$.fragment,t)},m:function(t,c){g(n,t,c),p(t,e,c),g(r,t,c),o=!0},p:function(t,e){var o={};16&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);var c={};17&e&&(c.$$scope={dirty:e,ctx:t}),r.$set(c)},i:function(t){o||(v(n.$$.fragment,t),v(r.$$.fragment,t),o=!0)},o:function(t){y(n.$$.fragment,t),y(r.$$.fragment,t),o=!1},d:function(t){x(n,t),t&&$(e),x(r,t)}}}function G(t){var n,e,r;return e=new f({props:{class:"content",$$slots:{default:[B]},$$scope:{ctx:t}}}),{c:function(){n=i(),u(e.$$.fragment),this.h()},l:function(t){l('[data-svelte="svelte-10h7psl"]',document.head).forEach($),n=h(t),m(e.$$.fragment,t),this.h()},h:function(){document.title="Blog"},m:function(t,o){p(t,n,o),g(e,t,o),r=!0},p:function(t,n){var r=d(n,1)[0],o={};17&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)},i:function(t){r||(v(e.$$.fragment,t),r=!0)},o:function(t){y(e.$$.fragment,t),r=!1},d:function(t){t&&$(n),x(e,t)}}}function J(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function N(t){var n=new Date(t),e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(n),r=new Intl.DateTimeFormat("en",{month:"short"}).format(n),o=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(n);return"".concat(o,"-").concat(r,"-").concat(e)}function P(t,n,e){var r=n.posts;return t.$$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}var U=function(n){t(f,a);var e=T(f);function f(t){var n;return r(this,f),n=e.call(this),o(c(n),t,P,G,s,{posts:0}),n}return f}();export default U;export{J as preload};
