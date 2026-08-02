var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useApp, c as useMountedNow, q as cn } from "./router-xBhBcQRf.mjs";
import { an as useGame, ao as buildCoachReport, ap as whoKey } from "./AppShell-BN067m2r.mjs";
import { S as Sparkles, F as Flame, q as ChevronRight } from "../_libs/lucide-react.mjs";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function CoachInline({ page, hint, compact = false }) {
  const role = useApp((s) => s.role);
  const currentTcmId = useApp((s) => s.currentTcmId);
  const tcms = useApp((s) => s.tcms);
  const leads = useApp((s) => s.leads);
  const tours = useApp((s) => s.tours);
  const followUps = useApp((s) => s.followUps);
  const activities = useApp((s) => s.activities);
  const bookings = useApp((s) => s.bookings);
  const handoffs = useApp((s) => s.handoffs);
  const [now, mounted] = useMountedNow();
  const who = whoKey(role, currentTcmId);
  useGame((s) => s.byUser[who]);
  const stats = mounted ? useGame.getState().getStats(who) : { streak: 0 };
  const report = reactExports.useMemo(() => {
    if (!mounted) return null;
    return buildCoachReport({
      role,
      currentTcmId,
      tcms,
      leads,
      tours,
      followUps,
      activities,
      bookings,
      handoffs,
      now,
      ownerSignals: { staleRooms: 0, pendingBlocks: 0 }
    });
  }, [role, currentTcmId, tcms, leads, tours, followUps, activities, bookings, handoffs, now, mounted]);
  if (!mounted || !report) return null;
  const top = report.missed[0] ?? report.todo[0];
  const message = hint ?? (top ? top.title : report.mission.done >= report.mission.target ? "Mission cleared. Use this hour to revive a cold lead." : "Coach has nothing urgent — keep working the deck.");
  const severity = top ? report.missed[0] ? "missed" : "todo" : "calm";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/coach",
      className: cn(
        "group relative flex items-center gap-2 rounded-md border text-[12px] transition-colors",
        compact ? "px-2.5 py-1.5" : "px-3 py-2",
        severity === "missed" ? "border-destructive/30 bg-destructive/5 hover:bg-destructive/10" : severity === "todo" ? "border-accent/30 bg-accent/5 hover:bg-accent/10" : "border-border bg-card hover:bg-muted/50"
      ),
      "data-tsd-source": "/src/components/CoachInline.tsx:70:5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Sparkles,
          {
            className: cn(
              "h-3.5 w-3.5 shrink-0",
              severity === "missed" ? "text-destructive" : severity === "todo" ? "text-accent" : "text-muted-foreground"
            ),
            "data-tsd-source": "/src/components/CoachInline.tsx:82:7"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium truncate flex-1 text-foreground", "data-tsd-source": "/src/components/CoachInline.tsx:88:7", children: message }),
        top && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-muted-foreground shrink-0 hidden sm:inline", "data-tsd-source": "/src/components/CoachInline.tsx:90:9", children: [
          "+",
          top.xp,
          " XP"
        ] }),
        stats.streak > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-warning font-mono text-[10px] shrink-0", "data-tsd-source": "/src/components/CoachInline.tsx:95:9", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3", "data-tsd-source": "/src/components/CoachInline.tsx:96:11" }),
          " ",
          stats.streak,
          "d"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0 group-hover:translate-x-0.5 transition-transform", "data-tsd-source": "/src/components/CoachInline.tsx:99:7" })
      ]
    }
  );
}
__name(CoachInline, "CoachInline");
__name2(CoachInline, "CoachInline");
export {
  CoachInline as C
};
