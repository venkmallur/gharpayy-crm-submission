var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, a as SEQUENCES, e as evaluateSequence } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, c as useMountedNow, k as Button } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { S as Sparkles, ap as Play, ao as Pause, X, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as formatDistanceToNow } from "../_libs/date-fns.mjs";
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
function SequencesPage() {
  const {
    sequences,
    leads,
    toggleSequencePause,
    stopSequence,
    selectLead
  } = useApp();
  const [now, mounted] = useMountedNow(6e4);
  const active = reactExports.useMemo(() => sequences.filter((s) => !s.stoppedReason), [sequences]);
  const stopped = reactExports.useMemo(() => sequences.filter((s) => !!s.stoppedReason), [sequences]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/sequences.tsx:30:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/sequences.tsx:31:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/sequences.tsx:32:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-semibold tracking-tight inline-flex items-center gap-2", "data-tsd-source": "/src/routes/sequences.tsx:33:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-info", "data-tsd-source": "/src/routes/sequences.tsx:34:13" }),
        " Sequences"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/sequences.tsx:36:11", children: [
        active.length,
        " active · ",
        stopped.length,
        " stopped. Auto-paused on reply, auto-stopped on booking or drop."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/sequences.tsx:42:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center gap-2 px-4 py-3 border-b border-border", "data-tsd-source": "/src/routes/sequences.tsx:43:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-info animate-pulse", "data-tsd-source": "/src/routes/sequences.tsx:44:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/sequences.tsx:45:13", children: "Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground", "data-tsd-source": "/src/routes/sequences.tsx:46:13", children: active.length })
      ] }),
      active.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/routes/sequences.tsx:49:13", children: "No active sequences. Start one from any lead's Control panel." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", "data-tsd-source": "/src/routes/sequences.tsx:53:13", children: active.map((seq) => {
        const lead = leads.find((l) => l.id === seq.leadId);
        if (!lead) return null;
        const def = SEQUENCES[seq.kind];
        const state = mounted ? evaluateSequence(seq, now) : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 grid grid-cols-12 gap-3 items-center hover:bg-muted/30 transition-colors", "data-tsd-source": "/src/routes/sequences.tsx:60:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "col-span-3 text-left min-w-0", "data-tsd-source": "/src/routes/sequences.tsx:61:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm truncate", "data-tsd-source": "/src/routes/sequences.tsx:62:23", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/routes/sequences.tsx:63:23", children: [
              lead.preferredArea,
              " · ",
              lead.phone
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", "data-tsd-source": "/src/routes/sequences.tsx:65:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium", "data-tsd-source": "/src/routes/sequences.tsx:66:23", children: def.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-muted-foreground", "data-tsd-source": "/src/routes/sequences.tsx:67:23", children: [
              "step ",
              seq.currentStep + 1,
              "/",
              def.steps.length
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", "data-tsd-source": "/src/routes/sequences.tsx:69:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", "data-tsd-source": "/src/routes/sequences.tsx:70:23", children: def.steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1 flex-1 rounded-full ${i <= seq.currentStep ? "bg-info" : "bg-muted"}`, title: s.label, "data-tsd-source": "/src/routes/sequences.tsx:72:27" }, i)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-[11px] text-muted-foreground min-h-[1em]", "data-tsd-source": "/src/routes/sequences.tsx:76:21", children: state?.nextStep ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Next ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", "data-tsd-source": "/src/routes/sequences.tsx:78:34", children: state.nextStep.label }),
            " ",
            state.nextAtMs && mounted ? formatDistanceToNow(new Date(state.nextAtMs), {
              addSuffix: true
            }) : "soon"
          ] }) : "Awaiting reply" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex items-center justify-end gap-1", "data-tsd-source": "/src/routes/sequences.tsx:81:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7", onClick: /* @__PURE__ */ __name2(() => {
              toggleSequencePause(seq.leadId);
              toast.success(seq.paused ? "Resumed" : "Paused");
            }, "onClick"), title: seq.paused ? "Resume" : "Pause", "data-tsd-source": "/src/routes/sequences.tsx:82:23", children: seq.paused ? /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/sequences.tsx:85:39" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/sequences.tsx:85:74" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7", onClick: /* @__PURE__ */ __name2(() => {
              stopSequence(seq.leadId, "Stopped from console");
              toast.success("Stopped");
            }, "onClick"), title: "Stop", "data-tsd-source": "/src/routes/sequences.tsx:87:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/sequences.tsx:90:25" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7", onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), title: "Open lead", "data-tsd-source": "/src/routes/sequences.tsx:92:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/sequences.tsx:94:25" }) })
          ] })
        ] }, seq.id);
      }) })
    ] }),
    stopped.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/sequences.tsx:106:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center gap-2 px-4 py-3 border-b border-border", "data-tsd-source": "/src/routes/sequences.tsx:107:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold text-muted-foreground", "data-tsd-source": "/src/routes/sequences.tsx:108:15", children: "Recently stopped" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground", "data-tsd-source": "/src/routes/sequences.tsx:109:15", children: stopped.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", "data-tsd-source": "/src/routes/sequences.tsx:111:13", children: stopped.slice(0, 10).map((seq) => {
        const lead = leads.find((l) => l.id === seq.leadId);
        if (!lead) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "w-full text-left px-4 py-2.5 flex items-center justify-between hover:bg-muted/30 transition-colors", "data-tsd-source": "/src/routes/sequences.tsx:116:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/sequences.tsx:117:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", "data-tsd-source": "/src/routes/sequences.tsx:118:23", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/sequences.tsx:119:23", children: [
              SEQUENCES[seq.kind].name,
              " · ",
              seq.stoppedReason
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0", "data-tsd-source": "/src/routes/sequences.tsx:121:21" })
        ] }, seq.id);
      }) })
    ] })
  ] }) });
}
__name(SequencesPage, "SequencesPage");
__name2(SequencesPage, "SequencesPage");
export {
  SequencesPage as component
};
