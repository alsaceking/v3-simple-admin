function l(t,e){const r=e||2e3;let n=0;return(...f)=>{const i=Date.now();i-n>r&&(n=i,t.apply(this,f))}}function s(t,e=new WeakMap){if(t===null||typeof t!="object")return t;if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);if(e.get(t))return e.get(t);let r=new t.constructor;e.set(t,r);for(let n in t)t.hasOwnProperty(n)&&(r[n]=s(t[n],e));return r}export{s as d,l as t};