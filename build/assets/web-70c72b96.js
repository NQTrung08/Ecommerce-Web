import{P as T,j as b}from"./mui-a50be5b6.js";import{g as k,G as d,af as K,r as h}from"./antd-4509dcf0.js";var C=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Z(r,e){return!!(r===e||C(r)&&C(e))}function J(r,e){if(r.length!==e.length)return!1;for(var n=0;n<r.length;n++)if(!Z(r[n],e[n]))return!1;return!0}function w(r,e){e===void 0&&(e=J);var n,t=[],i,s=!1;function o(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];return s&&n===this&&e(u,t)||(i=r.apply(this,u),s=!0,n=this,t=u),i}return o}var Q=function(r,e,n){return n=window.getComputedStyle,(n?n(r):r.currentStyle)[e.replace(/-(\w)/gi,function(t,i){return i.toUpperCase()})]},ee=Q,x=ee;function te(r){var e=x(r,"line-height"),n=parseFloat(e,10);if(e===n+""){var t=r.style.lineHeight;r.style.lineHeight=e+"em",e=x(r,"line-height"),n=parseFloat(e,10),t?r.style.lineHeight=t:delete r.style.lineHeight}if(e.indexOf("pt")!==-1?(n*=4,n/=3):e.indexOf("mm")!==-1?(n*=96,n/=25.4):e.indexOf("cm")!==-1?(n*=96,n/=2.54):e.indexOf("in")!==-1?n*=96:e.indexOf("pc")!==-1&&(n*=16),n=Math.round(n),e==="normal"){var i=r.nodeName,s=document.createElement(i);s.innerHTML="&nbsp;",i.toUpperCase()==="TEXTAREA"&&s.setAttribute("rows","1");var o=x(r,"font-size");s.style.fontSize=o,s.style.padding="0px",s.style.border="0px";var u=document.body;u.appendChild(s);var l=s.offsetHeight;n=l,u.removeChild(s)}return n}var re=te;const F=k(re);var D={characters:{tokenizeString:null,isAtomic:function(e){return e.length<=1}},words:{tokenizeString:function(e){return e.match(/(\s*\S[\S\xA0]*)/g)},isAtomic:function(e){return/^\s*[\S\xA0]*\s*$/.test(e)}}},W=function(e){return e.children||null};W.__rtm_atom=!0;var O=function(e){return!!(e&&e.type&&e.type.__rtm_atom===!0)},ne="<Atom>",ie=function(){function r(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}}(),E,L,j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},m=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r};function se(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function le(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r}function oe(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}var p={LEFT:!0,RIGHT:!1},H=function r(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(e){if(typeof e=="string")return n+e;if(O(e))return n+ne}else return n;var t=Array.isArray(e)?e:e.props.children||"";return n+d.Children.map(t,function(i){return r(i)}).join("")},ue=function(e,n,t,i){var s=function(){return t?{display:(e.props.style||{}).display||"block"}:i===2?{display:(e.props.style||{}).display||"inline-block"}:{}};return m({},e,{props:m({},e.props,{style:m({},e.props.style,s()),children:n})})},ae=function r(e){return e==null||["string","number"].includes(typeof e>"u"?"undefined":j(e))||O(e)?!0:typeof e.type=="function"?!1:e.props&&e.props.children?d.Children.toArray(e.props.children).reduce(function(n,t){return n&&r(t)},!0):!0},_=(L=E=function(r){oe(e,r);function e(n){se(this,e);var t=le(this,r.call(this,n));return t.lineHeight=null,t.splitDirectionSeq=[],t.shouldTruncate=!0,t.wasLastCharTested=!1,t.endFound=!1,t.latestThatFits=null,t.onTruncateCalled=!1,t.toStringMemo=w(H),t.childrenWithRefMemo=w(t.childrenElementWithRef),t.validateTreeMemo=w(ae),t.onTruncate=function(i){t.onTruncateCalled||(t.onTruncateCalled=!0,t.props.onTruncate(i))},t.handleResize=function(i,s){if(s&&s.disconnect(),!i)return null;var o=!0,u=function(){o?o=!1:(t.shouldTruncate=!1,t.latestThatFits=null,t.setState({text:t.origText},function(){t.shouldTruncate=!0,t.onTruncateCalled=!1,t.truncate()}))},l=s||new K(u);return l.observe(i),l},t.setRef=function(i){var s=t.el!==i;t.el=i,s&&(t.resizeObserver=t.handleResize(i,t.resizeObserver))},t.state={text:t.childrenWithRefMemo(t.props.children)},t}return e.prototype.componentDidMount=function(){this.isValid&&(this.lineHeight=this.props.lineHeight||F(this.el),this.truncate())},e.prototype.UNSAFE_componentWillReceiveProps=function(t){var i=this;this.shouldTruncate=!1,this.latestThatFits=null,this.setState({text:this.childrenWithRefMemo(t.children)},function(){i.isValid&&(i.lineHeight=t.lineHeight||F(i.el),i.shouldTruncate=!0,i.truncate())})},e.prototype.componentDidUpdate=function(){if(!(this.shouldTruncate===!1||this.isValid===!1)){if(this.endFound){if(this.latestThatFits!==null&&this.state.text!==this.latestThatFits){this.setState({text:this.latestThatFits});return}this.onTruncate(!0);return}this.splitDirectionSeq.length&&(this.fits()?(this.latestThatFits=this.state.text,this.splitDirectionSeq.splice(this.splitDirectionSeq.length-1,1,p.RIGHT,p.LEFT)):this.splitDirectionSeq.push(p.LEFT),this.tryToFit(this.origText,this.splitDirectionSeq))}},e.prototype.componentWillUnmount=function(){this.lineHeight=null,this.latestThatFits=null,this.splitDirectionSeq=[]},e.prototype.truncate=function(){if(this.fits()){this.shouldTruncate=!1,this.onTruncate(!1);return}this.truncateOriginalText()},e.prototype.childrenElementWithRef=function(t){var i=d.Children.only(t);return d.cloneElement(i,{ref:this.setRef,style:m({wordWrap:"break-word"},i.props.style)})},e.prototype.truncateOriginalText=function(){this.endFound=!1,this.splitDirectionSeq=[p.LEFT],this.wasLastCharTested=!1,this.tryToFit(this.origText,this.splitDirectionSeq)},e.prototype.tryToFit=function(t,i){if(t.props.children){var s=this.split(t,i,!0),o=typeof this.props.ellipsis=="function"?this.props.ellipsis(s):this.props.ellipsis;o=(typeof o>"u"?"undefined":j(o))==="object"?d.cloneElement(o,{key:"ellipsis"}):o;var u=s.props.children,l=[].concat(u,o),a=H(u)!==this.toStringMemo(this.props.children);this.setState({text:m({},s,{props:m({},s.props,{children:a?l:u})})})}},e.prototype.split=function(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t||O(t))return this.endFound=!0,t;if(typeof t=="string")return this.splitString(t,i,o);if(Array.isArray(t))return this.splitArray(t,i,o);var u=this.split(t.props.children,i,!1,o+1);return ue(t,u,s,o)},e.prototype.splitString=function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments[2];if(!i.length)return t;if(i.length&&this.policy.isAtomic(t))return this.wasLastCharTested?this.endFound=!0:this.wasLastCharTested=!0,t;if(this.policy.tokenizeString){var o=this.splitArray(this.policy.tokenizeString(t),i,s);return o.join("")}var u=i[0],l=i.slice(1),a=Math.ceil(t.length/2),f=t.substring(0,a);if(u===p.LEFT)return this.splitString(f,l,s);var g=t.substring(a);return f+this.splitString(g,l,s)},e.prototype.splitArray=function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=arguments[2];if(!i.length)return t;if(t.length===1)return[this.split(t[0],i,!1,s)];var o=i[0],u=i.slice(1),l=Math.ceil(t.length/2),a=t.slice(0,l);if(o===p.LEFT)return this.splitArray(a,u,s);var f=t.slice(l);return a.concat(this.splitArray(f,u,s))},e.prototype.fits=function(){var t=this.props.lines,i=this.el.getBoundingClientRect(),s=i.height,o=Math.round(s/parseFloat(this.lineHeight));return t>=o},e.prototype.render=function(){return this.state.text},ie(e,[{key:"isValid",get:function(){return this.validateTreeMemo(this.props.children)}},{key:"origText",get:function(){return this.childrenWithRefMemo(this.props.children)}},{key:"policy",get:function(){return D[this.props.tokenize]||D.characters}}]),e}(d.Component),E.Atom=W,E.defaultProps={lines:1,ellipsis:"...",lineHeight:"",onTruncate:function(){},tokenize:"characters"},L);_.propTypes={};const ce=({text:r,lines:e=2,className:n,width:t})=>{const[i,s]=h.useState(!1),[o,u]=h.useState(!1);return h.useEffect(()=>(u(!0),()=>u(!1)),[]),b.jsx("span",{className:n||"",style:{width:t},children:o&&b.jsx(_,{lines:e,ellipsis:b.jsx("span",{children:"..."}),onTruncate:l=>s(l),children:b.jsx("div",{children:r})})})};ce.propTypes={text:T.string.isRequired,lines:T.number,className:T.string,width:T.number.isRequired};function z(r,e,n){var t,i,s,o,u;e==null&&(e=100);function l(){var f=Date.now()-o;f<e&&f>=0?t=setTimeout(l,e-f):(t=null,n||(u=r.apply(s,i),s=i=null))}var a=function(){s=this,i=arguments,o=Date.now();var f=n&&!t;return t||(t=setTimeout(l,e)),f&&(u=r.apply(s,i),s=i=null),u};return a.clear=function(){t&&(clearTimeout(t),t=null)},a.flush=function(){t&&(u=r.apply(s,i),s=i=null,clearTimeout(t),t=null)},a}z.debounce=z;var fe=z;const M=k(fe);function Te(r){let{debounce:e,scroll:n,polyfill:t,offsetSize:i}=r===void 0?{debounce:0,scroll:!1,offsetSize:!1}:r;const s=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!s)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[o,u]=h.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),l=h.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:o}),a=e?typeof e=="number"?e:e.scroll:null,f=e?typeof e=="number"?e:e.resize:null,g=h.useRef(!1);h.useEffect(()=>(g.current=!0,()=>void(g.current=!1)));const[N,A,v]=h.useMemo(()=>{const c=()=>{if(!l.current.element)return;const{left:B,top:I,width:U,height:G,bottom:V,right:X,x:Y,y:$}=l.current.element.getBoundingClientRect(),y={left:B,top:I,width:U,height:G,bottom:V,right:X,x:Y,y:$};l.current.element instanceof HTMLElement&&i&&(y.height=l.current.element.offsetHeight,y.width=l.current.element.offsetWidth),Object.freeze(y),g.current&&!me(l.current.lastBounds,y)&&u(l.current.lastBounds=y)};return[c,f?M(c,f):c,a?M(c,a):c]},[u,i,a,f]);function S(){l.current.scrollContainers&&(l.current.scrollContainers.forEach(c=>c.removeEventListener("scroll",v,!0)),l.current.scrollContainers=null),l.current.resizeObserver&&(l.current.resizeObserver.disconnect(),l.current.resizeObserver=null)}function R(){l.current.element&&(l.current.resizeObserver=new s(v),l.current.resizeObserver.observe(l.current.element),n&&l.current.scrollContainers&&l.current.scrollContainers.forEach(c=>c.addEventListener("scroll",v,{capture:!0,passive:!0})))}const P=c=>{!c||c===l.current.element||(S(),l.current.element=c,l.current.scrollContainers=q(c),R())};return pe(v,!!n),he(A),h.useEffect(()=>{S(),R()},[n,v,A]),h.useEffect(()=>S,[]),[P,o,N]}function he(r){h.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function pe(r,e){h.useEffect(()=>{if(e){const n=r;return window.addEventListener("scroll",n,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",n,!0)}},[r,e])}function q(r){const e=[];if(!r||r===document.body)return e;const{overflow:n,overflowX:t,overflowY:i}=window.getComputedStyle(r);return[n,t,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...q(r.parentElement)]}const de=["x","y","top","bottom","left","right","width","height"],me=(r,e)=>de.every(n=>r[n]===e[n]);export{ce as T,Te as u};
