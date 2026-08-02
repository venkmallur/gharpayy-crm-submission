var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, u as useQuotations } from "./AppShell-rXFHrudv.mjs";
import { as as PROPERTIES, u as useApp, at as ACTIVITIES, au as FOLLOWUPS, av as TOURS, aw as LEADS, ax as TCMS, k as Button, B as Badge } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bl as Database, g as TriangleAlert, S as Sparkles, aS as Trash2 } from "../_libs/lucide-react.mjs";
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
const DEMO_TAG = "__demo30x600";
function rnd(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
__name(rnd, "rnd");
__name2(rnd, "rnd");
function rndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
__name(rndInt, "rndInt");
__name2(rndInt, "rndInt");
function chance(pct) {
  return Math.random() * 100 < pct;
}
__name(chance, "chance");
__name2(chance, "chance");
function isoDaysFromNow(d) {
  return new Date(Date.now() + d * 864e5).toISOString();
}
__name(isoDaysFromNow, "isoDaysFromNow");
__name2(isoDaysFromNow, "isoDaysFromNow");
const FIRST_NAMES = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Krishna", "Ishaan", "Rohan", "Kabir", "Ansh", "Sai", "Reyansh", "Aanya", "Diya", "Aadhya", "Saanvi", "Pari", "Anika", "Myra", "Ira", "Riya", "Tara", "Zara", "Kiara", "John", "Sara", "Liam", "Emma", "Noah", "Olivia", "Ahmed", "Fatima", "Wei", "Mei", "Yuki", "Hiro", "Marco", "Sofia", "Lucas", "Mia"];
const LAST_NAMES = ["Sharma", "Verma", "Gupta", "Singh", "Patel", "Reddy", "Iyer", "Nair", "Khan", "Mehta", "Joshi", "Kapoor", "Bose", "Das", "Roy", "Shah", "Pillai", "Menon", "Smith", "Wong", "Chen", "Lee", "Garcia", "Brown", "Khan", "Ali", "Tanaka", "Park", "Müller"];
const CITIES = ["Bangalore", "Pune", "Mumbai", "Hyderabad", "Delhi", "Chennai", "Kolkata", "Gurgaon"];
const SOURCES = ["WhatsApp", "Meta Ads", "Website", "Referral", "CSV Import", "Manual", "Google", "Justdial", "99acres", "Walk-in"];
const SEGMENTS = ["Student", "Working Pro", "Parents", "International"];
const TEAMS = [
  { team: "Lead Gen", count: 8, roleBase: "lg" },
  { team: "SDR", count: 8, roleBase: "sdr" },
  { team: "Visit Coord", count: 5, roleBase: "vc" },
  { team: "Closer", count: 4, roleBase: "cl" },
  { team: "Ops", count: 3, roleBase: "op" },
  { team: "Manager", count: 2, roleBase: "mg" }
];
function buildTcms() {
  const tcms = [];
  let idx = 0;
  for (const t of TEAMS) {
    for (let i = 0; i < t.count; i++) {
      idx++;
      const first = FIRST_NAMES[idx % FIRST_NAMES.length];
      const last = LAST_NAMES[idx * 3 % LAST_NAMES.length];
      tcms.push({
        id: `${DEMO_TAG}-tcm-${idx}`,
        name: `${first} ${last}`,
        initials: `${first[0]}${last[0]}`,
        zone: rnd(CITIES) + " Central",
        conversionRate: 0.05 + Math.random() * 0.25,
        avgResponseMins: rndInt(3, 30),
        // @ts-expect-error — team is denormalized for the demo, not on the schema
        team: t.team
      });
    }
  }
  return tcms;
}
__name(buildTcms, "buildTcms");
__name2(buildTcms, "buildTcms");
function pickSegment() {
  const r = Math.random() * 100;
  if (r < 35) return "Student";
  if (r < 85) return "Working Pro";
  if (r < 95) return "Parents";
  return "International";
}
__name(pickSegment, "pickSegment");
__name2(pickSegment, "pickSegment");
function budgetForSegment(seg) {
  switch (seg) {
    case "Student":
      return rndInt(8e3, 18e3);
    case "Working Pro":
      return rndInt(15e3, 45e3);
    case "Parents":
      return rndInt(18e3, 35e3);
    case "International":
      return rndInt(25e3, 8e4);
  }
}
__name(budgetForSegment, "budgetForSegment");
__name2(budgetForSegment, "budgetForSegment");
function pickStage() {
  const r = Math.random() * 100;
  if (r < 55) return "new";
  if (r < 73) return "contacted";
  if (r < 85) return "tour-scheduled";
  if (r < 92) return "tour-done";
  if (r < 96) return "negotiation";
  if (r < 99) return "booked";
  return "dropped";
}
__name(pickStage, "pickStage");
__name2(pickStage, "pickStage");
function pickIntent() {
  const r = Math.random() * 100;
  if (r < 18) return "hot";
  if (r < 55) return "warm";
  return "cold";
}
__name(pickIntent, "pickIntent");
__name2(pickIntent, "pickIntent");
function buildLeads(tcms, total) {
  const leads = [];
  const propertyAreas = Array.from(new Set(PROPERTIES.map((p) => p.area)));
  const phoneSet = /* @__PURE__ */ new Set();
  for (let i = 0; i < total; i++) {
    const seg = pickSegment();
    const first = FIRST_NAMES[i * 7 % FIRST_NAMES.length];
    const last = LAST_NAMES[i * 13 % LAST_NAMES.length];
    const tcm = tcms[i % tcms.length];
    let phone;
    if (chance(2)) {
      phone = "+91 0000000000";
    } else if (chance(3) && phoneSet.size > 0) {
      phone = Array.from(phoneSet)[rndInt(0, phoneSet.size - 1)];
    } else {
      phone = `+91 ${rndInt(7e4, 99999)}${rndInt(1e4, 99999)}`;
    }
    phoneSet.add(phone);
    const intent = pickIntent();
    const stage = pickStage();
    const createdDays = rndInt(0, 60);
    const tags = [DEMO_TAG, seg, ...chance(12) ? ["no-response"] : [], ...chance(6) ? ["revisit"] : [], ...chance(4) ? ["cancelled"] : [], ...chance(1) ? ["refund"] : []];
    leads.push({
      id: `${DEMO_TAG}-lead-${i + 1}`,
      name: `${first} ${last}`,
      phone,
      source: rnd(SOURCES),
      budget: budgetForSegment(seg),
      moveInDate: isoDaysFromNow(rndInt(-5, 60)).slice(0, 10),
      preferredArea: rnd(propertyAreas),
      assignedTcmId: tcm.id,
      stage,
      intent,
      confidence: stage === "booked" ? 100 : stage === "negotiation" ? rndInt(60, 90) : stage === "tour-done" ? rndInt(40, 75) : intent === "hot" ? rndInt(40, 70) : intent === "warm" ? rndInt(20, 50) : rndInt(5, 25),
      tags,
      nextFollowUpAt: chance(75) ? isoDaysFromNow(rndInt(-3, 10)) : null,
      // ~25% orphan
      responseSpeedMins: rndInt(1, 240),
      createdAt: isoDaysFromNow(-createdDays),
      updatedAt: isoDaysFromNow(rndInt(-createdDays, 0))
    });
  }
  return leads;
}
__name(buildLeads, "buildLeads");
__name2(buildLeads, "buildLeads");
function buildTours(leads) {
  const out = [];
  for (const l of leads) {
    if (l.stage === "new" || l.stage === "contacted") continue;
    const prop = PROPERTIES[Math.floor(Math.random() * PROPERTIES.length)];
    const scheduledAt = isoDaysFromNow(l.stage === "tour-scheduled" ? rndInt(0, 7) : rndInt(-30, -1));
    const status = l.stage === "tour-scheduled" ? "scheduled" : l.stage === "dropped" && chance(40) ? "no-show" : "completed";
    const filled = status === "completed" && chance(70);
    out.push({
      id: `${DEMO_TAG}-tour-${l.id}`,
      leadId: l.id,
      propertyId: prop.id,
      tcmId: l.assignedTcmId,
      scheduledAt,
      status,
      decision: l.stage === "booked" ? "booked" : l.stage === "negotiation" ? "thinking" : l.stage === "dropped" ? "dropped" : null,
      postTour: {
        outcome: l.stage === "booked" ? "booked" : l.stage === "dropped" ? "not-interested" : filled ? "thinking" : null,
        confidence: filled ? rndInt(20, 90) : 0,
        objection: filled ? rnd(["price", "location", "amenities", "timing", "parents", "comparing"]) : null,
        objectionNote: filled ? "Auto-logged demo objection." : "",
        expectedDecisionAt: filled ? isoDaysFromNow(rndInt(1, 14)) : null,
        nextFollowUpAt: filled ? isoDaysFromNow(rndInt(1, 7)) : null,
        filledAt: filled ? (/* @__PURE__ */ new Date()).toISOString() : null
      },
      createdAt: scheduledAt,
      updatedAt: scheduledAt
    });
  }
  return out;
}
__name(buildTours, "buildTours");
__name2(buildTours, "buildTours");
function buildFollowUps(leads) {
  return leads.filter((l) => l.nextFollowUpAt).map((l) => ({
    id: `${DEMO_TAG}-fu-${l.id}`,
    leadId: l.id,
    tcmId: l.assignedTcmId,
    dueAt: l.nextFollowUpAt,
    priority: l.intent === "hot" ? "high" : l.intent === "warm" ? "medium" : "low",
    reason: "Demo follow-up",
    done: chance(20)
  }));
}
__name(buildFollowUps, "buildFollowUps");
__name2(buildFollowUps, "buildFollowUps");
function seedDemoCompany(totalLeads = 18e3) {
  const t0 = performance.now();
  const tcms = buildTcms();
  const leads = buildLeads(tcms, totalLeads);
  const tours = buildTours(leads);
  const fus = buildFollowUps(leads);
  const bySegment = {};
  const byStage = {};
  const byTeam = {};
  leads.forEach((l) => {
    const seg = l.tags.find((t) => SEGMENTS.includes(t)) ?? "?";
    bySegment[seg] = (bySegment[seg] ?? 0) + 1;
    byStage[l.stage] = (byStage[l.stage] ?? 0) + 1;
  });
  tcms.forEach((t) => {
    const team = t.team;
    byTeam[team] = (byTeam[team] ?? 0) + leads.filter((l) => l.assignedTcmId === t.id).length;
  });
  clearDemoData(
    /* keepBaseline */
    true
  );
  useApp.setState((s) => ({
    tcms: [...s.tcms.filter((x) => !x.id.startsWith(DEMO_TAG)), ...tcms],
    leads: [...s.leads.filter((x) => !x.id.startsWith(DEMO_TAG)), ...leads],
    tours: [...s.tours.filter((x) => !x.id.startsWith(DEMO_TAG)), ...tours],
    followUps: [...s.followUps.filter((x) => !x.id.startsWith(DEMO_TAG)), ...fus]
  }));
  const negotiationLeads = leads.filter((l) => l.stage === "negotiation" || l.stage === "booked").slice(0, 500);
  const quotes = negotiationLeads.map((l) => {
    const prop = PROPERTIES[Math.floor(Math.random() * PROPERTIES.length)];
    return {
      id: `${DEMO_TAG}-q-${l.id}`,
      leadId: l.id,
      tcmId: l.assignedTcmId,
      propertyId: prop.id,
      propertyName: prop.name,
      roomType: rnd(["Single", "Double", "Triple"]),
      actualRent: l.budget,
      discountedPrice: l.budget - (chance(40) ? rndInt(500, 3e3) : 0),
      deposit: l.budget * 2,
      prebook: 1e3,
      maintenance: 1500,
      maintenanceType: "Monthly",
      lockIn: "6 months",
      notice: "1 month",
      validityMinutes: 60 * 24,
      validUntilISO: isoDaysFromNow(1),
      message: "Demo quote",
      status: "sent",
      sentAt: isoDaysFromNow(rndInt(-7, -1))
    };
  });
  useQuotations.setState((s) => ({
    quotations: [...s.quotations.filter((x) => !x.id.startsWith(DEMO_TAG)), ...quotes]
  }));
  return {
    tcms: tcms.length,
    leads: leads.length,
    tours: tours.length,
    followUps: fus.length,
    quotes: quotes.length,
    bySegment,
    byStage,
    byTeam,
    durationMs: Math.round(performance.now() - t0)
  };
}
__name(seedDemoCompany, "seedDemoCompany");
__name2(seedDemoCompany, "seedDemoCompany");
function clearDemoData(keepBaseline = false) {
  useApp.setState((s) => ({
    tcms: keepBaseline ? s.tcms.filter((x) => !x.id.startsWith(DEMO_TAG)) : TCMS,
    leads: keepBaseline ? s.leads.filter((x) => !x.id.startsWith(DEMO_TAG)) : LEADS,
    tours: keepBaseline ? s.tours.filter((x) => !x.id.startsWith(DEMO_TAG)) : TOURS,
    followUps: keepBaseline ? s.followUps.filter((x) => !x.id.startsWith(DEMO_TAG)) : FOLLOWUPS,
    activities: keepBaseline ? s.activities : ACTIVITIES
  }));
  useQuotations.setState((s) => ({
    quotations: s.quotations.filter((x) => !x.id.startsWith(DEMO_TAG))
  }));
}
__name(clearDemoData, "clearDemoData");
__name2(clearDemoData, "clearDemoData");
function isDemoLoaded() {
  return useApp.getState().leads.some((l) => l.id.startsWith(DEMO_TAG));
}
__name(isDemoLoaded, "isDemoLoaded");
__name2(isDemoLoaded, "isDemoLoaded");
function DemoLoad() {
  const [report, setReport] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [loaded, setLoaded] = reactExports.useState(() => {
    if (typeof window === "undefined") return false;
    return isDemoLoaded();
  });
  const run = /* @__PURE__ */ __name2((count) => {
    setLoading(true);
    setTimeout(() => {
      try {
        const r = seedDemoCompany(count);
        setReport(r);
        setLoaded(true);
        toast.success(`Seeded ${r.leads.toLocaleString()} leads · ${r.tcms} users · ${r.durationMs}ms`);
      } catch (e) {
        toast.error("Seed failed — check console");
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 30);
  }, "run");
  const clear = /* @__PURE__ */ __name2(() => {
    clearDemoData(false);
    setReport(null);
    setLoaded(false);
    toast.success("Demo data cleared — original baseline restored");
  }, "clear");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-4xl mx-auto", "data-tsd-source": "/src/routes/demo-load.tsx:54:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-3", "data-tsd-source": "/src/routes/demo-load.tsx:55:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] text-accent font-semibold flex items-center gap-1.5", "data-tsd-source": "/src/routes/demo-load.tsx:56:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-3 w-3", "data-tsd-source": "/src/routes/demo-load.tsx:57:11" }),
        " War-room simulation"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-semibold", "data-tsd-source": "/src/routes/demo-load.tsx:59:9", children: "Demo Load · 30 users × 600 leads" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", "data-tsd-source": "/src/routes/demo-load.tsx:60:9", children: "Seeds a fake 30-person company (8 Lead Gen · 8 SDR · 5 Visit Coord · 4 Closers · 3 Ops · 2 Managers) and 18,000 leads with realistic segmentation, funnel distribution, duplicates, spam, no-response, refunds." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-warning/30 bg-warning/5 p-3 flex gap-2 text-xs", "data-tsd-source": "/src/routes/demo-load.tsx:65:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-warning shrink-0 mt-0.5", "data-tsd-source": "/src/routes/demo-load.tsx:66:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/demo-load.tsx:67:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-warning", "data-tsd-source": "/src/routes/demo-load.tsx:68:11", children: "One-tap stress test." }),
        "Loading 18K leads exercises every queue, board, and analytic at scale. Browser stays in client state (zustand) so this is honest UI load, not network load. Clear to restore the original demo baseline."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", "data-tsd-source": "/src/routes/demo-load.tsx:73:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "default", className: "h-auto py-4 gap-2 flex-col items-start bg-gradient-to-br from-success to-primary", disabled: loading, onClick: /* @__PURE__ */ __name2(() => run(50), "onClick"), "data-tsd-source": "/src/routes/demo-load.tsx:74:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full", "data-tsd-source": "/src/routes/demo-load.tsx:75:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "data-tsd-source": "/src/routes/demo-load.tsx:75:59" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", "data-tsd-source": "/src/routes/demo-load.tsx:75:91", children: "QA · 50" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-80", "data-tsd-source": "/src/routes/demo-load.tsx:76:11", children: "Feature test — 50 leads across every stage" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "default", className: "h-auto py-4 gap-2 flex-col items-start", disabled: loading, onClick: /* @__PURE__ */ __name2(() => run(1e3), "onClick"), "data-tsd-source": "/src/routes/demo-load.tsx:78:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full", "data-tsd-source": "/src/routes/demo-load.tsx:79:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "data-tsd-source": "/src/routes/demo-load.tsx:79:59" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", "data-tsd-source": "/src/routes/demo-load.tsx:79:91", children: "Light · 1K" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-80", "data-tsd-source": "/src/routes/demo-load.tsx:80:11", children: "Smoke test — 30 users, 1,000 leads" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "default", className: "h-auto py-4 gap-2 flex-col items-start", disabled: loading, onClick: /* @__PURE__ */ __name2(() => run(5e3), "onClick"), "data-tsd-source": "/src/routes/demo-load.tsx:82:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full", "data-tsd-source": "/src/routes/demo-load.tsx:83:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "data-tsd-source": "/src/routes/demo-load.tsx:83:59" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", "data-tsd-source": "/src/routes/demo-load.tsx:83:91", children: "Medium · 5K" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-80", "data-tsd-source": "/src/routes/demo-load.tsx:84:11", children: "Realistic — 30 users, 5,000 leads" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", variant: "default", className: "h-auto py-4 gap-2 flex-col items-start bg-gradient-to-br from-accent to-primary", disabled: loading, onClick: /* @__PURE__ */ __name2(() => run(18e3), "onClick"), "data-tsd-source": "/src/routes/demo-load.tsx:86:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 w-full", "data-tsd-source": "/src/routes/demo-load.tsx:87:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "data-tsd-source": "/src/routes/demo-load.tsx:87:59" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", "data-tsd-source": "/src/routes/demo-load.tsx:87:91", children: "Full · 18K" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-80", "data-tsd-source": "/src/routes/demo-load.tsx:88:11", children: "War-room — 30 users, 18,000 leads" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/demo-load.tsx:92:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: loaded ? "bg-success/10 text-success border-success/40" : "bg-muted text-muted-foreground", "data-tsd-source": "/src/routes/demo-load.tsx:93:9", children: loaded ? "Demo loaded" : "Baseline data" }),
      loaded && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: clear, className: "gap-1.5", "data-tsd-source": "/src/routes/demo-load.tsx:97:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/demo-load.tsx:98:13" }),
        " Clear demo"
      ] })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-border bg-card p-6 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/routes/demo-load.tsx:104:9", children: "Seeding… this can take a few seconds for 18K." }),
    report && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/routes/demo-load.tsx:110:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", "data-tsd-source": "/src/routes/demo-load.tsx:111:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-display font-semibold", "data-tsd-source": "/src/routes/demo-load.tsx:112:13", children: "Seed complete" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/routes/demo-load.tsx:113:13", children: [
          report.durationMs,
          "ms"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2 text-center", "data-tsd-source": "/src/routes/demo-load.tsx:116:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Users", value: report.tcms, "data-tsd-source": "/src/routes/demo-load.tsx:117:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Leads", value: report.leads, "data-tsd-source": "/src/routes/demo-load.tsx:118:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Tours", value: report.tours, "data-tsd-source": "/src/routes/demo-load.tsx:119:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Follow-ups", value: report.followUps, "data-tsd-source": "/src/routes/demo-load.tsx:120:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Quotations", value: report.quotes, "data-tsd-source": "/src/routes/demo-load.tsx:121:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "By segment", data: report.bySegment, "data-tsd-source": "/src/routes/demo-load.tsx:124:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "By stage", data: report.byStage, "data-tsd-source": "/src/routes/demo-load.tsx:125:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "By team", data: report.byTeam, "data-tsd-source": "/src/routes/demo-load.tsx:126:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border text-xs text-muted-foreground", "data-tsd-source": "/src/routes/demo-load.tsx:128:11", children: [
        "Now open ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary underline", href: "/impact", "data-tsd-source": "/src/routes/demo-load.tsx:129:22", children: "/impact" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary underline", href: "/war-room", "data-tsd-source": "/src/routes/demo-load.tsx:129:88", children: "/war-room" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary underline", href: "/funnel", "data-tsd-source": "/src/routes/demo-load.tsx:129:158", children: "/funnel" }),
        " and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-primary underline", href: "/leaderboard", "data-tsd-source": "/src/routes/demo-load.tsx:129:227", children: "/leaderboard" }),
        " to feel the load."
      ] })
    ] })
  ] });
}
__name(DemoLoad, "DemoLoad");
__name2(DemoLoad, "DemoLoad");
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border p-2", "data-tsd-source": "/src/routes/demo-load.tsx:139:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/demo-load.tsx:140:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-display font-semibold", "data-tsd-source": "/src/routes/demo-load.tsx:141:7", children: value.toLocaleString() })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
function Section({
  title,
  data
}) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((a, [, n]) => a + n, 0) || 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/demo-load.tsx:150:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-tsd-source": "/src/routes/demo-load.tsx:151:7", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", "data-tsd-source": "/src/routes/demo-load.tsx:152:7", children: entries.map(([k, v]) => {
      const pct = Math.round(v / total * 100);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", "data-tsd-source": "/src/routes/demo-load.tsx:156:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px]", "data-tsd-source": "/src/routes/demo-load.tsx:157:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/routes/demo-load.tsx:158:17", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", "data-tsd-source": "/src/routes/demo-load.tsx:159:17", children: [
            v.toLocaleString(),
            " · ",
            pct,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/routes/demo-load.tsx:161:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-primary to-accent", style: {
          width: `${pct}%`
        }, "data-tsd-source": "/src/routes/demo-load.tsx:162:17" }) })
      ] }, k);
    }) })
  ] });
}
__name(Section, "Section");
__name2(Section, "Section");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/demo-load.tsx:17:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DemoLoad, { "data-tsd-source": "/src/routes/demo-load.tsx:17:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
