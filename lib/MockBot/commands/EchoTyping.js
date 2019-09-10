"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'Echo Typing': 'Echoes back typing activities from the user'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context, _ref) {
    var echoTypingAccessor, echoTyping;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            echoTypingAccessor = _ref.echoTypingAccessor;
            _context.next = 3;
            return echoTypingAccessor.get(context, false);

          case 3:
            echoTyping = _context.sent;

            if (!echoTyping) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return context.sendActivity('Will stop echoing `"typing"` event');

          case 7:
            _context.next = 11;
            break;

          case 9:
            _context.next = 11;
            return context.sendActivity('Will echo `"typing"` event');

          case 11:
            _context.next = 13;
            return echoTypingAccessor.set(context, !echoTyping);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function processor(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  help: help,
  name: 'Echo typing',
  pattern: /^echo-typing$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0VjaG9UeXBpbmcudHMiXSwibmFtZXMiOlsiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJlY2hvVHlwaW5nQWNjZXNzb3IiLCJnZXQiLCJlY2hvVHlwaW5nIiwic2VuZEFjdGl2aXR5Iiwic2V0IiwibmFtZSIsInBhdHRlcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUFPO0FBQ2xCLG1CQUFlO0FBREcsR0FBUDtBQUFBLENBQWI7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCQyxZQUFBQSxrQkFBL0IsUUFBK0JBLGtCQUEvQjtBQUFBO0FBQUEsbUJBQ1NBLGtCQUFrQixDQUFDQyxHQUFuQixDQUF1QkYsT0FBdkIsRUFBZ0MsS0FBaEMsQ0FEVDs7QUFBQTtBQUNWRyxZQUFBQSxVQURVOztBQUFBLGlCQUdaQSxVQUhZO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSVJILE9BQU8sQ0FBQ0ksWUFBUixDQUFxQixvQ0FBckIsQ0FKUTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQU1SSixPQUFPLENBQUNJLFlBQVIsQ0FBcUIsNEJBQXJCLENBTlE7O0FBQUE7QUFBQTtBQUFBLG1CQVNWSCxrQkFBa0IsQ0FBQ0ksR0FBbkIsQ0FBdUJMLE9BQXZCLEVBQWdDLENBQUNHLFVBQWpDLENBVFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVEosU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmOztlQVllO0FBQ2JELEVBQUFBLElBQUksRUFBSkEsSUFEYTtBQUViUSxFQUFBQSxJQUFJLEVBQUUsYUFGTztBQUdiQyxFQUFBQSxPQUFPLEVBQUUsZ0JBSEk7QUFJYlIsRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAnRWNobyBUeXBpbmcnOiAnRWNob2VzIGJhY2sgdHlwaW5nIGFjdGl2aXRpZXMgZnJvbSB0aGUgdXNlcidcclxufSk7XHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQsIHsgZWNob1R5cGluZ0FjY2Vzc29yIH0pID0+IHtcclxuICBjb25zdCBlY2hvVHlwaW5nID0gYXdhaXQgZWNob1R5cGluZ0FjY2Vzc29yLmdldChjb250ZXh0LCBmYWxzZSk7XHJcblxyXG4gIGlmIChlY2hvVHlwaW5nKSB7XHJcbiAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSgnV2lsbCBzdG9wIGVjaG9pbmcgYFwidHlwaW5nXCJgIGV2ZW50Jyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KCdXaWxsIGVjaG8gYFwidHlwaW5nXCJgIGV2ZW50Jyk7XHJcbiAgfVxyXG5cclxuICBhd2FpdCBlY2hvVHlwaW5nQWNjZXNzb3Iuc2V0KGNvbnRleHQsICFlY2hvVHlwaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGhlbHAsXHJcbiAgbmFtZTogJ0VjaG8gdHlwaW5nJyxcclxuICBwYXR0ZXJuOiAvXmVjaG8tdHlwaW5nJC9pLFxyXG4gIHByb2Nlc3NvclxyXG59XHJcbiJdfQ==