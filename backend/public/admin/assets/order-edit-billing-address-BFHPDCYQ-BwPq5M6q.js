import{D as C}from"./chunk-7I5DQGWY-CwOWioty.js";import{C as L}from"./chunk-MW4K5NNY-C29tqeqD.js";import{a2 as z,a4 as i,b as F,R as I,aS as S,j as e,H as M,a8 as A,a9 as w,c_ as B,t as y,w as s,x as a,B as _}from"./index-Cr7wFzsV.js";import{K as O}from"./chunk-6HTZNHPT-Bx5jOcaR.js";import{b as t,u as D}from"./chunk-JGQGO74V-BjbOW5Cw.js";import"./triangles-mini-BxjM2N5x.js";import"./prompt-CRI2UiR4.js";var N=z({address_1:i().min(1),address_2:i().optional(),country_code:i().min(2).max(2),city:i().optional(),postal_code:i().optional(),province:i().optional(),company:i().optional(),phone:i().optional()});function R({order:o}){var m,j,u,h,p,g,b,f;const{t:l}=F(),{handleSuccess:d}=D(),n=A({defaultValues:{address_1:((m=o.billing_address)==null?void 0:m.address_1)||"",address_2:((j=o.billing_address)==null?void 0:j.address_2)||"",city:((u=o.billing_address)==null?void 0:u.city)||"",company:((h=o.billing_address)==null?void 0:h.company)||"",country_code:((p=o.billing_address)==null?void 0:p.country_code)||"",phone:((g=o.billing_address)==null?void 0:g.phone)||"",postal_code:((b=o.billing_address)==null?void 0:b.postal_code)||"",province:((f=o.billing_address)==null?void 0:f.province)||""},resolver:w(N)}),{mutateAsync:c,isPending:x}=B(o.id),E=n.handleSubmit(async r=>{try{await c({billing_address:r}),y.success(l("orders.edit.billingAddress.requestSuccess")),d()}catch(v){y.error(v.message)}});return e.jsx(t.Form,{form:n,children:e.jsxs(O,{onSubmit:E,className:"flex size-full flex-col overflow-hidden",children:[e.jsx(t.Body,{className:"flex-1 overflow-auto",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s.Field,{control:n.control,name:"address_1",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.address")}),e.jsx(s.Control,{children:e.jsx(a,{size:"small",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"address_2",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.address2")}),e.jsx(s.Control,{children:e.jsx(a,{size:"small",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"postal_code",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.postalCode")}),e.jsx(s.Control,{children:e.jsx(a,{size:"small",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"city",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.city")}),e.jsx(s.Control,{children:e.jsx(a,{size:"small",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"country_code",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.country")}),e.jsx(s.Control,{children:e.jsx(L,{...r,disabled:!0})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"province",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.state")}),e.jsx(s.Control,{children:e.jsx(a,{size:"small",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"company",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.company")}),e.jsx(s.Control,{children:e.jsx(a,{size:"small",...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:n.control,name:"phone",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{optional:!0,children:l("fields.phone")}),e.jsx(s.Control,{children:e.jsx(a,{size:"small",...r})}),e.jsx(s.ErrorMessage,{})]})})]})}),e.jsx(t.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(t.Close,{asChild:!0,children:e.jsx(_,{variant:"secondary",size:"small",children:l("actions.cancel")})}),e.jsx(_,{isLoading:x,type:"submit",variant:"primary",size:"small",disabled:!!Object.keys(n.formState.errors||{}).length,children:l("actions.save")})]})})]})})}var V=()=>{const{t:o}=F(),l=I(),{order:d,isPending:n,isError:c,error:x}=S(l.id,{fields:C});if(!n&&c)throw x;return e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(M,{children:o("orders.edit.billingAddress.title")})}),d&&e.jsx(R,{order:d})]})};export{V as Component};
