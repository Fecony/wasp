(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3898],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8610:function(e,t,n){"use strict";var r=n(7294),a=n(4996);t.Z=function(e){return r.createElement("div",null,r.createElement("p",{align:"center"},r.createElement("figure",null,r.createElement("img",{alt:e.alt,src:(0,a.Z)(e.source)}),r.createElement("figcaption",{class:"image-caption"},e.caption))))}},2908:function(e,t,n){"use strict";var r=n(7294),a=n(6742),i=n(4996),o=function(){return r.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")};t.Z=function(){return r.createElement("p",null,r.createElement(a.Z,{className:"in-blog-cta--link",to:(0,i.Z)("/docs")},"We are in Alpha (try it out)!"),r.createElement(o,null),r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),r.createElement(o,null),r.createElement(a.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),a=n(7294),i=n(3727),o=n(2263),u=n(3919),s=n(412),c=(0,a.createContext)({collectLink:function(){}}),l=n(4996),p=n(8780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var t,n,d=e.isNavLink,m=e.to,b=e.href,g=e.activeClassName,v=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,k=(0,r.Z)(e,f),O=(0,o.Z)().siteConfig,E=O.trailingSlash,j=O.baseUrl,Z=(0,l.C)().withBaseUrl,W=(0,a.useContext)(c),C=m||b,P=(0,u.Z)(C),S=null==C?void 0:C.replace("pathname://",""),T=void 0!==S?(n=S,w&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;T&&P&&(T=(0,p.applyTrailingSlash)(T,{trailingSlash:E,baseUrl:j}));var x,U=(0,a.useRef)(!1),L=d?i.OL:i.rU,N=s.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!N&&P&&null!=T&&window.docusaurus.prefetch(T),function(){N&&x&&x.disconnect()}}),[T,N,P]);var z=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,M=!T||!P||z;return T&&P&&!z&&!h&&W.collectLink(T),M?a.createElement("a",Object.assign({href:T},C&&!P&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(L,Object.assign({},k,{onMouseEnter:function(){U.current||null==T||(window.docusaurus.preload(T),U.current=!0)},innerRef:function(e){var t,n;N&&e&&P&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(x=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),n())}))}))).observe(t))},to:T||""},d&&{isActive:v,activeClassName:g}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(2263),a=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,u=void 0!==o&&o,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},852:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return f},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(6742),u=(n(4996),n(2908),n(589),n(8610),["components"]),s={title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",authors:["shayneczyzewski"],image:"/img/waspleau-screenshot.png",tags:["webdev","wasp"]},c=void 0,l={permalink:"/blog/2022/01/27/waspleau",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-01-27-waspleau.md",source:"@site/blog/2022-01-27-waspleau.md",title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",description:"Hello, Waspleau",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:4.55,truncated:!0,authors:[{name:"Shayne Czyzewski",title:"Founding Engineer @ Wasp",url:"https://github.com/shayneczyzewski",imageURL:"https://github.com/shayneczyzewski.png",key:"shayneczyzewski"}],prevItem:{title:"Meet the team - Filip Sodi\u0107, Founding Engineer",permalink:"/blog/2022/05/31/filip-intro"},nextItem:{title:"Meet the team - Shayne Czyzewski, Founding Engineer",permalink:"/blog/2021/12/21/shayne-intro"}},p={authorsImageUrls:[void 0]},f=[],d={toc:f};function m(e){var t=e.components,s=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hello, Waspleau",src:n(7869).Z})),(0,i.kt)("p",{align:"center"},(0,i.kt)(o.Z,{to:"https://waspleau.netlify.app/",mdxType:"Link"},"See Waspleau here!")," | ",(0,i.kt)(o.Z,{to:"https://github.com/wasp-lang/wasp/blob/main/examples/waspleau",mdxType:"Link"},"See the code")),(0,i.kt)("p",null,"We've built a dashboard powered by a job queue using Wasp!"))}m.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],u={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}s.isMDXComponent=!0},7869:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspleau-screenshot-4d9be945ab6d5e4f5d6692baa133dff0.png"}}]);