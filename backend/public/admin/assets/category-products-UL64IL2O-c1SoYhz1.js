import{u as I}from"./chunk-G3QXMPRB-BLoR4cx-.js";import{a6 as u,R as A,aN as B,j as t,b as P,r as S,a8 as H,a9 as M,e as N,aO as D,t as f,E as O,B as x,V}from"./index-Cr7wFzsV.js";import{u as K,_ as L}from"./chunk-X3LH6P65-BVvUPAOJ.js";import"./lodash-DTUgzs_d.js";import{u as q,a as G}from"./chunk-U6CSGYH6-BjbhkRJ7.js";import"./chunk-TMAS4ILY-CWd--Kco.js";import{K as Q}from"./chunk-6HTZNHPT-Bx5jOcaR.js";import{R as l,u as U}from"./chunk-JGQGO74V-BjbOW5Cw.js";import{C as y}from"./checkbox-Dagq7EeC.js";import{c as X}from"./index-CMvaOlhC.js";import"./chunk-IQBAUTU5-B6k9AWbg.js";import"./chunk-ADOCJB6L-DmPUvYmf.js";import"./chunk-P3UUX2T6-BhMe2sOC.js";import"./chunk-YEDAFXMB-CZPcQnNW.js";import"./chunk-AOFGTNG6-CyFtD_aT.js";import"./table-CCpYaCVe.js";import"./chunk-WX2SMNCD-wCDqFI3S.js";import"./plus-mini-DZR9uHyL.js";import"./command-bar-79I9OZ9U.js";import"./index-BxSKB-wb.js";import"./chunk-C76H5USB-DWkF_AEH.js";import"./chunk-DV5RB7II-BPrWOnzf.js";import"./format-BGUTzA4Y.js";import"./_isIndex-D_gZsjWr.js";import"./x-mark-mini-C5VOj4mU.js";import"./date-picker-CrUp9HRu.js";import"./popover-DF34uy8v.js";import"./triangle-left-mini-2tss9Lo1.js";import"./index-B47efB4Y.js";import"./prompt-CRI2UiR4.js";var Z=u.object({product_ids:u.array(u.string())}),m=50,p="p",$=({categoryId:c,products:o=[]})=>{const{t:e}=P(),{handleSuccess:a}=U(),[d,n]=S.useState(o.reduce((r,i)=>(r[i.id]=!0,r),{})),s=H({defaultValues:{product_ids:[]},resolver:M(Z)}),b=r=>{const i=typeof r=="function"?r(d):r;s.setValue("product_ids",Object.keys(i),{shouldDirty:!0,shouldTouch:!0}),n(i)},{searchParams:j,raw:C}=q({pageSize:m,prefix:p}),{products:v,count:g,isPending:_,isError:E,error:R}=N({...j}),h=W(),k=G(["categories"]),{table:T}=K({data:v,columns:h,getRowId:r=>r.id,count:g,pageSize:m,prefix:p,enableRowSelection:r=>!o.some(i=>i.id===r.original.id),enablePagination:!0,rowSelection:{state:d,updater:b}}),{mutateAsync:w,isPending:F}=D(c),z=s.handleSubmit(async r=>{await w({add:r.product_ids},{onSuccess:()=>{f.success(e("categories.products.add.successToast",{count:r.product_ids.length-o.length})),a()},onError:i=>{f.error(i.message)}})});if(E)throw R;return t.jsx(l.Form,{form:s,children:t.jsxs(Q,{onSubmit:z,className:"flex h-full flex-col overflow-hidden",children:[t.jsx(l.Header,{children:t.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.formState.errors.product_ids&&t.jsx(O,{variant:"error",children:s.formState.errors.product_ids.message}),t.jsx(l.Close,{asChild:!0,children:t.jsx(x,{size:"small",variant:"secondary",children:e("actions.cancel")})}),t.jsx(x,{size:"small",type:"submit",isLoading:F,children:e("actions.save")})]})}),t.jsx(l.Body,{className:"size-full overflow-hidden",children:t.jsx(L,{table:T,columns:h,pageSize:m,count:g,queryObject:C,filters:k,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],prefix:p,isLoading:_,layout:"fill",pagination:!0,search:"autofocus"})})]})})},J=X(),W=()=>{const{t:c}=P(),o=I();return S.useMemo(()=>[J.display({id:"select",header:({table:e})=>t.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:a=>e.toggleAllPageRowsSelected(!!a)}),cell:({row:e})=>{const a=!e.getCanSelect(),d=e.getIsSelected()||a,n=t.jsx(y,{checked:d,disabled:a,onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}});return a?t.jsx(V,{content:c("categories.products.add.disabledTooltip"),side:"right",children:n}):n}}),...o],[c,o])},Te=()=>{const{id:c}=A(),{product_category:o,isPending:e,isFetching:a,isError:d,error:n}=B(c,{fields:"products.id"}),s=!e&&!a&&!!o;if(d)throw n;return t.jsx(l,{children:s&&t.jsx($,{categoryId:o.id,products:o.products})})};export{Te as Component};
