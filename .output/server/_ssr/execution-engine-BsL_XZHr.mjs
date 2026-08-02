var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
const SCRIPTS = [
  // ───────── PHASE 1 ─────────
  {
    id: "L0-1A",
    phase: 1,
    anchor: "L",
    dayOffset: 0,
    timeBucket: "any",
    condition: "first-touch",
    label: "L+0 · Standard opener",
    body: "Hi {{name}}, this is {{agent}} from Gharpayy. You were looking for a PG in {{area}} — I have a few options ready that match your budget and move-in date. Can I share them?",
    followUpKind: "message"
  },
  {
    id: "L0-1B",
    phase: 1,
    anchor: "L",
    dayOffset: 0,
    timeBucket: "any",
    condition: "from-portal",
    label: "L+0 · Portal-sourced opener",
    body: "Hi {{name}}, saw your enquiry on {{portal}} for a PG in {{area}}. I'm {{agent}} from Gharpayy — we have verified PGs in that area with immediate availability. Want me to shortlist 3 options for you right now?",
    followUpKind: "message"
  },
  {
    id: "L0-1C",
    phase: 1,
    anchor: "L",
    dayOffset: 0,
    timeBucket: "any",
    condition: "budget-known",
    label: "L+0 · Budget-aware opener",
    body: "Hi {{name}}, this is {{agent}} from Gharpayy. You mentioned a budget of ₹{{budget}} for {{area}} — I have exactly what you're looking for. Sharing options in a moment.",
    followUpKind: "message"
  },
  {
    id: "L0-shortlist",
    phase: 1,
    anchor: "L",
    dayOffset: 0,
    timeBucket: "any",
    condition: "replied",
    label: "L+0 · Send 3 shortlisted options",
    body: "Here are the best 3 options for you in {{area}}:\n\n[Property A] — ₹{{price}}/month | 1 differentiating line\n[Property B] — ₹{{price}}/month | 1 differentiating line\n[Property C] — ₹{{price}}/month | 1 differentiating line\n\nAll are verified, move-in ready. Want to visit any of these today or tomorrow?",
    followUpKind: "close-attempt"
  },
  {
    id: "L0-no-reply",
    phase: 1,
    anchor: "L",
    dayOffset: 0,
    timeBucket: "afternoon",
    condition: "no-reply",
    label: "L+0 · 1hr nudge (no reply)",
    body: "{{name}}, whenever you get a chance — I've shortlisted some PGs in {{area}} that fit your budget. Takes 2 minutes to look. Want me to send them over?",
    followUpKind: "message"
  },
  {
    id: "L0-eod",
    phase: 1,
    anchor: "L",
    dayOffset: 0,
    timeBucket: "evening",
    label: "L+0 · End-of-day check",
    body: "{{name}}, quick check before I wrap up — are you still looking for a PG in {{area}}? I can hold a visit slot for you for tomorrow morning if that works. Just say yes and I'll confirm it.",
    followUpKind: "close-attempt"
  },
  {
    id: "L1-morning-replied",
    phase: 1,
    anchor: "L",
    dayOffset: 1,
    timeBucket: "morning",
    condition: "replied",
    label: "L+1 · Morning (had replied)",
    body: "{{name}}, good morning. Did you get a chance to check the options I sent? Which one caught your eye? I can book your visit for today itself.",
    followUpKind: "close-attempt"
  },
  {
    id: "L1-morning-never",
    phase: 1,
    anchor: "L",
    dayOffset: 1,
    timeBucket: "morning",
    condition: "no-reply",
    label: "L+1 · Morning (never replied)",
    body: "{{name}}, good morning. I know you're probably busy — just wanted to make sure the options I have for {{area}} are still relevant. Your move-in is {{month}}, right? I have rooms available for that date.",
    followUpKind: "message"
  },
  {
    id: "L1-afternoon",
    phase: 1,
    anchor: "L",
    dayOffset: 1,
    timeBucket: "afternoon",
    label: "L+1 · Afternoon scarcity push",
    body: "{{name}}, I'll be straight — I have 2 other people looking at the same properties in {{area}} this week. I'd hate for you to miss out because of timing. Can we fix a visit for tomorrow? Takes 20 minutes, you'll know immediately if it's right for you.",
    followUpKind: "close-attempt"
  },
  {
    id: "L1-obj-photos",
    phase: 1,
    anchor: "L",
    dayOffset: 1,
    timeBucket: "any",
    condition: "objection-photos",
    label: "L+1 · Objection: send photos first",
    body: "I'll send photos right now — but just so you know, photos don't show the actual room size, the building, the neighborhood feel. The visit is what actually helps you decide. Let me send photos and book the visit simultaneously?",
    followUpKind: "message"
  },
  {
    id: "L1-obj-thinking",
    phase: 1,
    anchor: "L",
    dayOffset: 1,
    timeBucket: "any",
    condition: "objection-thinking",
    label: "L+1 · Objection: I'll let you know",
    body: "Of course. Can I ask — what are you figuring out in the meantime? Budget, location, timing? If I know what's holding you back, I can sort it before the visit itself.",
    followUpKind: "message"
  },
  {
    id: "L1-obj-rates",
    phase: 1,
    anchor: "L",
    dayOffset: 1,
    timeBucket: "any",
    condition: "objection-rates",
    label: "L+1 · Objection: share your rates",
    body: "Sharing them right now. The range in {{area}} is ₹X to ₹Y depending on the room type. What's your max comfortable number? I'll filter accordingly.",
    followUpKind: "message"
  },
  {
    id: "L1-evening",
    phase: 1,
    anchor: "L",
    dayOffset: 1,
    timeBucket: "evening",
    label: "L+1 · Last touch of day",
    body: "{{name}}, last message from me today. If tomorrow works for a visit, just reply with a time — morning or evening — and I'll confirm everything. If your situation changed and you're no longer looking, just let me know. Either way works for me.",
    followUpKind: "message"
  },
  {
    id: "L2-morning",
    phase: 1,
    anchor: "L",
    dayOffset: 2,
    timeBucket: "morning",
    label: "L+2 · Last active push",
    body: "{{name}}, good morning. Two days since we connected — I want to give this one more shot before I stop following up. Are you still looking for a PG in {{area}}?\n\nIf yes — let me book a visit for you today.\nIf not — just say so and I won't bother you again.",
    followUpKind: "close-attempt"
  },
  {
    id: "L2-afternoon",
    phase: 1,
    anchor: "L",
    dayOffset: 2,
    timeBucket: "afternoon",
    condition: "replied",
    label: "L+2 · Afternoon — fix a time",
    body: "{{name}}, let's just fix a time right now. Today evening or tomorrow morning — which works? I'll send the address and everything once you confirm.",
    followUpKind: "close-attempt"
  },
  {
    id: "L3-cold",
    phase: 1,
    anchor: "L",
    dayOffset: 7,
    timeBucket: "any",
    condition: "ci-drip",
    label: "L+7 · Cold re-touch (warm only)",
    body: "{{name}}, checking in after some time. Still looking for a PG in {{area}}? Availability changes week to week — I can give you a fresh list if you're still in the market.",
    followUpKind: "message"
  },
  // ───────── PHASE 2 ─────────
  {
    id: "T-confirm",
    phase: 2,
    anchor: "T",
    dayOffset: -99,
    timeBucket: "any",
    label: "Tour confirmation (immediate)",
    body: "Confirmed! Your visit to {{property}} is scheduled for {{date}} at {{time}}.\n\nAddress: {{address}}\n\nI'll be your point of contact for the visit. Save this number. If anything comes up, message me directly and we'll sort it.",
    followUpKind: "visit-confirm"
  },
  {
    id: "T-2",
    phase: 2,
    anchor: "T",
    dayOffset: -2,
    timeBucket: "any",
    label: "T-2 · Two days before",
    body: "{{name}}, your visit to {{property}} is in 2 days — {{date}} at {{time}}. Just checking in to make sure nothing changed on your end. If you need to reschedule, better to do it now so we can lock another slot quickly.",
    followUpKind: "visit-confirm"
  },
  {
    id: "T-1",
    phase: 2,
    anchor: "T",
    dayOffset: -1,
    timeBucket: "evening",
    label: "T-1 · Day before (6-8 PM)",
    body: "{{name}}, see you tomorrow at {{time}} at {{property}}. Here's the address one more time: {{address}}.\n\nA few things to keep in mind:\nParking is available [yes/no].\nThe visit takes about 20-25 minutes.\nBring your ID if you want to proceed with booking on the spot — we can sort the paperwork same day.\n\nLooking forward to showing you the place.",
    followUpKind: "visit-confirm"
  },
  {
    id: "T0-morning",
    phase: 2,
    anchor: "T",
    dayOffset: 0,
    timeBucket: "morning",
    label: "T-0 morning · 2h before",
    body: "{{name}}, good morning. See you today at {{time}} at {{property}}. I'll be there — message me if you're running late or need directions. {{address}}",
    followUpKind: "visit-confirm"
  },
  {
    id: "T0-no-show-30",
    phase: 2,
    anchor: "T",
    dayOffset: 0,
    timeBucket: "any",
    condition: "no-show",
    label: "T-0 · No-show after 30 min",
    body: "{{name}}, I'm at {{property}} — did something come up? Happens. Want to reschedule for this evening or tomorrow? Just let me know and I'll lock it right now.",
    followUpKind: "escalation"
  },
  {
    id: "T0-no-show-3h",
    phase: 2,
    anchor: "T",
    dayOffset: 0,
    timeBucket: "any",
    condition: "no-show-3h",
    label: "T-0 · No-show after 3h",
    body: "{{name}}, no problem if today didn't work. I've kept your slot open — want to visit tomorrow? Takes 5 seconds to confirm.",
    followUpKind: "escalation"
  },
  // ───────── PHASE 3 ─────────
  {
    id: "T0-post-good",
    phase: 3,
    anchor: "T",
    dayOffset: 0,
    timeBucket: "any",
    condition: "post-visit-good",
    label: "T+0 · Post-visit (went well)",
    body: "{{name}}, great meeting you today. How did you find {{property}}? Most people decide the same day they visit — the room is still fresh, the price is locked, and the process takes about 10 minutes. Want to go ahead?",
    followUpKind: "close-attempt"
  },
  {
    id: "T0-post-unsure",
    phase: 3,
    anchor: "T",
    dayOffset: 0,
    timeBucket: "any",
    condition: "post-visit-unsure",
    label: "T+0 · Post-visit (unsure)",
    body: "{{name}}, I know you're still thinking it over. What was the one thing that didn't feel right? Tell me honestly — if it's fixable, I'll fix it. If it's not, I'd rather you know now than waste your time.",
    followUpKind: "close-attempt"
  },
  {
    id: "T0-post-comparing",
    phase: 3,
    anchor: "T",
    dayOffset: 0,
    timeBucket: "any",
    condition: "post-visit-comparing",
    label: "T+0 · Post-visit (comparing)",
    body: "{{name}}, totally makes sense. How many more places are you visiting? Once you've seen them, tell me what you found — I'll be straight with you about how {{property}} stacks up.",
    followUpKind: "message"
  },
  {
    id: "T0-post-eod",
    phase: 3,
    anchor: "T",
    dayOffset: 0,
    timeBucket: "evening",
    condition: "post-visit-eod",
    label: "T+0 · EOD if no response",
    body: "{{name}}, hope the visit was useful. If you have any questions about {{property}} — price, safety, rules, anything — just ask. I'd rather answer questions than have you decide without full information.",
    followUpKind: "message"
  },
  {
    id: "T1-hot",
    phase: 3,
    anchor: "T",
    dayOffset: 1,
    timeBucket: "morning",
    condition: "hot",
    label: "T+1 · HOT lead",
    body: "{{name}}, good morning. Ready to lock the room? I can have everything sorted for you in one go — booking confirmation, agreement details, move-in logistics. Just say yes.",
    followUpKind: "close-attempt"
  },
  {
    id: "T1-warm",
    phase: 3,
    anchor: "T",
    dayOffset: 1,
    timeBucket: "morning",
    condition: "warm",
    label: "T+1 · WARM lead",
    body: "{{name}}, good morning. Did you visit any other places yesterday? Where did things land? I want to make sure you have the full picture before you decide.",
    followUpKind: "message"
  },
  {
    id: "T1-cold",
    phase: 3,
    anchor: "T",
    dayOffset: 1,
    timeBucket: "morning",
    condition: "cold",
    label: "T+1 · COLD lead",
    body: "{{name}}, just checking in. Is {{area}} still the right location for you, or did something change? Happy to explore other neighborhoods if needed.",
    followUpKind: "message"
  },
  {
    id: "T1-obj-price",
    phase: 3,
    anchor: "T",
    dayOffset: 1,
    timeBucket: "afternoon",
    condition: "objection-price",
    label: "T+1 · Objection: price",
    body: "{{name}}, I hear you on the budget. Can I ask — what's the max you're genuinely comfortable with? Not the ideal, the actual max. Once I know that, I can see what I can do on my end.",
    followUpKind: "message"
  },
  {
    id: "T1-obj-location",
    phase: 3,
    anchor: "T",
    dayOffset: 1,
    timeBucket: "afternoon",
    condition: "objection-location",
    label: "T+1 · Objection: location",
    body: "{{name}}, how important is the exact location vs the commute time? Because I have properties in {{altArea}} that are 10 minutes away and ₹X cheaper. Want me to show you?",
    followUpKind: "message"
  },
  {
    id: "T1-obj-size",
    phase: 3,
    anchor: "T",
    dayOffset: 1,
    timeBucket: "afternoon",
    condition: "objection-size",
    label: "T+1 · Objection: room size/amenity",
    body: "{{name}}, the thing about {{property}} is {{strength}}. But if that specific issue is a dealbreaker, I have {{altProperty}} which fixes that — want to visit that one before you decide?",
    followUpKind: "message"
  },
  {
    id: "T1-obj-family",
    phase: 3,
    anchor: "T",
    dayOffset: 1,
    timeBucket: "afternoon",
    condition: "objection-family",
    label: "T+1 · Objection: family approval",
    body: "Completely understand. When's a good time for them to see the place? I can arrange a second visit — even a video call if they're in another city. Let's make it easy for them.",
    followUpKind: "message"
  },
  {
    id: "T2-morning",
    phase: 3,
    anchor: "T",
    dayOffset: 2,
    timeBucket: "morning",
    condition: "last-window",
    label: "T+2 · One-day hold warning",
    body: "{{name}}, I want to be direct with you. The room at {{property}} that you visited — I can hold it for one more day, but after that I have to open it up. If you're serious about {{area}} and {{month}} move-in, today or tomorrow is the decision point.\n\nWhat's the one thing that needs to be resolved for you to say yes?",
    followUpKind: "close-attempt"
  },
  {
    id: "T2-evening",
    phase: 3,
    anchor: "T",
    dayOffset: 2,
    timeBucket: "evening",
    label: "T+2 · Evening close-out",
    body: "{{name}}, last message on this room. Closing it out tomorrow morning. If you want it, reply tonight. If not — no hard feelings, I'll look for something else for you when you're ready.",
    followUpKind: "close-attempt"
  },
  {
    id: "T3-final",
    phase: 3,
    anchor: "T",
    dayOffset: 3,
    timeBucket: "any",
    condition: "final-close",
    label: "T+3 · Final ask",
    body: "{{name}}, I know I've been following up — I'll stop after this. But I want to ask you directly: is there something I got wrong? Wrong property, wrong price, wrong timing? If yes, tell me and I'll fix it. If everything was right and you just need more time — how much time?",
    followUpKind: "close-attempt"
  },
  // ───────── PHASE 4 — CI drip ─────────
  ...[
    [
      -30,
      "CI-30 · One month out",
      "{{name}}, your move-in month is coming up — {{month}}. Just checking if you've sorted your accommodation yet. If you're still looking in {{area}}, things are available now. Closer to the date, options narrow down fast."
    ],
    [
      -21,
      "CI-21 · 3 weeks",
      "{{name}}, 3 weeks to {{month}}. Have you locked a place? I have fresh availability in {{area}} — if you want an updated list, I'll send it right now."
    ],
    [
      -14,
      "CI-14 · 2 weeks",
      "{{name}}, 2 weeks to move-in. This is usually when people start getting anxious about not having a place locked. If you're still searching, tell me your non-negotiables — I'll match against what's available today and send you only the ones that actually fit."
    ],
    [
      -10,
      "CI-10 · 10 days",
      "{{name}}, 10 days left. Rooms at your budget in {{area}} — I'm checking today's availability as I send this. This is genuinely the last window before it becomes a scramble. Want me to send what's open right now?"
    ],
    [
      -7,
      "CI-7 · 1 week",
      "{{name}}, one week. If you haven't locked a place yet, this needs to happen today or tomorrow — not because I'm pushing you, but because move-in-ready rooms with your preferences in {{area}} are running thin. Reply and I'll sort it in one conversation."
    ],
    [
      -5,
      "CI-5 · 5 days",
      "{{name}}, 5 days. I've been following up for a while and I respect your time — so I'll make this simple. If you need a PG in {{area}} for {{month}} move-in, reply right now. I'll handle everything. If your plans changed, just say so — I'll stop reaching out."
    ],
    [
      -3,
      "CI-3 · 3 days",
      "{{name}}, 3 days to move-in. If you don't have a room yet, this is a real problem and I can help solve it today. What's your situation right now?"
    ],
    [
      -1,
      "CI-1 · 1 day",
      "{{name}}, moving tomorrow? If you still need a room, reply now. I'll make it happen today."
    ]
  ].map(([off, label, body]) => ({
    id: `CI${off}`,
    phase: 4,
    anchor: "CI",
    dayOffset: off,
    timeBucket: "any",
    condition: "ci-drip",
    label,
    body,
    followUpKind: off <= -3 ? "close-attempt" : "message"
  }))
];
const OBJECTION_TAGS = [
  "PRICE-HIGH",
  "LOCATION-MISMATCH",
  "COMPARING",
  "FAMILY-APPROVAL",
  "TIMING",
  "AMENITY-GAP",
  "UNRESPONSIVE",
  "SWITCHED-PLATFORM",
  "PLANS-CHANGED",
  "UNKNOWN"
];
const HR = 60 * 60 * 1e3;
const DAY = 24 * HR;
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
__name(startOfDay, "startOfDay");
__name2(startOfDay, "startOfDay");
function daysBetween(a, b) {
  return Math.floor((startOfDay(b).getTime() - startOfDay(a).getTime()) / DAY);
}
__name(daysBetween, "daysBetween");
__name2(daysBetween, "daysBetween");
function bucketForHour(h) {
  if (h < 12) return "morning";
  if (h < 17) return "afternoon";
  return "evening";
}
__name(bucketForHour, "bucketForHour");
__name2(bucketForHour, "bucketForHour");
function derivePhase(lead) {
  const ext = lead;
  if (ext.phase) return ext.phase;
  const anchors = lead.anchors;
  if (ext.stage === "TOURED" || ext.stage === "NEGOTIATING") return 3;
  if (ext.stage === "TOUR_SCHEDULED" || anchors?.tourDate) return 2;
  if (ext.stage === "COLD" || ext.stage === "LOST") return 4;
  return 1;
}
__name(derivePhase, "derivePhase");
__name2(derivePhase, "derivePhase");
function deriveStage(lead) {
  const s = lead.stage;
  if (s) return s;
  switch (lead.state) {
    case "visit-scheduled":
      return "TOUR_SCHEDULED";
    case "visit-done":
      return "TOURED";
    case "converted":
      return "CLOSED";
    case "dropped":
      return "LOST";
    case "dormant":
      return "COLD";
    case "contacted":
    case "interested":
      return "CONTACTED";
    default:
      return "NEW";
  }
}
__name(deriveStage, "deriveStage");
__name2(deriveStage, "deriveStage");
function leadAnchor(lead) {
  return new Date(lead.anchors?.leadDate ?? lead.createdAt);
}
__name(leadAnchor, "leadAnchor");
__name2(leadAnchor, "leadAnchor");
function tourAnchor(lead) {
  const t = lead.anchors?.tourDate;
  return t ? new Date(t) : null;
}
__name(tourAnchor, "tourAnchor");
__name2(tourAnchor, "tourAnchor");
function ciAnchor(lead) {
  const ci = lead.anchors?.checkInDate ?? lead.earliestCheckIn ?? lead.moveInDate;
  if (!ci) return null;
  const d = new Date(ci);
  return isNaN(+d) ? null : d;
}
__name(ciAnchor, "ciAnchor");
__name2(ciAnchor, "ciAnchor");
function hasReplied(lead) {
  return Boolean(lead.replied);
}
__name(hasReplied, "hasReplied");
__name2(hasReplied, "hasReplied");
function lastContactAt(lead) {
  const lc = lead.lastContactAt;
  if (lc) return +new Date(lc);
  return lead.lastActivityAt ? +new Date(lead.lastActivityAt) : null;
}
__name(lastContactAt, "lastContactAt");
__name2(lastContactAt, "lastContactAt");
function interestLevel(lead) {
  const v = lead.interestLevel;
  return v ?? null;
}
__name(interestLevel, "interestLevel");
__name2(interestLevel, "interestLevel");
function pick(phase, anchor, offset, bucket, cond) {
  return SCRIPTS.find((s) => s.phase === phase && s.anchor === anchor && s.dayOffset === offset && (s.timeBucket === bucket || s.timeBucket === "any") && (cond ? s.condition === cond : !s.condition));
}
__name(pick, "pick");
__name2(pick, "pick");
function computeNextAction(lead, now = /* @__PURE__ */ new Date()) {
  const phase = derivePhase(lead);
  const stage = deriveStage(lead);
  if (stage === "CLOSED" || stage === "LOST") return null;
  const bucket = bucketForHour(now.getHours());
  const lastCt = lastContactAt(lead);
  if (phase === 1) {
    const dL = daysBetween(leadAnchor(lead), now);
    if (!lastCt && dL === 0) {
      const tpl = pick(1, "L", 0, bucket, "first-touch");
      const due = new Date(+leadAnchor(lead) + 15 * 60 * 1e3);
      return mkAction(tpl, due, "15-minute law: first contact");
    }
    if (dL === 0) {
      if (!hasReplied(lead) && lastCt && now.getTime() - lastCt > HR) {
        const tpl = pick(1, "L", 0, bucket, "no-reply") ?? pick(1, "L", 0, "afternoon", "no-reply");
        return mkAction(tpl, new Date(lastCt + HR), "1h after first message, no reply");
      }
      if (hasReplied(lead)) {
        const tpl = pick(1, "L", 0, bucket, "replied");
        return mkAction(tpl, now, "Lead replied — send shortlist");
      }
      if (bucket === "evening") {
        const tpl = pick(1, "L", 0, "evening");
        return mkAction(tpl, now, "End-of-day check");
      }
    }
    if (dL === 1) {
      const cond = hasReplied(lead) ? "replied" : "no-reply";
      const tpl = bucket === "morning" && pick(1, "L", 1, "morning", cond) || bucket === "evening" && pick(1, "L", 1, "evening") || pick(1, "L", 1, "afternoon");
      return mkAction(tpl, now, `L+1 ${bucket}`);
    }
    if (dL === 2) {
      const tpl = bucket === "afternoon" && hasReplied(lead) && pick(1, "L", 2, "afternoon", "replied") || pick(1, "L", 2, "morning");
      return mkAction(tpl, now, "L+2 final active push");
    }
    if (dL >= 3) {
      if (dL === 7) {
        const tpl = pick(1, "L", 7, "any", "ci-drip");
        if (tpl) return mkAction(tpl, now, "L+7 cold re-touch");
      }
    }
  }
  if (phase === 2) {
    const t = tourAnchor(lead);
    if (t) {
      const dT = daysBetween(now, t);
      if (dT === 2) return mkAction(pick(2, "T", -2, "any"), t, "T-2 reminder");
      if (dT === 1) {
        const tpl = pick(2, "T", -1, "evening");
        const dueAt = new Date(t);
        dueAt.setDate(dueAt.getDate() - 1);
        dueAt.setHours(18, 0, 0, 0);
        return mkAction(tpl, dueAt, "T-1 evening reminder");
      }
      if (dT === 0) {
        const isNoShow = lead.noShowFlag === true;
        const minsPast = (now.getTime() - +t) / 6e4;
        if (isNoShow && minsPast >= 30 && minsPast < 180) {
          return mkAction(pick(2, "T", 0, "any", "no-show"), now, "No-show — 30 min check");
        }
        if (isNoShow && minsPast >= 180) {
          return mkAction(pick(2, "T", 0, "any", "no-show-3h"), now, "No-show — 3h follow-up");
        }
        return mkAction(pick(2, "T", 0, "morning"), new Date(+t - 2 * HR), "T-0 morning confirm");
      }
      if (dT > 2) {
        return mkAction(pick(2, "T", -99, "any"), now, "Send booking confirmation");
      }
    }
  }
  if (phase === 3) {
    const t = tourAnchor(lead);
    if (t) {
      const dT = daysBetween(t, now);
      const interest = interestLevel(lead);
      if (dT === 0) {
        if (!lastCt || lastCt < +t) {
          return mkAction(pick(3, "T", 0, "any", "post-visit-good"), new Date(+t + 2 * HR), "Post-visit within 2h");
        }
        if (bucket === "evening" && !hasReplied(lead)) {
          return mkAction(pick(3, "T", 0, "evening", "post-visit-eod"), now, "EOD if no reply");
        }
      }
      if (dT === 1) {
        const cond = interest === "HOT" ? "hot" : interest === "COLD" ? "cold" : "warm";
        const tpl = bucket === "morning" && pick(3, "T", 1, "morning", cond) || pick(3, "T", 1, "afternoon", `objection-${objKey(lead) ?? "price"}`) || pick(3, "T", 1, "morning", cond);
        return mkAction(tpl, now, `T+1 ${cond}`);
      }
      if (dT === 2) {
        const tpl = bucket === "evening" ? pick(3, "T", 2, "evening") : pick(3, "T", 2, "morning", "last-window");
        return mkAction(tpl, now, "T+2 one-day-hold push");
      }
      if (dT === 3) {
        return mkAction(pick(3, "T", 3, "any", "final-close"), now, "T+3 final ask");
      }
    }
  }
  const ci = ciAnchor(lead);
  if (ci) {
    const dCI = -daysBetween(now, ci);
    const drip = SCRIPTS.find((s) => s.phase === 4 && s.dayOffset === dCI);
    if (drip) return mkAction(drip, now, `CI${dCI}`);
  }
  return null;
}
__name(computeNextAction, "computeNextAction");
__name2(computeNextAction, "computeNextAction");
function objKey(lead) {
  const t = lead.primaryObjection;
  if (!t) return null;
  if (t === "PRICE-HIGH") return "price";
  if (t === "LOCATION-MISMATCH") return "location";
  if (t === "FAMILY-APPROVAL") return "family";
  if (t === "AMENITY-GAP") return "size";
  return null;
}
__name(objKey, "objKey");
__name2(objKey, "objKey");
function mkAction(tpl, dueAt, reason) {
  return {
    templateId: tpl.id,
    label: tpl.label,
    body: tpl.body,
    dueAt: dueAt.toISOString(),
    reason,
    kind: tpl.followUpKind,
    phase: tpl.phase,
    anchor: tpl.anchor,
    dayOffset: tpl.dayOffset
  };
}
__name(mkAction, "mkAction");
__name2(mkAction, "mkAction");
function renderForLead(body, lead, agentName = "Agent") {
  const ci = ciAnchor(lead);
  const t = tourAnchor(lead);
  const vars = {
    name: lead.name?.split(" ")[0] ?? lead.name ?? "there",
    agent: agentName,
    area: lead.area || (lead.areas?.[0] ?? "your area"),
    portal: lead.rawSource?.split(/\s/)[0] ?? "the portal",
    budget: lead.budget ? String(lead.budget) : "your budget",
    property: lead.propertyName ?? "the property",
    address: lead.fullAddress ?? "the address",
    date: t ? t.toLocaleDateString() : "",
    time: t ? t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "",
    month: ci ? ci.toLocaleString("default", { month: "long" }) : lead.moveInDate ?? "your month",
    altArea: "a nearby area",
    altProperty: "an alternative property",
    price: "₹—",
    strength: "its location"
  };
  return body.replace(/\{\{(\w+)\}\}/g, (_, k) => vars[k] ?? `{{${k}}}`);
}
__name(renderForLead, "renderForLead");
__name2(renderForLead, "renderForLead");
function breachState(lead, now = /* @__PURE__ */ new Date()) {
  const action = computeNextAction(lead, now);
  if (!action) return "ok";
  const due = +new Date(action.dueAt);
  const diff = now.getTime() - due;
  if (diff < 0) return "ok";
  if (diff < 30 * 60 * 1e3) return "due";
  if (diff < 4 * HR) return "breached";
  return "escalated";
}
__name(breachState, "breachState");
__name2(breachState, "breachState");
function morningReviewBuckets(leads, now = /* @__PURE__ */ new Date()) {
  const yesterdayStart = startOfDay(new Date(+now - DAY));
  const todayStart = startOfDay(now);
  const newYesterday = leads.filter((l) => {
    const c = +new Date(l.createdAt);
    return c >= +yesterdayStart && c < +todayStart;
  });
  const firstContactMissed = newYesterday.filter((l) => {
    const lc = lastContactAt(l);
    const created = +new Date(l.createdAt);
    return !lc || lc - created > 15 * 60 * 1e3;
  });
  const tourScheduled = leads.filter((l) => deriveStage(l) === "TOUR_SCHEDULED");
  const noT1Sent = tourScheduled.filter((l) => {
    const t = tourAnchor(l);
    if (!t) return false;
    const tMinus1 = +t - DAY;
    const lc = lastContactAt(l) ?? 0;
    return now.getTime() >= tMinus1 && lc < tMinus1;
  });
  const noShowYesterday = leads.filter((l) => {
    const t = tourAnchor(l);
    if (!t) return false;
    return l.noShowFlag === true && +t >= +yesterdayStart && +t < +todayStart;
  });
  const toured = leads.filter((l) => deriveStage(l) === "TOURED");
  const stuckAtT3 = toured.filter((l) => {
    const t = tourAnchor(l);
    if (!t) return false;
    return daysBetween(t, now) >= 3;
  });
  const ci7NoActivity = leads.filter((l) => {
    const ci = ciAnchor(l);
    if (!ci) return false;
    const dCI = -daysBetween(now, ci);
    if (dCI < -7 || dCI > 0) return false;
    const lc = lastContactAt(l) ?? 0;
    return now.getTime() - lc > 10 * DAY;
  });
  const lostWithoutTag = leads.filter((l) => {
    const stage = deriveStage(l);
    const obj = l.primaryObjection;
    return stage === "LOST" && !obj;
  });
  return {
    firstContactMissed,
    noT1Sent,
    noShowYesterday,
    postVisitMissed: toured.filter((l) => {
      const t = tourAnchor(l);
      if (!t) return false;
      const lc = lastContactAt(l) ?? 0;
      return lc < +t + 2 * HR && daysBetween(t, now) >= 0;
    }),
    stuckAtT3,
    ci7NoActivity,
    lostWithoutTag
  };
}
__name(morningReviewBuckets, "morningReviewBuckets");
__name2(morningReviewBuckets, "morningReviewBuckets");
export {
  OBJECTION_TAGS as O,
  breachState as b,
  computeNextAction as c,
  morningReviewBuckets as m,
  renderForLead as r
};
