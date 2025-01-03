import{i as le,a as De,c as We,j as f,o as ke,D as Ce,p as Te,Q as Ae}from"./index-f10ef397.js";import{P as Ie}from"./PageHeader-bcdf1bbb.js";import{S as ue}from"./Spring-f5e22a72.js";import{a as j,N as Fe,G as M,J as Z}from"./antd-2f34d53b.js";import{a as ce,U as me}from"./config-44cbe1ad.js";import{u as _e,C as Me}from"./index.esm-d87f6d51.js";import{a as Oe}from"./shop-64d85626.js";import"./mui-8e3bcfed.js";import"./DocumentTitle-eca67fa7.js";const re=async()=>{const e=le("application/json");return(await ce.get(`${me}profile/own`,e)).data},Re=async e=>{const r=le("multipart/form-data"),t=new FormData;return t.append("file",e),(await ce.post(`${me}profile/avatar-own`,t,r)).data},Be=()=>{const[e,r]=j.useState(null),t=De(),a=We();j.useEffect(()=>{(async()=>{try{const c=await re();r(c)}catch(c){console.error("Error fetching user data:",c)}})()},[]);const n=async()=>{try{ke(),document.cookie="user_login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t(Ce()),a("/"),window.location.reload()}catch(u){console.error("Logout error:",u)}},l=async u=>{const c=u.target.files[0];if(c)try{await Re(c);const g=await re();r(g)}catch(g){console.error("Failed to update profile picture:",g)}};return e!=null&&e.roleNames,f.jsxDEV(ue,{className:"card flex flex-col items-center justify-center",id:"userProfileCard",children:[f.jsxDEV("div",{className:"relative mb-3.5",children:[f.jsxDEV("img",{className:"relative rounded-full w-[110px] h-[110px]",src:(e==null?void 0:e.avatar)||"",alt:"User Avatar"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:57,columnNumber:9},globalThis),f.jsxDEV("input",{type:"file",accept:"image/*",className:"hidden",id:"profileImageUpload",onChange:l},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:58,columnNumber:9},globalThis),f.jsxDEV("label",{htmlFor:"profileImageUpload",className:`absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                    border-widget border-solid transition hover:bg-green-darker cursor-pointer`,"aria-label":"Change profile picture",children:f.jsxDEV("i",{className:"inline-block icon-camera-solid mt-1"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:61,columnNumber:11},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:59,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:56,columnNumber:7},globalThis),f.jsxDEV("h4",{children:e==null?void 0:e.userName},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:64,columnNumber:7},globalThis),f.jsxDEV("p",{className:"subheading-2 mt-6 mb-[18px]",children:["Lần truy cập cuối ",Fe().format("DD/MM/YYYY")]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:65,columnNumber:7},globalThis),f.jsxDEV("div",{className:"",onClick:n,children:f.jsxDEV("button",{className:"btn btn--secondary w-full md:max-w-[280px]",children:"Đăng xuất"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:69,columnNumber:9},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:68,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileCard.jsx",lineNumber:55,columnNumber:10},globalThis)};function fe(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t}var $;(function(e){e.event="event",e.props="prop"})($||($={}));function I(){}function Le(e){var r,t=void 0;return function(){for(var a=[],n=arguments.length;n--;)a[n]=arguments[n];return r&&a.length===r.length&&a.every(function(l,u){return l===r[u]})||(r=a,t=e.apply(void 0,a)),t}}function B(e){return!!(e||"").match(/\d/)}function Y(e){return e==null}function Ke(e){return typeof e=="number"&&isNaN(e)}function qe(e){return Y(e)||Ke(e)||typeof e=="number"&&!isFinite(e)}function Ge(e){var r=j.useRef(e);r.current=e;var t=j.useRef(function(){for(var a=[],n=arguments.length;n--;)a[n]=arguments[n];return r.current.apply(r,a)});return t.current}function se(e,r){return Array(r+1).join(e)}function $e(e){var r=e+"",t=r[0]==="-"?"-":"";t&&(r=r.substring(1));var a=r.split(/[eE]/g),n=a[0],l=a[1];if(l=Number(l),!l)return t+n;n=n.replace(".","");var u=1+l,c=n.length;return u<0?n="0."+se("0",Math.abs(u))+n:u>=c?n=n+se("0",u-c):n=(n.substring(0,u)||"0")+"."+n.substring(u),t+n}function te(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",r),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var Ye=Le(function(e,r){for(var t=0,a=0,n=e.length,l=r.length;e[t]===r[t]&&t<n;)t++;for(;e[n-1-a]===r[l-1-a]&&l-a>t&&n-a>t;)a++;return{from:{start:t,end:n-a},to:{start:t,end:l-a}}}),Je=function(e,r){var t=Math.min(e.selectionStart,r);return{from:{start:t,end:e.selectionEnd},to:{start:t,end:r}}};function ze(e,r,t){return Math.min(Math.max(e,r),t)}function ee(e){return Math.max(e.selectionStart,e.selectionEnd)}function He(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Qe(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function de(e,r){return e===void 0&&(e=" "),typeof e=="string"?e:e[r]||" "}function Xe(e){var r=e.currentValue,t=e.formattedValue,a=e.currentValueIndex,n=e.formattedValueIndex;return r[a]===t[n]}function Ze(e,r,t,a,n,l,u){u===void 0&&(u=Xe);var c=n.findIndex(function(D){return D}),g=e.slice(0,c);!r&&!t.startsWith(g)&&(r=g,t=g+t,a=a+g.length);for(var w=t.length,h=e.length,V={},v=new Array(w),p=0;p<w;p++){v[p]=-1;for(var m=0,P=h;m<P;m++){var s=u({currentValue:t,lastValue:r,formattedValue:e,currentValueIndex:p,formattedValueIndex:m});if(s&&V[m]!==!0){v[p]=m,V[m]=!0;break}}}for(var b=a;b<w&&(v[b]===-1||!l(t[b]));)b++;var x=b===w||v[b]===-1?h:v[b];for(b=a-1;b>0&&v[b]===-1;)b--;var U=b===-1||v[b]===-1?0:v[b]+1;return U>x?x:a-U<x-a?U:x}function J(e,r,t,a){var n=e.length;if(r=ze(r,0,n),a==="left"){for(;r>=0&&!t[r];)r--;r===-1&&(r=t.indexOf(!0))}else{for(;r<=n&&!t[r];)r++;r>n&&(r=t.lastIndexOf(!0))}return r===-1&&(r=n),r}function er(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),t=0,a=r.length;t<a;t++)r[t]=!!(B(e[t])||B(e[t-1]));return r}function rr(e,r,t,a,n,l){l===void 0&&(l=I);var u=Ge(function(m,P){var s,b;return qe(m)?(b="",s=""):typeof m=="number"||P?(b=typeof m=="number"?$e(m):m,s=a(b)):(b=n(m,void 0),s=a(b)),{formattedValue:s,numAsString:b}}),c=j.useState(function(){return u(Y(e)?r:e,t)}),g=c[0],w=c[1],h=function(m,P){m.formattedValue!==g.formattedValue&&w({formattedValue:m.formattedValue,numAsString:m.value}),l(m,P)},V=e,v=t;Y(e)&&(V=g.numAsString,v=!0);var p=u(V,v);return j.useMemo(function(){w(p)},[p.formattedValue]),[g,h]}function tr(e){return e.replace(/[^0-9]/g,"")}function ar(e){return e}function nr(e){var r=e.type;r===void 0&&(r="text");var t=e.displayType;t===void 0&&(t="input");var a=e.customInput,n=e.renderText,l=e.getInputRef,u=e.format;u===void 0&&(u=ar);var c=e.removeFormatting;c===void 0&&(c=tr);var g=e.defaultValue,w=e.valueIsNumericString,h=e.onValueChange,V=e.isAllowed,v=e.onChange;v===void 0&&(v=I);var p=e.onKeyDown;p===void 0&&(p=I);var m=e.onMouseUp;m===void 0&&(m=I);var P=e.onFocus;P===void 0&&(P=I);var s=e.onBlur;s===void 0&&(s=I);var b=e.value,x=e.getCaretBoundary;x===void 0&&(x=er);var U=e.isValidInputCharacter;U===void 0&&(U=B);var D=e.isCharacterSame,A=fe(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),L=rr(b,g,!!w,u,c,h),ae=L[0],y=ae.formattedValue,K=ae.numAsString,ve=L[1],q=j.useRef(),G=j.useRef({formattedValue:y,numAsString:K}),ne=function(i,o){G.current={formattedValue:i.formattedValue,numAsString:i.value},ve(i,o)},ie=j.useState(!1),ge=ie[0],he=ie[1],O=j.useRef(null),F=j.useRef({setCaretTimeout:null,focusTimeout:null});j.useEffect(function(){return he(!0),function(){clearTimeout(F.current.setCaretTimeout),clearTimeout(F.current.focusTimeout)}},[]);var be=u,z=function(i,o){var d=parseFloat(o);return{formattedValue:i,value:o,floatValue:isNaN(d)?void 0:d}},_=function(i,o,d){i.selectionStart===0&&i.selectionEnd===i.value.length||(te(i,o),F.current.setCaretTimeout=setTimeout(function(){i.value===d&&i.selectionStart!==o&&te(i,o)},0))},R=function(i,o,d){return J(i,o,x(i),d)},H=function(i,o,d){var E=x(o),W=Ze(o,y,i,d,E,U,D);return W=J(o,W,E),W},Ne=function(i){var o=i.formattedValue;o===void 0&&(o="");var d=i.input,E=i.source,W=i.event,S=i.numAsString,N;if(d){var k=i.inputValue||d.value,C=ee(d);d.value=o,N=H(k,o,C),N!==void 0&&_(d,N,o)}o!==y&&ne(z(o,S),{event:W,source:E})};j.useEffect(function(){var i=G.current,o=i.formattedValue,d=i.numAsString;(y!==o||K!==d)&&ne(z(y,K),{event:void 0,source:$.props})},[y,K]);var pe=O.current?ee(O.current):void 0,xe=typeof window<"u"?j.useLayoutEffect:j.useEffect;xe(function(){var i=O.current;if(y!==G.current.formattedValue&&i){var o=H(G.current.formattedValue,y,pe);i.value=y,_(i,o,y)}},[y]);var Ee=function(i,o,d){var E=o.target,W=q.current?Je(q.current,E.selectionEnd):Ye(y,i),S=Object.assign(Object.assign({},W),{lastValue:y}),N=c(i,S),k=be(N);if(N=c(k,void 0),V&&!V(z(k,N))){var C=o.target,T=ee(C),X=H(i,y,T);return C.value=y,_(C,X,y),!1}return Ne({formattedValue:k,numAsString:N,inputValue:i,event:o,source:d,input:o.target}),!0},Q=function(i,o){o===void 0&&(o=0);var d=i.selectionStart,E=i.selectionEnd;q.current={selectionStart:d,selectionEnd:E+o}},Se=function(i){var o=i.target,d=o.value,E=Ee(d,i,$.event);E&&v(i),q.current=void 0},we=function(i){var o=i.target,d=i.key,E=o.selectionStart,W=o.selectionEnd,S=o.value;S===void 0&&(S="");var N;d==="ArrowLeft"||d==="Backspace"?N=Math.max(E-1,0):d==="ArrowRight"?N=Math.min(E+1,S.length):d==="Delete"&&(N=E);var k=0;d==="Delete"&&E===W&&(k=1);var C=d==="ArrowLeft"||d==="ArrowRight";if(N===void 0||E!==W&&!C){p(i),Q(o,k);return}var T=N;if(C){var X=d==="ArrowLeft"?"left":"right";T=R(S,N,X),T!==N&&i.preventDefault()}else d==="Delete"&&!U(S[N])?T=R(S,N,"right"):d==="Backspace"&&!U(S[N])&&(T=R(S,N,"left"));T!==N&&_(o,T,S),p(i),Q(o,k)},Pe=function(i){var o=i.target,d=function(){var E=o.selectionStart,W=o.selectionEnd,S=o.value;if(S===void 0&&(S=""),E===W){var N=R(S,E);N!==E&&_(o,N,S)}};d(),requestAnimationFrame(function(){d()}),m(i),Q(o)},je=function(i){i.persist&&i.persist();var o=i.target,d=i.currentTarget;O.current=o,F.current.focusTimeout=setTimeout(function(){var E=o.selectionStart,W=o.selectionEnd,S=o.value;S===void 0&&(S="");var N=R(S,E);N!==E&&!(E===0&&W===S.length)&&_(o,N,S),P(Object.assign(Object.assign({},i),{currentTarget:d}))},0)},Ue=function(i){O.current=null,clearTimeout(F.current.focusTimeout),clearTimeout(F.current.setCaretTimeout),s(i)},ye=ge&&He()?"numeric":void 0,oe=Object.assign({inputMode:ye},A,{type:r,value:y,onChange:Se,onKeyDown:we,onMouseUp:Pe,onFocus:je,onBlur:Ue});if(t==="text")return n?M.createElement(M.Fragment,null,n(y,A)||null):M.createElement("span",Object.assign({},A,{ref:l}),y);if(a){var Ve=a;return M.createElement(Ve,Object.assign({},oe,{ref:l}))}return M.createElement("input",Object.assign({},oe,{ref:l}))}function ir(e,r){var t=r.format,a=r.allowEmptyFormatting,n=r.mask,l=r.patternChar;if(l===void 0&&(l="#"),e===""&&!a)return"";for(var u=0,c=t.split(""),g=0,w=t.length;g<w;g++)t[g]===l&&(c[g]=e[u]||de(n,u),u+=1);return c.join("")}function or(e,r,t){r===void 0&&(r=Qe(e));var a=t.format,n=t.patternChar;n===void 0&&(n="#");var l=r.from,u=r.to,c=r.lastValue;c===void 0&&(c="");var g=function(s){return a[s]===n},w=function(s,b){for(var x="",U=0;U<s.length;U++)g(b+U)&&B(s[U])&&(x+=s[U]);return x},h=function(s){return s.replace(/[^0-9]/g,"")};if(!a.match(/\d/))return h(e);if((c===""||l.end-l.start===c.length)&&e.length===a.length){for(var V="",v=0;v<e.length;v++)if(g(v))B(e[v])&&(V+=e[v]);else if(e[v]!==a[v])return h(e);return V}var p=c.substring(0,l.start),m=e.substring(u.start,u.end),P=c.substring(l.end);return""+w(p,0)+h(m)+w(P,l.end)}function sr(e,r){var t=r.format,a=r.mask,n=r.patternChar;n===void 0&&(n="#");var l=Array.from({length:e.length+1}).map(function(){return!0}),u=0,c=-1,g={};t.split("").forEach(function(v,p){var m=void 0;v===n&&(u++,m=de(a,u-1),c===-1&&e[p]===m&&(c=p)),g[p]=m});for(var w=function(v){return t[v]===n&&e[v]!==g[v]},h=0,V=l.length;h<V;h++)l[h]=h===c||w(h)||w(h-1);return l[t.indexOf(n)]=!0,l}function lr(e){var r=e.mask;if(r){var t=r==="string"?r:r.toString();if(t.match(/\d/g))throw new Error("Mask "+r+" should not contain numeric character;")}}function ur(e,r){return e===""?!0:!(r!=null&&r.match(/\d/))&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function cr(e){e.mask,e.allowEmptyFormatting;var r=e.format,t=e.inputMode;t===void 0&&(t="numeric");var a=e.onKeyDown;a===void 0&&(a=I);var n=e.patternChar;n===void 0&&(n="#");var l=e.value,u=e.defaultValue,c=e.valueIsNumericString,g=fe(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);lr(e);var w=function(m){return sr(m,e)},h=function(m){var P=m.key,s=m.target,b=s.selectionStart,x=s.selectionEnd,U=s.value;if(b!==x){a(m);return}var D=b;if(P==="Backspace"||P==="Delete"){var A="right";if(P==="Backspace"){for(;D>0&&r[D-1]!==n;)D--;A="left"}else{for(var L=r.length;D<L&&r[D]!==n;)D++;A="right"}D=J(U,D,w(U),A)}else r[D]!==n&&P!=="ArrowLeft"&&P!=="ArrowRight"&&(D=J(U,D+1,w(U),"right"));D!==b&&te(s,D),a(m)},V=Y(l)?u:l,v=c??ur(V,r),p=Object.assign(Object.assign({},e),{valueIsNumericString:v});return Object.assign(Object.assign({},g),{value:l,defaultValue:u,valueIsNumericString:v,inputMode:t,format:function(m){return ir(m,p)},removeFormatting:function(m,P){return or(m,P,p)},getCaretBoundary:w,onKeyDown:h})}function mr(e){var r=cr(e);return M.createElement(nr,Object.assign({},r))}const fr=()=>{var P;const[e,r]=j.useState(null),[t,a]=j.useState({});j.useState(!1);const[n,l]=j.useState(!1);j.useEffect(()=>{(async()=>{if(Te("user_login"))try{const x=await re();a(x)}catch(x){console.error("Invalid token",x)}})()},[]);const{register:u,handleSubmit:c,formState:{errors:g},control:w,setValue:h}=_e({defaultValues:{userName:"",email:"",phone:"",country:null,city:"",shopName:"",pickupAddress:"",sellerEmail:"",sellerPhone:""}});j.useEffect(()=>{var s;(s=t==null?void 0:t.roles)!=null&&s.some(b=>b.roleName==="shop")?(async()=>{try{const x=await Oe();x?(r(x),V(x)):(r(null),v(t))}catch(x){console.error("Error fetching shop data",x),v(t)}})():v(t)},[t]);const V=s=>{h("shopName",s.shop_name||""),h("pickupAddress",s.address||""),h("sellerEmail",s.owner_id.email||""),h("sellerPhone",s.phone_number||""),h("userName",s.owner_id.userName||""),h("email",s.owner_id.email||""),h("phone",s.owner_id.phoneNumber||"")},v=s=>{console.log("userInfo",s),h("userName",s.userName||""),h("email",s.email||""),h("phone",s.phoneNumber||""),h("shopName",""),h("Address",s&&s.address||""),h("sellerEmail",""),h("sellerPhone","")},p=s=>{console.log(s),Ae.success("Profile updated successfully")},m=((P=t==null?void 0:t.roles)==null?void 0:P.map(s=>s.roleName))||[];return f.jsxDEV(ue,{className:"card flex flex-col gap-[30px] md:gap-12 md:row-start-2 md:col-span-2 md:!pb-[50px] xl:row-start-1 xl:col-start-2 xl:col-span-1",children:m.includes("admin")?f.jsxDEV("div",{className:"flex flex-col gap-5",children:[f.jsxDEV("h5",{children:"My Profile Details"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:118,columnNumber:11},globalThis),f.jsxDEV("form",{onSubmit:c(p),children:[f.jsxDEV("div",{className:"grid gap-4 md:grid-cols-1 md:gap-5",children:f.jsxDEV("div",{className:"grid gap-4",children:[f.jsxDEV("div",{className:"field-wrapper",children:[f.jsxDEV("label",{className:"field-label",htmlFor:"userName",children:"Name"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:123,columnNumber:19},globalThis),f.jsxDEV("input",{className:Z("field-input",{"field-input--error":g.userName}),type:"text",id:"userName",placeholder:t.userName||"Name",...u("userName",{required:!0})},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:126,columnNumber:19},globalThis),g.userName&&f.jsxDEV("p",{className:"error-message",children:"Name is required"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:131,columnNumber:39},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:122,columnNumber:17},globalThis),f.jsxDEV("div",{className:"field-wrapper",children:[f.jsxDEV("label",{className:"field-label",htmlFor:"email",children:"Email"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:135,columnNumber:19},globalThis),f.jsxDEV("input",{className:Z("field-input",{"field-input--error":g.email}),type:"text",id:"email",placeholder:t.email||"Email",...u("email",{required:!0,pattern:/^\S+@\S+$/i})},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:138,columnNumber:19},globalThis),g.email&&f.jsxDEV("p",{className:"error-message",children:"Valid email is required"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:144,columnNumber:36},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:134,columnNumber:17},globalThis),f.jsxDEV("div",{className:"field-wrapper",children:[f.jsxDEV("label",{className:"field-label",htmlFor:"phone",children:"Phone Number"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:148,columnNumber:19},globalThis),f.jsxDEV(Me,{name:"phone",control:w,render:({field:s})=>f.jsxDEV(mr,{value:s.value,format:"+#-###-###-####",placeholder:t.phoneNumber||"Phone Number",className:Z("field-input",{"field-input--error":g.phone}),getInputRef:s.ref},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:153,columnNumber:21},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:151,columnNumber:19},globalThis),g.phone&&f.jsxDEV("p",{className:"error-message",children:"Phone number is required"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:156,columnNumber:36},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:147,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:121,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:120,columnNumber:13},globalThis),f.jsxDEV("div",{className:"flex justify-between mt-2.5 w-full",children:[f.jsxDEV("div",{className:"flex w-full justify-between mt-2.5",children:f.jsxDEV("button",{className:"text-red font-bold",onClick:()=>l(!0),children:"Change Password"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:163,columnNumber:17},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:162,columnNumber:15},globalThis),f.jsxDEV("form",{onSubmit:c(p),className:"",children:f.jsxDEV("button",{className:"btn btn--primary w-full mt-5 md:w-fit md:px-[70px]",type:"submit",children:"Save Changes"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:169,columnNumber:17},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:168,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:161,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:119,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:117,columnNumber:38},globalThis):f.jsxDEV("div",{children:"Không có quyền truy cập"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:175,columnNumber:18},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/UserProfileDetails.jsx",lineNumber:116,columnNumber:10},globalThis)},Sr=()=>f.jsxDEV(f.Fragment,{children:[f.jsxDEV(Ie,{title:"Settings"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/GeneralSettings.jsx",lineNumber:9,columnNumber:13},globalThis),f.jsxDEV("div",{className:"widgets-grid xl:!grid-cols-[340px,_minmax(0,1fr)]",children:[f.jsxDEV(Be,{},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/GeneralSettings.jsx",lineNumber:11,columnNumber:21},globalThis),f.jsxDEV(fr,{},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/GeneralSettings.jsx",lineNumber:14,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/GeneralSettings.jsx",lineNumber:10,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/GeneralSettings.jsx",lineNumber:8,columnNumber:10},globalThis);export{Sr as default};