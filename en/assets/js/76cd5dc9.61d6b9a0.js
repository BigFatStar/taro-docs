"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[61117],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=l.createContext({}),u=function(e){var t=l.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),k=o,h=p["".concat(a,".").concat(k)]||p[k]||d[k]||r;return n?l.createElement(h,c(c({ref:t},s),{},{components:n})):l.createElement(h,c({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return l.createElement.apply(null,c)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47174:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var l=n(83117),o=n(80102),r=(n(67294),n(3905)),c=["components"],i={title:"Taro.getConnectedBluetoothDevices(option)",sidebar_label:"getConnectedBluetoothDevices"},a=void 0,u={unversionedId:"apis/device/bluetooth/getConnectedBluetoothDevices",id:"version-3.x/apis/device/bluetooth/getConnectedBluetoothDevices",title:"Taro.getConnectedBluetoothDevices(option)",description:"Gets devices in the connected status based on the UUIDs.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/getConnectedBluetoothDevices.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/getConnectedBluetoothDevices",permalink:"/taro/en/docs/apis/device/bluetooth/getConnectedBluetoothDevices",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/getConnectedBluetoothDevices.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getConnectedBluetoothDevices(option)",sidebar_label:"getConnectedBluetoothDevices"},sidebar:"API",previous:{title:"isBluetoothDevicePaired",permalink:"/taro/en/docs/apis/device/bluetooth/isBluetoothDevicePaired"},next:{title:"getBluetoothDevices",permalink:"/taro/en/docs/apis/device/bluetooth/getBluetoothDevices"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"BluetoothDeviceInfo",id:"bluetoothdeviceinfo",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gets devices in the connected status based on the UUIDs."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html"},"Reference"))),(0,r.kt)("h2",{id:"type"},"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => void\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"option"},"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"services"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string[]")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"The list of primary service UUIDs of Bluetooth devices")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"devices"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BluetoothDeviceInfo[]")),(0,r.kt)("td",null,"The list of discovered devices")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"success: ok; fail: error message.")))),(0,r.kt)("h3",{id:"bluetoothdeviceinfo"},"BluetoothDeviceInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"deviceId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Device ID")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"name"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The name of the Bluetooth device. Some devices may not have a name.")))),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getConnectedBluetoothDevices({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,r.kt)("h2",{id:"api-support"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Taro.getConnectedBluetoothDevices"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);