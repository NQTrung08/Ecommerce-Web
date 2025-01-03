import{a as s,U as c}from"./config-44cbe1ad.js";import{i as n}from"./index-f10ef397.js";const g=async(t,o,r)=>{try{const e=new FormData;e.append("parent_id",t),e.append("category_name",o),r&&e.append("file",r);const a=n("multipart/form-data");return(await s.post(`${c}category`,e,a)).data}catch(e){throw console.error("Failed to add category:",e),e}},l=async(t,{parent_id:o,category_name:r,file:e})=>{try{const a=new FormData;a.append("category_name",r),a.append("parent_id",o||""),e&&a.append("file",e);const i=n("multipart/form-data");return(await s.put(`${c}category/${t}`,a,i)).data}catch(a){throw console.error("Failed to update category:",a),a}},h=async t=>{try{const o=n("application/json");return(await s.delete(`${c}category/${t}`,o)).data}catch(o){throw console.error("Failed to delete category:",o),o}},f=async()=>{try{return(await s.get(`${c}category`)).data}catch(t){throw console.error("Failed to fetch categories",t),t}},u=async(t,o)=>{try{const r=n("application/json");return(await s.get(`${c}category/statistical?sortBy=${t}&order=${o}`,r)).data}catch(r){throw console.error("Failed to fetch category statistics",r),r}},w=async()=>{try{const t=n("application/json");return(await s.get(`${c}category/buildTree`,t)).data}catch(t){throw console.error("Failed to fetch category tree",t),t}},m=async({categoryIds:t,newParentId:o,newIndex:r})=>{try{const e=n("application/json");return(await s.put(`${c}category/move-node`,{categoryIds:t,newParentId:o,newIndex:r},e)).data}catch(e){throw console.error("Failed to fetch category tree",e),e}},F=async t=>{try{const o=n("application/json");return(await s.get(`${c}category/statistical/shop/${t}`,o)).data}catch(o){throw console.error("Failed to fetch category statistics",o),o}};export{g as a,l as b,w as c,h as d,u as e,f as g,F as s,m as u};