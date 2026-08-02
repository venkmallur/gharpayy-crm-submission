var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AppShell } from "./AppShell-rXFHrudv.mjs";
import { an as useOwner, aQ as isMediaFresh, k as Button } from "./router-Cbs6ivkN.mjs";
import { h as useParams, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import { s as Clock, bE as Camera, bp as Upload } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "../_libs/isbot.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function OwnerMedia() {
  const { roomId } = useParams({ from: "/owner/media/$roomId" });
  const { media, uploadMedia } = useOwner();
  const existing = media.find((m) => m.roomId === roomId);
  const [photos, setPhotos] = reactExports.useState(existing?.photos ?? []);
  const [video, setVideo] = reactExports.useState(existing?.videoUrl ?? "");
  const fresh = isMediaFresh(existing);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-2xl", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:19:5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:20:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-semibold", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:21:9", children: "Room media · proof of vacancy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:22:9", children: "Vacant rooms need 3 photos + 1 video. Media expires in 7 days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/owner/rooms", className: "text-xs text-accent", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:23:9", children: "← Back to rooms" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 space-y-3", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:26:7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:27:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:28:11", children: [
          "Room ",
          roomId
        ] }),
        existing && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[11px] inline-flex items-center gap-1 ${fresh ? "text-success" : "text-destructive"}`, "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:30:13", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:31:15" }),
          " ",
          fresh ? `Fresh · expires ${new Date(existing.expiresAt).toLocaleDateString()}` : "Expired"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:36:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-1", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:37:11", children: "Photos (3 required)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:38:11", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: /* @__PURE__ */ __name2(() => {
              const next = [...photos];
              next[i] = "/placeholder.svg";
              setPhotos(next);
            }, "onClick"),
            className: "aspect-square rounded-md border border-dashed border-border bg-muted/30 hover:bg-muted/60 flex items-center justify-center",
            "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:40:15",
            children: photos[i] ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photos[i], alt: "", className: "w-full h-full object-cover rounded-md", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:51:19" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-5 w-5 text-muted-foreground", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:53:19" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:60:9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mb-1", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:61:11", children: "Video (1 required)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: /* @__PURE__ */ __name2(() => setVideo("https://example.com/room-video.mp4"), "onClick"),
            className: "w-full h-24 rounded-md border border-dashed border-border bg-muted/30 hover:bg-muted/60 flex items-center justify-center text-xs text-muted-foreground gap-2",
            "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:62:11",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4", "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:67:13" }),
              " ",
              video ? "Video attached · tap to replace" : "Attach short walkthrough video"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          disabled: photos.filter(Boolean).length < 3 || !video,
          onClick: /* @__PURE__ */ __name2(() => {
            uploadMedia(roomId, photos.filter(Boolean), video);
            toast.success("Media uploaded · 7-day countdown started");
          }, "onClick"),
          className: "w-full",
          "data-tsd-source": "/src/owner/pages/OwnerMedia.tsx:71:9",
          children: "Upload & start 7-day timer"
        }
      )
    ] })
  ] });
}
__name(OwnerMedia, "OwnerMedia");
__name2(OwnerMedia, "OwnerMedia");
const SplitComponent = /* @__PURE__ */ __name2(() => /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { "data-tsd-source": "/src/routes/owner/media.$roomId.tsx:7:20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerMedia, { "data-tsd-source": "/src/routes/owner/media.$roomId.tsx:7:30" }) }), "SplitComponent");
export {
  SplitComponent as component
};
