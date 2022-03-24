"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18813],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||a;return n?l.createElement(m,o(o({ref:t},s),{},{components:n})):l.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var l=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(83117),r=n(67294),a=n(72389),o=n(24726),u=n(86010),i="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,k=e.groupId,m=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),g=b.tabGroupChoices,x=b.setTabGroupChoices,N=(0,r.useState)(f),T=N[0],P=N[1],w=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var O=g[k];null!=O&&O!==T&&v.some((function(e){return e.value===O}))&&P(O)}var R=function(e){var t=e.currentTarget,n=w.indexOf(t),l=v[n].value;l!==T&&(E(t),P(l),null!=k&&x(k,l))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l=w.indexOf(e.currentTarget)+1;n=w[l]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},m)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return w.push(e)},onKeyDown:A,onFocus:R,onClick:R},a,{className:(0,u.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,a.Z)();return r.createElement(c,(0,l.Z)({key:String(t)},e))}},33261:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),o=n(9877),u=n(58215),i=["components"],c={title:"RichText",sidebar_label:"RichText"},s=void 0,p={unversionedId:"components/base/rich-text",id:"version-3.x/components/base/rich-text",title:"RichText",description:"Rich text.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/base/rich-text.md",sourceDirName:"components/base",slug:"/components/base/rich-text",permalink:"/taro/en/docs/components/base/rich-text",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/versioned_docs/version-3.x/components/base/rich-text.md",tags:[],version:"3.x",frontMatter:{title:"RichText",sidebar_label:"RichText"},sidebar:"components",previous:{title:"Progress",permalink:"/taro/en/docs/components/base/progress"},next:{title:"Button",permalink:"/taro/en/docs/components/forms/button"}},d=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"RichTextProps",id:"richtextprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"TSpace",id:"tspace",children:[],level:3},{value:"Text",id:"text",children:[],level:3},{value:"HTMLElement",id:"htmlelement",children:[],level:3}],level:2},{value:"Nodes",id:"nodes",children:[{value:"Type",id:"type-1",children:[],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],k={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rich text."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/rich-text.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<RichTextProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  state = {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'Hello World!'\n      }]\n    }]\n  }\n  render () {\n    return (\n      <RichText nodes={this.state.nodes} />\n    )\n  }\n}\n"))),(0,a.kt)(u.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <view class=\"components-page\">\n    <rich-text :nodes=\"nodes\"></rich-text>\n  </view>\n</template>\n\n<script>\nexport default {\n  name: 'Index',\n  data() {\n    return {\n      nodes: [{\n        name: 'div',\n        attrs: {\n          class: 'div_class',\n          style: 'line-height: 60px; color: red;'\n        },\n        children: [{\n          type: 'text',\n          text: 'Hello World!'\n        }]\n      }]\n    }\n  },\n  onReady () {\n    console.log('onReady')\n  }\n}\n<\/script>\n")))),(0,a.kt)("h2",{id:"richtextprops"},"RichTextProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"nodes"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Nodes")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The node list/HTML string")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"space"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"ensp" | "emsp" | "nbsp"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Displays consecutive spaces")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"RichTextProps.space"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"tspace"},"TSpace"),(0,a.kt)("p",null,"Valid values of space"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"ensp"),(0,a.kt)("td",null,"En space")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"emsp"),(0,a.kt)("td",null,"Em space")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"nbsp"),(0,a.kt)("td",null,"The size of the space is set according to the font setting")))),(0,a.kt)("h3",{id:"text"},"Text"),(0,a.kt)("p",null,"text node"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Remarks"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"text"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",null,"Text type"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"text"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'""')),(0,a.kt)("td",null,"Text string"),(0,a.kt)("td",null,(0,a.kt)("code",null,"support entities"))))),(0,a.kt)("h3",{id:"htmlelement"},"HTMLElement"),(0,a.kt)("p",null,"element node(defaulted)"),(0,a.kt)("p",null,"The class and style properties are supported globally. ",(0,a.kt)("strong",{parentName:"p"},"The id property is not supported.")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Remarks"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"node"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"HTML type"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"name"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"Tag name"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Supports some trusted HTML nodes."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"attrs"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Property"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Supports some trusted properties. The name complies with the Pascal naming convention."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"children"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Nodes")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Child node list"),(0,a.kt)("td",null,(0,a.kt)("code",null,"The structure of child nodes is the same as that of nodes."))))),(0,a.kt)("h2",{id:"nodes"},"Nodes"),(0,a.kt)("p",null,"node type"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Currently, two nodes are supported, which are distinguished according to the type: element node and text node. It is the element node by default. HTML nodes are displayed in the rich text area. Element node: type = node*")),(0,a.kt)("h3",{id:"type-1"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(Text | HTMLElement)[] | string\n")),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"RichText"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);