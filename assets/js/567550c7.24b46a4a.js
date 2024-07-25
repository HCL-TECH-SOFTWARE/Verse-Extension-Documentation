"use strict";(self.webpackChunkverse_developer=self.webpackChunkverse_developer||[]).push([[705],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8873:function(e,t,n){n.d(t,{A:function(){return a}});var r=n(7294),o=n(4996),a=function(e){var t=e.path,n=r.useState(!1),a=n[0],i=n[1],s=r.useState({}),l=s[0],p=s[1],c=r.useRef(null),u=function(e){e.preventDefault(),i(!a)},d=function(e){a&&(e.preventDefault(),i(!1))};return r.useEffect((function(){return document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}}),[]),r.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];a&&c.current?(document.body.setAttribute("style","overflow:hidden;"),p({top:e.offsetTop})):(document.body.removeAttribute("style"),c.current.focus(),p({}))}),[a]),r.createElement("div",{onKeyPress:u,onClick:u,className:a?"expandable-container expanded":"expandable-container",ref:c,style:l},r.createElement("img",{tabIndex:"0",className:a?"image image-expanded":"image",src:(0,o.Z)(t)}))}},324:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(8873),s=["components"],l={id:"css-extension",title:"CSS Extension"},p=void 0,c={unversionedId:"css-extension",id:"css-extension",title:"CSS Extension",description:"",source:"@site/docs/css-extension.md",sourceDirName:".",slug:"/css-extension",permalink:"/Verse-Extension-Documentation/docs/css-extension",tags:[],version:"current",frontMatter:{id:"css-extension",title:"CSS Extension"},sidebar:"tutorials_examples",previous:{title:"Directory Search Extension",permalink:"/Verse-Extension-Documentation/docs/directory-search-extension"},next:{title:"Navigation Bar Extension",permalink:"/Verse-Extension-Documentation/docs/navigation-bar-extension"}},u={},d=[{value:"Add the Extension",id:"add-the-extension",level:2},{value:"Extension Properties",id:"extension-properties",level:4},{value:"Test it Out",id:"test-it-out",level:2},{value:"How it Works",id:"how-it-works",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial you will learn how to use the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../extension-points#css-support"},"Custom CSS"))," extension type. "),(0,a.kt)("h2",{id:"add-the-extension"},"Add the Extension"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n {\n    "name": "CSS Extension Sample",\n    "description": "The sample shows how to customize Verse UI",\n    "title": "CSS Extension Sample",\n    "extensions": [\n      {\n        "id": "unique-extension-id",\n        "type": "com.ibm.verse.ext.css",\n        "name": "CSS extension sample",\n        "payload": {\n          "css": ".ics-scbanner {background-color:green!important;} .seq-window .compose-button {font-size:16px!important;background-color:red!important;} .message-list-container .seq-msg-row {background-color:yellow!important;} .createEvent {display:none!important;}"\n        }\n      }\n    ],\n    "services": [\n      "Verse"\n    ]\n  }\n]\n')),(0,a.kt)("h4",{id:"extension-properties"},"Extension Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the name of the extension")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the extension point  (",(0,a.kt)("a",{parentName:"td",href:"../extension-points"},"List of Extension Points"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payload"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:null},"JSON object that specifies properties specific to the extension")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"css"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"CSS styles in string format")))),(0,a.kt)("h2",{id:"test-it-out"},"Test it Out"),(0,a.kt)(i.A,{path:"samples/custom-css.gif",mdxType:"Expandable"}),(0,a.kt)("h2",{id:"how-it-works"},"How it Works"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../extension-points#css-support"},"Custom CSS"))," extension can be used to override default styles and add custom styles to the HCL Verse UI. Valid CSS is read in as a string from the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," attribute and applied to the page, injected as a stylesheet with the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," attribute and specified styles."),(0,a.kt)("p",null,"Be diligent when adding CSS to the extension, styles may not load if there are syntax errors. For more information, reference the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../extension-points#css-support"},"Custom CSS"))," extension docs."))}f.isMDXComponent=!0}}]);