var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { g as getRegistry, s as subscribeRegistry, p as patchRoom } from "./owner-registry-CCk4X1ga.mjs";
import { X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, B as Badge, k as Button } from "./router-xBhBcQRf.mjs";
import { t as toast } from "./use-toast-BlKShdOI.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { C as ChevronDown, q as ChevronRight, P as Phone, r as MessageCircle, e as Copy } from "../_libs/lucide-react.mjs";

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
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function useRegistry() {
  const [data, setData] = reactExports.useState(() => getRegistry());
  reactExports.useEffect(() => subscribeRegistry(() => setData(getRegistry())), []);
  return data;
}
__name(useRegistry, "useRegistry");
__name2(useRegistry, "useRegistry");
const STATUS_TONE = {
  vacant: "bg-success/15 text-success border-success/30",
  vacating: "bg-warning/15 text-warning-foreground border-warning/30",
  occupied: "bg-muted text-muted-foreground border-border",
  blocked: "bg-destructive/10 text-destructive border-destructive/30",
  held: "bg-accent/15 text-accent-foreground border-accent/30",
  booked: "bg-info/10 text-info border-info/30"
};
function OwnerRegistry() {
  const owners = useRegistry();
  const [q, setQ] = reactExports.useState("");
  const [expanded, setExpanded] = reactExports.useState(/* @__PURE__ */ new Set());
  const [hubFilter, setHubFilter] = reactExports.useState("all");
  const filtered = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    return owners.map((o) => {
      const props = hubFilter === "all" ? o.properties : o.properties.filter((p) => p.hub === hubFilter);
      return { ...o, properties: props };
    }).filter((o) => o.properties.length > 0).filter((o) => {
      if (!term) return true;
      return o.id.toLowerCase().includes(term) || o.name.toLowerCase().includes(term) || (o.phone || "").includes(term) || o.properties.some(
        (p) => p.pgName.toLowerCase().includes(term) || p.area.toLowerCase().includes(term) || p.pgId.toLowerCase().includes(term)
      );
    });
  }, [owners, q, hubFilter]);
  const totals = reactExports.useMemo(() => {
    const t = { owners: filtered.length, properties: 0, beds: 0, vacant: 0 };
    filtered.forEach((o) => {
      t.properties += o.properties.length;
      o.properties.forEach((p) => {
        p.rooms.forEach((r) => {
          t.beds += r.beds;
          if (r.status === "vacant" || r.status === "vacating") t.vacant += r.beds;
        });
      });
    });
    return t;
  }, [filtered]);
  const toggle = /* @__PURE__ */ __name2((id) => setExpanded((s) => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  }), "toggle");
  const copy = /* @__PURE__ */ __name2((text, label = "Copied") => {
    navigator.clipboard?.writeText(text);
    toast({ title: label, description: text });
  }, "copy");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:98:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:99:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:100:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:101:11", children: "Owner Console — unified" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:104:11", children: "Every owner across both property hubs, with auto-generated IDs and room-level controls in one place." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 text-xs", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:109:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Owners", value: totals.owners, "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:110:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Properties", value: totals.properties, "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:111:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Beds", value: totals.beds, "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:112:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Vacant", value: totals.vacant, accent: true, "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:113:11" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:117:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search owner ID, name, phone, property, area…",
          value: q,
          onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"),
          className: "max-w-md",
          "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:118:9"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: hubFilter, onValueChange: /* @__PURE__ */ __name2((v) => setHubFilter(v), "onValueChange"), "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:124:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-44", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:125:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:126:13" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:128:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:129:13", children: "All hubs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "pg", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:130:13", children: "Property Genius" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sh", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:131:13", children: "Supply Hub" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card overflow-hidden", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:136:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:137:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/40 text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:138:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:139:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 w-8", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:140:15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:141:15", children: "Owner ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:142:15", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:143:15", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:144:15", children: "Properties" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:145:15", children: "Beds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:146:15", children: "Vacant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:147:15", children: "Quick" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:150:11", children: [
        filtered.map((o) => {
          const isOpen = expanded.has(o.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border hover:bg-muted/30", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:155:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:156:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: /* @__PURE__ */ __name2(() => toggle(o.id), "onClick"),
                  className: "p-1 rounded hover:bg-muted",
                  "aria-label": "Expand",
                  "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:157:23",
                  children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:163:27" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:165:27" })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-mono text-[11px]", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:169:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "hover:underline",
                  onClick: /* @__PURE__ */ __name2(() => copy(o.id, "Owner ID copied"), "onClick"),
                  "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:170:23",
                  children: o.id
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-medium", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:177:21", children: o.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-mono text-[11px]", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:178:21", children: o.phone || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:179:21", children: o.properties.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:180:21", children: o.totalBeds }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-right", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:181:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-success", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:182:23", children: o.vacantBeds }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:184:21", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:185:23", children: [
                o.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted",
                      href: `tel:${o.phone}`,
                      "aria-label": "Call",
                      "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:188:29",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:193:31" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted",
                      href: `https://wa.me/${o.phone.replace(/\D/g, "")}`,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "WhatsApp",
                      "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:195:29",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:202:31" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "inline-flex h-7 w-7 items-center justify-center rounded-md border border-border hover:bg-muted",
                    onClick: /* @__PURE__ */ __name2(() => copy(
                      `Owner ${o.id} · ${o.name} · ${o.properties.length} properties · ${o.vacantBeds} vacant beds`,
                      "Card copied"
                    ), "onClick"),
                    "aria-label": "Copy card",
                    "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:206:25",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:216:27" })
                  }
                )
              ] }) })
            ] }, o.id),
            isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-muted/20", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:222:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 8, className: "p-3", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:223:23", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:224:25", children: o.properties.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-lg border border-border bg-card p-3",
                "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:226:29",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:230:31", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:231:33", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-sm", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:232:35", children: [
                        p.pgName,
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:234:37", children: [
                          "· ",
                          p.area
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground font-mono", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:236:35", children: [
                        p.pgId,
                        " · hub:",
                        p.hub
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        className: "text-[11px] underline text-accent",
                        onClick: /* @__PURE__ */ __name2(() => copy(p.pgId, "Property ID copied"), "onClick"),
                        "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:240:33",
                        children: "copy PG ID"
                      }
                    )
                  ] }),
                  p.rooms.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:248:33", children: "No room configs available for this property." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:252:33", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[11px]", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:253:35", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:254:37", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:255:39", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:256:41", children: "Room ID" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:257:41", children: "Type" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:258:41", children: "Beds" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:259:41", children: "Rent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:260:41", children: "Status" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:261:41", children: "Vacating" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:262:41", children: " " })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:265:37", children: p.rooms.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoomRow, { room: r, onCopy: copy, "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:267:41" }, r.id)) })
                  ] }) })
                ]
              },
              p.pgId
            )) }) }) })
          ] });
        }),
        filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:283:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 8, className: "p-6 text-center text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:284:17", children: "No owners match those filters." }) })
      ] })
    ] }) })
  ] });
  function Stat({ label, value, accent }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card px-3 py-1.5", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:297:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:298:9", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `font-display text-base font-semibold tabular-nums ${accent ? "text-success" : ""}`,
          "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:301:9",
          children: value
        }
      )
    ] });
  }
  __name(Stat, "Stat");
}
__name(OwnerRegistry, "OwnerRegistry");
__name2(OwnerRegistry, "OwnerRegistry");
function RoomRow({
  room,
  onCopy
}) {
  const [rent, setRent] = reactExports.useState(String(room.rent));
  const [beds, setBeds] = reactExports.useState(String(room.beds));
  const [status, setStatus] = reactExports.useState(room.status);
  const [vacating, setVacating] = reactExports.useState(room.vacatingDate ?? "");
  const dirty = Number(rent) !== room.rent || Number(beds) !== room.beds || status !== room.status || (vacating || "") !== (room.vacatingDate ?? "");
  const save = /* @__PURE__ */ __name2(() => {
    patchRoom(room.id, {
      rent: Number(rent) || 0,
      beds: Number(beds) || 0,
      status,
      vacatingDate: status === "vacating" ? vacating || void 0 : void 0
    });
    toast({ title: "Room updated", description: room.id });
  }, "save");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border align-middle", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:342:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2 font-mono", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:343:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "hover:underline",
        onClick: /* @__PURE__ */ __name2(() => onCopy(room.id, "Room ID copied"), "onClick"),
        "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:344:9",
        children: room.id
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2 capitalize", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:351:7", children: room.type }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:352:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: beds,
        onChange: /* @__PURE__ */ __name2((e) => setBeds(e.target.value.replace(/\D/g, "")), "onChange"),
        className: "h-7 w-16",
        "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:353:9"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:359:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: rent,
        onChange: /* @__PURE__ */ __name2((e) => setRent(e.target.value.replace(/\D/g, "")), "onChange"),
        className: "h-7 w-24",
        "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:360:9"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:366:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: /* @__PURE__ */ __name2((v) => setStatus(v), "onValueChange"), "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:367:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-28", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:368:11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:369:13" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:371:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacant", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:372:13", children: "Vacant" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "vacating", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:373:13", children: "Vacating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "occupied", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:374:13", children: "Occupied" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "blocked", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:375:13", children: "Blocked" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:379:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "date",
        value: vacating,
        disabled: status !== "vacating",
        onChange: /* @__PURE__ */ __name2((e) => setVacating(e.target.value), "onChange"),
        className: "h-7 w-36",
        "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:380:9"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-2", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:388:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:389:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: `text-[10px] ${STATUS_TONE[room.status]}`, "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:390:11", children: room.status }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: dirty ? "default" : "outline",
          className: "h-7 text-[11px]",
          onClick: save,
          disabled: !dirty,
          "data-tsd-source": "/src/owner/pages/OwnerRegistry.tsx:393:11",
          children: "Save"
        }
      )
    ] }) })
  ] });
}
__name(RoomRow, "RoomRow");
__name2(RoomRow, "RoomRow");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/registry.tsx:17:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerRegistry, { "data-tsd-source": "/src/routes/owner/registry.tsx:18:7" }) }), "SplitComponent");
export {
  SplitComponent as component
};
