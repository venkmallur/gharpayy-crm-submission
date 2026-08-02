var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function blockHoursForIntent(intent) {
  if (intent === "hard") return 4;
  if (intent === "medium") return 1;
  return 0;
}
__name(blockHoursForIntent, "blockHoursForIntent");
__name2(blockHoursForIntent, "blockHoursForIntent");
function createBlockForTour(tour, rooms, existingBlocks) {
  const hours = blockHoursForIntent(tour.intent);
  if (hours === 0) return null;
  if (!tour.propertyId) return null;
  const propRooms = rooms.filter((r) => r.propertyId === tour.propertyId);
  if (propRooms.length === 0) return null;
  const activeBlockCounts = /* @__PURE__ */ new Map();
  existingBlocks.filter((b) => b.status === "active" && new Date(b.expiresAt).getTime() > Date.now()).forEach((b) => activeBlockCounts.set(b.roomId, (activeBlockCounts.get(b.roomId) ?? 0) + 1));
  const free = propRooms.find((r) => {
    const blocked = activeBlockCounts.get(r.id) ?? 0;
    return r.bedsTotal - r.bedsOccupied - blocked > 0;
  });
  if (!free) return null;
  return {
    id: `blk-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    roomId: free.id,
    propertyId: tour.propertyId,
    tourId: tour.id,
    leadName: tour.leadName,
    intent: tour.intent,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    expiresAt: new Date(Date.now() + hours * 60 * 60 * 1e3).toISOString(),
    status: "active"
  };
}
__name(createBlockForTour, "createBlockForTour");
__name2(createBlockForTour, "createBlockForTour");
function timeLeft(expiresAt) {
  const ms = new Date(expiresAt).getTime() - Date.now();
  const mins = Math.max(0, Math.floor(ms / 6e4));
  if (ms <= 0) return { mins: 0, expired: true, label: "expired" };
  if (mins >= 60) return { mins, expired: false, label: `${Math.floor(mins / 60)}h ${mins % 60}m` };
  return { mins, expired: false, label: `${mins}m` };
}
__name(timeLeft, "timeLeft");
__name2(timeLeft, "timeLeft");
export {
  createBlockForTour as c,
  timeLeft as t
};
