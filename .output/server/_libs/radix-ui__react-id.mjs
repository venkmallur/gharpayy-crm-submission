var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, b as React } from "./react.mjs";
import { u as useLayoutEffect2 } from "./@radix-ui/react-use-layout-effect+[...].mjs";
var useReactId = React[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = reactExports.useState(useReactId());
  useLayoutEffect2(() => {
    setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return id ? `radix-${id}` : "";
}
__name(useId, "useId");
export {
  useId as u
};
