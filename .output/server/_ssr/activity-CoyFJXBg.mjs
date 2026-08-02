var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { u as useApp } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { g as TriangleAlert, P as Phone, H as MessageSquare, k as FileText, l as CircleCheck, y as Calendar, ag as ClipboardCheck, bx as ArrowRightLeft, f as Activity } from "../_libs/lucide-react.mjs";
import { f as format } from "../_libs/date-fns.mjs";

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
const ICON = {
  lead_created: Activity,
  status_changed: ArrowRightLeft,
  tour_scheduled: Calendar,
  tour_completed: CircleCheck,
  tour_cancelled: TriangleAlert,
  decision_logged: FileText,
  post_tour_filled: ClipboardCheck,
  follow_up_set: Calendar,
  follow_up_done: CircleCheck,
  note_added: FileText,
  message_sent: MessageSquare,
  call_logged: Phone,
  escalation: TriangleAlert,
  stale_alert: TriangleAlert
};
function ActivityPage() {
  const {
    activities,
    leads,
    tcms,
    selectLead
  } = useApp();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/activity.tsx:39:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/routes/activity.tsx:40:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/activity.tsx:41:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/activity.tsx:42:11", children: "Activity log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/routes/activity.tsx:43:11", children: "Auto-generated. No manual dependency." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card divide-y divide-border", "data-tsd-source": "/src/routes/activity.tsx:46:9", children: [
      activities.map((a) => {
        const Icon = ICON[a.kind] ?? Activity;
        const lead = a.leadId ? leads.find((l) => l.id === a.leadId) : null;
        const actor = a.actor === "system" ? "system" : tcms.find((t) => t.id === a.actor)?.name ?? a.actor;
        const isAlert = a.kind === "stale_alert" || a.kind === "escalation" || a.kind === "tour_cancelled";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 px-4 py-3 hover:bg-accent/5 transition-colors", "data-tsd-source": "/src/routes/activity.tsx:53:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-7 w-7 rounded-md flex items-center justify-center shrink-0 ${isAlert ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`, "data-tsd-source": "/src/routes/activity.tsx:54:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/activity.tsx:55:19" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/routes/activity.tsx:57:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", "data-tsd-source": "/src/routes/activity.tsx:58:19", children: a.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/activity.tsx:59:19", children: [
              format(new Date(a.ts), "MMM d, p"),
              " · ",
              actor,
              lead && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                " · ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "text-accent hover:underline", "data-tsd-source": "/src/routes/activity.tsx:64:25", children: lead.name })
              ] })
            ] })
          ] })
        ] }, a.id);
      }),
      activities.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-12 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/routes/activity.tsx:75:13", children: "No activity yet." })
    ] })
  ] }) });
}
__name(ActivityPage, "ActivityPage");
__name2(ActivityPage, "ActivityPage");
export {
  ActivityPage as component
};
