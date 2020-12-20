import{S as e,i as t,s as n,a as s,c as o,q as r,d as i,b as c,e as a,f as l,m as u,t as d,g as m,h as f,y as p,z as g,A as $,B as h,n as y,p as D}from"./client.ee5b4a18.js";import"./Icon.78531663.js";import{C as b}from"./CourseSummary.d45fc71d.js";import{G as M,a as w}from"./GridItem.1830c396.js";import{H as x}from"./Heading.fb7f20fe.js";var j,v,S=(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=["weeks","years","months","days","hours","minutes","seconds"],s=Object.freeze({years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0}),o=t.pattern=new RegExp("P(?:(\\d+(?:[\\.,]\\d+)?W)|(\\d+(?:[\\.,]\\d+)?Y)?(\\d+(?:[\\.,]\\d+)?M)?(\\d+(?:[\\.,]\\d+)?D)?(?:T(\\d+(?:[\\.,]\\d+)?H)?(\\d+(?:[\\.,]\\d+)?M)?(\\d+(?:[\\.,]\\d+)?S)?)?)"),r=t.parse=function(e){return e.match(o).slice(1).reduce((function(e,t,s){return e[n[s]]=parseFloat(t)||0,e}),{})},i=t.end=function(e,t){e=Object.assign({},s,e);var n=t?t.getTime():Date.now(),o=new Date(n);return o.setFullYear(o.getFullYear()+e.years),o.setMonth(o.getMonth()+e.months),o.setDate(o.getDate()+e.days),o.setHours(o.getHours()+e.hours),o.setMinutes(o.getMinutes()+e.minutes),o.setMilliseconds(o.getMilliseconds()+1e3*e.seconds),o.setDate(o.getDate()+7*e.weeks),o},c=t.toSeconds=function(e,t){e=Object.assign({},s,e);var n=t?t.getTime():Date.now(),o=new Date(n);return(i(e,o).getTime()-o.getTime())/1e3};t.default={end:i,toSeconds:c,pattern:o,parse:r}}(v={path:j,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&v.path)}},v.exports),v.exports);var N=(e,t={})=>{if(!Number.isFinite(e))throw new TypeError("Expected a finite number");t.colonNotation&&(t.compact=!1,t.formatSubMilliseconds=!1,t.separateMilliseconds=!1,t.verbose=!1),t.compact&&(t.secondsDecimalDigits=0,t.millisecondsDecimalDigits=0);const n=[],s=(e,s,o,r)=>{if(!(0!==n.length&&t.colonNotation||0!==e||t.colonNotation&&"m"===o))return;let i,c;if(r=(r||e||"0").toString(),t.colonNotation){i=n.length>0?":":"",c="";const e=r.includes(".")?r.split(".")[0].length:r.length,t=n.length>0?2:1;r="0".repeat(Math.max(0,t-e))+r}else i="",c=t.verbose?" "+(a=s,1===e?a:a+"s"):o;var a;n.push(i+r+c)},o=(e=>{if("number"!=typeof e)throw new TypeError("Expected a number");const t=e>0?Math.floor:Math.ceil;return{days:t(e/864e5),hours:t(e/36e5)%24,minutes:t(e/6e4)%60,seconds:t(e/1e3)%60,milliseconds:t(e)%1e3,microseconds:t(1e3*e)%1e3,nanoseconds:t(1e6*e)%1e3}})(e);if(s(Math.trunc(o.days/365),"year","y"),s(o.days%365,"day","d"),s(o.hours,"hour","h"),s(o.minutes,"minute","m"),t.separateMilliseconds||t.formatSubMilliseconds||!t.colonNotation&&e<1e3)if(s(o.seconds,"second","s"),t.formatSubMilliseconds)s(o.milliseconds,"millisecond","ms"),s(o.microseconds,"microsecond","µs"),s(o.nanoseconds,"nanosecond","ns");else{const e=o.milliseconds+o.microseconds/1e3+o.nanoseconds/1e6,n="number"==typeof t.millisecondsDecimalDigits?t.millisecondsDecimalDigits:0,r=e>=1?Math.round(e):Math.ceil(e),i=n?e.toFixed(n):r;s(Number.parseFloat(i,10),"millisecond","ms",i)}else{const n=((e,t)=>{const n=Math.floor(e*10**t+1e-7);return(Math.round(n)/10**t).toFixed(t)})(e/1e3%60,"number"==typeof t.secondsDecimalDigits?t.secondsDecimalDigits:1),o=t.keepDecimalsOnWholeSeconds?n:n.replace(/\.0+$/,"");s(Number.parseFloat(o,10),"second","s",o)}if(0===n.length)return"0"+(t.verbose?" milliseconds":"ms");if(t.compact)return n[0];if("number"==typeof t.unitCount){const e=t.colonNotation?"":" ";return n.slice(0,Math.max(t.unitCount,1)).join(e)}return t.colonNotation?n.join(""):n.join(" ")};function E(e,t,n){const s=e.slice();return s[2]=t[n].title,s[3]=t[n].videoCount,s[4]=t[n].duration,s[5]=t[n].description,s[6]=t[n].slug,s[7]=t[n].lessons,s[8]=t[n].image,s}function C(e){let t;return{c(){t=y("Design Systems Engineer")},l(e){t=D(e,"Design Systems Engineer")},m(e,n){l(e,t,n)},d(e){e&&i(t)}}}function F(e){let t,n;return t=new x({props:{size:"XL",$$slots:{default:[C]},$$scope:{ctx:e}}}),{c(){o(t.$$.fragment)},l(e){a(t.$$.fragment,e)},m(e,s){u(t,e,s),n=!0},p(e,n){const s={};2048&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){f(t,e)}}}function T(e){let t,n;return t=new b({props:{title:e[2],videoCount:e[7].length,duration:e[1](e[7]),description:e[5],courseUrl:"/courses/"+e[6],imageUrl:e[8],watchUrl:e[7].length>0?"lessons/"+e[7][0].slug:null}}),{c(){o(t.$$.fragment)},l(e){a(t.$$.fragment,e)},m(e,s){u(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.title=e[2]),1&n&&(s.videoCount=e[7].length),1&n&&(s.duration=e[1](e[7])),1&n&&(s.description=e[5]),1&n&&(s.courseUrl="/courses/"+e[6]),1&n&&(s.imageUrl=e[8]),1&n&&(s.watchUrl=e[7].length>0?"lessons/"+e[7][0].slug:null),t.$set(s)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){f(t,e)}}}function U(e){let t,n,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=T(E(e,s,t));const r=e=>m(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=p()},l(e){for(let t=0;t<o.length;t+=1)o[t].l(e);t=p()},m(e,s){for(let t=0;t<o.length;t+=1)o[t].m(e,s);l(e,t,s),n=!0},p(e,n){if(3&n){let i;for(s=e[0],i=0;i<s.length;i+=1){const r=E(e,s,i);o[i]?(o[i].p(r,n),d(o[i],1)):(o[i]=T(r),o[i].c(),d(o[i],1),o[i].m(t.parentNode,t))}for(g(),i=s.length;i<o.length;i+=1)r(i);$()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)d(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)m(o[e]);n=!1},d(e){h(o,e),e&&i(t)}}}function k(e){let t,n,r,p;return t=new w({props:{colSpan:"3",$$slots:{default:[F]},$$scope:{ctx:e}}}),r=new w({props:{colSpan:"6",$$slots:{default:[U]},$$scope:{ctx:e}}}),{c(){o(t.$$.fragment),n=s(),o(r.$$.fragment)},l(e){a(t.$$.fragment,e),n=c(e),a(r.$$.fragment,e)},m(e,s){u(t,e,s),l(e,n,s),u(r,e,s),p=!0},p(e,n){const s={};2048&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const o={};2049&n&&(o.$$scope={dirty:n,ctx:e}),r.$set(o)},i(e){p||(d(t.$$.fragment,e),d(r.$$.fragment,e),p=!0)},o(e){m(t.$$.fragment,e),m(r.$$.fragment,e),p=!1},d(e){f(t,e),e&&i(n),f(r,e)}}}function H(e){let t,n,p;return n=new M({props:{class:"content",$$slots:{default:[k]},$$scope:{ctx:e}}}),{c(){t=s(),o(n.$$.fragment),this.h()},l(e){r('[data-svelte="svelte-113vk3j"]',document.head).forEach(i),t=c(e),a(n.$$.fragment,e),this.h()},h(){document.title="Courses"},m(e,s){l(e,t,s),u(n,e,s),p=!0},p(e,[t]){const s={};2049&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){p||(d(n.$$.fragment,e),p=!0)},o(e){m(n.$$.fragment,e),p=!1},d(e){e&&i(t),f(n,e)}}}function O({params:e,query:t}){return this.fetch("courses.json").then((e=>e.json())).then((e=>({units:e})))}function q(e,t,n){let{units:s}=t;return e.$$set=e=>{"units"in e&&n(0,s=e.units)},[s,function(e){const t=e.reduce(((e,t)=>e+S.toSeconds(S.parse(t.duration))),0);return N(1e3*t,{compact:!0})}]}export default class extends e{constructor(e){super(),t(this,e,q,H,n,{units:0})}}export{O as preload};