var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, c as useMountedNow, B as Badge } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { g as TriangleAlert, s as Clock, l as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as isPast, b as isToday, f as format } from "../_libs/date-fns.mjs";
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
function ToursPage() {
  const {
    tours,
    leads,
    properties,
    tcms,
    selectLead
  } = useApp();
  const [now, mounted] = useMountedNow();
  const sorted = [...tours].sort((a, b) => +new Date(b.scheduledAt) - +new Date(a.scheduledAt));
  const upcoming = sorted.filter((t) => t.status === "scheduled");
  const completed = sorted.filter((t) => t.status === "completed");
  const incomplete = completed.filter((t) => !t.postTour.filledAt);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/tours.tsx:27:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/tours.tsx:28:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-start gap-3", "data-tsd-source": "/src/routes/tours.tsx:29:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/tours.tsx:30:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/tours.tsx:31:13", children: "Tours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/routes/tours.tsx:32:13", children: [
          upcoming.length,
          " upcoming · ",
          completed.length,
          " completed · ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-destructive font-medium", "data-tsd-source": "/src/routes/tours.tsx:33:75", children: [
            incomplete.length,
            " pending post-tour"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/live-visit", className: "ml-auto inline-flex items-center gap-1.5 rounded-lg border border-success/40 bg-success/10 px-3 py-1.5 text-xs font-medium text-success hover:bg-success/15", "data-tsd-source": "/src/routes/tours.tsx:36:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", "data-tsd-source": "/src/routes/tours.tsx:40:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute h-full w-full rounded-full bg-success/60", "data-tsd-source": "/src/routes/tours.tsx:41:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative h-2 w-2 rounded-full bg-success", "data-tsd-source": "/src/routes/tours.tsx:42:15" })
        ] }),
        "Open Live Visit War Room"
      ] })
    ] }),
    incomplete.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Post-tour enforcement", tone: "destructive", icon: TriangleAlert, "data-tsd-source": "/src/routes/tours.tsx:49:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", "data-tsd-source": "/src/routes/tours.tsx:50:13", children: incomplete.map((t) => {
      const lead = leads.find((l) => l.id === t.leadId);
      const prop = properties.find((p) => p.id === t.propertyId);
      const tcm = tcms.find((x) => x.id === t.tcmId);
      if (!lead) return null;
      const hours = mounted ? Math.round((now - +new Date(t.scheduledAt)) / 36e5) : null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "text-left rounded-lg border border-destructive/30 bg-destructive/5 p-3 hover:bg-destructive/10 transition-colors", "data-tsd-source": "/src/routes/tours.tsx:58:19", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/tours.tsx:62:21", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", "data-tsd-source": "/src/routes/tours.tsx:63:23", children: lead.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] border-destructive/40 text-destructive", "data-tsd-source": "/src/routes/tours.tsx:64:23", children: hours === null ? "Overdue" : `${hours}h overdue` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/tours.tsx:68:21", children: [
          prop?.name,
          " · ",
          tcm?.name
        ] })
      ] }, t.id);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Upcoming tours", icon: Clock, "data-tsd-source": "/src/routes/tours.tsx:76:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TourList, { tours: upcoming, "data-tsd-source": "/src/routes/tours.tsx:77:11" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Completed", icon: CircleCheck, "data-tsd-source": "/src/routes/tours.tsx:80:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TourList, { tours: completed, "data-tsd-source": "/src/routes/tours.tsx:81:11" }) })
  ] }) });
}
__name(ToursPage, "ToursPage");
__name2(ToursPage, "ToursPage");
function Section({
  title,
  icon: Icon,
  tone = "default",
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-tsd-source": "/src/routes/tours.tsx:94:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", "data-tsd-source": "/src/routes/tours.tsx:95:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${tone === "destructive" ? "text-destructive" : "text-muted-foreground"}`, "data-tsd-source": "/src/routes/tours.tsx:96:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/routes/tours.tsx:97:9", children: title })
    ] }),
    children
  ] });
}
__name(Section, "Section");
__name2(Section, "Section");
function TourList({
  tours
}) {
  const {
    leads,
    properties,
    tcms,
    selectLead
  } = useApp();
  if (tours.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted-foreground", "data-tsd-source": "/src/routes/tours.tsx:107:12", children: "No tours." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden divide-y divide-border", "data-tsd-source": "/src/routes/tours.tsx:110:5", children: tours.map((t) => {
    const lead = leads.find((l) => l.id === t.leadId);
    const prop = properties.find((p) => p.id === t.propertyId);
    const tcm = tcms.find((x) => x.id === t.tcmId);
    if (!lead) return null;
    const when = new Date(t.scheduledAt);
    const overdue = t.status === "scheduled" && isPast(when) && !isToday(when);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "w-full text-left grid grid-cols-12 px-4 py-3 items-center hover:bg-accent/5 transition-colors", "data-tsd-source": "/src/routes/tours.tsx:119:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", "data-tsd-source": "/src/routes/tours.tsx:123:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", "data-tsd-source": "/src/routes/tours.tsx:124:15", children: lead.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/tours.tsx:125:15", children: lead.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 text-xs", "data-tsd-source": "/src/routes/tours.tsx:127:13", children: prop?.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-xs", "data-tsd-source": "/src/routes/tours.tsx:128:13", children: tcm?.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-xs font-mono", "data-tsd-source": "/src/routes/tours.tsx:129:13", children: format(when, "MMM d, p") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex items-center gap-1.5 justify-end", "data-tsd-source": "/src/routes/tours.tsx:130:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize text-[10px]", "data-tsd-source": "/src/routes/tours.tsx:131:15", children: t.status }),
        t.decision && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize text-[10px]", "data-tsd-source": "/src/routes/tours.tsx:132:30", children: t.decision }),
        overdue && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] border-destructive/40 text-destructive", "data-tsd-source": "/src/routes/tours.tsx:133:27", children: "Late" }),
        t.status === "completed" && !t.postTour.filledAt && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] border-destructive/40 text-destructive", "data-tsd-source": "/src/routes/tours.tsx:135:17", children: "Form" })
      ] })
    ] }, t.id);
  }) });
}
__name(TourList, "TourList");
__name2(TourList, "TourList");
export {
  ToursPage as component
};
