var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { an as useOwner, q as cn } from "./router-Cbs6ivkN.mjs";
import { C as CoachInline } from "./CoachInline-CH6LETUg.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { B as Building2, D as Inbox, i as ShieldCheck, bE as Camera, b8 as Lock, T as TrendingUp } from "../_libs/lucide-react.mjs";
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
function OwnersCompare() {
  const { owners, properties, rooms, roomStatuses, media, blocks, complianceFor } = useOwner();
  const data = reactExports.useMemo(() => {
    return owners.map((o) => {
      const c = complianceFor(o.id);
      const myStatuses = roomStatuses.filter((s) => s.ownerId === o.id);
      const total = myStatuses.length || 1;
      const locked = myStatuses.filter((s) => s.lockedUnsellable).length;
      const verified = myStatuses.filter((s) => s.verifiedToday).length;
      const vacant = myStatuses.filter((s) => s.kind === "vacant").length;
      const occupied = myStatuses.filter((s) => s.kind === "occupied").length;
      const myMedia = media.filter((m) => myStatuses.some((s) => s.roomId === m.roomId));
      const myBlocks = blocks.filter((b) => b.ownerId === o.id);
      const pendingBlocks = myBlocks.filter((b) => b.state === "pending").length;
      const myProps = properties.filter((p) => o.propertyIds.includes(p.id));
      const myRoomsCount = myStatuses.length || rooms.filter((r) => myProps.some((p) => p.id === r.propertyId)).length;
      const lockRate = Math.round(locked / total * 100);
      const verifyRate = Math.round(verified / total * 100);
      return {
        owner: o,
        compliance: c,
        total: myStatuses.length,
        locked,
        verified,
        vacant,
        occupied,
        mediaCount: myMedia.length,
        pendingBlocks,
        totalBlocks: myBlocks.length,
        myRoomsCount,
        lockRate,
        verifyRate
      };
    }).sort((a, b) => b.compliance.score - a.compliance.score);
  }, [owners, properties, rooms, roomStatuses, media, blocks, complianceFor]);
  const best = data[0];
  const worst = data[data.length - 1];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pb-12", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:38:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "flex items-end justify-between flex-wrap gap-3", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:39:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:40:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:41:11", children: "HR · Owner Performance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-semibold tracking-tight", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:42:11", children: "Owners Compare" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:43:11", children: [
        "Side-by-side trust, lock rate, and response across all ",
        owners.length,
        " owners."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CoachInline, { page: "owners-compare", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:49:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:52:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Top performer", value: best.owner.name, sub: `Trust ${best.compliance.score} · ${best.verifyRate}% verified`, tone: "success", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:53:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Needs help", value: worst.owner.name, sub: `Trust ${worst.compliance.score} · ${worst.lockRate}% locked`, tone: "destructive", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:54:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Open requests",
          value: String(data.reduce((a, x) => a + x.pendingBlocks, 0)),
          sub: `across ${data.filter((x) => x.pendingBlocks > 0).length} owners`,
          tone: "warning",
          "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:55:9"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-lg border border-border bg-card overflow-hidden", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:64:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center gap-2", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:65:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:66:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:67:11", children: "Side-by-side" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:69:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[12px]", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:70:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:71:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:72:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:73:17", children: "Owner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:74:17", children: "Tier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:75:17", children: "Trust" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:76:17", children: "Rooms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:77:17", children: "Verified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:78:17", children: "Locked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:79:17", children: "Vacant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:80:17", children: "Media" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:81:17", children: "Pending blocks" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:84:13", children: data.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 hover:bg-muted/30", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:86:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:87:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:88:21", children: row.owner.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-mono", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:89:21", children: row.owner.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:91:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TierPill, { tier: row.compliance.tier, "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:92:21" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:94:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:95:21", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
              "font-mono font-semibold",
              row.compliance.score >= 90 ? "text-success" : row.compliance.score >= 70 ? "text-info" : "text-destructive"
            ), "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:96:23", children: row.compliance.score }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreBar, { value: row.compliance.score, "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:100:23" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right font-mono", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:103:19", children: row.myRoomsCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-right", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:104:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:105:21", children: row.verified }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-[10px]", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:106:21", children: [
              " · ",
              row.verifyRate,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-right", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:108:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-mono", row.lockRate > 30 ? "text-destructive" : ""), "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:109:21", children: row.locked }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-[10px]", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:110:21", children: [
              " · ",
              row.lockRate,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right font-mono", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:112:19", children: row.vacant }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right font-mono", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:113:19", children: row.mediaCount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:114:19", children: row.pendingBlocks > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-warning", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:116:25", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:116:87" }),
            row.pendingBlocks
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:117:25", children: "—" }) })
        ] }, row.owner.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:127:7", children: data.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 space-y-2", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:129:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:130:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:131:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:132:17", children: row.owner.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:133:17", children: [
            row.myRoomsCount,
            " rooms · ",
            row.owner.propertyIds.length,
            " property"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TierPill, { tier: row.compliance.tier, "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:135:15" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:137:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3" }), label: "Trust", value: String(row.compliance.score), "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:138:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3 w-3" }), label: "Verified", value: `${row.verifyRate}%`, "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:139:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }), label: "Locked", value: `${row.lockRate}%`, tone: row.lockRate > 30 ? "destructive" : void 0, "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:140:15" })
      ] }),
      row.pendingBlocks > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-warning inline-flex items-center gap-1", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:143:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:144:17" }),
        " ",
        row.pendingBlocks,
        " block request",
        row.pendingBlocks > 1 ? "s" : "",
        " awaiting decision"
      ] })
    ] }, row.owner.id)) })
  ] });
}
__name(OwnersCompare, "OwnersCompare");
__name2(OwnersCompare, "OwnersCompare");
function SummaryCard({ label, value, sub, tone }) {
  const map = {
    success: "border-success/30 bg-success/5",
    destructive: "border-destructive/30 bg-destructive/5",
    warning: "border-warning/30 bg-warning/5"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-lg border p-4", map[tone]), "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:161:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-mono", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:162:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold mt-1", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:163:7", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:164:7", children: sub })
  ] });
}
__name(SummaryCard, "SummaryCard");
__name2(SummaryCard, "SummaryCard");
function TierPill({ tier }) {
  const map = {
    priority: "bg-success/15 text-success border-success/30",
    standard: "bg-info/10 text-info border-info/30",
    throttled: "bg-destructive/10 text-destructive border-destructive/30"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold", map[tier]), "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:176:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:177:7" }),
    tier
  ] });
}
__name(TierPill, "TierPill");
__name2(TierPill, "TierPill");
function ScoreBar({ value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1.5 w-12 rounded-full bg-muted overflow-hidden", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:185:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "block h-full",
        value >= 90 ? "bg-success" : value >= 70 ? "bg-info" : "bg-destructive"
      ),
      style: { width: `${value}%` },
      "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:186:7"
    }
  ) });
}
__name(ScoreBar, "ScoreBar");
__name2(ScoreBar, "ScoreBar");
function Stat({ icon, label, value, tone }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-background/60 p-2", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:199:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground inline-flex items-center gap-0.5 justify-center", "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:200:7", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-display font-semibold text-sm mt-0.5", tone === "destructive" && "text-destructive"), "data-tsd-source": "/src/myt/pages/OwnersCompare.tsx:203:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/owners-compare.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnersCompare, { "data-tsd-source": "/src/routes/myt/owners-compare.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
