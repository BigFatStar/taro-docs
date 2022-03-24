"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[8920],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89229:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=["components"],i={title:"Taro.createIntersectionObserver(component, options)",sidebar_label:"createIntersectionObserver"},c=void 0,s={unversionedId:"apis/wxml/createIntersectionObserver",id:"version-3.x/apis/wxml/createIntersectionObserver",title:"Taro.createIntersectionObserver(component, options)",description:"Creates and returns an IntersectionObserver object instance. In a custom component or a page that contains a custom component, use this.createIntersectionObserver([options]) instead.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/wxml/createIntersectionObserver.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/createIntersectionObserver",permalink:"/taro/en/docs/apis/wxml/createIntersectionObserver",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/wxml/createIntersectionObserver.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createIntersectionObserver(component, options)",sidebar_label:"createIntersectionObserver"},sidebar:"API",previous:{title:"createSelectorQuery",permalink:"/taro/en/docs/apis/wxml/createSelectorQuery"},next:{title:"IntersectionObserver",permalink:"/taro/en/docs/apis/wxml/IntersectionObserver"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creates and returns an IntersectionObserver object instance. In a custom component or a page that contains a custom component, use ",(0,a.kt)("inlineCode",{parentName:"p"},"this.createIntersectionObserver([options])")," instead."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/wx.createIntersectionObserver.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(component: Record<string, any>, options?: Option) => IntersectionObserver\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"initialRatio"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The initial intersection ratio. If the intersection ratio detected at the time of the call is not equal to this value and reaches the threshold, the callback function of the listener is triggered.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"observeAll"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'Indicates whether to observe more than one target node simultaneously. If the value is set to "true", the targetSelector of observe will select multiple nodes. (Note: selecting too many nodes at the same time will affect rendering performance.)')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"thresholds"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An array of values, which\u200bcontains all thresholds.")))),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const\xa0observer\xa0=\xa0Taro.createIntersectionObserver(this,\xa0{\xa0thresholds:\xa0[0],\xa0observeAll:\xa0true\xa0})\n")),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.createIntersectionObserver"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);