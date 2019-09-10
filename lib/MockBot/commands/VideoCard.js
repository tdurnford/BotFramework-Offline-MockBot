"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'videocard': 'Show a video card'
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
              attachments: [{
                contentType: 'application/vnd.microsoft.card.video',
                content: {
                  title: 'Microsoft Band',
                  subtitle: 'Large Video',
                  text: 'No buttons, No Image, Autoloop, No Sharable',
                  media: [{
                    url: "./assets/msband.mp4",
                    profile: 'videocard'
                  }],
                  image: {
                    url: "./assets/ms-band1.jpg"
                  },
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
  name: 'Video card',
  pattern: /videocard$/,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL1ZpZGVvQ2FyZC50cyJdLCJuYW1lcyI6WyJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJ0ZXh0IiwibWVkaWEiLCJ1cmwiLCJwcm9maWxlIiwiaW1hZ2UiLCJhdXRvbG9vcCIsImF1dG9zdGFydCIsIm5hbWUiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUNsQixpQkFBYTtBQURLLEdBQVA7QUFBQSxDQUFiOztBQUlBLElBQU1DLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVWQSxPQUFPLENBQUNDLFlBQVIsQ0FBcUI7QUFDekJDLGNBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsY0FBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsZ0JBQUFBLFdBQVcsRUFBRSxzQ0FERDtBQUVaQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1BDLGtCQUFBQSxLQUFLLEVBQUUsZ0JBREE7QUFFUEMsa0JBQUFBLFFBQVEsRUFBRSxhQUZIO0FBR1BDLGtCQUFBQSxJQUFJLEVBQUUsNkNBSEM7QUFJUEMsa0JBQUFBLEtBQUssRUFBRSxDQUFDO0FBQ05DLG9CQUFBQSxHQUFHLHVCQURHO0FBRU5DLG9CQUFBQSxPQUFPLEVBQUU7QUFGSCxtQkFBRCxDQUpBO0FBUVBDLGtCQUFBQSxLQUFLLEVBQUU7QUFBRUYsb0JBQUFBLEdBQUc7QUFBTCxtQkFSQTtBQVNQRyxrQkFBQUEsUUFBUSxFQUFFLElBVEg7QUFVUEMsa0JBQUFBLFNBQVMsRUFBRTtBQVZKO0FBRkcsZUFBRDtBQUZZLGFBQXJCLENBRlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVGYsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmOztlQXNCZTtBQUNiRCxFQUFBQSxJQUFJLEVBQUpBLElBRGE7QUFFYmlCLEVBQUFBLElBQUksRUFBRSxZQUZPO0FBR2JDLEVBQUFBLE9BQU8sRUFBRSxZQUhJO0FBSWJqQixFQUFBQSxTQUFTLEVBQVRBO0FBSmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlci1jb3JlJztcclxuXHJcbmNvbnN0IGhlbHAgPSAoKSA9PiAoe1xyXG4gICd2aWRlb2NhcmQnOiAnU2hvdyBhIHZpZGVvIGNhcmQnXHJcbn0pO1xyXG5cclxuY29uc3QgcHJvY2Vzc29yID0gYXN5bmMgKGNvbnRleHQ6IFR1cm5Db250ZXh0KSA9PiB7XHJcblxyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgIHR5cGU6ICdtZXNzYWdlJyxcclxuICAgIGF0dGFjaG1lbnRzOiBbe1xyXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC52aWRlbycsXHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0aXRsZTogJ01pY3Jvc29mdCBCYW5kJyxcclxuICAgICAgICBzdWJ0aXRsZTogJ0xhcmdlIFZpZGVvJyxcclxuICAgICAgICB0ZXh0OiAnTm8gYnV0dG9ucywgTm8gSW1hZ2UsIEF1dG9sb29wLCBObyBTaGFyYWJsZScsXHJcbiAgICAgICAgbWVkaWE6IFt7XHJcbiAgICAgICAgICB1cmw6IGAuL2Fzc2V0cy9tc2JhbmQubXA0YCxcclxuICAgICAgICAgIHByb2ZpbGU6ICd2aWRlb2NhcmQnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgaW1hZ2U6IHsgdXJsOiBgLi9hc3NldHMvbXMtYmFuZDEuanBnYCB9LFxyXG4gICAgICAgIGF1dG9sb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9zdGFydDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfV1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBoZWxwLFxyXG4gIG5hbWU6ICdWaWRlbyBjYXJkJyxcclxuICBwYXR0ZXJuOiAvdmlkZW9jYXJkJC8sXHJcbiAgcHJvY2Vzc29yXHJcbn1cclxuIl19