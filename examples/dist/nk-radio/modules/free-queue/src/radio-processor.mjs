import t from"./free-queue.js";import{getConstant as o}from"./constants.js";const{RENDER_QUANTUM:e,FRAME_SIZE:s}=o("radio"),u=s/e;class i extends AudioWorkletProcessor{constructor(o){super(),this.inputQueue=o.processorOptions.inputQueue,this.outputQueue=o.processorOptions.outputQueue,this.atomicState=o.processorOptions.atomicState,Object.setPrototypeOf(this.inputQueue,t.prototype),Object.setPrototypeOf(this.outputQueue,t.prototype),this.primingCounter=0}process(t,o,i){const r=t[0],p=o[0];if(this.primingCounter>u){if(!this.outputQueue.pull(p,e))return console.log("[basic-processor.js] Not enough data in outputQueue"),!1}else this.primingCounter++;return this.inputQueue.push(r,e)?(this.inputQueue.hasEnoughFramesFor(s)&&(Atomics.store(this.atomicState,0,1),Atomics.notify(this.atomicState,0)),!0):(console.log("[basic-processor.js] Not enough space in inputQueue"),!1)}}registerProcessor("radio-processor",i);