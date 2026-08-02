var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const noop = /* @__PURE__ */ __name(/* @__NO_SIDE_EFFECTS__ */ (any) => any, "noop");
let invariant = noop;
// @__NO_SIDE_EFFECTS__
function memo(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}
__name(memo, "memo");
const progress = /* @__PURE__ */ __name(/* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
}, "progress");
const secondsToMilliseconds = /* @__PURE__ */ __name(/* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3, "secondsToMilliseconds");
const millisecondsToSeconds = /* @__PURE__ */ __name(/* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3, "millisecondsToSeconds");
export {
  memo as a,
  invariant as i,
  millisecondsToSeconds as m,
  noop as n,
  progress as p,
  secondsToMilliseconds as s
};
