import{u as x,a as b,b as v}from"./chunk-VGFBGBUR-CDqsZTPo.js";import"./chunk-6LRPF7MX-DPOf_jHc.js";import{q as h,a as j,j as o,c$ as P,s as T,b as u,d as w,d0 as C,H as D,B as S,L as q,O as L,r as k,k as A,u as E,d1 as Q,A as _}from"./index-Cr7wFzsV.js";import{u as z,_ as H}from"./chunk-X3LH6P65-BVvUPAOJ.js";import"./lodash-DTUgzs_d.js";import"./chunk-TMAS4ILY-CWd--Kco.js";import{S as $}from"./chunk-2RQLKDBF-BznQuUXd.js";import{u as B}from"./use-prompt-KjfHnawf.js";import{P as I}from"./pencil-square-DGmQfY8L.js";import{T as K}from"./trash-N4B000q_.js";import{C as N}from"./container-BZWN47b1.js";import{c as O}from"./index-CMvaOlhC.js";import"./chunk-MSDRGCRR-cHubh9cc.js";import"./chunk-P3UUX2T6-BhMe2sOC.js";import"./chunk-ADOCJB6L-DmPUvYmf.js";import"./chunk-C76H5USB-DWkF_AEH.js";import"./chunk-YEDAFXMB-CZPcQnNW.js";import"./chunk-AOFGTNG6-CyFtD_aT.js";import"./table-CCpYaCVe.js";import"./chunk-WX2SMNCD-wCDqFI3S.js";import"./plus-mini-DZR9uHyL.js";import"./command-bar-79I9OZ9U.js";import"./index-BxSKB-wb.js";import"./chunk-DV5RB7II-BPrWOnzf.js";import"./format-BGUTzA4Y.js";import"./_isIndex-D_gZsjWr.js";import"./x-mark-mini-C5VOj4mU.js";import"./date-picker-CrUp9HRu.js";import"./popover-DF34uy8v.js";import"./triangle-left-mini-2tss9Lo1.js";import"./index-B47efB4Y.js";import"./Trans-rvN24YUA.js";import"./check-Cn7MNPQx.js";import"./prompt-CRI2UiR4.js";var p={limit:20,offset:0},F=()=>({queryKey:P.list(p),queryFn:async()=>T.admin.promotion.list(p)}),qe=e=>async()=>{const t=F();return h.getQueryData(t.queryKey)??await e.fetchQuery(t)},m=20,M=()=>{const{t:e}=u(),t=w(),{searchParams:a,raw:i}=x({pageSize:m}),{promotions:s,count:r,isLoading:c,isError:d,error:y}=C({...a},{initialData:t,placeholderData:A}),f=b(),l=G(),{table:g}=z({data:s??[],columns:l,count:r,enablePagination:!0,pageSize:m,getRowId:n=>n.id});if(d)throw y;return o.jsxs(N,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(D,{level:"h2",children:e("promotions.domain")}),o.jsx(S,{size:"small",variant:"secondary",asChild:!0,children:o.jsx(q,{to:"create",children:e("actions.create")})})]}),o.jsx(H,{table:g,columns:l,count:r,pageSize:m,filters:f,search:!0,pagination:!0,isLoading:c,queryObject:i,navigateTo:n=>`${n.original.id}`,orderBy:[{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}]}),o.jsx(L,{})]})},R=({promotion:e})=>{const{t}=u(),a=B(),i=E(),{mutateAsync:s}=Q(e.id),r=async()=>{if(await a({title:t("general.areYouSure"),description:t("promotions.deleteWarning",{code:e.code}),confirmText:t("actions.delete"),cancelText:t("actions.cancel"),verificationInstruction:t("general.typeToConfirm"),verificationText:e.code}))try{await s(void 0,{onSuccess:()=>{i("/promotions",{replace:!0})}})}catch{throw new Error(`Promotion with code ${e.code} could not be deleted`)}};return o.jsx(_,{groups:[{actions:[{icon:o.jsx(I,{}),label:t("actions.edit"),to:`/promotions/${e.id}/edit`},{icon:o.jsx(K,{}),label:t("actions.delete"),onClick:r}]}]})},W=O(),G=()=>{const e=v();return k.useMemo(()=>[...e,W.display({id:"actions",cell:({row:t})=>o.jsx(R,{promotion:t.original})})],[e])},Le=()=>{const{getWidgets:e}=j();return o.jsx($,{widgets:{before:e("promotion.list.before"),after:e("promotion.list.after")},children:o.jsx(M,{})})};export{Le as Component,qe as promotionsLoader};
