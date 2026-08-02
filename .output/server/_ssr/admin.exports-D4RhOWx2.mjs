var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-Jr4ZQwpF.mjs";
import { u as useAdminRows } from "./use-admin-rows-COle0KJQ.mjs";
import { k as Button } from "./router-xBhBcQRf.mjs";
import { d as downloadCsv, a as downloadJson } from "./csv-D0tTAS8R.mjs";
import { d as downloadAdminWorkbook, a as downloadAdminPdf } from "./pdf-Ca9E2cI3.mjs";
import { C as CopyChipRail, b as buildLeadCopyBlocks } from "./whatsapp-blocks-RaE4Ppki.mjs";
import { t as toast } from "../_libs/sonner.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "./store-CzExz6PU.mjs";
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
function AdminExports() {
  const rows = useAdminRows();
  const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const csv = /* @__PURE__ */ __name2(() => downloadCsv(`admin-leads-${stamp}.csv`, rows.map((r) => ({
    name: r.lead.name,
    phone: r.lead.phone,
    stage: r.lead.stage,
    tcm: r.tcm?.name ?? "",
    probability: r.probability,
    expectedValue: r.expectedValue,
    status: r.status,
    whyNotClosed: r.whyNotClosed,
    lastTouch: new Date(r.lastTouchTs).toISOString()
  }))), "csv");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Export Center", sub: "Single source of truth · always the live filtered set", "data-tsd-source": "/src/routes/admin.exports.tsx:25:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", "data-tsd-source": "/src/routes/admin.exports.tsx:26:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "CSV", desc: "Flat sheet — leads + derived stats.", "data-tsd-source": "/src/routes/admin.exports.tsx:27:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: csv, "data-tsd-source": "/src/routes/admin.exports.tsx:28:11", children: "Download CSV" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "XLSX workbook", desc: "Multi-sheet — Leads · Visits · Objections · People.", "data-tsd-source": "/src/routes/admin.exports.tsx:30:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => downloadAdminWorkbook(`admin-${stamp}.xlsx`, rows).catch(() => toast.error("XLSX failed")), "onClick"), "data-tsd-source": "/src/routes/admin.exports.tsx:31:11", children: "Download XLSX" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "PDF report", desc: "Branded admin report: KPIs · Why · top closeable.", "data-tsd-source": "/src/routes/admin.exports.tsx:33:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => downloadAdminPdf(`admin-report-${stamp}.pdf`, rows).catch(() => toast.error("PDF failed")), "onClick"), "data-tsd-source": "/src/routes/admin.exports.tsx:34:11", children: "Download PDF" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "JSON", desc: "Raw structured export for external tooling.", "data-tsd-source": "/src/routes/admin.exports.tsx:36:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => downloadJson(`admin-${stamp}.json`, rows), "onClick"), "data-tsd-source": "/src/routes/admin.exports.tsx:37:11", children: "Download JSON" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3", "data-tsd-source": "/src/routes/admin.exports.tsx:41:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-2", "data-tsd-source": "/src/routes/admin.exports.tsx:42:9", children: "WhatsApp copy blocks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyChipRail, { blocks: rows.length ? buildLeadCopyBlocks(rows[0], rows) : [], "data-tsd-source": "/src/routes/admin.exports.tsx:43:9" })
    ] })
  ] });
}
__name(AdminExports, "AdminExports");
__name2(AdminExports, "AdminExports");
function Card({
  title,
  desc,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-2", "data-tsd-source": "/src/routes/admin.exports.tsx:51:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", "data-tsd-source": "/src/routes/admin.exports.tsx:52:7", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/admin.exports.tsx:53:7", children: desc }),
    children
  ] });
}
__name(Card, "Card");
__name2(Card, "Card");
export {
  AdminExports as component
};
