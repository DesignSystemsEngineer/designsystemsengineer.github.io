import{_ as n,a as t,b as s,c as a,i as c,s as r,d as i,S as o,f as e,j as f,m as u,t as l,n as d,o as h,z as p,p as $,e as v,r as m,w as g,h as I,g as k,u as y,J as R,k as _,y as j,K as A,l as E,E as S,F as b,A as w,B as x,C as D,I as P}from"./client.659f7df3.js";import{I as z}from"./Icon.226b11c0.js";function B(n){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,r=t(n);if(a){var i=t(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return s(this,c)}}function C(n){var t,s;return t=new z({props:{iconId:n[0],class:"dse-link__icon"}}),{c:function(){e(t.$$.fragment)},l:function(n){f(t.$$.fragment,n)},m:function(n,a){u(t,n,a),s=!0},p:function(n,s){var a={};1&s&&(a.iconId=n[0]),t.$set(a)},i:function(n){s||(l(t.$$.fragment,n),s=!0)},o:function(n){d(t.$$.fragment,n),s=!1},d:function(n){h(t,n)}}}function F(n){var t,s,a,c,r,i,o,e=n[0]&&C(n),f=n[5].default,u=p(f,n,n[4],null);return{c:function(){t=$("a"),e&&e.c(),s=v(),a=$("span"),u&&u.c(),this.h()},l:function(n){t=m(n,"A",{class:!0,href:!0,target:!0});var c=g(t);e&&e.l(c),s=I(c),a=m(c,"SPAN",{});var r=g(a);u&&u.l(r),r.forEach(k),c.forEach(k),this.h()},h:function(){y(t,"class",c="dse-link "+(n[3].class||"")),y(t,"href",n[1]),y(t,"target",n[2]),R(t,"dse-link--icon",n[0])},m:function(c,f){_(c,t,f),e&&e.m(t,null),j(t,s),j(t,a),u&&u.m(a,null),r=!0,i||(o=A(t,"click",n[6]),i=!0)},p:function(n,a){var i=E(a,1)[0];n[0]?e?(e.p(n,i),1&i&&l(e,1)):((e=C(n)).c(),l(e,1),e.m(t,s)):e&&(S(),d(e,1,1,(function(){e=null})),b()),u&&u.p&&16&i&&w(u,f,n,n[4],i,null,null),(!r||8&i&&c!==(c="dse-link "+(n[3].class||"")))&&y(t,"class",c),(!r||2&i)&&y(t,"href",n[1]),(!r||4&i)&&y(t,"target",n[2]),9&i&&R(t,"dse-link--icon",n[0])},i:function(n){r||(l(e),l(u,n),r=!0)},o:function(n){d(e),d(u,n),r=!1},d:function(n){n&&k(t),e&&e.d(),u&&u.d(n),i=!1,o()}}}function J(n,t,s){var a=t,c=a.$$slots,r=void 0===c?{}:c,i=a.$$scope,o=t.iconId,e=t.href,f=void 0===e?"#":e,u=t.target,l=void 0===u?"_self":u;return n.$$set=function(n){s(3,t=x(x({},t),D(n))),"iconId"in n&&s(0,o=n.iconId),"href"in n&&s(1,f=n.href),"target"in n&&s(2,l=n.target),"$$scope"in n&&s(4,i=n.$$scope)},t=D(t),[o,f,l,t,i,r,function(t){P(n,t)}]}var K=function(t){n(e,o);var s=B(e);function e(n){var t;return a(this,e),t=s.call(this),c(i(t),n,J,F,r,{iconId:0,href:1,target:2}),t}return e}();export{K as L};