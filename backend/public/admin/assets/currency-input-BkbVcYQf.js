import{bV as x,m as t,r as e,T as o}from"./index-Cr7wFzsV.js";import{C as g}from"./index.esm-DmTfZ8ia.js";const w=x({base:t("flex items-center gap-x-1","bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-buttons-neutral placeholder-ui-fg-muted text-ui-fg-base transition-fg relative w-full rounded-md","focus-within:shadow-borders-interactive-with-active"),variants:{size:{base:"txt-compact-medium h-8",small:"txt-compact-small h-7"}},defaultVariants:{size:"base"}}),h=e.forwardRef(({size:a="base",symbol:c,code:u,disabled:r,onInvalid:s,className:d,...l},m)=>{const n=e.useRef(null);e.useImperativeHandle(m,()=>n.current);const[p,f]=e.useState(!0),b=e.useCallback(i=>{f(i.currentTarget.validity.valid),s&&s(i)},[s]);return e.createElement("div",{onClick:()=>{n.current&&n.current.focus()},className:t("w-full cursor-text justify-between overflow-hidden",w({size:a}),{"text-ui-fg-disabled !bg-ui-bg-disabled !shadow-buttons-neutral !placeholder-ui-fg-disabled cursor-not-allowed":r,"!shadow-borders-error invalid:!shadow-borders-error":l["aria-invalid"]||!p},d)},e.createElement("span",{className:t("w-fit min-w-[32px] border-r px-2",{"py-[9px]":a==="base","py-[5px]":a==="small"}),role:"presentation"},e.createElement(o,{size:"small",leading:"compact",className:t("text-ui-fg-muted pointer-events-none select-none uppercase",{"text-ui-fg-disabled":r})},u)),e.createElement(g,{className:"h-full min-w-0 flex-1 appearance-none bg-transparent text-right outline-none disabled:cursor-not-allowed",disabled:r,onInvalid:b,ref:n,...l}),e.createElement("span",{className:t("flex w-fit min-w-[32px] items-center justify-center border-l px-2 text-right",{"py-[9px]":a==="base","py-[5px]":a==="small"}),role:"presentation"},e.createElement(o,{size:"small",leading:"compact",className:t("text-ui-fg-muted pointer-events-none select-none",{"text-ui-fg-disabled":r})},c)))});h.displayName="CurrencyInput";export{h as C};
