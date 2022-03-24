"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31439],{3905:function(t,e,l){l.d(e,{Zo:function(){return p},kt:function(){return k}});var r=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,r,n=function(t,e){if(null==t)return{};var l,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)l=o[r],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)l=o[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var c=r.createContext({}),i=function(t){var e=r.useContext(c),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},p=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var l=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=i(l),k=n,h=d["".concat(c,".").concat(k)]||d[k]||s[k]||o;return l?r.createElement(h,a(a({ref:e},p),{},{components:l})):r.createElement(h,a({ref:e},p))}));function k(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=l.length,a=new Array(o);a[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:n,a[1]=u;for(var i=2;i<o;i++)a[i]=l[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},5494:function(t,e,l){l.r(e),l.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var r=l(83117),n=l(80102),o=(l(67294),l(3905)),a=["components"],u={title:"Taro.getBluetoothAdapterState(option)",sidebar_label:"getBluetoothAdapterState"},c=void 0,i={unversionedId:"apis/device/bluetooth/getBluetoothAdapterState",id:"version-3.x/apis/device/bluetooth/getBluetoothAdapterState",title:"Taro.getBluetoothAdapterState(option)",description:"Gets the status of the local Bluetooth adapter.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/getBluetoothAdapterState.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getBluetoothAdapterState",permalink:"/taro/en/docs/apis/device/bluetooth/getBluetoothAdapterState",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/getBluetoothAdapterState.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBluetoothAdapterState(option)",sidebar_label:"getBluetoothAdapterState"},sidebar:"API",previous:{title:"getBluetoothDevices",permalink:"/taro/en/docs/apis/device/bluetooth/getBluetoothDevices"},next:{title:"closeBluetoothAdapter",permalink:"/taro/en/docs/apis/device/bluetooth/closeBluetoothAdapter"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],s={toc:p};function d(t){var e=t.components,l=(0,n.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gets the status of the local Bluetooth adapter."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"available"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"Indicates whether the Bluetooth adapter is available")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"discovering"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"Indicates whether a device discovery is performed")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMsg"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"success: ok; fail: error message.")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getBluetoothAdapterState({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getBluetoothAdapterState"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);