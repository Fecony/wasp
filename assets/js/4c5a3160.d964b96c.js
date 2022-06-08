(self.webpackChunkweb=self.webpackChunkweb||[]).push([[628],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return s}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(i,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9672:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s=n(4996),o=["components"],l={title:"Listing tasks"},u=void 0,p={unversionedId:"tutorials/todo-app/listing-tasks",id:"tutorials/todo-app/listing-tasks",isDocsHomePage:!1,title:"Listing tasks",description:"We want to admire our tasks, so let's list them!",source:"@site/docs/tutorials/todo-app/listing-tasks.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/listing-tasks",permalink:"/docs/tutorials/todo-app/listing-tasks",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/listing-tasks.md",tags:[],version:"current",frontMatter:{title:"Listing tasks"},sidebar:"docs",previous:{title:"Task entity",permalink:"/docs/tutorials/todo-app/task-entity"},next:{title:"Creating tasks",permalink:"/docs/tutorials/todo-app/creating-tasks"}},c=[{value:"Introducing operations (queries and actions)",id:"introducing-operations-queries-and-actions",children:[]},{value:"Wasp query",id:"wasp-query",children:[{value:"Wasp declaration",id:"wasp-declaration",children:[]},{value:"JS implementation",id:"js-implementation",children:[]}]},{value:"Invoking query from React",id:"invoking-query-from-react",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We want to admire our tasks, so let's list them!"),(0,i.kt)("h2",{id:"introducing-operations-queries-and-actions"},"Introducing operations (queries and actions)"),(0,i.kt)("p",null,"The primary way of interacting with entities in Wasp is via ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/features#queries-and-actions-aka-operations"},"operations (queries and actions)"),"."),(0,i.kt)("p",null,"Queries are here when we need to fetch/read something, while actions are here when we need to change/update something.\nWe will start with writing a query, since we are just listing tasks and not modifying anything for now."),(0,i.kt)("p",null,"To list tasks, we will need two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Wasp query that fetches all the tasks from the database."),(0,i.kt)("li",{parentName:"ol"},"React logic that calls our query and displays its results.")),(0,i.kt)("h2",{id:"wasp-query"},"Wasp query"),(0,i.kt)("p",null,"Let's implement ",(0,i.kt)("inlineCode",{parentName:"p"},"getTasks")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/language/features#query"},"query"),".\nIt consists of a declaration in Wasp and implementation in JS (in ",(0,i.kt)("inlineCode",{parentName:"p"},"ext/")," directory)."),(0,i.kt)("h3",{id:"wasp-declaration"},"Wasp declaration"),(0,i.kt)("p",null,"Add the following code to ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nquery getTasks {\n  // We specify that JS implementation of the query (which is an async JS function)\n  // can be found in `ext/queries.js` as named export `getTasks`.\n  fn: import { getTasks } from "@ext/queries.js",\n  // We tell Wasp that this query is doing something with entity `Task`. With that, Wasp will\n  // automatically refresh the results of this query when tasks change.\n  entities: [Task]\n}\n')),(0,i.kt)("h3",{id:"js-implementation"},"JS implementation"),(0,i.kt)("p",null,"Next, create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"ext/queries.js")," and define the JS function that we just imported in the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," declaration above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="ext/queries.js"',title:'"ext/queries.js"'},"export const getTasks = async (args, context) => {\n  return context.entities.Task.findMany({})\n}\n")),(0,i.kt)("p",null,"Query function parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),", arguments the query is invoked with."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),", additional stuff provided by Wasp.")),(0,i.kt)("p",null,"Since we declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," that our query uses entity Task, Wasp injected ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud"},"Prisma client")," for entity Task as ",(0,i.kt)("inlineCode",{parentName:"p"},"context.entities.Task")," - we used it above to fetch all the tasks from the database."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Queries and actions are NodeJS functions that are executed on the server."))),(0,i.kt)("h2",{id:"invoking-query-from-react"},"Invoking query from React"),(0,i.kt)("p",null,"Finally, let's use the query we just created, ",(0,i.kt)("inlineCode",{parentName:"p"},"getTasks"),", in our React component to list the tasks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3-4,7-16,19-32} title="ext/MainPage.js"',"{3-4,7-16,19-32}":!0,title:'"ext/MainPage.js"'},"import React from 'react'\n\nimport getTasks from '@wasp/queries/getTasks'\nimport { useQuery } from '@wasp/queries'\n\nconst MainPage = () => {\n  const { data: tasks, isFetching, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isFetching && 'Fetching...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst Task = (props) => (\n  <div>\n    <input\n      type='checkbox' id={props.task.id}\n      checked={props.task.isDone} readonly\n    />\n    {props.task.description}\n  </div>\n)\n\nconst TasksList = (props) => {\n  if (!props.tasks?.length) return 'No tasks'\n  return props.tasks.map((task, idx) => <Task task={task} key={idx} />)\n}\n\nexport default MainPage\n")),(0,i.kt)("p",null,"All of this is just regular React, except for the two special ",(0,i.kt)("inlineCode",{parentName:"p"},"@wasp")," imports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"import getTasks from '@wasp/queries/getTasks'"),": provides us with our freshly defined Wasp query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"import { useQuery } from '@wasp/queries'"),": provides us with Wasp's ",(0,i.kt)("a",{parentName:"li",href:"/docs/language/features#usequery"},"useQuery")," React hook which is actually just a thin wrapper over ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query"},"react-query")," ",(0,i.kt)("a",{parentName:"li",href:"https://react-query.tanstack.com/docs/guides/queries"},"useQuery")," hook, behaving very similarly while offering some extra integration with Wasp.")),(0,i.kt)("p",null,"While we could call query directly as ",(0,i.kt)("inlineCode",{parentName:"p"},"getTasks()"),", calling it as ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery(getTasks)")," gives us the reactivity (React component gets re-rendered if result of the query changes)."),(0,i.kt)("p",null,'With these changes, you should be seeing text "No tasks" on the screen:'),(0,i.kt)("img",{alt:"Todo App - No Tasks",src:(0,s.Z)("img/todo-app-no-tasks.png"),style:{border:"1px solid black"}}),(0,i.kt)("p",null,"Next, let's create some tasks!"))}m.isMDXComponent=!0}}]);