var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, aF as copyToClipboard, aG as mapsLink, aH as fmtWhen, aI as genOtp, aJ as whatsappLink } from "./AppShell-BN067m2r.mjs";
import { a as useParams, L as Link } from "./react-router-dom-DTg4HJ59.mjs";
import { k as Button, q as cn, aB as useAppState, a as useSettings, aM as useTourData, aR as renderTemplate, C as Card, ap as CardHeader, aq as CardTitle, B as Badge, ao as CardContent, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, X as Input, A as Textarea, U as Label } from "./router-xBhBcQRf.mjs";
import { c as computeTourScore, d as detectMismatches } from "./intelligence-4QNz3VbS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { b as Check, e as Copy, bB as ArrowLeft, P as Phone, U as User, K as MapPin, m as CalendarClock, l as CircleCheck, bX as Truck, bY as CircleDot, bZ as CirclePlay, b_ as CircleStop, bM as CircleX, ac as Send, H as MessageSquare, ai as KeyRound, ae as ExternalLink } from "../_libs/lucide-react.mjs";

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
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function CopyButton({ text, size = "sm", variant = "secondary", label = "Copy", onCopied, className }) {
  const [copied, setCopied] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      type: "button",
      size,
      variant,
      className: cn("gap-1.5", className),
      onClick: /* @__PURE__ */ __name2(async () => {
        const ok = await copyToClipboard(text);
        if (ok) {
          setCopied(true);
          toast.success("Copied — paste into WhatsApp");
          onCopied?.();
          setTimeout(() => setCopied(false), 1800);
        } else {
          toast.error("Copy failed");
        }
      }, "onClick"),
      "data-tsd-source": "/src/myt/components/CopyButton.tsx:20:5",
      children: [
        copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/CopyButton.tsx:37:17" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/CopyButton.tsx:37:53" }),
        size !== "icon" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/myt/components/CopyButton.tsx:38:27", children: copied ? "Copied" : label })
      ]
    }
  );
}
__name(CopyButton, "CopyButton");
__name2(CopyButton, "CopyButton");
const EVENT_LABEL = {
  booked: "📌 Booked",
  confirmation_sent: "📤 Confirmation sent",
  confirmed_by_customer: "✅ Customer confirmed",
  reschedule_requested: "🔁 Reschedule requested",
  reminder_sent: "⏰ Reminder sent",
  tcm_on_the_way: "🚗 TCM on the way",
  customer_running_late: "🐢 Customer running late",
  tour_started: "▶️ Tour started",
  tour_ended: "⏹️ Tour ended",
  no_show: "👻 No-show",
  cancelled: "❌ Cancelled",
  feedback_received: "💬 Customer feedback",
  tcm_report_filed: "📝 TCM report filed",
  custom_message_sent: "💬 Custom message"
};
function TourCommand() {
  const { id } = useParams();
  const { tours, setTours } = useAppState();
  const { settings } = useSettings();
  const { addEvent, eventsForTour, feedback, reports } = useTourData();
  const tour = reactExports.useMemo(() => tours.find((t) => t.id === id), [tours, id]);
  const [activeTplId, setActiveTplId] = reactExports.useState(settings.templates[0]?.id ?? "");
  const [customBody, setCustomBody] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [etaMinutes, setEtaMinutes] = reactExports.useState("15");
  const events = id ? eventsForTour(id) : [];
  const tourFeedback = id ? feedback[id] : void 0;
  const tourReport = id ? reports[id] : void 0;
  if (!tour) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:72:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/myt/tours", className: "text-primary hover:underline inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:73:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:74:11" }),
        " Back to tours"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:76:9", children: "Tour not found." })
    ] });
  }
  const safeTour = tour;
  const vars = {
    leadName: tour.leadName,
    propertyName: tour.propertyName,
    area: tour.area,
    when: fmtWhen(tour.tourDate, tour.tourTime),
    tcmName: tour.assignedToName,
    tcmPhone: "—",
    budget: tour.budget?.toLocaleString("en-IN") ?? "—",
    workLocation: tour.qualification?.workLocation ?? "—",
    mapsLink: mapsLink(tour.area, tour.propertyName),
    etaMinutes,
    otp: otp || "______",
    siteName: settings.siteName,
    signature: settings.signatureLine
  };
  const activeTpl = settings.templates.find((t) => t.id === activeTplId);
  const renderedActive = activeTpl ? renderTemplate(activeTpl.body, vars) : "";
  const renderedCustom = renderTemplate(customBody, vars);
  const score = computeTourScore(tour, events, settings.weights, tourFeedback, tourReport);
  const mismatches = detectMismatches(tour, tourFeedback, tourReport);
  function logEvent(kind, notes, templateId) {
    if (!id) return;
    addEvent({ tourId: id, kind, notes, templateId });
  }
  __name(logEvent, "logEvent");
  __name2(logEvent, "logEvent");
  function setStatus(next) {
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: next } : t));
  }
  __name(setStatus, "setStatus");
  __name2(setStatus, "setStatus");
  function handleCustomerConfirmed() {
    logEvent("confirmed_by_customer", "Customer replied YES");
    setStatus("confirmed");
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: "confirmed" } : t));
    toast.success("Marked as confirmed by customer");
  }
  __name(handleCustomerConfirmed, "handleCustomerConfirmed");
  __name2(handleCustomerConfirmed, "handleCustomerConfirmed");
  function handleStartTour() {
    if (!otp) {
      const fresh = genOtp();
      setOtp(fresh);
      logEvent("custom_message_sent", `OTP generated: ${fresh}`);
      toast.message(`OTP ${fresh} generated. Share with customer or use Tour Start OTP template.`);
      return;
    }
    logEvent("tour_started", `OTP: ${otp}`);
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: "confirmed", showUp: true } : t));
    toast.success("Tour started");
  }
  __name(handleStartTour, "handleStartTour");
  __name2(handleStartTour, "handleStartTour");
  function handleEndTour() {
    logEvent("tour_ended");
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: "completed" } : t));
    toast.success("Tour ended — please file TCM report");
  }
  __name(handleEndTour, "handleEndTour");
  __name2(handleEndTour, "handleEndTour");
  function handleNoShow() {
    logEvent("no_show", "Marked no-show");
    setTours((prev) => prev.map((t) => t.id === safeTour.id ? { ...t, status: "no-show", showUp: false } : t));
    toast.warning("Marked as no-show");
  }
  __name(handleNoShow, "handleNoShow");
  __name2(handleNoShow, "handleNoShow");
  function handleTcmOnWay() {
    logEvent("tcm_on_the_way", `ETA ${etaMinutes} min`);
  }
  __name(handleTcmOnWay, "handleTcmOnWay");
  __name2(handleTcmOnWay, "handleTcmOnWay");
  function handleCustomerLate() {
    logEvent("customer_running_late");
  }
  __name(handleCustomerLate, "handleCustomerLate");
  __name2(handleCustomerLate, "handleCustomerLate");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-6xl mx-auto", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:154:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/myt/tours", className: "text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:155:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:156:9" }),
      " Back to tours"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:160:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:161:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 flex-wrap", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:162:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:163:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:164:15", children: tour.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground flex flex-wrap gap-x-3 gap-y-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:165:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:166:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:166:66" }),
              tour.phone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:167:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:167:66" }),
              tour.assignedToName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:168:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:168:66" }),
              tour.area,
              " · ",
              tour.propertyName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:169:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:169:66" }),
              fmtWhen(tour.tourDate, tour.tourTime)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:170:17", children: [
              "💰 ₹",
              tour.budget?.toLocaleString("en-IN")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:173:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: tour.status === "completed" ? "default" : "secondary", className: "capitalize", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:174:15", children: tour.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:175:15", children: "Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold tabular-nums", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:176:15", children: [
            score.total,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:176:77", children: "/100" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:180:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:181:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: handleCustomerConfirmed, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:182:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:183:15" }),
            " Customer replied YES"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: handleTcmOnWay, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:185:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:186:15" }),
            " TCM on the way"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: handleCustomerLate, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:188:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleDot, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:189:15" }),
            " Customer running late"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: handleStartTour, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:191:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:192:15" }),
            " ",
            otp ? "Confirm tour started" : "Generate OTP & start"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "default", onClick: handleEndTour, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:194:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleStop, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:195:15" }),
            " End tour"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "destructive", onClick: handleNoShow, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:197:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:198:15" }),
            " No-show"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/myt/tour/${tour.id}/report`, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:200:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:201:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:201:53" }),
            " File TCM report"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/myt/feedback/${tour.id}`, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:203:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:204:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:204:53" }),
            " Customer feedback"
          ] }) })
        ] }),
        mismatches.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded border border-destructive/40 bg-destructive/10 p-2 text-xs text-destructive", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:209:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold mb-0.5", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:210:15", children: "⚠ Mismatch detected" }),
          mismatches.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:211:41", children: [
            "• ",
            m.reason
          ] }, i))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "messages", className: "w-full", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:217:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:218:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "messages", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:219:11", children: "Copy-paste messages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "timeline", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:220:11", children: [
          "Timeline (",
          events.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "score", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:221:11", children: "Score" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "messages", className: "space-y-4", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:225:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:226:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:227:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:228:15", children: "Pick a scenario → copy → paste in WhatsApp" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:230:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-2", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:231:15", children: settings.templates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: /* @__PURE__ */ __name2(() => setActiveTplId(t.id), "onClick"),
              className: cn(
                "text-left rounded border p-2 hover:border-primary transition-colors",
                activeTplId === t.id && "border-primary bg-primary/5"
              ),
              "data-tsd-source": "/src/myt/pages/TourCommand.tsx:233:19",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:241:21", children: t.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground line-clamp-2", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:242:21", children: t.scenario })
              ]
            },
            t.id
          )) }),
          activeTpl && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border bg-muted/30 p-3 space-y-2", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:248:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:249:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:250:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:251:23", children: activeTpl.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:252:23", children: activeTpl.scenario })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center flex-wrap", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:254:21", children: [
                activeTpl.id === "tour_start_otp" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:256:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "h-3.5 w-3.5 text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:257:27" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: otp,
                      onChange: /* @__PURE__ */ __name2((e) => setOtp(e.target.value), "onChange"),
                      placeholder: "OTP",
                      className: "h-7 w-24 text-xs",
                      "data-tsd-source": "/src/myt/pages/TourCommand.tsx:258:27"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-xs", onClick: /* @__PURE__ */ __name2(() => setOtp(genOtp()), "onClick"), "data-tsd-source": "/src/myt/pages/TourCommand.tsx:264:27", children: "Gen" })
                ] }),
                activeTpl.id === "tcm_eta" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:270:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:271:27", children: "ETA" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: etaMinutes,
                      onChange: /* @__PURE__ */ __name2((e) => setEtaMinutes(e.target.value), "onChange"),
                      className: "h-7 w-16 text-xs",
                      "data-tsd-source": "/src/myt/pages/TourCommand.tsx:272:27"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:277:27", children: "min" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CopyButton,
                  {
                    text: renderedActive,
                    variant: "default",
                    label: "Copy message",
                    onCopied: /* @__PURE__ */ __name2(() => logEvent("custom_message_sent", `Copied: ${activeTpl.label}`, activeTpl.id), "onCopied"),
                    "data-tsd-source": "/src/myt/pages/TourCommand.tsx:280:23"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: whatsappLink(tour.phone, renderedActive),
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: /* @__PURE__ */ __name2(() => logEvent("custom_message_sent", `WA opened: ${activeTpl.label}`, activeTpl.id), "onClick"),
                    "data-tsd-source": "/src/myt/pages/TourCommand.tsx:286:23",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:292:25", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:292:63" }),
                      " Open WhatsApp"
                    ] })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: renderedActive, readOnly: true, rows: Math.min(12, renderedActive.split("\n").length + 1), className: "font-mono text-xs", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:296:19" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border p-3 space-y-2", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:300:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs uppercase text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:301:17", children: [
              "Custom message (variables work: ",
              "{{leadName}}, {{propertyName}}, {{when}}…",
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: customBody, onChange: /* @__PURE__ */ __name2((e) => setCustomBody(e.target.value), "onChange"), rows: 3, placeholder: "Type a custom message…", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:302:17" }),
            customBody && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:305:21", children: "Preview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: renderedCustom, readOnly: true, rows: Math.min(8, renderedCustom.split("\n").length + 1), className: "font-mono text-xs", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:306:21" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:307:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: renderedCustom, variant: "default", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:308:23" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: whatsappLink(tour.phone, renderedCustom), target: "_blank", rel: "noreferrer", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:309:23", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "secondary", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:310:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:310:63" }),
                  " Open WhatsApp"
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:317:15", children: [
            "Edit any template wording in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/myt/settings", className: "text-primary underline", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:318:46", children: "Settings → Message Templates" }),
            "."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "timeline", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:325:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:326:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:327:13", children: events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:329:17", children: "No events yet. Use the action buttons above to log lifecycle moments." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l pl-4 space-y-3", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:331:17", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:333:21", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[19px] top-1 h-2.5 w-2.5 rounded-full bg-primary", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:334:23" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:335:23", children: EVENT_LABEL[e.kind] ?? e.kind }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:336:23", children: new Date(e.at).toLocaleString("en-IN") }),
        e.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs mt-0.5", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:337:35", children: e.notes })
      ] }, e.id)) }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "score", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:347:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:348:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 space-y-3", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:349:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold tabular-nums", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:350:15", children: [
          score.total,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:350:77", children: "/100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:351:15", children: Object.keys(score.parts).map((k) => {
          const p = score.parts[k];
          const pct = p.max ? p.earned / p.max * 100 : 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TourCommand.tsx:356:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:357:23", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:358:25", children: k.replace(/([A-Z])/g, " $1") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:359:25", children: [
                p.earned,
                "/",
                p.max
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded overflow-hidden", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:361:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary", style: { width: `${pct}%` }, "data-tsd-source": "/src/myt/pages/TourCommand.tsx:362:25" }) })
          ] }, k);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:368:15", children: [
          "Adjust weights in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/myt/settings", className: "underline", "data-tsd-source": "/src/myt/pages/TourCommand.tsx:368:80", children: "Settings → Score Weights" }),
          "."
        ] })
      ] }) }) })
    ] })
  ] });
}
__name(TourCommand, "TourCommand");
__name2(TourCommand, "TourCommand");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/tour.$id.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TourCommand, { "data-tsd-source": "/src/routes/myt/tour.$id.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
