"use strict";(self.webpackChunkverse_developer=self.webpackChunkverse_developer||[]).push([[195],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5924:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"best-security-practices",title:"Best Security Practices"},l=void 0,c={unversionedId:"best-security-practices",id:"best-security-practices",title:"Best Security Practices",description:"There are some guidelines your organization should follow to make your application more secure.",source:"@site/docs/best-security-practices.md",sourceDirName:".",slug:"/best-security-practices",permalink:"/Verse-Extension-Documentation/docs/best-security-practices",tags:[],version:"current",frontMatter:{id:"best-security-practices",title:"Best Security Practices"},sidebar:"docs",previous:{title:"Loading an Application for Development",permalink:"/Verse-Extension-Documentation/docs/development"}},p={},d=[{value:"Running the Application from a Different Origin",id:"running-the-application-from-a-different-origin",level:2},{value:"Cross-Scripting Attack",id:"cross-scripting-attack",level:2},{value:"Verify the Origin and Target",id:"verify-the-origin-and-target",level:3},{value:"Validate the Message",id:"validate-the-message",level:3},{value:"URL Scheme Whitelist",id:"url-scheme-whitelist",level:2},{value:"Default URL scheme whitelist",id:"default-url-scheme-whitelist",level:3},{value:"Custom URL Scheme Whitelist",id:"custom-url-scheme-whitelist",level:3},{value:"External Security Resources",id:"external-security-resources",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are some guidelines your organization should follow to make your application more secure."),(0,a.kt)("h2",{id:"running-the-application-from-a-different-origin"},"Running the Application from a Different Origin"),(0,a.kt)("p",null,"HCL recommends hosting your web applications from a different origin than the Verse application. Web apps that run from the same origin as Verse have full access to the Verse application page content and therefore are, potentially, less secure. Any web applications that run from your Verse domain should be reviewed and fully trusted by your organization."),(0,a.kt)("h2",{id:"cross-scripting-attack"},"Cross-Scripting Attack"),(0,a.kt)("p",null,"If your application is using cross-document messaging to communicate with Verse, it can be vulnerable to cross-site scripting attack unless certain security implementations are followed carefully. This section is specific to extensions that use widget actions and leverage the verseDataApi."),(0,a.kt)("h3",{id:"verify-the-origin-and-target"},"Verify the Origin and Target"),(0,a.kt)("p",null,"When receiving messages, always verify origin of the message. Whenever using the ",(0,a.kt)("strong",{parentName:"p"},"verseDataApi")," you should add a check to ensure the message is coming from a verified origin. When a message event is received, immediately verify its origin before executing any other code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("message", function(event) {\n  /**\n   * You should add the following code to check the origin of the message and prevent\n   * the rest of the JavaScript code from executing if the message origin does not match\n   * your Verse domain or the expected origin\n   */\n  if (event.origin !== "<your-Verse-domain-here>"){\n    return;\n  }\n')),(0,a.kt)("p",null,"Likewise, when sending message, you should always specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"targetOrigin")," which provides control over where messages are sent. From the official ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"},"Web API docs")),":  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},'"Always provide a specific targetOrigin, not ',"*",", if you know where the other window's document should be located. Failing to provide a specific target discloses the data you send to any interested malicious site.\""))),(0,a.kt)("p",null,"In the sample HTML page, when posting message from the sample page back to Verse, we specify the targetOrigin to be the origin of the previous event we received, ",(0,a.kt)("inlineCode",{parentName:"p"},"event.origin"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you verified the origin of the message by implementing the suggestion in the previous tip, you can be sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"event.origin")," here would be your, verified, Verse domain."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"event.source.postMessage(loaded_message, event.origin);\n")),(0,a.kt)("h3",{id:"validate-the-message"},"Validate the Message"),(0,a.kt)("p",null,"Always validate the messages being passed; it is the responsibility of the extension developer to ensure data received is treated appropriately."),(0,a.kt)("p",null,"This includes trying to use ",(0,a.kt)("inlineCode",{parentName:"p"},"innerText")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"textContent")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"innerHTML")," when inserting data value into the DOM which will prevent malicious code being inserted and executed."),(0,a.kt)("p",null,"For example, with the HTML sample page, if it used ",(0,a.kt)("inlineCode",{parentName:"p"},"insertAdjacentHTML")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"innerText")," to display the stringified JSON data from the user\u2019s side and a mail subject contained the following line (either in the Mail Compose View or Mail Read View) then when the extension is triggered, a button would be added onto the application\u2019s HTML page, which when clicked, will show an alert:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"</div><button onclick='alert()'>Click me!</button><div>\n")),(0,a.kt)("p",null,"This is a proof of concept to show how a malicious user could take advantage of this vulnerability to execute their own script."),(0,a.kt)("p",null,"To learn more about cross-site scripting attack, please refer to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://owasp.org/"},"OWASP site")),". Google Chrome has also provided some guidance on how to make your web extension more secure; please refer to their ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://developer.chrome.com/extensions/security"},"documentation")),"."),(0,a.kt)("h2",{id:"url-scheme-whitelist"},"URL Scheme Whitelist"),(0,a.kt)("p",null,"Verse defines a ",(0,a.kt)("strong",{parentName:"p"},"URL Scheme Whitelist")," to restrict what URL schemes can be used in an extension URL when opened from Verse. "),(0,a.kt)("h3",{id:"default-url-scheme-whitelist"},"Default URL scheme whitelist"),(0,a.kt)("p",null,"The URL schemes ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"https"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"notes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"im"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sip"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tel")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"xmpp")," are allowed on Verse by default. If the extension is deployed via browser extension, then ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome-extension")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"moz-extension")," URL schemes are also allowed by default. However, if the extension is opened in a new window or new tab, then only ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"https"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome-extension")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"moz-extension")," URL schemes are allowed by default."),(0,a.kt)("h3",{id:"custom-url-scheme-whitelist"},"Custom URL Scheme Whitelist"),(0,a.kt)("p",null,"You can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"VOP_Extensibility_Url_Scheme_Whitelist")," parameter in ",(0,a.kt)("strong",{parentName:"p"},"notes.ini"),", introduced in Verse on-Premises V1.0.4, to allow additional custom URL schemes. Schemes should be added as a comma-separated string as shown in the example below."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example Custom URL Scheme Whitelist"),(0,a.kt)("br",{parentName:"p"}),"\n","In the below example, ",(0,a.kt)("inlineCode",{parentName:"p"},"ftp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"thunder")," schemes are added to custom URL scheme whitelist, thus, ftp and thunder schemes would be allowed in the extension URL.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VOP_Extensibility_Url_Scheme_Whitelist=ftp,thunder\n")),(0,a.kt)("h2",{id:"external-security-resources"},"External Security Resources"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://owasp.org/"},"OWASP")),(0,a.kt)("td",{parentName:"tr",align:null},"Open Web Application Security Project provides free, online, articles and resources for web security")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.chrome.com/extensions/security"},"Chrome Extension Security")),(0,a.kt)("td",{parentName:"tr",align:null},"Google Chrome's offical Web Extension security documentation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy"},"MDN Content Security Policy")),(0,a.kt)("td",{parentName:"tr",align:null},"MDN's official Content Security Policy documentation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml"},"URL Schemes")),(0,a.kt)("td",{parentName:"tr",align:null},"An extensive list of registered URL Schemes")))))}m.isMDXComponent=!0}}]);