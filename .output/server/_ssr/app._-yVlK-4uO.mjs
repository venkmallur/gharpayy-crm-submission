var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";

var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const ReferralApp = reactExports.lazy(() => import("./App-SYzjBkqK.mjs"));
function AppShell() {
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background text-muted-foreground", "data-tsd-source": "/src/routes/app.$.tsx:21:7", children: "Loading desk…" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background text-muted-foreground", children: "Loading desk…" }), "data-tsd-source": "/src/routes/app.$.tsx:27:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReferralApp, { "data-tsd-source": "/src/routes/app.$.tsx:28:7" }) });
}
__name(AppShell, "AppShell");
__name2(AppShell, "AppShell");
export {
  AppShell as component
};
