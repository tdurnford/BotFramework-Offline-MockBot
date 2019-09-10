"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var name = 'Suggested actions';

var help = function help() {
  return {
    'suggested-actions': 'Show a suggested actions demo'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context, arg) {
    var PUBLIC_URL;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            PUBLIC_URL = process.env.PUBLIC_URL;

            if (!((arg || '').toLowerCase().trim() === 'others')) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return context.sendActivity({
              type: 'message',
              textFormat: 'plain',
              text: 'This activity should not display any suggested actions.',
              suggestedActions: {
                actions: [{
                  title: 'This button should not appear',
                  type: 'imBack',
                  value: 'suggested-actions this-button-should-not-appear'
                }],
                to: ['some-other-id']
              }
            });

          case 4:
            _context.next = 13;
            break;

          case 6:
            if (!arg) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return context.sendActivity("You submitted \"".concat(arg.trim(), "\""));

          case 9:
            _context.next = 13;
            break;

          case 11:
            _context.next = 13;
            return context.sendActivity({
              type: 'message',
              textFormat: 'plain',
              text: 'Please select one of the actions below',
              suggestedActions: {
                actions: [{
                  image: "./assets/square-icon.png",
                  title: 'IM back as string',
                  type: 'imBack',
                  value: 'postback imback-string'
                }, {
                  image: "./assets/square-icon-red.png",
                  title: 'Post back as string',
                  type: 'postBack',
                  value: 'postback postback-string'
                }, {
                  image: "./assets/square-icon-green.png",
                  title: 'Post back as JSON',
                  text: 'Some text',
                  type: 'postBack',
                  value: {
                    hello: 'World!'
                  }
                }, {
                  image: "./assets/square-icon-purple.png",
                  displayText: 'say Hello World!',
                  title: 'Message back as JSON with display text',
                  text: 'Some text',
                  type: 'messageBack',
                  value: {
                    hello: 'World!'
                  }
                }, {
                  image: "./assets/square-icon-purple.png",
                  title: 'Message back as JSON without display text',
                  type: 'messageBack',
                  value: {
                    hello: 'World!'
                  }
                }, {
                  displayText: 'Aloha',
                  image: "./assets/square-icon-purple.png",
                  text: 'echo Hello',
                  title: 'Message back as string with display text',
                  type: 'messageBack',
                  // TODO: Remove value after bumping DLJS
                  value: null
                }],
                // TODO: Should we fill in the "to"?
                to: []
              }
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function processor(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  help: help,
  name: name,
  pattern: /^suggested\-actions(\s+[\d\w]+)?/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL1N1Z2dlc3RlZEFjdGlvbnNDYXJkLnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsImFyZyIsIlBVQkxJQ19VUkwiLCJwcm9jZXNzIiwiZW52IiwidG9Mb3dlckNhc2UiLCJ0cmltIiwic2VuZEFjdGl2aXR5IiwidHlwZSIsInRleHRGb3JtYXQiLCJ0ZXh0Iiwic3VnZ2VzdGVkQWN0aW9ucyIsImFjdGlvbnMiLCJ0aXRsZSIsInZhbHVlIiwidG8iLCJpbWFnZSIsImhlbGxvIiwiZGlzcGxheVRleHQiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxtQkFBYjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU87QUFDbEIseUJBQXFCO0FBREgsR0FBUDtBQUFBLENBQWI7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVAsRUFBNkJDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxZQUFBQSxVQURRLEdBQ09DLE9BQU8sQ0FBQ0MsR0FEZixDQUNSRixVQURROztBQUFBLGtCQUdaLENBQUNELEdBQUcsSUFBSSxFQUFSLEVBQVlJLFdBQVosR0FBMEJDLElBQTFCLE9BQXFDLFFBSHpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBTVJOLE9BQU8sQ0FBQ08sWUFBUixDQUFxQjtBQUN6QkMsY0FBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxjQUFBQSxVQUFVLEVBQUUsT0FGYTtBQUd6QkMsY0FBQUEsSUFBSSxFQUFFLHlEQUhtQjtBQUl6QkMsY0FBQUEsZ0JBQWdCLEVBQUU7QUFDaEJDLGdCQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSQyxrQkFBQUEsS0FBSyxFQUFFLCtCQURDO0FBRVJMLGtCQUFBQSxJQUFJLEVBQUUsUUFGRTtBQUdSTSxrQkFBQUEsS0FBSyxFQUFFO0FBSEMsaUJBQUQsQ0FETztBQU1oQkMsZ0JBQUFBLEVBQUUsRUFBRSxDQUFDLGVBQUQ7QUFOWTtBQUpPLGFBQXJCLENBTlE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBbUJMZCxHQW5CSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQW9CUkQsT0FBTyxDQUFDTyxZQUFSLDJCQUF3Q04sR0FBRyxDQUFDSyxJQUFKLEVBQXhDLFFBcEJROztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBc0JSTixPQUFPLENBQUNPLFlBQVIsQ0FBcUI7QUFDekJDLGNBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsY0FBQUEsVUFBVSxFQUFFLE9BRmE7QUFHekJDLGNBQUFBLElBQUksRUFBRSx3Q0FIbUI7QUFJekJDLGNBQUFBLGdCQUFnQixFQUFFO0FBQ2hCQyxnQkFBQUEsT0FBTyxFQUFFLENBQ1A7QUFDRUksa0JBQUFBLEtBQUssNEJBRFA7QUFFRUgsa0JBQUFBLEtBQUssRUFBRSxtQkFGVDtBQUdFTCxrQkFBQUEsSUFBSSxFQUFFLFFBSFI7QUFJRU0sa0JBQUFBLEtBQUssRUFBRTtBQUpULGlCQURPLEVBT1A7QUFDRUUsa0JBQUFBLEtBQUssZ0NBRFA7QUFFRUgsa0JBQUFBLEtBQUssRUFBRSxxQkFGVDtBQUdFTCxrQkFBQUEsSUFBSSxFQUFFLFVBSFI7QUFJRU0sa0JBQUFBLEtBQUssRUFBRTtBQUpULGlCQVBPLEVBYVA7QUFDRUUsa0JBQUFBLEtBQUssa0NBRFA7QUFFRUgsa0JBQUFBLEtBQUssRUFBRSxtQkFGVDtBQUdFSCxrQkFBQUEsSUFBSSxFQUFFLFdBSFI7QUFJRUYsa0JBQUFBLElBQUksRUFBRSxVQUpSO0FBS0VNLGtCQUFBQSxLQUFLLEVBQUU7QUFDTEcsb0JBQUFBLEtBQUssRUFBRTtBQURGO0FBTFQsaUJBYk8sRUFzQlA7QUFDRUQsa0JBQUFBLEtBQUssbUNBRFA7QUFFRUUsa0JBQUFBLFdBQVcsRUFBRSxrQkFGZjtBQUdFTCxrQkFBQUEsS0FBSyxFQUFFLHdDQUhUO0FBSUVILGtCQUFBQSxJQUFJLEVBQUUsV0FKUjtBQUtFRixrQkFBQUEsSUFBSSxFQUFFLGFBTFI7QUFNRU0sa0JBQUFBLEtBQUssRUFBRTtBQUNMRyxvQkFBQUEsS0FBSyxFQUFFO0FBREY7QUFOVCxpQkF0Qk8sRUFnQ1A7QUFDRUQsa0JBQUFBLEtBQUssbUNBRFA7QUFFRUgsa0JBQUFBLEtBQUssRUFBRSwyQ0FGVDtBQUdFTCxrQkFBQUEsSUFBSSxFQUFFLGFBSFI7QUFJRU0sa0JBQUFBLEtBQUssRUFBRTtBQUNMRyxvQkFBQUEsS0FBSyxFQUFFO0FBREY7QUFKVCxpQkFoQ08sRUF3Q1A7QUFDRUMsa0JBQUFBLFdBQVcsRUFBRSxPQURmO0FBRUVGLGtCQUFBQSxLQUFLLG1DQUZQO0FBR0VOLGtCQUFBQSxJQUFJLEVBQUUsWUFIUjtBQUlFRyxrQkFBQUEsS0FBSyxFQUFFLDBDQUpUO0FBS0VMLGtCQUFBQSxJQUFJLEVBQUUsYUFMUjtBQU9FO0FBQ0FNLGtCQUFBQSxLQUFLLEVBQUU7QUFSVCxpQkF4Q08sQ0FETztBQW9EaEI7QUFDQUMsZ0JBQUFBLEVBQUUsRUFBRTtBQXJEWTtBQUpPLGFBQXJCLENBdEJROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRoQixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O2VBcUZlO0FBQ2JELEVBQUFBLElBQUksRUFBSkEsSUFEYTtBQUViRCxFQUFBQSxJQUFJLEVBQUpBLElBRmE7QUFHYnNCLEVBQUFBLE9BQU8sRUFBRSxtQ0FISTtBQUlicEIsRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcblxyXG5jb25zdCBuYW1lID0gJ1N1Z2dlc3RlZCBhY3Rpb25zJztcclxuXHJcbmNvbnN0IGhlbHAgPSAoKSA9PiAoe1xyXG4gICdzdWdnZXN0ZWQtYWN0aW9ucyc6ICdTaG93IGEgc3VnZ2VzdGVkIGFjdGlvbnMgZGVtbydcclxufSk7XHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQsIGFyZzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgeyBQVUJMSUNfVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbiAgaWYgKChhcmcgfHwgJycpLnRvTG93ZXJDYXNlKCkudHJpbSgpID09PSAnb3RoZXJzJykge1xyXG4gICAgLy8gUmVsYXRlZCB0byAjMTA1N1xyXG5cclxuICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgICAgdHlwZTogJ21lc3NhZ2UnLFxyXG4gICAgICB0ZXh0Rm9ybWF0OiAncGxhaW4nLFxyXG4gICAgICB0ZXh0OiAnVGhpcyBhY3Rpdml0eSBzaG91bGQgbm90IGRpc3BsYXkgYW55IHN1Z2dlc3RlZCBhY3Rpb25zLicsXHJcbiAgICAgIHN1Z2dlc3RlZEFjdGlvbnM6IHtcclxuICAgICAgICBhY3Rpb25zOiBbe1xyXG4gICAgICAgICAgdGl0bGU6ICdUaGlzIGJ1dHRvbiBzaG91bGQgbm90IGFwcGVhcicsXHJcbiAgICAgICAgICB0eXBlOiAnaW1CYWNrJyxcclxuICAgICAgICAgIHZhbHVlOiAnc3VnZ2VzdGVkLWFjdGlvbnMgdGhpcy1idXR0b24tc2hvdWxkLW5vdC1hcHBlYXInLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHRvOiBbJ3NvbWUtb3RoZXItaWQnXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKGFyZykge1xyXG4gICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoYFlvdSBzdWJtaXR0ZWQgXCIkeyBhcmcudHJpbSgpIH1cImApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XHJcbiAgICAgIHR5cGU6ICdtZXNzYWdlJyxcclxuICAgICAgdGV4dEZvcm1hdDogJ3BsYWluJyxcclxuICAgICAgdGV4dDogJ1BsZWFzZSBzZWxlY3Qgb25lIG9mIHRoZSBhY3Rpb25zIGJlbG93JyxcclxuICAgICAgc3VnZ2VzdGVkQWN0aW9uczoge1xyXG4gICAgICAgIGFjdGlvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2U6IGAuL2Fzc2V0cy9zcXVhcmUtaWNvbi5wbmdgLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0lNIGJhY2sgYXMgc3RyaW5nJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltQmFjaycsXHJcbiAgICAgICAgICAgIHZhbHVlOiAncG9zdGJhY2sgaW1iYWNrLXN0cmluZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogYC4vYXNzZXRzL3NxdWFyZS1pY29uLXJlZC5wbmdgLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1Bvc3QgYmFjayBhcyBzdHJpbmcnLFxyXG4gICAgICAgICAgICB0eXBlOiAncG9zdEJhY2snLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3Bvc3RiYWNrIHBvc3RiYWNrLXN0cmluZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZTogYC4vYXNzZXRzL3NxdWFyZS1pY29uLWdyZWVuLnBuZ2AsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9zdCBiYWNrIGFzIEpTT04nLFxyXG4gICAgICAgICAgICB0ZXh0OiAnU29tZSB0ZXh0JyxcclxuICAgICAgICAgICAgdHlwZTogJ3Bvc3RCYWNrJyxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICBoZWxsbzogJ1dvcmxkISdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiBgLi9hc3NldHMvc3F1YXJlLWljb24tcHVycGxlLnBuZ2AsXHJcbiAgICAgICAgICAgIGRpc3BsYXlUZXh0OiAnc2F5IEhlbGxvIFdvcmxkIScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVzc2FnZSBiYWNrIGFzIEpTT04gd2l0aCBkaXNwbGF5IHRleHQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnU29tZSB0ZXh0JyxcclxuICAgICAgICAgICAgdHlwZTogJ21lc3NhZ2VCYWNrJyxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICBoZWxsbzogJ1dvcmxkISdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlOiBgLi9hc3NldHMvc3F1YXJlLWljb24tcHVycGxlLnBuZ2AsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVzc2FnZSBiYWNrIGFzIEpTT04gd2l0aG91dCBkaXNwbGF5IHRleHQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnbWVzc2FnZUJhY2snLFxyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgIGhlbGxvOiAnV29ybGQhJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZGlzcGxheVRleHQ6ICdBbG9oYScsXHJcbiAgICAgICAgICAgIGltYWdlOiBgLi9hc3NldHMvc3F1YXJlLWljb24tcHVycGxlLnBuZ2AsXHJcbiAgICAgICAgICAgIHRleHQ6ICdlY2hvIEhlbGxvJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXNzYWdlIGJhY2sgYXMgc3RyaW5nIHdpdGggZGlzcGxheSB0ZXh0JyxcclxuICAgICAgICAgICAgdHlwZTogJ21lc3NhZ2VCYWNrJyxcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB2YWx1ZSBhZnRlciBidW1waW5nIERMSlNcclxuICAgICAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCB3ZSBmaWxsIGluIHRoZSBcInRvXCI/XHJcbiAgICAgICAgdG86IFtdXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBoZWxwLFxyXG4gIG5hbWUsXHJcbiAgcGF0dGVybjogL15zdWdnZXN0ZWRcXC1hY3Rpb25zKFxccytbXFxkXFx3XSspPy9pLFxyXG4gIHByb2Nlc3NvclxyXG59XHJcbiJdfQ==