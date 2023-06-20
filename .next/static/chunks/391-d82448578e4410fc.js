(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[391],{4098:function(e,t){var r,i="undefined"!=typeof self?self:this,o=function(){function e(){this.fetch=!1,this.DOMException=i.DOMException}return e.prototype=i,new e}();r=o,function(e){var t={searchParams:"URLSearchParams"in r,iterable:"Symbol"in r&&"iterator"in Symbol,blob:"FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in r,arrayBuffer:"ArrayBuffer"in r};if(t.arrayBuffer)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function n(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw TypeError("Invalid character in header field name");return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function a(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function c(e){this.map={},e instanceof c?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function l(e){if(e.bodyUsed)return Promise.reject(TypeError("Already read"));e.bodyUsed=!0}function d(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function u(e){var t=new FileReader,r=d(t);return t.readAsArrayBuffer(e),r}function h(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e){if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else{var r;t.arrayBuffer&&t.blob&&(r=e)&&DataView.prototype.isPrototypeOf(r)?(this._bodyArrayBuffer=h(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||o(e))?this._bodyArrayBuffer=h(e):this._bodyText=e=Object.prototype.toString.call(e)}}else this._bodyText="";!this.headers.get("content-type")&&("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(!this._bodyFormData)return Promise.resolve(new Blob([this._bodyText]));throw Error("could not read FormData body as blob")},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var e,t,r,i=l(this);if(i)return i;if(this._bodyBlob)return e=this._bodyBlob,r=d(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=Array(t.length),i=0;i<t.length;i++)r[i]=String.fromCharCode(t[i]);return r.join("")}(this._bodyArrayBuffer));if(!this._bodyFormData)return Promise.resolve(this._bodyText);throw Error("could not read FormData body as text")},t.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=n(e),t=s(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},c.prototype.delete=function(e){delete this.map[n(e)]},c.prototype.get=function(e){return e=n(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(n(e))},c.prototype.set=function(e,t){this.map[n(e)]=s(t)},c.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),a(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),a(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),a(e)},t.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var f=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(e,t){var r,i,o=(t=t||{}).body;if(e instanceof y){if(e.bodyUsed)throw TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new c(t.headers)),this.method=(i=(r=t.method||this.method||"GET").toUpperCase(),f.indexOf(i)>-1?i:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),i=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(i),decodeURIComponent(o))}}),t}function b(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},p.call(y.prototype),p.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];b.redirect=function(e,t){if(-1===w.indexOf(t))throw RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.DOMException=r.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function v(r,i){return new Promise(function(o,n){var s=new y(r,i);if(s.signal&&s.signal.aborted)return n(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function l(){a.abort()}a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new c,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),i=r.shift().trim();if(i){var o=r.join(":").trim();t.append(i,o)}}),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var i="response"in a?a.response:a.responseText;o(new b(i,r))},a.onerror=function(){n(TypeError("Network request failed"))},a.ontimeout=function(){n(TypeError("Network request failed"))},a.onabort=function(){n(new e.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&t.blob&&(a.responseType="blob"),s.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),s.signal&&(s.signal.addEventListener("abort",l),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",l)}),a.send(void 0===s._bodyInit?null:s._bodyInit)})}v.polyfill=!0,r.fetch||(r.fetch=v,r.Headers=c,r.Request=y,r.Response=b),e.Headers=c,e.Request=y,e.Response=b,e.fetch=v,Object.defineProperty(e,"__esModule",{value:!0})}({}),o.fetch.ponyfill=!0,delete o.fetch.polyfill,(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t},7514:function(e){e.exports=window.FormData},2391:function(e,t,r){"use strict";r.d(t,{KU:function(){return c},Lg:function(){return l}}),r(7514);var i=r(4098);function o(e,t,r,i){return new(r||(r=Promise))(function(o,n){function s(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,a)}c((i=i.apply(e,t||[])).next())})}class n{constructor(e){this.client=e}static flatten(e,t=""){let r={};for(let i in e){let o=e[i],n=t?`${t}[${i}]`:i;Array.isArray(o)?r=Object.assign(r,this.flatten(o,n)):r[n]=o}return r}}n.CHUNK_SIZE=5242880;class s{}s.equal=(e,t)=>s.addQuery(e,"equal",t),s.notEqual=(e,t)=>s.addQuery(e,"notEqual",t),s.lessThan=(e,t)=>s.addQuery(e,"lessThan",t),s.lessThanEqual=(e,t)=>s.addQuery(e,"lessThanEqual",t),s.greaterThan=(e,t)=>s.addQuery(e,"greaterThan",t),s.greaterThanEqual=(e,t)=>s.addQuery(e,"greaterThanEqual",t),s.isNull=e=>`isNull("${e}")`,s.isNotNull=e=>`isNotNull("${e}")`,s.between=(e,t,r)=>`between("${e}", [${s.parseValues(t)},${s.parseValues(r)}])`,s.startsWith=(e,t)=>s.addQuery(e,"startsWith",t),s.endsWith=(e,t)=>s.addQuery(e,"endsWith",t),s.select=e=>`select([${e.map(e=>`"${e}"`).join(",")}])`,s.search=(e,t)=>s.addQuery(e,"search",t),s.orderDesc=e=>`orderDesc("${e}")`,s.orderAsc=e=>`orderAsc("${e}")`,s.cursorAfter=e=>`cursorAfter("${e}")`,s.cursorBefore=e=>`cursorBefore("${e}")`,s.limit=e=>`limit(${e})`,s.offset=e=>`offset(${e})`,s.addQuery=(e,t,r)=>r instanceof Array?`${t}("${e}", [${r.map(e=>s.parseValues(e)).join(",")}])`:`${t}("${e}", [${s.parseValues(r)}])`,s.parseValues=e=>"string"==typeof e||e instanceof String?`"${e}"`:`${e}`;class a extends Error{constructor(e,t=0,r="",i=""){super(e),this.name="AppwriteException",this.message=e,this.code=t,this.type=r,this.response=i}}class c{constructor(){this.config={endpoint:"https://HOSTNAME/v1",endpointRealtime:"",project:"",jwt:"",locale:""},this.headers={"x-sdk-name":"Web","x-sdk-platform":"client","x-sdk-language":"web","x-sdk-version":"11.0.0","X-Appwrite-Response-Format":"1.0.0"},this.realtime={socket:void 0,timeout:void 0,url:"",channels:new Set,subscriptions:new Map,subscriptionsCounter:0,reconnect:!0,reconnectAttempts:0,lastMessage:void 0,connect:()=>{clearTimeout(this.realtime.timeout),this.realtime.timeout=null==window?void 0:window.setTimeout(()=>{this.realtime.createSocket()},50)},getTimeout:()=>{switch(!0){case this.realtime.reconnectAttempts<5:return 1e3;case this.realtime.reconnectAttempts<15:return 5e3;case this.realtime.reconnectAttempts<100:return 1e4;default:return 6e4}},createSocket:()=>{var e,t;if(this.realtime.channels.size<1)return;let r=new URLSearchParams;r.set("project",this.config.project),this.realtime.channels.forEach(e=>{r.append("channels[]",e)});let i=this.config.endpointRealtime+"/realtime?"+r.toString();(i!==this.realtime.url||!this.realtime.socket||(null===(e=this.realtime.socket)||void 0===e?void 0:e.readyState)>WebSocket.OPEN)&&(this.realtime.socket&&(null===(t=this.realtime.socket)||void 0===t?void 0:t.readyState)<WebSocket.CLOSING&&(this.realtime.reconnect=!1,this.realtime.socket.close()),this.realtime.url=i,this.realtime.socket=new WebSocket(i),this.realtime.socket.addEventListener("message",this.realtime.onMessage),this.realtime.socket.addEventListener("open",e=>{this.realtime.reconnectAttempts=0}),this.realtime.socket.addEventListener("close",e=>{var t,r,i;if(!this.realtime.reconnect||(null===(r=null===(t=this.realtime)||void 0===t?void 0:t.lastMessage)||void 0===r?void 0:r.type)==="error"&&1008===(null===(i=this.realtime)||void 0===i?void 0:i.lastMessage.data).code){this.realtime.reconnect=!0;return}let o=this.realtime.getTimeout();console.error(`Realtime got disconnected. Reconnect will be attempted in ${o/1e3} seconds.`,e.reason),setTimeout(()=>{this.realtime.reconnectAttempts++,this.realtime.createSocket()},o)}))},onMessage:e=>{var t,r;try{let i=JSON.parse(e.data);switch(this.realtime.lastMessage=i,i.type){case"connected":let o=JSON.parse(null!==(t=window.localStorage.getItem("cookieFallback"))&&void 0!==t?t:"{}"),n=null==o?void 0:o[`a_session_${this.config.project}`],s=i.data;n&&!s.user&&(null===(r=this.realtime.socket)||void 0===r||r.send(JSON.stringify({type:"authentication",data:{session:n}})));break;case"event":let a=i.data;if(null==a?void 0:a.channels){let e=a.channels.some(e=>this.realtime.channels.has(e));if(!e)return;this.realtime.subscriptions.forEach(e=>{a.channels.some(t=>e.channels.includes(t))&&setTimeout(()=>e.callback(a))})}break;case"error":throw i.data}}catch(e){console.error(e)}},cleanUp:e=>{this.realtime.channels.forEach(t=>{e.includes(t)&&!Array.from(this.realtime.subscriptions).some(([e,r])=>r.channels.includes(t))&&this.realtime.channels.delete(t)})}}}setEndpoint(e){return this.config.endpoint=e,this.config.endpointRealtime=this.config.endpointRealtime||this.config.endpoint.replace("https://","wss://").replace("http://","ws://"),this}setEndpointRealtime(e){return this.config.endpointRealtime=e,this}setProject(e){return this.headers["X-Appwrite-Project"]=e,this.config.project=e,this}setJWT(e){return this.headers["X-Appwrite-JWT"]=e,this.config.jwt=e,this}setLocale(e){return this.headers["X-Appwrite-Locale"]=e,this.config.locale=e,this}subscribe(e,t){let r="string"==typeof e?[e]:e;r.forEach(e=>this.realtime.channels.add(e));let i=this.realtime.subscriptionsCounter++;return this.realtime.subscriptions.set(i,{channels:r,callback:t}),this.realtime.connect(),()=>{this.realtime.subscriptions.delete(i),this.realtime.cleanUp(r),this.realtime.connect()}}call(e,t,r={},s={}){var c,l;return o(this,void 0,void 0,function*(){e=e.toUpperCase(),r=Object.assign({},this.headers,r);let o={method:e,headers:r,credentials:"include"};if("undefined"!=typeof window&&window.localStorage&&(r["X-Fallback-Cookies"]=null!==(c=window.localStorage.getItem("cookieFallback"))&&void 0!==c?c:""),"GET"===e)for(let[e,r]of Object.entries(n.flatten(s)))t.searchParams.append(e,r);else switch(r["content-type"]){case"application/json":o.body=JSON.stringify(s);break;case"multipart/form-data":let d=new FormData;for(let e in s)Array.isArray(s[e])?s[e].forEach(t=>{d.append(e+"[]",t)}):d.append(e,s[e]);o.body=d,delete r["content-type"]}try{let e=null,r=yield(0,i.fetch)(t.toString(),o);if(e=(null===(l=r.headers.get("content-type"))||void 0===l?void 0:l.includes("application/json"))?yield r.json():{message:yield r.text()},400<=r.status)throw new a(null==e?void 0:e.message,r.status,null==e?void 0:e.type,e);let n=r.headers.get("X-Fallback-Cookies");return"undefined"!=typeof window&&window.localStorage&&n&&(window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."),window.localStorage.setItem("cookieFallback",n)),e}catch(e){if(e instanceof a)throw e;throw new a(e.message)}})}}class l extends n{constructor(e){super(e)}listDocuments(e,t,r){return o(this,void 0,void 0,function*(){if(void 0===e)throw new a('Missing required parameter: "databaseId"');if(void 0===t)throw new a('Missing required parameter: "collectionId"');let i="/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}",e).replace("{collectionId}",t),o={};void 0!==r&&(o.queries=r);let n=new URL(this.client.config.endpoint+i);return yield this.client.call("get",n,{"content-type":"application/json"},o)})}createDocument(e,t,r,i,n){return o(this,void 0,void 0,function*(){if(void 0===e)throw new a('Missing required parameter: "databaseId"');if(void 0===t)throw new a('Missing required parameter: "collectionId"');if(void 0===r)throw new a('Missing required parameter: "documentId"');if(void 0===i)throw new a('Missing required parameter: "data"');let o="/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}",e).replace("{collectionId}",t),s={};void 0!==r&&(s.documentId=r),void 0!==i&&(s.data=i),void 0!==n&&(s.permissions=n);let c=new URL(this.client.config.endpoint+o);return yield this.client.call("post",c,{"content-type":"application/json"},s)})}getDocument(e,t,r,i){return o(this,void 0,void 0,function*(){if(void 0===e)throw new a('Missing required parameter: "databaseId"');if(void 0===t)throw new a('Missing required parameter: "collectionId"');if(void 0===r)throw new a('Missing required parameter: "documentId"');let o="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",e).replace("{collectionId}",t).replace("{documentId}",r),n={};void 0!==i&&(n.queries=i);let s=new URL(this.client.config.endpoint+o);return yield this.client.call("get",s,{"content-type":"application/json"},n)})}updateDocument(e,t,r,i,n){return o(this,void 0,void 0,function*(){if(void 0===e)throw new a('Missing required parameter: "databaseId"');if(void 0===t)throw new a('Missing required parameter: "collectionId"');if(void 0===r)throw new a('Missing required parameter: "documentId"');let o="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",e).replace("{collectionId}",t).replace("{documentId}",r),s={};void 0!==i&&(s.data=i),void 0!==n&&(s.permissions=n);let c=new URL(this.client.config.endpoint+o);return yield this.client.call("patch",c,{"content-type":"application/json"},s)})}deleteDocument(e,t,r){return o(this,void 0,void 0,function*(){if(void 0===e)throw new a('Missing required parameter: "databaseId"');if(void 0===t)throw new a('Missing required parameter: "collectionId"');if(void 0===r)throw new a('Missing required parameter: "documentId"');let i="/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}",e).replace("{collectionId}",t).replace("{documentId}",r),o=new URL(this.client.config.endpoint+i);return yield this.client.call("delete",o,{"content-type":"application/json"},{})})}}class d{}d.read=e=>`read("${e}")`,d.write=e=>`write("${e}")`,d.create=e=>`create("${e}")`,d.update=e=>`update("${e}")`,d.delete=e=>`delete("${e}")`}}]);