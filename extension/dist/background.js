(()=>{var ce=Object.create,D=Object.defineProperty,Ae=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,fe=Object.getOwnPropertyNames,de=Object.getOwnPropertyDescriptor;var xe=e=>D(e,"__esModule",{value:!0});var pe=(e,s)=>()=>(s||(s={exports:{}},e(s.exports,s)),s.exports);var be=(e,s,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of fe(s))!ue.call(e,i)&&i!=="default"&&D(e,i,{get:()=>s[i],enumerable:!(n=de(s,i))||n.enumerable});return e},he=e=>e&&e.__esModule?e:be(xe(D(e!=null?ce(Ae(e)):{},"default",{value:e,enumerable:!0})),e);var ee=pe((G,Y)=>{(function(e,s){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],s);else if(typeof G!="undefined")s(Y);else{var n={exports:{}};s(n),e.browser=n.exports}})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:G,function(e){"use strict";if(typeof browser=="undefined"||Object.getPrototypeOf(browser)!==Object.prototype){let s="The message port closed before a response was received.",n="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",i=m=>{let l={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(l).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(r,o=void 0){super(o);this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}let A=t=>t&&typeof t=="object"&&typeof t.then=="function",d=(t,r)=>(...o)=>{m.runtime.lastError?t.reject(m.runtime.lastError):r.singleCallbackArg||o.length<=1&&r.singleCallbackArg!==!1?t.resolve(o[0]):t.resolve(o)},x=t=>t==1?"argument":"arguments",k=(t,r)=>function(g,...u){if(u.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${x(r.minArgs)} for ${t}(), got ${u.length}`);if(u.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${x(r.maxArgs)} for ${t}(), got ${u.length}`);return new Promise((b,h)=>{if(r.fallbackToNoCallback)try{g[t](...u,d({resolve:b,reject:h},r))}catch(a){console.warn(`${t} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),g[t](...u),r.fallbackToNoCallback=!1,r.noCallback=!0,b()}else r.noCallback?(g[t](...u),b()):g[t](...u,d({resolve:b,reject:h},r))})},w=(t,r,o)=>new Proxy(r,{apply(g,u,b){return o.call(u,t,...b)}}),p=Function.call.bind(Object.prototype.hasOwnProperty),v=(t,r={},o={})=>{let g=Object.create(null),u={has(h,a){return a in t||a in g},get(h,a,y){if(a in g)return g[a];if(!(a in t))return;let f=t[a];if(typeof f=="function")if(typeof r[a]=="function")f=w(t,t[a],r[a]);else if(p(o,a)){let P=k(a,o[a]);f=w(t,t[a],P)}else f=f.bind(t);else if(typeof f=="object"&&f!==null&&(p(r,a)||p(o,a)))f=v(f,r[a],o[a]);else if(p(o,"*"))f=v(f,r[a],o["*"]);else return Object.defineProperty(g,a,{configurable:!0,enumerable:!0,get(){return t[a]},set(P){t[a]=P}}),f;return g[a]=f,f},set(h,a,y,f){return a in g?g[a]=y:t[a]=y,!0},defineProperty(h,a,y){return Reflect.defineProperty(g,a,y)},deleteProperty(h,a){return Reflect.deleteProperty(g,a)}},b=Object.create(t);return new Proxy(b,u)},T=t=>({addListener(r,o,...g){r.addListener(t.get(o),...g)},hasListener(r,o){return r.hasListener(t.get(o))},removeListener(r,o){r.removeListener(t.get(o))}}),j=!1,O=new c(t=>typeof t!="function"?t:function(o,g,u){let b=!1,h,a=new Promise(R=>{h=function(S){j||(console.warn(n,new Error().stack),j=!0),b=!0,R(S)}}),y;try{y=t(o,g,h)}catch(R){y=Promise.reject(R)}let f=y!==!0&&A(y);if(y!==!0&&!f&&!b)return!1;let P=R=>{R.then(S=>{u(S)},S=>{let U;S&&(S instanceof Error||typeof S.message=="string")?U=S.message:U="An unexpected error occurred",u({__mozWebExtensionPolyfillReject__:!0,message:U})}).catch(S=>{console.error("Failed to send onMessage rejected reply",S)})};return P(f?y:a),!0}),E=({reject:t,resolve:r},o)=>{m.runtime.lastError?m.runtime.lastError.message===s?r():t(m.runtime.lastError):o&&o.__mozWebExtensionPolyfillReject__?t(new Error(o.message)):r(o)},_=(t,r,o,...g)=>{if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${x(r.minArgs)} for ${t}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${x(r.maxArgs)} for ${t}(), got ${g.length}`);return new Promise((u,b)=>{let h=E.bind(null,{resolve:u,reject:b});g.push(h),o.sendMessage(...g)})},W={runtime:{onMessage:T(O),onMessageExternal:T(O),sendMessage:_.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:_.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},M={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return l.privacy={network:{"*":M},services:{"*":M},websites:{"*":M}},v(m,W,l)};if(typeof chrome!="object"||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=i(chrome)}else e.exports=browser})});function z(e){return new Proxy(e,{get(s,n){return typeof s[n]!="function"?new z(s[n]):(...i)=>new Promise((m,l)=>{s[n](...i,c=>{chrome.runtime.lastError?l(new Error(chrome.runtime.lastError.message)):m(c)})})}})}var ye=typeof window=="object"&&(window.browser||new z(window.chrome)),I=ye;var Z=/^(https?|wss?|file|ftp|\*):\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^file:\/\/\/.*$|^resource:\/\/(\*|\*\.[^*/]+|[^*/]+)\/.*$|^about:/,we=typeof navigator=="object"&&navigator.userAgent.includes("Firefox/");function Se(e){if(!Z.test(e))throw new Error(e+" is an invalid pattern, it must match "+String(Z));let[,s,n,i]=e.split(/(^[^:]+:[/][/])([^/]+)?/);return s=s.replace("*",we?"(https?|wss?)":"https?").replace(/[/]/g,"[/]"),n=(n??"").replace(/^[*][.]/,"([^/]+.)*").replace(/^[*]$/,"[^/]+").replace(/[.]/g,"[.]").replace(/[*]$/g,"[^.]+"),i=i.replace(/[/]/g,"[/]").replace(/[.]/g,"[.]").replace(/[*]/g,".*"),"^"+s+n+"("+i+")?$"}function H(...e){return e.includes("<all_urls>")?/^(https?|file|ftp):[/]+/:new RegExp(e.map(Se).join("|"))}async function ve(e){return I.permissions.contains({origins:[new URL(e).origin+"/*"]})}async function Te(e,s){let n=await I.tabs.executeScript(e,{code:s,runAt:"document_start"});return n==null?void 0:n[0]}typeof chrome=="object"&&!chrome.contentScripts&&(chrome.contentScripts={async register(e,s){let{js:n=[],css:i=[],allFrames:m,matchAboutBlank:l,matches:c,runAt:A}=e,d=`document[${JSON.stringify(JSON.stringify({js:n,css:i}))}]`,x=H(...c),k=async(p,v,{url:T})=>{if(!(!T||!x.test(T)||!await ve(T)||await Te(p,d))){for(let j of i)chrome.tabs.insertCSS(p,{...j,matchAboutBlank:l,allFrames:m,runAt:A??"document_start"});for(let j of n)chrome.tabs.executeScript(p,{...j,matchAboutBlank:l,allFrames:m,runAt:A});chrome.tabs.executeScript(p,{code:`${d} = true`,runAt:"document_start",allFrames:m})}};chrome.tabs.onUpdated.addListener(k);let w={async unregister(){I.tabs.onUpdated.removeListener(k)}};return typeof s=="function"&&s(w),Promise.resolve(w)}});function ke(){return je(chrome.runtime.getManifest())}function je(e){var s,n;let i={origins:[],permissions:[]},m=new Set([...(s=e.permissions)!==null&&s!==void 0?s:[],...((n=e.content_scripts)!==null&&n!==void 0?n:[]).flatMap(l=>{var c;return(c=l.matches)!==null&&c!==void 0?c:[]})]);for(let l of m)l.includes("://")?i.origins.push(l):i.permissions.push(l);return i}var Ee=/:[/][/][*.]*([^/]+)/;function J(e){return e.split(Ee)[1]}async function V(e){return new Promise(s=>{chrome.permissions.getAll(n=>{let i=ke();s(Pe(i,n,e))})})}async function Pe(e,s,{strictOrigins:n=!0}={}){var i,m;let l={origins:[],permissions:[]};for(let c of(i=s.origins)!==null&&i!==void 0?i:[])if(!e.origins.includes(c)){if(!n){let A=J(c);if(e.origins.some(x=>J(x)===A))continue}l.origins.push(c)}for(let c of(m=s.permissions)!==null&&m!==void 0?m:[])e.permissions.includes(c)||l.permissions.push(c);return l}var K=new Map;function X(e){return{file:new URL(e,location.origin).pathname}}async function Q({origins:e}){let s=chrome.runtime.getManifest().content_scripts;for(let n of e||[])for(let i of s){let m=chrome.contentScripts.register({js:(i.js||[]).map(X),css:(i.css||[]).map(X),allFrames:i.all_frames,matches:[n],runAt:i.run_at});K.set(n,m)}}(async()=>{Q(await V())})();chrome.permissions.onAdded.addListener(e=>{e.origins&&e.origins.length>0&&Q(e)});chrome.permissions.onRemoved.addListener(async({origins:e})=>{if(!(!e||e.length===0))for(let[s,n]of K)e.includes(s)&&(await n).unregister()});var $=he(ee());var Ce=typeof global=="object"&&global&&global.Object===Object&&global,re=Ce;var Oe=typeof self=="object"&&self&&self.Object===Object&&self,_e=re||Oe||Function("return this")(),F=_e;var Me=F.Symbol,C=Me;var se=Object.prototype,Re=se.hasOwnProperty,Ne=se.toString,N=C?C.toStringTag:void 0;function Le(e){var s=Re.call(e,N),n=e[N];try{e[N]=void 0;var i=!0}catch(l){}var m=Ne.call(e);return i&&(s?e[N]=n:delete e[N]),m}var ne=Le;var $e=Object.prototype,Ie=$e.toString;function Fe(e){return Ie.call(e)}var te=Fe;var Be="[object Null]",We="[object Undefined]",ie=C?C.toStringTag:void 0;function Ue(e){return e==null?e===void 0?We:Be:ie&&ie in Object(e)?ne(e):te(e)}var oe=Ue;function De(e){return e!=null&&typeof e=="object"}var ae=De;var Ge="[object Symbol]";function qe(e){return typeof e=="symbol"||ae(e)&&oe(e)==Ge}var ge=qe;function ze(e){var s=typeof e;return e!=null&&(s=="object"||s=="function")}var L=ze;var me=0/0,Ze=/^\s+|\s+$/g,He=/^[-+]0x[0-9a-f]+$/i,Je=/^0b[01]+$/i,Ve=/^0o[0-7]+$/i,Ke=parseInt;function Xe(e){if(typeof e=="number")return e;if(ge(e))return me;if(L(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=L(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ze,"");var n=Je.test(e);return n||Ve.test(e)?Ke(e.slice(2),n?2:8):He.test(e)?me:+e}var q=Xe;var Qe=function(){return F.Date.now()},B=Qe;var Ye="Expected a function",er=Math.max,rr=Math.min;function sr(e,s,n){var i,m,l,c,A,d,x=0,k=!1,w=!1,p=!0;if(typeof e!="function")throw new TypeError(Ye);s=q(s)||0,L(n)&&(k=!!n.leading,w="maxWait"in n,l=w?er(q(n.maxWait)||0,s):l,p="trailing"in n?!!n.trailing:p);function v(r){var o=i,g=m;return i=m=void 0,x=r,c=e.apply(g,o),c}function T(r){return x=r,A=setTimeout(E,s),k?v(r):c}function j(r){var o=r-d,g=r-x,u=s-o;return w?rr(u,l-g):u}function O(r){var o=r-d,g=r-x;return d===void 0||o>=s||o<0||w&&g>=l}function E(){var r=B();if(O(r))return _(r);A=setTimeout(E,j(r))}function _(r){return A=void 0,p&&i?v(r):(i=m=void 0,c)}function W(){A!==void 0&&clearTimeout(A),x=0,i=d=m=A=void 0}function M(){return A===void 0?c:_(B())}function t(){var r=B(),o=O(r);if(i=arguments,m=this,d=r,o){if(A===void 0)return T(d);if(w)return clearTimeout(A),A=setTimeout(E,s),v(d)}return A===void 0&&(A=setTimeout(E,s)),c}return t.cancel=W,t.flush=M,t}var le=sr;function nr(e){$.default.tabs.executeScript(e,{file:"dist/inject/inject.js"})}var tr=le(nr,16);$.default.tabs&&($.default.tabs.onUpdated.addListener((e,s,n)=>{(s.url??n.url??"").includes("github.com")&&(tr(e),console.log("Tab update"))}),console.log("Registered tabs"));$.default.runtime.onInstalled.addListener(function(e){chrome.tabs.create({url:"https://github.com/Jarred-Sumner/1-click-from-github-to-editor/blob/main/POST-INSTALL.md"},function(s){})});})();
