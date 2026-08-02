var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, L as LANDMARKS, p as perDay, d as useShortlist, f as personaBadge, s as scarcity, g as freshness, h as AREA_CENTROID, j as seasonalNudge, k as buildInstantMatch, w as waLink, t as telLink, m as CopyButton, v as valueScore, n as buildThreeOptions, o as findAlternatives, q as budgetStretch, r as buildReengagement, P as PGDetail, x as matchLead, y as rating, z as AREAS, B as AreaMoodCard, D as DualMatcher, E as DISTANCE, F as personaStyle } from "./AppShell-BN067m2r.mjs";
import { P as PGS, q as cn, B as Badge, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent } from "./router-xBhBcQRf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { a3 as Search, X, S as Sparkles, B as Building2, b2 as Hospital, b3 as Banknote, aC as TramFront, b4 as GraduationCap, aD as Briefcase, K as MapPin, aI as Footprints, F as Flame, P as Phone, aE as Star, b5 as StarOff, Z as Zap, ac as Send, aJ as Shield, r as MessageCircle, A as ArrowRight, T as TrendingUp, s as Clock, u as Brain, b6 as Ruler, aG as Funnel } from "../_libs/lucide-react.mjs";

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
function searchLandmarks(query, limit = 30) {
  if (!query.trim()) return [];
  const queries = expandQuery(query);
  const hits = [];
  for (const lm of LANDMARKS) {
    const sName = fieldScore(lm.n, queries);
    const sArea = fieldScore(lm.a, queries) * 0.6;
    const sPin = fieldScore(lm.p, queries) * 0.9;
    const sNote = fieldScore(lm.x, queries) * 0.4;
    const sMetro = fieldScore(lm.m, queries) * 0.5;
    const score = Math.max(sName, sArea, sPin, sNote, sMetro);
    if (score > 0.35) hits.push({ ...lm, score });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}
__name(searchLandmarks, "searchLandmarks");
__name2(searchLandmarks, "searchLandmarks");
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
const TYPE_ICON = {
  "Tech Park": Building2,
  "MNC": Briefcase,
  "Unicorn": Sparkles,
  "Startup": Sparkles,
  "GCC": Briefcase,
  "Coworking": Briefcase,
  "Hospital": Hospital,
  "College": GraduationCap,
  "Metro": TramFront,
  "Bank": Banknote,
  "Retail HQ": Building2,
  "Pharma": Hospital,
  "Gaming/AI": Sparkles,
  "Govt": Building2
};
const TYPE_COLOR = {
  "Tech Park": "text-cyan-400 bg-cyan-400/10",
  "MNC": "text-violet-400 bg-violet-400/10",
  "Unicorn": "text-pink-400 bg-pink-400/10",
  "Startup": "text-fuchsia-400 bg-fuchsia-400/10",
  "GCC": "text-indigo-400 bg-indigo-400/10",
  "Coworking": "text-teal-400 bg-teal-400/10",
  "Hospital": "text-rose-400 bg-rose-400/10",
  "College": "text-amber-400 bg-amber-400/10",
  "Metro": "text-emerald-400 bg-emerald-400/10",
  "Bank": "text-blue-400 bg-blue-400/10",
  "Retail HQ": "text-orange-400 bg-orange-400/10",
  "Pharma": "text-red-400 bg-red-400/10",
  "Gaming/AI": "text-purple-400 bg-purple-400/10",
  "Govt": "text-slate-400 bg-slate-400/10"
};
const RECENT_KEY = "gh_recent_searches";
function UniversalSearch({ onPickLandmark, onPickPG, placeholder, autoFocus }) {
  const [q, setQ] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const [recent, setRecent] = reactExports.useState([]);
  const inputRef = reactExports.useRef(null);
  const wrapRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    try {
      const r = sessionStorage.getItem(RECENT_KEY);
      if (r) setRecent(JSON.parse(r));
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);
  reactExports.useEffect(() => {
    const onClick = /* @__PURE__ */ __name2((e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    }, "onClick");
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const lmHits = reactExports.useMemo(() => searchLandmarks(q, 12), [q]);
  const pgHits = reactExports.useMemo(() => q ? searchPGs(q, 6) : [], [q]);
  const saveRecent = /* @__PURE__ */ __name2((term) => {
    const next = [term, ...recent.filter((r) => r !== term)].slice(0, 8);
    setRecent(next);
    try {
      sessionStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
    }
  }, "saveRecent");
  const pickLM = /* @__PURE__ */ __name2((lm) => {
    saveRecent(lm.n);
    setQ(lm.n);
    setOpen(false);
    onPickLandmark(lm);
  }, "pickLM");
  const pickPG = /* @__PURE__ */ __name2((pg) => {
    saveRecent(pg.name);
    setQ(pg.name);
    setOpen(false);
    onPickPG(pg);
  }, "pickPG");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: wrapRef, className: "relative w-full", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:104:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
      "flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-smooth",
      open && "ring-glow"
    ), "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:105:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground shrink-0", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:109:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: inputRef,
          value: q,
          onChange: /* @__PURE__ */ __name2((e) => {
            setQ(e.target.value);
            setOpen(true);
          }, "onChange"),
          onFocus: /* @__PURE__ */ __name2(() => setOpen(true), "onFocus"),
          placeholder: placeholder ?? "Search anything — Manyata, Tonic Kora, Christ back gate, 560066, Goldman Sachs, NEX COED…",
          className: "flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground/70",
          "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:110:9"
        }
      ),
      q && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => {
        setQ("");
        inputRef.current?.focus();
      }, "onClick"), className: "text-muted-foreground hover:text-foreground", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:119:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:120:13" }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 z-50 mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-border bg-popover shadow-card animate-fade-up", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:126:9", children: [
      !q && recent.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:128:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:129:15", children: "Recent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:130:15", children: recent.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => {
              setQ(r);
              inputRef.current?.focus();
            }, "onClick"),
            className: "rounded-full border border-border bg-surface-2 px-3 py-1 text-xs hover:border-primary/50",
            "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:132:19",
            children: r
          },
          r
        )) })
      ] }),
      q && lmHits.length === 0 && pgHits.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:142:13", children: [
        'No results for "',
        q,
        '". Try a different spelling, area name, or pincode.'
      ] }),
      pgHits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:148:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-3 text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:149:15", children: "Properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:150:15", children: pgHits.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:152:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => pickPG(h.pg), "onClick"), className: "flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-surface-2", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:153:21", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:154:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:155:25" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:157:23", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium truncate", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:158:25", children: [
              h.pg.name,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:160:27", children: [
                "IQ ",
                h.pg.iq
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:162:25", children: [
              h.pg.area,
              " · ",
              h.pg.gender,
              " · ",
              h.pg.tier,
              h.matched[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary/80", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:164:44", children: [
                " · ",
                h.matched[0]
              ] })
            ] })
          ] })
        ] }) }, h.pg.id)) })
      ] }),
      lmHits.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:175:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:176:15", children: [
          "Landmarks · ",
          lmHits.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:177:15", children: lmHits.map((lm, i) => {
          const Icon = TYPE_ICON[lm.t] ?? MapPin;
          const color = TYPE_COLOR[lm.t] ?? "text-muted-foreground bg-muted";
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:182:21", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => pickLM(lm), "onClick"), className: "flex w-full items-center gap-3 px-3 py-2.5 text-left hover:bg-surface-2", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:183:23", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("flex h-8 w-8 items-center justify-center rounded-md", color), "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:184:25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:185:27" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:187:25", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium truncate", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:188:27", children: [
                lm.n,
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-muted-foreground", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:190:29", children: [
                  Math.round(lm.score * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:192:27", children: [
                lm.t,
                lm.a && ` · ${lm.a}`,
                lm.p && ` · ${lm.p}`,
                lm.x && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground/70", "data-tsd-source": "/src/property-genius/components/UniversalSearch.tsx:194:38", children: [
                  " · ",
                  lm.x
                ] })
              ] })
            ] })
          ] }) }, `${lm.n}-${i}`);
        }) })
      ] })
    ] })
  ] });
}
__name(UniversalSearch, "UniversalSearch");
__name2(UniversalSearch, "UniversalSearch");
const tierColor = /* @__PURE__ */ __name2((t) => t === "Premium" ? "text-accent border-accent/40 bg-accent/10" : t === "Mid" ? "text-info border-info/40 bg-info/10" : "text-muted-foreground border-border bg-muted", "tierColor");
const genderColor = /* @__PURE__ */ __name2((g) => g === "Girls" ? "text-pink-400 bg-pink-400/10" : g === "Boys" ? "text-blue-400 bg-blue-400/10" : "text-emerald-400 bg-emerald-400/10", "genderColor");
function iqColor(iq) {
  if (iq >= 75) return "text-emerald-400";
  if (iq >= 60) return "text-amber-400";
  if (iq >= 40) return "text-orange-400";
  return "text-rose-400";
}
__name(iqColor, "iqColor");
__name2(iqColor, "iqColor");
function priceLabel(pg) {
  const parts = [];
  if (pg.prices.triple) parts.push(`T ${Math.round(pg.prices.triple / 1e3)}k`);
  if (pg.prices.double) parts.push(`D ${Math.round(pg.prices.double / 1e3)}k`);
  if (pg.prices.single) parts.push(`S ${Math.round(pg.prices.single / 1e3)}k`);
  const beds = [pg.prices.triple, pg.prices.double, pg.prices.single].filter((p) => p > 0);
  const cheapest = beds.length ? Math.min(...beds) : 0;
  return {
    primary: parts.length ? parts.join(" · ") : "On call",
    perDay: cheapest ? `₹${perDay(cheapest)}/day` : null
  };
}
__name(priceLabel, "priceLabel");
__name2(priceLabel, "priceLabel");
function PGTile({ pg, onClick, badge }) {
  const { has, toggle } = useShortlist();
  const saved = has(pg.id);
  const closest = pg.nearbyLandmarks?.[0];
  const price = priceLabel(pg);
  const persona = personaBadge(pg);
  const pStyle = personaStyle(persona);
  const sc = scarcity(pg);
  const fr = freshness(pg);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:53:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick,
        className: "flex w-full flex-col gap-2.5 rounded-xl border border-border bg-card p-3.5 text-left shadow-card transition-smooth hover:border-primary/40 hover:shadow-glow",
        "data-tsd-source": "/src/property-genius/components/PGTile.tsx:54:7",
        children: [
          badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 left-3 z-10 rounded-full border border-primary/40 bg-primary/15 px-2 py-0.5 text-[10px] font-mono text-primary", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:59:11", children: badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:65:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 pr-7", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:66:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-semibold leading-tight truncate", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:67:13", children: pg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground truncate", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:68:13", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 shrink-0", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:69:15" }),
                " ",
                pg.area
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-0.5 shrink-0", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:72:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-mono text-2xl font-bold leading-none tabular-nums", iqColor(pg.iq)), "data-tsd-source": "/src/property-genius/components/PGTile.tsx:73:13", children: pg.iq }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:76:13", children: "IQ" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium", pStyle.color), "data-tsd-source": "/src/property-genius/components/PGTile.tsx:81:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:82:11" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:83:11", children: persona })
          ] }),
          closest && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-md bg-surface-2 px-2 py-1.5 text-xs", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:88:11", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Footprints, { className: "h-3.5 w-3.5 text-primary shrink-0", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:89:13" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate flex-1", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:90:13", children: closest.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground shrink-0", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:91:13", children: closest.w <= 0 ? "<1m" : `${closest.w}m walk` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:98:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded-md border px-2 py-0.5 text-[10px] font-medium", tierColor(pg.tier)), "data-tsd-source": "/src/property-genius/components/PGTile.tsx:99:11", children: pg.tier }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded-md px-2 py-0.5 text-[10px] font-medium", genderColor(pg.gender)), "data-tsd-source": "/src/property-genius/components/PGTile.tsx:100:11", children: pg.gender }),
            pg.foodType && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-surface-2 px-2 py-0.5 text-[10px] text-muted-foreground", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:101:27", children: pg.foodType }),
            fr.isFresh && fr.changeKind && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium text-cyan-300", title: fr.message, "data-tsd-source": "/src/property-genius/components/PGTile.tsx:103:13", children: [
              "✦ ",
              fr.changeKind
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-t border-border pt-2.5", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:110:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/property-genius/components/PGTile.tsx:111:11", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm tabular-nums", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:112:13", children: price.primary }),
              price.perDay && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-emerald-400 tabular-nums leading-none mt-0.5", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:114:15", children: price.perDay })
            ] }),
            sc.hot ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md border border-rose-400/40 bg-rose-400/10 px-1.5 py-0.5 text-[10px] font-bold text-rose-300 animate-pulse-dot", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:120:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:121:15" }),
              " ",
              sc.level
            ] }) : sc.level === "FEW LEFT" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 rounded-md border border-amber-400/40 bg-amber-400/10 px-1.5 py-0.5 text-[10px] font-medium text-amber-300", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:124:13", children: sc.level }) : sc.level === "FULL" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 rounded-md border border-border bg-surface-2 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:128:13", children: "Waitlist" }) : pg.manager.phone ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-mono text-[10px] text-muted-foreground", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:132:13", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:133:15" }),
              " ",
              pg.manager.phone
            ] }) : null
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: /* @__PURE__ */ __name2((e) => {
          e.stopPropagation();
          toggle(pg.id);
        }, "onClick"),
        title: saved ? "Remove from shortlist" : "Add to shortlist",
        className: cn(
          "absolute right-3 top-3 z-10 rounded-md p-1.5 transition-smooth",
          saved ? "text-amber-400 bg-amber-400/10" : "text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-surface-2"
        ),
        "data-tsd-source": "/src/property-genius/components/PGTile.tsx:139:7",
        children: saved ? /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:148:18" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(StarOff, { className: "h-4 w-4", "data-tsd-source": "/src/property-genius/components/PGTile.tsx:148:62" })
      }
    )
  ] });
}
__name(PGTile, "PGTile");
__name2(PGTile, "PGTile");
function ShortlistTray({ onOpenPG }) {
  const { ids, remove, clear, count } = useShortlist();
  const [open, setOpen] = reactExports.useState(false);
  const items = reactExports.useMemo(() => ids.map((id) => PGS.find((p) => p.id === id)).filter(Boolean), [ids]);
  if (count === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: /* @__PURE__ */ __name2(() => setOpen(true), "onClick"),
        className: "fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/15 px-4 py-2.5 font-display text-sm font-medium text-amber-300 shadow-glow backdrop-blur transition-smooth hover:bg-amber-400/25 sm:left-auto sm:right-6 sm:translate-x-0",
        "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:24:7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:28:9" }),
          "Shortlist",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-amber-400 px-1.5 py-0.5 font-mono text-[10px] text-amber-950", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:30:9", children: count })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm animate-fade-up sm:items-center", onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:34:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: /* @__PURE__ */ __name2((e) => e.stopPropagation(), "onClick"), className: "w-full max-w-4xl max-h-[85vh] overflow-y-auto overscroll-contain rounded-t-2xl border border-border bg-background p-4 shadow-card sm:rounded-2xl sm:p-6", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:35:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:36:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:37:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-lg font-bold", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:38:17", children: [
            "Compare ",
            items.length,
            " ",
            items.length === 1 ? "property" : "properties"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:39:17", children: "Side-by-side view. Tap a card to open full playbook." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:41:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clear, className: "rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground hover:border-rose-400/40 hover:text-rose-400", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:42:17", children: "Clear all" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), className: "rounded-md p-2 text-muted-foreground hover:bg-surface-2", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:43:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:43:124" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
        "grid gap-3",
        items.length === 1 ? "grid-cols-1" : items.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      ), "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:47:13", children: items.map((pg) => /* @__PURE__ */ jsxRuntimeExports.jsx(CompareCard, { pg, onOpen: /* @__PURE__ */ __name2(() => {
        onOpenPG(pg);
        setOpen(false);
      }, "onOpen"), onRemove: /* @__PURE__ */ __name2(() => remove(pg.id), "onRemove"), "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:51:34" }, pg.id)) })
    ] }) })
  ] });
}
__name(ShortlistTray, "ShortlistTray");
__name2(ShortlistTray, "ShortlistTray");
function CompareCard({ pg, onOpen, onRemove }) {
  const closest = pg.nearbyLandmarks?.[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg border border-border bg-card p-4", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:63:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onRemove, className: "absolute right-2 top-2 rounded p-1 text-muted-foreground hover:bg-surface-2 hover:text-rose-400", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:64:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:65:9" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onOpen, className: "block w-full text-left", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:67:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold pr-6 truncate", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:68:9", children: pg.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-xs text-muted-foreground truncate", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:69:9", children: [
        pg.area,
        " · ",
        pg.gender,
        " · ",
        pg.tier
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-xs", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:70:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "IQ", value: String(pg.iq), "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:71:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Triple", value: pg.prices.triple ? `₹${(pg.prices.triple / 1e3).toFixed(0)}k` : "—", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:72:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Double", value: pg.prices.double ? `₹${(pg.prices.double / 1e3).toFixed(0)}k` : "—", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:73:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Single", value: pg.prices.single ? `₹${(pg.prices.single / 1e3).toFixed(0)}k` : "—", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:74:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Food", value: pg.foodType || "—", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:75:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Deposit", value: pg.deposit?.split(" ")[0] || "—", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:76:11" })
      ] }),
      closest && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-md bg-surface-2 px-2 py-1.5 text-[11px]", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:79:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 inline h-3 w-3 text-primary", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:80:13" }),
        closest.w <= 0 ? "<1" : closest.w,
        " min walk to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:81:61", children: closest.n })
      ] })
    ] })
  ] });
}
__name(CompareCard, "CompareCard");
__name2(CompareCard, "CompareCard");
function Row({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/50 pb-1", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:91:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:92:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums", "data-tsd-source": "/src/property-genius/components/ShortlistTray.tsx:93:7", children: value })
  ] });
}
__name(Row, "Row");
__name2(Row, "Row");
function hav(lat1, lng1, lat2, lng2) {
  const R = 6371, p1 = lat1 * Math.PI / 180, p2 = lat2 * Math.PI / 180;
  const dp = (lat2 - lat1) * Math.PI / 180, dl = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 10) / 10;
}
__name(hav, "hav");
__name2(hav, "hav");
function resolveOffice(name) {
  const n = name.toLowerCase().trim();
  if (!n) return null;
  const lm = LANDMARKS.find((l) => l.lat && l.lng && l.n.toLowerCase().includes(n));
  if (lm?.lat && lm?.lng) return { lat: lm.lat, lng: lm.lng, label: lm.n };
  for (const [k, v] of Object.entries(AREA_CENTROID)) {
    if (k.toLowerCase().includes(n) || n.includes(k.toLowerCase())) return { ...v, label: k };
  }
  return null;
}
__name(resolveOffice, "resolveOffice");
__name2(resolveOffice, "resolveOffice");
function CloserModule({ onOpen }) {
  const [tab, setTab] = reactExports.useState("instant");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:57:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:58:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:59:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:60:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:60:108" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl sm:text-3xl font-bold", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:61:11", children: "The Closer" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs sm:text-sm text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:63:9", children: [
        "One screen. Four moves. Built for the 60-second call. ",
        seasonalNudge()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto rounded-lg border border-border bg-surface-1 p-1 scrollbar-none", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:68:7", children: [
      { k: "instant", l: "Instant Match", I: Zap },
      { k: "send3", l: "Send 3", I: Send },
      { k: "objection", l: "Objection Pivot", I: Shield },
      { k: "reengage", l: "Re-Engage", I: MessageCircle }
    ].map(({ k, l, I }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: /* @__PURE__ */ __name2(() => setTab(k), "onClick"),
        className: cn(
          "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-smooth",
          tab === k ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
        ),
        "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:75:11",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:80:13" }),
          " ",
          l
        ]
      },
      k
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:85:7", children: [
      tab === "instant" && /* @__PURE__ */ jsxRuntimeExports.jsx(InstantMatch, { onOpen, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:86:33" }),
      tab === "send3" && /* @__PURE__ */ jsxRuntimeExports.jsx(SendThree, { onOpen, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:87:33" }),
      tab === "objection" && /* @__PURE__ */ jsxRuntimeExports.jsx(ObjectionPivot, { onOpen, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:88:33" }),
      tab === "reengage" && /* @__PURE__ */ jsxRuntimeExports.jsx(ReEngage, { onOpen, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:89:33" })
    ] }, tab)
  ] });
}
__name(CloserModule, "CloserModule");
__name2(CloserModule, "CloserModule");
function InstantMatch({ onOpen }) {
  const [office, setOffice] = reactExports.useState("Goldman Sachs");
  const [budget, setBudget] = reactExports.useState(18e3);
  const [gender, setGender] = reactExports.useState("Any");
  const [leadName, setLeadName] = reactExports.useState("");
  const office_ = reactExports.useMemo(() => resolveOffice(office), [office]);
  const pick = reactExports.useMemo(() => {
    const candidates = PGS.filter((p) => gender === "Any" || p.gender === gender || p.gender === "Co-live").map((pg) => {
      const beds = [pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0);
      const cheap = beds.length ? Math.min(...beds) : 99999;
      if (cheap > budget * 1.15) return null;
      const km = office_ && pg.lat && pg.lng ? hav(office_.lat, office_.lng, pg.lat, pg.lng) : null;
      if (km !== null && km > 15) return null;
      const budgetFit = cheap <= budget ? 40 : 25;
      const distScore = km === null ? 15 : km <= 3 ? 35 : km <= 6 ? 25 : km <= 10 ? 15 : 5;
      const iqScore = pg.iq / 100 * 25;
      return { pg, score: budgetFit + distScore + iqScore, km, cheap };
    }).filter((x) => !!x).sort((a, b) => b.score - a.score);
    return candidates[0] ?? null;
  }, [office, budget, gender, office_]);
  const card = reactExports.useMemo(() => pick ? buildInstantMatch(pick.pg, {
    leadName: leadName || void 0,
    office: office_?.label || office,
    budget,
    commute: pick.km !== null ? { km: pick.km, mins: Math.round(pick.km * 2.8) } : null
  }) : "", [pick, leadName, office, office_, budget]);
  const wa = pick ? waLink(pick.pg.manager.phone, card) : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[340px_1fr]", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:135:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-lg border border-border bg-card p-4 lg:sticky lg:top-24 lg:h-fit", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:137:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-sm font-semibold flex items-center gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:138:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:139:11" }),
        " 30-second sell"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:141:9", children: "Two questions. One answer. One copy button." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead's name (optional)", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:143:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: leadName,
          onChange: /* @__PURE__ */ __name2((e) => setLeadName(e.target.value), "onChange"),
          placeholder: "e.g. Kruthika",
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none focus:border-primary/60",
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:144:11"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Where do they work / study?", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:148:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:149:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:150:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: office,
              onChange: /* @__PURE__ */ __name2((e) => setOffice(e.target.value), "onChange"),
              placeholder: "Goldman Sachs, Manyata, Christ…",
              className: "w-full rounded-md border border-input bg-surface-1 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60",
              "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:151:13"
            }
          )
        ] }),
        office_ && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-emerald-400", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:154:23", children: [
          "✓ Found: ",
          office_.label
        ] }),
        office.length > 2 && !office_ && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-amber-400", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:155:45", children: "Will use as area name" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: `Budget: ₹${budget.toLocaleString("en-IN")} / mo (₹${perDay(budget)}/day)`, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:158:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 9e3,
            max: 35e3,
            step: 500,
            value: budget,
            onChange: /* @__PURE__ */ __name2((e) => setBudget(+e.target.value), "onChange"),
            className: "w-full accent-primary",
            "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:159:11"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:162:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:163:13", children: "9k" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:163:28", children: "22k" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:163:44", children: "35k" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:167:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:168:11", children: ["Any", "Boys", "Girls", "Co-live"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => setGender(g), "onClick"),
          className: cn(
            "rounded-md border px-2 py-1.5 text-[11px] font-medium transition-smooth",
            gender === g ? "border-primary bg-primary text-primary-foreground" : "border-border bg-surface-1 hover:border-primary/40"
          ),
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:170:15",
          children: g
        },
        g
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:181:7", children: pick ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:183:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-primary/40 bg-primary/5 p-5 shadow-glow animate-fade-up", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:184:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:185:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:186:17" }),
          " The one to send · score ",
          Math.round(pick.score)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl sm:text-3xl font-bold leading-tight", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:188:15", children: pick.pg.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:189:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:190:17" }),
          " ",
          pick.pg.area,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:191:17", children: "·" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:191:32", children: pick.pg.gender }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:192:17", children: "·" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:192:32", children: [
            "IQ ",
            pick.pg.iq,
            "/100"
          ] }),
          pick.km !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:195:21", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("font-mono", pick.km <= 3 ? "text-emerald-400" : pick.km <= 8 ? "text-amber-400" : "text-orange-400"), "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:196:21", children: [
              pick.km,
              "km from ",
              office_?.label || office
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:203:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Best fit", value: `₹${(pick.cheap / 1e3).toFixed(0)}k/mo`, accent: true, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:204:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Per day", value: `₹${perDay(pick.cheap)}`, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:205:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Commute", value: pick.km !== null ? `${Math.round(pick.km * 2.8)} min` : "—", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:206:17" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Inventory", value: scarcity(pick.pg).level, hot: scarcity(pick.pg).hot, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:207:17" })
        ] }),
        pick.pg.usp && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-md bg-surface-2 p-3 text-sm leading-relaxed", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:211:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:212:19", children: "Pitch line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:213:19", children: pick.pg.usp })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:217:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => onOpen(pick.pg), "onClick"), className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:opacity-90", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:218:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:219:19" }),
            " Open Playbook"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: wa, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 rounded-md border border-emerald-400/40 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-400/20", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:221:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:222:19" }),
            " Send WhatsApp"
          ] }),
          telLink(pick.pg.manager.phone) && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink(pick.pg.manager.phone), className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-xs font-medium hover:border-primary/40", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:225:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:226:21" }),
            " Call manager"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: card, label: "Copy message", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:229:17" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "rounded-lg border border-border bg-card p-3 group", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:233:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer text-xs font-medium text-muted-foreground select-none flex items-center justify-between", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:234:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:235:17", children: "Preview the WhatsApp message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 transition-transform group-open:rotate-90", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:236:17" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 max-h-72 overflow-y-auto whitespace-pre-wrap rounded bg-surface-2 p-3 text-xs leading-relaxed", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:238:15", children: card })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: "No PG fits those filters. Widen budget by 15% or pick a different area.", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:242:11" }) })
  ] });
}
__name(InstantMatch, "InstantMatch");
__name2(InstantMatch, "InstantMatch");
function SendThree({ onOpen }) {
  const allAreas = reactExports.useMemo(() => Array.from(new Set(PGS.map((p) => p.area))).sort(), []);
  const [area, setArea] = reactExports.useState(allAreas[0] || "Koramangala");
  const [gender, setGender] = reactExports.useState("Any");
  const [budgetMin, setBudgetMin] = reactExports.useState(12e3);
  const [budgetMax, setBudgetMax] = reactExports.useState(2e4);
  const [leadName, setLeadName] = reactExports.useState("");
  const picks = reactExports.useMemo(() => {
    return PGS.filter((p) => p.area === area).filter((p) => gender === "Any" || p.gender === gender || p.gender === "Co-live").map((p) => {
      const beds = [p.prices.triple, p.prices.double, p.prices.single].filter((x) => x > 0);
      const cheap = beds.length ? Math.min(...beds) : 99999;
      const fits = cheap >= budgetMin * 0.85 && cheap <= budgetMax * 1.15;
      if (!fits) return null;
      const value = valueScore(p);
      return { pg: p, cheap, value };
    }).filter((x) => !!x).sort((a, b) => b.value - a.value).slice(0, 3);
  }, [area, gender, budgetMin, budgetMax]);
  const message = reactExports.useMemo(() => buildThreeOptions(picks.map((p) => p.pg), {
    leadName: leadName || void 0,
    landmark: area,
    gender: gender !== "Any" ? gender : void 0
  }), [picks, leadName, area, gender]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:282:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-lg border border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:283:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead name", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:284:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: leadName,
          onChange: /* @__PURE__ */ __name2((e) => setLeadName(e.target.value), "onChange"),
          placeholder: "Optional",
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none",
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:285:11"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Area", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:288:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: area,
          onChange: /* @__PURE__ */ __name2((e) => setArea(e.target.value), "onChange"),
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none cursor-pointer",
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:289:11",
          children: allAreas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a, className: "bg-card", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:291:34", children: a }, a))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:294:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: gender,
          onChange: /* @__PURE__ */ __name2((e) => setGender(e.target.value), "onChange"),
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none cursor-pointer",
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:295:11",
          children: ["Any", "Boys", "Girls", "Co-live"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g, className: "bg-card", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:297:61", children: g }, g))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `Budget ₹${(budgetMin / 1e3).toFixed(0)}k–${(budgetMax / 1e3).toFixed(0)}k`, "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:300:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:301:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: budgetMin,
            onChange: /* @__PURE__ */ __name2((e) => setBudgetMin(+e.target.value || 0), "onChange"),
            className: "w-full rounded-md border border-input bg-surface-1 px-2 py-2 text-sm outline-none font-mono",
            "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:302:13"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: budgetMax,
            onChange: /* @__PURE__ */ __name2((e) => setBudgetMax(+e.target.value || 0), "onChange"),
            className: "w-full rounded-md border border-input bg-surface-1 px-2 py-2 text-sm outline-none font-mono",
            "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:304:13"
          }
        )
      ] }) })
    ] }),
    picks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: "No 3 options match. Widen budget or pick a different area.", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:311:9" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[1fr_360px]", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:313:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:314:11", children: picks.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => onOpen(p.pg), "onClick"),
          className: "block w-full rounded-lg border border-border bg-card p-3 text-left transition-smooth hover:border-primary/40",
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:316:15",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:318:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-sm font-bold text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:319:19", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:322:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold truncate", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:323:21", children: p.pg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:324:21", children: [
                p.pg.area,
                " · ₹",
                (p.cheap / 1e3).toFixed(0),
                "k (₹",
                perDay(p.cheap),
                "/day)",
                p.pg.nearbyLandmarks?.[0] && ` · ${p.pg.nearbyLandmarks[0].w <= 0 ? "<1m" : p.pg.nearbyLandmarks[0].w + "m"} to ${p.pg.nearbyLandmarks[0].n}`
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-right", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:329:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm font-bold tabular-nums text-emerald-400", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:330:21", children: p.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:331:21", children: "Value" })
            ] })
          ] })
        },
        p.pg.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-3", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:338:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:339:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold flex items-center gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:340:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5 text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:341:17" }),
            " Forwardable message"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: message, label: "Copy", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:343:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "max-h-96 overflow-y-auto whitespace-pre-wrap rounded bg-surface-2 p-3 text-[11px] leading-relaxed", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:345:13", children: message }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: waLink(void 0, message),
            target: "_blank",
            rel: "noreferrer",
            className: "mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-emerald-500/15 border border-emerald-400/40 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/25",
            "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:346:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:348:15" }),
              " Send via WhatsApp"
            ]
          }
        )
      ] })
    ] })
  ] });
}
__name(SendThree, "SendThree");
__name2(SendThree, "SendThree");
function ObjectionPivot({ onOpen }) {
  const [pgId, setPgId] = reactExports.useState(PGS[0]?.id || "");
  const [objection, setObjection] = reactExports.useState("expensive");
  const pg = PGS.find((p) => p.id === pgId);
  const alternatives = reactExports.useMemo(() => pg ? findAlternatives(pg, objection, PGS) : [], [pg, objection]);
  const baseBudget = reactExports.useMemo(() => {
    if (!pg) return 15e3;
    const beds = [pg.prices.triple, pg.prices.double, pg.prices.single].filter((x) => x > 0);
    return beds.length ? Math.min(...beds) : 15e3;
  }, [pg]);
  const stretch = reactExports.useMemo(() => budgetStretch(baseBudget, PGS, pg?.gender), [baseBudget, pg]);
  const objections = [
    { k: "expensive", l: "Too expensive", emoji: "💰" },
    { k: "far", l: "Too far", emoji: "📍" },
    { k: "no_gym", l: "Need gym", emoji: "💪" },
    { k: "no_meals", l: "Need meals", emoji: "🍽" },
    { k: "no_ac", l: "Need AC", emoji: "❄️" },
    { k: "wrong_food", l: "Need non-veg", emoji: "🍗" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:381:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:382:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Property the lead is hesitating on", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:383:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: pgId,
          onChange: /* @__PURE__ */ __name2((e) => setPgId(e.target.value), "onChange"),
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none cursor-pointer",
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:384:11",
          children: PGS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, className: "bg-card", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:386:29", children: [
            p.name,
            " — ",
            p.area
          ] }, p.id))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:390:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:391:11", children: "Lead's objection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:392:11", children: objections.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => setObjection(o.k), "onClick"),
            className: cn(
              "rounded-md border px-2 py-2 text-xs font-medium transition-smooth",
              objection === o.k ? "border-primary bg-primary/15 text-primary" : "border-border bg-surface-1 hover:border-primary/40"
            ),
            "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:394:15",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:397:17", children: o.emoji }),
              o.l
            ]
          },
          o.k
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:405:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 text-sm font-semibold flex items-center gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:406:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:407:11" }),
        " 3 alternatives that kill this objection"
      ] }),
      alternatives.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, { message: "No alternatives in the same area for that objection. Try a different area or relax filters.", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:410:11" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-3", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:412:11", children: alternatives.map((alt) => {
        const cheap = Math.min(...[alt.prices.triple, alt.prices.double, alt.prices.single].filter((x) => x > 0).concat(99999));
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => onOpen(alt), "onClick"),
            className: "rounded-md border border-border bg-surface-1 p-3 text-left transition-smooth hover:border-primary/40",
            "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:416:17",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm truncate", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:418:19", children: alt.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground truncate", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:419:19", children: [
                alt.area,
                " · IQ ",
                alt.iq
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-sm tabular-nums text-emerald-400", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:420:19", children: cheap < 99999 ? `₹${(cheap / 1e3).toFixed(0)}k · ₹${perDay(cheap)}/day` : "On call" })
            ]
          },
          alt.id
        );
      }) })
    ] }),
    objection === "expensive" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:432:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 text-sm font-semibold flex items-center gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:433:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:434:13" }),
        " Budget stretch — what they unlock"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-3", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:436:11", children: stretch.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
        "rounded-md border p-3",
        i === 0 ? "border-border bg-surface-1" : i === 1 ? "border-amber-400/40 bg-amber-400/5" : "border-emerald-400/40 bg-emerald-400/5"
      ), "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:438:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:441:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-base font-bold tabular-nums", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:442:19", children: [
            "₹",
            (s.budget / 1e3).toFixed(0),
            "k"
          ] }),
          i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:443:29", children: [
            "+₹",
            s.perDayDelta,
            "/day"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:445:17", children: "Unlocks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-1 space-y-0.5 text-xs", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:446:17", children: s.unlocks.slice(0, 4).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-1.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:447:53", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:447:90", children: "✓" }),
          u
        ] }, u)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[10px] text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:449:17", children: [
          s.pgs.length,
          " PGs available"
        ] })
      ] }, s.budget)) })
    ] })
  ] });
}
__name(ObjectionPivot, "ObjectionPivot");
__name2(ObjectionPivot, "ObjectionPivot");
function ReEngage({ onOpen }) {
  const [pgId, setPgId] = reactExports.useState(PGS[0]?.id || "");
  const [stage, setStage] = reactExports.useState("visited");
  const [leadName, setLeadName] = reactExports.useState("");
  const pg = PGS.find((p) => p.id === pgId);
  const message = reactExports.useMemo(() => pg ? buildReengagement(pg, stage) : "", [pg, stage]);
  const personalised = leadName ? message.replace(/^Hi!/, `Hi ${leadName}!`) : message;
  const fr = pg ? freshness(pg) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:470:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:471:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead name", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:472:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: leadName,
          onChange: /* @__PURE__ */ __name2((e) => setLeadName(e.target.value), "onChange"),
          placeholder: "Optional",
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none",
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:473:11"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Which property did they engage with?", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:476:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: pgId,
          onChange: /* @__PURE__ */ __name2((e) => setPgId(e.target.value), "onChange"),
          className: "w-full rounded-md border border-input bg-surface-1 px-3 py-2 text-sm outline-none cursor-pointer",
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:477:11",
          children: PGS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: p.id, className: "bg-card", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:479:29", children: [
            p.name,
            " — ",
            p.area
          ] }, p.id))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What stage did they reach?", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:482:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:483:11", children: ["visited", "got_price", "browsed"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => setStage(s), "onClick"),
          className: cn(
            "rounded-md border px-2 py-2 text-xs font-medium transition-smooth",
            stage === s ? "border-primary bg-primary/15 text-primary" : "border-border bg-surface-1 hover:border-primary/40"
          ),
          "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:485:15",
          children: s === "visited" ? "Visited" : s === "got_price" ? "Got price" : "Just browsed"
        },
        s
      )) }) })
    ] }),
    pg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:496:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:497:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:498:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:499:15" }),
          " Re-engagement message"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: personalised, label: "Copy", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:501:13" })
      ] }),
      fr?.isFresh && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-300", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:504:13", children: [
        "✦ ",
        fr.changeKind,
        " ",
        fr.daysAgo,
        " days ago — perfect re-engagement hook."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "max-h-72 overflow-y-auto whitespace-pre-wrap rounded bg-surface-2 p-3 text-xs leading-relaxed", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:508:11", children: personalised }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:509:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: waLink(pg.manager.phone, personalised),
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 border border-emerald-400/40 px-3 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/25",
            "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:510:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:512:15" }),
              " Send WhatsApp"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => onOpen(pg), "onClick"), className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-1 px-3 py-2 text-xs font-medium hover:border-primary/40", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:514:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:515:15" }),
          " Open property"
        ] })
      ] })
    ] })
  ] });
}
__name(ReEngage, "ReEngage");
__name2(ReEngage, "ReEngage");
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:527:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[10px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:528:7", children: label }),
    children
  ] });
}
__name(Field, "Field");
__name2(Field, "Field");
function Stat({ label, value, accent, hot }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-surface-2 p-2", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:536:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:537:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(
      "mt-0.5 font-mono text-sm font-bold tabular-nums",
      hot ? "text-rose-300" : accent ? "text-primary" : "text-foreground"
    ), "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:538:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
