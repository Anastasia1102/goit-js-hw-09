import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),s="feedback-form-state",a=JSON.parse(localStorage.getItem(s));a&&(e.elements.email.value=a.email||"",e.elements.message.value=a.message||"");e.addEventListener("input",m=>{const t={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem(s,JSON.stringify(t))});e.addEventListener("submit",m=>{m.preventDefault();const t={email:e.elements.email.value,message:e.elements.message.value};console.log(t),localStorage.removeItem(s),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
