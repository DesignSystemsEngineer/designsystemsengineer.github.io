import{S as t,i as e,s,a as n,c as r,q as a,d as o,b as l,e as c,f as $,m as f,t as i,g as m,h,j as p,n as g,k as u,o as d,p as x,l as y,r as w,F as v,B as E}from"./client.bb1d5cf3.js";import{G as b,a as D,H as j}from"./Heading.e1ee035c.js";function S(t,e,s){const n=t.slice();return n[1]=e[s],n}function F(t){let e;return{c(){e=g("Design Systems Engineer")},l(t){e=x(t,"Design Systems Engineer")},m(t,s){$(t,e,s)},d(t){t&&o(e)}}}function I(t){let e,s;return e=new j({props:{size:"XXXL",$$slots:{default:[F]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){f(e,t,n),s=!0},p(t,s){const n={};16&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){h(e,t)}}}function H(t){let e,s,n,r,a,l,c,f=t[1].title+"",i=B(t[1].date)+"";return{c(){e=p("li"),s=p("a"),n=g(f),a=g("\n          ("),l=g(i),c=g(")\n        "),this.h()},l(t){e=u(t,"LI",{});var r=d(e);s=u(r,"A",{rel:!0,href:!0});var $=d(s);n=x($,f),$.forEach(o),a=x(r,"\n          ("),l=x(r,i),c=x(r,")\n        "),r.forEach(o),this.h()},h(){y(s,"rel","prefetch"),y(s,"href",r="blog/"+t[1].slug)},m(t,r){$(t,e,r),w(e,s),w(s,n),w(e,a),w(e,l),w(e,c)},p(t,e){1&e&&f!==(f=t[1].title+"")&&v(n,f),1&e&&r!==(r="blog/"+t[1].slug)&&y(s,"href",r),1&e&&i!==(i=B(t[1].date)+"")&&v(l,i)},d(t){t&&o(e)}}}function L(t){let e,s,r,a,c=t[0],f=[];for(let e=0;e<c.length;e+=1)f[e]=H(S(t,c,e));return{c(){e=p("h1"),s=g("Recent posts"),r=n(),a=p("ul");for(let t=0;t<f.length;t+=1)f[t].c();this.h()},l(t){e=u(t,"H1",{});var n=d(e);s=x(n,"Recent posts"),n.forEach(o),r=l(t),a=u(t,"UL",{class:!0});var c=d(a);for(let t=0;t<f.length;t+=1)f[t].l(c);c.forEach(o),this.h()},h(){y(a,"class","svelte-99d933")},m(t,n){$(t,e,n),w(e,s),$(t,r,n),$(t,a,n);for(let t=0;t<f.length;t+=1)f[t].m(a,null)},p(t,e){if(1&e){let s;for(c=t[0],s=0;s<c.length;s+=1){const n=S(t,c,s);f[s]?f[s].p(n,e):(f[s]=H(n),f[s].c(),f[s].m(a,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=c.length}},d(t){t&&o(e),t&&o(r),t&&o(a),E(f,t)}}}function T(t){let e,s,a,p;return e=new D({props:{colSpan:"3",$$slots:{default:[I]},$$scope:{ctx:t}}}),a=new D({props:{colSpan:"6",$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment),s=n(),r(a.$$.fragment)},l(t){c(e.$$.fragment,t),s=l(t),c(a.$$.fragment,t)},m(t,n){f(e,t,n),$(t,s,n),f(a,t,n),p=!0},p(t,s){const n={};16&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const r={};17&s&&(r.$$scope={dirty:s,ctx:t}),a.$set(r)},i(t){p||(i(e.$$.fragment,t),i(a.$$.fragment,t),p=!0)},o(t){m(e.$$.fragment,t),m(a.$$.fragment,t),p=!1},d(t){h(e,t),t&&o(s),h(a,t)}}}function X(t){let e,s,p;return s=new b({props:{class:"content",$$slots:{default:[T]},$$scope:{ctx:t}}}),{c(){e=n(),r(s.$$.fragment),this.h()},l(t){a('[data-svelte="svelte-10h7psl"]',document.head).forEach(o),e=l(t),c(s.$$.fragment,t),this.h()},h(){document.title="Blog"},m(t,n){$(t,e,n),f(s,t,n),p=!0},p(t,[e]){const n={};17&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){p||(i(s.$$.fragment,t),p=!0)},o(t){m(s.$$.fragment,t),p=!1},d(t){t&&o(e),h(s,t)}}}function q({params:t,query:e}){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function B(t){const e=new Date(t),s=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),n=new Intl.DateTimeFormat("en",{month:"short"}).format(e);return`${new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e)}-${n}-${s}`}function R(t,e,s){let{posts:n}=e;return t.$$set=t=>{"posts"in t&&s(0,n=t.posts)},[n]}export default class extends t{constructor(t){super(),e(this,t,R,X,s,{posts:0})}}export{q as preload};
