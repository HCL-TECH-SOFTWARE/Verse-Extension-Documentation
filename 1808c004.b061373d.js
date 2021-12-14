(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(88)),o=n(92),c={id:"custom-name-picker",title:"Custom Name Picker"},s={unversionedId:"custom-name-picker",id:"custom-name-picker",isDocsHomePage:!1,title:"Custom Name Picker",description:"In this tutorial you will learn how to use the Name Picker extension type.",source:"@site/docs/custom-name-picker.md",permalink:"/Verse-Extension-Documentation/docs/custom-name-picker",sidebar:"tutorials_examples",previous:{title:"Your First Application",permalink:"/Verse-Extension-Documentation/docs/your-first-application"},next:{title:"Hook Before Send",permalink:"/Verse-Extension-Documentation/docs/hook-before-send"}},p=[{value:"Add the Extension",id:"add-the-extension",children:[]},{value:"Test it Out",id:"test-it-out",children:[]},{value:"How it Works",id:"how-it-works",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this tutorial you will learn how to use the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"./extension-points#alternative-name-picker"}),"Name Picker"))," extension type. "),Object(i.b)("h2",{id:"add-the-extension"},"Add the Extension"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'[\n  {\n    "name": "Custom Name Picker",\n    "title": "Custom Name Picker",\n    "description": "Sample that shows how to add a custom name picker in mail compose view",\n    "extensions": [\n      {\n        "type": "com.ibm.verse.ext.namePicker",\n        "name": "Custom name picker in mail compose",\n        "payload": {\n          "url": "${extensionPath}/custom-name-picker/index.html"\n        }\n      }\n    ],\n    "services": [\n      "Verse"\n    ]\n  }\n]\n')),Object(i.b)("h4",{id:"extension-properties"},"Extension Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the name of the extension")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the extension point  (",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"./extension-points"}),"List of Extension Points"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"payload"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"JSON object that specifies properties specific to the extension")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"url"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The fully-qualified URL of your application")))),Object(i.b)("h2",{id:"test-it-out"},"Test it Out"),Object(i.b)(o.a,{path:"samples/custom-name-picker.gif",mdxType:"Expandable"}),Object(i.b)("h2",{id:"how-it-works"},"How it Works"),Object(i.b)("p",null,"This extension turns the ",Object(i.b)("inlineCode",{parentName:"p"},"To")," field, in the ",Object(i.b)("inlineCode",{parentName:"p"},"Mail Compose")," view into a link. Selecting the ",Object(i.b)("inlineCode",{parentName:"p"},"To")," field opens an embedded web application specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"url")," property. In this example, the web application is ",Object(i.b)("inlineCode",{parentName:"p"},"custom-name-picker/index.html")," which renders a list of sample users that are defined in ",Object(i.b)("inlineCode",{parentName:"p"},"custom-name-picker/ui.js"),". "),Object(i.b)("p",null,"When the ",Object(i.b)("inlineCode",{parentName:"p"},"To")," link is selected, ",Object(i.b)("inlineCode",{parentName:"p"},"Verse")," sends a message to the web application with the verseApiType ",Object(i.b)("inlineCode",{parentName:"p"},"com.ibm.verse.ping.application.loaded"),". When the application has loaded, it solidifies the ",Object(i.b)("em",{parentName:"p"},"handshake")," by sending back a message with verseApiType ",Object(i.b)("inlineCode",{parentName:"p"},"com.ibm.verse.application.loaded"),". Now that Verse knows the application is ready to receive data, the extension recieves a new message from Verse with the verseApiType ",Object(i.b)("inlineCode",{parentName:"p"},"com.ibm.verse.action.clicked"),". It is also good practice to verify the ",Object(i.b)("inlineCode",{parentName:"p"},"actionId")," which, for the Name Picker extension, is ",Object(i.b)("inlineCode",{parentName:"p"},"com.ibm.verse.ext.action.namePicker"),"."),Object(i.b)("p",null,"Each sample user in the custom name picker has an ",Object(i.b)("inlineCode",{parentName:"p"},"Add")," button that posts a message back to Verse with the verseApiType ",Object(i.b)("inlineCode",{parentName:"p"},"com.ibm.verse.add.contact")," and the data of the selected user. Verse uses that data to add the user's name to the ",Object(i.b)("inlineCode",{parentName:"p"},"To")," field. "),Object(i.b)("p",null,"The custom name picker application in this tutorial only supports adding single users at a time to the ",Object(i.b)("inlineCode",{parentName:"p"},"To")," field. Please reference the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"extension-points#alternative-name-picker"}),"Name Picker"))," extension point for information on adding multiple users at a time and how to add users to the ",Object(i.b)("inlineCode",{parentName:"p"},"Cc")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Bcc")," fields."))}b.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(89),r=n(91);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return p?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},91:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),i=(n(47),n(90)),o=function(e){var t=e.path,n=r.a.useState(!1),a=n[0],o=n[1],c=r.a.useState({}),s=c[0],p=c[1],l=r.a.useRef(null),b=function(e){e.preventDefault(),o(!a)},u=function(e){a&&(e.preventDefault(),o(!1))};return r.a.useEffect((function(){return document.body.addEventListener("keydown",u),function(){document.body.removeEventListener("keydown",u)}}),[]),r.a.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];a&&l.current?(document.body.setAttribute("style","overflow:hidden;"),p({top:e.offsetTop})):(document.body.removeAttribute("style"),l.current.focus(),p({}))}),[a]),r.a.createElement("div",{onKeyPress:b,onClick:b,className:a?"expandable-container expanded":"expandable-container",ref:l,style:s},r.a.createElement("img",{tabIndex:"0",className:a?"image image-expanded":"image",src:Object(i.a)(t)}))}}}]);