var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { aB as useAppState, k as Button, U as Label, X as Input, aI as zones, aH as teamMembers, q as cn } from "./router-Cbs6ivkN.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { t as Plus, I as IndianRupee, bU as FileCheck, _ as House } from "../_libs/lucide-react.mjs";
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
const properties = [
  "Prestige Lakeside",
  "Brigade Meadows",
  "Sobha Dream Acres",
  "Godrej Splendour",
  "Mantri Serenity",
  "Puravankara Zenium",
  "Salarpuria Sattva",
  "Embassy Springs",
  "Total Environment",
  "Raheja Residency",
  "Adarsh Palm Retreat",
  "Shriram Greenfield"
];
function Bookings() {
  const { bookings, setBookings } = useAppState();
  const [showForm, setShowForm] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    leadName: "",
    phone: "",
    propertyName: "",
    area: "",
    rentValue: "12000",
    viaTour: true,
    closedBy: ""
  });
  const totalRent = bookings.reduce((s, b) => s + b.rentValue, 0);
  const signed = bookings.filter((b) => b.agreementStatus === "signed" || b.agreementStatus === "moved-in").length;
  const movedIn = bookings.filter((b) => b.agreementStatus === "moved-in").length;
  const viaTour = bookings.filter((b) => b.viaTour).length;
  const updateStatus = /* @__PURE__ */ __name2((id, status) => {
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, agreementStatus: status } : b));
    toast.success(`Status updated to ${status}`);
  }, "updateStatus");
  const handleSubmit = /* @__PURE__ */ __name2((e) => {
    e.preventDefault();
    const closer = teamMembers.find((m) => m.id === form.closedBy);
    const newBooking = {
      id: `b${Date.now()}`,
      leadName: form.leadName,
      phone: form.phone,
      propertyName: form.propertyName,
      area: form.area,
      rentValue: parseInt(form.rentValue),
      viaTour: form.viaTour,
      tourId: null,
      agreementStatus: "pending",
      closedBy: closer?.id || "m1",
      closedByName: closer?.name || "Unknown",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setBookings((prev) => [newBooking, ...prev]);
    toast.success("Booking logged");
    setShowForm(false);
  }, "handleSubmit");
  const selectClass = "w-full h-10 bg-surface-2 border border-border rounded-md px-3 text-sm text-foreground";
  const statusColors = {
    pending: "bg-warning/15 text-warning",
    signed: "bg-primary/15 text-primary",
    "moved-in": "bg-success/15 text-role-tcm"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-slide-up", "data-tsd-source": "/src/myt/pages/Bookings.tsx:66:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/myt/pages/Bookings.tsx:67:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Bookings.tsx:68:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:69:11", children: "Bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:70:11", children: "Track commitments & revenue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => setShowForm(!showForm), "onClick"), className: "h-8 text-xs gap-1", "data-tsd-source": "/src/myt/pages/Bookings.tsx:72:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/Bookings.tsx:73:11" }),
        " Log Booking"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", "data-tsd-source": "/src/myt/pages/Bookings.tsx:77:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3", "data-tsd-source": "/src/myt/pages/Bookings.tsx:78:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", "data-tsd-source": "/src/myt/pages/Bookings.tsx:79:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4 text-role-tcm", "data-tsd-source": "/src/myt/pages/Bookings.tsx:80:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:81:13", children: "Total Rent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:83:11", children: [
          "₹",
          totalRent.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3", "data-tsd-source": "/src/myt/pages/Bookings.tsx:85:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", "data-tsd-source": "/src/myt/pages/Bookings.tsx:86:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "h-4 w-4 text-primary", "data-tsd-source": "/src/myt/pages/Bookings.tsx:87:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:88:13", children: "Signed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:90:11", children: signed })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3", "data-tsd-source": "/src/myt/pages/Bookings.tsx:92:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", "data-tsd-source": "/src/myt/pages/Bookings.tsx:93:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4 text-role-hr", "data-tsd-source": "/src/myt/pages/Bookings.tsx:94:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:95:13", children: "Moved In" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:97:11", children: movedIn })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3", "data-tsd-source": "/src/myt/pages/Bookings.tsx:99:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:100:11", children: "Via Tour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:101:11", children: [
          viaTour,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:101:82", children: [
            "/",
            bookings.length
          ] })
        ] })
      ] })
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "glass-card p-4 space-y-3", "data-tsd-source": "/src/myt/pages/Bookings.tsx:106:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/Bookings.tsx:107:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Bookings.tsx:108:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/Bookings.tsx:109:15", children: "Lead Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.leadName, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, leadName: e.target.value })), "onChange"), required: true, className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/Bookings.tsx:110:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Bookings.tsx:112:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/Bookings.tsx:113:15", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.phone, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, phone: e.target.value })), "onChange"), required: true, className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/Bookings.tsx:114:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", "data-tsd-source": "/src/myt/pages/Bookings.tsx:117:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Bookings.tsx:118:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/Bookings.tsx:119:15", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.propertyName, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, propertyName: e.target.value })), "onChange"), className: selectClass, "data-tsd-source": "/src/myt/pages/Bookings.tsx:120:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/myt/pages/Bookings.tsx:121:17", children: "Select" }),
            properties.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, "data-tsd-source": "/src/myt/pages/Bookings.tsx:122:38", children: p }, p))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Bookings.tsx:125:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/Bookings.tsx:126:15", children: "Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.area, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, area: e.target.value })), "onChange"), className: selectClass, "data-tsd-source": "/src/myt/pages/Bookings.tsx:127:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/myt/pages/Bookings.tsx:128:17", children: "Select" }),
            zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z.area, "data-tsd-source": "/src/myt/pages/Bookings.tsx:129:33", children: z.area }, z.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Bookings.tsx:132:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/Bookings.tsx:133:15", children: "Rent (₹/mo)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: form.rentValue, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, rentValue: e.target.value })), "onChange"), className: "bg-surface-2 border-border", "data-tsd-source": "/src/myt/pages/Bookings.tsx:134:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", "data-tsd-source": "/src/myt/pages/Bookings.tsx:137:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Bookings.tsx:138:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/Bookings.tsx:139:15", children: "Closed By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.closedBy, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, closedBy: e.target.value })), "onChange"), className: selectClass, "data-tsd-source": "/src/myt/pages/Bookings.tsx:140:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", "data-tsd-source": "/src/myt/pages/Bookings.tsx:141:17", children: "Select Member" }),
            teamMembers.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: m.id, "data-tsd-source": "/src/myt/pages/Bookings.tsx:142:39", children: [
              m.name,
              " (",
              m.role,
              ")"
            ] }, m.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-xs text-muted-foreground self-end pb-2", "data-tsd-source": "/src/myt/pages/Bookings.tsx:145:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: form.viaTour, onChange: /* @__PURE__ */ __name2((e) => setForm((f) => ({ ...f, viaTour: e.target.checked })), "onChange"), className: "rounded", "data-tsd-source": "/src/myt/pages/Bookings.tsx:146:15" }),
          "Via Tour (not direct)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", "data-tsd-source": "/src/myt/pages/Bookings.tsx:150:11", children: "Log Booking" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/Bookings.tsx:155:7", children: bookings.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 space-y-2", "data-tsd-source": "/src/myt/pages/Bookings.tsx:157:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/myt/pages/Bookings.tsx:158:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/Bookings.tsx:159:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", "data-tsd-source": "/src/myt/pages/Bookings.tsx:160:17", children: b.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs ml-2", "data-tsd-source": "/src/myt/pages/Bookings.tsx:161:17", children: b.propertyName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-heading font-bold text-role-tcm", "data-tsd-source": "/src/myt/pages/Bookings.tsx:163:15", children: [
          "₹",
          b.rentValue.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs", "data-tsd-source": "/src/myt/pages/Bookings.tsx:165:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("px-2 py-0.5 rounded-full text-[10px] font-medium", statusColors[b.agreementStatus]), "data-tsd-source": "/src/myt/pages/Bookings.tsx:166:15", children: b.agreementStatus }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:169:15", children: b.viaTour ? "🏠 Via Tour" : "📞 Direct" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/Bookings.tsx:170:15", children: [
          "Closed by: ",
          b.closedByName
        ] })
      ] }),
      b.agreementStatus !== "moved-in" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/myt/pages/Bookings.tsx:173:15", children: [
        b.agreementStatus === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => updateStatus(b.id, "signed"), "onClick"), className: "h-7 text-[10px]", "data-tsd-source": "/src/myt/pages/Bookings.tsx:175:19", children: "Mark Signed" }),
        b.agreementStatus === "signed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => updateStatus(b.id, "moved-in"), "onClick"), className: "h-7 text-[10px]", "data-tsd-source": "/src/myt/pages/Bookings.tsx:178:19", children: "Mark Moved In" })
      ] })
    ] }, b.id)) })
  ] });
}
__name(Bookings, "Bookings");
__name2(Bookings, "Bookings");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/bookings.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookings, { "data-tsd-source": "/src/routes/myt/bookings.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
