import{_ as W,t as S,j as e,i as k,u as P,T as x,g as D}from"./index-f10ef397.js";import{P as U}from"./PageHeader-bcdf1bbb.js";import{T as C,N as t,a as m}from"./antd-2f34d53b.js";import{S as V}from"./Spring-f5e22a72.js";import{S as I}from"./index-40ee51bc.js";import{u as w,P as y}from"./Pagination-56a7e98e.js";import{P as u,C as _}from"./mui-8e3bcfed.js";import{e as F}from"./helpers-537592ac.js";import{E as R}from"./Empty-80f694d4.js";import{T as A}from"./columnDefs-86aa2bab.js";import{a as O,U as $}from"./config-44cbe1ad.js";import"./DocumentTitle-eca67fa7.js";import"./RatingStars-8d5a43fd.js";import"./SubmenuTrigger-34722d31.js";import"./Timestamp-a5b0aa3a.js";import"./Trend-ae5331c9.js";import"./Counter-053bdc55.js";const L=W(C).withConfig({displayName:"styles__StyledTable",componentId:"sc-kirxdx-0"})(["margin-bottom:26px;flex-grow:1;.ant-table-thead{position:relative;&::after{content:'';position:absolute;left:0;bottom:0;height:1px;width:100%;opacity:.6;background:var(--input-border);}.ant-table-cell{background:var(--widget) !important;padding:30px 26px 24px !important;border:none !important;}}.ant-table-tbody{tr:nth-child(odd) .ant-table-cell{background:"," !important;}tr:nth-child(even) .ant-table-cell{background:var(--widget) !important;}.ant-table-cell{border:none;padding:24px 26px 26px;}}"],S("theme",{light:"var(--body)",dark:"rgba(39, 50, 65, .2)"})),T=({transaction:s,activeCollapse:n,handleCollapse:o})=>{var l,b,c;return console.log("transaction",s),e.jsxDEV("div",{className:"card",children:[e.jsxDEV("div",{className:"flex items-center justify-between",children:[e.jsxDEV("div",{className:"flex items-center gap-[18px]",children:[e.jsxDEV("div",{className:"img-wrapper w-[40px] h-[40px] flex items-center justify-center shrink-0",children:e.jsxDEV("img",{className:"max-w-[30px]",src:(l=s==null?void 0:s.seller)==null?void 0:l.logo,alt:(b=s==null?void 0:s.seller)==null?void 0:b.name},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:18,columnNumber:25},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:17,columnNumber:21},globalThis),e.jsxDEV("span",{className:"h6 hidden truncate xs:inline",children:(c=s==null?void 0:s.seller)==null?void 0:c.name},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:20,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:16,columnNumber:17},globalThis),e.jsxDEV("div",{className:"flex items-center gap-2.5 shrink-0",children:[e.jsxDEV("p",{className:"text-sm font-medium",children:t(s==null?void 0:s.timestamp).format("DD.MM.YY, hh:mm")},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:23,columnNumber:21},globalThis),e.jsxDEV("button",{className:`collapse-btn ${n===(s==null?void 0:s.sku)?"active":""}`,"aria-label":"Toggle view",onClick:()=>o(s==null?void 0:s.sku),children:e.jsxDEV("i",{className:"icon icon-caret-down-solid"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:25,columnNumber:25},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:24,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:22,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:15,columnNumber:13},globalThis),e.jsxDEV(_,{in:n===s.sku,children:e.jsxDEV("table",{className:"basic-table",children:e.jsxDEV("tbody",{children:[e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"SKU"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:33,columnNumber:25},globalThis),e.jsxDEV("td",{children:s.sku},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:34,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:32,columnNumber:21},globalThis),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Method"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:37,columnNumber:25},globalThis),e.jsxDEV("td",{children:s.method},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:38,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:36,columnNumber:21},globalThis),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Type"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:41,columnNumber:25},globalThis),e.jsxDEV("td",{className:"capitalize",children:s.type},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:42,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:40,columnNumber:21},globalThis),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Status"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:45,columnNumber:25},globalThis),e.jsxDEV("td",{children:e.jsxDEV("span",{className:"badge-status",style:{backgroundColor:`var(--${F(s.status)})`,width:"100%"},children:s.status},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:47,columnNumber:29},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:46,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:44,columnNumber:21},globalThis),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Country"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:56,columnNumber:25},globalThis),e.jsxDEV("td",{children:s.country},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:57,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:55,columnNumber:21},globalThis),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Currency"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:60,columnNumber:25},globalThis),e.jsxDEV("td",{children:s.currency},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:61,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:59,columnNumber:21},globalThis),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Fee"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:64,columnNumber:25},globalThis),e.jsxDEV("td",{children:["$",s.fee]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:65,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:63,columnNumber:21},globalThis),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Tax"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:68,columnNumber:25},globalThis),e.jsxDEV("td",{children:s.tax},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:69,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:67,columnNumber:21},globalThis),e.jsxDEV("tr",{children:[e.jsxDEV("td",{children:"Total"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:72,columnNumber:25},globalThis),e.jsxDEV("td",{children:["$",(s.fee-s.fee/100*s.tax).toFixed(2)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:73,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:71,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:31,columnNumber:21},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:30,columnNumber:17},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:29,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/components/TransactionCollapseItem.jsx",lineNumber:14,columnNumber:10},globalThis)};T.propTypes={transaction:u.object.isRequired,activeCollapse:u.string.isRequired,handleCollapse:u.func.isRequired};const M=async()=>{try{const s=k("application/json");return(await O.get(`${$}transaction`,s)).data}catch(s){throw console.error("Failed to fetch reviews",s),s}},q=async()=>{try{return(await M()).map((o,l)=>({sku:o.transactionNo,timestamp:new Date(o.createdAt),method:o.bankCode,type:o.transactionStatus||"unknown",status:o.responseCode==="00"?"Thành công":"Thất bại",amount:o.amount,id:o._id,order_id:o.order_id,transactionNo:o.transactionNo}))}catch(s){throw console.error("Failed to fetch transactions",s),s}},K=()=>{const{width:s}=P(),[n,o]=m.useState(""),[l,b]=m.useState(x[0]),[c,f]=m.useState([]),[v,p]=m.useState([]),[g,d]=m.useState(!0),[h,j]=m.useState(null),i=w(v,6);m.useEffect(()=>{(async()=>{try{const a=await q();f(a),p(a),d(!1)}catch(a){j(a),d(!1)}})()},[]),m.useEffect(()=>{const r=[...c].sort((a,N)=>l.value==="recent"?t(N.timestamp).isBefore(t(a.timestamp))?1:-1:l.value==="oldest"?t(a.timestamp).isBefore(t(N.timestamp))?1:-1:0);p(r)},[c,l]);const E=r=>{o(a=>a===r?"":r)};return g?e.jsxDEV(D,{},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:55,columnNumber:23},globalThis):h?e.jsxDEV("div",{children:h},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:56,columnNumber:21},globalThis):e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"flex flex-col gap-4 mb-5 md:flex-row justify-between",children:e.jsxDEV("div",{className:" gap-2.5 md:min-w-[220px] flex flex-row justify-between items-center",children:[e.jsxDEV("p",{className:"md:text-right",children:["Xem giao dịch: ",i.showingOf()]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:60,columnNumber:11},globalThis),e.jsxDEV(I,{options:x,value:l,onChange:b},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:63,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:59,columnNumber:9},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:58,columnNumber:7},globalThis),e.jsxDEV(V,{className:"flex flex-col flex-1",children:[s>=768?e.jsxDEV(L,{columns:A,dataSource:i.currentItems(),rowKey:r=>r.sku,locale:{emptyText:e.jsxDEV(R,{text:"Không tìm thấy giao dịch nào"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:68,columnNumber:20},globalThis)},pagination:!1},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:67,columnNumber:25},globalThis):e.jsxDEV("div",{className:"flex flex-1 flex-col gap-5 mb-[26px]",children:i.currentItems().map(r=>e.jsxDEV(T,{handleCollapse:E,activeCollapse:n,transaction:r},r.sku,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:70,columnNumber:52},globalThis))},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:69,columnNumber:34},globalThis),i.maxPage>1&&e.jsxDEV(y,{pagination:i},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:72,columnNumber:36},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:66,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/widgets/TransactionsTable/index.jsx",lineNumber:57,columnNumber:10},globalThis)},ce=()=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV(U,{title:"Giao dịch"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/Transactions.jsx",lineNumber:6,columnNumber:7},globalThis),e.jsxDEV(K,{},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/Transactions.jsx",lineNumber:7,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/pages/Transactions.jsx",lineNumber:5,columnNumber:10},globalThis);export{ce as default};