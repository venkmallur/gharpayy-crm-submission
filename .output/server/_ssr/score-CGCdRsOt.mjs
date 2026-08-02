var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { L as Link } from "./react-router-dom-DTg4HJ59.mjs";
import { aB as useAppState, a as useSettings, aM as useTourData, C as Card, ap as CardHeader, aq as CardTitle, ao as CardContent } from "./router-Cbs6ivkN.mjs";
import { c as computeTourScore } from "./intelligence-4QNz3VbS.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
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
import "../_libs/lucide-react.mjs";
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
function ScoreLeaderboard() {
  const { tours } = useAppState();
  const { settings } = useSettings();
  const { events, feedback, reports } = useTourData();
  const scored = reactExports.useMemo(() => {
    return tours.map((t) => {
      const tourEvents = events.filter((e) => e.tourId === t.id);
      const s = computeTourScore(t, tourEvents, settings.weights, feedback[t.id], reports[t.id]);
      return { tour: t, score: s.total };
    });
  }, [tours, events, feedback, reports, settings.weights]);
  function group(keyFn) {
    const m = /* @__PURE__ */ new Map();
    scored.forEach((r) => {
      const { id, name } = keyFn(r);
      const cur = m.get(id) ?? { name, count: 0, sum: 0 };
      cur.count += 1;
      cur.sum += r.score;
      m.set(id, cur);
    });
    return Array.from(m.entries()).map(([id, v]) => ({ id, ...v, avg: v.count ? Math.round(v.sum / v.count) : 0 })).sort((a, b) => b.avg - a.avg);
  }
  __name(group, "group");
  __name2(group, "group");
  const tcmRanks = group((r) => ({ id: r.tour.assignedTo, name: r.tour.assignedToName }));
  const propRanks = group((r) => ({ id: r.tour.propertyName, name: r.tour.propertyName }));
  const areaRanks = group((r) => ({ id: r.tour.area, name: r.tour.area }));
  function Bars({ rows }) {
    const max = Math.max(1, ...rows.map((r) => r.avg));
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:43:7", children: rows.slice(0, 12).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:45:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 text-sm truncate", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:46:13", children: r.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2 bg-muted rounded overflow-hidden", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:47:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary", style: { width: `${r.avg / max * 100}%` }, "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:48:15" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs tabular-nums w-20 text-right", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:50:13", children: [
        r.avg,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:50:75", children: [
          "(",
          r.count,
          ")"
        ] })
      ] })
    ] }, r.id)) });
  }
  __name(Bars, "Bars");
  __name2(Bars, "Bars");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-6xl mx-auto", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:58:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:59:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:60:9", children: "Tour Score Leaderboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:61:9", children: [
        "Weighted score (configurable in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "underline", to: "/myt/settings", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:61:86", children: "Settings" }),
        ") ranks who actually converts vs who just tours."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-3", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:63:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:64:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:64:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:64:27", children: "TCM ranking" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:64:96", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bars, { rows: tcmRanks, "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:64:109" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:65:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:65:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:65:27", children: "Property ranking" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:65:101", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bars, { rows: propRanks, "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:65:114" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:66:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:66:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:66:27", children: "Area ranking" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:66:97", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bars, { rows: areaRanks, "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:66:110" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:69:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:70:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:70:21", children: "Top scoring tours" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:71:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:72:11", children: [...scored].sort((a, b) => b.score - a.score).slice(0, 20).map(({ tour, score }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/myt/tour/${tour.id}`, className: "flex items-center justify-between py-2 hover:text-primary", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:74:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:75:17", children: [
          tour.leadName,
          " · ",
          tour.propertyName,
          " · ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:75:82", children: tour.assignedToName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold tabular-nums", "data-tsd-source": "/src/myt/pages/ScoreLeaderboard.tsx:76:17", children: score })
      ] }, tour.id)) }) })
    ] })
  ] });
}
__name(ScoreLeaderboard, "ScoreLeaderboard");
__name2(ScoreLeaderboard, "ScoreLeaderboard");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/score.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreLeaderboard, { "data-tsd-source": "/src/routes/myt/score.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
