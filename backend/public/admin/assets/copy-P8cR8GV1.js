import{r as n,bm as T,aM as s,V as k,m as N,aU as M,cQ as j}from"./index-Cr7wFzsV.js";import{a as I}from"./chunk-2RQLKDBF-BznQuUXd.js";var $=Object.defineProperty,d=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t)E.call(t,a)&&b(e,a,t[a]);if(d)for(var a of d(t))_.call(t,a)&&b(e,a,t[a]);return e},U=(e,t)=>{var a={};for(var r in e)E.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&d)for(var r of d(e))t.indexOf(r)<0&&_.call(e,r)&&(a[r]=e[r]);return a};const S=n.forwardRef((e,t)=>{var a=e,{color:r="currentColor"}=a,c=U(a,["color"]);return n.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},c),n.createElement("g",{clipPath:"url(#a)"},n.createElement("path",{fill:r,d:"M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m3.416 5.074-3.778 4.889a.67.67 0 0 1-.502.258h-.025a.67.67 0 0 1-.496-.22l-2-2.222a.668.668 0 0 1 .992-.893l1.465 1.629 3.29-4.257a.667.667 0 0 1 1.055.815z"})),n.createElement("defs",null,n.createElement("clipPath",{id:"a"},n.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});S.displayName="CheckCircleMiniSolid";var V=Object.defineProperty,m=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,C=(e,t,a)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,z=(e,t)=>{for(var a in t)x.call(t,a)&&C(e,a,t[a]);if(m)for(var a of m(t))D.call(t,a)&&C(e,a,t[a]);return e},H=(e,t)=>{var a={};for(var r in e)x.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&m)for(var r of m(e))t.indexOf(r)<0&&D.call(e,r)&&(a[r]=e[r]);return a};const O=n.forwardRef((e,t)=>{var a=e,{color:r="currentColor"}=a,c=H(a,["color"]);return n.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},c),n.createElement("g",{stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},n.createElement("path",{d:"M12.167 4.166H5.944c-.981 0-1.777.796-1.777 1.778v6.222c0 .982.796 1.778 1.777 1.778h6.223c.982 0 1.777-.796 1.777-1.778V5.944c0-.982-.796-1.778-1.777-1.778"}),n.createElement("path",{d:"M1.99 10.165 1.075 4.01a1.78 1.78 0 0 1 1.497-2.02l6.155-.914a1.78 1.78 0 0 1 1.909 1.091"})),n.createElement("defs",null,n.createElement("clipPath",{id:"a"},n.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});O.displayName="SquareTwoStackMini";var q=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<e.rangeCount;r++)a.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||a.forEach(function(c){e.addRange(c)}),t&&t.focus()}},L=q,h={"text/plain":"Text","text/html":"Url",default:"Text"},F="Copy to clipboard: #{key}, Enter";function K(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Q(e,t){var a,r,c,f,i,o,p=!1;t||(t={}),a=t.debug||!1;try{c=L(),f=document.createRange(),i=document.getSelection(),o=document.createElement("span"),o.textContent=e,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var u=h[t.format]||h.default;window.clipboardData.setData(u,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(o),f.selectNodeContents(o),i.addRange(f);var g=document.execCommand("copy");if(!g)throw new Error("copy command was unsuccessful");p=!0}catch(l){a&&console.error("unable to copy using execCommand: ",l),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),r=K("message"in t?t.message:F),window.prompt(r,e)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(f):i.removeAllRanges()),o&&document.body.removeChild(o),c()}return p}var W=Q;const X=T(W),B=s.forwardRef(({children:e,className:t,content:a,variant:r="default",asChild:c=!1,...f},i)=>{const[o,p]=n.useState(!1),[g,l]=n.useState(!1),[u,v]=n.useState("Copy"),P=y=>{y.stopPropagation(),p(!0),X(a),setTimeout(()=>{p(!1)},2e3)};s.useEffect(()=>{if(o){v("Copied");return}setTimeout(()=>{v("Copy")},500)},[o]);const w=(y=>y==="default")(r),R=c?j:"button";return s.createElement(k,{content:u,open:o||g,onOpenChange:l},s.createElement(R,{ref:i,"aria-label":"Copy code snippet",type:"button",className:N("h-fit w-fit",t),onClick:P,...f},e||(o?w?s.createElement(M,{className:"text-ui-fg-subtle"}):s.createElement(S,{className:"text-ui-fg-subtle"}):w?s.createElement(I,{className:"text-ui-fg-subtle"}):s.createElement(O,{className:"text-ui-fg-subtle"}))))});B.displayName="Copy";export{B as C};
