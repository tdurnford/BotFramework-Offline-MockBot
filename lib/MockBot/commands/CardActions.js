"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'card-actions': 'Show a suggested action with different card actions'
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
              textFormat: 'plain',
              text: 'Please select one of the card actions below',
              suggestedActions: {
                actions: [{
                  title: '"openUrl"',
                  type: 'openUrl',
                  value: 'https://microsoft.com/'
                }],
                // TODO: Should we fill in the "to"?
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
  name: 'Suggested actions',
  pattern: /card-actions$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0NhcmRBY3Rpb25zLnRzIl0sIm5hbWVzIjpbImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0Iiwic2VuZEFjdGl2aXR5IiwidGV4dEZvcm1hdCIsInRleHQiLCJzdWdnZXN0ZWRBY3Rpb25zIiwiYWN0aW9ucyIsInRpdGxlIiwidHlwZSIsInZhbHVlIiwidG8iLCJuYW1lIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU87QUFDbEIsb0JBQWdCO0FBREUsR0FBUDtBQUFBLENBQWI7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1ZBLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQjtBQUN6QkMsY0FBQUEsVUFBVSxFQUFFLE9BRGE7QUFFekJDLGNBQUFBLElBQUksRUFBRSw2Q0FGbUI7QUFHekJDLGNBQUFBLGdCQUFnQixFQUFFO0FBQ2hCQyxnQkFBQUEsT0FBTyxFQUFFLENBQ1A7QUFDRUMsa0JBQUFBLEtBQUssRUFBRSxXQURUO0FBRUVDLGtCQUFBQSxJQUFJLEVBQUUsU0FGUjtBQUdFQyxrQkFBQUEsS0FBSyxFQUFFO0FBSFQsaUJBRE8sQ0FETztBQVFoQjtBQUNBQyxnQkFBQUEsRUFBRSxFQUFFO0FBVFk7QUFITyxhQUFyQixDQURVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRWLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7ZUFrQmU7QUFDYkQsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWJZLEVBQUFBLElBQUksRUFBRSxtQkFGTztBQUdiQyxFQUFBQSxPQUFPLEVBQUUsZ0JBSEk7QUFJYlosRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAnY2FyZC1hY3Rpb25zJzogJ1Nob3cgYSBzdWdnZXN0ZWQgYWN0aW9uIHdpdGggZGlmZmVyZW50IGNhcmQgYWN0aW9ucydcclxufSk7XHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQpID0+IHtcclxuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XHJcbiAgICB0ZXh0Rm9ybWF0OiAncGxhaW4nLFxyXG4gICAgdGV4dDogJ1BsZWFzZSBzZWxlY3Qgb25lIG9mIHRoZSBjYXJkIGFjdGlvbnMgYmVsb3cnLFxyXG4gICAgc3VnZ2VzdGVkQWN0aW9uczoge1xyXG4gICAgICBhY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdcIm9wZW5VcmxcIicsXHJcbiAgICAgICAgICB0eXBlOiAnb3BlblVybCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ2h0dHBzOi8vbWljcm9zb2Z0LmNvbS8nLFxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgLy8gVE9ETzogU2hvdWxkIHdlIGZpbGwgaW4gdGhlIFwidG9cIj9cclxuICAgICAgdG86IFtdXHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGVscCxcclxuICBuYW1lOiAnU3VnZ2VzdGVkIGFjdGlvbnMnLFxyXG4gIHBhdHRlcm46IC9jYXJkLWFjdGlvbnMkL2ksXHJcbiAgcHJvY2Vzc29yXHJcbn1cclxuIl19