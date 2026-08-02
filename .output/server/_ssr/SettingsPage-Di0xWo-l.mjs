var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { a as useSettings, k as Button, T as Tabs, h as TabsList, j as TabsTrigger, l as TabsContent, C as Card, ao as CardContent, U as Label, X as Input, ap as CardHeader, aq as CardTitle, u as useApp, A as Textarea } from "./router-Cbs6ivkN.mjs";
import { S as Slider } from "./slider-rDMznnl4.mjs";
import { S as Switch } from "./switch-7rY4oeOv.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { ak as RotateCcw, S as Sparkles, a$ as Settings2, b0 as MessageSquareText, z as Target, af as BellRing, B as Building2, K as MapPin, aS as Trash2, c as Users, t as Plus, b1 as Lightbulb } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function SettingsPage() {
  const { settings, update, reset, upsertTemplate, removeTemplate } = useSettings();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl space-y-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:30:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:31:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:32:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-semibold tracking-tight", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:33:11", children: "CRM Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:34:11", children: "Matching behavior, drawer behavior, messaging, reminders, scoring, custom fields and targets. Stored locally." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: /* @__PURE__ */ __name2(() => {
        reset();
        toast.success("Settings reset");
      }, "onClick"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:38:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-1 h-4 w-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:39:11" }),
        " Reset all"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:43:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: Sparkles, label: "Top matches shown", value: String(settings.matching.topMatchCount), sub: "inside lead drawer", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:44:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: Settings2, label: "Default lead tab", value: settings.matching.drawerDefaultTab === "best-fit" ? "Best Fit" : "Control", sub: "when no active tour exists", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:45:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: MessageSquareText, label: "Templates", value: String(settings.templates.length), sub: "active WhatsApp flows", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:46:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: Target, label: "Targets", value: String(settings.targets.length), sub: "custom KPI rules", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:47:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "matching", className: "space-y-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:50:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid h-auto w-full grid-cols-2 gap-1 md:grid-cols-4 xl:grid-cols-8", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:51:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "matching", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:52:11", children: "Matching & drawer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "zones", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:53:11", children: "Zones & team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "templates", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:54:11", children: "Message templates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "branding", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:55:11", children: "Branding" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "weights", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:56:11", children: "Score weights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "reminders", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:57:11", children: "Reminder timing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "custom", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:58:11", children: "Custom fields & lists" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "targets", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:59:11", children: "Targets & roadmap" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "matching", className: "space-y-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:62:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchingEditor, { matching: settings.matching, onChange: /* @__PURE__ */ __name2((v) => update("matching", v), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:63:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "matching", className: "space-y-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:66:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MatchingEditor, { matching: settings.matching, onChange: /* @__PURE__ */ __name2((v) => update("matching", v), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:67:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "zones", className: "space-y-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:70:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZonesEditor, { zones: settings.zones, onChange: /* @__PURE__ */ __name2((v) => update("zones", v), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:71:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "templates", className: "space-y-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:74:9", children: [
        settings.templates.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(TemplateEditor, { t, onSave: upsertTemplate, onDelete: /* @__PURE__ */ __name2(() => removeTemplate(t.id), "onDelete"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:76:13" }, t.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NewTemplate, { onAdd: upsertTemplate, "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:78:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "branding", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:81:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:82:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:83:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:84:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:85:17", children: "Site name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: settings.siteName, onChange: /* @__PURE__ */ __name2((e) => update("siteName", e.target.value), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:86:17" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:88:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:89:17", children: "Signature line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: settings.signatureLine, onChange: /* @__PURE__ */ __name2((e) => update("signatureLine", e.target.value), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:90:17" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "weights", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:96:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WeightsEditor, { weights: settings.weights, onChange: /* @__PURE__ */ __name2((w) => update("weights", w), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:97:11" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reminders", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:100:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:101:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:102:13", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:103:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:104:17", children: "Pre-tour reminder offsets (minutes before tour, comma-separated)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: settings.reminders.beforeTourMinutes.join(", "),
              onChange: /* @__PURE__ */ __name2((e) => update("reminders", {
                ...settings.reminders,
                beforeTourMinutes: e.target.value.split(",").map((s) => parseInt(s.trim(), 10)).filter(Number.isFinite)
              }), "onChange"),
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:105:17"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:115:15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:116:17", children: "Post-booking follow-up if no reply (minutes, comma-separated)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: settings.reminders.postBookingFollowupMinutes.join(", "),
              onChange: /* @__PURE__ */ __name2((e) => update("reminders", {
                ...settings.reminders,
                postBookingFollowupMinutes: e.target.value.split(",").map((s) => parseInt(s.trim(), 10)).filter(Number.isFinite)
              }), "onChange"),
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:117:17"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:127:15", children: "These reminders are surfaced as execution timing in the CRM." })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "custom", className: "space-y-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:132:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListEditor, { title: "Areas", items: settings.customAreas, onChange: /* @__PURE__ */ __name2((v) => update("customAreas", v), "onChange"), placeholder: "Koramangala", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:133:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListEditor, { title: "Objection tags", items: settings.customObjections, onChange: /* @__PURE__ */ __name2((v) => update("customObjections", v), "onChange"), placeholder: "Too expensive", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:134:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ListEditor, { title: "Custom outcomes", items: settings.customOutcomes, onChange: /* @__PURE__ */ __name2((v) => update("customOutcomes", v), "onChange"), placeholder: "Token paid via UPI", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:135:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyEditor, { items: settings.customProperties, onChange: /* @__PURE__ */ __name2((v) => update("customProperties", v), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:136:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TcmEditor, { items: settings.customTcms, onChange: /* @__PURE__ */ __name2((v) => update("customTcms", v), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:137:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CustomFieldsEditor, { fields: settings.customFields, onChange: /* @__PURE__ */ __name2((v) => update("customFields", v), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:138:11" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "targets", className: "space-y-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:141:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TargetsEditor, { targets: settings.targets, onChange: /* @__PURE__ */ __name2((v) => update("targets", v), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:142:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RoadmapCard, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:143:11" })
      ] })
    ] })
  ] });
}
__name(SettingsPage, "SettingsPage");
__name2(SettingsPage, "SettingsPage");
function SummaryCard({
  icon: Icon,
  label,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:162:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex items-start gap-3 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:163:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-border bg-muted/40 p-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:164:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:165:11" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:167:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:168:11", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:169:11", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:170:11", children: sub })
    ] })
  ] }) });
}
__name(SummaryCard, "SummaryCard");
__name2(SummaryCard, "SummaryCard");
function MatchingEditor({ matching, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[1.2fr_0.8fr]", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:179:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:180:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:181:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:182:11", children: "Lead drawer behavior" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:184:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:185:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:186:13", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:187:15", children: "Best-fit properties shown per lead" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:188:15", children: matching.topMatchCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              value: [matching.topMatchCount],
              onValueChange: /* @__PURE__ */ __name2(([value]) => onChange({ ...matching, topMatchCount: value }), "onValueChange"),
              min: 3,
              max: 8,
              step: 1,
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:190:13"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:199:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:200:13", children: "Default tab when a lead opens and no active tour exists" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: matching.drawerDefaultTab,
              onChange: /* @__PURE__ */ __name2((e) => onChange({ ...matching, drawerDefaultTab: e.target.value }), "onChange"),
              className: "h-10 w-full rounded-md border border-border bg-background px-3 text-sm",
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:201:13",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "best-fit", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:206:15", children: "Best Fit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "control", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:207:15", children: "Control" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:211:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Auto-expand top property",
              hint: "Open the first match with more details right away.",
              checked: matching.autoExpandTopMatch,
              onCheckedChange: /* @__PURE__ */ __name2((checked) => onChange({ ...matching, autoExpandTopMatch: checked }), "onCheckedChange"),
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:212:13"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Show score breakdown",
              hint: "Expose area, budget, audience and quality signals.",
              checked: matching.showScoreBreakdown,
              onCheckedChange: /* @__PURE__ */ __name2((checked) => onChange({ ...matching, showScoreBreakdown: checked }), "onCheckedChange"),
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:218:13"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Show amenities preview",
              hint: "Keep quick amenities visible on collapsed cards.",
              checked: matching.showAmenitiesPreview,
              onCheckedChange: /* @__PURE__ */ __name2((checked) => onChange({ ...matching, showAmenitiesPreview: checked }), "onCheckedChange"),
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:224:13"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Show manager contact actions",
              hint: "Allow fast manager call and WhatsApp from the drawer.",
              checked: matching.showManagerContacts,
              onCheckedChange: /* @__PURE__ */ __name2((checked) => onChange({ ...matching, showManagerContacts: checked }), "onCheckedChange"),
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:230:13"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SwitchRow,
            {
              label: "Show maps CTA",
              hint: "Expose property map links directly in Best Fit.",
              checked: matching.showMapsAction,
              onCheckedChange: /* @__PURE__ */ __name2((checked) => onChange({ ...matching, showMapsAction: checked }), "onCheckedChange"),
              "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:236:13"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:246:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:247:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:248:11", children: "What this changes live" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 text-sm text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:250:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:251:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mt-0.5 h-4 w-4 text-accent", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:252:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:253:13", children: [
            "Lead drawer now opens to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:253:43", children: matching.drawerDefaultTab === "best-fit" ? "Best Fit" : "Control" }),
            " when there is no live tour."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:255:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BellRing, { className: "mt-0.5 h-4 w-4 text-accent", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:256:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:257:13", children: [
            matching.topMatchCount,
            " ranked properties are surfaced per lead for faster pitching."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:259:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "mt-0.5 h-4 w-4 text-accent", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:260:13" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:261:13", children: "Expanded property previews can include amenities, maps, manager contacts and score rationale." })
        ] })
      ] })
    ] })
  ] });
}
__name(MatchingEditor, "MatchingEditor");
__name2(MatchingEditor, "MatchingEditor");
function SwitchRow({
  label,
  hint,
  checked,
  onCheckedChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 rounded-lg border border-border bg-muted/20 p-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:281:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:282:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:283:9", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:284:9", children: hint })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked, onCheckedChange, "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:286:7" })
  ] });
}
__name(SwitchRow, "SwitchRow");
__name2(SwitchRow, "SwitchRow");
function TemplateEditor({ t, onSave, onDelete }) {
  const [draft, setDraft] = reactExports.useState(t);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:294:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:295:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:296:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.label, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, label: e.target.value }), "onChange"), className: "max-w-xs font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:297:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:298:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => {
          onSave(draft);
          toast.success("Saved");
        }, "onClick"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:299:13", children: "Save" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: onDelete, "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:300:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:300:66" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:304:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: draft.scenario, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, scenario: e.target.value }), "onChange"), placeholder: "When to send", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:305:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: draft.body, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, body: e.target.value }), "onChange"), rows: 6, className: "font-mono text-xs", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:306:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:307:9", children: [
        "Variables: ",
        "{{leadName}} {{propertyName}} {{area}} {{when}} {{tcmName}} {{tcmPhone}} {{budget}} {{workLocation}} {{mapsLink}} {{etaMinutes}} {{otp}} {{siteName}} {{signature}}"
      ] })
    ] })
  ] });
}
__name(TemplateEditor, "TemplateEditor");
__name2(TemplateEditor, "TemplateEditor");
function NewTemplate({ onAdd }) {
  const [draft, setDraft] = reactExports.useState({ id: "", label: "", scenario: "", body: "" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:316:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:317:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:318:9", children: "+ Add new template" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "ID (e.g. weekend_special)", value: draft.id, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, id: e.target.value.replace(/\s+/g, "_") }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:319:9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Label", value: draft.label, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, label: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:320:9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Scenario", value: draft.scenario, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, scenario: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:321:9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Body with {{variables}}", rows: 4, value: draft.body, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, body: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:322:9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => {
      if (!draft.id || !draft.label || !draft.body) return toast.error("ID, label and body required");
      onAdd(draft);
      setDraft({ id: "", label: "", scenario: "", body: "" });
      toast.success("Added");
    }, "onClick"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:323:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:328:12" }),
      " Add"
    ] })
  ] }) });
}
__name(NewTemplate, "NewTemplate");
__name2(NewTemplate, "NewTemplate");
function WeightsEditor({ weights, onChange }) {
  const total = Object.values(weights).reduce((s, n) => s + n, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:337:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:338:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:339:9", children: [
      "Total weight: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:339:70", children: total }),
      " (recommended ~100)"
    ] }),
    Object.keys(weights).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 items-center gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:341:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "capitalize", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:342:13", children: k.replace(/([A-Z])/g, " $1") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: weights[k], onChange: /* @__PURE__ */ __name2((e) => onChange({ ...weights, [k]: parseInt(e.target.value, 10) || 0 }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:343:13" })
    ] }, k))
  ] }) });
}
__name(WeightsEditor, "WeightsEditor");
__name2(WeightsEditor, "WeightsEditor");
function ListEditor({ title, items, onChange, placeholder }) {
  const [v, setV] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:354:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:355:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:356:9", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:357:9", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:359:13", children: [
      it,
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => onChange(items.filter((_, idx) => idx !== i)), "onClick"), className: "hover:text-destructive", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:361:15", children: "×" })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:365:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v, onChange: /* @__PURE__ */ __name2((e) => setV(e.target.value), "onChange"), placeholder, "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:366:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => {
        if (v.trim()) {
          onChange([...items, v.trim()]);
          setV("");
        }
      }, "onClick"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:367:11", children: "Add" })
    ] })
  ] }) });
}
__name(ListEditor, "ListEditor");
__name2(ListEditor, "ListEditor");
function PropertyEditor({ items, onChange }) {
  const [d, setD] = reactExports.useState({ name: "", area: "", basePrice: 12e3 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:377:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:378:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:379:9", children: "Custom properties" }),
    items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b py-1 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:381:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:382:13", children: [
        p.name,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:382:47", children: [
          "· ",
          p.area,
          " · ₹",
          p.basePrice.toLocaleString("en-IN")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => onChange(items.filter((x) => x.id !== p.id)), "onClick"), className: "text-destructive", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:383:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:383:111" }) })
    ] }, p.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:386:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Name", value: d.name, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, name: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:387:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Area", value: d.area, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, area: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:388:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", placeholder: "Base price", value: d.basePrice, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, basePrice: parseInt(e.target.value, 10) || 0 }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:389:11" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => {
      if (!d.name) return;
      onChange([...items, { id: `cp${Date.now()}`, ...d }]);
      setD({ name: "", area: "", basePrice: 12e3 });
    }, "onClick"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:391:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:392:11" }),
      " Add property"
    ] })
  ] }) });
}
__name(PropertyEditor, "PropertyEditor");
__name2(PropertyEditor, "PropertyEditor");
function TcmEditor({ items, onChange }) {
  const [d, setD] = reactExports.useState({ name: "", phone: "", zoneId: "" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:402:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:403:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:404:9", children: "Custom TCMs / coordinators" }),
    items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b py-1 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:406:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:407:13", children: [
        p.name,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:407:47", children: [
          "· ",
          p.phone,
          " · zone ",
          p.zoneId
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => onChange(items.filter((x) => x.id !== p.id)), "onClick"), className: "text-destructive", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:408:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:408:111" }) })
    ] }, p.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:411:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Name", value: d.name, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, name: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:412:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Phone", value: d.phone, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, phone: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:413:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Zone id", value: d.zoneId, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, zoneId: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:414:11" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => {
      if (!d.name) return;
      onChange([...items, { id: `tcm${Date.now()}`, ...d }]);
      setD({ name: "", phone: "", zoneId: "" });
    }, "onClick"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:416:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:417:11" }),
      " Add TCM"
    ] })
  ] }) });
}
__name(TcmEditor, "TcmEditor");
__name2(TcmEditor, "TcmEditor");
function CustomFieldsEditor({ fields, onChange }) {
  const [d, setD] = reactExports.useState({ id: "", label: "", type: "text", appliesTo: "tour" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:427:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:428:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:429:9", children: "Custom fields" }),
    fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b py-1 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:431:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:432:13", children: [
        f.label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:432:48", children: [
          "· ",
          f.type,
          " · ",
          f.appliesTo
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => onChange(fields.filter((x) => x.id !== f.id)), "onClick"), className: "text-destructive", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:433:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:433:112" }) })
    ] }, f.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:436:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Label", value: d.label, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, label: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:437:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.type, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, type: e.target.value }), "onChange"), className: "h-10 rounded border bg-background px-2 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:438:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "text", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:439:13", children: "text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "number", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:439:47", children: "number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "select", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:439:85", children: "select" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "boolean", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:439:123", children: "boolean" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.appliesTo, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, appliesTo: e.target.value }), "onChange"), className: "h-10 rounded border bg-background px-2 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:441:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tour", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:442:13", children: "tour" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "property", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:442:47", children: "property" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "lead", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:442:89", children: "lead" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => {
        if (!d.label) return;
        onChange([...fields, { ...d, id: `f${Date.now()}` }]);
        setD({ id: "", label: "", type: "text", appliesTo: "tour" });
      }, "onClick"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:444:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:445:13" }),
        " Add"
      ] })
    ] })
  ] }) });
}
__name(CustomFieldsEditor, "CustomFieldsEditor");
__name2(CustomFieldsEditor, "CustomFieldsEditor");
function TargetsEditor({ targets, onChange }) {
  const [d, setD] = reactExports.useState({ id: "", label: "", metric: "tours", scope: "global", value: 100, period: "week" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:456:5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:457:7", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:458:9", children: "Custom targets" }),
    targets.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b py-1 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:460:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:461:13", children: [
        t.label,
        ": ",
        t.value,
        " ",
        t.metric,
        "/",
        t.period,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:461:81", children: [
          "· scope ",
          t.scope,
          t.scopeId ? ":" + t.scopeId : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: /* @__PURE__ */ __name2(() => onChange(targets.filter((x) => x.id !== t.id)), "onClick"), className: "text-destructive", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:462:13", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:462:113" }) })
    ] }, t.id)),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 md:grid-cols-6", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:465:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Label", value: d.label, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, label: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:466:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.metric, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, metric: e.target.value }), "onChange"), className: "h-10 rounded border bg-background px-2 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:467:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tours", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:468:13", children: "tours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "showups", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:468:49", children: "showups" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bookings", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:468:89", children: "bookings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "score", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:468:131", children: "score" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.scope, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, scope: e.target.value }), "onChange"), className: "h-10 rounded border bg-background px-2 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:470:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "global", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:471:13", children: "global" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tcm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:471:51", children: "tcm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "zone", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:471:83", children: "zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "property", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:471:117", children: "property" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Scope id (optional)", value: d.scopeId ?? "", onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, scopeId: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:473:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: d.value, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, value: parseInt(e.target.value, 10) || 0 }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:474:11" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: d.period, onChange: /* @__PURE__ */ __name2((e) => setD({ ...d, period: e.target.value }), "onChange"), className: "h-10 rounded border bg-background px-2 text-sm", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:475:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "day", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:476:13", children: "day" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "week", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:476:45", children: "week" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "month", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:476:79", children: "month" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => {
      if (!d.label) return;
      onChange([...targets, { ...d, id: `tg${Date.now()}` }]);
      setD({ id: "", label: "", metric: "tours", scope: "global", value: 100, period: "week" });
    }, "onClick"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:479:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:480:11" }),
      " Add target"
    ] })
  ] }) });
}
__name(TargetsEditor, "TargetsEditor");
__name2(TargetsEditor, "TargetsEditor");
function ZonesEditor({ zones, onChange }) {
  const { tcms } = useApp();
  const [draft, setDraft] = reactExports.useState({ id: "", name: "", city: "Bangalore", flowOpsLeadName: "", flowOpsLeadPhone: "", tcmIds: [] });
  const upsert = /* @__PURE__ */ __name2((z) => onChange(zones.map((x) => x.id === z.id ? z : x)), "upsert");
  const remove = /* @__PURE__ */ __name2((id) => onChange(zones.filter((x) => x.id !== id)), "remove");
  const add = /* @__PURE__ */ __name2(() => {
    const name = draft.name.trim();
    if (!name) return toast.error("Zone name required");
    const id = draft.id.trim() || `z-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    if (zones.some((x) => x.id === id)) return toast.error("Zone id exists");
    onChange([...zones, { ...draft, id, name }]);
    setDraft({ id: "", name: "", city: "Bangalore", flowOpsLeadName: "", flowOpsLeadPhone: "", tcmIds: [] });
    toast.success("Zone added");
  }, "add");
  const toggleTcm = /* @__PURE__ */ __name2((z, tcmId) => {
    const tcmIds = z.tcmIds.includes(tcmId) ? z.tcmIds.filter((x) => x !== tcmId) : [...z.tcmIds, tcmId];
    upsert({ ...z, tcmIds });
  }, "toggleTcm");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:509:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:510:7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:511:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:512:11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:512:68" }),
        " Org structure — Bangalore zones"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:513:11", children: "Each zone owns a Flow Ops lead and a roster of TCMs. Routing rule R04 uses this map to auto-assign new leads. Edit a zone or add a new one — changes apply immediately across the CRM." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 lg:grid-cols-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:521:7", children: zones.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:523:11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 p-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:524:13", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:525:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:526:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:527:19" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: z.name, onChange: /* @__PURE__ */ __name2((e) => upsert({ ...z, name: e.target.value }), "onChange"), className: "h-8 max-w-[200px] font-medium", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:528:19" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-border bg-muted/30 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:529:19", children: z.city })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: /* @__PURE__ */ __name2(() => remove(z.id), "onClick"), className: "h-7", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:531:17", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:531:96" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:533:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:534:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:535:19", children: "Flow Ops lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: z.flowOpsLeadName ?? "", onChange: /* @__PURE__ */ __name2((e) => upsert({ ...z, flowOpsLeadName: e.target.value }), "onChange"), placeholder: "Name", className: "h-8", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:536:19" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:538:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:539:19", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: z.flowOpsLeadPhone ?? "", onChange: /* @__PURE__ */ __name2((e) => upsert({ ...z, flowOpsLeadPhone: e.target.value }), "onChange"), placeholder: "9000010000", className: "h-8", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:540:19" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:543:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-[11px] flex items-center gap-1", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:544:17", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:544:72" }),
          " TCMs in this zone"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap gap-1.5", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:545:17", children: [
          tcms.map((t) => {
            const on = z.tcmIds.includes(t.id);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: /* @__PURE__ */ __name2(() => toggleTcm(z, t.id), "onClick"),
                className: "rounded-full border px-2 py-0.5 text-[11px] transition " + (on ? "border-accent bg-accent/15 text-accent" : "border-border bg-muted/20 text-muted-foreground hover:border-accent/40"),
                "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:549:23",
                children: t.name
              },
              t.id
            );
          }),
          tcms.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:562:41", children: "No TCMs in store yet." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:565:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px]", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:566:17", children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: z.notes ?? "", onChange: /* @__PURE__ */ __name2((e) => upsert({ ...z, notes: e.target.value }), "onChange"), rows: 2, className: "text-xs", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:567:17" })
      ] })
    ] }) }, z.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:574:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:575:9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:575:38", children: "+ Add new zone" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid gap-2 p-4 md:grid-cols-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:576:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Zone name (e.g. HSR Layout)", value: draft.name, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, name: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:577:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "City", value: draft.city, onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, city: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:578:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Flow Ops lead name", value: draft.flowOpsLeadName ?? "", onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, flowOpsLeadName: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:579:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Lead phone", value: draft.flowOpsLeadPhone ?? "", onChange: /* @__PURE__ */ __name2((e) => setDraft({ ...draft, flowOpsLeadPhone: e.target.value }), "onChange"), "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:580:11" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: add, className: "md:col-span-4 md:w-fit", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:581:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:581:78" }),
          " Add zone"
        ] })
      ] })
    ] })
  ] });
}
__name(ZonesEditor, "ZonesEditor");
__name2(ZonesEditor, "ZonesEditor");
function RoadmapCard() {
  const items = [
    { title: "Zone P&L dashboard", body: "Per-zone bookings, conversion %, supply utilisation. Compare Koramangala vs Whitefield in one screen." },
    { title: "Flow-Ops daily standup view", body: "Auto-generated 8am brief: open leads, SLA breaches, top-3 hot rooms, TCMs at risk of missing target." },
    { title: "TCM mobile mode", body: "Compact, action-first UI for on-tour TCMs — start tour, capture feedback, request block, all in 3 taps." },
    { title: "Owner-facing pipeline", body: "Show each owner the count of qualified leads currently being pitched into their property — drives compliance." },
    { title: "PDF auto-attach over WhatsApp Cloud API", body: "Replace Drive deep-link with native PDF send via Meta WhatsApp Business API. Per-message audit trail." },
    { title: "Conversion learning loop", body: "Track which Plan A vs Plan B converted and feed back into matcher weights per zone, persona and budget band." },
    { title: "Lead scoring v2 with intent decay", body: "Decay confidence the longer a lead is unattended; auto-revive with Coach scripts at week 1, 2 and 4." },
    { title: "Bulk WhatsApp broadcast guardrails", body: "Throttle, dedupe and template-validate broadcasts so HR can run nudges without burning the customer relationship." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:600:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:601:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:602:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-4 w-4 text-accent", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:602:66" }),
        " What I recommend next"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:603:9", children: "Plan-of-record for the next iterations. Optimised for your zone-led org (Bangalore zones → Flow Ops lead → TCM roster). Items can be triaged here and converted into work." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "grid gap-2 md:grid-cols-2", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:607:7", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-muted/10 p-3", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:609:11", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:610:13", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", "data-tsd-source": "/src/myt/pages/SettingsPage.tsx:611:13", children: it.body })
    ] }, it.title)) })
  ] });
}
__name(RoadmapCard, "RoadmapCard");
__name2(RoadmapCard, "RoadmapCard");
export {
  SettingsPage as S
};
