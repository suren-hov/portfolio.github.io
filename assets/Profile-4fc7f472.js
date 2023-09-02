import{c as ve,d as V,m as T,a as x,h as Ee,b as F,r as U,o as h,e as b,f,t as _,F as R,g as G,i as o,w as k,j as fe,V as M,p as me,u as L,k as dt,I as w,l as Q,n as X,q as _e,s as K,v as Ne,x as Z,y as Oe,z as ge,A as he,B as je,C as pe,D as Re,E as ye,G as re,R as vt,H as ft,J as Ge,K as Se,L as mt,M as _t,N as gt,O as ht,P as pt,Q as Me,S as Fe,T as yt,U as St,W as xt,X as bt,Y as kt,Z as Ct,_ as It,$ as Ue,a0 as He,a1 as xe,a2 as qe,a3 as We,a4 as $t,a5 as be,a6 as P,a7 as we,a8 as Vt,a9 as Ye,aa as Ae,ab as Pt,ac as S,ad as ue,ae as wt,af as $,ag as At,ah as zt,ai as z,aj as J,ak as ze,al as Tt}from"./index-a9dbd374.js";const ke=["sm","md","lg","xl","xxl"],Je=(()=>ke.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),Qe=(()=>ke.reduce((e,s)=>(e["offset"+ve(s)]={type:[String,Number],default:null},e),{}))(),Xe=(()=>ke.reduce((e,s)=>(e["order"+ve(s)]={type:[String,Number],default:null},e),{}))(),Te={col:Object.keys(Je),offset:Object.keys(Qe),order:Object.keys(Xe)};function Lt(e,s,t){let l=e;if(!(t==null||t===!1)){if(s){const n=s.replace(e,"");l+=`-${n}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const Bt=["auto","start","end","center","baseline","stretch"],Dt=V({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Je,offset:{type:[String,Number],default:null},...Qe,order:{type:[String,Number],default:null},...Xe,alignSelf:{type:String,default:null,validator:e=>Bt.includes(e)},...T()},setup(e,s){let{slots:t}=s;const l=x(()=>{const n=[];let i;for(i in Te)Te[i].forEach(a=>{const u=e[a],d=Lt(i,a,u);d&&n.push(d)});const c=n.some(a=>a.startsWith("v-col-"));return n.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return Ee(e.tag,{class:l.value},(n=t.default)==null?void 0:n.call(t))}}}),Et=["sm","md","lg","xl","xxl"],Ce=["start","end","center"],Ke=["space-between","space-around","space-evenly"];function Ie(e,s){return Et.reduce((t,l)=>(t[e+ve(l)]=s(),t),{})}const Nt=[...Ce,"baseline","stretch"],Ze=e=>Nt.includes(e),et=Ie("align",()=>({type:String,default:null,validator:Ze})),Ot=[...Ce,...Ke],tt=e=>Ot.includes(e),lt=Ie("justify",()=>({type:String,default:null,validator:tt})),jt=[...Ce,...Ke,"stretch"],nt=e=>jt.includes(e),at=Ie("alignContent",()=>({type:String,default:null,validator:nt})),Le={align:Object.keys(et),justify:Object.keys(lt),alignContent:Object.keys(at)},Rt={align:"align",justify:"justify",alignContent:"align-content"};function Gt(e,s,t){let l=Rt[e];if(t!=null){if(s){const n=s.replace(e,"");l+=`-${n}`}return l+=`-${t}`,l.toLowerCase()}}const Mt=V({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ze},...et,justify:{type:String,default:null,validator:tt},...lt,alignContent:{type:String,default:null,validator:nt},...at,...T()},setup(e,s){let{slots:t}=s;const l=x(()=>{const n=[];let i;for(i in Le)Le[i].forEach(c=>{const a=e[c],u=Gt(i,c,a);u&&n.push(u)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return Ee(e.tag,{class:["v-row",l.value]},(n=t.default)==null?void 0:n.call(t))}}});const ee=(e,s)=>{const t=e.__vccOpts||e;for(const[l,n]of s)t[l]=n;return t},Ft={class:"personal-info"},Ut={class:"text-h5 text-uppercase text-deep-purple-accent-1"},Ht={class:"personal-info__icon"},qt={class:"personal-info__content"},Wt={class:"text-uppercase text-button"},Yt={class:"font-weight-light"},Jt={__name:"PersonalInfo",props:{header:String},setup(e){F({name:"PersonalInfo"});const s=U([{icon:"mdi-calendar-account",title:"Birth date",value:"22 February, 2001"},{icon:"mdi-city",title:"Birth place",value:"Mykolaiv, Ukraine"},{icon:"mdi-compass-rose",title:"Location",value:"Mykolaiv, Ukraine"}]);return(t,l)=>(h(),b("div",Ft,[f("h5",Ut,_(e.header),1),(h(!0),b(R,null,G(s,(n,i)=>(h(),b("div",{class:"personal-info__item mt-3",key:i},[f("div",Ht,[o(M,{size:"x-large"},{default:k(()=>[fe(_(n.icon),1)]),_:2},1024)]),f("div",qt,[f("span",Wt,_(n.title),1),f("span",Yt,_(n.value),1)])]))),128))]))}},Qt=ee(Jt,[["__scopeId","data-v-17bce668"]]);const Xt={class:"contact-info"},Kt={class:"text-h5 text-uppercase text-deep-purple-accent-1"},Zt={class:"contact-info__icon"},el={class:"contact-info__content"},tl={class:"text-uppercase text-button"},ll=["href","target"],nl={__name:"ContactInfo",props:{header:String},setup(e){F({name:"ContactInfo"});const s=U([{icon:"mdi-cellphone-sound",title:"Phone",value:"+ 380 (63) 872 09 90",href:"tel:+380638720990",target:null},{icon:"mdi-message-text",title:"Telegram",value:"@fordiquez",href:"https://t.me/fordiquez",target:"_blank"},{icon:"mdi-gmail",title:"Gmail",value:"ruslan.tsiapko@gmail.com",href:"mailto:ruslan.tsiapko@gmail.com",target:null},{icon:"mdi-github",title:"GitHub",value:"fordiquez",href:"https://github.com/fordiquez",target:"_blank"},{icon:"mdi-linkedin",title:"LinkedIn",value:"ruslan.tsiapko",href:"https://www.linkedin.com/in/ruslan-tsiapko-a41397241/",target:"_blank"}]);return(t,l)=>(h(),b("div",Xt,[f("h5",Kt,_(e.header),1),(h(!0),b(R,null,G(s,(n,i)=>(h(),b("div",{class:"contact-info__item mt-3",key:i},[f("div",Zt,[o(M,{size:"x-large"},{default:k(()=>[fe(_(n.icon),1)]),_:2},1024)]),f("div",el,[f("span",tl,_(n.title),1),f("a",{href:n.href,target:n.target},_(n.value),9,ll)])]))),128))]))}},al=ee(nl,[["__scopeId","data-v-5f117e22"]]);const sl=V({name:"VCardActions",setup(e,s){let{slots:t}=s;return me({VBtn:{variant:"text"}}),L(()=>{var l;return o("div",{class:"v-card-actions"},[(l=t.default)==null?void 0:l.call(t)])}),{}}});const il=dt({start:Boolean,end:Boolean,icon:w,image:String,...Q(),...X(),..._e(),...T(),...K(),...Ne({variant:"flat"})},"v-avatar"),de=V({name:"VAvatar",props:il(),setup(e,s){let{slots:t}=s;const{themeClasses:l}=Z(e),{colorClasses:n,colorStyles:i,variantClasses:c}=Oe(e),{densityClasses:a}=ge(e),{roundedClasses:u}=he(e),{sizeClasses:d,sizeStyles:v}=je(e);return L(()=>{var p;return o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},l.value,n.value,a.value,u.value,d.value,c.value],style:[i.value,v.value]},{default:()=>[e.image?o(pe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(M,{key:"icon",icon:e.icon},null):(p=t.default)==null?void 0:p.call(t),Re(!1,"v-avatar")]})}),{}}}),ol=ye("v-card-subtitle"),cl=ye("v-card-title"),rl=V({name:"VCardItem",props:{appendAvatar:String,appendIcon:w,prependAvatar:String,prependIcon:w,subtitle:String,title:String,...Q()},setup(e,s){let{slots:t}=s;return L(()=>{var l,n,i,c,a;const u=!!(e.prependAvatar||e.prependIcon||t.prepend),d=!!(e.appendAvatar||e.appendIcon||t.append),v=!!(e.title||t.title),p=!!(e.subtitle||t.subtitle);return o("div",{class:"v-card-item"},[u&&o(re,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[o("div",{class:"v-card-item__prepend"},[((l=t.prepend)==null?void 0:l.call(t))??o(de,null,null)])]}),o("div",{class:"v-card-item__content"},[v&&o(cl,{key:"title"},{default:()=>[((n=t.title)==null?void 0:n.call(t))??e.title]}),p&&o(ol,{key:"subtitle"},{default:()=>[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}),(c=t.default)==null?void 0:c.call(t)]),d&&o(re,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[o("div",{class:"v-card-item__append"},[((a=t.append)==null?void 0:a.call(t))??o(de,null,null)])]})])}),{}}}),ul=ye("v-card-text"),dl=V({name:"VCard",directives:{Ripple:vt},props:{appendAvatar:String,appendIcon:w,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:w,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...K(),...ft(),...Q(),...Ge(),...Se(),...mt(),..._t(),...gt(),...X(),...ht(),...T(),...Ne({variant:"elevated"})},setup(e,s){let{attrs:t,slots:l}=s;const{themeClasses:n}=Z(e),{borderClasses:i}=pt(e),{colorClasses:c,colorStyles:a,variantClasses:u}=Oe(e),{densityClasses:d}=ge(e),{dimensionStyles:v}=Me(e),{elevationClasses:p}=Fe(e),{loaderClasses:y}=yt(e),{locationStyles:g}=St(e),{positionClasses:A}=xt(e),{roundedClasses:B}=he(e),E=bt(e,t),N=x(()=>e.link!==!1&&E.isLink.value),D=x(()=>!e.disabled&&e.link!==!1&&(e.link||E.isClickable.value));return L(()=>{var H,W,Y;const te=N.value?"a":e.tag,le=!!(l.title||e.title),O=!!(l.subtitle||e.subtitle),ne=le||O,ae=!!(l.append||e.appendAvatar||e.appendIcon),se=!!(l.prepend||e.prependAvatar||e.prependIcon),ie=!!(l.image||e.image),C=ne||se||ae,q=!!(l.text||e.text);return kt(o(te,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":D.value},n.value,i.value,c.value,d.value,p.value,y.value,A.value,B.value,u.value],style:[a.value,v.value,g.value],href:E.href.value,onClick:D.value&&E.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[ie&&o(re,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[o("div",{class:"v-card__image"},[((H=l.image)==null?void 0:H.call(l))??o(pe,null,null)])]}),o(It,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:l.loader}),C&&o(rl,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),q&&o(ul,{key:"text"},{default:()=>[((W=l.text)==null?void 0:W.call(l))??e.text]}),(Y=l.default)==null?void 0:Y.call(l),l.actions&&o(sl,null,{default:l.actions}),Re(D.value,"v-card")]}),[[Ct("ripple"),D.value&&e.ripple]])}),{}}});const st=Symbol.for("vuetify:v-item-group"),vl=V({name:"VItemGroup",props:{...Ue({selectedClass:"v-item--selected"}),...T(),...K()},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{themeClasses:l}=Z(e),{isSelected:n,select:i,next:c,prev:a,selected:u}=He(e,st);return()=>{var d;return o(e.tag,{class:["v-item-group",l.value]},{default:()=>[(d=t.default)==null?void 0:d.call(t,{isSelected:n,select:i,next:c,prev:a,selected:u.value})]})}}}),fl=xe()({name:"VItem",props:qe(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const{isSelected:l,select:n,toggle:i,selectedClass:c,value:a,disabled:u}=We(e,st);return()=>{var d;return(d=t.default)==null?void 0:d.call(t,{isSelected:l.value,selectedClass:c.value,select:n,toggle:i,value:a.value,disabled:u.value})}}});function Be(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function De(e){let{selectedElement:s,containerSize:t,contentSize:l,isRtl:n,currentScrollOffset:i,isHorizontal:c}=e;const a=c?s.clientWidth:s.clientHeight,u=c?s.offsetLeft:s.offsetTop,d=n&&c?l-u-a:u,v=t+i,p=a+d,y=a*.4;return d<=i?i=Math.max(d-y,0):v<=p&&(i=Math.min(i-(v-p-y),l-t)),i}function ml(e){let{selectedElement:s,containerSize:t,contentSize:l,isRtl:n,isHorizontal:i}=e;const c=i?s.clientWidth:s.clientHeight,a=i?s.offsetLeft:s.offsetTop,u=n&&i?l-a-c/2-t/2:a+c/2-t/2;return Math.min(l-t,Math.max(0,u))}const it=Symbol.for("vuetify:v-slide-group"),_l=xe()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:it},nextIcon:{type:w,default:"$next"},prevIcon:{type:w,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...T(),...Ue({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{isRtl:l}=$t(),{mobile:n}=be(),i=He(e,e.symbol),c=P(!1),a=P(0),u=P(0),d=P(0),v=x(()=>e.direction==="horizontal"),{resizeRef:p,contentRect:y}=we(),{resizeRef:g,contentRect:A}=we(),B=x(()=>i.selected.value.length?i.items.value.findIndex(r=>r.id===i.selected.value[0]):-1),E=x(()=>i.selected.value.length?i.items.value.findIndex(r=>r.id===i.selected.value[i.selected.value.length-1]):-1);if(Vt){let r=-1;Ye(()=>[i.selected.value,y.value,A.value,v.value],()=>{cancelAnimationFrame(r),r=requestAnimationFrame(()=>{if(y.value&&A.value){const m=v.value?"width":"height";u.value=y.value[m],d.value=A.value[m],c.value=u.value+1<d.value}if(B.value>=0&&g.value){const m=g.value.children[E.value];B.value===0||!c.value?a.value=0:e.centerActive?a.value=ml({selectedElement:m,containerSize:u.value,contentSize:d.value,isRtl:l.value,isHorizontal:v.value}):c.value&&(a.value=De({selectedElement:m,containerSize:u.value,contentSize:d.value,isRtl:l.value,currentScrollOffset:a.value,isHorizontal:v.value}))}})})}const N=P(!1);let D=0,H=0;function W(r){const m=v.value?"clientX":"clientY";H=(l.value&&v.value?-1:1)*a.value,D=r.touches[0][m],N.value=!0}function Y(r){if(!c.value)return;const m=v.value?"clientX":"clientY",I=l.value&&v.value?-1:1;a.value=I*(H+D-r.touches[0][m])}function te(r){const m=d.value-u.value;a.value<0||!c.value?a.value=0:a.value>=m&&(a.value=m),N.value=!1}function le(){p.value&&(p.value[v.value?"scrollLeft":"scrollTop"]=0)}const O=P(!1);function ne(r){if(O.value=!0,!(!c.value||!g.value)){for(const m of r.composedPath())for(const I of g.value.children)if(I===m){a.value=De({selectedElement:I,containerSize:u.value,contentSize:d.value,isRtl:l.value,currentScrollOffset:a.value,isHorizontal:v.value});return}}}function ae(r){O.value=!1}function se(r){var m;!O.value&&!(r.relatedTarget&&(m=g.value)!=null&&m.contains(r.relatedTarget))&&C()}function ie(r){g.value&&(v.value?r.key==="ArrowRight"?C(l.value?"prev":"next"):r.key==="ArrowLeft"&&C(l.value?"next":"prev"):r.key==="ArrowDown"?C("next"):r.key==="ArrowUp"&&C("prev"),r.key==="Home"?C("first"):r.key==="End"&&C("last"))}function C(r){if(g.value)if(r){if(r==="next"){var I;const j=(I=g.value.querySelector(":focus"))==null?void 0:I.nextElementSibling;j?j.focus():C("first")}else if(r==="prev"){var $e;const j=($e=g.value.querySelector(":focus"))==null?void 0:$e.previousElementSibling;j?j.focus():C("last")}else if(r==="first"){var Ve;(Ve=g.value.firstElementChild)==null||Ve.focus()}else if(r==="last"){var Pe;(Pe=g.value.lastElementChild)==null||Pe.focus()}}else{var m;(m=[...g.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(ut=>!ut.hasAttribute("disabled"))[0])==null||m.focus()}}function q(r){const m=a.value+(r==="prev"?-1:1)*u.value;a.value=Pt(m,0,d.value-u.value)}const ot=x(()=>{let r=a.value>d.value-u.value?-(d.value-u.value)+Be(d.value-u.value-a.value):-a.value;a.value<=0&&(r=Be(-a.value));const m=l.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${m*r}px)`,transition:N.value?"none":"",willChange:N.value?"transform":""}}),oe=x(()=>({next:i.next,prev:i.prev,select:i.select,isSelected:i.isSelected})),ce=x(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!n.value;case!0:return c.value||Math.abs(a.value)>0;case"mobile":return n.value||c.value||Math.abs(a.value)>0;default:return!n.value&&(c.value||Math.abs(a.value)>0)}}),ct=x(()=>Math.abs(a.value)>0),rt=x(()=>d.value>Math.abs(a.value)+u.value);return L(()=>{var r,m,I;return o(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":ce.value,"v-slide-group--is-overflowing":c.value}],tabindex:O.value||i.selected.value.length?-1:0,onFocus:se},{default:()=>[ce.value&&o("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ct.value}],onClick:()=>q("prev")},[((r=t.prev)==null?void 0:r.call(t,oe.value))??o(Ae,null,{default:()=>[o(M,{icon:l.value?e.nextIcon:e.prevIcon},null)]})]),o("div",{key:"container",ref:p,class:"v-slide-group__container",onScroll:le},[o("div",{ref:g,class:"v-slide-group__content",style:ot.value,onTouchstartPassive:W,onTouchmovePassive:Y,onTouchendPassive:te,onFocusin:ne,onFocusout:ae,onKeydown:ie},[(m=t.default)==null?void 0:m.call(t,oe.value)])]),ce.value&&o("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!rt.value}],onClick:()=>q("next")},[((I=t.next)==null?void 0:I.call(t,oe.value))??o(Ae,null,{default:()=>[o(M,{icon:l.value?e.prevIcon:e.nextIcon},null)]})])]})}),{selected:i.selected,scrollTo:q,scrollOffset:a,focus:C}}}),gl=xe()({name:"VSlideGroupItem",props:{...qe()},emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const l=We(e,it);return()=>{var n;return(n=t.default)==null?void 0:n.call(t,{isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}}}),hl=e=>(At("data-v-5bec200e"),e=e(),zt(),e),pl={class:"technical-skills"},yl=hl(()=>f("h5",{class:"text-h5 text-uppercase text-center text-deep-purple-accent-1"},"Technical skills",-1)),Sl={class:"text-h5 text-center"},xl={__name:"Skills",setup(e){const{xs:s,sm:t,md:l,lg:n,xlAndUp:i}=be();F({name:"Skills"});const c=U({options:[{id:1,name:"Back-end"},{id:2,name:"Front-end"},{id:3,name:"UI"},{id:4,name:"DBMS"},{id:5,name:"DevOps"},{id:6,name:"Other"}],items:[{id:1,option:1,name:"Laravel",experience:"2 years"},{id:2,option:1,name:"Express.js",experience:"1 year"},{id:3,option:1,name:"Nest.js",experience:"3 months"},{id:4,option:1,name:"Yii2",experience:"3 months"},{id:5,option:2,name:"Vue.js",experience:"2 years"},{id:6,option:2,name:"Nuxt.js",experience:"2 years"},{id:7,option:3,name:"Vuetify",experience:"1 year"},{id:8,option:3,name:"Bootstrap",experience:"3 years"},{id:9,option:3,name:"Tailwind",experience:"1 year"},{id:10,option:4,name:"MySQL",experience:"3 years"},{id:11,option:4,name:"MongoDB",experience:"1 year"},{id:12,option:4,name:"PostgreSQL",experience:"6 months"},{id:13,option:4,name:"SQL Server",experience:"6 months"},{id:14,option:4,name:"Firebase",experience:"6 months"},{id:15,option:4,name:"Redis",experience:"1 month"},{id:16,option:5,name:"Docker",experience:"8 months"},{id:17,option:5,name:"GCP",experience:"2 months"},{id:18,option:5,name:"AWS",experience:"2 months"},{id:19,option:5,name:"CI/CD",experience:"2 months"},{id:20,option:5,name:"Heroku",experience:"3 months"},{id:21,option:6,name:"Figma",experience:"2 years"},{id:22,option:6,name:"Photoshop",experience:"2 years"},{id:23,option:6,name:"Vite",experience:"1 year"},{id:24,option:6,name:"REST API",experience:"2 years"}]}),a=P(null),u=x(()=>a.value!=null?c.items.filter(v=>v.option===a.value):c.items),d=v=>a.value=a.value===v.id?null:v.id;return(v,p)=>(h(),b("div",pl,[yl,o(_l,{"show-arrows":"","center-active":"",class:"mt-3"},{default:k(()=>[(h(!0),b(R,null,G(c.options,y=>(h(),ue(gl,{key:y.id},{default:k(({isSelected:g,toggle:A})=>[o(wt,{class:"ma-2",rounded:"",color:y.id===a.value?"primary":void 0,onClick:B=>d(y)},{default:k(()=>[fe(_(y.name),1)]),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1}),o(vl,{"selected-class":"bg-primary",class:"technical-skills__row"},{default:k(()=>[o(Mt,null,{default:k(()=>[(h(!0),b(R,null,G(S(u),y=>(h(),ue(Dt,{key:y.id,cols:S(s)?"12":S(t)?"6":S(l)||S(n)?"4":S(i)?"3":void 0},{default:k(()=>[o(fl,null,{default:k(({isSelected:g,selectedClass:A,toggle:B})=>[o(dl,{class:$(["technical-skills__item",A]),onClick:B},{default:k(()=>[f("div",Sl,_(g?y.experience:y.name),1)]),_:2},1032,["class","onClick"])]),_:2},1024)]),_:2},1032,["cols"]))),128))]),_:1})]),_:1})]))}},bl=ee(xl,[["__scopeId","data-v-5bec200e"]]);const kl=V({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...Q(),...T(),...K()},setup(e,s){let{slots:t}=s;const{themeClasses:l}=Z(e),{densityClasses:n}=ge(e);me({VTimelineDivider:{lineColor:z(e,"lineColor")},VTimelineItem:{density:z(e,"density"),lineInset:z(e,"lineInset")}});const i=x(()=>{const a=e.side?e.side:e.density!=="default"?"end":null;return a&&`v-timeline--side-${a}`}),c=x(()=>{const a=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return a;case"start":return a[0];case"end":return a[1];default:return null}});return L(()=>o(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,c.value,{"v-timeline--inset-line":!!e.lineInset},l.value,n.value,i.value],style:{"--v-timeline-line-thickness":J(e.lineThickness)}},t)),{}}}),Cl=V({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:w,iconColor:String,lineColor:String,...X(),..._e(),...Se()},setup(e,s){let{slots:t}=s;const{sizeClasses:l,sizeStyles:n}=je(e,"v-timeline-divider__dot"),{backgroundColorStyles:i,backgroundColorClasses:c}=ze(z(e,"dotColor")),{roundedClasses:a}=he(e,"v-timeline-divider__dot"),{elevationClasses:u}=Fe(e),{backgroundColorClasses:d,backgroundColorStyles:v}=ze(z(e,"lineColor"));return me({VIcon:{color:z(e,"iconColor"),icon:z(e,"icon"),size:z(e,"size")}}),L(()=>{var p;return o("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot}]},[o("div",{class:["v-timeline-divider__before",d.value],style:v.value},null),!e.hideDot&&o("div",{key:"dot",class:["v-timeline-divider__dot",u.value,a.value,l.value],style:n.value},[o("div",{class:["v-timeline-divider__inner-dot",c.value,a.value],style:i.value},[((p=t.default)==null?void 0:p.call(t))??(e.icon?o(M,null,null):void 0)])]),o("div",{class:["v-timeline-divider__after",d.value],style:v.value},null)])}),{}}}),Il=V({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:w,iconColor:String,lineInset:[Number,String],...X(),...Se(),..._e(),...T(),...Ge()},setup(e,s){let{slots:t}=s;const{dimensionStyles:l}=Me(e),n=P(0),i=P();return Ye(i,c=>{var a;c&&(n.value=((a=c.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:a.getBoundingClientRect().width)??0)},{flush:"post"}),L(()=>{var c,a;return o("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot}],style:{"--v-timeline-dot-size":J(n.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${J(e.lineInset)})`:J(0)}},[o("div",{class:"v-timeline-item__body",style:l.value},[(c=t.default)==null?void 0:c.call(t)]),o(Cl,{ref:i,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:t.icon}),e.density!=="compact"&&o("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((a=t.opposite)==null?void 0:a.call(t))])])}),{}}}),$l={class:"timeline mt-5"},Vl=f("h5",{class:"text-h5 text-uppercase text-center text-deep-purple-accent-1"},"Education & work",-1),Pl=["textContent"],wl={class:"text-subtitle-2"},Al={__name:"Timelines",setup(e){F({name:"Timelines"});const s=U([{id:0,icon:"mdi-book-education",color:"cyan lighten-1",title:"Petro Mohyla Black Sea National University",position:"Software Engineer",period:"SEP 2018 — JUN 2022",description:"Bachelor of Software Engineer"},{id:1,icon:"mdi-briefcase-variant",color:"amber darken-1",title:"FluidWeb",position:"Trainee",period:"JUN — AUG 2021",description:"Build landing pages & make E2E testing with Cypress.js"},{id:2,icon:"mdi-briefcase-variant",color:"blue-darken-3",title:"TrackEnsure",position:"Data Specialist",period:"AUG 2021 — MAY 2022",description:"Monitoring logistical data"},{id:3,icon:"mdi-briefcase-variant",color:"blue-grey",title:"Moonion",position:"PHP Back-end developer",period:"JUN — SEP 2022",description:"API integration to e-commerce based on PHP yii2 framework"},{id:4,icon:"mdi-briefcase-variant",color:"deep-orange-lighten-1",title:"TuneLab",position:"Full-stack developer",period:"DEC 2022 — NOWADAYS",description:"Developing finTech application from scratch with Laravel 9, Vue.js 3 and Inertia.js"}]);return(t,l)=>(h(),b("div",$l,[Vl,o(kl,{class:"mt-5"},{default:k(()=>[(h(!0),b(R,null,G(s,n=>(h(),ue(Il,{key:n.id,"dot-color":n.color,icon:n.icon,size:"large"},{opposite:k(()=>[f("div",{class:$(`pt-1 headline font-weight-bold text-button text-${n.color}`),textContent:_(n.period)},null,10,Pl)]),default:k(()=>[f("div",null,[f("h2",{class:$(`mt-n1 headline font-weight-light mb-4 text-${n.color}`)},_(n.title),3),f("h5",{class:$(`text-button text-${n.color}`)},_(n.position),3),f("span",wl,_(n.description),1)])]),_:2},1032,["dot-color","icon"]))),128))]),_:1})]))}},zl={class:"languages"},Tl={class:"text-h5 text-uppercase text-deep-purple-accent-1"},Ll={class:"text-subtitle-1 font-weight-light"},Bl={class:"d-flex align-center"},Dl={class:"text-subtitle-1 font-weight-light ml-2"},El={__name:"Languages",props:{header:String},setup(e){F({name:"Languages"});const s=U([{name:"Ukrainian",value:100},{name:"Russian",value:100},{name:"English",value:55}]);return(t,l)=>(h(),b("div",zl,[f("h5",Tl,_(e.header),1),(h(!0),b(R,null,G(s,(n,i)=>(h(),b("div",{key:i,class:"mt-3"},[f("span",Ll,_(n.name),1),f("div",Bl,[o(Tt,{color:"primary","model-value":n.value},null,8,["model-value"]),f("span",Dl,_(n.value)+"%",1)])]))),128))]))}};const Nl={class:"container"},Ol={class:"profile"},jl={class:"profile__image"},Rl={class:"profile__text"},Gl={class:"text-h5 text-uppercase font-weight-light mt-5 text-deep-purple-lighten-1"},Ml={class:"block"},Fl={class:"block__element block__element-2"},Ul={__name:"Profile",setup(e){F({name:"Profile"});const{xs:s,sm:t,smAndDown:l,md:n,mdAndDown:i}=be(),c=U({fullName:"Ruslan Tsiapko",position:"Full-stack web developer"});return(a,u)=>(h(),b("div",Nl,[f("div",Ol,[f("div",jl,[o(de,{size:S(l)?200:300},{default:k(()=>[o(pe,{src:"avatar.jpg","lazy-src":"avatar.jpg",alt:"Profile avatar",title:"Profile avatar"})]),_:1},8,["size"])]),f("div",Rl,[f("h1",{class:$(["text-uppercase font-weight-regular text-deep-purple-accent-1",S(s)?"text-h3":"text-h2"])},_(c.fullName),3),f("h2",Gl,_(c.position),1)])]),f("div",Ml,[f("div",{class:$(["block__row",S(i)?"flex-column":void 0])},[f("div",{class:$(["block__element block__element-1",S(s)?"flex-column":void 0])},[o(Qt,{header:"Personal Info"}),o(al,{header:"Contact Info",class:$(S(n)||S(t)?"mt-0":"mt-5")},null,8,["class"]),o(El,{header:"Languages",class:$(S(n)?"mt-0":S(l)?"w-100 mt-5":"mt-5")},null,8,["class"])],2),f("div",Fl,[o(bl,{class:$(S(t)?"mt-5":"mt-0")},null,8,["class"]),o(Al)])],2)])]))}},ql=ee(Ul,[["__scopeId","data-v-a3a6d28e"]]);export{ql as default};
