"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'image': 'Show an image attachment'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    var PUBLIC_URL;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            PUBLIC_URL = process.env.PUBLIC_URL;
            _context.next = 3;
            return context.sendActivity({
              attachments: [{
                contentType: 'image/jpeg',
                contentUrl: "./assets/surface1.jpg",
                name: 'Microsoft Surface'
              }]
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
  help: help,
  name: 'Image attachment',
  pattern: /image$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0ltYWdlLnRzIl0sIm5hbWVzIjpbImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0IiwiUFVCTElDX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJzZW5kQWN0aXZpdHkiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudFVybCIsIm5hbWUiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUNsQixhQUFTO0FBRFMsR0FBUDtBQUFBLENBQWI7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLFlBQUFBLFVBRFEsR0FDT0MsT0FBTyxDQUFDQyxHQURmLENBQ1JGLFVBRFE7QUFBQTtBQUFBLG1CQUdWRCxPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLGNBQUFBLFdBQVcsRUFBRSxDQUFDO0FBQ1pDLGdCQUFBQSxXQUFXLEVBQUUsWUFERDtBQUVaQyxnQkFBQUEsVUFBVSx5QkFGRTtBQUdaQyxnQkFBQUEsSUFBSSxFQUFFO0FBSE0sZUFBRDtBQURZLGFBQXJCLENBSFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFQsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmOztlQVllO0FBQ2JELEVBQUFBLElBQUksRUFBSkEsSUFEYTtBQUViVSxFQUFBQSxJQUFJLEVBQUUsa0JBRk87QUFHYkMsRUFBQUEsT0FBTyxFQUFFLFNBSEk7QUFJYlYsRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAnaW1hZ2UnOiAnU2hvdyBhbiBpbWFnZSBhdHRhY2htZW50J1xyXG59KTtcclxuXHJcbmNvbnN0IHByb2Nlc3NvciA9IGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgUFVCTElDX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgIGF0dGFjaG1lbnRzOiBbe1xyXG4gICAgICBjb250ZW50VHlwZTogJ2ltYWdlL2pwZWcnLFxyXG4gICAgICBjb250ZW50VXJsOiBgLi9hc3NldHMvc3VyZmFjZTEuanBnYCxcclxuICAgICAgbmFtZTogJ01pY3Jvc29mdCBTdXJmYWNlJ1xyXG4gICAgfV1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBoZWxwLFxyXG4gIG5hbWU6ICdJbWFnZSBhdHRhY2htZW50JyxcclxuICBwYXR0ZXJuOiAvaW1hZ2UkL2ksXHJcbiAgcHJvY2Vzc29yXHJcbn1cclxuIl19