"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    var text;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            text = context.activity.text;
            _context.next = 3;
            return context.sendActivity({
              speak: "Unknown command: I don't know ".concat(text, ". You can say \"help\" to learn more."),
              text: "Unknown command: `".concat(text, "`.\r\n\r\nType `help` to learn more.")
            });

          case 3:
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
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0RlZmF1bHQudHMiXSwibmFtZXMiOlsicHJvY2Vzc29yIiwiY29udGV4dCIsInRleHQiLCJhY3Rpdml0eSIsInNlbmRBY3Rpdml0eSIsInNwZWFrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQyxZQUFBQSxJQURKLEdBQ2NELE9BRGQsQ0FDUkUsUUFEUSxDQUNJRCxJQURKO0FBQUE7QUFBQSxtQkFFVkQsT0FBTyxDQUFDRyxZQUFSLENBQXFCO0FBQ3pCQyxjQUFBQSxLQUFLLDBDQUFvQ0gsSUFBcEMsMENBRG9CO0FBRXpCQSxjQUFBQSxJQUFJLDhCQUF5QkEsSUFBekI7QUFGcUIsYUFBckIsQ0FGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFURixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O2VBUWU7QUFDYkEsRUFBQUEsU0FBUyxFQUFUQTtBQURhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGFjdGl2aXR5OiB7IHRleHQgfX0gPSBjb250ZXh0O1xyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgIHNwZWFrOiBgVW5rbm93biBjb21tYW5kOiBJIGRvbid0IGtub3cgJHsgdGV4dCB9LiBZb3UgY2FuIHNheSBcImhlbHBcIiB0byBsZWFybiBtb3JlLmAsXHJcbiAgICB0ZXh0OiBgVW5rbm93biBjb21tYW5kOiBcXGAkeyB0ZXh0IH1cXGAuXFxyXFxuXFxyXFxuVHlwZSBcXGBoZWxwXFxgIHRvIGxlYXJuIG1vcmUuYCxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9jZXNzb3JcclxufTtcclxuIl19