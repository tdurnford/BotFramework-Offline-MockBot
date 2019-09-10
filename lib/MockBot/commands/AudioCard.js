"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'audiocard': 'Show an audio card'
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
              attachments: [{
                contentType: 'application/vnd.microsoft.card.audio',
                content: {
                  title: 'BotFramework Test',
                  subtitle: 'audio test',
                  text: 'No buttons, No Image, Autoloop, Sharable',
                  media: [{
                    profile: 'audiocard',
                    url: "https://webchat-mockbot.azurewebsites.net/public/assets/bftest.mp3"
                  }],
                  autoloop: true,
                  autostart: false
                }
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
  name: 'Audio card',
  pattern: /audio$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0F1ZGlvQ2FyZC50cyJdLCJuYW1lcyI6WyJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsInNlbmRBY3Rpdml0eSIsImF0dGFjaG1lbnRzIiwiY29udGVudFR5cGUiLCJjb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsInRleHQiLCJtZWRpYSIsInByb2ZpbGUiLCJ1cmwiLCJhdXRvbG9vcCIsImF1dG9zdGFydCIsIm5hbWUiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUNsQixpQkFBYTtBQURLLEdBQVA7QUFBQSxDQUFiOztBQUlBLElBQU1DLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNWQSxPQUFPLENBQUNDLFlBQVIsQ0FBcUI7QUFDekJDLGNBQUFBLFdBQVcsRUFBRSxDQUFDO0FBQ1pDLGdCQUFBQSxXQUFXLEVBQUUsc0NBREQ7QUFFWkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUNQQyxrQkFBQUEsS0FBSyxFQUFFLG1CQURBO0FBRVBDLGtCQUFBQSxRQUFRLEVBQUUsWUFGSDtBQUdQQyxrQkFBQUEsSUFBSSxFQUFFLDBDQUhDO0FBSVBDLGtCQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUNOQyxvQkFBQUEsT0FBTyxFQUFFLFdBREg7QUFFTkMsb0JBQUFBLEdBQUc7QUFGRyxtQkFBRCxDQUpBO0FBUVBDLGtCQUFBQSxRQUFRLEVBQUUsSUFSSDtBQVNQQyxrQkFBQUEsU0FBUyxFQUFFO0FBVEo7QUFGRyxlQUFEO0FBRFksYUFBckIsQ0FEVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUYixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O2VBbUJlO0FBQ2JELEVBQUFBLElBQUksRUFBSkEsSUFEYTtBQUViZSxFQUFBQSxJQUFJLEVBQUUsWUFGTztBQUdiQyxFQUFBQSxPQUFPLEVBQUUsU0FISTtBQUliZixFQUFBQSxTQUFTLEVBQVRBO0FBSmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlci1jb3JlJztcclxuXHJcbmNvbnN0IGhlbHAgPSAoKSA9PiAoe1xyXG4gICdhdWRpb2NhcmQnOiAnU2hvdyBhbiBhdWRpbyBjYXJkJ1xyXG59KTtcclxuXHJcbmNvbnN0IHByb2Nlc3NvciA9IGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgIGF0dGFjaG1lbnRzOiBbe1xyXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5hdWRpbycsXHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0aXRsZTogJ0JvdEZyYW1ld29yayBUZXN0JyxcclxuICAgICAgICBzdWJ0aXRsZTogJ2F1ZGlvIHRlc3QnLFxyXG4gICAgICAgIHRleHQ6ICdObyBidXR0b25zLCBObyBJbWFnZSwgQXV0b2xvb3AsIFNoYXJhYmxlJyxcclxuICAgICAgICBtZWRpYTogW3tcclxuICAgICAgICAgIHByb2ZpbGU6ICdhdWRpb2NhcmQnLFxyXG4gICAgICAgICAgdXJsOiBgaHR0cHM6Ly93ZWJjaGF0LW1vY2tib3QuYXp1cmV3ZWJzaXRlcy5uZXQvcHVibGljL2Fzc2V0cy9iZnRlc3QubXAzYFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGF1dG9sb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9zdGFydDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfV1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgXHJcbiAgaGVscCxcclxuICBuYW1lOiAnQXVkaW8gY2FyZCcsIFxyXG4gIHBhdHRlcm46IC9hdWRpbyQvaSxcclxuICBwcm9jZXNzb3JcclxufTtcclxuIl19