"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'dump-activity': 'Dump activity sent by the user as a JSON'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    var activity, action, attachmentLayout, attachments, channelId, conversation, channelData, entities, from, id, inputHint, locale, localTimestamp, name, recipient, replyToId, serviceUrl, speak, suggestedActions, summary, text, textFormat, timestamp, topicName, type, value, serializedActivity;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            activity = context.activity;
            action = activity.action, attachmentLayout = activity.attachmentLayout, attachments = activity.attachments, channelId = activity.channelId, conversation = activity.conversation, channelData = activity.channelData, entities = activity.entities, from = activity.from, id = activity.id, inputHint = activity.inputHint, locale = activity.locale, localTimestamp = activity.localTimestamp, name = activity.name, recipient = activity.recipient, replyToId = activity.replyToId, serviceUrl = activity.serviceUrl, speak = activity.speak, suggestedActions = activity.suggestedActions, summary = activity.summary, text = activity.text, textFormat = activity.textFormat, timestamp = activity.timestamp, topicName = activity.topicName, type = activity.type, value = activity.value;
            serializedActivity = {
              action: action,
              attachmentLayout: attachmentLayout,
              attachments: attachments && attachments.map(function (_ref2) {
                var content = _ref2.content,
                    contentType = _ref2.contentType,
                    contentUrl = _ref2.contentUrl,
                    name = _ref2.name,
                    thumbnailUrl = _ref2.thumbnailUrl;
                return {
                  content: content,
                  contentType: contentType,
                  contentUrl: contentUrl,
                  name: name,
                  thumbnailUrl: thumbnailUrl
                };
              }),
              channelId: channelId,
              conversation: conversation,
              channelData: channelData,
              entities: entities,
              from: from,
              id: id,
              inputHint: inputHint,
              locale: locale,
              localTimestamp: localTimestamp,
              name: name,
              recipient: recipient,
              replyToId: replyToId,
              serviceUrl: serviceUrl,
              speak: speak,
              suggestedActions: suggestedActions && {
                actions: suggestedActions.actions.map(function (_ref3) {
                  var image = _ref3.image,
                      text = _ref3.text,
                      title = _ref3.title,
                      type = _ref3.type,
                      value = _ref3.value;
                  return {
                    image: image,
                    text: text,
                    title: title,
                    type: type,
                    value: value
                  };
                }),
                to: suggestedActions.to
              },
              summary: summary,
              text: text,
              textFormat: textFormat,
              timestamp: timestamp,
              topicName: topicName,
              type: type,
              value: value
            };
            _context.next = 5;
            return context.sendActivity({
              type: 'message',
              text: 'Partial dump of the activity sent by the user.',
              attachments: [{
                content: "```\n".concat(JSON.stringify(serializedActivity, null, 2), "\n```"),
                contentType: 'text/markdown'
              }]
            });

          case 5:
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
  name: 'Debug activity',
  pattern: /dump-activity$/,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0R1bXBBY3Rpdml0eS50cyJdLCJuYW1lcyI6WyJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsImFjdGl2aXR5IiwiYWN0aW9uIiwiYXR0YWNobWVudExheW91dCIsImF0dGFjaG1lbnRzIiwiY2hhbm5lbElkIiwiY29udmVyc2F0aW9uIiwiY2hhbm5lbERhdGEiLCJlbnRpdGllcyIsImZyb20iLCJpZCIsImlucHV0SGludCIsImxvY2FsZSIsImxvY2FsVGltZXN0YW1wIiwibmFtZSIsInJlY2lwaWVudCIsInJlcGx5VG9JZCIsInNlcnZpY2VVcmwiLCJzcGVhayIsInN1Z2dlc3RlZEFjdGlvbnMiLCJzdW1tYXJ5IiwidGV4dCIsInRleHRGb3JtYXQiLCJ0aW1lc3RhbXAiLCJ0b3BpY05hbWUiLCJ0eXBlIiwidmFsdWUiLCJzZXJpYWxpemVkQWN0aXZpdHkiLCJtYXAiLCJjb250ZW50IiwiY29udGVudFR5cGUiLCJjb250ZW50VXJsIiwidGh1bWJuYWlsVXJsIiwiYWN0aW9ucyIsImltYWdlIiwidGl0bGUiLCJ0byIsInNlbmRBY3Rpdml0eSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUNsQixxQkFBaUI7QUFEQyxHQUFQO0FBQUEsQ0FBYjs7QUFJQSxJQUFNQyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsWUFBQUEsUUFEUSxHQUNLRCxPQURMLENBQ1JDLFFBRFE7QUFHZEMsWUFBQUEsTUFIYyxHQTRCWkQsUUE1QlksQ0FHZEMsTUFIYyxFQUlkQyxnQkFKYyxHQTRCWkYsUUE1QlksQ0FJZEUsZ0JBSmMsRUFLZEMsV0FMYyxHQTRCWkgsUUE1QlksQ0FLZEcsV0FMYyxFQU1k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RUFBeUMsQ0FBekMsQ0FBZCxVQURLO0FBRVpHLGdCQUFBQSxXQUFXLEVBQUU7QUFGRCxlQUFEO0FBSFksYUFBckIsQ0FyRlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVC9CLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7ZUErRmU7QUFDYkQsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWJnQixFQUFBQSxJQUFJLEVBQUUsZ0JBRk87QUFHYjBCLEVBQUFBLE9BQU8sRUFBRSxnQkFISTtBQUliekMsRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAnZHVtcC1hY3Rpdml0eSc6ICdEdW1wIGFjdGl2aXR5IHNlbnQgYnkgdGhlIHVzZXIgYXMgYSBKU09OJ1xyXG59KTtcclxuXHJcbmNvbnN0IHByb2Nlc3NvciA9IGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgYWN0aXZpdHkgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3Qge1xyXG4gICAgYWN0aW9uLFxyXG4gICAgYXR0YWNobWVudExheW91dCxcclxuICAgIGF0dGFjaG1lbnRzLFxyXG4gICAgY2hhbm5lbElkLFxyXG4gICAgY29udmVyc2F0aW9uLFxyXG4gICAgY2hhbm5lbERhdGEsXHJcbiAgICBlbnRpdGllcyxcclxuICAgIGZyb20sXHJcbiAgICBpZCxcclxuICAgIGlucHV0SGludCxcclxuICAgIGxvY2FsZSxcclxuICAgIGxvY2FsVGltZXN0YW1wLFxyXG4gICAgbmFtZSxcclxuICAgIHJlY2lwaWVudCxcclxuICAgIHJlcGx5VG9JZCxcclxuICAgIHNlcnZpY2VVcmwsXHJcbiAgICBzcGVhayxcclxuICAgIHN1Z2dlc3RlZEFjdGlvbnMsXHJcbiAgICBzdW1tYXJ5LFxyXG4gICAgdGV4dCxcclxuICAgIHRleHRGb3JtYXQsXHJcbiAgICB0aW1lc3RhbXAsXHJcbiAgICB0b3BpY05hbWUsXHJcbiAgICB0eXBlLFxyXG4gICAgdmFsdWVcclxuICB9ID0gYWN0aXZpdHk7XHJcblxyXG4gIGNvbnN0IHNlcmlhbGl6ZWRBY3Rpdml0eSA9IHtcclxuICAgIGFjdGlvbixcclxuICAgIGF0dGFjaG1lbnRMYXlvdXQsXHJcbiAgICBhdHRhY2htZW50czogYXR0YWNobWVudHMgJiYgYXR0YWNobWVudHMubWFwKCh7XHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICAgIGNvbnRlbnRUeXBlLFxyXG4gICAgICBjb250ZW50VXJsLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICB0aHVtYm5haWxVcmxcclxuICAgIH0pID0+ICh7XHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICAgIGNvbnRlbnRUeXBlLFxyXG4gICAgICBjb250ZW50VXJsLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICB0aHVtYm5haWxVcmxcclxuICAgIH0pKSxcclxuICAgIGNoYW5uZWxJZCxcclxuICAgIGNvbnZlcnNhdGlvbixcclxuICAgIGNoYW5uZWxEYXRhLFxyXG4gICAgZW50aXRpZXMsXHJcbiAgICBmcm9tLFxyXG4gICAgaWQsXHJcbiAgICBpbnB1dEhpbnQsXHJcbiAgICBsb2NhbGUsXHJcbiAgICBsb2NhbFRpbWVzdGFtcCxcclxuICAgIG5hbWUsXHJcbiAgICByZWNpcGllbnQsXHJcbiAgICByZXBseVRvSWQsXHJcbiAgICBzZXJ2aWNlVXJsLFxyXG4gICAgc3BlYWssXHJcbiAgICBzdWdnZXN0ZWRBY3Rpb25zOiBzdWdnZXN0ZWRBY3Rpb25zICYmIHtcclxuICAgICAgYWN0aW9uczogc3VnZ2VzdGVkQWN0aW9ucy5hY3Rpb25zLm1hcCgoe1xyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSA9PiAoe1xyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSksXHJcbiAgICAgIHRvOiBzdWdnZXN0ZWRBY3Rpb25zLnRvXHJcbiAgICB9LFxyXG4gICAgc3VtbWFyeSxcclxuICAgIHRleHQsXHJcbiAgICB0ZXh0Rm9ybWF0LFxyXG4gICAgdGltZXN0YW1wLFxyXG4gICAgdG9waWNOYW1lLFxyXG4gICAgdHlwZSxcclxuICAgIHZhbHVlXHJcbiAgfTtcclxuXHJcbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xyXG4gICAgdHlwZTogJ21lc3NhZ2UnLFxyXG4gICAgdGV4dDogJ1BhcnRpYWwgZHVtcCBvZiB0aGUgYWN0aXZpdHkgc2VudCBieSB0aGUgdXNlci4nLFxyXG4gICAgYXR0YWNobWVudHM6IFt7XHJcbiAgICAgIGNvbnRlbnQ6IGBcXGBcXGBcXGBcXG4keyBKU09OLnN0cmluZ2lmeShzZXJpYWxpemVkQWN0aXZpdHksIG51bGwsIDIpIH1cXG5cXGBcXGBcXGBgLFxyXG4gICAgICBjb250ZW50VHlwZTogJ3RleHQvbWFya2Rvd24nXHJcbiAgICB9XVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGVscCxcclxuICBuYW1lOiAnRGVidWcgYWN0aXZpdHknLFxyXG4gIHBhdHRlcm46IC9kdW1wLWFjdGl2aXR5JC8sXHJcbiAgcHJvY2Vzc29yXHJcbn1cclxuIl19