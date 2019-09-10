"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'animationcard': 'Show an animation card'
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
              type: 'message',
              attachments: [{
                contentType: 'application/vnd.microsoft.card.animation',
                content: {
                  title: 'title',
                  subtitle: 'animation',
                  text: 'No buttons, No Image, Autoloop, Autostart, Sharable',
                  media: [{
                    profile: 'animation',
                    url: "./assets/surface_anim.gif"
                  }],
                  autoloop: true,
                  autostart: true
                }
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
  name: 'Animation card',
  pattern: /animationcard$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0FuaW1hdGlvbkNhcmQudHMiXSwibmFtZXMiOlsiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJQVUJMSUNfVVJMIiwicHJvY2VzcyIsImVudiIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJ0ZXh0IiwibWVkaWEiLCJwcm9maWxlIiwidXJsIiwiYXV0b2xvb3AiLCJhdXRvc3RhcnQiLCJuYW1lIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUksU0FBUkEsSUFBUTtBQUFBLFNBQU87QUFDbkIscUJBQWlCO0FBREUsR0FBUDtBQUFBLENBQWQ7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLFlBQUFBLFVBRFEsR0FDT0MsT0FBTyxDQUFDQyxHQURmLENBQ1JGLFVBRFE7QUFBQTtBQUFBLG1CQUdWRCxPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLGNBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsY0FBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsZ0JBQUFBLFdBQVcsRUFBRSwwQ0FERDtBQUVaQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1BDLGtCQUFBQSxLQUFLLEVBQUUsT0FEQTtBQUVQQyxrQkFBQUEsUUFBUSxFQUFFLFdBRkg7QUFHUEMsa0JBQUFBLElBQUksRUFBRSxxREFIQztBQUlQQyxrQkFBQUEsS0FBSyxFQUFFLENBQUM7QUFDTkMsb0JBQUFBLE9BQU8sRUFBRSxXQURIO0FBRU5DLG9CQUFBQSxHQUFHO0FBRkcsbUJBQUQsQ0FKQTtBQVFQQyxrQkFBQUEsUUFBUSxFQUFFLElBUkg7QUFTUEMsa0JBQUFBLFNBQVMsRUFBRTtBQVRKO0FBRkcsZUFBRDtBQUZZLGFBQXJCLENBSFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVGpCLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7ZUFzQmU7QUFDYkQsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWJtQixFQUFBQSxJQUFJLEVBQUUsZ0JBRk87QUFHYkMsRUFBQUEsT0FBTyxFQUFFLGlCQUhJO0FBSWJuQixFQUFBQSxTQUFTLEVBQVRBO0FBSmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlci1jb3JlJztcclxuXHJcbmNvbnN0IGhlbHAgPSAgKCkgPT4gKHtcclxuICAnYW5pbWF0aW9uY2FyZCc6ICdTaG93IGFuIGFuaW1hdGlvbiBjYXJkJ1xyXG59KTtcclxuXHJcbmNvbnN0IHByb2Nlc3NvciA9IGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgUFVCTElDX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgIHR5cGU6ICdtZXNzYWdlJyxcclxuICAgIGF0dGFjaG1lbnRzOiBbe1xyXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5hbmltYXRpb24nLFxyXG4gICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgc3VidGl0bGU6ICdhbmltYXRpb24nLFxyXG4gICAgICAgIHRleHQ6ICdObyBidXR0b25zLCBObyBJbWFnZSwgQXV0b2xvb3AsIEF1dG9zdGFydCwgU2hhcmFibGUnLFxyXG4gICAgICAgIG1lZGlhOiBbe1xyXG4gICAgICAgICAgcHJvZmlsZTogJ2FuaW1hdGlvbicsXHJcbiAgICAgICAgICB1cmw6IGAuL2Fzc2V0cy9zdXJmYWNlX2FuaW0uZ2lmYCxcclxuICAgICAgICB9XSxcclxuICAgICAgICBhdXRvbG9vcDogdHJ1ZSxcclxuICAgICAgICBhdXRvc3RhcnQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfV1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBcclxuICBoZWxwLFxyXG4gIG5hbWU6ICdBbmltYXRpb24gY2FyZCcsXHJcbiAgcGF0dGVybjogL2FuaW1hdGlvbmNhcmQkL2ksXHJcbiAgcHJvY2Vzc29yXHJcbn1cclxuIl19