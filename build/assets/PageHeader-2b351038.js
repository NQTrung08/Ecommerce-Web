import{P as n,j as e}from"./mui-a50be5b6.js";import{D as o}from"./DocumentTitle-0f80adc2.js";import{r}from"./antd-4509dcf0.js";import{u as m}from"./index-cacf817c.js";const i=({title:t})=>{const[s,a]=r.useState(new Date);return m(),r.useEffect(()=>{const l=setInterval(()=>{a(new Date)},1e3);return()=>clearInterval(l)},[s]),e.jsxs(e.Fragment,{children:[e.jsx(o,{title:t}),e.jsx("div",{className:` w-full card no-hover flex flex-col gap-5 !p-5 mb-5 md:mb-[26px] md:!p-[26px] lg:!py-5 lg:flex-row
                 lg:items-center lg:gap-4`,children:e.jsx("h1",{className:"flex-1 text-center lg:text-left text-2xl",children:t})})]})};i.propTypes={title:n.string.isRequired};export{i as P};
