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
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _a, _isSecure, _listeningPromise, _listenError, _wait, _b;
import nodeHTTP from "node:http";
import { Readable, PassThrough } from "node:stream";
import { pipeline } from "node:stream/promises";
import nodeHTTPS from "node:https";
import nodeHTTP2 from "node:http2";
function lazyInherit$2(target, source, sourceKey) {
  for (const key of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
    if (key === "constructor") continue;
    const targetDesc = Object.getOwnPropertyDescriptor(target, key);
    const desc = Object.getOwnPropertyDescriptor(source, key);
    let modified = false;
    if (desc.get) {
      modified = true;
      desc.get = targetDesc?.get || function() {
        return this[sourceKey][key];
      };
    }
    if (desc.set) {
      modified = true;
      desc.set = targetDesc?.set || function(value) {
        this[sourceKey][key] = value;
      };
    }
    if (!targetDesc?.value && typeof desc.value === "function") {
      modified = true;
      desc.value = function(...args) {
        return this[sourceKey][key](...args);
      };
    }
    if (modified) Object.defineProperty(target, key, desc);
  }
}
__name(lazyInherit$2, "lazyInherit$2");
const _needsNormRE$2 = /(?:(?:^|\/)(?:\.|\.\.|%2e|%2e\.|\.%2e|%2e%2e)(?:\/|$))|[\\^#"<>{}`\x80-\uffff]/i;
const _searchNeedsNormRE$1 = /[#"'<>]/;
const FastURL$2 = /* @__PURE__ */ (() => {
  var _url, _href, _protocol, _host, _pathname, _search, _searchParams, _pos, _URL_instances, getPos_fn, _a2;
  const NativeURL = globalThis.URL;
  const FastURL2 = (_a2 = class {
    constructor(url) {
      __privateAdd(this, _URL_instances);
      __privateAdd(this, _url);
      __privateAdd(this, _href);
      __privateAdd(this, _protocol);
      __privateAdd(this, _host);
      __privateAdd(this, _pathname);
      __privateAdd(this, _search);
      __privateAdd(this, _searchParams);
      __privateAdd(this, _pos);
      if (typeof url === "string") {
        const isOriginForm = url[0] === "/";
        if (isOriginForm && !_searchNeedsNormRE$1.test(url)) __privateSet(this, _href, url);
        else __privateSet(this, _url, new NativeURL(isOriginForm ? `http://localhost${url}` : url));
      } else if (_needsNormRE$2.test(url.pathname) || url.search && _searchNeedsNormRE$1.test(url.search)) __privateSet(this, _url, new NativeURL(`${url.protocol || "http:"}//${url.host || "localhost"}${url.pathname}${url.search || ""}`));
      else {
        __privateSet(this, _protocol, url.protocol);
        __privateSet(this, _host, url.host);
        __privateSet(this, _pathname, url.pathname);
        __privateSet(this, _search, url.search);
      }
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeURL;
    }
    get _url() {
      if (__privateGet(this, _url)) return __privateGet(this, _url);
      __privateSet(this, _url, new NativeURL(this.href));
      __privateSet(this, _href, void 0);
      __privateSet(this, _protocol, void 0);
      __privateSet(this, _host, void 0);
      __privateSet(this, _pathname, void 0);
      __privateSet(this, _search, void 0);
      __privateSet(this, _searchParams, void 0);
      __privateSet(this, _pos, void 0);
      return __privateGet(this, _url);
    }
    get href() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).href;
      if (!__privateGet(this, _href)) __privateSet(this, _href, `${__privateGet(this, _protocol) || "http:"}//${__privateGet(this, _host) || "localhost"}${__privateGet(this, _pathname) || "/"}${__privateGet(this, _search) || ""}`);
      return __privateGet(this, _href);
    }
    get pathname() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).pathname;
      if (__privateGet(this, _pathname) === void 0) {
        const [, pathnameIndex, queryIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (pathnameIndex === -1) return this._url.pathname;
        __privateSet(this, _pathname, this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex));
      }
      return __privateGet(this, _pathname);
    }
    get search() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).search;
      if (__privateGet(this, _search) === void 0) {
        const [, pathnameIndex, queryIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (pathnameIndex === -1) return this._url.search;
        const url = this.href;
        __privateSet(this, _search, queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex));
      }
      return __privateGet(this, _search);
    }
    get searchParams() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).searchParams;
      if (!__privateGet(this, _searchParams)) __privateSet(this, _searchParams, new URLSearchParams(this.search));
      return __privateGet(this, _searchParams);
    }
    get protocol() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).protocol;
      if (__privateGet(this, _protocol) === void 0) {
        const [protocolIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (protocolIndex === -1) return this._url.protocol;
        const url = this.href;
        __privateSet(this, _protocol, url.slice(0, protocolIndex + 1));
      }
      return __privateGet(this, _protocol);
    }
    toString() {
      return this.href;
    }
    toJSON() {
      return this.href;
    }
  }, _url = new WeakMap(), _href = new WeakMap(), _protocol = new WeakMap(), _host = new WeakMap(), _pathname = new WeakMap(), _search = new WeakMap(), _searchParams = new WeakMap(), _pos = new WeakMap(), _URL_instances = new WeakSet(), getPos_fn = /* @__PURE__ */ __name(function() {
    if (!__privateGet(this, _pos)) {
      const url = this.href;
      const protoIndex = url.indexOf("://");
      const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
      const qIndex = pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex);
      __privateSet(this, _pos, [
        protoIndex,
        pathnameIndex,
        qIndex
      ]);
    }
    return __privateGet(this, _pos);
  }, "#getPos"), __name(_a2, "URL"), _a2);
  lazyInherit$2(FastURL2.prototype, NativeURL.prototype, "_url");
  Object.setPrototypeOf(FastURL2.prototype, NativeURL.prototype);
  Object.setPrototypeOf(FastURL2, NativeURL);
  return FastURL2;
})();
function resolvePortAndHost(opts) {
  const _port = opts.port ?? globalThis.process?.env.PORT ?? 3e3;
  const port = typeof _port === "number" ? _port : Number.parseInt(_port, 10);
  if (port < 0 || port > 65535) throw new RangeError(`Port must be between 0 and 65535 (got "${port}").`);
  return {
    port,
    hostname: opts.hostname ?? globalThis.process?.env.HOST
  };
}
__name(resolvePortAndHost, "resolvePortAndHost");
function fmtURL(host, port, secure) {
  if (!host || !port) return;
  if (host.includes(":")) host = `[${host}]`;
  return `http${secure ? "s" : ""}://${host}:${port}/`;
}
__name(fmtURL, "fmtURL");
function printListening(opts, url) {
  if (!url || (opts.silent ?? globalThis.process?.env?.TEST)) return;
  let additionalInfo = "";
  try {
    const _url = new URL(url);
    if (_url.hostname === "[::]" || _url.hostname === "0.0.0.0") {
      _url.hostname = "localhost";
      url = _url.href;
      additionalInfo = " (all interfaces)";
    }
  } catch {
  }
  let listeningOn = `➜ Listening on:`;
  if (globalThis.process.stdout?.isTTY) {
    listeningOn = `\x1B[32m${listeningOn}\x1B[0m`;
    url = `\x1B[36m${url}\x1B[0m`;
    additionalInfo = `\x1B[2m${additionalInfo}\x1B[0m`;
  }
  console.log(`${listeningOn} ${url}${additionalInfo}`);
}
__name(printListening, "printListening");
function resolveTLSOptions(opts) {
  if (!opts.tls || opts.protocol === "http") return;
  const cert = resolveCertOrKey(opts.tls.cert);
  const key = resolveCertOrKey(opts.tls.key);
  if (!cert && !key) {
    if (opts.protocol === "https") throw new TypeError("TLS `cert` and `key` must be provided for `https` protocol.");
    return;
  }
  if (!cert || !key) throw new TypeError("TLS `cert` and `key` must be provided together.");
  return {
    cert,
    key,
    passphrase: opts.tls.passphrase
  };
}
__name(resolveTLSOptions, "resolveTLSOptions");
function resolveCertOrKey(value) {
  if (!value) return;
  if (typeof value !== "string") throw new TypeError("TLS certificate and key must be strings in PEM format or file paths.");
  if (value.startsWith("-----BEGIN ")) return value;
  const { readFileSync } = process.getBuiltinModule("node:fs");
  return readFileSync(value, "utf8");
}
__name(resolveCertOrKey, "resolveCertOrKey");
function createWaitUntil() {
  const promises = /* @__PURE__ */ new Set();
  return {
    waitUntil: /* @__PURE__ */ __name((promise) => {
      if (typeof promise?.then !== "function") return;
      promises.add(Promise.resolve(promise).catch(console.error).finally(() => {
        promises.delete(promise);
      }));
    }, "waitUntil"),
    wait: /* @__PURE__ */ __name(() => {
      return Promise.all(promises);
    }, "wait")
  };
}
__name(createWaitUntil, "createWaitUntil");
const noColor = /* @__PURE__ */ (() => {
  const env = globalThis.process?.env ?? {};
  return env.NO_COLOR === "1" || env.TERM === "dumb";
})();
const _c = /* @__PURE__ */ __name((c, r = 39) => (t) => noColor ? t : `\x1B[${c}m${t}\x1B[${r}m`, "_c");
const bold = /* @__PURE__ */ _c(1, 22);
const red = /* @__PURE__ */ _c(31);
const green = /* @__PURE__ */ _c(32);
const gray = /* @__PURE__ */ _c(90);
function wrapFetch(server) {
  const fetchHandler = server.options.fetch;
  const middleware = server.options.middleware || [];
  return middleware.length === 0 ? fetchHandler : (request) => callMiddleware(request, fetchHandler, middleware, 0);
}
__name(wrapFetch, "wrapFetch");
function callMiddleware(request, fetchHandler, middleware, index) {
  if (index === middleware.length) return fetchHandler(request);
  return middleware[index](request, () => callMiddleware(request, fetchHandler, middleware, index + 1));
}
__name(callMiddleware, "callMiddleware");
const errorPlugin = /* @__PURE__ */ __name((server) => {
  const errorHandler = server.options.error;
  if (!errorHandler) return;
  server.options.middleware.unshift((_req, next) => {
    try {
      const res = next();
      return res instanceof Promise ? res.catch((error) => errorHandler(error)) : res;
    } catch (error) {
      return errorHandler(error);
    }
  });
}, "errorPlugin");
const gracefulShutdownPlugin = /* @__PURE__ */ __name((server) => {
  const config = server.options?.gracefulShutdown;
  if (!globalThis.process?.on || config === false || config === void 0 && (process.env.CI || process.env.TEST)) return;
  const gracefulTimeout = config === true || !config?.gracefulTimeout ? Number.parseInt(process.env.SERVER_SHUTDOWN_TIMEOUT || "") || 5 : config.gracefulTimeout;
  let isClosing = false;
  let isClosed = false;
  const w = server.options.silent ? () => {
  } : process.stderr.write.bind(process.stderr);
  const forceClose = /* @__PURE__ */ __name(async () => {
    if (isClosed) return;
    w(red("\x1B[2K\rForcibly closing connections...\n"));
    isClosed = true;
    await server.close(true);
  }, "forceClose");
  const shutdown = /* @__PURE__ */ __name(async () => {
    if (isClosing || isClosed) return;
    setTimeout(() => {
      globalThis.process.once("SIGINT", forceClose);
    }, 100);
    isClosing = true;
    const closePromise = server.close();
    for (let remaining = gracefulTimeout; remaining > 0; remaining--) {
      w(gray(`\rStopping server gracefully (${remaining}s)... Press ${bold("Ctrl+C")} again to force close.`));
      if (await Promise.race([closePromise.then(() => true), new Promise((r) => setTimeout(() => r(false), 1e3))])) {
        w("\x1B[2K\r" + green("Server closed successfully.\n"));
        isClosed = true;
        return;
      }
    }
    w("\x1B[2K\rGraceful shutdown timed out.\n");
    await forceClose();
  }, "shutdown");
  for (const sig of ["SIGINT", "SIGTERM"]) globalThis.process.on(sig, shutdown);
}, "gracefulShutdownPlugin");
function isTrustedProxy(trustProxy, remoteAddress) {
  if (trustProxy === void 0 || trustProxy === false) return false;
  if (trustProxy === true) return true;
  if (trustProxy === "loopback") return isLoopbackAddress(remoteAddress);
  if (remoteAddress === void 0) return false;
  if (trustProxy.includes(remoteAddress)) return true;
  const mapped = ipv4FromMapped(remoteAddress);
  return mapped !== void 0 && trustProxy.includes(mapped);
}
__name(isTrustedProxy, "isTrustedProxy");
function ipv4FromMapped(address) {
  return address.startsWith("::ffff:") && address.includes(".") ? address.slice(7) : void 0;
}
__name(ipv4FromMapped, "ipv4FromMapped");
function isLoopbackAddress(address) {
  return !!address && (address === "::1" || address.startsWith("127.") || address.startsWith("::ffff:127."));
}
__name(isLoopbackAddress, "isLoopbackAddress");
const HOST_RE = /^(\[(?:[A-Fa-f0-9:.]+)\]|(?:[A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+|(?:\d{1,3}\.){3}\d{1,3})(:\d{1,5})?$/;
function firstForwardedValue(value) {
  if (!value) return;
  return (Array.isArray(value) ? value[0] : value).split(",")[0].trim() || void 0;
}
__name(firstForwardedValue, "firstForwardedValue");
function createBodyTooLargeError(maxRequestBodySize) {
  return Object.assign(/* @__PURE__ */ new Error(`Request body exceeds the maximum allowed size of ${maxRequestBodySize} bytes.`), {
    code: "ERR_BODY_TOO_LARGE",
    statusCode: 413,
    status: 413
  });
}
__name(createBodyTooLargeError, "createBodyTooLargeError");
function limitBodyStream(stream, maxRequestBodySize) {
  const reader = stream.getReader();
  let size = 0;
  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.close();
        return;
      }
      size += value.byteLength;
      if (size > maxRequestBodySize) {
        const error = createBodyTooLargeError(maxRequestBodySize);
        reader.cancel(error).catch(() => {
        });
        controller.error(error);
        return;
      }
      controller.enqueue(value);
    },
    cancel(reason) {
      return reader.cancel(reason);
    }
  });
}
__name(limitBodyStream, "limitBodyStream");
function sendNodeResponseDetached(nodeRes, webRes) {
  try {
    return _sendNodeResponse(nodeRes, webRes, true);
  } catch (error) {
    handleSendError(nodeRes);
  }
}
__name(sendNodeResponseDetached, "sendNodeResponseDetached");
function handleSendError(nodeRes, _error) {
  if (nodeRes.headersSent) nodeRes.destroy();
  else {
    nodeRes.statusCode = 500;
    nodeRes.end();
  }
}
__name(handleSendError, "handleSendError");
function _sendNodeResponse(nodeRes, webRes, detached) {
  if (!webRes) {
    nodeRes.statusCode = 500;
    return endNodeResponse(nodeRes, detached);
  }
  if (webRes._toNodeResponse) {
    const res = webRes._toNodeResponse();
    if (res.body) {
      if (res.body instanceof ReadableStream) {
        writeHead(nodeRes, res.status, res.statusText, res.headers);
        return streamBody(res.body, nodeRes);
      } else if (typeof res.body?.pipe === "function") return pipeBody(res.body, nodeRes, res.status, res.statusText, res.headers);
      writeHead(nodeRes, res.status, res.statusText, res.headers);
      nodeRes.write(res.body);
    } else writeHead(nodeRes, res.status, res.statusText, res.headers);
    return endNodeResponse(nodeRes, detached);
  }
  const rawHeaders = [];
  for (const [key, value] of webRes.headers) rawHeaders.push(key, value);
  writeHead(nodeRes, webRes.status, webRes.statusText, rawHeaders);
  return webRes.body ? streamBody(webRes.body, nodeRes) : endNodeResponse(nodeRes, detached);
}
__name(_sendNodeResponse, "_sendNodeResponse");
function writeHead(nodeRes, status, statusText, rawHeaders) {
  if (!nodeRes.headersSent) if (nodeRes.req?.httpVersion === "2.0") nodeRes.writeHead(status, rawHeaders);
  else nodeRes.writeHead(status, statusText, rawHeaders);
}
__name(writeHead, "writeHead");
function endNodeResponse(nodeRes, detached) {
  if (detached) {
    nodeRes.end();
    return;
  }
  return new Promise((resolve) => nodeRes.end(resolve));
}
__name(endNodeResponse, "endNodeResponse");
function pipeBody(stream, nodeRes, status, statusText, headers) {
  if (nodeRes.destroyed) {
    stream.destroy?.();
    return;
  }
  if (typeof stream.on !== "function" || typeof stream.destroy !== "function") {
    writeHead(nodeRes, status, statusText, headers);
    stream.pipe(nodeRes);
    return new Promise((resolve) => nodeRes.on("close", resolve));
  }
  if (stream.destroyed) {
    writeHead(nodeRes, 500, "Internal Server Error", []);
    return endNodeResponse(nodeRes);
  }
  return new Promise((resolve) => {
    function onEarlyError() {
      stream.off("readable", onReadable);
      stream.destroy();
      writeHead(nodeRes, 500, "Internal Server Error", []);
      endNodeResponse(nodeRes).then(resolve);
    }
    __name(onEarlyError, "onEarlyError");
    function onReadable() {
      stream.off("error", onEarlyError);
      if (nodeRes.destroyed) {
        stream.destroy();
        return resolve();
      }
      writeHead(nodeRes, status, statusText, headers);
      pipeline(stream, nodeRes).catch(() => {
      }).then(() => resolve());
    }
    __name(onReadable, "onReadable");
    stream.once("error", onEarlyError);
    stream.once("readable", onReadable);
  });
}
__name(pipeBody, "pipeBody");
function streamBody(stream, nodeRes) {
  if (nodeRes.destroyed) {
    stream.cancel();
    return;
  }
  const reader = stream.getReader();
  function streamCancel(error) {
    reader.cancel(error).catch(() => {
    });
    if (error) nodeRes.destroy(error);
  }
  __name(streamCancel, "streamCancel");
  function streamHandle({ done, value }) {
    try {
      if (done) nodeRes.end();
      else if (nodeRes.write(value)) reader.read().then(streamHandle, streamCancel);
      else nodeRes.once("drain", () => reader.read().then(streamHandle, streamCancel));
    } catch (error) {
      streamCancel(error instanceof Error ? error : void 0);
    }
  }
  __name(streamHandle, "streamHandle");
  nodeRes.on("close", streamCancel);
  nodeRes.on("error", streamCancel);
  reader.read().then(streamHandle, streamCancel);
  return reader.closed.catch(streamCancel).finally(() => {
    nodeRes.off("close", streamCancel);
    nodeRes.off("error", streamCancel);
  });
}
__name(streamBody, "streamBody");
var NodeRequestURL = (_a = class extends FastURL$2 {
  constructor({ req, trusted = false }) {
    const path = req.url || "/";
    const forwardedHost = trusted ? firstForwardedValue(req.headers["x-forwarded-host"]) : void 0;
    let host = (forwardedHost && HOST_RE.test(forwardedHost) ? forwardedHost : void 0) || req.headers.host || req.headers[":authority"];
    if (host && !HOST_RE.test(host)) host = "_invalid_";
    else if (!host) if (req.socket) host = `${req.socket.localFamily === "IPv6" ? "[" + req.socket.localAddress + "]" : req.socket.localAddress}:${req.socket?.localPort || "80"}`;
    else host = "localhost";
    const forwardedProto = trusted ? firstForwardedValue(req.headers["x-forwarded-proto"]) : void 0;
    const protocol = req.socket?.encrypted || forwardedProto === "https" || trusted && req.headers[":scheme"] === "https" ? "https:" : "http:";
    if (path[0] === "/") {
      const qIndex = path.indexOf("?");
      super({
        protocol,
        host,
        pathname: qIndex === -1 ? path : path.slice(0, qIndex) || "/",
        search: qIndex === -1 ? "" : path.slice(qIndex) || ""
      });
    } else if (path === "*") super({
      protocol,
      host,
      pathname: "/*",
      search: ""
    });
    else super(path);
  }
}, __name(_a, "NodeRequestURL"), _a);
const _nonJoinedHeaders = /* @__PURE__ */ new Set([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "server",
  "user-agent"
]);
const _validHeaderNameRE = /^[!#$%&'*+\-.^_`|~\dA-Za-z]+$/;
function _isRepeated(rawHeaders, lowerName) {
  let seen = false;
  for (let i = 0; i < rawHeaders.length; i += 2) {
    const key = rawHeaders[i];
    if (key.length === lowerName.length && key.toLowerCase() === lowerName) {
      if (seen) return true;
      seen = true;
    }
  }
  return false;
}
__name(_isRepeated, "_isRepeated");
const NodeRequestHeaders = /* @__PURE__ */ (() => {
  var _req, _headers;
  const NativeHeaders = globalThis.Headers;
  const _Headers = class _Headers {
    constructor(req) {
      __privateAdd(this, _req);
      __privateAdd(this, _headers);
      __privateSet(this, _req, req);
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeHeaders;
    }
    get _headers() {
      if (!__privateGet(this, _headers)) {
        const headers = new NativeHeaders();
        const rawHeaders = __privateGet(this, _req).rawHeaders;
        const len = rawHeaders.length;
        for (let i = 0; i < len; i += 2) {
          const key = rawHeaders[i];
          if (key.charCodeAt(0) === 58) continue;
          const value = rawHeaders[i + 1];
          headers.append(key, value);
        }
        __privateSet(this, _headers, headers);
      }
      return __privateGet(this, _headers);
    }
    get(name) {
      if (__privateGet(this, _headers)) return __privateGet(this, _headers).get(name);
      const lower = name.toLowerCase();
      if (lower.charCodeAt(0) === 58) return this._headers.get(name);
      const value = __privateGet(this, _req).headers[lower];
      if (typeof value === "string") return _nonJoinedHeaders.has(lower) && _isRepeated(__privateGet(this, _req).rawHeaders, lower) ? this._headers.get(name) : value;
      if (Array.isArray(value)) return value.join(", ");
      return lower !== "__proto__" && _validHeaderNameRE.test(name) ? null : this._headers.get(name);
    }
    has(name) {
      if (__privateGet(this, _headers)) return __privateGet(this, _headers).has(name);
      const lower = name.toLowerCase();
      if (lower.charCodeAt(0) === 58) return this._headers.has(name);
      if (Object.hasOwn(__privateGet(this, _req).headers, lower)) return true;
      return lower !== "__proto__" && _validHeaderNameRE.test(name) ? false : this._headers.has(name);
    }
    getSetCookie() {
      if (__privateGet(this, _headers)) return __privateGet(this, _headers).getSetCookie();
      const value = __privateGet(this, _req).headers["set-cookie"];
      return Array.isArray(value) ? value.slice() : value ? [value] : [];
    }
    entries() {
      return this._headers.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  _req = new WeakMap();
  _headers = new WeakMap();
  __name(_Headers, "Headers");
  let Headers2 = _Headers;
  lazyInherit$2(Headers2.prototype, NativeHeaders.prototype, "_headers");
  Object.setPrototypeOf(Headers2, NativeHeaders);
  Object.setPrototypeOf(Headers2.prototype, NativeHeaders.prototype);
  return Headers2;
})();
const kNativeRequest = /* @__PURE__ */ Symbol.for("srvx.nativeRequest");
const NodeRequest = /* @__PURE__ */ (() => {
  var _req, _url, _bodyStream, _request, _headers, _abortController, _maxRequestBodySize, _trustProxy, _ip, _ipResolved, _remoteAddress, _trusted, _Request_instances, resolveTrusted_fn, readBuffered_fn;
  const NativeRequest = getNativeRequest();
  const _Request = class _Request {
    constructor(ctx) {
      __privateAdd(this, _Request_instances);
      __publicField(this, "runtime");
      __publicField(this, "waitUntil");
      __privateAdd(this, _req);
      __privateAdd(this, _url);
      __privateAdd(this, _bodyStream);
      __privateAdd(this, _request);
      __privateAdd(this, _headers);
      __privateAdd(this, _abortController);
      __privateAdd(this, _maxRequestBodySize);
      __privateAdd(this, _trustProxy);
      __privateAdd(this, _ip);
      __privateAdd(this, _ipResolved, false);
      __privateAdd(this, _remoteAddress);
      __privateAdd(this, _trusted);
      __privateSet(this, _req, ctx.req);
      __privateSet(this, _maxRequestBodySize, ctx.maxRequestBodySize);
      __privateSet(this, _trustProxy, ctx.trustProxy);
      this.runtime = {
        name: "node",
        node: ctx
      };
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeRequest;
    }
    get ip() {
      if (__privateGet(this, _ipResolved)) return __privateGet(this, _ip);
      __privateSet(this, _ipResolved, true);
      if (__privateMethod(this, _Request_instances, resolveTrusted_fn).call(this)) {
        const forwarded = firstForwardedValue(__privateGet(this, _req).headers["x-forwarded-for"]);
        if (forwarded) return __privateSet(this, _ip, forwarded);
      }
      return __privateSet(this, _ip, __privateGet(this, _remoteAddress));
    }
    get method() {
      if (__privateGet(this, _request)) return __privateGet(this, _request).method;
      return __privateGet(this, _req).method || "GET";
    }
    get _url() {
      return __privateGet(this, _url) || __privateSet(this, _url, new NodeRequestURL({
        req: __privateGet(this, _req),
        trusted: __privateMethod(this, _Request_instances, resolveTrusted_fn).call(this)
      }));
    }
    set _url(url) {
      __privateSet(this, _url, url);
    }
    get url() {
      if (__privateGet(this, _request)) return __privateGet(this, _request).url;
      return this._url.href;
    }
    get headers() {
      if (__privateGet(this, _request)) return __privateGet(this, _request).headers;
      return __privateGet(this, _headers) || __privateSet(this, _headers, new NodeRequestHeaders(__privateGet(this, _req)));
    }
    get _abortController() {
      if (!__privateGet(this, _abortController)) {
        __privateSet(this, _abortController, new AbortController());
        const { req, res } = this.runtime.node;
        const abortController = __privateGet(this, _abortController);
        const abort = /* @__PURE__ */ __name((err) => abortController.abort?.(err), "abort");
        if (res) res.once("close", () => {
          const reqError = req.errored;
          if (reqError) abort(reqError);
          else if (!res.writableEnded) abort();
        });
        else req.once("close", () => {
          if (!req.complete) abort();
        });
      }
      return __privateGet(this, _abortController);
    }
    get signal() {
      return __privateGet(this, _request) ? __privateGet(this, _request).signal : this._abortController.signal;
    }
    get body() {
      if (__privateGet(this, _request)) return __privateGet(this, _request).body;
      if (__privateGet(this, _bodyStream) === void 0) {
        const method = this.method;
        let stream = !(method === "GET" || method === "HEAD") ? Readable.toWeb(__privateGet(this, _req)) : null;
        if (stream && __privateGet(this, _maxRequestBodySize) !== void 0) stream = limitBodyStream(stream, __privateGet(this, _maxRequestBodySize));
        __privateSet(this, _bodyStream, stream);
      }
      return __privateGet(this, _bodyStream);
    }
    text() {
      if (__privateGet(this, _request)) return __privateGet(this, _request).text();
      if (__privateGet(this, _bodyStream) !== void 0) return __privateGet(this, _bodyStream) ? new Response(__privateGet(this, _bodyStream)).text() : Promise.resolve("");
      return __privateMethod(this, _Request_instances, readBuffered_fn).call(this).then((buf) => buf.toString());
    }
    json() {
      if (__privateGet(this, _request)) return __privateGet(this, _request).json();
      if (__privateGet(this, _bodyStream) !== void 0) return this.text().then((text) => JSON.parse(text));
      return __privateMethod(this, _Request_instances, readBuffered_fn).call(this).then((buf) => JSON.parse(buf.toString()));
    }
    get _request() {
      if (!__privateGet(this, _request)) {
        const body = this.body;
        __privateSet(this, _request, new NativeRequest(this.url, {
          method: this.method,
          headers: this.headers,
          signal: this._abortController.signal,
          body,
          duplex: body ? "half" : void 0
        }));
        __privateSet(this, _headers, void 0);
        __privateSet(this, _bodyStream, void 0);
      }
      return __privateGet(this, _request);
    }
  };
  _req = new WeakMap();
  _url = new WeakMap();
  _bodyStream = new WeakMap();
  _request = new WeakMap();
  _headers = new WeakMap();
  _abortController = new WeakMap();
  _maxRequestBodySize = new WeakMap();
  _trustProxy = new WeakMap();
  _ip = new WeakMap();
  _ipResolved = new WeakMap();
  _remoteAddress = new WeakMap();
  _trusted = new WeakMap();
  _Request_instances = new WeakSet();
  resolveTrusted_fn = /* @__PURE__ */ __name(function() {
    if (__privateGet(this, _trusted) === void 0) {
      __privateSet(this, _remoteAddress, __privateGet(this, _req).socket?.remoteAddress);
      __privateSet(this, _trusted, isTrustedProxy(__privateGet(this, _trustProxy), __privateGet(this, _remoteAddress)));
    }
    return __privateGet(this, _trusted);
  }, "#resolveTrusted");
  readBuffered_fn = /* @__PURE__ */ __name(function() {
    return readBody(__privateGet(this, _req), __privateGet(this, _maxRequestBodySize));
  }, "#readBuffered");
  __name(_Request, "Request");
  let Request = _Request;
  lazyInherit$2(Request.prototype, NativeRequest.prototype, "_request");
  Object.setPrototypeOf(Request.prototype, NativeRequest.prototype);
  return Request;
})();
function readBody(req, maxRequestBodySize) {
  if ("rawBody" in req && Buffer.isBuffer(req.rawBody)) {
    if (maxRequestBodySize !== void 0 && req.rawBody.length > maxRequestBodySize) return Promise.reject(createBodyTooLargeError(maxRequestBodySize));
    return Promise.resolve(req.rawBody);
  }
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    const cleanup = /* @__PURE__ */ __name(() => {
      req.off("data", onData);
      req.off("end", onEnd);
      req.off("error", onError);
    }, "cleanup");
    const onData = /* @__PURE__ */ __name((chunk) => {
      if (maxRequestBodySize !== void 0) {
        size += chunk.length;
        if (size > maxRequestBodySize) {
          cleanup();
          req.pause?.();
          reject(createBodyTooLargeError(maxRequestBodySize));
          return;
        }
      }
      chunks.push(chunk);
    }, "onData");
    const onError = /* @__PURE__ */ __name((err) => {
      cleanup();
      reject(err);
    }, "onError");
    const onEnd = /* @__PURE__ */ __name(() => {
      cleanup();
      resolve(chunks.length === 1 ? chunks[0] : Buffer.concat(chunks));
    }, "onEnd");
    req.on("data", onData).once("end", onEnd).once("error", onError);
  });
}
__name(readBody, "readBody");
function getNativeRequest() {
  let R = globalThis[kNativeRequest] || globalThis.Request;
  while (R?._srvx) R = Object.getPrototypeOf(R);
  return globalThis[kNativeRequest] ??= R;
}
__name(getNativeRequest, "getNativeRequest");
const NodeResponse$2 = /* @__PURE__ */ (() => {
  var _body, _init, _headers, _response;
  const NativeResponse = globalThis.Response;
  const STATUS_CODES = globalThis.process?.getBuiltinModule?.("node:http")?.STATUS_CODES || {};
  const _NodeResponse = class _NodeResponse {
    constructor(body, init) {
      __privateAdd(this, _body);
      __privateAdd(this, _init);
      __privateAdd(this, _headers);
      __privateAdd(this, _response);
      __privateSet(this, _body, body);
      __privateSet(this, _init, init);
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeResponse;
    }
    get status() {
      return __privateGet(this, _response)?.status || __privateGet(this, _init)?.status || 200;
    }
    get statusText() {
      return __privateGet(this, _response)?.statusText || __privateGet(this, _init)?.statusText || STATUS_CODES[this.status] || "";
    }
    get headers() {
      if (__privateGet(this, _response)) return __privateGet(this, _response).headers;
      if (__privateGet(this, _headers)) return __privateGet(this, _headers);
      const initHeaders = __privateGet(this, _init)?.headers;
      return __privateSet(this, _headers, initHeaders instanceof Headers ? initHeaders : new Headers(initHeaders));
    }
    get ok() {
      if (__privateGet(this, _response)) return __privateGet(this, _response).ok;
      const status = this.status;
      return status >= 200 && status < 300;
    }
    get _response() {
      if (__privateGet(this, _response)) return __privateGet(this, _response);
      let body = __privateGet(this, _body);
      if (body && typeof body.pipe === "function" && !(body instanceof Readable)) {
        const stream = new PassThrough();
        body.pipe(stream);
        const abort = body.abort;
        if (abort) stream.once("close", () => abort());
        body = stream;
      }
      __privateSet(this, _response, new NativeResponse(body, __privateGet(this, _headers) ? {
        ...__privateGet(this, _init),
        headers: __privateGet(this, _headers)
      } : __privateGet(this, _init)));
      __privateSet(this, _init, void 0);
      __privateSet(this, _headers, void 0);
      __privateSet(this, _body, void 0);
      return __privateGet(this, _response);
    }
    _toNodeResponse() {
      const status = this.status;
      const statusText = this.statusText;
      let body;
      let contentType;
      let contentLength;
      if (__privateGet(this, _response)) body = __privateGet(this, _response).body;
      else if (__privateGet(this, _body)) if (__privateGet(this, _body) instanceof ReadableStream) body = __privateGet(this, _body);
      else if (typeof __privateGet(this, _body) === "string") {
        body = __privateGet(this, _body);
        contentType = "text/plain; charset=UTF-8";
        contentLength = Buffer.byteLength(__privateGet(this, _body));
      } else if (__privateGet(this, _body) instanceof ArrayBuffer) {
        body = Buffer.from(__privateGet(this, _body));
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof Uint8Array) {
        body = __privateGet(this, _body);
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof DataView) {
        body = Buffer.from(__privateGet(this, _body).buffer);
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof Blob) {
        body = __privateGet(this, _body).stream();
        contentType = __privateGet(this, _body).type;
        contentLength = __privateGet(this, _body).size;
      } else if (typeof __privateGet(this, _body).pipe === "function") body = __privateGet(this, _body);
      else body = this._response.body;
      const headers = [];
      const initHeaders = __privateGet(this, _init)?.headers;
      const headerEntries = __privateGet(this, _response)?.headers || __privateGet(this, _headers) || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders) : void 0);
      let hasContentTypeHeader;
      let hasContentLength;
      if (headerEntries) for (const [key, value] of headerEntries) {
        const lowerKey = typeof key === "string" ? key.toLowerCase() : String(key);
        if (Array.isArray(value)) for (const v of value) headers.push(lowerKey, v);
        else headers.push(lowerKey, value);
        if (lowerKey === "content-type") hasContentTypeHeader = true;
        else if (lowerKey === "content-length") hasContentLength = true;
      }
      if (contentType && !hasContentTypeHeader) headers.push("content-type", contentType);
      if (contentLength && !hasContentLength) headers.push("content-length", String(contentLength));
      __privateSet(this, _init, void 0);
      __privateSet(this, _headers, void 0);
      __privateSet(this, _response, void 0);
      __privateSet(this, _body, void 0);
      return {
        status,
        statusText,
        headers,
        body
      };
    }
  };
  _body = new WeakMap();
  _init = new WeakMap();
  _headers = new WeakMap();
  _response = new WeakMap();
  __name(_NodeResponse, "NodeResponse");
  let NodeResponse2 = _NodeResponse;
  lazyInherit$2(NodeResponse2.prototype, NativeResponse.prototype, "_response");
  Object.setPrototypeOf(NodeResponse2, NativeResponse);
  Object.setPrototypeOf(NodeResponse2.prototype, NativeResponse.prototype);
  return NodeResponse2;
})();
function serve(options) {
  return new NodeServer(options);
}
__name(serve, "serve");
var NodeServer = (_b = class {
  constructor(options) {
    __publicField(this, "runtime", "node");
    __publicField(this, "options");
    __publicField(this, "node");
    __publicField(this, "serveOptions");
    __publicField(this, "fetch");
    __publicField(this, "waitUntil");
    __privateAdd(this, _isSecure);
    __privateAdd(this, _listeningPromise);
    __privateAdd(this, _listenError);
    __privateAdd(this, _wait);
    this.options = {
      ...options,
      middleware: [...options.middleware || []]
    };
    for (const plugin of options.plugins || []) plugin(this);
    errorPlugin(this);
    const fetchHandler = this.fetch = wrapFetch(this);
    const handler = /* @__PURE__ */ __name((nodeReq, nodeRes) => {
      const reqUrl = nodeReq.url;
      if (reqUrl && reqUrl[0] !== "/" && reqUrl !== "*" && !URL.canParse(reqUrl)) {
        nodeRes.statusCode = 400;
        nodeRes.end();
        return;
      }
      const request = new NodeRequest({
        req: nodeReq,
        res: nodeRes,
        maxRequestBodySize: this.options.maxRequestBodySize,
        trustProxy: this.options.trustProxy
      });
      request.waitUntil = __privateGet(this, _wait)?.waitUntil;
      const res = fetchHandler(request);
      return res instanceof Promise ? res.then((resolvedRes) => sendNodeResponseDetached(nodeRes, resolvedRes)) : sendNodeResponseDetached(nodeRes, res);
    }, "handler");
    this.node = {
      handler,
      server: void 0
    };
    const loader = globalThis.__srvxLoader__;
    if (loader) {
      loader({ server: this });
      return;
    }
    gracefulShutdownPlugin(this);
    __privateSet(this, _wait, createWaitUntil());
    this.waitUntil = __privateGet(this, _wait).waitUntil;
    const tls = resolveTLSOptions(this.options);
    const { port, hostname: host } = resolvePortAndHost(this.options);
    this.serveOptions = {
      port,
      host,
      exclusive: !this.options.reusePort,
      ...tls,
      ...this.options.node
    };
    let server;
    __privateSet(this, _isSecure, !!this.serveOptions.cert && this.options.protocol !== "http");
    if (this.options.node?.http2 ?? __privateGet(this, _isSecure)) if (__privateGet(this, _isSecure)) server = nodeHTTP2.createSecureServer({
      allowHTTP1: true,
      ...this.serveOptions
    }, handler);
    else throw new Error("node.http2 option requires tls certificate!");
    else if (__privateGet(this, _isSecure)) server = nodeHTTPS.createServer(this.serveOptions, handler);
    else server = nodeHTTP.createServer(this.serveOptions, handler);
    this.node.server = server;
    if (!options.manual) this.serve().catch(() => {
    });
  }
  serve() {
    if (__privateGet(this, _listeningPromise)) return __privateGet(this, _listeningPromise).then(() => this);
    const server = this.node?.server;
    if (!server) return Promise.reject(/* @__PURE__ */ new Error("Server not initialized"));
    __privateSet(this, _listenError, void 0);
    __privateSet(this, _listeningPromise, new Promise((resolve, reject) => {
      const onError = /* @__PURE__ */ __name((error) => {
        server.off("listening", onListening);
        __privateSet(this, _listenError, error);
        __privateSet(this, _listeningPromise, void 0);
        reject(error);
      }, "onError");
      const onListening = /* @__PURE__ */ __name(() => {
        server.off("error", onError);
        printListening(this.options, this.url);
        resolve();
      }, "onListening");
      server.once("error", onError);
      server.once("listening", onListening);
      server.listen(this.serveOptions);
    }));
    return __privateGet(this, _listeningPromise).then(() => this);
  }
  get url() {
    const addr = this.node?.server?.address();
    if (!addr) return;
    return typeof addr === "string" ? addr : fmtURL(addr.address, addr.port, __privateGet(this, _isSecure));
  }
  ready() {
    if (__privateGet(this, _listenError)) return Promise.reject(__privateGet(this, _listenError));
    return Promise.resolve(__privateGet(this, _listeningPromise)).then(() => this);
  }
  async close(closeAll) {
    await Promise.all([__privateGet(this, _wait)?.wait(), new Promise((resolve, reject) => {
      const server = this.node?.server;
      if (server && closeAll && "closeAllConnections" in server) server.closeAllConnections();
      if (!server || !server.listening) return resolve();
      server.close((error) => error ? reject(error) : resolve());
    })]);
  }
}, _isSecure = new WeakMap(), _listeningPromise = new WeakMap(), _listenError = new WeakMap(), _wait = new WeakMap(), __name(_b, "NodeServer"), _b);
function lazyInherit$1(target, source, sourceKey) {
  for (const key of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
    if (key === "constructor") continue;
    const targetDesc = Object.getOwnPropertyDescriptor(target, key);
    const desc = Object.getOwnPropertyDescriptor(source, key);
    let modified = false;
    if (desc.get) {
      modified = true;
      desc.get = targetDesc?.get || function() {
        return this[sourceKey][key];
      };
    }
    if (desc.set) {
      modified = true;
      desc.set = targetDesc?.set || function(value) {
        this[sourceKey][key] = value;
      };
    }
    if (!targetDesc?.value && typeof desc.value === "function") {
      modified = true;
      desc.value = function(...args) {
        return this[sourceKey][key](...args);
      };
    }
    if (modified) Object.defineProperty(target, key, desc);
  }
}
__name(lazyInherit$1, "lazyInherit$1");
const _needsNormRE$1 = /(?:(?:^|\/)(?:\.|\.\.|%2e|%2e\.|\.%2e|%2e%2e)(?:\/|$))|[\\^#"<>{}`\x00-\x20\x7f-\uffff]/i;
const _searchNeedsNormRE = /[#"'<>\x00-\x20\x7f-\uffff]/;
const FastURL$1 = /* @__PURE__ */ (() => {
  var _owner, _params, _URLSearchParams_instances, mutable_fn, _a2, _url, _href, _protocol, _host, _pathname, _search, _searchParams, _pos, _URL_instances, getPos_fn, _b2;
  const NativeURL = globalThis.URL;
  const NativeSearchParams = globalThis.URLSearchParams;
  const FastURLSearchParams = (_a2 = class {
    constructor(owner) {
      __privateAdd(this, _URLSearchParams_instances);
      __privateAdd(this, _owner);
      __privateAdd(this, _params);
      __privateSet(this, _owner, owner);
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeSearchParams;
    }
    _adopt(params) {
      __privateSet(this, _params, params);
    }
    get _params() {
      if (!__privateGet(this, _params)) {
        const search = __privateGet(this, _owner).search;
        __privateGet(this, _params) ?? __privateSet(this, _params, new NativeSearchParams(search));
      }
      return __privateGet(this, _params);
    }
    append(name, value) {
      __privateMethod(this, _URLSearchParams_instances, mutable_fn).call(this).append(name, value);
    }
    set(name, value) {
      __privateMethod(this, _URLSearchParams_instances, mutable_fn).call(this).set(name, value);
    }
    delete(name, value) {
      __privateMethod(this, _URLSearchParams_instances, mutable_fn).call(this).delete(name, value);
    }
    sort() {
      __privateMethod(this, _URLSearchParams_instances, mutable_fn).call(this).sort();
    }
  }, _owner = new WeakMap(), _params = new WeakMap(), _URLSearchParams_instances = new WeakSet(), mutable_fn = /* @__PURE__ */ __name(function() {
    __privateGet(this, _owner)._url;
    return __privateGet(this, _params);
  }, "#mutable"), __name(_a2, "URLSearchParams"), _a2);
  lazyInherit$1(FastURLSearchParams.prototype, NativeSearchParams.prototype, "_params");
  Object.setPrototypeOf(FastURLSearchParams.prototype, NativeSearchParams.prototype);
  Object.setPrototypeOf(FastURLSearchParams, NativeSearchParams);
  const FastURL2 = (_b2 = class {
    constructor(url) {
      __privateAdd(this, _URL_instances);
      __privateAdd(this, _url);
      __privateAdd(this, _href);
      __privateAdd(this, _protocol);
      __privateAdd(this, _host);
      __privateAdd(this, _pathname);
      __privateAdd(this, _search);
      __privateAdd(this, _searchParams);
      __privateAdd(this, _pos);
      if (typeof url === "string") {
        const isOriginForm = url[0] === "/";
        if (isOriginForm && !_searchNeedsNormRE.test(url)) __privateSet(this, _href, `http://localhost${url}`);
        else __privateSet(this, _url, new NativeURL(isOriginForm ? `http://localhost${url}` : url));
      } else if (_needsNormRE$1.test(url.pathname) || url.search && _searchNeedsNormRE.test(url.search)) __privateSet(this, _url, new NativeURL(`${url.protocol || "http:"}//${url.host || "localhost"}${url.pathname}${url.search || ""}`));
      else {
        __privateSet(this, _protocol, url.protocol);
        __privateSet(this, _host, url.host);
        __privateSet(this, _pathname, url.pathname);
        __privateSet(this, _search, url.search);
      }
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeURL;
    }
    get _url() {
      if (__privateGet(this, _url)) return __privateGet(this, _url);
      __privateSet(this, _url, new NativeURL(this.href));
      __privateSet(this, _href, void 0);
      __privateSet(this, _protocol, void 0);
      __privateSet(this, _host, void 0);
      __privateSet(this, _pathname, void 0);
      __privateSet(this, _search, void 0);
      __privateSet(this, _pos, void 0);
      __privateGet(this, _searchParams)?._adopt(__privateGet(this, _url).searchParams);
      return __privateGet(this, _url);
    }
    get href() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).href;
      if (!__privateGet(this, _href)) __privateSet(this, _href, `${__privateGet(this, _protocol) || "http:"}//${__privateGet(this, _host) || "localhost"}${__privateGet(this, _pathname) || "/"}${__privateGet(this, _search) || ""}`);
      return __privateGet(this, _href);
    }
    get pathname() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).pathname;
      if (__privateGet(this, _pathname) === void 0) {
        const [, pathnameIndex, queryIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (pathnameIndex === -1) return this._url.pathname;
        __privateSet(this, _pathname, this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex));
      }
      return __privateGet(this, _pathname);
    }
    get search() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).search;
      if (__privateGet(this, _search) === void 0) {
        const [, pathnameIndex, queryIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (pathnameIndex === -1) return this._url.search;
        const url = this.href;
        __privateSet(this, _search, queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex));
      }
      return __privateGet(this, _search);
    }
    get searchParams() {
      if (__privateGet(this, _searchParams)) return __privateGet(this, _searchParams);
      if (__privateGet(this, _url)) return __privateGet(this, _url).searchParams;
      return __privateSet(this, _searchParams, new FastURLSearchParams(this));
    }
    get protocol() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).protocol;
      if (__privateGet(this, _protocol) === void 0) {
        const [protocolIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (protocolIndex === -1) return this._url.protocol;
        const url = this.href;
        __privateSet(this, _protocol, url.slice(0, protocolIndex + 1));
      }
      return __privateGet(this, _protocol);
    }
    toString() {
      return this.href;
    }
    toJSON() {
      return this.href;
    }
  }, _url = new WeakMap(), _href = new WeakMap(), _protocol = new WeakMap(), _host = new WeakMap(), _pathname = new WeakMap(), _search = new WeakMap(), _searchParams = new WeakMap(), _pos = new WeakMap(), _URL_instances = new WeakSet(), getPos_fn = /* @__PURE__ */ __name(function() {
    if (!__privateGet(this, _pos)) {
      const url = this.href;
      const protoIndex = url.indexOf("://");
      const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
      const qIndex = pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex);
      __privateSet(this, _pos, [
        protoIndex,
        pathnameIndex,
        qIndex
      ]);
    }
    return __privateGet(this, _pos);
  }, "#getPos"), __name(_b2, "URL"), _b2);
  lazyInherit$1(FastURL2.prototype, NativeURL.prototype, "_url");
  Object.setPrototypeOf(FastURL2.prototype, NativeURL.prototype);
  Object.setPrototypeOf(FastURL2, NativeURL);
  return FastURL2;
})();
const NodeResponse$1 = /* @__PURE__ */ (() => {
  var _body, _init, _headers, _response;
  const NativeResponse = globalThis.Response;
  const _NodeResponse = class _NodeResponse {
    constructor(body, init) {
      __privateAdd(this, _body);
      __privateAdd(this, _init);
      __privateAdd(this, _headers);
      __privateAdd(this, _response);
      __privateSet(this, _body, body);
      __privateSet(this, _init, init);
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeResponse;
    }
    static json(data, init) {
      const body = JSON.stringify(data);
      if (body === void 0) throw new TypeError("Value is not JSON serializable");
      let headers = init?.headers;
      if (!headers) headers = { "content-type": "application/json" };
      else {
        const merged = new Headers(headers);
        if (!merged.has("content-type")) merged.set("content-type", "application/json");
        headers = merged;
      }
      return new _NodeResponse(body, init ? {
        ...init,
        headers
      } : { headers });
    }
    get status() {
      return __privateGet(this, _response)?.status || __privateGet(this, _init)?.status || 200;
    }
    get statusText() {
      return __privateGet(this, _response)?.statusText || __privateGet(this, _init)?.statusText || "";
    }
    get headers() {
      if (__privateGet(this, _response)) return __privateGet(this, _response).headers;
      if (__privateGet(this, _headers)) return __privateGet(this, _headers);
      return __privateSet(this, _headers, new Headers(__privateGet(this, _init)?.headers));
    }
    get ok() {
      if (__privateGet(this, _response)) return __privateGet(this, _response).ok;
      const status = this.status;
      return status >= 200 && status < 300;
    }
    get _response() {
      if (__privateGet(this, _response)) return __privateGet(this, _response);
      let body = __privateGet(this, _body);
      if (body && typeof body.pipe === "function" && !(body instanceof Readable)) {
        const stream = new PassThrough();
        body.pipe(stream);
        const abort = body.abort;
        if (abort) stream.once("close", () => abort());
        body = stream;
      }
      __privateSet(this, _response, new NativeResponse(body, __privateGet(this, _headers) ? {
        ...__privateGet(this, _init),
        headers: __privateGet(this, _headers)
      } : __privateGet(this, _init)));
      __privateSet(this, _init, void 0);
      __privateSet(this, _headers, void 0);
      __privateSet(this, _body, void 0);
      return __privateGet(this, _response);
    }
    _toNodeResponse() {
      const status = this.status;
      const statusText = this.statusText;
      let body;
      let contentType;
      let contentLength;
      if (__privateGet(this, _response)) body = __privateGet(this, _response).body;
      else if (__privateGet(this, _body) != null) if (__privateGet(this, _body) instanceof ReadableStream) body = __privateGet(this, _body);
      else if (typeof __privateGet(this, _body) === "string") {
        body = __privateGet(this, _body);
        contentType = "text/plain; charset=UTF-8";
        contentLength = Buffer.byteLength(__privateGet(this, _body));
      } else if (__privateGet(this, _body) instanceof ArrayBuffer) {
        body = Buffer.from(__privateGet(this, _body));
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof Uint8Array) {
        body = __privateGet(this, _body);
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof DataView) {
        body = Buffer.from(__privateGet(this, _body).buffer, __privateGet(this, _body).byteOffset, __privateGet(this, _body).byteLength);
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof Blob) {
        body = __privateGet(this, _body).stream();
        contentType = __privateGet(this, _body).type;
        contentLength = __privateGet(this, _body).size;
      } else if (typeof __privateGet(this, _body).pipe === "function") body = __privateGet(this, _body);
      else body = this._response.body;
      const headers = [];
      const initHeaders = __privateGet(this, _init)?.headers;
      const headerEntries = __privateGet(this, _response)?.headers || __privateGet(this, _headers) || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders) : void 0);
      let hasContentTypeHeader;
      let hasContentLength;
      if (headerEntries) for (const [key, value] of headerEntries) {
        const lowerKey = typeof key === "string" ? key.toLowerCase() : String(key);
        if (Array.isArray(value)) for (const v of value) headers.push(lowerKey, v);
        else headers.push(lowerKey, value);
        if (lowerKey === "content-type") hasContentTypeHeader = true;
        else if (lowerKey === "content-length") hasContentLength = true;
      }
      if (contentType && !hasContentTypeHeader) headers.push("content-type", contentType);
      if (contentLength != null && !hasContentLength) headers.push("content-length", String(contentLength));
      __privateSet(this, _init, void 0);
      __privateSet(this, _headers, void 0);
      __privateSet(this, _response, void 0);
      __privateSet(this, _body, void 0);
      return {
        status,
        statusText,
        headers,
        body
      };
    }
  };
  _body = new WeakMap();
  _init = new WeakMap();
  _headers = new WeakMap();
  _response = new WeakMap();
  __name(_NodeResponse, "NodeResponse");
  let NodeResponse2 = _NodeResponse;
  lazyInherit$1(NodeResponse2.prototype, NativeResponse.prototype, "_response");
  Object.setPrototypeOf(NodeResponse2, NativeResponse);
  Object.setPrototypeOf(NodeResponse2.prototype, NativeResponse.prototype);
  return NodeResponse2;
})();
function lazyInherit(target, source, sourceKey) {
  for (const key of [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)]) {
    if (key === "constructor") continue;
    const targetDesc = Object.getOwnPropertyDescriptor(target, key);
    const desc = Object.getOwnPropertyDescriptor(source, key);
    let modified = false;
    if (desc.get) {
      modified = true;
      desc.get = targetDesc?.get || function() {
        return this[sourceKey][key];
      };
    }
    if (desc.set) {
      modified = true;
      desc.set = targetDesc?.set || function(value) {
        this[sourceKey][key] = value;
      };
    }
    if (!targetDesc?.value && typeof desc.value === "function") {
      modified = true;
      desc.value = function(...args) {
        return this[sourceKey][key](...args);
      };
    }
    if (modified) Object.defineProperty(target, key, desc);
  }
}
__name(lazyInherit, "lazyInherit");
const _needsNormRE = /(?:(?:^|\/)(?:\.|\.\.|%2e|%2e\.|\.%2e|%2e%2e)(?:\/|$))|[\\^\x80-\uffff]/i;
const FastURL = /* @__PURE__ */ (() => {
  var _url, _href, _protocol, _host, _pathname, _search, _searchParams, _pos, _URL_instances, getPos_fn, _a2;
  const NativeURL = globalThis.URL;
  const FastURL2 = (_a2 = class {
    constructor(url) {
      __privateAdd(this, _URL_instances);
      __privateAdd(this, _url);
      __privateAdd(this, _href);
      __privateAdd(this, _protocol);
      __privateAdd(this, _host);
      __privateAdd(this, _pathname);
      __privateAdd(this, _search);
      __privateAdd(this, _searchParams);
      __privateAdd(this, _pos);
      if (typeof url === "string") if (url[0] === "/") __privateSet(this, _href, url);
      else __privateSet(this, _url, new NativeURL(url));
      else if (_needsNormRE.test(url.pathname)) __privateSet(this, _url, new NativeURL(`${url.protocol || "http:"}//${url.host || "localhost"}${url.pathname}${url.search || ""}`));
      else {
        __privateSet(this, _protocol, url.protocol);
        __privateSet(this, _host, url.host);
        __privateSet(this, _pathname, url.pathname);
        __privateSet(this, _search, url.search);
      }
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeURL;
    }
    get _url() {
      if (__privateGet(this, _url)) return __privateGet(this, _url);
      __privateSet(this, _url, new NativeURL(this.href));
      __privateSet(this, _href, void 0);
      __privateSet(this, _protocol, void 0);
      __privateSet(this, _host, void 0);
      __privateSet(this, _pathname, void 0);
      __privateSet(this, _search, void 0);
      __privateSet(this, _searchParams, void 0);
      __privateSet(this, _pos, void 0);
      return __privateGet(this, _url);
    }
    get href() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).href;
      if (!__privateGet(this, _href)) __privateSet(this, _href, `${__privateGet(this, _protocol) || "http:"}//${__privateGet(this, _host) || "localhost"}${__privateGet(this, _pathname) || "/"}${__privateGet(this, _search) || ""}`);
      return __privateGet(this, _href);
    }
    get pathname() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).pathname;
      if (__privateGet(this, _pathname) === void 0) {
        const [, pathnameIndex, queryIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (pathnameIndex === -1) return this._url.pathname;
        __privateSet(this, _pathname, this.href.slice(pathnameIndex, queryIndex === -1 ? void 0 : queryIndex));
      }
      return __privateGet(this, _pathname);
    }
    get search() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).search;
      if (__privateGet(this, _search) === void 0) {
        const [, pathnameIndex, queryIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (pathnameIndex === -1) return this._url.search;
        const url = this.href;
        __privateSet(this, _search, queryIndex === -1 || queryIndex === url.length - 1 ? "" : url.slice(queryIndex));
      }
      return __privateGet(this, _search);
    }
    get searchParams() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).searchParams;
      if (!__privateGet(this, _searchParams)) __privateSet(this, _searchParams, new URLSearchParams(this.search));
      return __privateGet(this, _searchParams);
    }
    get protocol() {
      if (__privateGet(this, _url)) return __privateGet(this, _url).protocol;
      if (__privateGet(this, _protocol) === void 0) {
        const [protocolIndex] = __privateMethod(this, _URL_instances, getPos_fn).call(this);
        if (protocolIndex === -1) return this._url.protocol;
        __privateSet(this, _protocol, this.href.slice(0, protocolIndex + 1));
      }
      return __privateGet(this, _protocol);
    }
    toString() {
      return this.href;
    }
    toJSON() {
      return this.href;
    }
  }, _url = new WeakMap(), _href = new WeakMap(), _protocol = new WeakMap(), _host = new WeakMap(), _pathname = new WeakMap(), _search = new WeakMap(), _searchParams = new WeakMap(), _pos = new WeakMap(), _URL_instances = new WeakSet(), getPos_fn = /* @__PURE__ */ __name(function() {
    if (!__privateGet(this, _pos)) {
      const url = this.href;
      const protoIndex = url.indexOf("://");
      const pathnameIndex = protoIndex === -1 ? -1 : url.indexOf("/", protoIndex + 4);
      __privateSet(this, _pos, [
        protoIndex,
        pathnameIndex,
        pathnameIndex === -1 ? -1 : url.indexOf("?", pathnameIndex)
      ]);
    }
    return __privateGet(this, _pos);
  }, "#getPos"), __name(_a2, "URL"), _a2);
  lazyInherit(FastURL2.prototype, NativeURL.prototype, "_url");
  Object.setPrototypeOf(FastURL2.prototype, NativeURL.prototype);
  Object.setPrototypeOf(FastURL2, NativeURL);
  return FastURL2;
})();
const NodeResponse = /* @__PURE__ */ (() => {
  var _body, _init, _headers, _response;
  const NativeResponse = globalThis.Response;
  const STATUS_CODES = globalThis.process?.getBuiltinModule?.("node:http")?.STATUS_CODES || {};
  const _NodeResponse = class _NodeResponse {
    constructor(body, init) {
      __privateAdd(this, _body);
      __privateAdd(this, _init);
      __privateAdd(this, _headers);
      __privateAdd(this, _response);
      __privateSet(this, _body, body);
      __privateSet(this, _init, init);
    }
    static [Symbol.hasInstance](val) {
      return val instanceof NativeResponse;
    }
    get status() {
      return __privateGet(this, _response)?.status || __privateGet(this, _init)?.status || 200;
    }
    get statusText() {
      return __privateGet(this, _response)?.statusText || __privateGet(this, _init)?.statusText || STATUS_CODES[this.status] || "";
    }
    get headers() {
      if (__privateGet(this, _response)) return __privateGet(this, _response).headers;
      if (__privateGet(this, _headers)) return __privateGet(this, _headers);
      const initHeaders = __privateGet(this, _init)?.headers;
      return __privateSet(this, _headers, initHeaders instanceof Headers ? initHeaders : new Headers(initHeaders));
    }
    get ok() {
      if (__privateGet(this, _response)) return __privateGet(this, _response).ok;
      const status = this.status;
      return status >= 200 && status < 300;
    }
    get _response() {
      if (__privateGet(this, _response)) return __privateGet(this, _response);
      let body = __privateGet(this, _body);
      if (body && typeof body.pipe === "function" && !(body instanceof Readable)) {
        const stream = new PassThrough();
        body.pipe(stream);
        const abort = body.abort;
        if (abort) stream.once("close", () => abort());
        body = stream;
      }
      __privateSet(this, _response, new NativeResponse(body, __privateGet(this, _headers) ? {
        ...__privateGet(this, _init),
        headers: __privateGet(this, _headers)
      } : __privateGet(this, _init)));
      __privateSet(this, _init, void 0);
      __privateSet(this, _headers, void 0);
      __privateSet(this, _body, void 0);
      return __privateGet(this, _response);
    }
    _toNodeResponse() {
      const status = this.status;
      const statusText = this.statusText;
      let body;
      let contentType;
      let contentLength;
      if (__privateGet(this, _response)) body = __privateGet(this, _response).body;
      else if (__privateGet(this, _body)) if (__privateGet(this, _body) instanceof ReadableStream) body = __privateGet(this, _body);
      else if (typeof __privateGet(this, _body) === "string") {
        body = __privateGet(this, _body);
        contentType = "text/plain; charset=UTF-8";
        contentLength = Buffer.byteLength(__privateGet(this, _body));
      } else if (__privateGet(this, _body) instanceof ArrayBuffer) {
        body = Buffer.from(__privateGet(this, _body));
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof Uint8Array) {
        body = __privateGet(this, _body);
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof DataView) {
        body = Buffer.from(__privateGet(this, _body).buffer);
        contentLength = __privateGet(this, _body).byteLength;
      } else if (__privateGet(this, _body) instanceof Blob) {
        body = __privateGet(this, _body).stream();
        contentType = __privateGet(this, _body).type;
        contentLength = __privateGet(this, _body).size;
      } else if (typeof __privateGet(this, _body).pipe === "function") body = __privateGet(this, _body);
      else body = this._response.body;
      const headers = [];
      const initHeaders = __privateGet(this, _init)?.headers;
      const headerEntries = __privateGet(this, _response)?.headers || __privateGet(this, _headers) || (initHeaders ? Array.isArray(initHeaders) ? initHeaders : initHeaders?.entries ? initHeaders.entries() : Object.entries(initHeaders).map(([k, v]) => [k.toLowerCase(), v]) : void 0);
      let hasContentTypeHeader;
      let hasContentLength;
      if (headerEntries) for (const [key, value] of headerEntries) {
        if (Array.isArray(value)) for (const v of value) headers.push([key, v]);
        else headers.push([key, value]);
        if (key === "content-type") hasContentTypeHeader = true;
        else if (key === "content-length") hasContentLength = true;
      }
      if (contentType && !hasContentTypeHeader) headers.push(["content-type", contentType]);
      if (contentLength && !hasContentLength) headers.push(["content-length", String(contentLength)]);
      __privateSet(this, _init, void 0);
      __privateSet(this, _headers, void 0);
      __privateSet(this, _response, void 0);
      __privateSet(this, _body, void 0);
      return {
        status,
        statusText,
        headers,
        body
      };
    }
  };
  _body = new WeakMap();
  _init = new WeakMap();
  _headers = new WeakMap();
  _response = new WeakMap();
  __name(_NodeResponse, "NodeResponse");
  let NodeResponse2 = _NodeResponse;
  lazyInherit(NodeResponse2.prototype, NativeResponse.prototype, "_response");
  Object.setPrototypeOf(NodeResponse2, NativeResponse);
  Object.setPrototypeOf(NodeResponse2.prototype, NativeResponse.prototype);
  return NodeResponse2;
})();
export {
  FastURL$1 as F,
  NodeResponse$1 as N,
  FastURL as a,
  NodeResponse as b,
  NodeResponse$2 as c,
  serve as s
};
