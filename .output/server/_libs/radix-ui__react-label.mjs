var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "./react.mjs";
import { a as Primitive } from "./radix-ui__react-primitive.mjs";
var NAME = "Label";
var Label = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: /* @__PURE__ */ __name((event) => {
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        props.onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }, "onMouseDown")
    }
  );
});
Label.displayName = NAME;
var Root = Label;
export {
  Root as R
};
