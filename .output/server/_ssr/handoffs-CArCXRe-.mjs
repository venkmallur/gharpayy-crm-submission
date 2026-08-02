var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, a5 as ClientOnly } from "./AppShell-BN067m2r.mjs";
import { u as useApp, k as Button } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { H as MessageSquare, g as TriangleAlert, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function HandoffsPage() {
  const {
    handoffs,
    leads,
    tcms,
    role,
    currentTcmId,
    selectLead,
    markHandoffsRead
  } = useApp();
  const grouped = reactExports.useMemo(() => {
    const byLead = /* @__PURE__ */ new Map();
    for (const h of handoffs) {
      const arr = byLead.get(h.leadId) ?? [];
      arr.push(h);
      byLead.set(h.leadId, arr);
    }
    return Array.from(byLead.entries()).map(([leadId, msgs]) => {
      const sorted = [...msgs].sort((a, b) => +new Date(b.ts) - +new Date(a.ts));
      const last = sorted[0];
      const unread = sorted.filter((m) => !m.read && m.to === role).length;
      const hasUrgent = sorted.some((m) => m.priority === "urgent" && !m.read);
      return {
        leadId,
        msgs: sorted,
        last,
        unread,
        hasUrgent
      };
    }).sort((a, b) => {
      if (a.unread !== b.unread) return b.unread - a.unread;
      return +new Date(b.last.ts) - +new Date(a.last.ts);
    });
  }, [handoffs, role]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/handoffs.tsx:46:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/handoffs.tsx:47:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/handoffs.tsx:48:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-semibold tracking-tight inline-flex items-center gap-2", "data-tsd-source": "/src/routes/handoffs.tsx:49:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6 text-accent", "data-tsd-source": "/src/routes/handoffs.tsx:50:13" }),
        " Handoffs"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/handoffs.tsx:52:11", children: "FlowOps qualifies and routes. TCM closes. Both sides stay in sync here — every lead, in real time." })
    ] }),
    grouped.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-12 text-center", "data-tsd-source": "/src/routes/handoffs.tsx:58:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2", "data-tsd-source": "/src/routes/handoffs.tsx:59:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", "data-tsd-source": "/src/routes/handoffs.tsx:60:13", children: "No handoffs yet." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/routes/handoffs.tsx:61:13", children: "When FlowOps routes a lead or a TCM updates one, it appears here." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden divide-y divide-border", "data-tsd-source": "/src/routes/handoffs.tsx:64:11", children: grouped.map(({
      leadId,
      msgs,
      last,
      unread,
      hasUrgent
    }) => {
      const lead = leads.find((l) => l.id === leadId);
      if (!lead) return null;
      const fromLabel = last.from === "flow-ops" ? "Flow Ops" : last.from === "tcm" ? tcms.find((t) => t.id === last.fromId)?.name ?? "TCM" : "HR";
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-4 py-3 hover:bg-muted/30 transition-colors ${hasUrgent ? "bg-destructive/5" : ""}`, "data-tsd-source": "/src/routes/handoffs.tsx:74:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", "data-tsd-source": "/src/routes/handoffs.tsx:78:19", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/routes/handoffs.tsx:79:21", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/routes/handoffs.tsx:80:23", children: [
            hasUrgent && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-destructive", "data-tsd-source": "/src/routes/handoffs.tsx:81:39" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", "data-tsd-source": "/src/routes/handoffs.tsx:82:25", children: lead.name }),
            unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center rounded-full bg-accent text-accent-foreground px-1.5 py-0 text-[10px] font-mono", "data-tsd-source": "/src/routes/handoffs.tsx:84:27", children: [
              unread,
              " new"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/handoffs.tsx:88:25", children: [
              "· ",
              msgs.length,
              " msg",
              msgs.length === 1 ? "" : "s"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-1 inline-flex items-center gap-1", "data-tsd-source": "/src/routes/handoffs.tsx:90:23", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/routes/handoffs.tsx:91:25", children: fromLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/routes/handoffs.tsx:92:25" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/routes/handoffs.tsx:93:25", children: last.to === "flow-ops" ? "Flow Ops" : last.to === "tcm" ? "TCM" : "HR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { suppressHydrationWarning: true, children: "· …" }), "data-tsd-source": "/src/routes/handoffs.tsx:94:25", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/routes/handoffs.tsx:95:27", children: [
              "· ",
              format(new Date(last.ts), "MMM d, p")
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1.5 line-clamp-2", "data-tsd-source": "/src/routes/handoffs.tsx:98:23", children: last.text })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => {
          selectLead(leadId);
          markHandoffsRead(leadId);
        }, "onClick"), "data-tsd-source": "/src/routes/handoffs.tsx:100:21", children: "Open" })
      ] }) }, leadId);
    }) })
  ] }) });
}
__name(HandoffsPage, "HandoffsPage");
__name2(HandoffsPage, "HandoffsPage");
export {
  HandoffsPage as component
};
