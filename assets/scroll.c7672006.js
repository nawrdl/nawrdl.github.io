import{v as a,c,g as f}from"./Ripple.334ef254.js";import{p as m,o as w,g as p}from"./index.9294d9d4.js";let l,r=0;const e=new Array(256);for(let t=0;t<256;t++)e[t]=(t+256).toString(16).substring(1);const y=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return n=>{const o=new Uint8Array(n);return t.getRandomValues(o),o}}return n=>{const o=[];for(let i=n;i>0;i--)o.push(Math.floor(Math.random()*256));return o}})(),d=4096;function b(){(l===void 0||r+16>d)&&(r=0,l=y(d));const t=Array.prototype.slice.call(l,r,r+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,e[t[0]]+e[t[1]]+e[t[2]]+e[t[3]]+"-"+e[t[4]]+e[t[5]]+"-"+e[t[6]]+e[t[7]]+"-"+e[t[8]]+e[t[9]]+"-"+e[t[10]]+e[t[11]]+e[t[12]]+e[t[13]]+e[t[14]]+e[t[15]]}function x(){let t=null;const n=p();function o(){t!==null&&(clearTimeout(t),t=null)}return m(o),w(o),{removeTimeout:o,registerTimeout(i,u){o(),a(n)===!1&&(t=setTimeout(i,u))}}}const g=[null,document,document.body,document.scrollingElement,document.documentElement];function E(t,n){let o=f(n);if(o===void 0){if(t==null)return window;o=t.closest(".scroll,.scroll-y,.overflow-auto")}return g.includes(o)?window:o}function S(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function T(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let s;function L(){if(s!==void 0)return s;const t=document.createElement("p"),n=document.createElement("div");c(t,{width:"100%",height:"200px"}),c(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(t),document.body.appendChild(n);const o=t.offsetWidth;n.style.overflow="scroll";let i=t.offsetWidth;return o===i&&(i=n.clientWidth),n.remove(),s=o-i,s}function B(t,n=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:n?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{x as a,S as b,T as c,L as d,E as g,B as h,b as u};