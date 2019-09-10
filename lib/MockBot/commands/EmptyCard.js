"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'emptycard': 'Show a empty message with suggested actions'
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
              suggestedActions: {
                actions: [{
                  type: 'imBack',
                  title: 'Blue',
                  value: 'Blue',
                  image: "https://webchat-mockbot.azurewebsites.net/public/assets/square-icon.png"
                }, {
                  type: 'imBack',
                  title: 'Red',
                  value: 'Red',
                  image: "https://webchat-mockbot.azurewebsites.net/public/assets/square-icon-red.png"
                }, {
                  type: 'imBack',
                  title: 'Green',
                  value: 'Green',
                  image: "https://webchat-mockbot.azurewebsites.net/public/assets/square-icon-green.png"
                }],
                to: []
              }
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
  name: "Empty card",
  pattern: /emptycard$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0VtcHR5Q2FyZC50cyJdLCJuYW1lcyI6WyJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsInNlbmRBY3Rpdml0eSIsInN1Z2dlc3RlZEFjdGlvbnMiLCJhY3Rpb25zIiwidHlwZSIsInRpdGxlIiwidmFsdWUiLCJpbWFnZSIsInRvIiwibmFtZSIsInBhdHRlcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUFPO0FBQ2xCLGlCQUFhO0FBREssR0FBUDtBQUFBLENBQWI7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1ZBLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQjtBQUN6QkMsY0FBQUEsZ0JBQWdCLEVBQUU7QUFDaEJDLGdCQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxrQkFBQUEsSUFBSSxFQUFFLFFBREU7QUFFUkMsa0JBQUFBLEtBQUssRUFBRSxNQUZDO0FBR1JDLGtCQUFBQSxLQUFLLEVBQUUsTUFIQztBQUlSQyxrQkFBQUEsS0FBSztBQUpHLGlCQUFELEVBS047QUFDREgsa0JBQUFBLElBQUksRUFBRSxRQURMO0FBRURDLGtCQUFBQSxLQUFLLEVBQUUsS0FGTjtBQUdEQyxrQkFBQUEsS0FBSyxFQUFFLEtBSE47QUFJREMsa0JBQUFBLEtBQUs7QUFKSixpQkFMTSxFQVVOO0FBQ0RILGtCQUFBQSxJQUFJLEVBQUUsUUFETDtBQUVEQyxrQkFBQUEsS0FBSyxFQUFFLE9BRk47QUFHREMsa0JBQUFBLEtBQUssRUFBRSxPQUhOO0FBSURDLGtCQUFBQSxLQUFLO0FBSkosaUJBVk0sQ0FETztBQWlCaEJDLGdCQUFBQSxFQUFFLEVBQUU7QUFqQlk7QUFETyxhQUFyQixDQURVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRULFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7ZUF3QmU7QUFDYkQsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWJXLEVBQUFBLElBQUksRUFBRSxZQUZPO0FBR2JDLEVBQUFBLE9BQU8sRUFBRSxhQUhJO0FBSWJYLEVBQUFBLFNBQVMsRUFBVEE7QUFKYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyLWNvcmUnO1xyXG5cclxuY29uc3QgaGVscCA9ICgpID0+ICh7XHJcbiAgJ2VtcHR5Y2FyZCc6ICdTaG93IGEgZW1wdHkgbWVzc2FnZSB3aXRoIHN1Z2dlc3RlZCBhY3Rpb25zJ1xyXG59KTtcclxuXHJcbmNvbnN0IHByb2Nlc3NvciA9IGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgIHN1Z2dlc3RlZEFjdGlvbnM6IHtcclxuICAgICAgYWN0aW9uczogW3tcclxuICAgICAgICB0eXBlOiAnaW1CYWNrJyxcclxuICAgICAgICB0aXRsZTogJ0JsdWUnLFxyXG4gICAgICAgIHZhbHVlOiAnQmx1ZScsXHJcbiAgICAgICAgaW1hZ2U6IGBodHRwczovL3dlYmNoYXQtbW9ja2JvdC5henVyZXdlYnNpdGVzLm5ldC9wdWJsaWMvYXNzZXRzL3NxdWFyZS1pY29uLnBuZ2BcclxuICAgICAgfSwge1xyXG4gICAgICAgIHR5cGU6ICdpbUJhY2snLFxyXG4gICAgICAgIHRpdGxlOiAnUmVkJyxcclxuICAgICAgICB2YWx1ZTogJ1JlZCcsXHJcbiAgICAgICAgaW1hZ2U6IGBodHRwczovL3dlYmNoYXQtbW9ja2JvdC5henVyZXdlYnNpdGVzLm5ldC9wdWJsaWMvYXNzZXRzL3NxdWFyZS1pY29uLXJlZC5wbmdgXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0eXBlOiAnaW1CYWNrJyxcclxuICAgICAgICB0aXRsZTogJ0dyZWVuJyxcclxuICAgICAgICB2YWx1ZTogJ0dyZWVuJyxcclxuICAgICAgICBpbWFnZTogYGh0dHBzOi8vd2ViY2hhdC1tb2NrYm90LmF6dXJld2Vic2l0ZXMubmV0L3B1YmxpYy9hc3NldHMvc3F1YXJlLWljb24tZ3JlZW4ucG5nYFxyXG4gICAgICB9XSxcclxuICAgICAgdG86IFtdXHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IFxyXG4gIGhlbHAsXHJcbiAgbmFtZTogXCJFbXB0eSBjYXJkXCIsXHJcbiAgcGF0dGVybjogL2VtcHR5Y2FyZCQvaSxcclxuICBwcm9jZXNzb3JcclxufVxyXG4iXX0=