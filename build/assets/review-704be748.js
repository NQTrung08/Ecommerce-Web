import{a as t,U as s}from"./config-e16ab0ea.js";import{i as n}from"./index-cacf817c.js";const w=async()=>{try{const o=n("application/json");return(await t.get(`${s}review`,o)).data}catch(o){throw console.error("Failed to fetch reviews",o),o}},l=async o=>{try{const e=n("application/json");return(await t.get(`${s}review/shop/${o}`,e)).data}catch(e){throw console.error("Failed to fetch reviews",e),e}},h=async(o="admin",e="")=>{try{console.log("type",o,e);const r=n("application/json"),a={type:o};return o!=="admin"&&(a.id=e),(await t.post(`${s}review/count`,a,r)).data}catch(r){throw console.error("Failed to fetch reviews",r),r}};export{w as a,h as b,l as g};
