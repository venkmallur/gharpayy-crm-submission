var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { a as useParams, u as useNavigate, L as Link } from "./react-router-dom-DTg4HJ59.mjs";
import { q as cn, aB as useAppState, a as useSettings, aM as useTourData, C as Card, ap as CardHeader, aq as CardTitle, ao as CardContent, U as Label, X as Input, A as Textarea, k as Button } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bB as ArrowLeft, aR as Save } from "../_libs/lucide-react.mjs";
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
function Pills({
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:27:5", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: /* @__PURE__ */ __name2(() => onChange(o.value), "onClick"),
      className: cn(
        "px-2.5 py-1 rounded text-xs border",
        value === o.value ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"
      ),
      "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:29:9",
      children: o.label
    },
    o.value
  )) });
}
__name(Pills, "Pills");
__name2(Pills, "Pills");
function TCMReportPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const { tours } = useAppState();
  const { settings } = useSettings();
  const { reports, setReport, addEvent } = useTourData();
  const tour = reactExports.useMemo(() => tours.find((t) => t.id === id), [tours, id]);
  const existing = id ? reports[id] : void 0;
  const [r, setR] = reactExports.useState(
    existing ?? {
      tourId: id ?? "",
      arrived: void 0,
      punctuality: void 0,
      budgetAlignment: void 0,
      propertyReaction: void 0,
      interestLevel: void 0,
      decisionAuthority: void 0,
      emotionalTone: void 0,
      outcome: void 0,
      nextStep: ""
    }
  );
  if (!tour) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:73:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/myt/tours", className: "text-primary underline inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:74:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:75:11" }),
        " Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:77:9", children: "Tour not found." })
    ] });
  }
  function field(k, v) {
    setR((p) => ({ ...p, [k]: v }));
  }
  __name(field, "field");
  __name2(field, "field");
  function canSubmit() {
    return r.arrived && r.punctuality && r.budgetAlignment && r.propertyReaction && r.interestLevel && r.decisionAuthority && r.emotionalTone && r.outcome && r.nextStep && r.nextStep.trim().length > 0;
  }
  __name(canSubmit, "canSubmit");
  __name2(canSubmit, "canSubmit");
  function submit() {
    if (!canSubmit() || !id) {
      toast.error("Fill all required fields and define a next step");
      return;
    }
    const report = {
      tourId: id,
      arrived: r.arrived,
      punctuality: r.punctuality,
      budgetAlignment: r.budgetAlignment,
      propertyReaction: r.propertyReaction,
      interestLevel: r.interestLevel,
      firstObjection: r.firstObjection,
      priceReactionWords: r.priceReactionWords,
      decisionAuthority: r.decisionAuthority,
      comparisonReference: r.comparisonReference,
      emotionalTone: r.emotionalTone,
      outcome: r.outcome,
      nextStep: r.nextStep,
      notes: r.notes,
      filedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setReport(report);
    addEvent({ tourId: id, kind: "tcm_report_filed", notes: `Outcome: ${report.outcome}` });
    toast.success("Report filed — next task unlocked");
    nav(`/tour/${id}`);
  }
  __name(submit, "submit");
  __name2(submit, "submit");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-3xl mx-auto", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:130:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/myt/tour/${tour.id}`, className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:131:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:132:9" }),
      " Back to tour"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:135:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:136:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:137:11", children: [
          "TCM Intelligence Form — ",
          tour.leadName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:138:11", children: "Forced closure: you can't move on until every required field is filled. Your input is matched against the customer feedback to detect mismatches." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:142:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:143:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:144:13", children: "Arrived?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.arrived,
              onChange: /* @__PURE__ */ __name2((v) => field("arrived", v), "onChange"),
              options: [
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "proxy", label: "Proxy visited" }
              ],
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:145:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:156:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:157:13", children: "Punctuality" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.punctuality,
              onChange: /* @__PURE__ */ __name2((v) => field("punctuality", v), "onChange"),
              options: [
                { value: "early", label: "Early" },
                { value: "on_time", label: "On time" },
                { value: "late", label: "Late" },
                { value: "no_show", label: "No-show" }
              ],
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:158:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:170:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:171:13", children: "Budget alignment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.budgetAlignment,
              onChange: /* @__PURE__ */ __name2((v) => field("budgetAlignment", v), "onChange"),
              options: [
                { value: "exact", label: "Exact" },
                { value: "stretch", label: "Stretch" },
                { value: "mismatch", label: "Mismatch" }
              ],
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:172:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:183:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:184:13", children: "Property reaction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.propertyReaction,
              onChange: /* @__PURE__ */ __name2((v) => field("propertyReaction", v), "onChange"),
              options: [
                { value: "positive", label: "Positive" },
                { value: "neutral", label: "Neutral" },
                { value: "negative", label: "Negative" }
              ],
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:185:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:196:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:197:13", children: "Interest level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.interestLevel,
              onChange: /* @__PURE__ */ __name2((v) => field("interestLevel", v), "onChange"),
              options: [
                { value: "high", label: "🔥 High" },
                { value: "medium", label: "🙂 Medium" },
                { value: "low", label: "❄️ Low" }
              ],
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:198:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:209:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:210:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:211:15", children: "First objection raised" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: r.firstObjection ?? "",
                onChange: /* @__PURE__ */ __name2((e) => field("firstObjection", e.target.value), "onChange"),
                className: "w-full h-10 mt-1 bg-background border border-border rounded-md px-3 text-sm",
                "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:212:15",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:217:17", children: "Select…" }),
                  settings.customObjections.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:219:19", children: o }, o))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:223:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:224:15", children: "Price reaction (exact words)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1",
                value: r.priceReactionWords ?? "",
                onChange: /* @__PURE__ */ __name2((e) => field("priceReactionWords", e.target.value), "onChange"),
                placeholder: "e.g. 'Bahut zyada hai bhai'",
                "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:225:15"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:234:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:235:13", children: "Decision authority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.decisionAuthority,
              onChange: /* @__PURE__ */ __name2((v) => field("decisionAuthority", v), "onChange"),
              options: [
                { value: "self", label: "Self" },
                { value: "parent", label: "Parent" },
                { value: "group", label: "Group" },
                { value: "other", label: "Other" }
              ],
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:236:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:248:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:249:13", children: "Comparison reference" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              value: r.comparisonReference ?? "",
              onChange: /* @__PURE__ */ __name2((e) => field("comparisonReference", e.target.value), "onChange"),
              placeholder: "e.g. 'They mentioned Stanza Living near campus'",
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:250:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:258:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:259:13", children: "Emotional tone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.emotionalTone,
              onChange: /* @__PURE__ */ __name2((v) => field("emotionalTone", v), "onChange"),
              options: [
                { value: "excited", label: "Excited" },
                { value: "confused", label: "Confused" },
                { value: "defensive", label: "Defensive" },
                { value: "neutral", label: "Neutral" }
              ],
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:260:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:272:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:273:13", children: "Outcome (funnel position)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Pills,
            {
              value: r.outcome,
              onChange: /* @__PURE__ */ __name2((v) => field("outcome", v), "onChange"),
              options: [
                { value: "booked", label: "Booked (token / blocked)" },
                { value: "hot", label: "Hot (24-48 hrs)" },
                { value: "warm", label: "Warm (exploring)" },
                { value: "cold", label: "Cold" },
                { value: "dropped", label: "Dropped" }
              ],
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:274:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:287:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:288:13", children: "Next step (mandatory)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              className: "mt-1",
              rows: 2,
              value: r.nextStep ?? "",
              onChange: /* @__PURE__ */ __name2((e) => field("nextStep", e.target.value), "onChange"),
              placeholder: "e.g. Follow-up call tomorrow 11am · suggest property X · drop",
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:289:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:298:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:299:13", children: "Free notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              className: "mt-1",
              rows: 3,
              value: r.notes ?? "",
              onChange: /* @__PURE__ */ __name2((e) => field("notes", e.target.value), "onChange"),
              placeholder: "Anything else worth capturing",
              "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:300:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: submit, disabled: !canSubmit(), className: "w-full", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:309:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4 mr-2", "data-tsd-source": "/src/myt/pages/TCMReportPage.tsx:310:13" }),
          " File report & unlock next task"
        ] })
      ] })
    ] })
  ] });
}
__name(TCMReportPage, "TCMReportPage");
__name2(TCMReportPage, "TCMReportPage");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/tour.$id.report.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TCMReportPage, { "data-tsd-source": "/src/routes/myt/tour.$id.report.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
