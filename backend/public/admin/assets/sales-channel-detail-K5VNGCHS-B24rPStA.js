import{u as q}from"./chunk-G3QXMPRB-BLoR4cx-.js";import{h as S,j as t,q as B,d as L,R as z,a as M,dn as $,p as H,s as O,b as p,u as Q,ed as W,H as y,A as j,T as h,r as b,e as F,k as G,ee as v,L as J,B as K,t as l}from"./index-Cr7wFzsV.js";import{u as Y,_ as Z}from"./chunk-X3LH6P65-BVvUPAOJ.js";import"./lodash-DTUgzs_d.js";import{u as U,a as V}from"./chunk-U6CSGYH6-BjbhkRJ7.js";import"./chunk-TMAS4ILY-CWd--Kco.js";import{S as X}from"./chunk-2RQLKDBF-BznQuUXd.js";import{u as C}from"./use-prompt-KjfHnawf.js";import{P}from"./pencil-square-DGmQfY8L.js";import{T as w}from"./trash-N4B000q_.js";import{C as k}from"./container-BZWN47b1.js";import{S as ee}from"./status-badge-CXw1w2Ha.js";import{C as x}from"./checkbox-Dagq7EeC.js";import{c as se}from"./index-CMvaOlhC.js";import"./chunk-IQBAUTU5-B6k9AWbg.js";import"./chunk-ADOCJB6L-DmPUvYmf.js";import"./chunk-P3UUX2T6-BhMe2sOC.js";import"./chunk-YEDAFXMB-CZPcQnNW.js";import"./chunk-AOFGTNG6-CyFtD_aT.js";import"./table-CCpYaCVe.js";import"./chunk-WX2SMNCD-wCDqFI3S.js";import"./plus-mini-DZR9uHyL.js";import"./command-bar-79I9OZ9U.js";import"./index-BxSKB-wb.js";import"./chunk-C76H5USB-DWkF_AEH.js";import"./chunk-DV5RB7II-BPrWOnzf.js";import"./format-BGUTzA4Y.js";import"./_isIndex-D_gZsjWr.js";import"./x-mark-mini-C5VOj4mU.js";import"./date-picker-CrUp9HRu.js";import"./popover-DF34uy8v.js";import"./triangle-left-mini-2tss9Lo1.js";import"./index-B47efB4Y.js";import"./Trans-rvN24YUA.js";import"./check-Cn7MNPQx.js";import"./prompt-CRI2UiR4.js";var We=s=>{const{id:e}=s.params||{},{sales_channel:a}=S(e,{initialData:s.data,enabled:!!e});return a?t.jsx("span",{children:a.name}):null},te=s=>({queryKey:H.detail(s),queryFn:async()=>O.admin.salesChannel.retrieve(s)}),Fe=async({params:s})=>{const e=s.id,a=te(e);return B.ensureQueryData(a)},ae=({salesChannel:s})=>{const{t:e}=p(),a=C(),r=Q(),{mutateAsync:o}=W(s.id),c=async()=>{await a({title:e("general.areYouSure"),description:e("salesChannels.deleteSalesChannelWarning",{name:s.name}),verificationInstruction:e("general.typeToConfirm"),verificationText:s.name,confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await o(void 0,{onSuccess:()=>{l.success(e("salesChannels.toast.delete")),r("/settings/sales-channels",{replace:!0})},onError:u=>{l.error(u.message)}})};return t.jsxs(k,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(y,{children:s.name}),t.jsxs("div",{className:"flex items-center gap-x-2",children:[t.jsx(ee,{color:s.is_disabled?"red":"green",children:e(`general.${s.is_disabled?"disabled":"enabled"}`)}),t.jsx(j,{groups:[{actions:[{icon:t.jsx(P,{}),label:e("actions.edit"),to:`/settings/sales-channels/${s.id}/edit`}]},{actions:[{icon:t.jsx(w,{}),label:e("actions.delete"),onClick:c}]}]})]})]}),t.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[t.jsx(h,{size:"small",leading:"compact",weight:"plus",children:e("fields.description")}),t.jsx(h,{size:"small",leading:"compact",children:s.description||"-"})]})]})},m=10,ne=({salesChannel:s})=>{const[e,a]=b.useState({}),{searchParams:r,raw:o}=U({pageSize:m}),{products:c,count:d,isPending:u,isError:T,error:_}=F({...r,sales_channel_id:[s.id]},{placeholderData:G}),g=re(),D=V(["sales_channel_id"]),{table:R}=Y({data:c??[],columns:g,count:d,enablePagination:!0,enableRowSelection:!0,pageSize:m,getRowId:i=>i.id,rowSelection:{state:e,updater:a},meta:{salesChannelId:s.id}}),{mutateAsync:A}=v(s.id),E=C(),{t:n}=p(),N=async()=>{const i=Object.keys(e);await E({title:n("general.areYouSure"),description:n("salesChannels.removeProductsWarning",{count:i.length,sales_channel:s.name}),confirmText:n("actions.delete"),cancelText:n("actions.cancel")})&&await A(i,{onSuccess:()=>{l.success(n("salesChannels.toast.update")),a({})},onError:I=>{l.error(I.message)}})};if(T)throw _;return t.jsxs(k,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsx(y,{level:"h2",children:n("products.domain")}),t.jsx(J,{to:`/settings/sales-channels/${s.id}/add-products`,children:t.jsx(K,{size:"small",variant:"secondary",children:n("general.add")})})]}),t.jsx(Z,{table:R,columns:g,pageSize:m,commands:[{action:N,label:n("actions.remove"),shortcut:"r"}],count:d,pagination:!0,search:!0,filters:D,navigateTo:i=>`/products/${i.id}`,isLoading:u,orderBy:[{key:"title",label:n("fields.title")},{key:"status",label:n("fields.status")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],queryObject:o,noRecords:{message:n("salesChannels.products.list.noRecordsMessage")}})]})},f=se(),re=()=>{const s=q();return b.useMemo(()=>[f.display({id:"select",header:({table:e})=>t.jsx(x,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>t.jsx(x,{checked:e.getIsSelected(),onCheckedChange:a=>e.toggleSelected(!!a),onClick:a=>{a.stopPropagation()}})}),...s,f.display({id:"actions",cell:({row:e,table:a})=>{const{salesChannelId:r}=a.options.meta;return t.jsx(oe,{productId:e.original.id,salesChannelId:r})}})],[s])},oe=({salesChannelId:s,productId:e})=>{const{t:a}=p(),{mutateAsync:r}=v(s),o=async()=>{await r([e],{onSuccess:()=>{l.success(a("salesChannels.toast.update"))},onError:c=>{l.error(c.message)}})};return t.jsx(j,{groups:[{actions:[{icon:t.jsx(P,{}),label:a("actions.edit"),to:`/products/${e}`}]},{actions:[{icon:t.jsx(w,{}),label:a("actions.remove"),onClick:o}]}]})},Ge=()=>{const s=L(),{id:e}=z(),{sales_channel:a,isPending:r}=S(e,{initialData:s}),{getWidgets:o}=M();return r||!a?t.jsx($,{sections:2,showJSON:!0,showMetadata:!0}):t.jsxs(X,{widgets:{before:o("sales_channel.details.before"),after:o("sales_channel.details.after")},showJSON:!0,showMetadata:!0,data:a,children:[t.jsx(ae,{salesChannel:a}),t.jsx(ne,{salesChannel:a})]})};export{We as Breadcrumb,Ge as Component,Fe as loader};
