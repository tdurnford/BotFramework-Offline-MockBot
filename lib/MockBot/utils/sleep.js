"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sleep;

function sleep() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L3V0aWxzL3NsZWVwLnRzIl0sIm5hbWVzIjpbInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxLQUFULEdBQTBCO0FBQUEsTUFBWEMsRUFBVyx1RUFBTixJQUFNO0FBQ3ZDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU87QUFBQSxXQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFkO0FBQUEsR0FBbkIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xlZXAobXMgPSAyMDAwKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcbiJdfQ==