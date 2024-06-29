import{FreeQueue}from"./free-queue.js";import{getConstant}from"./constants.js";import GPUProcessor from"./gpu-processor.js";const{FRAME_SIZE}=getConstant(self.name.toLowerCase());let inputQueue=null,outputQueue=null,atomicState=null,gpuProcessor=null,inputBuffer=null,outputBuffer=null,irArray=null,sampleRate=null,lastCallback=0,averageTimeSpent=0,timeElapsed=0,runningAverageFactor=1;const initialize=e=>{({inputQueue,outputQueue,atomicState,irArray,sampleRate}=e),Object.setPrototypeOf(inputQueue,FreeQueue.prototype),Object.setPrototypeOf(outputQueue,FreeQueue.prototype),inputBuffer=[new Float64Array(FRAME_SIZE),new Float64Array(FRAME_SIZE)],console.log("----------- sampleRate -------------------",sampleRate),runningAverageFactor=sampleRate/FRAME_SIZE,console.log("[worker.js] initialize",runningAverageFactor)},process=()=>{inputQueue.pull(inputBuffer,FRAME_SIZE)?(outputBuffer=inputBuffer,outputQueue.push(outputBuffer,FRAME_SIZE)||console.error("[worker.js] Pushing to outputQueue failed.")):console.error("[worker.js] Pulling from inputQueue failed.")};self.onmessage=e=>{if("init"===e.data.type)for(console.log("(((( ===== WORKER ===== ))))"),initialize(e.data.data),self.postMessage({status:!0});"ok"===Atomics.wait(atomicState,0,0);){const e=performance.now(),t=e-lastCallback;lastCallback=e,timeElapsed+=t,process();const o=performance.now()-e;averageTimeSpent-=averageTimeSpent/runningAverageFactor,averageTimeSpent+=o/runningAverageFactor,timeElapsed>=1e3&&(console.log(`[worker.js] process() = ${o.toFixed(3)}ms : avg = ${averageTimeSpent.toFixed(3)}ms : callback interval = ${t.toFixed(3)}ms`),timeElapsed-=1e3),Atomics.store(atomicState,0,0)}else console.log("!!!!!!!!!!!!!!!! Неизвестно что !!!!!!!!!!!!!!")};