var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, ah as scarcity$1, ak as perDayLabel, R as PGS, aq as DISTANCE$1, ar as LANDMARKS$1, as as AREA_CENTROID$1 } from "./AppShell-BN067m2r.mjs";
import { u as useApp, q as cn } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { bB as ArrowLeft, S as Sparkles, z as Target } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




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
function hav(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const p1 = lat1 * Math.PI / 180;
  const p2 = lat2 * Math.PI / 180;
  const dp = (lat2 - lat1) * Math.PI / 180;
  const dl = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 10) / 10;
}
__name(hav, "hav");
__name2(hav, "hav");
function leadCoords(area) {
  const n = area.toLowerCase().trim();
  if (!n) return null;
  const lm = LANDMARKS$1.find(
    (l) => l.lat && l.lng && (l.n.toLowerCase().includes(n) || n.includes(l.n.toLowerCase().split(" ")[0]))
  );
  if (lm && lm.lat && lm.lng) return { lat: lm.lat, lng: lm.lng };
  for (const [k, v] of Object.entries(AREA_CENTROID$1)) {
    if (k.toLowerCase().includes(n) || n.includes(k.toLowerCase())) return v;
  }
  return null;
}
__name(leadCoords, "leadCoords");
__name2(leadCoords, "leadCoords");
const norm = /* @__PURE__ */ __name2((s) => (s || "").toLowerCase().trim(), "norm");
function leadToPGDistance(leadArea, pg) {
  const coords = leadCoords(leadArea);
  if (coords && pg.lat && pg.lng) return hav(coords.lat, coords.lng, pg.lat, pg.lng);
  const f = Object.keys(DISTANCE$1).find((k) => norm(k) === norm(leadArea) || norm(leadArea).includes(norm(k)));
  if (!f) return null;
  const row = DISTANCE$1[f];
  const t = Object.keys(row).find((k) => norm(k) === norm(pg.area) || norm(pg.area).includes(norm(k)));
  return t ? row[t] : null;
}
__name(leadToPGDistance, "leadToPGDistance");
__name2(leadToPGDistance, "leadToPGDistance");
function pickBedPrice(pg, occ) {
  const p = pg.prices;
  if (occ === "Single") return { price: p.single || null, label: p.single ? `Single ₹${(p.single / 1e3).toFixed(0)}k` : "No single" };
  if (occ === "Double") return { price: p.double || null, label: p.double ? `Double ₹${(p.double / 1e3).toFixed(0)}k` : "No double" };
  if (occ === "Triple") return { price: p.triple || null, label: p.triple ? `Triple ₹${(p.triple / 1e3).toFixed(0)}k` : "No triple" };
  const candidates = [p.triple, p.double, p.single].filter((v) => v > 0);
  if (!candidates.length) return { price: null, label: "Pricing not disclosed" };
  const cheapest = Math.min(...candidates);
  const which = cheapest === p.triple ? "Triple" : cheapest === p.double ? "Double" : "Single";
  return { price: cheapest, label: `${which} ₹${(cheapest / 1e3).toFixed(0)}k` };
}
__name(pickBedPrice, "pickBedPrice");
__name2(pickBedPrice, "pickBedPrice");
function matchLead(lead) {
  const results = [];
  const wantArea = norm(lead.area);
  for (const pg of PGS) {
    const parts = [];
    let total = 0;
    let dq;
    const pgArea = norm(pg.area);
    let areaPts = 0;
    let areaReason = "Far from requested area";
    if (pgArea && (wantArea === pgArea || wantArea.includes(pgArea) || pgArea.includes(wantArea))) {
      areaPts = 35;
      areaReason = `Exact area: ${pg.area}`;
    } else if (norm(pg.locality).includes(wantArea) || pg.landmarksInline.some((l) => norm(l).includes(wantArea))) {
      areaPts = 28;
      areaReason = `Mentions "${lead.area}" in locality/landmarks`;
    } else {
      const d = leadToPGDistance(lead.area, pg);
      if (d !== null) {
        if (d <= 5) {
          areaPts = 24;
          areaReason = `${d} km away`;
        } else if (d <= 10) {
          areaPts = 16;
          areaReason = `${d} km — nearby`;
        } else if (d <= 15) {
          areaPts = 8;
          areaReason = `${d} km — commutable`;
        } else {
          areaPts = 2;
          areaReason = `${d} km — far`;
        }
      }
    }
    parts.push({ label: "Area", pts: areaPts, max: 35, reason: areaReason });
    total += areaPts;
    let genderPts = 0;
    let genderReason = "";
    if (lead.gender === "Any") {
      genderPts = 12;
      genderReason = "Lead open to any gender PG";
    } else if (pg.gender === lead.gender) {
      genderPts = 20;
      genderReason = `Exact: ${pg.gender}`;
    } else if (pg.gender === "Co-live") {
      genderPts = 14;
      genderReason = "Co-live accepts both";
    } else {
      dq = `Gender mismatch — lead ${lead.gender}, PG ${pg.gender}`;
    }
    parts.push({ label: "Gender", pts: genderPts, max: 20, reason: genderReason || dq });
    total += genderPts;
    const { price: bedPrice, label: bedLabel } = pickBedPrice(pg, lead.occupancy);
    let budgetPts = 0;
    let budgetReason = bedLabel;
    if (bedPrice === null) {
      if (lead.occupancy && lead.occupancy !== "Any") {
        dq = (dq ?? "") + (dq ? " | " : "") + `${lead.occupancy} sharing not offered`;
        budgetReason = `${lead.occupancy} sharing not offered`;
      } else {
        budgetReason = "Pricing not disclosed";
      }
    } else if (bedPrice >= lead.budgetMin && bedPrice <= lead.budgetMax) {
      budgetPts = 25;
      budgetReason = `${bedLabel} fits ₹${(lead.budgetMin / 1e3).toFixed(0)}k–${(lead.budgetMax / 1e3).toFixed(0)}k`;
    } else if (bedPrice <= lead.budgetMax * 1.15 && bedPrice >= lead.budgetMin * 0.85) {
      budgetPts = 12;
      budgetReason = `${bedLabel} — slightly out of range`;
    } else if (bedPrice > lead.budgetMax * 1.15) {
      dq = (dq ?? "") + (dq ? " | " : "") + "Over budget by >15%";
      budgetReason = `${bedLabel} — too expensive`;
    } else {
      budgetPts = 8;
      budgetReason = `${bedLabel} — under budget`;
    }
    parts.push({ label: "Budget", pts: budgetPts, max: 25, reason: budgetReason });
    total += budgetPts;
    const aud = norm(pg.audience);
    let audPts = 0;
    let audReason = "Audience open";
    if (lead.audience === "Both" || !lead.audience) {
      audPts = 6;
      audReason = "Open to all";
    } else if (aud.includes("both")) {
      audPts = 9;
      audReason = "Both students & professionals";
    } else if (lead.audience === "Working" && aud.includes("professional")) {
      audPts = 10;
      audReason = "Working professional PG";
    } else if (lead.audience === "Student" && aud.includes("student")) {
      audPts = 10;
      audReason = "Student PG";
    } else {
      audPts = 3;
      audReason = `Skews ${pg.audience || "mixed"}`;
    }
    parts.push({ label: "Audience", pts: audPts, max: 10, reason: audReason });
    total += audPts;
    const iqPts = Math.round(pg.iq / 100 * 10);
    parts.push({ label: "Quality", pts: iqPts, max: 10, reason: `IQ ${pg.iq}/100` });
    total += iqPts;
    const commuteKm = leadToPGDistance(lead.area, pg);
    const reasoning = dq ? `DISQUALIFIED — ${dq}` : parts.filter((p) => p.pts >= p.max * 0.7).map((p) => p.reason).join(" · ");
    results.push({
      pg,
      total: dq ? 0 : total,
      parts,
      commuteKm,
      bedPrice,
      bedLabel,
      reasoning,
      disqualified: dq
    });
  }
  results.sort((a, b) => b.total - a.total || b.pg.iq - a.pg.iq);
  return results;
}
__name(matchLead, "matchLead");
__name2(matchLead, "matchLead");
function rating(score) {
  if (score >= 90) return { label: "PERFECT", color: "text-emerald-400", action: "Send WA card immediately" };
  if (score >= 75) return { label: "STRONG", color: "text-cyan-400", action: "Call within 30 minutes" };
  if (score >= 55) return { label: "DECENT", color: "text-amber-400", action: "Pitch with explanation" };
  if (score >= 35) return { label: "WEAK", color: "text-orange-400", action: "Only if nothing better" };
  return { label: "SKIP", color: "text-rose-400", action: "Don't pitch" };
}
__name(rating, "rating");
__name2(rating, "rating");
function SupplyHubMatch() {
  const {
    role
  } = useApp();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (role === "owner") navigate({
      to: "/owner/inventory"
    });
  }, [role, navigate]);
  const [lead, setLead] = reactExports.useState({
    name: "",
    area: "Koramangala",
    gender: "Any",
    budgetMin: 12e3,
    budgetMax: 22e3,
    audience: "Both",
    occupancy: "Any"
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const results = reactExports.useMemo(() => submitted ? matchLead(lead).slice(0, 12) : [], [lead, submitted]);
  if (role === "owner") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { "data-tsd-source": "/src/routes/supply-hub/match.tsx:36:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-tsd-source": "/src/routes/supply-hub/match.tsx:37:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent", "data-tsd-source": "/src/routes/supply-hub/match.tsx:38:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "data-tsd-source": "/src/routes/supply-hub/match.tsx:39:11" }),
        " Supply Hub"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:42:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-accent font-semibold mb-1", "data-tsd-source": "/src/routes/supply-hub/match.tsx:43:11", children: "Lead Matcher" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/supply-hub/match.tsx:44:11", children: "Find the best PG for a lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/supply-hub/match.tsx:45:11", children: "Real distance + actual bed prices · never fabricated. Hard-disqualifies on gender / over-budget / occupancy not offered." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: /* @__PURE__ */ __name2((e) => {
        e.preventDefault();
        setSubmitted(true);
      }, "onSubmit"), className: "rounded-lg border bg-card p-4 grid grid-cols-1 md:grid-cols-3 gap-3", "data-tsd-source": "/src/routes/supply-hub/match.tsx:48:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead name (optional)", "data-tsd-source": "/src/routes/supply-hub/match.tsx:52:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: lead.name ?? "", onChange: /* @__PURE__ */ __name2((e) => setLead({
          ...lead,
          name: e.target.value
        }), "onChange"), className: "input", "data-tsd-source": "/src/routes/supply-hub/match.tsx:53:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Wants area / landmark / company", "data-tsd-source": "/src/routes/supply-hub/match.tsx:55:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: lead.area, onChange: /* @__PURE__ */ __name2((e) => setLead({
          ...lead,
          area: e.target.value
        }), "onChange"), placeholder: "e.g. Manyata, Christ, Koramangala", className: "input", "data-tsd-source": "/src/routes/supply-hub/match.tsx:56:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", "data-tsd-source": "/src/routes/supply-hub/match.tsx:58:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: lead.gender, onChange: /* @__PURE__ */ __name2((e) => setLead({
          ...lead,
          gender: e.target.value
        }), "onChange"), className: "input", "data-tsd-source": "/src/routes/supply-hub/match.tsx:59:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:60:15", children: "Any" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:60:35", children: "Boys" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:60:56", children: "Girls" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:60:78", children: "Co-live" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Budget min (₹/mo)", "data-tsd-source": "/src/routes/supply-hub/match.tsx:63:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", required: true, value: lead.budgetMin, onChange: /* @__PURE__ */ __name2((e) => setLead({
          ...lead,
          budgetMin: +e.target.value
        }), "onChange"), className: "input", "data-tsd-source": "/src/routes/supply-hub/match.tsx:64:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Budget max (₹/mo)", "data-tsd-source": "/src/routes/supply-hub/match.tsx:66:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", required: true, value: lead.budgetMax, onChange: /* @__PURE__ */ __name2((e) => setLead({
          ...lead,
          budgetMax: +e.target.value
        }), "onChange"), className: "input", "data-tsd-source": "/src/routes/supply-hub/match.tsx:67:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Occupancy", "data-tsd-source": "/src/routes/supply-hub/match.tsx:69:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: lead.occupancy, onChange: /* @__PURE__ */ __name2((e) => setLead({
          ...lead,
          occupancy: e.target.value
        }), "onChange"), className: "input", "data-tsd-source": "/src/routes/supply-hub/match.tsx:70:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:71:15", children: "Any" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:71:35", children: "Single" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:71:58", children: "Double" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:71:81", children: "Triple" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Audience", "data-tsd-source": "/src/routes/supply-hub/match.tsx:74:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: lead.audience, onChange: /* @__PURE__ */ __name2((e) => setLead({
          ...lead,
          audience: e.target.value
        }), "onChange"), className: "input", "data-tsd-source": "/src/routes/supply-hub/match.tsx:75:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:76:15", children: "Both" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:76:36", children: "Working" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:76:60", children: "Student" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notes", "data-tsd-source": "/src/routes/supply-hub/match.tsx:79:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: lead.notes ?? "", onChange: /* @__PURE__ */ __name2((e) => setLead({
          ...lead,
          notes: e.target.value
        }), "onChange"), className: "input", placeholder: "Optional", "data-tsd-source": "/src/routes/supply-hub/match.tsx:80:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", "data-tsd-source": "/src/routes/supply-hub/match.tsx:82:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-1 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90", "data-tsd-source": "/src/routes/supply-hub/match.tsx:83:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "data-tsd-source": "/src/routes/supply-hub/match.tsx:84:15" }),
          " Match"
        ] }) })
      ] }),
      submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/routes/supply-hub/match.tsx:90:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/supply-hub/match.tsx:91:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/routes/supply-hub/match.tsx:92:15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold", "data-tsd-source": "/src/routes/supply-hub/match.tsx:93:15", children: [
            "Top ",
            results.length,
            " matches"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-tsd-source": "/src/routes/supply-hub/match.tsx:95:13", children: results.map((r) => {
          const rt = rating(r.total);
          const sc = scarcity$1(r.pg);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub/$id", params: {
            id: r.pg.id
          }, className: "block rounded-lg border bg-card p-4 hover:border-accent/50", "data-tsd-source": "/src/routes/supply-hub/match.tsx:100:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", "data-tsd-source": "/src/routes/supply-hub/match.tsx:101:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:102:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/match.tsx:103:25", children: [
                  r.pg.area,
                  " · ",
                  r.pg.tier,
                  " · ",
                  r.pg.gender
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mt-0.5", "data-tsd-source": "/src/routes/supply-hub/match.tsx:104:25", children: r.pg.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/supply-hub/match.tsx:105:25", children: r.pg.locality })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/routes/supply-hub/match.tsx:107:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-display text-2xl font-semibold", rt.color), "data-tsd-source": "/src/routes/supply-hub/match.tsx:108:25", children: r.total }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-[10px] uppercase tracking-wider font-semibold", rt.color), "data-tsd-source": "/src/routes/supply-hub/match.tsx:109:25", children: rt.label })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-2 text-xs", "data-tsd-source": "/src/routes/supply-hub/match.tsx:112:21", children: r.parts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("rounded border px-1.5 py-0.5", p.pts >= p.max * 0.7 ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300" : "border-border text-muted-foreground"), "data-tsd-source": "/src/routes/supply-hub/match.tsx:114:25", children: [
              p.label,
              ": ",
              p.pts,
              "/",
              p.max
            ] }, p.label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs", "data-tsd-source": "/src/routes/supply-hub/match.tsx:119:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Best fit", v: r.bedLabel, "data-tsd-source": "/src/routes/supply-hub/match.tsx:120:23" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Commute", v: r.commuteKm !== null ? `${r.commuteKm} km` : "—", "data-tsd-source": "/src/routes/supply-hub/match.tsx:121:23" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { k: "Per day", v: r.bedPrice ? perDayLabel(r.bedPrice) : "—", "data-tsd-source": "/src/routes/supply-hub/match.tsx:122:23" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs italic text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/match.tsx:124:21", children: r.reasoning }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] uppercase tracking-wider text-accent font-semibold", "data-tsd-source": "/src/routes/supply-hub/match.tsx:125:21", children: [
              rt.action,
              sc.hot && ` · ${sc.level}`
            ] })
          ] }, r.pg.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { "data-tsd-source": "/src/routes/supply-hub/match.tsx:133:7", children: `.input{width:100%;border:1px solid hsl(var(--border));background:hsl(var(--background));border-radius:6px;padding:8px 10px;font-size:13px}.input:focus{outline:none;box-shadow:0 0 0 2px hsl(var(--accent)/0.3)}` })
  ] });
}
__name(SupplyHubMatch, "SupplyHubMatch");
__name2(SupplyHubMatch, "SupplyHubMatch");
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", "data-tsd-source": "/src/routes/supply-hub/match.tsx:140:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-tsd-source": "/src/routes/supply-hub/match.tsx:141:7", children: label }),
    children
  ] });
}
__name(Field, "Field");
__name2(Field, "Field");
function Cell({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border bg-muted/20 px-2 py-1.5", "data-tsd-source": "/src/routes/supply-hub/match.tsx:149:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/match.tsx:150:7", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", "data-tsd-source": "/src/routes/supply-hub/match.tsx:151:7", children: v })
  ] });
}
__name(Cell, "Cell");
__name2(Cell, "Cell");
export {
  SupplyHubMatch as component
};
