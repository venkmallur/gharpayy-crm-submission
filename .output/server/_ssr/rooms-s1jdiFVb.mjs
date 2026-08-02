var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { an as useOwner, k as Button, q as cn, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, a5 as DialogDescription, U as Label, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, X as Input, a2 as DialogFooter } from "./router-xBhBcQRf.mjs";
import { S as Switch } from "./switch-CLXWRolJ.mjs";
import { C as Checkbox } from "./checkbox-Dekdl1wT.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { r as roomHeroClass } from "./room-hero-DK48BzyX.mjs";
import "../_libs/react-dom.mjs";
import { Z as Zap, B as Building2, t as Plus, b8 as Lock, S as Sparkles, I as IndianRupee, ay as Eye, bE as Camera, y as Calendar, b as Check, bg as CircleAlert } from "../_libs/lucide-react.mjs";

import "../_libs/unenv.mjs";




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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__react-checkbox.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function Countdown({ to, prefix = "", urgentBelowMs = 5 * 60 * 1e3 }) {
  const [now, setNow] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1e3);
    return () => clearInterval(t);
  }, []);
  if (now === null) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums", "data-tsd-source": "/src/owner/components/Countdown.tsx:11:28", children: "—" });
  const diff = Date.parse(to) - now;
  if (diff <= 0) return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono tabular-nums text-destructive", "data-tsd-source": "/src/owner/components/Countdown.tsx:13:25", children: [
    prefix,
    "expired"
  ] });
  const h = Math.floor(diff / 36e5);
  const m = Math.floor(diff % 36e5 / 6e4);
  const s = Math.floor(diff % 6e4 / 1e3);
  const txt = h > 0 ? `${h}h ${m}m` : m > 0 ? `${m}m ${String(s).padStart(2, "0")}s` : `${s}s`;
  const urgent = diff < urgentBelowMs;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono tabular-nums ${urgent ? "text-destructive font-medium" : ""}`, "data-tsd-source": "/src/owner/components/Countdown.tsx:19:10", children: [
    prefix,
    txt
  ] });
}
__name(Countdown, "Countdown");
__name2(Countdown, "Countdown");
function OwnerRooms() {
  const {
    currentOwnerId,
    owners,
    properties,
    rooms,
    roomStatuses,
    updateRoomStatus,
    markRoomVerified,
    toggleDedicated,
    bulkVerify,
    bulkRentDelta,
    addProperty,
    addRoom,
    media,
    truth,
    blocks
  } = useOwner();
  const owner = owners.find((o) => o.id === currentOwnerId) ?? owners[0];
  const myProps = reactExports.useMemo(
    () => properties.filter((p) => owner.propertyIds.includes(p.id)),
    [properties, owner.propertyIds]
  );
  const [editing, setEditing] = reactExports.useState(null);
  const [editForm, setEditForm] = reactExports.useState({
    kind: "occupied",
    vacatingDate: "",
    rentConfirmed: "",
    floorPrice: "",
    notes: ""
  });
  const [addPropOpen, setAddPropOpen] = reactExports.useState(false);
  const [propForm, setPropForm] = reactExports.useState({ name: "", area: "" });
  const [addRoomFor, setAddRoomFor] = reactExports.useState(null);
  const [roomForm, setRoomForm] = reactExports.useState({
    type: "double",
    bedsTotal: "2",
    price: "",
    floorPrice: ""
  });
  const [bulkOpen, setBulkOpen] = reactExports.useState(false);
  const [bulkSelected, setBulkSelected] = reactExports.useState([]);
  const [bulkAction, setBulkAction] = reactExports.useState("verify");
  const openEdit = /* @__PURE__ */ __name2((s) => {
    setEditForm({
      kind: s.kind,
      vacatingDate: s.vacatingDate ?? "",
      rentConfirmed: s.rentConfirmed?.toString() ?? "",
      floorPrice: s.floorPrice?.toString() ?? "",
      notes: s.notes ?? ""
    });
    setEditing(s);
  }, "openEdit");
  const submitEdit = /* @__PURE__ */ __name2(() => {
    if (!editing) return;
    const needsVac = editForm.kind === "vacating";
    if (needsVac && (!editForm.vacatingDate || !editForm.rentConfirmed)) {
      toast.error("Vacating needs date + rent");
      return;
    }
    updateRoomStatus(editing.roomId, {
      kind: editForm.kind,
      vacatingDate: needsVac ? editForm.vacatingDate : void 0,
      rentConfirmed: editForm.rentConfirmed ? Number(editForm.rentConfirmed) : void 0,
      floorPrice: editForm.floorPrice ? Number(editForm.floorPrice) : void 0,
      notes: editForm.notes || void 0
    });
    toast.success(`Room confirmed`, { description: "Synced with the team in real time." });
    setEditing(null);
  }, "submitEdit");
  const submitAddProperty = /* @__PURE__ */ __name2(() => {
    if (!propForm.name || !propForm.area) {
      toast.error("Name and area required");
      return;
    }
    addProperty(propForm);
    toast.success("Property added", { description: propForm.name });
    setPropForm({ name: "", area: "" });
    setAddPropOpen(false);
  }, "submitAddProperty");
  const submitAddRoom = /* @__PURE__ */ __name2(() => {
    if (!addRoomFor || !roomForm.price) {
      toast.error("Property and price required");
      return;
    }
    addRoom({
      propertyId: addRoomFor,
      type: roomForm.type,
      bedsTotal: Number(roomForm.bedsTotal) || 1,
      price: Number(roomForm.price),
      floorPrice: roomForm.floorPrice ? Number(roomForm.floorPrice) : void 0
    });
    toast.success(`Room added`, { description: "Now visible to your sales team." });
    setRoomForm({ type: "double", bedsTotal: "2", price: "", floorPrice: "" });
    setAddRoomFor(null);
  }, "submitAddRoom");
  const submitBulk = /* @__PURE__ */ __name2(() => {
    if (!bulkSelected.length) {
      toast.error("Select at least one room");
      return;
    }
    if (bulkAction === "verify") bulkVerify(bulkSelected);
    if (bulkAction === "rent_down_500") bulkRentDelta(bulkSelected, -500);
    if (bulkAction === "rent_up_500") bulkRentDelta(bulkSelected, 500);
    toast.success(`Applied to ${bulkSelected.length} rooms`);
    setBulkSelected([]);
    setBulkOpen(false);
  }, "submitBulk");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 pb-32", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:130:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-end justify-between flex-wrap gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:131:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:132:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl md:text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:133:11", children: "Update rooms · per-room precision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:134:11", children: "Confirm rooms anytime today. Warnings go at 11 AM, 2 PM and 7 PM before any 10 PM lock." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:136:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => setBulkOpen(true), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:137:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:138:13" }),
          " Bulk actions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => setAddPropOpen(true), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:140:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:141:13" }),
          " Add property"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => setAddRoomFor(myProps[0]?.id ?? null), "onClick"), disabled: !myProps.length, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:143:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:144:13" }),
          " Add room"
        ] })
      ] })
    ] }),
    truth.phase === "locked" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-destructive/30 bg-destructive/5 p-3 text-xs flex items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:150:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 text-destructive", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:151:11" }),
      " Window closed. Updates still allowed but rooms missed today's truth check."
    ] }),
    myProps.map((property) => {
      const propStatuses = roomStatuses.filter((s) => s.propertyId === property.id);
      const propRooms = rooms.filter((r) => r.propertyId === property.id);
      const sellable = propStatuses.filter((s) => s.verifiedToday && !s.lockedUnsellable && (s.kind === "vacant" || s.kind === "vacating")).length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:160:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:161:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:162:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-accent/10 border border-accent/30 grid place-items-center", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:163:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:164:19" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:166:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:167:19", children: property.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:168:19", children: [
                property.area,
                " · ",
                propRooms.length,
                " rooms · ",
                sellable,
                " sellable"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => setAddRoomFor(property.id), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:173:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:174:17" }),
            " Add room"
          ] })
        ] }),
        propStatuses.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 text-center text-xs text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:179:15", children: [
          "No rooms yet at ",
          property.name,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:184:13", children: propStatuses.map((s) => {
          const r = propRooms.find((x) => x.id === s.roomId);
          const m = media.find((x) => x.roomId === s.roomId);
          const hasMedia = !!m && m.photos.length >= 3 && !!m.videoUrl;
          const block = blocks.find((b) => b.roomId === s.roomId && b.state === "pending");
          const tone = s.lockedUnsellable ? "border-destructive/40" : s.verifiedToday ? "border-success/30" : "border-warning/40";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-xl border bg-card overflow-hidden flex flex-col", tone), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:192:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("h-20 relative flex items-end p-3", roomHeroClass(s.roomId)), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:194:21", children: [
              s.isDedicated && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-white/95 text-foreground px-2 py-0.5 text-[10px] font-mono font-bold uppercase shadow-sm", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:196:25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:197:27" }),
                " Dedicated"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:200:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-mono uppercase font-bold bg-white/90 text-foreground"
              ), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:201:25", children: s.kind }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:207:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9px] opacity-80 tracking-widest uppercase", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:208:25", children: "Room" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-display font-semibold leading-none capitalize", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:209:25", children: r?.type ?? "—" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2 flex-1 flex flex-col", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:214:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:215:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-display font-semibold tabular-nums", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:216:25", children: [
                  "₹",
                  (s.rentConfirmed ?? r?.currentPrice ?? 0).toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:219:25", children: "/mo" }),
                s.floorPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-[10px] text-muted-foreground inline-flex items-center gap-0.5", title: "Your floor price (private)", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:221:27", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:222:29" }),
                  "floor ",
                  s.floorPrice.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 text-[10px]", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:227:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 font-mono", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:228:25", children: [
                  r?.bedsTotal ?? 0,
                  " bed",
                  r && r.bedsTotal > 1 ? "s" : ""
                ] }),
                (s.views ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 font-mono", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:232:27", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:233:29" }),
                  " ",
                  s.views,
                  " views"
                ] }),
                block && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-warning/10 text-warning-foreground border border-warning/30 px-1.5 py-0.5 font-mono uppercase", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:237:27", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:238:29" }),
                  " Block req"
                ] }),
                !hasMedia && s.kind === "vacant" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/owner/media/$roomId",
                    params: { roomId: s.roomId },
                    className: "inline-flex items-center gap-1 rounded-md bg-info/10 text-info border border-info/30 px-1.5 py-0.5 font-mono uppercase",
                    "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:242:27",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-2.5 w-2.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:247:29" }),
                      " Add media"
                    ]
                  }
                )
              ] }),
              s.vacatingDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-warning-foreground inline-flex items-center gap-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:253:25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:254:27" }),
                " Vacant ",
                s.vacatingDate
              ] }),
              s.lockedUnsellable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-destructive font-medium", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:259:25", children: "⚠ Auto-locked — not verified after 3 warnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground inline-flex items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:262:23", children: [
                s.verifiedToday && !s.lockedUnsellable && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success inline-flex items-center gap-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:263:68", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:263:130" }),
                  " verified today"
                ] }),
                !s.verifiedToday && !s.lockedUnsellable && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-warning-foreground", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:264:69", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:264:142" }),
                  " not verified"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-1 flex items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:267:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:268:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: !!s.isDedicated,
                      onCheckedChange: /* @__PURE__ */ __name2(() => {
                        toggleDedicated(s.roomId);
                        toast(s.isDedicated ? "Removed from dedicated" : "Added to dedicated supply");
                      }, "onCheckedChange"),
                      disabled: s.kind === "occupied",
                      "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:269:27"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:277:27", children: "Dedicated" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => markRoomVerified(s.roomId), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:279:25", children: "No change" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => openEdit(s), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:280:25", children: "Edit" })
              ] }),
              block && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground border-t border-border pt-1.5 mt-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:284:25", children: [
                "Block expires in ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, { to: block.expiresAt, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:285:44" })
              ] })
            ] })
          ] }, s.roomId);
        }) })
      ] }, property.id);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-4 left-4 right-4 z-40 md:hidden", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:298:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-2 flex gap-2 shadow-lg", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:299:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "flex-1", onClick: /* @__PURE__ */ __name2(() => setBulkOpen(true), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:300:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:301:13" }),
        " Bulk"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "flex-1", onClick: /* @__PURE__ */ __name2(() => setAddPropOpen(true), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:303:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:304:13" }),
        " Property"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "flex-1", onClick: /* @__PURE__ */ __name2(() => setAddRoomFor(myProps[0]?.id ?? null), "onClick"), disabled: !myProps.length, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:306:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:307:13" }),
        " Room"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!editing, onOpenChange: /* @__PURE__ */ __name2((o) => !o && setEditing(null), "onOpenChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:313:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:314:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:315:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:316:13", children: "Confirm room" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:317:13", children: "This is the source of truth. Sales sees this in seconds." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-1", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:319:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:320:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:321:15", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: editForm.kind, onValueChange: /* @__PURE__ */ __name2((v) => setEditForm((f) => ({ ...f, kind: v })), "onValueChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:322:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:323:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:323:32" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:324:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "occupied", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:325:19", children: "Occupied" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacating", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:326:19", children: "Vacating (date + rent)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:327:19", children: "Vacant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:328:19", children: "Blocked" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:332:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:333:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:334:17", children: "Confirmed rent ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: editForm.rentConfirmed, onChange: /* @__PURE__ */ __name2((e) => setEditForm((f) => ({ ...f, rentConfirmed: e.target.value })), "onChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:335:17" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:337:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:338:17", children: "Floor (private) ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: editForm.floorPrice, onChange: /* @__PURE__ */ __name2((e) => setEditForm((f) => ({ ...f, floorPrice: e.target.value })), "onChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:339:17" })
          ] })
        ] }),
        editForm.kind === "vacating" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:343:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:344:17", children: "Vacating date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: editForm.vacatingDate, onChange: /* @__PURE__ */ __name2((e) => setEditForm((f) => ({ ...f, vacatingDate: e.target.value })), "onChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:345:17" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:348:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:349:15", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editForm.notes, onChange: /* @__PURE__ */ __name2((e) => setEditForm((f) => ({ ...f, notes: e.target.value })), "onChange"), placeholder: "Optional", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:350:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:353:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: /* @__PURE__ */ __name2(() => setEditing(null), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:354:13", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submitEdit, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:355:13", children: "Save & verify" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addPropOpen, onOpenChange: setAddPropOpen, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:361:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:362:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:363:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:364:13", children: "Add property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:365:13", children: "Add a new building under your portfolio." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:367:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:368:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:369:15", children: "Property name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: propForm.name, onChange: /* @__PURE__ */ __name2((e) => setPropForm((f) => ({ ...f, name: e.target.value })), "onChange"), placeholder: "Sunshine Residency", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:370:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:372:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:373:15", children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: propForm.area, onChange: /* @__PURE__ */ __name2((e) => setPropForm((f) => ({ ...f, area: e.target.value })), "onChange"), placeholder: "Koramangala 5th Block", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:374:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:377:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: /* @__PURE__ */ __name2(() => setAddPropOpen(false), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:378:13", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submitAddProperty, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:379:13", children: "Add property" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!addRoomFor, onOpenChange: /* @__PURE__ */ __name2((o) => !o && setAddRoomFor(null), "onOpenChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:385:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:386:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:387:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:388:13", children: "Add room" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:389:13", children: properties.find((p) => p.id === addRoomFor)?.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:391:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:392:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:393:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:394:17", children: "Room type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: roomForm.type, onValueChange: /* @__PURE__ */ __name2((v) => setRoomForm((f) => ({ ...f, type: v })), "onValueChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:395:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:396:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:396:34" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:397:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:398:21", children: "Single" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "double", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:399:21", children: "Double" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "triple", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:400:21", children: "Triple" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "studio", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:401:21", children: "Studio" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:405:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:406:17", children: "Beds total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: roomForm.bedsTotal, onChange: /* @__PURE__ */ __name2((e) => setRoomForm((f) => ({ ...f, bedsTotal: e.target.value })), "onChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:407:17" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:410:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:411:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:412:17", children: "Expected rent ₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: roomForm.price, onChange: /* @__PURE__ */ __name2((e) => setRoomForm((f) => ({ ...f, price: e.target.value })), "onChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:413:17" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:415:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:416:17", children: "Floor price ₹ (private)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: roomForm.floorPrice, onChange: /* @__PURE__ */ __name2((e) => setRoomForm((f) => ({ ...f, floorPrice: e.target.value })), "onChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:417:17" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:421:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: /* @__PURE__ */ __name2(() => setAddRoomFor(null), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:422:13", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submitAddRoom, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:423:13", children: "Add room" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: bulkOpen, onOpenChange: setBulkOpen, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:429:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:430:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:431:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:432:13", children: "Bulk actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:433:13", children: "Apply the same change to many rooms — emergency lever only." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:435:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:436:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:437:15", children: "Action" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: bulkAction, onValueChange: /* @__PURE__ */ __name2((v) => setBulkAction(v), "onValueChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:438:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:439:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:439:32" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:440:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "verify", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:441:19", children: "Mark verified · no change" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rent_down_500", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:442:19", children: "Drop rent ₹500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "rent_up_500", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:443:19", children: "Raise rent ₹500" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:447:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:448:15", children: [
            "Pick rooms (",
            bulkSelected.length,
            " selected)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 overflow-y-auto rounded-md border border-border divide-y divide-border", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:449:15", children: roomStatuses.filter((s) => s.ownerId === owner.id).map((s) => {
            const r = rooms.find((x) => x.id === s.roomId);
            const p = properties.find((x) => x.id === s.propertyId);
            const checked = bulkSelected.includes(s.roomId);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 px-3 py-2 text-xs cursor-pointer hover:bg-muted/40", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:455:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked, onCheckedChange: /* @__PURE__ */ __name2((v) => {
                setBulkSelected((prev) => v ? [...prev, s.roomId] : prev.filter((x) => x !== s.roomId));
              }, "onCheckedChange"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:456:23" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 truncate", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:459:23", children: [
                p?.name,
                " · ",
                r?.type,
                " (",
                r?.bedsTotal,
                "b)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:460:23", children: [
                "₹",
                s.rentConfirmed?.toLocaleString() ?? "—"
              ] })
            ] }, s.roomId);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:467:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: /* @__PURE__ */ __name2(() => setBulkOpen(false), "onClick"), "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:468:13", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submitBulk, "data-tsd-source": "/src/owner/pages/OwnerRooms.tsx:469:13", children: "Apply" })
      ] })
    ] }) })
  ] });
}
__name(OwnerRooms, "OwnerRooms");
__name2(OwnerRooms, "OwnerRooms");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/rooms.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerRooms, { "data-tsd-source": "/src/routes/owner/rooms.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
