var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports } from "./react.mjs";
import { __assign, __rest } from "tslib";
function ItoI(a) {
  return a;
}
__name(ItoI, "ItoI");
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: /* @__PURE__ */ __name(function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    }, "read"),
    useMedium: /* @__PURE__ */ __name(function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    }, "useMedium"),
    assignSyncMedium: /* @__PURE__ */ __name(function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: /* @__PURE__ */ __name(function(x) {
          return cb(x);
        }, "push"),
        filter: /* @__PURE__ */ __name(function() {
          return buffer;
        }, "filter")
      };
    }, "assignSyncMedium"),
    assignMedium: /* @__PURE__ */ __name(function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = /* @__PURE__ */ __name(function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      }, "executeQueue");
      var cycle = /* @__PURE__ */ __name(function() {
        return Promise.resolve().then(executeQueue);
      }, "cycle");
      cycle();
      buffer = {
        push: /* @__PURE__ */ __name(function(x) {
          pendingQueue.push(x);
          cycle();
        }, "push"),
        filter: /* @__PURE__ */ __name(function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }, "filter")
      };
    }, "assignMedium")
  };
  return medium;
}
__name(innerCreateMedium, "innerCreateMedium");
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}
__name(createSidecarMedium, "createSidecarMedium");
var SideCar = /* @__PURE__ */ __name(function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return reactExports.createElement(Target, __assign({}, rest));
}, "SideCar");
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}
__name(exportSidecar, "exportSidecar");
export {
  createSidecarMedium as c,
  exportSidecar as e
};
