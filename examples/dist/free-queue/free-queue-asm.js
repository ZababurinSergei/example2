var Module=function(){var e=import.meta.url;return function(r){var n,t;(r=void 0!==(r=r||{})?r:{}).ready=new Promise((function(e,r){n=e,t=r}));var a,o={};for(a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);var i,u,s,c,l,f=[],d="./this.program",p=function(e,r){throw r},h="object"==typeof window,m="function"==typeof importScripts,v="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,_=r.ENVIRONMENT_IS_PTHREAD||!1,g="";function y(e){return r.locateFile?r.locateFile(e,g):g+e}if(v){var w;g=m?require("path").dirname(g)+"/":__dirname+"/",i=function(e,r){return c||(c=require("fs")),l||(l=require("path")),e=l.normalize(e),c.readFileSync(e,r?null:"utf8")},s=function(e){var r=i(e,!0);return r.buffer||(r=new Uint8Array(r)),P(r.buffer),r},u=function(e,r,n){c||(c=require("fs")),l||(l=require("path")),e=l.normalize(e),c.readFile(e,(function(e,t){e?n(e):r(t.buffer)}))},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),f=process.argv.slice(2),process.on("uncaughtException",(function(e){if(!(e instanceof nr))throw e})),process.on("unhandledRejection",ue),p=function(e,r){if(ne())throw process.exitCode=e,r;process.exit(e)},r.inspect=function(){return"[Emscripten Module object]"};try{w=require("worker_threads")}catch(e){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),e}global.Worker=w.Worker}else(h||m)&&(m?g=self.location.href:"undefined"!=typeof document&&document.currentScript&&(g=document.currentScript.src),e&&(g=e),g=0!==g.indexOf("blob:")?g.substr(0,g.lastIndexOf("/")+1):"",v?(i=function(e,r){return c||(c=require("fs")),l||(l=require("path")),e=l.normalize(e),c.readFileSync(e,r?null:"utf8")},s=function(e){var r=i(e,!0);return r.buffer||(r=new Uint8Array(r)),P(r.buffer),r},u=function(e,r,n){c||(c=require("fs")),l||(l=require("path")),e=l.normalize(e),c.readFile(e,(function(e,t){e?n(e):r(t.buffer)}))}):(i=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},m&&(s=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),u=function(e,r,n){var t=new XMLHttpRequest;t.open("GET",e,!0),t.responseType="arraybuffer",t.onload=function(){200==t.status||0==t.status&&t.response?r(t.response):n()},t.onerror=n,t.send(null)}));v&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var x,b=r.print||console.log.bind(console),k=r.printErr||console.warn.bind(console);for(a in o)o.hasOwnProperty(a)&&(r[a]=o[a]);function A(e){A.shown||(A.shown={}),A.shown[e]||(A.shown[e]=1,k(e))}o=null,r.arguments&&(f=r.arguments),r.thisProgram&&(d=r.thisProgram),r.quit&&(p=r.quit),Atomics.load,Atomics.store,Atomics.compareExchange,r.wasmBinary&&(x=r.wasmBinary);var E,T,C=r.noExitRuntime||!0;"object"!=typeof WebAssembly&&ue("no native wasm support detected");var S,W=!1;function P(e,r){e||ue("Assertion failed: "+r)}function I(e){var n=r["_"+e];return P(n,"Cannot call unknown function "+e+", make sure it is exported"),n}function L(e,r,n,t,a){var o={string:function(e){var r=0;if(null!=e&&0!==e){var n=1+(e.length<<2);N(e,r=Ke(n),n)}return r},array:function(e){var r=Ke(e.length);return function(e,r){F.set(e,r)}(e,r),r}},i=I(e),u=[],s=0;if(t)for(var c=0;c<t.length;c++){var l=o[n[c]];l?(0===s&&(s=Ye()),u[c]=l(t[c])):u[c]=t[c]}var f=i.apply(null,u);return function(e){return 0!==s&&Je(s),function(e){return"string"===r?j(e):"boolean"===r?Boolean(e):e}(e)}(f)}function R(e){var r=new TextDecoder(e);this.decode=function(e){return e.buffer instanceof SharedArrayBuffer&&(e=new Uint8Array(e)),r.decode.call(r,e)}}var M,F,H,O,B,q,G="undefined"!=typeof TextDecoder?new R("utf8"):void 0;function D(e,r,n){for(var t=r+n,a=r;e[a]&&!(a>=t);)++a;if(a-r>16&&e.subarray&&G)return G.decode(e.subarray(r,a));for(var o="";r<a;){var i=e[r++];if(128&i){var u=63&e[r++];if(192!=(224&i)){var s=63&e[r++];if((i=224==(240&i)?(15&i)<<12|u<<6|s:(7&i)<<18|u<<12|s<<6|63&e[r++])<65536)o+=String.fromCharCode(i);else{var c=i-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&i)<<6|u)}else o+=String.fromCharCode(i)}return o}function j(e,r){return e?D(H,e,r):""}function Q(e,r,n,t){if(!(t>0))return 0;for(var a=n,o=n+t-1,i=0;i<e.length;++i){var u=e.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++i)),u<=127){if(n>=o)break;r[n++]=u}else if(u<=2047){if(n+1>=o)break;r[n++]=192|u>>6,r[n++]=128|63&u}else if(u<=65535){if(n+2>=o)break;r[n++]=224|u>>12,r[n++]=128|u>>6&63,r[n++]=128|63&u}else{if(n+3>=o)break;r[n++]=240|u>>18,r[n++]=128|u>>12&63,r[n++]=128|u>>6&63,r[n++]=128|63&u}}return r[n]=0,n-a}function N(e,r,n){return Q(e,H,r,n)}function U(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++n)),t<=127?++r:r+=t<=2047?2:t<=65535?3:4}return r}function z(e){var r=U(e)+1,n=Ke(r);return Q(e,F,n,r),n}"undefined"!=typeof TextDecoder&&new R("utf-16le"),_&&(M=r.buffer);var V,X,Y=r.INITIAL_MEMORY||209715200;if(_)E=r.wasmMemory,M=r.buffer;else if(r.wasmMemory)E=r.wasmMemory;else if(!((E=new WebAssembly.Memory({initial:Y/65536,maximum:Y/65536,shared:!0})).buffer instanceof SharedArrayBuffer))throw k("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),v&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),Error("bad memory");E&&(M=E.buffer),Y=M.byteLength,M=V=M,r.HEAP8=F=new Int8Array(V),r.HEAP16=new Int16Array(V),r.HEAP32=O=new Int32Array(V),r.HEAPU8=H=new Uint8Array(V),r.HEAPU16=new Uint16Array(V),r.HEAPU32=B=new Uint32Array(V),r.HEAPF32=new Float32Array(V),r.HEAPF64=q=new Float64Array(V);var J=[],K=[],Z=[],$=[],ee=[],re=0;function ne(){return C||re>0}function te(){_||pe(K)}var ae=0,oe=null,ie=null;function ue(e){_?postMessage({cmd:"onAbort",arg:e}):r.onAbort&&r.onAbort(e),k(e+=""),W=!0,S=1,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(e);throw t(n),n}r.preloadedImages={},r.preloadedAudios={};var se;function ce(e){return e.startsWith("data:application/octet-stream;base64,")}function le(e){return e.startsWith("file://")}function fe(e){try{if(e==se&&x)return new Uint8Array(x);if(s)return s(e);throw"both async and sync fetching of the wasm failed"}catch(e){ue(e)}}r.locateFile?ce(se="free-queue-asm.wasm")||(se=y(se)):se=new URL("free-queue-asm.wasm",import.meta.url).toString();var de={};function pe(e){for(;e.length>0;){var n=e.shift();if("function"!=typeof n){var t=n.func;"number"==typeof t?void 0===n.arg?X.get(t)():X.get(t)(n.arg):t(void 0===n.arg?null:n.arg)}else n(r)}}function he(e,r){if(e<=0||e>F.length||!0&e||r<0)return-28;if(0==r)return 0;r>=2147483647&&(r=1/0);var n=Atomics.load(O,rr>>2),t=0;if(n==e&&Atomics.compareExchange(O,rr>>2,n,0)==n&&(t=1,--r<=0))return 1;var a=Atomics.notify(O,e>>2,r);if(a>=0)return a+t;throw"Atomics.notify returned an unexpected value "+a}function me(e){if(_)throw"Internal Error! cleanupThread() can only ever be called from main application thread!";if(!e)throw"Internal Error! Null pthread_ptr in cleanupThread!";var r=ge.pthreads[e];if(r){O[e+8>>2]=0;var n=r.worker;ge.returnWorkerToPool(n)}}function ve(e){if(e instanceof nr||"unwind"==e)return S;k("exception thrown: "+e),p(1,e)}r._emscripten_futex_wake=he;var _e,ge={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],initMainThreadBlock:function(){},initRuntime:function(e){Ve(e,!m,1)},initWorker:function(){},pthreads:{},threadExitHandlers:[],setExitStatus:function(e){S=e},terminateAllThreads:function(){for(var e in ge.pthreads)(t=ge.pthreads[e])&&t.worker&&ge.returnWorkerToPool(t.worker);ge.pthreads={};for(var r=0;r<ge.unusedWorkers.length;++r)(n=ge.unusedWorkers[r]).terminate();for(ge.unusedWorkers=[],r=0;r<ge.runningWorkers.length;++r){var n,t=(n=ge.runningWorkers[r]).pthread;n.terminate(),ge.freeThreadData(t)}ge.runningWorkers=[]},freeThreadData:function(e){e&&(e.threadInfoStruct&&qe(e.threadInfoStruct),e.threadInfoStruct=0,e.allocatedOwnStack&&e.stackBase&&qe(e.stackBase),e.stackBase=0,e.worker&&(e.worker.pthread=null))},returnWorkerToPool:function(e){ge.runWithoutMainThreadQueuedCalls((function(){delete ge.pthreads[e.pthread.threadInfoStruct],ge.unusedWorkers.push(e),ge.runningWorkers.splice(ge.runningWorkers.indexOf(e),1),ge.freeThreadData(e.pthread),e.pthread=void 0}))},runWithoutMainThreadQueuedCalls:function(e){O[er>>2]=0;try{e()}finally{O[er>>2]=1}},receiveObjectTransfer:function(e){},threadInit:function(){for(var e in ge.tlsInitFunctions)ge.tlsInitFunctions[e]()},loadWasmModuleToWorker:function(e,n){e.onmessage=function(t){var a=t.data,o=a.cmd;if(e.pthread&&(ge.currentProxiedOperationCallerThread=e.pthread.threadInfoStruct),a.targetThread&&a.targetThread!=ze()){var i=ge.pthreads[a.targetThread];return i?i.worker.postMessage(t.data,a.transferList):k('Internal error! Worker sent a message "'+o+'" to target pthread '+a.targetThread+", but that thread no longer exists!"),void(ge.currentProxiedOperationCallerThread=void 0)}if("processQueuedMainThreadWork"===o)je();else if("spawnThread"===o)ye(t.data);else if("cleanupThread"===o)me(a.thread);else if("killThread"===o)!function(e){if(_)throw"Internal Error! killThread() can only ever be called from main application thread!";if(!e)throw"Internal Error! Null pthread_ptr in killThread!";O[e+8>>2]=0;var r=ge.pthreads[e];delete ge.pthreads[e],r.worker.terminate(),ge.freeThreadData(r),ge.runningWorkers.splice(ge.runningWorkers.indexOf(r.worker),1),r.worker.pthread=void 0}(a.thread);else if("cancelThread"===o)!function(e){if(_)throw"Internal Error! cancelThread() can only ever be called from main application thread!";if(!e)throw"Internal Error! Null pthread_ptr in cancelThread!";ge.pthreads[e].worker.postMessage({cmd:"cancel"})}(a.thread);else if("loaded"===o)e.loaded=!0,n&&n(e),e.runPthread&&(e.runPthread(),delete e.runPthread);else if("print"===o)b("Thread "+a.threadId+": "+a.text);else if("printErr"===o)k("Thread "+a.threadId+": "+a.text);else if("alert"===o)alert("Thread "+a.threadId+": "+a.text);else if("exit"===o)e.pthread&&Atomics.load(B,e.pthread.threadInfoStruct+60>>2)&&ge.returnWorkerToPool(e);else if("exitProcess"===o)try{or(a.returnCode)}catch(t){ve(t)}else"cancelDone"===o?ge.returnWorkerToPool(e):"setimmediate"===t.data.target?e.postMessage(t.data):"onAbort"===o?r.onAbort&&r.onAbort(a.arg):k("worker sent an unknown command "+o);ge.currentProxiedOperationCallerThread=void 0},e.onerror=function(e){throw k("pthread sent an error! "+e.filename+":"+e.lineno+": "+e.message),e},v&&(e.on("message",(function(r){e.onmessage({data:r})})),e.on("error",(function(r){e.onerror(r)})),e.on("exit",(function(){}))),e.postMessage({cmd:"load",urlOrBlob:r.mainScriptUrlOrBlob,wasmMemory:E,wasmModule:T})},allocateUnusedWorker:function(){if(r.locateFile){var e=y("free-queue-asm.worker.js");ge.unusedWorkers.push(new Worker(e))}else ge.unusedWorkers.push(new Worker(new URL("free-queue-asm.worker.js",import.meta.url)))},getNewWorker:function(){return 0==ge.unusedWorkers.length&&(ge.allocateUnusedWorker(),ge.loadWasmModuleToWorker(ge.unusedWorkers[0])),ge.unusedWorkers.pop()}};function ye(e){if(_)throw"Internal Error! spawnThread() can only ever be called from main application thread!";var r=ge.getNewWorker();if(!r)return 6;if(void 0!==r.pthread)throw"Internal error!";if(!e.pthread_ptr)throw"Internal error, no pthread ptr!";ge.runningWorkers.push(r);var n=e.stackBase+e.stackSize,t=ge.pthreads[e.pthread_ptr]={worker:r,stackBase:e.stackBase,stackSize:e.stackSize,allocatedOwnStack:e.allocatedOwnStack,threadInfoStruct:e.pthread_ptr},a=t.threadInfoStruct>>2;Atomics.store(B,a+15,e.detached),Atomics.store(B,a+19,e.stackSize),Atomics.store(B,a+18,n),Atomics.store(B,a+25,e.stackSize),Atomics.store(B,a+27,n),Atomics.store(B,a+28,e.detached),r.pthread=t;var o={cmd:"run",start_routine:e.startRoutine,arg:e.arg,threadInfoStruct:e.pthread_ptr,stackBase:e.stackBase,stackSize:e.stackSize};return r.runPthread=function(){o.time=performance.now(),r.postMessage(o,e.transferList)},r.loaded&&(r.runPthread(),delete r.runPthread),0}function we(e){or(e)}function xe(e,r,n){if(e<=0||e>F.length||!0&e)return-28;if(h){if(Atomics.load(O,e>>2)!=r)return-6;var t=performance.now(),a=t+n;for(Atomics.exchange(O,rr>>2,e);;){if((t=performance.now())>a)return Atomics.exchange(O,rr>>2,0),-73;if(0==Atomics.exchange(O,rr>>2,0))break;if(je(),Atomics.load(O,e>>2)!=r)return-6;Atomics.exchange(O,rr>>2,e)}return 0}var o=Atomics.wait(O,e>>2,r,n);if("timed-out"===o)return-73;if("not-equal"===o)return-6;if("ok"===o)return 0;throw"Atomics.wait returned an unexpected value "+o}function be(){v||m||A("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")}function ke(e,r){for(var n=arguments.length-2,t=Ye(),a=n,o=Ke(8*a),i=o>>3,u=0;u<n;u++){var s=arguments[2+u];q[i+u]=s}var c=Qe(e,a,o,r);return Je(t),c}r.establishStackSpace=function(e,r){Ze(e,r),Je(e)},r.invokeEntryPoint=function(e,r){return X.get(e)(r)},_e=v?function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:_?function(){return performance.now()-r.__performance_now_clock_drift}:function(){return performance.now()};var Ae=[],Ee={inEventHandler:0,removeAllEventListeners:function(){for(var e=Ee.eventHandlers.length-1;e>=0;--e)Ee._removeHandler(e);Ee.eventHandlers=[],Ee.deferredCalls=[]},registerRemoveEventListeners:function(){Ee.removeEventListenersRegistered||($.push(Ee.removeAllEventListeners),Ee.removeEventListenersRegistered=!0)},deferredCalls:[],deferCall:function(e,r,n){function t(e,r){if(e.length!=r.length)return!1;for(var n in e)if(e[n]!=r[n])return!1;return!0}for(var a in Ee.deferredCalls){var o=Ee.deferredCalls[a];if(o.targetFunction==e&&t(o.argsList,n))return}Ee.deferredCalls.push({targetFunction:e,precedence:r,argsList:n}),Ee.deferredCalls.sort((function(e,r){return e.precedence<r.precedence}))},removeDeferredCalls:function(e){for(var r=0;r<Ee.deferredCalls.length;++r)Ee.deferredCalls[r].targetFunction==e&&(Ee.deferredCalls.splice(r,1),--r)},canPerformEventHandlerRequests:function(){return Ee.inEventHandler&&Ee.currentEventHandler.allowsDeferredCalls},runDeferredCalls:function(){if(Ee.canPerformEventHandlerRequests())for(var e=0;e<Ee.deferredCalls.length;++e){var r=Ee.deferredCalls[e];Ee.deferredCalls.splice(e,1),--e,r.targetFunction.apply(null,r.argsList)}},eventHandlers:[],removeAllHandlersOnTarget:function(e,r){for(var n=0;n<Ee.eventHandlers.length;++n)Ee.eventHandlers[n].target!=e||r&&r!=Ee.eventHandlers[n].eventTypeString||Ee._removeHandler(n--)},_removeHandler:function(e){var r=Ee.eventHandlers[e];r.target.removeEventListener(r.eventTypeString,r.eventListenerFunc,r.useCapture),Ee.eventHandlers.splice(e,1)},registerOrRemoveHandler:function(e){var r=function(r){++Ee.inEventHandler,Ee.currentEventHandler=e,Ee.runDeferredCalls(),e.handlerFunc(r),Ee.runDeferredCalls(),--Ee.inEventHandler};if(e.callbackfunc)e.eventListenerFunc=r,e.target.addEventListener(e.eventTypeString,r,e.useCapture),Ee.eventHandlers.push(e),Ee.registerRemoveEventListeners();else for(var n=0;n<Ee.eventHandlers.length;++n)Ee.eventHandlers[n].target==e.target&&Ee.eventHandlers[n].eventTypeString==e.eventTypeString&&Ee._removeHandler(n--)},queueEventHandlerOnThread_iiii:function(e,r,n,t,a){var o=Ye(),i=Ke(12);O[i>>2]=n,O[i+4>>2]=t,O[i+8>>2]=a,Ne(0,e,637534208,r,t,i),Je(o)},getTargetThreadForEventCallback:function(e){switch(e){case 1:return 0;case 2:return ge.currentProxiedOperationCallerThread;default:return e}},getNodeNameForTarget:function(e){return e?e==window?"#window":e==screen?"#screen":e&&e.nodeName?e.nodeName:"":""},fullscreenEnabled:function(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}};var Te=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function Ce(e){return function(e){var r;return e=(r=e)>2?j(r):r,Te[e]||("undefined"!=typeof document?document.querySelector(e):void 0)}(e)}function Se(e,r,n){var t=Ce(e);if(!t)return-4;if(t.canvasSharedPtr&&(O[t.canvasSharedPtr>>2]=r,O[t.canvasSharedPtr+4>>2]=n),!t.offscreenCanvas&&t.controlTransferredOffscreen)return t.canvasSharedPtr?(function(e,r,n,t){!function(e,r,n,t){var a,o,i,u=Ye(),s=Ke(12),c=0;r&&(o=U(a=r)+1,N(a,i=Be(o),o),c=i),O[s>>2]=c,O[s+4>>2]=n,O[s+8>>2]=t,Ne(0,e,657457152,0,c,s),Je(u)}(e,r=r?j(r):"",n,t)}(O[t.canvasSharedPtr+8>>2],e,r,n),1):-4;t.offscreenCanvas&&(t=t.offscreenCanvas);var a=!1;if(t.GLctxObject&&t.GLctxObject.GLctx){var o=t.GLctxObject.GLctx.getParameter(2978);a=0===o[0]&&0===o[1]&&o[2]===t.width&&o[3]===t.height}return t.width=r,t.height=n,a&&t.GLctxObject.GLctx.viewport(0,0,r,n),0}function We(e,r,n){return _?ke(1,1,e,r,n):Se(e,r,n)}var Pe,Ie={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:{},offscreenCanvases:{},queries:[],stringCache:{},unpackAlignment:4,recordError:function(e){Ie.lastError||(Ie.lastError=e)},getNewId:function(e){for(var r=Ie.counter++,n=e.length;n<r;n++)e[n]=null;return r},getSource:function(e,r,n,t){for(var a="",o=0;o<r;++o){var i=t?O[t+4*o>>2]:-1;a+=j(O[n+4*o>>2],i<0?void 0:i)}return a},createContext:function(e,r){e.getContextSafariWebGL2Fixed||(e.getContextSafariWebGL2Fixed=e.getContext,e.getContext=function(r,n){var t=e.getContextSafariWebGL2Fixed(r,n);return"webgl"==r==t instanceof WebGLRenderingContext?t:null});var n=e.getContext("webgl",r);return n?Ie.registerContext(n,r):0},registerContext:function(e,r){var n=Be(8);O[n+4>>2]=ze();var t={handle:n,attributes:r,version:r.majorVersion,GLctx:e};return e.canvas&&(e.canvas.GLctxObject=t),Ie.contexts[n]=t,(void 0===r.enableExtensionsByDefault||r.enableExtensionsByDefault)&&Ie.initExtensions(t),n},makeContextCurrent:function(e){return Ie.currentContext=Ie.contexts[e],r.ctx=Pe=Ie.currentContext&&Ie.currentContext.GLctx,!(e&&!Pe)},getContext:function(e){return Ie.contexts[e]},deleteContext:function(e){Ie.currentContext===Ie.contexts[e]&&(Ie.currentContext=null),"object"==typeof Ee&&Ee.removeAllHandlersOnTarget(Ie.contexts[e].GLctx.canvas),Ie.contexts[e]&&Ie.contexts[e].GLctx.canvas&&(Ie.contexts[e].GLctx.canvas.GLctxObject=void 0),qe(Ie.contexts[e].handle),Ie.contexts[e]=null},initExtensions:function(e){if(e||(e=Ie.currentContext),!e.initExtensionsDone){e.initExtensionsDone=!0;var r,n=e.GLctx;!function(e){var r=e.getExtension("ANGLE_instanced_arrays");r&&(e.vertexAttribDivisor=function(e,n){r.vertexAttribDivisorANGLE(e,n)},e.drawArraysInstanced=function(e,n,t,a){r.drawArraysInstancedANGLE(e,n,t,a)},e.drawElementsInstanced=function(e,n,t,a,o){r.drawElementsInstancedANGLE(e,n,t,a,o)})}(n),function(e){var r=e.getExtension("OES_vertex_array_object");r&&(e.createVertexArray=function(){return r.createVertexArrayOES()},e.deleteVertexArray=function(e){r.deleteVertexArrayOES(e)},e.bindVertexArray=function(e){r.bindVertexArrayOES(e)},e.isVertexArray=function(e){return r.isVertexArrayOES(e)})}(n),function(e){var r=e.getExtension("WEBGL_draw_buffers");r&&(e.drawBuffers=function(e,n){r.drawBuffersWEBGL(e,n)})}(n),n.disjointTimerQueryExt=n.getExtension("EXT_disjoint_timer_query"),(r=n).multiDrawWebgl=r.getExtension("WEBGL_multi_draw"),(n.getSupportedExtensions()||[]).forEach((function(e){e.includes("lose_context")||e.includes("debug")||n.getExtension(e)}))}}},Le=["default","low-power","high-performance"],Re={mappings:{},buffers:[null,[],[]],printChar:function(e,r){var n=Re.buffers[e];0===r||10===r?((1===e?b:k)(D(n,0)),n.length=0):n.push(r)},varargs:void 0,get:function(){return Re.varargs+=4,O[Re.varargs-4>>2]},getStr:function(e){return j(e)},get64:function(e,r){return e}};function Me(e,r,n,t){if(_)return ke(2,1,e,r,n,t);for(var a=0,o=0;o<n;o++){for(var i=O[r+8*o>>2],u=O[r+(8*o+4)>>2],s=0;s<u;s++)Re.printChar(e,H[i+s]);a+=u}return O[t>>2]=a,0}_||ge.initMainThreadBlock();var Fe,He=[null,We,Me],Oe={b:function(e,r,n,t){ue("Assertion failed: "+j(e)+", at: "+[r?j(r):"unknown filename",n,t?j(t):"unknown function"])},w:function(e,r){ge.threadExitHandlers.push((function(){X.get(e)(r)}))},i:function(e,r,n,t){if("undefined"==typeof SharedArrayBuffer)return k("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var a=[];if(_&&0===a.length)return De(687865856,e,r,n,t);var o=0,i=0,u=0;r&&-1!=r?(o=O[r>>2],o+=81920,i=O[r+8>>2],u=0!==O[r+12>>2]):o=2097152;var s=0==i;s?i=$e(16,o):P((i-=o)>0);var c={stackBase:i,stackSize:o,allocatedOwnStack:s,detached:u,startRoutine:n,pthread_ptr:e,arg:t,transferList:a};return _?(c.cmd="spawnThread",postMessage(c,a),0):ye(c)},q:function(){postMessage({cmd:"exit"})},m:function(e){for(;ge.threadExitHandlers.length>0;)ge.threadExitHandlers.pop()()},n:function(e,r){return function(e,r,n){if(!e)return k("pthread_join attempted on a null thread pointer!"),71;if(_&&ze()==e)return k("PThread "+e+" is attempting to join to itself!"),16;if(!_&&Ge()==e)return k("Main thread "+e+" is attempting to join to itself!"),16;if(O[e+8>>2]!==e)return k("pthread_join attempted on thread "+e+", which does not point to a valid thread, or does not exist anymore!"),71;if(Atomics.load(B,e+60>>2))return k("Attempted to join thread "+e+", which was already detached!"),28;for(be();;){var t=Atomics.load(B,e+0>>2);if(1==t){if(r){var a=Atomics.load(B,e+88>>2);O[r>>2]=a}return Atomics.store(B,e+60>>2,1),_?postMessage({cmd:"cleanupThread",thread:e}):me(e),0}0,Xe(),_||je(),xe(e+0,t,_?100:1)}}(e,r)},j:function(e,r){if(e==r)postMessage({cmd:"processQueuedMainThreadWork"});else if(_)postMessage({targetThread:e,cmd:"processThreadQueue"});else{var n=ge.pthreads[e],t=n&&n.worker;if(!t)return;t.postMessage({cmd:"processThreadQueue"})}return 1},f:function(e,r){},e:xe,d:he,c:_e,k:function(e,r,n){H.copyWithin(e,r,r+n)},t:function(e,r,n){Ae.length=r;for(var t=n>>3,a=0;a<r;a++)Ae[a]=q[t+a];return(e<0?de[-e-1]:He[e]).apply(null,Ae)},l:function(e){H.length,ue("OOM")},u:function(e,r,n){return Ce(e)?Se(e,r,n):We(e,r,n)},g:function(e){},s:function(e,r,n){return re+=1,setTimeout((function(){re-=1,function(e,r){if(!W)if(r)e();else try{e(),_&&function(){if(!ne())try{_?Ue(S):we(S)}catch(e){ve(e)}}()}catch(e){ve(e)}}((function(){X.get(e)(n)}))}),r)},o:function(){throw"unwind"},v:function(e,r){return n=e,a=O[6+(t=r>>2)],o={alpha:!!O[t+0],depth:!!O[t+1],stencil:!!O[t+2],antialias:!!O[t+3],premultipliedAlpha:!!O[t+4],preserveDrawingBuffer:!!O[t+5],powerPreference:Le[a],failIfMajorPerformanceCaveat:!!O[t+7],majorVersion:O[t+8],minorVersion:O[t+9],enableExtensionsByDefault:O[t+10],explicitSwapControl:O[t+11],proxyContextToMainThread:O[t+12],renderViaOffscreenBackBuffer:O[t+13]},(i=Ce(n))?o.explicitSwapControl?0:Ie.createContext(i,o):0;var n,t,a,o,i},p:we,h:Me,r:function(e){ge.initRuntime(e)},a:E||r.wasmMemory},Be=(function(){var e={a:Oe};function n(e,n){var t,a=e.exports;r.asm=a,X=r.asm.L,t=r.asm.x,K.unshift(t),ge.tlsInitFunctions.push(r.asm.M),T=n,_||function(e){if(ae--,r.monitorRunDependencies&&r.monitorRunDependencies(ae),0==ae&&(null!==oe&&(clearInterval(oe),oe=null),ie)){var n=ie;ie=null,n()}}()}function a(e){n(e.instance,e.module)}function o(r){return function(){if(!x&&(h||m)){if("function"==typeof fetch&&!le(se))return fetch(se,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+se+"'";return e.arrayBuffer()})).catch((function(){return fe(se)}));if(u)return new Promise((function(e,r){u(se,(function(r){e(new Uint8Array(r))}),r)}))}return Promise.resolve().then((function(){return fe(se)}))}().then((function(r){return WebAssembly.instantiate(r,e)})).then((function(e){return e})).then(r,(function(e){k("failed to asynchronously prepare wasm: "+e),ue(e)}))}if(_||(ae++,r.monitorRunDependencies&&r.monitorRunDependencies(ae)),r.instantiateWasm)try{return r.instantiateWasm(e,n)}catch(e){return k("Module.instantiateWasm callback failed with error: "+e),!1}(x||"function"!=typeof WebAssembly.instantiateStreaming||ce(se)||le(se)||"function"!=typeof fetch?o(a):fetch(se,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,e).then(a,(function(e){return k("wasm streaming compile failed: "+e),k("falling back to ArrayBuffer instantiation"),o(a)}))}))).catch(t)}(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.x).apply(null,arguments)},r._CreateFreeQueue=function(){return(r._CreateFreeQueue=r.asm.y).apply(null,arguments)},r._malloc=function(){return(Be=r._malloc=r.asm.z).apply(null,arguments)}),qe=(r._DestroyFreeQueue=function(){return(r._DestroyFreeQueue=r.asm.A).apply(null,arguments)},r._free=function(){return(qe=r._free=r.asm.B).apply(null,arguments)}),Ge=(r._FreeQueuePush=function(){return(r._FreeQueuePush=r.asm.C).apply(null,arguments)},r._FreeQueuePull=function(){return(r._FreeQueuePull=r.asm.D).apply(null,arguments)},r._GetFreeQueuePointers=function(){return(r._GetFreeQueuePointers=r.asm.E).apply(null,arguments)},r._DestroyFreeQueueThreads=function(){return(r._DestroyFreeQueueThreads=r.asm.F).apply(null,arguments)},r._CreateFreeQueueThreads=function(){return(r._CreateFreeQueueThreads=r.asm.G).apply(null,arguments)},r._GetFreeQueueThreads=function(){return(r._GetFreeQueueThreads=r.asm.H).apply(null,arguments)},r._PrintQueueInfo=function(){return(r._PrintQueueInfo=r.asm.I).apply(null,arguments)},r._PrintQueueAddresses=function(){return(r._PrintQueueAddresses=r.asm.J).apply(null,arguments)},r._main=function(){return(r._main=r.asm.K).apply(null,arguments)},r._emscripten_tls_init=function(){return(r._emscripten_tls_init=r.asm.M).apply(null,arguments)},r._emscripten_current_thread_process_queued_calls=function(){return(r._emscripten_current_thread_process_queued_calls=r.asm.N).apply(null,arguments)},r._emscripten_main_browser_thread_id=function(){return(Ge=r._emscripten_main_browser_thread_id=r.asm.O).apply(null,arguments)}),De=r._emscripten_sync_run_in_main_thread_4=function(){return(De=r._emscripten_sync_run_in_main_thread_4=r.asm.P).apply(null,arguments)},je=r._emscripten_main_thread_process_queued_calls=function(){return(je=r._emscripten_main_thread_process_queued_calls=r.asm.Q).apply(null,arguments)},Qe=r._emscripten_run_in_main_runtime_thread_js=function(){return(Qe=r._emscripten_run_in_main_runtime_thread_js=r.asm.R).apply(null,arguments)},Ne=r.__emscripten_call_on_thread=function(){return(Ne=r.__emscripten_call_on_thread=r.asm.S).apply(null,arguments)},Ue=r.__emscripten_thread_exit=function(){return(Ue=r.__emscripten_thread_exit=r.asm.T).apply(null,arguments)},ze=r._pthread_self=function(){return(ze=r._pthread_self=r.asm.U).apply(null,arguments)},Ve=r.__emscripten_thread_init=function(){return(Ve=r.__emscripten_thread_init=r.asm.V).apply(null,arguments)},Xe=r._pthread_testcancel=function(){return(Xe=r._pthread_testcancel=r.asm.W).apply(null,arguments)},Ye=r.stackSave=function(){return(Ye=r.stackSave=r.asm.X).apply(null,arguments)},Je=r.stackRestore=function(){return(Je=r.stackRestore=r.asm.Y).apply(null,arguments)},Ke=r.stackAlloc=function(){return(Ke=r.stackAlloc=r.asm.Z).apply(null,arguments)},Ze=r._emscripten_stack_set_limits=function(){return(Ze=r._emscripten_stack_set_limits=r.asm._).apply(null,arguments)},$e=r._memalign=function(){return($e=r._memalign=r.asm.$).apply(null,arguments)},er=r.__emscripten_allow_main_runtime_queued_calls=2720,rr=r.__emscripten_main_thread_futex=3228;function nr(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function tr(e){var n=r._main,t=(e=e||[]).length+1,a=Ke(4*(t+1));O[a>>2]=z(d);for(var o=1;o<t;o++)O[(a>>2)+o]=z(e[o-1]);O[(a>>2)+t]=0;try{var i=n(t,a);return or(i,!0),i}catch(e){return ve(e)}}function ar(e){if(e=e||f,!(ae>0)){if(_)return n(r),te(),void postMessage({cmd:"loaded"});!function(){if(!_){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)e=r.preRun.shift(),J.unshift(e);var e;pe(J)}}(),ae>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),t()}),1)):t())}function t(){Fe||(Fe=!0,r.calledRun=!0,W||(te(),_||pe(Z),n(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),ir&&tr(e),function(){if(!_){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)e=r.postRun.shift(),ee.unshift(e);var e;pe(ee)}}()))}}function or(e,n){if(S=e,!n&&_)throw postMessage({cmd:"exitProcess",returnCode:e}),new nr(e);var t;ne()||ge.terminateAllThreads(),S=t=e,ne()||(ge.terminateAllThreads(),r.onExit&&r.onExit(t),W=!0),p(t,new nr(t))}if(r.ccall=L,r.cwrap=function(e,r,n,t){var a=(n=n||[]).every((function(e){return"number"===e}));return"string"!==r&&a&&!t?I(e):function(){return L(e,r,n,arguments)}},r.callMain=tr,r.keepRuntimeAlive=ne,r.PThread=ge,r.PThread=ge,r.wasmMemory=E,r.ExitStatus=nr,ie=function e(){Fe||ar(),Fe||(ie=e)},r.run=ar,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();var ir=!1;return r.noInitialRun&&(ir=!1),_&&(C=!1,ge.initWorker()),ar(),r.ready}}();export default Module;