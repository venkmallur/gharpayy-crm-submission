var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AdminShell } from "./AdminShell-Dhs0yRNA.mjs";
import { u as useApp, k as Button } from "./router-Cbs6ivkN.mjs";
import { d as downloadCsv } from "./csv-D0tTAS8R.mjs";
import "../_libs/sonner.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/zustand.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function AdminOwners() {
  const {
    properties
  } = useApp();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Master Owner Console", sub: `${properties.length} properties · full visibility`, "data-tsd-source": "/src/routes/admin.owners.tsx:12:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card/60 p-3 flex justify-end", "data-tsd-source": "/src/routes/admin.owners.tsx:13:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => downloadCsv(`admin-owners-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, properties), "onClick"), "data-tsd-source": "/src/routes/admin.owners.tsx:14:9", children: "CSV" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/admin.owners.tsx:16:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.owners.tsx:17:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40", "data-tsd-source": "/src/routes/admin.owners.tsx:18:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", "data-tsd-source": "/src/routes/admin.owners.tsx:18:42", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.owners.tsx:19:13", children: "Property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.owners.tsx:19:46", children: "Area" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.owners.tsx:20:13", children: "Beds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.owners.tsx:20:53", children: "Vacant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.owners.tsx:21:13", children: "₹/bed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.owners.tsx:21:54", children: "Days since booking" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.owners.tsx:22:13", children: "Open" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/routes/admin.owners.tsx:24:11", children: properties.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", "data-tsd-source": "/src/routes/admin.owners.tsx:26:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-medium", "data-tsd-source": "/src/routes/admin.owners.tsx:27:17", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.owners.tsx:28:17", children: p.area }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.owners.tsx:29:17", children: p.totalBeds }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right font-mono", "data-tsd-source": "/src/routes/admin.owners.tsx:30:17", children: p.vacantBeds }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.owners.tsx:31:17", children: [
          "₹",
          p.pricePerBed.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right text-muted-foreground", "data-tsd-source": "/src/routes/admin.owners.tsx:32:17", children: [
          p.daysSinceLastBooking,
          "d"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.owners.tsx:33:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/owner-portal", className: "text-accent underline", "data-tsd-source": "/src/routes/admin.owners.tsx:33:37", children: "Impersonate" }) })
      ] }, p.id)) })
    ] }) })
  ] });
}
__name(AdminOwners, "AdminOwners");
__name2(AdminOwners, "AdminOwners");
export {
  AdminOwners as component
};
