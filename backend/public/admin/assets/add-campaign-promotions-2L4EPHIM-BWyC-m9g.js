import{u as E,a as F,b as z}from"./chunk-VGFBGBUR-CDqsZTPo.js";import"./chunk-6LRPF7MX-DPOf_jHc.js";import{a2 as M,ad as B,a4 as H,R as N,df as O,j as e,b as k,a8 as V,a9 as K,dg as L,r as I,d0 as q,t as A,E as G,B as T,V as C,k as Q}from"./index-Cr7wFzsV.js";import{u as Z,_ as $}from"./chunk-X3LH6P65-BVvUPAOJ.js";import"./lodash-DTUgzs_d.js";import"./chunk-TMAS4ILY-CWd--Kco.js";import{K as J}from"./chunk-6HTZNHPT-Bx5jOcaR.js";import{R as n,u as U}from"./chunk-JGQGO74V-BjbOW5Cw.js";import{C as R}from"./checkbox-Dagq7EeC.js";import{c as W}from"./index-CMvaOlhC.js";import"./chunk-MSDRGCRR-cHubh9cc.js";import"./chunk-P3UUX2T6-BhMe2sOC.js";import"./chunk-ADOCJB6L-DmPUvYmf.js";import"./chunk-C76H5USB-DWkF_AEH.js";import"./chunk-YEDAFXMB-CZPcQnNW.js";import"./chunk-AOFGTNG6-CyFtD_aT.js";import"./table-CCpYaCVe.js";import"./chunk-WX2SMNCD-wCDqFI3S.js";import"./plus-mini-DZR9uHyL.js";import"./command-bar-79I9OZ9U.js";import"./index-BxSKB-wb.js";import"./chunk-DV5RB7II-BPrWOnzf.js";import"./format-BGUTzA4Y.js";import"./_isIndex-D_gZsjWr.js";import"./x-mark-mini-C5VOj4mU.js";import"./date-picker-CrUp9HRu.js";import"./popover-DF34uy8v.js";import"./triangle-left-mini-2tss9Lo1.js";import"./index-B47efB4Y.js";import"./prompt-CRI2UiR4.js";var X=M({promotion_ids:B(H()).min(1)}),_=50,Y=({campaign:s})=>{var P,v;const{t:o}=k(),{handleSuccess:t}=U(),r=V({defaultValues:{promotion_ids:[]},resolver:K(X)}),{setValue:u}=r,{mutateAsync:x,isPending:b}=L(s.id),[g,d]=I.useState({}),c=i=>{const y=typeof i=="function"?i(g):i,D=Object.keys(y);u("promotion_ids",D,{shouldDirty:!0,shouldTouch:!0}),d(y)},{searchParams:l,raw:j}=E({pageSize:_}),{promotions:S,count:a,isPending:h}=q({...l},{placeholderData:Q}),m=oe(),f=F(),{table:p}=Z({data:S??[],columns:m,enableRowSelection:i=>i.original.campaign_id!==s.id,enablePagination:!0,getRowId:i=>i.id,pageSize:_,count:a,rowSelection:{state:g,updater:c},meta:{campaignId:s.id,currencyCode:(P=s==null?void 0:s.budget)==null?void 0:P.currency_code,budgetType:(v=s==null?void 0:s.budget)==null?void 0:v.type}}),w=r.handleSubmit(async i=>{await x({add:i.promotion_ids},{onSuccess:()=>{A.success(o("campaigns.promotions.toast.success",{count:i.promotion_ids.length})),t()},onError:y=>A.error(y.message)})});return e.jsx(n.Form,{form:r,children:e.jsxs(J,{onSubmit:w,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(n.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:r.formState.errors.promotion_ids&&e.jsx(G,{variant:"error",children:r.formState.errors.promotion_ids.message})})}),e.jsx(n.Body,{className:"flex size-full flex-col overflow-y-auto",children:e.jsx($,{table:p,count:a,columns:m,pageSize:_,isLoading:h,filters:f,orderBy:[{key:"code",label:o("fields.code")},{key:"type",label:o("fields.type")},{key:"created_at",label:o("fields.createdAt")},{key:"updated_at",label:o("fields.updatedAt")}],queryObject:j,layout:"fill",pagination:!0,search:"autofocus",noRecords:{message:o("campaigns.promotions.add.list.noRecordsMessage")}})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(T,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(T,{size:"small",type:"submit",isLoading:b,children:o("actions.save")})]})})]})})},ee=W(),oe=()=>{const s=z(),{t:o}=k();return I.useMemo(()=>[ee.display({id:"select",header:({table:t})=>e.jsx(R,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:r=>t.toggleAllRowsSelected(!!r)}),cell:({row:t,table:r})=>{var h,m,f;const{campaignId:u,currencyCode:x,budgetType:b}=r.options.meta,g=b==="spend",d=t.original.campaign_id===u,c=!!t.original.campaign_id&&t.original.campaign_id!==u,l=g&&((h=t.original.application_method)==null?void 0:h.currency_code)!==x,j=t.getIsSelected()||d,S=l||c,a=e.jsx(R,{checked:S?"indeterminate":j,disabled:d||c||l,onCheckedChange:p=>t.toggleSelected(!!p),onClick:p=>{p.stopPropagation()}});return c?e.jsx(C,{content:o("campaigns.promotions.alreadyAddedDiffCampaign",{name:(f=(m=t.original)==null?void 0:m.campaign)==null?void 0:f.name}),side:"right",children:a}):l?e.jsx(C,{content:o("campaigns.promotions.currencyMismatch"),side:"right",children:a}):d?e.jsx(C,{content:o("campaigns.promotions.alreadyAdded"),side:"right",children:a}):a}}),...s],[o,s])},De=()=>{const{id:s}=N(),{campaign:o,isError:t,error:r}=O(s);if(t)throw r;return e.jsx(n,{children:o&&e.jsx(Y,{campaign:o})})};export{De as Component};
