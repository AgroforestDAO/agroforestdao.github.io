import{d as u,u as g,o as r,c as a,g as f,h as p,t as b,e as c,f as _,i as k,b as o,w as d,j as h,r as m,_ as x}from"./index.dfcabf20.js";const v=u({__name:"MenuItem",props:{label:null,routeTo:null},setup(l){const e=l,n=g(),t=(s="")=>{n.push(s)};return(s,i)=>(r(),a("p",{class:"icon-btn text-primary-light hover:underline underline-offset-2",onClick:i[0]||(i[0]=j=>t(e==null?void 0:e.routeTo))},[f(s.$slots,"default",{},()=>[p(b(e==null?void 0:e.label),1)])]))}}),w="/agroforestdao_logo_white.png",y="/agroforestdao_logo.png",D={class:"flex p-3 justify-between border-b-3 border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light"},$={key:0,src:w,alt:"Agroforest DAO",class:"w-14"},B={key:1,src:y,alt:"Agroforest DAO",class:"w-14"},C={class:"flex items-center space-x-3"},V=c("div",{i:"carbon-sun dark:carbon-moon"},null,-1),A=c("div",{i:"carbon-menu"},null,-1),H=u({__name:"LandingHeader",setup(l){return(e,n)=>{const t=v,s=m("Button");return r(),a("div",D,[c("div",null,[_(k)?(r(),a("img",$)):(r(),a("img",B))]),c("div",C,[o(t,{label:"Home"}),o(t,{label:"Events"}),o(t,{label:"Docs"}),o(s,{class:"icon-btn pl-7",onClick:n[0]||(n[0]=i=>_(h)())},{default:d(()=>[V]),_:1}),o(s,{class:"icon-btn"},{default:d(()=>[A]),_:1})])])}}}),N={},R={class:"text-primary-light dark:text-primary-dark"};function T(l,e){const n=H,t=m("RouterView");return r(),a("main",R,[o(n),o(t)])}const I=x(N,[["render",T]]);export{I as default};
