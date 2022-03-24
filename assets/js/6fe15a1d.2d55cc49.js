"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[65224],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,v=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6548:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],p={title:"\u73af\u5883\u5224\u65ad"},l=void 0,c={unversionedId:"apis/about/env",id:"version-3.x/apis/about/env",title:"\u73af\u5883\u5224\u65ad",description:"Taro.ENV_TYPE",source:"@site/versioned_docs/version-3.x/apis/about/env.md",sourceDirName:"apis/about",slug:"/apis/about/env",permalink:"/taro/docs/apis/about/env",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/apis/about/env.md",tags:[],version:"3.x",frontMatter:{title:"\u73af\u5883\u5224\u65ad"},sidebar:"API",previous:{title:"API \u8bf4\u660e",permalink:"/taro/docs/apis/about/desc"},next:{title:"\u6d88\u606f\u673a\u5236",permalink:"/taro/docs/apis/about/events"}},u=[{value:"Taro.ENV_TYPE",id:"taroenv_type",children:[],level:2},{value:"Taro.getEnv()",id:"tarogetenv",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"taroenv_type"},"Taro.ENV_TYPE"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.WEAPP")," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.SWAN")," \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.ALIPAY")," \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.TT")," \u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.WEB")," WEB(H5)\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.RN")," ReactNative \u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.QUICKAPP")," \u5feb\u5e94\u7528\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.QQ")," QQ\u5c0f\u7a0b\u5e8f \u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.JD")," \u4eac\u4e1c\u5c0f\u7a0b\u5e8f \u73af\u5883"),(0,a.kt)("h2",{id:"tarogetenv"},"Taro.getEnv()"),(0,a.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u73af\u5883\u503c\uff0c\u5177\u4f53\u503c\u5982\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.ENV_TYPE")))}d.isMDXComponent=!0}}]);