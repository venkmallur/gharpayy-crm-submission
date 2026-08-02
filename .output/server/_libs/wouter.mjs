var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { s as shimExports } from "./use-sync-external-store.mjs";
import { p as parse } from "./regexparam.mjs";
import { r as reactExports, b as React } from "./react.mjs";
const useBuiltinInsertionEffect = React["useInsertionEffect"];
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect = canUseDOM ? reactExports.useLayoutEffect : reactExports.useEffect;
const useInsertionEffect = useBuiltinInsertionEffect || useIsomorphicLayoutEffect;
const useEvent = /* @__PURE__ */ __name((fn) => {
  const ref = reactExports.useRef([fn, (...args) => ref[0](...args)]).current;
  useInsertionEffect(() => {
    ref[0] = fn;
  });
  return ref[1];
}, "useEvent");
const eventPopstate = "popstate";
const eventPushState = "pushState";
const eventReplaceState = "replaceState";
const eventHashchange = "hashchange";
const events = [
  eventPopstate,
  eventPushState,
  eventReplaceState,
  eventHashchange
];
const subscribeToLocationUpdates = /* @__PURE__ */ __name((callback) => {
  for (const event of events) {
    addEventListener(event, callback);
  }
  return () => {
    for (const event of events) {
      removeEventListener(event, callback);
    }
  };
}, "subscribeToLocationUpdates");
const useLocationProperty = /* @__PURE__ */ __name((fn, ssrFn) => shimExports.useSyncExternalStore(subscribeToLocationUpdates, fn, ssrFn), "useLocationProperty");
const currentSearch = /* @__PURE__ */ __name(() => location.search, "currentSearch");
const useSearch = /* @__PURE__ */ __name(({ ssrSearch } = {}) => useLocationProperty(
  currentSearch,
  // != null checks for both null and undefined, but allows empty string ""
  // This allows proper hydration: server renders with ssrSearch="?foo",
  // client hydrates with just <Router /> and reads from location.search
  ssrSearch != null ? () => ssrSearch : currentSearch
), "useSearch");
const currentPathname = /* @__PURE__ */ __name(() => location.pathname, "currentPathname");
const usePathname = /* @__PURE__ */ __name(({ ssrPath } = {}) => useLocationProperty(
  currentPathname,
  // != null checks for both null and undefined, but allows empty string ""
  // This allows proper hydration: server renders with ssrPath="/foo",
  // client hydrates with just <Router /> and reads from location.pathname
  ssrPath != null ? () => ssrPath : currentPathname
), "usePathname");
const navigate = /* @__PURE__ */ __name((to, { replace = false, state = null } = {}) => history[replace ? eventReplaceState : eventPushState](state, "", to), "navigate");
const useBrowserLocation = /* @__PURE__ */ __name((opts = {}) => [usePathname(opts), navigate], "useBrowserLocation");
const patchKey = /* @__PURE__ */ Symbol.for("wouter_v3");
if (typeof history !== "undefined" && typeof window[patchKey] === "undefined") {
  for (const type of [eventPushState, eventReplaceState]) {
    const original = history[type];
    history[type] = function() {
      const result = original.apply(this, arguments);
      const event = new Event(type);
      event.arguments = arguments;
      dispatchEvent(event);
      return result;
    };
  }
  Object.defineProperty(window, patchKey, { value: true });
}
const _relativePath = /* @__PURE__ */ __name((base, path) => !path.toLowerCase().indexOf(base.toLowerCase()) ? path.slice(base.length) || "/" : "~" + path, "_relativePath");
const baseDefaults = /* @__PURE__ */ __name((base = "") => base === "/" ? "" : base, "baseDefaults");
const absolutePath = /* @__PURE__ */ __name((to, base) => to[0] === "~" ? to.slice(1) : baseDefaults(base) + to, "absolutePath");
const relativePath = /* @__PURE__ */ __name((base = "", path) => _relativePath(unescape(baseDefaults(base)), unescape(path)), "relativePath");
const unescape = /* @__PURE__ */ __name((str) => {
  try {
    return decodeURI(str);
  } catch (_e) {
    return str;
  }
}, "unescape");
const defaultRouter = {
  hook: useBrowserLocation,
  searchHook: useSearch,
  parser: parse,
  base: "",
  // this option is used to override the current location during SSR
  ssrPath: void 0,
  ssrSearch: void 0,
  // optional context to track render state during SSR
  ssrContext: void 0,
  // customizes how `href` props are transformed for <Link />
  hrefs: /* @__PURE__ */ __name((x) => x, "hrefs"),
  // wraps navigate calls, useful for view transitions
  aroundNav: /* @__PURE__ */ __name((n, t, o) => n(t, o), "aroundNav")
};
const RouterCtx = reactExports.createContext(defaultRouter);
const useRouter = /* @__PURE__ */ __name(() => reactExports.useContext(RouterCtx), "useRouter");
const Params0 = {}, ParamsCtx = reactExports.createContext(Params0);
const useParams = /* @__PURE__ */ __name(() => reactExports.useContext(ParamsCtx), "useParams");
const useLocationFromRouter = /* @__PURE__ */ __name((router) => {
  const [location2, navigate2] = router.hook(router);
  return [
    relativePath(router.base, location2),
    useEvent(
      (to, opts) => router.aroundNav(navigate2, absolutePath(to, router.base), opts)
    )
  ];
}, "useLocationFromRouter");
const useLocation = /* @__PURE__ */ __name(() => useLocationFromRouter(useRouter()), "useLocation");
const matchRoute = /* @__PURE__ */ __name((parser, route, path, loose) => {
  const { pattern, keys } = route instanceof RegExp ? { keys: false, pattern: route } : parser(route || "*", loose);
  const result = pattern.exec(path) || [];
  const [$base, ...matches] = result;
  return $base !== void 0 ? [
    true,
    (() => {
      const groups = keys !== false ? Object.fromEntries(keys.map((key, i) => [key, matches[i]])) : result.groups;
      let obj = { ...matches };
      groups && Object.assign(obj, groups);
      return obj;
    })(),
    // the third value if only present when parser is in "loose" mode,
    // so that we can extract the base path for nested routes
    ...loose ? [$base] : []
  ] : [false, null];
}, "matchRoute");
const useRoute = /* @__PURE__ */ __name((pattern) => matchRoute(useRouter().parser, pattern, useLocation()[0]), "useRoute");
const Router = /* @__PURE__ */ __name(({ children, ...props }) => {
  const parent_ = useRouter();
  const parent = props.hook ? defaultRouter : parent_;
  let value = parent;
  const [path, search = props.ssrSearch ?? ""] = props.ssrPath?.split("?") ?? [];
  if (path) props.ssrSearch = search, props.ssrPath = path;
  props.hrefs = props.hrefs ?? props.hook?.hrefs;
  props.searchHook = props.searchHook ?? props.hook?.searchHook;
  let ref = reactExports.useRef({}), prev = ref.current, next = prev;
  for (let k in parent) {
    const option = k === "base" ? (
      /* base is special case, it is appended to the parent's base */
      parent[k] + (props[k] ?? "")
    ) : props[k] ?? parent[k];
    if (prev === next && option !== next[k]) {
      ref.current = next = { ...next };
    }
    next[k] = option;
    if (option !== parent[k] || option !== value[k]) value = next;
  }
  return reactExports.createElement(RouterCtx.Provider, { value, children });
}, "Router");
const h_route = /* @__PURE__ */ __name(({ children, component }, params) => {
  if (component) return reactExports.createElement(component, { params });
  return typeof children === "function" ? children(params) : children;
}, "h_route");
const useCachedParams = /* @__PURE__ */ __name((value) => {
  let prev = reactExports.useRef(Params0);
  const curr = prev.current;
  return prev.current = // Update cache if number of params changed or any value changed
  Object.keys(value).length !== Object.keys(curr).length || Object.entries(value).some(([k, v]) => v !== curr[k]) ? value : curr;
}, "useCachedParams");
const Route = /* @__PURE__ */ __name(({ path, nest, match, ...renderProps }) => {
  const router = useRouter();
  const [location2] = useLocationFromRouter(router);
  const [matches, routeParams, base] = (
    // `match` is a special prop to give up control to the parent,
    // it is used by the `Switch` to avoid double matching
    match ?? matchRoute(router.parser, path, location2, nest)
  );
  const params = useCachedParams({ ...useParams(), ...routeParams });
  if (!matches) return null;
  const children = base ? reactExports.createElement(Router, { base }, h_route(renderProps, params)) : h_route(renderProps, params);
  return reactExports.createElement(ParamsCtx.Provider, { value: params, children });
}, "Route");
const Link = reactExports.forwardRef((props, ref) => {
  const router = useRouter();
  const [currentPath, navigate2] = useLocationFromRouter(router);
  const {
    to = "",
    href: targetPath = to,
    onClick: _onClick,
    asChild,
    children,
    className: cls,
    /* eslint-disable no-unused-vars */
    replace,
    state,
    transition,
    /* eslint-enable no-unused-vars */
    ...restProps
  } = props;
  const onClick = useEvent((event) => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.button !== 0)
      return;
    _onClick?.(event);
    if (!event.defaultPrevented) {
      event.preventDefault();
      navigate2(targetPath, props);
    }
  });
  const href = router.hrefs(
    targetPath[0] === "~" ? targetPath.slice(1) : router.base + targetPath,
    router
    // pass router as a second argument for convinience
  );
  return asChild && reactExports.isValidElement(children) ? reactExports.cloneElement(children, { onClick, href }) : reactExports.createElement("a", {
    ...restProps,
    onClick,
    href,
    // `className` can be a function to apply the class if this link is active
    className: cls?.call ? cls(currentPath === targetPath) : cls,
    children,
    ref
  });
});
const flattenChildren = /* @__PURE__ */ __name((children) => Array.isArray(children) ? children.flatMap(
  (c) => flattenChildren(c && c.type === reactExports.Fragment ? c.props.children : c)
) : [children], "flattenChildren");
const Switch = /* @__PURE__ */ __name(({ children, location: location2 }) => {
  const router = useRouter();
  const [originalLocation] = useLocationFromRouter(router);
  for (const element of flattenChildren(children)) {
    let match = 0;
    if (reactExports.isValidElement(element) && // we don't require an element to be of type Route,
    // but we do require it to contain a truthy `path` prop.
    // this allows to use different components that wrap Route
    // inside of a switch, for example <AnimatedRoute />.
    (match = matchRoute(
      router.parser,
      element.props.path,
      location2 || originalLocation,
      element.props.nest
    ))[0])
      return reactExports.cloneElement(element, { match });
  }
  return null;
}, "Switch");
export {
  Link as L,
  Router as R,
  Switch as S,
  Route as a,
  useParams as b,
  useRoute as c,
  useLocation as u
};
