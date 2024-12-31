import{j as e}from"./mui-a50be5b6.js";import{R as i}from"./RatingStars-a495c0a4.js";import{S as r}from"./SubmenuTrigger-9cf6148c.js";import{T as d}from"./Timestamp-723259f5.js";import{T as n}from"./Trend-c0506e69.js";import{e as x,n as a}from"./helpers-f9dc12f1.js";import"./antd-4509dcf0.js";import{C as l}from"./Counter-dfd40b33.js";const N=[{title:"ID",dataIndex:"transactionNo",responsive:["lg"]},{title:"Phương thức",dataIndex:"method",responsive:["lg"]},{title:"Order id",dataIndex:"order_id",render:s=>e.jsx("span",{className:"capitalize",children:s})},{title:"Trạng thái",dataIndex:"status",render:s=>e.jsx("span",{className:"badge-status",style:{backgroundColor:`var(--${x(s)})`},children:s})},{title:"Tổng",dataIndex:"amount",render:s=>e.jsxs("span",{className:"font-heading font-semibold text-header",children:[s," VND"]})},{title:"Ngày & Giờ",dataIndex:"timestamp",render:s=>e.jsx(d,{date:s})}],u=[{title:"Seller",dataIndex:"seller",render:(s,t)=>e.jsxs("div",{className:"flex gap-[26px]",children:[e.jsx("div",{className:"img-wrapper flex items-center justify-center w-[63px] h-[63px] shrink-0",children:e.jsx("img",{className:"max-w-[50px]",src:t.logo,alt:t.name})}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("a",{className:"subheading-2",href:t.website,target:"_blank",rel:"noreferrer",children:"www.website.com"}),e.jsx("a",{className:"mt-3 mb-2.5",href:`tel:${t.phone}`,children:t.phone}),e.jsx("a",{href:`mailto:${t.email}`,children:t.email})]})]})},{title:"Orders value",dataIndex:"ordersValue",render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(l,{className:"h3",num:65874}),e.jsx("span",{className:"label-text mt-0.5 mb-2.5",children:"New orders"}),e.jsx(n,{value:55.96})]}),responsive:["lg"]},{title:"Income value",dataIndex:"incomeValue",render:()=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx(l,{className:"h3",num:23e3,prefix:"$",isFormatted:!0}),e.jsx("span",{className:"label-text mt-0.5 mb-2.5",children:"Income"}),e.jsx(n,{value:14.56})]}),responsive:["lg"]},{title:"Review rate",dataIndex:"rating",render:s=>e.jsx(i,{rating:s})},{title:"Sales categories value",dataIndex:"salesCategoriesValue",render:(s,t)=>e.jsxs("div",{className:"flex flex-col gap-2.5 max-w-[220px]",children:[e.jsxs("div",{className:"flex justify-between font-heading font-bold text-sm",children:[e.jsx("span",{children:"Electronics"}),e.jsx("span",{className:"text-header text-right",children:a(t.profit.electronics,2,"$")})]}),e.jsxs("div",{className:"flex justify-between font-heading font-bold text-sm",children:[e.jsx("span",{children:"Fashion"}),e.jsx("span",{className:"text-header text-right",children:a(t.profit.fashion,2,"$")})]}),e.jsxs("div",{className:"flex justify-between font-heading font-bold text-sm",children:[e.jsx("span",{children:"Food & Drinks"}),e.jsx("span",{className:"text-header text-right",children:a(t.profit.food,2,"$")})]}),e.jsxs("div",{className:"flex justify-between font-heading font-bold text-sm",children:[e.jsx("span",{children:"Services"}),e.jsx("span",{className:"text-header text-right",children:a(t.profit.services,2,"$")})]})]}),responsive:["xl"]},{title:"Other",dataIndex:"other",render:()=>e.jsxs("div",{className:"flex items-center justify-end gap-5",children:[e.jsx("button",{"aria-label":"Edit",children:e.jsx("i",{className:"icon icon-pen-to-square-regular text-lg leading-none"})}),e.jsx(r,{})]})}];export{u as S,N as T};
