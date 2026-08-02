var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useApp, c as useMountedNow, k as Button } from "./router-xBhBcQRf.mjs";
import { l as liveConfidence, i as intentFor, I as IntentChip, S as StageBadge, C as ConfidenceBar } from "./AppShell-BN067m2r.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as Phone, H as MessageSquare, ag as ClipboardCheck, q as ChevronRight } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function QuickActionRow({
  lead,
  reason,
  accent,
  dueLabel,
  onDone
}) {
  const { selectLead, logCall, sendMessage, tcms, tours } = useApp();
  const [now, mounted] = useMountedNow();
  const tcm = tcms.find((t) => t.id === lead.assignedTcmId);
  const live = mounted ? liveConfidence(lead, tours, now) : lead.confidence;
  const liveIntent = mounted ? intentFor(live) : lead.intent;
  const ring = {
    destructive: "border-l-destructive",
    accent: "border-l-accent",
    warning: "border-l-warning",
    default: "border-l-transparent"
  }[accent ?? "default"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group grid grid-cols-12 items-center gap-2 px-3 py-2.5 border-l-2 ${ring} hover:bg-accent/5 transition-colors`, "data-tsd-source": "/src/components/QuickActionRow.tsx:38:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"), className: "col-span-4 text-left min-w-0", "data-tsd-source": "/src/components/QuickActionRow.tsx:39:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/QuickActionRow.tsx:40:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm truncate", "data-tsd-source": "/src/components/QuickActionRow.tsx:41:11", children: lead.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IntentChip, { intent: liveIntent, "data-tsd-source": "/src/components/QuickActionRow.tsx:42:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/components/QuickActionRow.tsx:44:9", children: reason ?? `${lead.phone} · ${lead.preferredArea}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 hidden md:block", "data-tsd-source": "/src/components/QuickActionRow.tsx:49:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StageBadge, { stage: lead.stage, "data-tsd-source": "/src/components/QuickActionRow.tsx:49:51" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", "data-tsd-source": "/src/components/QuickActionRow.tsx:50:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceBar, { value: live, "data-tsd-source": "/src/components/QuickActionRow.tsx:50:35" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 hidden md:block text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/components/QuickActionRow.tsx:51:7", children: tcm?.initials }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 hidden md:block text-[11px] font-mono text-muted-foreground truncate", "data-tsd-source": "/src/components/QuickActionRow.tsx:54:7", children: dueLabel ?? "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-2 flex items-center justify-end gap-1", "data-tsd-source": "/src/components/QuickActionRow.tsx:58:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-7 w-7",
          onClick: /* @__PURE__ */ __name2((e) => {
            e.stopPropagation();
            logCall(lead.id);
            toast.success(`Call logged · ${lead.name}`);
          }, "onClick"),
          title: "Log call",
          "data-tsd-source": "/src/components/QuickActionRow.tsx:59:9",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/QuickActionRow.tsx:64:11" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-7 w-7",
          onClick: /* @__PURE__ */ __name2((e) => {
            e.stopPropagation();
            sendMessage(lead.id, "WhatsApp template sent");
            toast.success(`WA sent · ${lead.name}`);
          }, "onClick"),
          title: "WhatsApp",
          "data-tsd-source": "/src/components/QuickActionRow.tsx:66:9",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/QuickActionRow.tsx:71:11" })
        }
      ),
      onDone && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-7 w-7 text-success",
          onClick: /* @__PURE__ */ __name2((e) => {
            e.stopPropagation();
            onDone();
          }, "onClick"),
          title: "Mark done",
          "data-tsd-source": "/src/components/QuickActionRow.tsx:74:11",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/QuickActionRow.tsx:79:13" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "icon",
          variant: "ghost",
          className: "h-7 w-7",
          onClick: /* @__PURE__ */ __name2(() => selectLead(lead.id), "onClick"),
          title: "Open",
          "data-tsd-source": "/src/components/QuickActionRow.tsx:82:9",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/QuickActionRow.tsx:87:11" })
        }
      )
    ] })
  ] });
}
__name(QuickActionRow, "QuickActionRow");
__name2(QuickActionRow, "QuickActionRow");
export {
  QuickActionRow as Q
};
