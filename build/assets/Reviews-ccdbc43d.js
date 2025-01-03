import{j as e}from"./mui-a50be5b6.js";import{r as n,N}from"./antd-4509dcf0.js";import{g as b,a as S,b as R}from"./review-704be748.js";import{P as y}from"./PageHeader-2b351038.js";import{S as j}from"./Spring-81dcc22e.js";import{S as C}from"./index-23a69d03.js";import{S as D}from"./SubmenuTrigger-9cf6148c.js";import{R as g}from"./RatingStars-a495c0a4.js";import{T as M}from"./Timestamp-723259f5.js";import{u as T,T as E}from"./web-70c72b96.js";import{f as P,u as Y,M as _,h as w,R as h,L as k}from"./index-cacf817c.js";import"./moment-a9aaa855.js";import{u as A,P as F}from"./Pagination-ed977979.js";import"./config-e16ab0ea.js";import"./DocumentTitle-0f80adc2.js";const f=({data:s,wrapperClass:l})=>(console.log("data",s),e.jsxs("div",{className:`flex items-center ${l}`,children:[e.jsx("img",{className:"bg-input-border shrink-0 w-10 h-10 rounded-md md:w-[63px] md:h-[63px]",src:s.user.avatar,alt:`${s.user.full_name}`,width:63,height:63}),e.jsxs("div",{className:"flex flex-col gap-1.5 md:gap-2.5",children:[e.jsx("h6",{className:"truncate max-w-[120px] xs:max-w-[180px]",children:s.user.full_name}),e.jsx("a",{className:"text-btn",href:`mailto:${s.user.email}`,children:e.jsx("span",{className:"truncate max-w-[120px] xs:max-w-[180px]",children:s.user.email})})]})]})),I=({data:s,index:l=0})=>{const{theme:x}=P(),{width:r}=Y(),[d,{width:p}]=T(),i=x==="light"?"var(--body)":"rgba(39,50,65,.2)",[u,o]=n.useState(!1);return n.useEffect(()=>{o(!1)},[r]),e.jsxs(j,{index:l,children:[e.jsx("div",{className:"p-5",style:{backgroundColor:l%2===0?i:"var(--widget)"},children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(f,{data:s,wrapperClass:"gap-5 md:gap-[30px] md:w-[300px]"}),r>=768&&e.jsxs("div",{className:"flex items-center gap-[18px] xl:ml-[30px] xl:mr-10 xl:w-[200px]",children:[e.jsx(g,{rating:s.rating}),e.jsx("span",{className:"label-text",children:s.rating})]}),r>=1280&&e.jsxs("div",{className:"flex flex-1 gap-5 bg-input-bg border border-input-border h-20 rounded-md max-w-[588px] p-4 overflow-hidden",children:[e.jsx("div",{className:"flex-1 max-w-[513px]",ref:d,children:e.jsx(E,{className:"flex-1",text:s.comment,width:p})}),e.jsx("button",{className:"self-start icon text-[18px] mt-1",onClick:()=>o(!0),"aria-label":"See details",children:e.jsx("i",{className:"icon-message-arrow-up-right-regular"})})]}),r>=1024&&e.jsx(M,{date:s==null?void 0:s.date,wrapperClass:"xl:ml-[30px] xl:mr-[75px]"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("button",{className:"icon text-[18px] mt-0.5 xl:hidden",onClick:()=>o(!0),"aria-label":"See details",children:e.jsx("i",{className:"icon-message-arrow-up-right-regular"})}),e.jsx(D,{})]})]})}),e.jsx(_,{open:u,onClose:()=>o(!1),children:e.jsxs("div",{className:"card relative no-hover flex flex-col w-full max-w-[400px] will-change-transform",children:[e.jsx("button",{className:"absolute top-5 right-5 icon text-[18px] transition hover:text-red",onClick:()=>o(!1),"aria-label":"Close",children:e.jsx("i",{className:"icon-circle-xmark-regular"})}),e.jsx(f,{data:s,wrapperClass:"gap-4 mb-5"}),e.jsxs("p",{className:"flex gap-4 mb-2",children:[e.jsx("span",{className:"label-text",children:"Ngày: "}),e.jsx("span",{className:"text-sm font-medium",children:N(s.date,"HH:mm DD/MM/YYYY").format("DD/MM/YYYY, HH:mm")})]}),e.jsxs("div",{className:"flex gap-4 mb-6",children:[e.jsx("span",{className:"label-text",children:"Đánh giá:"}),e.jsx(g,{rating:s.rating})]}),e.jsx("div",{className:"bg-input-bg rounded-md border border-input-border h-[240px] p-4 overflow-y-auto",children:s.comment})]})})]})},H=({reviews:s,totalCount:l,avgRating:x})=>{const{slug:r}=w(),[d,p]=n.useState(s||[]),[i,u]=n.useState(h[0]);n.useEffect(()=>{r&&(async()=>{try{const a=await b(r);console.log("reviewForShop",a),p(a)}catch(a){console.error("Error fetching reviews:",a)}})()},[r,s]);const o=[...d].sort((t,a)=>i.value==="recent"?new Date(a.createdAt)-new Date(t.createdAt):i.value==="oldest"?new Date(t.createdAt)-new Date(a.createdAt):i.value==="rating-high-to-low"?a.rating-t.rating:i.value==="rating-low-to-high"?t.rating-a.rating:0),c=A(o,10);return e.jsxs(j,{className:"flex flex-1 flex-col gap-[26px]",children:[e.jsxs("div",{className:"flex w-full justify-end items-center",children:[e.jsxs("div",{className:"text-md font-medium flex gap-1 items-center",children:["Đánh giá:",e.jsx("span",{className:"text-amber-400 text-lg",children:x}),"(",l,")"]}),e.jsx("div",{className:"flex",children:e.jsx(C,{value:i,onChange:u,options:h,variant:"minimal"})})]}),e.jsxs("div",{className:"card !p-0 flex-1",children:[e.jsx("span",{className:"block h-[1px] bg-input-border opacity-60"}),e.jsxs("div",{children:[console.log("pagination.currentItems()",c.currentItems()),c.currentItems().length!==0?c.currentItems().map((t,a)=>e.jsx(I,{data:{id:t._id,product:t.product_id,user:t.user_id,rating:t.rating,comment:t.comment,date:t.createdAt},index:a},`${i.value}-${t._id}`)):e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-center py-4 text-rose-500 text-2xl",children:"Chưa có đánh giá"})})]})]}),c.maxPage>1&&e.jsx(F,{pagination:c})]})},ee=()=>{const{slug:s}=w(),[l,x]=n.useState([]),[r,d]=n.useState([]),[p,i]=n.useState(!0);n.useEffect(()=>{(async()=>{try{const t=s?"shop":"admin",a=s||"",m=await S();x(m);const v=await R(t,a);d(v)}catch(t){console.error("Failed to fetch reviews",t)}finally{i(!1)}})()},[s]);const u=n.useMemo(()=>l.length,[l]),o=n.useMemo(()=>{const c=r.reduce((a,m)=>a+m.rating*m.count,0),t=r.reduce((a,m)=>a+m.count,0);return t>0?(c/t).toFixed(1):"0.00"},[r]);return p?e.jsx(k,{}):e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Đánh giá"}),e.jsx("div",{className:"flex flex-col flex-1 gap-5 md:gap-[26px]",children:e.jsx(H,{reviews:l,totalCount:u,avgRating:o})})]})};export{ee as default};