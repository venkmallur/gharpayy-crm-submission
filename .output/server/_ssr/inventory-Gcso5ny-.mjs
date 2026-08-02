var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { an as useOwner } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { B as Building2, K as MapPin } from "../_libs/lucide-react.mjs";

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
function OwnerInventory() {
  const { owners, currentOwnerId, properties } = useOwner();
  const owner = owners.find((o) => o.id === currentOwnerId) ?? owners[0];
  const myProps = properties.filter((p) => owner.propertyIds.includes(p.id));
  const masked = /* @__PURE__ */ __name2((name) => {
    if (!name) return "Property";
    const t = name.trim();
    if (t.length <= 4) return t.toUpperCase();
    return `${t.slice(0, 2).toUpperCase()}•••${t.slice(-2).toUpperCase()}`;
  }, "masked");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:22:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:23:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-warning font-semibold mb-1", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:24:9", children: "Owner Portal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:25:9", children: "My Inventory" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:26:9", children: "Your properties listed in the Gharpayy network. Names are masked for privacy when shared externally. Pricing, occupancy and pitch tools are managed by the Gharpayy team." })
    ] }),
    myProps.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-dashed bg-card p-8 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:33:9", children: "No properties linked to this owner profile yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:37:9", children: myProps.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-5", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:39:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:40:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-md bg-warning/15 flex items-center justify-center shrink-0", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:41:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-warning", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:42:19" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:44:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:45:19", children: "Listed as" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold truncate", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:46:19", children: masked(p.name) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-start gap-1 text-xs text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:47:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 mt-0.5 shrink-0", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:48:21" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:49:21", children: [
              p.area,
              p.address ? ` · ${p.address}` : ""
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2 text-[11px]", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:53:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border bg-muted/20 px-2 py-1.5", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:54:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:55:19", children: "Zone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:56:19", children: p.area || "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border bg-muted/20 px-2 py-1.5", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:58:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:59:19", children: "Internal ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5 font-mono", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:60:19", children: p.id })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[11px] text-muted-foreground italic", "data-tsd-source": "/src/owner/pages/OwnerInventory.tsx:63:15", children: "For pricing, occupancy or visit details, contact your Gharpayy account manager." })
    ] }, p.id)) })
  ] });
}
__name(OwnerInventory, "OwnerInventory");
__name2(OwnerInventory, "OwnerInventory");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/inventory.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerInventory, { "data-tsd-source": "/src/routes/owner/inventory.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
