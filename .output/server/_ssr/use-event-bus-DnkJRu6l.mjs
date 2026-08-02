var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports } from "../_libs/react.mjs";
import { a3 as glueBus } from "./router-xBhBcQRf.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function useGlueEvents(filter, limit = 50) {
  const [events, setEvents] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setEvents(glueBus.recent(filter, limit));
    const off = glueBus.subscribe(() => {
      setEvents(glueBus.recent(filter, limit));
    });
    return off;
  }, [filter, limit]);
  return events;
}
__name(useGlueEvents, "useGlueEvents");
__name2(useGlueEvents, "useGlueEvents");
export {
  useGlueEvents as u
};
