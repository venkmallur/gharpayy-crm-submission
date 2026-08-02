var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useParams, L as Link } from "./react-router-dom-DTg4HJ59.mjs";
import { aB as useAppState, aM as useTourData, C as Card, ap as CardHeader, aq as CardTitle, ao as CardContent, q as cn, U as Label, A as Textarea, k as Button } from "./router-xBhBcQRf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { bB as ArrowLeft } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
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
import "../_libs/tslib.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const OPTS = [
  { v: "loved", label: "Loved it", emoji: "🔥" },
  { v: "good_unsure", label: "Good but unsure", emoji: "🙂" },
  { v: "not_fit", label: "Not a fit", emoji: "❌" },
  { v: "need_better", label: "Need better options", emoji: "🔄" }
];
function CustomerFeedbackPage() {
  const { id } = useParams();
  const { tours } = useAppState();
  const { feedback, setFeedback, addEvent } = useTourData();
  const tour = reactExports.useMemo(() => tours.find((t) => t.id === id), [tours, id]);
  const existing = id ? feedback[id] : void 0;
  const [sentiment, setSentiment] = reactExports.useState(existing?.sentiment);
  const [comment, setComment] = reactExports.useState(existing?.comment ?? "");
  const [submitted, setSubmitted] = reactExports.useState(!!existing);
  if (!tour) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:30:21", children: "Tour not found." });
  function submit() {
    if (!sentiment || !id) {
      toast.error("Pick how the tour felt");
      return;
    }
    const f = { tourId: id, sentiment, comment, at: (/* @__PURE__ */ new Date()).toISOString() };
    setFeedback(f);
    addEvent({ tourId: id, kind: "feedback_received", notes: `${sentiment}${comment ? " · " + comment.slice(0, 80) : ""}` });
    setSubmitted(true);
    toast.success("Thanks for your feedback");
  }
  __name(submit, "submit");
  __name2(submit, "submit");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto space-y-4", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:45:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/myt/tour/${tour.id}`, className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:46:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:47:9" }),
      " Back to tour"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:50:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:51:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:52:11", children: [
          "How was your tour at ",
          tour.propertyName,
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:53:11", children: [
          "Hi ",
          tour.leadName,
          " — your feedback helps us refine your options."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:57:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:58:11", children: OPTS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => setSentiment(o.v), "onClick"),
            className: cn(
              "rounded-lg border p-3 text-left hover:border-primary transition-colors",
              sentiment === o.v && "border-primary bg-primary/5"
            ),
            "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:60:15",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:68:17", children: o.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium mt-1", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:69:17", children: o.label })
            ]
          },
          o.v
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:74:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "c", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:75:13", children: "Tell us more (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "c",
              value: comment,
              onChange: /* @__PURE__ */ __name2((e) => setComment(e.target.value), "onChange"),
              rows: 3,
              placeholder: "Liked / disliked anything? Price, rooms, location?",
              "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:76:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, disabled: !sentiment, className: "w-full", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:85:11", children: submitted ? "Update feedback" : "Submit feedback" }),
        submitted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground border rounded p-2 bg-muted/30", "data-tsd-source": "/src/myt/pages/CustomerFeedbackPage.tsx:90:13", children: "✅ Recorded. The team will reach out with refined options shortly." })
      ] })
    ] })
  ] });
}
__name(CustomerFeedbackPage, "CustomerFeedbackPage");
__name2(CustomerFeedbackPage, "CustomerFeedbackPage");
const SplitComponent = CustomerFeedbackPage;
export {
  SplitComponent as component
};
