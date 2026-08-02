var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { g as getRegistry, s as subscribeRegistry, d as dailyTruthPhase, c as closeDeal } from "./owner-registry-DqLOx3Qf.mjs";
import { X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, B as Badge, k as Button, q as cn, a3 as glueBus } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "./use-toast-BlKShdOI.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { g as TriangleAlert, K as MapPin, b8 as Lock, i as ShieldCheck, l as CircleCheck, ap as Play, J as CalendarPlus, e as Copy } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "../_libs/isbot.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function useRegistry() {
  const [data, setData] = reactExports.useState(() => getRegistry());
  reactExports.useEffect(() => subscribeRegistry(() => setData(getRegistry())), []);
  return data;
}
__name(useRegistry, "useRegistry");
__name2(useRegistry, "useRegistry");
function SalesInventoryTruth() {
  const owners = useRegistry();
  const [area, setArea] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("sellable");
  const [q, setQ] = reactExports.useState("");
  const phase = dailyTruthPhase();
  const flat = reactExports.useMemo(() => {
    const rows = [];
    owners.forEach(
      (o) => o.properties.forEach(
        (p) => p.rooms.forEach(
          (r) => rows.push({ ...r, ownerId: o.id, ownerName: o.name })
        )
      )
    );
    return rows;
  }, [owners]);
  const areas = reactExports.useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    flat.forEach((r) => s.add(r.area));
    return Array.from(s).sort();
  }, [flat]);
  const filtered = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    return flat.filter((r) => {
      if (area !== "all" && r.area !== area) return false;
      if (statusFilter === "sellable") {
        if (r.lockedUnsellable) return false;
        if (!(r.status === "vacant" || r.status === "vacating" || r.status === "held")) return false;
      } else if (statusFilter === "vacant") {
        if (r.status !== "vacant") return false;
      } else if (statusFilter === "vacating") {
        if (r.status !== "vacating") return false;
      } else if (statusFilter === "held") {
        if (r.status !== "held") return false;
      } else if (statusFilter === "booked") {
        if (r.status !== "booked") return false;
      } else if (statusFilter === "locked") {
        if (!r.lockedUnsellable) return false;
      }
      if (!term) return true;
      return r.id.toLowerCase().includes(term) || r.pgName.toLowerCase().includes(term) || r.area.toLowerCase().includes(term) || r.ownerName.toLowerCase().includes(term) || r.ownerId.toLowerCase().includes(term);
    });
  }, [flat, area, statusFilter, q]);
  const grouped = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((r) => {
      const list = map.get(r.area) || [];
      list.push(r);
      map.set(r.area, list);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);
  const totals = {
    sellable: flat.filter(
      (r) => !r.lockedUnsellable && (r.status === "vacant" || r.status === "vacating" || r.status === "held")
    ).length,
    held: flat.filter((r) => r.status === "held").length,
    booked: flat.filter((r) => r.status === "booked").length,
    locked: flat.filter((r) => r.lockedUnsellable).length,
    areas: areas.length,
    rooms: flat.length
  };
  const pitch = /* @__PURE__ */ __name2((r) => {
    glueBus.publish({
      type: "team.lead.pitched",
      leadId: `manual-${Date.now()}`,
      roomId: r.id,
      tcmId: "sales"
    });
    toast({ title: "Pitch logged", description: `${r.pgName} · ${r.type}` });
  }, "pitch");
  const requestBlock = /* @__PURE__ */ __name2((r) => {
    glueBus.publish({
      type: "team.block.requested",
      blockId: `blk-${Date.now()}`,
      roomId: r.id,
      leadId: `manual-${Date.now()}`,
      ownerId: r.ownerId
    });
    toast({
      title: "Block requested",
      description: `Owner notified · 15 min auto-expire`
    });
  }, "requestBlock");
  const close = /* @__PURE__ */ __name2((r) => {
    closeDeal(r.id);
    toast({ title: "Deal closed", description: `${r.pgName} · ${r.type} → booked` });
  }, "close");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pb-12", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:149:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-2 md:flex-row md:items-end md:justify-between", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:150:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:151:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:152:11", children: "Sales Inventory Truth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:155:11", children: "Every sellable room, owner-confirmed, with Room IDs ready for visits and blocks. No ghost selling." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[11px]", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:160:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Sellable", value: totals.sellable, tone: "success", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:161:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Held", value: totals.held, tone: "accent", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:162:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Booked", value: totals.booked, tone: "info", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:163:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Locked", value: totals.locked, tone: "danger", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:164:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Areas", value: totals.areas, "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:165:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total rooms", value: totals.rooms, "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:166:11" })
      ] })
    ] }),
    phase === "locked" && totals.locked > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-destructive/30 bg-destructive/5 p-2 text-[11px] flex items-center gap-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:171:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5 text-destructive", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:172:11" }),
      totals.locked,
      " room",
      totals.locked > 1 ? "s" : "",
      " hidden — owner missed today's truth check. Don't sell these."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 rounded-xl border border-border bg-card p-3", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:178:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search Room ID, PG, owner…",
          value: q,
          onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"),
          className: "max-w-xs h-8 text-xs",
          "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:179:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: area, onValueChange: setArea, "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:185:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-40 text-xs", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:186:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:187:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:189:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:190:13", children: "All areas" }),
          areas.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: a, "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:192:15", children: a }, a))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:198:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 w-40 text-xs", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:199:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:200:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:202:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sellable", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:203:13", children: "Sellable (incl held)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:204:13", children: "Vacant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacating", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:205:13", children: "Vacating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "held", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:206:13", children: "Held for Gharpayy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "booked", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:207:13", children: "Booked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "locked", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:208:13", children: "Locked / unverified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:209:13", children: "All statuses" })
        ] })
      ] })
    ] }),
    grouped.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:215:9", children: "No rooms match those filters." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:220:7", children: grouped.map(([areaName, rows]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:222:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:223:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:224:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold uppercase tracking-wider", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:225:15", children: areaName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:226:15", children: [
          "· ",
          rows.length,
          " rooms"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:228:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:229:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:230:17", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:231:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:232:21", children: "Room ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:233:21", children: "PG / Owner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:234:21", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:235:21", children: "Beds" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:236:21", children: "Rent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:237:21", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:238:21", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:241:17", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: cn(
              "border-t border-border align-middle",
              r.lockedUnsellable && "opacity-50"
            ),
            "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:243:21",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-mono text-[10px]", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:250:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "hover:underline",
                  onClick: /* @__PURE__ */ __name2(() => {
                    navigator.clipboard?.writeText(r.id);
                    toast({ title: "Room ID copied", description: r.id });
                  }, "onClick"),
                  "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:251:25",
                  children: r.id
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:261:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:262:25", children: r.pgName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/owner",
                    search: { id: r.ownerId },
                    className: "text-[10px] text-accent hover:underline font-mono",
                    "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:263:25",
                    children: [
                      r.ownerId,
                      " · ",
                      r.ownerName
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 capitalize", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:271:23", children: r.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:272:23", children: r.beds }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right tabular-nums", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:273:23", children: [
                "₹",
                r.rent.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:276:23", children: r.lockedUnsellable ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "outline",
                  className: "text-[10px] bg-destructive/10 text-destructive border-destructive/30",
                  "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:278:27",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-2.5 w-2.5 mr-1", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:282:29" }),
                    "locked"
                  ]
                }
              ) : r.status === "held" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] bg-accent/15 text-accent-foreground border-accent/30", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:286:27", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-2.5 w-2.5 mr-1", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:287:29" }),
                "held for Gharpayy"
              ] }) : r.status === "booked" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] bg-info/10 text-info border-info/30", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:291:27", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-2.5 w-2.5 mr-1", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:292:29" }),
                "booked"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] capitalize", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:296:27", children: [
                r.status,
                r.verifiedToday && " ✓"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:302:23", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:303:25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-[10px]",
                    disabled: r.lockedUnsellable,
                    onClick: /* @__PURE__ */ __name2(() => pitch(r), "onClick"),
                    title: "Log virtual tour / pitch",
                    "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:304:27",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:312:29" }),
                      " Pitch"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-[10px]",
                    disabled: r.lockedUnsellable,
                    onClick: /* @__PURE__ */ __name2(() => requestBlock(r), "onClick"),
                    title: "Request 15-min block",
                    "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:314:27",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:322:29" }),
                      " Block"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `/visit-war?roomId=${encodeURIComponent(r.id)}`,
                    className: cn(
                      "inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 text-[10px] hover:bg-muted",
                      r.lockedUnsellable && "pointer-events-none"
                    ),
                    title: "Schedule visit",
                    "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:324:27",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPlus, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:332:29" }),
                      " Visit"
                    ]
                  }
                ),
                (r.status === "held" || r.status === "vacant" || r.status === "vacating") && !r.lockedUnsellable && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    className: "h-7 text-[10px]",
                    onClick: /* @__PURE__ */ __name2(() => close(r), "onClick"),
                    title: "Close deal — hotel-style",
                    "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:335:29",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:341:31" }),
                      " Close"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted",
                    onClick: /* @__PURE__ */ __name2(() => {
                      navigator.clipboard?.writeText(r.id);
                      toast({ title: "Room ID copied", description: r.id });
                    }, "onClick"),
                    title: "Copy Room ID",
                    "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:345:27",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:353:29" })
                  }
                )
              ] }) })
            ]
          },
          r.id
        )) })
      ] }) })
    ] }, areaName)) })
  ] });
}
__name(SalesInventoryTruth, "SalesInventoryTruth");
__name2(SalesInventoryTruth, "SalesInventoryTruth");
function Stat({
  label,
  value,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card px-2.5 py-1", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:379:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:380:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "font-display text-sm font-semibold tabular-nums",
          tone === "success" && "text-success",
          tone === "danger" && "text-destructive",
          tone === "accent" && "text-accent-foreground",
          tone === "info" && "text-info"
        ),
        "data-tsd-source": "/src/owner/pages/SalesInventoryTruth.tsx:383:7",
        children: value
      }
    )
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/inventory-truth.tsx:17:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SalesInventoryTruth, { "data-tsd-source": "/src/routes/inventory-truth.tsx:18:7" }) }), "SplitComponent");
export {
  SplitComponent as component
};
