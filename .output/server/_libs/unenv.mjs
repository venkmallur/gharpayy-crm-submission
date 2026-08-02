var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import process from "node:process";
import { Buffer as Buffer2 } from "node:buffer";
import { setImmediate, clearImmediate } from "node:timers";


if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const originalProcess = globalThis["process"];
globalThis.process = originalProcess ? new Proxy(originalProcess, { get(target, prop, receiver) {
  if (Reflect.has(target, prop)) {
    return Reflect.get(target, prop, receiver);
  }
  return Reflect.get(process, prop, receiver);
} }) : process;
if (!globalThis.Buffer) {
  globalThis.Buffer = Buffer2;
}
if (!globalThis.setImmediate) {
  globalThis.setImmediate = setImmediate;
}
if (!globalThis.clearImmediate) {
  globalThis.clearImmediate = clearImmediate;
}
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
const _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
const _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
const _supportedEntryTypes = [
  "event",
  "mark",
  "measure",
  "resource"
];
const __PerformanceEntry = class __PerformanceEntry {
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
__name(__PerformanceEntry, "_PerformanceEntry");
let _PerformanceEntry = __PerformanceEntry;
const __PerformanceMark = class __PerformanceMark extends _PerformanceEntry {
  entryType = "mark";
};
__name(__PerformanceMark, "_PerformanceMark");
let _PerformanceMark = __PerformanceMark;
const __PerformanceMeasure = class __PerformanceMeasure extends _PerformanceEntry {
  entryType = "measure";
};
__name(__PerformanceMeasure, "_PerformanceMeasure");
let _PerformanceMeasure = __PerformanceMeasure;
const __PerformanceResourceTiming = class __PerformanceResourceTiming extends _PerformanceEntry {
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
__name(__PerformanceResourceTiming, "_PerformanceResourceTiming");
let _PerformanceResourceTiming = __PerformanceResourceTiming;
const __PerformanceObserver = class __PerformanceObserver {
  __unenv__ = true;
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw /* @__PURE__ */ createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw /* @__PURE__ */ createNotImplementedError("PerformanceObserver.observe");
  }
};
__name(__PerformanceObserver, "_PerformanceObserver");
__publicField(__PerformanceObserver, "supportedEntryTypes", _supportedEntryTypes);
let _PerformanceObserver = __PerformanceObserver;
const __PerformanceObserverEntryList = class __PerformanceObserverEntryList {
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
__name(__PerformanceObserverEntryList, "_PerformanceObserverEntryList");
let _PerformanceObserverEntryList = __PerformanceObserverEntryList;
const __Performance = class __Performance {
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new _PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new _PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  toJSON() {
    return this;
  }
  addEventListener(type, listener, options) {
    throw /* @__PURE__ */ createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw /* @__PURE__ */ createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw /* @__PURE__ */ createNotImplementedError("Performance.dispatchEvent");
  }
};
__name(__Performance, "_Performance");
let _Performance = __Performance;
const PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
const PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
const PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
const PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;
const PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
const Performance = globalThis.Performance || _Performance;
const PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;
const performance$1 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new _Performance();
globalThis.performance ||= performance$1;
globalThis.Performance ||= Performance;
globalThis.PerformanceEntry ||= PerformanceEntry;
globalThis.PerformanceMark ||= PerformanceMark;
globalThis.PerformanceMeasure ||= PerformanceMeasure;
globalThis.PerformanceObserver ||= PerformanceObserver;
globalThis.PerformanceObserverEntryList ||= PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming ||= PerformanceResourceTiming;
const performance = globalThis.performance;
const global = globalThis;
const _BroadcastChannel = class _BroadcastChannel {
  name = "";
  onmessage = /* @__PURE__ */ __name((message) => {
  }, "onmessage");
  onmessageerror = /* @__PURE__ */ __name((message) => {
  }, "onmessageerror");
  close() {
  }
  postMessage(message) {
  }
  ref() {
    return this;
  }
  unref() {
    return this;
  }
};
__name(_BroadcastChannel, "BroadcastChannel");
let BroadcastChannel = _BroadcastChannel;
export {
  BroadcastChannel as B,
  global as g,
  performance as p
};
