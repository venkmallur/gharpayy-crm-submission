var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { an as useOwner, q as cn } from "./router-Cbs6ivkN.mjs";
import { u as useGlueEvents } from "./use-event-bus-Bdnr5LRL.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { T as TrendingUp, f as Activity, S as Sparkles, H as MessageSquare, g as TriangleAlert, ay as Eye, I as IndianRupee } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const OBJECTION_LABELS = {
  price: "Price too high",
  location: "Location",
  timing: "Timing mismatch",
  amenities: "Amenities",
  other: "Other"
};
function OwnerInsights() {
  const { currentOwnerId, insights, objections, roomStatuses, rooms, properties } = useOwner();
  const insight = insights.find((i) => i.ownerId === currentOwnerId);
  const reports = useGlueEvents((e) => e.type === "tcm.report.filed", 10);
  const myObjections = objections.filter((o) => o.ownerId === currentOwnerId);
  const mySt = roomStatuses.filter((r) => r.ownerId === currentOwnerId);
  const topViewed = reactExports.useMemo(() => {
    return [...mySt].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 5);
  }, [mySt]);
  const counts = reactExports.useMemo(() => {
    const c = {};
    myObjections.forEach((o) => {
      c[o.reason] = (c[o.reason] ?? 0) + 1;
    });
    return c;
  }, [myObjections]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-12", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:28:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:29:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl md:text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:30:9", children: "Demand insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:31:9", children: "What the market is telling you about your supply." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:34:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Leads pitched", value: insight?.leadsPitched ?? 0, icon: TrendingUp, "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:35:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Visits done", value: insight?.visitsDone ?? 0, icon: Activity, "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:36:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "High intent", value: insight?.highIntent ?? 0, icon: Sparkles, "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:37:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Top objection", value: insight?.topObjection ?? "—", icon: MessageSquare, small: true, "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:38:9" })
    ] }),
    insight?.priceMismatchSignal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-warning/30 bg-warning/5 p-4 flex items-start gap-3", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:42:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-warning-foreground shrink-0 mt-0.5", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:43:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:44:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:45:13", children: "Price signal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:46:13", children: insight.priceMismatchSignal }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-2", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:47:13", children: "Recommended: drop ₹500–₹1000 on next vacating bed to test conversion." })
      ] })
    ] }),
    Object.keys(counts).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:56:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:57:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:58:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:59:13", children: "Why deals don't close" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:61:11", children: Object.entries(counts).sort(([, a], [, b]) => b - a).map(([reason, count]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:63:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm w-32 font-medium", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:64:17", children: OBJECTION_LABELS[reason] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:65:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn("h-full", reason === "price" ? "bg-destructive" : "bg-warning"),
            style: { width: `${count / myObjections.length * 100}%` },
            "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:66:19"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-muted-foreground w-10 text-right", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:71:17", children: [
          count,
          "×"
        ] })
      ] }, reason)) })
    ] }),
    topViewed.length > 0 && topViewed[0].views ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:80:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:81:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:82:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:83:13", children: "Most-viewed rooms" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:85:11", children: topViewed.map((s) => {
        const r = rooms.find((x) => x.id === s.roomId);
        const p = properties.find((x) => x.id === s.propertyId);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 py-2 text-xs", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:90:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:91:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium truncate", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:92:21", children: [
              p?.name ?? "—",
              " · ",
              r?.type ?? "room"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono inline-flex items-center gap-1", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:93:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:94:23" }),
              (s.rentConfirmed ?? r?.currentPrice ?? 0).toLocaleString(),
              "/mo"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-sm font-semibold tabular-nums inline-flex items-center gap-1", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:97:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3 text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:98:21" }),
            " ",
            s.views
          ] })
        ] }, s.roomId);
      }) })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card p-4", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:107:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold mb-3", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:108:9", children: "Recent post-visit reports" }),
      reports.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:110:11", children: "No reports filed yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 text-xs", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:112:11", children: reports.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border last:border-0 py-1.5", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:114:15", children: [
        "Tour ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:115:22", children: r.tourId }),
        " ·",
        " ",
        "objection: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:116:33", children: r.objection ?? "—" })
      ] }, i)) })
    ] })
  ] });
}
__name(OwnerInsights, "OwnerInsights");
__name2(OwnerInsights, "OwnerInsights");
function Tile({ label, value, icon: Icon, small }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:128:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:129:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:130:9" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: small ? "text-xs font-medium mt-1" : "text-2xl font-display font-semibold mt-1 tabular-nums", "data-tsd-source": "/src/owner/pages/OwnerInsights.tsx:132:7", children: value })
  ] });
}
__name(Tile, "Tile");
__name2(Tile, "Tile");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/insights.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerInsights, { "data-tsd-source": "/src/routes/owner/insights.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
