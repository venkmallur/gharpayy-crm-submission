var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { p as performance } from "./unenv.mjs";
import process from "node:process";
var performanceNow$1 = { exports: {} };
var performanceNow = performanceNow$1.exports;
var hasRequiredPerformanceNow;
function requirePerformanceNow() {
  if (hasRequiredPerformanceNow) return performanceNow$1.exports;
  hasRequiredPerformanceNow = 1;
  (function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) {
      performanceNow$1.exports = function() {
        return performance.now();
      };
    } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
      performanceNow$1.exports = function() {
        return (getNanoSeconds() - nodeLoadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = /* @__PURE__ */ __name(function() {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      }, "getNanoSeconds");
      moduleLoadTime = getNanoSeconds();
      upTime = process.uptime() * 1e9;
      nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
      performanceNow$1.exports = function() {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      performanceNow$1.exports = function() {
        return (/* @__PURE__ */ new Date()).getTime() - loadTime;
      };
      loadTime = (/* @__PURE__ */ new Date()).getTime();
    }
  }).call(performanceNow);
  return performanceNow$1.exports;
}
__name(requirePerformanceNow, "requirePerformanceNow");
export {
  requirePerformanceNow as r
};
