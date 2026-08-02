var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AdminShell } from "./AdminShell-Dhs0yRNA.mjs";
import { u as useAdminRows } from "./use-admin-rows-Bn7YUGtf.mjs";
import { c as computeMoneyMap, b as computeTcmHealth, d as computeAreaPulse, e as computeSourceROI, f as collectVoiceOfCustomer, a as computeSlaBreaches } from "./supreme-metrics-CDYbXqzF.mjs";
import { q as cn } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
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
import "./store-CzExz6PU.mjs";
import "../_libs/zustand.mjs";
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
function inrL(n) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)}Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)}L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
__name(inrL, "inrL");
__name2(inrL, "inrL");
function pct(n) {
  return `${Math.round(n * 100)}%`;
}
__name(pct, "pct");
__name2(pct, "pct");
function SupremePage() {
  const rows = useAdminRows();
  const money = reactExports.useMemo(() => computeMoneyMap(rows), [rows]);
  const tcms = reactExports.useMemo(() => computeTcmHealth(rows), [rows]);
  const areas = reactExports.useMemo(() => computeAreaPulse(rows), [rows]).slice(0, 8);
  const sources = reactExports.useMemo(() => computeSourceROI(rows), [rows]).slice(0, 6);
  const voices = reactExports.useMemo(() => collectVoiceOfCustomer(rows, 10), [rows]);
  const breaches = reactExports.useMemo(() => computeSlaBreaches(rows), [rows]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Admin Supreme · God Mode", sub: "Every rupee, every person, every breach — one screen.", "data-tsd-source": "/src/routes/admin.supreme.tsx:33:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", "data-tsd-source": "/src/routes/admin.supreme.tsx:35:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Booked revenue (12mo)", value: inrL(money.bookedRevenue), tone: "success", "data-tsd-source": "/src/routes/admin.supreme.tsx:36:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Pipeline (weighted)", value: inrL(money.pipelineRevenue), tone: "info", "data-tsd-source": "/src/routes/admin.supreme.tsx:37:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Hot revenue ≥70%", value: inrL(money.hotRevenue), tone: "accent", "data-tsd-source": "/src/routes/admin.supreme.tsx:38:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "At-risk (stale ≥3d)", value: inrL(money.atRiskRevenue), tone: "warn", "data-tsd-source": "/src/routes/admin.supreme.tsx:39:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tile, { label: "Walking (lost 30d)", value: inrL(money.walkingRevenue), tone: "danger", "data-tsd-source": "/src/routes/admin.supreme.tsx:40:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-3 mt-3", "data-tsd-source": "/src/routes/admin.supreme.tsx:43:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "SLA breach board", sub: "Most expensive overdue work first", className: "lg:col-span-2", "data-tsd-source": "/src/routes/admin.supreme.tsx:45:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/routes/admin.supreme.tsx:46:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.supreme.tsx:47:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-muted-foreground border-b border-border", "data-tsd-source": "/src/routes/admin.supreme.tsx:48:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-tsd-source": "/src/routes/admin.supreme.tsx:49:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5", "data-tsd-source": "/src/routes/admin.supreme.tsx:49:21", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", "data-tsd-source": "/src/routes/admin.supreme.tsx:49:63", children: "TCM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", "data-tsd-source": "/src/routes/admin.supreme.tsx:49:97", children: "Breach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:49:134", children: "Age" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:49:169", children: "Prob" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:49:205", children: "EV" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { "data-tsd-source": "/src/routes/admin.supreme.tsx:51:15", children: [
          breaches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60 hover:bg-muted/40", "data-tsd-source": "/src/routes/admin.supreme.tsx:53:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5", "data-tsd-source": "/src/routes/admin.supreme.tsx:54:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/leads", className: "hover:underline", "data-tsd-source": "/src/routes/admin.supreme.tsx:54:44", children: b.leadName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/admin.supreme.tsx:55:21", children: b.tcm }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { "data-tsd-source": "/src/routes/admin.supreme.tsx:56:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-1.5 py-0.5 rounded bg-destructive/15 text-destructive text-[10px]", "data-tsd-source": "/src/routes/admin.supreme.tsx:56:25", children: b.type }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.supreme.tsx:57:21", children: [
              Math.round(b.ageHrs),
              "h"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.supreme.tsx:58:21", children: [
              b.probability,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-accent", "data-tsd-source": "/src/routes/admin.supreme.tsx:59:21", children: inrL(b.expectedValue) })
          ] }, b.leadId + b.type)),
          !breaches.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-tsd-source": "/src/routes/admin.supreme.tsx:62:38", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 6, className: "text-center text-muted-foreground py-4", "data-tsd-source": "/src/routes/admin.supreme.tsx:62:42", children: "No breaches. Clean slate." }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Voice of customer", sub: "Raw objections & lost-reasons, latest first", "data-tsd-source": "/src/routes/admin.supreme.tsx:69:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs max-h-[420px] overflow-auto pr-1", "data-tsd-source": "/src/routes/admin.supreme.tsx:70:11", children: [
        voices.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-l-2 border-destructive/60 pl-2", "data-tsd-source": "/src/routes/admin.supreme.tsx:72:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground", "data-tsd-source": "/src/routes/admin.supreme.tsx:73:17", children: [
            '"',
            v.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/admin.supreme.tsx:74:17", children: [
            "— ",
            v.leadName,
            " · ",
            new Date(v.ts).toLocaleDateString("en-IN")
          ] })
        ] }, i)),
        !voices.length && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/admin.supreme.tsx:77:32", children: "No captured voice yet." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "People health · load & burn", sub: "Watch and burn flags drive coaching priority", className: "mt-3", "data-tsd-source": "/src/routes/admin.supreme.tsx:83:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-2", "data-tsd-source": "/src/routes/admin.supreme.tsx:84:9", children: [
      tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-lg border p-2.5 bg-card", t.riskFlag === "burn" && "border-destructive/60", t.riskFlag === "watch" && "border-warning/60", t.riskFlag === "ok" && "border-border"), "data-tsd-source": "/src/routes/admin.supreme.tsx:86:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/admin.supreme.tsx:92:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", "data-tsd-source": "/src/routes/admin.supreme.tsx:93:17", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] uppercase px-1.5 py-0.5 rounded", t.riskFlag === "burn" && "bg-destructive/20 text-destructive", t.riskFlag === "watch" && "bg-warning/20 text-warning", t.riskFlag === "ok" && "bg-success/20 text-success"), "data-tsd-source": "/src/routes/admin.supreme.tsx:94:17", children: t.riskFlag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-1 mt-2 text-[11px]", "data-tsd-source": "/src/routes/admin.supreme.tsx:101:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Open", v: t.open, "data-tsd-source": "/src/routes/admin.supreme.tsx:102:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Hot", v: t.hot, accent: true, "data-tsd-source": "/src/routes/admin.supreme.tsx:103:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Dormant", v: t.dormant, "data-tsd-source": "/src/routes/admin.supreme.tsx:104:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Booked", v: t.booked, "data-tsd-source": "/src/routes/admin.supreme.tsx:105:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Lost", v: t.lost, "data-tsd-source": "/src/routes/admin.supreme.tsx:106:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "CVR", v: pct(t.conversion), "data-tsd-source": "/src/routes/admin.supreme.tsx:107:17" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[10px] text-muted-foreground flex justify-between", "data-tsd-source": "/src/routes/admin.supreme.tsx:109:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/routes/admin.supreme.tsx:110:17", children: [
            "Pipeline ",
            inrL(t.pipelineValue)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/routes/admin.supreme.tsx:111:17", children: [
            "Age ",
            t.avgAgeDays,
            "d"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-1 rounded bg-muted overflow-hidden", "data-tsd-source": "/src/routes/admin.supreme.tsx:113:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full", t.loadScore > 80 ? "bg-destructive" : t.loadScore > 55 ? "bg-warning" : "bg-success"), style: {
          width: `${t.loadScore}%`
        }, "data-tsd-source": "/src/routes/admin.supreme.tsx:114:17" }) })
      ] }, t.tcmId)),
      !tcms.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/routes/admin.supreme.tsx:121:28", children: "No TCM data." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3 mt-3", "data-tsd-source": "/src/routes/admin.supreme.tsx:126:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Area pulse", sub: "Demand vs lost-rate by preferred area", "data-tsd-source": "/src/routes/admin.supreme.tsx:127:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.supreme.tsx:128:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-muted-foreground border-b border-border", "data-tsd-source": "/src/routes/admin.supreme.tsx:129:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-tsd-source": "/src/routes/admin.supreme.tsx:130:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5", "data-tsd-source": "/src/routes/admin.supreme.tsx:130:19", children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:130:61", children: "Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:130:98", children: "Hot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:130:133", children: "Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:130:171", children: "Lost %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:130:209", children: "Revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pl-2", "data-tsd-source": "/src/routes/admin.supreme.tsx:130:248", children: "Top objection" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/routes/admin.supreme.tsx:132:13", children: areas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", "data-tsd-source": "/src/routes/admin.supreme.tsx:134:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 font-medium", "data-tsd-source": "/src/routes/admin.supreme.tsx:135:19", children: a.area }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.supreme.tsx:136:19", children: a.leads }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-accent", "data-tsd-source": "/src/routes/admin.supreme.tsx:137:19", children: a.hot }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-success", "data-tsd-source": "/src/routes/admin.supreme.tsx:138:19", children: a.booked }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn("text-right font-mono", a.lostRate > 0.4 && "text-destructive"), "data-tsd-source": "/src/routes/admin.supreme.tsx:139:19", children: pct(a.lostRate) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.supreme.tsx:140:19", children: inrL(a.revenue) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pl-2 text-muted-foreground", "data-tsd-source": "/src/routes/admin.supreme.tsx:141:19", children: a.topObjection })
        ] }, a.area)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Panel, { title: "Source ROI", sub: "Which channel actually books beds", "data-tsd-source": "/src/routes/admin.supreme.tsx:147:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.supreme.tsx:148:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-muted-foreground border-b border-border", "data-tsd-source": "/src/routes/admin.supreme.tsx:149:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-tsd-source": "/src/routes/admin.supreme.tsx:150:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5", "data-tsd-source": "/src/routes/admin.supreme.tsx:150:19", children: "Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:150:63", children: "Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:150:100", children: "Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:150:138", children: "CVR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:150:173", children: "Avg ₹" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.supreme.tsx:150:210", children: "Revenue" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/routes/admin.supreme.tsx:152:13", children: sources.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", "data-tsd-source": "/src/routes/admin.supreme.tsx:154:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 font-medium capitalize", "data-tsd-source": "/src/routes/admin.supreme.tsx:155:19", children: s.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.supreme.tsx:156:19", children: s.leads }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-success", "data-tsd-source": "/src/routes/admin.supreme.tsx:157:19", children: s.booked }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.supreme.tsx:158:19", children: pct(s.cvr) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.supreme.tsx:159:19", children: inrL(s.avgBudget) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right font-mono text-accent", "data-tsd-source": "/src/routes/admin.supreme.tsx:160:19", children: inrL(s.revenue) })
        ] }, s.source)) })
      ] }) })
    ] })
  ] });
}
__name(SupremePage, "SupremePage");
__name2(SupremePage, "SupremePage");
function Tile({
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", "data-tsd-source": "/src/routes/admin.supreme.tsx:177:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/admin.supreme.tsx:178:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-xl font-display font-semibold", cls), "data-tsd-source": "/src/routes/admin.supreme.tsx:179:7", children: value })
  ] });
}
__name(Tile, "Tile");
__name2(Tile, "Tile");
function Panel({
  title,
  sub,
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border border-border bg-card p-3", className), "data-tsd-source": "/src/routes/admin.supreme.tsx:186:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", "data-tsd-source": "/src/routes/admin.supreme.tsx:187:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", "data-tsd-source": "/src/routes/admin.supreme.tsx:188:9", children: title }),
      sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/admin.supreme.tsx:189:17", children: sub })
    ] }),
    children
  ] });
}
__name(Panel, "Panel");
__name2(Panel, "Panel");
function Stat({
  k,
  v,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/admin.supreme.tsx:198:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase text-muted-foreground", "data-tsd-source": "/src/routes/admin.supreme.tsx:199:7", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-mono text-sm", accent && "text-accent"), "data-tsd-source": "/src/routes/admin.supreme.tsx:200:7", children: v })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
export {
  SupremePage as component
};
