var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Z as Dialog, _ as DialogTrigger, k as Button, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, B as Badge } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as TrendingUp, p as Bell, f as Activity, aZ as Sunrise, Z as Zap, aF as ClipboardCopy } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function TenXOpsBar({ role, moved, breach, current, target, targetLabel, top5, stalled }) {
  const [lastRerank, setLastRerank] = reactExports.useState(() => Date.now());
  const [tick, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setLastRerank(Date.now());
    }, 6e4);
    return () => clearInterval(id);
  }, []);
  const ago = Math.max(0, Math.floor((Date.now() - lastRerank) / 1e3));
  const agoLabel = ago < 60 ? `${ago}s ago` : `${Math.floor(ago / 60)}m ago`;
  const progress = Math.min(100, Math.round(current / Math.max(target, 1) * 100));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-success/5 backdrop-blur-xl", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:55:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:56:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 md:gap-4 p-3", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:57:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:59:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-2.5 w-2.5", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:60:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-success animate-ping opacity-60", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:61:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-success", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:62:13" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:64:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:65:13", children: [
            role,
            " · live"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-mono", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:66:13", children: [
            "re-rank ",
            agoLabel
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sep, { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:70:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:73:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-md bg-success/15 text-success flex items-center justify-center", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:74:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:75:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:77:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:78:13", children: "Streak" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-heading font-semibold leading-none", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:79:13", children: [
            moved,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground ml-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:79:87", children: "moved" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sep, { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:83:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:86:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-9 w-9 rounded-md flex items-center justify-center ${breach > 0 ? "bg-danger/15 text-danger" : "bg-muted text-muted-foreground"}`, "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:87:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:88:13" }),
          breach > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 h-2 w-2 rounded-full bg-danger animate-pulse", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:89:28" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:91:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:92:13", children: "SLA breach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-base font-heading font-semibold leading-none ${breach > 0 ? "text-danger" : ""}`, "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:93:13", children: [
            breach,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground ml-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:93:125", children: "items" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sep, { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:97:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-[160px] flex-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:100:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-md bg-primary/15 text-primary flex items-center justify-center", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:101:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:102:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:104:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:105:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:106:15", children: targetLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-muted-foreground", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:107:15", children: [
              current,
              "/",
              target
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden mt-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:109:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-primary to-success transition-all", style: { width: `${progress}%` }, "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:110:15" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:116:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:117:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "gap-1.5 text-xs", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:118:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:119:15" }),
          " Digest"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:122:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:123:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:124:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:124:64" }),
            " ",
            role,
            " · today's digest"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:126:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:127:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Moved", value: moved, "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:128:17" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Stalled", value: stalled.length, tone: "danger", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:129:17" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: targetLabel, value: `${current}/${target}`, tone: "primary", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:130:17" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:133:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:134:17", children: "Next 5 actions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:135:17", children: [
                top5.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-xs text-muted-foreground italic", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:136:41", children: "Queue clear." }),
                top5.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs rounded-md border border-border bg-card p-2", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:138:21", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 rounded-full bg-primary/15 text-primary text-[10px] font-semibold flex items-center justify-center", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:139:23", children: i + 1 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:140:23", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:141:25", children: e.title }),
                    e.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:142:40", children: e.subtitle })
                  ] }),
                  e.tag && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px]", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:144:33", children: e.tag })
                ] }, e.id))
              ] })
            ] }),
            stalled.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:151:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-danger font-semibold mb-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:152:19", children: "Stalled — escalate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:153:19", children: stalled.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-xs rounded-md border border-danger/30 bg-danger/5 p-2", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:155:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 text-danger", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:156:25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:157:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:158:27", children: e.title }),
                  e.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:159:42", children: e.subtitle })
                ] }),
                e.tag && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] border-danger/40 text-danger", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:161:35", children: e.tag })
              ] }, e.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "w-full gap-1.5",
                onClick: /* @__PURE__ */ __name2(() => {
                  const txt = `*${role} digest*
Moved: ${moved}  ·  Stalled: ${stalled.length}  ·  ${targetLabel}: ${current}/${target}

Next 5:
${top5.map((e, i) => `${i + 1}. ${e.title}${e.tag ? ` — ${e.tag}` : ""}`).join("\n") || "Queue clear."}${stalled.length ? `

Escalate:
${stalled.map((e) => `• ${e.title}${e.tag ? ` (${e.tag})` : ""}`).join("\n")}` : ""}`;
                  navigator.clipboard?.writeText(txt);
                  toast.success("Digest copied — paste into WhatsApp");
                }, "onClick"),
                "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:168:15",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCopy, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:177:17" }),
                  " Copy digest for WhatsApp"
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
__name(TenXOpsBar, "TenXOpsBar");
__name2(TenXOpsBar, "TenXOpsBar");
function Sep() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block h-8 w-px bg-border", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:188:10" });
}
__name(Sep, "Sep");
__name2(Sep, "Sep");
function Stat({ label, value, tone = "default" }) {
  const cls = tone === "danger" ? "text-danger" : tone === "primary" ? "text-primary" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2 text-center", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:194:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:195:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-heading font-semibold ${cls}`, "data-tsd-source": "/src/myt/components/TenXOpsBar.tsx:196:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
export {
  TenXOpsBar as T
};
