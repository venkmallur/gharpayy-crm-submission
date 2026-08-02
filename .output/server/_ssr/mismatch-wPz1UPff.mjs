var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { L as Link } from "./react-router-dom-DTg4HJ59.mjs";
import { aB as useAppState, aM as useTourData, C as Card, ao as CardContent, ap as CardHeader, aq as CardTitle, B as Badge } from "./router-xBhBcQRf.mjs";
import { d as detectMismatches } from "./intelligence-4QNz3VbS.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { g as TriangleAlert, ae as ExternalLink } from "../_libs/lucide-react.mjs";

import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

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
import "../_libs/tslib.mjs";
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
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function MismatchConsole() {
  const { tours } = useAppState();
  const { feedback, reports } = useTourData();
  const flagged = reactExports.useMemo(() => {
    const out = [];
    tours.forEach((t) => {
      const ms = detectMismatches(t, feedback[t.id], reports[t.id]);
      if (ms.length) {
        const sev = ms.some((m) => m.severity === "high") ? "high" : ms.some((m) => m.severity === "med") ? "med" : "low";
        out.push({ tour: t, reasons: ms.map((m) => m.reason), sev });
      }
    });
    return out;
  }, [tours, feedback, reports]);
  const tcmStats = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    tours.forEach((t) => {
      const cur = map.get(t.assignedTo) ?? { name: t.assignedToName, total: 0, flagged: 0 };
      const ms = detectMismatches(t, feedback[t.id], reports[t.id]);
      cur.total += 1;
      if (ms.length) cur.flagged += 1;
      map.set(t.assignedTo, cur);
    });
    return Array.from(map.entries()).map(([id, v]) => ({ id, ...v, pct: v.total ? Math.round(v.flagged / v.total * 100) : 0 })).sort((a, b) => b.pct - a.pct);
  }, [tours, feedback, reports]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-6xl mx-auto", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:42:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:43:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:44:9", children: "Mismatch Detection Engine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:45:9", children: "Cross-checks customer feedback ↔ TCM report ↔ system actions to expose reality gaps." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-3", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:50:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:51:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:51:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:51:44", children: "Flagged tours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:51:110", children: flagged.length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:52:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:52:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:52:44", children: "High severity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-destructive", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:52:110", children: flagged.filter((f) => f.sev === "high").length })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:53:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:53:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:53:44", children: "TCMs with gaps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:53:111", children: tcmStats.filter((t) => t.flagged > 0).length })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:56:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:57:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:57:21", children: "TCM inconsistency ranking" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:58:9", children: tcmStats.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:60:13", children: "No data yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:62:13", children: tcmStats.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:64:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 text-sm truncate", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:65:19", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded overflow-hidden", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:66:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${t.pct > 30 ? "bg-destructive" : t.pct > 10 ? "bg-amber-500" : "bg-emerald-500"}`, style: { width: `${t.pct}%` }, "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:67:21" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs tabular-nums w-24 text-right", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:69:19", children: [
          t.flagged,
          "/",
          t.total,
          " (",
          t.pct,
          "%)"
        ] })
      ] }, t.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:77:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:78:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:78:21", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-destructive", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:78:78" }),
        " Flagged tours"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:79:9", children: flagged.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:81:13", children: "No mismatches detected — TCM reports and customer feedback are aligned." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:83:13", children: flagged.map(({ tour, reasons, sev }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/myt/tour/${tour.id}`, className: "block border rounded p-2 hover:border-primary transition-colors", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:85:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:86:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:87:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:88:23", children: [
              tour.leadName,
              " · ",
              tour.propertyName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:89:23", children: [
              tour.assignedToName,
              " · ",
              tour.area
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:91:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: sev === "high" ? "destructive" : "secondary", className: "capitalize", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:92:23", children: sev }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3 text-muted-foreground", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:93:23" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-1 text-xs text-destructive", "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:96:19", children: reasons.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { "data-tsd-source": "/src/myt/pages/MismatchConsole.tsx:97:44", children: [
          "• ",
          r
        ] }, i)) })
      ] }, tour.id)) }) })
    ] })
  ] });
}
__name(MismatchConsole, "MismatchConsole");
__name2(MismatchConsole, "MismatchConsole");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/mismatch.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MismatchConsole, { "data-tsd-source": "/src/routes/myt/mismatch.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
