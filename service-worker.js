!function(){"use strict";const e=1608441564791,t="cache"+e,n=["/client/client.ee5b4a18.js","/client/inject_styles.5607aec6.js","/client/index.4e137fec.js","/client/GridItem.1830c396.js","/client/Heading.fb7f20fe.js","/client/index.a3881231.js","/client/CourseSummary.d45fc71d.js","/client/Icon.78531663.js","/client/[slug].15c24b81.js","/client/Link.72623967.js","/client/[slug].1b46f6ca.js","/client/index.436688aa.js","/client/[slug].a3cd2f98.js"].concat(["/service-worker-index.html","/.DS_Store","/CNAME","/capstone-proposal.pdf","/components.png","/config.png","/dom.png","/favicon.png","/glacier.jpg","/global.css","/logo-192.png","/logo-512.png","/logo-ideas.pdf","/manifest.json","/milestones.pdf","/mvp.jpg","/planning-activity-mapping.png","/static.png","/studio.jpg"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}})))))}))}();
