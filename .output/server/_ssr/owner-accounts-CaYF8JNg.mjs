var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell } from "./AppShell-BN067m2r.mjs";
import { H as useOwnerSession, J as allOwnerAccounts, B as Badge, k as Button, X as Input, L as ownerScorecard, K as pgsForOwnerCode, N as loginAsOwner } from "./router-xBhBcQRf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { i as ShieldCheck, A as ArrowRight, a3 as Search, P as Phone, B as Building2, bc as LogIn } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";




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
function OwnerAccountsPage() {
  const session = useOwnerSession();
  const navigate = useNavigate();
  const [q, setQ] = reactExports.useState("");
  const accounts = reactExports.useMemo(() => allOwnerAccounts(), []);
  const filtered = reactExports.useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return accounts;
    return accounts.filter((a) => a.name.toLowerCase().includes(t) || a.phone.includes(t) || a.code.toLowerCase().includes(t));
  }, [accounts, q]);
  const handleLogin = /* @__PURE__ */ __name2((code, name) => {
    loginAsOwner(code);
    toast.success(`Signed in as ${name}`);
    navigate({
      to: "/owner-portal"
    });
  }, "handleLogin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-6xl mx-auto space-y-4", "data-tsd-source": "/src/routes/owner-accounts.tsx:41:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-3 flex-wrap", "data-tsd-source": "/src/routes/owner-accounts.tsx:42:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/routes/owner-accounts.tsx:43:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-display font-semibold flex items-center gap-2", "data-tsd-source": "/src/routes/owner-accounts.tsx:44:11", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary", "data-tsd-source": "/src/routes/owner-accounts.tsx:45:13" }),
          " Owner accounts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", "data-tsd-source": "/src/routes/owner-accounts.tsx:47:11", children: "One account per owner in the Property Hub. Sign in as any owner to update live inventory — Impact will only schedule tours against beds the owner has confirmed available." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", "data-tsd-source": "/src/routes/owner-accounts.tsx:52:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", "data-tsd-source": "/src/routes/owner-accounts.tsx:53:11", children: [
          accounts.length,
          " owners"
        ] }),
        session && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", "data-tsd-source": "/src/routes/owner-accounts.tsx:55:13", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/owner-portal", "data-tsd-source": "/src/routes/owner-accounts.tsx:56:15", children: [
          "My portal ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 ml-1", "data-tsd-source": "/src/routes/owner-accounts.tsx:56:50" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-tsd-source": "/src/routes/owner-accounts.tsx:62:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground", "data-tsd-source": "/src/routes/owner-accounts.tsx:63:9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: /* @__PURE__ */ __name2((e) => setQ(e.target.value), "onChange"), placeholder: "Search owner by name, phone or account code…", className: "pl-9 h-9", "data-tsd-source": "/src/routes/owner-accounts.tsx:64:9" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", "data-tsd-source": "/src/routes/owner-accounts.tsx:72:7", children: [
      filtered.map((a) => {
        const sc = ownerScorecard(a.code);
        const pgs = pgsForOwnerCode(a.code);
        const isMe = session === a.code;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border bg-card p-4 space-y-2 ${isMe ? "border-primary/60 ring-1 ring-primary/30" : ""}`, "data-tsd-source": "/src/routes/owner-accounts.tsx:78:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", "data-tsd-source": "/src/routes/owner-accounts.tsx:79:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", "data-tsd-source": "/src/routes/owner-accounts.tsx:80:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", "data-tsd-source": "/src/routes/owner-accounts.tsx:81:19", children: a.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-2 mt-0.5", "data-tsd-source": "/src/routes/owner-accounts.tsx:82:19", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", "data-tsd-source": "/src/routes/owner-accounts.tsx:83:21", children: a.code }),
                a.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${a.phone}`, className: "flex items-center gap-1 hover:text-primary", "data-tsd-source": "/src/routes/owner-accounts.tsx:85:23", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3", "data-tsd-source": "/src/routes/owner-accounts.tsx:86:25" }),
                  a.phone
                ] })
              ] })
            ] }),
            isMe && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px]", "data-tsd-source": "/src/routes/owner-accounts.tsx:91:26", children: "Signed in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", "data-tsd-source": "/src/routes/owner-accounts.tsx:94:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1", "data-tsd-source": "/src/routes/owner-accounts.tsx:95:17", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3 w-3", "data-tsd-source": "/src/routes/owner-accounts.tsx:95:60" }),
              a.pgCount,
              " PG",
              a.pgCount > 1 ? "s" : ""
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", "data-tsd-source": "/src/routes/owner-accounts.tsx:96:17", children: [
              sc.availableBeds,
              " beds live"
            ] }),
            sc.paused > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", className: "text-[10px]", "data-tsd-source": "/src/routes/owner-accounts.tsx:97:35", children: [
              sc.paused,
              " paused"
            ] }),
            sc.stale > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-[10px] border-do-now/40 text-do-now", "data-tsd-source": "/src/routes/owner-accounts.tsx:98:34", children: [
              sc.stale,
              " stale"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground line-clamp-2", "data-tsd-source": "/src/routes/owner-accounts.tsx:101:15", children: [
            pgs.slice(0, 3).map((p) => p.name).join(" · "),
            pgs.length > 3 && ` +${pgs.length - 3} more`
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "w-full h-8 text-xs gap-1", variant: isMe ? "outline" : "default", onClick: /* @__PURE__ */ __name2(() => handleLogin(a.code, a.name), "onClick"), "data-tsd-source": "/src/routes/owner-accounts.tsx:106:15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-3.5 w-3.5", "data-tsd-source": "/src/routes/owner-accounts.tsx:112:17" }),
            isMe ? "Open portal" : "Sign in as owner"
          ] })
        ] }, a.code);
      }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full text-center text-sm text-muted-foreground py-12", "data-tsd-source": "/src/routes/owner-accounts.tsx:119:11", children: [
        "No owners match “",
        q,
        "”."
      ] })
    ] })
  ] });
}
__name(OwnerAccountsPage, "OwnerAccountsPage");
__name2(OwnerAccountsPage, "OwnerAccountsPage");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner-accounts.tsx:15:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerAccountsPage, { "data-tsd-source": "/src/routes/owner-accounts.tsx:15:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
