(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePlugin=void 0;var r=n(97),o=n(118),i=n(119),a=function(t){return o.usePluginData("docusaurus-plugin-content-docs",t)};e.useActivePlugin=function(){var t=o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),e=r.useLocation().pathname;return i.getActivePlugin(t,e)},e.useVersions=function(t){return a(t).versions},e.useLatestVersion=function(t){var e=a(t);return i.getLatestVersion(e)},e.useActiveVersion=function(t){var e=a(t),n=r.useLocation().pathname;return i.getActiveVersion(e,n)},e.useActiveDocContext=function(t){var e=a(t),n=r.useLocation().pathname;return i.getActiveDocContext(e,n)},e.useDocVersionSuggestions=function(t){var e=a(t),n=r.useLocation().pathname;return i.getDocVersionSuggestions(e,n)}},104:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(111);e.a=function(t){return o.a.createElement(i.a,Object.assign({},t))}},111:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return vt}));var r,o,i,a,u=n(7),c=n.n(u),s=n(112),f=n.n(s),l=n(113),d=n.n(l),p=n(0),h=n.n(p),v=n(22),y=n.n(v),b="bodyAttributes",m="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),A="cssText",O="href",C="http-equiv",E="innerHTML",S="itemprop",j="name",P="property",L="rel",k="src",x="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",R="defer",N="encodeSpecialCharacters",M="onChangeClientState",V="titleTemplate",_=Object.keys(D).reduce((function(t,e){return t[D[e]]=e,t}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},q=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},W=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},K=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(t){var e=X(t,T.TITLE),n=X(t,V);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=X(t,I);return e||r||void 0},J=function(t){return X(t,M)||function(){}},$=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},G=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},Q=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+H(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===L&&"canonical"===t[n].toLowerCase()||c===L&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==E&&u!==A&&u!==S||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=y()({},r[u],o[u]);r[u]=c}return t}),[]).reverse()},X=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Z=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Z(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:t.requestAnimationFrame||Z,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,d=t.titleAttributes;ct(T.BODY,r),ct(T.HTML,o),ut(l,d);var p={baseTag:st(T.BASE,n),linkTags:st(T.LINK,i),metaTags:st(T.META,a),noscriptTags:st(T.NOSCRIPT,u),scriptTags:st(T.SCRIPT,s),styleTags:st(T.STYLE,f)},h={},v={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(v[t]=p[t].oldTags)})),e&&e(),c(t,h,v)},at=function(t){return Array.isArray(t)?t.join(""):t},ut=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(T.TITLE,e)},ct=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===E)n.innerHTML=e.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ft=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[D[n]||n]=t[n],e}),e)},dt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=lt(n,r),[h.a.createElement(T.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=ft(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+K(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case b:case m:return{toComponent:function(){return lt(e)},toString:function(){return ft(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=D[t]||t;if(n===E||n===A){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),h.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===E||t===A)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+K(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},pt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,d=t.titleAttributes;return{base:dt(T.BASE,e,r),bodyAttributes:dt(b,n,r),htmlAttributes:dt(m,o,r),link:dt(T.LINK,i,r),meta:dt(T.META,a,r),noscript:dt(T.NOSCRIPT,u,r),script:dt(T.SCRIPT,c,r),style:dt(T.STYLE,s,r),title:dt(T.TITLE,{title:l,titleAttributes:d},r)}},ht=f()((function(t){return{baseTag:G([O,x],t),bodyAttributes:$(b,t),defer:X(t,R),encode:X(t,N),htmlAttributes:$(m,t),linkTags:Q(T.LINK,[L,O],t),metaTags:Q(T.META,[j,w,C,P,S],t),noscriptTags:Q(T.NOSCRIPT,[E],t),onChangeClientState:J(t),scriptTags:Q(T.SCRIPT,[k,E],t),styleTags:Q(T.STYLE,[A],t),title:z(t),titleAttributes:$(g,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),pt)((function(){return null})),vt=(o=ht,a=i=function(t){function e(){return U(this,e),W(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return Y({},r,((e={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case T.TITLE:return Y({},o,((e={})[r.type]=a,e.titleAttributes=Y({},i),e));case T.BODY:return Y({},o,{bodyAttributes:Y({},i)});case T.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=Y({},e);return Object.keys(t).forEach((function(e){var r;n=Y({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return h.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[_[n]||n]=t[n],e}),e)}(F(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=F(t,["children"]),r=Y({},n);return e&&(r=this.mapChildrenToProps(e,r)),h.a.createElement(o,r)},q(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(h.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=pt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);vt.renderStatic=vt.rewind}).call(this,n(23))},112:function(t,e,n){"use strict";var r,o=n(0),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=t(s.map((function(t){return t.props}))),l.canUseDOM?e(c):n&&(c=n(c))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",u),l}}},113:function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var u,c,s,f=r(e),l=r(n);if(f&&l){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(f!=l)return!1;var d=e instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return e.getTime()==n.getTime();var h=e instanceof RegExp,v=n instanceof RegExp;if(h!=v)return!1;if(h&&v)return e.toString()==n.toString();var y=o(e);if((c=y.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!i.call(n,y[u]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(u=c;0!=u--;)if(!("_owner"===(s=y[u])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},118:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o})),n.d(e,"useAllPluginInstancesData",(function(){return i})),n.d(e,"usePluginData",(function(){return a}));var r=n(89);function o(){var t=Object(r.a)().globalData;if(!t)throw new Error("Docusaurus global data not found");return t}function i(t){var e=o()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function a(t,e){void 0===e&&(e="default");var n=i(t)[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+t+" and pluginId="+e);return n}},119:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;var r=n(97);e.getActivePlugin=function(t,e){var n=Object.entries(t).find((function(t){t[0];var n=t[1];return!!r.matchPath(e,{path:n.path,exact:!1,strict:!1})}));return n?{pluginId:n[0],pluginData:n[1]}:void 0},e.getLatestVersion=function(t){return t.versions.find((function(e){return e.name===t.latestVersionName}))},e.getActiveVersion=function(t,n){var o=e.getLatestVersion(t);return[].concat(t.versions.filter((function(t){return t!==o})),[o]).find((function(t){return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})}))},e.getActiveDocContext=function(t,n){var o,i,a=e.getActiveVersion(t,n),u=null==a?void 0:a.docs.find((function(t){return!!r.matchPath(n,{path:t.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:u,alternateDocVersions:u?(o=u.id,i={},t.versions.forEach((function(t){t.docs.forEach((function(e){e.id===o&&(i[t.name]=e)}))})),i):{}}},e.getDocVersionSuggestions=function(t,n){var r=e.getLatestVersion(t),o=e.getActiveDocContext(t,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},89:function(t,e,n){"use strict";var r=n(0),o=n(20);e.a=function(){var t=Object(r.useContext)(o.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},90:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n(89),o=n(91);function i(){var t=Object(r.a)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(u)return e+n;var f=!n.startsWith(e)?e+n.replace(/^\//,""):n;return s?t+f:f}(i,n,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},91:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},93:function(t,e,n){"use strict";function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}},94:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(13),a=n(91),u=n(10),c=Object(r.createContext)({collectLink:function(){}}),s=n(90),f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,n,l,d=t.isNavLink,p=t.to,h=t.href,v=t.activeClassName,y=t["data-noBrokenLinkCheck"],b=f(t,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),m=Object(s.b)().withBaseUrl,g=Object(r.useContext)(c),T=p||h,w=void 0!==T?function(t){return t.startsWith("/")}(n=T)?m(n):T:void 0,A=Object(a.a)(w),O=Object(r.useRef)(!1),C=d?i.e:i.c,E=u.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&A&&window.docusaurus.prefetch(w),function(){E&&l&&l.disconnect()}}),[w,E,A]);var S=null!==(e=null==w?void 0:w.startsWith("#"))&&void 0!==e&&e,j=!w||!A||S;return w&&A&&!S&&!y&&g.collectLink(w),j?o.a.createElement("a",Object.assign({href:w},!A&&{target:"_blank",rel:"noopener noreferrer"},b)):o.a.createElement(C,Object.assign({},b,{onMouseEnter:function(){O.current||(window.docusaurus.preload(w),O.current=!0)},innerRef:function(t){var e,n;E&&t&&A&&(e=t,n=function(){window.docusaurus.prefetch(w)},(l=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(e),l.disconnect(),n())}))}))).observe(e))},to:w},d&&{activeClassName:v}))}},97:function(t,e,n){"use strict";n.r(e);var r=n(13);n.d(e,"MemoryRouter",(function(){return r.d})),n.d(e,"Prompt",(function(){return r.f})),n.d(e,"Redirect",(function(){return r.g})),n.d(e,"Route",(function(){return r.h})),n.d(e,"Router",(function(){return r.i})),n.d(e,"StaticRouter",(function(){return r.j})),n.d(e,"Switch",(function(){return r.k})),n.d(e,"generatePath",(function(){return r.l})),n.d(e,"matchPath",(function(){return r.m})),n.d(e,"useHistory",(function(){return r.n})),n.d(e,"useLocation",(function(){return r.o})),n.d(e,"useParams",(function(){return r.p})),n.d(e,"useRouteMatch",(function(){return r.q})),n.d(e,"withRouter",(function(){return r.r})),n.d(e,"BrowserRouter",(function(){return r.a})),n.d(e,"HashRouter",(function(){return r.b})),n.d(e,"Link",(function(){return r.c})),n.d(e,"NavLink",(function(){return r.e}))}}]);