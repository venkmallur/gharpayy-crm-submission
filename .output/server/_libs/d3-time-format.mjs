var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { o as utcMonday, i as utcDay, p as timeMonday, b as timeDay, e as timeYear, c as timeSunday, q as timeThursday, l as utcYear, j as utcSunday, r as utcThursday } from "./d3-time.mjs";
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
__name(localDate, "localDate");
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
__name(utcDate, "utcDate");
function newDate(y, m, d) {
  return { y, m, d, H: 0, M: 0, S: 0, L: 0 };
}
__name(newDate, "newDate");
function formatLocale(locale2) {
  var locale_dateTime = locale2.dateTime, locale_date = locale2.date, locale_time = locale2.time, locale_periods = locale2.periods, locale_weekdays = locale2.days, locale_shortWeekdays = locale2.shortDays, locale_months = locale2.months, locale_shortMonths = locale2.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date) {
      var string = [], i = -1, j = 0, n = specifier.length, c, pad2, format;
      if (!(date instanceof Date)) date = /* @__PURE__ */ new Date(+date);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad2 = c === "e" ? " " : "0";
          if (format = formats2[c]) c = format(date, pad2);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  __name(newFormat, "newFormat");
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  __name(newParse, "newParse");
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c, parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  __name(parseSpecifier, "parseSpecifier");
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  __name(parsePeriod, "parsePeriod");
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  __name(parseShortWeekday, "parseShortWeekday");
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  __name(parseWeekday, "parseWeekday");
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  __name(parseShortMonth, "parseShortMonth");
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  __name(parseMonth, "parseMonth");
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  __name(parseLocaleDateTime, "parseLocaleDateTime");
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  __name(parseLocaleDate, "parseLocaleDate");
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  __name(parseLocaleTime, "parseLocaleTime");
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  __name(formatShortWeekday, "formatShortWeekday");
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  __name(formatWeekday, "formatWeekday");
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  __name(formatShortMonth, "formatShortMonth");
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  __name(formatMonth, "formatMonth");
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  __name(formatPeriod, "formatPeriod");
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  __name(formatQuarter, "formatQuarter");
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  __name(formatUTCShortWeekday, "formatUTCShortWeekday");
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  __name(formatUTCWeekday, "formatUTCWeekday");
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  __name(formatUTCShortMonth, "formatUTCShortMonth");
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  __name(formatUTCMonth, "formatUTCMonth");
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  __name(formatUTCPeriod, "formatUTCPeriod");
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  __name(formatUTCQuarter, "formatUTCQuarter");
  return {
    format: /* @__PURE__ */ __name(function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    }, "format"),
    parse: /* @__PURE__ */ __name(function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    }, "parse"),
    utcFormat: /* @__PURE__ */ __name(function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    }, "utcFormat"),
    utcParse: /* @__PURE__ */ __name(function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }, "utcParse")
  };
}
__name(formatLocale, "formatLocale");
var pads = { "-": "", "_": " ", "0": "0" }, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
__name(pad, "pad");
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
__name(requote, "requote");
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
__name(formatRe, "formatRe");
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
__name(formatLookup, "formatLookup");
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
__name(parseWeekdayNumberSunday, "parseWeekdayNumberSunday");
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
__name(parseWeekdayNumberMonday, "parseWeekdayNumberMonday");
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
__name(parseWeekNumberSunday, "parseWeekNumberSunday");
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
__name(parseWeekNumberISO, "parseWeekNumberISO");
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
__name(parseWeekNumberMonday, "parseWeekNumberMonday");
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
__name(parseFullYear, "parseFullYear");
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
__name(parseYear, "parseYear");
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
__name(parseZone, "parseZone");
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
__name(parseQuarter, "parseQuarter");
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
__name(parseMonthNumber, "parseMonthNumber");
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
__name(parseDayOfMonth, "parseDayOfMonth");
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
__name(parseDayOfYear, "parseDayOfYear");
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
__name(parseHour24, "parseHour24");
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
__name(parseMinutes, "parseMinutes");
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
__name(parseSeconds, "parseSeconds");
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
__name(parseMilliseconds, "parseMilliseconds");
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
__name(parseMicroseconds, "parseMicroseconds");
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
__name(parseLiteralPercent, "parseLiteralPercent");
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
__name(parseUnixTimestamp, "parseUnixTimestamp");
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
__name(parseUnixTimestampSeconds, "parseUnixTimestampSeconds");
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
__name(formatDayOfMonth, "formatDayOfMonth");
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
__name(formatHour24, "formatHour24");
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
__name(formatHour12, "formatHour12");
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
__name(formatDayOfYear, "formatDayOfYear");
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
__name(formatMilliseconds, "formatMilliseconds");
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
__name(formatMicroseconds, "formatMicroseconds");
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
__name(formatMonthNumber, "formatMonthNumber");
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
__name(formatMinutes, "formatMinutes");
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
__name(formatSeconds, "formatSeconds");
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
__name(formatWeekdayNumberMonday, "formatWeekdayNumberMonday");
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
__name(formatWeekNumberSunday, "formatWeekNumberSunday");
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
__name(dISO, "dISO");
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
__name(formatWeekNumberISO, "formatWeekNumberISO");
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
__name(formatWeekdayNumberSunday, "formatWeekdayNumberSunday");
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
__name(formatWeekNumberMonday, "formatWeekNumberMonday");
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
__name(formatYear, "formatYear");
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
__name(formatYearISO, "formatYearISO");
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
__name(formatFullYear, "formatFullYear");
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
__name(formatFullYearISO, "formatFullYearISO");
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
__name(formatZone, "formatZone");
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
__name(formatUTCDayOfMonth, "formatUTCDayOfMonth");
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
__name(formatUTCHour24, "formatUTCHour24");
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
__name(formatUTCHour12, "formatUTCHour12");
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
__name(formatUTCDayOfYear, "formatUTCDayOfYear");
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
__name(formatUTCMilliseconds, "formatUTCMilliseconds");
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
__name(formatUTCMicroseconds, "formatUTCMicroseconds");
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
__name(formatUTCMonthNumber, "formatUTCMonthNumber");
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
__name(formatUTCMinutes, "formatUTCMinutes");
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
__name(formatUTCSeconds, "formatUTCSeconds");
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
__name(formatUTCWeekdayNumberMonday, "formatUTCWeekdayNumberMonday");
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
__name(formatUTCWeekNumberSunday, "formatUTCWeekNumberSunday");
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
__name(UTCdISO, "UTCdISO");
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
__name(formatUTCWeekNumberISO, "formatUTCWeekNumberISO");
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
__name(formatUTCWeekdayNumberSunday, "formatUTCWeekdayNumberSunday");
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
__name(formatUTCWeekNumberMonday, "formatUTCWeekNumberMonday");
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
__name(formatUTCYear, "formatUTCYear");
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
__name(formatUTCYearISO, "formatUTCYearISO");
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
__name(formatUTCFullYear, "formatUTCFullYear");
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
__name(formatUTCFullYearISO, "formatUTCFullYearISO");
function formatUTCZone() {
  return "+0000";
}
__name(formatUTCZone, "formatUTCZone");
function formatLiteralPercent() {
  return "%";
}
__name(formatLiteralPercent, "formatLiteralPercent");
function formatUnixTimestamp(d) {
  return +d;
}
__name(formatUnixTimestamp, "formatUnixTimestamp");
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}
__name(formatUnixTimestampSeconds, "formatUnixTimestampSeconds");
var locale;
var timeFormat;
var utcFormat;
defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  locale.parse;
  utcFormat = locale.utcFormat;
  locale.utcParse;
  return locale;
}
__name(defaultLocale, "defaultLocale");
export {
  timeFormat as t,
  utcFormat as u
};
