var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { L as Link } from "./react-router-dom-DTg4HJ59.mjs";
import { aB as useAppState, a as useSettings, aM as useTourData, C as Card, ap as CardHeader, aq as CardTitle, ao as CardContent } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";

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
function InventoryFeedback() {
  const { tours } = useAppState();
  const { settings } = useSettings();
  const { reports, feedback } = useTourData();
  const aggregates = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    tours.forEach((t) => {
      const cur = m.get(t.propertyName) ?? {
        name: t.propertyName,
        area: t.area,
        tours: 0,
        bookings: 0,
        conv: 0,
        objections: /* @__PURE__ */ new Map()
      };
      cur.tours += 1;
      const r = reports[t.id];
      const f = feedback[t.id];
      if (r?.outcome === "booked" || t.tokenPaid) cur.bookings += 1;
      if (r?.firstObjection) cur.objections.set(r.firstObjection, (cur.objections.get(r.firstObjection) ?? 0) + 1);
      if (f?.comment) {
        const c = f.comment.toLowerCase();
        ["expensive", "small", "location", "food", "noisy", "dirty"].forEach((kw) => {
          if (c.includes(kw)) cur.objections.set(kw, (cur.objections.get(kw) ?? 0) + 1);
        });
      }
      cur.conv = cur.tours ? cur.bookings / cur.tours : 0;
      m.set(t.propertyName, cur);
    });
    const arr = Array.from(m.values()).map((p) => {
      const top = Array.from(p.objections.entries()).sort((a, b) => b[1] - a[1])[0];
      return { ...p, topObjection: top ? `${top[0]} (${top[1]})` : void 0 };
    });
    return arr;
  }, [tours, reports, feedback]);
  const dead = aggregates.filter((p) => p.tours >= 3 && p.conv === 0).sort((a, b) => b.tours - a.tours);
  const winners = aggregates.filter((p) => p.tours <= 5 && p.bookings >= 1).sort((a, b) => b.conv - a.conv);
  const ranked = [...aggregates].sort((a, b) => b.conv - a.conv);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-6xl mx-auto", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:61:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:62:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:63:9", children: "Inventory Feedback Loop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:64:9", children: "Self-optimizing supply: which inventory closes vs wastes time, with the real reason." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:67:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:68:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:69:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:69:23", children: "⚰️ Dead inventory (≥3 tours, 0 conversion)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:70:11", children: dead.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:72:15", children: "No dead inventory yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:74:15", children: dead.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-center justify-between border-b py-1.5 last:border-0", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:76:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:77:21", children: [
            p.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:77:36", children: [
              "· ",
              p.area
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:78:21", children: [
            p.tours,
            " tours · ",
            p.topObjection ?? "no signal"
          ] })
        ] }, p.name)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:86:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:87:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:87:23", children: "💎 Hidden winners (low tours, high conv)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:88:11", children: winners.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:90:15", children: "No hidden winners yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:92:15", children: winners.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex items-center justify-between border-b py-1.5 last:border-0", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:94:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:95:21", children: [
            p.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:95:36", children: [
              "· ",
              p.area
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:96:21", children: [
            p.bookings,
            "/",
            p.tours,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-500", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:96:70", children: [
              "(",
              Math.round(p.conv * 100),
              "%)"
            ] })
          ] })
        ] }, p.name)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:105:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:106:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:106:21", children: "All properties — conversion ranking" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:107:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:108:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:109:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:110:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:111:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:112:19", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:113:19", children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:114:19", children: "Tours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:115:19", children: "Bookings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:116:19", children: "Conv %" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pl-4", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:117:19", children: "Top objection" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:120:15", children: ranked.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:122:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:123:21", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:124:21", children: p.area }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 text-right tabular-nums", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:125:21", children: p.tours }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 text-right tabular-nums", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:126:21", children: p.bookings }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 text-right tabular-nums", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:127:21", children: [
            Math.round(p.conv * 100),
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pl-4 text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:128:21", children: p.topObjection ?? "—" })
        ] }, p.name)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:137:7", children: [
      "Edit objection tags & add custom properties in ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/myt/settings", className: "underline", "data-tsd-source": "/src/myt/pages/InventoryFeedback.tsx:138:56", children: "Settings" }),
      "."
    ] })
  ] });
}
__name(InventoryFeedback, "InventoryFeedback");
__name2(InventoryFeedback, "InventoryFeedback");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/inventory-feedback.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InventoryFeedback, { "data-tsd-source": "/src/routes/myt/inventory-feedback.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
