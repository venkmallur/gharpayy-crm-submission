var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = /* @__PURE__ */ __name((v) => ({
  x: v,
  y: v
}), "createCoords");
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
__name(clamp, "clamp");
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
__name(evaluate, "evaluate");
function getSide(placement) {
  return placement.split("-")[0];
}
__name(getSide, "getSide");
function getAlignment(placement) {
  return placement.split("-")[1];
}
__name(getAlignment, "getAlignment");
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
__name(getOppositeAxis, "getOppositeAxis");
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
__name(getAxisLength, "getAxisLength");
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
__name(getSideAxis, "getSideAxis");
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
__name(getAlignmentAxis, "getAlignmentAxis");
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
__name(getAlignmentSides, "getAlignmentSides");
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
__name(getExpandedPlacements, "getExpandedPlacements");
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
__name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
__name(getSideList, "getSideList");
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
__name(getOppositeAxisPlacements, "getOppositeAxisPlacements");
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
__name(getOppositePlacement, "getOppositePlacement");
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
__name(expandPaddingObject, "expandPaddingObject");
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
__name(getPaddingObject, "getPaddingObject");
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
__name(rectToClientRect, "rectToClientRect");
function hasWindow() {
  return typeof window !== "undefined";
}
__name(hasWindow, "hasWindow");
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
__name(getNodeName, "getNodeName");
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
__name(getWindow, "getWindow");
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
__name(getDocumentElement, "getDocumentElement");
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
__name(isNode, "isNode");
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
__name(isElement, "isElement");
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
__name(isHTMLElement, "isHTMLElement");
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
__name(isShadowRoot, "isShadowRoot");
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
__name(isOverflowElement, "isOverflowElement");
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
__name(isTableElement, "isTableElement");
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
__name(isTopLayer, "isTopLayer");
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = /* @__PURE__ */ __name((value) => !!value && value !== "none", "isNotNone");
let isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
__name(isContainingBlock, "isContainingBlock");
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
__name(getContainingBlock, "getContainingBlock");
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
__name(isWebKit, "isWebKit");
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
__name(isLastTraversableNode, "isLastTraversableNode");
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
__name(getComputedStyle, "getComputedStyle");
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
__name(getNodeScroll, "getNodeScroll");
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
__name(getParentNode, "getParentNode");
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
__name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
__name(getOverflowAncestors, "getOverflowAncestors");
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
__name(getFrameElement, "getFrameElement");
export {
  getParentNode as A,
  isLastTraversableNode as B,
  isTableElement as C,
  isContainingBlock as D,
  getContainingBlock as E,
  getNodeName as F,
  isOverflowElement as G,
  getNodeScroll as H,
  getFrameElement as I,
  floor as J,
  isWebKit as K,
  getAlignmentAxis as a,
  getSide as b,
  getAlignment as c,
  getPaddingObject as d,
  evaluate as e,
  getAxisLength as f,
  getSideAxis as g,
  clamp as h,
  getOppositePlacement as i,
  getExpandedPlacements as j,
  getOppositeAxisPlacements as k,
  getAlignmentSides as l,
  min as m,
  max as n,
  getOppositeAxis as o,
  isElement as p,
  getDocumentElement as q,
  rectToClientRect as r,
  sides as s,
  getOverflowAncestors as t,
  getComputedStyle as u,
  isHTMLElement as v,
  createCoords as w,
  round as x,
  getWindow as y,
  isTopLayer as z
};
