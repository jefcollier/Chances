"use strict";

exports.__esModule = true;
exports.default = void 0;

var _object = require("../../../utils/object");

var _array = require("../../../utils/array");

var _constants = require("./constants");

// Return a copy of a row after all reserved fields have been filtered out
var sanitizeRow = function sanitizeRow(row, ignoreFields, includeFields) {
  var fieldsObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0, _object.keys)(row).reduce(function (obj, key) {
    // Ignore special fields that start with `_`
    // Ignore fields in the `ignoreFields` array
    // Include only fields in the `includeFields` array
    if (!_constants.IGNORED_FIELD_KEYS[key] && !(ignoreFields && ignoreFields.length > 0 && (0, _array.arrayIncludes)(ignoreFields, key)) && !(includeFields && includeFields.length > 0 && !(0, _array.arrayIncludes)(includeFields, key))) {
      var f = fieldsObj[key];
      var val = row[key];
      obj[key] = f && f.filterByFormatted && f.formatter ? f.formatter(val, key, row) : val;
    }

    return obj;
  }, {});
};

var _default = sanitizeRow;
exports.default = _default;