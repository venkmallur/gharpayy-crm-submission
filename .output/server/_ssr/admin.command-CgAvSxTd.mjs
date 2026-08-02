var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-Jr4ZQwpF.mjs";
import { u as useAdminRows } from "./use-admin-rows-COle0KJQ.mjs";
import { u as useApp, q as cn } from "./router-xBhBcQRf.mjs";
import { u as useAuditLog } from "./audit-log-YJnFAPHk.mjs";
import { b as bulkReassign, a as flagIntervention } from "./admin-actions--2nPWwGf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { ar as UserCheck, bW as Power, bq as Download, bh as Megaphone, bG as Snowflake, aj as ShieldAlert } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




import "../_libs/seroval-plugins.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "./store-CzExz6PU.mjs";
import "../_libs/zustand.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
const KILL_KEY = "admin.kill.sequences";
function CommandBridge() {
  const rows = useAdminRows();
  const {
    tcms,
    setRole,
    setCurrentTcmId
  } = useApp();
  const log = useAuditLog((s) => s.log);
  const [impersonateId, setImpersonateId] = reactExports.useState("");
  const [broadcast, setBroadcast] = reactExports.useState("");
  const [paused, setPaused] = reactExports.useState(() => typeof window !== "undefined" && localStorage.getItem(KILL_KEY) === "1");
  const dormant = reactExports.useMemo(() => rows.filter((r) => r.status === "dormant"), [rows]);
  const stuckHot = reactExports.useMemo(() => rows.filter((r) => !r.booked && r.status !== "lost" && r.probability >= 70 && Date.now() - r.lastTouchTs > 2 * 864e5), [rows]);
  function doImpersonate() {
    if (!impersonateId) return;
    setRole("tcm");
    setCurrentTcmId(impersonateId);
    const t = tcms.find((x) => x.id === impersonateId);
    log({
      actorId: "admin",
      actorName: "Admin",
      entityType: "session",
      entityId: impersonateId,
      action: "admin.impersonate",
      summary: `Impersonating ${t?.name ?? impersonateId}`
    });
    toast.warning(`Now impersonating ${t?.name}. Switch back via View as.`);
  }
  __name(doImpersonate, "doImpersonate");
  __name2(doImpersonate, "doImpersonate");
  function togglePause() {
    const next = !paused;
    setPaused(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(KILL_KEY, next ? "1" : "0");
    }
    log({
      actorId: "admin",
      actorName: "Admin",
      entityType: "system",
      entityId: "sequences",
      action: next ? "admin.kill.on" : "admin.kill.off",
      summary: next ? "Paused all sequences" : "Resumed sequences"
    });
    toast[next ? "warning" : "success"](next ? "All sequences paused org-wide" : "Sequences resumed");
  }
  __name(togglePause, "togglePause");
  __name2(togglePause, "togglePause");
  function sendBroadcast() {
    if (!broadcast.trim()) return;
    log({
      actorId: "admin",
      actorName: "Admin",
      entityType: "broadcast",
      entityId: String(Date.now()),
      action: "admin.broadcast",
      summary: `Broadcast → ${tcms.length} TCMs: ${broadcast.slice(0, 80)}`
    });
    navigator.clipboard?.writeText(broadcast).catch(() => {
    });
    toast.success(`Broadcast queued for ${tcms.length} TCMs · copied to clipboard`);
    setBroadcast("");
  }
  __name(sendBroadcast, "sendBroadcast");
  __name2(sendBroadcast, "sendBroadcast");
  function snapshotNow() {
    const blob = new Blob([JSON.stringify({
      ts: Date.now(),
      rows
    }, null, 2)], {
      type: "application/json"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `admin-snapshot-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19)}.json`;
    a.click();
    log({
      actorId: "admin",
      actorName: "Admin",
      entityType: "system",
      entityId: "snapshot",
      action: "admin.snapshot",
      summary: `Snapshot of ${rows.length} rows downloaded`
    });
  }
  __name(snapshotNow, "snapshotNow");
  __name2(snapshotNow, "snapshotNow");
  function rebalanceDormant() {
    if (!dormant.length) return toast.info("No dormant leads to rebalance");
    if (!tcms.length) return;
    const fittest = tcms.slice().sort((a, b) => b.conversionRate - a.conversionRate)[0];
    bulkReassign(dormant.map((d) => d.lead.id), fittest.id);
  }
  __name(rebalanceDormant, "rebalanceDormant");
  __name2(rebalanceDormant, "rebalanceDormant");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { title: "Command Bridge", sub: "Impersonate, broadcast, pause, snapshot — every god-mode lever.", "data-tsd-source": "/src/routes/admin.command.tsx:81:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/routes/admin.command.tsx:82:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "h-4 w-4" }), title: "Impersonate", tone: "warn", "data-tsd-source": "/src/routes/admin.command.tsx:84:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", "data-tsd-source": "/src/routes/admin.command.tsx:85:11", children: "Sign in as any TCM to debug their desk. Logged + reversible." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: impersonateId, onChange: /* @__PURE__ */ __name2((e) => setImpersonateId(e.target.value), "onChange"), className: "w-full text-xs bg-background border border-border rounded px-2 py-1.5 mb-2", "data-tsd-source": "/src/routes/admin.command.tsx:86:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/routes/admin.command.tsx:91:13", children: "Select TCM…" }),
          tcms.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: t.id, "data-tsd-source": "/src/routes/admin.command.tsx:92:30", children: [
            t.name,
            " · ",
            t.zone
          ] }, t.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: doImpersonate, disabled: !impersonateId, className: "w-full text-xs bg-warning text-warning-foreground rounded py-1.5 font-medium disabled:opacity-40", "data-tsd-source": "/src/routes/admin.command.tsx:94:11", children: "Become this TCM" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Power, { className: "h-4 w-4" }), title: "Kill switch", tone: paused ? "danger" : "ok", "data-tsd-source": "/src/routes/admin.command.tsx:101:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", "data-tsd-source": "/src/routes/admin.command.tsx:102:11", children: "Pause every WhatsApp sequence + automation org-wide. Use during incidents." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-center py-2 rounded mb-2 font-mono text-xs", paused ? "bg-destructive/15 text-destructive" : "bg-success/15 text-success"), "data-tsd-source": "/src/routes/admin.command.tsx:103:11", children: paused ? "PAUSED" : "RUNNING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: togglePause, className: cn("w-full text-xs rounded py-1.5 font-medium", paused ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"), "data-tsd-source": "/src/routes/admin.command.tsx:107:11", children: paused ? "Resume sequences" : "Pause all sequences" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }), title: "Snapshot now", tone: "info", "data-tsd-source": "/src/routes/admin.command.tsx:115:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", "data-tsd-source": "/src/routes/admin.command.tsx:116:11", children: "Download current state of every joined admin row as JSON. Use for forensics or BI export." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mb-2 font-mono", "data-tsd-source": "/src/routes/admin.command.tsx:117:11", children: [
          rows.length,
          " rows · ",
          (JSON.stringify(rows).length / 1024).toFixed(1),
          " KB"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: snapshotNow, className: "w-full text-xs bg-info text-info-foreground rounded py-1.5 font-medium", "data-tsd-source": "/src/routes/admin.command.tsx:118:11", children: "Download snapshot" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4" }), title: "Broadcast to all TCMs", tone: "info", className: "md:col-span-2", "data-tsd-source": "/src/routes/admin.command.tsx:125:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: broadcast, onChange: /* @__PURE__ */ __name2((e) => setBroadcast(e.target.value), "onChange"), placeholder: "One message — every TCM sees this on next refresh + WhatsApp copy.", rows: 3, className: "w-full text-xs bg-background border border-border rounded px-2 py-1.5 mb-2 font-mono", "data-tsd-source": "/src/routes/admin.command.tsx:126:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", "data-tsd-source": "/src/routes/admin.command.tsx:133:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/routes/admin.command.tsx:134:13", children: [
            broadcast.length,
            "/280 · ",
            tcms.length,
            " recipients"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendBroadcast, disabled: !broadcast.trim(), className: "text-xs bg-accent text-accent-foreground rounded px-3 py-1.5 font-medium disabled:opacity-40", "data-tsd-source": "/src/routes/admin.command.tsx:135:13", children: "Send + copy" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Snowflake, { className: "h-4 w-4" }), title: "Rebalance dormant", tone: "warn", "data-tsd-source": "/src/routes/admin.command.tsx:143:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2", "data-tsd-source": "/src/routes/admin.command.tsx:144:11", children: "Bulk-reassign every dormant lead to the top-converting TCM." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mb-2 font-mono", "data-tsd-source": "/src/routes/admin.command.tsx:145:11", children: [
          dormant.length,
          " dormant lead(s)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: rebalanceDormant, className: "w-full text-xs bg-warning text-warning-foreground rounded py-1.5 font-medium", "data-tsd-source": "/src/routes/admin.command.tsx:146:11", children: "Rebalance now" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-3 mt-3", "data-tsd-source": "/src/routes/admin.command.tsx:154:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", "data-tsd-source": "/src/routes/admin.command.tsx:155:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4 text-destructive", "data-tsd-source": "/src/routes/admin.command.tsx:156:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", "data-tsd-source": "/src/routes/admin.command.tsx:157:11", children: "Intervention queue · hot leads going cold" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.command.tsx:159:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[10px] uppercase text-muted-foreground border-b border-border", "data-tsd-source": "/src/routes/admin.command.tsx:160:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-tsd-source": "/src/routes/admin.command.tsx:161:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1.5", "data-tsd-source": "/src/routes/admin.command.tsx:161:17", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left", "data-tsd-source": "/src/routes/admin.command.tsx:161:59", children: "TCM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.command.tsx:161:93", children: "Prob" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", "data-tsd-source": "/src/routes/admin.command.tsx:161:129", children: "Age" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { "data-tsd-source": "/src/routes/admin.command.tsx:161:164" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { "data-tsd-source": "/src/routes/admin.command.tsx:163:11", children: [
          stuckHot.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", "data-tsd-source": "/src/routes/admin.command.tsx:165:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5", "data-tsd-source": "/src/routes/admin.command.tsx:166:17", children: r.lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/admin.command.tsx:167:17", children: r.tcm?.name ?? "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono text-accent", "data-tsd-source": "/src/routes/admin.command.tsx:168:17", children: [
              r.probability,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right font-mono", "data-tsd-source": "/src/routes/admin.command.tsx:169:17", children: [
              Math.round((Date.now() - r.lastTouchTs) / 864e5),
              "d"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", "data-tsd-source": "/src/routes/admin.command.tsx:170:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => flagIntervention(r.lead.id, "Hot lead stalled · admin escalation"), "onClick"), className: "text-[10px] px-2 py-0.5 rounded bg-destructive/15 text-destructive hover:bg-destructive/25", "data-tsd-source": "/src/routes/admin.command.tsx:171:19", children: "Flag" }) })
          ] }, r.lead.id)),
          !stuckHot.length && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-tsd-source": "/src/routes/admin.command.tsx:178:34", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "text-center text-muted-foreground py-4", "data-tsd-source": "/src/routes/admin.command.tsx:178:38", children: "No hot leads stalled. Excellent." }) })
        ] })
      ] })
    ] })
  ] });
}
__name(CommandBridge, "CommandBridge");
__name2(CommandBridge, "CommandBridge");
function Card({
  icon,
  title,
  tone,
  children,
  className
}) {
  const border = {
    ok: "border-success/40",
    info: "border-info/40",
    warn: "border-warning/40",
    danger: "border-destructive/40"
  }[tone];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border bg-card p-3", border, className), "data-tsd-source": "/src/routes/admin.command.tsx:194:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5 text-xs font-semibold", "data-tsd-source": "/src/routes/admin.command.tsx:195:7", children: [
      icon,
      title
    ] }),
    children
  ] });
}
__name(Card, "Card");
__name2(Card, "Card");
export {
  CommandBridge as component
};
