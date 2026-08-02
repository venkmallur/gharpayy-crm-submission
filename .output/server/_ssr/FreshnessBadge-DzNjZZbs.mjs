var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { B as Badge, k as Button } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as ShieldCheck, g as TriangleAlert } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const KEY = "atc_state_v1";
const EMPTY = { holds: [], freshness: {}, events: [] };
const HOLD_TTL_MS = 2 * 60 * 60 * 1e3;
const FRESH_TTL_MS = 6 * 60 * 60 * 1e3;
const EVT = "atc:change";
function uid(p) {
  return `${p}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
__name(uid, "uid");
__name2(uid, "uid");
function load() {
  if (typeof window === "undefined") return EMPTY;
  try {
    const r = localStorage.getItem(KEY);
    return r ? { ...EMPTY, ...JSON.parse(r) } : EMPTY;
  } catch {
    return EMPTY;
  }
}
__name(load, "load");
__name2(load, "load");
function save(s) {
  localStorage.setItem(KEY, JSON.stringify(s));
  window.dispatchEvent(new CustomEvent(EVT));
}
__name(save, "save");
__name2(save, "save");
function createHold(input) {
  const s = load();
  const now = Date.now();
  const hold = {
    id: uid("hld"),
    leadId: input.leadId,
    leadName: input.leadName,
    propertyId: input.propertyId,
    propertyName: input.propertyName,
    bedRef: input.bedRef,
    amount: input.amount,
    notes: input.notes,
    createdAt: now,
    expiresAt: now + (input.ttlMs ?? HOLD_TTL_MS),
    status: "active",
    teamAck: false,
    ownerAck: false
  };
  s.holds.unshift(hold);
  s.events.unshift({
    id: uid("evt"),
    leadId: input.leadId,
    ts: now,
    kind: "hold-created",
    text: `Hold created · ${input.propertyName}${input.bedRef ? ` · ${input.bedRef}` : ""}`,
    meta: { holdId: hold.id, expiresAt: hold.expiresAt }
  });
  save(s);
  return hold;
}
__name(createHold, "createHold");
__name2(createHold, "createHold");
function releaseHold(id, reason = "manual") {
  const s = load();
  const h = s.holds.find((x) => x.id === id);
  if (!h || h.status !== "active") return;
  h.status = "released";
  s.events.unshift({
    id: uid("evt"),
    leadId: h.leadId,
    ts: Date.now(),
    kind: "hold-released",
    text: `Hold released · ${h.propertyName} (${reason})`
  });
  save(s);
}
__name(releaseHold, "releaseHold");
__name2(releaseHold, "releaseHold");
function convertHold(id) {
  const s = load();
  const h = s.holds.find((x) => x.id === id);
  if (!h) return;
  h.status = "converted";
  s.events.unshift({
    id: uid("evt"),
    leadId: h.leadId,
    ts: Date.now(),
    kind: "booking-confirmed",
    text: `Hold converted to booking · ${h.propertyName}`
  });
  save(s);
}
__name(convertHold, "convertHold");
__name2(convertHold, "convertHold");
function ackTeam(id) {
  const s = load();
  const h = s.holds.find((x) => x.id === id);
  if (!h) return;
  h.teamAck = true;
  s.events.unshift({
    id: uid("evt"),
    leadId: h.leadId,
    ts: Date.now(),
    kind: "team-ack",
    text: `Team confirmed hold · ${h.propertyName}`
  });
  save(s);
}
__name(ackTeam, "ackTeam");
__name2(ackTeam, "ackTeam");
function ackOwner(id) {
  const s = load();
  const h = s.holds.find((x) => x.id === id);
  if (!h) return;
  h.ownerAck = true;
  s.events.unshift({
    id: uid("evt"),
    leadId: h.leadId,
    ts: Date.now(),
    kind: "owner-ack",
    text: `Owner approved hold · ${h.propertyName}`
  });
  save(s);
}
__name(ackOwner, "ackOwner");
__name2(ackOwner, "ackOwner");
function reconfirmProperty(propertyId, verifiedBy = "team") {
  const s = load();
  s.freshness[propertyId] = { propertyId, lastVerifiedAt: Date.now(), verifiedBy };
  save(s);
}
__name(reconfirmProperty, "reconfirmProperty");
__name2(reconfirmProperty, "reconfirmProperty");
function logTimeline(leadId, kind, text, meta) {
  const s = load();
  s.events.unshift({ id: uid("evt"), leadId, ts: Date.now(), kind, text, meta });
  save(s);
}
__name(logTimeline, "logTimeline");
__name2(logTimeline, "logTimeline");
function freshnessFor(propertyId) {
  const s = load();
  const f = s.freshness[propertyId];
  if (!f) return { stale: true, ageMs: null, lastVerifiedAt: null };
  const age = Date.now() - f.lastVerifiedAt;
  return { stale: age > FRESH_TTL_MS, ageMs: age, lastVerifiedAt: f.lastVerifiedAt };
}
__name(freshnessFor, "freshnessFor");
__name2(freshnessFor, "freshnessFor");
function useATC() {
  const [s, setS] = reactExports.useState(() => load());
  reactExports.useEffect(() => {
    const reload = /* @__PURE__ */ __name2(() => setS(load()), "reload");
    window.addEventListener(EVT, reload);
    window.addEventListener("storage", reload);
    const t = setInterval(() => {
      const cur = load();
      let changed = false;
      cur.holds.forEach((h) => {
        if (h.status === "active" && h.expiresAt <= Date.now()) {
          h.status = "expired";
          cur.events.unshift({
            id: uid("evt"),
            leadId: h.leadId,
            ts: Date.now(),
            kind: "hold-expired",
            text: `Hold auto-expired · ${h.propertyName}`
          });
          changed = true;
        }
      });
      if (changed) save(cur);
      else setS(cur);
    }, 3e4);
    return () => {
      window.removeEventListener(EVT, reload);
      window.removeEventListener("storage", reload);
      clearInterval(t);
    };
  }, []);
  return s;
}
__name(useATC, "useATC");
__name2(useATC, "useATC");
function formatRemaining(ms) {
  if (ms <= 0) return "expired";
  const m = Math.floor(ms / 6e4);
  if (m >= 60) return `${Math.floor(m / 60)}h ${m % 60}m`;
  if (m >= 1) return `${m}m`;
  return `${Math.floor(ms / 1e3)}s`;
}
__name(formatRemaining, "formatRemaining");
__name2(formatRemaining, "formatRemaining");
function FreshnessBadge({ propertyId, compact = false }) {
  useATC();
  const f = freshnessFor(propertyId);
  if (!f.stale && f.ageMs !== null) {
    const m = Math.floor(f.ageMs / 6e4);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] gap-1 border-won/40 text-won", "data-tsd-source": "/src/components/atc/FreshnessBadge.tsx:13:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/components/atc/FreshnessBadge.tsx:14:9" }),
      " verified ",
      m < 60 ? `${m}m ago` : `${Math.floor(m / 60)}h ago`
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", "data-tsd-source": "/src/components/atc/FreshnessBadge.tsx:19:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] gap-1 border-do-today/50 text-do-today", "data-tsd-source": "/src/components/atc/FreshnessBadge.tsx:20:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/components/atc/FreshnessBadge.tsx:21:9" }),
      " needs reconfirm"
    ] }),
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        variant: "ghost",
        className: "h-5 px-1.5 text-[10px]",
        onClick: /* @__PURE__ */ __name2((e) => {
          e.stopPropagation();
          reconfirmProperty(propertyId);
          toast.success("Marked verified");
        }, "onClick"),
        "data-tsd-source": "/src/components/atc/FreshnessBadge.tsx:24:9",
        children: "reconfirm"
      }
    )
  ] });
}
__name(FreshnessBadge, "FreshnessBadge");
__name2(FreshnessBadge, "FreshnessBadge");
export {
  FreshnessBadge as F,
  freshnessFor as a,
  ackTeam as b,
  createHold as c,
  ackOwner as d,
  convertHold as e,
  formatRemaining as f,
  releaseHold as g,
  logTimeline as l,
  reconfirmProperty as r,
  useATC as u
};
