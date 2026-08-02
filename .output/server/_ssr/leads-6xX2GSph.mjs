var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, S as StageBadge, I as IntentChip, C as ConfidenceBar } from "./AppShell-BN067m2r.mjs";
import { u as useApp, c as useMountedNow, X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { a as formatDistanceToNow } from "../_libs/date-fns.mjs";

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
import "../_libs/lucide-react.mjs";
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
function LeadsPage() {
  const {
    leads,
    tcms,
    selectLead
  } = useApp();
  const [, mounted] = useMountedNow();
  const [q, setQ] = reactExports.useState("");
  const [stage, setStage] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("confidence");
  const filtered = reactExports.useMemo(() => {
    const list = leads.filter((l) => {
      if (q && !l.name.toLowerCase().includes(q.toLowerCase()) && !l.phone.includes(q)) return false;
      if (stage !== "all" && l.stage !== stage) return false;
      return true;
    });
    list.sort((a, b) => {
      if (sortBy === "confidence") return b.confidence - a.confidence;
      if (sortBy === "moveIn") return +new Date(a.moveInDate) - +new Date(b.moveInDate);
      return +new Date(b.updatedAt) - +new Date(a.updatedAt);
    });
    return list;
  }, [leads, q, stage, sortBy]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/leads.tsx:41:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/routes/leads.tsx:42:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-3", "data-tsd-source": "/src/routes/leads.tsx:43:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/leads.tsx:44:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/leads.tsx:45:13", children: "Leads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/routes/leads.tsx:46:13", children: [
          filtered.length,
          " of ",
          leads.length,
          " · ranked by deal probability"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/routes/leads.tsx:48:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"), placeholder: "Search name or phone…", className: "h-9 w-56 text-sm", "data-tsd-source": "/src/routes/leads.tsx:49:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: stage, onValueChange: setStage, "data-tsd-source": "/src/routes/leads.tsx:50:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-44 text-sm", "data-tsd-source": "/src/routes/leads.tsx:51:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/routes/leads.tsx:51:59" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/routes/leads.tsx:52:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", "data-tsd-source": "/src/routes/leads.tsx:53:17", children: "All stages" }),
            ["new", "contacted", "tour-scheduled", "tour-done", "negotiation", "booked", "dropped"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, className: "capitalize", "data-tsd-source": "/src/routes/leads.tsx:55:19", children: s.replace("-", " ") }, s))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sortBy, onValueChange: /* @__PURE__ */ __name2((v) => setSortBy(v), "onValueChange"), "data-tsd-source": "/src/routes/leads.tsx:59:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-44 text-sm", "data-tsd-source": "/src/routes/leads.tsx:60:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/routes/leads.tsx:60:59" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/routes/leads.tsx:61:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "confidence", "data-tsd-source": "/src/routes/leads.tsx:62:17", children: "Sort: Confidence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "moveIn", "data-tsd-source": "/src/routes/leads.tsx:63:17", children: "Sort: Move-in date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "updated", "data-tsd-source": "/src/routes/leads.tsx:64:17", children: "Sort: Last updated" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/leads.tsx:70:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 px-4 py-2 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold border-b border-border bg-muted/40", "data-tsd-source": "/src/routes/leads.tsx:71:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", "data-tsd-source": "/src/routes/leads.tsx:72:13", children: "Lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", "data-tsd-source": "/src/routes/leads.tsx:73:13", children: "Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", "data-tsd-source": "/src/routes/leads.tsx:74:13", children: "Intent · score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", "data-tsd-source": "/src/routes/leads.tsx:75:13", children: "Area · budget" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", "data-tsd-source": "/src/routes/leads.tsx:76:13", children: "Assigned" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-right", "data-tsd-source": "/src/routes/leads.tsx:77:13", children: "Updated" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-border", "data-tsd-source": "/src/routes/leads.tsx:79:11", children: [
        filtered.map((l) => {
          const tcm = tcms.find((t) => t.id === l.assignedTcmId);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/routes/leads.tsx:83:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(l.id), "onClick"), className: "w-full text-left grid grid-cols-12 px-4 py-3 items-center hover:bg-accent/5 transition-colors", "data-tsd-source": "/src/routes/leads.tsx:84:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", "data-tsd-source": "/src/routes/leads.tsx:88:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", "data-tsd-source": "/src/routes/leads.tsx:89:23", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/leads.tsx:90:23", children: [
                l.phone,
                " · ",
                l.source
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", "data-tsd-source": "/src/routes/leads.tsx:92:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { stage: l.stage, "data-tsd-source": "/src/routes/leads.tsx:92:49" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex items-center gap-2", "data-tsd-source": "/src/routes/leads.tsx:93:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IntentChip, { intent: l.intent, "data-tsd-source": "/src/routes/leads.tsx:94:23" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { value: l.confidence, "data-tsd-source": "/src/routes/leads.tsx:95:23" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-xs", "data-tsd-source": "/src/routes/leads.tsx:97:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/routes/leads.tsx:98:23", children: l.preferredArea }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/leads.tsx:99:23", children: [
                "₹",
                (l.budget / 1e3).toFixed(0),
                "k"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-xs", "data-tsd-source": "/src/routes/leads.tsx:101:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/routes/leads.tsx:102:23", children: tcm?.name ?? "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/leads.tsx:103:23", children: tcm?.zone ?? "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-right text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/leads.tsx:105:21", children: mounted ? formatDistanceToNow(new Date(l.updatedAt), {
              addSuffix: true
            }) : "—" })
          ] }) }, l.id);
        }),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-sm text-muted-foreground", "data-tsd-source": "/src/routes/leads.tsx:113:15", children: "No leads match." })
      ] })
    ] })
  ] }) });
}
__name(LeadsPage, "LeadsPage");
__name2(LeadsPage, "LeadsPage");
export {
  LeadsPage as component
};
