"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64050],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67130:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"TaroPlatformBase"},p=void 0,s={unversionedId:"platform-plugin-base",id:"platform-plugin-base",title:"TaroPlatformBase",description:"We have abstracted the common compile-time logic into a base class TaroPlatformBase, which developers can inherit from to achieve platform compilation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/platform-plugin-base.md",sourceDirName:".",slug:"/platform-plugin-base",permalink:"/taro/en/docs/next/platform-plugin-base",editUrl:"https://github.com/nervjs/taro-docs/edit/docs/docs/platform-plugin-base.md",tags:[],version:"current",frontMatter:{title:"TaroPlatformBase"},sidebar:"docs",previous:{title:"Write Platform plugins",permalink:"/taro/en/docs/next/platform-plugin-how"},next:{title:"Template",permalink:"/taro/en/docs/next/platform-plugin-template"}},c=[{value:"Methods and Properties",id:"methods-and-properties",children:[{value:"constructor (ctx, config)",id:"constructor-ctx-config",children:[],level:3},{value:"ctx",id:"ctx",children:[{value:"this.ctx.modifyWebpackChain",id:"thisctxmodifywebpackchain",children:[],level:4}],level:3},{value:"helper",id:"helper",children:[],level:3},{value:"config",id:"config",children:[],level:3},{value:"(abstract) platform",id:"abstract-platform",children:[],level:3},{value:"(abstract) globalObject",id:"abstract-globalobject",children:[],level:3},{value:"(abstract) runtimePath",id:"abstract-runtimepath",children:[],level:3},{value:"(abstract) fileType",id:"abstract-filetype",children:[],level:3},{value:"(abstract) template",id:"abstract-template",children:[],level:3},{value:"(optional) projectConfigJson",id:"optional-projectconfigjson",children:[],level:3},{value:"(optional) taroComponentsPath",id:"optional-tarocomponentspath",children:[],level:3},{value:"setupTransaction",id:"setuptransaction",children:[],level:3},{value:"buildTransaction",id:"buildtransaction",children:[],level:3},{value:"start ()",id:"start-",children:[],level:3},{value:"generateProjectConfig (src, dist)",id:"generateprojectconfig-src-dist",children:[],level:3},{value:"recursiveReplaceObjectKeys (target, keyMap)",id:"recursivereplaceobjectkeys-target-keymap",children:[],level:3}],level:2},{value:"Custom Platform Classes",id:"custom-platform-classes",children:[{value:"1. Inheritance of base class",id:"1-inheritance-of-base-class",children:[],level:3},{value:"2. Handling Template",id:"2-handling-template",children:[],level:3},{value:"3. Handle Component",id:"3-handle-component",children:[{value:"3.1 Write components.ts",id:"31-write-componentsts",children:[],level:4},{value:"3.2 Merge to template.internalComponents",id:"32-merge-to-templateinternalcomponents",children:[{value:"template.mergeComponents (ctx, patch)",id:"templatemergecomponents-ctx-patch",children:[],level:5}],level:4},{value:"3.3 Directly modify template.internalComponents",id:"33-directly-modify-templateinternalcomponents",children:[],level:4},{value:"3.4 Write components-react.ts",id:"34-write-components-reactts",children:[],level:4}],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have abstracted the common compile-time logic into a base class ",(0,o.kt)("inlineCode",{parentName:"p"},"TaroPlatformBase"),", which developers can inherit from to achieve platform compilation."),(0,o.kt)("p",null,"For example, we create a WeChat mini program platform."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"import { TaroPlatformBase } from '@tarojs/service'\nexport default class Weapp extends TaroPlatformBase {\n  // ...\n}\n")),(0,o.kt)("h2",{id:"methods-and-properties"},"Methods and Properties"),(0,o.kt)("h3",{id:"constructor-ctx-config"},"constructor (ctx, config)"),(0,o.kt)("p",null,"constructor, accepting two parameters."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ctx"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Plugin context object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"config"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Taro compilation configuration")))),(0,o.kt)("h3",{id:"ctx"},"ctx"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("p",null,"Plugin context object"),(0,o.kt)("h4",{id:"thisctxmodifywebpackchain"},"this.ctx.modifyWebpackChain"),(0,o.kt)("p",null,"Get WebpackChain\uff0cfor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  modifyWebpackChain () {\n    // The WebpackChain instance can be obtained through this.ctx.modifyWepackChain\n    this.ctx.modifyWebpackChain(({ chain }) => {\n      // chain.xxxx\n    })\n  }\n}\n")),(0,o.kt)("h3",{id:"helper"},"helper"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("p",null,"Holds a set of tool functions corresponding to the exported contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/helper")," package."),(0,o.kt)("h3",{id:"config"},"config"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("p",null,"Compile the configuration object."),(0,o.kt)("h3",{id:"abstract-platform"},"(abstract) platform"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Abstract properties, which subclasses must implement.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Platform names, eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  platform = 'weapp'\n}\n")),(0,o.kt)("h3",{id:"abstract-globalobject"},"(abstract) globalObject"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Abstract properties, which subclasses must implement.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Global object names for the various APIs mounted by the mini program. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"wx")," for WeChat mini program, ",(0,o.kt)("inlineCode",{parentName:"p"},"my")," for Alipay mini program, eg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  globalObject = 'wx'\n}\n")),(0,o.kt)("h3",{id:"abstract-runtimepath"},"(abstract) runtimePath"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Abstract properties, which subclasses must implement.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stirng")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"string[]")),(0,o.kt)("p",null,"The parsing path of the runtime file compiled by the mini program, eg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  runtimePath = '@tarojs/plugin-platform-weapp/dist/runtime'\n}\n")),(0,o.kt)("h3",{id:"abstract-filetype"},"(abstract) fileType"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Abstract properties, which subclasses must implement.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("p",null,"The suffix names of various files of the platform, eg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  fileType = {\n    // Template file suffixes\n    templ: '.wxml',\n    // Style file suffix\n    style: '.wxss',\n    // Configuration file suffix\n    config: '.json',\n    // Script file suffix\n    script: '.js',\n    // \u3010[Optional] Rendering layer script file suffix, such as wxs for WeChat mini program, sjs for Alipay mini program\n    xs: '.wxs'\n  }\n}\n\n")),(0,o.kt)("h3",{id:"abstract-template"},"(abstract) template"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Abstract properties, which subclasses must implement.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"./platform-plugin-template"},"template object")," instance."),(0,o.kt)("h3",{id:"optional-projectconfigjson"},"(optional) projectConfigJson"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Subclasses can optionally be set or not.")),(0,o.kt)("p",null,"The name of the mini program configuration file."),(0,o.kt)("p",null,"If the subclass has an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"projectConfigJson"),", this file will be automatically copied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  projectConfigJson = 'project.config.json'\n}\n")),(0,o.kt)("h3",{id:"optional-tarocomponentspath"},"(optional) taroComponentsPath"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Subclasses can optionally be set or not.")),(0,o.kt)("p",null,"Compile-time alias for the ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," package, described in detail below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  taroComponentsPath = '@tarojs/plugin-platform-weapp/dist/components-react'\n}\n")),(0,o.kt)("h3",{id:"setuptransaction"},"setupTransaction"),(0,o.kt)("p",null,"Transaction hooks for the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," phase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  /**\n   * 1. setupTransaction - init\n   * 2. setup\n   * 3. setupTransaction - close\n   * 4. buildTransaction - init\n   * 5. build\n   * 6. buildTransaction - close\n   */\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    this.setupTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n")),(0,o.kt)("h3",{id:"buildtransaction"},"buildTransaction"),(0,o.kt)("p",null,"The transaction hook for the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," phase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  /**\n   * 1. setupTransaction - init\n   * 2. setup\n   * 3. setupTransaction - close\n   * 4. buildTransaction - init\n   * 5. build\n   * 6. buildTransaction - close\n   */\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    this.buildTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n")),(0,o.kt)("h3",{id:"start-"},"start ()"),(0,o.kt)("p",null,"The plugin entry calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," method to open the build, eg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  // ...\n}\n\nexport default (ctx) => {\n  ctx.registerPlatform({\n    name: 'weapp',\n    useConfigName: 'mini',\n    async fn ({ config }) {\n      const program = new Weapp(ctx, config)\n      await program.start()\n    }\n  })\n}\n")),(0,o.kt)("h3",{id:"generateprojectconfig-src-dist"},"generateProjectConfig (src, dist)"),(0,o.kt)("p",null,"For generating a project configuration file like project.config.json."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"src"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The name of the configuration file in the project source code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"dist"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"'project.config.json'"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The name of the compiled configuration file")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Export user-written `project.tt.json` to `project.config.json`\ngenerateProjectConfig('project.tt.json')\n// Export user-written `project.swan.json` to `project.swan.json`\ngenerateProjectConfig('project.swan.json', 'project.swan.json')\n")),(0,o.kt)("h3",{id:"recursivereplaceobjectkeys-target-keymap"},"recursiveReplaceObjectKeys (target, keyMap)"),(0,o.kt)("p",null,"Recursively replace the key value of the target object."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"target"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Target object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"keyMap"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Rules for replacing key values")))),(0,o.kt)("p",null,"Example, Alipay mini program configuration item key value is different from the specification of most mini program and needs to be aligned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// this.ctx.modifyMiniConfigs can get the list of mini program entry and page configuration files\nthis.ctx.modifyMiniConfigs(({ configMap }) => {\n  const replaceKeyMap = {\n    navigationBarTitleText: 'defaultTitle',\n    navigationBarBackgroundColor: 'titleBarColor',\n    enablePullDownRefresh: 'pullRefresh',\n    list: 'items',\n    text: 'name',\n    iconPath: 'icon',\n    selectedIconPath: 'activeIcon',\n    color: 'textColor'\n  }\n  Object.keys(configMap).forEach(key => {\n    const item = configMap[key]\n    if (item.content) {\n      // Recursively replace the key value in the configuration file with the key value of the target object\n      this.recursiveReplaceObjectKeys(item.content, replaceKeyMap)\n    }\n  })\n})\n")),(0,o.kt)("h2",{id:"custom-platform-classes"},"Custom Platform Classes"),(0,o.kt)("p",null,"The next section will describe how to create a custom platform class, using the example of extending compilation support for WeChat mini prpgram."),(0,o.kt)("h3",{id:"1-inheritance-of-base-class"},"1. Inheritance of base class"),(0,o.kt)("p",null,"Inherit ",(0,o.kt)("inlineCode",{parentName:"p"},"TaroPlatformBase")," to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Weapp")," class and implement all abstract properties, optional properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"import { TaroPlatformBase } from '@tarojs/service'\n\nconst PACKAGE_NAME = '@tarojs/plugin-platform-weapp'\n\nclass Weapp extends TaroPlatformBase {\n  // Platform Name\n  platform = 'weapp'\n  // Mini program global object\n  globalObject = 'wx'\n  // The parsed path to the compiled runtime file of the mini program\n  runtimePath = `${PACKAGE_NAME}/dist/runtime`\n  // File suffix\n  fileType = {\n    templ: '.wxml',\n    style: '.wxss',\n    config: '.json',\n    script: '.js',\n    xs: '.wxs'\n  }\n  template = new Template()\n  // Mini program configuration file name\n  projectConfigJson = 'project.config.json'\n  // alias path to the `@tarojs/components` package\n  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`\n\n  constructor (ctx, config) {\n    super(ctx, config)\n  \n    /**\n    * 1. setupTransaction - init\n    * 2. setup\n    * 3. setupTransaction - close\n    * 4. buildTransaction - init\n    * 5. build\n    * 6. buildTransaction - close\n    */\n\n    // Custom logic can be injected at different stages of setup\n    this.setupTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n\n    // Custom logic can be injected at different stages of build\n    this.buildTransaction.addWrapper({\n      init () {}\n      close () {}\n    })\n  }\n}\n\nexport default Weapp\n")),(0,o.kt)("h3",{id:"2-handling-template"},"2. Handling Template"),(0,o.kt)("p",null,"Write a ",(0,o.kt)("a",{parentName:"p",href:"./platform-plugin-template"},"template class")," to handle template logic, setting its instance to the ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," property of the custom platform class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"import { Template } from './template'\n\nclass Weapp extends TaroPlatformBase {\n  // ...\n  // Template Instance\n  template = new Template()\n}\n")),(0,o.kt)("h3",{id:"3-handle-component"},"3. Handle Component"),(0,o.kt)("p",null,"We have compared the components and component properties of the 6 currently supported mini program to come up with a list of the most common components and their properties. Accessing the ",(0,o.kt)("a",{parentName:"p",href:"./platform-plugin-template#thisinternalcomponents"},"internalComponents")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Template")," class instance to get these common components and their properties."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The purpose of extracting this generic component is to generate templates for mini program B that contain as few components or properties as possible that are unique to mini program A.")),(0,o.kt)("p",null,"However, as each mini program platform develops, each platform may add some new components or attributes on its own. In this case, our platform plugin needs to handle these special components or properties by modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"template.internalComponents"),"."),(0,o.kt)("h4",{id:"31-write-componentsts"},"3.1 Write components.ts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"components.ts")," can export an object to represent the modification of properties, the addition of new properties or the addition of new components to ",(0,o.kt)("inlineCode",{parentName:"p"},"internalComponents"),"."),(0,o.kt)("p",null,"Specification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="components.ts"',title:'"components.ts"'},"import { singleQuote } from '@tarojs/shared'\n\nexport const components = {\n  // Component Name CamelCase\n  ScrollView: \n  // Property \n  {\n    // An empty string for value means that no default value is set\n    'scroll-left': '',\n    // when the default value of the property is a boolean or a number, the value is written as a string\n    'enable-flex': 'false',\n    'refresher-threshold': '45',\n    // When the default value of a property is a string, it needs to be wrapped with the singleQuote function\n    'refresher-default-style': singleQuote('black'),\n    // Event\n    bindRefresherAbort: ''\n  }\n}\n")),(0,o.kt)("h4",{id:"32-merge-to-templateinternalcomponents"},"3.2 Merge to template.internalComponents"),(0,o.kt)("p",null,"Once you have written ",(0,o.kt)("inlineCode",{parentName:"p"},"components.ts"),", you can merge them with the ",(0,o.kt)("inlineCode",{parentName:"p"},"mergeComponents")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Template")," class instance."),(0,o.kt)("h5",{id:"templatemergecomponents-ctx-patch"},"template.mergeComponents (ctx, patch)"),(0,o.kt)("p",null,"Merge the component patch to ",(0,o.kt)("inlineCode",{parentName:"p"},"this.internalComponents"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"ctx"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Plugin context object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"patch"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Component patch")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"import { components } from './components'\n\nclass Weapp extends TaroPlatformBase {\n  constructor (ctx, config) {\n    super(ctx, config)\n\n    // At the end of the setup phase, modify the template\n    this.setupTransaction.addWrapper({\n      close: this.modifyTemplate\n    })\n  }\n\n  modifyTemplate () {\n    this.template.mergeComponents(this.ctx, components)\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="components.ts"',title:'"components.ts"'},"export const components = {\n  ScrollView: {\n    'enable-flex': 'true',\n    'refresher-threshold': '45'\n  },\n  Xyz: {\n    'a': ''\n  }\n}\n")),(0,o.kt)("p",null,"Assuming that the default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"template.internalComponent")," : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"internalComponent = {\n  ScrollView: {\n    'scroll-left': '',\n    'enable-flex': 'false',\n  }\n}\n")),(0,o.kt)("p",null,"The result of the consolidation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"internalComponent = {\n  ScrollView: {\n    'scroll-left': '',\n    // enable-flex defalult value\n    'enable-flex': 'true',\n    // added  refresher-threshold property\n    'refresher-threshold': '45'\n  },\n  // add  Xyz component\n  Xyz: {\n    'a': ''\n  }\n}\n")),(0,o.kt)("h4",{id:"33-directly-modify-templateinternalcomponents"},"3.3 Directly modify template.internalComponents"),(0,o.kt)("p",null,"In addition to merging with ",(0,o.kt)("inlineCode",{parentName:"p"},"template.mergeComponents"),", we can also modify ",(0,o.kt)("inlineCode",{parentName:"p"},"template.internalComponents")," directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"class Weapp extends TaroPlatformBase {\n  modifyTemplate () {\n    // Remove some properties from the Slider component\n    this.modifySlider(this.template.internalComponents.Slider)\n    // Rewrite the property object of the View component\n    this.template.internalComponents.View = {}\n  }\n\n  modifySlider (slider) {\n    delete slider['block-size']\n    delete slider['block-color']\n  }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is recommended to try to write a copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"components.ts")," for merge, rather than doing it directly. Since the merged component information is also needed at runtime, writing a single copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"components.ts")," can be reused.")),(0,o.kt)("h4",{id:"34-write-components-reactts"},"3.4 Write components-react.ts"),(0,o.kt)("p",null,"When using React in Taro, the built-in components need to be referenced from ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/components")," before they can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { View } from '@tarojs/components'\n")),(0,o.kt)("p",null,"But if we ",(0,o.kt)("strong",{parentName:"p"},"add new built-in components, then we can't fetch them from ",(0,o.kt)("inlineCode",{parentName:"strong"},"@tarojs/components")),"."),(0,o.kt)("p",null,"So when we ",(0,o.kt)("strong",{parentName:"p"},"add new components"),", we need to write a ",(0,o.kt)("inlineCode",{parentName:"p"},"components-react.ts")," and configure the Webpack alias for ",(0,o.kt)("strong",{parentName:"p"},"React")," to reference."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write ",(0,o.kt)("inlineCode",{parentName:"li"},"components-react.ts")," file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="components-react.ts"',title:'"components-react.ts"'},"// Original components\nexport * from '@tarojs/components/mini'\n// New components\nexport const Editor = 'editor'\nexport const OfficialAccount = 'official-account'\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("a",{parentName:"li",href:"./platform-plugin-base#optional-tarocomponentspath"},"taroComponentsPath"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="program.ts"',title:'"program.ts"'},"const PACKAGE_NAME = '@tarojs/plugin-platform-weapp'\nclass Weapp extends TaroPlatformBase {\n  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`\n}\n")))}d.isMDXComponent=!0}}]);