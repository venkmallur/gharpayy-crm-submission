var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
function toCsv(rows, columns) {
  if (!rows.length) return "";
  const cols = Object.keys(rows[0]);
  const esc = /* @__PURE__ */ __name2((v) => {
    const s = v == null ? "" : String(v);
    if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  }, "esc");
  const header = cols.map(esc).join(",");
  const body = rows.map((r) => cols.map((c) => esc(r[c])).join(",")).join("\n");
  return `${header}
${body}`;
}
__name(toCsv, "toCsv");
__name2(toCsv, "toCsv");
function downloadCsv(filename, rows, columns) {
  const csv = toCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  triggerDownload(blob, filename);
}
__name(downloadCsv, "downloadCsv");
__name2(downloadCsv, "downloadCsv");
function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  triggerDownload(blob, filename);
}
__name(downloadJson, "downloadJson");
__name2(downloadJson, "downloadJson");
function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
__name(triggerDownload, "triggerDownload");
__name2(triggerDownload, "triggerDownload");
export {
  downloadJson as a,
  downloadCsv as d
};
