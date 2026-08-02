var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as PGS, ah as scarcity$1, ai as freshness$1, A as AppShell, aj as personaBadge$1, ak as perDayLabel, al as personaStyle$1 } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, q as cn } from "./router-Cbs6ivkN.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { S as Sparkles, K as MapPin, a3 as Search, by as BadgeCheck, F as Flame } from "../_libs/lucide-react.mjs";
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
const norm = /* @__PURE__ */ __name2((s) => (s || "").toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim(), "norm");
const ALIASES = {
  kora: ["koramangala"],
  hsr: ["hsr layout", "hsr"],
  btm: ["btm layout", "btm"],
  ecity: ["electronic city", "e city"],
  manyata: ["manyata embassy business park", "manyata tech park"],
  manytha: ["manyata"],
  mtp: ["manyata tech park", "manyata"],
  itpl: ["international tech park", "itpb", "whitefield"],
  embassy: ["embassy tech village", "etv"],
  marathalli: ["marathahalli"],
  bellandur: ["bellandur", "kadubeesanahalli"],
  ypr: ["yeshwanthpur"],
  jp: ["jp nagar"],
  goldmna: ["goldman sachs"],
  goldman: ["goldman sachs"],
  flipkart: ["flipkart embassy tech village"],
  swiggy: ["swiggy koramangala"],
  razorpay: ["razorpay sjr"],
  myntra: ["myntra prestige tech park"],
  christ: ["christ university"],
  nexus: ["nexus mall"],
  forum: ["forum mall"],
  tonic: ["tonic koramangala"],
  hustle: ["hustle hub"],
  prestige: ["prestige tech park"],
  sony: ["sony signal"]
};
function expandQuery(q) {
  const n = norm(q);
  const out = /* @__PURE__ */ new Set([n]);
  for (const tok of n.split(" ")) {
    const al = ALIASES[tok];
    if (al) al.forEach((a) => out.add(a));
  }
  return Array.from(out);
}
__name(expandQuery, "expandQuery");
__name2(expandQuery, "expandQuery");
function lev(a, b) {
  if (Math.abs(a.length - b.length) > 3) return 99;
  const m = a.length;
  const n = b.length;
  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[n];
}
__name(lev, "lev");
__name2(lev, "lev");
function tokenScore(hay, q) {
  if (!q) return 0;
  if (hay === q) return 1;
  if (hay.startsWith(q)) return 0.92;
  if (hay.includes(` ${q}`) || hay.endsWith(` ${q}`)) return 0.82;
  if (hay.includes(q)) return 0.7;
  const hwords = hay.split(" ");
  for (const w of hwords) {
    if (w.startsWith(q)) return 0.6;
    if (q.length >= 4 && w.length >= 4) {
      const d = lev(w, q);
      if (d <= 1) return 0.55;
      if (d === 2 && q.length >= 6) return 0.4;
    }
  }
  return 0;
}
__name(tokenScore, "tokenScore");
__name2(tokenScore, "tokenScore");
function fieldScore(hay, queries) {
  const h = norm(hay);
  if (!h) return 0;
  let best = 0;
  for (const q of queries) {
    const phrase = tokenScore(h, q);
    if (phrase > best) best = phrase;
    const toks = q.split(" ").filter((t) => t.length > 1);
    if (toks.length > 1) {
      let sum = 0;
      let any = 0;
      for (const t of toks) {
        const s = tokenScore(h, t);
        if (s > 0) any++;
        sum += s;
      }
      const avg = sum / toks.length * (any / toks.length);
      if (avg > best) best = avg;
    }
  }
  return best;
}
__name(fieldScore, "fieldScore");
__name2(fieldScore, "fieldScore");
function searchPGs(query, limit = 30) {
  if (!query.trim()) return PGS.map((pg) => ({ pg, score: 1, matched: [] }));
  const queries = expandQuery(query);
  const hits = [];
  for (const pg of PGS) {
    const matched = [];
    let score = 0;
    const add = /* @__PURE__ */ __name2((label, val, weight) => {
      const s = fieldScore(val, queries) * weight;
      if (s > 0.3) {
        matched.push(`${label}: ${val.slice(0, 60)}`);
        score = Math.max(score, s);
      }
    }, "add");
    add("Name", pg.name, 1);
    add("Actual", pg.actualName, 0.9);
    add("Area", pg.area, 1);
    add("Locality", pg.locality, 0.85);
    add("Persona", pg.persona.archetype, 0.6);
    add("USP", pg.usp, 0.5);
    pg.landmarksInline.forEach((lm) => add("Landmark", lm, 0.95));
    pg.amenities.forEach((a) => add("Amenity", a, 0.5));
    if (queries.some((q) => pg.gender.toLowerCase().includes(q))) {
      score = Math.max(score, 0.8);
      matched.push(`Gender: ${pg.gender}`);
    }
    if (queries.some((q) => pg.tier.toLowerCase().includes(q))) {
      score = Math.max(score, 0.7);
      matched.push(`Tier: ${pg.tier}`);
    }
    if (score > 0.3) hits.push({ pg, score, matched: matched.slice(0, 4) });
  }
  hits.sort((a, b) => b.score - a.score || b.pg.iq - a.pg.iq);
  return hits.slice(0, limit);
}
__name(searchPGs, "searchPGs");
__name2(searchPGs, "searchPGs");
const TIERS = ["All", "Premium", "Mid", "Budget"];
const GENDERS = ["All", "Boys", "Girls", "Co-live"];
function SupplyHubHome() {
  const {
    role
  } = useApp();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (role === "owner") navigate({
      to: "/owner/inventory"
    });
  }, [role, navigate]);
  const [q, setQ] = reactExports.useState("");
  const [tier, setTier] = reactExports.useState("All");
  const [gender, setGender] = reactExports.useState("All");
  const [area, setArea] = reactExports.useState("All");
  const areas = reactExports.useMemo(() => ["All", ...Array.from(new Set(PGS.map((p) => p.area))).filter(Boolean).sort()], []);
  const results = reactExports.useMemo(() => {
    let hits = q.trim() ? searchPGs(q, 60) : PGS.slice(0, 60).map((pg) => ({
      pg,
      score: 1,
      matched: []
    }));
    return hits.filter((h) => {
      if (tier !== "All" && h.pg.tier !== tier) return false;
      if (gender !== "All" && h.pg.gender !== gender) return false;
      if (area !== "All" && h.pg.area !== area) return false;
      return true;
    });
  }, [q, tier, gender, area]);
  const stats = reactExports.useMemo(() => {
    const total = PGS.length;
    const premium = PGS.filter((p) => p.tier === "Premium").length;
    const hot = PGS.filter((p) => scarcity$1(p).hot).length;
    const fresh = PGS.filter((p) => freshness$1(p).isFresh).length;
    return {
      total,
      premium,
      hot,
      fresh
    };
  }, []);
  if (role === "owner") return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/supply-hub/index.tsx:59:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-tsd-source": "/src/routes/supply-hub/index.tsx:60:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-end justify-between gap-4", "data-tsd-source": "/src/routes/supply-hub/index.tsx:61:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/supply-hub/index.tsx:62:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-accent font-semibold mb-1", "data-tsd-source": "/src/routes/supply-hub/index.tsx:63:13", children: "Internal · HR / Flow Ops / TCM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/routes/supply-hub/index.tsx:64:13", children: "Inventory Supply Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/supply-hub/index.tsx:65:13", children: "Verified PG network — search by name, area, landmark, or company. Every tile is computed live: persona, scarcity, freshness, value." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/routes/supply-hub/index.tsx:67:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub/match", className: "inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-foreground hover:opacity-90", "data-tsd-source": "/src/routes/supply-hub/index.tsx:68:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "data-tsd-source": "/src/routes/supply-hub/index.tsx:68:178" }),
          " Lead Matcher"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub/areas", className: "inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-muted", "data-tsd-source": "/src/routes/supply-hub/index.tsx:69:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4", "data-tsd-source": "/src/routes/supply-hub/index.tsx:69:164" }),
          " Area Mood"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", "data-tsd-source": "/src/routes/supply-hub/index.tsx:73:9", children: [{
      label: "Properties",
      value: stats.total,
      sub: "Verified inventory"
    }, {
      label: "Premium tier",
      value: stats.premium,
      sub: "₹22k+/mo cohort"
    }, {
      label: "Hot scarcity",
      value: stats.hot,
      sub: "1–2 beds left",
      accent: true
    }, {
      label: "Updated <30d",
      value: stats.fresh,
      sub: "Fresh re-engagement angle"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-lg border bg-card p-4", s.accent && "border-accent/40"), "data-tsd-source": "/src/routes/supply-hub/index.tsx:80:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/index.tsx:81:15", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-2xl font-semibold", "data-tsd-source": "/src/routes/supply-hub/index.tsx:82:15", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/routes/supply-hub/index.tsx:83:15", children: s.sub })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-3 flex flex-wrap items-center gap-3", "data-tsd-source": "/src/routes/supply-hub/index.tsx:89:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[280px]", "data-tsd-source": "/src/routes/supply-hub/index.tsx:90:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/index.tsx:91:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"), placeholder: "Search by PG name, area, landmark, company (e.g. 'Manyata', 'Christ', 'koramangala girls')", className: "w-full rounded-md border border-border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30", "data-tsd-source": "/src/routes/supply-hub/index.tsx:92:13" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { label: "Tier", value: tier, options: TIERS, onChange: /* @__PURE__ */ __name2((v) => setTier(v), "onChange"), "data-tsd-source": "/src/routes/supply-hub/index.tsx:99:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { label: "Gender", value: gender, options: GENDERS, onChange: /* @__PURE__ */ __name2((v) => setGender(v), "onChange"), "data-tsd-source": "/src/routes/supply-hub/index.tsx:100:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { label: "Area", value: area, options: areas, onChange: setArea, "data-tsd-source": "/src/routes/supply-hub/index.tsx:101:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground ml-auto", "data-tsd-source": "/src/routes/supply-hub/index.tsx:102:11", children: [
        results.length,
        " matches"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", "data-tsd-source": "/src/routes/supply-hub/index.tsx:106:9", children: results.slice(0, 60).map(({
      pg,
      matched
    }) => {
      const sc = scarcity$1(pg);
      const persona = personaBadge$1(pg);
      const ps = personaStyle$1(persona);
      const fr = freshness$1(pg);
      const cheap = Math.min(...[pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0).concat(99999));
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/supply-hub/$id", params: {
        id: pg.id
      }, className: "group rounded-lg border border-border bg-card p-4 hover:border-accent/50 transition-colors", "data-tsd-source": "/src/routes/supply-hub/index.tsx:114:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", "data-tsd-source": "/src/routes/supply-hub/index.tsx:120:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/supply-hub/index.tsx:121:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/index.tsx:122:21", children: [
              pg.area,
              " · ",
              pg.tier,
              " · ",
              pg.gender
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-0.5 font-semibold truncate group-hover:text-accent", "data-tsd-source": "/src/routes/supply-hub/index.tsx:123:21", children: pg.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate", "data-tsd-source": "/src/routes/supply-hub/index.tsx:124:21", children: pg.locality })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/routes/supply-hub/index.tsx:126:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold", "data-tsd-source": "/src/routes/supply-hub/index.tsx:127:21", children: cheap < 99999 ? `₹${(cheap / 1e3).toFixed(0)}k` : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/index.tsx:128:21", children: cheap < 99999 ? perDayLabel(cheap) : "" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-1.5", "data-tsd-source": "/src/routes/supply-hub/index.tsx:131:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-medium", ps.color), "data-tsd-source": "/src/routes/supply-hub/index.tsx:132:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3 w-3", "data-tsd-source": "/src/routes/supply-hub/index.tsx:133:21" }),
            " ",
            persona
          ] }),
          sc.hot && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md border border-rose-400/40 bg-rose-400/10 text-rose-300 px-1.5 py-0.5 text-[10px] font-semibold", "data-tsd-source": "/src/routes/supply-hub/index.tsx:136:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3", "data-tsd-source": "/src/routes/supply-hub/index.tsx:137:23" }),
            " ",
            sc.level
          ] }),
          !sc.hot && sc.level !== "AVAILABLE" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-amber-400/40 bg-amber-400/10 text-amber-300 px-1.5 py-0.5 text-[10px] font-medium", "data-tsd-source": "/src/routes/supply-hub/index.tsx:141:21", children: sc.level }),
          fr.isFresh && fr.changeKind && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-emerald-400/40 bg-emerald-400/10 text-emerald-300 px-1.5 py-0.5 text-[10px] font-medium", "data-tsd-source": "/src/routes/supply-hub/index.tsx:144:21", children: fr.changeKind }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/index.tsx:146:19", children: [
            "IQ ",
            pg.iq
          ] })
        ] }),
        matched.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/routes/supply-hub/index.tsx:149:19", children: [
          "Matched: ",
          matched.slice(0, 2).join(" · ")
        ] })
      ] }, pg.id);
    }) })
  ] }) });
}
__name(SupplyHubHome, "SupplyHubHome");
__name2(SupplyHubHome, "SupplyHubHome");
function Pill({
  label,
  value,
  options,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-2 text-xs", "data-tsd-source": "/src/routes/supply-hub/index.tsx:162:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/routes/supply-hub/index.tsx:163:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value, onChange: /* @__PURE__ */ __name2((e) => onChange(e.target.value), "onChange"), className: "rounded-md border border-border bg-background px-2 py-1.5 text-sm", "data-tsd-source": "/src/routes/supply-hub/index.tsx:164:7", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, "data-tsd-source": "/src/routes/supply-hub/index.tsx:165:29", children: o }, o)) })
  ] });
}
__name(Pill, "Pill");
__name2(Pill, "Pill");
export {
  SupplyHubHome as component
};
