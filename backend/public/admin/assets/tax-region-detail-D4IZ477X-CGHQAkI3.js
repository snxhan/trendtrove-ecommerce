import{T as _,u as w,a as E,b as D}from"./chunk-QR3HOWRY-BoPhfCr0.js";import{u as N,a as C,T as O}from"./chunk-6XTDCUWJ-Dlmkoi2r.js";import{T as z}from"./chunk-JHNHXN7U-DIo7ld3R.js";import{a as j}from"./chunk-THZJC662-D8uxQDqu.js";import{R as k,r as T,d as B,f4 as A,a as I,j as e,dn as L,b as x,V as q,Y as F,e$ as G,H as R,T as f,B as g,k as S}from"./index-Cr7wFzsV.js";import{f5 as Ee,f6 as De}from"./index-Cr7wFzsV.js";import"./lodash-DTUgzs_d.js";import{S as H}from"./chunk-2RQLKDBF-BznQuUXd.js";import{a as J}from"./chunk-5OOAHPXU-BhQ4qOgr.js";import{C as u}from"./container-BZWN47b1.js";import{A as Q}from"./alert-Cr0Fjs1Q.js";import"./chunk-C76H5USB-DWkF_AEH.js";import"./chunk-V3MOBCDF-Fr8ItIPO.js";import"./chunk-3WXBLS2P-MKHj1mOQ.js";import"./chunk-YEDAFXMB-CZPcQnNW.js";import"./chunk-AOFGTNG6-CyFtD_aT.js";import"./table-CCpYaCVe.js";import"./chunk-WX2SMNCD-wCDqFI3S.js";import"./plus-mini-DZR9uHyL.js";import"./index-CMvaOlhC.js";import"./pencil-square-DGmQfY8L.js";import"./trash-N4B000q_.js";import"./arrow-down-right-mini-CTlNW6N_.js";import"./status-badge-CXw1w2Ha.js";import"./chunk-EQTBJSBZ-DoOpcJv0.js";import"./react-country-flag.esm-CvWrJWTf.js";import"./use-prompt-KjfHnawf.js";import"./prompt-CRI2UiR4.js";import"./Trans-rvN24YUA.js";import"./x-mark-mini-C5VOj4mU.js";import"./check-Cn7MNPQx.js";var X=({taxRegion:s})=>{const{t:r}=x(),i=s.tax_rates.filter(a=>a.is_default===!0),t=i.length===0;return e.jsxs(u,{className:"divide-y p-0",children:[e.jsx(z,{taxRegion:s,type:"header",asLink:!1,badge:t&&e.jsx(q,{content:r("taxRegions.fields.noDefaultRate.tooltip"),children:e.jsx(F,{color:"orange",size:"2xsmall",className:"cursor-default",children:r("taxRegions.fields.noDefaultRate.label")})})}),i.map(a=>e.jsx(_,{taxRate:a},a.id))]})},h=10,v="p",Z=({taxRegion:s,showSublevelRegions:r})=>{const{t:i}=x(),{searchParams:t,raw:a}=N({pageSize:h,prefix:v}),{tax_regions:o,count:n,isPending:c,isError:l,error:m}=G({...t,parent_id:s.id},{placeholderData:S}),{table:y}=C({count:n,data:o,pageSize:h,prefix:v}),d=j(s.country_code);if(!d&&!r&&!s.children.length)return null;const P=(d==null?void 0:d.type)||"sublevel";if(l)throw m;return e.jsx(u,{className:"divide-y p-0",children:e.jsx(O,{variant:"province",action:{to:"provinces/create",label:i("actions.create")},table:y,isPending:c,queryObject:a,count:n,children:e.jsx(R,{level:"h2",children:i(`taxRegions.${P}.header`)})})})},b=10,p="o",$=({taxRegion:s})=>{const{t:r}=x(),{searchParams:i,raw:t}=w({pageSize:b,prefix:p}),{tax_rates:a,count:o,isPending:n,isError:c,error:l}=J({...i,tax_region_id:s.id,is_default:!1},{placeholderData:S}),{table:m}=E({count:o,data:a,pageSize:b,prefix:p});if(c)throw l;return e.jsx(u,{className:"p-0",children:e.jsx(D,{isPending:n,table:m,count:o,action:{label:r("actions.create"),to:"overrides/create"},queryObject:t,prefix:p,children:e.jsx(R,{level:"h2",children:r("taxRegions.taxOverrides.header")})})})},V=({taxRegion:s,showSublevelRegions:r,setShowSublevelRegions:i})=>{const{t}=x(),[a,o]=T.useState(!1);return j(s.country_code)||r||a||s.children.length?null:e.jsx(Q,{dismissible:!0,variant:"info",className:"bg-ui-bg-base",children:e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(f,{size:"small",leading:"compact",weight:"plus",asChild:!0,children:e.jsx("h2",{children:t("taxRegions.fields.sublevels.alert.header")})}),e.jsx(f,{size:"small",leading:"compact",className:"text-pretty",children:t("taxRegions.fields.sublevels.alert.description")})]}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(g,{variant:"secondary",size:"small",onClick:()=>i(!0),children:t("taxRegions.fields.sublevels.alert.action")}),e.jsx(g,{variant:"transparent",size:"small",onClick:()=>o(!0),children:t("actions.hide")})]})]})})},Pe=()=>{const{id:s}=k(),[r,i]=T.useState(!1),t=B(),{tax_region:a,isLoading:o,isError:n,error:c}=A(s,void 0,{initialData:t}),{getWidgets:l}=I();if(o||!a)return e.jsx(L,{sections:4,showJSON:!0});if(n)throw c;return e.jsxs(H,{data:a,showJSON:!0,widgets:{after:l("tax.details.after"),before:l("tax.details.before")},children:[e.jsx(V,{taxRegion:a,showSublevelRegions:r,setShowSublevelRegions:i}),e.jsx(X,{taxRegion:a}),e.jsx(Z,{taxRegion:a,showSublevelRegions:r}),e.jsx($,{taxRegion:a})]})};export{Ee as Breadcrumb,Pe as Component,Pe as TaxRegionDetail,De as loader};
