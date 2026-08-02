var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AdminShell } from "./AdminShell-Dhs0yRNA.mjs";
import { u as useApp } from "./router-Cbs6ivkN.mjs";
import { u as useAdminRows } from "./use-admin-rows-Bn7YUGtf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/zustand.mjs";
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
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/lucide-react.mjs";
import "./store-CzExz6PU.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function AdminPeople() {
  const {
    tcms
  } = useApp();
  const rows = useAdminRows();
  const byTcm = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    tcms.forEach((t) => map.set(t.id, {
      name: t.name,
      zone: t.zone,
      leads: 0,
      booked: 0,
      lost: 0,
      visits: 0,
      calls: 0,
      revenue: 0,
      hot: 0
    }));
    rows.forEach((r) => {
      const m = map.get(r.lead.assignedTcmId);
      if (!m) return;
      m.leads += 1;
      m.visits += r.visits.length;
      m.calls += r.calls.length;
      if (r.probability >= 70 && !r.booked) m.hot += 1;
      if (r.booked) {
        m.booked += 1;
        m.revenue += (r.bookings[0]?.amount ?? r.lead.budget) * 12;
      }
      if (r.status === "lost") m.lost += 1;
    });
    return [...map.values()].sort((a, b) => b.revenue - a.revenue);
  }, [tcms, rows]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminShell, { title: "People 360°", sub: "Per-TCM performance — clicked through to lead lists", "data-tsd-source": "/src/routes/admin.people.tsx:33:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/routes/admin.people.tsx:34:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/routes/admin.people.tsx:35:9", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40", "data-tsd-source": "/src/routes/admin.people.tsx:36:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", "data-tsd-source": "/src/routes/admin.people.tsx:36:42", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.people.tsx:37:13", children: "TCM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/routes/admin.people.tsx:37:41", children: "Zone" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:38:13", children: "Leads" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:38:54", children: "Hot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:39:13", children: "Visits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:39:55", children: "Calls" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:40:13", children: "Booked" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:40:55", children: "Lost" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:41:13", children: "₹ Closed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:41:57", children: "Conv %" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/routes/admin.people.tsx:43:11", children: byTcm.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", "data-tsd-source": "/src/routes/admin.people.tsx:45:15", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-medium", "data-tsd-source": "/src/routes/admin.people.tsx:46:17", children: m.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/routes/admin.people.tsx:47:17", children: m.zone }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:48:17", children: m.leads }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right text-accent", "data-tsd-source": "/src/routes/admin.people.tsx:49:17", children: m.hot }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:50:17", children: m.visits }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/routes/admin.people.tsx:51:17", children: m.calls }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right text-success", "data-tsd-source": "/src/routes/admin.people.tsx:52:17", children: m.booked }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right text-destructive", "data-tsd-source": "/src/routes/admin.people.tsx:53:17", children: m.lost }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right font-mono", "data-tsd-source": "/src/routes/admin.people.tsx:54:17", children: [
        "₹",
        (m.revenue / 1e5).toFixed(1),
        "L"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-2 text-right font-mono", "data-tsd-source": "/src/routes/admin.people.tsx:55:17", children: [
        m.leads ? Math.round(m.booked / m.leads * 100) : 0,
        "%"
      ] })
    ] }, m.name)) })
  ] }) }) });
}
__name(AdminPeople, "AdminPeople");
__name2(AdminPeople, "AdminPeople");
export {
  AdminPeople as component
};
