import{c as g,r as c,j as U,o as L,h as o,T as O,_ as W,B as F,C as J,D as d,F as r,E as i,N as b}from"./index.421eb415.js";import{Q as P}from"./QSpinner.1a2858c5.js";import{c as $,h as E}from"./render.95266ed8.js";import{Q as G,a as p,b as H}from"./QPage.fe582039.js";import{Q}from"./QSeparator.676edbf1.js";import"./use-size.7b96fa90.js";const V={ratio:[String,Number]};function M(e,s){return g(()=>{const u=Number(e.ratio||(s!==void 0?s.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const K=16/9;var w=$({name:"QImg",props:{...V,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:K},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:s,emit:u}){const _=c(e.initialRatio),C=M(e,_);let t=null,h=!1;const n=[c(null),c(S())],l=c(0),m=c(!1),f=c(!1),x=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=g(()=>({width:e.width,height:e.height})),B=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),j=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));U(()=>q(),k);function q(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function k(a){t!==null&&(clearTimeout(t),t=null),f.value=!1,a===null?(m.value=!1,n[l.value^1].value=S()):m.value=!0,n[l.value].value=a}function A({target:a}){h!==!0&&(t!==null&&(clearTimeout(t),t=null),_.value=a.naturalHeight===0?.5:a.naturalWidth/a.naturalHeight,N(a,1))}function N(a,v){h===!0||v===1e3||(a.complete===!0?D(a):t=setTimeout(()=>{t=null,N(a,v+1)},50))}function D(a){h!==!0&&(l.value=l.value^1,n[l.value].value=null,m.value=!1,f.value=!1,u("load",a.currentSrc||a.src))}function I(a){t!==null&&(clearTimeout(t),t=null),m.value=!1,f.value=!0,n[l.value].value=null,n[l.value^1].value=S(),u("error",a)}function T(a){const v=n[a].value,y={key:"img_"+a,class:B.value,style:j.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...v};return l.value===a?(y.class+=" q-img__image--waiting",Object.assign(y,{onLoad:A,onError:I})):y.class+=" q-img__image--loaded",o("div",{class:"q-img__container absolute-full",key:"img"+a},o("img",y))}function R(){return m.value!==!0?o("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},E(s[f.value===!0?"error":"default"])):o("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},s.loading!==void 0?s.loading():e.noSpinner===!0?void 0:[o(P,{color:e.spinnerColor,size:e.spinnerSize})])}return k(q()),L(()=>{h=!0,t!==null&&(clearTimeout(t),t=null)}),()=>{const a=[];return C.value!==null&&a.push(o("div",{key:"filler",style:C.value})),f.value!==!0&&(n[0].value!==null&&a.push(T(0)),n[1].value!==null&&a.push(T(1))),a.push(o(O,{name:"q-transition--fade"},R)),o("div",{class:x.value,style:z.value,role:"img","aria-label":e.alt},a)}}}),X="/assets/map-WSNA.4a5cc700.png";const Y={},Z={class:"q-pa-md q-gutter-md rows"},ee=r("div",null,[r("p",null," Discussions around environmental values and management, and potential development in northern Australia, generate considerable debate. It is important that all members of our community have access to relevant published material. Often, information on environmental issues and values is not easily located. Some of this may be behind pay walls or may have had limited circulation, especially for older reports and materials. Genuine public participation requires easier and more equal access to all relevant information. "),r("p",null," North Australia Water Resources Digital Library provides a platform which compiles and provides access to key scientific reports, publications and data on previous research for 4 selected river catchments in northern Australia where pressure for increased water utilisation is high \u2013 Ord (WA), Daly-Katherine (NT), Gilbert (QLD) and lower Fitzroy (QLD). This platform provides access to previous scientific publications and research which has primarily taken place in these catchments. In the future, we would like to extend this digital library to additional catchments. "),r("p",null,[r("a",{href:"https://www.crcna.com.au/research/projects/water-security-northern-australia-implementation-phase",target:"_blank"},"Water Security for Northern Australia"),b(" is a research program of the "),r("a",{href:"https://www.crcna.com.au/",target:"_blank"},"Cooperative Research Centre for Developing Northern Australia"),b(" (CRCNA). The program is being delivered by three north Australian-based universities (James Cook University, Charles Darwin University and CQ University). The program aims to undertake research in selected catchments of northern Australia, that provides more information to decision-makers on water resource availability and allocation, environmental impacts and management, greater economic returns from the use of water resources and greater Indigenous benefit from water resources. One of the many activities of this program is this digital library resource. ")]),r("p",null," The development of this digital library will be ongoing with material continually being added. The digital library may extend to new catchments as resources allow. If you are aware of relevant reports not included in this library, please make us aware and provide a link to, or copy, of that material. ")],-1),ae=r("p",null,[b(" If you need assistance in accessing or downloading any of these resources, please email us at "),r("a",{href:"mailto:tropwater@jcu.edu.au"},"tropwater@jcu.edu.au"),b(". Some of these publications are not publicly available and may require the permission of the author to access. Contact us if you cannot access any material. ")],-1);function te(e,s){return F(),J(G,{padding:""},{default:d(()=>[r("div",Z,[i(H,{flat:""},{default:d(()=>[i(p,{horizontal:"",class:"q-mx-sm row justify-center"},{default:d(()=>[i(w,{src:X,width:"70%",fit:""})]),_:1}),i(p,null,{default:d(()=>[ee]),_:1}),i(Q,{inset:""}),i(p,null,{default:d(()=>[ae]),_:1}),i(Q,{inset:""}),i(p,{class:"q-mx-md row justify-center"},{default:d(()=>[i(w,{src:"images/JCU Logo - Horizontal RGB.png",alt:"James Cook University (JCU)",class:"q-ma-md col-auto",width:"200px",fit:"contain"}),i(w,{src:"images/charles-darwin-uni-logo.svg",alt:"Charles Darwin University",class:"q-ma-lg col-auto",width:"200px",fit:"contain"}),i(w,{src:"images/cqu-logo.png",alt:"Central Queensland University (CQU)",class:"q-ma-md col-auto",width:"200px",fit:"contain"})]),_:1})]),_:1})])]),_:1})}var ue=W(Y,[["render",te]]);export{ue as default};