var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-Dhs0yRNA.mjs";
import { u as useApp } from "./router-Cbs6ivkN.mjs";
import { u as useCRM10x } from "./store-CzExz6PU.mjs";
import { f as funnelVelocity, o as objectionLossCorrelation } from "./analytics-DmYAqfQ6.mjs";
import "../_libs/sonner.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/zustand.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function AdminIntel() {
  const {
    leads
  } = useApp();
  const objections = useCRM10x((s) => s.objections);
  const funnel = reactExports.useMemo(() => funnelVelocity(leads), [leads]);
  const objLoss = reactExports.useMemo(() => objectionLossCorrelation(leads, objections).slice(0, 8), [leads, objections]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminShell, { title: "Intelligence", sub: "What's working · what isn't · why", "data-tsd-source": "/src/routes/admin.intelligence.tsx:18:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", "data-tsd-source": "/src/routes/admin.intelligence.tsx:19:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", "data-tsd-source": "/src/routes/admin.intelligence.tsx:20:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", "data-tsd-source": "/src/routes/admin.intelligence.tsx:21:11", children: "Funnel velocity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.intelligence.tsx:22:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/routes/admin.intelligence.tsx:23:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-muted-foreground", "data-tsd-source": "/src/routes/admin.intelligence.tsx:23:20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1", "data-tsd-source": "/src/routes/admin.intelligence.tsx:23:68", children: "From → To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.intelligence.tsx:23:103", children: "Conv%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.intelligence.tsx:23:140", children: "Drop%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.intelligence.tsx:23:177", children: "Avg d" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/routes/admin.intelligence.tsx:24:13", children: funnel.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", "data-tsd-source": "/src/routes/admin.intelligence.tsx:25:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1", "data-tsd-source": "/src/routes/admin.intelligence.tsx:26:17", children: [
            f.fromStage,
            " → ",
            f.toStage
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right text-accent", "data-tsd-source": "/src/routes/admin.intelligence.tsx:27:17", children: [
            f.cohortConv,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right text-destructive", "data-tsd-source": "/src/routes/admin.intelligence.tsx:28:17", children: [
            f.dropOffPct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.intelligence.tsx:29:17", children: f.avgDays })
        ] }, f.fromStage)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", "data-tsd-source": "/src/routes/admin.intelligence.tsx:34:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", "data-tsd-source": "/src/routes/admin.intelligence.tsx:35:11", children: "Objection ↔ loss correlation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.intelligence.tsx:36:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/routes/admin.intelligence.tsx:37:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-muted-foreground", "data-tsd-source": "/src/routes/admin.intelligence.tsx:37:20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1", "data-tsd-source": "/src/routes/admin.intelligence.tsx:37:68", children: "Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.intelligence.tsx:37:98", children: "Raised" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.intelligence.tsx:37:136", children: "Lost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.intelligence.tsx:37:172", children: "Loss %" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/routes/admin.intelligence.tsx:38:13", children: objLoss.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", "data-tsd-source": "/src/routes/admin.intelligence.tsx:39:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1", "data-tsd-source": "/src/routes/admin.intelligence.tsx:40:17", children: r.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", "data-tsd-source": "/src/routes/admin.intelligence.tsx:41:17", children: r.raised }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right text-destructive", "data-tsd-source": "/src/routes/admin.intelligence.tsx:42:17", children: r.lost }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.intelligence.tsx:43:17", children: [
            r.lossRate,
            "%"
          ] })
        ] }, r.code)) })
      ] })
    ] })
  ] }) });
}
__name(AdminIntel, "AdminIntel");
__name2(AdminIntel, "AdminIntel");
export {
  AdminIntel as component
};
