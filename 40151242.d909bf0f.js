(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(88)),r={id:"extension-data-api",title:"Extension Data API"},c={unversionedId:"extension-data-api",id:"extension-data-api",isDocsHomePage:!1,title:"Extension Data API",description:"Adding extensions that use the Verse Data API can make Verse less secure. Follow the Secure Deployment Practices guidelines before deploying your application to mitigate any vulnerabilities that may have been introduced.",source:"@site/docs/extension-data-api.md",permalink:"/Verse-Extension-Documentation/docs/extension-data-api",sidebar:"docs",previous:{title:"Extension Points",permalink:"/Verse-Extension-Documentation/docs/extension-points"},next:{title:"Loading an Application for Development",permalink:"/Verse-Extension-Documentation/docs/development"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Passing Data in a URL",id:"passing-data-in-a-url",children:[]},{value:"Passing Data w/Cross-Document Messaging",id:"passing-data-wcross-document-messaging",children:[{value:"The Handshake",id:"the-handshake",children:[]},{value:"Parsing the Data",id:"parsing-the-data",children:[]}]},{value:"Context Data Objects",id:"context-data-objects",children:[{value:"Mail Compose",id:"mail-compose",children:[]},{value:"Mail Read",id:"mail-read",children:[]},{value:"Person",id:"person",children:[]}]}],p={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Adding extensions that use the Verse Data API can make Verse less secure. Follow the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"best-security-practices"}),"Secure Deployment Practices"))," guidelines before deploying your application to mitigate any vulnerabilities that may have been introduced."))),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"The Verse Data API is what enables your external application to communicate with Verse. There are two ways Verse is able to send data to your application:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"passing data as a URL query string parameter"),Object(o.b)("li",{parentName:"ol"},"using what\u2019s known as a ",Object(o.b)("inlineCode",{parentName:"li"},"context object"),", it is passed in the message event object of the ",Object(o.b)("inlineCode",{parentName:"li"},"window.postMessage")," function")),Object(o.b)("h2",{id:"passing-data-in-a-url"},"Passing Data in a URL"),Object(o.b)("p",null,"Your application can receive data from Verse through URL query string parameters, which are added to the URL specified in the extension. There are two ways to format the URL query string so that it will be replaced with the desired data:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"${propertyName.property}")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"<propertyName.property>"))),Object(o.b)("p",null,"For example, to send the name of a user from a business card extension to your application, specify the following URL in your extension:  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// ${propertyName.property} format\n"https://<your-domain-here>/extension.html?username=${profile.name}"\n\n// <propertyName.property> format\n"https://<your-domain-here>/extension.html?username=<profile.name>"\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"profile.name")," property is a variable that contains the user\u2019s name. The valid data parameters are described in the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"#context-data-objects"}),"Context Objects"))," section. "),Object(o.b)("p",null,"Your application is responsible for retrieving the URL query parameter with the desired data."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.sitepoint.com/get-url-parameters-with-javascript/"}),"Getting URL Parameters with JavaScript"))))),Object(o.b)("h2",{id:"passing-data-wcross-document-messaging"},"Passing Data w/Cross-Document Messaging"),Object(o.b)("p",null,"You can also use cross-document messaging instead to communicate with Verse. To handle messages from Verse, your web application needs to register an event listener by using:  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'window.addEventListener("message", function(event) {\n  // handle message event code\n});\n')),Object(o.b)("h3",{id:"the-handshake"},"The Handshake"),Object(o.b)("p",null,"The data flow begins with a ",Object(o.b)("inlineCode",{parentName:"p"},"handshake")," interaction between your application and Verse. In your application code, you must send a ",Object(o.b)("inlineCode",{parentName:"p"},"com.ibm.verse.application.loaded")," message back to the Verse window to inform Verse that your web application is ready to receive data:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('message', function(evt) {\n  var verseApiType = evt && evt.data && evt.data.verseApiType;\n  if (verseApiType === 'com.ibm.verse.ping.application.loaded') {\n    evt.source.postMessage({\n      verseApiType: 'com.ibm.verse.application.loaded'\n    }, evt.origin);\n  }\n}, false);\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Extensions that use cross-document messaging must add the ",Object(o.b)("inlineCode",{parentName:"p"},"features")," property with the value ",Object(o.b)("inlineCode",{parentName:"p"},'["core"]')," to enable communication with Verse. Take a look at an example ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"extension-points#widget"}),"widget extension"))," with this feature."))),Object(o.b)("h3",{id:"parsing-the-data"},"Parsing the Data"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"message")," event received by your application contains a ",Object(o.b)("inlineCode",{parentName:"p"},"data")," object, which has an object called ",Object(o.b)("inlineCode",{parentName:"p"},"verseApiData"),"."),Object(o.b)("p",null,"If the event is triggered by a widget with multiple actions, you should verify the ",Object(o.b)("inlineCode",{parentName:"p"},"actionId")," property of the ",Object(o.b)("inlineCode",{parentName:"p"},"verseApiData")," object matches the expected, unique, action ",Object(o.b)("inlineCode",{parentName:"p"},"id")," to ensure that you only run your code for the correct message events."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'window.addEventListener("message", function(event) {\n  if (event.data.verseApiData.actionId === "unique.action.id") {\n    var verseData = event.data.verseApiData.context; // The context data\n  }\n}\n')),Object(o.b)("p",null,"The information that you need from Verse is stored in the ",Object(o.b)("inlineCode",{parentName:"p"},"context")," property which contains different data depending on where, in the Verse UI, it is called from."),Object(o.b)("h2",{id:"context-data-objects"},"Context Data Objects"),Object(o.b)("p",null,"The information contained in the context object depends on the where the action is called. For example, adding a ",Object(o.b)("inlineCode",{parentName:"p"},"mail.read")," action extension sends information relating to the selected mail: ",Object(o.b)("inlineCode",{parentName:"p"},"title"),", ",Object(o.b)("inlineCode",{parentName:"p"},"subject"),", ",Object(o.b)("inlineCode",{parentName:"p"},"body"),", ",Object(o.b)("inlineCode",{parentName:"p"},"etc"),". Whereas, adding a ",Object(o.b)("inlineCode",{parentName:"p"},"com.ibm.appreg.object.person")," action extension sends the person\u2019s ",Object(o.b)("inlineCode",{parentName:"p"},"name"),", ",Object(o.b)("inlineCode",{parentName:"p"},"email"),", ",Object(o.b)("inlineCode",{parentName:"p"},"phone"),", ",Object(o.b)("inlineCode",{parentName:"p"},"etc."),"."),Object(o.b)("p",null,"There are three context objects: ",Object(o.b)("inlineCode",{parentName:"p"},"Mail Compose"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Mail Read"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Person"),"."),Object(o.b)("h3",{id:"mail-compose"},"Mail Compose"),Object(o.b)("p",null,"A context object with mail compose data is passed to actions placed in the Mail Compose view (",Object(o.b)("inlineCode",{parentName:"p"},"mail.compose"),")."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"recipientBcc")," and ",Object(o.b)("inlineCode",{parentName:"p"},"attachments")," properties are only available when they are enabled in permissions property of a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"extension-points#widget-actions"}),"Widget Action"))," or ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"extension-points#beforeonsend"}),"BeforeOnSend"))," definition."))),Object(o.b)("h4",{id:"example-mail-compose-data"},"Example Mail Compose Data"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "attachments": [\n    {\n      "assignedName": "",\n      "name": "",\n      "size": "",\n      "selected": "",\n      "uploaded": "",\n    }\n  ],\n  "body": "",\n  "contextId": "",\n  "id": "",\n  "recipientBcc": [\n    {\n      "displayName": "",\n      "emailAddress": ""\n    }\n  ],\n  "recipientCC": [\n    {\n      "displayName": "",\n      "emailAddress": ""\n    }\n  ],\n  "recipientTo": [\n    {\n      "displayName": "",\n      "emailAddress": ""\n    }\n  ],\n  "subject": ""\n}\n')),Object(o.b)("h3",{id:"mail-read"},"Mail Read"),Object(o.b)("p",null,"A context object with mail read data is passed to actions placed in the Mail Read view (",Object(o.b)("inlineCode",{parentName:"p"},"mail.read"),")."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"recipientBcc")," and ",Object(o.b)("inlineCode",{parentName:"p"},"attachments")," properties are only available when they are enabled in permissions property of a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"extension-points#widget-actions"}),"Widget Action"))," definition."))),Object(o.b)("h4",{id:"example-mail-read-data"},"Example Mail Read Data"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "attachments": [\n    {\n      "assignedName": "",\n      "name": "",\n      "size": "",\n      "selected": "",\n      "uploaded": "",\n    }\n  ],\n  "body": "",\n  "contextId": "",\n  "id": "",\n  "isPreventCopy": "",\n  "recipientBcc": [\n    {\n      "displayName": "",\n      "emailAddress": ""\n    }\n  ],\n  "recipientCC": [\n    {\n      "displayName": "",\n      "emailAddress": ""\n    }\n  ],\n  "recipientTo": [\n    {\n      "displayName": "",\n      "emailAddress": ""\n    }\n  ],\n  "sender": {\n    "displayName": "",\n    "emailAddress": ""\n  },\n  "subject": "",\n  "timeSent": ""\n}\n')),Object(o.b)("h3",{id:"person"},"Person"),Object(o.b)("p",null,"A context object with person data is passed to actions placed on the back of the person business cards (",Object(o.b)("inlineCode",{parentName:"p"},"com.ibm.appreg.object.person"),")."),Object(o.b)("h4",{id:"example-person-data"},"Example Person Data"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "currentUser": {\n    "company": "",\n    "displayName": "",\n    "fax": "",\n    "id": "",\n    "jobTitle": "",\n    "mobilePhone": "",\n    "name": {\n      "displayName": "",\n      "displayType": "",\n      "familyName": "",\n      "formatted": "",\n      "givenName": "",\n      "honorificPrefix": "",\n      "honorificSuffix": "",\n      "middleName": ""\n    },\n    "network": "",\n    "photo": "",\n    "photoUrl": "",\n    "primaryAddress": "",\n    "primaryEmail": "",\n    "primaryPhone": "",\n    "status": "",\n    "tags": "",\n    "website": ""\n  },\n  "profile": {\n    "company": "",\n    "displayName": "",\n    "fax": "",\n    "id": "",\n    "jobTitle": "",\n    "mobilePhone": "",\n    "name": {\n      "displayName": "",\n      "displaytype": "",\n      "familyName": "",\n      "formatted": "",\n      "givenName": "",\n      "honorificPrefix": "",\n      "honorificSuffix": "",\n      "middleName": ""\n    },\n    "network": "",\n    "orgId": "",\n    "photo": "",\n    "photoUrl": "",\n    "primaryAddress": "",\n    "primaryEmail": "",\n    "primaryPhone": "",\n    "status": "",\n    "tags": "",\n    "website": ""\n  }\n}\n')))}d.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,h=b["".concat(r,".").concat(m)]||b[m]||l[m]||o;return n?i.a.createElement(h,c(c({ref:t},p),{},{components:n})):i.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);