import{u as b}from"./chunk-FFVOUYTF-BuFSao6S.js";import{u as p,c as m,a as f}from"./chunk-MGPZHEOT-DXihkrgL.js";import{u as g}from"./chunk-C76H5USB-DWkF_AEH.js";import{b as n,r as i,j as s,V as h,m as x}from"./index-Cr7wFzsV.js";var y=({color:e,children:a})=>s.jsxs("div",{className:"txt-compact-small text-ui-fg-subtle flex h-full w-full items-center gap-x-2 overflow-hidden",children:[s.jsx("div",{role:"presentation",className:"flex h-5 w-2 items-center justify-center",children:s.jsx("div",{className:x("h-2 w-2 rounded-sm shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12)_inset]",{"bg-ui-tag-neutral-icon":e==="grey","bg-ui-tag-green-icon":e==="green","bg-ui-tag-red-icon":e==="red","bg-ui-tag-blue-icon":e==="blue","bg-ui-tag-orange-icon":e==="orange","bg-ui-tag-purple-icon":e==="purple"})})}),s.jsx("span",{className:"truncate",children:a})]}),r=m(),T=()=>{const{t:e}=n(),a=b();return i.useMemo(()=>[r.accessor("name",{header:()=>e("fields.name"),enableSorting:!0,sortLabel:e("fields.name"),sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc")}),r.accessor("description",{header:()=>e("fields.description"),cell:({getValue:t})=>s.jsx(h,{content:t(),children:s.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:t()})})}),enableSorting:!0,sortLabel:e("fields.description"),sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc"),maxSize:250,minSize:100}),r.accessor("is_disabled",{header:()=>e("fields.status"),enableSorting:!0,sortLabel:e("fields.status"),sortAscLabel:e("filters.sorting.alphabeticallyAsc"),sortDescLabel:e("filters.sorting.alphabeticallyDesc"),cell:({getValue:t})=>{const l=t();return s.jsx(y,{color:l?"grey":"green",children:e(l?"general.disabled":"general.enabled")})}}),...a],[e,a])},N=()=>{const{t:e}=n();return i.useMemo(()=>({empty:{heading:e("salesChannels.list.empty.heading"),description:e("salesChannels.list.empty.description")},filtered:{heading:e("salesChannels.list.filtered.heading"),description:e("salesChannels.list.filtered.description")}}),[e])},v=f(),L=()=>{const{t:e}=n(),a=p();return i.useMemo(()=>[v.accessor("is_disabled",{label:e("fields.status"),type:"radio",options:[{label:e("general.enabled"),value:"false"},{label:e("general.disabled"),value:"true"}]}),...a],[a,e])},w=({prefix:e,pageSize:a=20})=>{const t=g(["offset","q","order","created_at","updated_at","is_disabled"],e),{offset:l,created_at:c,updated_at:o,is_disabled:d,...u}=t;return{limit:a,offset:l?Number(l):0,created_at:c?JSON.parse(c):void 0,updated_at:o?JSON.parse(o):void 0,is_disabled:d?JSON.parse(d):void 0,...u}};export{L as a,N as b,T as c,w as u};
