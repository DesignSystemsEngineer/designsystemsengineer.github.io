import{R as t,_ as n,a as e,b as s,c as r,i as c,d as o,S as a,s as i,e as f,f as u,q as $,g as l,h as p,j as m,k as d,m as g,l as v,t as h,n as x,o as y,p as b,v as _,r as E,w,x as L,u as I,M as S,y as j,L as k}from"./client.328fa681.js";import"./Icon.b46ba798.js";import{G as D,a as R}from"./GridItem.68b80b56.js";import{H as V}from"./Heading.b9c12147.js";import{L as C}from"./Link.0dfaafea.js";import{_ as P}from"./asyncToGenerator.5229e80b.js";function T(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,c=e(t);if(n){var o=e(this).constructor;r=Reflect.construct(c,arguments,o)}else r=c.apply(this,arguments);return s(this,r)}}function z(t){var n;return{c:function(){n=_("Design Systems Engineer")},l:function(t){n=L(t,"Design Systems Engineer")},m:function(t,e){d(t,n,e)},d:function(t){t&&l(n)}}}function H(t){var n;return{c:function(){n=_("Back to lesson list")},l:function(t){n=L(t,"Back to lesson list")},m:function(t,e){d(t,n,e)},d:function(t){t&&l(n)}}}function M(t){var n,e,s,r;return n=new V({props:{size:"M",$$slots:{default:[z]},$$scope:{ctx:t}}}),s=new C({props:{href:"courses/"+t[0].courseSlug,iconId:"back-chevron",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment),e=f(),u(s.$$.fragment)},l:function(t){m(n.$$.fragment,t),e=p(t),m(s.$$.fragment,t)},m:function(t,c){g(n,t,c),d(t,e,c),g(s,t,c),r=!0},p:function(t,e){var r={};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);var c={};1&e&&(c.href="courses/"+t[0].courseSlug),2&e&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)},i:function(t){r||(h(n.$$.fragment,t),h(s.$$.fragment,t),r=!0)},o:function(t){x(n.$$.fragment,t),x(s.$$.fragment,t),r=!1},d:function(t){y(n,t),t&&l(e),y(s,t)}}}function X(t){var n,e=t[0].title+"";return{c:function(){n=_(e)},l:function(t){n=L(t,e)},m:function(t,e){d(t,n,e)},p:function(t,s){1&s&&e!==(e=t[0].title+"")&&k(n,e)},d:function(t){t&&l(n)}}}function G(t){var n;return{c:function(){n=_("Resource")},l:function(t){n=L(t,"Resource")},m:function(t,e){d(t,n,e)},d:function(t){t&&l(n)}}}function q(t){var n;return{c:function(){n=_("Video Transcript")},l:function(t){n=L(t,"Video Transcript")},m:function(t,e){d(t,n,e)},d:function(t){t&&l(n)}}}function A(t){var n,e,s,r,c,o,a,i,$,v,D,R,C,P,T,z,H,M,A,B,U,W,F,J,K,N,O,Q=t[0].summary+"",Y=t[0].embed+"",Z=t[0].transcript+"";return e=new V({props:{class:"dse-lesson__title",size:"XXL",$$slots:{default:[X]},$$scope:{ctx:t}}}),v=new V({props:{class:"dse-lesson__title",size:"XL",$$slots:{default:[G]},$$scope:{ctx:t}}}),J=new V({props:{class:"dse-lesson__title",size:"XL",$$slots:{default:[q]},$$scope:{ctx:t}}}),{c:function(){n=b("div"),u(e.$$.fragment),s=f(),r=b("div"),c=_(Q),o=f(),a=b("div"),i=f(),$=b("div"),u(v.$$.fragment),D=f(),R=b("ul"),C=b("li"),P=b("a"),T=_("Starting CodePen"),H=f(),M=b("li"),A=b("a"),B=_("Completed CodePen"),W=f(),F=b("div"),u(J.$$.fragment),K=f(),this.h()},l:function(t){n=E(t,"DIV",{class:!0});var f=w(n);m(e.$$.fragment,f),s=p(f),r=E(f,"DIV",{class:!0});var u=w(r);c=L(u,Q),u.forEach(l),o=p(f),a=E(f,"DIV",{class:!0}),w(a).forEach(l),i=p(f),$=E(f,"DIV",{class:!0});var d=w($);m(v.$$.fragment,d),D=p(d),R=E(d,"UL",{});var g=w(R);C=E(g,"LI",{});var h=w(C);P=E(h,"A",{href:!0,target:!0});var x=w(P);T=L(x,"Starting CodePen"),x.forEach(l),h.forEach(l),H=p(g),M=E(g,"LI",{});var y=w(M);A=E(y,"A",{href:!0,target:!0});var b=w(A);B=L(b,"Completed CodePen"),b.forEach(l),y.forEach(l),g.forEach(l),d.forEach(l),W=p(f),F=E(f,"DIV",{class:!0});var _=w(F);m(J.$$.fragment,_),K=p(_),_.forEach(l),f.forEach(l),this.h()},h:function(){I(r,"class","dse-lesson__description svelte-1gbbg2s"),I(a,"class","videoWrapper"),I(P,"href",z=t[0].code.start),I(P,"target","”_blank”"),I(A,"href",U=t[0].code.completed),I(A,"target","”_blank”"),I($,"class","dse-lesson__code"),N=new S(null),I(F,"class","dse-lesson__transcript svelte-1gbbg2s"),I(n,"class","dse-lesson")},m:function(t,f){d(t,n,f),g(e,n,null),j(n,s),j(n,r),j(r,c),j(n,o),j(n,a),a.innerHTML=Y,j(n,i),j(n,$),g(v,$,null),j($,D),j($,R),j(R,C),j(C,P),j(P,T),j(R,H),j(R,M),j(M,A),j(A,B),j(n,W),j(n,F),g(J,F,null),j(F,K),N.m(Z,F),O=!0},p:function(t,n){var s={};3&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s),(!O||1&n)&&Q!==(Q=t[0].summary+"")&&k(c,Q),(!O||1&n)&&Y!==(Y=t[0].embed+"")&&(a.innerHTML=Y);var r={};2&n&&(r.$$scope={dirty:n,ctx:t}),v.$set(r),(!O||1&n&&z!==(z=t[0].code.start))&&I(P,"href",z),(!O||1&n&&U!==(U=t[0].code.completed))&&I(A,"href",U);var o={};2&n&&(o.$$scope={dirty:n,ctx:t}),J.$set(o),(!O||1&n)&&Z!==(Z=t[0].transcript+"")&&N.p(Z)},i:function(t){O||(h(e.$$.fragment,t),h(v.$$.fragment,t),h(J.$$.fragment,t),O=!0)},o:function(t){x(e.$$.fragment,t),x(v.$$.fragment,t),x(J.$$.fragment,t),O=!1},d:function(t){t&&l(n),y(e),y(v),y(J)}}}function B(t){var n,e,s,r;return n=new R({props:{colSpan:"3",$$slots:{default:[M]},$$scope:{ctx:t}}}),s=new R({props:{colSpan:"6",$$slots:{default:[A]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment),e=f(),u(s.$$.fragment)},l:function(t){m(n.$$.fragment,t),e=p(t),m(s.$$.fragment,t)},m:function(t,c){g(n,t,c),d(t,e,c),g(s,t,c),r=!0},p:function(t,e){var r={};3&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);var c={};3&e&&(c.$$scope={dirty:e,ctx:t}),s.$set(c)},i:function(t){r||(h(n.$$.fragment,t),h(s.$$.fragment,t),r=!0)},o:function(t){x(n.$$.fragment,t),x(s.$$.fragment,t),r=!1},d:function(t){y(n,t),t&&l(e),y(s,t)}}}function U(t){var n,e,s,r;return document.title=n=t[0].title,s=new D({props:{class:"content",$$slots:{default:[B]},$$scope:{ctx:t}}}),{c:function(){e=f(),u(s.$$.fragment)},l:function(t){$('[data-svelte="svelte-sx0idx"]',document.head).forEach(l),e=p(t),m(s.$$.fragment,t)},m:function(t,n){d(t,e,n),g(s,t,n),r=!0},p:function(t,e){var c=v(e,1)[0];(!r||1&c)&&n!==(n=t[0].title)&&(document.title=n);var o={};3&c&&(o.$$scope={dirty:c,ctx:t}),s.$set(o)},i:function(t){r||(h(s.$$.fragment,t),r=!0)},o:function(t){x(s.$$.fragment,t),r=!1},d:function(t){t&&l(e),y(s,t)}}}function W(t){return F.apply(this,arguments)}function F(){return(F=P(t.mark((function n(e){var s,r,c;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,e.query,t.next=3,this.fetch("lessons/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(c=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{lesson:c});case 11:this.error(r.status,c.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function J(t,n,e){var s=n.lesson;return t.$$set=function(t){"lesson"in t&&e(0,s=t.lesson)},[s]}var K=function(t){n(s,a);var e=T(s);function s(t){var n;return r(this,s),n=e.call(this),c(o(n),t,J,U,i,{lesson:0}),n}return s}();export default K;export{W as preload};