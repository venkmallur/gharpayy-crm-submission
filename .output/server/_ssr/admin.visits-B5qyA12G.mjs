var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-Jr4ZQwpF.mjs";
import { b as useVisitWar, k as Button } from "./router-xBhBcQRf.mjs";
import { d as downloadCsv } from "./csv-D0tTAS8R.mjs";
import "../_libs/sonner.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
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
import "../_libs/tslib.mjs";
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
function AdminVisits() {
  const records = useVisitWar((s) => s.records);
  const list = reactExports.useMemo(() => Object.values(records).sort((a, b) => b.scheduledAt - a.scheduledAt), [records]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Master Visit Console", sub: `${list.length} visits · all TCMs, all zones`, "data-tsd-source": "/src/routes/admin.visits.tsx:15:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card/60 p-3 flex justify-end", "data-tsd-source": "/src/routes/admin.visits.tsx:16:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => downloadCsv(`admin-visits-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, list.map((v) => ({
      lead: v.leadName,
      tcm: v.tcmName,
      property: v.propertyName,
      stage: v.stage,
      reaction: v.reaction ?? "",
      outcome: v.outcome ?? "",
      lostReason: v.lostReason ?? "",
      scheduled: new Date(v.scheduledAt).toISOString(),
      objections: v.objections.length
    }))), "onClick"), "data-tsd-source": "/src/routes/admin.visits.tsx:17:9", children: "CSV" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/admin.visits.tsx:22:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto max-h-[70vh]", "data-tsd-source": "/src/routes/admin.visits.tsx:23:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.visits.tsx:24:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 sticky top-0", "data-tsd-source": "/src/routes/admin.visits.tsx:25:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", "data-tsd-source": "/src/routes/admin.visits.tsx:26:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:27:17", children: "Lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:27:46", children: "TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:27:74", children: "Property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:28:17", children: "Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:28:47", children: "Reaction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:28:80", children: "Outcome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:29:17", children: "Lost" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.visits.tsx:29:46", children: "Obj" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:29:85", children: "Scheduled" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { "data-tsd-source": "/src/routes/admin.visits.tsx:32:13", children: [
        list.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", "data-tsd-source": "/src/routes/admin.visits.tsx:34:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:35:19", children: v.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:35:56", children: v.tcmName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 truncate max-w-[140px]", "data-tsd-source": "/src/routes/admin.visits.tsx:36:19", children: v.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:37:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-muted", "data-tsd-source": "/src/routes/admin.visits.tsx:37:39", children: v.stage }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:38:19", children: v.reaction ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.visits.tsx:38:63", children: v.outcome ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-destructive", "data-tsd-source": "/src/routes/admin.visits.tsx:39:19", children: v.lostReason ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right font-mono", "data-tsd-source": "/src/routes/admin.visits.tsx:40:19", children: v.objections.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-[10px]", "data-tsd-source": "/src/routes/admin.visits.tsx:41:19", children: new Date(v.scheduledAt).toLocaleString("en-IN") })
        ] }, v.tourId)),
        !list.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-tsd-source": "/src/routes/admin.visits.tsx:44:32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, className: "p-6 text-center text-muted-foreground", "data-tsd-source": "/src/routes/admin.visits.tsx:44:36", children: "No visits." }) })
      ] })
    ] }) }) })
  ] });
}
__name(AdminVisits, "AdminVisits");
__name2(AdminVisits, "AdminVisits");
export {
  AdminVisits as component
};
