import{b as n,eL as a,t}from"./index-Cr7wFzsV.js";import{u}from"./use-prompt-KjfHnawf.js";var m=s=>{const{t:e}=n(),o=u(),{mutateAsync:r}=a(s);return async()=>{await o({title:e("general.areYouSure"),description:e("productTypes.delete.confirmation"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await r(void 0,{onSuccess:()=>{t.success(e("productTypes.delete.successToast"))},onError:c=>{t.error(c.message)}})}};export{m as u};
