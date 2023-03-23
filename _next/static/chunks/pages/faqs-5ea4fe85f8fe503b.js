(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{40800:function(e,t,n){let o=n(67294),r=o.forwardRef(function({title:e,titleId:t,...n},r){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 12H6"}))});e.exports=r},67798:function(e,t,n){let o=n(67294),r=o.forwardRef(function({title:e,titleId:t,...n},r){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"}))});e.exports=r},97908:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faqs",function(){return n(79359)}])},39590:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(85893),r=n(28368),s=n(40800),a=n(67798);let i=[{question:"Is this app free?",answer:"TypingMind.com is free to use with some basic features. You will need to have a working OpenAI API Key in order to use the app. When you use the API Key, you pay directly to OpenAI for the amount of credits/tokens you use. TypingMind.com has premium features that can be unlocked with a one-time purchase."},{question:"Where can I get an OpenAI API Key?",answer:"You can signup directly with OpenAI at https://platform.openai.com/signup"},{question:"Do I need to pay for ChatGPT Plus ($20/month) to use TypingMind.com?",answer:"No! A ChatGPT Plus subscription is not needed. You just need to have an OpenAI's API Key. You can see more info on how to get one here: https://openai.com/blog/openai-api"},{question:"Do I need to pay for OpenAI for a ChatGPT API Key?",answer:"Yes. You need to have an OpenAI account and a valid API key to use ChatGPT. We don't sell API keys."},{question:"How does this app work?",answer:"This is a static web app, it doesn't have any backend server. When you enter your API key, it will be stored locally and securely on your browser. All API requests are sent directly from your browser to OpenAI server to interact with ChatGPT. Think of this as a HTTP client for your ChatGPT API with a lot of convenience features."},{question:"How is the API key handled?",answer:"Your API is safe and stored locally on your device. This is a static app, which means that it doesn't have a backend. All the data is stored in your browser's local storage. Requests to Open AI's API is sent directly from your current browser (check the Network tab in your console if you want to see it)."},{question:"What's the difference between ChatGPT Plus and ChatGPT API via TypingMind?",answer:"Under the hood, ChatGPT Plus and ChatGPT API offer the same model and the same quality. You can view this on their official announcement here: https://platform.openai.com/docs/guides/chat. The initial system instruction can be a little bit different, which can be configured to make the AI output different messages from time to time."},{question:"I have ChatGPT Plus, will it cost me more to use ChatGPT API via TypingMind?",answer:"The ChatGPT API costs soooooo little you won't even notice it. Typical chat conversation is about 1000 characters, which costs ~$0.001. That's less than a cent. You can have thousands of chats and it will only costs you like $1. See official pricing here: https://openai.com/pricing#language-models"},{question:"How many chats can I have?",answer:"You can have as many chats as you want. The only limit is your OpenAI API key's limit and your browser storage limit (technical term: Local Storage). Web browser gives you some limited data storage, the actual limit is different for each browser. Typically, you can save thousands of chat conversations without problems, but that's not guaranteed. When the browser storage runs out, you will need to delete old chats to save the new ones. We will provide a separate service to sync and backup your chats soon. Adding the website to your home screen may increase the storage capacity."},{question:"How can I sync my chat conversations across devices?",answer:"At the moment, you have to export the chats and import it on another device."},{question:"Is it really faster than ChatGPT?",answer:"Most likely yes. From previous testings and user feedback, it is faster than the default ChatGPT in most cases, especially on long responses. Displaying the whole response instead of showing it word by word also help you to scan the response faster with your eyes. With all that said, the speed improvement is not guaranteed, your actual speed experience may varies (internet connection, API availability, etc.). Give it a try to see for yourself!"},{question:"Why does sometimes TypingMind responds differently than the default OpenAI's ChatGPT event with the same prompt?",answer:"TypingMind uses the same underlying model as OpenAI's default chat app. For the same prompt, it can produce different responses each time. The default chat app by OpenAI may also have some initial prompt settings that are different from TypingMind. If you don't get the response you expects, try \"Re-generate Response\" or tweaking the prompt."},{question:"Can I self-host it?",answer:"Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available because the app is not open-source. You can deploy the app anywhere without having to update any code or settings."},{question:"Do I have access to the full source code if I want to self-host?",answer:"No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings."},{question:"What can I customize in the self-host version?",answer:"As of now, you cannot customize anything. But I'm working on making it possible to set custom UI and branding soon. Stay tuned!"},{question:"Where can I download the macOS app?",answer:"After you make a purchase, you will receive the files and instructions in your email. You can also login to https://app.lemonsqueezy.com/my-orders/ to download the files."},{question:"Is the macOS app a native app? How do I receive updates with the macOS app?",answer:"The macOS app is a simple native app with a webview that runs the latest version of TypingMind on your dock. It's only ~5MB in size, load super fast, and can update itself everytime you open it. You can also check for updates manually in the app's menu."},{question:"Is there a Windows/Linux app?",answer:"Not for now. Sorry!"},{question:"License Key vs. API Key",answer:"License Key is used to activate the premium features of TypingMind.com. API Key refers to OpenAI ChatGPT API Key, and is used to connect to OpenAI's API to interact with ChatGPT. You need an API Key to use the app. The License Key is only needed if you want to use the premium features."},{question:"What are the premium features?",answer:"The premium features include: Chat Search History, Access Prompt Library, Integrations, etc. Check the pricing page for the latest details of all the premium features."},{question:"Is there an expiration date for the License Key?",answer:"The license key is valid forever."},{question:"Can I receive new updates after I buy a license key?",answer:"Yes, all future updates are included."},{question:"How many devices/users can I use the License Key on?",answer:'Each license key can be used on 5 devices which is typically enough for 1 user. If you need to use it on for more devices, you can buy a new license keys or add more devices to your existing license key. "Device" is counted based on the number of places where the license key is entered and the chat history is saved for continuous use. For example, if you use Typing Mind on Chrome browser on your laptop and also on your phone, that will be 2 devices. Note that the license key and chat history is saved locally per browser, so if you use Typing Mind on Chrome and also on Firefox, you will need to enter the license key 2 times, have 2 separate chat histories, and that counts as 2 devices. If you need to use the license key on a new device but have reached the device limit, you can unlink the previous devices first using the License Manager (this is done online, access to the previous devices not needed). This device limit is put in place to avoid license key abuse and pirate.'},{question:"How do I remove a device from my license? How to access the License Manager?",answer:"During Beta, inactive devices will be revoked automatically after a short time, you don't need anything. After Beta, you can access the License Manager from the app and manage your device there."},{question:"I have purchased but forget my license key, how can I get it back?",answer:"You can go to https://app.lemonsqueezy.com/my-orders/ to access your license key."},{question:"Can I get a refund?",answer:"Yes. We offer a 14-day money-back guarantee. If you're not satisfied, let us know within 14 days and we'll give you a full refund."}];function u(){return(0,o.jsx)("div",{className:"",children:(0,o.jsx)("div",{className:"mx-auto max-w-7xl",children:(0,o.jsxs)("div",{className:"mx-auto max-w-4xl divide-y divide-gray-900/10",children:[(0,o.jsx)("h2",{className:"text-2xl font-bold leading-10 tracking-tight ",children:"Frequently asked questions"}),(0,o.jsx)("dl",{className:"mt-4 space-y-6 divide-y divide-gray-900/10",children:i.map(e=>(0,o.jsx)(r.p,{as:"div",className:"pt-6",children:t=>{let{open:n}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("dt",{children:(0,o.jsxs)(r.p.Button,{className:"flex w-full items-start justify-between text-left ",children:[(0,o.jsx)("span",{className:"text-base font-semibold leading-7",children:e.question}),(0,o.jsx)("span",{className:"ml-6 flex h-7 items-center",children:n?(0,o.jsx)(s,{className:"h-6 w-6","aria-hidden":"true"}):(0,o.jsx)(a,{className:"h-6 w-6","aria-hidden":"true"})})]})}),(0,o.jsx)(r.p.Panel,{as:"dd",className:"mt-2 pr-12",children:(0,o.jsx)("p",{className:"text-base leading-7 text-gray-500",children:e.answer})})]})}},e.question))})]})})})}},51448:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(85893);n(67294);var r=n(9008),s=n.n(r);function a(e){let{title:t,showNotification:n=!1,description:r="Use ChatGPT with enhanced features like chat hitsory search, folders, integrations, prompt library, etc."}=e;return(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:(n?"(*) ":"")+(t||"TypingMind — A better UI for ChatGPT")}),(0,o.jsx)("meta",{name:"title",content:"TypingMind — A better UI for ChatGPT"}),(0,o.jsx)("meta",{name:"description",content:r}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"https://www.typingmind.com/"}),(0,o.jsx)("meta",{property:"og:title",content:"TypingMind — A better UI for ChatGPT"}),(0,o.jsx)("meta",{property:"og:description",content:r}),(0,o.jsx)("meta",{property:"og:image",content:"https://www.typingmind.com/poster.png"}),(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:url",content:"https://www.typingmind.com/"}),(0,o.jsx)("meta",{property:"twitter:title",content:"TypingMind — A better UI for ChatGPT"}),(0,o.jsx)("meta",{property:"twitter:description",content:r}),(0,o.jsx)("meta",{property:"twitter:image",content:"https://www.typingmind.com/poster.png"}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1, viewport-fit=cover"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})}},79359:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var o=n(85893),r=n(51448),s=n(39590);function a(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"min-h-screen",children:[(0,o.jsx)(r.Z,{title:"Privacy Policy"}),(0,o.jsx)("div",{className:"py-10 ",children:(0,o.jsxs)("main",{children:[(0,o.jsx)("div",{className:"my-10 text-center sticky top-0 bg-white dark:bg-zinc-800 p-4",children:(0,o.jsx)("a",{href:"/",className:"text-blue-500 hover:underline",children:"Go back to TypingMind.com"})}),(0,o.jsx)("div",{className:"px-6",children:(0,o.jsx)(s.Z,{})})]})})]})})}},9008:function(e,t,n){e.exports=n(5443)},28368:function(e,t,n){"use strict";n.d(t,{p:function(){return E}});var o,r,s,a=n(67294),i=n(32984),u=n(12351),l=n(23784),c=n(19946),d=n(61363),p=n(64103),f=n(16567),h=n(14157),m=n(15466),y=n(73781);let w=null!=(s=a.startTransition)?s:function(e){e()};var g=((o=g||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),v=((r=v||{})[r.ToggleDisclosure=0]="ToggleDisclosure",r[r.CloseDisclosure=1]="CloseDisclosure",r[r.SetButtonId=2]="SetButtonId",r[r.SetPanelId=3]="SetPanelId",r[r.LinkPanel=4]="LinkPanel",r[r.UnlinkPanel=5]="UnlinkPanel",r);let b={0:e=>({...e,disclosureState:(0,i.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},x=(0,a.createContext)(null);function I(e){let t=(0,a.useContext)(x);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,I),t}return t}x.displayName="DisclosureContext";let P=(0,a.createContext)(null);P.displayName="DisclosureAPIContext";let k=(0,a.createContext)(null);function T(e,t){return(0,i.E)(t.type,b,e,t)}k.displayName="DisclosurePanelContext";let j=a.Fragment,A=u.AN.RenderStrategy|u.AN.Static,E=Object.assign((0,u.yV)(function(e,t){let{defaultOpen:n=!1,...o}=e,r=(0,a.useRef)(null),s=(0,l.T)(t,(0,l.h)(e=>{r.current=e},void 0===e.as||e.as===a.Fragment)),c=(0,a.useRef)(null),d=(0,a.useRef)(null),p=(0,a.useReducer)(T,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:h,buttonId:w},g]=p,v=(0,y.z)(e=>{g({type:1});let t=(0,m.r)(r);if(!t||!w)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(w):t.getElementById(w);null==n||n.focus()}),b=(0,a.useMemo)(()=>({close:v}),[v]),I=(0,a.useMemo)(()=>({open:0===h,close:v}),[h,v]);return a.createElement(x.Provider,{value:p},a.createElement(P.Provider,{value:b},a.createElement(f.up,{value:(0,i.E)(h,{0:f.ZM.Open,1:f.ZM.Closed})},(0,u.sY)({ourProps:{ref:s},theirProps:o,slot:I,defaultTag:j,name:"Disclosure"}))))}),{Button:(0,u.yV)(function(e,t){let n=(0,c.M)(),{id:o=`headlessui-disclosure-button-${n}`,...r}=e,[s,i]=I("Disclosure.Button"),f=(0,a.useContext)(k),m=null!==f&&f===s.panelId,w=(0,a.useRef)(null),g=(0,l.T)(w,t,m?null:s.buttonRef);(0,a.useEffect)(()=>{if(!m)return i({type:2,buttonId:o}),()=>{i({type:2,buttonId:null})}},[o,i,m]);let v=(0,y.z)(e=>{var t;if(m){if(1===s.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0}),null==(t=s.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0})}}),b=(0,y.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),x=(0,y.z)(t=>{var n;(0,p.P)(t.currentTarget)||e.disabled||(m?(i({type:0}),null==(n=s.buttonRef.current)||n.focus()):i({type:0}))}),P=(0,a.useMemo)(()=>({open:0===s.disclosureState}),[s]),T=(0,h.f)(e,w),j=m?{ref:g,type:T,onKeyDown:v,onClick:x}:{ref:g,id:o,type:T,"aria-expanded":e.disabled?void 0:0===s.disclosureState,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:v,onKeyUp:b,onClick:x};return(0,u.sY)({ourProps:j,theirProps:r,slot:P,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,u.yV)(function(e,t){let n=(0,c.M)(),{id:o=`headlessui-disclosure-panel-${n}`,...r}=e,[s,i]=I("Disclosure.Panel"),{close:d}=function e(t){let n=(0,a.useContext)(P);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),p=(0,l.T)(t,s.panelRef,e=>{w(()=>i({type:e?4:5}))});(0,a.useEffect)(()=>(i({type:3,panelId:o}),()=>{i({type:3,panelId:null})}),[o,i]);let h=(0,f.oJ)(),m=null!==h?(h&f.ZM.Open)===f.ZM.Open:0===s.disclosureState,y=(0,a.useMemo)(()=>({open:0===s.disclosureState,close:d}),[s,d]);return a.createElement(k.Provider,{value:s.panelId},(0,u.sY)({ourProps:{ref:p,id:o},theirProps:r,slot:y,defaultTag:"div",features:A,visible:m,name:"Disclosure.Panel"}))})})},61363:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});var o,r=((o=r||{}).Space=" ",o.Enter="Enter",o.Escape="Escape",o.Backspace="Backspace",o.Delete="Delete",o.ArrowLeft="ArrowLeft",o.ArrowUp="ArrowUp",o.ArrowRight="ArrowRight",o.ArrowDown="ArrowDown",o.Home="Home",o.End="End",o.PageUp="PageUp",o.PageDown="PageDown",o.Tab="Tab",o)},73781:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var o=n(67294),r=n(3855);let s=function(e){let t=(0,r.E)(e);return o.useCallback((...e)=>t.current(...e),[t])}},19946:function(e,t,n){"use strict";n.d(t,{M:function(){return u}});var o,r=n(67294),s=n(16723),a=n(82180),i=n(77896);let u=null!=(o=r.useId)?o:function(){let e=(0,a.H)(),[t,n]=r.useState(e?()=>i.O.nextId():null);return(0,s.e)(()=>{null===t&&n(i.O.nextId())},[t]),null!=t?""+t:void 0}},16723:function(e,t,n){"use strict";n.d(t,{e:function(){return s}});var o=n(67294),r=n(77896);let s=(e,t)=>{r.O.isServer?(0,o.useEffect)(e,t):(0,o.useLayoutEffect)(e,t)}},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var o=n(67294),r=n(16723);function s(e){let t=(0,o.useRef)(e);return(0,r.e)(()=>{t.current=e},[e]),t}},14157:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var o=n(67294),r=n(16723);function s(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function a(e,t){let[n,a]=(0,o.useState)(()=>s(e));return(0,r.e)(()=>{a(s(e))},[e.type,e.as]),(0,r.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[n,t]),n}},82180:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var o=n(67294),r=n(77896);function s(){let[e,t]=(0,o.useState)(r.O.isHandoffComplete);return e&&!1===r.O.isHandoffComplete&&t(!1),(0,o.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,o.useEffect)(()=>r.O.handoff(),[]),e}},23784:function(e,t,n){"use strict";n.d(t,{T:function(){return i},h:function(){return a}});var o=n(67294),r=n(73781);let s=Symbol();function a(e,t=!0){return Object.assign(e,{[s]:t})}function i(...e){let t=(0,o.useRef)(e);(0,o.useEffect)(()=>{t.current=e},[e]);let n=(0,r.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[s]))?void 0:n}},16567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return a},oJ:function(){return i},up:function(){return u}});var o,r=n(67294);let s=(0,r.createContext)(null);s.displayName="OpenClosedContext";var a=((o=a||{})[o.Open=1]="Open",o[o.Closed=2]="Closed",o[o.Closing=4]="Closing",o[o.Opening=8]="Opening",o);function i(){return(0,r.useContext)(s)}function u({value:e,children:t}){return r.createElement(s.Provider,{value:e},t)}},64103:function(e,t,n){"use strict";function o(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let o=(null==t?void 0:t.getAttribute("disabled"))==="";return!(o&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&o}n.d(t,{P:function(){return o}})},44067:function(e,t,n){"use strict";function o(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:function(){return o}})},77896:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var o=Object.defineProperty,r=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t,n)=>(r(e,"symbol"!=typeof t?t+"":t,n),n);let a=new class{constructor(){s(this,"current",this.detect()),s(this,"handoffState","pending"),s(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},32984:function(e,t,n){"use strict";function o(e,t,...n){if(e in t){let o=t[e];return"function"==typeof o?o(...n):o}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,o),r}n.d(t,{E:function(){return o}})},15466:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});var o=n(77896);function r(e){return o.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},12351:function(e,t,n){"use strict";n.d(t,{AN:function(){return u},l4:function(){return l},oA:function(){return h},sY:function(){return c},yV:function(){return f}});var o,r,s=n(67294),a=n(44067),i=n(32984),u=((o=u||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),l=((r=l||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:o,features:r,visible:s=!0,name:a}){let u=p(t,e);if(s)return d(u,n,o,a);let l=null!=r?r:0;if(2&l){let{static:e=!1,...t}=u;if(e)return d(t,n,o,a)}if(1&l){let{unmount:e=!0,...t}=u;return(0,i.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,o,a)})}return d(u,n,o,a)}function d(e,t={},n,o){var r;let{as:i=n,children:u,refName:l="ref",...c}=m(e,["unmount","static"]),d=void 0!==e.ref?{[l]:e.ref}:{},f="function"==typeof u?u(t):u;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let y={};if(t){let e=!1,n=[];for(let[o,r]of Object.entries(t))"boolean"==typeof r&&(e=!0),!0===r&&n.push(o);e&&(y["data-headlessui-state"]=n.join(" "))}if(i===s.Fragment&&Object.keys(h(c)).length>0){if(!(0,s.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=(0,a.A)(null==(r=f.props)?void 0:r.className,c.className);return(0,s.cloneElement)(f,Object.assign({},p(f.props,h(m(c,["ref"]))),y,d,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,d.ref),e?{className:e}:{}))}return(0,s.createElement)(i,Object.assign({},m(c,["ref"]),i!==s.Fragment&&d,i!==s.Fragment&&y),f)}function p(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let o of e)for(let e in o)e.startsWith("on")&&"function"==typeof o[e]?(null!=n[e]||(n[e]=[]),n[e].push(o[e])):t[e]=o[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...o){for(let r of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;r(t,...o)}}});return t}function f(e){var t;return Object.assign((0,s.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function h(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=97908)}),_N_E=e.O()}]);