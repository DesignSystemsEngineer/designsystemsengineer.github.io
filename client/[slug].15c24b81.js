import{S as t,i as e,s,a as n,c as r,q as o,d as a,b as $,e as c,f as l,m as i,t as f,g as m,h as u,j as g,n as p,k as d,o as h,p as x,l as y,r as v,F as w,z as j,A as S,B as C}from"./client.ee5b4a18.js";import"./Icon.78531663.js";import{C as I,B as L}from"./CourseSummary.d45fc71d.js";import{G as E,a as _}from"./GridItem.1830c396.js";import{H as b}from"./Heading.fb7f20fe.js";import{L as k}from"./Link.72623967.js";function B(t,e,s){const n=t.slice();return n[1]=e[s].title,n[2]=e[s].description,n[3]=e[s].slug,n}function D(t){let e;return{c(){e=p("Design Systems Engineer")},l(t){e=x(t,"Design Systems Engineer")},m(t,s){l(t,e,s)},d(t){t&&a(e)}}}function z(t){let e;return{c(){e=p("Back to course list")},l(t){e=x(t,"Back to course list")},m(t,s){l(t,e,s)},d(t){t&&a(e)}}}function H(t){let e,s,o,g;return e=new b({props:{size:"XL",$$slots:{default:[D]},$$scope:{ctx:t}}}),o=new k({props:{href:"courses",iconId:"back-chevron",$$slots:{default:[z]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment),s=n(),r(o.$$.fragment)},l(t){c(e.$$.fragment,t),s=$(t),c(o.$$.fragment,t)},m(t,n){i(e,t,n),l(t,s,n),i(o,t,n),g=!0},p(t,s){const n={};64&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const r={};64&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){g||(f(e.$$.fragment,t),f(o.$$.fragment,t),g=!0)},o(t){m(e.$$.fragment,t),m(o.$$.fragment,t),g=!1},d(t){u(e,t),t&&a(s),u(o,t)}}}function V(t){let e,s=t[1]+"";return{c(){e=p(s)},l(t){e=x(t,s)},m(t,s){l(t,e,s)},p(t,n){1&n&&s!==(s=t[1]+"")&&w(e,s)},d(t){t&&a(e)}}}function q(t){let e,s;return e=new k({props:{href:"/lessons/"+t[3],$$slots:{default:[V]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,n){i(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.href="/lessons/"+t[3]),65&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(f(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){u(e,t)}}}function A(t){let e;return{c(){e=p("Start Watching")},l(t){e=x(t,"Start Watching")},m(t,s){l(t,e,s)},d(t){t&&a(e)}}}function G(t){let e,s,o,j,S,C,I,E,_,k,B,D=t[2]+"";return j=new b({props:{size:"L",$$slots:{default:[q]},$$scope:{ctx:t}}}),_=new L({props:{isLarge:!0,isCTA:!0,href:"/lessons/"+t[3],iconId:"play",$$slots:{default:[A]},$$scope:{ctx:t}}}),{c(){e=g("hr"),s=n(),o=g("div"),r(j.$$.fragment),S=n(),C=g("div"),I=p(D),E=n(),r(_.$$.fragment),k=n(),this.h()},l(t){e=d(t,"HR",{class:!0}),s=$(t),o=d(t,"DIV",{class:!0});var n=h(o);c(j.$$.fragment,n),S=$(n),C=d(n,"DIV",{class:!0});var r=h(C);I=x(r,D),r.forEach(a),E=$(n),c(_.$$.fragment,n),k=$(n),n.forEach(a),this.h()},h(){y(e,"class","dse-hr svelte-i0igso"),y(C,"class","dse-lesson__description"),y(o,"class","dse-course-summary__lesson")},m(t,n){l(t,e,n),l(t,s,n),l(t,o,n),i(j,o,null),v(o,S),v(o,C),v(C,I),v(o,E),i(_,o,null),v(o,k),B=!0},p(t,e){const s={};65&e&&(s.$$scope={dirty:e,ctx:t}),j.$set(s),(!B||1&e)&&D!==(D=t[2]+"")&&w(I,D);const n={};1&e&&(n.href="/lessons/"+t[3]),64&e&&(n.$$scope={dirty:e,ctx:t}),_.$set(n)},i(t){B||(f(j.$$.fragment,t),f(_.$$.fragment,t),B=!0)},o(t){m(j.$$.fragment,t),m(_.$$.fragment,t),B=!1},d(t){t&&a(e),t&&a(s),t&&a(o),u(j),u(_)}}}function U(t){let e,s,o,p;e=new I({props:{title:t[0].title,description:t[0].description,videoCount:t[0].videoCount,duration:t[0].duration,isLarge:!0,imageUrl:t[0].image}});let x=t[0].lessons,v=[];for(let e=0;e<x.length;e+=1)v[e]=G(B(t,x,e));const w=t=>m(v[t],1,1,(()=>{v[t]=null}));return{c(){r(e.$$.fragment),s=n(),o=g("div");for(let t=0;t<v.length;t+=1)v[t].c();this.h()},l(t){c(e.$$.fragment,t),s=$(t),o=d(t,"DIV",{class:!0});var n=h(o);for(let t=0;t<v.length;t+=1)v[t].l(n);n.forEach(a),this.h()},h(){y(o,"class","dse-course-summary__lessonList")},m(t,n){i(e,t,n),l(t,s,n),l(t,o,n);for(let t=0;t<v.length;t+=1)v[t].m(o,null);p=!0},p(t,s){const n={};if(1&s&&(n.title=t[0].title),1&s&&(n.description=t[0].description),1&s&&(n.videoCount=t[0].videoCount),1&s&&(n.duration=t[0].duration),1&s&&(n.imageUrl=t[0].image),e.$set(n),1&s){let e;for(x=t[0].lessons,e=0;e<x.length;e+=1){const n=B(t,x,e);v[e]?(v[e].p(n,s),f(v[e],1)):(v[e]=G(n),v[e].c(),f(v[e],1),v[e].m(o,null))}for(j(),e=x.length;e<v.length;e+=1)w(e);S()}},i(t){if(!p){f(e.$$.fragment,t);for(let t=0;t<x.length;t+=1)f(v[t]);p=!0}},o(t){m(e.$$.fragment,t),v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)m(v[t]);p=!1},d(t){u(e,t),t&&a(s),t&&a(o),C(v,t)}}}function W(t){let e,s,o,g;return e=new _({props:{colSpan:"3",$$slots:{default:[H]},$$scope:{ctx:t}}}),o=new _({props:{colSpan:"6",$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment),s=n(),r(o.$$.fragment)},l(t){c(e.$$.fragment,t),s=$(t),c(o.$$.fragment,t)},m(t,n){i(e,t,n),l(t,s,n),i(o,t,n),g=!0},p(t,s){const n={};64&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const r={};65&s&&(r.$$scope={dirty:s,ctx:t}),o.$set(r)},i(t){g||(f(e.$$.fragment,t),f(o.$$.fragment,t),g=!0)},o(t){m(e.$$.fragment,t),m(o.$$.fragment,t),g=!1},d(t){u(e,t),t&&a(s),u(o,t)}}}function F(t){let e,s,g,p;return document.title=e=t[0].title,g=new E({props:{class:"content",$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){s=n(),r(g.$$.fragment)},l(t){o('[data-svelte="svelte-1jbhcf4"]',document.head).forEach(a),s=$(t),c(g.$$.fragment,t)},m(t,e){l(t,s,e),i(g,t,e),p=!0},p(t,[s]){(!p||1&s)&&e!==(e=t[0].title)&&(document.title=e);const n={};65&s&&(n.$$scope={dirty:s,ctx:t}),g.$set(n)},i(t){p||(f(g.$$.fragment,t),p=!0)},o(t){m(g.$$.fragment,t),p=!1},d(t){t&&a(s),u(g,t)}}}async function R({params:t,query:e}){const s=await this.fetch(`courses/${t.slug}.json`),n=await s.json();if(200===s.status)return{course:n};this.error(s.status,n.message)}function T(t,e,s){let{course:n}=e;return t.$$set=t=>{"course"in t&&s(0,n=t.course)},[n]}export default class extends t{constructor(t){super(),e(this,t,T,F,s,{course:0})}}export{R as preload};
