var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { D as DirectLeadForm, R as RequestAccessSheet } from "./RequestAccessSheet-DVKLP4e0.mjs";
import { T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent } from "./router-xBhBcQRf.mjs";
import { u as useIdentityStore } from "./store-CSrICxO2.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";


import "./index.mjs";

import "../_libs/seroval.mjs";
import { aJ as Shield } from "../_libs/lucide-react.mjs";

import "../_libs/unenv.mjs";




import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
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
import "./audit-log-YJnFAPHk.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function AddLeadPage() {
  const totalLeads = useIdentityStore((s) => s.leads.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/leads.add.tsx:22:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-3xl mx-auto", "data-tsd-source": "/src/routes/leads.add.tsx:23:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "flex items-end justify-between flex-wrap gap-3", "data-tsd-source": "/src/routes/leads.add.tsx:24:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/leads.add.tsx:25:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/leads.add.tsx:26:13", children: "Add a lead" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center gap-2", "data-tsd-source": "/src/routes/leads.add.tsx:27:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/leads.add.tsx:28:15" }),
        " Real-time dedup against ",
        totalLeads,
        " unified leads"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "single", className: "space-y-4", "data-tsd-source": "/src/routes/leads.add.tsx:33:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "data-tsd-source": "/src/routes/leads.add.tsx:34:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "single", "data-tsd-source": "/src/routes/leads.add.tsx:35:13", children: "Single lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "requests", "data-tsd-source": "/src/routes/leads.add.tsx:36:13", children: "Access requests" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "single", "data-tsd-source": "/src/routes/leads.add.tsx:38:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DirectLeadForm, { "data-tsd-source": "/src/routes/leads.add.tsx:38:39" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "requests", "data-tsd-source": "/src/routes/leads.add.tsx:39:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RequestAccessSheet, { "data-tsd-source": "/src/routes/leads.add.tsx:39:41" }) })
    ] })
  ] }) });
}
__name(AddLeadPage, "AddLeadPage");
__name2(AddLeadPage, "AddLeadPage");
export {
  AddLeadPage as component
};
