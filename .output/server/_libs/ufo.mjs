var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const ENC_SLASH_RE = /%2f/gi;
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
__name(decode, "decode");
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
__name(decodePath, "decodePath");
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
__name(hasTrailingSlash, "hasTrailingSlash");
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
__name(withoutTrailingSlash, "withoutTrailingSlash");
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
__name(withTrailingSlash, "withTrailingSlash");
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
__name(hasLeadingSlash, "hasLeadingSlash");
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
__name(withLeadingSlash, "withLeadingSlash");
function isNonEmptyURL(url) {
  return url && url !== "/";
}
__name(isNonEmptyURL, "isNonEmptyURL");
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
__name(joinURL, "joinURL");
export {
  withoutTrailingSlash as a,
  decodePath as d,
  joinURL as j,
  withLeadingSlash as w
};
