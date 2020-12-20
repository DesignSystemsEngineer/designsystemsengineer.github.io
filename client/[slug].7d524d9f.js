import{S as t,i as e,s,G as n,a as r,c as o,q as a,d as $,b as c,e as l,f as i,m as f,t as m,g as u,h as g,u as d,H as p,j as h,p as x,k as y,l as v,r as w,n as L,o as S,L as j,z as E,A as _,J as k,K as C}from"./client.edd1ee6f.js";import{C as D}from"./CourseSummary.0c5dd46c.js";import{L as I}from"./Link.da22c655.js";function b(t,e,s){const n=t.slice();return n[1]=e[s].title,n[2]=e[s].description,n[3]=e[s].slug,n}function z(t){let e;return{c(){e=x("Design Systems Engineer")},l(t){e=w(t,"Design Systems Engineer")},m(t,s){i(t,e,s)},d(t){t&&$(e)}}}function B(t){let e;return{c(){e=x("Back to course list")},l(t){e=w(t,"Back to course list")},m(t,s){i(t,e,s)},d(t){t&&$(e)}}}function V(t){let e,s,n,a;return e=new p({props:{size:"XL",$$slots:{default:[z]},$$scope:{ctx:t}}}),n=new I({props:{href:"courses",iconId:"back-chevron",$$slots:{default:[B]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),s=r(),o(n.$$.fragment)},l(t){l(e.$$.fragment,t),s=c(t),l(n.$$.fragment,t)},m(t,r){f(e,t,r),i(t,s,r),f(n,t,r),a=!0},p(t,s){const r={};64&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const o={};64&s&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(t){a||(m(e.$$.fragment,t),m(n.$$.fragment,t),a=!0)},o(t){u(e.$$.fragment,t),u(n.$$.fragment,t),a=!1},d(t){g(e,t),t&&$(s),g(n,t)}}}function q(t){let e,s=t[1]+"";return{c(){e=x(s)},l(t){e=w(t,s)},m(t,s){i(t,e,s)},p(t,n){1&n&&s!==(s=t[1]+"")&&j(e,s)},d(t){t&&$(e)}}}function A(t){let e,s;return e=new I({props:{href:"/lessons/"+t[3],$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,n){f(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.href="/lessons/"+t[3]),65&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function H(t){let e;return{c(){e=x("Start Watching")},l(t){e=w(t,"Start Watching")},m(t,s){i(t,e,s)},d(t){t&&$(e)}}}function U(t){let e,s,n,a,d,E,_,k,D,I,b,z=t[2]+"";return a=new p({props:{size:"L",$$slots:{default:[A]},$$scope:{ctx:t}}}),D=new C({props:{isLarge:!0,isCTA:!0,href:"/lessons/"+t[3],iconId:"play",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){e=h("hr"),s=r(),n=h("div"),o(a.$$.fragment),d=r(),E=h("div"),_=x(z),k=r(),o(D.$$.fragment),I=r(),this.h()},l(t){e=y(t,"HR",{class:!0}),s=c(t),n=y(t,"DIV",{class:!0});var r=v(n);l(a.$$.fragment,r),d=c(r),E=y(r,"DIV",{class:!0});var o=v(E);_=w(o,z),o.forEach($),k=c(r),l(D.$$.fragment,r),I=c(r),r.forEach($),this.h()},h(){L(e,"class","dse-hr svelte-i0igso"),L(E,"class","dse-lesson__description"),L(n,"class","dse-course-summary__lesson")},m(t,r){i(t,e,r),i(t,s,r),i(t,n,r),f(a,n,null),S(n,d),S(n,E),S(E,_),S(n,k),f(D,n,null),S(n,I),b=!0},p(t,e){const s={};65&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s),(!b||1&e)&&z!==(z=t[2]+"")&&j(_,z);const n={};1&e&&(n.href="/lessons/"+t[3]),64&e&&(n.$$scope={dirty:e,ctx:t}),D.$set(n)},i(t){b||(m(a.$$.fragment,t),m(D.$$.fragment,t),b=!0)},o(t){u(a.$$.fragment,t),u(D.$$.fragment,t),b=!1},d(t){t&&$(e),t&&$(s),t&&$(n),g(a),g(D)}}}function W(t){let e,s,n,a;e=new D({props:{title:t[0].title,description:t[0].description,videoCount:t[0].lessons.length,duration:t[0].duration,isLarge:!0,imageUrl:t[0].image}});let d=t[0].lessons,p=[];for(let e=0;e<d.length;e+=1)p[e]=U(b(t,d,e));const x=t=>u(p[t],1,1,(()=>{p[t]=null}));return{c(){o(e.$$.fragment),s=r(),n=h("div");for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){l(e.$$.fragment,t),s=c(t),n=y(t,"DIV",{class:!0});var r=v(n);for(let t=0;t<p.length;t+=1)p[t].l(r);r.forEach($),this.h()},h(){L(n,"class","dse-course-summary__lessonList")},m(t,r){f(e,t,r),i(t,s,r),i(t,n,r);for(let t=0;t<p.length;t+=1)p[t].m(n,null);a=!0},p(t,s){const r={};if(1&s&&(r.title=t[0].title),1&s&&(r.description=t[0].description),1&s&&(r.videoCount=t[0].lessons.length),1&s&&(r.duration=t[0].duration),1&s&&(r.imageUrl=t[0].image),e.$set(r),1&s){let e;for(d=t[0].lessons,e=0;e<d.length;e+=1){const r=b(t,d,e);p[e]?(p[e].p(r,s),m(p[e],1)):(p[e]=U(r),p[e].c(),m(p[e],1),p[e].m(n,null))}for(E(),e=d.length;e<p.length;e+=1)x(e);_()}},i(t){if(!a){m(e.$$.fragment,t);for(let t=0;t<d.length;t+=1)m(p[t]);a=!0}},o(t){u(e.$$.fragment,t),p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)u(p[t]);a=!1},d(t){g(e,t),t&&$(s),t&&$(n),k(p,t)}}}function G(t){let e,s,n,a;return e=new d({props:{colSpan:"3",$$slots:{default:[V]},$$scope:{ctx:t}}}),n=new d({props:{colSpan:"6",$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),s=r(),o(n.$$.fragment)},l(t){l(e.$$.fragment,t),s=c(t),l(n.$$.fragment,t)},m(t,r){f(e,t,r),i(t,s,r),f(n,t,r),a=!0},p(t,s){const r={};64&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const o={};65&s&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(t){a||(m(e.$$.fragment,t),m(n.$$.fragment,t),a=!0)},o(t){u(e.$$.fragment,t),u(n.$$.fragment,t),a=!1},d(t){g(e,t),t&&$(s),g(n,t)}}}function J(t){let e,s,d,p;return document.title=e=t[0].title,d=new n({props:{class:"content",$$slots:{default:[G]},$$scope:{ctx:t}}}),{c(){s=r(),o(d.$$.fragment)},l(t){a('[data-svelte="svelte-1jbhcf4"]',document.head).forEach($),s=c(t),l(d.$$.fragment,t)},m(t,e){i(t,s,e),f(d,t,e),p=!0},p(t,[s]){(!p||1&s)&&e!==(e=t[0].title)&&(document.title=e);const n={};65&s&&(n.$$scope={dirty:s,ctx:t}),d.$set(n)},i(t){p||(m(d.$$.fragment,t),p=!0)},o(t){u(d.$$.fragment,t),p=!1},d(t){t&&$(s),g(d,t)}}}async function K({params:t,query:e}){const s=await this.fetch(`courses/${t.slug}.json`),n=await s.json();if(200===s.status)return{course:n};this.error(s.status,n.message)}function R(t,e,s){let{course:n}=e;return t.$$set=t=>{"course"in t&&s(0,n=t.course)},[n]}export default class extends t{constructor(t){super(),e(this,t,R,J,s,{course:0})}}export{K as preload};
