var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, M as Sheet, N as SheetContent, O as SheetHeader, Q as SheetTitle, ag as SheetDescription } from "./AppShell-rXFHrudv.mjs";
import { u as useApp, az as useCalendar, B as Badge, X as Input, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, ay as KIND_META, k as Button, T as Tabs, h as TabsList, j as TabsTrigger, q as cn, Z as Dialog, $ as DialogContent, a0 as DialogHeader, a1 as DialogTitle, U as Label, A as Textarea, a2 as DialogFooter } from "./router-Cbs6ivkN.mjs";
import { S as Switch } from "./switch-7rY4oeOv.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Separator } from "./separator-khanlWef.mjs";
import "../_libs/react-dom.mjs";
import { ba as CalendarDays, a3 as Search, a$ as Settings2, t as Plus, aW as ChevronLeft, q as ChevronRight, y as Calendar, K as MapPin, c as Users, ae as ExternalLink, aS as Trash2, bo as Link2, aa as RefreshCw, bp as Upload, e as Copy, bq as Download } from "../_libs/lucide-react.mjs";
import { f as format, d as isSameMonth, b as isToday, e as isSameDay, g as startOfWeek, h as addDays, j as startOfMonth, k as endOfWeek, l as endOfMonth, m as addMonths } from "../_libs/date-fns.mjs";
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
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__react-separator.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function monthGrid(focus) {
  const start = startOfWeek(startOfMonth(focus), { weekStartsOn: 0 });
  const end = endOfWeek(endOfMonth(focus), { weekStartsOn: 0 });
  const out = [];
  let d = start;
  while (d <= end) {
    out.push(d);
    d = addDays(d, 1);
  }
  return out;
}
__name(monthGrid, "monthGrid");
__name2(monthGrid, "monthGrid");
function weekDays(focus) {
  const start = startOfWeek(focus, { weekStartsOn: 0 });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}
