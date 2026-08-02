var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _a, _b, _c, _headers, _init, _d, _e, _f;
import "./unenv.mjs";
import { N as NullProtoObj } from "./rou3.mjs";
import { F as FastURL, a as FastResponse } from "./srvx.mjs";
function decodePathname(pathname) {
  return decodeURI(pathname.includes("%25") ? pathname.replace(/%25/g, "%2525") : pathname);
}
__name(decodePathname, "decodePathname");
const kEventNS = "h3.internal.event.";
const kEventRes = /* @__PURE__ */ Symbol.for(`${kEventNS}res`);
const kEventResHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.headers`);
const kEventResErrHeaders = /* @__PURE__ */ Symbol.for(`${kEventNS}res.err.headers`);
const kMalformedURL = /* @__PURE__ */ Symbol.for(`${kEventNS}malformed`);
var H3Event = (_a = class {
  app;
  req;
  url;
  context;
  constructor(req, context, app) {
    this.context = req.context = context || req.context || new NullProtoObj();
    this.req = req;
    this.app = app;
    const _url = req._url;
    let url = _url && _url instanceof URL ? _url : new FastURL(req.url);
    if (url.pathname.includes("%")) try {
      const pathname = decodePathname(url.pathname);
      if (pathname !== url.pathname) url = new FastURL(`${url.protocol}//${url.host}${pathname}${url.search}`);
    } catch {
      this[kMalformedURL] = true;
    }
    this.url = url;
  }
  get res() {
    return this[kEventRes] ||= new H3EventResponse();
  }
  get runtime() {
    return this.req.runtime;
  }
  waitUntil(promise) {
    this.req.waitUntil?.(promise);
  }
  toString() {
    return `[${this.req.method}] ${this.req.url}`;
  }
  toJSON() {
    return this.toString();
  }
  get node() {
    return this.req.runtime?.node;
  }
  get headers() {
    return this.req.headers;
  }
  get path() {
    return this.url.pathname + this.url.search;
  }
  get method() {
    return this.req.method;
  }
}, __name(_a, "H3Event"), __publicField(_a, "__is_event__", true), _a);
var H3EventResponse = (_b = class {
  status;
  statusText;
  get headers() {
    return this[kEventResHeaders] ||= new Headers();
  }
  get errHeaders() {
    return this[kEventResErrHeaders] ||= new Headers();
  }
}, __name(_b, "H3EventResponse"), _b);
const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
__name(sanitizeStatusMessage, "sanitizeStatusMessage");
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) return defaultStatusCode;
  if (typeof statusCode === "string") statusCode = +statusCode;
  if (!Number.isInteger(statusCode) || statusCode < 100 || statusCode > 599) return defaultStatusCode;
  return statusCode;
}
__name(sanitizeStatusCode, "sanitizeStatusCode");
var HTTPError = (_c = class extends Error {
  get name() {
    return "HTTPError";
  }
  status;
  statusText;
  headers;
  cause;
  data;
  body;
  unhandled;
  static isError(input) {
    return input instanceof Error && input?.name === "HTTPError";
  }
  static status(status, statusText, details) {
    return new _c({
      ...details,
      statusText,
      status
    });
  }
  constructor(arg1, arg2) {
    let messageInput;
    let details;
    if (typeof arg1 === "string") {
      messageInput = arg1;
      details = arg2;
    } else details = arg1;
    const status = sanitizeStatusCode(details?.status || details?.statusCode || details?.cause?.status || details?.cause?.statusCode, 500);
    const statusText = sanitizeStatusMessage(details?.statusText || details?.statusMessage || details?.cause?.statusText || details?.cause?.statusMessage);
    const message = messageInput || details?.message || details?.cause?.message || details?.statusText || details?.statusMessage || [
      "HTTPError",
      status,
      statusText
    ].filter(Boolean).join(" ");
    super(message, { cause: details });
    this.cause = details;
    this.status = status;
    this.statusText = statusText || void 0;
    const rawHeaders = details?.headers || details?.cause?.headers;
    this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
    this.unhandled = details?.unhandled ?? details?.cause?.unhandled ?? void 0;
    this.data = details?.data;
    this.body = details?.body;
  }
  get statusCode() {
    return this.status;
  }
  get statusMessage() {
    return this.statusText;
  }
  toJSON() {
    const unhandled = this.unhandled;
    return {
      status: this.status,
      statusText: this.statusText,
      unhandled,
      message: unhandled ? "HTTPError" : this.message,
      data: unhandled ? void 0 : this.data,
      ...unhandled ? void 0 : this.body
    };
  }
}, __name(_c, "HTTPError"), _c);
function isJSONSerializable(value, _type) {
  if (value === null || value === void 0) return true;
  if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
  if (typeof value.toJSON === "function") return true;
  if (Array.isArray(value)) return true;
  if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
  if (value instanceof NullProtoObj) return true;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
__name(isJSONSerializable, "isJSONSerializable");
const kEventDispose = /* @__PURE__ */ Symbol.for("h3.internal.event.dispose");
const kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
const kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
function toResponse(val, event, config = {}) {
  if (typeof val?.then === "function") return val.then((resolvedVal) => toResponse(resolvedVal, event, config), (r) => toResponse(toError(r), event, config));
  let response;
  try {
    response = prepareResponse(val, event, config);
  } catch (error) {
    return toResponse(toError(error), event, config);
  }
  if (typeof response?.then === "function") return toResponse(response, event, config);
  const { onResponse } = config;
  if (onResponse) return Promise.resolve().then(() => onResponse(response, event)).catch((error) => {
    if (!config.silent) console.error(error);
  }).then(() => event[kEventDispose]?.observe(response, val) ?? response);
  return event[kEventDispose]?.observe(response, val) ?? response;
}
__name(toResponse, "toResponse");
function toError(value) {
  if (value === kNotFound || value === kHandled || value instanceof Error) return value;
  if (typeof value === "number") return new HTTPError({ status: value });
  const error = new HTTPError({
    status: 500,
    unhandled: true
  });
  error.cause = value;
  return error;
}
__name(toError, "toError");
var HTTPResponse = (_d = class {
  constructor(body, init) {
    __privateAdd(this, _headers);
    __privateAdd(this, _init);
    __publicField(this, "body");
    this.body = body;
    __privateSet(this, _init, init);
  }
  get status() {
    return __privateGet(this, _init)?.status;
  }
  get statusText() {
    return __privateGet(this, _init)?.statusText;
  }
  get headers() {
    return __privateGet(this, _headers) || __privateSet(this, _headers, new Headers(__privateGet(this, _init)?.headers));
  }
}, _headers = new WeakMap(), _init = new WeakMap(), __name(_d, "HTTPResponse"), _d);
function prepareResponse(val, event, config, nested) {
  if (val === kHandled) return new FastResponse(null);
  if (val === kNotFound) val = new HTTPError({
    status: 404,
    message: `Cannot find any route matching [${event.req.method}] ${event.url}`
  });
  if (val && val instanceof Error) {
    const isHTTPError = HTTPError.isError(val);
    const error = isHTTPError ? val : new HTTPError(val);
    if (!isHTTPError) {
      error.unhandled = true;
      if (val?.stack) error.stack = val.stack;
    }
    if (error.unhandled && !config.silent) console.error(error);
    const { onError } = config;
    const errHeaders = event[kEventRes]?.[kEventResErrHeaders];
    return onError && !nested ? Promise.resolve().then(() => onError(error, event)).catch((error2) => error2).then((newVal) => prepareResponse(newVal ?? val, event, config, true)) : errorResponse(error, config.debug, errHeaders);
  }
  const preparedRes = event[kEventRes];
  let preparedHeaders = preparedRes?.[kEventResHeaders];
  event[kEventRes] = void 0;
  if (!(val instanceof Response)) {
    const res = prepareResponseBody(val, event, config);
    const status = res.status || preparedRes?.status;
    return new FastResponse(nullBody(event.req.method, status) ? null : res.body, {
      status,
      statusText: res.statusText || preparedRes?.statusText,
      headers: res.headers && preparedHeaders ? mergeHeaders$1(res.headers, preparedHeaders) : res.headers || preparedHeaders
    });
  }
  if (val.status >= 400) preparedHeaders = preparedRes?.[kEventResErrHeaders];
  if (preparedHeaders && !nested) try {
    mergeHeaders$1(val.headers, preparedHeaders, val.headers);
  } catch {
    return new FastResponse(nullBody(event.req.method, val.status) ? null : val.body, {
      status: val.status,
      statusText: val.statusText,
      headers: mergeHeaders$1(val.headers, preparedHeaders)
    });
  }
  return event.req.method === "HEAD" && val.body !== null ? new FastResponse(null, {
    status: val.status,
    statusText: val.statusText,
    headers: val.headers
  }) : val;
}
__name(prepareResponse, "prepareResponse");
function mergeHeaders$1(base, overrides, target = new Headers(base)) {
  for (const [name, value] of overrides) if (name === "set-cookie") target.append(name, value);
  else target.set(name, value);
  return target;
}
__name(mergeHeaders$1, "mergeHeaders$1");
const frozen = /* @__PURE__ */ __name((name) => (...args) => {
  throw new Error(`Headers are frozen (${name} ${args.join(", ")})`);
}, "frozen");
var FrozenHeaders = (_e = class extends Headers {
  set = frozen("set");
  append = frozen("append");
  delete = frozen("delete");
}, __name(_e, "FrozenHeaders"), _e);
const emptyHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-length": "0" });
const jsonHeaders = /* @__PURE__ */ new FrozenHeaders({ "content-type": "application/json;charset=UTF-8" });
function prepareResponseBody(val, event, config) {
  if (val === null || val === void 0) return {
    body: "",
    headers: emptyHeaders
  };
  const valType = typeof val;
  if (valType === "string") return { body: val };
  if (val instanceof Uint8Array) return {
    body: val,
    headers: new Headers({ "content-length": val.byteLength.toString() })
  };
  if (val instanceof HTTPResponse || val?.constructor?.name === "HTTPResponse") return val;
  if (isJSONSerializable(val, valType)) return {
    body: JSON.stringify(val, void 0, config.debug ? 2 : void 0),
    headers: jsonHeaders
  };
  if (valType === "bigint") return {
    body: val.toString(),
    headers: jsonHeaders
  };
  if (val instanceof Blob) {
    const headers = new Headers({
      "content-type": val.type,
      "content-length": val.size.toString()
    });
    let filename = val.name;
    if (filename) {
      filename = encodeURIComponent(filename);
      headers.set("content-disposition", `filename="${filename}"; filename*=UTF-8''${filename}`);
    }
    return {
      body: val.stream(),
      headers
    };
  }
  if (valType === "symbol") return { body: val.toString() };
  if (valType === "function") return { body: `${val.name}()` };
  return { body: val };
}
__name(prepareResponseBody, "prepareResponseBody");
function nullBody(method, status) {
  return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
__name(nullBody, "nullBody");
function errorResponse(error, debug, errHeaders) {
  let headers = error.headers ? mergeHeaders$1(jsonHeaders, error.headers) : new Headers(jsonHeaders);
  if (errHeaders) headers = mergeHeaders$1(headers, errHeaders);
  return new FastResponse(JSON.stringify({
    ...error.toJSON(),
    stack: debug && error.stack ? error.stack.split("\n").map((l) => l.trim()) : void 0
  }, void 0, debug ? 2 : void 0), {
    status: error.status,
    statusText: error.statusText,
    headers
  });
}
__name(errorResponse, "errorResponse");
function composeMiddleware(middleware) {
  let chain = /* @__PURE__ */ __name((event, handler) => handler(event), "chain");
  for (let i = middleware.length - 1; i >= 0; i--) {
    const fn = middleware[i];
    const inner = chain;
    chain = /* @__PURE__ */ __name((event, handler) => callLayer(fn, event, handler, inner), "chain");
  }
  return chain;
}
__name(composeMiddleware, "composeMiddleware");
function composeHandler(middleware, handler) {
  const chain = composeMiddleware(middleware);
  return /* @__PURE__ */ __name(function _composedHandler(event) {
    return chain(event, handler);
  }, "_composedHandler");
}
__name(composeHandler, "composeHandler");
function callMiddleware(event, middleware, handler, index = 0) {
  return index === middleware.length ? handler(event) : callLayer(middleware[index], event, handler, (_event, _handler) => callMiddleware(_event, middleware, _handler, index + 1));
}
__name(callMiddleware, "callMiddleware");
function callLayer(fn, event, handler, inner) {
  let nextCalled;
  let nextResult;
  const next = /* @__PURE__ */ __name(() => {
    if (nextCalled) return nextResult;
    nextCalled = true;
    nextResult = inner(event, handler);
    return nextResult;
  }, "next");
  const ret = fn(event, next);
  return isUnhandledResponse(ret) ? next() : typeof ret?.then === "function" ? ret.then((resolved) => isUnhandledResponse(resolved) ? next() : resolved) : ret;
}
__name(callLayer, "callLayer");
function isUnhandledResponse(val) {
  return val === void 0 || val === kNotFound;
}
__name(isUnhandledResponse, "isUnhandledResponse");
function toRequest(input, options) {
  if (typeof input === "string") {
    let url = input;
    if (url[0] === "/") {
      const host = "localhost";
      url = `${"".split(",")[0].trim() === "https" ? "https" : "http"}://${host}${url}`;
    }
    return new Request(url, options);
  } else if (input instanceof URL) return new Request(input, options);
  return input;
}
__name(toRequest, "toRequest");
function defineHandler(input) {
  if (typeof input === "function") return handlerWithFetch(input);
  const handler = input.handler || (input.fetch ? /* @__PURE__ */ __name(function _fetchHandler(event) {
    return input.fetch(event.req);
  }, "_fetchHandler") : NoHandler);
  return Object.assign(handlerWithFetch(input.middleware?.length ? composeHandler(input.middleware, handler) : handler), input);
}
__name(defineHandler, "defineHandler");
function handlerWithFetch(handler) {
  if ("fetch" in handler) return handler;
  return Object.assign(handler, { fetch: /* @__PURE__ */ __name((req) => {
    if (typeof req === "string") req = new URL(req, "http://_");
    if (req instanceof URL) req = new Request(req);
    const event = new H3Event(req);
    try {
      return Promise.resolve(toResponse(handler(event), event));
    } catch (error) {
      return Promise.resolve(toResponse(toError(error), event));
    }
  }, "fetch") });
}
__name(handlerWithFetch, "handlerWithFetch");
function defineLazyEventHandler(loader) {
  let handler;
  let promise;
  return defineHandler(/* @__PURE__ */ __name(function lazyHandler(event) {
    return handler ? handler(event) : (promise ??= Promise.resolve(loader()).then(/* @__PURE__ */ __name(function resolveLazyHandler(r) {
      handler = toEventHandler(r) || toEventHandler(r.default);
      if (typeof handler !== "function") throw new TypeError("Invalid lazy handler", { cause: { resolved: r } });
      return handler;
    }, "resolveLazyHandler"))).then((r) => r(event));
  }, "lazyHandler"));
}
__name(defineLazyEventHandler, "defineLazyEventHandler");
function toEventHandler(handler) {
  if (typeof handler === "function") return handler;
  if (typeof handler?.handler === "function" && handler.constructor?.["~h3"]) return handler.handler;
  if (typeof handler?.fetch === "function") return /* @__PURE__ */ __name(function _fetchHandler(event) {
    return handler.fetch(event.req);
  }, "_fetchHandler");
}
__name(toEventHandler, "toEventHandler");
const NoHandler = /* @__PURE__ */ __name(() => kNotFound, "NoHandler");
var H3Core = (_f = class {
  config;
  "~middleware";
  "~routes" = [];
  "~dispatch";
  "~composed";
  constructor(config = {}) {
    this["~middleware"] = [];
    this.config = config;
    this.fetch = this.fetch.bind(this);
    this.handler = this.handler.bind(this);
  }
  fetch(request) {
    return this["~request"](request);
  }
  handler(event) {
    const route = this["~findRoute"](event);
    if (route) {
      event.context.params = route.params;
      event.context.matchedRoute = route.data;
    }
    return (this["~dispatch"] ??= createDispatcher(this))(event, route);
  }
  "~request"(request, context) {
    const event = new H3Event(request, context, this);
    let handlerRes;
    try {
      if (event[kMalformedURL] && !this.config.allowMalformedURL) throw new HTTPError({
        status: 400,
        message: "Bad Request"
      });
      if (this.config.onRequest) {
        const hookRes = this.config.onRequest(event);
        handlerRes = typeof hookRes?.then === "function" ? hookRes.then(() => this.handler(event)) : this.handler(event);
      } else handlerRes = this.handler(event);
    } catch (error) {
      handlerRes = Promise.reject(error);
    }
    return toResponse(handlerRes, event, this.config);
  }
  "~findRoute"(_event) {
  }
  "~addRoute"(_route) {
    this["~routes"].push(_route);
  }
  "~getMiddleware"(_event, route) {
    const routeMiddleware = route?.data.middleware;
    const globalMiddleware = this["~middleware"];
    return routeMiddleware ? [...globalMiddleware, ...routeMiddleware] : globalMiddleware;
  }
}, __name(_f, "H3Core"), __publicField(_f, "~h3", true), _f);
function createDispatcher(app) {
  if (app["~getMiddleware"] !== H3Core.prototype["~getMiddleware"]) return (event, route) => callMiddleware(event, app["~getMiddleware"](event, route), route?.data.handler || NoHandler);
  const middleware = app["~middleware"];
  if (middleware.length === 0) return (event, route) => routeHandler(route)(event);
  const composed = app["~composed"] ??= composeMiddleware(middleware);
  return (event, route) => composed(event, routeHandler(route));
}
__name(createDispatcher, "createDispatcher");
function routeHandler(route) {
  const data = route?.data;
  if (!data) return NoHandler;
  return data.middleware?.length ? data["~composed"] ??= composeHandler(data.middleware, data.handler) : data.handler;
}
__name(routeHandler, "routeHandler");
export {
  HTTPError as H,
  H3Core as a,
  defineLazyEventHandler as d,
  toRequest as t
};
