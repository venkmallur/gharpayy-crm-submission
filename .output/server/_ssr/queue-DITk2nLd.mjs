var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, b as buildDoNextQueue } from "./AppShell-rXFHrudv.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useApp, c as useMountedNow, C as Card, k as Button, B as Badge, G as waLink } from "./router-Cbs6ivkN.mjs";
import { u as useCRM10x } from "./store-CzExz6PU.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { ag as ClipboardCheck, w as Sun, Z as Zap, P as Phone, F as Flame, q as ChevronRight, H as MessageSquare } from "../_libs/lucide-react.mjs";
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
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./analytics-DmYAqfQ6.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/cmdk.mjs";
import "./personas-yLdDZDbn.mjs";
import "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const BAND_META = {
  fire: {
    label: "🔥 FIRE",
    tone: "border-destructive bg-destructive/10 text-destructive",
    icon: Flame,
    desc: "Top priority — every minute costs revenue."
  },
  confirm: {
    label: "📞 CONFIRM",
    tone: "border-warning bg-warning/10 text-warning",
    icon: Phone,
    desc: "Visits today/tomorrow — call to confirm."
  },
  recover: {
    label: "⚡ RECOVER",
    tone: "border-accent bg-accent/10 text-accent",
    icon: Zap,
    desc: "Overdue follow-ups — re-engage now."
  },
  nurture: {
    label: "🌱 NURTURE",
    tone: "border-info bg-info/10 text-info",
    icon: Sun,
    desc: "Follow-ups due today."
  },
  prospect: {
    label: "📋 PROSPECT",
    tone: "border-border bg-muted/50 text-muted-foreground",
    icon: ClipboardCheck,
    desc: "Leads without a follow-up — set one."
  }
};
function DailyActionQueue() {
  const { leads, tours, followUps, role, currentTcmId, tcms, selectLead, logCall, sendMessage } = useApp();
  const [now, mounted] = useMountedNow();
  const callAttempts = useCRM10x((s) => s.calls);
  const messageOutcomes = useCRM10x((s) => s.messageOutcomes);
  const [collapsed, setCollapsed] = reactExports.useState(() => {
    if (typeof window === "undefined") return { fire: false, confirm: false, recover: false, nurture: false, prospect: false };
    try {
      const raw = window.localStorage.getItem("daq:collapsed");
      if (raw) return { fire: false, confirm: false, recover: false, nurture: false, prospect: false, ...JSON.parse(raw) };
    } catch {
    }
    return { fire: false, confirm: false, recover: false, nurture: false, prospect: false };
  });
  reactExports.useEffect(() => {
    try {
      window.localStorage.setItem("daq:collapsed", JSON.stringify(collapsed));
    } catch {
    }
  }, [collapsed]);
  const filterTcm = role === "tcm" ? currentTcmId : void 0;
  const queue = reactExports.useMemo(
    () => mounted ? buildDoNextQueue(leads, tours, followUps, now, filterTcm) : [],
    [leads, tours, followUps, now, filterTcm, mounted]
  );
  const bands = reactExports.useMemo(() => {
    const map = {
      fire: [],
      confirm: [],
      recover: [],
      nurture: [],
      prospect: []
    };
    queue.forEach((a) => {
      if (a.kind === "post-tour-overdue" || a.kind === "first-response") map.fire.push(a);
      else if (a.kind === "tour-today") map.confirm.push(a);
      else if (a.kind === "follow-up-overdue") map.recover.push(a);
      else if (a.kind === "follow-up-today") map.nurture.push(a);
      else map.prospect.push(a);
    });
    return map;
  }, [queue]);
  const totalToDo = queue.length;
  const fireCount = bands.fire.length;
  const completedToday = mounted ? (() => {
    const today = new Date(now).toDateString();
    const calls = callAttempts.filter((c) => {
      if (filterTcm && c.loggedBy !== filterTcm) return false;
      return new Date(c.ts).toDateString() === today;
    }).length;
    const msgs = messageOutcomes.filter((m) => {
      if (filterTcm && m.loggedBy !== filterTcm) return false;
      return new Date(m.ts).toDateString() === today;
    }).length;
    return calls + msgs;
  })() : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-5xl mx-auto", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:124:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between gap-3 flex-wrap", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:125:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:126:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:127:11", children: "Daily Action Queue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:128:11", children: [
          role === "tcm" ? `Your queue · ${tcms.find((t) => t.id === currentTcmId)?.name ?? "—"}` : "Team queue · all agents",
          " · ",
          mounted ? format(new Date(now), "EEEE, MMM d") : " "
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:135:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "To do", value: totalToDo, tone: totalToDo > 0 ? "default" : "success", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:136:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "🔥 Fire", value: fireCount, tone: fireCount > 0 ? "danger" : "success", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:137:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Logged", value: completedToday, tone: "success", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:138:11" })
      ] })
    ] }),
    totalToDo === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-12 text-center space-y-3", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:143:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:144:11", children: "🎯" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:145:11", children: "Inbox zero — all clear." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:146:11", children: "No pending actions. Use this time to add fresh leads or coach the team." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leads", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:149:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:150:13", children: "Browse leads" }) })
    ] }),
    ["fire", "confirm", "recover", "nurture", "prospect"].map((band) => {
      const items = bands[band];
      if (items.length === 0) return null;
      const meta = BAND_META[band];
      const Icon = meta.icon;
      const isCollapsed = collapsed[band];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: `rounded-xl border-2 ${meta.tone} overflow-hidden`,
          "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:162:11",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: /* @__PURE__ */ __name2(() => setCollapsed((c) => ({ ...c, [band]: !c[band] })), "onClick"),
                className: "w-full flex items-center justify-between px-4 py-3 hover:bg-foreground/5 transition-colors",
                "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:166:13",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:170:15", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:171:17" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:172:17", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:173:19", children: meta.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] opacity-80", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:174:19", children: meta.desc })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:177:15", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-background text-foreground font-mono", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:178:17", children: items.length }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 transition-transform ${isCollapsed ? "" : "rotate-90"}`,
                        "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:179:17"
                      }
                    )
                  ] })
                ]
              }
            ),
            !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card divide-y divide-border", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:186:15", children: items.map((a) => {
              const lead = leads.find((l) => l.id === a.leadId);
              if (!lead) return null;
              const tcm = tcms.find((t) => t.id === lead.assignedTcmId);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-4 py-3 hover:bg-muted/30 transition-colors flex items-center gap-3",
                  "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:192:21",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"),
                        className: "flex-1 text-left min-w-0",
                        "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:196:23",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:200:25", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:201:27", children: lead.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-muted-foreground", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:202:27", children: [
                              "score ",
                              Math.round(a.score)
                            ] }),
                            lead.intent === "hot" && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-destructive/15 text-destructive text-[10px]", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:206:29", children: "HOT" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:209:25", children: [
                            a.reason,
                            " · ",
                            tcm?.initials ?? "—",
                            " · ",
                            lead.preferredArea
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:213:23", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "icon",
                          variant: "ghost",
                          className: "h-8 w-8",
                          onClick: /* @__PURE__ */ __name2(() => {
                            logCall(lead.id);
                            toast.success(`Call logged · ${lead.name}`);
                          }, "onClick"),
                          title: "Log call",
                          "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:214:25",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:224:27" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "icon",
                          variant: "ghost",
                          className: "h-8 w-8",
                          onClick: /* @__PURE__ */ __name2(() => {
                            const text = `Hi ${lead.name}, following up on your search in ${lead.preferredArea}. Free for a quick chat?`;
                            sendMessage(lead.id, text);
                            if (typeof window !== "undefined" && lead.phone) {
                              window.open(waLink(lead.phone, text), "_blank", "noopener");
                            }
                            toast.success(`WA opened · ${lead.name}`);
                          }, "onClick"),
                          title: "WhatsApp",
                          "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:226:25",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:240:27" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "icon",
                          variant: "ghost",
                          className: "h-8 w-8",
                          onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"),
                          title: "Open",
                          "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:242:25",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:249:27" })
                        }
                      )
                    ] })
                  ]
                },
                `${a.leadId}-${a.kind}`
              );
            }) })
          ]
        },
        band
      );
    })
  ] });
}
__name(DailyActionQueue, "DailyActionQueue");
__name2(DailyActionQueue, "DailyActionQueue");
function Stat({
  label,
  value,
  tone
}) {
  const cls = tone === "danger" ? "border-destructive/40 bg-destructive/5 text-destructive" : tone === "success" ? "border-success/40 bg-success/5 text-success" : "border-border bg-card";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border px-3 py-1.5 text-xs ${cls}`, "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:274:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider opacity-80", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:275:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-display font-bold", "data-tsd-source": "/src/components/crm10x/DailyActionQueue.tsx:276:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/queue.tsx:13:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DailyActionQueue, { "data-tsd-source": "/src/routes/queue.tsx:14:7" }) }), "SplitComponent");
export {
  SplitComponent as component
};
