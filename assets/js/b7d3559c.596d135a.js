(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3898],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8610:function(e,t,n){"use strict";var a=n(7294),r=n(4996);t.Z=function(e){return a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{alt:e.alt,src:(0,r.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption"},e.caption))))}},2908:function(e,t,n){"use strict";var a=n(7294),r=n(6742),s=n(4996),o=function(){return a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")};t.Z=function(){return a.createElement("p",null,a.createElement(r.Z,{className:"in-blog-cta--link",to:(0,s.Z)("/docs")},"We are in Alpha (try it out)!"),a.createElement(o,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(o,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(9756),r=n(7294),s=n(3727),o=n(2263),i=n(3919),l=n(412),u=(0,r.createContext)({collectLink:function(){}}),c=n(4996),p=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,f=e.to,h=e.href,g=e.activeClassName,b=e.isActive,w=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,v=void 0===k||k,y=(0,a.Z)(e,d),j=(0,o.Z)().siteConfig,W=j.trailingSlash,N=j.baseUrl,x=(0,c.C)().withBaseUrl,O=(0,r.useContext)(u),S=f||h,E=(0,i.Z)(S),D=null==S?void 0:S.replace("pathname://",""),Z=void 0!==D?(n=D,v&&function(e){return e.startsWith("/")}(n)?x(n):n):void 0;Z&&E&&(Z=(0,p.applyTrailingSlash)(Z,{trailingSlash:W,baseUrl:N}));var T,C=(0,r.useRef)(!1),P=m?s.OL:s.rU,A=l.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!A&&E&&null!=Z&&window.docusaurus.prefetch(Z),function(){A&&T&&T.disconnect()}}),[Z,A,E]);var F=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,M=!Z||!E||F;return Z&&E&&!F&&!w&&O.collectLink(Z),M?r.createElement("a",Object.assign({href:Z},S&&!E&&{target:"_blank",rel:"noopener noreferrer"},y)):r.createElement(P,Object.assign({},y,{onMouseEnter:function(){C.current||null==Z||(window.docusaurus.preload(Z),C.current=!0)},innerRef:function(e){var t,n;A&&e&&E&&(t=e,n=function(){null!=Z&&window.docusaurus.prefetch(Z)},(T=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.unobserve(t),T.disconnect(),n())}))}))).observe(t))},to:Z||""},m&&{isActive:b,activeClassName:g}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return s},Z:function(){return o}});var a=n(2263),r=n(3919);function s(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var s=void 0===a?{}:a,o=s.forcePrependBaseUrl,i=void 0!==o&&o,l=s.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(s,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,s=e.split(/[#?]/)[0],o="/"===s||s===a?s:(r=s,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(s,o)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var s=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(s).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},852:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return m},toc:function(){return f},default:function(){return g}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=n(6742),i=(n(4996),n(2908)),l=n(589),u=(n(8610),["components"]),c={title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",author:"Shayne Czyzewski",author_title:"Founding Engineer @ Wasp",author_url:"https://github.com/shayneczyzewski",image:"/img/waspleau-screenshot.png",tags:["webdev","wasp"]},p=void 0,d={permalink:"/blog/2022/01/27/waspleau",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/blog/blog/2022-01-27-waspleau.md",source:"@site/blog/2022-01-27-waspleau.md",title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",description:"Hello, Waspleau",date:"2022-01-27T00:00:00.000Z",formattedDate:"January 27, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:4.49,truncated:!1,authors:[{name:"Shayne Czyzewski",title:"Founding Engineer @ Wasp",url:"https://github.com/shayneczyzewski"}],nextItem:{title:"Meet the team - Shayne Czyzewski, Founding Engineer",permalink:"/blog/2021/12/21/shayne-intro"}},m={authorsImageUrls:[void 0]},f=[{value:"Hello, Waspleau!",id:"hello-waspleau",children:[]},{value:"\u201cShow me the code\u201d",id:"show-me-the-code",children:[{value:"<code>server.setupFn</code> for queue setup",id:"serversetupfn-for-queue-setup",children:[]},{value:"Abstracting workers and job processing",id:"abstracting-workers-and-job-processing",children:[]},{value:"Server \u2192 client",id:"server-\u2192-client",children:[]}]},{value:"Congratulations, let\u2019s dance!",id:"congratulations-lets-dance",children:[]},{value:"2022 is going to be exciting \ud83d\ude80",id:"2022-is-going-to-be-exciting-",children:[]}],h={toc:f};function g(e){var t=e.components,c=(0,r.Z)(e,u);return(0,s.kt)("wrapper",(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hello, Waspleau",src:n(7869).Z})),(0,s.kt)("p",{align:"center"},(0,s.kt)(o.Z,{to:"https://waspleau.netlify.app/",mdxType:"Link"},"See Waspleau here!")," | ",(0,s.kt)(o.Z,{to:"https://github.com/wasp-lang/wasp/blob/master/examples/waspleau",mdxType:"Link"},"See the code")),(0,s.kt)(l.ZP,{mdxType:"WaspIntro"}),(0,s.kt)(i.Z,{mdxType:"InBlogCta"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Measure all the metrics!",src:n(9769).Z})),(0,s.kt)("h2",{id:"hello-waspleau"},"Hello, Waspleau!"),(0,s.kt)("p",null,"Let\u2019s face it - metrics are all around us. Wouldn\u2019t it be great if there was a quick and easy way to build a nice-looking metrics dashboard from data pulled in by HTTP calls to many different sources, cache the data in-memory, and periodically update it via background jobs? Why yes, yes it would... so we made an example Wasp app called Waspleau that does just that!"),(0,s.kt)("p",null,"Here is what it looks like live: ",(0,s.kt)("a",{parentName:"p",href:"https://waspleau.netlify.app/"},"https://waspleau.netlify.app/")," There is also a screenshot at the top of this post for those who refrain from clicking on any unknown web links for fear of being ",(0,s.kt)("strong",{parentName:"p"},"Rickrolled"),". Respect."),(0,s.kt)("h2",{id:"show-me-the-code"},"\u201cShow me the code\u201d"),(0,s.kt)("p",null,"So, what do we need to get started? First, we need a way to schedule and run jobs; for this, we decided to use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/OptimalBits/bull"},"Bull"),". Ok, let\u2019s wire it up. This should be easy, right? We can add external NPM dependencies in our Wasp files like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'},'app waspleau {\n  title: "Waspleau",\n\n  dependencies: [\n    ("bull", "4.1.1"),\n    ("axios", "^0.21.1")\n  ]\n}\n')),(0,s.kt)("p",null,"But where do we declare our queue and processing callback functions in Wasp? Uh oh..."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sad",src:n(3631).Z})),(0,s.kt)("h3",{id:"serversetupfn-for-queue-setup"},(0,s.kt)("inlineCode",{parentName:"h3"},"server.setupFn")," for queue setup"),(0,s.kt)("p",null,"Thankfully, Waspleau can leverage a powerful and flexible ",(0,s.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs/language/basic-elements#setupfn"},"hook supplied by Wasp")," called ",(0,s.kt)("inlineCode",{parentName:"p"},"server.setupFn"),". This declares a JavaScript function that will be executed on server start. Yahoo! This means we can do things like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'},'app waspleau {\n  ...\n\n  server: {\n    setupFn: import serverSetup from "@ext/serverSetup.js"\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="serverSetup.js"',title:'"serverSetup.js"'},"import Queue from 'bull'\n\nconst queue = new Queue('waspleau', process.env.REDIS_URL || 'redis://127.0.0.1:6379',\n  { defaultJobOptions: { removeOnComplete: true } }\n)\n\nqueue.process('*', async (job) => { ... })\n\nexport default async () => {\n  // To initially populate the queue, we can do:\n  await queue.add({ ... }) // first run, one-off job\n  await queue.add({ ... }, { repeat: { cron: '*/10 * * * *' } }) // recurring job\n}\n")),(0,s.kt)("h3",{id:"abstracting-workers-and-job-processing"},"Abstracting workers and job processing"),(0,s.kt)("p",null,"Awesome, we can now enqueue and process background jobs, but how can we make it easy to create many different kinds of jobs and schedule them to run at different intervals? For Waspleau, we created our own type of worker object convention to help standardize and simplify adding more:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="workers/template.js"',title:'"workers/template.js"'},"const workerFunction = async (opts) => {\n  return [\n    { name: 'Metric 1 name', value: 'foo', updatedAt: ... },\n    { name: 'Metric 2 name', value: 'bar', updatedAt: ... },\n  ]\n}\n\nexport const workerTemplate = { name: 'Job Name', fn: workerFunction, schedule: '*/10 * * * *' }\n")),(0,s.kt)("p",null,"With this ",(0,s.kt)("inlineCode",{parentName:"p"},"workerFunction")," setup, we can return one or more metrics per worker type. Waspleau can easily use any module that exports this shape. Here is a real example from the demo that makes HTTP calls to GitHub\u2019s API with Axios:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="workers/github.js"',title:'"workers/github.js"'},"import axios from 'axios'\n\nconst workerFunction = async (opts) => {\n  console.log('github.js workerFunction')\n\n  const now = Date.now()\n\n  try {\n    const response = await axios.get('https://api.github.com/repos/wasp-lang/wasp')\n\n    return [\n      { name: 'Wasp GitHub Stars', value: response.data.stargazers_count, updatedAt: now },\n      { name: 'Wasp GitHub Language', value: response.data.language, updatedAt: now },\n      { name: 'Wasp GitHub Forks', value: response.data.forks, updatedAt: now },\n      { name: 'Wasp GitHub Open Issues', value: response.data.open_issues, updatedAt: now },\n    ]\n  } catch (error) {\n    console.error(error)\n    return []\n  }\n}\n\nexport const githubWorker = { name: 'GitHub API', fn: workerFunction, schedule: '*/10 * * * *' }\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note: Please see the ",(0,s.kt)("a",{parentName:"em",href:"https://github.com/wasp-lang/wasp/blob/master/examples/waspleau/ext/serverSetup.js"},"actual serverSetup.js file")," for how we use this abstraction in practice.")),(0,s.kt)("h3",{id:"server-\u2192-client"},"Server \u2192 client"),(0,s.kt)("p",null,"We now have jobs running and data updating at regular intervals, nice, but we still need a way to send that data down the wire. Here, we expose the in-memory data from our ",(0,s.kt)("inlineCode",{parentName:"p"},"server.setupFn")," module so our queries can also use it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="main.wasp"',title:'"main.wasp"'},'...\n\nquery dashboard {\n  fn: import { refreshDashboardData } from "@ext/dashboard.js"\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="dashboard.js"',title:'"dashboard.js"'},"import { getDashboardData } from './serverSetup.js'\n\nexport const refreshDashboardData = async (_args, _context) => {\n  return getDashboardData()\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="serverSetup.js"',title:'"serverSetup.js"'},"...\n\nconst dashboardData = {} // This is updated in the queue process callback\nexport const getDashboardData = () => Object.values(dashboardData).flat()\n")),(0,s.kt)("p",null,"From there, we can request it on the frontend in React components as usual and also set a one-minute client-side refetch interval just for good measure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="MainPage.js"',title:'"MainPage.js"'},"...\n\nconst { data: dashboardData, isFetching, error } = useQuery(refreshDashboardData, null, { refetchInterval: 60 * 1000 })\n\n...\n")),(0,s.kt)("h2",{id:"congratulations-lets-dance"},"Congratulations, let\u2019s dance!"),(0,s.kt)("p",null,"Whew, we did it! If you\u2019d like to deploy your own customized version of this dashboard, please clone ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"our repo")," and check out the Waspleau example ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/master/examples/waspleau/README.md"},"README.md")," for tips on getting started. You can also ",(0,s.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs"},"check out our docs")," to dive deeper into anything."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Rickroll",src:n(95).Z})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Still got ya! :D")),(0,s.kt)("h2",{id:"2022-is-going-to-be-exciting-"},"2022 is going to be exciting \ud83d\ude80"),(0,s.kt)("p",null,"While this functionality currently exists outside of Wasp, keep an eye on our roadmap as we head toward 1.0. We will be busy adding lots of great features to our Wasp DSL in the coming months that will supercharge your web development experience! Thanks for reading, and please feel free to connect with us in ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," about using Wasp on your next project."))}g.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=["components"],i={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},9769:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspleau-metrics-30675d6a2ecac4e8eff66668bc5442e8.png"},95:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspleau-rickroll-646268d60261b4da70effe5f77737b24.gif"},3631:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspleau-sad-afbc180b95ee3e6ddaa050fa1d8e8ca0.png"},7869:function(e,t,n){"use strict";t.Z=n.p+"assets/images/waspleau-screenshot-4d9be945ab6d5e4f5d6692baa133dff0.png"}}]);