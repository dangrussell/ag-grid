"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultLocale_1 = require("./time/format/defaultLocale");
var interpolatePattern = /(#\{(.*?)\})/g;
function interpolate(input, values, formats) {
    return input.replace(interpolatePattern, function () {
        var name = arguments[2];
        var _a = name.split(':'), valueName = _a[0], formatName = _a[1];
        var value = values[valueName];
        if (typeof value === 'number') {
            var format = formatName && formats && formats[formatName];
            if (format) {
                var _b = format, locales = _b.locales, options = _b.options;
                return value.toLocaleString(locales, options);
            }
            return String(value);
        }
        if (value instanceof Date) {
            var format = formatName && formats && formats[formatName];
            if (typeof format === 'string') {
                var formatter = defaultLocale_1.locale.format(format);
                return formatter(value);
            }
            return value.toDateString();
        }
        if (typeof value === 'string' || (value && value.toString)) {
            return String(value);
        }
        return '';
    });
}
exports.interpolate = interpolate;
//# sourceMappingURL=string.js.map