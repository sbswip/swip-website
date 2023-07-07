import{r as m,E as k,G as C,H as w,n as O,I as A,i as S,J as B,K as R,s as P,L as T,M as L,N as j,A as I}from"./entry.a2414e47.js";import{h as _,u as q}from"./preview.1fb84d5a.js";import{w as v,s as M}from"./utils.50cc6ec6.js";const F=()=>null;function V(...t){const r=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(r);let[e,a,s={}]=t;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof a!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=s.server??!0,s.default=s.default??F,s.lazy=s.lazy??!1,s.immediate=s.immediate??!0;const n=A(),o=()=>n.isHydrating?n.payload.data[e]:n.static.data[e],u=()=>o()!==void 0;n._asyncData[e]||(n._asyncData[e]={data:m(o()??s.default()),pending:m(!u()),error:k(n.payload._errors,e),status:m("idle")});const i={...n._asyncData[e]};i.refresh=i.execute=(l={})=>{if(n._asyncDataPromises[e]){if(l.dedupe===!1)return n._asyncDataPromises[e];n._asyncDataPromises[e].cancelled=!0}if((l._initial||n.isHydrating&&l._initial!==!1)&&u())return o();i.pending.value=!0,i.status.value="pending";const h=new Promise((c,p)=>{try{c(a(n))}catch(b){p(b)}}).then(c=>{if(h.cancelled)return n._asyncDataPromises[e];let p=c;s.transform&&(p=s.transform(c)),s.pick&&(p=H(p,s.pick)),i.data.value=p,i.error.value=null,i.status.value="success"}).catch(c=>{if(h.cancelled)return n._asyncDataPromises[e];i.error.value=c,i.data.value=S(s.default()),i.status.value="error"}).finally(()=>{h.cancelled||(i.pending.value=!1,n.payload.data[e]=i.data.value,i.error.value&&(n.payload._errors[e]=B(i.error.value)),delete n._asyncDataPromises[e])});return n._asyncDataPromises[e]=h,n._asyncDataPromises[e]};const y=()=>i.refresh({_initial:!0}),g=s.server!==!1&&n.payload.serverRendered;{const l=R();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const c=l._nuxtOnBeforeMountCbs;l&&(C(()=>{c.forEach(p=>{p()}),c.splice(0,c.length)}),w(()=>c.splice(0,c.length)))}g&&n.isHydrating&&u()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):l&&(n.payload.serverRendered&&n.isHydrating||s.lazy)&&s.immediate?l._nuxtOnBeforeMountCbs.push(y):s.immediate&&y(),s.watch&&O(s.watch,()=>i.refresh());const h=n.hook("app:data:refresh",c=>{if(!c||c.includes(e))return i.refresh()});l&&w(h)}const d=Promise.resolve(n._asyncDataPromises[e]).then(()=>i);return Object.assign(d,i),d}function H(t,r){const e={};for(const a of r)e[a]=t[a];return e}const D=(t,r)=>r.split(".").reduce((e,a)=>e&&e[a],t),x=(t,r)=>Object.keys(t).filter(r).reduce((e,a)=>Object.assign(e,{[a]:t[a]}),{}),X=t=>r=>Array.isArray(r)?r.map(e=>t(e)):t(r),$=t=>{const r=[],e=[];for(const a of t)["$","_"].includes(a)?r.push(a):e.push(a);return{prefixes:r,properties:e}},Y=(t=[])=>r=>{if(t.length===0||!r)return r;const{prefixes:e,properties:a}=$(t);return x(r,s=>!a.includes(s)&&!e.includes(s[0]))},Z=(t=[])=>r=>{if(t.length===0||!r)return r;const{prefixes:e,properties:a}=$(t);return x(r,s=>a.includes(s)||e.includes(s[0]))},ee=(t,r)=>{const e=new Intl.Collator(r.$locale,{numeric:r.$numeric,caseFirst:r.$caseFirst,sensitivity:r.$sensitivity}),a=Object.keys(r).filter(s=>!s.startsWith("$"));for(const s of a)t=t.sort((n,o)=>{const u=[D(n,s),D(o,s)].map(i=>{if(i!==null)return i instanceof Date?i.toISOString():i});return r[s]===-1&&u.reverse(),e.compare(u[0],u[1])});return t},te=(t,r="Expected an array")=>{if(!Array.isArray(t))throw new TypeError(r)},f=t=>Array.isArray(t)?t:t?[t]:[],Q=["sort","where","only","without"],K=(t,r)=>{const e={...r};for(const n of Q)e[n]&&(e[n]=f(e[n]));const a=(n,o=u=>u)=>(...u)=>(e[n]=o(...u),s),s={params:()=>({...e,...e.where?{where:[...f(e.where)]}:{},...e.sort?{sort:[...f(e.sort)]}:{}}),only:a("only",f),without:a("without",f),where:a("where",n=>[...f(e.where),...f(n)]),sort:a("sort",n=>[...f(e.sort),...f(n)]),limit:a("limit",n=>parseInt(String(n),10)),skip:a("skip",n=>parseInt(String(n),10)),find:()=>t(s),findOne:()=>(e.first=!0,t(s)),findSurround:(n,o)=>(e.surround={query:n,...o},t(s)),locale:n=>s.where({_locale:n})};return s};function E(t){return JSON.stringify(t,N)}function N(t,r){return r instanceof RegExp?`--REGEX ${r.toString()}`:r}const z=t=>{let r=E(t);return r=typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r),r=r.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(r.match(/.{1,100}/g)||[]).join("/")},G=()=>async t=>{const{content:r}=P().public,e=t.params(),a=r.experimental.stripQueryParameters?v(`/query/${`${_(e)}.${r.integrity}`}/${z(e)}.json`):v(`/query/${_(e)}.${r.integrity}.json`);if(M())return(await I(()=>import("./client-db.3aa06744.js"),["./client-db.3aa06744.js","./entry.a2414e47.js","./index.a6ef77ff.js","./preview.1fb84d5a.js","./utils.50cc6ec6.js"],import.meta.url).then(o=>o.useContentDatabase())).fetch(t);const s=await $fetch(a,{method:"GET",responseType:"json",params:r.experimental.stripQueryParameters?void 0:{_params:E(e),previewToken:q().getPreviewToken()}});if(typeof s=="string"&&s.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return s};function re(t,...r){const{content:e}=P().public,a=K(G(),typeof t!="string"?t:{});let s;typeof t=="string"&&(s=T(L(t,...r)));const n=a.params;return a.params=()=>{var u,i,y;const o=n();return s&&(o.where=o.where||[],o.first&&(o.where||[]).length===0?o.where.push({_path:j(s)}):o.where.push({_path:new RegExp(`^${s.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=o.sort)!=null&&u.length||(o.sort=[{_file:1,$numeric:!0}]),e.locales.length&&((y=(i=o.where)==null?void 0:i.find(d=>d._locale))!=null&&y._locale||(o.where=o.where||[],o.where.push({_locale:e.defaultLocale}))),o},a}export{te as a,f as b,X as c,Z as d,z as e,K as f,D as g,E as j,re as q,ee as s,V as u,Y as w};
