import{g as s}from"./review-30417aa0.js";import{s as i}from"./categorie-f2736a83.js";import{G as m}from"./shop-428a3f5c.js";let r=[];const c=async()=>{try{const e=await m();if(!e||!e.shops){console.error("No shops data received");return}const t=await Promise.all(e.shops.map(o=>i(o._id))),n=await Promise.all(e.shops.map(o=>s(o._id)));r=e.shops.map((o,a)=>({id:o._id,logo:o.logo,name:o.shop_name,website:o.website||"",address:o.address,phone:o.phone_number,email:`${o.owner_id.userName.toLowerCase().replace(/\s+/g,"")}@gmail.com`,rating:Math.floor(Math.random()*5)+1,profit:t[a]||[],sales:Math.floor(Math.random()*1e5),totalOrdersEcommerce:o.order_count,totalRevenueEcommerce:o.total_revenue}))}catch(e){console.error("Error fetching sellers or statistics:",e)}};c();const l=()=>r;export{c as f,l as g};
