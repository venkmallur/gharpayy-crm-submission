var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { aB as useAppState } from "./router-Cbs6ivkN.mjs";
import { T as TourCard } from "./TourCard-BGYoXAYm.mjs";
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
import "./ConfidenceBar-BgNYID_K.mjs";
import "./StatusBadge-32s-nzQB.mjs";
import "./LeadControlPanel-CV2ddxDl.mjs";
import "./slider-rDMznnl4.mjs";
import "../_libs/radix-ui__react-slider.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const intentRank = { hard: 0, medium: 1, soft: 2 };
function TCMActions() {
  const { tours, setTours, currentMemberId } = useAppState();
  const myTours = currentMemberId ? tours.filter((t) => t.assignedTo === currentMemberId) : tours.filter((t) => t.assignedTo === "m5" || t.assignedTo === "m6");
  const sortByIntent = /* @__PURE__ */ __name2((list) => [...list].sort((a, b) => intentRank[a.intent] - intentRank[b.intent] || a.tourTime.localeCompare(b.tourTime)), "sortByIntent");
  const toConfirm = sortByIntent(myTours.filter((t) => t.status === "scheduled"));
  const missed = sortByIntent(myTours.filter((t) => t.status === "no-show"));
  const needsOutcome = sortByIntent(myTours.filter((t) => t.status === "completed" && !t.outcome));
  const draftPush = sortByIntent(myTours.filter((t) => t.outcome === "draft"));
  const updateTour = /* @__PURE__ */ __name2((id, updates) => {
    setTours((prev) => prev.map((t) => t.id === id ? { ...t, ...updates } : t));
  }, "updateTour");
  const total = toConfirm.length + missed.length + needsOutcome.length + draftPush.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:28:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TCMActions.tsx:29:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:30:9", children: "Action Queue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:31:9", children: "Hard intent surfaced first — fight for the highest-conversion tours" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📞 Confirm Attendance", count: toConfirm.length, color: "text-primary", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:34:7", children: toConfirm.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, variant: "compact", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:35:29" }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "❌ Missed — Follow Up", count: missed.length, color: "text-danger", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:38:7", children: missed.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, variant: "compact", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:39:26" }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📝 Update Outcome", count: needsOutcome.length, color: "text-role-hr", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:42:7", children: needsOutcome.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, variant: "compact", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:43:32" }, t.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "📄 Push Draft Agreement", count: draftPush.length, color: "text-role-hr", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:46:7", children: draftPush.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TourCard, { tour: t, onUpdate: updateTour, variant: "compact", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:47:29" }, t.id)) }),
    total === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:51:9", children: "All caught up! 🎉" })
  ] });
}
__name(TCMActions, "TCMActions");
__name2(TCMActions, "TCMActions");
function Section({ title, count, color, children }) {
  if (count === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:60:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:61:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-heading font-semibold text-xs md:text-sm ${color}`, "data-tsd-source": "/src/myt/pages/TCMActions.tsx:62:9", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:63:9", children: [
        "(",
        count,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 md:grid-cols-2", "data-tsd-source": "/src/myt/pages/TCMActions.tsx:65:7", children })
  ] });
}
__name(Section, "Section");
__name2(Section, "Section");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/tcm.actions.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TCMActions, { "data-tsd-source": "/src/routes/myt/tcm.actions.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
