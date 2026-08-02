var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports } from "../react.mjs";
import { u as useCallbackRef } from "./react-use-callback-ref+[...].mjs";
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  reactExports.useEffect(() => {
    const handleKeyDown = /* @__PURE__ */ __name((event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    }, "handleKeyDown");
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}
__name(useEscapeKeydown, "useEscapeKeydown");
export {
  useEscapeKeydown as u
};
