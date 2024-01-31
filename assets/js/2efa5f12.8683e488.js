"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={keywords:["react-native-keyboard-controller","useReanimatedKeyboardAnimation","react-native-reanimated","react hook"]},i="useReanimatedKeyboardAnimation",l={unversionedId:"api/hooks/keyboard/use-reanimated-keyboard-animation",id:"api/hooks/keyboard/use-reanimated-keyboard-animation",title:"useReanimatedKeyboardAnimation",description:"useReanimatedKeyboardAnimation is a hook which gives access to two reanimated values:",source:"@site/docs/api/hooks/keyboard/use-reanimated-keyboard-animation.md",sourceDirName:"api/hooks/keyboard",slug:"/api/hooks/keyboard/use-reanimated-keyboard-animation",permalink:"/react-native-keyboard-controller/docs/next/api/hooks/keyboard/use-reanimated-keyboard-animation",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/api/hooks/keyboard/use-reanimated-keyboard-animation.md",tags:[],version:"current",frontMatter:{keywords:["react-native-keyboard-controller","useReanimatedKeyboardAnimation","react-native-reanimated","react hook"]},sidebar:"tutorialSidebar",previous:{title:"useKeyboardHandler",permalink:"/react-native-keyboard-controller/docs/next/api/hooks/keyboard/use-keyboard-handler/"},next:{title:"useFocusedInputHandler",permalink:"/react-native-keyboard-controller/docs/next/api/hooks/input/use-focused-input-handler"}},s={},d=[{value:"Example",id:"example",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usereanimatedkeyboardanimation"},"useReanimatedKeyboardAnimation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useReanimatedKeyboardAnimation")," is a hook which gives access to two reanimated values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height")," - value which changes between ",(0,r.kt)("strong",{parentName:"li"},"0")," and ",(0,r.kt)("strong",{parentName:"li"},"keyboardHeight"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"progress")," - value which changes between ",(0,r.kt)("strong",{parentName:"li"},"0")," (keyboard closed) and ",(0,r.kt)("strong",{parentName:"li"},"1")," (keyboard opened).")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";\n\nconst { height, progress } = useReanimatedKeyboardAnimation();\n')),(0,r.kt)("p",null,"Also have a look on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."),(0,r.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  KeyboardController,\n  KeyboardContext,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nclass KeyboardAnimation extends React.PureComponent {\n  // 1. use context value\n  static contextType = KeyboardContext;\n\n  componentDidMount() {\n    // 2. set input mode for android to `adjustResize`\n    // (can be omitted if you already have `adjustResize` in `AndroidManifest.xml`)\n    KeyboardController.setInputMode(\n      AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE,\n    );\n  }\n\n  componentWillUnmount() {\n    // 2. return to default input mode (for Android)\n    // in order not to break other part of your app\n    KeyboardController.setDefaultMode();\n  }\n\n  render() {\n    // 3. consume reanimated values \ud83d\ude0a\n    const { reanimated } = this.context;\n  }\n}\n')))}p.isMDXComponent=!0}}]);