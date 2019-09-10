"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'herocard': 'Show a hero card',
    'herocard long title': 'Show a hero card with a long title'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    var text, heroCard;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            text = context.activity.text;
            heroCard = {
              contentType: 'application/vnd.microsoft.card.hero',
              content: {
                buttons: [{
                  title: 'messageBack Action with no display text',
                  type: 'messageBack',
                  value: 'messageBack Button'
                }],
                images: [{
                  alt: 'Microsoft Surface Alt',
                  tap: {
                    type: 'openUrl',
                    title: 'Tapped it!',
                    value: "https://webchat-mockbot.azurewebsites.net/public/testurl1.html"
                  },
                  url: "./assets/surface1.jpg"
                }],
                tap: {
                  type: 'openUrl',
                  title: 'Tapped it!',
                  value: "https://webchat-mockbot.azurewebsites.net/public/testurl2.html"
                },
                subtitle: 'This is the subtitle',
                text: undefined,
                title: '[Details about image 1](https://microsoft.com)'
              }
            };
            _context.t0 = text.toLowerCase();
            _context.next = _context.t0 === 'herocard long title' ? 5 : 7;
            break;

          case 5:
            heroCard.content.title = 'This is a HeroCard with a really, really long title that is intended to test the richCardsWrapTitle style option.';
            return _context.abrupt("break", 8);

          case 7:
            heroCard.content.text = '**Price: $XXX.XX USD**\r\n------\n Additional details\r\n1. List item 1 \n2. List item 2 \n3. List item 3';

          case 8:
            _context.next = 10;
            return context.sendActivity({
              attachments: [heroCard]
            });

          case 10:
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
  name: 'Hero card',
  pattern: /^herocard(\s+([\d\w]+))?(\s+([\d\w]+))?$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0hlcm9DYXJkLnRzIl0sIm5hbWVzIjpbImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0IiwidGV4dCIsImFjdGl2aXR5IiwiaGVyb0NhcmQiLCJjb250ZW50VHlwZSIsImNvbnRlbnQiLCJidXR0b25zIiwidGl0bGUiLCJ0eXBlIiwidmFsdWUiLCJpbWFnZXMiLCJhbHQiLCJ0YXAiLCJ1cmwiLCJzdWJ0aXRsZSIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwic2VuZEFjdGl2aXR5IiwiYXR0YWNobWVudHMiLCJuYW1lIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU87QUFDbEIsZ0JBQVksa0JBRE07QUFFbEIsMkJBQXVCO0FBRkwsR0FBUDtBQUFBLENBQWI7O0FBS0EsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lDLFlBQUFBLElBREosR0FDY0QsT0FEZCxDQUNSRSxRQURRLENBQ0lELElBREo7QUFHVkUsWUFBQUEsUUFIVSxHQUdDO0FBQ2ZDLGNBQUFBLFdBQVcsRUFBRSxxQ0FERTtBQUVmQyxjQUFBQSxPQUFPLEVBQUU7QUFDUEMsZ0JBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ1JDLGtCQUFBQSxLQUFLLEVBQUUseUNBREM7QUFFUkMsa0JBQUFBLElBQUksRUFBRSxhQUZFO0FBR1JDLGtCQUFBQSxLQUFLLEVBQUU7QUFIQyxpQkFBRCxDQURGO0FBTVBDLGdCQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNQQyxrQkFBQUEsR0FBRyxFQUFFLHVCQURFO0FBRVBDLGtCQUFBQSxHQUFHLEVBQUU7QUFDSEosb0JBQUFBLElBQUksRUFBRSxTQURIO0FBRUhELG9CQUFBQSxLQUFLLEVBQUUsWUFGSjtBQUdIRSxvQkFBQUEsS0FBSztBQUhGLG1CQUZFO0FBT1BJLGtCQUFBQSxHQUFHO0FBUEksaUJBQUQsQ0FORDtBQWVQRCxnQkFBQUEsR0FBRyxFQUFFO0FBQ0hKLGtCQUFBQSxJQUFJLEVBQUUsU0FESDtBQUVIRCxrQkFBQUEsS0FBSyxFQUFFLFlBRko7QUFHSEUsa0JBQUFBLEtBQUs7QUFIRixpQkFmRTtBQW9CUEssZ0JBQUFBLFFBQVEsRUFBRSxzQkFwQkg7QUFxQlBiLGdCQUFBQSxJQUFJLEVBQUVjLFNBckJDO0FBc0JQUixnQkFBQUEsS0FBSyxFQUFHO0FBdEJEO0FBRk0sYUFIRDtBQUFBLDBCQStCVE4sSUFBSSxDQUFDZSxXQUFMLEVBL0JTO0FBQUEsNENBZ0NULHFCQWhDUztBQUFBOztBQUFBO0FBaUNaYixZQUFBQSxRQUFRLENBQUNFLE9BQVQsQ0FBaUJFLEtBQWpCLEdBQXlCLG1IQUF6QjtBQWpDWTs7QUFBQTtBQW9DWkosWUFBQUEsUUFBUSxDQUFDRSxPQUFULENBQWlCSixJQUFqQixHQUF3QiwyR0FBeEI7O0FBcENZO0FBQUE7QUFBQSxtQkF1Q1ZELE9BQU8sQ0FBQ2lCLFlBQVIsQ0FBcUI7QUFBRUMsY0FBQUEsV0FBVyxFQUFFLENBQUNmLFFBQUQ7QUFBZixhQUFyQixDQXZDVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUSixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O2VBMENlO0FBQ2JELEVBQUFBLElBQUksRUFBSkEsSUFEYTtBQUVicUIsRUFBQUEsSUFBSSxFQUFFLFdBRk87QUFHYkMsRUFBQUEsT0FBTyxFQUFHLDJDQUhHO0FBSWJyQixFQUFBQSxTQUFTLEVBQVRBO0FBSmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlci1jb3JlJztcclxuXHJcbmNvbnN0IGhlbHAgPSAoKSA9PiAoe1xyXG4gICdoZXJvY2FyZCc6ICdTaG93IGEgaGVybyBjYXJkJyxcclxuICAnaGVyb2NhcmQgbG9uZyB0aXRsZSc6ICdTaG93IGEgaGVybyBjYXJkIHdpdGggYSBsb25nIHRpdGxlJ1xyXG59KTtcclxuXHJcbmNvbnN0IHByb2Nlc3NvciA9IGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgYWN0aXZpdHk6IHsgdGV4dCB9fSA9IGNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IGhlcm9DYXJkID0ge1xyXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQuaGVybycsXHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgdGl0bGU6ICdtZXNzYWdlQmFjayBBY3Rpb24gd2l0aCBubyBkaXNwbGF5IHRleHQnLFxyXG4gICAgICAgIHR5cGU6ICdtZXNzYWdlQmFjaycsXHJcbiAgICAgICAgdmFsdWU6ICdtZXNzYWdlQmFjayBCdXR0b24nXHJcbiAgICAgIH1dLFxyXG4gICAgICBpbWFnZXM6IFt7XHJcbiAgICAgICAgYWx0OiAnTWljcm9zb2Z0IFN1cmZhY2UgQWx0JyxcclxuICAgICAgICB0YXA6IHtcclxuICAgICAgICAgIHR5cGU6ICdvcGVuVXJsJyxcclxuICAgICAgICAgIHRpdGxlOiAnVGFwcGVkIGl0IScsXHJcbiAgICAgICAgICB2YWx1ZTogYGh0dHBzOi8vd2ViY2hhdC1tb2NrYm90LmF6dXJld2Vic2l0ZXMubmV0L3B1YmxpYy90ZXN0dXJsMS5odG1sYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXJsOiBgLi9hc3NldHMvc3VyZmFjZTEuanBnYCxcclxuICAgICAgfV0sXHJcbiAgICAgIHRhcDoge1xyXG4gICAgICAgIHR5cGU6ICdvcGVuVXJsJyxcclxuICAgICAgICB0aXRsZTogJ1RhcHBlZCBpdCEnLFxyXG4gICAgICAgIHZhbHVlOiBgaHR0cHM6Ly93ZWJjaGF0LW1vY2tib3QuYXp1cmV3ZWJzaXRlcy5uZXQvcHVibGljL3Rlc3R1cmwyLmh0bWxgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1YnRpdGxlOiAnVGhpcyBpcyB0aGUgc3VidGl0bGUnLFxyXG4gICAgICB0ZXh0OiB1bmRlZmluZWQsXHJcbiAgICAgIHRpdGxlOiAgJ1tEZXRhaWxzIGFib3V0IGltYWdlIDFdKGh0dHBzOi8vbWljcm9zb2Z0LmNvbSknXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3dpdGNoKHRleHQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgY2FzZSAnaGVyb2NhcmQgbG9uZyB0aXRsZSc6XHJcbiAgICAgIGhlcm9DYXJkLmNvbnRlbnQudGl0bGUgPSAnVGhpcyBpcyBhIEhlcm9DYXJkIHdpdGggYSByZWFsbHksIHJlYWxseSBsb25nIHRpdGxlIHRoYXQgaXMgaW50ZW5kZWQgdG8gdGVzdCB0aGUgcmljaENhcmRzV3JhcFRpdGxlIHN0eWxlIG9wdGlvbi4nO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGhlcm9DYXJkLmNvbnRlbnQudGV4dCA9ICcqKlByaWNlOiAkWFhYLlhYIFVTRCoqXFxyXFxuLS0tLS0tXFxuIEFkZGl0aW9uYWwgZGV0YWlsc1xcclxcbjEuIExpc3QgaXRlbSAxIFxcbjIuIExpc3QgaXRlbSAyIFxcbjMuIExpc3QgaXRlbSAzJztcclxuICB9XHJcblxyXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHsgYXR0YWNobWVudHM6IFtoZXJvQ2FyZF0gfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGVscCxcclxuICBuYW1lOiAnSGVybyBjYXJkJywgXHJcbiAgcGF0dGVybjogIC9eaGVyb2NhcmQoXFxzKyhbXFxkXFx3XSspKT8oXFxzKyhbXFxkXFx3XSspKT8kL2ksXHJcbiAgcHJvY2Vzc29yXHJcbn07XHJcbiJdfQ==