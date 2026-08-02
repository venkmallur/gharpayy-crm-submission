var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HookableCore } from "./_libs/hookable.mjs";
import { d as defineLazyEventHandler, H as HTTPError, a as H3Core } from "./_libs/h3.mjs";
import { d as FastResponse } from "./_libs/srvx.mjs";




import "./_libs/rou3.mjs";




function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
__name(lazyService, "lazyService");
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/assets/activity-BkPhs9kN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c5c-t4ZKEwgGQ488QGeHTXCjqaK8O4w"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 3164,
    "path": "../public/assets/activity-BkPhs9kN.js"
  },
  "/assets/addDays-Cwp0paDo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fe-NSjhOPpwwjxZ47dnN9EES2kuruQ"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 254,
    "path": "../public/assets/addDays-Cwp0paDo.js"
  },
  "/assets/admin-actions-DixWpEmq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"876-t7SYyWl7mYpoXKjKYS4ylB7WJw4"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 2166,
    "path": "../public/assets/admin-actions-DixWpEmq.js"
  },
  "/assets/admin.calendar-BdoNIMg-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"324-dX/0OGxgfKFUeWSLNxt4BkoRrwY"',
    "mtime": "2026-08-02T02:50:21.872Z",
    "size": 804,
    "path": "../public/assets/admin.calendar-BdoNIMg-.js"
  },
  "/assets/admin-nDjlJw1O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ee-5/AoRd/ysfOS3B0isLQvdDiomQU"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 750,
    "path": "../public/assets/admin-nDjlJw1O.js"
  },
  "/assets/admin.audit-BUx3yz_f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"da0-T0crEYxJLyfH2EJlJ3I/Usr9lKU"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 3488,
    "path": "../public/assets/admin.audit-BUx3yz_f.js"
  },
  "/assets/admin.command-PVZrJSEv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a60-CluvUtJxa90W4oxyjWwtD1jDNUs"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 10848,
    "path": "../public/assets/admin.command-PVZrJSEv.js"
  },
  "/assets/admin.index-BLJrVsTs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ae0-igiNwDyvNbeznzml+akX1cirMjA"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 6880,
    "path": "../public/assets/admin.index-BLJrVsTs.js"
  },
  "/assets/admin.exports-CIKGWAn1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c7b-qXXtqujiPYdTcMan6oWtolKd1iI"',
    "mtime": "2026-08-02T02:50:21.872Z",
    "size": 3195,
    "path": "../public/assets/admin.exports-CIKGWAn1.js"
  },
  "/assets/admin.intelligence-CJ4HbYuo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1182-54BGrjv4iMjtNRM7RmkaaRqKBcg"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 4482,
    "path": "../public/assets/admin.intelligence-CJ4HbYuo.js"
  },
  "/assets/admin.owners-ClrfA7uU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ceb-f8cIGN8TRhgIpOhrAXVGu5eXTD4"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 3307,
    "path": "../public/assets/admin.owners-ClrfA7uU.js"
  },
  "/assets/admin.leads-Di-b_-8W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"570f-IGhsPk6YK0SHOwEwzDygkalM1y4"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 22287,
    "path": "../public/assets/admin.leads-Di-b_-8W.js"
  },
  "/assets/admin.people-Dz6_bZR8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fcb-Pl8p7Bp2d7rZD8PZXo3PdmW/R9U"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 4043,
    "path": "../public/assets/admin.people-Dz6_bZR8.js"
  },
  "/assets/admin.supreme-kX1KpXem.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3951-iLoD3RQgGSOa4WySNQmiM3x3QI4"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 14673,
    "path": "../public/assets/admin.supreme-kX1KpXem.js"
  },
  "/assets/admin.visits-nZ_5Zruv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1116-N09CHpYDPrs/lykQnb6wfBZRQwU"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 4374,
    "path": "../public/assets/admin.visits-nZ_5Zruv.js"
  },
  "/assets/admin.settings-ihFXxtCE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"721-ndeO4ZFAA/jZiHCuEiDkHsCKqYs"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 1825,
    "path": "../public/assets/admin.settings-ihFXxtCE.js"
  },
  "/assets/admin.property-bookings-DbR6UHsT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8990-5IFx3945meOHkpyi4ufdmBRKmpg"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 35216,
    "path": "../public/assets/admin.property-bookings-DbR6UHsT.js"
  },
  "/assets/AdminShell-iqMxPF3R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"87e-0iffMVb53wL2MsSM6B2wD0tm40I"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 2174,
    "path": "../public/assets/AdminShell-iqMxPF3R.js"
  },
  "/assets/admin.war-room-Df-nB2yJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1987-OxUwRX6/L8crwYM4/RMrCe2niEE"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 6535,
    "path": "../public/assets/admin.war-room-Df-nB2yJ.js"
  },
  "/assets/analytics-C5Ffq1EE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19f4-smwvfQ5or13vr89mQUDrJRVcabE"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 6644,
    "path": "../public/assets/analytics-C5Ffq1EE.js"
  },
  "/assets/app._-zd6wFgeQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"680-v690eS6FRm3cIDnGpsI8+AzvZmw"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 1664,
    "path": "../public/assets/app._-zd6wFgeQ.js"
  },
  "/assets/areas-C9UEW5te.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1144-ba8WCymwe4gzzIxSESFSlIfx5zM"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 4420,
    "path": "../public/assets/areas-C9UEW5te.js"
  },
  "/assets/arrow-left-AySKae00.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a7-JsGgiWqP1RBjbZd8nls9aS5zDa0"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 167,
    "path": "../public/assets/arrow-left-AySKae00.js"
  },
  "/assets/App-SpVYfRQU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"126256-HGXdHUStskPr+LYGss0G0sDm58E"',
    "mtime": "2026-08-02T02:50:21.888Z",
    "size": 1204822,
    "path": "../public/assets/App-SpVYfRQU.js"
  },
  "/assets/AppShell-XiDbch5T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e6bb9-xIrE/FK0yjxTx2OL6MUqYs2ssAo"',
    "mtime": "2026-08-02T02:50:21.889Z",
    "size": 1993657,
    "path": "../public/assets/AppShell-XiDbch5T.js"
  },
  "/assets/arrow-up-down-CJkcFeIT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f7-Gc/7ZDNgO1aexeyJMPEvvcwm0B0"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 247,
    "path": "../public/assets/arrow-up-down-CJkcFeIT.js"
  },
  "/assets/arrow-up-right-DleYxFQ7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a9-WQvGG7Ned+47F/X44PkK9nFbkRw"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 169,
    "path": "../public/assets/arrow-up-right-DleYxFQ7.js"
  },
  "/assets/badge-check-lLGZyuLR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13e-xXS8z3QAhUC4+huYKxzH7HDD3qQ"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 318,
    "path": "../public/assets/badge-check-lLGZyuLR.js"
  },
  "/assets/atc-DQiEE2z9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3cde-d280Awn2xMTwJ6mhvMmtetpAU8w"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 15582,
    "path": "../public/assets/atc-DQiEE2z9.js"
  },
  "/assets/audit-log-C1cnlAFo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b1-UV6CmzPYeFBZv4Iggofj7TyzzE0"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 689,
    "path": "../public/assets/audit-log-C1cnlAFo.js"
  },
  "/assets/bed-double-B-3JE2MS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12b-pObV0DQK0dEC/OJNAKDa0n38sZM"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 299,
    "path": "../public/assets/bed-double-B-3JE2MS.js"
  },
  "/assets/blocks-BAEso7JT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"450-R+6XaKi0r3KdcG4rQosExQRcGQo"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 1104,
    "path": "../public/assets/blocks-BAEso7JT.js"
  },
  "/assets/bed-DZYegCzp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1-FxinRilPcwQ6n0YF8jzIq+HAuvA"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 241,
    "path": "../public/assets/bed-DZYegCzp.js"
  },
  "/assets/blocks-mZveFR0H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"139a-2WnGp2sl4PUlAyX6EWJKDfFp4n8"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 5018,
    "path": "../public/assets/blocks-mZveFR0H.js"
  },
  "/assets/booking-approvals-CVP_wbsR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a98-PaYb1/UaO/FWLDrU3GQIIdTXNhg"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 6808,
    "path": "../public/assets/booking-approvals-CVP_wbsR.js"
  },
  "/assets/BarChart-6nQI213Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6a399-NWyaR96O+byvXbnKjmqfnapjuSA"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 435097,
    "path": "../public/assets/BarChart-6nQI213Q.js"
  },
  "/assets/bookings-tFdSI6EY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2e56-+KsNokWUJTJsFQlS46eUxqElcSU"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 11862,
    "path": "../public/assets/bookings-tFdSI6EY.js"
  },
  "/assets/calendar-check-BPk9FWLt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-jTLBGk2WXMv5uNUi7eU8zBB+Cd8"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 307,
    "path": "../public/assets/calendar-check-BPk9FWLt.js"
  },
  "/assets/calendar-Cnjfs_8j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"21e9-iCTxJRjN6gEErK456CFxaLAa/5M"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 8681,
    "path": "../public/assets/calendar-Cnjfs_8j.js"
  },
  "/assets/checkbox-DJFgLRsb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1013-hgyoqpHPzW07YJ/QutCd/A/zGys"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 4115,
    "path": "../public/assets/checkbox-DJFgLRsb.js"
  },
  "/assets/calendar-days-DYuGieEb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f0-2TLHks0pn/nFINHVER7PIzRuvNo"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 496,
    "path": "../public/assets/calendar-days-DYuGieEb.js"
  },
  "/assets/checkins-y1fiXqA1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1734-+ovat5Y+qtX00tfqGYX0FZqKQWQ"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 5940,
    "path": "../public/assets/checkins-y1fiXqA1.js"
  },
  "/assets/circle-alert-Dg8bYqQZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-+EVQ2o9/2AGAsVH2Ygjprht4Hgg"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 252,
    "path": "../public/assets/circle-alert-Dg8bYqQZ.js"
  },
  "/assets/calendar-DM6TY7Pv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b390-yTAQmkgaAaG5lNmIJfPM5K4pQIA"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 45968,
    "path": "../public/assets/calendar-DM6TY7Pv.js"
  },
  "/assets/circle-x-zMpuV-Gz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d1-wrg2c61afmWfvuYnnPJ5zuwNqa8"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 209,
    "path": "../public/assets/circle-x-zMpuV-Gz.js"
  },
  "/assets/camera-CwRwwqut.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"152-xJe4uRKhQUwA9SEz+GLr9/iBovI"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 338,
    "path": "../public/assets/camera-CwRwwqut.js"
  },
  "/assets/coach-BiQdfAam.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67e-S3eeqqOOTwHi/pBZacmAIXV6a5s"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 1662,
    "path": "../public/assets/coach-BiQdfAam.js"
  },
  "/assets/CoachInline-5gITkHAy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"95f-84yBmLJ+aFuIXpnGstPuh/zcHCo"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 2399,
    "path": "../public/assets/CoachInline-5gITkHAy.js"
  },
  "/assets/ConfidenceBar-DRm1DiVX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3f7-ThBydlIvdfPt9l2MtVFV7Dpu9mc"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 1015,
    "path": "../public/assets/ConfidenceBar-DRm1DiVX.js"
  },
  "/assets/csv-BZahodS0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"334-zQDvX7t4uf425r9wrv9tVUot+VE"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 820,
    "path": "../public/assets/csv-BZahodS0.js"
  },
  "/assets/database-BWJahv9C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f5-B0lViQ60FPKoJv9FKTgqZb/nncc"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 245,
    "path": "../public/assets/database-BWJahv9C.js"
  },
  "/assets/DateRangeToggle-uvN_dz1J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"317-3XeD4Cx0CO0mWAJko1JKae40ZUU"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 791,
    "path": "../public/assets/DateRangeToggle-uvN_dz1J.js"
  },
  "/assets/door-open-DSbo5GVK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"176-JksbVM2YAyPMnWT5mtsJNLXcgFA"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 374,
    "path": "../public/assets/door-open-DSbo5GVK.js"
  },
  "/assets/download-CDXTUoVe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ea-RZKw7PXC0HqLNh0YtceUVlEuP04"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 234,
    "path": "../public/assets/download-CDXTUoVe.js"
  },
  "/assets/drafts-BrfJtqG2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1b23-xwixiRfBrjUYaEiUZhZ9aK1s69Y"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 6947,
    "path": "../public/assets/drafts-BrfJtqG2.js"
  },
  "/assets/demo-load-pWzD2MuR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4138-wEgzWAZuTJsXBb2FvntivytVc7c"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 16696,
    "path": "../public/assets/demo-load-pWzD2MuR.js"
  },
  "/assets/easy-CkVcfaIh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"237c-62keGkw3sbOMIQYvNC+PnFVl0ZM"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 9084,
    "path": "../public/assets/easy-CkVcfaIh.js"
  },
  "/assets/execution-BJmQzy0C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3878-fIF5YEiOUgf2R+hJtyDdjUbNfR8"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 14456,
    "path": "../public/assets/execution-BJmQzy0C.js"
  },
  "/assets/execution-engine-BaQI9MQH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5394-TnKsWqdfDAd1+vziw/6J42ZhU2E"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 21396,
    "path": "../public/assets/execution-engine-BaQI9MQH.js"
  },
  "/assets/feedback._id-Ch3mJQmH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ede-93gYKHolbo576CLWGbCWxBwSHLA"',
    "mtime": "2026-08-02T02:50:21.872Z",
    "size": 3806,
    "path": "../public/assets/feedback._id-Ch3mJQmH.js"
  },
  "/assets/flow-ops-JFbQVyGB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d47-5wOVGFEJCEJ1ZVCmNju3RL2MvpI"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 11591,
    "path": "../public/assets/flow-ops-JFbQVyGB.js"
  },
  "/assets/FreshnessBadge-DCeAl9i8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"127c-EN6fYIP6AgFX8YzCZGPKkjG9G8g"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 4732,
    "path": "../public/assets/FreshnessBadge-DCeAl9i8.js"
  },
  "/assets/follow-ups-B5dMw3JN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13e5-0tD5zgcpfBnyetFWd7bXCcbY88w"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 5093,
    "path": "../public/assets/follow-ups-B5dMw3JN.js"
  },
  "/assets/funnel-CqXAIxWK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18ca-dmZRbTyqozD6pjwatuJXK4JNmK4"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 6346,
    "path": "../public/assets/funnel-CqXAIxWK.js"
  },
  "/assets/GlueFeed-DlVvDTA6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"aa9-zFECHQxmrmqTf4Duvvl4AFoV9dg"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 2729,
    "path": "../public/assets/GlueFeed-DlVvDTA6.js"
  },
  "/assets/handoffs-CIxED1np.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12ff-2Ftv71YmpymKs+bVYb1tcyt+hfw"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 4863,
    "path": "../public/assets/handoffs-CIxED1np.js"
  },
  "/assets/graduation-cap-DrrGfEeq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14e-1B98oumLSVSvGm7x+muYha4nTe0"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 334,
    "path": "../public/assets/graduation-cap-DrrGfEeq.js"
  },
  "/assets/funnel-Dg5CRyQL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a1f-BaZp4uaNHKq/QQ7DA7HNadAGiF0"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 6687,
    "path": "../public/assets/funnel-Dg5CRyQL.js"
  },
  "/assets/handshake-DFs_gNGs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c0-T4IcfrXgMHfAOGbjabnmjBY4wDM"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 448,
    "path": "../public/assets/handshake-DFs_gNGs.js"
  },
  "/assets/health-CJVyELn7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"152b-dPBeggBcKrjjQFyXSd/EeFgUtsc"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 5419,
    "path": "../public/assets/health-CJVyELn7.js"
  },
  "/assets/heatmap-BqSWc9da.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a2b-GoiJ9rLK9EejczgQtLB0Fht7hoU"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 6699,
    "path": "../public/assets/heatmap-BqSWc9da.js"
  },
  "/assets/HRBroadcastComposer-YtQaYokW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"27ef-by81GrPOVJ33we5vReTVNEEKdRM"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 10223,
    "path": "../public/assets/HRBroadcastComposer-YtQaYokW.js"
  },
  "/assets/help-CpIFEUoZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a62-m+ILU/JQSYX1zfmFJZVmE98AnPM"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 6754,
    "path": "../public/assets/help-CpIFEUoZ.js"
  },
  "/assets/html2canvas.esm-D1u7yXL_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3291c-NX9KiwhnvvSC1F8bUD0BKVZWTQ8"',
    "mtime": "2026-08-02T02:50:21.874Z",
    "size": 207132,
    "path": "../public/assets/html2canvas.esm-D1u7yXL_.js"
  },
  "/assets/impact-DYW2_XNL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f061-8YxZ3nRNjCZGxDyMNfXVBj1ceWk"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 61537,
    "path": "../public/assets/impact-DYW2_XNL.js"
  },
  "/assets/inbox-Cf_bdaks.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20c6-mDJVt4bisbWosHjZYgbXxIvpIdU"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 8390,
    "path": "../public/assets/inbox-Cf_bdaks.js"
  },
  "/assets/index-BMYCmT2g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4856-Dj4iH0fIaj7hv81KHv6paz7no0U"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 18518,
    "path": "../public/assets/index-BMYCmT2g.js"
  },
  "/assets/index-BVRzPzOn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3037-43IwzuObbFGLFPwy99S9Jc8G5cg"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 12343,
    "path": "../public/assets/index-BVRzPzOn.js"
  },
  "/assets/index-Dfjwj7D5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7fcc-vTKldkRyBIIk2VTRR9CB63FpQu8"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 32716,
    "path": "../public/assets/index-Dfjwj7D5.js"
  },
  "/assets/index-C1KK8NWC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3f89-gMXqF7vfWBHBtW+4so4IU3PkdE0"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 16265,
    "path": "../public/assets/index-C1KK8NWC.js"
  },
  "/assets/index-BMn0GrB3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1daa-DaK0SekaVuRdRIXDyZNkAZhG3uw"',
    "mtime": "2026-08-02T02:50:21.873Z",
    "size": 7594,
    "path": "../public/assets/index-BMn0GrB3.js"
  },
  "/assets/index-DrqKtNLD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1fca-SYDr8FxY0mPcYMZOU49QwRPdqJc"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 8138,
    "path": "../public/assets/index-DrqKtNLD.js"
  },
  "/assets/insights-d17Awep9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"20c9-D7cGn6VJgwvXyELdYCwm0ItMRRY"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 8393,
    "path": "../public/assets/insights-d17Awep9.js"
  },
  "/assets/intelligence-CyW6brTG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"678-lHfqVx3HWTN8aIXmMmc8+haotUg"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 1656,
    "path": "../public/assets/intelligence-CyW6brTG.js"
  },
  "/assets/inventory-C2STACSY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12dd-sEjeLRuOsqRgfd2E90Fku4AtNBQ"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 4829,
    "path": "../public/assets/inventory-C2STACSY.js"
  },
  "/assets/inventory-feedback-BKLPxk5g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"200b-9eJ/D+HSsPt/mcBZUzhtu1NtIfs"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 8203,
    "path": "../public/assets/inventory-feedback-BKLPxk5g.js"
  },
  "/assets/index.es-Cn9mmdBU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29da8-9lCb0Cv9KBNJP4d+kejYQmztSok"',
    "mtime": "2026-08-02T02:50:21.873Z",
    "size": 171432,
    "path": "../public/assets/index.es-Cn9mmdBU.js"
  },
  "/assets/inventory-gah60Y65.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a11-pm/8voImFr8fyKVlVa7SLL+aXy4"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 6673,
    "path": "../public/assets/inventory-gah60Y65.js"
  },
  "/assets/inventory-truth-CV2OITVT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c3f-M0gVA93gbLVCAeMr+xJ2ltVgOVo"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 15423,
    "path": "../public/assets/inventory-truth-CV2OITVT.js"
  },
  "/assets/isPast-Bqs57vvR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bd-NAvj6JsKS/ZnNgppuDL12+mP7pk"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 189,
    "path": "../public/assets/isPast-Bqs57vvR.js"
  },
  "/assets/isToday-D4-aq0t3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"149-IVwNK25DkmPI9JrZSsHFxVQuC7A"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 329,
    "path": "../public/assets/isToday-D4-aq0t3.js"
  },
  "/assets/jspdf.plugin.autotable-BY_gI-bI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7fb1-V2F0N/yT9ZFdUUaeZeaCQg336EE"',
    "mtime": "2026-08-02T02:50:21.873Z",
    "size": 32689,
    "path": "../public/assets/jspdf.plugin.autotable-BY_gI-bI.js"
  },
  "/assets/LeadControlPanel-DF73GVT7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"65c1-Zq+ytvQ1ltvzl4FTwO+JXPeWz+E"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 26049,
    "path": "../public/assets/LeadControlPanel-DF73GVT7.js"
  },
  "/assets/jspdf.es.min-B_PVRIt-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6068c-cUonu7y9ycmiFLEEfQtykTkpFGo"',
    "mtime": "2026-08-02T02:50:21.873Z",
    "size": 394892,
    "path": "../public/assets/jspdf.es.min-B_PVRIt-.js"
  },
  "/assets/leaderboard-Dviw6mv2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e06-4vbZfFWhz67TTN7Ibta4BrgM1lA"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 7686,
    "path": "../public/assets/leaderboard-Dviw6mv2.js"
  },
  "/assets/leaderboard-FSiS_oGu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c85-OLozoy2MD90mc6izwCjoPRXSOtc"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 7301,
    "path": "../public/assets/leaderboard-FSiS_oGu.js"
  },
  "/assets/leads-BLgqJy0e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1997-7LL73iSFu/DMfrvUnh4D8bBonwU"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 6551,
    "path": "../public/assets/leads-BLgqJy0e.js"
  },
  "/assets/leads-D4hqBTiJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b9cc-HKihJC6aBM9U+E3nPFcbo2n8kb4"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 47564,
    "path": "../public/assets/leads-D4hqBTiJ.js"
  },
  "/assets/leads.add-DEvnyNiB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"928-6YrtcSyv8GUKEvG0VVe1GMCwfMU"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 2344,
    "path": "../public/assets/leads.add-DEvnyNiB.js"
  },
  "/assets/leaflet-CGoz3Q9q.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"3af4-DwNuVYap9sNCFe2ywhL3F4eGYuU"',
    "mtime": "2026-08-02T02:50:21.855Z",
    "size": 15092,
    "path": "../public/assets/leaflet-CGoz3Q9q.css"
  },
  "/assets/leaflet-src-nGu2B7K9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28311-+GeSY9z6CGpkps2smuiJL/6Sns0"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 164625,
    "path": "../public/assets/leaflet-src-nGu2B7K9.js"
  },
  "/assets/live-visit-Chu4Dcgh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2233f-UgY9kI9xi0RfYkuVwBL+KAS5tUo"',
    "mtime": "2026-08-02T02:50:21.859Z",
    "size": 140095,
    "path": "../public/assets/live-visit-Chu4Dcgh.js"
  },
  "/assets/mail-D1AWB57Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d7-PCdmxYgbgHCNb3rbagMo6UHy4Qo"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 215,
    "path": "../public/assets/mail-D1AWB57Q.js"
  },
  "/assets/lock-Dd0kaaRW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d0-Y1oQ7AqkL0NaIduqC6O6C5HeV/k"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 208,
    "path": "../public/assets/lock-Dd0kaaRW.js"
  },
  "/assets/marketplace-DSm7I99s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"253d-wqI+KJZszNA4i4rfuEzq0jf41Ck"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 9533,
    "path": "../public/assets/marketplace-DSm7I99s.js"
  },
  "/assets/manager-DALMP8zm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"941e-EAsYUGzWWw5HBUkUVK6tFMiQyZI"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 37918,
    "path": "../public/assets/manager-DALMP8zm.js"
  },
  "/assets/match-Bm24_a4h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3941-H9VNttPgRZ0WD8QGoAp3JZjQ94k"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 14657,
    "path": "../public/assets/match-Bm24_a4h.js"
  },
  "/assets/media._roomId-1Yh0kQPI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1131-W7fpbCwXgiFuszlXjBWnKpgt4Uo"',
    "mtime": "2026-08-02T02:50:21.872Z",
    "size": 4401,
    "path": "../public/assets/media._roomId-1Yh0kQPI.js"
  },
  "/assets/megaphone-B8_0pKAh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15c-fIcyyHFYHicthUH1BMCsaIjrTHo"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 348,
    "path": "../public/assets/megaphone-B8_0pKAh.js"
  },
  "/assets/MetricCard-B4kaFr5M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"573-qaIeSnvUr0PppCJ6i6rYtwSmM5E"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 1395,
    "path": "../public/assets/MetricCard-B4kaFr5M.js"
  },
  "/assets/mismatch-BbSq46uu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c1d-s0rAa6ZqdYBuKFGaeF0+X+L7baw"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 7197,
    "path": "../public/assets/mismatch-BbSq46uu.js"
  },
  "/assets/owner-accounts-hahtHl5M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1866-W9q8DhP0SiQEUhcKjY7ESutFCYU"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 6246,
    "path": "../public/assets/owner-accounts-hahtHl5M.js"
  },
  "/assets/owner-bookings-Cg7ycY0e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"872c-Gucnxw0uxmShcT77tarOfT2vVEc"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 34604,
    "path": "../public/assets/owner-bookings-Cg7ycY0e.js"
  },
  "/assets/owner-registry-DQvYZvHT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12a5-0/33O1mE2lKiFIxRPXWJj2EjiWQ"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 4773,
    "path": "../public/assets/owner-registry-DQvYZvHT.js"
  },
  "/assets/owner-portal-Cwzfy0Bf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3426-MBQA/MfkG/Pr5eJJI0pHHpmlTdo"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 13350,
    "path": "../public/assets/owner-portal-Cwzfy0Bf.js"
  },
  "/assets/OwnerBookingCard-DYaOfiYP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"701a-G8tlQCRyF5R79U8twXME5D54VAA"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 28698,
    "path": "../public/assets/OwnerBookingCard-DYaOfiYP.js"
  },
  "/assets/index-DprFVEuD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"223671-NeMR1EKoPyoxWQr1mYqUQ35437s"',
    "mtime": "2026-08-02T02:50:21.889Z",
    "size": 2242161,
    "path": "../public/assets/index-DprFVEuD.js"
  },
  "/assets/owners-compare-D4R5QoVF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3366-v9ePNmrjFov1/G9Jrcvzy5K5vtg"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 13158,
    "path": "../public/assets/owners-compare-D4R5QoVF.js"
  },
  "/assets/pdf-CiESNcwm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c9a-i95hAwLsv2R9nlTc8jC0WvsdKcs"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 3226,
    "path": "../public/assets/pdf-CiESNcwm.js"
  },
  "/assets/properties-Bebg7H98.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9028-XWE995BHISPFAoOSo5zdGmrXqyU"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 36904,
    "path": "../public/assets/properties-Bebg7H98.js"
  },
  "/assets/personas-C1iSjgT4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9860-YFE/VNQc9CZr7rZDkYiXRncjrqs"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 39008,
    "path": "../public/assets/personas-C1iSjgT4.js"
  },
  "/assets/property-hub-CPKYtFmE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12a25-AS/Tncn89NcxJlN4MZoqcA4qblU"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 76325,
    "path": "../public/assets/property-hub-CPKYtFmE.js"
  },
  "/assets/purify.es-6o0AOhau.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"75dd-uZM5fKGltp7T54X5ztdvtSnne6c"',
    "mtime": "2026-08-02T02:50:21.873Z",
    "size": 30173,
    "path": "../public/assets/purify.es-6o0AOhau.js"
  },
  "/assets/queue-BHqYOdru.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"26c0-9gmu8M9SeO+p1xMyQ0mwvO9zzLE"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 9920,
    "path": "../public/assets/queue-BHqYOdru.js"
  },
  "/assets/QuickActionRow-CCu_Ok66.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ea2-kChbTjiiMXzK+fPfBZ4eYWtLq5A"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 3746,
    "path": "../public/assets/QuickActionRow-CCu_Ok66.js"
  },
  "/assets/react-router-dom-NtHjy4tZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3e5-V695OO+qmV/xF+oGsc02l1iaSPQ"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 997,
    "path": "../public/assets/react-router-dom-NtHjy4tZ.js"
  },
  "/assets/RequestAccessSheet-C_uq_bTN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"80df-GWDna1m3hmjizbMfy/bJ+EJbV+s"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 32991,
    "path": "../public/assets/RequestAccessSheet-C_uq_bTN.js"
  },
  "/assets/registry-CKN3vMnH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"405e-c6+0R9UYQf+17RIW9wCDy0yNbxs"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 16478,
    "path": "../public/assets/registry-CKN3vMnH.js"
  },
  "/assets/revenue-DsfXRRY1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2307-HHR4UGSVFh5utPSmBzWhj38JQYA"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 8967,
    "path": "../public/assets/revenue-DsfXRRY1.js"
  },
  "/assets/revival-C1r96TkN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4b5-xK46UQ7G06LW4ywND5dyrNCjBIc"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 1205,
    "path": "../public/assets/revival-C1r96TkN.js"
  },
  "/assets/room-hero-DEd3q122.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"201-v5woNJrXf7KdwIN+DVylBUGUAvw"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 513,
    "path": "../public/assets/room-hero-DEd3q122.js"
  },
  "/assets/revival-D5VkRf--.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"10fa-hQoLap8qW0RA/D2jYhu6q00tTXk"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 4346,
    "path": "../public/assets/revival-D5VkRf--.js"
  },
  "/assets/rooms-DcZLfwPH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6c9d-k+Qg7OZrxL69DCG/bUiUud4yvOE"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 27805,
    "path": "../public/assets/rooms-DcZLfwPH.js"
  },
  "/assets/score-By3h99nE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16c6-CTAqHe/aXTQ6SbJINr927OZ/8DM"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 5830,
    "path": "../public/assets/score-By3h99nE.js"
  },
  "/assets/schedule-CFq8k5uo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"57ad-6DFfiGyaZ/3/JhbND0Hzfv3wcoY"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 22445,
    "path": "../public/assets/schedule-CFq8k5uo.js"
  },
  "/assets/search-pZGstINx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"183-QEVpwKi9EQ/O4B7IM7y5TqF8Ygk"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 387,
    "path": "../public/assets/search-pZGstINx.js"
  },
  "/assets/separator-DWfhhN0x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"467-PhMWkuNZ56kVzYXj5SPjywRLrSE"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 1127,
    "path": "../public/assets/separator-DWfhhN0x.js"
  },
  "/assets/sequences-5QTo7Ffo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ba7-tyKQwv0zDIjhYpqx16A/QIP6qbo"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 7079,
    "path": "../public/assets/sequences-5QTo7Ffo.js"
  },
  "/assets/settings-2-oai_h29r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fe-d3z9bpCkoKqLMQ7kpb1rHX02rsA"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 254,
    "path": "../public/assets/settings-2-oai_h29r.js"
  },
  "/assets/settings-DhaaRxAc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2cf-CWHibei+rgEXzP+83cxfl0aIv3Q"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 719,
    "path": "../public/assets/settings-DhaaRxAc.js"
  },
  "/assets/settings-DXcFyeHi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2c7-DPzu8OWHVbPhB5cwkn1BMtNcWNE"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 711,
    "path": "../public/assets/settings-DXcFyeHi.js"
  },
  "/assets/SettingsPage-B1gwf96r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a4d3-KxHNxztw0F7bhZe4fLw1H3/f0Qc"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 42195,
    "path": "../public/assets/SettingsPage-B1gwf96r.js"
  },
  "/assets/share-2-CrAQ5m4X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"167-Me+Ie46JMc49ecQkDauXfq0CRRM"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 359,
    "path": "../public/assets/share-2-CrAQ5m4X.js"
  },
  "/assets/snowflake-ClBgRgF6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"276-jFxC/0dGDyFCNFY6NriDtRWOA9Y"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 630,
    "path": "../public/assets/snowflake-ClBgRgF6.js"
  },
  "/assets/StatusBadge-APNBNBs-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"427-rfmQWj6UTn9YHJPCrw/E92FwlfU"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 1063,
    "path": "../public/assets/StatusBadge-APNBNBs-.js"
  },
  "/assets/slider-B-zxUMxf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2340-invPLOONlSvPm5MGVnkAdw1iGvM"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 9024,
    "path": "../public/assets/slider-B-zxUMxf.js"
  },
  "/assets/store-C3wfI4FC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"442d-Cz/qpBv1y77yNdzRSuftkrbFzGk"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 17453,
    "path": "../public/assets/store-C3wfI4FC.js"
  },
  "/assets/store-CcS7ho8o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d76-UL1uq9lJJJeM8AfGu0JTvIRcXqw"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 3446,
    "path": "../public/assets/store-CcS7ho8o.js"
  },
  "/assets/supreme-metrics-C0Th9IZd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1b-M188fddzpfLAexYDCUCcQxZH8K4"',
    "mtime": "2026-08-02T02:50:21.870Z",
    "size": 3867,
    "path": "../public/assets/supreme-metrics-C0Th9IZd.js"
  },
  "/assets/switch-D684ceMO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a30-hZLxeL6koMsayNLCv5ZlZ+2MQHM"',
    "mtime": "2026-08-02T02:50:21.861Z",
    "size": 2608,
    "path": "../public/assets/switch-D684ceMO.js"
  },
  "/assets/tcm-C9U6zJSt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15a3-z3CYUKmttnCEl3ds+CP3qbmKzt8"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 5539,
    "path": "../public/assets/tcm-C9U6zJSt.js"
  },
  "/assets/sync-BA7CiEqr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f76-5ZND7itODTwJYDO2NtL3s38Hgzs"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 3958,
    "path": "../public/assets/sync-BA7CiEqr.js"
  },
  "/assets/styles-B849erxo.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"41493-VUaBptnCTXjlJsDvd/lU5VAMA4Y"',
    "mtime": "2026-08-02T02:50:21.772Z",
    "size": 267411,
    "path": "../public/assets/styles-B849erxo.css"
  },
  "/assets/tcm.actions-DbT2ftJ1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f37-Wyi5OcnYNjiEpQ2R6ehPrALjSmQ"',
    "mtime": "2026-08-02T02:50:21.872Z",
    "size": 3895,
    "path": "../public/assets/tcm.actions-DbT2ftJ1.js"
  },
  "/assets/tcm.performance-BLw7leny.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ce7-wD2qVBM/gTZw4mbbtmJvh1XQoe4"',
    "mtime": "2026-08-02T02:50:21.872Z",
    "size": 3303,
    "path": "../public/assets/tcm.performance-BLw7leny.js"
  },
  "/assets/team-DaZqJ1Jd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3acc-lYpt6r9bOiCNMYlvE91tUM24o8s"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 15052,
    "path": "../public/assets/team-DaZqJ1Jd.js"
  },
  "/assets/TileLayer-C9jegNzU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"197a-Tpugex7h5FmmxVaBDZuJU5wFlUw"',
    "mtime": "2026-08-02T02:50:21.868Z",
    "size": 6522,
    "path": "../public/assets/TileLayer-C9jegNzU.js"
  },
  "/assets/TenXOpsBar-BHzUKV7X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ca8-QOx1ng32GbndUP7jspl/t4p/QoM"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 11432,
    "path": "../public/assets/TenXOpsBar-BHzUKV7X.js"
  },
  "/assets/today-Cf5-m5sn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"226f-UwMDOTpHMTnjYGL39dKtKg49M8k"',
    "mtime": "2026-08-02T02:50:21.857Z",
    "size": 8815,
    "path": "../public/assets/today-Cf5-m5sn.js"
  },
  "/assets/tour._id.report-93PTLf6L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2a5a-fbbaBjVZRD7RyQ9cE56wuSYzHX4"',
    "mtime": "2026-08-02T02:50:21.872Z",
    "size": 10842,
    "path": "../public/assets/tour._id.report-93PTLf6L.js"
  },
  "/assets/tour._id-BhPSRh1H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"503b-8tx2bSrVWKT404Y9ReYkEWBe0cw"',
    "mtime": "2026-08-02T02:50:21.872Z",
    "size": 20539,
    "path": "../public/assets/tour._id-BhPSRh1H.js"
  },
  "/assets/tours-Bbahrp6t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"223d-ZWEG134zm2uZ3q5aqGJJTBmQ6cQ"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 8765,
    "path": "../public/assets/tours-Bbahrp6t.js"
  },
  "/assets/TourCard-B0ljwlNn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2e81-x7yH6S7Ol9UEz1mC/C4ZTm9QWYY"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 11905,
    "path": "../public/assets/TourCard-B0ljwlNn.js"
  },
  "/assets/upload-BzPPi_oo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"e8-pfKWVeGCE2uCZAs/2oMBL13kd/M"',
    "mtime": "2026-08-02T02:50:21.863Z",
    "size": 232,
    "path": "../public/assets/upload-BzPPi_oo.js"
  },
  "/assets/tours-DliMsBA5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a7e-I7bl7AdgdPF0B1+Kduv6hOhzxJs"',
    "mtime": "2026-08-02T02:50:21.857Z",
    "size": 6782,
    "path": "../public/assets/tours-DliMsBA5.js"
  },
  "/assets/trending-down-4tPYJ9cQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b4-glugEalEE1Bp8BEfBTgB4nfGpdc"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 180,
    "path": "../public/assets/trending-down-4tPYJ9cQ.js"
  },
  "/assets/use-admin-rows-CaJliIPh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1002-4Hu9RHXRC9BXqNdvBINlfrQmh0k"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 4098,
    "path": "../public/assets/use-admin-rows-CaJliIPh.js"
  },
  "/assets/UrgencyTimer-BuoE1Gx7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f1a-4NwevyggfYPl28Gcjg23KbN8V5Q"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 3866,
    "path": "../public/assets/UrgencyTimer-BuoE1Gx7.js"
  },
  "/assets/use-toast-D9_JYMdz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4bb-3q7OQsn43Hkz4Xyc21eqqV2n5/Y"',
    "mtime": "2026-08-02T02:50:21.862Z",
    "size": 1211,
    "path": "../public/assets/use-toast-D9_JYMdz.js"
  },
  "/assets/useLocation-CJgNfOgQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"166-6DeT+MbEEXxtEj92L4SXudEzTcI"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 358,
    "path": "../public/assets/useLocation-CJgNfOgQ.js"
  },
  "/assets/use-event-bus-DaXveufM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"128-6V1TSfilpW2jiXpN0e90YomsDD8"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 296,
    "path": "../public/assets/use-event-bus-DaXveufM.js"
  },
  "/assets/user-check-Bs8wE2G3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"226-oD0XVb4cUw63zCwTF3cQAYJHbX0"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 550,
    "path": "../public/assets/user-check-Bs8wE2G3.js"
  },
  "/assets/useRouterState-DC-KuFK4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c6-pcVvgsJc21kNAj0QWJDZPc241AE"',
    "mtime": "2026-08-02T02:50:21.860Z",
    "size": 454,
    "path": "../public/assets/useRouterState-DC-KuFK4.js"
  },
  "/assets/video-I_UGoPpA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fa-8i0p4jf14Pk6OLuPG6XSux+lmgg"',
    "mtime": "2026-08-02T02:50:21.867Z",
    "size": 250,
    "path": "../public/assets/video-I_UGoPpA.js"
  },
  "/assets/visit-war-BeyNySGc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d2be-aRPSLZtC5xdWpwHcJ+lafLi7zdU"',
    "mtime": "2026-08-02T02:50:21.857Z",
    "size": 53950,
    "path": "../public/assets/visit-war-BeyNySGc.js"
  },
  "/assets/visits-BZJ5DaJV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d03-3GhjxbG/ZfJHyYR93Aosk6mBsoE"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 11523,
    "path": "../public/assets/visits-BZJ5DaJV.js"
  },
  "/assets/whatsapp-blocks-D6F-djth.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"170a-h32E0BqOz6M4RPRe1M6y8fDU+3Y"',
    "mtime": "2026-08-02T02:50:21.869Z",
    "size": 5898,
    "path": "../public/assets/whatsapp-blocks-D6F-djth.js"
  },
  "/assets/war-room-Dy60BE8d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6daf-MILOc4vKQU/ttk3ac1Ml1y7i9P0"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 28079,
    "path": "../public/assets/war-room-Dy60BE8d.js"
  },
  "/assets/zones-DoWnPWQ7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14b9-tpu9vLD6bWHqrAhVatmSya/eiHg"',
    "mtime": "2026-08-02T02:50:21.866Z",
    "size": 5305,
    "path": "../public/assets/zones-DoWnPWQ7.js"
  },
  "/assets/war-room-BRsjQws3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2e39-dOFr3iSVegIlHM1Xh2jwR8ogXPs"',
    "mtime": "2026-08-02T02:50:21.858Z",
    "size": 11833,
    "path": "../public/assets/war-room-BRsjQws3.js"
  },
  "/assets/zone-brain-Uzke4O4m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d0c-+KdzOmFmaFsaPwb3EHxDJMpkDE4"',
    "mtime": "2026-08-02T02:50:21.857Z",
    "size": 11532,
    "path": "../public/assets/zone-brain-Uzke4O4m.js"
  },
  "/assets/_id-C1gbzMgf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8b92-SYf1W5x0il0Ym2hSLEG9Mtr1k04"',
    "mtime": "2026-08-02T02:50:21.864Z",
    "size": 35730,
    "path": "../public/assets/_id-C1gbzMgf.js"
  },
  "/assets/xlsx-BjIFs7RH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"6eb1a-HYDzaIbFg/MpDOcsmnYgHZNW/wo"',
    "mtime": "2026-08-02T02:50:21.873Z",
    "size": 453402,
    "path": "../public/assets/xlsx-BjIFs7RH.js"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
__name(isPublicAssetURL, "isPublicAssetURL");
const headers = /* @__PURE__ */ __name(((m) => /* @__PURE__ */ __name(function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
}, "headersRouteRule")), "headers");
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_EAzzID = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_EAzzID };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const errorHandler$1 = /* @__PURE__ */ __name((error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
}, "errorHandler$1");
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
__name(defaultHandler, "defaultHandler");
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
__name(errorHandler, "errorHandler");
function createNitroApp() {
  const captureError = /* @__PURE__ */ __name((error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  }, "captureError");
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = /* @__PURE__ */ __name((req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  }, "appHandler");
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
__name(createNitroApp, "createNitroApp");
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
__name(createH3App, "createH3App");
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
__name(useNitroApp, "useNitroApp");
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
__name(useNitroHooks, "useNitroHooks");
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
__name(getRouteRules, "getRouteRules");
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
__name(createHandler, "createHandler");
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
__name(augmentReq, "augmentReq");
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
