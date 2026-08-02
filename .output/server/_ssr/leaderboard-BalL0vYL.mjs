var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { aB as useAppState, aJ as getMemberPerformance, aI as zones, q as cn } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { O as Trophy, bS as Medal, au as Award } from "../_libs/lucide-react.mjs";

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
function Leaderboard() {
  const { tours } = useAppState();
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [zoneFilter, setZoneFilter] = reactExports.useState("");
  const memberPerf = getMemberPerformance(tours);
  const scored = memberPerf.filter((m) => m.toursScheduled > 0).filter((m) => roleFilter === "all" || m.role === roleFilter).filter((m) => !zoneFilter || m.zoneName.includes(zoneFilter)).map((m) => {
    const score = Math.round(m.toursScheduled * (m.showUpRate / 100) * (m.drafts > 0 ? m.drafts / m.toursCompleted : 0) * 100) / 100;
    return { ...m, score };
  }).sort((a, b) => b.score - a.score);
  const selectClass = "h-8 bg-surface-2 border border-border rounded-md px-2 text-xs text-foreground";
  const rankIcons = [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-5 w-5 text-role-hr", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:26:5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Medal, { className: "h-5 w-5 text-muted-foreground", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:27:5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-role-hr/60", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:28:5" })
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:32:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:33:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:34:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:35:11", children: "Leaderboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:36:11", children: "Score = Tours × Show-Up% × Draft Rate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:38:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: roleFilter, onChange: /* @__PURE__ */ __name2((e) => setRoleFilter(e.target.value), "onChange"), className: selectClass, "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:39:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:40:13", children: "All Roles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "flow-ops", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:41:13", children: "Flow Ops" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tcm", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:42:13", children: "TCM" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: zoneFilter, onChange: /* @__PURE__ */ __name2((e) => setZoneFilter(e.target.value), "onChange"), className: selectClass, "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:44:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:45:13", children: "All Zones" }),
          zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z.name.split(" — ")[1], "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:46:29", children: z.name.split(" — ")[1] }, z.id))
        ] })
      ] })
    ] }),
    scored.length >= 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:53:9", children: scored.slice(0, 3).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
      "glass-card p-3 text-center",
      i === 0 && "border-role-hr/30 metric-glow-amber"
    ), "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:55:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-1", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:59:15", children: rankIcons[i] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-heading font-bold text-foreground truncate", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:60:15", children: m.name.split(" ")[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:61:15", children: m.role === "tcm" ? "TCM" : "Flow Ops" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground mt-1", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:62:15", children: m.score.toFixed(1) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mt-1", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:63:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn(
        "text-[9px] px-1 py-0.5 rounded",
        m.showUpRate >= 70 ? "bg-success/15 text-role-tcm" : "bg-danger/15 text-danger"
      ), "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:64:17", children: [
        m.showUpRate,
        "% show"
      ] }) })
    ] }, m.memberId)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:75:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:76:9", children: [
      scored.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:78:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
          "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
          i < 3 ? "bg-role-hr/15 text-role-hr" : "bg-surface-2 text-muted-foreground"
        ), "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:79:15", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:85:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:86:17", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:87:17", children: [
            m.zoneName.split(" — ")[1],
            " · ",
            m.role === "tcm" ? "TCM" : "Flow Ops"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0 text-xs", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:89:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center hidden sm:block", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:90:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:91:19", children: m.toursScheduled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:92:19", children: "tours" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:94:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: cn("font-medium", m.showUpRate >= 70 ? "text-role-tcm" : m.showUpRate >= 50 ? "text-role-hr" : "text-danger"), "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:95:19", children: [
              m.showUpRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:96:19", children: "show" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:98:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-role-hr font-medium", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:99:19", children: m.drafts }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:100:19", children: "drafts" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
            "w-12 text-center py-1 rounded font-heading font-bold",
            m.showUpRate >= 70 ? "bg-success/10 text-role-tcm" : m.showUpRate < 50 ? "bg-danger/10 text-danger" : "bg-surface-2 text-foreground"
          ), "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:102:17", children: m.score.toFixed(1) })
        ] })
      ] }, m.memberId)),
      scored.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-xs py-6", "data-tsd-source": "/src/myt/pages/Leaderboard.tsx:111:35", children: "No data" })
    ] }) })
  ] });
}
__name(Leaderboard, "Leaderboard");
__name2(Leaderboard, "Leaderboard");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/leaderboard.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaderboard, { "data-tsd-source": "/src/routes/myt/leaderboard.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
