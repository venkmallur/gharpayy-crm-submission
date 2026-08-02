var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useIdentityStore } from "./store-BwNXVE_m.mjs";
import { X as Input, B as Badge, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, A as Textarea, k as Button, U as Label, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, a5 as DialogDescription, a2 as DialogFooter } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Sparkles, U as User, P as Phone, bf as Mail, K as MapPin, W as Wallet, ba as CalendarDays, aD as Briefcase, bR as BedDouble, l as CircleCheck, bg as CircleAlert, bL as LoaderCircle, D as Inbox, b as Check, X, a3 as Search, g as TriangleAlert, aj as ShieldAlert, A as ArrowRight, aJ as Shield, b8 as Lock, j as UserPlus, ay as Eye } from "../_libs/lucide-react.mjs";
import { a as formatDistanceToNow } from "../_libs/date-fns.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const ZONES = [
  {
    zone: "South",
    priority: 1,
    keywords: [
      "koramangala",
      "kormangala",
      "kormagalam",
      "kormanagala",
      "korma",
      "btm layout",
      "btm",
      "jayanagar",
      "jaynagar",
      "jp nagar",
      "jpnagar",
      "hsr layout",
      "hsr",
      "banashankari",
      "basavanagudi",
      "lalbagh",
      "south end",
      "southend",
      "electronic city",
      "neeladri",
      "begur",
      "bommanahalli",
      "hulimavu",
      "sg palya",
      "silk board",
      "silkboard",
      "agara",
      "madiwala",
      "tavarekere",
      "christ university",
      "bannerghatta",
      "kanakapura",
      "kalena agrahara",
      "hosur road",
      "forum mall",
      "vv puram",
      "jayadev hospital",
      "jayanagar 9th",
      "btm 2nd stage",
      "btm stage 2",
      "koramangala 3rd",
      "koramangala 4th",
      "koramangala 5th",
      "koramangala 6th",
      "umiya emporium",
      "nexus mall"
    ]
  },
  {
    zone: "East",
    priority: 2,
    keywords: [
      "whitefield",
      "white field",
      "hopefarm",
      "itpl",
      "kundanahalli",
      "kundalahalli",
      "kadugodi",
      "brookfield",
      "hoodi",
      "garudacharpalya",
      "varthur",
      "nallurhalli",
      "kr puram",
      "seetharampalya",
      "seetharam palya",
      "bellandur",
      "sarjapur",
      "ecospace",
      "embassy tech village",
      "prestige tech park",
      "prestige technopark",
      "yemalur",
      "indiranagar",
      "indranagar",
      "indira nagar",
      "domlur",
      "ejipura",
      "murgeshpalya",
      "cv raman nagar",
      "new thippasandra",
      "old airport road",
      "airport road",
      "hal",
      "marathahalli",
      "marathalli",
      "mahadevapura",
      "mahadevpura",
      "bagmane",
      "brigade tech",
      "kadubeesanahalli",
      "kadubeesana",
      "spice garden",
      "phoenix market city",
      "brigade metropolis",
      "rmz infinity",
      "prestige shantiniketan",
      "whitefield metro",
      "aecs layout",
      "aecs"
    ]
  },
  {
    zone: "North",
    priority: 3,
    keywords: [
      "yelahanka",
      "hebbal",
      "manyata tech",
      "manyata",
      "manyatha",
      "nagawara",
      "thanisandra",
      "jakkur",
      "banaswadi",
      "kalyan nagar",
      "rt nagar",
      "sahakara nagar",
      "devanahalli",
      "vidyaranyapura",
      "jalahalli",
      "bhartiya",
      "embassy boulevard",
      "nagasandra",
      "hennur",
      "peenya",
      "yeshwanthpur",
      "ypr"
    ]
  },
  {
    zone: "West",
    priority: 4,
    keywords: [
      "rajajinagar",
      "vijaynagar",
      "vijaya nagar",
      "yeswanthpur",
      "nagarbhavi",
      "chord road",
      "mahalakshmi layout",
      "malleshwaram",
      "tumkur road",
      "sanjayanagara",
      "chandra layout"
    ]
  },
  {
    zone: "Central",
    priority: 5,
    keywords: [
      "mg road",
      "brigade road",
      "richmond road",
      "richmond circle",
      "shanthinagar",
      "ashok nagar",
      "vittal mallya",
      "jayamahal",
      "majestic",
      "gandhi nagar",
      "frazer town",
      "cubbon park",
      "ub city",
      "vasanth nagar",
      "trinity circle",
      "halasuru",
      "church street",
      "lavelle road",
      "residency road",
      "museum road",
      "adugodi",
      "wilson garden",
      "cunningham"
    ]
  }
];
function detectZone(rawText) {
  if (!rawText) return "";
  const t = rawText.toLowerCase();
  for (const z of [...ZONES].sort((a, b) => a.priority - b.priority)) {
    if (z.keywords.some((kw) => t.includes(kw))) return z.zone;
  }
  return "";
}
__name(detectZone, "detectZone");
__name2(detectZone, "detectZone");
const EMOJI_RE = /[📝📱✉️📍💰📆📅👨🏢👫✨💥💯⚡🔥💛😘🏠🎯👥📞👤💼🛏️]/g;
const LOCATION_HINTS = [
  ...ZONES.flatMap((z) => z.keywords),
  "near",
  "opposite",
  "mall",
  "road",
  "layout",
  "circle",
  "stage",
  "cross",
  "main",
  "metro",
  "station",
  "colony",
  "nagar",
  "palya",
  "puram",
  "halli",
  "village"
];
const NON_NAME_TOKENS = /\b(name|phone|mobile|email|location|area|budget|move|moving|room|need|special|request|profession|working|student|intern|girls?|boys?|coed|private|shared|sharing|single|double|triple|ac|veg|gym|preferred|in\s*blr|out\s*of)\b/i;
const LABEL_TERMINATORS = "(?:Name|Phone|Mobile|Ph|Contact|Email|E-mail|Mail|Preferred\\s*Location|Location|Area|Landmark|Map\\s*link|Budget(?:\\s*Range)?|Budjet|Actual\\s*budget|Move[-\\s]?in(?:[-\\s]?Date)?|Moving(?:\\s*Date)?|Movein|Profession|Occupation|Working|Student|Intern|Room(?:\\s*Type)?|Sharing|Need|NEED|Cohort|Special\\s*Requests?|Special\\s*Request|Notes?|Remarks?|How\\s*Many\\s*Members|Members?)";
const LABEL_TERMINATOR_LOOKAHEAD = new RegExp(`\\s+${LABEL_TERMINATORS}\\s*[:\\-–]`, "i");
function cutAtNextLabel(value) {
  if (!value) return value;
  const m = value.match(LABEL_TERMINATOR_LOOKAHEAD);
  if (m && m.index !== void 0) return value.slice(0, m.index);
  return value;
}
__name(cutAtNextLabel, "cutAtNextLabel");
__name2(cutAtNextLabel, "cutAtNextLabel");
function normalisePaste(raw) {
  return raw.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n").replace(/\\r/g, "\n").replace(/\\t/g, " ").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}
__name(normalisePaste, "normalisePaste");
__name2(normalisePaste, "normalisePaste");
function looksLikeName(line) {
  const t = line.trim();
  if (!t || t.length < 2 || t.length > 50) return false;
  if (/\d/.test(t)) return false;
  if (/@/.test(t)) return false;
  if (NON_NAME_TOKENS.test(t)) return false;
  if (LOCATION_HINTS.some((k) => t.toLowerCase().includes(k))) return false;
  const words = t.replace(/[^a-zA-Z\s.]/g, "").trim().split(/\s+/).filter(Boolean);
  if (words.length < 1 || words.length > 5) return false;
  return /^[A-Z]/.test(words[0]) || /^[a-z]/.test(words[0]);
}
__name(looksLikeName, "looksLikeName");
__name2(looksLikeName, "looksLikeName");
function looksLikeLocation(line) {
  const t = line.trim().toLowerCase();
  if (!t || t.length > 120) return false;
  if (/\d{5,}/.test(t)) return false;
  if (/@/.test(t)) return false;
  return LOCATION_HINTS.some((k) => t.includes(k));
}
__name(looksLikeLocation, "looksLikeLocation");
__name2(looksLikeLocation, "looksLikeLocation");
function looksLikeBudget(line) {
  const t = line.trim().toLowerCase().replace(/[₹,\s]/g, "");
  return /^\d{3,6}$/.test(t) || /^\d+(?:\.\d+)?k$/i.test(t) || /^\d+[-–to]+\d+k?$/i.test(t) || /^\d+k?[-–to/]+\d+k?$/i.test(t);
}
__name(looksLikeBudget, "looksLikeBudget");
__name2(looksLikeBudget, "looksLikeBudget");
function looksLikeDate(line) {
  const t = line.trim().toLowerCase();
  if (t.length > 40) return false;
  return /^(immediate|asap|now|today|tomorrow)/i.test(t) || /\d{1,2}[\/\-.]\d{1,2}[\/\-.]\d{2,4}/.test(t) || /\d{1,2}(?:st|nd|rd|th)?\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.test(t) || /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2}/i.test(t) || /(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i.test(t);
}
__name(looksLikeDate, "looksLikeDate");
__name2(looksLikeDate, "looksLikeDate");
function normalizeRoom(text) {
  const t = text.toLowerCase();
  const hasPrivate = /\b(private|single|1\s*sharing|1bhk|studio)\b/.test(t);
  const hasShared = /\b(shared|sharing|double|2\s*sharing|triple|3\s*sharing|twin)\b/.test(t);
  if (hasPrivate && hasShared) return "Both";
  if (hasPrivate) return "Private";
  if (hasShared) return "Shared";
  return "";
}
__name(normalizeRoom, "normalizeRoom");
__name2(normalizeRoom, "normalizeRoom");
function titleCase(name) {
  return name.split(/\s+/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}
__name(titleCase, "titleCase");
__name2(titleCase, "titleCase");
function parseLead(raw) {
  if (!raw || raw.trim().length < 4) return null;
  const normalised = normalisePaste(raw);
  const clean = normalised.replace(/\*{1,2}([^*\n]+)\*{1,2}/g, "$1").replace(/_{1,3}([^_\n]+)_{1,3}/g, "$1").replace(/`([^`]+)`/g, "$1");
  const grab = /* @__PURE__ */ __name2((...patterns) => {
    for (const re of patterns) {
      const m = clean.match(re);
      if (m?.[1]) {
        let v = m[1].replace(EMOJI_RE, "").trim();
        v = cutAtNextLabel(v);
        return v.replace(/^[\s,;:|.\-–—]+|[\s,;:|.\-–—]+$/g, "").trim();
      }
    }
    return "";
  }, "grab");
  let phone = "";
  const digitOnly = clean.replace(/[^\d]/g, "");
  const tightMatch = clean.match(/(?:\+?\s*91[-\s]?)?(?:\d[-\s]?){9,12}\d/);
  if (tightMatch) {
    const candidate = tightMatch[0].replace(/[^\d]/g, "");
    const trimmed = candidate.replace(/^91/, "");
    const m = trimmed.match(/[6-9]\d{9}/);
    if (m) phone = m[0];
  }
  if (!phone) {
    const m = digitOnly.match(/[6-9]\d{9}/);
    if (m) phone = m[0];
  }
  const emailMatch = clean.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/);
  const email = emailMatch?.[0] ?? "";
  let name = grab(
    /(?:^|\n)\s*Name\s*[:\-–*]+\s*([^\n,📱\d]{2,60})/im,
    /(?:^|\n)\s*\.Name\s+([^\n.]{2,60})/im,
    /(?:^|\n)\s*[-–]\s*([A-Z][a-z][^\n\d]{1,40})\s*\n/m
  );
  if (name) {
    name = name.split(/\s+(?:Phone|Mobile|Email|Location|Budget|Move|Moving|Working|Student|Room|Need)\b/i)[0].replace(/[\d@].*$/, "").replace(/^\W+|\W+$/g, "").trim();
  }
  if (!name) {
    const lines = clean.split("\n").map((l) => l.trim()).filter(Boolean);
    for (const line of lines.slice(0, 3)) {
      const stripped = line.replace(EMOJI_RE, "").replace(/^[-–*•]\s*/, "").trim();
      const inlineMatch = stripped.match(/^([A-Za-z][A-Za-z\s.]{1,40}?)\s+(?:\+?91)?[6-9]\d{9}/);
      if (inlineMatch) {
        name = inlineMatch[1].trim();
        break;
      }
      if (looksLikeName(stripped)) {
        name = stripped;
        break;
      }
    }
  }
  if (name) name = titleCase(name);
  let location = grab(
    /Preferred\s*Location[^:\n]*[:\-–]+\s*([^\n💰📆👨🏢]{3,200})/i,
    /Which\s+location\s*[:\-–]+\s*([^\n]{3,200})/i,
    /Location\s*[:\-–]+\s*([^\n💰📆👨🏢]{3,200})/i,
    /Area\s*[:\-–]+\s*([^\n]{3,200})/i,
    /Landmark[^:\n]*[:\-–]+\s*([^\n]{3,200})/i
  );
  location = location.replace(/\(Map\s*link\)|https?:\/\/\S+/gi, "").trim();
  if (!location) {
    for (const line of clean.split("\n").map((l) => l.trim())) {
      if (looksLikeLocation(line) && !looksLikeBudget(line)) {
        location = line.replace(EMOJI_RE, "").trim();
        break;
      }
    }
  }
  let budget = grab(
    /(?:Actual\s*budget|Budget\s*Range|Budget\s*range|Budget\s*is|Budget|Budjet)\s*[:\-–(]*\s*([^\n)📆👨🏢]{2,80})/i
  ).replace(/[₹()\[\]]/g, "").replace(/\s+/g, " ").trim();
  if (!budget) {
    for (const line of clean.split("\n").map((l) => l.trim())) {
      if (looksLikeBudget(line)) {
        budget = line.replace(/[₹]/g, "").trim();
        break;
      }
    }
  }
  let moveIn = grab(
    /Move[-\s]?in[-\s]?Date\s*[:\-–😘*]+\s*([^\n👨🏢👫✨]{2,80})/i,
    /Moving\s*Date\s*[:\-–]+\s*([^\n]{2,60})/i,
    /Move[-\s]?in\s*[:\-–]+\s*([^\n]{2,60})/i,
    /Movein\s*[:\-–]+\s*([^\n]{2,60})/i
  );
  if (!moveIn) {
    for (const line of clean.split("\n").map((l) => l.trim())) {
      if (looksLikeDate(line) && !looksLikeBudget(line)) {
        moveIn = line;
        break;
      }
    }
  }
  const isWorking = /\bworking\b|\bprofessional\b|\banalyst\b|\banalysist\b|\bmarketer\b|\bengineer\b|\bdeveloper\b|\bemployee\b/i.test(clean);
  const isStudent = /\bstudent\b/i.test(clean);
  const isIntern = /\bintern(?:ing)?\b/i.test(clean);
  const type = isWorking && isStudent ? "Student/Working" : isWorking ? "Working" : isStudent ? "Student" : isIntern ? "Intern" : "";
  const roomLabeled = grab(/Room(?:\s*Type)?\s*[*:\-–(]+\s*([^\n👫✨📞]{2,60})/i);
  const room = normalizeRoom(roomLabeled || clean);
  const needRaw = grab(
    /NEED\s*[*:\-–(]+\s*([^\n✨📞]{2,60})/i,
    /Need\s*[:\-–]+\s*([^\n]{2,60})/i,
    /Cohort\s*[:\-–]+\s*([^\n]{2,60})/i
  ).toLowerCase();
  const wantGirls = needRaw.includes("girl") || /\bgirls?\s*(?:pg|preferable|only)?/i.test(clean);
  const wantBoys = needRaw.includes("boy") || /\bboys?\b/i.test(clean);
  const wantCoed = needRaw.includes("coed") || /\bcoed\b/i.test(clean);
  const need = [wantGirls && "Girls", wantBoys && "Boys", wantCoed && "Coed"].filter(Boolean).join(" / ");
  let specialReqs = grab(
    /Special\s*Requests?\s*[*:\-–(]+\s*([^\n*📞]{2,200})/i,
    /Notes?\s*[:\-–]+\s*([^\n]{2,200})/i,
    /Remarks?\s*[:\-–]+\s*([^\n]{2,200})/i
  ).replace(/\b(NA|None|n\/a|If any)\b/gi, "").trim();
  if (!specialReqs) {
    const consumed = /* @__PURE__ */ new Set();
    [name, phone, email, location, budget, moveIn].forEach((v) => v && consumed.add(v.toLowerCase().trim()));
    const extras = [];
    for (const rawLine of clean.split("\n")) {
      const line = rawLine.replace(EMOJI_RE, "").trim();
      if (!line || line.length < 4 || line.length > 200) continue;
      const lower = line.toLowerCase();
      if (consumed.has(lower)) continue;
      if (/\d{6,}/.test(line)) continue;
      if (/@/.test(line)) continue;
      if (looksLikeBudget(line) || looksLikeDate(line)) continue;
      if (NON_NAME_TOKENS.test(line) && !/\b(veg|non[- ]?veg|ac|gym|wifi|food|parking|pet|ventilation|spacious|clean|backup|family|balcony|attached|sunlight|quiet|washroom)\b/i.test(line)) continue;
      if (/\b(veg|non[- ]?veg|ac|gym|wifi|food|parking|pet|ventilation|spacious|clean|backup|family|quiet|sunlight|balcony|attached|washroom)\b/i.test(line) || /^[A-Za-z]/.test(line) && line.split(/\s+/).length >= 3) {
        extras.push(line);
      }
    }
    specialReqs = extras.join("; ").slice(0, 240);
  }
  const inBLRTrue = /\bin\s*blr\b|in bangalore|currently in bangalore|already here|yes.*blr/i.test(normalised);
  const inBLRFalse = /not in blr|not in bangalore|outside bangalore|relocating|out.*blr/i.test(normalised);
  const inBLR = inBLRTrue ? true : inBLRFalse ? false : null;
  const zone = detectZone(normalised);
  const areaPool = `${location} ${normalised}`.toLowerCase();
  const areaSet = /* @__PURE__ */ new Set();
  for (const z of ZONES) {
    for (const kw of z.keywords) {
      if (kw.length < 4) continue;
      if (areaPool.includes(kw)) {
        areaSet.add(kw.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "));
      }
    }
  }
  const areas = [...areaSet].slice(0, 6);
  let fullAddress = "";
  const urlMatch = normalised.match(/https?:\/\/\S+/);
  if (urlMatch) fullAddress = urlMatch[0];
  if (!fullAddress) {
    const longLine = normalised.split("\n").map((l) => l.trim()).find((l) => l.length > 60 && /\d/.test(l) && !/@/.test(l));
    if (longLine) fullAddress = longLine;
  }
  const labeledFull = grab(/Full\s*Address\s*[:\-–]+\s*([^\n]{5,300})/i);
  if (labeledFull) fullAddress = labeledFull;
  if (!phone && !email && !name) return null;
  return {
    name,
    phone,
    email,
    location,
    areas,
    fullAddress,
    budget,
    moveIn,
    type,
    room,
    need,
    specialReqs,
    inBLR,
    zone,
    rawSource: raw
  };
}
__name(parseLead, "parseLead");
__name2(parseLead, "parseLead");
function OwnershipBadge({ lead, ownerName, compact }) {
  const me = useIdentityStore((s) => s.currentUser);
  const requestAccess = useIdentityStore((s) => s.requestAccess);
  const isPrimary = lead.primaryOwnerId === me.id;
  const isSecondary = lead.secondaryOwnerId === me.id;
  const slotsFull = !!lead.secondaryOwnerId;
  const onRequest = /* @__PURE__ */ __name2(() => {
    const r = requestAccess(lead.ulid);
    if (r) toast.success("Access request sent to owner");
    else toast.info("Already pending or you're the owner");
  }, "onRequest");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:27:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium border ${isPrimary ? "bg-primary/10 border-primary/30 text-primary" : isSecondary ? "bg-accent/10 border-accent/30 text-accent-foreground" : "bg-muted border-border text-muted-foreground"}`, "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:28:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:33:9" }),
      isPrimary ? "You · Primary" : `Owner: ${ownerName ?? lead.primaryOwnerId}`
    ] }),
    lead.secondaryOwnerId && !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-muted border border-border text-muted-foreground", "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:37:9", children: "+1 secondary" }),
    !isPrimary && !isSecondary && (slotsFull ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-muted border border-border text-muted-foreground", "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:43:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:44:13" }),
      " Both slots taken — view only"
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px] gap-1", onClick: onRequest, "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:47:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:48:13" }),
      " Request access"
    ] })),
    !isPrimary && !isSecondary && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:53:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/OwnershipBadge.tsx:54:11" }),
      " view-only"
    ] })
  ] });
}
__name(OwnershipBadge, "OwnershipBadge");
__name2(OwnershipBadge, "OwnershipBadge");
function DuplicateModal({ open, onClose, result, onForceCreate, onUseExisting }) {
  if (!result) return null;
  const { type, candidates } = result;
  const header = {
    exact: { icon: ShieldAlert, title: "Lead already exists", color: "text-destructive", desc: "An exact match was found. You cannot create a duplicate." },
    strong: { icon: TriangleAlert, title: "Likely duplicate", color: "text-warning", desc: "Strong match found. Confirm whether this is a new lead or the same person." },
    possible: { icon: Search, title: "Possible duplicate", color: "text-amber-500", desc: "Some signals match. You can proceed but please double-check." },
    new: { icon: Sparkles, title: "New lead", color: "text-primary", desc: "No matches found. Safe to create." }
  }[type];
  const Icon = header.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: /* @__PURE__ */ __name2((o) => !o && onClose(), "onOpenChange"), "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:30:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:31:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:32:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: `flex items-center gap-2 ${header.color}`, "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:33:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:34:13" }),
        " ",
        header.title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:36:11", children: header.desc })
    ] }),
    candidates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-72 overflow-y-auto", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:40:11", children: candidates.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border p-3 bg-muted/30", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:42:15", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:43:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:44:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:45:21", children: c.lead.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:46:21", children: [
            c.lead.phoneE164 || c.lead.phoneRaw || "no phone",
            " · ",
            c.lead.area || "no area"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-1", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:49:21", children: [
            "Last activity ",
            formatDistanceToNow(new Date(c.lead.lastActivityAt), { addSuffix: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:53:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:54:21", children: [
            c.score,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:54:69", children: "/100" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:55:21", children: c.reasons.slice(0, 2).join(", ") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between gap-2", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:58:17", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(OwnershipBadge, { lead: c.lead, compact: true, "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:59:19" }),
        type !== "exact" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", className: "h-7 text-[11px] gap-1", onClick: /* @__PURE__ */ __name2(() => onUseExisting(c.lead), "onClick"), "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:61:21", children: [
          "Use this ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:62:32" })
        ] }),
        type === "exact" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: /* @__PURE__ */ __name2(() => onUseExisting(c.lead), "onClick"), "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:66:21", children: "Open lead" })
      ] })
    ] }, c.lead.ulid)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 sm:gap-2", "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:76:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:77:11", children: "Cancel" }),
      type !== "exact" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onForceCreate, "data-tsd-source": "/src/components/leads/DuplicateModal.tsx:79:13", children: type === "new" ? "Create lead" : "This is a new lead — create anyway" })
    ] })
  ] }) });
}
__name(DuplicateModal, "DuplicateModal");
__name2(DuplicateModal, "DuplicateModal");
const emptyDraft = /* @__PURE__ */ __name2(() => ({
  name: "",
  phone: "",
  email: "",
  location: "",
  areas: [],
  fullAddress: "",
  budget: "",
  moveIn: "",
  type: "",
  room: "",
  need: "",
  specialReqs: "",
  inBLR: null,
  zone: "",
  rawSource: ""
}), "emptyDraft");
const TYPE_OPTIONS = ["Student", "Working professional", "Intern", "Family", "Other"];
const ROOM_OPTIONS = ["Private", "Shared (2)", "Shared (3+)", "Studio", "Any"];
const NEED_OPTIONS = ["Boys", "Girls", "Coed", "Any"];
const phoneOk = /* @__PURE__ */ __name2((v) => v.replace(/\D/g, "").length >= 10, "phoneOk");
const emailOk = /* @__PURE__ */ __name2((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "emailOk");
function DirectLeadForm({ onCreated, initialDraft }) {
  const checkDuplicates = useIdentityStore((s) => s.checkDuplicates);
  const createLead = useIdentityStore((s) => s.createLead);
  const [draft, setDraft] = reactExports.useState(initialDraft || emptyDraft());
  const [touched, setTouched] = reactExports.useState({});
  const [match, setMatch] = reactExports.useState(null);
  const [showModal, setShowModal] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!draft.location) return;
    const zone = detectZone(draft.location);
    if (zone && zone !== draft.zone) {
      setDraft((d) => ({ ...d, zone }));
    }
  }, [draft.location]);
  const update = /* @__PURE__ */ __name2((k, v) => setDraft((d) => ({ ...d, [k]: v })), "update");
  const errors = reactExports.useMemo(() => {
    const e = {};
    if (!draft.name.trim()) e.name = "Name is required";
    if (!draft.phone.trim()) e.phone = "Phone is required";
    else if (!phoneOk(draft.phone)) e.phone = "Enter a valid 10-digit phone";
    if (!emailOk(draft.email)) e.email = "Invalid email";
    return e;
  }, [draft]);
  const filled = reactExports.useMemo(() => {
    const fields = ["name", "phone", "email", "location", "budget", "moveIn", "type", "room"];
    return fields.filter((f) => String(draft[f] ?? "").trim().length > 0).length;
  }, [draft]);
  const completion = Math.round(filled / 8 * 100);
  const submit = /* @__PURE__ */ __name2(() => {
    setTouched({ name: true, phone: true, email: true });
    if (Object.keys(errors).length > 0) {
      toast.error("Fix the highlighted fields first");
      return;
    }
    setSubmitting(true);
    const result = checkDuplicates(draft);
    setMatch(result);
    setShowModal(true);
    setSubmitting(false);
  }, "submit");
  const onForceCreate = /* @__PURE__ */ __name2(() => {
    const lead = createLead(draft);
    toast.success(`Lead created · ULID ${lead.ulid.slice(0, 12)}…`);
    setShowModal(false);
    setDraft(emptyDraft());
    setTouched({});
    setMatch(null);
    onCreated?.(lead);
  }, "onForceCreate");
  const onUseExisting = /* @__PURE__ */ __name2((lead) => {
    toast.info(`Opening existing lead: ${lead.name}`);
    setShowModal(false);
    onCreated?.(lead);
  }, "onUseExisting");
  const showError = /* @__PURE__ */ __name2((k) => touched[k] && errors[k], "showError");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:106:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-4", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:108:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:109:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:110:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:111:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:113:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:114:13", children: "New lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:115:13", children: "Direct entry · auto zone detect · live dedup" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:118:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:119:11", children: "Completion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:120:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-24 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:121:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all", style: { width: `${completion}%` }, "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:122:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium tabular-nums", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:124:13", children: [
            completion,
            "%"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Identity", subtitle: "Required for safe deduplication", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:130:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:131:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: User, label: "Full name *", error: showError("name") ? errors.name : void 0, "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:132:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: draft.name,
          onChange: /* @__PURE__ */ __name2((e) => update("name", e.target.value), "onChange"),
          onBlur: /* @__PURE__ */ __name2(() => setTouched((t) => ({ ...t, name: true })), "onBlur"),
          placeholder: "Rahul Sharma",
          className: "h-10 text-sm",
          autoFocus: true,
          "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:133:13"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: Phone, label: "Phone *", error: showError("phone") ? errors.phone : void 0, "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:142:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: draft.phone,
          onChange: /* @__PURE__ */ __name2((e) => update("phone", e.target.value), "onChange"),
          onBlur: /* @__PURE__ */ __name2(() => setTouched((t) => ({ ...t, phone: true })), "onBlur"),
          placeholder: "+91 98xxxxxxxx",
          inputMode: "tel",
          className: "h-10 text-sm",
          "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:143:13"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: Mail, label: "Email", error: showError("email") ? errors.email : void 0, "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:152:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          value: draft.email,
          onChange: /* @__PURE__ */ __name2((e) => update("email", e.target.value), "onChange"),
          onBlur: /* @__PURE__ */ __name2(() => setTouched((t) => ({ ...t, email: true })), "onBlur"),
          placeholder: "rahul@example.com",
          type: "email",
          className: "h-10 text-sm",
          "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:153:13"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: MapPin, label: "Preferred area / location", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:162:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:163:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: draft.location,
            onChange: /* @__PURE__ */ __name2((e) => update("location", e.target.value), "onChange"),
            placeholder: "Koramangala",
            className: "h-10 text-sm pr-20",
            "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:164:15"
          }
        ),
        draft.zone && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px]", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:171:17", children: draft.zone })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Requirements", subtitle: "The more you fill, the better the match", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:181:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:182:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: Wallet, label: "Budget (₹/month)", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:183:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: draft.budget,
            onChange: /* @__PURE__ */ __name2((e) => update("budget", e.target.value), "onChange"),
            placeholder: "8000-12000",
            className: "h-10 text-sm",
            "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:184:13"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: CalendarDays, label: "Move-in", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:191:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "date",
            value: draft.moveIn,
            onChange: /* @__PURE__ */ __name2((e) => update("moveIn", e.target.value), "onChange"),
            className: "h-10 text-sm",
            "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:192:13"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: Briefcase, label: "Type", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:199:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.type, onValueChange: /* @__PURE__ */ __name2((v) => update("type", v), "onValueChange"), "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:200:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 text-sm", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:201:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:201:55" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:202:15", children: TYPE_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:203:42", children: t }, t)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { icon: BedDouble, label: "Room preference", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:207:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.room, onValueChange: /* @__PURE__ */ __name2((v) => update("room", v), "onValueChange"), "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:208:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 text-sm", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:209:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:209:55" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:210:15", children: ROOM_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:211:42", children: t }, t)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Cohort / need", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:215:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.need, onValueChange: /* @__PURE__ */ __name2((v) => update("need", v), "onValueChange"), "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:216:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 text-sm", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:217:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:217:55" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:218:15", children: NEED_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:219:42", children: t }, t)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Currently in Bangalore?", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:223:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: draft.inBLR === null ? "" : draft.inBLR ? "yes" : "no",
            onValueChange: /* @__PURE__ */ __name2((v) => update("inBLR", v === "" ? null : v === "yes"), "onValueChange"),
            "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:224:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 text-sm", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:228:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:228:55" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:229:15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "yes", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:230:17", children: "Yes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "no", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:231:17", children: "No" })
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Special requirements / notes", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:237:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          value: draft.specialReqs,
          onChange: /* @__PURE__ */ __name2((e) => update("specialReqs", e.target.value), "onChange"),
          placeholder: "e.g. needs parking, food preferences, family visiting…",
          className: "min-h-20 text-sm",
          "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:238:11"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky bottom-0 -mx-1 px-1 pt-2 pb-1 bg-gradient-to-t from-background via-background/95 to-background/0", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:248:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3 flex items-center justify-between gap-3 flex-wrap", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:249:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:250:11", children: filled >= 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-primary", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:252:17" }),
        " Strong signals — ready to dedup & save"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 text-amber-500", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:254:17" }),
        " Add a few more fields for confident dedup"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:257:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "h-9", onClick: /* @__PURE__ */ __name2(() => {
          setDraft(emptyDraft());
          setTouched({});
        }, "onClick"), "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:258:13", children: "Reset" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: submit, disabled: submitting || Object.keys(errors).length > 0, size: "sm", className: "h-9 gap-2 min-w-36", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:261:13", children: [
          submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:262:29" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:262:76" }),
          "Save lead"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DuplicateModal,
      {
        open: showModal,
        onClose: /* @__PURE__ */ __name2(() => setShowModal(false), "onClose"),
        result: match,
        onForceCreate,
        onUseExisting,
        "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:269:7"
      }
    )
  ] });
}
__name(DirectLeadForm, "DirectLeadForm");
__name2(DirectLeadForm, "DirectLeadForm");
function Section({ title, subtitle, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:282:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:283:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:284:9", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:285:22", children: subtitle })
    ] }),
    children
  ] });
}
__name(Section, "Section");
__name2(Section, "Section");
function FormField({
  label,
  error,
  icon: Icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:301:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] font-medium flex items-center gap-1.5 text-muted-foreground", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:302:7", children: [
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:303:18" }),
      " ",
      label
    ] }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-destructive flex items-center gap-1", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:306:17", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/DirectLeadForm.tsx:306:85" }),
      " ",
      error
    ] })
  ] });
}
__name(FormField, "FormField");
__name2(FormField, "FormField");
function RequestAccessSheet() {
  const me = useIdentityStore((s) => s.currentUser);
  const requests = useIdentityStore((s) => s.requests);
  const leads = useIdentityStore((s) => s.leads);
  const decideRequest = useIdentityStore((s) => s.decideRequest);
  const incoming = requests.filter((r) => r.toOwnerId === me.id && r.state === "pending");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:16:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-sm flex items-center gap-2 mb-3", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:17:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-4 w-4", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:18:9" }),
      " Access requests",
      incoming.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:20:11", children: incoming.length })
    ] }),
    incoming.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:24:9", children: "No pending access requests." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:26:9", children: incoming.map((r) => {
      const lead = leads.find((l) => l.ulid === r.ulid);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 p-2 rounded-lg bg-muted/30", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:30:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:31:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:32:19", children: r.requesterName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:33:19", children: [
            "wants secondary access on ",
            lead?.name ?? r.ulid.slice(0, 8),
            " ·",
            " ",
            formatDistanceToNow(new Date(r.ts), { addSuffix: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:38:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-[11px] gap-1",
              onClick: /* @__PURE__ */ __name2(() => {
                decideRequest(r.id, "approved");
                toast.success("Granted");
              }, "onClick"),
              "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:39:19",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:41:21" }),
                " Approve"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-7 text-[11px] gap-1",
              onClick: /* @__PURE__ */ __name2(() => {
                decideRequest(r.id, "rejected");
                toast.info("Rejected");
              }, "onClick"),
              "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:43:19",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3", "data-tsd-source": "/src/components/leads/RequestAccessSheet.tsx:45:21" }),
                " Reject"
              ]
            }
          )
        ] })
      ] }, r.id);
    }) })
  ] });
}
__name(RequestAccessSheet, "RequestAccessSheet");
__name2(RequestAccessSheet, "RequestAccessSheet");
export {
  DirectLeadForm as D,
  RequestAccessSheet as R,
  detectZone as d,
  parseLead as p
};
