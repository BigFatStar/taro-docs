"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[38985],{3905:function(e,t,l){l.d(t,{Zo:function(){return o},kt:function(){return k}});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},o=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=c(l),k=r,b=p["".concat(i,".").concat(k)]||p[k]||d[k]||a;return l?n.createElement(b,u(u({ref:t},o),{},{components:l})):n.createElement(b,u({ref:t},o))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,u=new Array(a);u[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,u[1]=s;for(var c=2;c<a;c++)u[c]=l[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},75710:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return o},default:function(){return p}});var n=l(83117),r=l(80102),a=(l(67294),l(3905)),u=["components"],s={title:"Taro.requestSubscribeMessage(option)",sidebar_label:"requestSubscribeMessage"},i=void 0,c={unversionedId:"apis/open-api/subscribe-message/requestSubscribeMessage",id:"version-2.x/apis/open-api/subscribe-message/requestSubscribeMessage",title:"Taro.requestSubscribeMessage(option)",description:"\u8bf7\u6c42\u8ba2\u9605\u6d88\u606f",source:"@site/versioned_docs/version-2.x/apis/open-api/subscribe-message/requestSubscribeMessage.md",sourceDirName:"apis/open-api/subscribe-message",slug:"/apis/open-api/subscribe-message/requestSubscribeMessage",permalink:"/taro/docs/2.x/apis/open-api/subscribe-message/requestSubscribeMessage",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-2.x/apis/open-api/subscribe-message/requestSubscribeMessage.md",tags:[],version:"2.x",frontMatter:{title:"Taro.requestSubscribeMessage(option)",sidebar_label:"requestSubscribeMessage"},sidebar:"version-2.x/API",previous:{title:"getWeRunData",permalink:"/taro/docs/2.x/apis/open-api/werun/getWeRunData"},next:{title:"stopBeaconDiscovery",permalink:"/taro/docs/2.x/apis/device/ibeacon/stopBeaconDiscovery"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"FailCallbackResult",id:"failcallbackresult",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:4}],level:3},{value:"template_reflex",id:"template_reflex",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],d={toc:o};function p(e){var t=e.components,l=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8bf7\u6c42\u8ba2\u9605\u6d88\u606f"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html"},"2.8.2")," \u7248\u672c\u5f00\u59cb\uff0c\u7528\u6237\u53d1\u751f\u70b9\u51fb\u884c\u4e3a\u6216\u8005\u53d1\u8d77\u652f\u4ed8\u56de\u8c03\u540e\uff0c\u624d\u53ef\u4ee5\u8c03\u8d77\u8ba2\u9605\u6d88\u606f\u754c\u9762\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult | FailCallbackResult>\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"tmplIds"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u9700\u8981\u8ba2\u9605\u7684\u6d88\u606f\u6a21\u677f\u7684id\u7684\u96c6\u5408\uff08\u6ce8\u610f\uff1aiOS\u5ba2\u6237\u7aef7.0.6\u7248\u672c\u3001Android\u5ba2\u6237\u7aef7.0.7\u7248\u672c\u4e4b\u540e\u7684\u4e00\u6b21\u6027\u8ba2\u9605/\u957f\u671f\u8ba2\u9605\u624d\u652f\u6301\u591a\u4e2a\u6a21\u677f\u6d88\u606f\uff0ciOS\u5ba2\u6237\u7aef7.0.5\u7248\u672c\u3001Android\u5ba2\u6237\u7aef7.0.6\u7248\u672c\u4e4b\u524d\u7684\u4e00\u6b21\u8ba2\u9605\u53ea\u652f\u6301\u4e00\u4e2a\u6a21\u677f\u6d88\u606f\uff09\u6d88\u606f\u6a21\u677fid\u5728[\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0(mp.weixin.qq.com)-\u529f\u80fd-\u8ba2\u9605\u6d88\u606f]\u4e2d\u914d\u7f6e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: FailCallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",{id:"failcallbackresult"},"FailCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u7801")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u4fe1\u606f")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"[TEMPLATE_ID]"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"accept" | "reject" | "ban"')),(0,a.kt)("td",null,"\u52a8\u6001\u7684\u952e\uff0c\u5373\u6a21\u677fid")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u65f6errMsg\u503c\u4e3a'requestSubscribeMessage:ok'")))),(0,a.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("p",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE \u8fd9\u6761\u6d88\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errMsg": "requestSubscribeMessage:ok",\n  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"\n}\n')),(0,a.kt)("h3",{id:"template_reflex"},"template_reflex"),(0,a.kt)("p",null,"\u6a21\u7248\u6d88\u606f\u8ba2\u9605\u7c7b\u578b"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"accept"),(0,a.kt)("td",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"reject"),(0,a.kt)("td",null,"\u8868\u793a\u7528\u6237\u62d2\u7edd\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ban"),(0,a.kt)("td",null,"\u8868\u793a\u5df2\u88ab\u540e\u53f0\u5c01\u7981")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.requestSubscribeMessage({\n  tmplIds: [''],\n  success: function (res) { }\n})\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.requestSubscribeMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);