(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(88)),o=n(92),c={id:"live-text-widget",title:"Live Text Widget"},b={unversionedId:"live-text-widget",id:"live-text-widget",isDocsHomePage:!1,title:"Live Text Widget",description:"This sample application demonstrates the Live Text widget extension which adds new functionality to text in the body of the Mail Read view.",source:"@site/docs/live-text-widget.md",permalink:"/verse-developer/docs/live-text-widget",sidebar:"tutorials_examples",previous:{title:"Modify On Send",permalink:"/verse-developer/docs/modify-on-send"},next:{title:"Third Party Chat",permalink:"/verse-developer/docs/third-party-chat"}},l=[{value:"Add the Extension",id:"add-the-extension",children:[]},{value:"Test it Out",id:"test-it-out",children:[]},{value:"How it Works",id:"how-it-works",children:[]}],d={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This sample application demonstrates the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"./extension-points#live-text"}),"Live Text"))," widget extension which adds new functionality to text in the body of the ",Object(i.b)("inlineCode",{parentName:"p"},"Mail Read")," view."),Object(i.b)("h2",{id:"add-the-extension"},"Add the Extension"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'[\n  {\n    "name": "Live Text Widget Sample application",\n    "title": "Live Text Widget Sample",\n    "description": "The sample shows how to contribute a live text extension in Verse",\n    "extensions": [\n      {\n        "name": "Live Text Widget Sample extension",\n        "type": "com.ibm.verse.ext.liveText",\n        "payload": {\n          "text": "Live Text Widget Action",\n          "href": "${extensionPath}/live-text/sample1.html?tel=${0}",\n          "recognizer": "(([0-9]{3}))[-. ]?([0-9]{3})[-. ]?([0-9]{4})",\n          "location": "window",\n          "renderParams": {\n            "width": "800",\n            "height": "600"\n          }\n        }\n      }\n    ],\n    "services": [\n      "Verse"\n    ]\n  }\n]\n')),Object(i.b)("h4",{id:"extension-properties"},"Extension Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the name of the application")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the extension point  (",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"./extension-points"}),"List of Extension Points"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title of your extension")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"href"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a fully qualified URL")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"recognizer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a JavaScript regular expression")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"location"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"how the web application should open (**window")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"renderParams"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"contains ",Object(i.b)("inlineCode",{parentName:"td"},"width")," and ",Object(i.b)("inlineCode",{parentName:"td"},"height")," properties  ",Object(i.b)("strong",{parentName:"td"},"only valid if the location\u2019s value is window"))))),Object(i.b)("h2",{id:"test-it-out"},"Test it Out"),Object(i.b)(o.a,{path:"samples/live-text.gif",mdxType:"Expandable"}),Object(i.b)("h2",{id:"how-it-works"},"How it Works"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Live Text")," extension will add an action to any matching text in the ",Object(i.b)("inlineCode",{parentName:"p"},"Mail Read")," view. As you may have gathered, the ",Object(i.b)("inlineCode",{parentName:"p"},"recognizer")," is for that of a 10-digit phone number that can be, optionally, separated by a hyphen, period, or space. If there are multiple phone numbers that match the format, each will have an action associated with it. Selecting the action will open to the url specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"href")," property. In this sample, selecting the ",Object(i.b)("inlineCode",{parentName:"p"},"Live Text Widget Action")," opens the url in a new window with the specified height and width."),Object(i.b)("p",null,"A unique feature of the ",Object(i.b)("inlineCode",{parentName:"p"},"Live Text")," extension is the ability to add the matching strings to the URL as query arguments. In the sample, this is accomplished using the format ",Object(i.b)("inlineCode",{parentName:"p"},"${i}")," where ",Object(i.b)("inlineCode",{parentName:"p"},"i")," corresponds to an index in the array returned by JavaScript's String ",Object(i.b)("inlineCode",{parentName:"p"},"match")," function."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Reference the offical ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"}),"MDN Docs"))," for more information on Javascript's String ",Object(i.b)("inlineCode",{parentName:"p"},"match")," property."))),Object(i.b)("p",null,"Additionally, you can add more than one ",Object(i.b)("inlineCode",{parentName:"p"},"Live Text")," widget extension to an application. In the event that more than one ",Object(i.b)("inlineCode",{parentName:"p"},"recognizer")," matches the same string of text in the ",Object(i.b)("inlineCode",{parentName:"p"},"Mail Read")," view, there will be an action for each match in the dropdown action tray."),Object(i.b)("p",null,"Please reference the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"./extension-points#live-text"}),"Live Text Extension Point"))," documentation for more information on the Live Text widget extension."))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||s[u]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(89),r=n(91);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,b=i.absolute,l=void 0!==b&&b;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var d=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+d:d}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},91:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),i=(n(47),n(90)),o=function(e){var t=e.path,n=r.a.useState(!1),a=n[0],o=n[1],c=r.a.useState({}),b=c[0],l=c[1],d=r.a.useRef(null),p=function(e){e.preventDefault(),o(!a)},s=function(e){a&&(e.preventDefault(),o(!1))};return r.a.useEffect((function(){return document.body.addEventListener("keydown",s),function(){document.body.removeEventListener("keydown",s)}}),[]),r.a.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];a&&d.current?(document.body.setAttribute("style","overflow:hidden;"),l({top:e.offsetTop})):(document.body.removeAttribute("style"),d.current.focus(),l({}))}),[a]),r.a.createElement("div",{onKeyPress:p,onClick:p,className:a?"expandable-container expanded":"expandable-container",ref:d,style:b},r.a.createElement("img",{tabIndex:"0",className:a?"image image-expanded":"image",src:Object(i.a)(t)}))}}}]);