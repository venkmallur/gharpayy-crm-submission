var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { an as useOwner, T as Tabs, h as TabsList, j as TabsTrigger, C as Card, B as Badge } from "./router-xBhBcQRf.mjs";
import { u as useOwnerBookings, c as computeTotals, L as LIFECYCLE_LABEL, O as OwnerBookingCard } from "./OwnerBookingCard-CITJ_ieL.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { p as Bell, l as CircleCheck, W as Wallet, bA as CalendarCheck } from "../_libs/lucide-react.mjs";

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
import "./separator-LqpXD2d-.mjs";
import "../_libs/radix-ui__react-separator.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function OwnerBookingsView() {
  const {
    currentOwnerId
  } = useOwner();
  const {
    bookings,
    markViewed
  } = useOwnerBookings();
  const ownerBookings = reactExports.useMemo(() => bookings.filter((b) => b.ownerId === currentOwnerId), [bookings, currentOwnerId]);
  const buckets = reactExports.useMemo(() => ({
    pending: ownerBookings.filter((b) => !b.ownerDecision && b.status !== "cancelled"),
    upcoming: ownerBookings.filter((b) => b.ownerDecision && b.ownerDecision !== "reject" && b.status !== "completed" && b.status !== "cancelled"),
    completed: ownerBookings.filter((b) => b.status === "completed")
  }), [ownerBookings]);
  const [tab, setTab] = reactExports.useState("pending");
  const list = tab === "pending" ? buckets.pending : tab === "upcoming" ? buckets.upcoming : buckets.completed;
  const [openId, setOpenId] = reactExports.useState(list[0]?.id ?? null);
  const open = ownerBookings.find((b) => b.id === openId);
  if (open && open.status === "shared_with_owner" && !open.viewedAt) {
    queueMicrotask(() => markViewed(open.id));
  }
  const totalDue = ownerBookings.reduce((s, b) => s + computeTotals(b).pending, 0);
  const nextMoveIn = [...ownerBookings].filter((b) => b.status !== "completed" && b.status !== "cancelled").sort((a, b) => new Date(a.moveIn.date).getTime() - new Date(b.moveIn.date).getTime())[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:51:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:52:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:53:9", children: "My Bookings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:54:9", children: "Approve incoming bookings, confirm room readiness, and track every move-in." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:59:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4 text-amber-500" }), label: "Pending approval", value: buckets.pending.length.toString(), "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:60:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-emerald-500" }), label: "Upcoming check-ins", value: buckets.upcoming.length.toString(), "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:61:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-4 w-4" }), label: "Payments due", value: `₹${totalDue.toLocaleString("en-IN")}`, tone: totalDue > 0 ? "warn" : void 0, "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:62:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-4 w-4" }), label: "Next move-in", value: nextMoveIn ? new Date(nextMoveIn.moveIn.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short"
      }) : "—", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:63:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: tab, onValueChange: /* @__PURE__ */ __name2((v) => {
      setTab(v);
      setOpenId(null);
    }, "onValueChange"), "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:68:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:69:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "pending", className: "text-xs", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:70:11", children: [
        "Pending ack (",
        buckets.pending.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "upcoming", className: "text-xs", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:71:11", children: [
        "Upcoming (",
        buckets.upcoming.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "completed", className: "text-xs", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:72:11", children: [
        "Completed (",
        buckets.completed.length,
        ")"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[340px_1fr] gap-4", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:76:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 max-h-[70vh] overflow-y-auto pr-1", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:77:9", children: [
        list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 text-center text-xs text-muted-foreground", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:79:13", children: "Nothing here." }),
        list.map((b) => {
          const t = computeTotals(b);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: /* @__PURE__ */ __name2(() => setOpenId(b.id), "onClick"), className: `p-3 cursor-pointer border transition ${(openId ?? list[0]?.id) === b.id ? "border-primary ring-1 ring-primary" : "hover:border-primary/40"}`, "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:84:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:89:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm truncate", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:90:19", children: b.customer.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:91:19", children: LIFECYCLE_LABEL[b.status] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate mt-0.5", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:93:17", children: [
              "R",
              b.inventory.roomNumber,
              "/",
              b.inventory.bedNumber,
              " · Move-in ",
              new Date(b.moveIn.date).toLocaleDateString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center justify-between text-[11px]", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:96:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:97:19", children: [
                t.readyCount,
                "/",
                t.totalReadiness,
                " ready"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t.pending > 0 ? "text-amber-600" : "text-emerald-600", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:98:19", children: t.pending > 0 ? `₹${t.pending.toLocaleString("en-IN")} due` : "Fully paid" })
            ] })
          ] }, b.id);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:107:9", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerBookingCard, { booking: open, mode: "owner", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:109:13" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-10 text-center text-muted-foreground", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:111:13", children: "Select a booking to take action." }) })
    ] })
  ] });
}
__name(OwnerBookingsView, "OwnerBookingsView");
__name2(OwnerBookingsView, "OwnerBookingsView");
function Stat({
  icon,
  label,
  value,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:121:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-1", "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:122:7", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-lg font-bold ${tone === "warn" ? "text-amber-600" : ""}`, "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:123:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:15:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerBookingsView, { "data-tsd-source": "/src/routes/owner/booking-approvals.tsx:15:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
