var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-Jr4ZQwpF.mjs";
import { u as useAuditLog } from "./audit-log-YJnFAPHk.mjs";
import { d as downloadCsv, a as downloadJson } from "./csv-D0tTAS8R.mjs";
import { k as Button } from "./router-xBhBcQRf.mjs";
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
import "../_libs/zustand.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
function AdminAudit() {
  const entries = useAuditLog((s) => s.entries);
  const [q, setQ] = reactExports.useState("");
  const filtered = entries.filter((e) => !q || JSON.stringify(e).toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Audit Log", sub: `${entries.length} entries · before/after for every admin action`, "data-tsd-source": "/src/routes/admin.audit.tsx:16:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", "data-tsd-source": "/src/routes/admin.audit.tsx:17:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "h-8 px-2 rounded-md border border-border bg-card text-xs flex-1", placeholder: "Search audit…", value: q, onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"), "data-tsd-source": "/src/routes/admin.audit.tsx:18:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => downloadCsv("admin-audit.csv", filtered), "onClick"), "data-tsd-source": "/src/routes/admin.audit.tsx:19:9", children: "CSV" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => downloadJson("admin-audit.json", filtered), "onClick"), "data-tsd-source": "/src/routes/admin.audit.tsx:20:9", children: "JSON" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/admin.audit.tsx:22:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto max-h-[70vh]", "data-tsd-source": "/src/routes/admin.audit.tsx:23:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.audit.tsx:24:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 sticky top-0", "data-tsd-source": "/src/routes/admin.audit.tsx:25:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", "data-tsd-source": "/src/routes/admin.audit.tsx:25:57", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.audit.tsx:26:15", children: "Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.audit.tsx:26:44", children: "Actor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.audit.tsx:26:74", children: "Entity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.audit.tsx:26:105", children: "Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.audit.tsx:26:136", children: "Summary" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { "data-tsd-source": "/src/routes/admin.audit.tsx:28:13", children: [
        filtered.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border align-top", "data-tsd-source": "/src/routes/admin.audit.tsx:30:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-mono text-[10px]", "data-tsd-source": "/src/routes/admin.audit.tsx:31:19", children: new Date(e.ts).toLocaleString("en-IN") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.audit.tsx:32:19", children: e.actorName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-[10px]", "data-tsd-source": "/src/routes/admin.audit.tsx:33:19", children: [
            e.entityType,
            ":",
            e.entityId.slice(0, 8)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-[10px]", "data-tsd-source": "/src/routes/admin.audit.tsx:34:19", children: e.action }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.audit.tsx:35:19", children: e.summary })
        ] }, e.id)),
        !filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-tsd-source": "/src/routes/admin.audit.tsx:38:36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "p-6 text-center text-muted-foreground", "data-tsd-source": "/src/routes/admin.audit.tsx:38:40", children: "No entries." }) })
      ] })
    ] }) }) })
  ] });
}
__name(AdminAudit, "AdminAudit");
__name2(AdminAudit, "AdminAudit");
export {
  AdminAudit as component
};
