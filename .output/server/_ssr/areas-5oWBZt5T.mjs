var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as PGS, A as AppShell, at as AREAS$1, au as areaMood$1 } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, q as cn } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bB as ArrowLeft, K as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./store-CzExz6PU.mjs";
import "./analytics-DmYAqfQ6.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/cmdk.mjs";
import "./personas-yLdDZDbn.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function AreasPage() {
  const {
    role
  } = useApp();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (role === "owner") navigate({
      to: "/owner/inventory"
    });
  }, [role, navigate]);
  const counts = reactExports.useMemo(() => {
    const c = {};
    PGS.forEach((p) => {
      c[p.area] = (c[p.area] ?? 0) + 1;
    });
    return c;
  }, []);
  if (role === "owner") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/supply-hub/areas.tsx:30:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:31:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:32:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:33:11" }),
      " Supply Hub"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/supply-hub/areas.tsx:35:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-accent font-semibold mb-1", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:36:11", children: "Area Mood Board" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:37:11", children: "Where each Bangalore zone fits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:38:11", children: "Crowd, age band, nightlife, weekend feel — instant context for any lead's location question." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:41:9", children: AREAS$1.map((a) => {
      const m = areaMood$1(a.area);
      const tone = m?.nightlife === "High" ? "border-fuchsia-400/30" : m?.nightlife === "Medium" ? "border-cyan-400/30" : "border-border";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-lg border bg-card p-4", tone), "data-tsd-source": "/src/routes/supply-hub/areas.tsx:46:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:47:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-lg font-semibold flex items-center gap-1.5", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:48:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:48:96" }),
            " ",
            a.area
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:49:19", children: [
            counts[a.area] ?? 0,
            " PGs"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:51:17", children: [
          a.budget,
          " · Demand: ",
          a.demand
        ] }),
        m && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:53:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { k: "Crowd", v: m.crowd, "data-tsd-source": "/src/routes/supply-hub/areas.tsx:54:21" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { k: "Age", v: m.ageBand, "data-tsd-source": "/src/routes/supply-hub/areas.tsx:55:21" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { k: "Nightlife", v: m.nightlife, "data-tsd-source": "/src/routes/supply-hub/areas.tsx:56:21" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { k: "Noise", v: m.noise, "data-tsd-source": "/src/routes/supply-hub/areas.tsx:57:21" })
        ] }),
        m && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs italic text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:60:23", children: m.weekend }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:61:17", children: "Top companies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:62:17", children: a.topCompanies })
      ] }, a.area);
    }) })
  ] }) });
}
__name(AreasPage, "AreasPage");
__name2(AreasPage, "AreasPage");
function Item({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/supply-hub/areas.tsx:74:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/areas.tsx:75:7", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/routes/supply-hub/areas.tsx:76:7", children: v })
  ] });
}
__name(Item, "Item");
__name2(Item, "Item");
export {
  AreasPage as component
};
