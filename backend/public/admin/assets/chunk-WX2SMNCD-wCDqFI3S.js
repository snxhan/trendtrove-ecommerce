import{b as c,j as e,m as x,aX as d,T as t,bv as u,L as m,B as o}from"./index-Cr7wFzsV.js";import{P as f}from"./plus-mini-DZR9uHyL.js";var v=({title:s,message:r,className:l})=>{const{t:a}=c();return e.jsx("div",{className:x("flex h-[400px] w-full items-center justify-center",l),children:e.jsxs("div",{className:"flex flex-col items-center gap-y-2",children:[e.jsx(u,{}),e.jsx(t,{size:"small",leading:"compact",weight:"plus",children:s??a("general.noResultsTitle")}),e.jsx(t,{size:"small",className:"text-ui-fg-subtle",children:r??a("general.noResultsMessage")})]})})},j=({action:s})=>s&&e.jsx(m,{to:s.to,children:e.jsx(o,{variant:"secondary",size:"small",children:s.label})}),g=({action:s})=>s&&e.jsx(m,{to:s.to,children:e.jsxs(o,{variant:"transparent",className:"text-ui-fg-interactive",children:[e.jsx(f,{})," ",s.label]})}),N=({title:s,message:r,action:l,className:a,buttonVariant:n="default"})=>{const{t:i}=c();return e.jsxs("div",{className:x("flex h-[400px] w-full flex-col items-center justify-center gap-y-4",a),children:[e.jsxs("div",{className:"flex flex-col items-center gap-y-3",children:[e.jsx(d,{className:"text-ui-fg-subtle"}),e.jsxs("div",{className:"flex flex-col items-center gap-y-1",children:[e.jsx(t,{size:"small",leading:"compact",weight:"plus",children:s??i("general.noRecordsTitle")}),e.jsx(t,{size:"small",className:"text-ui-fg-muted",children:r??i("general.noRecordsMessage")})]})]}),n==="default"&&e.jsx(j,{action:l}),n==="transparentIconLeft"&&e.jsx(g,{action:l})]})};export{N,v as a};
