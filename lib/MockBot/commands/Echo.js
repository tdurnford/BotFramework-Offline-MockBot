"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _onErrorResumeNext = _interopRequireDefault(require("on-error-resume-next"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'echo Hello, World!': 'Echo back the message after deserialized as JSON',
    'echo "Hello\nWorld!"': 'Parse the message as JSON and echo back'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    var line, text;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            line = context.activity.text;
            line = line.substr(5);
            text = line[0] === '"' ? (0, _onErrorResumeNext.default)(function () {
              return JSON.parse(line);
            }) || '[Error while parsing the JSON]' : line;
            _context.next = 5;
            return context.sendActivity('Echoing back in a separate activity.');

          case 5:
            _context.next = 7;
            return context.sendActivity(text);

          case 7:
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
  name: 'Echo',
  pattern: /echo\s/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0VjaG8udHMiXSwibmFtZXMiOlsiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJsaW5lIiwiYWN0aXZpdHkiLCJ0ZXh0Iiwic3Vic3RyIiwiSlNPTiIsInBhcnNlIiwic2VuZEFjdGl2aXR5IiwibmFtZSIsInBhdHRlcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU87QUFDbEIsMEJBQXNCLGtEQURKO0FBRWxCLDRCQUF3QjtBQUZOLEdBQVA7QUFBQSxDQUFiOztBQUtBLElBQU1DLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRQyxZQUFBQSxJQURSLEdBQ2tCRCxPQURsQixDQUNWRSxRQURVLENBQ0VDLElBREY7QUFHaEJGLFlBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRyxNQUFMLENBQVksQ0FBWixDQUFQO0FBQ01ELFlBQUFBLElBSlUsR0FJSEYsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLEdBQVosR0FBa0IsZ0NBQWtCO0FBQUEscUJBQU1JLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxJQUFYLENBQU47QUFBQSxhQUFsQixLQUE2QyxnQ0FBL0QsR0FBa0dBLElBSi9GO0FBQUE7QUFBQSxtQkFNVkQsT0FBTyxDQUFDTyxZQUFSLENBQXFCLHNDQUFyQixDQU5VOztBQUFBO0FBQUE7QUFBQSxtQkFPVlAsT0FBTyxDQUFDTyxZQUFSLENBQXFCSixJQUFyQixDQVBVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRKLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7ZUFVZTtBQUNiRCxFQUFBQSxJQUFJLEVBQUpBLElBRGE7QUFFYlUsRUFBQUEsSUFBSSxFQUFFLE1BRk87QUFHYkMsRUFBQUEsT0FBTyxFQUFFLFNBSEk7QUFJYlYsRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcbmltcG9ydCBvbkVycm9yUmVzdW1lTmV4dCBmcm9tICdvbi1lcnJvci1yZXN1bWUtbmV4dCc7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAnZWNobyBIZWxsbywgV29ybGQhJzogJ0VjaG8gYmFjayB0aGUgbWVzc2FnZSBhZnRlciBkZXNlcmlhbGl6ZWQgYXMgSlNPTicsXHJcbiAgJ2VjaG8gXCJIZWxsb1xcbldvcmxkIVwiJzogJ1BhcnNlIHRoZSBtZXNzYWdlIGFzIEpTT04gYW5kIGVjaG8gYmFjaydcclxufSk7XHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQpID0+IHtcclxuICBsZXQgeyBhY3Rpdml0eTogeyB0ZXh0OiBsaW5lIH19ID0gY29udGV4dDtcclxuICBcclxuICBsaW5lID0gbGluZS5zdWJzdHIoNSk7XHJcbiAgY29uc3QgdGV4dCA9IGxpbmVbMF0gPT09ICdcIicgPyBvbkVycm9yUmVzdW1lTmV4dCgoKSA9PiBKU09OLnBhcnNlKGxpbmUpKSB8fCAnW0Vycm9yIHdoaWxlIHBhcnNpbmcgdGhlIEpTT05dJyA6IGxpbmU7XHJcblxyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KCdFY2hvaW5nIGJhY2sgaW4gYSBzZXBhcmF0ZSBhY3Rpdml0eS4nKTtcclxuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh0ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBcclxuICBoZWxwLFxyXG4gIG5hbWU6ICdFY2hvJyxcclxuICBwYXR0ZXJuOiAvZWNob1xccy9pLCBcclxuICBwcm9jZXNzb3JcclxufTtcclxuIl19