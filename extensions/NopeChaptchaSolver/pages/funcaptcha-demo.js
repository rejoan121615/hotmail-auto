(()=>{var I,l,oe,Ne,A,Z,re,q,Te,U={},ie=[],Ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function C(e,t){for(var n in t)e[n]=t[n];return e}function se(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var r,i,o,u={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?I.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return P(e,u,r,i,null)}function P(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++oe};return i==null&&l.vnode!=null&&l.vnode(o),o}function L(e){return e.children}function H(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?D(e):null}function ae(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ae(e)}}function ee(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!N.__r++||Z!==l.debounceRendering)&&((Z=l.debounceRendering)||re)(N)}function N(){var e,t,n,r,i,o,u,p;for(A.sort(q);e=A.shift();)e.__d&&(t=A.length,r=void 0,i=void 0,u=(o=(n=e).__v).__e,(p=n.__P)&&(r=[],(i=C({},o)).__v=o.__v+1,j(p,o,i,n.__n,p.ownerSVGElement!==void 0,o.__h!=null?[u]:null,r,u??D(o),o.__h),pe(r,o),o.__e!=u&&ae(o)),A.length>t&&A.sort(q));N.__r=0}function ue(e,t,n,r,i,o,u,p,f,d){var _,h,a,s,c,E,y,g=r&&r.__k||ie,b=g.length;for(n.__k=[],_=0;_<t.length;_++)if((s=n.__k[_]=(s=t[_])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?P(null,s,null,null,s):O(s)?P(L,{children:s},null,null,null):s.__b>0?P(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null){if(s.__=n,s.__b=n.__b+1,(a=g[_])===null||a&&s.key==a.key&&s.type===a.type)g[_]=void 0;else for(h=0;h<b;h++){if((a=g[h])&&s.key==a.key&&s.type===a.type){g[h]=void 0;break}a=null}j(e,s,a=a||U,i,o,u,p,f,d),c=s.__e,(h=s.ref)&&a.ref!=h&&(y||(y=[]),a.ref&&y.push(a.ref,null,s),y.push(h,s.__c||c,s)),c!=null?(E==null&&(E=c),typeof s.type=="function"&&s.__k===a.__k?s.__d=f=le(s,f,e):f=ce(e,s,a,g,c,f),typeof n.type=="function"&&(n.__d=f)):f&&a.__e==f&&f.parentNode!=e&&(f=D(a))}for(n.__e=E,_=b;_--;)g[_]!=null&&(typeof n.type=="function"&&g[_].__e!=null&&g[_].__e==n.__d&&(n.__d=fe(r).nextSibling),me(g[_],g[_]));if(y)for(_=0;_<y.length;_++)de(y[_],y[++_],y[++_])}function le(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?le(r,t,n):ce(n,r,r,i,r.__e,t));return t}function ce(e,t,n,r,i,o){var u,p,f;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),u=null;else{for(p=o,f=0;(p=p.nextSibling)&&f<r.length;f+=1)if(p==i)break e;e.insertBefore(i,o),u=o}return u!==void 0?u:i.nextSibling}function fe(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=fe(n)))return r}return null}function Le(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||T(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||T(e,o,t[o],n[o],r)}function te(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ie.test(t)?n:n+"px"}function T(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||te(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||te(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?_e:ne,o):e.removeEventListener(t,o?_e:ne,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ne(e){return this.l[e.type+!1](l.event?l.event(e):e)}function _e(e){return this.l[e.type+!0](l.event?l.event(e):e)}function j(e,t,n,r,i,o,u,p,f){var d,_,h,a,s,c,E,y,g,b,S,x,X,B,$,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,p=t.__e=n.__e,t.__h=null,o=[p]),(d=l.__b)&&d(t);try{e:if(typeof k=="function"){if(y=t.props,g=(d=k.contextType)&&r[d.__c],b=d?g?g.props.value:d.__:r,n.__c?E=(_=t.__c=n.__c).__=_.__E:("prototype"in k&&k.prototype.render?t.__c=_=new k(y,b):(t.__c=_=new H(y,b),_.constructor=k,_.render=We),g&&g.sub(_),_.props=y,_.state||(_.state={}),_.context=b,_.__n=r,h=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=C({},_.__s)),C(_.__s,k.getDerivedStateFromProps(y,_.__s))),a=_.props,s=_.state,_.__v=t,h)k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(k.getDerivedStateFromProps==null&&y!==a&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,b)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(_.props=y,_.state=_.__s,_.__d=!1),_.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(w){w&&(w.__=t)}),S=0;S<_._sb.length;S++)_.__h.push(_._sb[S]);_._sb=[],_.__h.length&&u.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(a,s,c)})}if(_.context=b,_.props=y,_.__P=e,x=l.__r,X=0,"prototype"in k&&k.prototype.render){for(_.state=_.__s,_.__d=!1,x&&x(t),d=_.render(_.props,_.state,_.context),B=0;B<_._sb.length;B++)_.__h.push(_._sb[B]);_._sb=[]}else do _.__d=!1,x&&x(t),d=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++X<25);_.state=_.__s,_.getChildContext!=null&&(r=C(C({},r),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(c=_.getSnapshotBeforeUpdate(a,s)),ue(e,O($=d!=null&&d.type===L&&d.key==null?d.props.children:d)?$:[$],t,n,r,i,o,u,p,f),_.base=t.__e,t.__h=null,_.__h.length&&u.push(_),E&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Re(n.__e,t,n,r,i,o,u,f);(d=l.diffed)&&d(t)}catch(w){t.__v=null,(f||o!=null)&&(t.__e=p,t.__h=!!f,o[o.indexOf(p)]=null),l.__e(w,t,n)}}function pe(e,t){l.__c&&l.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){l.__e(r,n.__v)}})}function Re(e,t,n,r,i,o,u,p){var f,d,_,h=n.props,a=t.props,s=t.type,c=0;if(s==="svg"&&(i=!0),o!=null){for(;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!s&&(s?f.localName===s:f.nodeType===3)){e=f,o[c]=null;break}}if(e==null){if(s===null)return document.createTextNode(a);e=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,a.is&&a),o=null,p=!1}if(s===null)h===a||p&&e.data===a||(e.data=a);else{if(o=o&&I.call(e.childNodes),d=(h=n.props||U).dangerouslySetInnerHTML,_=a.dangerouslySetInnerHTML,!p){if(o!=null)for(h={},c=0;c<e.attributes.length;c++)h[e.attributes[c].name]=e.attributes[c].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(Le(e,a,h,i,p),_)t.__k=[];else if(ue(e,O(c=t.props.children)?c:[c],t,n,r,i&&s!=="foreignObject",o,u,o?o[0]:n.__k&&D(n,0),p),o!=null)for(c=o.length;c--;)o[c]!=null&&se(o[c]);p||("value"in a&&(c=a.value)!==void 0&&(c!==e.value||s==="progress"&&!c||s==="option"&&c!==h.value)&&T(e,"value",c,h.value,!1),"checked"in a&&(c=a.checked)!==void 0&&c!==e.checked&&T(e,"checked",c,h.checked,!1))}return e}function de(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){l.__e(r,n)}}function me(e,t,n){var r,i;if(l.unmount&&l.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||de(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){l.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&me(r[i],t,n||typeof e.type!="function");n||e.__e==null||se(e.__e),e.__=e.__e=e.__d=void 0}function We(e,t,n){return this.constructor(e,n)}function he(e,t,n){var r,i,o;l.__&&l.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],j(t,e=(!r&&n||t).__k=m(L,null,[e]),i||U,U,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?I.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),pe(o,e)}I=ie.slice,l={__e:function(e,t,n,r){for(var i,o,u;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),u=i.__d),u)return i.__E=i}catch(p){e=p}throw e}},oe=0,Ne=function(e){return e!=null&&e.constructor===void 0},H.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ee(this))},H.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ee(this))},H.prototype.render=L,A=[],re=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,t){return e.__v.__b-t.__v.__b},N.__r=0,Te=0;var R=[300,400];var z=[{name:"linkedin",sitekey:"3117BF26-4762-4F5A-8ED9-A85E69209A46",loader:1},{name:"rockstar",sitekey:"A5A70501-FCDE-4065-AF18-D9FAF06EF479"},{name:"github",sitekey:"20782B4C-05D0-45D7-97A0-41641055B6F6",dimensions:[654,380]},{name:"paypal",sitekey:"9409E63B-D2A5-9CBD-DBC0-5095707D0090",loader:1},{name:"twitch",sitekey:"E5554D43-23CC-1982-971D-6A2262A2CA24",loader:1},{name:"demo1",sitekey:"804380F4-6844-FFA1-ED4E-5877CA1F1EA4",loader:1},{name:"demo2",sitekey:"D39B0EE3-2973-4147-98EF-C92F93451E2D"},{name:"ea signup",sitekey:"73BEC076-3E53-30F5-B1EB-84F494D43DBA"},{name:"ea signin",sitekey:"0F5FE186-B3CA-4EDB-A39B-9B9A3397D01D"},{name:"minecraft",sitekey:"D39B0EE3-2973-4147-98EF-C92F93451E2D"},{name:"imvu",sitekey:"0C2B415C-D772-47D4-A183-34934F786C7E"},{name:"blizzard",sitekey:"E8A75615-1CBA-5DFF-8032-D16BCF234E10"},{name:"octocaptcha",sitekey:"69A21A01-CC7B-B9C6-0F9A-E7FA06677FFC",dimensions:[465,320]},{name:"myprepaidcenter",sitekey:"0F941BF0-7303-D94B-B76A-EAA2E2048124"},{name:"discoveryplus",sitekey:"FE296399-FDEA-2EA2-8CD5-50F6E3157ECA"},{name:"instagram",sitekey:"EA4B65CB-594A-438E-B4B5-D0DBA28C9334",loader:1},{name:"twitter [mobile]",sitekey:"867D55F2-24FD-4C56-AB6D-589EDAF5E7C5",dimensions:R},{name:"twitter [web]",sitekey:"2CB16598-CB82-4CF7-B332-5990DB66F3AB",dimensions:R},{name:"outlook",sitekey:"B7D8911C-5CC8-A9A3-35B0-554ACEE604DA",dimensions:R},{name:"outlook [auth]",sitekey:"B7D8911C-5CC8-A9A3-35B0-554ACEE604DA",hostname:"iframe-auth.arkoselabs.com",dimensions:R}];var V,v,G,ye,J=0,Ee=[],W=[],ve=l.__b,ge=l.__r,ke=l.diffed,be=l.__c,Ce=l.unmount;function xe(e,t){l.__h&&l.__h(v,e,J||t),J=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:W}),n.__[e]}function F(e){return J=1,Me(Fe,e)}function Me(e,t,n){var r=xe(V++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Fe(void 0,t),function(p){var f=r.__N?r.__N[0]:r.__[0],d=r.t(f,p);f!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.u)){var i=function(p,f,d){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter(function(a){return a.__c});if(_.every(function(a){return!a.__N}))return!o||o.call(this,p,f,d);var h=!1;return _.forEach(function(a){if(a.__N){var s=a.__[0];a.__=a.__N,a.__N=void 0,s!==a.__[0]&&(h=!0)}}),!(!h&&r.__c.props===p)&&(!o||o.call(this,p,f,d))};v.u=!0;var o=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(p,f,d){if(this.__e){var _=o;o=void 0,i(p,f,d),o=_}u&&u.call(this,p,f,d)},v.shouldComponentUpdate=i}return r.__N||r.__}function De(e,t){var n=xe(V++,3);!l.__s&&qe(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function Ve(){for(var e;e=Ee.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(M),e.__H.__h.forEach(Y),e.__H.__h=[]}catch(t){e.__H.__h=[],l.__e(t,e.__v)}}l.__b=function(e){v=null,ve&&ve(e)},l.__r=function(e){ge&&ge(e),V=0;var t=(v=e.__c).__H;t&&(G===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=W,n.__N=n.i=void 0})):(t.__h.forEach(M),t.__h.forEach(Y),t.__h=[],V=0)),G=v},l.diffed=function(e){ke&&ke(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ee.push(t)!==1&&ye===l.requestAnimationFrame||((ye=l.requestAnimationFrame)||$e)(Ve)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==W&&(n.__=n.__V),n.i=void 0,n.__V=W})),G=v=null},l.__c=function(e,t){t.some(function(n){try{n.__h.forEach(M),n.__h=n.__h.filter(function(r){return!r.__||Y(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],l.__e(r,n.__v)}}),be&&be(e,t)},l.unmount=function(e){Ce&&Ce(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{M(r)}catch(i){t=i}}),n.__H=void 0,t&&l.__e(t,n.__v))};var Ae=typeof requestAnimationFrame=="function";function $e(e){var t,n=function(){clearTimeout(r),Ae&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Ae&&(t=requestAnimationFrame(n))}function M(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function Y(e){var t=v;e.__c=e.__(),v=t}function qe(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Fe(e,t){return typeof t=="function"?t(e):t}var Se=chrome;function Be(e){let t=("fff12fa3cdd64ff83a30d7b392be57e978a86eee93b9728ed0366bf231abdaad"+e).split("").map(n=>n.charCodeAt(0));return Pe(t)}var we=new Uint32Array(256);for(let e=256;e--;){let t=e;for(let n=8;n--;)t=t&1?3988292384^t>>>1:t>>>1;we[e]=t}function Pe(e){let t=-1;for(let n of e)t=t>>>8^we[t&255^n];return(t^-1)>>>0}async function He(e,t){let n=""+[+new Date,performance.now(),Math.random()],[r,i]=await new Promise(o=>{Se.runtime.sendMessage([n,e,...t],o)});if(r===Be(n))return i}function Q(){let[e,t]=F(1),[n,r]=F(!1),[i,o]=F(null);return m("main",{style:{maxWidth:"100rem",padding:"1rem",margin:"0px auto",fontFamily:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}},m(K,null,m("h3",null,"Select FunCAPTCHA site to test"),m("button",{onClick:()=>{r(!n),o(null)},style:{marginBottom:"1rem"}},"Render all of them (laggy!)"),m("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.125rem 0.25rem"}},z.map(u=>m("button",{onClick:()=>{r(!1),o(u)}},u.name)))),m(K,null,m("h3",null,"How many CAPTCHAs to render at once?"),m("div",{style:{display:"flex"}},m("input",{type:"range",min:1,max:20,value:e,onChange:u=>{t(u.currentTarget.valueAsNumber)}}),e)),m(K,null,m("h3",null,"CAPTCHAs"),!n&&!i?m("p",null,"You need to select a sitekey!"):n?z.map(u=>m(Ue,{sitekey:u,amount:e})):m(Ue,{sitekey:i,amount:e})))}function K({children:e}){return m("section",{style:{margin:"2rem 0px"}},e)}function Ue({sitekey:e,amount:t}){return m("div",{style:{margin:"0.25rem 0px"}},m("h4",null,e.name),m("hr",null),m("div",{style:{display:"flex",flexWrap:"wrap"}},Array(t).fill(0).map((n,r)=>m(Oe,{...e}))))}function Oe({sitekey:e,hostname:t="iframe.arkoselabs.com",dimensions:[n,r]=[320,310],loader:i=0}){let[o,u]=F();return De(()=>{if(i===0)u(`https://${t}/${e}/index.html?mkt=en`);else if(i===1){let p=`https://api.funcaptcha.com/fc/gt2/public_key/${e}`;He("fetch::universalFetch",[p,{method:"POST",body:new URLSearchParams({bda:"",site:"",public_key:e,language:"en",userbrowser:navigator.userAgent,rnd:""+Math.random()}).toString(),headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}}]).then(({text:f})=>{let d=JSON.parse(f),_={};for(let a of d.token.split("|")){let[s,c]=a.split("=");c||([s,c]=["token",s]),s.endsWith("url")&&(c=decodeURIComponent(c)),_[s]=c}let h=new URLSearchParams(_);u(`https://api.funcaptcha.com/fc/gc/?${h.toString()}`)})}},[e,t,i]),m("div",{style:{width:`${n}px`,height:`${r}px`,border:"1px solid black"}},o?m("iframe",{src:o,style:{width:"100%",height:"100%",border:"none"}}):m("p",null,"Loading..."))}[...document.body.children].forEach(e=>e.remove());he(m(Q,{}),document.body);})();
