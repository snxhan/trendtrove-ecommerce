import{P as C}from"./chunk-YRY2CZ6I-16Hq7Bdk.js";import{c as _,d as S}from"./chunk-5OOAHPXU-BhQ4qOgr.js";import{a6 as i,b as R,R as T,j as e,H as E,a8 as F,a9 as w,t as u,w as s,x as g,B as p}from"./index-Cr7wFzsV.js";import{S as v}from"./chunk-CBJWO6K6-Cw4s_Vsc.js";import{K as N}from"./chunk-6HTZNHPT-Bx5jOcaR.js";import{b as t,u as I}from"./chunk-JGQGO74V-BjbOW5Cw.js";import"./index.esm-DmTfZ8ia.js";import"./prompt-CRI2UiR4.js";var P=i.object({name:i.string().min(1),code:i.string().optional(),rate:i.object({float:i.number().optional(),value:i.string().optional()}),is_combinable:i.boolean().optional()}),B=({taxRate:n,isSublevel:d=!1})=>{var f;const{t:o}=R(),{handleSuccess:l}=I(),r=F({defaultValues:{name:n.name,code:n.code,rate:{value:((f=n.rate)==null?void 0:f.toString())||""},is_combinable:n.is_combinable},resolver:w(P)}),{mutateAsync:x,isPending:m}=S(n.id),j=r.handleSubmit(async a=>{var c;await x({name:a.name,code:a.code,rate:(c=a.rate)==null?void 0:c.float,is_combinable:a.is_combinable},{onSuccess:()=>{u.success(o("taxRegions.taxRates.edit.successToast")),l()},onError:h=>{u.error(h.message)}})});return e.jsx(t.Form,{form:r,children:e.jsxs(N,{className:"flex flex-1 flex-col overflow-hidden",onSubmit:j,children:[e.jsxs(t.Body,{className:"flex flex-1 flex-col gap-y-6 overflow-auto",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:r.control,name:"name",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("fields.name")}),e.jsx(s.Control,{children:e.jsx(g,{...a})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"code",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("taxRegions.fields.taxCode")}),e.jsx(s.Control,{children:e.jsx(g,{...a})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:r.control,name:"rate",render:({field:{value:a,onChange:c,...h}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:o("taxRegions.fields.taxRate")}),e.jsx(s.Control,{children:e.jsx(C,{...h,value:a==null?void 0:a.value,onValueChange:(y,L,b)=>c({value:y,float:b==null?void 0:b.float})})}),e.jsx(s.ErrorMessage,{})]})})]}),d&&e.jsx(v,{control:r.control,name:"is_combinable",label:o("taxRegions.fields.isCombinable.label"),description:o("taxRegions.fields.isCombinable.hint")})]}),e.jsx(t.Footer,{className:"shrink-0",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(t.Close,{asChild:!0,children:e.jsx(p,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(p,{size:"small",type:"submit",isLoading:m,children:o("actions.save")})]})})]})})},U=()=>{const{t:n}=R(),{province_id:d,tax_rate_id:o}=T(),{tax_rate:l,isPending:r,isError:x,error:m}=_(o),j=!r&&!!l;if(x)throw m;return e.jsxs(t,{children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{asChild:!0,children:e.jsx(E,{children:n("taxRegions.taxRates.edit.header")})}),e.jsx(t.Description,{className:"sr-only",children:n("taxRegions.taxRates.edit.hint")})]}),j&&e.jsx(B,{taxRate:l,isSublevel:!!d})]})};export{U as Component};
