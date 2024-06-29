"use strict";var Module={};if("object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node){var nodeWorkerThreads=require("worker_threads"),parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",(function(e){onmessage({data:e})}));var nodeFS=require("fs");Object.assign(global,{self:global,require,Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(e){(0,eval)(nodeFS.readFileSync(e,"utf8"))},postMessage:function(e){parentPort.postMessage(e)},performance:global.performance||{now:function(){return Date.now()}}})}function threadPrintErr(){var e=Array.prototype.slice.call(arguments).join(" ");console.error(e)}function threadAlert(){var e=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:e,threadId:Module._pthread_self()})}var err=threadPrintErr;self.alert=threadAlert,Module.instantiateWasm=function(e,r){var t=new WebAssembly.Instance(Module.wasmModule,e);return r(t),Module.wasmModule=null,t.exports},self.onmessage=function(e){try{if("load"===e.data.cmd)Module.wasmModule=e.data.wasmModule,Module.wasmMemory=e.data.wasmMemory,Module.buffer=Module.wasmMemory.buffer,Module.ENVIRONMENT_IS_PTHREAD=!0,(e.data.urlOrBlob?import(e.data.urlOrBlob):import("./free-queue-asm.js")).then((function(e){return e.default(Module)})).then((function(e){Module=e}));else if("run"===e.data.cmd){Module.__performance_now_clock_drift=performance.now()-e.data.time,Module.__emscripten_thread_init(e.data.threadInfoStruct,0,0);var r=e.data.stackBase,t=e.data.stackBase+e.data.stackSize;Module.establishStackSpace(t,r),Module.PThread.receiveObjectTransfer(e.data),Module.PThread.threadInit();try{var a=Module.invokeEntryPoint(e.data.start_routine,e.data.arg);Module.keepRuntimeAlive()?Module.PThread.setExitStatus(a):Module.__emscripten_thread_exit(a)}catch(e){if("unwind"!=e){if(!(e instanceof Module.ExitStatus))throw Module.__emscripten_thread_exit(-2),e;Module.keepRuntimeAlive()||Module.__emscripten_thread_exit(e.status)}}}else"cancel"===e.data.cmd?(Module._pthread_self()&&Module.__emscripten_thread_exit(-1),postMessage({cmd:"cancelDone"})):"setimmediate"===e.data.target||("processThreadQueue"===e.data.cmd?Module._pthread_self()&&Module._emscripten_current_thread_process_queued_calls():(err("worker.js received unknown command "+e.data.cmd),err(e.data)))}catch(e){throw err("worker.js onmessage() captured an uncaught exception: "+e),e&&e.stack&&err(e.stack),e}};