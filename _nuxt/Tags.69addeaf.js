import{_ as y,r as b,h as x,o as d,c as i,a as t,b as p,w as u,F as f,l as v,d as w,t as S,e as I,p as N,f as T}from"./entry.a2414e47.js";import{u as k,q as B}from"./query.58eb1799.js";const g=e=>(N("data-v-f228b1fe"),e=e(),T(),e),C=g(()=>t("div",{class:"col-lg-3"},null,-1)),V={class:"col col-lg-6 post-group"},q={class:"row"},A={class:"tag-list",style:{display:"contents"}},D=g(()=>t("i",{class:"fa fa-tags","aria-hidden":"true"},null,-1)),F={class:"article-tags",style:{display:"contents"}},L={__name:"Tags",async setup(e){let a,_;b(!1);const l=(r,n)=>r.map(s=>{let o=s;return s[n]&&(o=l(s[n])),o}).flat(1),{data:h}=([a,_]=x(()=>k("tags",()=>B("blog").only(["tags"]).find())),a=await a,_(),a),m=[...new Set(l(h.value,"tags"))];return(r,n)=>{const c=I;return d(),i(f,null,[C,t("div",V,[t("div",q,[t("div",A,[p(c,{to:"/blog",class:"icon-button"},{default:u(()=>[D]),_:1}),t("ul",F,[(d(),i(f,null,v(m,(s,o)=>t("li",{key:o,class:"tag"},[p(c,{to:`/blog/tags/${s}`,class:"btn-txt badge badge-secondary"},{default:u(()=>[w(S(s),1)]),_:2},1032,["to"])])),64))])])])])],64)}}},z=y(L,[["__scopeId","data-v-f228b1fe"]]);export{z as _};
