"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9195],{7314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(5893),o=t(1151),a=t(4866),i=t(5162);const l={sidebar_position:1,description:"Guide dedicated to installation process",keywords:["react-native-keyboard-controller","react-native keyboard","installation","setup","keyboard handling","keyboard animation","keyboard movement","troubleshooting"]},s="Installation",d={id:"installation",title:"Installation",description:"Guide dedicated to installation process",source:"@site/versioned_docs/version-1.10.0/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/react-native-keyboard-controller/docs/1.10.0/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.10.0/installation.mdx",tags:[],version:"1.10.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Guide dedicated to installation process",keywords:["react-native-keyboard-controller","react-native keyboard","installation","setup","keyboard handling","keyboard animation","keyboard movement","troubleshooting"]},sidebar:"tutorialSidebar",next:{title:"Guides",permalink:"/react-native-keyboard-controller/docs/1.10.0/category/guides"}},c={},u=[{value:"Adding a library to the project",id:"adding-a-library-to-the-project",level:2},{value:"Linking",id:"linking",level:3},{value:"Expo",id:"expo",level:3},{value:"Adding provider",id:"adding-provider",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Incompatible <code>kotlinVersion</code> and failed Android builds",id:"incompatible-kotlinversion-and-failed-android-builds",level:3},{value:"react-native or expo bare workflow",id:"react-native-or-expo-bare-workflow",level:4},{value:"Expo managed workflow",id:"expo-managed-workflow",level:4},{value:"Swift support",id:"swift-support",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.h2,{id:"adding-a-library-to-the-project",children:"Adding a library to the project"}),"\n",(0,r.jsxs)(n.p,{children:["Install the ",(0,r.jsx)(n.code,{children:"react-native-keyboard-controller"})," package in your React Native project."]}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{value:"yarn",label:"YARN",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn add react-native-keyboard-controller\n"})})}),(0,r.jsx)(i.Z,{value:"npm",label:"NPM",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install react-native-keyboard-controller --save\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"linking",children:"Linking"}),"\n",(0,r.jsxs)(n.p,{children:["This package supports ",(0,r.jsx)(n.a,{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md",children:"autolinking"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"Pods update",type:"tip",children:(0,r.jsxs)(n.p,{children:["Don't forget to re-install ",(0,r.jsx)(n.code,{children:"pods"})," after adding the package and don't forget to re-assemble ",(0,r.jsx)(n.code,{children:"android"})," and ",(0,r.jsx)(n.code,{children:"ios"})," applications, since this library contains native code."]})}),"\n",(0,r.jsx)(n.h3,{id:"expo",children:"Expo"}),"\n",(0,r.jsxs)(n.p,{children:["This library has native code, so it does not work with ",(0,r.jsx)(n.em,{children:"Expo Go"})," but you can easily install it using a ",(0,r.jsx)(n.a,{href:"https://docs.expo.dev/development/getting-started/",children:"custom dev client"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"adding-provider",children:"Adding provider"}),"\n",(0,r.jsxs)(n.p,{children:["In order to use it you'll need to wrap your app with ",(0,r.jsx)(n.code,{children:"KeyboardProvider"})," component."]}),"\n",(0,r.jsx)(n.admonition,{title:"Why it's needed?",type:"info",children:(0,r.jsxs)(n.p,{children:["If you are bothered why it's needed, you can read more about it in ",(0,r.jsx)(n.a,{href:"/react-native-keyboard-controller/docs/1.10.0/recipes/platform-differences",children:"architecture"})," deep dive to understand all aspects of how this library works."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { KeyboardProvider } from "react-native-keyboard-controller";\n\nexport default function App() {\n  return (\n    <KeyboardProvider>\n      {/* your main application code goes here */}\n    </KeyboardProvider>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Congratulations! \ud83c\udf89 You've just finished installation process. Go to the ",(0,r.jsx)(n.a,{href:"/react-native-keyboard-controller/docs/1.10.0/guides/first-animation",children:"next section"})," to get more insights of what you can do using this library. \ud83d\ude0e"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(n.h3,{id:"incompatible-kotlinversion-and-failed-android-builds",children:["Incompatible ",(0,r.jsx)(n.code,{children:"kotlinVersion"})," and failed Android builds"]}),"\n",(0,r.jsx)(n.p,{children:"Sometimes you may see failed Android builds complaining that your version of kotlin is lower than expected version."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"error: module was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.6.0, expected version is 1.4.1."})}),"\n",(0,r.jsx)(n.p,{children:"To overcome this issue you will need to set higher version of the kotlin:"}),"\n",(0,r.jsx)(n.h4,{id:"react-native-or-expo-bare-workflow",children:"react-native or expo bare workflow"}),"\n",(0,r.jsxs)(n.p,{children:["You need to modify ",(0,r.jsx)(n.code,{children:"android/build.gradle"})," and specify correct ",(0,r.jsx)(n.code,{children:"kotlinVersion"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'buildscript {\n    ext {\n        kotlinVersion = "1.6.21"\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For more information please, see how it's configured in ",(0,r.jsx)(n.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/blob/9d0e63712a2f55dab0f6f3f95398567bb9ca1efa/example/android/build.gradle#L9",children:"example"})," project."]}),"\n",(0,r.jsx)(n.h4,{id:"expo-managed-workflow",children:"Expo managed workflow"}),"\n",(0,r.jsxs)(n.p,{children:["If you are using Expo managed workflow you need to install ",(0,r.jsx)(n.code,{children:"expo-build-properties"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npx expo install expo-build-properties\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And add plugin inside of your ",(0,r.jsx)(n.code,{children:"app.json"})," or ",(0,r.jsx)(n.code,{children:"app.config.js"})," with following configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "expo": {\n    "plugins": [\n      [\n        "expo-build-properties",\n        {\n          "android": {\n            "kotlinVersion": "1.6.21"\n          }\n        }\n      ]\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"swift-support",children:"Swift support"}),"\n",(0,r.jsxs)(n.p,{children:["Since part of this library is written using ",(0,r.jsx)(n.code,{children:"swift"})," language - your project needs to support it. For that you can create empty ",(0,r.jsx)(n.code,{children:".swift"})," file with bridging header. See this ",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/a/56176956/9272042",children:"step-by-step"})," guide if you have problems."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(512);const o={tabItem:"tabItem_Ymn6"};var a=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),o=t(512),a=t(2466),i=t(6550),l=t(469),s=t(1980),d=t(7392),c=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=b({queryString:t,groupId:o}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,c.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),v=(()=>{const e=d??f;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),o=l[t].value;o!==r&&(d(n),i(o))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...a,className:(0,o.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(7294);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);