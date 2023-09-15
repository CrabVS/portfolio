(()=>{"use strict";var n={983:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"",""]);const c=i},239:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root {\n    --lighter-accent-color: #ad2d1f;\n}\n\nheader {\n    width: 100%;\n    height: var(--header-height);\n    display: flex;\n    justify-content: center;\n    background-color: var(--primary-color);\n}\n\nnav {\n    position: relative;\n    margin: 6px 0;\n    background-color: var(--primary-color);\n}\n\nnav a {\n    display: inline-block;\n    padding: 10px;\n    margin: 0 2px;\n    min-width: 75px;\n    text-align: center;\n    text-decoration: none;\n    position: relative;\n    z-index: 2;\n    transition-duration: 0.6s;\n    color: var(--background-color);\n}\n\n.selector {\n    height: 100%;\n    width: 70px;\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    text-transform: uppercase;\n    z-index: 1;\n    border-radius: 50px;\n    transition-duration:0.6s;\n    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    background: var(--accent-color);\n    background: -moz-linear-gradient(45deg, var(--lighter-accent-color) 0%, var(--accent-color) 100%);\n    background: -webkit-linear-gradient(45deg, var(--lighter-accent-color) 0%,var(--accent-color) 100%);\n    background: linear-gradient(45deg, var(--lighter-accent-color) 0%,var(--accent-color) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=var(--lighter-accent-color), endColorstr=var(--accent-color),GradientType=1 );\n}",""]);const c=i},74:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"",""]);const c=i},370:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"",""]);const c=i},551:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root {\n    --project-border-radius: 8px;\n}\n\n.projects-container {\n    min-height: 270px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));\n    gap: 50px;\n    max-width: 1440px;\n    margin: 0 auto;\n}\n\n.project {\n    background-color: var(--primary-color);\n    min-height: 270px;\n    color: var(--background-color);\n    border-radius: var(--project-border-radius);\n}\n\n.project .img-container {\n    height: 55%;\n    background-color: #333;\n    border-radius: var(--project-border-radius) var(--project-border-radius) 0 0;\n}\n\n.project .info-container {\n    height: 45%;\n    position: relative;\n}\n\n.project-title {\n    padding: 6px 10px 2px;\n}\n\n.project-description {\n    padding: 4px 10px;\n}\n\n.projects-container .buttons-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 45%;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 4px;\n}\n\n.projects-container .buttons-container .btn {\n    min-width: 100px;\n    padding: 8px 0;\n    background-color: var(--accent-color);\n    color: var(--background-color);\n    border: none;\n    border-radius: 6px;\n}\n\n.projects-container .buttons-container .btn:active {\n    transform: scale(0.98);\n}",""]);const c=i},803:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"",""]);const c=i},255:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root {\n    --card-radius: 8px;\n}\n\n.skills-page-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 1440px;\n    margin: 0 auto;\n}\n\n.head-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50vh;\n    transition-duration: 1s;\n}\n\n.head-icon {\n    width: 100px;\n    height: 100px;\n    position: relative;\n    transition-duration: 1s;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.skill-icon {\n    position: absolute;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transition-duration: 1s;\n    width: 40px;\n    height: 40px;\n    opacity: 0;\n    z-index: -1;\n}\n\n.skills-container {\n    min-height: 200px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    padding: 20px;\n    gap: 20px;\n}\n\n.skill-card {\n    min-height: 150px;\n    opacity: 0;\n    transition: opacity 1s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: transparent;\n    perspective: 1000px;\n}\n\n.skill-card-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    transition: transform 0.8s;\n    transform-style: preserve-3d;\n    border-radius: var(--card-radius);\n    outline: 1px solid var(--primary-color);\n}\n\n.skill-card:hover .skill-card-inner {\n    transform: rotateY(180deg);\n}\n\n.skill-card-img {\n    width: 60%;\n    height: 60%;\n}\n\n.skill-card-front, .skill-card-back {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n\n.skill-card-front {\n    background-color: var(--background-color);\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: var(--card-radius);\n}\n\n.skill-card-back {\n    background-color: var(--secondary-color);\n    transform: rotateY(180deg);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: var(--card-radius);\n}",""]);const c=i},917:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,":root {\n    --footer-height: 100px;\n    --circle-size: 200px;\n    --header-height: 50px;\n\n    --primary-color: #35495e;\n    --secondary-color: #41b883;\n    --background-color: #f5f5f5;\n    --accent-color: #e74c3c;\n    --text-color: #333333;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    overflow-x: hidden;\n}\n\na {\n    cursor: pointer;\n}\n\nh4 {\n    font-size: 1.6rem;\n}\n\n.btn {\n    cursor: pointer;\n}\n\n.btn:focus {\n    outline: none;\n}\n\n.container {\n    transform-origin: top left;\n    transition: transform 0.5s linear;\n}\n\n.container.show-nav {\n    transform: rotate(-20deg);\n}\n\nmain {\n    min-height: calc(100vh - var(--footer-height) - var(--header-height));\n    background-color: var(--background-color);\n    padding: 50px;\n}\n\nfooter {\n    height: var(--footer-height);\n    background-color: var(--primary-color);\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(917),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(426),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var v=t(239),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),e()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var y=t(255),k={};k.styleTagTransform=p(),k.setAttributes=s(),k.insert=i().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=d(),e()(y.Z,k),y.Z&&y.Z.locals&&y.Z.locals;const x=t.p+"95438d90cc3d9918e2b8.svg",T=t.p+"91ce1c16e7bcacf3228f.svg",Z=t.p+"42d09853ba6777f6ad78.svg",w=t.p+"8032ca5e52274f720713.svg",S=t.p+"b81b68aaff9a64a45cf7.svg",j=t.p+"0d65720d6325ead67bb9.svg",A=t.p+"cd1d9386ced7ccc232b8.svg",q=[],C=[{url:T,name:"Hypertext Markup Language"},{url:Z,name:"Cascading Style Sheets"},{url:w,name:"JavaScript"},{url:S,name:"Angular"},{url:j,name:"Node Package Manager"},{url:A,name:"Webpack"}];let E,L,M;const I=function(n){E[n].style.opacity=1,E[n].style["z-index"]=1;let e=n;switch(n>7&&(e=n%8),e){case 0:E[n].style.top="-50%";break;case 1:E[n].style.top="-50%",E[n].style.left="150%";break;case 2:E[n].style.left="150%";break;case 3:E[n].style.left="150%",E[n].style.top="150%";break;case 4:E[n].style.top="150%";break;case 5:E[n].style.left="-50%",E[n].style.top="150%";break;case 6:E[n].style.left="-50%";break;case 7:E[n].style.left="-50%",E[n].style.top="-50%"}q.push(setTimeout((()=>{!function(n){const e=document.createElement("div");e.classList.add("skill-card"),e.innerHTML=`\n    <div class="skill-card-inner">\n      <div class="skill-card-front">\n        <img src="${C[n].url}" class="skill-card-img">\n      </div>\n      <div class="skill-card-back"><h4>${C[n].name}</h4></div>\n    </div>\n  `,L.appendChild(e)}(n);const e=Array.from(document.querySelectorAll(".skills-container .skill-card"));!function(n,e){const t=M.getClientRects()[0].left,r=M.getClientRects()[0].top,o=e[e.length-1],a=o.getClientRects()[0].top,i=o.getClientRects()[0].left,c=o.getClientRects()[0].width,s=a-r,l=i-t;E[n].style.top=`${s}px`,E[n].style.left=`${l+c/2}px`,E[n].style.opacity=0,q.push(setTimeout((()=>{o.style.opacity=1}),200)),q.push(setTimeout((()=>{E[n].remove(),function(){if(null===document.querySelector(".head-icon .skill-icon")){const n=document.querySelector(".head-container");M.style.height="0px",n.style.height="0px",q.push(setTimeout((()=>{n.remove()}),1e3))}}()}),800))}(n,e)}),1e3))};var P=t(803),H={};H.styleTagTransform=p(),H.setAttributes=s(),H.insert=i().bind(null,"head"),H.domAPI=o(),H.insertStyleElement=d(),e()(P.Z,H),P.Z&&P.Z.locals&&P.Z.locals;var z=t(551),R={};R.styleTagTransform=p(),R.setAttributes=s(),R.insert=i().bind(null,"head"),R.domAPI=o(),R.insertStyleElement=d(),e()(z.Z,R),z.Z&&z.Z.locals&&z.Z.locals;const $=function(){const n=document.createElement("div");return n.classList.add("project"),n.innerHTML='\n  <div class="img-container"></div>\n  <div class="info-container">\n      <h4 class="project-title">Title</h4>\n      <p class="project-description">Description</p>\n      <div class="buttons-container">\n          <button class="btn">View Code</button>\n          <button class="btn">Live Preview</button>\n      </div>\n  </div>',n},N=document.querySelector("main");var B=t(370),D={};D.styleTagTransform=p(),D.setAttributes=s(),D.insert=i().bind(null,"head"),D.domAPI=o(),D.insertStyleElement=d(),e()(B.Z,D),B.Z&&B.Z.locals&&B.Z.locals;const O=document.querySelector("main");var F=t(74),J={};J.styleTagTransform=p(),J.setAttributes=s(),J.insert=i().bind(null,"head"),J.domAPI=o(),J.insertStyleElement=d(),e()(F.Z,J),F.Z&&F.Z.locals&&F.Z.locals;const U=document.querySelector("main"),V=function(){U.innerHTML="<h1>Home</h1>"};var Y=t(983),_={};_.styleTagTransform=p(),_.setAttributes=s(),_.insert=i().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=d(),e()(Y.Z,_),Y.Z&&Y.Z.locals&&Y.Z.locals;const G=document.querySelector("main"),W=Array.from(document.querySelectorAll("nav a")),X=document.querySelector("nav .selector"),K=document.querySelector("nav");let Q="Home";const nn=function(n){switch("Skills"===Q&&q.forEach(((n,e)=>{clearTimeout(q[e])})),Q=n,n){case"Home":V();break;case"Skills":document.querySelector("main").innerHTML='\n  <div class="skills-page-container">\n    <div class="head-container">\n        <div class="head-icon">\n        </div>\n    </div>\n    <div class="skills-container">\n    </div>\n  </div>',M=document.querySelector(".head-container .head-icon"),function(){for(let n=0;n<C.length;n+=1){const n=document.createElement("div");n.classList.add("skill-icon"),M.appendChild(n)}E=Array.from(document.querySelectorAll(".head-icon .skill-icon"))}(),L=document.querySelector(".skills-container"),M.style.backgroundImage=`url('${x}')`,E.forEach(((n,e)=>{n.style.backgroundImage=`url('${C[e].url}')`,q.push(setTimeout((()=>{I(e)}),300*(e+1)))}));break;case"Vanilla":N.innerHTML='\n  <section class="projects-container">\n  </section>',document.querySelector(".projects-container").appendChild($());break;case"Angular":O.innerHTML='\n  <section class="projects-container">\n  </section>',document.querySelector(".projects-container").appendChild($());break;case"Contact":G.innerHTML="Contact"}},en=function(){return document.querySelector("nav a.active")},tn=function(){X.style.left=en().getBoundingClientRect().left-K.getBoundingClientRect().left+"px",X.style.width=`${en().getBoundingClientRect().width}px`};W.forEach((n=>{n.addEventListener("click",(e=>{e.preventDefault(),W.forEach((n=>{n.classList.remove("active")})),n.classList.add("active"),tn(),nn(n.textContent)}))})),tn(),V()})()})();