var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { aB as useAppState, aJ as getMemberPerformance, q as cn } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bT as ArrowDown, A as ArrowRight } from "../_libs/lucide-react.mjs";

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
import "../_libs/date-fns.mjs";
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
function Funnel() {
  const { tours, bookings } = useAppState();
  const scheduled = tours.length;
  const showUps = tours.filter((t) => t.showUp === true).length;
  const drafts = tours.filter((t) => t.outcome === "draft").length;
  const bookingsViaTour = bookings.filter((b) => b.viaTour).length;
  const directBookings = bookings.filter((b) => !b.viaTour).length;
  const steps = [
    { label: "Tours Scheduled", value: scheduled, color: "text-primary" },
    { label: "Show-Ups", value: showUps, color: "text-role-tcm", rate: scheduled > 0 ? Math.round(showUps / scheduled * 100) : 0 },
    { label: "Drafts", value: drafts, color: "text-role-hr", rate: showUps > 0 ? Math.round(drafts / showUps * 100) : 0 },
    { label: "Bookings (via Tour)", value: bookingsViaTour, color: "text-role-tcm", rate: drafts > 0 ? Math.round(bookingsViaTour / drafts * 100) : 0 }
  ];
  const memberPerf = getMemberPerformance(tours);
  const memberBookings = bookings.reduce((acc, b) => {
    acc[b.closedBy] = (acc[b.closedBy] || 0) + 1;
    return acc;
  }, {});
  const memberRent = bookings.reduce((acc, b) => {
    acc[b.closedBy] = (acc[b.closedBy] || 0) + b.rentValue;
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/Funnel.tsx:33:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Funnel.tsx:34:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/Funnel.tsx:35:9", children: "Funnel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/Funnel.tsx:36:9", children: "Full pipeline: Tour → Booking" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 md:p-6", "data-tsd-source": "/src/myt/pages/Funnel.tsx:40:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row items-center gap-2 md:gap-0", "data-tsd-source": "/src/myt/pages/Funnel.tsx:41:9", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-2 w-full md:w-auto", "data-tsd-source": "/src/myt/pages/Funnel.tsx:43:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-4 text-center flex-1 md:flex-none md:min-w-[140px]", "data-tsd-source": "/src/myt/pages/Funnel.tsx:44:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn("text-2xl md:text-3xl font-heading font-bold", step.color), "data-tsd-source": "/src/myt/pages/Funnel.tsx:45:17", children: step.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1", "data-tsd-source": "/src/myt/pages/Funnel.tsx:46:17", children: step.label }),
          step.rate !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Funnel.tsx:48:19", children: [
            "(",
            step.rate,
            "% conv)"
          ] })
        ] }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-5 w-5 text-muted-foreground md:hidden", "data-tsd-source": "/src/myt/pages/Funnel.tsx:53:19" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 text-muted-foreground hidden md:block mx-2", "data-tsd-source": "/src/myt/pages/Funnel.tsx:54:19" })
        ] })
      ] }, step.label)) }),
      directBookings > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-3 border-t border-border", "data-tsd-source": "/src/myt/pages/Funnel.tsx:62:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/Funnel.tsx:63:13", children: [
        "+ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:64:17", children: directBookings }),
        " Direct Bookings (no tour)"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/Funnel.tsx:71:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-foreground", "data-tsd-source": "/src/myt/pages/Funnel.tsx:72:9", children: "Who Is Converting" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-3 px-3 md:mx-0 md:px-0", "data-tsd-source": "/src/myt/pages/Funnel.tsx:73:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs md:text-sm min-w-[500px]", "data-tsd-source": "/src/myt/pages/Funnel.tsx:74:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/Funnel.tsx:75:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", "data-tsd-source": "/src/myt/pages/Funnel.tsx:76:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:77:17", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:78:17", children: "Tours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:79:17", children: "Show%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:80:17", children: "Drafts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:81:17", children: "Bookings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:82:17", children: "Rent" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/Funnel.tsx:85:13", children: memberPerf.filter((m) => m.toursScheduled > 0 || (memberBookings[m.memberId] || 0) > 0).sort((a, b) => (memberBookings[b.memberId] || 0) - (memberBookings[a.memberId] || 0)).slice(0, 15).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", "data-tsd-source": "/src/myt/pages/Funnel.tsx:91:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-foreground font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:92:21", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/Funnel.tsx:93:21", children: m.toursScheduled }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: cn("text-center font-medium", m.showUpRate >= 70 ? "text-role-tcm" : "text-danger"), "data-tsd-source": "/src/myt/pages/Funnel.tsx:94:21", children: [
            m.showUpRate,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-role-hr font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:95:21", children: m.drafts }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center text-foreground font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:96:21", children: memberBookings[m.memberId] || 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-center text-role-tcm font-medium", "data-tsd-source": "/src/myt/pages/Funnel.tsx:97:21", children: [
            "₹",
            (memberRent[m.memberId] || 0).toLocaleString()
          ] })
        ] }, m.memberId)) })
      ] }) })
    ] })
  ] });
}
__name(Funnel, "Funnel");
__name2(Funnel, "Funnel");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/funnel.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { "data-tsd-source": "/src/routes/myt/funnel.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
