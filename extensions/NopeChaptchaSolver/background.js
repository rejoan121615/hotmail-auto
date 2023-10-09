(()=>{{let t=chrome.runtime.getManifest().content_scripts.filter(a=>a.js.includes("eventhook.js")).map(a=>a.matches);chrome.scripting.getRegisteredContentScripts().then(a=>{a.length||chrome.scripting.registerContentScripts([{id:"1",matches:t.flat(),js:["eventhook/loader.js"],allFrames:!0,runAt:"document_start",world:"MAIN"}])})}var s=chrome;var F="en-US",M="en";{let e=function(t,a,r,o){return{id:o,priority:1,action:{type:"redirect",redirect:{transform:{queryTransform:{addOrReplaceParams:[{key:t,value:a}]}}}},condition:{regexFilter:r,resourceTypes:["sub_frame"]}}};s.declarativeNetRequest.updateDynamicRules({addRules:[e("hl",F,"^https?://[^\\.]*\\.(google\\.com|recaptcha\\.net)/recaptcha",1),e("lang",M,"^https?://[^\\.]*\\.(funcaptcha\\.com?|arkoselabs\\.c(om|n)|arkose\\.com\\.cn)/fc/gc/",2)],removeRuleIds:[1,2]})}var _=new Set;s.runtime.onConnect.addListener(e=>{e.name==="stream"&&(_.add(e),e.onDisconnect.addListener(()=>{_.delete(e)}))});function S(e){_.forEach(t=>t.postMessage(e))}var c=new Map;chrome.tabs.onUpdated.addListener((e,t)=>{c.has(e)&&!("url"in t)||c.set(e,new Set)});chrome.tabs.onRemoved.addListener(e=>{c.delete(e)});async function P([e],t){let a=t.tab?.id;if(!a)return console.warn("[@nope/background/tabs] unable to figure out tabId");c.has(a)||c.set(a,new Set),c.get(a).add(e)}async function R(){let e=await new Promise(t=>{s.tabs.query({active:!0,currentWindow:!0},([a])=>{t(a)})});return c.has(e.id)?[...c.get(e.id)]:[]}var p={version:16,key:"",keys:[],enabled:!0,disabled_hosts:[],hcaptcha_auto_open:!0,hcaptcha_auto_solve:!0,hcaptcha_solve_delay:!0,hcaptcha_solve_delay_time:3e3,recaptcha_auto_open:!0,recaptcha_auto_solve:!0,recaptcha_solve_delay:!0,recaptcha_solve_delay_time:2e3,funcaptcha_auto_open:!0,funcaptcha_auto_solve:!0,funcaptcha_solve_delay:!0,funcaptcha_solve_delay_time:1e3,awscaptcha_auto_open:!1,awscaptcha_auto_solve:!1,awscaptcha_solve_delay:!0,awscaptcha_solve_delay_time:1e3,turnstile_auto_solve:!0,turnstile_solve_delay:!0,turnstile_solve_delay_time:1e3,perimeterx_auto_solve:!1,perimeterx_solve_delay:!0,perimeterx_solve_delay_time:1e3,textcaptcha_auto_solve:!1,textcaptcha_solve_delay:!0,textcaptcha_solve_delay_time:100,textcaptcha_image_selector:"",textcaptcha_input_selector:""};var d=s.action,h=!0;function b(e){if(e===h)return;h=e;let t=e?"":"g",a=[new Promise(r=>{d.setIcon({path:Object.fromEntries([16,32,48,128].map(o=>[o,`/icon/${o}${t}.png`]))},r)})];return m&&a.push(new Promise(r=>{d.setBadgeText({text:e?m:""},r)})),Promise.all(a)}var m="";function g(e,t){if(e!==m)return m=e,Promise.all([new Promise(a=>{if(!h)return a();d.setBadgeText({text:e},a)}),new Promise(a=>{d.setBadgeBackgroundColor({color:t},a)})])}var y=new Promise(e=>{s.storage.local.get("settings",t=>{if(!t?.settings)return e(p);let{settings:a}=t;a.version!==p.version&&(a={...p,key:a.key}),a.enabled||b(!1),e(a)})});function f(){return y}async function B(e){let t={...await y,...e};return b(t.enabled),new Promise(a=>{s.storage.local.set({settings:t},()=>{y=Promise.resolve(t),S({event:"settingsUpdate",settings:e}),a(null)})})}var l="https://api.nopecha.com";function A(){let e;return t=>e||(e=t().finally(()=>e=void 0),e)}var I,N=A();function v(){return N(()=>J())}async function L(){return I}var j=s.runtime.getManifest().version;async function J(){let e=new URLSearchParams;e.append("v",j);let t=(await f()).key;t&&e.append("key",t);let a=`${l}/status?${e.toString()}`,r,o=null;try{o=await fetch(a),r=await o.json()}catch(n){console.error("[@nope/background/api/status] failed to fetch status",o,n),r={error:-1,message:o?o.status===522?"Server not responding":o.status===502?"Server has routing issues":`Unknown server error: ${o.status}`:"Server connection failure."}}return o&&!o.ok&&(!r||!("error"in r))&&(console.error("[@nope/background/api/status] received non 2xx",o,r),r={error:-1,message:`Server error: ${o.status}`}),I=r,"error"in r?g("ERR","#FDE047"):typeof r.credit=="number"&&typeof r.quota=="number"?g(r.credit>=9999?`${Math.floor(r.credit/r.quota*100)}%`:r.credit.toString(),r.credit?"#0a95ff":"#FB7185"):g("","#fff0"),r}v();function w(e){return new Promise(t=>setTimeout(t,e))}function k(e,t=2166136261){let a=t;for(let r of e)a^=r,a+=a<<1;return a>>>0}var H=[15,16,12,10,17];async function U(e){let t=new Headers;t.append("accept","application/json"),t.append("content-type","application/json");let a=typeof e.v=="string"?k(e.v.split("").map(n=>n.charCodeAt(0))):-1;e.key&&e.key!=="undefined"&&t.append("authorization",`Bearer ${e.key}`);let r;for(let n=30;n>0&&a===2385114784;n--){let u=await fetch(l,{method:"POST",headers:t,body:JSON.stringify(e)});if(u.status>=500)continue;let i=await u.json();if("error"in i){if(H.includes(i.error))return i;i.error!==11&&console.warn("[@nope/background/api/recognition] unknown error",i),await w(2e3)}else{r=i.data;break}}if(!r)return{error:-1,message:"Server timeout"};t.delete("content-type");let o=`${l}?id=${r}&key=${e.key}`;for(let n=60;n>0;n--){let u=await fetch(o,{headers:t});if(u.status>=500)continue;let i=await u.json();if("error"in i)i.error!==14&&console.warn("[@nope/background/api/recognition] unknown error",i),await w(1e3);else return i}return{error:-1,message:"Server timeout"}}function T(){return new Promise(e=>{s.tabs.query({active:!0,currentWindow:!0},([t])=>{e(t&&t.url&&new URL(t.url).href)})})}async function D([e,t]){let a=await fetch(e,t);return{headers:Object.fromEntries(a.headers.entries()),status:a.status,ok:a.ok,text:await a.text()}}async function q([e,t]){let a=await fetch(e,t),r=await a.blob(),o=new FileReader;return await new Promise(n=>{o.addEventListener("load",n),o.readAsDataURL(r)}),{headers:Object.fromEntries(a.headers.entries()),status:a.status,ok:a.ok,data:o.result}}function x(e){let t=("fff12fa3cdd64ff83a30d7b392be57e978a86eee93b9728ed0366bf231abdaad"+e).split("").map(a=>a.charCodeAt(0));return C(t)}var $=new Uint32Array(256);for(let e=256;e--;){let t=e;for(let a=8;a--;)t=t&1?3988292384^t>>>1:t>>>1;$[e]=t}function C(e){let t=-1;for(let a of e)t=t>>>8^$[t&255^a];return(t^-1)>>>0}var V={"settings::get":f,"settings::update":([e])=>B(e),"api::fetchStatus":v,"api::getCachedStatus":L,"api::recognition":([e])=>U(e),"tab::getURL":T,"tab::registerDetectedCaptcha":P,"tab::getDetectedCaptchas":R,"fetch::universalFetch":D,"fetch::asData":q};s.runtime.onMessage.addListener((e,t,a)=>{let r=e[1],o=V[r];return o(e.slice(2),t).then(n=>{a([x(e[0]),n])}).catch(n=>{console.error(`[@nope/background/rpc] [${r}] errored!`,e.slice(2),n),a([x(e[0]),""+n])}),!0});})();
