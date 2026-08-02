var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useAdminRows } from "./use-admin-rows-Bn7YUGtf.mjs";
import { c as computeMoneyMap, a as computeSlaBreaches } from "./supreme-metrics-CDYbXqzF.mjs";
import { b as useVisitWar } from "./router-Cbs6ivkN.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/sonner.mjs";
import "./store-CzExz6PU.mjs";
import "../_libs/zustand.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "../_libs/isbot.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function inrL(n) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)}Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)}L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
__name(inrL, "inrL");
__name2(inrL, "inrL");
function WarRoomTV() {
  const rows = useAdminRows();
  const alerts = useVisitWar((s) => s.alerts).slice(0, 8);
  const money = reactExports.useMemo(() => computeMoneyMap(rows), [rows]);
  const breaches = reactExports.useMemo(() => computeSlaBreaches(rows).slice(0, 8), [rows]);
  const hot = reactExports.useMemo(() => rows.filter((r) => !r.booked && r.probability >= 70).sort((a, b) => b.probability - a.probability).slice(0, 8), [rows]);
  const [tick, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 3e4);
    return () => clearInterval(i);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 bg-background text-foreground overflow-auto p-6 font-display", "data-tsd-source": "/src/routes/admin.war-room.tsx:33:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between mb-4", "data-tsd-source": "/src/routes/admin.war-room.tsx:34:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/admin.war-room.tsx:35:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-destructive font-bold", "data-tsd-source": "/src/routes/admin.war-room.tsx:36:11", children: "War-Room · Live · Admin TV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight", "data-tsd-source": "/src/routes/admin.war-room.tsx:37:11", children: "Gharpayy Cockpit" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/routes/admin.war-room.tsx:39:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-mono tabular-nums", "data-tsd-source": "/src/routes/admin.war-room.tsx:40:11", children: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit"
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/admin.war-room.tsx:41:11", children: [
          "auto-refresh · last tick #",
          tick
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "text-[11px] underline text-muted-foreground", "data-tsd-source": "/src/routes/admin.war-room.tsx:42:11", children: "exit" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-5 gap-3 mb-4", "data-tsd-source": "/src/routes/admin.war-room.tsx:46:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BigTile, { label: "Booked 12mo", value: inrL(money.bookedRevenue), tone: "success", "data-tsd-source": "/src/routes/admin.war-room.tsx:47:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BigTile, { label: "Weighted pipeline", value: inrL(money.pipelineRevenue), tone: "info", "data-tsd-source": "/src/routes/admin.war-room.tsx:48:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BigTile, { label: "Hot ≥70%", value: inrL(money.hotRevenue), tone: "accent", "data-tsd-source": "/src/routes/admin.war-room.tsx:49:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BigTile, { label: "At risk", value: inrL(money.atRiskRevenue), tone: "warn", "data-tsd-source": "/src/routes/admin.war-room.tsx:50:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BigTile, { label: "Walking 30d", value: inrL(money.walkingRevenue), tone: "danger", "data-tsd-source": "/src/routes/admin.war-room.tsx:51:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-3 gap-3", "data-tsd-source": "/src/routes/admin.war-room.tsx:54:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Wall, { title: "🔥 Most likely to close", "data-tsd-source": "/src/routes/admin.war-room.tsx:55:9", children: [
        hot.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { idx: i + 1, left: r.lead.name, mid: r.tcm?.name ?? "—", right: `${r.probability}%`, "data-tsd-source": "/src/routes/admin.war-room.tsx:57:13" }, r.lead.id)),
        !hot.length && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { "data-tsd-source": "/src/routes/admin.war-room.tsx:59:27", children: "No hot leads." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Wall, { title: "⏰ SLA breaches by ₹", "data-tsd-source": "/src/routes/admin.war-room.tsx:61:9", children: [
        breaches.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { idx: i + 1, left: b.leadName, mid: b.type, right: inrL(b.expectedValue), tone: "danger", "data-tsd-source": "/src/routes/admin.war-room.tsx:63:13" }, b.leadId + b.type)),
        !breaches.length && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { "data-tsd-source": "/src/routes/admin.war-room.tsx:65:32", children: "No breaches. Clean." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Wall, { title: "📡 Live alerts", "data-tsd-source": "/src/routes/admin.war-room.tsx:67:9", children: [
        alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-base py-1 border-b border-border/40", "data-tsd-source": "/src/routes/admin.war-room.tsx:69:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground text-sm", "data-tsd-source": "/src/routes/admin.war-room.tsx:70:15", children: new Date(a.ts).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit"
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", "data-tsd-source": "/src/routes/admin.war-room.tsx:71:15", children: a.message })
        ] }, a.id)),
        !alerts.length && /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { "data-tsd-source": "/src/routes/admin.war-room.tsx:74:30", children: "Silent. All quiet." })
      ] })
    ] })
  ] });
}
__name(WarRoomTV, "WarRoomTV");
__name2(WarRoomTV, "WarRoomTV");
function BigTile({
  label,
  value,
  tone
}) {
  const cls = {
    success: "text-success",
    info: "text-info",
    accent: "text-accent",
    warn: "text-warning",
    danger: "text-destructive"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-border bg-card p-5", "data-tsd-source": "/src/routes/admin.war-room.tsx:84:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/routes/admin.war-room.tsx:85:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-5xl font-bold mt-2 tabular-nums ${cls}`, "data-tsd-source": "/src/routes/admin.war-room.tsx:86:7", children: value })
  ] });
}
__name(BigTile, "BigTile");
__name2(BigTile, "BigTile");
function Wall({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-border bg-card p-4", "data-tsd-source": "/src/routes/admin.war-room.tsx:93:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold mb-2", "data-tsd-source": "/src/routes/admin.war-room.tsx:94:7", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0", "data-tsd-source": "/src/routes/admin.war-room.tsx:95:7", children })
  ] });
}
__name(Wall, "Wall");
__name2(Wall, "Wall");
function Row({
  idx,
  left,
  mid,
  right,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 py-1.5 border-b border-border/40 text-base", "data-tsd-source": "/src/routes/admin.war-room.tsx:102:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-center font-mono text-muted-foreground", "data-tsd-source": "/src/routes/admin.war-room.tsx:103:7", children: idx }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate font-medium", "data-tsd-source": "/src/routes/admin.war-room.tsx:104:7", children: left }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground truncate w-24 text-right", "data-tsd-source": "/src/routes/admin.war-room.tsx:105:7", children: mid }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono tabular-nums w-20 text-right ${tone === "danger" ? "text-destructive" : "text-accent"}`, "data-tsd-source": "/src/routes/admin.war-room.tsx:106:7", children: right })
  ] });
}
__name(Row, "Row");
__name2(Row, "Row");
function Empty({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground py-3 text-center", "data-tsd-source": "/src/routes/admin.war-room.tsx:112:10", children });
}
__name(Empty, "Empty");
__name2(Empty, "Empty");
export {
  WarRoomTV as component
};
