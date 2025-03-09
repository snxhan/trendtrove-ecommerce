import{C as G}from"./chunk-3LLQ6F7F-DlcuOj4X.js";import{r as S,j as e,b as J,d5 as K,y as Q,v as z,d6 as T,H as U,T as Z,w as i,I as O,Y as R,B as H,g as ee,d7 as se,x as X}from"./index-Cr7wFzsV.js";import{X as ae}from"./x-mark-mini-C5VOj4mU.js";import{S as u}from"./select-BCV7IXax.js";var P=d=>(d||[]).map(s=>{var x,p;return{id:s.id,required:s.required,field_type:s.field_type,disguised:s.disguised,attribute:s.attribute,operator:s.operator,values:s.field_type==="number"||s.operator==="eq"?typeof s.values=="object"?(x=s.values[0])==null?void 0:x.value:s.values:(p=s==null?void 0:s.values)==null?void 0:p.map(b=>b.value)}}),re=(d,s)=>{var x;return!d||!s?{}:d==="currency_code"?{value:(x=s.supported_currencies)==null?void 0:x.map(p=>p.currency_code)}:{}},le=({form:d,identifier:s,scope:x,name:p,operator:b,fieldRule:a,attributes:g,ruleType:I})=>{const r=g==null?void 0:g.find(m=>m.value===a.attribute),{store:n,isLoading:E}=ee(),{values:N=[]}=se(I,r==null?void 0:r.id,re(r==null?void 0:r.id,n),{enabled:!!(r!=null&&r.id)&&["select","multiselect"].includes(r.field_type)&&!E}),k=z({control:d.control,name:b});return e.jsx(i.Field,{name:p,render:({field:{onChange:m,ref:h,...j}})=>(r==null?void 0:r.field_type)==="number"?e.jsxs(i.Item,{className:"basis-1/2",children:[e.jsx(i.Control,{children:e.jsx(X,{...j,type:"number",onChange:m,className:"bg-ui-bg-base",ref:h,min:1,disabled:!a.attribute})}),e.jsx(i.ErrorMessage,{})]}):(r==null?void 0:r.field_type)==="text"?e.jsxs(i.Item,{className:"basis-1/2",children:[e.jsx(i.Control,{children:e.jsx(X,{...j,ref:h,onChange:m,className:"bg-ui-bg-base",disabled:!a.attribute})}),e.jsx(i.ErrorMessage,{})]}):k==="eq"?e.jsxs(i.Item,{className:"basis-1/2",children:[e.jsx(i.Control,{children:e.jsxs(u,{...j,value:Array.isArray(j.value)?j.value[0]:j.value,onValueChange:m,disabled:!a.attribute,children:[e.jsx(u.Trigger,{ref:h,className:"bg-ui-bg-base",children:e.jsx(u.Value,{placeholder:"Select Value"})}),e.jsx(u.Content,{children:N==null?void 0:N.map((C,v)=>e.jsx(u.Item,{value:C.value,children:e.jsx("span",{className:"text-ui-fg-subtle",children:C.label})},`${s}-value-option-${v}`))})]})}),e.jsx(i.ErrorMessage,{})]}):e.jsxs(i.Item,{className:"basis-1/2",children:[e.jsx(i.Control,{children:e.jsx(G,{...j,ref:h,placeholder:"Select Values",options:N,onChange:m,className:"bg-ui-bg-base",disabled:!a.attribute})}),e.jsx(i.ErrorMessage,{})]})},`${s}.${x}.${p}-${a.attribute}`)},W={id:"product",attribute:"items.product.id",attribute_label:"Product",operator:"eq",operator_label:"Equal",values:[],required:!0,field_type:"select",disguised:!1},ce=({form:d,ruleType:s,setRulesToRemove:x,rulesToRemove:p,scope:b="rules",promotion:a})=>{var L;const{t:g}=J(),I=d.getValues(),{attributes:r}=K(s,I.type),{fields:n,append:E,remove:N,update:k,replace:m}=Q({control:d.control,name:b,keyName:b}),h=z({control:d.control,name:"type",defaultValue:a==null?void 0:a.type}),j=z({control:d.control,name:"application_method.type",defaultValue:(L=a==null?void 0:a.application_method)==null?void 0:L.type}),C=h?{promotion_type:h,application_method_type:j}:{},{rules:v,isLoading:D}=T((a==null?void 0:a.id)||null,s,C,{enabled:!!(a!=null&&a.id)||!!h&&!!j});return S.useEffect(()=>{if(!D){if(s==="rules"&&!n.length&&(d.resetField("rules"),m(P(v))),s==="buy-rules"&&!n.length){d.resetField("application_method.buy_rules");const t=a!=null&&a.id||h==="standard"?v:[...v,W];m(P(t))}if(s==="target-rules"&&!n.length){d.resetField("application_method.target_rules");const t=a!=null&&a.id||h==="standard"?v:[...v,W];m(P(t))}}},[h,D,s,n.length,d,m,v,a==null?void 0:a.id]),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(U,{level:"h2",className:"mb-2",children:g(`promotions.fields.conditions.${s}.title`)}),e.jsx(Z,{className:"text-ui-fg-subtle txt-small mb-6",children:g(`promotions.fields.conditions.${s}.description`)}),n.map((t,o)=>{const y=t.id;return e.jsxs(S.Fragment,{children:[e.jsxs("div",{className:"bg-ui-bg-subtle border-ui-border-base flex flex-row gap-2 rounded-xl border px-2 py-2",children:[e.jsxs("div",{className:"grow",children:[e.jsx(i.Field,{name:`${b}.${o}.attribute`,render:({field:_})=>{var q;const{onChange:M,ref:A,...F}=_,$=(n==null?void 0:n.map(l=>l.attribute))||[],c=(r==null?void 0:r.filter(l=>l.value===t.attribute?!0:!$.includes(l.value)))||[],w=!!t.required,V=l=>{const f=c.find(Y=>Y.id===l);k(o,{...t,values:[],disguised:(f==null?void 0:f.disguised)||!1}),M(l)};return e.jsxs(i.Item,{className:"mb-2",children:[t.required&&e.jsx("div",{className:"flex items-center px-2",children:e.jsx("p",{className:"text text-ui-fg-muted txt-small",children:g("promotions.form.required")})}),e.jsx(i.Control,{children:w?e.jsx(B,{label:((q=c==null?void 0:c.find(l=>l.value===t.attribute))==null?void 0:q.label)||"",field:_}):e.jsxs(u,{...F,onValueChange:V,disabled:t.required,children:[e.jsx(u.Trigger,{ref:A,className:"bg-ui-bg-base",children:e.jsx(u.Value,{placeholder:g("promotions.form.selectAttribute")})}),e.jsx(u.Content,{children:c==null?void 0:c.map((l,f)=>e.jsx(u.Item,{value:l.value,children:e.jsx("span",{className:"text-ui-fg-subtle",children:l.label})},`${y}-attribute-option-${f}`))})]})}),e.jsx(i.ErrorMessage,{})]})}}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(i.Field,{name:`${b}.${o}.operator`,render:({field:_})=>{var V,q;const{onChange:M,ref:A,...F}=_,$=r==null?void 0:r.find(l=>l.value===t.attribute),c=((V=$==null?void 0:$.operators)==null?void 0:V.map((l,f)=>({label:l.label,value:l.value,key:`${y}-operator-option-${f}`})))||[],w=!!t.attribute&&(c==null?void 0:c.length)<=1;return e.jsxs(i.Item,{className:"basis-1/2",children:[e.jsx(i.Control,{children:w?e.jsx(B,{label:((q=c.find(l=>l.value===F.value))==null?void 0:q.label)||"",field:_}):e.jsxs(u,{...F,disabled:!t.attribute,onValueChange:M,children:[e.jsx(u.Trigger,{ref:A,className:"bg-ui-bg-base",children:e.jsx(u.Value,{placeholder:"Select Operator"})}),e.jsx(u.Content,{children:c==null?void 0:c.map(l=>e.jsx(u.Item,{value:l.value,children:e.jsx("span",{className:"text-ui-fg-subtle",children:l.label})},l.key))})]})}),e.jsx(i.ErrorMessage,{})]})}}),e.jsx(le,{form:d,identifier:y,scope:b,name:`${b}.${o}.values`,operator:`${b}.${o}.operator`,fieldRule:t,attributes:r,ruleType:s})]})]}),e.jsx("div",{className:"size-7 flex-none self-center",children:!t.required&&e.jsx(O,{size:"small",variant:"transparent",className:"text-ui-fg-muted",type:"button",onClick:()=>{t.required||(x&&x([...p,t]),N(o))},children:e.jsx(ae,{})})})]}),o<n.length-1&&e.jsxs("div",{className:"relative px-6 py-3",children:[e.jsx("div",{className:"border-ui-border-strong absolute bottom-0 left-[40px] top-0 z-[-1] w-px bg-[linear-gradient(var(--border-strong)_33%,rgba(255,255,255,0)_0%)] bg-[length:1px_3px] bg-repeat-y"}),e.jsx(R,{size:"2xsmall",className:" text-xs",children:g("promotions.form.and")})]})]},`${t.id}.${o}.${t.attribute}`)}),e.jsxs("div",{className:n.length?"mt-6":"",children:[e.jsx(H,{type:"button",variant:"secondary",className:"inline-block",onClick:()=>{E({attribute:"",operator:"",values:[],required:!1})},children:g("promotions.fields.addCondition")}),!!n.length&&e.jsx(H,{type:"button",variant:"transparent",className:"text-ui-fg-muted hover:text-ui-fg-subtle ml-2 inline-block",onClick:()=>{const t=n.map((o,y)=>o.required?null:y).filter(o=>o!==null);x&&x(n.filter(o=>!o.required)),N(t)},children:g("promotions.fields.clearAll")})]})]})},B=S.forwardRef(({label:d,field:s},x)=>e.jsxs("div",{children:[e.jsx("div",{className:"txt-compact-small bg-ui-bg-component shadow-borders-base text-ui-fg-base h-8 rounded-md px-2 py-1.5",children:d}),e.jsx("input",{...s,ref:x,disabled:!0,hidden:!0})]}));B.displayName="DisabledField";export{ce as R};
