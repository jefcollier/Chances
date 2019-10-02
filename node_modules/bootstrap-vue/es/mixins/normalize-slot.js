"use strict";

exports.__esModule = true;
exports.default = void 0;

var _normalizeSlot2 = require("../utils/normalize-slot");

var _array = require("../utils/array");

var _default = {
  methods: {
    hasNormalizedSlot: function hasNormalizedSlot(names) {
      // Returns true if the either a $scopedSlot or $slot exists with the specified name
      // `names` can be a string name or an array of names
      return (0, _normalizeSlot2.hasNormalizedSlot)(names, this.$scopedSlots, this.$slots);
    },
    normalizeSlot: function normalizeSlot(names) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Returns an array of rendered vNodes if slot found.
      // Returns undefined if not found.
      // `names` can be a string name or an array of names
      var vNodes = (0, _normalizeSlot2.normalizeSlot)(names, scope, this.$scopedSlots, this.$slots);
      return vNodes ? (0, _array.concat)(vNodes) : vNodes;
    }
  }
};
exports.default = _default;