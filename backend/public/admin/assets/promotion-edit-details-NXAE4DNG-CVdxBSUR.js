import{D as b}from"./chunk-YRY2CZ6I-16Hq7Bdk.js";import{g as _}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{a2 as F,a4 as j,a3 as u,af as B,R as T,b as v,da as I,j as e,H as E,a8 as N,a9 as w,v as L,d4 as S,w as t,x as V,T as P,B as f}from"./index-Cr7wFzsV.js";import{K as D}from"./chunk-6HTZNHPT-Bx5jOcaR.js";import{b as l,u as M}from"./chunk-JGQGO74V-BjbOW5Cw.js";import{T as R}from"./Trans-rvN24YUA.js";import{R as a}from"./radio-group-DM4Q9QWJ.js";import{C as z}from"./currency-input-BkbVcYQf.js";import"./index.esm-DmTfZ8ia.js";import"./prompt-CRI2UiR4.js";import"./index-B47efB4Y.js";var H=F({is_automatic:j().toLowerCase(),code:j().min(1),status:u(["active","inactive","draft"]),value_type:u(["fixed","percentage"]),value:B(),allocation:u(["each","across"])}),K=({promotion:i})=>{const{t:o}=v(),{handleSuccess:c}=M(),r=N({defaultValues:{is_automatic:i.is_automatic.toString(),code:i.code,status:i.status,value:i.application_method.value,allocation:i.application_method.allocation,value_type:i.application_method.type},resolver:w(H)}),m=L({control:r.control,name:"value_type"})==="fixed",{mutateAsync:y,isPending:g}=S(i.id),C=r.handleSubmit(async s=>{await y({is_automatic:s.is_automatic==="true",code:s.code,status:s.status,application_method:{value:s.value,type:s.value_type,allocation:s.allocation}},{onSuccess:()=>{c()}})});return e.jsx(l.Form,{form:r,children:e.jsxs(D,{onSubmit:C,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(l.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsx(t.Field,{control:r.control,name:"status",render:({field:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o("promotions.form.status.label")}),e.jsx(t.Control,{children:e.jsxs(a,{className:"flex-col gap-y-3",...s,value:s.value,onValueChange:s.onChange,children:[e.jsx(a.ChoiceBox,{value:"draft",label:o("promotions.form.status.draft.title"),description:o("promotions.form.status.draft.description")}),e.jsx(a.ChoiceBox,{value:"active",label:o("promotions.form.status.active.title"),description:o("promotions.form.status.active.description")}),e.jsx(a.ChoiceBox,{value:"inactive",label:o("promotions.form.status.inactive.title"),description:o("promotions.form.status.inactive.description")})]})}),e.jsx(t.ErrorMessage,{})]})}),e.jsx(t.Field,{control:r.control,name:"is_automatic",render:({field:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o("promotions.form.method.label")}),e.jsx(t.Control,{children:e.jsxs(a,{className:"flex-col gap-y-3",...s,value:s.value,onValueChange:s.onChange,children:[e.jsx(a.ChoiceBox,{value:"false",label:o("promotions.form.method.code.title"),description:o("promotions.form.method.code.description")}),e.jsx(a.ChoiceBox,{value:"true",label:o("promotions.form.method.automatic.title"),description:o("promotions.form.method.automatic.description")})]})}),e.jsx(t.ErrorMessage,{})]})}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(t.Field,{control:r.control,name:"code",render:({field:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o("promotions.form.code.title")}),e.jsx(t.Control,{children:e.jsx(V,{...s})})]})}),e.jsx(P,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:e.jsx(R,{t:o,i18nKey:"promotions.form.code.description",components:[e.jsx("br",{},"break")]})})]}),e.jsx(t.Field,{control:r.control,name:"value_type",render:({field:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o("promotions.fields.value_type")}),e.jsx(t.Control,{children:e.jsxs(a,{className:"flex-col gap-y-3",...s,onValueChange:s.onChange,children:[e.jsx(a.ChoiceBox,{value:"fixed",label:o("promotions.form.value_type.fixed.title"),description:o("promotions.form.value_type.fixed.description")}),e.jsx(a.ChoiceBox,{value:"percentage",label:o("promotions.form.value_type.percentage.title"),description:o("promotions.form.value_type.percentage.description")})]})}),e.jsx(t.ErrorMessage,{})]})}),e.jsx(t.Field,{control:r.control,name:"value",render:({field:{onChange:s,...d}})=>{var h;const x=((h=i.application_method)==null?void 0:h.currency_code)??"USD";return e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o(m?"fields.amount":"fields.percentage")}),e.jsx(t.Control,{children:m?e.jsx(z,{min:0,onValueChange:n=>s(n?parseInt(n):null),code:x,symbol:_(x),...d,value:d.value}):e.jsx(b,{min:0,max:100,...d,value:d.value||"",onChange:n=>{s(n.target.value===""?null:parseInt(n.target.value))}},"amount")}),e.jsx(t.ErrorMessage,{})]})}}),e.jsx(t.Field,{control:r.control,name:"allocation",render:({field:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:o("promotions.fields.allocation")}),e.jsx(t.Control,{children:e.jsxs(a,{className:"flex-col gap-y-3",...s,onValueChange:s.onChange,children:[e.jsx(a.ChoiceBox,{value:"each",label:o("promotions.form.allocation.each.title"),description:o("promotions.form.allocation.each.description")}),e.jsx(a.ChoiceBox,{value:"across",label:o("promotions.form.allocation.across.title"),description:o("promotions.form.allocation.across.description")})]})}),e.jsx(t.ErrorMessage,{})]})})]})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(f,{size:"small",variant:"secondary",children:o("actions.cancel")})}),e.jsx(f,{size:"small",type:"submit",isLoading:g,children:o("actions.save")})]})})]})})},Y=()=>{const{id:i}=T(),{t:o}=v(),{promotion:c,isLoading:r,isError:p,error:m}=I(i);if(p)throw m;return e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsx(E,{children:o("promotions.edit.title")})}),!r&&c&&e.jsx(K,{promotion:c})]})};export{Y as Component};
