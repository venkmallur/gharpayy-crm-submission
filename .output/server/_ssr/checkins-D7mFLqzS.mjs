var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, a9 as useCheckins, aa as riskLevel, ab as STAGE_ORDER, ac as STAGE_LABEL, ad as RISK_LABEL, ae as RISK_CLASS, af as formatINR } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, c as useMountedNow, B as Badge, k as Button } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { ak as RotateCcw, A as ArrowRight, g as TriangleAlert } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "tslib";
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
import "util";
import "crypto";
import "async_hooks";
import "stream";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function CheckInBoard() {
  const checkins = useCheckins((s) => s.checkins);
  const setStage = useCheckins((s) => s.setStage);
  const { leads, selectLead } = useApp();
  const [, mounted] = useMountedNow();
  const byStage = reactExports.useMemo(() => {
    const map = {
      booked: [],
      ack_received: [],
      token_paid: [],
      room_assigned: [],
      date_set: [],
      moved_in: [],
      settled: [],
      cancelled: []
    };
    for (const c of checkins) map[c.stage].push(c);
    return map;
  }, [checkins]);
  const atRisk = reactExports.useMemo(
    () => mounted ? checkins.filter((c) => riskLevel(c) >= 2) : [],
    [checkins, mounted]
  );
  const leadName = /* @__PURE__ */ __name2((id) => leads.find((l) => l.id === id)?.name ?? "—", "leadName");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:33:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:34:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 min-w-[1100px]", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:35:9", children: STAGE_ORDER.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[160px]", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:37:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold mb-2 flex items-center justify-between", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:38:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:39:17", children: STAGE_LABEL[stage] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:40:17", children: byStage[stage].length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:42:15", children: [
        byStage[stage].map((c) => {
          const r = mounted ? riskLevel(c) : 0;
          const nextIdx = STAGE_ORDER.indexOf(stage) + 1;
          const next = STAGE_ORDER[nextIdx];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-lg border border-border bg-card p-2.5 space-y-1.5 hover:border-primary/40 cursor-pointer",
              onClick: /* @__PURE__ */ __name2(() => selectLead(c.leadId), "onClick"),
              "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:48:21",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium truncate", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:52:23", children: leadName(c.leadId) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:53:23", children: [
                  c.propertyName ?? "No property",
                  c.roomNumber ? ` · ${c.roomNumber}` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-wrap", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:56:23", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[9px] ${RISK_CLASS[r]}`, "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:57:25", children: RISK_LABEL[r] }),
                  c.delays.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-orange-600 inline-flex items-center gap-0.5", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:59:27", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:60:29" }),
                    c.delays.length
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:64:23", children: [
                  "Bal ",
                  formatINR(c.balanceDue)
                ] }),
                next && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 w-full text-[10px]",
                    onClick: /* @__PURE__ */ __name2((e) => {
                      e.stopPropagation();
                      setStage(c.id, next);
                    }, "onClick"),
                    "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:66:25",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:71:27" }),
                      " ",
                      STAGE_LABEL[next]
                    ]
                  }
                )
              ]
            },
            c.id
          );
        }),
        byStage[stage].length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground italic px-1 py-2", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:78:19", children: "—" })
      ] })
    ] }, stage)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:87:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold flex items-center gap-1", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:88:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-orange-500", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:89:11" }),
        " At-risk lane"
      ] }),
      atRisk.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground italic", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:92:11", children: "Nothing at risk. 🎉" }),
      atRisk.map((c) => {
        const r = mounted ? riskLevel(c) : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-lg border border-orange-500/30 bg-orange-500/5 p-2.5 space-y-1 cursor-pointer hover:border-orange-500/60",
            onClick: /* @__PURE__ */ __name2(() => selectLead(c.leadId), "onClick"),
            "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:97:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:101:15", children: leadName(c.leadId) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:102:15", children: [
                STAGE_LABEL[c.stage],
                " · ",
                c.delays.length,
                " reschedule(s)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[9px] ${RISK_CLASS[r]}`, "data-tsd-source": "/src/components/checkins/CheckInBoard.tsx:105:15", children: RISK_LABEL[r] })
            ]
          },
          c.id
        );
      })
    ] })
  ] });
}
__name(CheckInBoard, "CheckInBoard");
__name2(CheckInBoard, "CheckInBoard");
function CheckInsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/checkins.tsx:17:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", "data-tsd-source": "/src/routes/checkins.tsx:18:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/checkins.tsx:19:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", "data-tsd-source": "/src/routes/checkins.tsx:20:11", children: "Check-ins" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/checkins.tsx:21:11", children: "From booked to settled. Tap a card to open the lead. Delay risk auto-scored." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CheckInBoard, { "data-tsd-source": "/src/routes/checkins.tsx:25:9" })
  ] }) });
}
__name(CheckInsPage, "CheckInsPage");
__name2(CheckInsPage, "CheckInsPage");
export {
  CheckInsPage as component
};
