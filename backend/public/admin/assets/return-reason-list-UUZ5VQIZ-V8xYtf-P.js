import{a as x}from"./chunk-NOL65OUL-DF3BQGQ1.js";import{q as p,a as y,j as t,f7 as h,s as g,b as u,cW as j,H as b,T as v,B as T,L as w,r as D,k as C,A as S,f8 as L,t as d}from"./index-Cr7wFzsV.js";import{u as P,_ as q}from"./chunk-X3LH6P65-BVvUPAOJ.js";import"./lodash-DTUgzs_d.js";import{b as E}from"./chunk-EMNHBSFU-D7NEME9K.js";import"./chunk-TMAS4ILY-CWd--Kco.js";import{S as A}from"./chunk-2RQLKDBF-BznQuUXd.js";import{P as _}from"./pencil-square-DGmQfY8L.js";import{T as k}from"./trash-N4B000q_.js";import{u as z}from"./use-prompt-KjfHnawf.js";import{C as H}from"./container-BZWN47b1.js";import{c as Q}from"./index-CMvaOlhC.js";import"./chunk-B4FQDBC3-Bp6yD07O.js";import"./chunk-P3UUX2T6-BhMe2sOC.js";import"./format-BGUTzA4Y.js";import"./chunk-MSDRGCRR-cHubh9cc.js";import"./chunk-YEDAFXMB-CZPcQnNW.js";import"./chunk-AOFGTNG6-CyFtD_aT.js";import"./table-CCpYaCVe.js";import"./chunk-WX2SMNCD-wCDqFI3S.js";import"./plus-mini-DZR9uHyL.js";import"./command-bar-79I9OZ9U.js";import"./index-BxSKB-wb.js";import"./chunk-C76H5USB-DWkF_AEH.js";import"./chunk-DV5RB7II-BPrWOnzf.js";import"./_isIndex-D_gZsjWr.js";import"./x-mark-mini-C5VOj4mU.js";import"./date-picker-CrUp9HRu.js";import"./popover-DF34uy8v.js";import"./triangle-left-mini-2tss9Lo1.js";import"./index-B47efB4Y.js";import"./Trans-rvN24YUA.js";import"./check-Cn7MNPQx.js";import"./prompt-CRI2UiR4.js";var N=e=>({queryKey:h.list(e),queryFn:async()=>g.admin.returnReason.list(e)}),we=async()=>{const e=N();return p.getQueryData(e.queryKey)??await p.fetchQuery(e)},K=({id:e,label:r})=>{const{t:s}=u(),o=z(),{mutateAsync:a}=L(e);return async()=>{await o({title:s("general.areYouSure"),description:s("returnReasons.delete.confirmation",{label:r}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await a(void 0,{onSuccess:()=>{d.success(s("returnReasons.delete.successToast",{label:r}))},onError:n=>{d.error(n.message)}})}},i=20,M=()=>{const{t:e}=u(),{searchParams:r,raw:s}=E({pageSize:i}),{return_reasons:o,count:a,isPending:c,isError:l,error:n}=j(r,{placeholderData:C}),m=I(),{table:f}=P({data:o,columns:m,count:a,getRowId:R=>R.id,pageSize:i});if(l)throw n;return t.jsxs(H,{className:"divide-y px-0 py-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{children:[t.jsx(b,{children:e("returnReasons.domain")}),t.jsx(v,{className:"text-ui-fg-subtle",size:"small",children:e("returnReasons.subtitle")})]}),t.jsx(T,{variant:"secondary",size:"small",asChild:!0,children:t.jsx(w,{to:"create",children:e("actions.create")})})]}),t.jsx(q,{table:f,queryObject:s,count:a,isLoading:c,columns:m,pageSize:i,noHeader:!0,pagination:!0,search:!0})]})},O=({returnReason:e})=>{const{t:r}=u(),s=K(e);return t.jsx(S,{groups:[{actions:[{icon:t.jsx(_,{}),label:r("actions.edit"),to:`${e.id}/edit`}]},{actions:[{icon:t.jsx(k,{}),label:r("actions.delete"),onClick:s}]}]})},B=Q(),I=()=>{const e=x();return D.useMemo(()=>[...e,B.display({id:"actions",cell:({row:r})=>t.jsx(O,{returnReason:r.original})})],[e])},De=()=>{const{getWidgets:e}=y();return t.jsx(A,{showMetadata:!1,showJSON:!1,hasOutlet:!0,widgets:{after:e("return_reason.list.after"),before:e("return_reason.list.before")},children:t.jsx(M,{})})};export{De as Component,we as loader};
