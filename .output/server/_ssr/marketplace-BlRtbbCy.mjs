var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { aB as useAppState, aI as zones, q as cn, aK as intentBg, k as Button, aH as teamMembers } from "./router-xBhBcQRf.mjs";
import { z as zoneMedianBudget, l as leadIntent, b as budgetPowerScore, c as conversionProbability, u as urgencyExpiry, U as UrgencyTimer } from "./UrgencyTimer-qSjIb3H1.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useNavigate } from "./react-router-dom-DTg4HJ59.mjs";
import { L as LeadControlPanel } from "./LeadControlPanel-C0LO6eCh.mjs";
import "../_libs/react-dom.mjs";
import { Z as Zap, P as Phone, K as MapPin, W as Wallet, y as Calendar, T as TrendingUp, S as Sparkles, bJ as Hand } from "../_libs/lucide-react.mjs";

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
import "./blocks-BquurJE3.mjs";
import "./slider-Bs5Yl8ak.mjs";
import "../_libs/radix-ui__react-slider.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function LeadMarketplace() {
  const { leads, setLeads, currentRole, currentMemberId, globalZoneFilter } = useAppState();
  const navigate = useNavigate();
  const enriched = reactExports.useMemo(() => {
    return leads.filter((l) => l.status !== "dead" && l.status !== "tour-scheduled").filter((l) => !globalZoneFilter || zones.find((z) => z.id === globalZoneFilter)?.area === l.area).map((l) => {
      const median = zoneMedianBudget(leads, l.area);
      const intent = leadIntent(l);
      const bp = l.budgetPowerScore ?? budgetPowerScore(l.budget, median);
      const cp = l.conversionProbability ?? conversionProbability(bp, intent);
      const exp = l.urgencyExpiresAt ?? urgencyExpiry(intent, l.createdAt);
      return { lead: l, intent, budgetPower: bp, conversionProb: cp, expiresAt: exp };
    }).sort((a, b) => b.conversionProb - a.conversionProb);
  }, [leads, globalZoneFilter]);
  const claimLead = /* @__PURE__ */ __name2((leadId) => {
    if (currentRole !== "tcm" || !currentMemberId) {
      toast.error("Pick yourself in the header to claim leads");
      return;
    }
    setLeads((prev) => prev.map((l) => l.id === leadId ? { ...l, claimedBy: currentMemberId, status: "qualified" } : l));
    const member = teamMembers.find((m) => m.id === currentMemberId);
    toast.success(`Claimed — go schedule the tour now`, {
      description: `${member?.name} owns this lead`
    });
  }, "claimLead");
  const scheduleFromLead = /* @__PURE__ */ __name2((l) => {
    navigate("/myt/schedule");
    toast.info(`Pre-fill: ${l.name} · ₹${l.budget} · ${l.area}`);
  }, "scheduleFromLead");
  const summary = {
    hard: enriched.filter((e) => e.intent === "hard").length,
    medium: enriched.filter((e) => e.intent === "medium").length,
    soft: enriched.filter((e) => e.intent === "soft").length,
    avgProb: enriched.length ? Math.round(enriched.reduce((s, e) => s + e.conversionProb, 0) / enriched.length) : 0
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:67:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:68:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground flex items-center gap-2", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:69:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-role-hr", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:70:11" }),
        "Lead Marketplace"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:73:9", children: currentRole === "tcm" ? "Live unassigned leads — claim before they expire" : "Watch demand flow through the funnel in real time" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:80:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Hard", value: summary.hard, accent: "green", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:81:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Medium", value: summary.medium, accent: "amber", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:82:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Soft", value: summary.soft, "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:83:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Avg Conv %", value: `${summary.avgProb}%`, accent: "primary", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:84:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:87:7", children: [
      enriched.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:89:11", children: "No live leads right now. New ones surface as Flow Ops adds them." }),
      enriched.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "rounded-xl border p-3 space-y-2 transition-all",
            e.intent === "hard" && "border-role-tcm/30 bg-role-tcm/5",
            e.intent === "medium" && "border-role-hr/20 bg-role-hr/5",
            e.intent === "soft" && "border-border bg-surface-2/40",
            e.lead.claimedBy && "opacity-60"
          ),
          "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:92:11",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:102:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:103:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:104:17", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:105:19", children: e.lead.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[9px] px-1.5 py-0.5 rounded border font-medium uppercase", intentBg[e.intent]), "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:106:19", children: e.intent }),
                  e.lead.claimedBy && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:110:21", children: "Claimed" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5 flex-wrap", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:115:17", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${e.lead.phone}`, className: "flex items-center gap-1 hover:text-primary", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:116:19", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:116:106" }),
                    e.lead.phone
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:117:19", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:117:61" }),
                    e.lead.area
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:118:19", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:118:61" }),
                    "₹",
                    (e.lead.budget / 1e3).toFixed(0),
                    "k"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:119:19", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:119:61" }),
                    "Move ",
                    e.lead.moveInDate.slice(5)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(UrgencyTimer, { expiresAt: e.expiresAt, "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:122:15" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:126:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreInline, { label: "Budget power", value: e.budgetPower, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3" }), "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:127:15" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreInline, { label: "Conversion prob", value: e.conversionProb, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }), "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:128:15" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:131:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                LeadControlPanel,
                {
                  subject: { kind: "lead", lead: e.lead },
                  trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 text-xs gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
                    " Open"
                  ] }),
                  "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:132:15"
                }
              ),
              currentRole === "tcm" && !e.lead.claimedBy && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => claimLead(e.lead.id), "onClick"), className: "h-8 text-xs flex-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:141:17", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:142:19" }),
                " Claim"
              ] }),
              (currentRole === "flow-ops" || currentRole === "tcm" && e.lead.claimedBy === currentMemberId) && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => scheduleFromLead(e.lead), "onClick"), className: "h-8 text-xs flex-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:146:17", children: "Schedule tour →" })
            ] })
          ]
        },
        e.lead.id
      ))
    ] })
  ] });
}
__name(LeadMarketplace, "LeadMarketplace");
__name2(LeadMarketplace, "LeadMarketplace");
function Stat({ label, value, accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-2.5", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:160:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:161:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
      "text-xl font-bold tabular-nums mt-0.5",
      accent === "green" && "text-role-tcm",
      accent === "amber" && "text-role-hr",
      accent === "primary" && "text-primary",
      !accent && "text-foreground"
    ), "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:162:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
function ScoreInline({ label, value, icon }) {
  const color = value >= 70 ? "bg-role-tcm" : value >= 45 ? "bg-role-hr" : "bg-danger";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:176:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:177:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:178:9", children: [
        icon,
        label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums text-foreground", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:179:9", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 rounded-full bg-surface-3 mt-0.5 overflow-hidden", "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:181:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-full", color), style: { width: `${value}%` }, "data-tsd-source": "/src/myt/pages/LeadMarketplace.tsx:182:9" }) })
  ] });
}
__name(ScoreInline, "ScoreInline");
__name2(ScoreInline, "ScoreInline");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/marketplace.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadMarketplace, { "data-tsd-source": "/src/routes/myt/marketplace.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
