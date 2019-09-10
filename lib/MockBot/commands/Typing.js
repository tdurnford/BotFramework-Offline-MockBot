"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sleep = _interopRequireDefault(require("../utils/sleep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'typing 1': 'Send a typing indicator without ending it',
    'typing': 'Send a typing indicator and end it with a message'
  };
};

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
            _context.t0 = text.substr(-1);
            _context.next = _context.t0 === '1' ? 4 : 9;
            break;

          case 4:
            _context.next = 6;
            return context.sendActivity('Typing indicator should go away after 5 seconds.');

          case 6:
            _context.next = 8;
            return context.sendActivity({
              type: 'typing'
            });

          case 8:
            return _context.abrupt("break", 17);

          case 9:
            _context.next = 11;
            return context.sendActivity('I am sending typing, will send another message 2 seconds afterward.');

          case 11:
            _context.next = 13;
            return context.sendActivity({
              type: 'typing'
            });

          case 13:
            _context.next = 15;
            return (0, _sleep.default)();

          case 15:
            _context.next = 17;
            return context.sendActivity('This message should stop the typing indicator.');

          case 17:
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
  name: 'Typing indicator',
  pattern: /^typing(\s+[\d\w]+)?/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL1R5cGluZy50cyJdLCJuYW1lcyI6WyJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsInRleHQiLCJhY3Rpdml0eSIsInN1YnN0ciIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJuYW1lIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUNsQixnQkFBWSwyQ0FETTtBQUVsQixjQUFVO0FBRlEsR0FBUDtBQUFBLENBQWI7O0FBS0EsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lDLFlBQUFBLElBREosR0FDY0QsT0FEZCxDQUNSRSxRQURRLENBQ0lELElBREo7QUFBQSwwQkFHUkEsSUFBSSxDQUFDRSxNQUFMLENBQVksQ0FBQyxDQUFiLENBSFE7QUFBQSw0Q0FJVCxHQUpTO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUtOSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUIsa0RBQXJCLENBTE07O0FBQUE7QUFBQTtBQUFBLG1CQU1OSixPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFBRUMsY0FBQUEsSUFBSSxFQUFFO0FBQVIsYUFBckIsQ0FOTTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFVTkwsT0FBTyxDQUFDSSxZQUFSLENBQXFCLHFFQUFyQixDQVZNOztBQUFBO0FBQUE7QUFBQSxtQkFXTkosT0FBTyxDQUFDSSxZQUFSLENBQXFCO0FBQUVDLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBQXJCLENBWE07O0FBQUE7QUFBQTtBQUFBLG1CQVlOLHFCQVpNOztBQUFBO0FBQUE7QUFBQSxtQkFhTkwsT0FBTyxDQUFDSSxZQUFSLENBQXFCLGdEQUFyQixDQWJNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRMLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7ZUFpQmU7QUFDYkQsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWJRLEVBQUFBLElBQUksRUFBRSxrQkFGTztBQUdiQyxFQUFBQSxPQUFPLEVBQUcsdUJBSEc7QUFJYlIsRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcbmltcG9ydCBzbGVlcCBmcm9tICcuLi91dGlscy9zbGVlcCc7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAndHlwaW5nIDEnOiAnU2VuZCBhIHR5cGluZyBpbmRpY2F0b3Igd2l0aG91dCBlbmRpbmcgaXQnLFxyXG4gICd0eXBpbmcnOiAnU2VuZCBhIHR5cGluZyBpbmRpY2F0b3IgYW5kIGVuZCBpdCB3aXRoIGEgbWVzc2FnZSdcclxufSk7XHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGFjdGl2aXR5OiB7IHRleHQgfX0gPSBjb250ZXh0O1xyXG5cclxuICBzd2l0Y2ggKHRleHQuc3Vic3RyKC0xKSkge1xyXG4gICAgY2FzZSAnMSc6XHJcbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KCdUeXBpbmcgaW5kaWNhdG9yIHNob3VsZCBnbyBhd2F5IGFmdGVyIDUgc2Vjb25kcy4nKTtcclxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoeyB0eXBlOiAndHlwaW5nJyB9KTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoJ0kgYW0gc2VuZGluZyB0eXBpbmcsIHdpbGwgc2VuZCBhbm90aGVyIG1lc3NhZ2UgMiBzZWNvbmRzIGFmdGVyd2FyZC4nKTtcclxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoeyB0eXBlOiAndHlwaW5nJyB9KTtcclxuICAgICAgYXdhaXQgc2xlZXAoKTsgIFxyXG4gICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSgnVGhpcyBtZXNzYWdlIHNob3VsZCBzdG9wIHRoZSB0eXBpbmcgaW5kaWNhdG9yLicpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBoZWxwLCBcclxuICBuYW1lOiAnVHlwaW5nIGluZGljYXRvcicsIFxyXG4gIHBhdHRlcm4gOiAvXnR5cGluZyhcXHMrW1xcZFxcd10rKT8vaSxcclxuICBwcm9jZXNzb3JcclxufTtcclxuIl19