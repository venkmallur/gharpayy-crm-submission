var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { p as performance } from "../_libs/unenv.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, M as Sheet, N as SheetContent, O as SheetHeader, Q as SheetTitle, aE as usePip } from "./AppShell-BN067m2r.mjs";
import { k as Button, A as Textarea, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, B as Badge, a2 as DialogFooter, X as Input, aH as teamMembers, U as Label, q as cn, aB as useAppState, aI as zones } from "./router-xBhBcQRf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useNavigate } from "./react-router-dom-DTg4HJ59.mjs";
import { D as DirectLeadForm, p as parseLead, d as detectZone, R as RequestAccessSheet } from "./RequestAccessSheet-DVKLP4e0.mjs";
import { u as useIdentityStore } from "./store-CSrICxO2.mjs";
import "../_libs/react-dom.mjs";


import "./index.mjs";

import "../_libs/seroval.mjs";
import { S as Sparkles, bK as ClipboardPaste, l as CircleCheck, ap as Play, bL as LoaderCircle, bp as Upload, g as TriangleAlert, bM as CircleX, bq as Download, K as MapPin, bN as Repeat2, aR as Save, X, a7 as PictureInPicture2, Z as Zap, bO as FlaskConical, bP as Info, bQ as CircleCheckBig, t as Plus, P as Phone, A as ArrowRight } from "../_libs/lucide-react.mjs";





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
const emptyDraft = /* @__PURE__ */ __name2(() => ({
  name: "",
  phone: "",
  email: "",
  location: "",
  areas: [],
  fullAddress: "",
  budget: "",
  moveIn: "",
  type: "",
  room: "",
  need: "",
  specialReqs: "",
  inBLR: null,
  zone: "",
  rawSource: ""
}), "emptyDraft");
function PasteToLead({ onCreated }) {
  useIdentityStore((s) => s.checkDuplicates);
  useIdentityStore((s) => s.createLead);
  const [raw, setRaw] = reactExports.useState("");
  const [draft, setDraft] = reactExports.useState(emptyDraft());
  const [parsed, setParsed] = reactExports.useState(false);
  const [match, setMatch] = reactExports.useState(null);
  const [showModal, setShowModal] = reactExports.useState(false);
  reactExports.useMemo(() => ({
    name: !!draft.name,
    phone: !!draft.phone,
    email: !!draft.email,
    location: !!draft.location,
    budget: !!draft.budget,
    moveIn: !!draft.moveIn,
    zone: !!draft.zone
  }), [draft]);
  const onParse = /* @__PURE__ */ __name2(() => {
    const p = parseLead(raw);
    if (!p) {
      toast.error("Couldn't parse — need at least name, phone, or email.");
      return;
    }
    setDraft(p);
    setParsed(true);
    toast.success("Parsed — review fields and run duplicate check.");
  }, "onParse");
  const onPasteFromClipboard = /* @__PURE__ */ __name2(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setRaw(text);
      const p = parseLead(text);
      if (p) {
        setDraft(p);
        setParsed(true);
        toast.success("Pasted & parsed");
      }
    } catch {
      toast.error("Clipboard blocked — paste manually.");
    }
  }, "onPasteFromClipboard");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:99:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:100:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 flex-wrap", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:101:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/leads/PasteToLead.tsx:102:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-sm flex items-center gap-2", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:103:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:104:15" }),
            " Paste lead"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:106:13", children: "WhatsApp form, plain text, spreadsheet row — anything works." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:108:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 text-xs gap-1", onClick: onPasteFromClipboard, "data-tsd-source": "/src/components/leads/PasteToLead.tsx:109:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardPaste, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:110:15" }),
            " Paste"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-8 text-xs", onClick: onParse, disabled: !raw.trim(), "data-tsd-source": "/src/components/leads/PasteToLead.tsx:112:13", children: "Parse" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: raw,
          onChange: /* @__PURE__ */ __name2((e) => setRaw(e.target.value), "onChange"),
          placeholder: `Paste anything…

📝 GHARPAYY FORM
Name: Rahul Sharma
Phone: 9876543210
Location: Koramangala
Budget: 8-12k
Move-in: 1 May`,
          className: "min-h-32 font-mono text-xs",
          "data-tsd-source": "/src/components/leads/PasteToLead.tsx:117:9"
        }
      )
    ] }),
    parsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 animate-in slide-in-from-bottom-2 fade-in duration-300", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:125:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-sm text-primary font-medium", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:126:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4", "data-tsd-source": "/src/components/leads/PasteToLead.tsx:127:13" }),
        " Parsed successfully. Please review and save."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DirectLeadForm,
        {
          initialDraft: draft,
          onCreated: /* @__PURE__ */ __name2((lead) => {
            setRaw("");
            setDraft(emptyDraft());
            setParsed(false);
            onCreated?.(lead);
          }, "onCreated"),
          "data-tsd-source": "/src/components/leads/PasteToLead.tsx:129:11"
        }
      )
    ] })
  ] });
}
__name(PasteToLead, "PasteToLead");
__name2(PasteToLead, "PasteToLead");
function parseCsv(text) {
  const rows = [];
  let cur = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') inQuotes = false;
      else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") {
        cur.push(field);
        field = "";
      } else if (c === "\n") {
        cur.push(field);
        rows.push(cur);
        cur = [];
        field = "";
      } else if (c === "\r") ;
      else field += c;
    }
  }
  if (field.length || cur.length) {
    cur.push(field);
    rows.push(cur);
  }
  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1).filter((r) => r.length > 1).map((r) => {
    const o = {};
    headers.forEach((h, i) => {
      o[h.trim()] = r[i] ?? "";
    });
    return o;
  });
}
__name(parseCsv, "parseCsv");
__name2(parseCsv, "parseCsv");
const REQUIRED_FOR_PARSED = ["name", "phone"];
function classify(p) {
  if (!p) return { status: "failed", missing: ["name", "phone", "location", "budget"] };
  const missing = [];
  if (!p.name) missing.push("name");
  if (!p.phone) missing.push("phone");
  if (!p.email) missing.push("email");
  if (!p.location) missing.push("location");
  if (!p.budget) missing.push("budget");
  const hasReq = REQUIRED_FOR_PARSED.every((k) => (p[k] ?? "").toString().trim().length > 0);
  const hasContact = !!(p.phone || p.email);
  if (hasReq && (p.location || p.budget)) return { status: "parsed", missing };
  if (hasContact) return { status: "usable", missing };
  return { status: "failed", missing };
}
__name(classify, "classify");
__name2(classify, "classify");
function runParserSuite(rawSamples) {
  const t0 = performance.now();
  const rows = [];
  const missing = { phone: 0, location: 0, budget: 0, name: 0, email: 0 };
  let parsed = 0, usable = 0, failed = 0;
  let zoneHits = 0, zoneSample = 0;
  rawSamples.forEach((raw, i) => {
    const p = parseLead(raw);
    const { status, missing: miss } = classify(p);
    if (status === "parsed") parsed++;
    else if (status === "usable") usable++;
    else failed++;
    miss.forEach((m) => {
      if (m in missing) missing[m]++;
    });
    if (p && p.location) {
      zoneSample++;
      const expected = detectZone(p.location);
      if (expected && expected === p.zone) zoneHits++;
      else if (!expected && !p.zone) zoneHits++;
    }
    rows.push({
      index: i,
      raw,
      parsed: p,
      status,
      missing: miss,
      reason: !p ? "Parser returned null (no name/phone/email signal)" : void 0
    });
  });
  return {
    total: rawSamples.length,
    parsed,
    usable,
    failed,
    missing,
    zoneAccuracy: zoneSample === 0 ? 0 : Math.round(zoneHits / zoneSample * 1e3) / 10,
    zoneSample,
    rows,
    durationMs: Math.round(performance.now() - t0)
  };
}
__name(runParserSuite, "runParserSuite");
__name2(runParserSuite, "runParserSuite");
function extractSamplesFromCsv(csvText) {
  const rows = parseCsv(csvText);
  const out = [];
  for (const row of rows) {
    const candidate = row.rawText ?? row.raw ?? row.text ?? row.paste ?? "";
    if (candidate && candidate.trim().length > 4) out.push(candidate);
  }
  return out;
}
__name(extractSamplesFromCsv, "extractSamplesFromCsv");
__name2(extractSamplesFromCsv, "extractSamplesFromCsv");
const BUILTIN_SAMPLES = [
  `Name: Vemula Shanmukha Sai \\nPhone: 9398992589\\nEmail: saishanmukha390@gmail.com \\nPreferred location : Koramangala\\nBudget range: 8k - 12k\\nMove in date: tomorrow \\nWorking \\nShared room`,
  `Name: Riya\\r\\nPhone: 9111310344\\r\\nLocation: Near Christ University Central Campus Bangalore\\r\\nBudget: Within ₹20k\\r\\nMove in date: June first week\\r\\nStudent\\r\\nGirls pg preferable`,
  `📝 *Name:*  Keshav Kakkar\\r\\n📱 *Phone:*  8218844116\\r\\n✉️ *Email:*  kaka.kakkar3110@gmail.com\\r\\n📍 *Preferred Location:*  HustleHub Tech Park, HSR Layout\\r\\n💰 *Budget Range:* ₹8-16k monthly\\r\\n📆 *Move-in Date:*  Last week of April\\r\\nWorking \\r\\n🏢 Shared\\r\\n👫 NEED Boys`,
  `Abhineet\\r\\n8400411502\\r\\nabhineet738@gmail.com\\r\\nPreferred location: HSR Layout\\r\\nBudget: 13-16k\\r\\nMove in date: 1st May\\r\\nWorking professional\\r\\nRoom Type: Private\\r\\nNeed: Coed`,
  `Priya 9876543210 Indiranagar 12k May 5`,
  `not filled`,
  `Karthik\\n+91 824 869 6034\\nWhitefield\\nbudget 9000\\nimmediate`
];
function ParserTestModal({ open, onClose }) {
  const [report, setReport] = reactExports.useState(null);
  const [running, setRunning] = reactExports.useState(false);
  const fileRef = reactExports.useRef(null);
  const runBuiltin = /* @__PURE__ */ __name2(() => {
    setRunning(true);
    setTimeout(() => {
      setReport(runParserSuite(BUILTIN_SAMPLES));
      setRunning(false);
    }, 50);
  }, "runBuiltin");
  const onFile = /* @__PURE__ */ __name2(async (file) => {
    setRunning(true);
    try {
      const text = await file.text();
      const samples = extractSamplesFromCsv(text);
      if (samples.length === 0) {
        toast.error("No `rawText` column found in CSV");
        setRunning(false);
        return;
      }
      setReport(runParserSuite(samples));
    } catch (e) {
      toast.error(`Test failed: ${e.message}`);
    } finally {
      setRunning(false);
    }
  }, "onFile");
  const downloadFailed = /* @__PURE__ */ __name2(() => {
    if (!report) return;
    const failed = report.rows.filter((r) => r.status === "failed");
    const csv = "index,reason,raw\n" + failed.map(
      (r) => `${r.index},"${(r.reason ?? "").replace(/"/g, '""')}","${r.raw.replace(/"/g, '""').replace(/\n/g, "\\n")}"`
    ).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `parser-failures-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, "downloadFailed");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: /* @__PURE__ */ __name2((v) => !v && onClose(), "onOpenChange"), "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:62:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:63:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:64:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:65:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:66:13" }),
      " Lead Parser Test Suite"
    ] }) }),
    !report && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:71:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:72:13", children: [
        "Run the parser against a CSV of raw pastes (must include a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:73:74", children: "rawText" }),
        " column) or use the built-in real-world sample set."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:76:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: runBuiltin, disabled: running, className: "gap-2", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:77:15", children: [
          running ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:78:28" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:78:75" }),
          "Run built-in suite (",
          BUILTIN_SAMPLES.length,
          " samples)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: /* @__PURE__ */ __name2(() => fileRef.current?.click(), "onClick"), disabled: running, className: "gap-2", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:81:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:82:17" }),
          " Upload CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileRef,
            type: "file",
            accept: ".csv,text/csv",
            hidden: true,
            onChange: /* @__PURE__ */ __name2((e) => e.target.files?.[0] && onFile(e.target.files[0]), "onChange"),
            "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:84:15"
          }
        )
      ] })
    ] }),
    report && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:96:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:97:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total", value: report.total, tone: "neutral", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:98:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Parsed ✅", value: report.parsed, tone: "good", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:99:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Failed ❌", value: report.failed, tone: "bad", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:100:15" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3 space-y-1.5 text-sm", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:103:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:104:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:105:17", children: "Usable (contact only)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:106:17", children: report.usable })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:108:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:109:17", children: "Zone accuracy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:110:17", children: [
            report.zoneAccuracy,
            "% ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:110:70", children: [
              "(",
              report.zoneSample,
              " sampled)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:112:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:113:17", children: "Run time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:114:17", children: [
            report.durationMs,
            " ms"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:118:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:119:15", children: "Missing fields" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:120:15", children: Object.entries(report.missing).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: v === 0 ? "secondary" : "destructive", className: "capitalize", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:122:19", children: [
          k,
          ": ",
          v
        ] }, k)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border max-h-56 overflow-auto", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:129:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:130:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-muted-foreground sticky top-0", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:131:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:132:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:133:21", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:134:21", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:135:21", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:136:21", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:137:21", children: "Zone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-2 py-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:138:21", children: "Missing" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:141:17", children: report.rows.slice(0, 50).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:143:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 tabular-nums", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:144:23", children: r.index + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-2 py-1", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:145:23", children: [
              r.status === "parsed" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-500", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:146:51" }),
              r.status === "usable" && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-amber-500", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:147:51" }),
              r.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5 text-destructive", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:148:51" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 truncate max-w-32", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:150:23", children: r.parsed?.name || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 tabular-nums", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:151:23", children: r.parsed?.phone || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:152:23", children: r.parsed?.zone || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1 text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:153:23", children: r.missing.join(", ") || "none" })
          ] }, r.index)) })
        ] }),
        report.rows.length > 50 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground text-center py-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:159:17", children: [
          "+ ",
          report.rows.length - 50,
          " more rows"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:165:9", children: [
      report && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: /* @__PURE__ */ __name2(() => setReport(null), "onClick"), "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:168:15", children: "Re-run" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: downloadFailed, disabled: report.failed === 0, className: "gap-1.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:169:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:170:17" }),
          " Download failed rows"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: onClose, "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:174:11", children: "Close" })
    ] })
  ] }) });
}
__name(ParserTestModal, "ParserTestModal");
__name2(ParserTestModal, "ParserTestModal");
function Stat({ label, value, tone }) {
  const cls = tone === "good" ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" : tone === "bad" ? "border-destructive/30 bg-destructive/5 text-destructive" : "border-border bg-muted/30 text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border p-3 ${cls}`, "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:187:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider opacity-80", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:188:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-semibold tabular-nums", "data-tsd-source": "/src/components/leads/ParserTestModal.tsx:189:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
const todayIso = /* @__PURE__ */ __name2(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), "todayIso");
const ZONE_BUCKETS = [
  "CENTRAL STUDENTS",
  "CU YPR / STUDENTS / WORKING",
  "HOMES KORA",
  "HOMES MWB",
  "KORA CORE",
  "MTECH HUB",
  "MWB MORE",
  "OTHERS COLLEGE STUDENTS",
  "YPR MAJOR MAIN",
  "OTHERS"
];
const STAGES = [
  "MYT [TENANT]",
  "2A. Options Shared – BLR",
  "2B. Options Shared – Non-BLR",
  "3A. Visit Intent Confirmed",
  "3B. try.prebook / virtual tour Intent",
  "4A. Visit Scheduled in BLR",
  "5A. Visit Done",
  "Finalizing",
  "WON 🏆",
  "LOST 😭"
];
const TYPE_OPTS = ["Student", "Working", "Intern", "Family", "Other"];
const ROOM_OPTS = ["Private", "Shared", "Both", "Studio"];
const NEED_OPTS = ["Boys", "Girls", "Coed"];
const QUALITY_OPTS = [
  { v: "hot", label: "🔥 Hot" },
  { v: "good", label: "✅ Good" },
  { v: "bad", label: "❌ Bad" }
];
const BLR_OPTS = [
  { v: true, label: "🏙 In" },
  { v: false, label: "✈️ Out" },
  { v: null, label: "❓ Unknown" }
];
function QuickAddLeadPanel({ open, onClose }) {
  const checkDup = useIdentityStore((s) => s.checkDuplicates);
  const create = useIdentityStore((s) => s.createLead);
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [areasText, setAreasText] = reactExports.useState("");
  const [fullAddress, setFullAddress] = reactExports.useState("");
  const [budget, setBudget] = reactExports.useState("");
  const [moveIn, setMoveIn] = reactExports.useState(todayIso());
  const [type, setType] = reactExports.useState("");
  const [room, setRoom] = reactExports.useState("");
  const [need, setNeed] = reactExports.useState("");
  const [specialReqs, setSpecialReqs] = reactExports.useState("");
  const [inBLR, setInBLR] = reactExports.useState(null);
  const [quality, setQuality] = reactExports.useState(null);
  const [zoneBucket, setZoneBucket] = reactExports.useState("");
  const [assigneeId, setAssigneeId] = reactExports.useState("");
  const [stage, setStage] = reactExports.useState(STAGES[0]);
  const [notes, setNotes] = reactExports.useState("");
  const nameRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (open) setTimeout(() => nameRef.current?.focus(), 50);
  }, [open]);
  const detectedZone = reactExports.useMemo(
    () => detectZone(`${areasText} ${fullAddress}`),
    [areasText, fullAddress]
  );
  const reset = /* @__PURE__ */ __name2(() => {
    setName("");
    setPhone("");
    setEmail("");
    setAreasText("");
    setFullAddress("");
    setBudget("");
    setMoveIn(todayIso());
    setType("");
    setRoom("");
    setNeed("");
    setSpecialReqs("");
    setInBLR(null);
    setQuality(null);
    setZoneBucket("");
    setAssigneeId("");
    setStage(STAGES[0]);
    setNotes("");
    setTimeout(() => nameRef.current?.focus(), 30);
  }, "reset");
  const save = /* @__PURE__ */ __name2((keepOpen) => {
    if (!name.trim() || !phone.replace(/\D/g, "").match(/^[6-9]\d{9}$/)) {
      toast.error("Need a name and a valid 10-digit phone");
      return;
    }
    const dup = checkDup({ name, phone, email, location: areasText });
    if (dup.type === "exact" || dup.type === "strong") {
      toast.warning(`Duplicate detected: ${dup.candidates[0]?.lead.name}`);
      return;
    }
    const areasArr = areasText.split(",").map((a) => a.trim()).filter(Boolean);
    const assignee = teamMembers.find((m) => m.id === assigneeId);
    const lead = create(
      {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        location: areasText.trim(),
        areas: areasArr,
        fullAddress: fullAddress.trim(),
        budget: budget.trim(),
        moveIn,
        type,
        room,
        need,
        specialReqs: [specialReqs, notes].filter(Boolean).join(" · "),
        inBLR,
        zone: detectedZone,
        rawSource: `[QuickAdd] ${name} ${phone}`
      },
      {
        quality,
        stage,
        zoneCategory: zoneBucket,
        assigneeId: assignee?.id ?? null,
        assigneeName: assignee?.name ?? null
      }
    );
    toast.success(`Lead saved · ${lead.name}`);
    if (keepOpen) reset();
    else onClose();
  }, "save");
  const onAnyPaste = /* @__PURE__ */ __name2((e) => {
    const txt = e.clipboardData.getData("text");
    if (!txt || txt.length < 30) return;
    const parsed = parseLead(txt);
    if (!parsed) return;
    e.preventDefault();
    if (parsed.name) setName(parsed.name);
    if (parsed.phone) setPhone(parsed.phone);
    if (parsed.email) setEmail(parsed.email);
    if (parsed.areas?.length) setAreasText(parsed.areas.join(", "));
    else if (parsed.location) setAreasText(parsed.location);
    if (parsed.fullAddress) setFullAddress(parsed.fullAddress);
    if (parsed.budget) setBudget(parsed.budget);
    if (parsed.moveIn && /^\d{4}-\d{2}-\d{2}$/.test(parsed.moveIn)) setMoveIn(parsed.moveIn);
    if (parsed.type) setType(parsed.type);
    if (parsed.room) setRoom(parsed.room);
    if (parsed.need) setNeed(parsed.need.split(" / ")[0] ?? parsed.need);
    if (parsed.specialReqs) setSpecialReqs(parsed.specialReqs);
    if (parsed.inBLR !== null) setInBLR(parsed.inBLR);
    toast.success("Auto-filled from WhatsApp paste");
  }, "onAnyPaste");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: /* @__PURE__ */ __name2((v) => !v && onClose(), "onOpenChange"), "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:169:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-lg flex flex-col p-0",
      onKeyDown: /* @__PURE__ */ __name2((e) => {
        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          save(false);
        }
      }, "onKeyDown"),
      "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:170:7",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "px-5 pt-5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:177:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "flex items-center gap-2", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:178:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:179:13" }),
            " Quick Add Lead"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:181:11", children: [
            "Paste a WhatsApp message into ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:182:43", children: "any" }),
            " field → auto-fills every column · ⌘/Ctrl + Enter saves"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-5 py-4 space-y-3", onPaste: onAnyPaste, "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:187:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:189:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "👤 Name *", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:190:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref: nameRef, value: name, onChange: /* @__PURE__ */ __name2((e) => setName(e.target.value), "onChange"), placeholder: "Rahul Sharma", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:191:15" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "📱 Phone *", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:193:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: phone, onChange: /* @__PURE__ */ __name2((e) => setPhone(e.target.value), "onChange"), placeholder: "98xxxxxxxx", inputMode: "tel", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:194:15" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "✉️ Email", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:198:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: email, onChange: /* @__PURE__ */ __name2((e) => setEmail(e.target.value), "onChange"), placeholder: "name@example.com", inputMode: "email", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:199:13" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "📍 Areas (comma-separated)", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:203:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:204:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: areasText,
                  onChange: /* @__PURE__ */ __name2((e) => setAreasText(e.target.value), "onChange"),
                  placeholder: "HSR Layout, BTM, Koramangala",
                  "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:205:15"
                }
              ),
              detectedZone && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px]", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:211:17", children: detectedZone })
            ] }),
            areasText.includes(",") && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-primary mt-1 flex items-center gap-1", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:217:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:218:17" }),
              " Multiple Areas Detected"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "🏠 Full Address / Map link", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:224:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: fullAddress,
              onChange: /* @__PURE__ */ __name2((e) => setFullAddress(e.target.value), "onChange"),
              rows: 2,
              placeholder: "Door no, street, landmark or Google Maps URL",
              className: "resize-none",
              "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:225:13"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:235:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "💰 Budget", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:236:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: budget, onChange: /* @__PURE__ */ __name2((e) => setBudget(e.target.value), "onChange"), placeholder: "8-12k", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:237:15" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "📅 Move-in", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:239:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: moveIn, onChange: /* @__PURE__ */ __name2((e) => setMoveIn(e.target.value), "onChange"), "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:240:15" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "💼 Type", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:245:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChipGroup, { options: TYPE_OPTS, value: type, onChange: setType, "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:246:13" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "🛏 Room", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:248:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChipGroup, { options: ROOM_OPTS, value: room, onChange: setRoom, "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:249:13" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "👥 Need", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:251:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChipGroup, { options: NEED_OPTS, value: need, onChange: setNeed, "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:252:13" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "⭐ Special Requests", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:256:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: specialReqs,
              onChange: /* @__PURE__ */ __name2((e) => setSpecialReqs(e.target.value), "onChange"),
              rows: 2,
              placeholder: "Veg only · attached washroom · top floor…",
              className: "resize-none",
              "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:257:13"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Currently in Bangalore?", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:267:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChipGroup,
            {
              options: BLR_OPTS.map((o) => o.label),
              value: BLR_OPTS.find((o) => o.v === inBLR)?.label ?? "",
              onChange: /* @__PURE__ */ __name2((label) => setInBLR(BLR_OPTS.find((o) => o.label === label)?.v ?? null), "onChange"),
              "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:268:13"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead Quality", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:276:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChipGroup,
            {
              options: QUALITY_OPTS.map((o) => o.label),
              value: QUALITY_OPTS.find((o) => o.v === quality)?.label ?? "",
              onChange: /* @__PURE__ */ __name2((label) => setQuality(QUALITY_OPTS.find((o) => o.label === label)?.v ?? null), "onChange"),
              "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:277:13"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Zone *", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:285:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: zoneBucket,
              onChange: /* @__PURE__ */ __name2((e) => setZoneBucket(e.target.value), "onChange"),
              className: "w-full h-9 bg-background border border-border rounded-md px-2 text-xs",
              "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:286:13",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:291:15", children: "Select zone bucket…" }),
                ZONE_BUCKETS.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z, "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:292:40", children: z }, z))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Assign Member", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:297:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: assigneeId,
              onChange: /* @__PURE__ */ __name2((e) => setAssigneeId(e.target.value), "onChange"),
              className: "w-full h-9 bg-background border border-border rounded-md px-2 text-xs",
              "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:298:13",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:303:15", children: "Unassigned" }),
                teamMembers.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m.id, "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:304:39", children: m.name }, m.id))
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead Stage", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:309:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: stage,
              onChange: /* @__PURE__ */ __name2((e) => setStage(e.target.value), "onChange"),
              className: "w-full h-9 bg-background border border-border rounded-md px-2 text-xs",
              "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:310:13",
              children: STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:315:34", children: s }, s))
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "📝 Notes", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:320:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: notes,
              onChange: /* @__PURE__ */ __name2((e) => setNotes(e.target.value), "onChange"),
              rows: 2,
              placeholder: "Free notes…",
              className: "resize-none",
              "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:321:13"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-3 flex flex-col gap-2 bg-background", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:331:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:332:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: /* @__PURE__ */ __name2(() => save(true), "onClick"), variant: "outline", size: "sm", className: "flex-1 gap-1.5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:333:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:334:15" }),
              " Save + Next"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: /* @__PURE__ */ __name2(() => save(false), "onClick"), size: "sm", className: "flex-1 gap-1.5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:336:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:337:15" }),
              " Save"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, className: "gap-1.5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:339:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:340:15" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:343:11", children: "Tip: paste a WhatsApp message anywhere → all fields auto-fill · ⌘/Ctrl + Enter to save" })
        ] })
      ]
    }
  ) });
}
__name(QuickAddLeadPanel, "QuickAddLeadPanel");
__name2(QuickAddLeadPanel, "QuickAddLeadPanel");
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:354:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground uppercase tracking-wide", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:355:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:356:7", children })
  ] });
}
__name(Field, "Field");
__name2(Field, "Field");
function ChipGroup({ options, value, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:365:5", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: /* @__PURE__ */ __name2(() => onChange(value === opt ? "" : opt), "onClick"),
      className: cn(
        "px-2 py-1 text-[11px] rounded-md border transition-colors",
        value === opt ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:text-foreground"
      ),
      "data-tsd-source": "/src/components/leads/QuickAddLeadPanel.tsx:367:9",
      children: opt
    },
    opt
  )) });
}
__name(ChipGroup, "ChipGroup");
__name2(ChipGroup, "ChipGroup");
function MYTLeadTracker() {
  const { leads, setLeads, currentMemberId } = useAppState();
  const navigate = useNavigate();
  const [mode, setMode] = reactExports.useState("paste");
  const identityLeadCount = useIdentityStore((s) => s.leads.length);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [showParserTest, setShowParserTest] = reactExports.useState(false);
  const [showQuickAdd, setShowQuickAdd] = reactExports.useState(false);
  const { open: openPip, close: closePip, active: pipActive, supported: pipSupported } = usePip();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    area: "",
    budget: "10000",
    moveInDate: "",
    dateConfirmed: false
  });
  const myLeads = currentMemberId ? leads.filter((l) => l.addedBy === currentMemberId) : leads;
  const qualified = myLeads.filter((l) => l.mytQualified);
  const unqualified = myLeads.filter((l) => !l.mytQualified);
  const handleSubmit = /* @__PURE__ */ __name2((e) => {
    e.preventDefault();
    const budget = parseInt(form.budget);
    const moveIn = new Date(form.moveInDate);
    const areaCovered = zones.some((z) => z.area.toLowerCase() === form.area.toLowerCase());
    const daysToMoveIn = (moveIn.getTime() - Date.now()) / (1e3 * 60 * 60 * 24);
    const mytQualified = areaCovered && budget >= 7e3 && daysToMoveIn <= 15 && form.dateConfirmed;
    const agent = currentMemberId ? teamMembers.find((m) => m.id === currentMemberId) : teamMembers.find((m) => m.role === "flow-ops");
    const newLead = {
      id: `l${Date.now()}`,
      name: form.name,
      phone: form.phone,
      area: form.area,
      budget,
      moveInDate: form.moveInDate,
      dateConfirmed: form.dateConfirmed,
      status: mytQualified ? "qualified" : "contacted",
      mytQualified,
      addedBy: agent?.id || "m1",
      addedByName: agent?.name || "Rahul Sharma",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      notes: ""
    };
    setLeads((prev) => [newLead, ...prev]);
    toast.success(mytQualified ? "MYT Qualified! Ready for tour" : "Lead added — not MYT qualified");
    setForm({ name: "", phone: "", area: "", budget: "10000", moveInDate: "", dateConfirmed: false });
    setShowForm(false);
  }, "handleSubmit");
  const pushToTour = /* @__PURE__ */ __name2((lead) => {
    navigate("/myt/schedule", { state: { lead } });
  }, "pushToTour");
  const selectClass = "w-full h-10 bg-surface-2 border border-border rounded-md px-3 text-sm text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:79:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:81:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:82:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:83:11", children: "MYT Lead Tracker" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:84:11", children: [
          "Paste any format · auto-dedup against ",
          identityLeadCount,
          " unified leads"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:88:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: pipActive ? "secondary" : "default",
            onClick: /* @__PURE__ */ __name2(() => pipActive ? closePip() : openPip(), "onClick"),
            disabled: !pipSupported && !pipActive,
            className: "h-8 text-xs gap-1.5",
            title: pipSupported ? "Pop dashboard out as a floating window over WhatsApp" : "Document Picture-in-Picture not supported in this browser",
            "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:89:11",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PictureInPicture2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:97:13" }),
              pipActive ? "Exit PiP" : "Open PiP"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "default",
            onClick: /* @__PURE__ */ __name2(async () => {
              if (!pipActive && pipSupported) await openPip();
              setShowQuickAdd(true);
            }, "onClick"),
            disabled: !pipSupported && !pipActive,
            className: "h-8 text-xs gap-1.5 bg-accent text-accent-foreground hover:bg-accent/90",
            title: "Open PiP and immediately start adding a lead inside the floating window",
            "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:100:11",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PictureInPicture2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:108:13" }),
              " PiP + Add Lead"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => setShowQuickAdd(true), "onClick"), className: "h-8 text-xs gap-1.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:110:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:111:13" }),
          " Quick Add"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => setShowParserTest(true), "onClick"), className: "h-8 text-xs gap-1.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:113:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:114:13" }),
          " Run Parser Test"
        ] })
      ] })
    ] }),
    !pipSupported && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-3 text-xs flex items-start gap-2", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:121:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-muted-foreground shrink-0 mt-0.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:122:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:123:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:124:13", children: "Picture-in-Picture isn't available in this browser." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:125:13", children: [
          "For the floating dashboard, open this site in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:126:61", children: "Chrome, Edge, Brave or Opera" }),
          " on desktop. Alternative: use split-screen (Windows: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-1 rounded border border-border", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:127:64", children: "Win" }),
          "+",
          /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-1 rounded border border-border", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:127:125", children: "←" }),
          " · macOS: drag tab into a Stage Manager group)."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 rounded-lg border border-border p-0.5 bg-surface-2/50 w-fit", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:134:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => setMode("paste"), "onClick"), className: `px-2.5 py-1 text-[11px] rounded-md ${mode === "paste" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:135:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 inline mr-1", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:136:11" }),
        "Paste"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setMode("manual"), "onClick"), className: `px-2.5 py-1 text-[11px] rounded-md ${mode === "manual" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:138:9", children: "Manual" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setMode("requests"), "onClick"), className: `px-2.5 py-1 text-[11px] rounded-md ${mode === "requests" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:141:9", children: "Requests" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:146:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 flex items-center gap-3", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:147:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-role-tcm", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:148:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:149:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:150:13", children: qualified.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:151:13", children: "MYT Qualified" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 flex items-center gap-3", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:154:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 text-danger", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:155:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:156:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:157:13", children: unqualified.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:158:13", children: "Not Qualified" })
        ] })
      ] })
    ] }),
    mode === "paste" && /* @__PURE__ */ jsxRuntimeExports.jsx(PasteToLead, { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:163:28" }),
    mode === "requests" && /* @__PURE__ */ jsxRuntimeExports.jsx(RequestAccessSheet, { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:164:31" }),
    mode === "manual" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:166:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => setShowForm(!showForm), "onClick"), className: "h-8 text-xs gap-1", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:167:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:168:13" }),
      " ",
      showForm ? "Hide form" : "Manual MYT form"
    ] }) }),
    mode === "manual" && showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "glass-card p-4 space-y-3", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:175:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:176:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:177:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:178:15", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.name, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, name: e.target.value })), "onChange"), required: true, className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:179:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:181:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:182:15", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.phone, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, phone: e.target.value })), "onChange"), required: true, className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:183:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:186:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:187:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:188:15", children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.area, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, area: e.target.value })), "onChange"), className: selectClass, "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:189:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:190:17", children: "Select Area" }),
            zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z.area, "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:191:33", children: z.area }, z.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:194:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:195:15", children: "Budget (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: form.budget, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, budget: e.target.value })), "onChange"), className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:196:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:198:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:199:15", children: "Move-in Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: form.moveInDate, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, moveInDate: e.target.value })), "onChange"), required: true, className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:200:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:203:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.dateConfirmed, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, dateConfirmed: e.target.checked })), "onChange"), className: "rounded", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:204:13" }),
        "Date confirmed by lead"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:207:11", children: "Add & Qualify Lead" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:212:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-role-tcm", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:213:9", children: "✅ MYT Qualified — Push to Tour" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:214:9", children: [
        qualified.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:215:38", children: "No qualified leads yet" }),
        qualified.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-surface-2/50", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:217:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:218:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:219:17", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs ml-2", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:220:17", children: [
              l.area,
              " · ₹",
              l.budget.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs ml-2", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:221:17", children: [
              "Move-in: ",
              l.moveInDate
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:223:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${l.phone}`, className: "p-2 rounded-md bg-primary/10 text-primary", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:224:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:225:19" }) }),
            l.status !== "tour-scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => pushToTour(l), "onClick"), className: "h-8 text-xs gap-1", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:228:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:229:21" }),
              " Schedule Tour"
            ] }),
            l.status === "tour-scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-1 rounded-full bg-role-tcm/15 text-role-tcm", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:233:19", children: "Tour Set" })
          ] })
        ] }, l.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:242:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading font-semibold text-xs md:text-sm mb-3 text-danger", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:243:9", children: "❌ Not Qualified" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:244:9", children: [
        unqualified.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:245:40", children: "All leads are qualified!" }),
        unqualified.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3 py-2.5 rounded-lg bg-surface-2/30", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:247:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:248:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:249:17", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs ml-2", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:250:17", children: [
              l.area,
              " · ₹",
              l.budget.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-wrap", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:252:15", children: [
            l.budget < 7e3 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-danger/10 text-danger", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:253:37", children: "Low budget" }),
            !l.dateConfirmed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-warning/10 text-warning", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:254:38", children: "No date" }),
            !zones.some((z) => z.area === l.area) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-danger/10 text-danger", "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:255:57", children: "Area N/A" })
          ] })
        ] }, l.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParserTestModal, { open: showParserTest, onClose: /* @__PURE__ */ __name2(() => setShowParserTest(false), "onClose"), "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:262:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAddLeadPanel, { open: showQuickAdd, onClose: /* @__PURE__ */ __name2(() => setShowQuickAdd(false), "onClose"), "data-tsd-source": "/src/myt/pages/MYTLeadTracker.tsx:263:7" })
  ] });
}
__name(MYTLeadTracker, "MYTLeadTracker");
__name2(MYTLeadTracker, "MYTLeadTracker");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/leads.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MYTLeadTracker, { "data-tsd-source": "/src/routes/myt/leads.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
