import{S as t,i as s,s as e,G as n,a,c as $,q as o,d as r,b as c,e as l,f,m as i,t as m,g as p,h as u,u as g,H as d,j as h,p as x,F as w,k as y,l as b,r as j,o as k,L as v,M as S}from"./client.391f24f4.js";import{L as E}from"./Link.f6a6804c.js";function L(t){let s;return{c(){s=x("Design Systems Engineer")},l(t){s=j(t,"Design Systems Engineer")},m(t,e){f(t,s,e)},d(t){t&&r(s)}}}function q(t){let s;return{c(){s=x("Back to blog list")},l(t){s=j(t,"Back to blog list")},m(t,e){f(t,s,e)},d(t){t&&r(s)}}}function B(t){let s,e,n,o;return s=new d({props:{size:"M",$$slots:{default:[L]},$$scope:{ctx:t}}}),n=new E({props:{href:"blog",iconId:"back-chevron",$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){$(s.$$.fragment),e=a(),$(n.$$.fragment)},l(t){l(s.$$.fragment,t),e=c(t),l(n.$$.fragment,t)},m(t,a){i(s,t,a),f(t,e,a),i(n,t,a),o=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){o||(m(s.$$.fragment,t),m(n.$$.fragment,t),o=!0)},o(t){p(s.$$.fragment,t),p(n.$$.fragment,t),o=!1},d(t){u(s,t),t&&r(e),u(n,t)}}}function D(t){let s,e,n,$,o,l=t[0].title+"",i=t[0].html+"";return{c(){s=h("h1"),e=x(l),n=a(),o=w(),this.h()},l(t){s=y(t,"H1",{});var a=b(s);e=j(a,l),a.forEach(r),n=c(t),o=w(),this.h()},h(){$=new S(o)},m(t,a){f(t,s,a),k(s,e),f(t,n,a),$.m(i,t,a),f(t,o,a)},p(t,s){1&s&&l!==(l=t[0].title+"")&&v(e,l),1&s&&i!==(i=t[0].html+"")&&$.p(i)},d(t){t&&r(s),t&&r(n),t&&r(o),t&&$.d()}}}function H(t){let s,e,n,o;return s=new g({props:{colSpan:"3",$$slots:{default:[B]},$$scope:{ctx:t}}}),n=new g({props:{colSpan:"6",$$slots:{default:[D]},$$scope:{ctx:t}}}),{c(){$(s.$$.fragment),e=a(),$(n.$$.fragment)},l(t){l(s.$$.fragment,t),e=c(t),l(n.$$.fragment,t)},m(t,a){i(s,t,a),f(t,e,a),i(n,t,a),o=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a);const $={};3&e&&($.$$scope={dirty:e,ctx:t}),n.$set($)},i(t){o||(m(s.$$.fragment,t),m(n.$$.fragment,t),o=!0)},o(t){p(s.$$.fragment,t),p(n.$$.fragment,t),o=!1},d(t){u(s,t),t&&r(e),u(n,t)}}}function M(t){let s,e,g,d;return document.title=s=t[0].title,g=new n({props:{class:"content",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){e=a(),$(g.$$.fragment)},l(t){o('[data-svelte="svelte-iu3vwn"]',document.head).forEach(r),e=c(t),l(g.$$.fragment,t)},m(t,s){f(t,e,s),i(g,t,s),d=!0},p(t,[e]){(!d||1&e)&&s!==(s=t[0].title)&&(document.title=s);const n={};3&e&&(n.$$scope={dirty:e,ctx:t}),g.$set(n)},i(t){d||(m(g.$$.fragment,t),d=!0)},o(t){p(g.$$.fragment,t),d=!1},d(t){t&&r(e),u(g,t)}}}async function z({params:t,query:s}){const e=await this.fetch(`blog/${t.slug}.json`),n=await e.json();if(200===e.status)return{post:n};this.error(e.status,n.message)}function F(t,s,e){let{post:n}=s;return t.$$set=t=>{"post"in t&&e(0,n=t.post)},[n]}export default class extends t{constructor(t){super(),s(this,t,F,M,e,{post:0})}}export{z as preload};
