import{P as c}from"./index-cacf817c.js";const l=(e,s)=>{const r=e.reduce((t,a)=>t+a.value,0);return Math.round(s/r*100)},g=(e,s=0,r="")=>{const t={minimumFractionDigits:s,maximumFractionDigits:s};if(e>999&&e<1e6){const a=(e/1e3).toLocaleString(void 0,t);return`${r}${a}k`}else if(e>1e6){const a=(e/1e6).toLocaleString(void 0,t);return`${r}${a}m`}else if(e<900)return`${r}${e}`},u=e=>{var s;return(s=e==null?void 0:e.toString())==null?void 0:s.replace(/\B(?=(\d{3})+(?!\d))/g,",")},d=(e,s=20,r="y")=>{let n=[];for(let o=0;o<(r==="y"?1e3:400);o+=s)n.push(o);return n},h=(e,s)=>{switch(s){default:case"best-selling":return e.sort((r,t)=>t.sold-r.sold);case"available":return e.sort((r,t)=>t.in_stock-r.in_stock);case"price-low-to-high":return e.sort((r,t)=>r.regular_price-t.regular_price);case"price-high-to-low":return e.sort((r,t)=>t.regular_price-r.regular_price)}},m=(e,s)=>{switch(s){case"best-selling":return e.sort((r,t)=>t.sales-r.sales);case"rating-high-to-low":return e.sort((r,t)=>t.rating-r.rating);case"rating-low-to-high":return e.sort((r,t)=>r.rating-t.rating);case"a-z":return e.sort((r,t)=>r.name.localeCompare(t.name));case"z-a":return e.sort((r,t)=>t.name.localeCompare(r.name));default:return e}},f=e=>c.find(s=>s.value===e),p=e=>{switch(e){default:case"approved":case"completed":return"accent";case"waiting":case"confirmed":return"green";case"cancelled":return"red";case"rejected":case"refunded":return"badge-status-bg"}};export{d as a,f as b,u as c,h as d,p as e,l as g,g as n,m as s};
