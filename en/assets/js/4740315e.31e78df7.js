"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15758],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),k=a,g=d["".concat(c,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37469:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"Taro.setStorage(option)",sidebar_label:"setStorage"},c=void 0,s={unversionedId:"apis/storage/setStorage",id:"version-2.x/apis/storage/setStorage",title:"Taro.setStorage(option)",description:"\u5c06\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key \u4e2d\u3002\u4f1a\u8986\u76d6\u6389\u539f\u6765\u8be5 key \u5bf9\u5e94\u7684\u5185\u5bb9\u3002\u9664\u975e\u7528\u6237\u4e3b\u52a8\u5220\u9664\u6216\u56e0\u5b58\u50a8\u7a7a\u95f4\u539f\u56e0\u88ab\u7cfb\u7edf\u6e05\u7406\uff0c\u5426\u5219\u6570\u636e\u90fd\u4e00\u76f4\u53ef\u7528\u3002\u5355\u4e2a key \u5141\u8bb8\u5b58\u50a8\u7684\u6700\u5927\u6570\u636e\u957f\u5ea6\u4e3a 1MB\uff0c\u6240\u6709\u6570\u636e\u5b58\u50a8\u4e0a\u9650\u4e3a 10MB\u3002",source:"@site/versioned_docs/version-2.x/apis/storage/setStorage.md",sourceDirName:"apis/storage",slug:"/apis/storage/setStorage",permalink:"/taro/en/docs/2.x/apis/storage/setStorage",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/storage/setStorage.md",tags:[],version:"2.x",frontMatter:{title:"Taro.setStorage(option)",sidebar_label:"setStorage"},sidebar:"version-2.x/API",previous:{title:"setStorageSync",permalink:"/taro/en/docs/2.x/apis/storage/setStorageSync"},next:{title:"removeStorageSync",permalink:"/taro/en/docs/2.x/apis/storage/removeStorageSync"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5c06\u6570\u636e\u5b58\u50a8\u5728\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key \u4e2d\u3002\u4f1a\u8986\u76d6\u6389\u539f\u6765\u8be5 key \u5bf9\u5e94\u7684\u5185\u5bb9\u3002\u9664\u975e\u7528\u6237\u4e3b\u52a8\u5220\u9664\u6216\u56e0\u5b58\u50a8\u7a7a\u95f4\u539f\u56e0\u88ab\u7cfb\u7edf\u6e05\u7406\uff0c\u5426\u5219\u6570\u636e\u90fd\u4e00\u76f4\u53ef\u7528\u3002\u5355\u4e2a key \u5141\u8bb8\u5b58\u50a8\u7684\u6700\u5927\u6570\u636e\u957f\u5ea6\u4e3a 1MB\uff0c\u6240\u6709\u6570\u636e\u5b58\u50a8\u4e0a\u9650\u4e3a 10MB\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"data"),(0,l.kt)("td",null,(0,l.kt)("code",null,"any")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u9700\u8981\u5b58\u50a8\u7684\u5185\u5bb9\u3002\u53ea\u652f\u6301\u539f\u751f\u7c7b\u578b\u3001Date\u3001\u53ca\u80fd\u591f\u901a\u8fc7",(0,l.kt)("code",null,"JSON.stringify"),"\u5e8f\u5217\u5316\u7684\u5bf9\u8c61\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"key"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u672c\u5730\u7f13\u5b58\u4e2d\u6307\u5b9a\u7684 key")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'Taro.setStorage({\n  key:"key",\n  data:"value"\n})\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"try {\n  Taro.setStorageSync('key', 'value')\n} catch (e) { }\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.setStorage"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);