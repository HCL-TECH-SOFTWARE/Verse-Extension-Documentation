(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(88)),i={id:"introduction",title:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Welcome to HCL Verse extensibility. Verse accepts custom applications, defined by a set of extension points, that allow you to add new capabilities and extend Verse to further meet your business needs.",source:"@site/docs/introduction.md",permalink:"/verse-developer/docs/introduction",sidebar:"docs",next:{title:"Ready to Deploy?",permalink:"/verse-developer/docs/ready-to-deploy"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to HCL Verse extensibility. Verse accepts custom applications, defined by a set of extension points, that allow you to add new capabilities and extend Verse to further meet your business needs."),Object(a.b)("p",null,"It is important to note the difference between ",Object(a.b)("em",{parentName:"p"},"applications")," and ",Object(a.b)("em",{parentName:"p"},"extensions")," in the context of this documentation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Application")),": you can think of an application as the container for extensions. There may be multiple applications registered in Verse and an application may hold one or more extensions. Applications are defined in a file, ",Object(a.b)("inlineCode",{parentName:"li"},"applications.json"),", which contains an array of said applications."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"./what-is-an-extension"}),"Extensions"))),": extensions provide the details of each desired customization: type, location, etc. and are defined within an application. Each application can have one or more extensions.")),Object(a.b)("p",null,"HCL Verse ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"./what-is-an-extension"}),"extensions"))," are JSON objects which take a set of supported attributes that will expand Verse's capabilities. Extensions are composed of ",Object(a.b)("inlineCode",{parentName:"p"},"extension points"),", ",Object(a.b)("inlineCode",{parentName:"p"},"paths/objects"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"payloads"),". Verse has a wide array of defined ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"./extension-points"}),"extension points"))," that it supports. Each extension has different properties to control how it contributes to Verse's behavior and UI. "),Object(a.b)("p",null,"Use the documentation and examples to get started."))}l.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);