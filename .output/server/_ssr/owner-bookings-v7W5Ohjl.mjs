var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell, u as useQuotations } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, Z as Dialog, _ as DialogTrigger, k as Button, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, C as Card, z as SelectItem, P as PGS, B as Badge, X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, a2 as DialogFooter, U as Label, T as Tabs, h as TabsList, j as TabsTrigger } from "./router-Cbs6ivkN.mjs";
import { u as useOwnerBookings, c as computeTotals, L as LIFECYCLE_LABEL, O as OwnerBookingCard } from "./OwnerBookingCard-BAOQcK4T.mjs";
import { e as emptyDraft, S as SOURCE_TONE, a as SOURCE_LABEL, b as applyLead, c as applyProperty, d as applyQuotation, f as draftToCreateInput } from "./sync-C6gR4zlG.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { t as Plus, Z as Zap, b9 as UserSearch, _ as House, k as FileText, X, s as Clock, l as CircleCheck, I as IndianRupee, a3 as Search } from "../_libs/lucide-react.mjs";
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
import "./separator-khanlWef.mjs";
import "../_libs/radix-ui__react-separator.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const SUGGESTED = [
  "Lower floor",
  "Quiet room",
  "Near window",
  "Early check-in",
  "Extra mattress",
  "AC room",
  "Attached washroom",
  "Veg-only floor"
];
function CreateBookingDialog({ trigger, leadId: initialLeadId, propertyId: initialPropertyId }) {
  const { createBooking } = useOwnerBookings();
  const leads = useApp((s) => s.leads);
  const quotations = useQuotations((s) => s.quotations);
  const [open, setOpen] = reactExports.useState(false);
  const [leadId, setLeadId] = reactExports.useState(initialLeadId ?? "");
  const [pgId, setPgId] = reactExports.useState(initialPropertyId ?? "");
  const [quotationId, setQuotationId] = reactExports.useState("");
  const [draft, setDraft] = reactExports.useState(() => emptyDraft());
  const [reqDraft, setReqDraft] = reactExports.useState("");
  const leadQuotations = reactExports.useMemo(
    () => leadId ? quotations.filter((q) => q.leadId === leadId) : quotations.slice(0, 30),
    [leadId, quotations]
  );
  function runSync(opts = {}) {
    const lId = opts.l ?? leadId;
    const pId = opts.p ?? pgId;
    const qId = opts.q ?? quotationId;
    let d = emptyDraft();
    if (lId) d = applyLead(d, leads.find((l) => l.id === lId));
    if (pId) d = applyProperty(d, PGS.find((p) => p.id === pId));
    if (qId) d = applyQuotation(d, quotations.find((q) => q.id === qId));
    setDraft(d);
  }
  __name(runSync, "runSync");
  __name2(runSync, "runSync");
  function selectLead(v) {
    const id = v === "__none" ? "" : v;
    setLeadId(id);
    const paid = id ? quotations.find((q) => q.leadId === id && q.status === "paid") : void 0;
    if (paid) setQuotationId(paid.id);
    if (paid?.propertyId) setPgId(paid.propertyId);
    runSync({ l: id, q: paid?.id ?? quotationId, p: paid?.propertyId ?? pgId });
  }
  __name(selectLead, "selectLead");
  __name2(selectLead, "selectLead");
  function selectPg(v) {
    const id = v === "__none" ? "" : v;
    setPgId(id);
    runSync({ p: id });
  }
  __name(selectPg, "selectPg");
  __name2(selectPg, "selectPg");
  function selectQuotation(v) {
    const id = v === "__none" ? "" : v;
    setQuotationId(id);
    const q = quotations.find((qq) => qq.id === id);
    if (q?.propertyId && !pgId) setPgId(q.propertyId);
    runSync({ q: id, p: q?.propertyId ?? pgId });
  }
  __name(selectQuotation, "selectQuotation");
  __name2(selectQuotation, "selectQuotation");
  function patch(key, value) {
    setDraft((d) => ({ ...d, [key]: value, source: { ...d.source, [key]: "manual" } }));
  }
  __name(patch, "patch");
  __name2(patch, "patch");
  function patchCustomer(key, value) {
    setDraft((d) => ({
      ...d,
      customer: { ...d.customer, [key]: value },
      source: { ...d.source, [`customer.${String(key)}`]: "manual" }
    }));
  }
  __name(patchCustomer, "patchCustomer");
  __name2(patchCustomer, "patchCustomer");
  function patchInventory(key, value) {
    setDraft((d) => ({
      ...d,
      inventory: { ...d.inventory, [key]: value },
      source: { ...d.source, [`inventory.${String(key)}`]: "manual" }
    }));
  }
  __name(patchInventory, "patchInventory");
  __name2(patchInventory, "patchInventory");
  function patchMoveIn(key, value) {
    setDraft((d) => ({
      ...d,
      moveIn: { ...d.moveIn, [key]: value },
      source: { ...d.source, [`moveIn.${String(key)}`]: "manual" }
    }));
  }
  __name(patchMoveIn, "patchMoveIn");
  __name2(patchMoveIn, "patchMoveIn");
  function addReq(text) {
    const t = text.trim();
    if (t && !draft.specialRequests.includes(t)) {
      setDraft((d) => ({ ...d, specialRequests: [...d.specialRequests, t] }));
    }
    setReqDraft("");
  }
  __name(addReq, "addReq");
  __name2(addReq, "addReq");
  function submit() {
    if (!draft.customer.name.trim() || !draft.customer.phone.trim() || !draft.inventory.propertyName.trim() || !draft.inventory.roomNumber.trim()) return;
    createBooking(draftToCreateInput(draft, { leadId: leadId || void 0 }));
    setOpen(false);
    setLeadId("");
    setPgId("");
    setQuotationId("");
    setDraft(emptyDraft());
  }
  __name(submit, "submit");
  __name2(submit, "submit");
  const synced = reactExports.useMemo(() => {
    const s = draft.source;
    return {
      lead: Object.values(s).filter((v) => v === "lead").length,
      property: Object.values(s).filter((v) => v === "property").length,
      quotation: Object.values(s).filter((v) => v === "quotation").length
    };
  }, [draft.source]);
  const isValid = !!draft.customer.name.trim() && !!draft.customer.phone.trim() && !!draft.inventory.propertyName.trim() && !!draft.inventory.roomNumber.trim();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: /* @__PURE__ */ __name2((o) => {
    setOpen(o);
    if (o) runSync();
  }, "onOpenChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:145:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:146:7", children: trigger ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:147:21", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:147:39" }),
      "New Owner Booking"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-4xl max-h-[92vh] overflow-y-auto", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:149:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:150:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:151:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-amber-500", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:152:13" }),
        " Create Owner Booking — Smart Sync"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 bg-gradient-to-br from-primary/5 to-transparent border-primary/30", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:157:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 md:grid-cols-3", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:158:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SourcePicker, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserSearch, { className: "h-3.5 w-3.5" }), label: "Lead", value: leadId, onChange: selectLead, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:159:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__none", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:160:15", children: "— none —" }),
            leads.slice(0, 60).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: l.id, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:162:17", children: [
              l.name,
              " · ",
              l.phone,
              " · ",
              l.preferredArea
            ] }, l.id))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SourcePicker, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-3.5 w-3.5" }), label: "Property", value: pgId, onChange: selectPg, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:167:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__none", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:168:15", children: "— none —" }),
            PGS.slice(0, 60).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: p.id, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:170:17", children: [
              p.actualName || p.name,
              " · ",
              p.area
            ] }, p.id))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SourcePicker, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }), label: "Quotation", value: quotationId, onChange: selectQuotation, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:175:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__none", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:176:15", children: "— none —" }),
            leadQuotations.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: q.id, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:178:17", children: [
              q.propertyName,
              " · ₹",
              q.discountedPrice.toLocaleString("en-IN"),
              " · ",
              q.status
            ] }, q.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 flex-wrap gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:184:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] flex-wrap", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:185:13", children: [
            synced.lead > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: SOURCE_TONE.lead, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:186:35", children: [
              synced.lead,
              " from Lead"
            ] }),
            synced.property > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: SOURCE_TONE.property, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:187:39", children: [
              synced.property,
              " from Property"
            ] }),
            synced.quotation > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: SOURCE_TONE.quotation, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:188:40", children: [
              synced.quotation,
              " from Quotation"
            ] }),
            synced.lead + synced.property + synced.quotation === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:190:17", children: "Pick a source above to auto-fill — anything missing, just type it in." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => runSync(), "onClick"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:193:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:194:15" }),
            " Resync"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 mt-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:199:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:200:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:201:13", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", src: draft.source["customer.name"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:202:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.name, onChange: /* @__PURE__ */ __name2((e) => patchCustomer("name", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:203:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", src: draft.source["customer.phone"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:205:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.phone, onChange: /* @__PURE__ */ __name2((e) => patchCustomer("phone", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:206:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:208:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:209:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.customer.gender, onValueChange: /* @__PURE__ */ __name2((v) => patchCustomer("gender", v), "onValueChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:210:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:211:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:211:34" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:212:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "male", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:213:21", children: "Male" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "female", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:214:21", children: "Female" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:215:21", children: "Other" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Occupation", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:219:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.customer.occupation, onValueChange: /* @__PURE__ */ __name2((v) => patchCustomer("occupation", v), "onValueChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:220:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:221:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:221:34" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:222:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "working", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:223:21", children: "Working Pro" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "student", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:224:21", children: "Student" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:225:21", children: "Other" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company / College", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:230:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.companyOrCollege, onChange: /* @__PURE__ */ __name2((e) => patchCustomer("companyOrCollege", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:231:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:233:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Emergency Name", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:234:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.emergencyName, onChange: /* @__PURE__ */ __name2((e) => patchCustomer("emergencyName", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:235:17" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Emergency Phone", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:237:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.customer.emergencyPhone, onChange: /* @__PURE__ */ __name2((e) => patchCustomer("emergencyPhone", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:238:17" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:243:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:244:13", children: "Room & Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Property", src: draft.source["inventory.propertyName"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:245:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.inventory.propertyName, onChange: /* @__PURE__ */ __name2((e) => patchInventory("propertyName", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:246:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:248:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Floor", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:249:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.inventory.floor, onChange: /* @__PURE__ */ __name2((e) => patchInventory("floor", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:249:36" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Room #", src: draft.source["inventory.roomNumber"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:250:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.inventory.roomNumber, onChange: /* @__PURE__ */ __name2((e) => patchInventory("roomNumber", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:251:17" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bed", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:253:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.inventory.bedNumber, onChange: /* @__PURE__ */ __name2((e) => patchInventory("bedNumber", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:253:34" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:255:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sharing", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:256:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.inventory.sharing, onValueChange: /* @__PURE__ */ __name2((v) => patchInventory("sharing", v), "onValueChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:257:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:258:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:258:34" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:259:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "single", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:260:21", children: "Single" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "double", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:261:21", children: "Double" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "triple", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:262:21", children: "Triple" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "quad", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:263:21", children: "Quad" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "studio", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:264:21", children: "Studio" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Category", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:268:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: draft.inventory.category, onValueChange: /* @__PURE__ */ __name2((v) => patchInventory("category", v), "onValueChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:269:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:270:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:270:34" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:271:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "ac", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:272:21", children: "AC" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "non-ac", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:273:21", children: "Non-AC" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "premium", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:274:21", children: "Premium" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "standard", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:275:21", children: "Standard" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Owner ID", src: draft.source["ownerId"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:280:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.ownerId, onChange: /* @__PURE__ */ __name2((e) => patch("ownerId", e.target.value), "onChange"), placeholder: "GP-OWN-XXXX", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:281:15" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:285:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:286:13", children: "Financials (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:287:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Monthly Rent", src: draft.source["rent"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:288:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.rent, onChange: /* @__PURE__ */ __name2((e) => patch("rent", +e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:289:17" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Security Deposit", src: draft.source["deposit"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:291:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.deposit, onChange: /* @__PURE__ */ __name2((e) => patch("deposit", +e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:292:17" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Booking Amount Received", src: draft.source["bookingAmt"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:294:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.bookingAmt, onChange: /* @__PURE__ */ __name2((e) => patch("bookingAmt", +e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:295:17" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Other Charges", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:297:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.otherCharges, onChange: /* @__PURE__ */ __name2((e) => patch("otherCharges", +e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:298:17" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:301:13", children: [
            "Expected total: ₹",
            (draft.rent + draft.deposit + draft.bookingAmt + draft.otherCharges).toLocaleString("en-IN"),
            " · ",
            "Received: ₹",
            draft.bookingAmt.toLocaleString("en-IN")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:307:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:308:13", children: "Move-In" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:309:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Move-In Date", src: draft.source["moveIn.date"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:310:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: draft.moveIn.date, onChange: /* @__PURE__ */ __name2((e) => patchMoveIn("date", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:311:17" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Time", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:313:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "time", value: draft.moveIn.time, onChange: /* @__PURE__ */ __name2((e) => patchMoveIn("time", e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:313:35" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Stay (months)", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:314:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.moveIn.stayMonths, onChange: /* @__PURE__ */ __name2((e) => patchMoveIn("stayMonths", +e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:314:44" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lock-In (months)", src: draft.source["moveIn.lockInMonths"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:315:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.moveIn.lockInMonths, onChange: /* @__PURE__ */ __name2((e) => patchMoveIn("lockInMonths", +e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:316:17" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notice (days)", src: draft.source["moveIn.noticeDays"], "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:318:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: draft.moveIn.noticeDays, onChange: /* @__PURE__ */ __name2((e) => patchMoveIn("noticeDays", +e.target.value), "onChange"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:319:17" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 space-y-2 md:col-span-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:324:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:325:13", children: "Customer Expectations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:326:13", children: SUGGESTED.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: /* @__PURE__ */ __name2(() => addReq(s), "onClick"),
              className: "text-[11px] rounded-full border border-border bg-card px-2 py-0.5 hover:border-primary",
              "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:328:17",
              children: [
                "+ ",
                s
              ]
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:334:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: reqDraft,
                onChange: /* @__PURE__ */ __name2((e) => setReqDraft(e.target.value), "onChange"),
                placeholder: "Add custom expectation…",
                onKeyDown: /* @__PURE__ */ __name2((e) => e.key === "Enter" && (e.preventDefault(), addReq(reqDraft)), "onKeyDown"),
                "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:335:15"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: /* @__PURE__ */ __name2(() => addReq(reqDraft), "onClick"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:338:15", children: "Add" })
          ] }),
          draft.specialRequests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:341:15", children: draft.specialRequests.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] rounded-full bg-primary/10 text-primary px-2 py-0.5 flex items-center gap-1", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:343:19", children: [
            r,
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setDraft((d) => ({ ...d, specialRequests: d.specialRequests.filter((_, j) => j !== i) })), "onClick"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:345:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:346:23" }) })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:355:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:356:11", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, disabled: !isValid, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:357:11", children: "Create & queue for owner" })
      ] })
    ] })
  ] });
}
__name(CreateBookingDialog, "CreateBookingDialog");
__name2(CreateBookingDialog, "CreateBookingDialog");
function SourcePicker({
  icon,
  label,
  value,
  onChange,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:370:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] text-muted-foreground flex items-center gap-1", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:371:7", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: value || "__none", onValueChange: onChange, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:372:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:373:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: `Pick ${label.toLowerCase()}…`, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:373:48" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "max-h-80", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:374:9", children })
    ] })
  ] });
}
__name(SourcePicker, "SourcePicker");
__name2(SourcePicker, "SourcePicker");
function Field({ label, src, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:382:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] text-muted-foreground flex items-center gap-1.5", "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:383:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:384:9", children: label }),
      src && src !== "manual" && src !== "default" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: `text-[9px] h-4 px-1 ${SOURCE_TONE[src]}`, "data-tsd-source": "/src/components/owner-bookings/CreateBookingDialog.tsx:386:11", children: [
        "↻ ",
        SOURCE_LABEL[src]
      ] })
    ] }),
    children
  ] });
}
__name(Field, "Field");
__name2(Field, "Field");
const TAB_FILTERS = [{
  id: "all",
  label: "All",
  match: /* @__PURE__ */ __name2(() => true, "match")
}, {
  id: "pending_ack",
  label: "Pending Ack",
  match: /* @__PURE__ */ __name2((b) => ["created", "shared_with_owner", "viewed_by_owner"].includes(b.status), "match")
}, {
  id: "prepare",
  label: "Room Prep",
  match: /* @__PURE__ */ __name2((b) => b.status === "acknowledged", "match")
}, {
  id: "ready",
  label: "Ready",
  match: /* @__PURE__ */ __name2((b) => b.status === "room_ready" || b.status === "move_in_approved", "match")
}, {
  id: "completed",
  label: "Completed",
  match: /* @__PURE__ */ __name2((b) => b.status === "completed", "match")
}, {
  id: "issues",
  label: "Issues",
  match: /* @__PURE__ */ __name2((b) => b.status === "rejected" || b.status === "cancelled", "match")
}];
function OwnerBookingsConsole() {
  const {
    bookings
  } = useOwnerBookings();
  const [tab, setTab] = reactExports.useState("all");
  const [q, setQ] = reactExports.useState("");
  const [openId, setOpenId] = reactExports.useState(bookings[0]?.id ?? null);
  const filtered = reactExports.useMemo(() => {
    const f = TAB_FILTERS.find((t) => t.id === tab).match;
    const term = q.trim().toLowerCase();
    return bookings.filter((b) => f(b) && (term === "" || b.customer.name.toLowerCase().includes(term) || b.customer.phone.toLowerCase().includes(term) || b.inventory.propertyName.toLowerCase().includes(term) || b.inventory.roomNumber.toLowerCase().includes(term)));
  }, [bookings, tab, q]);
  const stats = reactExports.useMemo(() => {
    const totals = bookings.reduce((acc, b) => {
      const t = computeTotals(b);
      acc.expected += t.expected;
      acc.received += t.received;
      if (["created", "shared_with_owner", "viewed_by_owner"].includes(b.status)) acc.pendingAck++;
      if (b.status === "room_ready" || b.status === "move_in_approved") acc.ready++;
      if (b.status === "completed") acc.completed++;
      return acc;
    }, {
      expected: 0,
      received: 0,
      pendingAck: 0,
      ready: 0,
      completed: 0
    });
    return totals;
  }, [bookings]);
  const open = bookings.find((b) => b.id === openId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-4", "data-tsd-source": "/src/routes/owner-bookings.tsx:74:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", "data-tsd-source": "/src/routes/owner-bookings.tsx:75:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/owner-bookings.tsx:76:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", "data-tsd-source": "/src/routes/owner-bookings.tsx:77:11", children: "Owner Booking Console" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/routes/owner-bookings.tsx:78:11", children: "Every booking is shared with the property owner, acknowledged, and tracked to check-in." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CreateBookingDialog, { "data-tsd-source": "/src/routes/owner-bookings.tsx:82:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2", "data-tsd-source": "/src/routes/owner-bookings.tsx:85:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Total bookings", value: bookings.length.toString(), "data-tsd-source": "/src/routes/owner-bookings.tsx:86:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Pending ack", value: stats.pendingAck.toString(), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-amber-500" }), "data-tsd-source": "/src/routes/owner-bookings.tsx:87:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Ready", value: stats.ready.toString(), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-emerald-500" }), "data-tsd-source": "/src/routes/owner-bookings.tsx:88:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Collected", value: `₹${stats.received.toLocaleString("en-IN")}`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4" }), "data-tsd-source": "/src/routes/owner-bookings.tsx:89:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Pending dues", value: `₹${(stats.expected - stats.received).toLocaleString("en-IN")}`, tone: "warn", "data-tsd-source": "/src/routes/owner-bookings.tsx:90:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickBookFromQuotations, { "data-tsd-source": "/src/routes/owner-bookings.tsx:93:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", "data-tsd-source": "/src/routes/owner-bookings.tsx:97:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: tab, onValueChange: setTab, "data-tsd-source": "/src/routes/owner-bookings.tsx:98:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { "data-tsd-source": "/src/routes/owner-bookings.tsx:99:11", children: TAB_FILTERS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: t.id, className: "text-xs", "data-tsd-source": "/src/routes/owner-bookings.tsx:101:15", children: t.label }, t.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative ml-auto", "data-tsd-source": "/src/routes/owner-bookings.tsx:105:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground", "data-tsd-source": "/src/routes/owner-bookings.tsx:106:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"), placeholder: "Search name, phone, room…", className: "pl-7 h-8 w-64", "data-tsd-source": "/src/routes/owner-bookings.tsx:107:11" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[360px_1fr] gap-4", "data-tsd-source": "/src/routes/owner-bookings.tsx:112:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 max-h-[70vh] overflow-y-auto pr-1", "data-tsd-source": "/src/routes/owner-bookings.tsx:113:9", children: [
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 text-center text-xs text-muted-foreground", "data-tsd-source": "/src/routes/owner-bookings.tsx:115:13", children: "No bookings here." }),
        filtered.map((b) => {
          const t = computeTotals(b);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: /* @__PURE__ */ __name2(() => setOpenId(b.id), "onClick"), className: `p-3 cursor-pointer transition border ${openId === b.id ? "border-primary ring-1 ring-primary" : "hover:border-primary/40"}`, "data-tsd-source": "/src/routes/owner-bookings.tsx:120:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", "data-tsd-source": "/src/routes/owner-bookings.tsx:125:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm truncate", "data-tsd-source": "/src/routes/owner-bookings.tsx:126:19", children: b.customer.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/routes/owner-bookings.tsx:127:19", children: LIFECYCLE_LABEL[b.status] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate mt-0.5", "data-tsd-source": "/src/routes/owner-bookings.tsx:129:17", children: [
              b.inventory.propertyName,
              " · R",
              b.inventory.roomNumber,
              "/",
              b.inventory.bedNumber
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] mt-1.5", "data-tsd-source": "/src/routes/owner-bookings.tsx:132:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/routes/owner-bookings.tsx:133:19", children: [
                "Move-in ",
                new Date(b.moveIn.date).toLocaleDateString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t.pending > 0 ? "text-amber-600" : "text-emerald-600", "data-tsd-source": "/src/routes/owner-bookings.tsx:136:19", children: t.pending > 0 ? `₹${t.pending.toLocaleString("en-IN")} due` : "Paid" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-1 bg-muted rounded overflow-hidden", "data-tsd-source": "/src/routes/owner-bookings.tsx:140:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-emerald-500", style: {
              width: `${t.readyCount / t.totalReadiness * 100}%`
            }, "data-tsd-source": "/src/routes/owner-bookings.tsx:141:19" }) })
          ] }, b.id);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", "data-tsd-source": "/src/routes/owner-bookings.tsx:148:9", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerBookingCard, { booking: open, mode: "sales", "data-tsd-source": "/src/routes/owner-bookings.tsx:150:13" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-10 text-center text-muted-foreground", "data-tsd-source": "/src/routes/owner-bookings.tsx:152:13", children: "Select a booking to view details." }) })
    ] })
  ] });
}
__name(OwnerBookingsConsole, "OwnerBookingsConsole");
__name2(OwnerBookingsConsole, "OwnerBookingsConsole");
function Stat({
  label,
  value,
  icon,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3", "data-tsd-source": "/src/routes/owner-bookings.tsx:162:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-1", "data-tsd-source": "/src/routes/owner-bookings.tsx:163:7", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-lg font-bold ${tone === "warn" ? "text-amber-600" : ""}`, "data-tsd-source": "/src/routes/owner-bookings.tsx:164:7", children: value })
  ] });
}
__name(Stat, "Stat");
__name2(Stat, "Stat");
function QuickBookFromQuotations() {
  const quotations = useQuotations((s) => s.quotations);
  const leads = useApp((s) => s.leads);
  const {
    bookings,
    createBooking
  } = useOwnerBookings();
  const candidates = reactExports.useMemo(() => {
    const usedLeadIds = new Set(bookings.map((b) => b.leadId).filter(Boolean));
    return quotations.filter((q) => q.status === "paid" && !usedLeadIds.has(q.leadId)).slice(0, 6);
  }, [quotations, bookings]);
  if (candidates.length === 0) return null;
  function quickBook(quotationId) {
    const q = quotations.find((qq) => qq.id === quotationId);
    if (!q) return;
    const lead = leads.find((l) => l.id === q.leadId);
    const pg = q.propertyId ? PGS.find((p) => p.id === q.propertyId) : void 0;
    let d = emptyDraft();
    d = applyLead(d, lead);
    if (pg) d = applyProperty(d, pg);
    d = applyQuotation(d, q);
    if (!d.inventory.roomNumber) d.inventory.roomNumber = "TBD";
    createBooking(draftToCreateInput(d, {
      leadId: q.leadId,
      createdBy: "auto-sync"
    }));
  }
  __name(quickBook, "quickBook");
  __name2(quickBook, "quickBook");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent", "data-tsd-source": "/src/routes/owner-bookings.tsx:197:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-2", "data-tsd-source": "/src/routes/owner-bookings.tsx:198:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/owner-bookings.tsx:199:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-amber-500", "data-tsd-source": "/src/routes/owner-bookings.tsx:200:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", "data-tsd-source": "/src/routes/owner-bookings.tsx:201:11", children: "Quick book from paid quotations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px]", "data-tsd-source": "/src/routes/owner-bookings.tsx:202:11", children: [
          candidates.length,
          " ready"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/owner-bookings.tsx:204:9", children: "Lead + Property + Quote synced in one click." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3", "data-tsd-source": "/src/routes/owner-bookings.tsx:206:7", children: candidates.map((q) => {
      const lead = leads.find((l) => l.id === q.leadId);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-border bg-card p-2 flex items-center justify-between gap-2", "data-tsd-source": "/src/routes/owner-bookings.tsx:210:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/owner-bookings.tsx:212:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium truncate", "data-tsd-source": "/src/routes/owner-bookings.tsx:213:17", children: lead?.name ?? q.leadId }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground truncate", "data-tsd-source": "/src/routes/owner-bookings.tsx:214:17", children: [
            q.propertyName,
            " · ",
            q.roomType,
            " · ₹",
            q.discountedPrice.toLocaleString("en-IN")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 text-[11px]", onClick: /* @__PURE__ */ __name2(() => quickBook(q.id), "onClick"), "data-tsd-source": "/src/routes/owner-bookings.tsx:218:15", children: "Sync & book" })
      ] }, q.id);
    }) })
  ] });
}
__name(QuickBookFromQuotations, "QuickBookFromQuotations");
__name2(QuickBookFromQuotations, "QuickBookFromQuotations");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner-bookings.tsx:24:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerBookingsConsole, { "data-tsd-source": "/src/routes/owner-bookings.tsx:24:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