__name(weekDays, "weekDays");
__name2(weekDays, "weekDays");
function eventsForDay(events, day) {
  return events.filter((e) => isSameDay(new Date(e.start), day) || isWithinSpan(e, day)).sort((a, b) => +new Date(a.start) - +new Date(b.start));
}
__name(eventsForDay, "eventsForDay");
__name2(eventsForDay, "eventsForDay");
function isWithinSpan(e, day) {
  const s = new Date(e.start);
  const en = new Date(e.end);
  return day >= new Date(s.getFullYear(), s.getMonth(), s.getDate()) && day <= en;
}
__name(isWithinSpan, "isWithinSpan");
__name2(isWithinSpan, "isWithinSpan");
function navigate(view, focus, dir) {
  if (view === "month") return addMonths(focus, dir);
  if (view === "week") return addDays(focus, 7 * dir);
  return addDays(focus, dir);
}
__name(navigate, "navigate");
__name2(navigate, "navigate");
function headerLabel(view, focus) {
  if (view === "month") return format(focus, "MMMM yyyy");
  if (view === "week") {
    const days = weekDays(focus);
    return `${format(days[0], "MMM d")} – ${format(days[6], "MMM d, yyyy")}`;
  }
  return format(focus, "EEEE, MMMM d, yyyy");
}
__name(headerLabel, "headerLabel");
__name2(headerLabel, "headerLabel");
const HOURS = Array.from({ length: 24 }, (_, i) => i);
function minutesFromMidnight(iso) {
  const d = new Date(iso);
  return d.getHours() * 60 + d.getMinutes();
}
__name(minutesFromMidnight, "minutesFromMidnight");
__name2(minutesFromMidnight, "minutesFromMidnight");
function durationMinutes(e) {
  return Math.max(15, (+new Date(e.end) - +new Date(e.start)) / 6e4);
}
__name(durationMinutes, "durationMinutes");
__name2(durationMinutes, "durationMinutes");
function toLocalInput(iso) {
  const d = new Date(iso);
  const tz = d.getTimezoneOffset();
  const local = new Date(d.getTime() - tz * 6e4);
  return local.toISOString().slice(0, 16);
}
__name(toLocalInput, "toLocalInput");
__name2(toLocalInput, "toLocalInput");
function fromLocalInput(value) {
  return new Date(value).toISOString();
}
__name(fromLocalInput, "fromLocalInput");
__name2(fromLocalInput, "fromLocalInput");
function MonthView({ focus, events, onEventClick, onDayClick, selectedDay }) {
  const days = monthGrid(focus);
  const headers = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full overflow-hidden border rounded-lg bg-card", "data-tsd-source": "/src/components/calendar/MonthView.tsx:19:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 border-b bg-muted/40", "data-tsd-source": "/src/components/calendar/MonthView.tsx:20:7", children: headers.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-2 text-xs font-medium text-muted-foreground text-center", "data-tsd-source": "/src/components/calendar/MonthView.tsx:22:11", children: h }, h)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 grid-rows-6 flex-1 min-h-0", "data-tsd-source": "/src/components/calendar/MonthView.tsx:27:7", children: days.map((d) => {
      const inMonth = isSameMonth(d, focus);
      const today = isToday(d);
      const selected = selectedDay && isSameDay(d, selectedDay);
      const dayEvents = eventsForDay(events, d);
      const visible = dayEvents.slice(0, 3);
      const overflow = dayEvents.length - visible.length;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => onDayClick(d), "onClick"),
          className: cn(
            "border-b border-r p-1.5 text-left flex flex-col gap-1 min-h-0 hover:bg-accent/40 transition-colors",
            !inMonth && "bg-muted/20 text-muted-foreground",
            selected && "ring-2 ring-inset ring-primary"
          ),
          "data-tsd-source": "/src/components/calendar/MonthView.tsx:36:13",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "inline-flex items-center justify-center text-xs font-medium h-6 w-6 rounded-full",
                  today && "bg-primary text-primary-foreground"
                ),
                "data-tsd-source": "/src/components/calendar/MonthView.tsx:45:15",
                children: format(d, "d")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 overflow-hidden", "data-tsd-source": "/src/components/calendar/MonthView.tsx:53:15", children: [
              visible.map((e) => {
                const m = KIND_META[e.kind];
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    onClick: /* @__PURE__ */ __name2((ev) => {
                      ev.stopPropagation();
                      onEventClick(e);
                    }, "onClick"),
                    className: cn(
                      "truncate rounded px-1.5 py-0.5 text-[11px] cursor-pointer",
                      m.bg,
                      m.text
                    ),
                    title: e.title,
                    "data-tsd-source": "/src/components/calendar/MonthView.tsx:57:21",
                    children: [
                      !e.allDay && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70 mr-1", "data-tsd-source": "/src/components/calendar/MonthView.tsx:71:25", children: format(new Date(e.start), "h:mma").toLowerCase() }),
                      e.title
                    ]
                  },
                  e.id
                );
              }),
              overflow > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground pl-1", "data-tsd-source": "/src/components/calendar/MonthView.tsx:78:19", children: [
                "+",
                overflow,
                " more"
              ] })
            ] })
          ]
        },
        d.toISOString()
      );
    }) })
  ] });
}
__name(MonthView, "MonthView");
__name2(MonthView, "MonthView");
const SLOT_PX = 48;
function TimeGridView({ focus, events, view, onEventClick, onSlotClick }) {
  const days = view === "week" ? weekDays(focus) : [focus];
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = SLOT_PX * 7;
    }
  }, []);
  const now = /* @__PURE__ */ new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 border rounded-lg bg-card overflow-hidden flex flex-col", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:31:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid border-b", style: { gridTemplateColumns: `60px repeat(${days.length}, 1fr)` }, "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:32:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:33:9" }),
      days.map((d) => {
        const today = isToday(d);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l px-2 py-2 text-center", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:37:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:38:15", children: format(d, "EEE") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "mx-auto mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold",
                today && "bg-primary text-primary-foreground"
              ),
              "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:39:15",
              children: format(d, "d")
            }
          )
        ] }, d.toISOString());
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:52:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid relative", style: { gridTemplateColumns: `60px repeat(${days.length}, 1fr)` }, "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:53:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:54:11", children: HOURS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-[10px] text-muted-foreground text-right pr-2 border-b",
          style: { height: SLOT_PX },
          "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:56:15",
          children: h === 0 ? "" : format(new Date(2024, 0, 1, h), "h a")
        },
        h
      )) }),
      days.map((d) => {
        const dayEvents = eventsForDay(events, d).filter((e) => !e.allDay);
        const showNowLine = isSameDay(d, now);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-l", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:70:15", children: [
          HOURS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "border-b cursor-pointer hover:bg-accent/30",
              style: { height: SLOT_PX },
              onClick: /* @__PURE__ */ __name2(() => {
                const slot = new Date(d);
                slot.setHours(h, 0, 0, 0);
                onSlotClick(slot);
              }, "onClick"),
              "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:72:19"
            },
            h
          )),
          showNowLine && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "pointer-events-none absolute left-0 right-0 z-10 flex items-center",
              style: { top: currentMinutes / 60 * SLOT_PX },
              "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:85:19",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-500 -ml-1", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:89:21" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-red-500", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:90:21" })
              ]
            }
          ),
          dayEvents.map((e) => {
            const top = minutesFromMidnight(e.start) / 60 * SLOT_PX;
            const height = Math.max(20, durationMinutes(e) / 60 * SLOT_PX - 2);
            const m = KIND_META[e.kind];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: /* @__PURE__ */ __name2((ev) => {
                  ev.stopPropagation();
                  onEventClick(e);
                }, "onClick"),
                className: cn(
                  "absolute left-1 right-1 rounded-md px-2 py-1 text-left text-xs overflow-hidden border",
                  m.bg,
                  m.text
                ),
                style: { top, height, borderColor: m.color },
                "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:99:21",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:112:23", children: e.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "opacity-70 truncate", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:113:23", children: [
                    format(new Date(e.start), "h:mma").toLowerCase(),
                    " – ",
                    format(new Date(e.end), "h:mma").toLowerCase()
                  ] }),
                  e.location && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-70 truncate", "data-tsd-source": "/src/components/calendar/TimeGridView.tsx:116:38", children: e.location })
                ]
              },
              e.id
            );
          })
        ] }, d.toISOString());
      })
    ] }) })
  ] });
}
__name(TimeGridView, "TimeGridView");
__name2(TimeGridView, "TimeGridView");
function AgendaView({ events, onEventClick }) {
  const upcoming = events.filter((e) => new Date(e.end) >= new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0))).sort((a, b) => +new Date(a.start) - +new Date(b.start)).slice(0, 50);
  if (upcoming.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center text-sm text-muted-foreground border rounded-lg bg-card", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:19:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:20:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-8 w-8 mx-auto mb-3 opacity-40", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:21:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "data-tsd-source": "/src/components/calendar/AgendaView.tsx:22:11", children: "No upcoming events." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:23:11", children: "Press “New event” to add one." })
    ] }) });
  }
  const groups = /* @__PURE__ */ new Map();
  for (const e of upcoming) {
    const k = format(new Date(e.start), "yyyy-MM-dd");
    const arr = groups.get(k) ?? [];
    arr.push(e);
    groups.set(k, arr);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-auto border rounded-lg bg-card", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:39:5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:40:7", children: Array.from(groups.entries()).map(([key, list]) => {
    const day = /* @__PURE__ */ new Date(key + "T00:00:00");
    const today = isSameDay(day, /* @__PURE__ */ new Date());
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { "data-tsd-source": "/src/components/calendar/AgendaView.tsx:45:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("sticky top-0 bg-card/90 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-wide", today ? "text-primary" : "text-muted-foreground"), "data-tsd-source": "/src/components/calendar/AgendaView.tsx:46:15", children: [
        format(day, "EEEE, MMMM d"),
        today && " · Today"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { "data-tsd-source": "/src/components/calendar/AgendaView.tsx:49:15", children: list.map((e) => {
        const m = KIND_META[e.kind];
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "data-tsd-source": "/src/components/calendar/AgendaView.tsx:53:21", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: /* @__PURE__ */ __name2(() => onEventClick(e), "onClick"),
            className: "w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-accent/40",
            "data-tsd-source": "/src/components/calendar/AgendaView.tsx:54:23",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 inline-block h-3 w-3 rounded-full flex-shrink-0", style: { background: m.color }, "data-tsd-source": "/src/components/calendar/AgendaView.tsx:58:25" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:59:25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-3", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:60:27", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:61:29", children: e.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:62:29", children: e.allDay ? "All day" : `${format(new Date(e.start), "h:mma").toLowerCase()} – ${format(new Date(e.end), "h:mma").toLowerCase()}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:68:27", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded px-1.5 py-0.5", m.bg, m.text), "data-tsd-source": "/src/components/calendar/AgendaView.tsx:69:29", children: m.label }),
                  e.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:71:31", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:71:80" }),
                    e.location
                  ] }),
                  e.attendees && e.attendees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:74:31", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:74:80" }),
                    e.attendees.length
                  ] }),
                  e.externalSource && e.externalSource !== "local" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-wide", "data-tsd-source": "/src/components/calendar/AgendaView.tsx:77:31", children: e.externalSource })
                ] })
              ] })
            ]
          }
        ) }, e.id);
      }) })
    ] }, key);
  }) }) });
}
__name(AgendaView, "AgendaView");
__name2(AgendaView, "AgendaView");
const fold = /* @__PURE__ */ __name2((line) => {
  if (line.length <= 73) return line;
  const chunks = [];
  for (let i = 0; i < line.length; i += 73) chunks.push(line.slice(i, i + 73));
  return chunks.join("\r\n ");
}, "fold");
const escapeIcsText = /* @__PURE__ */ __name2((s) => s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;"), "escapeIcsText");
const toIcsDate = /* @__PURE__ */ __name2((iso, allDay) => {
  const d = new Date(iso);
  if (allDay) {
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${y}${m}${day}`;
  }
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}, "toIcsDate");
function eventsToIcs(events, calendarName = "Align Deal Flow") {
  const lines = [];
  lines.push("BEGIN:VCALENDAR");
  lines.push("VERSION:2.0");
  lines.push("PRODID:-//Align Deal Flow//Calendar//EN");
  lines.push("CALSCALE:GREGORIAN");
  lines.push("METHOD:PUBLISH");
  lines.push(`X-WR-CALNAME:${escapeIcsText(calendarName)}`);
  for (const e of events) {
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${e.id}@align-deal-flow`);
    lines.push(`DTSTAMP:${toIcsDate(e.updatedAt, false)}`);
    if (e.allDay) {
      lines.push(`DTSTART;VALUE=DATE:${toIcsDate(e.start, true)}`);
      lines.push(`DTEND;VALUE=DATE:${toIcsDate(e.end, true)}`);
    } else {
      lines.push(`DTSTART:${toIcsDate(e.start, false)}`);
      lines.push(`DTEND:${toIcsDate(e.end, false)}`);
    }
    lines.push(fold(`SUMMARY:${escapeIcsText(e.title)}`));
    if (e.description) lines.push(fold(`DESCRIPTION:${escapeIcsText(e.description)}`));
    if (e.location) lines.push(fold(`LOCATION:${escapeIcsText(e.location)}`));
    if (e.attendees?.length) {
      for (const a of e.attendees) lines.push(fold(`ATTENDEE;CN=${escapeIcsText(a)}:mailto:${a}`));
    }
    lines.push(`CATEGORIES:${e.kind.toUpperCase()}`);
    if (e.rrule) lines.push(`RRULE:${e.rrule}`);
    lines.push("END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}
__name(eventsToIcs, "eventsToIcs");
__name2(eventsToIcs, "eventsToIcs");
function downloadIcs(filename, content) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.endsWith(".ics") ? filename : `${filename}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
__name(downloadIcs, "downloadIcs");
__name2(downloadIcs, "downloadIcs");
const unfold = /* @__PURE__ */ __name2((text) => text.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, ""), "unfold");
const unescapeIcsText = /* @__PURE__ */ __name2((s) => s.replace(/\\n/g, "\n").replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\\\/g, "\\"), "unescapeIcsText");
const parseIcsDate = /* @__PURE__ */ __name2((raw) => {
  const value = raw.includes(":") ? raw.split(":").pop() : raw;
  if (/^\d{8}$/.test(value)) {
    const y = value.slice(0, 4);
    const m2 = value.slice(4, 6);
    const d = value.slice(6, 8);
    return { iso: `${y}-${m2}-${d}T00:00:00.000Z`, allDay: true };
  }
  const m = value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/);
  if (!m) return { iso: (/* @__PURE__ */ new Date()).toISOString(), allDay: false };
  const [, Y, Mo, D, H, Mi, S, Z] = m;
  if (Z) return { iso: `${Y}-${Mo}-${D}T${H}:${Mi}:${S}.000Z`, allDay: false };
  const local = new Date(Number(Y), Number(Mo) - 1, Number(D), Number(H), Number(Mi), Number(S));
  return { iso: local.toISOString(), allDay: false };
}, "parseIcsDate");
function icsToEvents(text, externalSource = "ics") {
  const unfolded = unfold(text);
  const lines = unfolded.split(/\r?\n/);
  const events = [];
  let current = null;
  let inEvent = false;
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line === "BEGIN:VEVENT") {
      inEvent = true;
      current = { kind: "meeting", externalSource };
      continue;
    }
    if (line === "END:VEVENT") {
      if (current && current.start && current.end && current.title) {
        const now = (/* @__PURE__ */ new Date()).toISOString();
        events.push({
          id: current.externalId ?? `imp-${Math.random().toString(36).slice(2, 10)}`,
          title: current.title,
          kind: current.kind ?? "meeting",
          start: current.start,
          end: current.end,
          allDay: current.allDay ?? false,
          description: current.description,
          location: current.location,
          attendees: current.attendees,
          externalSource,
          externalId: current.externalId,
          rrule: current.rrule,
          createdAt: now,
          updatedAt: now
        });
      }
      current = null;
      inEvent = false;
      continue;
    }
    if (!inEvent || !current) continue;
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    const head = line.slice(0, idx);
    const value = line.slice(idx + 1);
    const key = head.split(";")[0].toUpperCase();
    switch (key) {
      case "UID":
        current.externalId = value;
        break;
      case "SUMMARY":
        current.title = unescapeIcsText(value);
        break;
      case "DESCRIPTION":
        current.description = unescapeIcsText(value);
        break;
      case "LOCATION":
        current.location = unescapeIcsText(value);
        break;
      case "DTSTART": {
        const p = parseIcsDate(line);
        current.start = p.iso;
        current.allDay = p.allDay;
        break;
      }
      case "DTEND": {
        const p = parseIcsDate(line);
        current.end = p.iso;
        break;
      }
      case "RRULE":
        current.rrule = value;
        break;
      case "CATEGORIES": {
        const v = value.toLowerCase();
        if (v.includes("tour")) current.kind = "tour";
        else if (v.includes("call")) current.kind = "call";
        else if (v.includes("follow")) current.kind = "follow-up";
        else if (v.includes("task")) current.kind = "task";
        else if (v.includes("personal")) current.kind = "personal";
        else current.kind = "meeting";
        break;
      }
      case "ATTENDEE": {
        const email = value.replace(/^mailto:/i, "").trim();
        current.attendees = [...current.attendees ?? [], email];
        break;
      }
    }
  }
  return events;
}
__name(icsToEvents, "icsToEvents");
__name2(icsToEvents, "icsToEvents");
function googleCalendarTemplateUrl(e) {
  const fmt = /* @__PURE__ */ __name2((iso) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""), "fmt");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${fmt(e.start)}/${fmt(e.end)}`,
    details: e.description ?? "",
    location: e.location ?? ""
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
__name(googleCalendarTemplateUrl, "googleCalendarTemplateUrl");
__name2(googleCalendarTemplateUrl, "googleCalendarTemplateUrl");
function outlookCalendarTemplateUrl(e) {
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: e.title,
    startdt: e.start,
    enddt: e.end,
    body: e.description ?? "",
    location: e.location ?? ""
  });
  return `https://outlook.office.com/calendar/0/deeplink/compose?${params.toString()}`;
}
__name(outlookCalendarTemplateUrl, "outlookCalendarTemplateUrl");
__name2(outlookCalendarTemplateUrl, "outlookCalendarTemplateUrl");
function EventDialog({ open, onOpenChange, eventId, defaultStart }) {
  const { events, addEvent, updateEvent, deleteEvent } = useCalendar();
  const existing = reactExports.useMemo(() => events.find((e) => e.id === eventId), [events, eventId]);
  const [title, setTitle] = reactExports.useState("");
  const [kind, setKind] = reactExports.useState("meeting");
  const [start, setStart] = reactExports.useState("");
  const [end, setEnd] = reactExports.useState("");
  const [allDay, setAllDay] = reactExports.useState(false);
  const [location, setLocation] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [attendees, setAttendees] = reactExports.useState("");
  const [reminder, setReminder] = reactExports.useState("15");
  reactExports.useEffect(() => {
    if (!open) return;
    if (existing) {
      setTitle(existing.title);
      setKind(existing.kind);
      setStart(toLocalInput(existing.start));
      setEnd(toLocalInput(existing.end));
      setAllDay(existing.allDay);
      setLocation(existing.location ?? "");
      setDescription(existing.description ?? "");
      setAttendees((existing.attendees ?? []).join(", "));
      setReminder(String(existing.reminder ?? 15));
    } else {
      const base = defaultStart ?? /* @__PURE__ */ new Date();
      base.setMinutes(0, 0, 0);
      const startD = new Date(base);
      const endD = new Date(base.getTime() + 60 * 60 * 1e3);
      setTitle("");
      setKind("meeting");
      setStart(toLocalInput(startD.toISOString()));
      setEnd(toLocalInput(endD.toISOString()));
      setAllDay(false);
      setLocation("");
      setDescription("");
      setAttendees("");
      setReminder("15");
    }
  }, [open, existing, defaultStart]);
  const save = /* @__PURE__ */ __name2(() => {
    if (!title.trim()) {
      toast.error("Please enter a title.");
      return;
    }
    const payload = {
      title: title.trim(),
      kind,
      start: fromLocalInput(start),
      end: fromLocalInput(end),
      allDay,
      location: location.trim() || void 0,
      description: description.trim() || void 0,
      attendees: attendees.split(",").map((a) => a.trim()).filter(Boolean),
      reminder: Number(reminder)
    };
    if (existing) {
      updateEvent(existing.id, payload);
      toast.success("Event updated.");
    } else {
      addEvent({ ...payload, externalSource: "local" });
      toast.success("Event added to calendar.");
    }
    onOpenChange(false);
  }, "save");
  const remove = /* @__PURE__ */ __name2(() => {
    if (!existing) return;
    deleteEvent(existing.id);
    toast.success("Event deleted.");
    onOpenChange(false);
  }, "remove");
  const previewEvent = {
    title: title || "Untitled",
    start: start ? fromLocalInput(start) : (/* @__PURE__ */ new Date()).toISOString(),
    end: end ? fromLocalInput(end) : new Date(Date.now() + 36e5).toISOString(),
    description,
    location
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, "data-tsd-source": "/src/components/calendar/EventDialog.tsx:127:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:128:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:129:9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:130:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:131:13" }),
      existing ? "Edit event" : "New event"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:136:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:137:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ev-title", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:138:13", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ev-title",
            value: title,
            onChange: /* @__PURE__ */ __name2((e) => setTitle(e.target.value), "onChange"),
            placeholder: "Add a title",
            autoFocus: true,
            "data-tsd-source": "/src/components/calendar/EventDialog.tsx:139:13"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:148:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:149:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:150:15", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: kind, onValueChange: /* @__PURE__ */ __name2((v) => setKind(v), "onValueChange"), "data-tsd-source": "/src/components/calendar/EventDialog.tsx:151:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:152:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:153:19" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:155:17", children: Object.entries(KIND_META).map(([k, m]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: k, "data-tsd-source": "/src/components/calendar/EventDialog.tsx:157:21", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:158:23", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block h-2 w-2 rounded-full",
                  style: { background: m.color },
                  "data-tsd-source": "/src/components/calendar/EventDialog.tsx:159:25"
                }
              ),
              m.label
            ] }) }, k)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:170:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:171:15", children: "Reminder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: reminder, onValueChange: setReminder, "data-tsd-source": "/src/components/calendar/EventDialog.tsx:172:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:173:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:174:19" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:176:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "0", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:177:19", children: "None" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "5", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:178:19", children: "5 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "10", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:179:19", children: "10 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "15", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:180:19", children: "15 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "30", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:181:19", children: "30 minutes before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "60", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:182:19", children: "1 hour before" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1440", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:183:19", children: "1 day before" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:189:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: allDay, onCheckedChange: setAllDay, id: "ev-allday", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:190:13" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ev-allday", className: "cursor-pointer", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:191:13", children: "All day" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:196:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:197:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:198:15", children: "Start" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: start, onChange: /* @__PURE__ */ __name2((e) => setStart(e.target.value), "onChange"), "data-tsd-source": "/src/components/calendar/EventDialog.tsx:199:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:201:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:202:15", children: "End" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: end, onChange: /* @__PURE__ */ __name2((e) => setEnd(e.target.value), "onChange"), "data-tsd-source": "/src/components/calendar/EventDialog.tsx:203:15" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:207:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:208:13", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: location,
            onChange: /* @__PURE__ */ __name2((e) => setLocation(e.target.value), "onChange"),
            placeholder: "Add location or video link",
            "data-tsd-source": "/src/components/calendar/EventDialog.tsx:209:13"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:216:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:217:13", children: "Attendees (comma-separated emails)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: attendees,
            onChange: /* @__PURE__ */ __name2((e) => setAttendees(e.target.value), "onChange"),
            placeholder: "alice@example.com, bob@example.com",
            "data-tsd-source": "/src/components/calendar/EventDialog.tsx:218:13"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:225:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/components/calendar/EventDialog.tsx:226:13", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: description,
            onChange: /* @__PURE__ */ __name2((e) => setDescription(e.target.value), "onChange"),
            placeholder: "Add notes, agenda, or context",
            rows: 3,
            "data-tsd-source": "/src/components/calendar/EventDialog.tsx:227:13"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-1", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:235:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: googleCalendarTemplateUrl(previewEvent),
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs hover:bg-accent",
            "data-tsd-source": "/src/components/calendar/EventDialog.tsx:236:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:242:15" }),
              " Add to Google"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: outlookCalendarTemplateUrl(previewEvent),
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs hover:bg-accent",
            "data-tsd-source": "/src/components/calendar/EventDialog.tsx:244:13",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:250:15" }),
              " Add to Outlook"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "gap-2 sm:gap-2", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:255:9", children: [
      existing && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", className: "mr-auto text-destructive", onClick: remove, "data-tsd-source": "/src/components/calendar/EventDialog.tsx:257:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 mr-1", "data-tsd-source": "/src/components/calendar/EventDialog.tsx:258:15" }),
        " Delete"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: /* @__PURE__ */ __name2(() => onOpenChange(false), "onClick"), "data-tsd-source": "/src/components/calendar/EventDialog.tsx:261:11", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, "data-tsd-source": "/src/components/calendar/EventDialog.tsx:264:11", children: existing ? "Save" : "Create" })
    ] })
  ] }) });
}
__name(EventDialog, "EventDialog");
__name2(EventDialog, "EventDialog");
const PROVIDERS = [
  {
    id: "google",
    label: "Google Calendar",
    description: "Two-way sync with your Google account."
  },
  {
    id: "outlook",
    label: "Microsoft Outlook",
    description: "Sync with Outlook 365 calendars."
  },
  {
    id: "ics",
    label: "ICS Feed",
    description: "Subscribe to or import an external ICS calendar."
  }
];
function SyncPanel({ open, onOpenChange }) {
  const {
    events,
    connections,
    setConnection,
    removeConnection,
    importEvents,
    publishedIcsToken,
    rotateIcsToken
  } = useCalendar();
  const fileRef = reactExports.useRef(null);
  const [icsUrl, setIcsUrl] = reactExports.useState("");
  const [icsAccount, setIcsAccount] = reactExports.useState("");
  const subscribeUrl = typeof window !== "undefined" ? `${window.location.origin}/api/ics/${publishedIcsToken}.ics` : `/api/ics/${publishedIcsToken}.ics`;
  const findConn = /* @__PURE__ */ __name2((p) => connections.find((c) => c.provider === p), "findConn");
  const exportNow = /* @__PURE__ */ __name2(() => {
    if (events.length === 0) {
      toast.error("Nothing to export yet.");
      return;
    }
    downloadIcs("align-calendar", eventsToIcs(events));
    toast.success(`Exported ${events.length} events.`);
  }, "exportNow");
  const onImportFile = /* @__PURE__ */ __name2(async (file) => {
    const text = await file.text();
    const imported = icsToEvents(text, "ics");
    if (imported.length === 0) {
      toast.error("No events found in file.");
      return;
    }
    importEvents(imported);
    toast.success(`Imported ${imported.length} events.`);
  }, "onImportFile");
  const subscribeToFeed = /* @__PURE__ */ __name2(async () => {
    if (!icsUrl.trim()) {
      toast.error("Please enter an ICS feed URL.");
      return;
    }
    setConnection({
      provider: "ics",
      connected: true,
      account: icsAccount || icsUrl,
      feedUrl: icsUrl,
      direction: "pull",
      lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    try {
      const res = await fetch(icsUrl);
      if (res.ok) {
        const text = await res.text();
        const imported = icsToEvents(text, "ics");
        importEvents(imported);
        toast.success(`Subscribed and imported ${imported.length} events.`);
      } else {
        toast.warning("Subscribed, but couldn't fetch feed (CORS or network).");
      }
    } catch {
      toast.warning("Subscribed. The feed will pull on next refresh.");
    }
  }, "subscribeToFeed");
  const connectOAuth = /* @__PURE__ */ __name2((provider) => {
    setConnection({
      provider,
      connected: true,
      account: provider === "google" ? "you@gmail.com" : "you@outlook.com",
      direction: "both",
      lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString(),
      selectedCalendars: ["primary"]
    });
    toast.success(`${provider === "google" ? "Google" : "Outlook"} calendar connected.`);
  }, "connectOAuth");
  const copy = /* @__PURE__ */ __name2((text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard.");
  }, "copy");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange, "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:130:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-md overflow-y-auto", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:131:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:132:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:133:11", children: "Calendar sync" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:134:11", children: "Keep Align in sync with your other calendars or share your schedule out." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-6", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:139:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:140:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:141:13", children: "Connections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:142:13", children: PROVIDERS.map((p) => {
          const conn = findConn(p.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-lg border p-3", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:146:19", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:147:21", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:148:23", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:149:25", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:150:27", children: p.label }),
                  conn?.connected && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:152:29", children: "Connected" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:157:25", children: p.description }),
                conn?.account && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 truncate", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:159:27", children: conn.account }),
                conn?.lastSyncedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:162:27", children: [
                  "Last synced ",
                  new Date(conn.lastSyncedAt).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1.5", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:167:23", children: p.id !== "ics" ? conn?.connected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: /* @__PURE__ */ __name2(() => removeConnection(p.id), "onClick"),
                  "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:170:29",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:175:31" }),
                    " Disconnect"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => connectOAuth(p.id), "onClick"), "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:178:29", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:179:31" }),
                " Connect"
              ] }) : null })
            ] }),
            conn?.connected && p.id !== "ics" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-xs", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:186:23", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:187:25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: conn.direction === "both" || conn.direction === "push",
                    onCheckedChange: /* @__PURE__ */ __name2((v) => setConnection({
                      ...conn,
                      direction: v ? conn.direction === "pull" ? "both" : "push" : "pull"
                    }), "onCheckedChange"),
                    "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:188:27"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:201:27", children: [
                  "Push events to ",
                  p.label
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => setConnection({ ...conn, lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString() }), "onClick"), "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:203:25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:206:27" }),
                " Sync now"
              ] })
            ] })
          ] }, p.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:216:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:218:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:219:13", children: "Subscribe to an ICS feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:220:13", children: "Paste a public webcal/ICS URL from any calendar provider. Events will be imported into Align." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:223:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "https://example.com/calendar.ics",
              value: icsUrl,
              onChange: /* @__PURE__ */ __name2((e) => setIcsUrl(e.target.value), "onChange"),
              "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:224:15"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Label (optional)",
              value: icsAccount,
              onChange: /* @__PURE__ */ __name2((e) => setIcsAccount(e.target.value), "onChange"),
              "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:229:15"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:234:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: subscribeToFeed, className: "flex-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:235:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:236:19" }),
              " Subscribe"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: /* @__PURE__ */ __name2(() => fileRef.current?.click(), "onClick"), "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:238:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:239:19" }),
              " Import .ics"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileRef,
                type: "file",
                accept: ".ics,text/calendar",
                className: "hidden",
                onChange: /* @__PURE__ */ __name2((e) => {
                  const f = e.target.files?.[0];
                  if (f) onImportFile(f);
                  e.currentTarget.value = "";
                }, "onChange"),
                "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:241:17"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:256:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-3", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:258:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:259:13", children: "Share Align as a calendar feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:260:13", children: "Subscribe to this URL from any calendar app to view your Align events." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:263:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:264:15", children: "Subscription URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:265:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: subscribeUrl, readOnly: true, className: "font-mono text-xs", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:266:17" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", onClick: /* @__PURE__ */ __name2(() => copy(subscribeUrl), "onClick"), "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:267:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:268:19" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:271:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: exportNow, "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:272:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:273:19" }),
              " Download .ics"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: /* @__PURE__ */ __name2(() => {
              rotateIcsToken();
              toast.success("URL rotated.");
            }, "onClick"), "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:275:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5 mr-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:276:19" }),
              " Rotate URL"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://calendar.google.com/calendar/r/settings/addbyurl`,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center text-xs text-primary hover:underline",
                "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:278:17",
                children: [
                  "Add to Google ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3 ml-1", "data-tsd-source": "/src/components/calendar/SyncPanel.tsx:284:33" })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
