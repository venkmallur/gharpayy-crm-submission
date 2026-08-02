var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { u as useIdentityStore } from "./store-CSrICxO2.mjs";
import { O as OBJECTION_TAGS, c as computeNextAction, b as breachState, r as renderForLead } from "./execution-engine-BsL_XZHr.mjs";
import { k as Button, q as cn, ar as useNow, C as Card, B as Badge, A as Textarea, X as Input, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent } from "./router-xBhBcQRf.mjs";
import { t as toast } from "./use-toast-BlKShdOI.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";


import "./index.mjs";

import "../_libs/seroval.mjs";
import { b as Check, g as TriangleAlert, s as Clock, ac as Send, H as MessageSquare, P as Phone, S as Sparkles, J as CalendarPlus, bm as UserX, bn as RotateCw, F as Flame } from "../_libs/lucide-react.mjs";

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
import "./audit-log-YJnFAPHk.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function ObjectionChipRow({
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-wrap gap-1.5", className), "data-tsd-source": "/src/components/execution/ObjectionChipRow.tsx:15:5", children: OBJECTION_TAGS.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      size: "sm",
      variant: value === tag ? "default" : "outline",
      className: "h-7 rounded-full text-[11px] font-medium",
      onClick: /* @__PURE__ */ __name2(() => onChange(tag), "onClick"),
      "data-tsd-source": "/src/components/execution/ObjectionChipRow.tsx:17:9",
      children: tag.replace(/-/g, " ")
    },
    tag
  )) });
}
__name(ObjectionChipRow, "ObjectionChipRow");
__name2(ObjectionChipRow, "ObjectionChipRow");
const COLORS = {
  L: "bg-blue-500/15 text-blue-700 dark:text-blue-300 ring-blue-500/30",
  T: "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-amber-500/30",
  CI: "bg-rose-500/15 text-rose-700 dark:text-rose-300 ring-rose-500/30"
};
function PhaseDayBadge({ action, className }) {
  const sign = action.dayOffset >= 0 ? "+" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ring-1",
        COLORS[action.anchor],
        className
      ),
      title: action.reason,
      "data-tsd-source": "/src/components/execution/PhaseDayBadge.tsx:13:5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-70", "data-tsd-source": "/src/components/execution/PhaseDayBadge.tsx:21:7", children: [
          "P",
          action.phase
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/execution/PhaseDayBadge.tsx:22:7", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/components/execution/PhaseDayBadge.tsx:23:7", children: [
          action.anchor,
          sign,
          action.dayOffset
        ] })
      ]
    }
  );
}
__name(PhaseDayBadge, "PhaseDayBadge");
__name2(PhaseDayBadge, "PhaseDayBadge");
function NextActionCard({ lead, compact = false }) {
  const now = useNow(3e4);
  const nowDate = now ? new Date(now) : /* @__PURE__ */ new Date();
  const action = computeNextAction(lead, nowDate);
  const breach = breachState(lead, nowDate);
  const recordContact = useIdentityStore((s) => s.recordContact);
  const recordReply = useIdentityStore((s) => s.recordReply);
  const setObjection = useIdentityStore((s) => s.setObjection);
  const bookTour = useIdentityStore((s) => s.bookTour);
  const markNoShow = useIdentityStore((s) => s.markNoShow);
  const markToured = useIdentityStore((s) => s.markToured);
  const [editing, setEditing] = reactExports.useState(false);
  const [body, setBody] = reactExports.useState(action ? renderForLead(action.body, lead) : "");
  const [tourDate, setTourDate] = reactExports.useState("");
  if (!action) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 text-sm text-muted-foreground flex items-center gap-2", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:42:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-emerald-500", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:43:9" }),
      "No next action — lead is at terminal state."
    ] });
  }
  const rendered = editing ? body : renderForLead(action.body, lead);
  const phoneDigits = (lead.phoneE164 || lead.phoneRaw || "").replace(/\D/g, "");
  const waUrl = phoneDigits ? `https://wa.me/${phoneDigits}?text=${encodeURIComponent(rendered)}` : null;
  const breachClass = {
    ok: "border-border",
    due: "border-amber-500/60 bg-amber-500/5",
    breached: "border-rose-500/60 bg-rose-500/5",
    escalated: "border-rose-700 bg-rose-700/10"
  }[breach];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("p-3 space-y-3 border-2 transition-colors", breachClass), "data-tsd-source": "/src/components/execution/NextActionCard.tsx:63:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:65:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 min-w-0", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:66:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:67:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhaseDayBadge, { action, "data-tsd-source": "/src/components/execution/NextActionCard.tsx:68:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold truncate", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:69:13", children: action.label }),
        breach !== "ok" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", className: "gap-1 text-[10px]", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:71:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-3", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:72:17" }),
          breach.toUpperCase()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:77:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:78:13" }),
        "Due ",
        new Date(action.dueAt).toLocaleString([], { hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:80:13", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/execution/NextActionCard.tsx:81:13", children: action.reason })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-muted/40 p-2.5 text-[13px] whitespace-pre-wrap leading-relaxed", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:87:7", children: editing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        value: body,
        onChange: /* @__PURE__ */ __name2((e) => setBody(e.target.value), "onChange"),
        className: "min-h-[120px] bg-background",
        autoFocus: true,
        "data-tsd-source": "/src/components/execution/NextActionCard.tsx:89:11"
      }
    ) : rendered }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:99:7", children: [
      waUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          asChild: true,
          onClick: /* @__PURE__ */ __name2(() => recordContact(lead.ulid, "wa"), "onClick"),
          "data-tsd-source": "/src/components/execution/NextActionCard.tsx:101:11",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waUrl, target: "_blank", rel: "noreferrer", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:106:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:107:15" }),
            " Send WhatsApp"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => {
        recordContact(lead.ulid, "wa");
        toast({ title: "Marked sent", description: action.label });
      }, "onClick"), "data-tsd-source": "/src/components/execution/NextActionCard.tsx:111:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:115:11" }),
        " Mark Sent"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => {
        recordReply(lead.ulid);
        toast({ title: "Reply logged" });
      }, "onClick"), "data-tsd-source": "/src/components/execution/NextActionCard.tsx:117:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:121:11" }),
        " Log Reply"
      ] }),
      phoneDigits && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", asChild: true, onClick: /* @__PURE__ */ __name2(() => recordContact(lead.ulid, "call"), "onClick"), "data-tsd-source": "/src/components/execution/NextActionCard.tsx:124:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:+${phoneDigits}`, "data-tsd-source": "/src/components/execution/NextActionCard.tsx:125:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:126:15" }),
        " Call"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => setEditing((v) => !v), "onClick"), "data-tsd-source": "/src/components/execution/NextActionCard.tsx:130:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:131:11" }),
        " ",
        editing ? "Use template" : "Edit"
      ] })
    ] }),
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      action.phase <= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:139:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "datetime-local",
            value: tourDate,
            onChange: /* @__PURE__ */ __name2((e) => setTourDate(e.target.value), "onChange"),
            className: "h-8 text-xs",
            "data-tsd-source": "/src/components/execution/NextActionCard.tsx:140:15"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "secondary",
            disabled: !tourDate,
            onClick: /* @__PURE__ */ __name2(() => {
              bookTour(lead.ulid, new Date(tourDate).toISOString());
              setTourDate("");
              toast({ title: "Tour booked" });
            }, "onClick"),
            "data-tsd-source": "/src/components/execution/NextActionCard.tsx:146:15",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPlus, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:156:17" }),
              " Book tour"
            ]
          }
        )
      ] }),
      action.phase === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:161:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => markNoShow(lead.ulid), "onClick"), "data-tsd-source": "/src/components/execution/NextActionCard.tsx:162:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:163:17" }),
          " No-show"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => markToured(lead.ulid, "WARM"), "onClick"), "data-tsd-source": "/src/components/execution/NextActionCard.tsx:165:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:166:17" }),
          " Toured"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => {
          const d = lead.anchors?.tourDate ? new Date(+new Date(lead.anchors.tourDate) + 24 * 36e5).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
          useIdentityStore.getState().rescheduleTour(lead.ulid, d);
        }, "onClick"), "data-tsd-source": "/src/components/execution/NextActionCard.tsx:168:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCw, { className: "size-3.5 mr-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:172:17" }),
          " Reschedule +1d"
        ] })
      ] }),
      action.phase === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:177:13", children: ["HOT", "WARM", "COLD"].map((lvl) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: lead.interestLevel === lvl ? "default" : "outline",
          onClick: /* @__PURE__ */ __name2(() => useIdentityStore.getState().setInterestLevel(lead.ulid, lvl), "onClick"),
          "data-tsd-source": "/src/components/execution/NextActionCard.tsx:179:17",
          children: lvl
        },
        lvl
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:191:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/components/execution/NextActionCard.tsx:192:13", children: "Primary objection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ObjectionChipRow,
          {
            value: lead.primaryObjection,
            onChange: /* @__PURE__ */ __name2((t) => setObjection(lead.ulid, t), "onChange"),
            "data-tsd-source": "/src/components/execution/NextActionCard.tsx:193:13"
          }
        )
      ] })
    ] })
  ] });
}
__name(NextActionCard, "NextActionCard");
__name2(NextActionCard, "NextActionCard");
const DAY = 24 * 60 * 60 * 1e3;
function ExecutionQueue() {
  const leads = useIdentityStore((s) => s.leads);
  const now = useNow(3e4);
  const nowDate = now ? new Date(now) : /* @__PURE__ */ new Date();
  const [q, setQ] = reactExports.useState("");
  const enriched = reactExports.useMemo(() => leads.map((l) => {
    const action = computeNextAction(l, nowDate);
    const breach = breachState(l, nowDate);
    return { lead: l, action, breach };
  }).filter((x) => x.action), [leads, nowDate]);
  const filtered = q ? enriched.filter((e) => e.lead.name.toLowerCase().includes(q.toLowerCase())) : enriched;
  const dueNow = filtered.filter((e) => e.breach !== "ok");
  const today = filtered.filter((e) => +new Date(e.action.dueAt) <= +nowDate + DAY && e.breach === "ok");
  const tomorrow = filtered.filter((e) => {
    const due = +new Date(e.action.dueAt);
    return due > +nowDate + DAY && due <= +nowDate + 2 * DAY;
  });
  const breached = filtered.filter((e) => e.breach === "breached" || e.breach === "escalated");
  const cold = filtered.filter((e) => e.action.phase === 4);
  const fifteenMinLeads = enriched.filter((e) => !e.lead.lastContactAt && +nowDate - +new Date(e.lead.createdAt) < 15 * 60 * 1e3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4 max-w-4xl mx-auto", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:44:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "space-y-2", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:45:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:46:9", children: "Execution Queue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:47:9", children: "Date-anchored next actions. Every lead has exactly one next move — execute on schedule." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:50:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:51:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-3", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:51:56" }),
          filtered.length,
          " actions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", className: "gap-1", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:52:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-3", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:52:58" }),
          breached.length,
          " breached"
        ] }),
        fifteenMinLeads.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "gap-1 bg-orange-500", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:54:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "size-3", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:54:52" }),
          fifteenMinLeads.length,
          " in 15-min law"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "Search leads…",
        value: q,
        onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"),
        className: "max-w-sm",
        "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:59:7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "due", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:66:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:67:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "due", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:68:11", children: [
          "Due now (",
          dueNow.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "today", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:69:11", children: [
          "Today (",
          today.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "tomorrow", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:70:11", children: [
          "Tomorrow (",
          tomorrow.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "breached", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:71:11", children: [
          "Breached (",
          breached.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "cold", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:72:11", children: [
          "Cold drip (",
          cold.length,
          ")"
        ] })
      ] }),
      ["due", "today", "tomorrow", "breached", "cold"].map((key) => {
        const list = { due: dueNow, today, tomorrow, breached, cold }[key];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: key, className: "space-y-3 mt-4", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:77:13", children: [
          list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 text-sm text-muted-foreground text-center", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:79:17", children: "Nothing here." }),
          list.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:82:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium px-1 flex items-center justify-between", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:83:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:84:21", children: e.lead.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:85:21", children: [
                e.lead.area,
                " · ",
                e.lead.phoneRaw || e.lead.phoneE164
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NextActionCard, { lead: e.lead, "data-tsd-source": "/src/components/execution/ExecutionQueue.tsx:89:19" })
          ] }, e.lead.ulid))
        ] }, key);
      })
    ] })
  ] });
}
__name(ExecutionQueue, "ExecutionQueue");
__name2(ExecutionQueue, "ExecutionQueue");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/execution.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutionQueue, { "data-tsd-source": "/src/routes/execution.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
