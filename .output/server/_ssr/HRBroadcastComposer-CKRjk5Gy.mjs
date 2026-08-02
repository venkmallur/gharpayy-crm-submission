var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useApp, B as Badge, k as Button, S as Select, w as SelectTrigger, x as SelectValue, y as SelectContent, z as SelectItem, q as cn, X as Input, A as Textarea } from "./router-Cbs6ivkN.mjs";
import { T as useNotifications } from "./AppShell-rXFHrudv.mjs";
import { a as activePersona, b as PERSONAS } from "./personas-yLdDZDbn.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { bh as Megaphone, X, ah as UsersRound, p as Bell, a6 as ListTodo, ba as CalendarDays, bf as Mail, ac as Send } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const ALL_ROLES = ["tcm", "flow-ops", "hr", "owner"];
function HRBroadcastComposer({ defaultOpen = false }) {
  const role = useApp((s) => s.role);
  useApp((s) => s.currentTcmId);
  if (role !== "hr") return null;
  const senderPersona = activePersona("hr", void 0);
  const pushBroadcast = useNotifications((s) => s.pushBroadcast);
  const [open, setOpen] = reactExports.useState(defaultOpen);
  const [mode, setMode] = reactExports.useState("role");
  const [targetRole, setTargetRole] = reactExports.useState("tcm");
  const [targetIds, setTargetIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [channels, setChannels] = reactExports.useState(/* @__PURE__ */ new Set(["in-app", "todo", "email"]));
  const [severity, setSeverity] = reactExports.useState("warn");
  const [title, setTitle] = reactExports.useState("");
  const [body, setBody] = reactExports.useState("");
  const [dueIn, setDueIn] = reactExports.useState("4");
  const peopleByRole = reactExports.useMemo(() => {
    const m = { tcm: [], "flow-ops": [], hr: [], owner: [], admin: [] };
    PERSONAS.forEach((p) => m[p.role].push(p));
    return m;
  }, []);
  const recipients = reactExports.useMemo(() => {
    if (mode === "role") {
      return peopleByRole[targetRole].map((p) => ({ role: p.role, id: p.id, name: p.name }));
    }
    return PERSONAS.filter((p) => targetIds.has(p.id)).map((p) => ({ role: p.role, id: p.id, name: p.name }));
  }, [mode, targetRole, targetIds, peopleByRole]);
  const toggleChannel = /* @__PURE__ */ __name2((c) => {
    setChannels((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
      if (next.size === 0) next.add("in-app");
      return next;
    });
  }, "toggleChannel");
  const togglePerson = /* @__PURE__ */ __name2((id) => {
    setTargetIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, "togglePerson");
  const send = /* @__PURE__ */ __name2(() => {
    if (!title.trim() || !body.trim() || recipients.length === 0) {
      toast.error("Add a title, message, and at least one recipient.");
      return;
    }
    const dueAt = channels.has("calendar") || channels.has("todo") ? Date.now() + Number(dueIn || 0) * 3600 * 1e3 : void 0;
    const ids = pushBroadcast({
      senderId: senderPersona.id,
      senderName: senderPersona.name,
      recipients,
      channels: Array.from(channels),
      severity,
      title: title.trim(),
      body: body.trim(),
      dueAt,
      href: "/inbox"
    });
    toast.success(`Broadcast sent to ${recipients.length} recipient${recipients.length === 1 ? "" : "s"}`, {
      description: `${ids.length} entries — ${Array.from(channels).join(" · ")}`
    });
    setTitle("");
    setBody("");
    setOpen(false);
  }, "send");
  if (!open) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: /* @__PURE__ */ __name2(() => setOpen(true), "onClick"),
        className: "w-full flex items-center justify-between rounded-lg border border-dashed border-accent/40 bg-accent/5 px-4 py-3 text-left hover:bg-accent/10 transition",
        "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:97:7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-sm font-medium text-accent", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:101:9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:102:11" }),
            "Broadcast to the team"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:105:9", children: "In-app · Todo · Calendar · Email" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:111:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:112:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:113:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:114:9", children: "HR Broadcast" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "ml-auto text-[10px] font-mono", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:115:9", children: [
        "from ",
        senderPersona.name.split(" ")[0]
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-7 w-7 p-0", onClick: /* @__PURE__ */ __name2(() => setOpen(false), "onClick"), "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:118:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:119:11" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:124:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:125:9", children: [
        "Recipients · ",
        recipients.length,
        " selected"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:128:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: mode === "role" ? "default" : "outline",
            size: "sm",
            className: "h-7",
            onClick: /* @__PURE__ */ __name2(() => setMode("role"), "onClick"),
            "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:129:11",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:134:13" }),
              " Whole role"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: mode === "people" ? "default" : "outline",
            size: "sm",
            className: "h-7",
            onClick: /* @__PURE__ */ __name2(() => setMode("people"), "onClick"),
            "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:136:11",
            children: "Pick people"
          }
        )
      ] }),
      mode === "role" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: targetRole, onValueChange: /* @__PURE__ */ __name2((v) => setTargetRole(v), "onValueChange"), "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:145:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:146:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:146:52" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:147:13", children: ALL_ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: r, "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:149:17", children: [
          labelForRole(r),
          " (",
          peopleByRole[r].length,
          ")"
        ] }, r)) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1 max-h-44 overflow-auto rounded-md border border-border p-2", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:156:11", children: PERSONAS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => togglePerson(p.id), "onClick"),
          className: cn(
            "text-left text-[11px] rounded px-2 py-1 border",
            targetIds.has(p.id) ? "border-accent/40 bg-accent/10 text-accent" : "border-transparent hover:bg-muted"
          ),
          "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:158:15",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:168:17", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground truncate", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:169:17", children: [
              labelForRole(p.role),
              " · ",
              p.focus
            ] })
          ]
        },
        p.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:177:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:178:9", children: "Channels" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:179:9", children: [
        { c: "in-app", icon: Bell, label: "In-app" },
        { c: "todo", icon: ListTodo, label: "Todo" },
        { c: "calendar", icon: CalendarDays, label: "Calendar" },
        { c: "email", icon: Mail, label: "Email (queued)" }
      ].map(({ c, icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: /* @__PURE__ */ __name2(() => toggleChannel(c), "onClick"),
          className: cn(
            "inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px]",
            channels.has(c) ? "border-accent/40 bg-accent/10 text-accent" : "border-border text-muted-foreground hover:bg-muted"
          ),
          "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:186:13",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:196:15" }),
            " ",
            label
          ]
        },
        c
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:203:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:204:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:205:11", children: "Priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: severity, onValueChange: /* @__PURE__ */ __name2((v) => setSeverity(v), "onValueChange"), "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:206:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-xs", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:207:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:207:52" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:208:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "info", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:209:15", children: "Info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "success", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:210:15", children: "Success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "warn", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:211:15", children: "Warning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "urgent", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:212:15", children: "Urgent" })
          ] })
        ] })
      ] }),
      (channels.has("calendar") || channels.has("todo")) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:217:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:218:13", children: "Due in (hrs)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            min: 0,
            value: dueIn,
            onChange: /* @__PURE__ */ __name2((e) => setDueIn(e.target.value), "onChange"),
            className: "h-8 text-xs",
            "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:219:13"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        value: title,
        onChange: /* @__PURE__ */ __name2((e) => setTitle(e.target.value), "onChange"),
        placeholder: "Headline · e.g. New post-tour SLA: 60 minutes",
        className: "text-sm",
        "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:231:7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        value: body,
        onChange: /* @__PURE__ */ __name2((e) => setBody(e.target.value), "onChange"),
        placeholder: "Spell out the change, the why, and what each person should do.",
        rows: 3,
        className: "text-sm",
        "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:237:7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:245:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:246:9", children: [
        channels.has("email") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:247:37", children: "📧 Email queued — backend will send" }),
        channels.has("calendar") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:248:40", children: "📅 Lands on /calendar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: send, size: "sm", className: "h-8", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:250:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5 mr-1.5", "data-tsd-source": "/src/components/HRBroadcastComposer.tsx:251:11" }),
        "Send to ",
        recipients.length
      ] })
    ] })
  ] });
}
__name(HRBroadcastComposer, "HRBroadcastComposer");
__name2(HRBroadcastComposer, "HRBroadcastComposer");
function labelForRole(r) {
  return r === "tcm" ? "TCMs" : r === "flow-ops" ? "Flow Ops" : r === "hr" ? "HR" : "Owners";
}
__name(labelForRole, "labelForRole");
__name2(labelForRole, "labelForRole");
export {
  HRBroadcastComposer as H
};
