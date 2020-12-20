import{G as n,_ as t,a as e,b as o,c as s,i as r,d as i,S as c,s as a,e as u,f,q as l,g as d,h as m,j as g,k as p,m as $,l as h,t as v,n as y,o as D,D as M,E as b,F as w,H as x,v as S,x as j}from"./client.3f15bfb6.js";import"./Icon.ee966f98.js";import{C as N}from"./CourseSummary.42f21b65.js";import{G as E,a as F,H as C}from"./Heading.08a57889.js";var T=n((function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var e=["weeks","years","months","days","hours","minutes","seconds"],o=Object.freeze({years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0}),s=t.pattern=new RegExp("P(?:(\\d+(?:[\\.,]\\d+)?W)|(\\d+(?:[\\.,]\\d+)?Y)?(\\d+(?:[\\.,]\\d+)?M)?(\\d+(?:[\\.,]\\d+)?D)?(?:T(\\d+(?:[\\.,]\\d+)?H)?(\\d+(?:[\\.,]\\d+)?M)?(\\d+(?:[\\.,]\\d+)?S)?)?)"),r=t.parse=function(n){return n.match(s).slice(1).reduce((function(n,t,o){return n[e[o]]=parseFloat(t)||0,n}),{})},i=t.end=function(n,t){n=Object.assign({},o,n);var e=t?t.getTime():Date.now(),s=new Date(e);return s.setFullYear(s.getFullYear()+n.years),s.setMonth(s.getMonth()+n.months),s.setDate(s.getDate()+n.days),s.setHours(s.getHours()+n.hours),s.setMinutes(s.getMinutes()+n.minutes),s.setMilliseconds(s.getMilliseconds()+1e3*n.seconds),s.setDate(s.getDate()+7*n.weeks),s},c=t.toSeconds=function(n,t){n=Object.assign({},o,n);var e=t?t.getTime():Date.now(),s=new Date(e);return(i(n,s).getTime()-s.getTime())/1e3};t.default={end:i,toSeconds:c,pattern:s,parse:r}})),k=function(n){if("number"!=typeof n)throw new TypeError("Expected a number");var t=n>0?Math.floor:Math.ceil;return{days:t(n/864e5),hours:t(n/36e5)%24,minutes:t(n/6e4)%60,seconds:t(n/1e3)%60,milliseconds:t(n)%1e3,microseconds:t(1e3*n)%1e3,nanoseconds:t(1e6*n)%1e3}},H=function(n,t){return 1===t?n:"".concat(n,"s")};function R(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,r=e(n);if(t){var i=e(this).constructor;s=Reflect.construct(r,arguments,i)}else s=r.apply(this,arguments);return o(this,s)}}function U(n,t,e){var o=n.slice();return o[2]=t[e].title,o[3]=t[e].videoCount,o[4]=t[e].duration,o[5]=t[e].description,o[6]=t[e].slug,o[7]=t[e].lessons,o[8]=t[e].image,o}function O(n){var t;return{c:function(){t=S("Design Systems Engineer")},l:function(n){t=j(n,"Design Systems Engineer")},m:function(n,e){p(n,t,e)},d:function(n){n&&d(t)}}}function P(n){var t,e;return t=new C({props:{size:"XL",$$slots:{default:[O]},$$scope:{ctx:n}}}),{c:function(){f(t.$$.fragment)},l:function(n){g(t.$$.fragment,n)},m:function(n,o){$(t,n,o),e=!0},p:function(n,e){var o={};2048&e&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i:function(n){e||(v(t.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),e=!1},d:function(n){D(t,n)}}}function Y(n){var t,e;return t=new N({props:{title:n[2],videoCount:n[7].length,duration:n[1](n[7]),description:n[5],courseUrl:"/courses/"+n[6],imageUrl:n[8],watchUrl:n[7].length>0?"lessons/".concat(n[7][0].slug):null}}),{c:function(){f(t.$$.fragment)},l:function(n){g(t.$$.fragment,n)},m:function(n,o){$(t,n,o),e=!0},p:function(n,e){var o={};1&e&&(o.title=n[2]),1&e&&(o.videoCount=n[7].length),1&e&&(o.duration=n[1](n[7])),1&e&&(o.description=n[5]),1&e&&(o.courseUrl="/courses/"+n[6]),1&e&&(o.imageUrl=n[8]),1&e&&(o.watchUrl=n[7].length>0?"lessons/".concat(n[7][0].slug):null),t.$set(o)},i:function(n){e||(v(t.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),e=!1},d:function(n){D(t,n)}}}function _(n){for(var t,e,o=n[0],s=[],r=0;r<o.length;r+=1)s[r]=Y(U(n,o,r));var i=function(n){return y(s[n],1,1,(function(){s[n]=null}))};return{c:function(){for(var n=0;n<s.length;n+=1)s[n].c();t=M()},l:function(n){for(var e=0;e<s.length;e+=1)s[e].l(n);t=M()},m:function(n,o){for(var r=0;r<s.length;r+=1)s[r].m(n,o);p(n,t,o),e=!0},p:function(n,e){if(3&e){var r;for(o=n[0],r=0;r<o.length;r+=1){var c=U(n,o,r);s[r]?(s[r].p(c,e),v(s[r],1)):(s[r]=Y(c),s[r].c(),v(s[r],1),s[r].m(t.parentNode,t))}for(b(),r=o.length;r<s.length;r+=1)i(r);w()}},i:function(n){if(!e){for(var t=0;t<o.length;t+=1)v(s[t]);e=!0}},o:function(n){s=s.filter(Boolean);for(var t=0;t<s.length;t+=1)y(s[t]);e=!1},d:function(n){x(s,n),n&&d(t)}}}function q(n){var t,e,o,s;return t=new F({props:{colSpan:"3",$$slots:{default:[P]},$$scope:{ctx:n}}}),o=new F({props:{colSpan:"6",$$slots:{default:[_]},$$scope:{ctx:n}}}),{c:function(){f(t.$$.fragment),e=u(),f(o.$$.fragment)},l:function(n){g(t.$$.fragment,n),e=m(n),g(o.$$.fragment,n)},m:function(n,r){$(t,n,r),p(n,e,r),$(o,n,r),s=!0},p:function(n,e){var s={};2048&e&&(s.$$scope={dirty:e,ctx:n}),t.$set(s);var r={};2049&e&&(r.$$scope={dirty:e,ctx:n}),o.$set(r)},i:function(n){s||(v(t.$$.fragment,n),v(o.$$.fragment,n),s=!0)},o:function(n){y(t.$$.fragment,n),y(o.$$.fragment,n),s=!1},d:function(n){D(t,n),n&&d(e),D(o,n)}}}function z(n){var t,e,o;return e=new E({props:{class:"content",$$slots:{default:[q]},$$scope:{ctx:n}}}),{c:function(){t=u(),f(e.$$.fragment),this.h()},l:function(n){l('[data-svelte="svelte-113vk3j"]',document.head).forEach(d),t=m(n),g(e.$$.fragment,n),this.h()},h:function(){document.title="Courses"},m:function(n,s){p(n,t,s),$(e,n,s),o=!0},p:function(n,t){var o=h(t,1)[0],s={};2049&o&&(s.$$scope={dirty:o,ctx:n}),e.$set(s)},i:function(n){o||(v(e.$$.fragment,n),o=!0)},o:function(n){y(e.$$.fragment,n),o=!1},d:function(n){n&&d(t),D(e,n)}}}function G(n){n.params,n.query;return this.fetch("courses.json").then((function(n){return n.json()})).then((function(n){return{units:n}}))}function W(n,t,e){var o=t.units;return n.$$set=function(n){"units"in n&&e(0,o=n.units)},[o,function(n){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Number.isFinite(n))throw new TypeError("Expected a finite number");t.colonNotation&&(t.compact=!1,t.formatSubMilliseconds=!1,t.separateMilliseconds=!1,t.verbose=!1),t.compact&&(t.secondsDecimalDigits=0,t.millisecondsDecimalDigits=0);var e=[],o=function(n,t){var e=Math.floor(n*Math.pow(10,t)+1e-7);return(Math.round(e)/Math.pow(10,t)).toFixed(t)},s=function(n,o,s,r){if(0!==e.length&&t.colonNotation||0!==n||t.colonNotation&&"m"===s){var i,c;if(r=(r||n||"0").toString(),t.colonNotation){i=e.length>0?":":"",c="";var a=r.includes(".")?r.split(".")[0].length:r.length,u=e.length>0?2:1;r="0".repeat(Math.max(0,u-a))+r}else i="",c=t.verbose?" "+H(o,n):s;e.push(i+r+c)}},r=k(n);if(s(Math.trunc(r.days/365),"year","y"),s(r.days%365,"day","d"),s(r.hours,"hour","h"),s(r.minutes,"minute","m"),t.separateMilliseconds||t.formatSubMilliseconds||!t.colonNotation&&n<1e3)if(s(r.seconds,"second","s"),t.formatSubMilliseconds)s(r.milliseconds,"millisecond","ms"),s(r.microseconds,"microsecond","µs"),s(r.nanoseconds,"nanosecond","ns");else{var i=r.milliseconds+r.microseconds/1e3+r.nanoseconds/1e6,c="number"==typeof t.millisecondsDecimalDigits?t.millisecondsDecimalDigits:0,a=i>=1?Math.round(i):Math.ceil(i),u=c?i.toFixed(c):a;s(Number.parseFloat(u,10),"millisecond","ms",u)}else{var f=o(n/1e3%60,"number"==typeof t.secondsDecimalDigits?t.secondsDecimalDigits:1),l=t.keepDecimalsOnWholeSeconds?f:f.replace(/\.0+$/,"");s(Number.parseFloat(l,10),"second","s",l)}if(0===e.length)return"0"+(t.verbose?" milliseconds":"ms");if(t.compact)return e[0];if("number"==typeof t.unitCount){var d=t.colonNotation?"":" ";return e.slice(0,Math.max(t.unitCount,1)).join(d)}return t.colonNotation?e.join(""):e.join(" ")}(1e3*n.reduce((function(n,t){return n+T.toSeconds(T.parse(t.duration))}),0),{compact:!0})}]}var B=function(n){t(o,c);var e=R(o);function o(n){var t;return s(this,o),t=e.call(this),r(i(t),n,W,z,a,{units:0}),t}return o}();export default B;export{G as preload};
