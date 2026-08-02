var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { aB as useAppState } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { P as Phone, k as FileText } from "../_libs/lucide-react.mjs";
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
function DraftTracker() {
  const { tours } = useAppState();
  const draftTours = tours.filter((t) => t.outcome === "draft");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:9:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:10:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:11:9", children: "Draft Tracker" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs md:text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:12:9", children: [
        draftTours.length,
        " drafts need rent agreement follow-up"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden space-y-2", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:16:7", children: [
      draftTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 space-y-2", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:18:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:19:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:20:15", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:21:15", children: [
            "₹",
            t.budget.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:23:13", children: [
          t.propertyName,
          " · ",
          t.assignedToName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:24:13", children: t.phone }),
        t.remarks && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground italic", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:25:27", children: [
          '"',
          t.remarks,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:26:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md bg-primary/10 text-primary text-xs font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:27:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:28:17" }),
            " Call"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md bg-hr/10 text-role-hr text-xs font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:30:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:31:17" }),
            " Agreement"
          ] })
        ] })
      ] }, t.id)),
      draftTours.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground py-8", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:36:37", children: "No drafts to track" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block glass-card overflow-hidden", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:40:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:41:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:42:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:43:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground bg-surface-2/50", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:44:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:45:17", children: "Lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:46:17", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:47:17", children: "Property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:48:17", children: "TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:49:17", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:50:17", children: "Budget" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:51:17", children: "Remarks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:52:17", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:55:13", children: draftTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50 hover:bg-accent/30", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:57:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-medium text-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:58:19", children: t.leadName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:59:19", children: t.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:60:19", children: t.propertyName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:61:19", children: t.assignedToName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:62:19", children: t.tourDate }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:63:19", children: [
          "₹",
          t.budget.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:64:19", children: t.remarks || "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:65:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:66:21", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:67:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:67:107" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5 rounded-md bg-hr/10 text-role-hr hover:bg-hr/20", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:68:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/DraftTracker.tsx:68:97" }) })
        ] }) })
      ] }, t.id)) })
    ] }) }) })
  ] });
}
__name(DraftTracker, "DraftTracker");
__name2(DraftTracker, "DraftTracker");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/drafts.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DraftTracker, { "data-tsd-source": "/src/routes/myt/drafts.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
