var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-Dhs0yRNA.mjs";
import { u as useApp, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, k as Button, X as Input, q as cn } from "./router-Cbs6ivkN.mjs";
import { C as CopyChipRail, b as buildLeadCopyBlocks } from "./whatsapp-blocks-CMYGQtSS.mjs";
import { u as useAdminRows } from "./use-admin-rows-Bn7YUGtf.mjs";
import { r as reassignLead, f as forceCloseLead, a as flagIntervention } from "./admin-actions-CTzSYgmT.mjs";
import { d as downloadCsv, a as downloadJson } from "./csv-D0tTAS8R.mjs";
import { d as downloadAdminWorkbook, a as downloadAdminPdf } from "./pdf-B_Ut1HE_.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./store-CzExz6PU.mjs";
import "./audit-log-YJnFAPHk.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const defaultAdminFilters = {
  q: "",
  stage: [],
  source: [],
  assignedTo: [],
  zone: [],
  status: [],
  probBucket: [],
  dormant: [],
  sort: "updated:desc"
};
function applyFilters(rows, f) {
  let out = rows;
  if (f.q) {
    const q = f.q.toLowerCase();
    out = out.filter(
      (r) => r.lead.name.toLowerCase().includes(q) || r.lead.phone.includes(q) || r.lead.preferredArea.toLowerCase().includes(q) || (r.tcm?.name ?? "").toLowerCase().includes(q)
    );
  }
  if (f.stage.length) out = out.filter((r) => f.stage.includes(r.lead.stage));
  if (f.source.length) out = out.filter((r) => f.source.includes(r.lead.source));
  if (f.assignedTo.length) out = out.filter((r) => f.assignedTo.includes(r.lead.assignedTcmId));
  if (f.zone.length) out = out.filter((r) => f.zone.includes(r.tcm?.zone ?? ""));
  if (f.status.length) out = out.filter((r) => f.status.includes(r.status));
  if (f.probBucket.length) {
    out = out.filter((r) => {
      const b = r.probability >= 70 ? "hot" : r.probability >= 40 ? "warm" : "cold";
      return f.probBucket.includes(b);
    });
  }
  if (f.hasVisit === true) out = out.filter((r) => r.hasVisit);
  if (f.hasVisit === false) out = out.filter((r) => !r.hasVisit);
  if (f.booked === true) out = out.filter((r) => r.booked);
  if (f.booked === false) out = out.filter((r) => !r.booked);
  if (f.dormant.length) out = out.filter((r) => r.dormantBucket && f.dormant.includes(r.dormantBucket));
  const [field, dir] = f.sort.split(":");
  const mul = dir === "asc" ? 1 : -1;
  out = [...out].sort((a, b) => {
    switch (field) {
      case "name":
        return mul * a.lead.name.localeCompare(b.lead.name);
      case "stage":
        return mul * a.lead.stage.localeCompare(b.lead.stage);
      case "prob":
        return mul * (a.probability - b.probability);
      case "value":
        return mul * (a.expectedValue - b.expectedValue);
      case "updated":
      default:
        return mul * (a.lastTouchTs - b.lastTouchTs);
    }
  });
  return out;
}
__name(applyFilters, "applyFilters");
__name2(applyFilters, "applyFilters");
const STAGES = ["new", "contacted", "tour-scheduled", "tour-done", "negotiation", "booked", "dropped"];
const STATUSES = ["open", "booked", "lost", "dormant"];
const BUCKETS = ["cold", "warm", "hot"];
function AdminFilterBar({ filters, onChange, tcms, sources = [], stages = STAGES }) {
  const [savedViewName, setSavedViewName] = reactExports.useState("");
  const zones = reactExports.useMemo(() => Array.from(new Set(tcms.map((t) => t.zone))), [tcms]);
  const toggle = /* @__PURE__ */ __name2((key, value) => {
    const cur = filters[key];
    const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
    onChange({ ...filters, [key]: next });
  }, "toggle");
  const reset = /* @__PURE__ */ __name2(() => onChange(defaultAdminFilters), "reset");
  const saveView = /* @__PURE__ */ __name2(() => {
    if (!savedViewName.trim()) return;
    const views = JSON.parse(localStorage.getItem("admin.views") ?? "{}");
    views[savedViewName] = filters;
    localStorage.setItem("admin.views", JSON.stringify(views));
    setSavedViewName("");
  }, "saveView");
  const savedViews = reactExports.useMemo(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem("admin.views") ?? "{}");
    } catch {
      return {};
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-3 space-y-3", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:48:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:49:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search by name, phone, area, TCM…",
          value: filters.q,
          onChange: /* @__PURE__ */ __name2((e) => onChange({ ...filters, q: e.target.value }), "onChange"),
          className: "h-8 max-w-xs",
          "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:50:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filters.sort, onValueChange: /* @__PURE__ */ __name2((v) => onChange({ ...filters, sort: v }), "onValueChange"), "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:56:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-44 text-xs", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:57:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:57:55" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:58:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "updated:desc", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:59:13", children: "Last updated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "prob:desc", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:60:13", children: "Probability ↓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "prob:asc", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:61:13", children: "Probability ↑" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "value:desc", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:62:13", children: "Expected ₹ ↓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "name:asc", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:63:13", children: "Name A→Z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "stage:asc", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:64:13", children: "Stage" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: reset, className: "h-8 text-xs", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:67:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:68:11" }),
        " Reset"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:70:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Save view as…", value: savedViewName, onChange: /* @__PURE__ */ __name2((e) => setSavedViewName(e.target.value), "onChange"), className: "h-8 w-40 text-xs", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:71:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: saveView, className: "h-8 text-xs", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:72:11", children: "Save" }),
        Object.keys(savedViews).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: /* @__PURE__ */ __name2((v) => onChange(savedViews[v]), "onValueChange"), "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:74:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-32 text-xs", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:75:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Load…", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:75:59" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:76:15", children: Object.keys(savedViews).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: k, "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:77:53", children: k }, k)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Stage", values: stages, active: filters.stage, onToggle: /* @__PURE__ */ __name2((v) => toggle("stage", v), "onToggle"), "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:84:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Status", values: STATUSES, active: filters.status, onToggle: /* @__PURE__ */ __name2((v) => toggle("status", v), "onToggle"), "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:85:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Probability", values: BUCKETS, active: filters.probBucket, onToggle: /* @__PURE__ */ __name2((v) => toggle("probBucket", v), "onToggle"), "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:86:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChipRow,
      {
        label: "TCM",
        values: tcms.map((t) => t.id),
        labels: Object.fromEntries(tcms.map((t) => [t.id, t.name])),
        active: filters.assignedTo,
        onToggle: /* @__PURE__ */ __name2((v) => toggle("assignedTo", v), "onToggle"),
        "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:87:7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Zone", values: zones, active: filters.zone, onToggle: /* @__PURE__ */ __name2((v) => toggle("zone", v), "onToggle"), "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:89:7" }),
    sources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Source", values: sources, active: filters.source, onToggle: /* @__PURE__ */ __name2((v) => toggle("source", v), "onToggle"), "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:91:9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChipRow, { label: "Dormant", values: ["30d", "60d", "90d"], active: filters.dormant, onToggle: /* @__PURE__ */ __name2((v) => toggle("dormant", v), "onToggle"), "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:93:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:94:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:95:9", children: "Quick:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: filters.hasVisit === true ? "default" : "outline",
          className: "h-7 text-xs",
          onClick: /* @__PURE__ */ __name2(() => onChange({ ...filters, hasVisit: filters.hasVisit === true ? void 0 : true }), "onClick"),
          "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:96:9",
          children: "Has visit"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: filters.booked === true ? "default" : "outline",
          className: "h-7 text-xs",
          onClick: /* @__PURE__ */ __name2(() => onChange({ ...filters, booked: filters.booked === true ? void 0 : true }), "onClick"),
          "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:100:9",
          children: "Booked"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: filters.booked === false ? "default" : "outline",
          className: "h-7 text-xs",
          onClick: /* @__PURE__ */ __name2(() => onChange({ ...filters, booked: filters.booked === false ? void 0 : false }), "onClick"),
          "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:104:9",
          children: "Not booked"
        }
      )
    ] })
  ] });
}
__name(AdminFilterBar, "AdminFilterBar");
__name2(AdminFilterBar, "AdminFilterBar");
function ChipRow({
  label,
  values,
  active,
  onToggle,
  labels
}) {
  if (!values.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:118:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground w-16", "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:119:7", children: label }),
    values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: /* @__PURE__ */ __name2(() => onToggle(v), "onClick"),
        className: cn(
          "text-[11px] px-2 py-0.5 rounded-full border transition-colors",
          active.includes(v) ? "bg-accent text-accent-foreground border-accent" : "bg-muted/40 text-muted-foreground border-border hover:bg-muted"
        ),
        "data-tsd-source": "/src/admin/components/AdminFilterBar.tsx:121:9",
        children: labels?.[v] ?? v
      },
      v
    ))
  ] });
}
__name(ChipRow, "ChipRow");
__name2(ChipRow, "ChipRow");
function AdminLeads() {
  const rows = useAdminRows();
  const {
    tcms,
    leads
  } = useApp();
  const [filters, setFilters] = reactExports.useState(defaultAdminFilters);
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [drawer, setDrawer] = reactExports.useState(null);
  const sources = reactExports.useMemo(() => Array.from(new Set(leads.map((l) => l.source))), [leads]);
  const filtered = reactExports.useMemo(() => applyFilters(rows, filters), [rows, filters]);
  const toggle = /* @__PURE__ */ __name2((id) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  }, "toggle");
  const exportRows = /* @__PURE__ */ __name2((fmt) => {
    const data = filtered.map((r) => ({
      name: r.lead.name,
      phone: r.lead.phone,
      source: r.lead.source,
      stage: r.lead.stage,
      tcm: r.tcm?.name ?? "",
      zone: r.tcm?.zone ?? "",
      area: r.lead.preferredArea,
      budget: r.lead.budget,
      probability: r.probability,
      expectedValue: r.expectedValue,
      status: r.status,
      whyNotClosed: r.whyNotClosed,
      tours: r.tours.length,
      visits: r.visits.length,
      calls: r.calls.length,
      lastObjection: r.lastObjection?.code ?? "",
      lastTouch: new Date(r.lastTouchTs).toISOString()
    }));
    const stamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    if (fmt === "csv") downloadCsv(`admin-leads-${stamp}.csv`, data);
    else if (fmt === "json") downloadJson(`admin-leads-${stamp}.json`, data);
    else if (fmt === "xlsx") downloadAdminWorkbook(`admin-leads-${stamp}.xlsx`, filtered).catch(() => toast.error("XLSX export failed"));
    else if (fmt === "pdf") downloadAdminPdf(`admin-report-${stamp}.pdf`, filtered).catch(() => toast.error("PDF export failed"));
  }, "exportRows");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Master Lead Console", sub: `${filtered.length} of ${rows.length} leads · full control`, "data-tsd-source": "/src/routes/admin.leads.tsx:58:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdminFilterBar, { filters, onChange: setFilters, tcms, sources, "data-tsd-source": "/src/routes/admin.leads.tsx:59:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-3 flex items-center justify-between flex-wrap gap-2", "data-tsd-source": "/src/routes/admin.leads.tsx:61:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/admin.leads.tsx:62:9", children: selected.size > 0 ? `${selected.size} selected` : "Select rows for bulk actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/routes/admin.leads.tsx:65:9", children: [
        selected.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: /* @__PURE__ */ __name2((tcmId) => {
          [...selected].forEach((id) => reassignLead(id, tcmId, "Bulk reassign"));
          setSelected(/* @__PURE__ */ new Set());
        }, "onValueChange"), "data-tsd-source": "/src/routes/admin.leads.tsx:67:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-44 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:71:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Bulk reassign to…", "data-tsd-source": "/src/routes/admin.leads.tsx:71:59" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/routes/admin.leads.tsx:72:15", children: tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t.id, "data-tsd-source": "/src/routes/admin.leads.tsx:72:47", children: t.name }, t.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => exportRows("csv"), "onClick"), className: "h-8 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:75:11", children: "CSV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => exportRows("xlsx"), "onClick"), className: "h-8 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:76:11", children: "XLSX" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => exportRows("pdf"), "onClick"), className: "h-8 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:77:11", children: "PDF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => exportRows("json"), "onClick"), className: "h-8 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:78:11", children: "JSON" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/admin.leads.tsx:82:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto max-h-[60vh]", "data-tsd-source": "/src/routes/admin.leads.tsx:83:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:84:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 sticky top-0", "data-tsd-source": "/src/routes/admin.leads.tsx:85:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", "data-tsd-source": "/src/routes/admin.leads.tsx:86:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 w-8", "data-tsd-source": "/src/routes/admin.leads.tsx:87:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selected.size === filtered.length && filtered.length > 0, onChange: /* @__PURE__ */ __name2((e) => setSelected(e.target.checked ? new Set(filtered.map((r) => r.lead.id)) : /* @__PURE__ */ new Set()), "onChange"), "data-tsd-source": "/src/routes/admin.leads.tsx:87:41" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:89:17", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:90:17", children: "Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:91:17", children: "TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:92:17", children: "Area" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.leads.tsx:93:17", children: "Prob" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.leads.tsx:94:17", children: "Exp ₹" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:95:17", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:96:17", children: "Why open" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.leads.tsx:97:17", children: "T/V/C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:98:17", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { "data-tsd-source": "/src/routes/admin.leads.tsx:101:13", children: [
        filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border hover:bg-muted/30", "data-tsd-source": "/src/routes/admin.leads.tsx:103:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:104:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: selected.has(r.lead.id), onChange: /* @__PURE__ */ __name2(() => toggle(r.lead.id), "onChange"), "data-tsd-source": "/src/routes/admin.leads.tsx:104:39" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:105:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setDrawer(r), "onClick"), className: "font-medium hover:underline text-left", "data-tsd-source": "/src/routes/admin.leads.tsx:106:21", children: r.lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/routes/admin.leads.tsx:107:21", children: r.lead.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:109:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-muted", "data-tsd-source": "/src/routes/admin.leads.tsx:109:39", children: r.lead.stage }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:110:19", children: r.tcm?.name ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 truncate max-w-[120px]", "data-tsd-source": "/src/routes/admin.leads.tsx:111:19", children: r.lead.preferredArea }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right font-mono text-accent", "data-tsd-source": "/src/routes/admin.leads.tsx:112:19", children: [
            r.probability,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right font-mono", "data-tsd-source": "/src/routes/admin.leads.tsx:113:19", children: [
            "₹",
            (r.expectedValue / 1e3).toFixed(0),
            "k"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-[10px]", "data-tsd-source": "/src/routes/admin.leads.tsx:114:19", children: r.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-[10px] text-muted-foreground truncate max-w-[180px]", "data-tsd-source": "/src/routes/admin.leads.tsx:115:19", children: r.whyNotClosed }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right font-mono text-[10px]", "data-tsd-source": "/src/routes/admin.leads.tsx:116:19", children: [
            r.tours.length,
            "/",
            r.visits.length,
            "/",
            r.calls.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.leads.tsx:117:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", "data-tsd-source": "/src/routes/admin.leads.tsx:118:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 text-[10px]", onClick: /* @__PURE__ */ __name2(() => forceCloseLead(r.lead.id, "won", r.lead.budget), "onClick"), "data-tsd-source": "/src/routes/admin.leads.tsx:119:23", children: "Won" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 text-[10px]", onClick: /* @__PURE__ */ __name2(() => forceCloseLead(r.lead.id, "lost", "admin force-close"), "onClick"), "data-tsd-source": "/src/routes/admin.leads.tsx:120:23", children: "Lost" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-6 text-[10px]", onClick: /* @__PURE__ */ __name2(() => {
              const note = prompt("Intervention note?");
              if (note) flagIntervention(r.lead.id, note);
            }, "onClick"), "data-tsd-source": "/src/routes/admin.leads.tsx:121:23", children: "Flag" })
          ] }) })
        ] }, r.lead.id)),
        !filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-tsd-source": "/src/routes/admin.leads.tsx:129:36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 11, className: "p-6 text-center text-muted-foreground", "data-tsd-source": "/src/routes/admin.leads.tsx:129:40", children: "No leads match filters." }) })
      ] })
    ] }) }) }),
    drawer && /* @__PURE__ */ jsxRuntimeExports.jsx(LeadDrawer, { row: drawer, rows, onClose: /* @__PURE__ */ __name2(() => setDrawer(null), "onClose"), "data-tsd-source": "/src/routes/admin.leads.tsx:135:18" })
  ] });
}
__name(AdminLeads, "AdminLeads");
__name2(AdminLeads, "AdminLeads");
function LeadDrawer({
  row,
  rows,
  onClose
}) {
  const {
    tcms
  } = useApp();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex", "data-tsd-source": "/src/routes/admin.leads.tsx:143:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-black/30", onClick: onClose, "data-tsd-source": "/src/routes/admin.leads.tsx:144:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-background border-l border-border overflow-auto p-4 space-y-3", "data-tsd-source": "/src/routes/admin.leads.tsx:145:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/admin.leads.tsx:146:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/admin.leads.tsx:147:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-display font-semibold", "data-tsd-source": "/src/routes/admin.leads.tsx:148:13", children: row.lead.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground font-mono", "data-tsd-source": "/src/routes/admin.leads.tsx:149:13", children: row.lead.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onClose, "data-tsd-source": "/src/routes/admin.leads.tsx:151:11", children: "Close" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:154:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Stage", v: row.lead.stage, "data-tsd-source": "/src/routes/admin.leads.tsx:155:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Probability", v: `${row.probability}%`, "data-tsd-source": "/src/routes/admin.leads.tsx:156:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Status", v: row.status, "data-tsd-source": "/src/routes/admin.leads.tsx:157:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Expected ₹", v: `₹${row.expectedValue.toLocaleString("en-IN")}`, "data-tsd-source": "/src/routes/admin.leads.tsx:158:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "TCM", v: row.tcm?.name ?? "—", "data-tsd-source": "/src/routes/admin.leads.tsx:159:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Area", v: row.lead.preferredArea, "data-tsd-source": "/src/routes/admin.leads.tsx:160:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Tours / Visits", v: `${row.tours.length} / ${row.visits.length}`, "data-tsd-source": "/src/routes/admin.leads.tsx:161:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "Calls", v: row.calls.length, "data-tsd-source": "/src/routes/admin.leads.tsx:162:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2 bg-muted/30 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:165:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", "data-tsd-source": "/src/routes/admin.leads.tsx:166:11", children: "Why open" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/routes/admin.leads.tsx:167:11", children: row.whyNotClosed })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/admin.leads.tsx:170:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground mb-1", "data-tsd-source": "/src/routes/admin.leads.tsx:171:11", children: "Reassign TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: /* @__PURE__ */ __name2((v) => reassignLead(row.lead.id, v), "onValueChange"), "data-tsd-source": "/src/routes/admin.leads.tsx:172:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:173:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Pick TCM…", "data-tsd-source": "/src/routes/admin.leads.tsx:173:52" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/routes/admin.leads.tsx:174:13", children: tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: t.id, "data-tsd-source": "/src/routes/admin.leads.tsx:174:45", children: [
            t.name,
            " · ",
            t.zone
          ] }, t.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/admin.leads.tsx:178:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground mb-1", "data-tsd-source": "/src/routes/admin.leads.tsx:179:11", children: "Copy blocks (1-tap WhatsApp)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyChipRail, { blocks: buildLeadCopyBlocks(row, rows), "data-tsd-source": "/src/routes/admin.leads.tsx:180:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/routes/admin.leads.tsx:183:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => forceCloseLead(row.lead.id, "won", row.lead.budget), "onClick"), "data-tsd-source": "/src/routes/admin.leads.tsx:184:11", children: "Force Won" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "destructive", onClick: /* @__PURE__ */ __name2(() => forceCloseLead(row.lead.id, "lost", "admin"), "onClick"), "data-tsd-source": "/src/routes/admin.leads.tsx:185:11", children: "Force Lost" })
      ] }),
      row.objections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/admin.leads.tsx:189:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground mb-1", "data-tsd-source": "/src/routes/admin.leads.tsx:190:13", children: "Objection history" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 text-xs", "data-tsd-source": "/src/routes/admin.leads.tsx:191:13", children: row.objections.slice(0, 5).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", "data-tsd-source": "/src/routes/admin.leads.tsx:193:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/routes/admin.leads.tsx:193:65", children: o.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/admin.leads.tsx:193:86", children: o.resolution })
        ] }, o.id)) })
      ] })
    ] })
  ] });
}
__name(LeadDrawer, "LeadDrawer");
__name2(LeadDrawer, "LeadDrawer");
function Stat({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2 bg-muted/20", "data-tsd-source": "/src/routes/admin.leads.tsx:205:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase text-muted-foreground", "data-tsd-source": "/src/routes/admin.leads.tsx:206:7", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", "data-tsd-source": "/src/routes/admin.leads.tsx:207:7", children: v })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
export {
  AdminLeads as component
};
