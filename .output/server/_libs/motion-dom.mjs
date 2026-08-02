var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { a as memo, p as progress } from "./motion-utils.mjs";
const supportsScrollTimeline = memo(() => window.ScrollTimeline !== void 0);
const _BaseGroupPlaybackControls = class _BaseGroupPlaybackControls {
  constructor(animations) {
    this.stop = () => this.runAll("stop");
    this.animations = animations.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((animation) => "finished" in animation ? animation.finished : animation));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline, fallback) {
    const subscriptions = this.animations.map((animation) => {
      if (supportsScrollTimeline() && animation.attachTimeline) {
        return animation.attachTimeline(timeline);
      } else if (typeof fallback === "function") {
        return fallback(animation);
      }
    });
    return () => {
      subscriptions.forEach((cancel, i) => {
        cancel && cancel();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time) {
    this.setAll("time", time);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let max = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max = Math.max(max, this.animations[i].duration);
    }
    return max;
  }
  runAll(methodName) {
    this.animations.forEach((controls) => controls[methodName]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};
__name(_BaseGroupPlaybackControls, "BaseGroupPlaybackControls");
let BaseGroupPlaybackControls = _BaseGroupPlaybackControls;
const _GroupPlaybackControls = class _GroupPlaybackControls extends BaseGroupPlaybackControls {
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
};
__name(_GroupPlaybackControls, "GroupPlaybackControls");
let GroupPlaybackControls = _GroupPlaybackControls;
function getValueTransition(transition, key) {
  return transition ? transition[key] || transition["default"] || transition : void 0;
}
__name(getValueTransition, "getValueTransition");
const maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}
__name(calcGeneratorDuration, "calcGeneratorDuration");
function isGenerator(type) {
  return typeof type === "function";
}
__name(isGenerator, "isGenerator");
function attachTimeline(animation, timeline) {
  animation.timeline = timeline;
  animation.onfinish = null;
}
__name(attachTimeline, "attachTimeline");
const isBezierDefinition = /* @__PURE__ */ __name((easing) => Array.isArray(easing) && typeof easing[0] === "number", "isBezierDefinition");
const supportsFlags = {
  linearEasing: void 0
};
function memoSupports(callback, supportsFlag) {
  const memoized = memo(callback);
  return () => {
    var _a;
    return (_a = supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
  };
}
__name(memoSupports, "memoSupports");
const supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");
const generateLinearEasing = /* @__PURE__ */ __name((easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += easing(progress(0, numPoints - 1, i)) + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
}, "generateLinearEasing");
function isWaapiSupportedEasing(easing) {
  return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
__name(isWaapiSupportedEasing, "isWaapiSupportedEasing");
const cubicBezierAsString = /* @__PURE__ */ __name(([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`, "cubicBezierAsString");
const supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function" && supportsLinearEasing()) {
    return generateLinearEasing(easing, duration);
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}
__name(mapEasingToNativeEasing, "mapEasingToNativeEasing");
const isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}
__name(isDragActive, "isDragActive");
function resolveElements(elementOrSelector, scope, selectorCache) {
  var _a;
  if (elementOrSelector instanceof Element) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    let root = document;
    const elements = (_a = void 0) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector);
}
__name(resolveElements, "resolveElements");
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController();
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = /* @__PURE__ */ __name(() => gestureAbortController.abort(), "cancel");
  return [elements, eventOptions, cancel];
}
__name(setupGesture, "setupGesture");
function filterEvents$1(callback) {
  return (event) => {
    if (event.pointerType === "touch" || isDragActive())
      return;
    callback(event);
  };
}
__name(filterEvents$1, "filterEvents$1");
function hover(elementOrSelector, onHoverStart, options = {}) {
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  const onPointerEnter = filterEvents$1((enterEvent) => {
    const { target } = enterEvent;
    const onHoverEnd = onHoverStart(enterEvent);
    if (typeof onHoverEnd !== "function" || !target)
      return;
    const onPointerLeave = filterEvents$1((leaveEvent) => {
      onHoverEnd(leaveEvent);
      target.removeEventListener("pointerleave", onPointerLeave);
    });
    target.addEventListener("pointerleave", onPointerLeave, eventOptions);
  });
  elements.forEach((element) => {
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
  });
  return cancel;
}
__name(hover, "hover");
const isNodeOrChild = /* @__PURE__ */ __name((parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
}, "isNodeOrChild");
const isPrimaryPointer = /* @__PURE__ */ __name((event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
}, "isPrimaryPointer");
const focusableElements = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function isElementKeyboardAccessible(element) {
  return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}
__name(isElementKeyboardAccessible, "isElementKeyboardAccessible");
const isPressing = /* @__PURE__ */ new WeakSet();
function filterEvents(callback) {
  return (event) => {
    if (event.key !== "Enter")
      return;
    callback(event);
  };
}
__name(filterEvents, "filterEvents");
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
__name(firePointerEvent, "firePointerEvent");
const enableKeyboardPress = /* @__PURE__ */ __name((focusEvent, eventOptions) => {
  const element = focusEvent.currentTarget;
  if (!element)
    return;
  const handleKeydown = filterEvents(() => {
    if (isPressing.has(element))
      return;
    firePointerEvent(element, "down");
    const handleKeyup = filterEvents(() => {
      firePointerEvent(element, "up");
    });
    const handleBlur = /* @__PURE__ */ __name(() => firePointerEvent(element, "cancel"), "handleBlur");
    element.addEventListener("keyup", handleKeyup, eventOptions);
    element.addEventListener("blur", handleBlur, eventOptions);
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
}, "enableKeyboardPress");
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
__name(isValidPressEvent, "isValidPressEvent");
function press(elementOrSelector, onPressStart, options = {}) {
  const [elements, eventOptions, cancelEvents] = setupGesture(elementOrSelector, options);
  const startPress = /* @__PURE__ */ __name((startEvent) => {
    const element = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent) || isPressing.has(element))
      return;
    isPressing.add(element);
    const onPressEnd = onPressStart(startEvent);
    const onPointerEnd = /* @__PURE__ */ __name((endEvent, success) => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      if (!isValidPressEvent(endEvent) || !isPressing.has(element)) {
        return;
      }
      isPressing.delete(element);
      if (typeof onPressEnd === "function") {
        onPressEnd(endEvent, { success });
      }
    }, "onPointerEnd");
    const onPointerUp = /* @__PURE__ */ __name((upEvent) => {
      onPointerEnd(upEvent, options.useGlobalTarget || isNodeOrChild(element, upEvent.target));
    }, "onPointerUp");
    const onPointerCancel = /* @__PURE__ */ __name((cancelEvent) => {
      onPointerEnd(cancelEvent, false);
    }, "onPointerCancel");
    window.addEventListener("pointerup", onPointerUp, eventOptions);
    window.addEventListener("pointercancel", onPointerCancel, eventOptions);
  }, "startPress");
  elements.forEach((element) => {
    if (!isElementKeyboardAccessible(element) && element.getAttribute("tabindex") === null) {
      element.tabIndex = 0;
    }
    const target = options.useGlobalTarget ? window : element;
    target.addEventListener("pointerdown", startPress, eventOptions);
    element.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions), eventOptions);
  });
  return cancelEvents;
}
__name(press, "press");
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}
__name(setDragLock, "setDragLock");
export {
  GroupPlaybackControls as G,
  isBezierDefinition as a,
  mapEasingToNativeEasing as b,
  calcGeneratorDuration as c,
  attachTimeline as d,
  isWaapiSupportedEasing as e,
  getValueTransition as f,
  generateLinearEasing as g,
  isPrimaryPointer as h,
  isGenerator as i,
  setDragLock as j,
  hover as k,
  maxGeneratorDuration as m,
  press as p,
  supportsLinearEasing as s
};
