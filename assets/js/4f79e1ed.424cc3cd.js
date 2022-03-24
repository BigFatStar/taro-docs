"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[83332],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,u=d["".concat(p,".").concat(g)]||d[g]||s[g]||o;return r?n.createElement(u,i(i({ref:t},m),{},{components:r})):n.createElement(u,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71472:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Taro.removeStorage(OBJECT)",sidebar_label:"removeStorage"},p=void 0,c={unversionedId:"apis/storage/removeStorage",id:"version-1.x/apis/storage/removeStorage",title:"Taro.removeStorage(OBJECT)",description:"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u5f02\u6b65\u79fb\u9664\u6307\u5b9a key\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/storage/removeStorage.md",sourceDirName:"apis/storage",slug:"/apis/storage/removeStorage",permalink:"/taro/docs/1.x/apis/storage/removeStorage",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-1.x/apis/storage/removeStorage.md",tags:[],version:"1.x",frontMatter:{title:"Taro.removeStorage(OBJECT)",sidebar_label:"removeStorage"},sidebar:"version-1.x/API",previous:{title:"getStorageInfoSync",permalink:"/taro/docs/1.x/apis/storage/getStorageInfoSync"},next:{title:"removeStorageSync",permalink:"/taro/docs/1.x/apis/storage/removeStorageSync"}},m=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[],level:2}],s={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ece\u672c\u5730\u7f13\u5b58\u4e2d\u5f02\u6b65\u79fb\u9664\u6307\u5b9a key\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"key"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u672c\u5730\u7f13\u5b58\u4e2d\u7684\u6307\u5b9a\u7684 key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"success"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"fail"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"complete"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,o.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.removeStorage({ key: 'key' })\n  .then(res => console.log(res))\n")),(0,o.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.removeStorage"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.removeStorageSync"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);