var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useApp, X as Input, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, k as Button, B as Badge } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a3 as Search, g as TriangleAlert, A as ArrowRight, P as Phone, r as MessageCircle, K as MapPin, F as Flame, l as CircleCheck } from "../_libs/lucide-react.mjs";
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
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const STAGE_STYLE = {
  "new": "bg-blue-500/15 text-blue-600 border-blue-500/30",
  "contacted": "bg-sky-500/15 text-sky-600 border-sky-500/30",
  "tour-scheduled": "bg-indigo-500/15 text-indigo-600 border-indigo-500/30",
  "tour-done": "bg-amber-500/15 text-amber-600 border-amber-500/30",
  "negotiation": "bg-orange-500/15 text-orange-600 border-orange-500/30",
  "booked": "bg-green-500/15 text-green-600 border-green-500/30",
  "dropped": "bg-zinc-500/15 text-zinc-500 border-zinc-500/30"
};
const INTENT_STYLE = {
  hot: "bg-red-500/15 text-red-600 border-red-500/30",
  warm: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  cold: "bg-slate-500/15 text-slate-500 border-slate-500/30"
};
function isOrphan(l) {
  return !l.assignedTcmId || !l.nextFollowUpAt;
}
__name(isOrphan, "isOrphan");
__name2(isOrphan, "isOrphan");
const NEXT_PROMPT = {
  "new": "Call now → confirm budget + area",
  "contacted": "Schedule tour within 24h",
  "tour-scheduled": "Confirm tour 2h before",
  "tour-done": "Send quotation today",
  "negotiation": "Close objection · follow up tomorrow",
  "booked": "Collect token + share onboarding",
  "dropped": "Mark reason + add to revival sequence"
};
function EasyMode() {
  const leads = useApp((s) => s.leads);
  const tcms = useApp((s) => s.tcms);
  const setStage = useApp((s) => s.setLeadStage);
  const setIntent = useApp((s) => s.setLeadIntent);
  const logCall = useApp((s) => s.logCall);
  const autoAssign = useApp((s) => s.autoAssignLead);
  const setFollowUp = useApp((s) => s.setLeadFollowUp);
  const [q, setQ] = reactExports.useState("");
  const [onlyOrphans, setOnlyOrphans] = reactExports.useState(false);
  const [prompt, setPrompt] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    const ql = q.trim().toLowerCase();
    return leads.filter((l) => onlyOrphans ? isOrphan(l) : true).filter((l) => !ql || l.name.toLowerCase().includes(ql) || l.phone.includes(ql) || l.preferredArea.toLowerCase().includes(ql)).slice(0, 200);
  }, [leads, q, onlyOrphans]);
  const orphanCount = leads.filter(isOrphan).length;
  const tcmName = /* @__PURE__ */ __name2((id) => tcms.find((t) => t.id === id)?.name ?? "—", "tcmName");
  const handleStageChange = /* @__PURE__ */ __name2((l, s) => {
    setStage(l.id, s);
    toast.success(`${l.name} → ${s}`);
    setPrompt({
      lead: l,
      stage: s
    });
  }, "handleStageChange");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background p-4 md:p-6 max-w-5xl mx-auto", "data-tsd-source": "/src/routes/easy.tsx:94:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-4", "data-tsd-source": "/src/routes/easy.tsx:95:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", "data-tsd-source": "/src/routes/easy.tsx:96:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/easy.tsx:97:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", "data-tsd-source": "/src/routes/easy.tsx:98:13", children: "Easy Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/easy.tsx:99:13", children: "One screen. One click. No training needed." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/impact", className: "text-xs text-muted-foreground hover:text-foreground", "data-tsd-source": "/src/routes/easy.tsx:101:11", children: "Pro view →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", "data-tsd-source": "/src/routes/easy.tsx:106:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[200px]", "data-tsd-source": "/src/routes/easy.tsx:107:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground", "data-tsd-source": "/src/routes/easy.tsx:108:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "h-9 pl-7 text-sm", placeholder: "Search name, phone, area…", value: q, onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"), "data-tsd-source": "/src/routes/easy.tsx:109:13" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => setOnlyOrphans((v) => !v), "onClick"), className: `h-9 px-3 rounded-md text-xs font-medium border flex items-center gap-1.5 transition ${onlyOrphans ? "bg-red-500 text-white border-red-500" : "bg-red-500/10 text-red-600 border-red-500/30 hover:bg-red-500/20"}`, "data-tsd-source": "/src/routes/easy.tsx:117:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/easy.tsx:124:13" }),
          orphanCount,
          " orphan",
          orphanCount === 1 ? "" : "s"
        ] })
      ] })
    ] }),
    filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/routes/easy.tsx:131:9", children: [
      onlyOrphans ? "No orphan leads. " : "No leads match. ",
      "You're clear."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/routes/easy.tsx:137:7", children: filtered.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeadRow, { lead: l, tcmName: tcmName(l.assignedTcmId), orphan: isOrphan(l), onCall: /* @__PURE__ */ __name2(() => {
      logCall(l.id);
      toast.success(`Call logged · ${l.name}`);
    }, "onCall"), onWa: /* @__PURE__ */ __name2(() => {
      window.open(`https://wa.me/${l.phone.replace(/\D/g, "")}`, "_blank");
      toast.success("WhatsApp opened");
    }, "onWa"), onVisit: /* @__PURE__ */ __name2(() => handleStageChange(l, "tour-scheduled"), "onVisit"), onHot: /* @__PURE__ */ __name2(() => {
      setIntent(l.id, "hot");
      toast.success(`${l.name} marked HOT`);
    }, "onHot"), onToken: /* @__PURE__ */ __name2(() => handleStageChange(l, "booked"), "onToken"), onAssign: /* @__PURE__ */ __name2(() => {
      const r = autoAssign(l.id);
      toast.success(`Assigned to ${tcmName(r.tcmId)}`);
    }, "onAssign"), onStage: /* @__PURE__ */ __name2((s) => handleStageChange(l, s), "onStage"), "data-tsd-source": "/src/routes/easy.tsx:139:11" }, l.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!prompt, onOpenChange: /* @__PURE__ */ __name2((v) => !v && setPrompt(null), "onOpenChange"), "data-tsd-source": "/src/routes/easy.tsx:162:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", "data-tsd-source": "/src/routes/easy.tsx:163:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { "data-tsd-source": "/src/routes/easy.tsx:164:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-sm", "data-tsd-source": "/src/routes/easy.tsx:165:13", children: "What next?" }) }),
      prompt && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/routes/easy.tsx:168:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted p-3", "data-tsd-source": "/src/routes/easy.tsx:169:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", "data-tsd-source": "/src/routes/easy.tsx:170:17", children: "Recommended action" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/routes/easy.tsx:171:17", children: NEXT_PROMPT[prompt.stage] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/routes/easy.tsx:173:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "flex-1 h-8 text-xs", onClick: /* @__PURE__ */ __name2(() => {
            const t = /* @__PURE__ */ new Date();
            t.setDate(t.getDate() + 1);
            setFollowUp(prompt.lead.id, t.toISOString(), "high", NEXT_PROMPT[prompt.stage]);
            toast.success("Follow-up set for tomorrow");
            setPrompt(null);
          }, "onClick"), "data-tsd-source": "/src/routes/easy.tsx:174:17", children: [
            "Schedule +1 day ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 ml-1", "data-tsd-source": "/src/routes/easy.tsx:184:35" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-8 text-xs", onClick: /* @__PURE__ */ __name2(() => setPrompt(null), "onClick"), "data-tsd-source": "/src/routes/easy.tsx:186:17", children: "Skip" })
        ] })
      ] })
    ] }) })
  ] });
}
__name(EasyMode, "EasyMode");
__name2(EasyMode, "EasyMode");
function LeadRow(props) {
  const {
    lead: l,
    tcmName,
    orphan
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border bg-card p-3 ${orphan ? "border-red-500/40 ring-1 ring-red-500/20" : ""}`, "data-tsd-source": "/src/routes/easy.tsx:213:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-3 mb-2", "data-tsd-source": "/src/routes/easy.tsx:214:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/easy.tsx:215:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/routes/easy.tsx:216:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm truncate", "data-tsd-source": "/src/routes/easy.tsx:217:13", children: l.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] px-1.5 py-0 ${INTENT_STYLE[l.intent]}`, "data-tsd-source": "/src/routes/easy.tsx:218:13", children: l.intent }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] px-1.5 py-0 ${STAGE_STYLE[l.stage]}`, "data-tsd-source": "/src/routes/easy.tsx:221:13", children: l.stage }),
        orphan && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] px-1.5 py-0 bg-red-500/15 text-red-600 border-red-500/30", "data-tsd-source": "/src/routes/easy.tsx:225:15", children: "⚠ orphan" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-0.5 truncate", "data-tsd-source": "/src/routes/easy.tsx:230:11", children: [
        l.phone,
        " · ",
        l.preferredArea,
        " · ₹",
        l.budget.toLocaleString("en-IN"),
        " · ",
        tcmName
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/routes/easy.tsx:237:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }), label: "Call", onClick: props.onCall, "data-tsd-source": "/src/routes/easy.tsx:238:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3" }), label: "WA", onClick: props.onWa, "data-tsd-source": "/src/routes/easy.tsx:239:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }), label: "Visit", onClick: props.onVisit, "data-tsd-source": "/src/routes/easy.tsx:240:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3" }), label: "Hot", onClick: props.onHot, tone: l.intent === "hot" ? "active" : "default", "data-tsd-source": "/src/routes/easy.tsx:241:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }), label: "Token", onClick: props.onToken, tone: "success", "data-tsd-source": "/src/routes/easy.tsx:247:9" }),
      orphan && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3" }), label: "Assign", onClick: props.onAssign, tone: "danger", "data-tsd-source": "/src/routes/easy.tsx:254:11" })
    ] })
  ] });
}
__name(LeadRow, "LeadRow");
__name2(LeadRow, "LeadRow");
function ActionBtn({
  icon,
  label,
  onClick,
  tone = "default"
}) {
  const cls = tone === "success" ? "bg-green-500/10 text-green-600 border-green-500/30 hover:bg-green-500/20" : tone === "danger" ? "bg-red-500/10 text-red-600 border-red-500/30 hover:bg-red-500/20" : tone === "active" ? "bg-red-500 text-white border-red-500 hover:bg-red-600" : "bg-background border-border hover:bg-muted";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: `h-7 px-2 rounded-md text-[11px] font-medium border flex items-center gap-1 transition ${cls}`, "data-tsd-source": "/src/routes/easy.tsx:280:5", children: [
    icon,
    label
  ] });
}
__name(ActionBtn, "ActionBtn");
__name2(ActionBtn, "ActionBtn");
export {
  EasyMode as component
};
