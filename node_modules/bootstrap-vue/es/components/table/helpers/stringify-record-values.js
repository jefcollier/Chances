"use strict";

exports.__esModule = true;
exports.default = void 0;

var _inspect = require("../../../utils/inspect");

var _sanitizeRow = _interopRequireDefault(require("./sanitize-row"));

var _stringifyObjectValues = _interopRequireDefault(require("./stringify-object-values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Stringifies the values of a record, ignoring any special top level field keys
// TODO: Add option to stringify `scopedSlot` items
var stringifyRecordValues = function stringifyRecordValues(row, ignoreFields, includeFields, fieldsObj) {
  return (0, _inspect.isObject)(row) ? (0, _stringifyObjectValues.default)((0, _sanitizeRow.default)(row, ignoreFields, includeFields, fieldsObj)) : '';
};

var _default = stringifyRecordValues;
exports.default = _default;