function EmptyState({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-dashed border-border bg-card p-12 text-center", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:546:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:547:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:548:9" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/property-genius/components/CloserModule.tsx:550:7", children: message })
  ] });
}
__name(EmptyState, "EmptyState");
__name2(EmptyState, "EmptyState");
function PropertyHubPage() {
  const [tab, setTab] = reactExports.useState("hub");
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-svh flex-col bg-background text-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:28:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-12 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:29:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:30:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 text-accent", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:31:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:32:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:34:11", children: "Property Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] font-mono", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:35:11", children: [
          PGS.length,
          " PGs"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto text-[10px] text-muted-foreground hidden sm:block", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:39:9", children: "Connected to Impact Queue" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container py-4 sm:py-6 pb-24", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:44:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: /* @__PURE__ */ __name2((v) => setTab(v), "onValueChange"), "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:45:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "h-9", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:46:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "closer", className: "text-xs gap-1.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:47:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:47:69" }),
          "Closer"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "hub", className: "text-xs gap-1.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:48:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:48:66" }),
          "Hub"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "matcher", className: "text-xs gap-1.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:49:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:49:70" }),
          "Matcher"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "area", className: "text-xs gap-1.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:50:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:50:67" }),
          "Area Intel"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "distance", className: "text-xs gap-1.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:51:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:51:71" }),
          "Distance"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "closer", className: "mt-4", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:54:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloserModule, { onOpen: setActive, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:55:13" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "hub", className: "mt-4", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:57:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyHub, { onOpen: setActive, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:58:13" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "matcher", className: "mt-4", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:60:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadMatcherTab, { onOpen: setActive, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:61:13" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "area", className: "mt-4", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:63:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AreaIntelTab, { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:64:13" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "distance", className: "mt-4", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:66:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DistanceFinderTab, { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:67:13" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ShortlistTray, { onOpenPG: setActive, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:72:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PGDetail, { pg: active, onClose: /* @__PURE__ */ __name2(() => setActive(null), "onClose"), "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:73:7" })
  ] });
}
__name(PropertyHubPage, "PropertyHubPage");
__name2(PropertyHubPage, "PropertyHubPage");
function PropertyHub({ onOpen }) {
  const [submitted, setSubmitted] = reactExports.useState("");
  const [area, setArea] = reactExports.useState("All");
  const [gender, setGender] = reactExports.useState("All");
  const [pickedLandmark, setPickedLandmark] = reactExports.useState(null);
  const allAreas = reactExports.useMemo(() => Array.from(new Set(PGS.map((p) => p.area))).sort(), []);
  const list = reactExports.useMemo(() => {
    let arr = submitted ? searchPGs(submitted, 400).map((h) => h.pg) : [...PGS];
    if (area !== "All") arr = arr.filter((p) => p.area === area);
    if (gender !== "All") arr = arr.filter((p) => p.gender === gender);
    arr.sort((a, b) => b.iq - a.iq);
    return arr.slice(0, 60);
  }, [submitted, area, gender]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:98:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UniversalSearch,
      {
        onPickLandmark: /* @__PURE__ */ __name2((lm) => {
          setPickedLandmark(lm);
          setSubmitted(lm.n);
        }, "onPickLandmark"),
        onPickPG: onOpen,
        placeholder: "Search Tonic Kora, Manyata, Christ back gate, Goldman Sachs, 560066…",
        "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:99:7"
      }
    ),
    pickedLandmark && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-lg border border-primary/40 bg-primary/5 p-3", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:106:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm min-w-0", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:107:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footprints, { className: "h-4 w-4 shrink-0 text-primary", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:108:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:109:13", children: [
          "Filtered near ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:109:54", children: pickedLandmark.n })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => {
        setPickedLandmark(null);
        setSubmitted("");
      }, "onClick"), className: "rounded-md border border-border bg-card px-2.5 py-1 text-xs hover:border-primary/40 shrink-0", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:111:11", children: "Clear" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 rounded-lg border border-border bg-surface-1 p-3", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:115:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 shrink-0 text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:116:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectChip, { label: "Area", value: area, options: ["All", ...allAreas], onChange: setArea, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:117:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectChip, { label: "Gender", value: gender, options: ["All", "Boys", "Girls", "Co-live"], onChange: setGender, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:118:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-[10px] text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:119:9", children: [
        list.length,
        " results"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:122:7", children: list.map((pg) => /* @__PURE__ */ jsxRuntimeExports.jsx(PGTile, { pg, onClick: /* @__PURE__ */ __name2(() => onOpen(pg), "onClick"), "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:124:11" }, pg.id)) }),
    list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border bg-muted/30 p-8 text-center text-xs text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:128:9", children: "No PGs match those filters." })
  ] });
}
__name(PropertyHub, "PropertyHub");
__name2(PropertyHub, "PropertyHub");
function SelectChip({ label, value, options, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:138:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:139:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        value,
        onChange: /* @__PURE__ */ __name2((e) => onChange(e.target.value), "onChange"),
        className: "rounded-md border border-border bg-card px-2 py-1 text-xs",
        "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:140:7",
        children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: o, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:145:29", children: o }, o))
      }
    )
  ] });
}
__name(SelectChip, "SelectChip");
__name2(SelectChip, "SelectChip");
function LeadMatcherTab({ onOpen }) {
  const [lead, setLead] = reactExports.useState({
    area: "Whitefield",
    gender: "Any",
    budgetMin: 1e4,
    budgetMax: 18e3,
    audience: "Working",
    occupancy: "Any"
  });
  const results = reactExports.useMemo(() => matchLead(lead).slice(0, 12), [lead]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:168:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-4 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:169:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:170:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:171:11", children: "Area / landmark" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: lead.area,
            onChange: /* @__PURE__ */ __name2((e) => setLead({ ...lead, area: e.target.value }), "onChange"),
            className: "w-full rounded-md border bg-background px-2 py-1.5",
            "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:172:11"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:175:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:176:11", children: "Gender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: lead.gender,
            onChange: /* @__PURE__ */ __name2((e) => setLead({ ...lead, gender: e.target.value }), "onChange"),
            className: "w-full rounded-md border bg-background px-2 py-1.5",
            "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:177:11",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:179:13", children: "Any" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:179:33", children: "Boys" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:179:54", children: "Girls" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:179:76", children: "Co-live" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:182:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:183:11", children: "Budget min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: lead.budgetMin,
            onChange: /* @__PURE__ */ __name2((e) => setLead({ ...lead, budgetMin: Number(e.target.value) }), "onChange"),
            className: "w-full rounded-md border bg-background px-2 py-1.5",
            "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:184:11"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:187:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:188:11", children: "Budget max" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: lead.budgetMax,
            onChange: /* @__PURE__ */ __name2((e) => setLead({ ...lead, budgetMax: Number(e.target.value) }), "onChange"),
            className: "w-full rounded-md border bg-background px-2 py-1.5",
            "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:189:11"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "space-y-1", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:192:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:193:11", children: "Sharing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: lead.occupancy,
            onChange: /* @__PURE__ */ __name2((e) => setLead({ ...lead, occupancy: e.target.value }), "onChange"),
            className: "w-full rounded-md border bg-background px-2 py-1.5",
            "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:194:11",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:196:13", children: "Any" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:196:33", children: "Single" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:196:56", children: "Double" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:196:79", children: "Triple" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:201:7", children: results.map((r) => {
      const rt = rating(r.total);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => onOpen(r.pg), "onClick"),
          className: "text-left rounded-lg border bg-card hover:border-accent/60 transition p-3 space-y-1.5",
          "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:205:13",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:207:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm truncate flex-1", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:208:17", children: r.pg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[9px] font-mono ${rt.color}`, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:209:17", children: r.total })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:211:15", children: [
              r.pg.area,
              " · ",
              r.pg.gender,
              " · ",
              r.bedLabel
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px]", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:212:15", children: [
              rt.label,
              " — ",
              rt.action
            ] }),
            r.commuteKm !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:213:40", children: [
              r.commuteKm,
              " km away"
            ] })
          ]
        },
        r.pg.id
      );
    }) })
  ] });
}
__name(LeadMatcherTab, "LeadMatcherTab");
__name2(LeadMatcherTab, "LeadMatcherTab");
function AreaIntelTab() {
  const [areaName, setAreaName] = reactExports.useState(AREAS[0]?.area ?? "Whitefield");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:229:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:230:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:231:9", children: "Area" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: areaName,
          onChange: /* @__PURE__ */ __name2((e) => setAreaName(e.target.value), "onChange"),
          className: "rounded-md border bg-background px-2 py-1.5 text-xs",
          "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:232:9",
          children: AREAS.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.area, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:234:29", children: a.area }, a.area))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AreaMoodCard, { area: areaName, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:237:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DualMatcher, { onOpen: /* @__PURE__ */ __name2(() => {
    }, "onOpen"), "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:238:7" })
  ] });
}
__name(AreaIntelTab, "AreaIntelTab");
__name2(AreaIntelTab, "AreaIntelTab");
function DistanceFinderTab() {
  const areas = reactExports.useMemo(() => Object.keys(DISTANCE).sort(), []);
  const [from, setFrom] = reactExports.useState(areas[0] ?? "");
  const row = DISTANCE[from] ?? {};
  const list = Object.entries(row).sort((a, b) => a[1] - b[1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:253:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:254:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:255:9", children: "From" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          value: from,
          onChange: /* @__PURE__ */ __name2((e) => setFrom(e.target.value), "onChange"),
          className: "rounded-md border bg-background px-2 py-1.5 text-xs",
          "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:256:9",
          children: areas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a, "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:258:29", children: a }, a))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-accent ml-2", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:260:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:261:9", children: [
        list.length,
        " known links"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:263:7", children: list.map(([to, km]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border bg-card p-2.5 text-xs", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:265:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:266:13", children: to }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", "data-tsd-source": "/src/property-genius/PropertyHubPage.tsx:267:13", children: [
        km,
        " km"
      ] })
    ] }, to)) })
  ] });
}
__name(DistanceFinderTab, "DistanceFinderTab");
__name2(DistanceFinderTab, "DistanceFinderTab");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/property-hub.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyHubPage, { "data-tsd-source": "/src/routes/property-hub.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
