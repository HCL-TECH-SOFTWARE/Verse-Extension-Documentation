(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(88)),i=n(92),c={id:"css-extension",title:"CSS Extension"},s={unversionedId:"css-extension",id:"css-extension",isDocsHomePage:!1,title:"CSS Extension",description:"In this tutorial you will learn how to use the Custom CSS extension type.",source:"@site/docs\\css-extension.md",permalink:"/Verse-Extension-Documentation/docs/css-extension",sidebar:"tutorials_examples",previous:{title:"Directory Search Extension",permalink:"/Verse-Extension-Documentation/docs/directory-search-extension"},next:{title:"Navigation Bar Extension",permalink:"/Verse-Extension-Documentation/docs/navigation-bar-extension"}},u=[{value:"Add the Extension",id:"add-the-extension",children:[]},{value:"Test it Out",id:"test-it-out",children:[]},{value:"How it Works",id:"how-it-works",children:[]}],b={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this tutorial you will learn how to use the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"./extension-points#css-support"}),"Custom CSS"))," extension type. "),Object(o.b)("h2",{id:"add-the-extension"},"Add the Extension"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'[\n {\n    "name": "CSS Extension Sample",\n    "description": "The sample shows how to customize Verse UI",\n    "title": "CSS Extension Sample",\n    "extensions": [\n      {\n        "id": "unique-extension-id",\n        "type": "com.ibm.verse.ext.css",\n        "name": "CSS extension sample",\n        "payload": {\n          "css": ".ics-scbanner {background-color:green!important;} .seq-window .compose-button {font-size:16px!important;background-color:red!important;} .message-list-container .seq-msg-row {background-color:yellow!important;} .createEvent {display:none!important;}"\n        }\n      }\n    ],\n    "services": [\n      "Verse"\n    ]\n  }\n]\n')),Object(o.b)("h4",{id:"extension-properties"},"Extension Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Definition"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the name of the extension")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the extension point  (",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"./extension-points"}),"List of Extension Points"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"payload"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"object")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSON object that specifies properties specific to the extension")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"css"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"string")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CSS styles in string format")))),Object(o.b)("h2",{id:"test-it-out"},"Test it Out"),Object(o.b)(i.a,{path:"samples/custom-css.gif",mdxType:"Expandable"}),Object(o.b)("h2",{id:"how-it-works"},"How it Works"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"./extension-points#css-support"}),"Custom CSS"))," extension can be used to override default styles and add custom styles to the HCL Verse UI. Valid CSS is read in as a string from the ",Object(o.b)("inlineCode",{parentName:"p"},"css")," attribute and applied to the page, injected as a stylesheet with the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," attribute and specified styles."),Object(o.b)("p",null,"Be diligent when adding CSS to the extension, styles may not load if there are syntax errors. For more information, reference the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"./extension-points#css-support"}),"Custom CSS"))," extension docs."))}l.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=b(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(89),a=n(91);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return u?e+b:b}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},91:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=(n(47),n(90)),i=function(e){var t=e.path,n=a.a.useState(!1),r=n[0],i=n[1],c=a.a.useState({}),s=c[0],u=c[1],b=a.a.useRef(null),l=function(e){e.preventDefault(),i(!r)},p=function(e){r&&(e.preventDefault(),i(!1))};return a.a.useEffect((function(){return document.body.addEventListener("keydown",p),function(){document.body.removeEventListener("keydown",p)}}),[]),a.a.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];r&&b.current?(document.body.setAttribute("style","overflow:hidden;"),u({top:e.offsetTop})):(document.body.removeAttribute("style"),b.current.focus(),u({}))}),[r]),a.a.createElement("div",{onKeyPress:l,onClick:l,className:r?"expandable-container expanded":"expandable-container",ref:b,style:s},a.a.createElement("img",{tabIndex:"0",className:r?"image image-expanded":"image",src:Object(o.a)(t)}))}}}]);