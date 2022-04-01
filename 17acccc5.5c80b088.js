(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),r=(n(0),n(88)),o={id:"domino-server-deployment",title:"Domino Server Deployment"},l={unversionedId:"domino-server-deployment",id:"domino-server-deployment",isDocsHomePage:!1,title:"Domino Server Deployment",description:"If you do not have a deployment ready application, you should take a look at the example applications for reference or the extension docs to start your own.",source:"@site/docs\\domino-server-deployment.md",permalink:"/Verse-Extension-Documentation/docs/domino-server-deployment",sidebar:"docs",previous:{title:"Ready to Deploy?",permalink:"/Verse-Extension-Documentation/docs/ready-to-deploy"},next:{title:"What is a Verse Extension?",permalink:"/Verse-Extension-Documentation/docs/what-is-an-extension"}},p=[{value:"Your Application",id:"your-application",children:[{value:"Application Properties",id:"application-properties",children:[]}]},{value:"When to use the built-in endpoint",id:"when-to-use-the-built-in-endpoint",children:[{value:"Local File Data Provider",id:"local-file-data-provider",children:[]},{value:"Hosted File Data Provider",id:"hosted-file-data-provider",children:[]}]},{value:"When to use the custom endpoint",id:"when-to-use-the-custom-endpoint",children:[{value:"Example Response Data",id:"example-response-data",children:[]}]},{value:"Notes.ini Parameter Overview",id:"notesini-parameter-overview",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you do not have a deployment ready application, you should take a look at the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"./getting-started"}),"example applications"))," for reference or the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"./what-is-an-extension"}),"extension docs"))," to start your own."),Object(r.b)("h2",{id:"your-application"},"Your Application"),Object(r.b)("p",null,"All applications should be stored in a file ",Object(r.b)("inlineCode",{parentName:"p"},"applications.json")," with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'[\n  {\n    "name": "App1",\n    "title": "Sample Application",\n    "description": "A sample app to extend Verse",\n    "extensions": [],\n    "services": ["Verse"]\n  },\n  {\n    "name": "App2",\n    ......\n  }\n]\n')),Object(r.b)("h3",{id:"application-properties"},"Application Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Definition"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the name of the application (must be unique)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the title of your application")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"description"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a description of what the application should do")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"extensions"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"an array of extension definitions (",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"./what-is-an-extension"}),"What is an Extension?"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"services"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"an array of services the extension is deployed to. ",Object(r.b)("strong",{parentName:"td"},'All HCL Verse extensions should include "Verse" as a supported service'))))),Object(r.b)("p",null,"Production ready, HCL Verse applications should be deployed to Domino. There are two different methods of deployment:  "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"using the built-in endpoint"),Object(r.b)("li",{parentName:"ol"},"using a custom endpoint")),Object(r.b)("h2",{id:"when-to-use-the-built-in-endpoint"},"When to use the built-in endpoint"),Object(r.b)("p",null,"HCL Verse on premises exposes a built-in endpoint to serve an application and should be used if the application does not need to be dynamically loaded (the applications JSON is a static file). The ",Object(r.b)("inlineCode",{parentName:"p"},"applications.json")," can either be loaded as a ",Object(r.b)("strong",{parentName:"p"},"local file")," on the Domino server via path name or served as a ",Object(r.b)("strong",{parentName:"p"},"hosted file")," via HTTP. The ",Object(r.b)("inlineCode",{parentName:"p"},"VOP_Extensibility_Data_Provider_Name")," notes.ini parameter specifies which data provider should be used and can be set to ",Object(r.b)("inlineCode",{parentName:"p"},"localFileProvider")," (",Object(r.b)("strong",{parentName:"p"},"default"),") or ",Object(r.b)("inlineCode",{parentName:"p"},"httpDataProvider"),". ",Object(r.b)("em",{parentName:"p"},"The data provider will periodically check the source applications.json file for updates, so you don\u2019t have to restart the server after a new version of applications.json is deployed.")),Object(r.b)("h3",{id:"local-file-data-provider"},"Local File Data Provider"),Object(r.b)("p",null,"Serving applications locally is easy to do with the localFileProvider. Steps to deploy:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Deploy the ",Object(r.b)("inlineCode",{parentName:"li"},"applications.json")," file to ",Object(r.b)("strong",{parentName:"li"},"Domino")),Object(r.b)("li",{parentName:"ol"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"VOP_Extensibility_Data_Provider_Name")," to ",Object(r.b)("inlineCode",{parentName:"li"},"localFileProvider")," or leave it blank since it defaults to the desired setting"),Object(r.b)("li",{parentName:"ol"},"Specify the ",Object(r.b)("strong",{parentName:"li"},"path")," to the applications JSON with the notes.ini parameter: ",Object(r.b)("inlineCode",{parentName:"li"},"VOP_Extensibility_Applications_Json_FilePath=D:\\example\\applications.json"))),Object(r.b)("h3",{id:"hosted-file-data-provider"},"Hosted File Data Provider"),Object(r.b)("p",null,"Alternatively, the applications JSON can be served via an HTTP server. Steps to deploy:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Deploy the ",Object(r.b)("inlineCode",{parentName:"li"},"applications.json")," file to the ",Object(r.b)("strong",{parentName:"li"},"HTTP server")),Object(r.b)("li",{parentName:"ol"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"VOP_Extensibility_Data_Provider_Name")," to ",Object(r.b)("inlineCode",{parentName:"li"},"httpDataProvider")),Object(r.b)("li",{parentName:"ol"},"Specify the ",Object(r.b)("strong",{parentName:"li"},"HTTP URL")," to the applications JSON with the notes.ini parameter: ",Object(r.b)("inlineCode",{parentName:"li"},"VOP_Extensibility_Applications_Json_URL=https://example.com/vop/applications.json"))),Object(r.b)("h2",{id:"when-to-use-the-custom-endpoint"},"When to use the custom endpoint"),Object(r.b)("p",null,"Sometimes it might be useful to dynamically serve applications using code. If that is the case, then you will need to implement and use a custom endpoint. It is important to note that the endpoint response format must match, exactly, that of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./domino-server-deployment#example-response-data"}),"HCL Connections Appregistry API"),". Otherwise, Verse may be unable to parse the information. Steps to deploy:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Configure custom endpoint should serve the response data"),Object(r.b)("li",{parentName:"ol"},"Specify the ",Object(r.b)("strong",{parentName:"li"},"URL")," of the custom endpoint with the notes.ini parameter: ",Object(r.b)("inlineCode",{parentName:"li"},"VOP_Extensibility_Endpoint_URL=https://rest.example.com/vop/appregistry/services/Verse/applications"))),Object(r.b)("h3",{id:"example-response-data"},"Example Response Data"),Object(r.b)("p",null,"The items attribute of the response is an array of the applications defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"applications.json"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'{\n  /* The items list contains ALL registered applications and extensions */\n  // highlight-start\n  "items": [\n    {\n      "name": "App1",\n      "services": ["Verse"],\n      "extensions": [\n        {\n          /* Extensions */\n        }\n      ]\n    },\n    {\n      "name": "App2",\n      ......\n    }\n  ]\n  // highlight-end\n  "offset": 0,\n  "limit": 0,\n  "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0",\n  "first": {\n    "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0"\n  },\n  "prev": {\n    "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0"\n  },\n  "next": {\n    "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0"\n  },\n  "last": {\n    "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0"\n  },\n}\n')),Object(r.b)("h2",{id:"notesini-parameter-overview"},"Notes.ini Parameter Overview"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Values"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"VOP_Extensibility_Data_Provider_Name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"directs domino where to locate the ",Object(r.b)("inlineCode",{parentName:"td"},"applications.js")," when using the built-in endpoint"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"localFileProvider", "httpDataProvider"'),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"localFileProvider"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"VOP_Extensibility_Applications_Json_FilePath"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a path to the ",Object(r.b)("inlineCode",{parentName:"td"},"applications.json")," on the domino server"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{String} filePath"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"VOP_Extensibility_Applications_Json_URL"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"an HTTP URL to where the `applications.json`` is served"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{String} URL"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"VOP_Extensibility_Endpoint_URL"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"an custom endpoint URL where configured, application, response data can be retrieved"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"{String} URL"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"N/A")))))}s.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,O=b["".concat(o,".").concat(m)]||b[m]||d[m]||r;return n?i.a.createElement(O,l(l({ref:t},c),{},{components:n})):i.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);