import{u as b}from"./chunk-G3QXMPRB-BLoR4cx-.js";import{q as v,a as P,j as t,p as C,s as T,b as f,c as D,d as L,e as S,k,H as q,B as c,L as l,O as w,r as A,f as E,A as z,t as m}from"./index-Cr7wFzsV.js";import{u as Q,_}from"./chunk-X3LH6P65-BVvUPAOJ.js";import"./lodash-DTUgzs_d.js";import{u as H,a as R}from"./chunk-U6CSGYH6-BjbhkRJ7.js";import"./chunk-TMAS4ILY-CWd--Kco.js";import{S as B}from"./chunk-2RQLKDBF-BznQuUXd.js";import{u as K}from"./use-prompt-KjfHnawf.js";import{P as M}from"./pencil-square-DGmQfY8L.js";import{T as N}from"./trash-N4B000q_.js";import{C as O}from"./container-BZWN47b1.js";import{c as $}from"./index-CMvaOlhC.js";import"./chunk-IQBAUTU5-B6k9AWbg.js";import"./chunk-ADOCJB6L-DmPUvYmf.js";import"./chunk-P3UUX2T6-BhMe2sOC.js";import"./chunk-YEDAFXMB-CZPcQnNW.js";import"./chunk-AOFGTNG6-CyFtD_aT.js";import"./table-CCpYaCVe.js";import"./chunk-WX2SMNCD-wCDqFI3S.js";import"./plus-mini-DZR9uHyL.js";import"./command-bar-79I9OZ9U.js";import"./index-BxSKB-wb.js";import"./chunk-C76H5USB-DWkF_AEH.js";import"./chunk-DV5RB7II-BPrWOnzf.js";import"./format-BGUTzA4Y.js";import"./_isIndex-D_gZsjWr.js";import"./x-mark-mini-C5VOj4mU.js";import"./date-picker-CrUp9HRu.js";import"./popover-DF34uy8v.js";import"./triangle-left-mini-2tss9Lo1.js";import"./index-B47efB4Y.js";import"./Trans-rvN24YUA.js";import"./check-Cn7MNPQx.js";import"./prompt-CRI2UiR4.js";var F=()=>({queryKey:C.list({limit:20,offset:0}),queryFn:async()=>T.admin.product.list({limit:20,offset:0})}),qe=e=>async()=>{const s=F();return v.getQueryData(s.queryKey)??await e.fetchQuery(s)},d=20,I=()=>{const{t:e}=f(),s=D(),r=L(),{searchParams:o,raw:i}=H({pageSize:d}),{products:u,count:a,isLoading:x,isError:y,error:h}=S({...o},{initialData:r,placeholderData:k}),g=R(),p=Y(),{table:j}=Q({data:u??[],columns:p,count:a,enablePagination:!0,pageSize:d,getRowId:n=>n.id});if(y)throw h;return t.jsxs(O,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(q,{level:"h2",children:e("products.domain")}),t.jsxs("div",{className:"flex items-center justify-center gap-x-2",children:[t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:`export${s.search}`,children:e("actions.export")})}),t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:"import",children:e("actions.import")})}),t.jsx(c,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(l,{to:"create",children:e("actions.create")})})]})]}),t.jsx(_,{table:j,columns:p,count:a,pageSize:d,filters:g,search:!0,pagination:!0,isLoading:x,queryObject:i,navigateTo:n=>`${n.original.id}`,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],noRecords:{message:e("products.list.noRecordsMessage")}}),t.jsx(w,{})]})},W=({product:e})=>{const{t:s}=f(),r=K(),{mutateAsync:o}=E(e.id),i=async()=>{await r({title:s("general.areYouSure"),description:s("products.deleteWarning",{title:e.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await o(void 0,{onSuccess:()=>{m.success(s("products.toasts.delete.success.header"),{description:s("products.toasts.delete.success.description",{title:e.title})})},onError:a=>{m.error(s("products.toasts.delete.error.header"),{description:a.message})}})};return t.jsx(z,{groups:[{actions:[{icon:t.jsx(M,{}),label:s("actions.edit"),to:`/products/${e.id}/edit`}]},{actions:[{icon:t.jsx(N,{}),label:s("actions.delete"),onClick:i}]}]})},G=$(),Y=()=>{const e=b();return A.useMemo(()=>[...e,G.display({id:"actions",cell:({row:r})=>t.jsx(W,{product:r.original})})],[e])},we=()=>{const{getWidgets:e}=P();return t.jsx(B,{widgets:{after:e("product.list.after"),before:e("product.list.before")},children:t.jsx(I,{})})};export{we as Component,qe as productLoader};
