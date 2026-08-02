var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ConfidenceBar } from "./ConfidenceBar-BgNYID_K.mjs";
import { S as StatusBadge } from "./StatusBadge-32s-nzQB.mjs";
import { q as cn, aK as intentBg, aL as confirmationLabel, k as Button, A as Textarea } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LeadControlPanel } from "./LeadControlPanel-CV2ddxDl.mjs";
import { P as Phone, W as Wallet, y as Calendar, K as MapPin, B as Building2, S as Sparkles, F as Flame, aN as Package, I as IndianRupee, bI as Video, aD as Briefcase } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const tourTypeIcon = /* @__PURE__ */ __name2((t) => t === "virtual" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:20:21" }) : t === "pre-book-pitch" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:21:28" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:22:3" }), "tourTypeIcon");
const tourTypeLabel = {
  physical: "Physical",
  virtual: "Virtual",
  "pre-book-pitch": "Pre-book"
};
function TourCard({ tour: t, onUpdate, variant = "full" }) {
  const [showOutcome, setShowOutcome] = reactExports.useState(false);
  const [remarks, setRemarks] = reactExports.useState("");
  const [whyLost, setWhyLost] = reactExports.useState(null);
  const setOutcome = /* @__PURE__ */ __name2((outcome, extra = {}) => {
    onUpdate?.(t.id, { outcome, remarks, whyLost, ...extra });
    setShowOutcome(false);
  }, "setOutcome");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
    "rounded-xl border bg-card p-3 space-y-2.5 transition-all hover:border-accent/50 hover:shadow-sm",
    t.intent === "hard" && "border-accent/40",
    t.intent === "medium" && "border-warning/30",
    t.intent === "soft" && "border-border"
  ), "data-tsd-source": "/src/myt/components/TourCard.tsx:41:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/myt/components/TourCard.tsx:48:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/myt/components/TourCard.tsx:49:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", "data-tsd-source": "/src/myt/components/TourCard.tsx:50:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm truncate", "data-tsd-source": "/src/myt/components/TourCard.tsx:51:13", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[9px] px-1.5 py-0.5 rounded border font-medium uppercase tracking-wide", intentBg[t.intent]), "data-tsd-source": "/src/myt/components/TourCard.tsx:52:13", children: t.intent })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:56:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${t.phone}`, className: "text-[11px] text-muted-foreground hover:text-primary flex items-center gap-1", "data-tsd-source": "/src/myt/components/TourCard.tsx:57:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/TourCard.tsx:58:15" }),
            t.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground capitalize", "data-tsd-source": "/src/myt/components/TourCard.tsx:60:13", children: [
            "· ",
            t.bookingSource
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", "data-tsd-source": "/src/myt/components/TourCard.tsx:63:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/components/TourCard.tsx:64:11", children: tourTypeLabel[t.tourType] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-end text-foreground text-xs font-medium mt-0.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:65:11", children: [
          tourTypeIcon(t.tourType),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/myt/components/TourCard.tsx:67:13", children: t.tourTime })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { score: t.confidenceScore, intent: t.intent, "data-tsd-source": "/src/myt/components/TourCard.tsx:73:7" }),
    t.confidenceReason.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", "data-tsd-source": "/src/myt/components/TourCard.tsx:77:9", children: t.confidenceReason.join(" · ") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5 text-[11px]", "data-tsd-source": "/src/myt/components/TourCard.tsx:83:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", "data-tsd-source": "/src/myt/components/TourCard.tsx:84:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3 w-3 shrink-0", "data-tsd-source": "/src/myt/components/TourCard.tsx:85:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", "data-tsd-source": "/src/myt/components/TourCard.tsx:86:11", children: [
          "₹",
          (t.budget / 1e3).toFixed(0),
          "k"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", "data-tsd-source": "/src/myt/components/TourCard.tsx:88:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3 shrink-0", "data-tsd-source": "/src/myt/components/TourCard.tsx:89:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", "data-tsd-source": "/src/myt/components/TourCard.tsx:90:11", children: [
          "Move ",
          t.qualification.moveInDate.slice(5)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", "data-tsd-source": "/src/myt/components/TourCard.tsx:92:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 shrink-0", "data-tsd-source": "/src/myt/components/TourCard.tsx:93:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", "data-tsd-source": "/src/myt/components/TourCard.tsx:94:11", children: t.area })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", "data-tsd-source": "/src/myt/components/TourCard.tsx:96:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3 w-3 shrink-0", "data-tsd-source": "/src/myt/components/TourCard.tsx:97:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", "data-tsd-source": "/src/myt/components/TourCard.tsx:98:11", children: t.propertyName })
      ] })
    ] }),
    t.qualification.keyConcern && variant === "full" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-amber-foreground/80 bg-amber/10 border border-amber/20 rounded px-2 py-1", "data-tsd-source": "/src/myt/components/TourCard.tsx:103:9", children: [
      "⚠ ",
      t.qualification.keyConcern
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 pt-1", "data-tsd-source": "/src/myt/components/TourCard.tsx:109:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:110:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status, "data-tsd-source": "/src/myt/components/TourCard.tsx:111:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/components/TourCard.tsx:112:11", children: confirmationLabel[t.confirmationStrength] })
      ] }),
      onUpdate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 items-center", "data-tsd-source": "/src/myt/components/TourCard.tsx:117:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LeadControlPanel,
          {
            subject: { kind: "tour", tour: t },
            trigger: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px] px-2 gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
              " Open"
            ] }),
            "data-tsd-source": "/src/myt/components/TourCard.tsx:118:13"
          }
        ),
        t.status === "scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => onUpdate(t.id, { status: "confirmed" }), "onClick"), className: "h-7 text-[11px] px-2.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:127:15", children: "Confirm" }),
        t.status === "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => onUpdate(t.id, { status: "completed", showUp: true }), "onClick"), className: "h-7 text-[11px] px-2.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:133:17", children: "Show" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => onUpdate(t.id, { status: "no-show", showUp: false }), "onClick"), className: "h-7 text-[11px] px-2 text-danger border-danger/30", "data-tsd-source": "/src/myt/components/TourCard.tsx:136:17", children: "No-Show" })
        ] }),
        t.status === "completed" && !t.outcome && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => setShowOutcome((s) => !s), "onClick"), className: "h-7 text-[11px] px-2.5", "data-tsd-source": "/src/myt/components/TourCard.tsx:142:15", children: "Update" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 pt-1 border-t border-border", "data-tsd-source": "/src/myt/components/TourCard.tsx:151:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScarcityButton,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3" }),
          label: "Urgency",
          onClick: /* @__PURE__ */ __name2(() => {
            const msg = encodeURIComponent(
              `Hi ${t.leadName}, only 2 beds left in your range at ${t.propertyName}. 3 others viewing today. Hold expires in 4h. Reply YES to confirm.`
            );
            window.open(`https://wa.me/${t.phone.replace(/[^\d]/g, "")}?text=${msg}`, "_blank");
            toast.success("Urgency nudge prepared");
          }, "onClick"),
          "data-tsd-source": "/src/myt/components/TourCard.tsx:152:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScarcityButton,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-3 w-3" }),
          label: "Pack",
          onClick: /* @__PURE__ */ __name2(() => {
            const msg = encodeURIComponent(
              `Hi ${t.leadName}, here's your pre-tour pack for ${t.propertyName}:

📸 Photos: gharpayy.com/p/${t.propertyId ?? "demo"}
🍽 Today's menu: gharpayy.com/menu
🛡 Safety video: gharpayy.com/safety

See you at ${t.tourTime}!`
            );
            window.open(`https://wa.me/${t.phone.replace(/[^\d]/g, "")}?text=${msg}`, "_blank");
            toast.success("Content pack ready");
          }, "onClick"),
          "data-tsd-source": "/src/myt/components/TourCard.tsx:163:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScarcityButton,
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-3 w-3" }),
          label: "Token",
          onClick: /* @__PURE__ */ __name2(() => {
            const link = `gharpayy.com/pay/${t.id}`;
            const msg = encodeURIComponent(
              `Lock your bed at ${t.propertyName} with ₹2,000 token. Refundable. Pay here: ${link}`
            );
            window.open(`https://wa.me/${t.phone.replace(/[^\d]/g, "")}?text=${msg}`, "_blank");
            toast.success("Payment link sent");
          }, "onClick"),
          "data-tsd-source": "/src/myt/components/TourCard.tsx:174:9"
        }
      )
    ] }),
    showOutcome && onUpdate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-border", "data-tsd-source": "/src/myt/components/TourCard.tsx:190:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: remarks,
          onChange: /* @__PURE__ */ __name2((e) => setRemarks(e.target.value), "onChange"),
          placeholder: "Remarks — objections, feedback…",
          className: "bg-surface-3 border-border text-xs h-14 resize-none",
          "data-tsd-source": "/src/myt/components/TourCard.tsx:191:11"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          value: whyLost ?? "",
          onChange: /* @__PURE__ */ __name2((e) => setWhyLost(e.target.value || null), "onChange"),
          className: "w-full h-8 bg-surface-3 border border-border rounded-md px-2 text-xs text-foreground",
          "data-tsd-source": "/src/myt/components/TourCard.tsx:197:11",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/myt/components/TourCard.tsx:202:13", children: "Why lost? (if applicable)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price", "data-tsd-source": "/src/myt/components/TourCard.tsx:203:13", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "location", "data-tsd-source": "/src/myt/components/TourCard.tsx:204:13", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "food", "data-tsd-source": "/src/myt/components/TourCard.tsx:205:13", children: "Food" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "delay", "data-tsd-source": "/src/myt/components/TourCard.tsx:206:13", children: "Delay in decision" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "comparing", "data-tsd-source": "/src/myt/components/TourCard.tsx:207:13", children: "Comparing options" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", "data-tsd-source": "/src/myt/components/TourCard.tsx:208:13", children: "Other" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 flex-wrap", "data-tsd-source": "/src/myt/components/TourCard.tsx:210:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => setOutcome("booked", { tokenPaid: true }), "onClick"), className: "h-7 text-[10px] px-2 bg-role-tcm text-background hover:bg-role-tcm/90", "data-tsd-source": "/src/myt/components/TourCard.tsx:211:13", children: "✅ Booked" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => setOutcome("token-paid", { tokenPaid: true }), "onClick"), className: "h-7 text-[10px] px-2 bg-role-tcm/80 text-background hover:bg-role-tcm/70", "data-tsd-source": "/src/myt/components/TourCard.tsx:212:13", children: "💰 Token" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => setOutcome("draft"), "onClick"), variant: "outline", className: "h-7 text-[10px] px-2 text-role-hr border-role-hr/30", "data-tsd-source": "/src/myt/components/TourCard.tsx:213:13", children: "📄 Draft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => setOutcome("follow-up"), "onClick"), variant: "outline", className: "h-7 text-[10px] px-2", "data-tsd-source": "/src/myt/components/TourCard.tsx:214:13", children: "🔁 Follow-up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => setOutcome("not-interested"), "onClick"), variant: "outline", className: "h-7 text-[10px] px-2 text-danger border-danger/30", "data-tsd-source": "/src/myt/components/TourCard.tsx:215:13", children: "❌ Lost" })
      ] })
    ] })
  ] });
}
__name(TourCard, "TourCard");
__name2(TourCard, "TourCard");
function ScarcityButton({ icon, label, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "flex items-center gap-1 px-2 h-6 rounded-md bg-surface-3 hover:bg-primary/15 hover:text-primary text-muted-foreground text-[10px] font-medium uppercase tracking-wide transition-colors",
      "data-tsd-source": "/src/myt/components/TourCard.tsx:225:5",
      children: [
        icon,
        label
      ]
    }
  );
}
__name(ScarcityButton, "ScarcityButton");
__name2(ScarcityButton, "ScarcityButton");
export {
  TourCard as T
};
