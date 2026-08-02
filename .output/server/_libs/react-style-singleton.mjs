var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports } from "./react.mjs";
import { g as getNonce } from "./get-nonce.mjs";
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
__name(makeStyleTag, "makeStyleTag");
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
__name(injectStyles, "injectStyles");
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
__name(insertStyleTag, "insertStyleTag");
var stylesheetSingleton = /* @__PURE__ */ __name(function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: /* @__PURE__ */ __name(function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    }, "add"),
    remove: /* @__PURE__ */ __name(function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }, "remove")
  };
}, "stylesheetSingleton");
var styleHookSingleton = /* @__PURE__ */ __name(function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    reactExports.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
}, "styleHookSingleton");
var styleSingleton = /* @__PURE__ */ __name(function() {
  var useStyle = styleHookSingleton();
  var Sheet = /* @__PURE__ */ __name(function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  }, "Sheet");
  return Sheet;
}, "styleSingleton");
export {
  styleSingleton as s
};
