var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { an as useOwner, c as useMountedNow, k as Button } from "./router-xBhBcQRf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { s as Clock, X, b as Check } from "../_libs/lucide-react.mjs";

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
function OwnerBlocks() {
  const { currentOwnerId, blocks, decideBlock } = useOwner();
  const [now, mounted] = useMountedNow(5e3);
  const my = blocks.filter((b) => b.ownerId === currentOwnerId);
  const pending = my.filter((b) => b.state === "pending");
  const decided = my.filter((b) => b.state !== "pending");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:15:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:16:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-semibold", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:17:9", children: "Block requests · 15-min response" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:18:9", children: "High-intent leads waiting for your approval. Auto-released after 15 min." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:21:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:22:9", children: [
        "Pending (",
        pending.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:23:9", children: [
        pending.map((b) => {
          const remaining = mounted ? new Date(b.expiresAt).getTime() - now : 0;
          const minsLeft = Math.max(0, Math.floor(remaining / 6e4));
          const secsLeft = Math.max(0, Math.floor(remaining % 6e4 / 1e3));
          const urgent = remaining < 5 * 60 * 1e3;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl border p-3 ${urgent ? "border-destructive/40 bg-destructive/5" : "border-border bg-card"}`, "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:30:15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:31:17", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:32:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:33:21", children: b.leadName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:34:21", children: [
                "Room ",
                b.roomId,
                " · intent ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium capitalize", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:34:97", children: b.intent })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:36:19", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-mono inline-flex items-center gap-1 ${urgent ? "text-destructive" : "text-muted-foreground"}`, "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:37:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:38:23" }),
                mounted ? `${minsLeft}:${String(secsLeft).padStart(2, "0")}` : "—:—"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: /* @__PURE__ */ __name2(() => {
                decideBlock(b.id, "rejected");
                toast("Block rejected");
              }, "onClick"), "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:41:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:42:23" }),
                " Reject"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: /* @__PURE__ */ __name2(() => {
                decideBlock(b.id, "approved");
                toast.success("Block approved · TCM notified");
              }, "onClick"), "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:44:21", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 mr-1", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:45:23" }),
                " Approve"
              ] })
            ] })
          ] }) }, b.id);
        }),
        pending.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:53:13", children: "Inbox zero — no pending blocks." })
      ] })
    ] }),
    decided.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:61:9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:62:11", children: [
        "Recent (",
        decided.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:63:11", children: decided.slice(0, 8).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card px-3 py-2 text-xs flex items-center justify-between", "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:65:15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:66:17", children: [
          b.leadName,
          " · room ",
          b.roomId
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-medium ${b.state === "approved" ? "text-success" : b.state === "rejected" ? "text-destructive" : "text-muted-foreground"}`, "data-tsd-source": "/src/owner/pages/OwnerBlocks.tsx:67:17", children: b.state.replace("_", " ") })
      ] }, b.id)) })
    ] })
  ] });
}
__name(OwnerBlocks, "OwnerBlocks");
__name2(OwnerBlocks, "OwnerBlocks");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/blocks.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerBlocks, { "data-tsd-source": "/src/routes/owner/blocks.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
