import{S as t,i as e,s,G as n,a as r,c as o,q as a,d as $,b as c,e as l,f as i,m as f,t as m,g as u,h as g,j as d,k as p,o as h,l as x,p as y,r as v,n as w,u as j,F as C,w as S,x as L,C as D,D as E}from"./client.a63a032c.js";import{C as _}from"./CourseSummary.08b30215.js";import{H as b}from"./Heading.7661e443.js";import{L as k}from"./Link.442ed6bd.js";function I(t,e,s){const n=t.slice();return n[1]=e[s].title,n[2]=e[s].description,n[3]=e[s].slug,n}function B(t){let e;return{c(){e=h("Design Systems Engineer")},l(t){e=v(t,"Design Systems Engineer")},m(t,s){i(t,e,s)},d(t){t&&$(e)}}}function H(t){let e;return{c(){e=h("Back to course list")},l(t){e=v(t,"Back to course list")},m(t,s){i(t,e,s)},d(t){t&&$(e)}}}function V(t){let e,s,n,a;return e=new b({props:{size:"XL",$$slots:{default:[B]},$$scope:{ctx:t}}}),n=new k({props:{href:"courses",iconId:"back-chevron",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),s=r(),o(n.$$.fragment)},l(t){l(e.$$.fragment,t),s=c(t),l(n.$$.fragment,t)},m(t,r){f(e,t,r),i(t,s,r),f(n,t,r),a=!0},p(t,s){const r={};64&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const o={};64&s&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(t){a||(m(e.$$.fragment,t),m(n.$$.fragment,t),a=!0)},o(t){u(e.$$.fragment,t),u(n.$$.fragment,t),a=!1},d(t){g(e,t),t&&$(s),g(n,t)}}}function q(t){let e,s=t[1]+"";return{c(){e=h(s)},l(t){e=v(t,s)},m(t,s){i(t,e,s)},p(t,n){1&n&&s!==(s=t[1]+"")&&C(e,s)},d(t){t&&$(e)}}}function z(t){let e,s;return e=new k({props:{href:"/lessons/"+t[3],$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){f(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.href="/lessons/"+t[3]),65&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function U(t){let e;return{c(){e=h("Start Watching")},l(t){e=v(t,"Start Watching")},m(t,s){i(t,e,s)},d(t){t&&$(e)}}}function W(t){let e,s,n,a,d,S,L,D,_,k,I,B=t[2]+"";return a=new b({props:{size:"L",$$slots:{default:[z]},$$scope:{ctx:t}}}),_=new E({props:{isLarge:!0,isCTA:!0,href:"/lessons/"+t[3],iconId:"play",$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){e=p("hr"),s=r(),n=p("div"),o(a.$$.fragment),d=r(),S=p("div"),L=h(B),D=r(),o(_.$$.fragment),k=r(),this.h()},l(t){e=x(t,"HR",{class:!0}),s=c(t),n=x(t,"DIV",{class:!0});var r=y(n);l(a.$$.fragment,r),d=c(r),S=x(r,"DIV",{class:!0});var o=y(S);L=v(o,B),o.forEach($),D=c(r),l(_.$$.fragment,r),k=c(r),r.forEach($),this.h()},h(){w(e,"class","dse-hr svelte-i0igso"),w(S,"class","dse-lesson__description"),w(n,"class","dse-course-summary__lesson")},m(t,r){i(t,e,r),i(t,s,r),i(t,n,r),f(a,n,null),j(n,d),j(n,S),j(S,L),j(n,D),f(_,n,null),j(n,k),I=!0},p(t,e){const s={};65&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s),(!I||1&e)&&B!==(B=t[2]+"")&&C(L,B);const n={};1&e&&(n.href="/lessons/"+t[3]),64&e&&(n.$$scope={dirty:e,ctx:t}),_.$set(n)},i(t){I||(m(a.$$.fragment,t),m(_.$$.fragment,t),I=!0)},o(t){u(a.$$.fragment,t),u(_.$$.fragment,t),I=!1},d(t){t&&$(e),t&&$(s),t&&$(n),g(a),g(_)}}}function A(t){let e,s,n,a;e=new _({props:{title:t[0].title,description:t[0].description,videoCount:t[0].videoCount,duration:t[0].duration,isLarge:!0,imageUrl:t[0].image}});let d=t[0].lessons,h=[];for(let e=0;e<d.length;e+=1)h[e]=W(I(t,d,e));const v=t=>u(h[t],1,1,(()=>{h[t]=null}));return{c(){o(e.$$.fragment),s=r(),n=p("div");for(let t=0;t<h.length;t+=1)h[t].c();this.h()},l(t){l(e.$$.fragment,t),s=c(t),n=x(t,"DIV",{class:!0});var r=y(n);for(let t=0;t<h.length;t+=1)h[t].l(r);r.forEach($),this.h()},h(){w(n,"class","dse-course-summary__lessonList")},m(t,r){f(e,t,r),i(t,s,r),i(t,n,r);for(let t=0;t<h.length;t+=1)h[t].m(n,null);a=!0},p(t,s){const r={};if(1&s&&(r.title=t[0].title),1&s&&(r.description=t[0].description),1&s&&(r.videoCount=t[0].videoCount),1&s&&(r.duration=t[0].duration),1&s&&(r.imageUrl=t[0].image),e.$set(r),1&s){let e;for(d=t[0].lessons,e=0;e<d.length;e+=1){const r=I(t,d,e);h[e]?(h[e].p(r,s),m(h[e],1)):(h[e]=W(r),h[e].c(),m(h[e],1),h[e].m(n,null))}for(S(),e=d.length;e<h.length;e+=1)v(e);L()}},i(t){if(!a){m(e.$$.fragment,t);for(let t=0;t<d.length;t+=1)m(h[t]);a=!0}},o(t){u(e.$$.fragment,t),h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)u(h[t]);a=!1},d(t){g(e,t),t&&$(s),t&&$(n),D(h,t)}}}function F(t){let e,s,n,a;return e=new d({props:{colSpan:"3",$$slots:{default:[V]},$$scope:{ctx:t}}}),n=new d({props:{colSpan:"6",$$slots:{default:[A]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),s=r(),o(n.$$.fragment)},l(t){l(e.$$.fragment,t),s=c(t),l(n.$$.fragment,t)},m(t,r){f(e,t,r),i(t,s,r),f(n,t,r),a=!0},p(t,s){const r={};64&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const o={};65&s&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(t){a||(m(e.$$.fragment,t),m(n.$$.fragment,t),a=!0)},o(t){u(e.$$.fragment,t),u(n.$$.fragment,t),a=!1},d(t){g(e,t),t&&$(s),g(n,t)}}}function G(t){let e,s,d,p;return document.title=e=t[0].title,d=new n({props:{class:"content",$$slots:{default:[F]},$$scope:{ctx:t}}}),{c(){s=r(),o(d.$$.fragment)},l(t){a('[data-svelte="svelte-1jbhcf4"]',document.head).forEach($),s=c(t),l(d.$$.fragment,t)},m(t,e){i(t,s,e),f(d,t,e),p=!0},p(t,[s]){(!p||1&s)&&e!==(e=t[0].title)&&(document.title=e);const n={};65&s&&(n.$$scope={dirty:s,ctx:t}),d.$set(n)},i(t){p||(m(d.$$.fragment,t),p=!0)},o(t){u(d.$$.fragment,t),p=!1},d(t){t&&$(s),g(d,t)}}}async function R({params:t,query:e}){const s=await this.fetch(`courses/${t.slug}.json`),n=await s.json();if(200===s.status)return{course:n};this.error(s.status,n.message)}function T(t,e,s){let{course:n}=e;return t.$$set=t=>{"course"in t&&s(0,n=t.course)},[n]}export default class extends t{constructor(t){super(),e(this,t,T,G,s,{course:0})}}export{R as preload};
