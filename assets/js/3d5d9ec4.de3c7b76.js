(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4688],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2908:function(e,t,n){"use strict";var o=n(7294),i=n(6742),r=n(4996),a=function(){return o.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")};t.Z=function(){return o.createElement("p",null,o.createElement(i.Z,{className:"in-blog-cta--link",to:(0,r.Z)("/docs")},"We are in Alpha (try it out)!"),o.createElement(a,null),o.createElement(i.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),o.createElement(a,null),o.createElement(i.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(9756),i=n(7294),r=n(3727),a=n(2263),s=n(3919),l=n(412),u=(0,i.createContext)({collectLink:function(){}}),c=n(4996),d=n(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var h=function(e){var t,n,h=e.isNavLink,m=e.to,g=e.href,f=e.activeClassName,y=e.isActive,w=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,v=void 0===b||b,k=(0,o.Z)(e,p),I=(0,a.Z)().siteConfig,j=I.trailingSlash,O=I.baseUrl,W=(0,c.C)().withBaseUrl,N=(0,i.useContext)(u),E=m||g,x=(0,s.Z)(E),C=null==E?void 0:E.replace("pathname://",""),S=void 0!==C?(n=C,v&&function(e){return e.startsWith("/")}(n)?W(n):n):void 0;S&&x&&(S=(0,d.applyTrailingSlash)(S,{trailingSlash:j,baseUrl:O}));var T,P=(0,i.useRef)(!1),Z=h?r.OL:r.rU,L=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!L&&x&&null!=S&&window.docusaurus.prefetch(S),function(){L&&T&&T.disconnect()}}),[S,L,x]);var F=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,M=!S||!x||F;return S&&x&&!F&&!w&&N.collectLink(S),M?i.createElement("a",Object.assign({href:S},E&&!x&&{target:"_blank",rel:"noopener noreferrer"},k)):i.createElement(Z,Object.assign({},k,{onMouseEnter:function(){P.current||null==S||(window.docusaurus.preload(S),P.current=!0)},innerRef:function(e){var t,n;L&&e&&x&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(T=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))}))).observe(t))},to:S||""},h&&{isActive:y,activeClassName:f}))}},3919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return a}});var o=n(2263),i=n(3919);function r(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,a=r.forcePrependBaseUrl,s=void 0!==a&&a,l=r.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,o=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,r=e.split(/[#?]/)[0],a="/"===r||r===o?r:(i=r,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(r,a)}},8780:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return o(i).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return o(r).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},7005:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return p},toc:function(){return h},default:function(){return g}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a=(n(6742),n(4996),n(2908)),s=n(589),l=["components"],u={title:"Meet the team - Filip Sodi\u0107, Founding Engineer",authors:["matijasos"],image:"/img/filip-intro-banner.png",tags:["wasp","new-hire"]},c=void 0,d={permalink:"/blog/2022/05/31/filip-intro",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-05-31-filip-intro.md",source:"@site/blog/2022-05-31-filip-intro.md",title:"Meet the team - Filip Sodi\u0107, Founding Engineer",description:"Welcome Filip!",date:"2022-05-31T00:00:00.000Z",formattedDate:"May 31, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"},{label:"new-hire",permalink:"/blog/tags/new-hire"}],readingTime:5.09,truncated:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],nextItem:{title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",permalink:"/blog/2022/01/27/waspleau"}},p={authorsImageUrls:[void 0]},h=[],m={toc:h};function g(e){var t=e.components,u=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Welcome Filip!",src:n(5509).Z})),(0,r.kt)("p",null,"Find Filip on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sodic"},"GitHub"),"."),(0,r.kt)(s.ZP,{mdxType:"WaspIntro"}),(0,r.kt)(a.Z,{mdxType:"InBlogCta"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We are immensely excited to welcome Filip, our latest Founding Software\nEngineer!")," Filip is an experienced engineer and a passionate computer\nscientist - his two biggest passions are building compilers/designing\nprogramming languages and web development (what a lucky coincidence, right?\n;)). Before joining Wasp, Filip earned his stripes in various domains, ranging\nfrom bioinformatics and the betting industry to route optimisation software.\nWelcome to the team, Filip - we can't wait to see what you build!"),(0,r.kt)("h4",{id:"lets-start-with-two-truths-and-a-lie-about-yourself"},"Let\u2019s start with two truths and a lie about yourself."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I found out about Wasp through a friend/former colleague and still haven\u2019t\nbought him a drink to say thanks."),(0,r.kt)("li",{parentName:"ul"},"I\u2019ve designed and implemented my own Turing-complete functional programming\nlanguage that compiles to JavaScript."),(0,r.kt)("li",{parentName:"ul"},"I wasted nearly 30 hours customizing my setup to maximize productivity and\nprobably ended up in a less productive state")),(0,r.kt)("h4",{id:"which-statement-was-the-lie-above-any-interesting-stories-to-share"},"Which statement was the lie above? Any interesting stories to share?"),(0,r.kt)("p",null,"The last one was a lie. I wish it were only 30 hours :)"),(0,r.kt)("p",null,"I did design ",(0,r.kt)("a",{parentName:"p",href:"https://sodic.github.io/func"},"a programming language"),". It is\nTuring-complete but still far from being practical. For one, it can\u2019t print\nstuff to the screen (or perform any other side effects)."),(0,r.kt)("p",null,"I never did buy that drink. He\u2019s not letting me forget about it, though."),(0,r.kt)("h4",{id:"why-did-you-join-wasp-what-did-you-do-before"},"Why did you join Wasp? What did you do before?"),(0,r.kt)("p",null,"I've wanted to work on a project where I'd get a chance to design a language\nand build a compiler for quite some time now. While I did develop my own\nlanguage on the side (and even graduated with it), I thought getting paid for\ndoing something similar this early in my career was pretty far-fetched."),(0,r.kt)("p",null,"Almost all my paid work had something to do with the web, whether on the\nclient-side or the server-side. I enjoy nearly all parts of web development\n(yes, even styling websites with CSS :), but one thing I've always found\nannoying was dealing with all the boilerplate. Whenever I start building\nsomething, I spend most of my time implementing the same repetitive stuff\n(e.g., authentication, databases, SPA routing, API routes, etc.) and relearning\nall the best practices that come with it."),(0,r.kt)("p",null,"And then, one day, a friend of mine mentioned Wasp - a DSL aiming to eliminate\nboilerplate from web apps. The product was a perfect fit based on everything I\nknow and want to do! Also, I shared a college advisor with the founders (Martin\nand Matija) and only heard great things about them."),(0,r.kt)("p",null,"The whole thing sounded almost too good to be true, so joining them to work on\nWasp was an easy decision."),(0,r.kt)("h4",{id:"what-is-your-favorite-language"},"What is your favorite language?"),(0,r.kt)("p",null,"I don\u2019t have many favorite things, especially when it comes to technology.\nAfter going through several cycles of falling in love with a\nlanguage/framework/tool before becoming annoyed by its shortcomings and\nlimitations, I made peace with the fact that everything\u2019s a tradeoff. I\u2019ll\ngenerally choose a language depending on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the problem at hand"),(0,r.kt)("li",{parentName:"ul"},"its current position in the aforementioned cycle :)")),(0,r.kt)("p",null,"With that said, I'm currently most excited about properly learning Haskell. It\nalways looked interesting and exotic. I've gotten a few opportunities to play\nwith the language through university courses and on my own but never really had\nan excuse to use it in my day-to-day."),(0,r.kt)("h4",{id:"what-are-you-most-excited-about-in-wasp"},"What are you most excited about in Wasp?"),(0,r.kt)("p",null,"From a developer\u2019s perspective, I\u2019m definitely most excited about designing the\nDSL and working on the compiler."),(0,r.kt)("p",null,"From a product standpoint, I love the idea of never again having to implement\nan authentication system."),(0,r.kt)("h4",{id:"whats-a-feature-or-project-youre-most-proud-of-that-you-worked-on-in-the-past-three-months"},"What\u2019s a feature or project you\u2019re most proud of that you worked on in the past three months?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},"Definitely this thing"),"."),(0,r.kt)("h4",{id:"how-did-you-start-coding"},"How did you start coding?"),(0,r.kt)("p",null,"No exciting story to tell here, I\u2019m afraid."),(0,r.kt)("p",null,"I enrolled in computer science college and first started programming as a part\nof my regular \u201cIntroduction to programming\u201d course."),(0,r.kt)("p",null,"Before then, I didn\u2019t really know what programming was. In fact, I  wanted to\nstudy electrical engineering. Unluckily for most but luckily for me, our\ncollege does not let you choose your major (i.e., electrical engineering or\ncomputing) right away. Instead, they make you go through a shared year of\nuniversal (and some not-so-universal) courses, only allowing you to specialize\nat the start of your second year. Thanks to this quirk, I had a chance to\nencounter programming, change my mind, and enroll in computer science."),(0,r.kt)("h4",{id:"your-dev-setup"},"Your dev setup?"),(0,r.kt)("p",null,"As far as hardware goes, it\u2019s pretty basic. I use a regular laptop that\u2019s\nstarting to show signs of age (ASUS N550JX), a cheap Lenovo mouse, and my\nlaptop\u2019s integrated keyboard."),(0,r.kt)("p",null,"The software setup is a bit more interesting. I\u2019m usually on Manjaro Linux with\nthe i3 tiling window manager. I jump between editors depending on what I\u2019m\ndoing. It\u2019s sometimes Vim, but mainly something more powerful that comes with\nVim emulation (e.g., VS Code or JetBrains IDEs). My preferred shell is zsh\n(sorry Frane)."),(0,r.kt)("h4",{id:"camelcase-or-snake_case"},(0,r.kt)("inlineCode",{parentName:"h4"},"camelCase")," or ",(0,r.kt)("inlineCode",{parentName:"h4"},"snake_case"),"?"),(0,r.kt)("p",null,"NoPreference"),(0,r.kt)("h4",{id:"what-is-your-current-favorite-gem-library-tool-or-anything-else-that-helps-you-with-your-work-why"},"What is your current favorite gem, library, tool, or anything else that helps you with your work? Why?"),(0,r.kt)("p",null,"That would have to be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ranger/ranger"},"ranger"),"!"),(0,r.kt)("p",null,"Ranger is a terminal file manager I use daily, mainly because it makes my work\nin the shell much faster. It also gives me a consistent interface for moving\naround, previewing files, and interacting with the file system. In other words,\nmy workflow doesn't have to change much regardless of where I am (Mac, Linux\nDesktop, or Linux server)."),(0,r.kt)("h4",{id:"one-piece-of-advice-youd-give-to-budding-developers"},"One piece of advice you\u2019d give to budding developers?"),(0,r.kt)("p",null,"It\u2019s easy to get stuck in an endless loop of polishing and fine-tuning your\nprojects because you think they aren\u2019t ready yet. Good enough sometimes truly\nis good enough and things can often be considered done before ",(0,r.kt)("em",{parentName:"p"},"you")," consider\nthem done."),(0,r.kt)("p",null,"I still occasionally need to give this advice to myself :)."),(0,r.kt)("h4",{id:"lastly-where-can-people-find-or-connect-with-you-online"},"Lastly, where can people find or connect with you online?"),(0,r.kt)("p",null,"GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sodic"},"https://github.com/sodic")),(0,r.kt)("p",null,"LinkedIn: ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/filipsodic/"},"https://www.linkedin.com/in/filipsodic/")))}g.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},5509:function(e,t,n){"use strict";t.Z=n.p+"assets/images/filip-intro-banner-22fe837fa4f00a9634f7e77b79ef7677.png"}}]);