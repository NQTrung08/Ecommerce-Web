import{j as o}from"./index-3f5be7ce.js";import{a as m,J as t}from"./antd-b3df3d09.js";const f=(e,a=10)=>{const[n,r]=m.useState(0),c=Math.ceil(e.length/a),i=()=>{const s=n*a,l=s+a;return e.slice(s,l)};return m.useEffect(()=>{n>c-1?r(c-1):n<0&&c>0&&r(0)},[i()]),{next:()=>{r(s=>Math.min(s+1,c))},prev:()=>{r(s=>Math.max(s-1,0))},goToPage:s=>{const l=Math.max(0,s);r(()=>Math.min(l,c))},showingOf:()=>{const s=n*a,l=e.length>a?s+a:e.length;return e.length>0?o.jsxDEV(o.Fragment,{children:[o.jsxDEV("span",{className:"font-semibold",children:l},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/hooks/usePagination.jsx",lineNumber:32,columnNumber:17},globalThis),"/",e.length]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/hooks/usePagination.jsx",lineNumber:31,columnNumber:30},globalThis):""},currentItems:i,currentPage:n,setCurrentPage:r,maxPage:c}},v=({pagination:e})=>{const a=e.maxPage;return o.jsxDEV("div",{className:"flex flex-wrap items-center gap-[18px] pb-6 border-b border-input-border",children:[e.currentPage>0&&o.jsxDEV("button",{onClick:e.prev,"aria-label":"Previous page",children:o.jsxDEV("i",{className:"icon icon-chevrons-left-solid"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/ui/Pagination.jsx",lineNumber:8,columnNumber:21},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/ui/Pagination.jsx",lineNumber:7,columnNumber:44},globalThis),o.jsxDEV("div",{className:"flex flex-wrap gap-2.5",children:[...Array(a)].map((n,r)=>o.jsxDEV("button",{className:t("page-btn subheading-2",{active:r===e.currentPage}),onClick:()=>e.goToPage(r),disabled:e.currentPage===r,"aria-label":`Page ${r+1}`,children:r+1},r,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/ui/Pagination.jsx",lineNumber:12,columnNumber:16},globalThis))},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/ui/Pagination.jsx",lineNumber:10,columnNumber:13},globalThis),e.currentPage<a-1&&o.jsxDEV("button",{onClick:e.next,disabled:e.currentPage+1===e.maxPage,"aria-label":"Next page",children:o.jsxDEV("i",{className:"icon icon-chevrons-right-solid"},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/ui/Pagination.jsx",lineNumber:20,columnNumber:21},globalThis)},void 0,!1,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/ui/Pagination.jsx",lineNumber:19,columnNumber:52},globalThis)]},void 0,!0,{fileName:"/Users/manh/WorkSpoce/Private/Ecommerce-Web/src/ui/Pagination.jsx",lineNumber:6,columnNumber:10},globalThis)};export{v as P,f as u};
