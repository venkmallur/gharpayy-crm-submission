var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, I as IntentChip, C as ConfidenceBar } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, c as useMountedNow, k as Button } from "./router-Cbs6ivkN.mjs";
import { s as scanRevivals } from "./revival-C7pAIsNe.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { S as Sparkles, ac as Send, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function RevivalPage() {
  const {
    leads,
    properties,
    tours,
    sendMessage,
    startSequence,
    selectLead
  } = useApp();
  const [now] = useMountedNow();
  const candidates = reactExports.useMemo(() => scanRevivals(leads, properties, tours, now), [leads, properties, tours, now]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/revival.tsx:31:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/revival.tsx:32:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/revival.tsx:33:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-semibold tracking-tight inline-flex items-center gap-2", "data-tsd-source": "/src/routes/revival.tsx:34:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-info", "data-tsd-source": "/src/routes/revival.tsx:35:13" }),
        " Revival queue"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/revival.tsx:37:11", children: [
        candidates.length,
        " hidden opportunit",
        candidates.length === 1 ? "y" : "ies",
        " — silent leads, cold matches, and now-resolvable objections."
      ] })
    ] }),
    candidates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-12 text-center", "data-tsd-source": "/src/routes/revival.tsx:43:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2", "data-tsd-source": "/src/routes/revival.tsx:44:13" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", "data-tsd-source": "/src/routes/revival.tsx:45:13", children: "No revival candidates." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/routes/revival.tsx:46:13", children: "All leads are active or properly closed." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden divide-y divide-border", "data-tsd-source": "/src/routes/revival.tsx:49:11", children: candidates.map((c) => {
      const lead = leads.find((l) => l.id === c.leadId);
      if (!lead) return null;
      const signalCfg = {
        "hot-silent": {
          label: "Hot · silent",
          cls: "bg-destructive/10 text-destructive border-destructive/20"
        },
        "cold-match": {
          label: "Inventory match",
          cls: "bg-info/10 text-info border-info/20"
        },
        "objection-resolved": {
          label: "Objection cleared",
          cls: "bg-success/10 text-success border-success/20"
        }
      }[c.signal];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors", "data-tsd-source": "/src/routes/revival.tsx:59:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "flex-1 min-w-0 text-left", "data-tsd-source": "/src/routes/revival.tsx:60:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/routes/revival.tsx:61:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", "data-tsd-source": "/src/routes/revival.tsx:62:23", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(IntentChip, { intent: lead.intent, "data-tsd-source": "/src/routes/revival.tsx:63:23" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-md border px-1.5 py-0.5 text-[10px] font-medium ${signalCfg.cls}`, "data-tsd-source": "/src/routes/revival.tsx:64:23", children: signalCfg.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/revival.tsx:68:21", children: c.reason })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { value: lead.confidence, "data-tsd-source": "/src/routes/revival.tsx:70:19" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-muted-foreground w-12 text-right", "data-tsd-source": "/src/routes/revival.tsx:71:19", children: [
          "score ",
          c.score
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => {
          sendMessage(lead.id, "Revival template sent");
          startSequence(lead.id, "cold-revival");
          toast.success(`Revival sequence started · ${lead.name}`);
        }, "onClick"), "data-tsd-source": "/src/routes/revival.tsx:72:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5 mr-1.5", "data-tsd-source": "/src/routes/revival.tsx:80:21" }),
          " Re-engage"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), "data-tsd-source": "/src/routes/revival.tsx:82:19", children: [
          "Open ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 ml-1", "data-tsd-source": "/src/routes/revival.tsx:83:26" })
        ] })
      ] }, c.leadId);
    }) })
  ] }) });
}
__name(RevivalPage, "RevivalPage");
__name2(RevivalPage, "RevivalPage");
export {
  RevivalPage as component
};
