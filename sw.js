if(!self.define){let i,e={};const s=(s,l)=>(s=new URL(s+".js",l).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(l,r)=>{const n=i||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=i=>s(i,n),u={module:{uri:n},exports:t,require:o};e[n]=Promise.all(l.map((i=>u[i]||o(i)))).then((i=>(r(...i),t)))}}define(["./workbox-8ba36bd6"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"_payload.json",revision:"eca03d6ae2e128c9c6a3d7ffdd04028d"},{url:"200",revision:"c9a8ab422e8494b05f3af25bba7b62e0"},{url:"404",revision:"c9a8ab422e8494b05f3af25bba7b62e0"},{url:"favicon.ico",revision:"5c1028350a39fb9e5a9bfbe280326e28"},{url:"/Simple-Map/",revision:"23631cdea23e007707f81de1ccb29edc"},{url:"static/basedecoder.ZA-T3ZBw.js",revision:null},{url:"static/builds/latest.json",revision:"c76e1e46c28775eeafe1fc213d39f7e0"},{url:"static/builds/meta/86013613-cf7a-4c03-b2df-31df0f2ed751.json",revision:null},{url:"static/builds/meta/dev.json",revision:null},{url:"static/decoder.IhX8bKuY.js",revision:null},{url:"static/deflate.v6H31pHp.js",revision:null},{url:"static/entry.4-miJrWR.js",revision:null},{url:"static/entry.BezG6NDj.css",revision:null},{url:"static/error-404.qFGwA4uS.css",revision:null},{url:"static/error-404.vPV1bRAo.js",revision:null},{url:"static/error-500.s1ZKIPll.js",revision:null},{url:"static/error-500.V0P2JAtD.css",revision:null},{url:"static/index.h9DVxSKF.css",revision:null},{url:"static/index.vvhNNo0Z.js",revision:null},{url:"static/jpeg.VNgA9UR5.js",revision:null},{url:"static/lerc.9M7MotdD.js",revision:null},{url:"static/location.UaEbqQkY.png",revision:null},{url:"static/lzw.qqD7id4r.js",revision:null},{url:"static/materialdesignicons-webfont.6eb_lmTU.woff2",revision:null},{url:"static/materialdesignicons-webfont.D15t_tsC.woff",revision:null},{url:"static/materialdesignicons-webfont.e5j8FT_3.ttf",revision:null},{url:"static/NLSC_EMAP.wP9nZlEf.png",revision:null},{url:"static/NLSC_PHOTO2.pUlDZ7iD.png",revision:null},{url:"static/osm.5DBlPqLK.png",revision:null},{url:"static/packbits.aC1uBbMr.js",revision:null},{url:"static/pako.esm.1A7OWKUb.js",revision:null},{url:"static/raw.EmVvNEm2.js",revision:null},{url:"static/webimage.XzBwFQCC.js",revision:null},{url:"static/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"street-map.png",revision:"b6f9c8121594d4ab810b969b41f6b0e5"},{url:"manifest.webmanifest",revision:"0cbd9ca529b566aa72d5136c295ff177"}],{}),i.cleanupOutdatedCaches(),i.registerRoute("/Simple-Map/*",new i.NetworkFirst,"GET")}));
