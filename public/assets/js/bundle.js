(()=>{"use strict";var r,n,e,t,o,a,i,c,A,u,s,p,l,d,f,m,h,g,C,b,y,v,x,I,B={122:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(15),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);"]),i.push([r.id,":root{\r\n    --primary-color: rgb(23, 13, 70);\r\n    --primary-color-dark: rgba(255, 57, 7, 0.884);\r\n}\r\n\r\n* {\r\n   box-sizing: border-box;\r\n   outline: 0;\r\n}\r\nbody{\r\n    margin: 15px;\r\n    padding: 15px;\r\n    background: var(--primary-color);\r\n    font-family: 'Oswald';\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n.container{\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    padding: 20px;\r\n    background: snow;\r\n    border-radius: 5px;\r\n}\r\nform input, form label, form button{\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\nform input{\r\n    font-size: 15px;\r\n    height: 30px;\r\n    padding: 0 20px;\r\n}\r\nform input:focus{\r\n    outline: 1px solid var(--primary-color);\r\n}\r\nform button{\r\n    background: rgba(125,125, 125,0.8);\r\n    color: #fff;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    height: 50px;\r\n    cursor: pointer;\r\n}\r\nform button:hover{\r\n    background: var(--primary-color-dark);\r\n}\r\nform button:active{\r\n    background: black;\r\n}\r\n.senha-gerada \r\n{\r\n    font-size: 2em;\r\n    color: rgb(201, 30, 24);\r\n    margin: 40px 0px;\r\n}\r\ninput[type=\"checkbox\"] {\r\n    margin: 20px 0;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 30px 0;\r\n    font-size: 18px;\r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AACA;IACI,gCAAgC;IAChC,6CAA6C;AACjD;;AAEA;GACG,sBAAsB;GACtB,UAAU;AACb;AACA;IACI,YAAY;IACZ,aAAa;IACb,gCAAgC;IAChC,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;AACA;IACI,uCAAuC;AAC3C;AACA;IACI,kCAAkC;IAClC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,qCAAqC;AACzC;AACA;IACI,iBAAiB;AACrB;AACA;;IAEI,cAAc;IACd,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,eAAe;AACnB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');\r\n:root{\r\n    --primary-color: rgb(23, 13, 70);\r\n    --primary-color-dark: rgba(255, 57, 7, 0.884);\r\n}\r\n\r\n* {\r\n   box-sizing: border-box;\r\n   outline: 0;\r\n}\r\nbody{\r\n    margin: 15px;\r\n    padding: 15px;\r\n    background: var(--primary-color);\r\n    font-family: 'Oswald';\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n.container{\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    padding: 20px;\r\n    background: snow;\r\n    border-radius: 5px;\r\n}\r\nform input, form label, form button{\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\nform input{\r\n    font-size: 15px;\r\n    height: 30px;\r\n    padding: 0 20px;\r\n}\r\nform input:focus{\r\n    outline: 1px solid var(--primary-color);\r\n}\r\nform button{\r\n    background: rgba(125,125, 125,0.8);\r\n    color: #fff;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    height: 50px;\r\n    cursor: pointer;\r\n}\r\nform button:hover{\r\n    background: var(--primary-color-dark);\r\n}\r\nform button:active{\r\n    background: black;\r\n}\r\n.senha-gerada \r\n{\r\n    font-size: 2em;\r\n    color: rgb(201, 30, 24);\r\n    margin: 40px 0px;\r\n}\r\ninput[type=\"checkbox\"] {\r\n    margin: 20px 0;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 30px 0;\r\n    font-size: 18px;\r\n}"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<r.length;c++){var A=[].concat(r[c]);t&&o[A[0]]||(e&&(A[2]?A[2]="".concat(e," and ").concat(A[2]):A[2]=e),n.push(A))}},n}},15:r=>{function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}r.exports=function(r){var e,t,o=(t=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var t,o,a=[],i=!0,c=!1;try{for(e=e.call(r);!(i=(t=e.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(r){c=!0,o=r}finally{try{i||null==e.return||e.return()}finally{if(c)throw o}}return a}}(e,t)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(A," */"),s=i.sources.map((function(r){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(r," */")}));return[a].concat(s).concat([u]).join("\n")}return[a].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var A=r[c],u=t.base?A[0]+t.base:A[0],s=a[u]||0,p="".concat(u," ").concat(s);a[u]=s+1;var l=e(p),d={css:A[1],media:A[2],sourceMap:A[3]};-1!==l?(n[l].references++,n[l].updater(d)):n.push({identifier:p,updater:o(d,t),references:1}),i.push(p)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var A=t(r,o),u=0;u<a.length;u++){var s=e(a[u]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=A}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t=e.css,o=e.media,a=e.sourceMap;o?r.setAttribute("media",o):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},k={};function w(r){var n=k[r];if(void 0!==n)return n.exports;var e=k[r]={id:r,exports:{}};return B[r](e,e.exports,w),e.exports}w.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return w.d(n,{a:n}),n},w.d=(r,n)=>{for(var e in n)w.o(n,e)&&!w.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},w.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=(r,n)=>Math.floor(Math.random()*(n-r)+r),n=",.;~^[]{}!@#$%&*()+-/",e=()=>n[r(0,n.length)],t=document.querySelector(".senha-gerada"),o=document.querySelector(".qtd"),a=document.querySelector(".chk-maiusculas"),i=document.querySelector(".chk-minusculas"),c=document.querySelector(".chk-Numeros"),A=document.querySelector(".chk-simbolos"),u=document.querySelector(".gera-senha"),s=w(379),p=w.n(s),l=w(795),d=w.n(l),f=w(569),m=w.n(f),h=w(565),g=w.n(h),C=w(216),b=w.n(C),y=w(589),v=w.n(y),x=w(122),(I={}).styleTagTransform=v(),I.setAttributes=g(),I.insert=m().bind(null,"head"),I.domAPI=d(),I.insertStyleElement=b(),p()(x.Z,I),x.Z&&x.Z.locals&&x.Z.locals,u.addEventListener("click",(()=>{t.innerHTML=function(n,t,o,a,i){var c=[];n=Number(n);for(var A=0;A<=n;A++)t&&c.push(String.fromCharCode(r(65,91))),o&&c.push(String.fromCharCode(r(97,123))),a&&c.push(String.fromCharCode(r(48,58))),i&&c.push(e());return c.join("").slice(0,n)}(o.value,a.checked,i.checked,c.checked,A.checked)||"Nada Selecionado"}))})();
//# sourceMappingURL=bundle.js.map