__name(SyncPanel, "SyncPanel");
__name2(SyncPanel, "SyncPanel");
function CalendarPage() {
  const {
    tours,
    followUps,
    leads
  } = useApp();
  const {
    events,
    addEvent
  } = useCalendar();
  const [view, setView] = reactExports.useState("week");
  const [focus, setFocus] = reactExports.useState(/* @__PURE__ */ new Date());
  const [selectedDay, setSelectedDay] = reactExports.useState(/* @__PURE__ */ new Date());
  const [editing, setEditing] = reactExports.useState({
    open: false
  });
  const [syncOpen, setSyncOpen] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const crmEvents = reactExports.useMemo(() => {
    const out = [];
    const leadMap = new Map(leads.map((l) => [l.id, l]));
    for (const t of tours) {
      const lead = leadMap.get(t.leadId);
      const start = new Date(t.scheduledAt);
      const end = new Date(start.getTime() + 60 * 60 * 1e3);
      out.push({
        id: `crm-tour-${t.id}`,
        title: lead ? `Tour · ${lead.name}` : "Tour",
        kind: "tour",
        start: start.toISOString(),
        end: end.toISOString(),
        allDay: false,
        leadId: t.leadId,
        tourId: t.id,
        externalSource: "local",
        createdAt: t.createdAt,
        updatedAt: t.updatedAt
      });
    }
    for (const f of followUps.filter((x) => !x.done)) {
      const lead = leadMap.get(f.leadId);
      const start = new Date(f.dueAt);
      const end = new Date(start.getTime() + 30 * 60 * 1e3);
      out.push({
        id: `crm-fu-${f.id}`,
        title: lead ? `Follow-up · ${lead.name}` : "Follow-up",
        kind: "follow-up",
        start: start.toISOString(),
        end: end.toISOString(),
        allDay: false,
        leadId: f.leadId,
        followUpId: f.id,
        description: f.reason,
        externalSource: "local",
        createdAt: start.toISOString(),
        updatedAt: start.toISOString()
      });
    }
    return out;
  }, [tours, followUps, leads]);
  const allEvents = reactExports.useMemo(() => {
    const merged = [...crmEvents, ...events];
    const q = search.trim().toLowerCase();
    return merged.filter((e) => {
      if (filter !== "all" && e.kind !== filter) return false;
      if (!q) return true;
      return e.title.toLowerCase().includes(q) || (e.location ?? "").toLowerCase().includes(q) || (e.description ?? "").toLowerCase().includes(q);
    });
  }, [crmEvents, events, search, filter]);
  reactExports.useEffect(() => {
    const fired = /* @__PURE__ */ new Set();
    const tick = /* @__PURE__ */ __name2(() => {
      const now = Date.now();
      for (const e of events) {
        if (!e.reminder) continue;
        const trigger = +new Date(e.start) - e.reminder * 6e4;
        if (now >= trigger && now < trigger + 6e4 && !fired.has(e.id)) {
          fired.add(e.id);
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification(e.title, {
              body: `In ${e.reminder} min · ${format(new Date(e.start), "p")}`
            });
          }
        }
      }
    }, "tick");
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {
      });
    }
    tick();
    const id = window.setInterval(tick, 3e4);
    return () => window.clearInterval(id);
  }, [events]);
  const openEvent = /* @__PURE__ */ __name2((e) => {
    if (e.id.startsWith("crm-")) return;
    setEditing({
      open: true,
      eventId: e.id
    });
  }, "openEvent");
  const openSlot = /* @__PURE__ */ __name2((start) => {
    setEditing({
      open: true,
      defaultStart: start
    });
  }, "openSlot");
  const openDay = /* @__PURE__ */ __name2((d) => {
    setSelectedDay(d);
    if (view === "month") {
      const slot = new Date(d);
      slot.setHours(9, 0, 0, 0);
    }
  }, "openDay");
  const goToday = /* @__PURE__ */ __name2(() => setFocus(/* @__PURE__ */ new Date()), "goToday");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { "data-tsd-source": "/src/routes/calendar.tsx:161:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-[calc(100vh-3rem)] p-4 gap-3", "data-tsd-source": "/src/routes/calendar.tsx:162:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", "data-tsd-source": "/src/routes/calendar.tsx:164:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/calendar.tsx:165:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-5 w-5 text-primary", "data-tsd-source": "/src/routes/calendar.tsx:166:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-semibold", "data-tsd-source": "/src/routes/calendar.tsx:167:13", children: "Calendar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "ml-1", "data-tsd-source": "/src/routes/calendar.tsx:168:13", children: [
            allEvents.length,
            " events"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/calendar.tsx:171:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-tsd-source": "/src/routes/calendar.tsx:172:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground", "data-tsd-source": "/src/routes/calendar.tsx:173:15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: search, onChange: /* @__PURE__ */ __name2((e) => setSearch(e.target.value), "onChange"), placeholder: "Search events", className: "pl-8 h-9 w-56", "data-tsd-source": "/src/routes/calendar.tsx:174:15" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filter, onValueChange: /* @__PURE__ */ __name2((v) => setFilter(v), "onValueChange"), "data-tsd-source": "/src/routes/calendar.tsx:181:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 w-36", "data-tsd-source": "/src/routes/calendar.tsx:182:15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/routes/calendar.tsx:183:17" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/routes/calendar.tsx:185:15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", "data-tsd-source": "/src/routes/calendar.tsx:186:17", children: "All types" }),
              Object.entries(KIND_META).map(([k, m]) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: k, "data-tsd-source": "/src/routes/calendar.tsx:188:19", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", "data-tsd-source": "/src/routes/calendar.tsx:189:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
                  background: m.color
                }, "data-tsd-source": "/src/routes/calendar.tsx:190:23" }),
                m.label
              ] }) }, k))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: /* @__PURE__ */ __name2(() => setSyncOpen(true), "onClick"), "data-tsd-source": "/src/routes/calendar.tsx:197:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "h-4 w-4 mr-1.5", "data-tsd-source": "/src/routes/calendar.tsx:198:15" }),
            " Sync"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: /* @__PURE__ */ __name2(() => setEditing({
            open: true,
            defaultStart: selectedDay ?? /* @__PURE__ */ new Date()
          }), "onClick"), "data-tsd-source": "/src/routes/calendar.tsx:200:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1.5", "data-tsd-source": "/src/routes/calendar.tsx:201:15" }),
            " New event"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", "data-tsd-source": "/src/routes/calendar.tsx:207:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", "data-tsd-source": "/src/routes/calendar.tsx:208:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: goToday, "data-tsd-source": "/src/routes/calendar.tsx:209:13", children: "Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => setFocus(navigate(view, focus, -1)), "onClick"), "data-tsd-source": "/src/routes/calendar.tsx:210:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4", "data-tsd-source": "/src/routes/calendar.tsx:211:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => setFocus(navigate(view, focus, 1)), "onClick"), "data-tsd-source": "/src/routes/calendar.tsx:213:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4", "data-tsd-source": "/src/routes/calendar.tsx:214:15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-display text-lg", "data-tsd-source": "/src/routes/calendar.tsx:216:13", children: headerLabel(view, focus) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, { value: view, onValueChange: /* @__PURE__ */ __name2((v) => setView(v), "onValueChange"), "data-tsd-source": "/src/routes/calendar.tsx:219:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { "data-tsd-source": "/src/routes/calendar.tsx:220:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "day", "data-tsd-source": "/src/routes/calendar.tsx:221:15", children: "Day" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "week", "data-tsd-source": "/src/routes/calendar.tsx:222:15", children: "Week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "month", "data-tsd-source": "/src/routes/calendar.tsx:223:15", children: "Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "agenda", "data-tsd-source": "/src/routes/calendar.tsx:224:15", children: "Agenda" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-h-0 flex gap-3", "data-tsd-source": "/src/routes/calendar.tsx:230:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden lg:flex flex-col w-56 border rounded-lg bg-card p-3 gap-3", "data-tsd-source": "/src/routes/calendar.tsx:231:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/calendar.tsx:232:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", "data-tsd-source": "/src/routes/calendar.tsx:233:15", children: "My calendars" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-sm", "data-tsd-source": "/src/routes/calendar.tsx:234:15", children: Object.entries(KIND_META).map(([k, m]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/calendar.tsx:236:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-sm", style: {
                background: m.color
              }, "data-tsd-source": "/src/routes/calendar.tsx:237:21" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-tsd-source": "/src/routes/calendar.tsx:238:21", children: m.label })
            ] }, k)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/calendar.tsx:243:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2", "data-tsd-source": "/src/routes/calendar.tsx:244:15", children: "Connected" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectionsList, { onOpen: /* @__PURE__ */ __name2(() => setSyncOpen(true), "onOpen"), "data-tsd-source": "/src/routes/calendar.tsx:245:15" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto text-xs text-muted-foreground", "data-tsd-source": "/src/routes/calendar.tsx:247:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { "data-tsd-source": "/src/routes/calendar.tsx:248:15", children: "Tours and follow-ups from your CRM appear here automatically." }) })
        ] }),
        view === "month" && /* @__PURE__ */ jsxRuntimeExports.jsx(MonthView, { focus, events: allEvents, onEventClick: openEvent, onDayClick: openDay, selectedDay, "data-tsd-source": "/src/routes/calendar.tsx:253:13" }),
        (view === "week" || view === "day") && /* @__PURE__ */ jsxRuntimeExports.jsx(TimeGridView, { focus, events: allEvents, view, onEventClick: openEvent, onSlotClick: openSlot, "data-tsd-source": "/src/routes/calendar.tsx:262:13" }),
        view === "agenda" && /* @__PURE__ */ jsxRuntimeExports.jsx(AgendaView, { events: allEvents, onEventClick: openEvent, "data-tsd-source": "/src/routes/calendar.tsx:271:13" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EventDialog, { open: editing.open, onOpenChange: /* @__PURE__ */ __name2((v) => setEditing((s) => ({
      ...s,
      open: v
    })), "onOpenChange"), eventId: editing.eventId, defaultStart: editing.defaultStart, "data-tsd-source": "/src/routes/calendar.tsx:276:7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SyncPanel, { open: syncOpen, onOpenChange: setSyncOpen, "data-tsd-source": "/src/routes/calendar.tsx:282:7" })
  ] });
}
__name(CalendarPage, "CalendarPage");
__name2(CalendarPage, "CalendarPage");
function ConnectionsList({
  onOpen
}) {
  const {
    connections
  } = useCalendar();
  if (connections.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onOpen, className: "text-xs text-primary hover:underline", "data-tsd-source": "/src/routes/calendar.tsx:291:7", children: "Connect Google, Outlook, or ICS →" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 text-xs", "data-tsd-source": "/src/routes/calendar.tsx:297:5", children: connections.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", "data-tsd-source": "/src/routes/calendar.tsx:299:9", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", "data-tsd-source": "/src/routes/calendar.tsx:300:11", children: c.provider }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate ml-2", "data-tsd-source": "/src/routes/calendar.tsx:301:11", children: c.account })
  ] }, c.provider)) });
}
__name(ConnectionsList, "ConnectionsList");
__name2(ConnectionsList, "ConnectionsList");
export {
  CalendarPage as component
};
