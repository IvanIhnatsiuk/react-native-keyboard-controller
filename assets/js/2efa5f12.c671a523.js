"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,y=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={keywords:["react-native-keyboard-controller","useReanimatedKeyboardAnimation","react-native-reanimated","react hook"]},i="useReanimatedKeyboardAnimation",l={unversionedId:"api/hooks/keyboard/use-reanimated-keyboard-animation",id:"api/hooks/keyboard/use-reanimated-keyboard-animation",title:"useReanimatedKeyboardAnimation",description:"useReanimatedKeyboardAnimation is a hook which gives access to two reanimated values:",source:"@site/docs/api/hooks/keyboard/use-reanimated-keyboard-animation.md",sourceDirName:"api/hooks/keyboard",slug:"/api/hooks/keyboard/use-reanimated-keyboard-animation",permalink:"/react-native-keyboard-controller/docs/next/api/hooks/keyboard/use-reanimated-keyboard-animation",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/api/hooks/keyboard/use-reanimated-keyboard-animation.md",tags:[],version:"current",frontMatter:{keywords:["react-native-keyboard-controller","useReanimatedKeyboardAnimation","react-native-reanimated","react hook"]},sidebar:"tutorialSidebar",previous:{title:"useKeyboardHandler",permalink:"/react-native-keyboard-controller/docs/next/api/hooks/keyboard/use-keyboard-handler/"},next:{title:"useKeyboardController",permalink:"/react-native-keyboard-controller/docs/next/api/hooks/module/use-keyboard-controller"}},d={},s=[{value:"Example",id:"example",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usereanimatedkeyboardanimation"},"useReanimatedKeyboardAnimation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useReanimatedKeyboardAnimation")," is a hook which gives access to two reanimated values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height")," - value which changes between ",(0,a.kt)("strong",{parentName:"li"},"0")," and ",(0,a.kt)("strong",{parentName:"li"},"keyboardHeight"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"progress")," - value which changes between ",(0,a.kt)("strong",{parentName:"li"},"0")," (keyboard closed) and ",(0,a.kt)("strong",{parentName:"li"},"1")," (keyboard opened).")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";\n\nconst { height, progress } = useReanimatedKeyboardAnimation();\n')),(0,a.kt)("p",null,"Also have a look on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."),(0,a.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  KeyboardController,\n  KeyboardContext,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nclass KeyboardAnimation extends React.PureComponent {\n  // 1. use context value\n  static contextType = KeyboardContext;\n\n  componentDidMount() {\n    // 2. set input mode for android to `adjustResize`\n    // (can be omitted if you already have `adjustResize` in `AndroidManifest.xml`)\n    KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);\n  }\n\n  componentWillUnmount() {\n    // 2. return to default input mode (for Android)\n    // in order not to break other part of your app\n    KeyboardController.setDefaultMode();\n  }\n\n  render() {\n    // 3. consume reanimated values \ud83d\ude0a\n    const { reanimated } = this.context;\n  }\n}\n')))}p.isMDXComponent=!0}}]);