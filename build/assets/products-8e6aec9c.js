import{j as e}from"./mui-a50be5b6.js";import{P as l,N as o}from"./index-cacf817c.js";import{S as d}from"./Spring-81dcc22e.js";import{S as p}from"./SubmenuTrigger-9cf6148c.js";import{R as m}from"./RatingStars-a495c0a4.js";const ye=({category:s})=>{const{label:i,icon:a,color:r}=l.find(c=>c.value===s);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`badge-icon badge-icon--sm bg-${r}`,children:e.jsx("i",{className:`${a} text-base`})}),e.jsx("h5",{children:i})]})},we=({product:s,index:i,isSlide:a})=>{const r=a?"div":d,c=a?{}:{type:"slideUp",index:i};return e.jsxs(r,{className:"card flex flex-col h-full",...c,children:[e.jsxs("div",{className:"flex items-start gap-[14px] mb-2.5",children:[e.jsx("div",{className:"img-wrapper flex flex-1 items-center justify-center",children:e.jsx("img",{src:s.img,alt:s.name})}),e.jsx(p,{})]}),e.jsx(o,{className:`h6 !leading-[1.4] block max-w-[180px] transition hover:text-accent ${a?"mb-3":""}`,to:"/product-editor",children:s.name}),a&&e.jsx(m,{rating:s.rating}),e.jsxs("div",{className:`flex flex-col flex-1 ${a?"gap-1 mt-1.5":"gap-2.5 mt-2.5"}`,children:[e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4] ",children:["Available : ",s.in_stock||0]}),e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4] text-accent",children:["Already sold : ",s.sold||0]}),!a&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4]",children:["Regular price : $",s.regular_price||0]}),e.jsxs("p",{className:"font-heading font-bold text-sm leading-[1.4]",children:["Sale price : $",s.sale_price||0]})]})]}),!a&&e.jsxs("div",{className:"grid grid-cols-2 gap-1.5 mt-4",children:[e.jsxs(o,{className:"btn btn--outline blue !text-sm",to:"/product-editor",children:[e.jsx("i",{className:"icon icon-pen-solid text-xs"})," Edit"]}),e.jsx("button",{className:"btn btn--outline red !text-sm",children:"Delete"})]})]})},_="/assets/1-a5b55edd.webp",u="/assets/2-12c6c318.webp",b="/assets/3-d5673d3b.webp",f="/assets/4-9e53896c.webp",k="/assets/5-b997690a.webp",y="/assets/6-1bf0208c.webp",w="/assets/7-35675baf.webp",x="/assets/8-36f2f0b9.webp",h="/assets/9-a552ddf2.webp",P="/assets/10-64c4eace.webp",C="/assets/11-31095afb.webp",S="/assets/12-5caa90c7.webp",G="/assets/13-1b298eda.webp",v="/assets/14-c69a7962.webp",N="/assets/15-c5d5681e.webp",j="/assets/16-ba32fe71.webp",B="/assets/17-80ecb985.webp",R="/assets/18-65945347.webp",E="/assets/19-c258ced2.webp",A="/assets/20-11da2a39.webp",L="/assets/21-9c59d1b5.webp",T="/assets/22-b167e8f2.webp",M="/assets/23-4ebe31a9.webp",D="/assets/24-a7e5e415.webp",I="/assets/1-9d38357c.webp",U="/assets/2-1cb5f451.webp",F="/assets/3-76e23e72.webp",H="/assets/4-7372d36a.webp",O="/assets/5-86804ed2.webp",W="/assets/6-9ac74e2b.webp",V="/assets/7-c47d51d7.webp",X="/assets/8-841c811e.webp",$="/assets/9-f3b609f4.webp",Q="/assets/10-a6560d29.webp",Y="/assets/11-1b86b810.webp",K="/assets/12-ac2bf7cf.webp",J="/assets/13-fbf5d9c1.webp",q="/assets/14-1b346b9c.webp",z="/assets/15-648993ec.webp",Z="/assets/16-200a73ff.webp",ee="/assets/17-fb73c659.webp",se="/assets/18-434ab85a.webp",ae="/assets/1-20be7ef2.webp",ie="/assets/2-abd7e342.webp",re="/assets/3-10e03a58.webp",ce="/assets/4-f5e94c7f.webp",oe="/assets/5-0f622d0c.webp",te="/assets/6-87cedde3.webp",ne="/assets/7-3c760cb1.webp",ge="/assets/8-70121b82.webp",le="/assets/9-ec37fdca.webp",de="/assets/10-02fce6a5.webp",pe="/assets/11-b0648675.webp",me="/assets/12-db75346a.webp",t="/assets/1-9e09346d.webp",n="/assets/2-37a25895.webp",g="/assets/3-5b518470.webp",xe=[{id:"product-1",name:"Oculus Quest 2 VR Headset 64 GB",img:_,category:"electronics",in_stock:1548,sold:274,regular_price:600,sale_price:559,rating:4.5},{id:"product-2",name:"Nintendo Switch Gaming Console",img:u,category:"electronics",in_stock:566,sold:414,regular_price:499,sale_price:399,rating:5},{id:"product-3",name:"Xiaomi WiFI Repeater Pro",img:b,category:"electronics",in_stock:2471,sold:366,regular_price:199,sale_price:159,rating:4.5},{id:"product-4",name:"AMD Ryzen 7 5700X Processor Zen 3",img:f,category:"electronics",in_stock:102,sold:1923,regular_price:300,sale_price:289,rating:4},{id:"product-5",name:"Aorus Radeon RX 6750 XT GPU",img:k,category:"electronics",in_stock:27,sold:662,regular_price:620,sale_price:599,rating:5},{id:"product-6",name:"Xbox Series X Gaming Console",img:y,category:"electronics",in_stock:1006,sold:19874,regular_price:599,sale_price:579,rating:5},{id:"product-7",name:"Logi Wireless Keyboard",img:w,category:"electronics",in_stock:5,sold:15,regular_price:199,sale_price:149,rating:3.5},{id:"product-8",name:"ARTLINE Overlord Gaming PC",img:x,category:"electronics",in_stock:95,sold:118,regular_price:1199,sale_price:1099,rating:4.5},{id:"product-9",name:"ARTLINE Samurai Gaming PC",img:h,category:"electronics",in_stock:21,sold:7,regular_price:3599,sale_price:3499,rating:5},{id:"product-10",name:"PlayStation 5 Gaming Console",img:P,category:"electronics",in_stock:202,sold:58741,regular_price:699,sale_price:599,rating:5},{id:"product-11",name:"SteamDeck Gaming Console 64 GB",img:C,category:"electronics",in_stock:369,sold:22941,regular_price:499,sale_price:449,rating:5},{id:"product-12",name:"A4 Naraka Gaming Pro Keyboard",img:S,category:"electronics",in_stock:2,sold:651,regular_price:189,sale_price:139,rating:3.5},{id:"product-13",name:"Triple Camera - Infrared Night Vision",img:G,category:"electronics",in_stock:19,sold:46,regular_price:199,sale_price:149,rating:4},{id:"product-14",name:"iPhone 13 Pro Max 512 GB Silver",img:v,category:"electronics",in_stock:95,sold:118,regular_price:1199,sale_price:1099,rating:4.5},{id:"product-15",name:"Reference Premiere Monitor Speakers",img:N,category:"electronics",in_stock:502,sold:217,regular_price:89,sale_price:69,rating:3},{id:"product-16",name:"ELITE LCD Display Liquid CPU Cooler",img:j,category:"electronics",in_stock:6641,sold:20053,regular_price:600,sale_price:569,rating:4.5},{id:"product-17",name:"Smart Watches Sport Edition",img:B,category:"electronics",in_stock:361,sold:80,regular_price:239,sale_price:199,rating:4},{id:"product-18",name:"iPhone 12 Pro Max 512 GB Silver",img:R,category:"electronics",in_stock:1152,sold:10802,regular_price:1199,sale_price:1099,rating:4.5},{id:"product-19",name:"iPhone 13 Pro Max 512 GB Gold",img:E,category:"electronics",in_stock:5221,sold:36874,regular_price:1199,sale_price:1099,rating:5},{id:"product-20",name:"HTC VIVE Pro 2 VR Headset - 99HASW ",img:A,category:"electronics",in_stock:362,sold:292,regular_price:119,sale_price:99,rating:4},{id:"product-21",name:'Samsung Odyssey G9 27" QHD',img:L,category:"electronics",in_stock:995,sold:10452,regular_price:499,sale_price:449,rating:3.5},{id:"product-22",name:'HiPad Max 10.36" Screen Qualcomm',img:T,category:"electronics",in_stock:16,sold:258,regular_price:499,sale_price:399,rating:4},{id:"product-23",name:"Quadcopter UAV with 4K Camera",img:M,category:"electronics",in_stock:0,sold:3471,regular_price:399,sale_price:389,rating:4.5},{id:"product-24",name:'Acer GVB708 15" Laptop Silver',img:D,category:"electronics",in_stock:52,sold:954,regular_price:1599,sale_price:1499,rating:4},{id:"product-25",name:"Egoiste Arabica Coffee Beans 1kg",img:I,category:"food",in_stock:465,sold:1544,regular_price:19.99,sale_price:17.99,rating:5},{id:"product-26",name:"Coca Cola 330ml Can 24 Pack",img:U,category:"food",in_stock:10025,sold:265874,regular_price:9.99,sale_price:8.99,rating:5},{id:"product-27",name:"Spry Chewing Gum 100 Pack Mint",img:F,category:"food",in_stock:8014,sold:9845,regular_price:1.99,sale_price:1.69,rating:5},{id:"product-28",name:"Monster Energy The Doctor 12 Pack",img:H,category:"food",in_stock:10025,sold:265874,regular_price:9.99,sale_price:8.99,rating:5},{id:"product-29",name:"Evian Mineral Water 24 Pack 500ml",img:O,category:"food",in_stock:117,sold:20045,regular_price:19.99,sale_price:18.99,rating:5},{id:"product-30",name:"Shweppes Lemon 375ml 24 Pack",img:W,category:"food",in_stock:561,sold:15231,regular_price:9.99,sale_price:8.99,rating:4.5},{id:"product-31",name:"Dolce Gusto Cappuccino 16 Pack",img:V,category:"food",in_stock:566,sold:6622,regular_price:19.99,sale_price:18.99,rating:4},{id:"product-32",name:"BeGood Foods Black Quinoa 500g",img:X,category:"food",in_stock:482,sold:19,regular_price:5.99,sale_price:3.99,rating:5},{id:"product-33",name:"Nordic Oats Gluten Free 1kg Bag",img:$,category:"food",in_stock:6418,sold:9841,regular_price:3.99,sale_price:2.99,rating:3},{id:"product-34",name:"Jacobs Milka Instant Coffee 500g",img:Q,category:"food",in_stock:365,sold:24,regular_price:3.99,sale_price:2.99,rating:5},{id:"product-35",name:"Goodwill Sanca Olive Oil 5L",img:Y,category:"food",in_stock:488,sold:236,regular_price:29.99,sale_price:27.99,rating:2.5},{id:"product-36",name:"Pergale Picks Strawberry 1kg",img:K,category:"food",in_stock:66,sold:82,regular_price:3.99,sale_price:2.99,rating:4.5},{id:"product-37",name:"Skittles Fruitty Family Pack",img:J,category:"food",in_stock:564,sold:1584,regular_price:9.99,sale_price:8.99,rating:5},{id:"product-38",name:"Jelly Bean Assortment Cup",img:q,category:"food",in_stock:966,sold:405,regular_price:6.99,sale_price:3.99,rating:4},{id:"product-39",name:"M&M Peanut Chocolate 1kg",img:z,category:"food",in_stock:625,sold:2591,regular_price:2.99,sale_price:.99,rating:5},{id:"product-40",name:"Guylian Seashells Belgian Chocolate",img:Z,category:"food",in_stock:3614,sold:201,regular_price:7.99,sale_price:4.99,rating:5},{id:"product-41",name:"Chocolat de Napoleon Truffles",img:ee,category:"food",in_stock:703,sold:211,regular_price:9.99,sale_price:8.99,rating:5},{id:"product-42",name:"Ferrero Rocher 16 Pack Special",img:se,category:"food",in_stock:3605,sold:1452,regular_price:39.99,sale_price:28.99,rating:5},{id:"product-43",name:"Levis Issue Backpack Black",img:ae,category:"fashion",in_stock:105,sold:987,regular_price:100,sale_price:59,rating:4.5},{id:"product-44",name:"SNSY Fancy Red Woman Sandals",img:ie,category:"fashion",in_stock:12,sold:81,regular_price:52,sale_price:39,rating:3},{id:"product-45",name:"Levis 1998 Classic Red Hoodie",img:re,category:"fashion",in_stock:188,sold:15,regular_price:100,sale_price:79,rating:5},{id:"product-46",name:"Traum Signature Graffiti Hat",img:ce,category:"fashion",in_stock:5,sold:254,regular_price:32,sale_price:10,rating:4},{id:"product-47",name:"Traum So Color Yellow Umbrella",img:oe,category:"fashion",in_stock:2547,sold:5581,regular_price:5,sale_price:4,rating:5},{id:"product-48",name:"Puma Ocean Colors City Backpack",img:te,category:"fashion",in_stock:987,sold:551,regular_price:150,sale_price:129,rating:4.5},{id:"product-49",name:"Classic Black Sneakers Unisex",img:ne,category:"fashion",in_stock:5874,sold:2584,regular_price:100,sale_price:79,rating:5},{id:"product-50",name:"Crocs Pastels Unicorn Dreams",img:ge,category:"fashion",in_stock:941,sold:668,regular_price:150,sale_price:119,rating:4.5},{id:"product-51",name:"Puma Crossbody Bag Black",img:le,category:"fashion",in_stock:147,sold:79,regular_price:50,sale_price:30,rating:4},{id:"product-52",name:"Yumi Sunny Yellow City Backpack",img:de,category:"fashion",in_stock:552,sold:347,regular_price:99,sale_price:69,rating:4.5},{id:"product-53",name:"Guess Black Leather Bag for woman",img:pe,category:"fashion",in_stock:202,sold:17,regular_price:268,sale_price:199,rating:4},{id:"product-54",name:"Parfois Woman Flower Backpack",img:me,category:"fashion",in_stock:498,sold:112,regular_price:395,sale_price:300,rating:2.5},{id:"product-55",name:"UPS Express Shipping",img:t,category:"services",in_stock:202,sold:17,regular_price:268,sale_price:199,rating:5},{id:"product-56",name:"Gift cards, loyalty cards and offers",img:n,category:"services",in_stock:100,sold:154,regular_price:99,sale_price:1.99,rating:5},{id:"product-57",name:"Sustainable packaging services",img:g,category:"services",in_stock:15874,sold:22987,regular_price:3.99,sale_price:.99,rating:5},{id:"product-58",name:"UPS Express Shipping",img:t,category:"services",in_stock:202,sold:17,regular_price:268,sale_price:199,rating:5},{id:"product-59",name:"Gift cards, loyalty cards and offers",img:n,category:"services",in_stock:100,sold:154,regular_price:99,sale_price:1.99,rating:5},{id:"product-60",name:"Sustainable packaging services",img:g,category:"services",in_stock:15874,sold:22987,regular_price:3.99,sale_price:.99,rating:5}];export{ye as C,we as P,xe as p};
