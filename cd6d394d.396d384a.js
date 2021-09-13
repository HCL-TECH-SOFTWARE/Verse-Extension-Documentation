(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(88)),o=n(92),c={id:"third-party-chat",title:"Third Party Chat"},s={unversionedId:"third-party-chat",id:"third-party-chat",isDocsHomePage:!1,title:"Third Party Chat",description:"This sample demonstrates how to use the Disable Sametime extension in conjunction with the Templated Link extension to integrate third party chat and meeting services in Verse.",source:"@site/docs/third-party-chat.md",permalink:"/verse-developer/docs/third-party-chat",sidebar:"tutorials_examples",previous:{title:"Live Text Widget",permalink:"/verse-developer/docs/live-text-widget"},next:{title:"Third Party File Repository",permalink:"/verse-developer/docs/third-party-file-repository"}},l=[{value:"Add the Disable Sametime Extension",id:"add-the-disable-sametime-extension",children:[]},{value:"Add the Templated Link Chat Extension",id:"add-the-templated-link-chat-extension",children:[]},{value:"Add the Templated Link Meeting Extension",id:"add-the-templated-link-meeting-extension",children:[]},{value:"Test it Out",id:"test-it-out",children:[]},{value:"How it Works",id:"how-it-works",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This sample demonstrates how to use the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"./extension-points#disable-sametime"}),"Disable Sametime"))," extension in conjunction with the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"./extension-points#templated-link"}),"Templated Link"))," extension to integrate third party chat and meeting services in Verse."),Object(i.b)("h2",{id:"add-the-disable-sametime-extension"},"Add the Disable Sametime Extension"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "name": "Chat Service Integration Sample",\n  "title": "Chat Service Integration Sample",\n  "description": "This is a sample to integrate third-party chat and meeting service in Verse",\n  "extensions": [\n    // highlight-start\n    {\n      "type": "com.ibm.appreg.ext.disableSametime"\n    }\n    // highlight-end\n  ],\n  "services": [\n    "Verse"\n  ]\n}\n')),Object(i.b)("h2",{id:"add-the-templated-link-chat-extension"},"Add the Templated Link Chat Extension"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "name": "Chat Service Integration Sample",\n  "title": "Chat Service Integration Sample",\n  "description": "This is a sample to integrate third-party chat and meeting service in Verse",\n  "extensions": [\n    {\n      "type": "com.ibm.appreg.ext.disableSametime"\n    },\n    // highlight-start\n    {\n      "type": "com.ibm.appreg.ext.templatedLink",\n      "object": "com.ibm.appreg.object.person",\n      "payload": {\n        "text": "Sample 3rd Party Chat",\n        "icon": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbABsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9+z0rwD40f8FLfhZ8DtV1C11C+1zVl0WXyNVudF0mfULbSnBAKyyxjbuUkBlUsynggEV7T4/1a/0HwNrF7pVoL/U7SymmtLZs7Z5VQlFOOcFgM45x05r47+BPie5+EniTQNdj+OL+OPC8saWut6Hrd5FaGzLgRpcWqmONQqZOYAArADyxuUB/fybLYV6dSvVg5qNklFtNt+fLJLyva/Ru1j4viniCrgq9HCUJKDnducoqUYpW6c8G9/s8zXVJan1b8Ffjv4R/aI8D2/iPwXr1j4g0e5A23Fs+dpxnaynDK2CDhgDyK66vk/8AZ4j8PWf7dHiK9+G9pAnhfxHo7y+Ihbo0cY1COfckxVsFd3nOAoGCWcjo2PrAVzZ1l8MJiFCndJpStL4o36S818rqzsrnpcM5vUzHCOpWtzRk4txvySt9qN9eV3++4jdK+DviR/wTUv8A4yfHNms9P1z4e+CNOvnuIorXU4roahMAwSdYxIv2eMZJVBuOSTx2+8qKMqzvG5bOVTBT5XJWf/Dbel1p0sy8+4Yy7OYwhmEOZQbt033V1aSWz91q9le60PL/ANmD9k7wz+yt4au7PQftdxd6myPfXtzIXluim7bn6F3Pc5Y5J4x6gOKKK4cViq2Jqyr4iTlOW7e7PSy7LsNgMNHCYOHJTjsl9731bb1bererP//Z",\n        "href": "${extensionPath}/chat-service/chat-service.html",\n        "locator": "chat"\n      }\n    }\n    // highlight-end\n  ],\n  "services": [\n    "Verse"\n  ]\n}\n')),Object(i.b)("h2",{id:"add-the-templated-link-meeting-extension"},"Add the Templated Link Meeting Extension"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "name": "Chat Service Integration Sample",\n  "title": "Chat Service Integration Sample",\n  "description": "This is a sample to integrate third-party chat and meeting service in Verse",\n  "extensions": [\n    {\n      "type": "com.ibm.appreg.ext.disableSametime"\n    },\n    {\n      "type": "com.ibm.appreg.ext.templatedLink",\n      "object": "com.ibm.appreg.object.person",\n      "payload": {\n        "text": "Sample 3rd Party Chat",\n        "icon": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbABsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9+z0rwD40f8FLfhZ8DtV1C11C+1zVl0WXyNVudF0mfULbSnBAKyyxjbuUkBlUsynggEV7T4/1a/0HwNrF7pVoL/U7SymmtLZs7Z5VQlFOOcFgM45x05r47+BPie5+EniTQNdj+OL+OPC8saWut6Hrd5FaGzLgRpcWqmONQqZOYAArADyxuUB/fybLYV6dSvVg5qNklFtNt+fLJLyva/Ru1j4viniCrgq9HCUJKDnducoqUYpW6c8G9/s8zXVJan1b8Ffjv4R/aI8D2/iPwXr1j4g0e5A23Fs+dpxnaynDK2CDhgDyK66vk/8AZ4j8PWf7dHiK9+G9pAnhfxHo7y+Ihbo0cY1COfckxVsFd3nOAoGCWcjo2PrAVzZ1l8MJiFCndJpStL4o36S818rqzsrnpcM5vUzHCOpWtzRk4txvySt9qN9eV3++4jdK+DviR/wTUv8A4yfHNms9P1z4e+CNOvnuIorXU4roahMAwSdYxIv2eMZJVBuOSTx2+8qKMqzvG5bOVTBT5XJWf/Dbel1p0sy8+4Yy7OYwhmEOZQbt033V1aSWz91q9le60PL/ANmD9k7wz+yt4au7PQftdxd6myPfXtzIXluim7bn6F3Pc5Y5J4x6gOKKK4cViq2Jqyr4iTlOW7e7PSy7LsNgMNHCYOHJTjsl9731bb1bererP//Z",\n        "href": "${extensionPath}/chat-service/chat-service.html",\n        "locator": "chat"\n      }\n    },\n    // highlight-start\n    {\n      "type": "com.ibm.appreg.ext.templatedLink",\n      "object": "com.ibm.appreg.object.person",\n      "payload": {\n        "text": "WebEx meeting",\n        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAARbSURBVEhL7ZZ7TJVlHMdfmsFqXRaLOYJic7OsQOBc4NxvhIhoDmfkFunQ8IgHsYwpSGCwnEoZt5kKyYhkGkoRIKFcLPvTP1picFx0mWlbzSFnh8vBc/n2ex9eqMN7jrxtzf7xuz3nOed5f8/7eX6X53kOh/9J98H3TJLAPmpueKGo6wR3yA7unQsIyW/HImsruKwTWJ9/DB7BTqoWBLvdboRXDoCrGwRXOYSoonO4QeN/UrtJ7bG1NYhKq0a05QjiMnbyUyQpCPgOLd+LP+jbQycmwB3/DROTLsDjBn36y0vN58J3P9HL1r6AsI2JmKL5Hv6Bzz1jE0CBwXcm8SN1YZ/8gqrvnUIIvawXhVMY4Lu+65fx6KZ4RG6XYZSW6GKrCqzAYI8XoV0OaE5eZtOliAd7fNMIz01ETIESy0vkfGEElQg8TS201QHuNJ9J6fIxihdP2eRY+nYylGVqpL9nodHA9AAee8G13sSY8EuqeI9dlN2YAgVii1RQV6iRWqWZS8V8icAxLbRdTlGl/Gu5qRidWFaogKxUBeMBLdLrdGj8tlp47i8RmGsbg6l5EP0/O4QRafJRpEwFq5DAe1uuQsoHWqw5psem5lTBwl8i8AMtv6NtxIXuq6NCdoJXpp/oBJEXa1lu9Qc0SKvRIbPRhM1tKwUDf4nAIfW/omd4HOeHHei2j2PKKw08TctMKFWy3Jrf12H1R0ZkNZvwRucKwcJfYo8bhgnsZODzw7dx8doYq/S77g0qIMPuNKjLtCy3adUGrGswIvszM7b1SAw1Vz2EMyOeOY9nFuDApPBcJDrh4JuCslQB7X4Ny23GEQOymozI+cKCnf1SwVVXsKToDHrst+egs+3SDzdm/P7nFqEB3R7y9l0NzJVarKwxIvNjM7JPmWDtsqBowCIY+ksEjjj4Fd0+vegfuiUCd9ud6LOPYkKw5eWkw1FdooB+vw6pH+pZbl9pMiPnbAryL5jw+ZVawdJfIjB/vXElF3GSrp754NnG10DfiAPXx31QlKihKVfCfEjP9u26BgteP21EXqcFbw5QYQWpTRGYP5kfLOhAWF5XQCjf+Gh8MziFRVnL8MTWeDxti2dF9fJxHTZ8asCGZjNs3UYU96VTJuimCyARmImuPy63HaGra9F9TRzyXqr2J7coEL7tRURtl2PJDgWe261E/N5kJJUZkHcuHYWXVP61ME8Bwfwqx6mPXlOPxWl16Bi5xWBfX51C8dkWPLIxDhFb5Ii0yvHMjiQ8+1YSEvZqkbwvCZu/NGBXn5ldiXfhBvGYXeR0KNDMiNR6RK46ipDM5Qh9NRYPZ8ciPCcRi60yRNtkzNu4QhWSKxKwtd0IW28SLdxJufWydwRTEPDf8ng8eDw1jv5ZPE9expOHFNY9KsgopLqDBmQc1eO1Rj2s7S+hoj1XmLWwFgTPappCp8pdgaW7NFCUq5FSa4TpsBbrm3Q43LGP2XhmdrkkSQb/17oPvkcC/gLPZ5Rn6HFpXQAAAABJRU5ErkJggg==",\n        "href": "https://webex.com/join/${emails}",\n        "locator": "meeting"\n      }\n    }\n    // highlight-end\n  ],\n  "services": [\n    "Verse"\n  ]\n}\n')),Object(i.b)("h4",{id:"extension-properties"},"Extension Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Definition"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the extension point  (",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"./extension-points"}),"List of Extension Points"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a target within the Verse UI")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"payload"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"JSON object that specifies properties specific to the extension")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the display text of the link in the UI")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"icon"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a base64 encoded data uri")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"href"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a fully-qualified URL")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"locator"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a more specfic target within the Verse UI ",Object(i.b)("strong",{parentName:"td"},"(chat or meeting)"))))),Object(i.b)("h2",{id:"test-it-out"},"Test it Out"),Object(i.b)(o.a,{path:"samples/third-party-chat.gif",mdxType:"Expandable"}),Object(i.b)("h2",{id:"how-it-works"},"How it Works"),Object(i.b)("p",null,"This example application uses a combination of extensions to customize the chat and meeting actions in HCL Verse. The Disable Sametime extension does not have any required properties but plays an essential role in this customization. It removes the Sametime Chat and Meeting actions from the Verse Important to Me bar and Business Cards. This allows the latter two extensions to override those actions."),Object(i.b)("p",null,"Additionally, there are two Templated Widget extensions; one to replace the Sametime Chat action and the other for the Sametime Meeting action, distinguished by the ",Object(i.b)("inlineCode",{parentName:"p"},"locator")," property. As can be seen in the demo above, the Sametime Chat and Meeting Icons are infact the ones specified in the extensions. Clicking on the new ",Object(i.b)("strong",{parentName:"p"},"chat")," icon will open to the sample ",Object(i.b)("inlineCode",{parentName:"p"},"chat-service.html")," web application and the new meeting will open to the specified URL."),Object(i.b)("p",null,"The templated link extension for the meeting action leverages the extension's ",Object(i.b)("inlineCode",{parentName:"p"},"template variable")," to add a user's email as a query parameter. Query parameters are an easy way to pass data through a URL. Take a look at the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"./extension-points#templated-link"}),"Templated Link"))," extension documentation for more information."))}b.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},A=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),A=a,m=b["".concat(o,".").concat(A)]||b[A]||d[A]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=A;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(89),r=n(91);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},91:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),i=(n(47),n(90)),o=function(e){var t=e.path,n=r.a.useState(!1),a=n[0],o=n[1],c=r.a.useState({}),s=c[0],l=c[1],p=r.a.useRef(null),b=function(e){e.preventDefault(),o(!a)},d=function(e){a&&(e.preventDefault(),o(!1))};return r.a.useEffect((function(){return document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}}),[]),r.a.useEffect((function(){var e=document.getElementsByClassName("navbar")[0];a&&p.current?(document.body.setAttribute("style","overflow:hidden;"),l({top:e.offsetTop})):(document.body.removeAttribute("style"),p.current.focus(),l({}))}),[a]),r.a.createElement("div",{onKeyPress:b,onClick:b,className:a?"expandable-container expanded":"expandable-container",ref:p,style:s},r.a.createElement("img",{tabIndex:"0",className:a?"image image-expanded":"image",src:Object(i.a)(t)}))}}}]);