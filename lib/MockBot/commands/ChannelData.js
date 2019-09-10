"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'channel-data': 'Dump channel data from the activity sent by the user'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return context.sendActivity({
              type: 'message',
              text: 'Dump of the channel data from the activity sent by the user.',
              attachments: [{
                content: "```\n".concat(JSON.stringify(context.activity.channelData, null, 2), "\n```"),
                contentType: 'text/markdown'
              }]
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function processor(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  help: help,
  name: 'Channel data',
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0NoYW5uZWxEYXRhLnRzIl0sIm5hbWVzIjpbImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0Iiwic2VuZEFjdGl2aXR5IiwidHlwZSIsInRleHQiLCJhdHRhY2htZW50cyIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiYWN0aXZpdHkiLCJjaGFubmVsRGF0YSIsImNvbnRlbnRUeXBlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU87QUFDbEIsb0JBQWdCO0FBREUsR0FBUDtBQUFBLENBQWI7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUUsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1RBLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQjtBQUN6QkMsY0FBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxjQUFBQSxJQUFJLEVBQUUsOERBRm1CO0FBR3pCQyxjQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxnQkFBQUEsT0FBTyxpQkFBY0MsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE9BQU8sQ0FBQ1EsUUFBUixDQUFpQkMsV0FBaEMsRUFBNkMsSUFBN0MsRUFBbUQsQ0FBbkQsQ0FBZCxVQURLO0FBRVpDLGdCQUFBQSxXQUFXLEVBQUU7QUFGRCxlQUFEO0FBSFksYUFBckIsQ0FEUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFGOztBQUFBLGtCQUFUWCxTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O2VBV2U7QUFDYkQsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWJhLEVBQUFBLElBQUksRUFBRSxjQUZPO0FBR2JaLEVBQUFBLFNBQVMsRUFBVEE7QUFIYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyLWNvcmUnO1xyXG5cclxuXHJcbmNvbnN0IGhlbHAgPSAoKSA9PiAoe1xyXG4gICdjaGFubmVsLWRhdGEnOiAnRHVtcCBjaGFubmVsIGRhdGEgZnJvbSB0aGUgYWN0aXZpdHkgc2VudCBieSB0aGUgdXNlcidcclxufSk7XHJcblxyXG5jb25zdCBwcm9jZXNzb3I9IGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgIHR5cGU6ICdtZXNzYWdlJyxcclxuICAgIHRleHQ6ICdEdW1wIG9mIHRoZSBjaGFubmVsIGRhdGEgZnJvbSB0aGUgYWN0aXZpdHkgc2VudCBieSB0aGUgdXNlci4nLFxyXG4gICAgYXR0YWNobWVudHM6IFt7XHJcbiAgICAgIGNvbnRlbnQ6IGBcXGBcXGBcXGBcXG4keyBKU09OLnN0cmluZ2lmeShjb250ZXh0LmFjdGl2aXR5LmNoYW5uZWxEYXRhLCBudWxsLCAyKSB9XFxuXFxgXFxgXFxgYCxcclxuICAgICAgY29udGVudFR5cGU6ICd0ZXh0L21hcmtkb3duJ1xyXG4gICAgfV1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGhlbHAsIFxyXG4gIG5hbWU6ICdDaGFubmVsIGRhdGEnLCBcclxuICBwcm9jZXNzb3JcclxufVxyXG4iXX0=