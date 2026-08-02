var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, V as ScrollArea } from "./AppShell-BN067m2r.mjs";
import { P as PGS, k as Button, C as Card, X as Input, B as Badge, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent } from "./router-xBhBcQRf.mjs";
import { C as Checkbox } from "./checkbox-Dekdl1wT.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useOwnerBookings, O as OwnerBookingCard, c as computeTotals, L as LIFECYCLE_LABEL } from "./OwnerBookingCard-CITJ_ieL.mjs";
import { e as emptyDraft, c as applyProperty, f as draftToCreateInput } from "./sync-cTWERejF.mjs";
import "../_libs/react-dom.mjs";
import { B as Building2, S as Sparkles, aS as Trash2, a3 as Search, bV as ArrowUpDown, s as Clock, l as CircleCheck, bM as CircleX, bb as Share2, Z as Zap, ac as Send, bq as Download, aW as ChevronLeft, q as ChevronRight, g as TriangleAlert } from "../_libs/lucide-react.mjs";

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
import "../_libs/radix-ui__react-checkbox.mjs";
import "./separator-LqpXD2d-.mjs";
import "../_libs/radix-ui__react-separator.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const NAMES = [
  "Aarav Mehta",
  "Sneha Iyer",
  "Rohan Kapoor",
  "Priya Sharma",
  "Karthik Rao",
  "Ananya Singh",
  "Vikram Patel",
  "Meera Nair",
  "Aditya Joshi",
  "Ishita Verma",
  "Rahul Bose",
  "Tanvi Desai",
  "Siddharth Menon",
  "Kavya Reddy",
  "Arjun Pillai",
  "Diya Khanna",
  "Manish Gupta",
  "Riya Bhatt",
  "Yash Agrawal",
  "Pooja Shetty"
];
const COMPANIES = ["Razorpay", "Flipkart", "Swiggy", "Zomato", "Cred", "PhonePe", "Christ Univ.", "Manipal", "Infosys", "TCS"];
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
__name(rand, "rand");
__name2(rand, "rand");
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
__name(randInt, "randInt");
__name2(randInt, "randInt");
const STAGE_PLAN = [
  { weight: 2, status: "shared_with_owner" },
  { weight: 2, status: "viewed_by_owner" },
  { weight: 3, status: "acknowledged", decision: "approve" },
  { weight: 2, status: "room_ready", decision: "approve", readyAll: true },
  { weight: 2, status: "move_in_approved", decision: "approve", readyAll: true, payAll: true },
  { weight: 2, status: "completed", decision: "approve", readyAll: true, payAll: true },
  { weight: 1, status: "rejected", decision: "reject" }
];
function pickStage() {
  const total = STAGE_PLAN.reduce((s, p) => s + p.weight, 0);
  let r = Math.random() * total;
  for (const p of STAGE_PLAN) {
    if ((r -= p.weight) <= 0) return p;
  }
  return STAGE_PLAN[0];
}
__name(pickStage, "pickStage");
__name2(pickStage, "pickStage");
function simulateBookings(count = 50, propertyCount = 10) {
  const store = useOwnerBookings.getState();
  const pgs = [...PGS].sort(() => Math.random() - 0.5).slice(0, Math.min(propertyCount, PGS.length));
  const created = [];
  for (let i = 0; i < count; i++) {
    const pg = rand(pgs);
    let d = emptyDraft();
    d = applyProperty(d, pg);
    const name = rand(NAMES) + " " + String.fromCharCode(65 + i % 26);
    d.customer = {
      name,
      phone: `+91 9${randInt(1e8, 999999999)}`,
      gender: Math.random() > 0.5 ? "male" : "female",
      occupation: Math.random() > 0.4 ? "working" : "student",
      companyOrCollege: rand(COMPANIES),
      emergencyName: "Emergency " + name.split(" ")[0],
      emergencyPhone: `+91 9${randInt(1e8, 999999999)}`
    };
    d.inventory.floor = String(randInt(1, 4));
    d.inventory.roomNumber = `${randInt(101, 410)}`;
    d.inventory.bedNumber = rand(["A", "B", "C"]);
    d.rent = randInt(9, 22) * 1e3;
    d.deposit = d.rent * 2;
    d.bookingAmt = randInt(2, 6) * 1e3;
    const daysOut = randInt(-5, 14);
    d.moveIn.date = new Date(Date.now() + daysOut * 864e5).toISOString().slice(0, 10);
    d.specialRequests = Math.random() > 0.5 ? [rand(["Quiet room", "Lower floor", "Veg-only floor", "Attached washroom", "Early check-in", "Extra mattress"])] : [];
    const booking = store.createBooking(
      draftToCreateInput(d, { createdBy: rand(["Ravi", "Aisha", "Karan", "Meera"]) })
    );
    created.push(booking.id);
    const stage = pickStage();
    const fresh = useOwnerBookings.getState();
    fresh.shareWithOwner(booking.id, "system");
    if (stage.status === "shared_with_owner") continue;
    fresh.markViewed(booking.id, "owner:" + (pg.owner?.name ?? "owner"));
    if (stage.status === "viewed_by_owner") continue;
    if (stage.decision) {
      fresh.recordOwnerDecision(
        booking.id,
        stage.decision,
        stage.decision === "reject" ? rand(["Room under maintenance", "Owner unreachable", "Tenant conflict"]) : stage.decision === "approve_with_conditions" ? "Ready in 24h" : void 0,
        "owner:" + (pg.owner?.name ?? "owner")
      );
    }
    if (stage.readyAll) fresh.markAllReady(booking.id, "owner:" + (pg.owner?.name ?? "owner"));
    if (stage.payAll) {
      const b2 = useOwnerBookings.getState().bookings.find((x) => x.id === booking.id);
      b2?.payments.forEach((p) => {
        if (p.status === "pending") useOwnerBookings.getState().markPaymentReceived(booking.id, p.id, "sales");
      });
    } else if (Math.random() > 0.5) {
      const b2 = useOwnerBookings.getState().bookings.find((x) => x.id === booking.id);
      const first = b2?.payments.find((p) => p.status === "pending");
      if (first) useOwnerBookings.getState().markPaymentReceived(booking.id, first.id, "sales");
    }
    if (stage.status === "move_in_approved" || stage.status === "completed") {
      useOwnerBookings.getState().approveMoveIn(booking.id, "owner");
    }
    if (stage.status === "completed") {
      useOwnerBookings.getState().completeBooking(booking.id, "system");
    }
  }
  return created.length;
}
__name(simulateBookings, "simulateBookings");
__name2(simulateBookings, "simulateBookings");
function clearAllBookings() {
  useOwnerBookings.setState({ bookings: [] });
}
__name(clearAllBookings, "clearAllBookings");
__name2(clearAllBookings, "clearAllBookings");
function PropertyBookingsAdmin() {
  const {
    bookings
  } = useOwnerBookings();
  const [q, setQ] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(/* @__PURE__ */ new Set());
  const [cursor, setCursor] = reactExports.useState(0);
  const [sortKey, setSortKey] = reactExports.useState("count");
  const [tab, setTab] = reactExports.useState("review");
  const groups = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    for (const b of bookings) {
      const key = b.inventory.propertyId;
      if (!m.has(key)) m.set(key, {
        propertyId: key,
        propertyName: b.inventory.propertyName,
        bookings: []
      });
      m.get(key).bookings.push(b);
    }
    return Array.from(m.values());
  }, [bookings]);
  const filteredGroups = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = term ? groups.filter((g) => g.propertyName.toLowerCase().includes(term)) : groups;
    return [...list].sort((a, b) => {
      const sa = statsFor(a.bookings);
      const sb = statsFor(b.bookings);
      switch (sortKey) {
        case "collection":
          return collectionPct(sb) - collectionPct(sa);
        case "readiness":
          return readinessPct(sb) - readinessPct(sa);
        case "pending":
          return sb.pending - sa.pending;
        case "issues":
          return sb.issues - sa.issues;
        default:
          return sb.count - sa.count;
      }
    });
  }, [groups, q, sortKey]);
  const reviewList = reactExports.useMemo(() => {
    return bookings.filter((b) => selected.has(b.inventory.propertyId)).sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
  }, [bookings, selected]);
  const current = reviewList[cursor];
  const selectionTotals = reactExports.useMemo(() => statsFor(reviewList), [reviewList]);
  function toggleProperty(id) {
    setSelected((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setCursor(0);
  }
  __name(toggleProperty, "toggleProperty");
  __name2(toggleProperty, "toggleProperty");
  function selectAll() {
    setSelected(new Set(filteredGroups.map((g) => g.propertyId)));
    setCursor(0);
  }
  __name(selectAll, "selectAll");
  __name2(selectAll, "selectAll");
  function clearAll() {
    setSelected(/* @__PURE__ */ new Set());
    setCursor(0);
  }
  __name(clearAll, "clearAll");
  __name2(clearAll, "clearAll");
  const store = useOwnerBookings();
  function bulkShare() {
    let n = 0;
    reviewList.forEach((b) => {
      if (b.status === "created") {
        store.shareWithOwner(b.id, "bulk");
        n++;
      }
    });
    toast.success(`Shared ${n} bookings with owners`);
  }
  __name(bulkShare, "bulkShare");
  __name2(bulkShare, "bulkShare");
  function bulkMarkReady() {
    let n = 0;
    reviewList.forEach((b) => {
      if (b.status === "acknowledged") {
        store.markAllReady(b.id, "bulk");
        n++;
      }
    });
    toast.success(`Marked ${n} rooms ready`);
  }
  __name(bulkMarkReady, "bulkMarkReady");
  __name2(bulkMarkReady, "bulkMarkReady");
  function bulkApproveMoveIn() {
    let n = 0;
    reviewList.forEach((b) => {
      if (b.status === "room_ready") {
        store.approveMoveIn(b.id, "bulk");
        n++;
      }
    });
    toast.success(`Approved move-in for ${n} bookings`);
  }
  __name(bulkApproveMoveIn, "bulkApproveMoveIn");
  __name2(bulkApproveMoveIn, "bulkApproveMoveIn");
  function bulkComplete() {
    let n = 0;
    reviewList.forEach((b) => {
      if (b.status === "move_in_approved") {
        store.completeBooking(b.id, "bulk");
        n++;
      }
    });
    toast.success(`Completed check-in for ${n} bookings`);
  }
  __name(bulkComplete, "bulkComplete");
  __name2(bulkComplete, "bulkComplete");
  function bulkReminder() {
    const due = reviewList.filter((b) => computeTotals(b).pending > 0).length;
    toast.success(`Payment reminders queued for ${due} bookings`);
  }
  __name(bulkReminder, "bulkReminder");
  __name2(bulkReminder, "bulkReminder");
  function exportCsv() {
    const rows = [["Property", "Customer", "Phone", "Room", "Status", "MoveIn", "Rent", "Deposit", "Expected", "Received", "Pending", "Readiness%"], ...reviewList.map((b) => {
      const t = computeTotals(b);
      return [b.inventory.propertyName, b.customer.name, b.customer.phone, `${b.inventory.roomNumber}/${b.inventory.bedNumber}`, LIFECYCLE_LABEL[b.status], new Date(b.moveIn.date).toLocaleDateString(), b.rent, b.deposit, t.expected, t.received, t.pending, Math.round(t.readyCount / t.totalReadiness * 100)];
    })];
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `property-bookings-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Exported ${reviewList.length} bookings`);
  }
  __name(exportCsv, "exportCsv");
  __name2(exportCsv, "exportCsv");
  function runSimulator() {
    const n = simulateBookings(50, 10);
    toast.success(`Seeded ${n} demo bookings across 10 properties`);
  }
  __name(runSimulator, "runSimulator");
  __name2(runSimulator, "runSimulator");
  function wipe() {
    if (!confirm("Delete ALL bookings? This cannot be undone.")) return;
    clearAllBookings();
    setSelected(/* @__PURE__ */ new Set());
    toast.success("All bookings cleared");
  }
  __name(wipe, "wipe");
  __name2(wipe, "wipe");
  const selectedBookings = reviewList;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:154:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:155:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:156:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl font-bold flex items-center gap-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:157:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:158:13" }),
          " Property-wise Booking Command"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:160:11", children: "Multi-select properties · walk bookings one-by-one · KPI / money / kanban views · bulk actions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:164:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: runSimulator, className: "h-8", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:165:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:166:13" }),
          " Seed 50 demo bookings"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: wipe, className: "h-8 text-red-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:168:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:169:13" }),
          " Wipe"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[340px_1fr] gap-4", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:174:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2 h-fit", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:176:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:177:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:178:13", children: "Properties" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:179:13", children: [
            selected.size,
            "/",
            groups.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:181:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:182:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"), placeholder: "Search property…", className: "pl-7 h-8", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:183:13" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:185:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px] flex-1", onClick: selectAll, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:186:13", children: "Select all" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px] flex-1", onClick: clearAll, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:187:13", children: "Clear" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:189:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "h-3 w-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:190:13" }),
          " Sort:",
          ["count", "collection", "readiness", "pending", "issues"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setSortKey(k), "onClick"), className: `px-1.5 py-0.5 rounded ${sortKey === k ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:192:15", children: k }, k))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[60vh] -mx-1 px-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:198:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:199:13", children: [
          filteredGroups.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs text-muted-foreground py-6", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:201:17", children: 'No properties yet. Click "Seed".' }),
          filteredGroups.map((g) => {
            const s = statsFor(g.bookings);
            const isSel = selected.has(g.propertyId);
            const colPct = collectionPct(s);
            const readyPct = readinessPct(s);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-start gap-2 p-2 rounded border cursor-pointer transition ${isSel ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:208:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: isSel, onCheckedChange: /* @__PURE__ */ __name2(() => toggleProperty(g.propertyId), "onCheckedChange"), className: "mt-0.5", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:212:21" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:213:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium truncate", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:214:23", children: g.propertyName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mt-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:215:23", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:216:25", children: s.count }),
                  s.pending > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] text-amber-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:217:43", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-2.5 w-2.5 mr-0.5", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:217:107" }),
                    s.pending
                  ] }),
                  s.ready > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] text-emerald-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:218:41", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-2.5 w-2.5 mr-0.5", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:218:107" }),
                    s.ready
                  ] }),
                  s.issues > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] text-red-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:219:42", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-2.5 w-2.5 mr-0.5", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:219:104" }),
                    s.issues
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 text-[10px]", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:221:23", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: colPct >= 80 ? "text-emerald-600" : colPct >= 50 ? "text-amber-600" : "text-red-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:222:25", children: [
                    "₹ ",
                    colPct,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: readyPct >= 80 ? "text-emerald-600" : readyPct >= 50 ? "text-amber-600" : "text-red-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:225:25", children: [
                    "🛏 ",
                    readyPct,
                    "%"
                  ] })
                ] })
              ] })
            ] }, g.propertyId);
          })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 space-y-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:238:9", children: selected.size === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-10 text-center text-muted-foreground text-sm", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:240:13", children: "Select one or more properties on the left to start." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:246:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 text-[12px]", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:247:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:248:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:249:21", children: selected.size }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:249:75", children: "properties" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:250:21", children: selectionTotals.count }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:250:83", children: "bookings" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:252:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:253:21", children: [
                "₹",
                selectionTotals.received.toLocaleString("en-IN"),
                " in"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:254:21", children: [
                "₹",
                (selectionTotals.expected - selectionTotals.received).toLocaleString("en-IN"),
                " due"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:255:21", children: [
                "Collection ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:255:38", children: [
                  collectionPct(selectionTotals),
                  "%"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:259:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: bulkShare, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:260:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:261:21" }),
              " Share with owners"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: bulkMarkReady, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:263:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:264:21" }),
              " Mark rooms ready"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: bulkApproveMoveIn, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:266:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:267:21" }),
              " Approve move-in"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: bulkComplete, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:269:19", children: "Complete check-in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: bulkReminder, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:272:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:273:21" }),
              " Payment reminders"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: exportCsv, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:275:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:276:21" }),
              " Export CSV"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: setTab, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:281:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:282:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "review", className: "text-xs", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:283:19", children: "Review one-by-one" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "kanban", className: "text-xs", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:284:19", children: "Owner War Board" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "money", className: "text-xs", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:285:19", children: "Money & Dues" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "kpis", className: "text-xs", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:286:19", children: "Property KPIs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "review", className: "space-y-3 mt-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:289:17", children: reviewList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-10 text-center text-muted-foreground text-sm", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:291:21", children: "No bookings." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 flex flex-wrap items-center justify-between gap-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:294:23", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:295:25", children: [
                "Booking ",
                cursor + 1,
                " of ",
                reviewList.length
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:296:25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8", onClick: /* @__PURE__ */ __name2(() => setCursor((c) => Math.max(0, c - 1)), "onClick"), disabled: cursor === 0, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:297:27", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:299:29" }),
                  " Prev"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8", onClick: /* @__PURE__ */ __name2(() => setCursor((c) => Math.min(reviewList.length - 1, c + 1)), "onClick"), disabled: cursor >= reviewList.length - 1, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:301:27", children: [
                  "Next ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:304:34" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 max-h-20 overflow-y-auto", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:308:23", children: reviewList.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => setCursor(i), "onClick"), className: `text-[10px] px-2 py-0.5 rounded border ${i === cursor ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/40"}`, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:310:27", children: [
              i + 1,
              ". ",
              b.customer.name.split(" ")[0],
              " · R",
              b.inventory.roomNumber
            ] }, b.id)) }),
            current && /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerBookingCard, { booking: current, mode: "sales", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:318:35" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "kanban", className: "mt-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:323:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KanbanBoard, { bookings: selectedBookings, onOpen: /* @__PURE__ */ __name2((id) => {
            const idx = reviewList.findIndex((b) => b.id === id);
            if (idx >= 0) {
              setCursor(idx);
              setTab("review");
            }
          }, "onOpen"), "data-tsd-source": "/src/routes/admin.property-bookings.tsx:324:19" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "money", className: "mt-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:330:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MoneyView, { bookings: selectedBookings, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:331:19" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "kpis", className: "mt-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:334:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(KpiView, { groups: filteredGroups.filter((g) => selected.has(g.propertyId)), "data-tsd-source": "/src/routes/admin.property-bookings.tsx:335:19" }) })
        ] })
      ] }) })
    ] })
  ] });
}
__name(PropertyBookingsAdmin, "PropertyBookingsAdmin");
__name2(PropertyBookingsAdmin, "PropertyBookingsAdmin");
function statsFor(list) {
  const acc = {
    count: list.length,
    expected: 0,
    received: 0,
    ready: 0,
    pending: 0,
    issues: 0,
    ackCount: 0,
    ackAvgHours: 0
  };
  let ackHoursSum = 0;
  for (const b of list) {
    const t = computeTotals(b);
    acc.expected += t.expected;
    acc.received += t.received;
    if (["room_ready", "move_in_approved", "completed"].includes(b.status)) acc.ready++;
    if (["created", "shared_with_owner", "viewed_by_owner"].includes(b.status)) acc.pending++;
    if (b.status === "rejected" || b.status === "cancelled") acc.issues++;
    if (b.sharedAt && b.acknowledgedAt) {
      ackHoursSum += (+new Date(b.acknowledgedAt) - +new Date(b.sharedAt)) / 36e5;
      acc.ackCount++;
    }
  }
  acc.ackAvgHours = acc.ackCount > 0 ? ackHoursSum / acc.ackCount : 0;
  return acc;
}
__name(statsFor, "statsFor");
__name2(statsFor, "statsFor");
function collectionPct(s) {
  return s.expected > 0 ? Math.round(s.received / s.expected * 100) : 0;
}
__name(collectionPct, "collectionPct");
__name2(collectionPct, "collectionPct");
function readinessPct(s) {
  return s.count > 0 ? Math.round(s.ready + s.count - s.pending - s.issues - s.ready >= 0 ? s.ready / s.count * 100 : 0) : 0;
}
__name(readinessPct, "readinessPct");
__name2(readinessPct, "readinessPct");
const KANBAN_COLS = [{
  id: ["created", "shared_with_owner", "viewed_by_owner"],
  label: "Pending Ack",
  tone: "border-amber-500/40 bg-amber-500/5"
}, {
  id: ["acknowledged"],
  label: "Acknowledged · Room Prep",
  tone: "border-blue-500/40 bg-blue-500/5"
}, {
  id: ["room_ready"],
  label: "Room Ready",
  tone: "border-teal-500/40 bg-teal-500/5"
}, {
  id: ["move_in_approved"],
  label: "Move-in Approved",
  tone: "border-emerald-500/40 bg-emerald-500/5"
}, {
  id: ["completed"],
  label: "Completed",
  tone: "border-green-700/40 bg-green-700/5"
}];
function KanbanBoard({
  bookings,
  onOpen
}) {
  const store = useOwnerBookings();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 xl:grid-cols-5 gap-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:384:5", children: KANBAN_COLS.map((col) => {
    const items = bookings.filter((b) => col.id.includes(b.status));
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `p-2 border ${col.tone}`, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:388:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] font-semibold mb-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:389:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:390:15", children: col.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:391:15", children: items.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 max-h-[55vh] overflow-y-auto", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:393:13", children: [
        items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground text-center py-4", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:394:38", children: "Empty" }),
        items.map((b) => {
          const t = computeTotals(b);
          const hoursStuck = b.sharedAt ? (Date.now() - +new Date(b.sharedAt)) / 36e5 : 0;
          const stuck = col.id[0] !== "completed" && col.id[0] !== "move_in_approved" && hoursStuck > 24;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: /* @__PURE__ */ __name2(() => onOpen(b.id), "onClick"), className: "rounded border bg-card p-1.5 cursor-pointer hover:border-primary/60 transition", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:400:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:402:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium truncate", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:403:23", children: b.customer.name }),
              stuck && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 text-red-500 shrink-0", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:404:33" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:406:21", children: [
              "R",
              b.inventory.roomNumber,
              "/",
              b.inventory.bedNumber,
              " · ₹",
              b.rent.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1 text-[10px]", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:409:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t.pending > 0 ? "text-amber-600" : "text-emerald-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:410:23", children: t.pending > 0 ? `₹${(t.pending / 1e3).toFixed(0)}k due` : "paid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:413:23", children: [
                Math.round(t.readyCount / t.totalReadiness * 100),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:415:21", children: [
              b.status === "created" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-5 text-[9px] px-1.5", onClick: /* @__PURE__ */ __name2((e) => {
                e.stopPropagation();
                store.shareWithOwner(b.id);
              }, "onClick"), "data-tsd-source": "/src/routes/admin.property-bookings.tsx:417:25", children: "Share" }),
              b.status === "acknowledged" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-5 text-[9px] px-1.5", onClick: /* @__PURE__ */ __name2((e) => {
                e.stopPropagation();
                store.markAllReady(b.id);
              }, "onClick"), "data-tsd-source": "/src/routes/admin.property-bookings.tsx:421:25", children: "Ready" }),
              b.status === "room_ready" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-5 text-[9px] px-1.5", onClick: /* @__PURE__ */ __name2((e) => {
                e.stopPropagation();
                store.approveMoveIn(b.id);
              }, "onClick"), "data-tsd-source": "/src/routes/admin.property-bookings.tsx:425:25", children: "Approve" }),
              b.status === "move_in_approved" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-5 text-[9px] px-1.5", onClick: /* @__PURE__ */ __name2((e) => {
                e.stopPropagation();
                store.completeBooking(b.id);
              }, "onClick"), "data-tsd-source": "/src/routes/admin.property-bookings.tsx:429:25", children: "Complete" })
            ] })
          ] }, b.id);
        })
      ] })
    ] }, col.label);
  }) });
}
__name(KanbanBoard, "KanbanBoard");
__name2(KanbanBoard, "KanbanBoard");
function MoneyView({
  bookings
}) {
  const store = useOwnerBookings();
  const buckets = {
    fresh: 0,
    week1: 0,
    week2: 0,
    overdue: 0
  };
  const rows = bookings.map((b) => {
    const t = computeTotals(b);
    const ageDays = (Date.now() - +new Date(b.createdAt)) / 864e5;
    let bucket = "fresh";
    if (t.pending > 0) {
      if (ageDays <= 7) buckets.fresh += t.pending, bucket = "fresh";
      else if (ageDays <= 15) buckets.week1 += t.pending, bucket = "week1";
      else if (ageDays <= 30) buckets.week2 += t.pending, bucket = "week2";
      else buckets.overdue += t.pending, bucket = "overdue";
    }
    return {
      b,
      t,
      ageDays,
      bucket
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:462:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:463:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AgingCard, { label: "0-7 days", amount: buckets.fresh, tone: "text-emerald-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:464:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AgingCard, { label: "8-15 days", amount: buckets.week1, tone: "text-amber-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:465:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AgingCard, { label: "16-30 days", amount: buckets.week2, tone: "text-orange-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:466:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AgingCard, { label: "30+ days", amount: buckets.overdue, tone: "text-red-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:467:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0 overflow-x-auto", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:469:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:470:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-left", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:471:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:472:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:473:15", children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:474:15", children: "Property · Room" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:475:15", children: "Expected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:476:15", children: "Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:477:15", children: "Pending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:478:15", children: "Age" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:479:15", children: "Pending lines" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:482:11", children: [
        rows.filter((r) => r.t.pending > 0).map(({
          b,
          t,
          ageDays
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t hover:bg-muted/20", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:484:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-medium", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:485:17", children: b.customer.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-muted-foreground truncate max-w-[200px]", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:486:17", children: [
            b.inventory.propertyName,
            " · R",
            b.inventory.roomNumber
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:489:17", children: [
            "₹",
            t.expected.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right text-emerald-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:490:17", children: [
            "₹",
            t.received.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right text-amber-600 font-semibold", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:491:17", children: [
            "₹",
            t.pending.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:492:17", children: [
            Math.round(ageDays),
            "d"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:493:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:494:19", children: b.payments.filter((p) => p.status === "pending").map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: /* @__PURE__ */ __name2(() => {
            store.markPaymentReceived(b.id, p.id);
            toast.success(`Marked ${p.label} received`);
          }, "onClick"), className: "text-[10px] px-1.5 py-0.5 rounded border border-border hover:border-emerald-500 hover:text-emerald-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:496:23", children: [
            p.label,
            " · ₹",
            p.amount.toLocaleString("en-IN")
          ] }, p.id)) }) })
        ] }, b.id)),
        rows.filter((r) => r.t.pending > 0).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:507:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 7, className: "p-6 text-center text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:507:19", children: "All bookings fully paid 🎉" }) })
      ] })
    ] }) })
  ] });
}
__name(MoneyView, "MoneyView");
__name2(MoneyView, "MoneyView");
function AgingCard({
  label,
  amount,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:518:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:519:7", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-lg font-bold ${tone}`, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:520:7", children: [
      "₹",
      amount.toLocaleString("en-IN")
    ] })
  ] });
}
__name(AgingCard, "AgingCard");
__name2(AgingCard, "AgingCard");
function KpiView({
  groups
}) {
  const [sort, setSort] = reactExports.useState("collection");
  const rows = groups.map((g) => ({
    g,
    s: statsFor(g.bookings)
  })).sort((a, b) => {
    switch (sort) {
      case "collection":
        return collectionPct(b.s) - collectionPct(a.s);
      case "readiness":
        return readinessPct(b.s) - readinessPct(a.s);
      case "pending":
        return b.s.pending - a.s.pending;
      case "issues":
        return b.s.issues - a.s.issues;
      default:
        return b.s.count - a.s.count;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-0 overflow-x-auto", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:539:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:540:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-left", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:541:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:542:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:543:13", children: "Property" }),
      ["count", "collection", "readiness", "pending", "issues"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "p-2 text-right cursor-pointer hover:text-primary", onClick: /* @__PURE__ */ __name2(() => setSort(k), "onClick"), "data-tsd-source": "/src/routes/admin.property-bookings.tsx:545:15", children: [
        k === "count" ? "Bookings" : k === "collection" ? "Collection %" : k === "readiness" ? "Ready %" : k === "pending" ? "Pending Ack" : "Issues",
        sort === k && " ↓"
      ] }, k)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:550:13", children: "Owner ack (avg h)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:551:13", children: "₹ Received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:552:13", children: "₹ Pending" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:555:9", children: [
      rows.map(({
        g,
        s
      }) => {
        const col = collectionPct(s);
        const rdy = readinessPct(s);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t hover:bg-muted/20", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:559:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-medium truncate max-w-[220px]", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:560:17", children: g.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:561:17", children: s.count }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `p-2 text-right font-semibold ${col >= 80 ? "text-emerald-600" : col >= 50 ? "text-amber-600" : "text-red-600"}`, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:562:17", children: [
            col,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: `p-2 text-right font-semibold ${rdy >= 80 ? "text-emerald-600" : rdy >= 50 ? "text-amber-600" : "text-red-600"}`, "data-tsd-source": "/src/routes/admin.property-bookings.tsx:563:17", children: [
            rdy,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:564:17", children: s.pending }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:565:17", children: s.issues }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:566:17", children: s.ackAvgHours > 0 ? s.ackAvgHours.toFixed(1) : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right text-emerald-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:567:17", children: [
            "₹",
            s.received.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right text-amber-600", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:568:17", children: [
            "₹",
            (s.expected - s.received).toLocaleString("en-IN")
          ] })
        ] }, g.propertyId);
      }),
      rows.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:572:33", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, className: "p-6 text-center text-muted-foreground", "data-tsd-source": "/src/routes/admin.property-bookings.tsx:572:37", children: "Select properties to view KPIs." }) })
    ] })
  ] }) });
}
__name(KpiView, "KpiView");
__name2(KpiView, "KpiView");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:24:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyBookingsAdmin, { "data-tsd-source": "/src/routes/admin.property-bookings.tsx:24:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
