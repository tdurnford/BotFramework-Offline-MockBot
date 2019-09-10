"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ActionStyles = _interopRequireDefault(require("./Cards/ActionStyles"));

var _BingSports = _interopRequireDefault(require("./Cards/BingSports"));

var _Breakfast = _interopRequireDefault(require("./Cards/Breakfast"));

var _Broken = _interopRequireDefault(require("./Cards/Broken"));

var _CalendarReminder = _interopRequireDefault(require("./Cards/CalendarReminder"));

var _FlightTracking = _interopRequireDefault(require("./Cards/FlightTracking"));

var _FlightUpdate = _interopRequireDefault(require("./Cards/FlightUpdate"));

var _Inputs = _interopRequireDefault(require("./Cards/Inputs"));

var _Markdown = _interopRequireDefault(require("./Cards/Markdown"));

var _OrderedList = _interopRequireDefault(require("./Cards/OrderedList"));

var _Restaurant = _interopRequireDefault(require("./Cards/Restaurant"));

var _Review = _interopRequireDefault(require("./Cards/Review"));

var _RichMessage = _interopRequireDefault(require("./Cards/RichMessage"));

var _Simple = _interopRequireDefault(require("./Cards/Simple"));

var _SportsClub = _interopRequireDefault(require("./Cards/SportsClub"));

var _UnorderedList = _interopRequireDefault(require("./Cards/UnorderedList"));

var _Weather = _interopRequireDefault(require("./Cards/Weather"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'card bingsports': 'Show Bing sports using Adaptive Card',
    'card breakfast': 'Show breakfast review using Adaptive Card',
    'card broken:lang': 'Show an Adaptive Card that is broken because of invalid language identifier',
    'card broken': 'Show an Adaptive Card that is broken because of invalid version',
    'card flight': 'Show flight update using Adaptive Card',
    'card flighttracking': 'Show flight tracking using Adaptive Card',
    'card inputs': 'Show an Adaptive Card with all types of inputs',
    'card ol': 'Show an ordered list with Markdown',
    'card markdown': 'Show Markdown using Adaptive Card',
    'card reminder': 'Show a reminder using Adaptive Card',
    'card restaurant': 'Show restaurant information using Adaptive Card',
    'card review': 'Show review using Adaptive Card',
    'card richmessage': 'Show a rich message using Adaptive Card',
    'card simple': 'Show a simple Adaptive Card',
    'card sportsclub': 'Show a comprehensive sports club POI using Adaptive Card',
    'card ul': 'Show an unordered list with Markdown',
    'card weather': 'Show weather forecast using Adaptive Card'
  };
};

