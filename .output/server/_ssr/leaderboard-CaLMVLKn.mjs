var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as computeTcmPerformance, A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, c as useMountedNow } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { O as Trophy, F as Flame, s as Clock, T as TrendingUp } from "../_libs/lucide-react.mjs";
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
function LeaderboardPage() {
  const {
    tcms,
    leads,
    tours,
    followUps,
    bookings
  } = useApp();
  const [now] = useMountedNow();
  const rows = reactExports.useMemo(() => {
    return tcms.map((t) => {
      const perf = computeTcmPerformance(t.id, leads, tours, followUps, now);
      const revenue = bookings.filter((b) => b.tcmId === t.id).reduce((s, b) => s + b.amount, 0);
      return {
        tcm: t,
        perf,
        revenue
      };
    }).sort((a, b) => {
      const sa = a.perf.conversion * 1.5 + a.perf.discipline - a.perf.pendingPostTour * 10;
      const sb = b.perf.conversion * 1.5 + b.perf.discipline - b.perf.pendingPostTour * 10;
      return sb - sa;
    });
  }, [tcms, leads, tours, followUps, bookings, now]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/leaderboard.tsx:39:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/leaderboard.tsx:40:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/leaderboard.tsx:41:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-semibold tracking-tight inline-flex items-center gap-2", "data-tsd-source": "/src/routes/leaderboard.tsx:42:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-6 w-6 text-accent", "data-tsd-source": "/src/routes/leaderboard.tsx:43:13" }),
        " TCM Leaderboard"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/leaderboard.tsx:45:11", children: "Conversion × discipline × speed. Updated live. Rank changes when you fill that post-tour form." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/leaderboard.tsx:50:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/routes/leaderboard.tsx:51:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-[11px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/leaderboard.tsx:52:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-tsd-source": "/src/routes/leaderboard.tsx:53:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:54:17", children: "#" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:55:17", children: "TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:56:17", children: "Zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:57:17", children: "Leads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:58:17", children: "Tours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:59:17", children: "Bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:60:17", children: "Conv %" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:61:17", children: "Discipline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-2.5 font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:62:17", children: "Revenue" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", "data-tsd-source": "/src/routes/leaderboard.tsx:65:13", children: rows.map(({
        tcm,
        perf,
        revenue
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-muted/30 transition-colors", "data-tsd-source": "/src/routes/leaderboard.tsx:67:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs", "data-tsd-source": "/src/routes/leaderboard.tsx:68:19", children: i === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/routes/leaderboard.tsx:69:32" }) : `#${i + 1}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", "data-tsd-source": "/src/routes/leaderboard.tsx:71:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/leaderboard.tsx:72:21", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-accent/15 text-accent flex items-center justify-center text-[10px] font-semibold", "data-tsd-source": "/src/routes/leaderboard.tsx:73:23", children: tcm.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/routes/leaderboard.tsx:76:23", children: tcm.name })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", "data-tsd-source": "/src/routes/leaderboard.tsx:79:19", children: tcm.zone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right tabular-nums", "data-tsd-source": "/src/routes/leaderboard.tsx:80:19", children: perf.leadCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right tabular-nums", "data-tsd-source": "/src/routes/leaderboard.tsx:81:19", children: perf.toursDone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right tabular-nums font-semibold text-success", "data-tsd-source": "/src/routes/leaderboard.tsx:82:19", children: perf.bookings }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right tabular-nums", "data-tsd-source": "/src/routes/leaderboard.tsx:83:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: perf.conversion >= 35 ? "text-success font-semibold" : "", "data-tsd-source": "/src/routes/leaderboard.tsx:84:21", children: [
          perf.conversion,
          "%"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right tabular-nums", "data-tsd-source": "/src/routes/leaderboard.tsx:88:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: perf.discipline >= 75 ? "text-success" : perf.discipline >= 50 ? "text-warning-foreground" : "text-destructive", "data-tsd-source": "/src/routes/leaderboard.tsx:89:21", children: perf.discipline }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right tabular-nums font-mono text-xs", "data-tsd-source": "/src/routes/leaderboard.tsx:96:19", children: [
          "₹",
          (revenue / 1e3).toFixed(0),
          "k"
        ] })
      ] }, tcm.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", "data-tsd-source": "/src/routes/leaderboard.tsx:105:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: Flame, title: "Top closer", value: rows[0]?.tcm.name ?? "—", sub: `${rows[0]?.perf.conversion ?? 0}% conversion`, "data-tsd-source": "/src/routes/leaderboard.tsx:106:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: Clock, title: "Fastest response", value: [...tcms].sort((a, b) => a.avgResponseMins - b.avgResponseMins)[0]?.name ?? "—", sub: `${[...tcms].sort((a, b) => a.avgResponseMins - b.avgResponseMins)[0]?.avgResponseMins ?? 0}m avg`, "data-tsd-source": "/src/routes/leaderboard.tsx:107:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: TrendingUp, title: "Highest discipline", value: [...rows].sort((a, b) => b.perf.discipline - a.perf.discipline)[0]?.tcm.name ?? "—", sub: `${[...rows].sort((a, b) => b.perf.discipline - a.perf.discipline)[0]?.perf.discipline ?? 0}/100`, "data-tsd-source": "/src/routes/leaderboard.tsx:108:11" })
    ] })
  ] }) });
}
__name(LeaderboardPage, "LeaderboardPage");
__name2(LeaderboardPage, "LeaderboardPage");
function Card({
  icon: Icon,
  title,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", "data-tsd-source": "/src/routes/leaderboard.tsx:117:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/leaderboard.tsx:118:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/leaderboard.tsx:119:9" }),
      " ",
      title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold mt-1", "data-tsd-source": "/src/routes/leaderboard.tsx:121:7", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/leaderboard.tsx:122:7", children: sub })
  ] });
}
__name(Card, "Card");
__name2(Card, "Card");
export {
  LeaderboardPage as component
};
