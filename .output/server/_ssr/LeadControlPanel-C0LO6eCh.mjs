var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Sheet, am as SheetTrigger, N as SheetContent, O as SheetHeader, Q as SheetTitle } from "./AppShell-BN067m2r.mjs";
import { aB as useAppState, aM as useTourData, k as Button, q as cn, aK as intentBg, B as Badge, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, U as Label, A as Textarea, X as Input } from "./router-xBhBcQRf.mjs";
import { S as Slider } from "./slider-Bs5Yl8ak.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Sparkles, g as TriangleAlert, X, P as Phone, r as MessageCircle, k as FileText, H as MessageSquare, p as Bell, l as CircleCheck, f as Activity, W as Wallet, K as MapPin, B as Building2, s as Clock, ad as Tag, ac as Send } from "../_libs/lucide-react.mjs";
import { a as formatDistanceToNow, f as format } from "../_libs/date-fns.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const STAGES = [
  { value: "scheduled", label: "Scheduled" },
  { value: "confirmed", label: "Confirmed" },
  { value: "completed", label: "Tour Done" },
  { value: "no-show", label: "No-show" },
  { value: "cancelled", label: "Cancelled" }
];
const SIGNAL_TAGS = [
  "Price issue",
  "Location mismatch",
  "Parents involved",
  "Comparing options",
  "Food concern",
  "Move-in delay",
  "Hot lead"
];
function LeadControlPanel({ subject, trigger, defaultTab = "overview" }) {
  const [open, setOpen] = reactExports.useState(false);
  const { setTours, leads, setLeads } = useAppState();
  const { addEvent, eventsForTour, reports, setReport } = useTourData();
  const tour = subject.kind === "tour" ? subject.tour : void 0;
  const lead = subject.kind === "lead" ? subject.lead : leads.find((l) => l.phone === subject.tour.phone || l.name === subject.tour.leadName);
  const name = tour?.leadName ?? lead?.name ?? "Lead";
  const phone = tour?.phone ?? lead?.phone ?? "";
  const area = tour?.area ?? lead?.area ?? "—";
  const budget = tour?.budget ?? lead?.budget ?? 0;
  const property = tour?.propertyName;
  const [note, setNote] = reactExports.useState("");
  const [tags, setTags] = reactExports.useState([]);
  const [fuDate, setFuDate] = reactExports.useState(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  });
  const [fuPriority, setFuPriority] = reactExports.useState(
    tour?.intent === "hard" ? "hot" : tour?.intent === "medium" ? "warm" : "cold"
  );
  const [fuReason, setFuReason] = reactExports.useState("Decision check-in");
  const [waText, setWaText] = reactExports.useState("");
  const existingReport = tour ? reports[tour.id] : void 0;
  const [ptOutcome, setPtOutcome] = reactExports.useState(tour?.outcome ?? "");
  const [ptConfidence, setPtConfidence] = reactExports.useState(existingReport ? 80 : tour?.confidenceScore ?? 50);
  const [ptObjection, setPtObjection] = reactExports.useState(tour?.whyLost ?? null);
  const [ptObjectionNote, setPtObjectionNote] = reactExports.useState("");
  const [ptDecisionDate, setPtDecisionDate] = reactExports.useState("");
  const [ptNextFollowUp, setPtNextFollowUp] = reactExports.useState(fuDate);
  const events = reactExports.useMemo(() => tour ? eventsForTour(tour.id) : [], [tour, eventsForTour]);
  const updateTour = /* @__PURE__ */ __name2((patch) => {
    if (!tour) return;
    setTours((prev) => prev.map((t) => t.id === tour.id ? { ...t, ...patch } : t));
  }, "updateTour");
  const updateLead = /* @__PURE__ */ __name2((patch) => {
    if (!lead) return;
    setLeads((prev) => prev.map((l) => l.id === lead.id ? { ...l, ...patch } : l));
  }, "updateLead");
  const log = /* @__PURE__ */ __name2((kind, notes) => {
    if (tour) addEvent({ tourId: tour.id, kind, notes });
  }, "log");
  const setStatus = /* @__PURE__ */ __name2((status) => {
    updateTour({ status, ...status === "completed" ? { showUp: true } : {} });
    log(
      status === "completed" ? "tour_ended" : status === "no-show" ? "no_show" : "custom_message_sent",
      `Status → ${status}`
    );
    toast.success(`Status updated to ${status}`);
  }, "setStatus");
  const sendWhatsApp = /* @__PURE__ */ __name2((text) => {
    if (!phone) {
      toast.error("No phone on file");
      return;
    }
    const cleaned = phone.replace(/\D/g, "");
    window.open(`https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`, "_blank");
    log("custom_message_sent", text.slice(0, 80));
    toast.success("WhatsApp opened");
  }, "sendWhatsApp");
  const callNow = /* @__PURE__ */ __name2(() => {
    if (!phone) return;
    window.location.href = `tel:${phone.replace(/\s/g, "")}`;
    log("custom_message_sent", "Call placed");
  }, "callNow");
  const saveNote = /* @__PURE__ */ __name2(() => {
    if (!note.trim()) return;
    log("custom_message_sent", `Note: ${note.trim()}${tags.length ? ` [${tags.join(", ")}]` : ""}`);
    toast.success("Note saved");
    setNote("");
    setTags([]);
  }, "saveNote");
  const saveFollowUp = /* @__PURE__ */ __name2(() => {
    new Date(fuDate).toISOString();
    log("reminder_sent", `Follow-up scheduled · ${fuPriority.toUpperCase()} · ${fuReason} · ${format(new Date(fuDate), "MMM d")}`);
    toast.success(`Follow-up set ${format(new Date(fuDate), "MMM d")}`, { description: fuReason });
    if (lead) updateLead({ notes: `[FU ${fuDate}] ${fuReason}
${lead.notes ?? ""}` });
  }, "saveFollowUp");
  const savePostTour = /* @__PURE__ */ __name2(() => {
    if (!tour) return;
    if (!ptOutcome) {
      toast.error("Pick an outcome");
      return;
    }
    if (!ptObjection && ptOutcome !== "booked" && ptOutcome !== "token-paid") {
      toast.error("Tag the key objection");
      return;
    }
    if (!ptNextFollowUp) {
      toast.error("Next follow-up date is mandatory");
      return;
    }
    updateTour({ outcome: ptOutcome, whyLost: ptObjection, remarks: ptObjectionNote });
    setReport({
      tourId: tour.id,
      arrived: tour.showUp ? "yes" : "no",
      punctuality: "on_time",
      budgetAlignment: "exact",
      propertyReaction: ptOutcome === "booked" || ptOutcome === "token-paid" ? "positive" : "neutral",
      interestLevel: ptConfidence >= 70 ? "high" : ptConfidence >= 40 ? "medium" : "low",
      firstObjection: ptObjection ?? void 0,
      decisionAuthority: "self",
      emotionalTone: "neutral",
      outcome: ptOutcome === "booked" || ptOutcome === "token-paid" ? "booked" : ptOutcome === "follow-up" ? "warm" : ptOutcome === "draft" ? "hot" : "cold",
      nextStep: `${fuReason} on ${ptNextFollowUp}`,
      notes: ptObjectionNote,
      filedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    log("tcm_report_filed", `Outcome: ${ptOutcome} · confidence ${ptConfidence}%`);
    toast.success("Post-tour update saved");
  }, "savePostTour");
  const stale = tour?.status === "completed" && !tour.outcome;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:171:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:172:7", children: trigger ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 gap-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:174:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:175:13" }),
      " Open"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      SheetContent,
      {
        side: "right",
        className: "w-full sm:max-w-xl p-0 overflow-y-auto",
        "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:179:7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "p-4 border-b border-border bg-surface-2/40 sticky top-0 z-10", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:184:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:185:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:186:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "text-base font-heading flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:187:15", children: [
                  name,
                  tour && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-[10px] px-1.5 py-0.5 rounded border font-medium uppercase", intentBg[tour.intent]), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:190:19", children: tour.intent }),
                  stale && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", className: "text-[10px] gap-1", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:195:19", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:196:21" }),
                    " Update required"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-1", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:200:15", children: [
                  phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:201:27", children: [
                    "📞 ",
                    phone
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:202:17", children: [
                    "📍 ",
                    area
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:203:17", children: [
                    "💰 ₹",
                    (budget / 1e3).toFixed(0),
                    "k"
                  ] })
                ] }),
                tour && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:206:17", children: [
                  tour.propertyName,
                  " · ",
                  tour.tourDate,
                  " ",
                  tour.tourTime,
                  " · TCM ",
                  tour.assignedToName
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-7 w-7", onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:211:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:212:15" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:217:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 gap-1 text-[11px]", onClick: callNow, disabled: !phone, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:218:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:219:15" }),
                " Call"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 gap-1 text-[11px]", onClick: /* @__PURE__ */ __name2(() => sendWhatsApp(`Hi ${name}, this is regarding your Gharpayy tour. Can we connect?`), "onClick"), disabled: !phone, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:221:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:222:15" }),
                " WhatsApp"
              ] }),
              tour && /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: tour.status, onValueChange: /* @__PURE__ */ __name2((v) => setStatus(v), "onValueChange"), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:225:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 text-[11px] w-[130px]", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:226:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:227:19" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:229:17", children: STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.value, className: "text-xs", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:230:38", children: s.label }, s.value)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: stale ? "post-tour" : defaultTab, className: "p-4", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:238:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full justify-start h-9 flex-wrap", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:239:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "overview", className: "text-[11px] gap-1", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:240:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:240:73" }),
                " Overview"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "actions", className: "text-[11px] gap-1", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:241:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:241:72" }),
                " Action"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "followup", className: "text-[11px] gap-1", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:242:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:242:73" }),
                " Follow-up"
              ] }),
              tour && /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "post-tour", className: cn("text-[11px] gap-1", stale && "text-destructive"), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:243:22", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:243:118" }),
                " Post-tour"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "activity", className: "text-[11px] gap-1", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:244:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:244:73" }),
                " Activity"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "mt-3 space-y-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:248:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:249:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-3.5 w-3.5" }), label: "Budget", value: `₹${budget.toLocaleString()}/mo`, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:250:15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }), label: "Area", value: area, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:251:15" }),
                tour && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5" }), label: "Property", value: property, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:252:24" }),
                tour && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }), label: "Slot", value: `${tour.tourDate} ${tour.tourTime}`, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:253:24" }),
                lead && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3.5 w-3.5" }), label: "Source", value: lead.addedByName ?? "—", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:254:24" }),
                lead && /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }), label: "Move-in", value: lead.moveInDate, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:255:24" })
              ] }),
              tour && (tour.confidenceReason?.length ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2.5 text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:259:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-foreground mb-1 flex items-center gap-1", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:260:17", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:260:91" }),
                  " Why this score"
                ] }),
                tour.confidenceReason.join(" · ")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:266:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:267:15", children: "Add note" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: note,
                    onChange: /* @__PURE__ */ __name2((e) => setNote(e.target.value), "onChange"),
                    placeholder: "What did the lead say? Concerns, decision triggers, parent objections…",
                    className: "min-h-[70px] text-xs",
                    "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:268:15"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:274:15", children: SIGNAL_TAGS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: /* @__PURE__ */ __name2(() => setTags((s) => s.includes(t) ? s.filter((x) => x !== t) : [...s, t]), "onClick"),
                    className: cn(
                      "text-[10px] px-2 py-0.5 rounded-full border transition-colors",
                      tags.includes(t) ? "bg-primary/15 border-primary/40 text-primary" : "bg-surface-2 border-border text-muted-foreground hover:bg-surface-3"
                    ),
                    "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:276:19",
                    children: t
                  },
                  t
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "w-full gap-1.5", onClick: saveNote, disabled: !note.trim(), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:290:15", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:291:17" }),
                  " Save to log"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "actions", className: "mt-3 space-y-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:297:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:298:13", children: [
              [
                { label: "Reconfirm tour", text: `Hi ${name}, just confirming your tour today at ${tour?.tourTime ?? "the scheduled time"} for ${property ?? "the property"}. Reply YES to confirm.` },
                { label: "Send directions", text: `Hi ${name}, here are directions for your visit: https://maps.google.com/?q=${encodeURIComponent(property ?? area)}. TCM ${tour?.assignedToName ?? ""} will meet you.` },
                { label: "Urgency nudge", text: `Hi ${name}, only 2 beds left in your range at ${property ?? "this property"}. 3 others viewing today. Hold expires in 4 hours. Reply YES to lock.` },
                { label: "Post-tour check-in", text: `Hi ${name}, hope the visit went well! Did you like the place? Reply 1: Loved it · 2: Good unsure · 3: Need better options.` },
                { label: "Token request", text: `Hi ${name}, lock your bed at ${property ?? ""} with a refundable ₹2,000 token. Pay here: gharpayy.com/pay/${tour?.id ?? ""}` }
              ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:306:17", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:307:19", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:308:21", children: t.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-6 gap-1 text-[10px]", onClick: /* @__PURE__ */ __name2(() => sendWhatsApp(t.text), "onClick"), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:309:21", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3 w-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:310:23" }),
                    " Send"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground line-clamp-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:313:19", children: t.text })
              ] }, t.label)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2.5 space-y-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:317:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:318:17", children: "Custom message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: waText, onChange: /* @__PURE__ */ __name2((e) => setWaText(e.target.value), "onChange"), placeholder: "Type a custom WhatsApp message…", className: "min-h-[60px] text-xs", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:319:17" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "w-full gap-1.5", disabled: !waText.trim(), onClick: /* @__PURE__ */ __name2(() => {
                  sendWhatsApp(waText);
                  setWaText("");
                }, "onClick"), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:320:17", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:321:19" }),
                  " Send custom"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "followup", className: "mt-3 space-y-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:328:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-amber/30 bg-amber/5 p-2.5 text-[11px] text-amber-foreground/90", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:329:13", children: "⚠ Every lead must have a next follow-up date. No exceptions." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:332:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:333:15", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:334:17", children: "Next follow-up" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: fuDate, onChange: /* @__PURE__ */ __name2((e) => setFuDate(e.target.value), "onChange"), className: "h-9 text-sm", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:335:17" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:337:15", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:338:17", children: "Priority" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: fuPriority, onValueChange: /* @__PURE__ */ __name2((v) => setFuPriority(v), "onValueChange"), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:339:17", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:340:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:340:58" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:341:19", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hot", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:342:21", children: "🔥 Hot — today" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "warm", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:343:21", children: "☀️ Warm — 24h" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cold", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:344:21", children: "❄️ Cold — this week" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:349:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:350:15", children: "What to do" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: fuReason, onValueChange: setFuReason, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:351:15", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:352:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:352:56" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:353:17", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Decision check-in", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:354:19", children: "Decision check-in" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Reconfirm tour", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:355:19", children: "Reconfirm tour" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Send property options", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:356:19", children: "Send property options" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Pricing discussion", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:357:19", children: "Pricing discussion" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Token / advance push", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:358:19", children: "Token / advance push" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Parent call", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:359:19", children: "Parent call" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: saveFollowUp, className: "w-full gap-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:363:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:364:15" }),
                " Set follow-up"
              ] })
            ] }),
            tour && /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "post-tour", className: "mt-3 space-y-3", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:370:13", children: [
              stale && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-destructive/40 bg-destructive/5 p-2.5 text-[11px] text-destructive flex items-center gap-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:372:17", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:373:19" }),
                " Tour ended without an update. Fill all fields to clear the flag."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:377:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:378:17", children: "Outcome (mandatory)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:379:17", children: [
                  { v: "booked", label: "✅ Booked" },
                  { v: "token-paid", label: "💰 Token" },
                  { v: "draft", label: "📄 Draft" },
                  { v: "follow-up", label: "🔁 Follow-up" },
                  { v: "not-interested", label: "❌ Not fit" },
                  { v: "rejected", label: "🚫 Rejected" }
                ].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: /* @__PURE__ */ __name2(() => setPtOutcome(o.v), "onClick"),
                    className: cn(
                      "h-8 rounded-md border text-[10px] font-medium transition-colors",
                      ptOutcome === o.v ? "border-primary bg-primary/15 text-primary" : "border-border bg-surface-2 text-muted-foreground hover:bg-surface-3"
                    ),
                    "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:388:21",
                    children: o.label
                  },
                  o.v
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:404:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:405:17", children: [
                  "Deal confidence · ",
                  ptConfidence,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: [ptConfidence], onValueChange: /* @__PURE__ */ __name2((v) => setPtConfidence(v[0]), "onValueChange"), max: 100, step: 5, "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:406:17" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:409:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:410:17", children: "Key objection" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: ptObjection ?? "", onValueChange: /* @__PURE__ */ __name2((v) => setPtObjection(v || null), "onValueChange"), "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:411:17", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-sm", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:412:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select objection", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:412:58" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:413:19", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "price", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:414:21", children: "Price" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "location", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:415:21", children: "Location" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "food", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:416:21", children: "Food" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "delay", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:417:21", children: "Decision delay" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "comparing", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:418:21", children: "Comparing options" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:419:21", children: "Other" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Add detail (exact words help)", value: ptObjectionNote, onChange: /* @__PURE__ */ __name2((e) => setPtObjectionNote(e.target.value), "onChange"), className: "h-9 text-sm", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:422:17" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:425:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:426:17", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:427:19", children: "Expected decision date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: ptDecisionDate, onChange: /* @__PURE__ */ __name2((e) => setPtDecisionDate(e.target.value), "onChange"), className: "h-9 text-sm", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:428:19" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:430:17", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:431:19", children: "Next follow-up *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: ptNextFollowUp, onChange: /* @__PURE__ */ __name2((e) => setPtNextFollowUp(e.target.value), "onChange"), className: "h-9 text-sm", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:432:19" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: savePostTour, className: "w-full gap-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:436:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:437:17" }),
                " Submit post-tour update"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:439:15", children: "Skipping or partial fills block new tour assignments after 4 hours." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activity", className: "mt-3 space-y-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:446:11", children: events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-6", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:448:15", children: "No activity yet. Every action you take here will appear in this timeline." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:450:15", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2.5 text-[11px]", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:452:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:453:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium capitalize", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:454:23", children: e.kind.replace(/_/g, " ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:455:23", children: formatDistanceToNow(new Date(e.at), { addSuffix: true }) })
              ] }),
              e.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-0.5", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:457:33", children: e.notes })
            ] }, e.id)) }) })
          ] })
        ]
      }
    )
  ] });
}
__name(LeadControlPanel, "LeadControlPanel");
__name2(LeadControlPanel, "LeadControlPanel");
function Info({ icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-surface-2/40 p-2", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:471:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wide", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:472:7", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-medium mt-0.5 truncate", "data-tsd-source": "/src/myt/components/LeadControlPanel.tsx:473:7", children: value })
  ] });
}
__name(Info, "Info");
__name2(Info, "Info");
export {
  LeadControlPanel as L
};
