var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { aB as useAppState, aJ as getMemberPerformance, aI as zones, q as cn } from "./router-xBhBcQRf.mjs";
import { D as DateRangeToggle } from "./DateRangeToggle-JbwWwCW-.mjs";
import { S as StatusBadge, O as OutcomeBadge } from "./StatusBadge-ByCMrWCS.mjs";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { X, a as ChevronUp, C as ChevronDown } from "../_libs/lucide-react.mjs";

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
function TeamPerformance() {
  const { tours } = useAppState();
  const [dateRange, setDateRange] = reactExports.useState("today");
  const [selectedMember, setSelectedMember] = reactExports.useState(null);
  const [sortKey, setSortKey] = reactExports.useState("showUpRate");
  const [sortAsc, setSortAsc] = reactExports.useState(false);
  const [filterZone, setFilterZone] = reactExports.useState("all");
  const memberPerf = getMemberPerformance(tours);
  const filtered = filterZone === "all" ? memberPerf : memberPerf.filter((m) => m.zoneName.includes(filterZone));
  const sorted = [...filtered].sort((a, b) => {
    const av = a[sortKey], bv = b[sortKey];
    if (typeof av === "number" && typeof bv === "number") return sortAsc ? av - bv : bv - av;
    return 0;
  });
  const memberTours = selectedMember ? tours.filter((t) => t.assignedTo === selectedMember || t.scheduledBy === selectedMember) : [];
  const handleSort = /* @__PURE__ */ __name2((key) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  }, "handleSort");
  const SortIcon = /* @__PURE__ */ __name2(({ field }) => {
    if (sortKey !== field) return null;
    return sortAsc ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-3 w-3 inline", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:35:22" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3 inline", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:35:65" });
  }, "SortIcon");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 md:space-y-6 animate-slide-up", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:39:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:40:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:41:9", children: "Team Performance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:42:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filterZone,
            onChange: /* @__PURE__ */ __name2((e) => setFilterZone(e.target.value), "onChange"),
            className: "bg-surface-2 border border-border rounded-lg px-2 py-1.5 text-xs text-foreground",
            "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:43:11",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:48:13", children: "All Zones" }),
              zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: z.area, "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:49:29", children: z.area }, z.id))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DateRangeToggle, { value: dateRange, onChange: setDateRange, "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:51:11" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-2", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:56:7", children: sorted.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: /* @__PURE__ */ __name2(() => setSelectedMember(m.memberId === selectedMember ? null : m.memberId), "onClick"),
        className: "glass-card p-3 cursor-pointer active:scale-[0.99] transition-transform",
        "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:58:11",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:63:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:64:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:65:17", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("ml-2 text-[10px] font-medium px-1.5 py-0.5 rounded-full", m.role === "flow-ops" ? "bg-flow-ops/15 text-role-flow" : "bg-tcm/15 text-role-tcm"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:66:17", children: m.role === "flow-ops" ? "FO" : "TCM" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:70:15", children: m.zoneName.split(" — ")[1] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2 text-center", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:72:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:73:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:74:17", children: "Tours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:75:17", children: m.toursScheduled })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:77:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:78:17", children: "Done" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:79:17", children: m.toursCompleted })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:81:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:82:17", children: "Show%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: cn("text-sm font-medium", m.showUpRate >= 70 ? "text-role-tcm" : m.showUpRate >= 50 ? "text-role-hr" : "text-danger"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:83:17", children: [
                m.showUpRate,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:85:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:86:17", children: "Drafts" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-role-hr", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:87:17", children: m.drafts })
            ] })
          ] })
        ]
      },
      m.memberId
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block glass-card overflow-hidden", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:95:7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:96:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:97:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:98:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground bg-surface-2/50", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:99:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:100:17", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:101:17", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:102:17", children: "Zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: /* @__PURE__ */ __name2(() => handleSort("leadsAdded"), "onClick"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:103:17", children: [
          "Leads ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "leadsAdded", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:103:129" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: /* @__PURE__ */ __name2(() => handleSort("toursScheduled"), "onClick"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:104:17", children: [
          "Tours ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "toursScheduled", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:104:133" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: /* @__PURE__ */ __name2(() => handleSort("toursCompleted"), "onClick"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:105:17", children: [
          "Done ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "toursCompleted", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:105:132" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: /* @__PURE__ */ __name2(() => handleSort("showUpRate"), "onClick"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:106:17", children: [
          "Show% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "showUpRate", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:106:129" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: /* @__PURE__ */ __name2(() => handleSort("drafts"), "onClick"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:107:17", children: [
          "Drafts ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "drafts", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:107:126" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "text-center py-3 px-2 font-medium cursor-pointer", onClick: /* @__PURE__ */ __name2(() => handleSort("sameDayRate"), "onClick"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:108:17", children: [
          "Same-Day% ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(SortIcon, { field: "sameDayRate", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:108:134" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:111:13", children: sorted.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-border/50 hover:bg-accent/30 cursor-pointer transition-colors",
          onClick: /* @__PURE__ */ __name2(() => setSelectedMember(m.memberId === selectedMember ? null : m.memberId), "onClick"),
          "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:113:17",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-medium text-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:118:19", children: m.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:119:19", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("text-xs font-medium px-2 py-0.5 rounded-full", m.role === "flow-ops" ? "bg-flow-ops/15 text-role-flow" : "bg-tcm/15 text-role-tcm"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:120:21", children: m.role === "flow-ops" ? "Flow Ops" : "TCM" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:124:19", children: m.zoneName.split(" — ")[1] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:125:19", children: m.leadsAdded }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:126:19", children: m.toursScheduled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:127:19", children: m.toursCompleted }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: cn("py-2.5 px-2 text-center font-medium", m.showUpRate >= 70 ? "text-role-tcm" : m.showUpRate >= 50 ? "text-role-hr" : "text-danger"), "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:128:19", children: [
              m.showUpRate,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center text-role-hr font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:129:19", children: m.drafts }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-center text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:130:19", children: [
              m.sameDayRate,
              "%"
            ] })
          ]
        },
        m.memberId
      )) })
    ] }) }) }),
    selectedMember && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 md:p-5 animate-slide-up", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:140:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:141:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-heading font-semibold text-sm text-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:142:13", children: [
          sorted.find((m) => m.memberId === selectedMember)?.name,
          " — History"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => setSelectedMember(null), "onClick"), className: "text-muted-foreground hover:text-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:145:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:146:15" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 md:hidden", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:149:11", children: [
        memberTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-surface-2/50 rounded-lg p-3 space-y-1", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:151:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:152:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:153:19", children: t.leadName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:154:19", children: [
              t.tourDate,
              " ",
              t.tourTime
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:156:17", children: t.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:157:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status, "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:158:19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome, "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:159:19" })
          ] })
        ] }, t.id)),
        memberTours.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-sm py-4", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:163:42", children: "No tours found" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:165:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:166:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:167:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:168:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:169:19", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:170:19", children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:171:19", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:172:19", children: "Property" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:173:19", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:174:19", children: "Outcome" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 font-medium", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:175:19", children: "Remarks" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:178:15", children: memberTours.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:180:19", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:181:21", children: t.tourDate }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:182:21", children: t.tourTime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:183:21", children: t.leadName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:184:21", children: t.propertyName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:185:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status, "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:185:42" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:186:21", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OutcomeBadge, { outcome: t.outcome, "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:186:42" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-muted-foreground text-xs", "data-tsd-source": "/src/myt/pages/TeamPerformance.tsx:187:21", children: t.remarks || "—" })
        ] }, t.id)) })
      ] }) })
    ] })
  ] });
}
__name(TeamPerformance, "TeamPerformance");
__name2(TeamPerformance, "TeamPerformance");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/myt/team.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeamPerformance, { "data-tsd-source": "/src/routes/myt/team.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