var getCardJSON = function getCardJSON() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  switch (name.trim().toLowerCase()) {
    case 'actionstyles':
      return (0, _ActionStyles.default)();

    case 'bingsports':
    case 'sports':
      return (0, _BingSports.default)();

    case 'breakfast':
      return (0, _Breakfast.default)();

    case 'broken':
      return (0, _Broken.default)();

    case 'broken:1':
    case 'broken:lang':
      return (0, _Broken.default)('1');

    case 'calendarreminder':
    case 'calendar':
    case 'reminder':
      return (0, _CalendarReminder.default)();

    case 'flight':
    case 'flightupdate':
      return (0, _FlightUpdate.default)();

    case 'flighttracking':
      return (0, _FlightTracking.default)();

    case 'inputs':
      return (0, _Inputs.default)();

    case 'markdown':
      return (0, _Markdown.default)();

    case 'ol':
      return (0, _OrderedList.default)();

    case 'restaurant':
      return (0, _Restaurant.default)();

    case 'review':
      return (0, _Review.default)();

    case 'richmessage':
      return (0, _RichMessage.default)();

    case 'simple':
      return (0, _Simple.default)();

    case 'sportsclub':
      return (0, _SportsClub.default)();

    case 'ul':
      return (0, _UnorderedList.default)();

    case 'weather':
      return (0, _Weather.default)();
  }
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    var text, names, contents, _text;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            text = context.activity.text;
            names = text.substr(5).split(' ');
            contents = names.filter(function (name) {
              return name;
            }).map(function (name) {
              return getCardJSON(name);
            });

            if (!(contents && contents.length)) {
              _context.next = 9;
              break;
            }

            _text = "Showing ".concat(names.filter(function (name) {
              return name;
            }).join(', '));
            _context.next = 7;
            return context.sendActivity({
              type: 'message',
              text: _text,
              attachmentLayout: 'carousel',
              attachments: contents.map(function (content) {
                return {
                  contentType: 'application/vnd.microsoft.card.adaptive',
                  content: content
                };
              })
            });

          case 7:
            _context.next = 11;
            break;

          case 9:
            _context.next = 11;
            return context.sendActivity({
              type: 'message',
              text: "No card named \"".concat(name, "\"")
            });

          case 11:
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
  name: 'Adaptive Card',
  pattern: /^card(\s+[\d\w:]+)(\s+[\d\w:]+)?(\s+[\d\w:]+)?(\s+[\d\w:]+)?(\s+[\d\w:]+)?/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0FkYXB0aXZlQ2FyZC50cyJdLCJuYW1lcyI6WyJoZWxwIiwiZ2V0Q2FyZEpTT04iLCJuYW1lIiwidHJpbSIsInRvTG93ZXJDYXNlIiwicHJvY2Vzc29yIiwiY29udGV4dCIsInRleHQiLCJhY3Rpdml0eSIsIm5hbWVzIiwic3Vic3RyIiwic3BsaXQiLCJjb250ZW50cyIsImZpbHRlciIsIm1hcCIsImxlbmd0aCIsImpvaW4iLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwiYXR0YWNobWVudExheW91dCIsImF0dGFjaG1lbnRzIiwiY29udGVudCIsImNvbnRlbnRUeXBlIiwicGF0dGVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUNsQix1QkFBbUIsc0NBREQ7QUFFbEIsc0JBQWtCLDJDQUZBO0FBR2xCLHdCQUFvQiw2RUFIRjtBQUlsQixtQkFBZSxpRUFKRztBQUtsQixtQkFBZSx3Q0FMRztBQU1sQiwyQkFBdUIsMENBTkw7QUFPbEIsbUJBQWUsZ0RBUEc7QUFRbEIsZUFBVyxvQ0FSTztBQVNsQixxQkFBaUIsbUNBVEM7QUFVbEIscUJBQWlCLHFDQVZDO0FBV2xCLHVCQUFtQixpREFYRDtBQVlsQixtQkFBZSxpQ0FaRztBQWFsQix3QkFBb0IseUNBYkY7QUFjbEIsbUJBQWUsNkJBZEc7QUFlbEIsdUJBQW1CLDBEQWZEO0FBZ0JsQixlQUFXLHNDQWhCTztBQWlCbEIsb0JBQWdCO0FBakJFLEdBQVA7QUFBQSxDQUFiOztBQW9CQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUE0QjtBQUFBLE1BQTNCQyxJQUEyQix1RUFBWixFQUFZOztB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QUksRUFBSkEsSUFEYTtBQUViRSxFQUFBQSxJQUFJLEVBQUUsZUFGTztBQUdicUIsRUFBQUEsT0FBTyxFQUFFLDZFQUhJO0FBSWJsQixFQUFBQSxTQUFTLEVBQVRBO0FBSmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlci1jb3JlJztcclxuXHJcbmltcG9ydCBBY3Rpb25TdHlsZXMgZnJvbSAnLi9DYXJkcy9BY3Rpb25TdHlsZXMnO1xyXG5pbXBvcnQgQmluZ1Nwb3J0cyBmcm9tICcuL0NhcmRzL0JpbmdTcG9ydHMnO1xyXG5pbXBvcnQgQnJlYWtmYXN0IGZyb20gJy4vQ2FyZHMvQnJlYWtmYXN0JztcclxuaW1wb3J0IEJyb2tlbiBmcm9tICcuL0NhcmRzL0Jyb2tlbic7XHJcbmltcG9ydCBDYWxlbmRhclJlbWluZGVyIGZyb20gJy4vQ2FyZHMvQ2FsZW5kYXJSZW1pbmRlcic7XHJcbmltcG9ydCBGbGlnaHRUcmFja2luZyBmcm9tICcuL0NhcmRzL0ZsaWdodFRyYWNraW5nJztcclxuaW1wb3J0IEZsaWdodFVwZGF0ZSBmcm9tICcuL0NhcmRzL0ZsaWdodFVwZGF0ZSc7XHJcbmltcG9ydCBJbnB1dHMgZnJvbSAnLi9DYXJkcy9JbnB1dHMnO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi9DYXJkcy9NYXJrZG93bic7XHJcbmltcG9ydCBPcmRlcmVkTGlzdCBmcm9tICcuL0NhcmRzL09yZGVyZWRMaXN0JztcclxuaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSAnLi9DYXJkcy9SZXN0YXVyYW50JztcclxuaW1wb3J0IFJldmlldyBmcm9tICcuL0NhcmRzL1Jldmlldyc7XHJcbmltcG9ydCBSaWNoTWVzc2FnZSBmcm9tICcuL0NhcmRzL1JpY2hNZXNzYWdlJztcclxuaW1wb3J0IFNpbXBsZSBmcm9tICcuL0NhcmRzL1NpbXBsZSc7XHJcbmltcG9ydCBTcG9ydHNDbHViIGZyb20gJy4vQ2FyZHMvU3BvcnRzQ2x1Yic7XHJcbmltcG9ydCBVbm9yZGVyZWRMaXN0IGZyb20gJy4vQ2FyZHMvVW5vcmRlcmVkTGlzdCc7XHJcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vQ2FyZHMvV2VhdGhlcic7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAnY2FyZCBiaW5nc3BvcnRzJzogJ1Nob3cgQmluZyBzcG9ydHMgdXNpbmcgQWRhcHRpdmUgQ2FyZCcsXHJcbiAgJ2NhcmQgYnJlYWtmYXN0JzogJ1Nob3cgYnJlYWtmYXN0IHJldmlldyB1c2luZyBBZGFwdGl2ZSBDYXJkJyxcclxuICAnY2FyZCBicm9rZW46bGFuZyc6ICdTaG93IGFuIEFkYXB0aXZlIENhcmQgdGhhdCBpcyBicm9rZW4gYmVjYXVzZSBvZiBpbnZhbGlkIGxhbmd1YWdlIGlkZW50aWZpZXInLFxyXG4gICdjYXJkIGJyb2tlbic6ICdTaG93IGFuIEFkYXB0aXZlIENhcmQgdGhhdCBpcyBicm9rZW4gYmVjYXVzZSBvZiBpbnZhbGlkIHZlcnNpb24nLFxyXG4gICdjYXJkIGZsaWdodCc6ICdTaG93IGZsaWdodCB1cGRhdGUgdXNpbmcgQWRhcHRpdmUgQ2FyZCcsXHJcbiAgJ2NhcmQgZmxpZ2h0dHJhY2tpbmcnOiAnU2hvdyBmbGlnaHQgdHJhY2tpbmcgdXNpbmcgQWRhcHRpdmUgQ2FyZCcsXHJcbiAgJ2NhcmQgaW5wdXRzJzogJ1Nob3cgYW4gQWRhcHRpdmUgQ2FyZCB3aXRoIGFsbCB0eXBlcyBvZiBpbnB1dHMnLFxyXG4gICdjYXJkIG9sJzogJ1Nob3cgYW4gb3JkZXJlZCBsaXN0IHdpdGggTWFya2Rvd24nLFxyXG4gICdjYXJkIG1hcmtkb3duJzogJ1Nob3cgTWFya2Rvd24gdXNpbmcgQWRhcHRpdmUgQ2FyZCcsXHJcbiAgJ2NhcmQgcmVtaW5kZXInOiAnU2hvdyBhIHJlbWluZGVyIHVzaW5nIEFkYXB0aXZlIENhcmQnLFxyXG4gICdjYXJkIHJlc3RhdXJhbnQnOiAnU2hvdyByZXN0YXVyYW50IGluZm9ybWF0aW9uIHVzaW5nIEFkYXB0aXZlIENhcmQnLFxyXG4gICdjYXJkIHJldmlldyc6ICdTaG93IHJldmlldyB1c2luZyBBZGFwdGl2ZSBDYXJkJyxcclxuICAnY2FyZCByaWNobWVzc2FnZSc6ICdTaG93IGEgcmljaCBtZXNzYWdlIHVzaW5nIEFkYXB0aXZlIENhcmQnLFxyXG4gICdjYXJkIHNpbXBsZSc6ICdTaG93IGEgc2ltcGxlIEFkYXB0aXZlIENhcmQnLFxyXG4gICdjYXJkIHNwb3J0c2NsdWInOiAnU2hvdyBhIGNvbXByZWhlbnNpdmUgc3BvcnRzIGNsdWIgUE9JIHVzaW5nIEFkYXB0aXZlIENhcmQnLFxyXG4gICdjYXJkIHVsJzogJ1Nob3cgYW4gdW5vcmRlcmVkIGxpc3Qgd2l0aCBNYXJrZG93bicsXHJcbiAgJ2NhcmQgd2VhdGhlcic6ICdTaG93IHdlYXRoZXIgZm9yZWNhc3QgdXNpbmcgQWRhcHRpdmUgQ2FyZCdcclxufSk7XHJcblxyXG5jb25zdCBnZXRDYXJkSlNPTiA9IChuYW1lOiBzdHJpbmcgPSAnJyk6IGFueSA9PiB7XHJcbiAgc3dpdGNoIChuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICBjYXNlICdhY3Rpb25zdHlsZXMnOlxyXG4gICAgICByZXR1cm4gQWN0aW9uU3R5bGVzKCk7XHJcblxyXG4gICAgY2FzZSAnYmluZ3Nwb3J0cyc6XHJcbiAgICBjYXNlICdzcG9ydHMnOlxyXG4gICAgICByZXR1cm4gQmluZ1Nwb3J0cygpO1xyXG5cclxuICAgIGNhc2UgJ2JyZWFrZmFzdCc6XHJcbiAgICAgIHJldHVybiBCcmVha2Zhc3QoKTtcclxuXHJcbiAgICBjYXNlICdicm9rZW4nOlxyXG4gICAgICByZXR1cm4gQnJva2VuKCk7XHJcblxyXG4gICAgY2FzZSAnYnJva2VuOjEnOlxyXG4gICAgY2FzZSAnYnJva2VuOmxhbmcnOlxyXG4gICAgICByZXR1cm4gQnJva2VuKCcxJyk7XHJcblxyXG4gICAgY2FzZSAnY2FsZW5kYXJyZW1pbmRlcic6XHJcbiAgICBjYXNlICdjYWxlbmRhcic6XHJcbiAgICBjYXNlICdyZW1pbmRlcic6XHJcbiAgICAgIHJldHVybiBDYWxlbmRhclJlbWluZGVyKCk7XHJcblxyXG4gICAgY2FzZSAnZmxpZ2h0JzpcclxuICAgIGNhc2UgJ2ZsaWdodHVwZGF0ZSc6XHJcbiAgICAgIHJldHVybiBGbGlnaHRVcGRhdGUoKTtcclxuXHJcbiAgICBjYXNlICdmbGlnaHR0cmFja2luZyc6XHJcbiAgICAgIHJldHVybiBGbGlnaHRUcmFja2luZygpO1xyXG5cclxuICAgIGNhc2UgJ2lucHV0cyc6XHJcbiAgICAgIHJldHVybiBJbnB1dHMoKTtcclxuXHJcbiAgICBjYXNlICdtYXJrZG93bic6XHJcbiAgICAgIHJldHVybiBNYXJrZG93bigpO1xyXG5cclxuICAgIGNhc2UgJ29sJzpcclxuICAgICAgcmV0dXJuIE9yZGVyZWRMaXN0KCk7XHJcblxyXG4gICAgY2FzZSAncmVzdGF1cmFudCc6XHJcbiAgICAgIHJldHVybiBSZXN0YXVyYW50KCk7XHJcblxyXG4gICAgY2FzZSAncmV2aWV3JzpcclxuICAgICAgcmV0dXJuIFJldmlldygpO1xyXG5cclxuICAgIGNhc2UgJ3JpY2htZXNzYWdlJzpcclxuICAgICAgcmV0dXJuIFJpY2hNZXNzYWdlKCk7XHJcblxyXG4gICAgY2FzZSAnc2ltcGxlJzpcclxuICAgICAgcmV0dXJuIFNpbXBsZSgpO1xyXG5cclxuICAgIGNhc2UgJ3Nwb3J0c2NsdWInOlxyXG4gICAgICByZXR1cm4gU3BvcnRzQ2x1YigpO1xyXG5cclxuICAgIGNhc2UgJ3VsJzpcclxuICAgICAgcmV0dXJuIFVub3JkZXJlZExpc3QoKTtcclxuXHJcbiAgICBjYXNlICd3ZWF0aGVyJzpcclxuICAgICAgcmV0dXJuIFdlYXRoZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb2Nlc3NvciA9IGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgYWN0aXZpdHk6IHsgdGV4dCB9fSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgbmFtZXMgPSB0ZXh0LnN1YnN0cig1KS5zcGxpdCgnICcpO1xyXG4gIGNvbnN0IGNvbnRlbnRzID0gbmFtZXMuZmlsdGVyKG5hbWUgPT4gbmFtZSkubWFwKG5hbWUgPT4gZ2V0Q2FyZEpTT04obmFtZSkpO1xyXG5cclxuICBpZiAoY29udGVudHMgJiYgY29udGVudHMubGVuZ3RoKSB7XHJcbiAgICBsZXQgdGV4dCA9IGBTaG93aW5nICR7IG5hbWVzLmZpbHRlcihuYW1lID0+IG5hbWUpLmpvaW4oJywgJykgfWA7XHJcblxyXG4gICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xyXG4gICAgICB0eXBlOiAnbWVzc2FnZScsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIGF0dGFjaG1lbnRMYXlvdXQ6ICdjYXJvdXNlbCcsXHJcbiAgICAgIGF0dGFjaG1lbnRzOiBjb250ZW50cy5tYXAoY29udGVudCA9PiAoe1xyXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLmFkYXB0aXZlJyxcclxuICAgICAgICBjb250ZW50XHJcbiAgICAgIH0pKVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcclxuICAgICAgdHlwZTogJ21lc3NhZ2UnLFxyXG4gICAgICB0ZXh0OiBgTm8gY2FyZCBuYW1lZCBcIiR7IG5hbWUgfVwiYFxyXG4gICAgfSk7XHJcbiAgfVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBcclxuICBoZWxwLCBcclxuICBuYW1lOiAnQWRhcHRpdmUgQ2FyZCcsXHJcbiAgcGF0dGVybjogL15jYXJkKFxccytbXFxkXFx3Ol0rKShcXHMrW1xcZFxcdzpdKyk/KFxccytbXFxkXFx3Ol0rKT8oXFxzK1tcXGRcXHc6XSspPyhcXHMrW1xcZFxcdzpdKyk/L2ksXHJcbiAgcHJvY2Vzc29yXHJcbn07XHJcbiJdfQ==