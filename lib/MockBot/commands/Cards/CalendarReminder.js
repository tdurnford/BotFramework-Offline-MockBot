"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// http://adaptivecards.io/samples/CalendarReminder.html
var _default = function _default() {
  return {
    "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "speak": "<s>Your  meeting about \"Adaptive Card design session\"<break strength='weak'/> is starting at 12:30pm</s><s>Do you want to snooze <break strength='weak'/> or do you want to send a late notification to the attendees?</s>",
    "body": [{
      "type": "TextBlock",
      "text": "Adaptive Card design session",
      "size": "large",
      "weight": "bolder"
    }, {
      "type": "TextBlock",
      "text": "Conf Room 112/3377 (10)"
    }, {
      "type": "TextBlock",
      "text": "12:30 PM - 1:30 PM"
    }, {
      "type": "TextBlock",
      "text": "Snooze for"
    }, {
      "type": "Input.ChoiceSet",
      "id": "snooze",
      "style": "compact",
      "choices": [{
        "title": "5 minutes",
        "value": "5",
        "isSelected": true
      }, {
        "title": "15 minutes",
        "value": "15"
      }, {
        "title": "30 minutes",
        "value": "30"
      }]
    }],
    "actions": [{
      "type": "Action.Http",
      "method": "POST",
      "url": "http://foo.com",
      "title": "Snooze"
    }, {
      "type": "Action.Http",
      "method": "POST",
      "url": "http://foo.com",
      "title": "I'll be late"
    }, {
      "type": "Action.Http",
      "method": "POST",
      "url": "http://foo.com",
      "title": "Dismiss"
    }]
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0NhcmRzL0NhbGVuZGFyUmVtaW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO2VBRWU7QUFBQSxTQUFPO0FBQ3JCLGVBQVcsc0VBRFU7QUFFckIsWUFBUSxjQUZhO0FBR3JCLGVBQVcsS0FIVTtBQUlyQixhQUFTLDhOQUpZO0FBS3JCLFlBQVEsQ0FDUDtBQUNDLGNBQVEsV0FEVDtBQUVDLGNBQVEsOEJBRlQ7QUFHQyxjQUFRLE9BSFQ7QUFJQyxnQkFBVTtBQUpYLEtBRE8sRUFPUDtBQUNDLGNBQVEsV0FEVDtBQUVDLGNBQVE7QUFGVCxLQVBPLEVBV1A7QUFDQyxjQUFRLFdBRFQ7QUFFQyxjQUFRO0FBRlQsS0FYTyxFQWVQO0FBQ0MsY0FBUSxXQURUO0FBRUMsY0FBUTtBQUZULEtBZk8sRUFtQlA7QUFDQyxjQUFRLGlCQURUO0FBRUMsWUFBTSxRQUZQO0FBR0MsZUFBUSxTQUhUO0FBSUMsaUJBQVcsQ0FDVjtBQUNDLGlCQUFTLFdBRFY7QUFFQyxpQkFBUyxHQUZWO0FBR0Msc0JBQWM7QUFIZixPQURVLEVBTVY7QUFDQyxpQkFBUyxZQURWO0FBRUMsaUJBQVM7QUFGVixPQU5VLEVBVVY7QUFDQyxpQkFBUyxZQURWO0FBRUMsaUJBQVM7QUFGVixPQVZVO0FBSlosS0FuQk8sQ0FMYTtBQTZDckIsZUFBVyxDQUNWO0FBQ0MsY0FBUSxhQURUO0FBRUMsZ0JBQVUsTUFGWDtBQUdDLGFBQU8sZ0JBSFI7QUFJQyxlQUFTO0FBSlYsS0FEVSxFQU9WO0FBQ0MsY0FBUSxhQURUO0FBRUMsZ0JBQVUsTUFGWDtBQUdDLGFBQU8sZ0JBSFI7QUFJQyxlQUFTO0FBSlYsS0FQVSxFQWFWO0FBQ0MsY0FBUSxhQURUO0FBRUMsZ0JBQVUsTUFGWDtBQUdDLGFBQU8sZ0JBSFI7QUFJQyxlQUFTO0FBSlYsS0FiVTtBQTdDVSxHQUFQO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHA6Ly9hZGFwdGl2ZWNhcmRzLmlvL3NhbXBsZXMvQ2FsZW5kYXJSZW1pbmRlci5odG1sXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xyXG5cdFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vbWljcm9zb2Z0LmdpdGh1Yi5pby9BZGFwdGl2ZUNhcmRzL3NjaGVtYXMvYWRhcHRpdmUtY2FyZC5qc29uXCIsXHJcblx0XCJ0eXBlXCI6IFwiQWRhcHRpdmVDYXJkXCIsXHJcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCIsXHJcblx0XCJzcGVha1wiOiBcIjxzPllvdXIgIG1lZXRpbmcgYWJvdXQgXFxcIkFkYXB0aXZlIENhcmQgZGVzaWduIHNlc3Npb25cXFwiPGJyZWFrIHN0cmVuZ3RoPSd3ZWFrJy8+IGlzIHN0YXJ0aW5nIGF0IDEyOjMwcG08L3M+PHM+RG8geW91IHdhbnQgdG8gc25vb3plIDxicmVhayBzdHJlbmd0aD0nd2VhaycvPiBvciBkbyB5b3Ugd2FudCB0byBzZW5kIGEgbGF0ZSBub3RpZmljYXRpb24gdG8gdGhlIGF0dGVuZGVlcz88L3M+XCIsXHJcblx0XCJib2R5XCI6IFtcclxuXHRcdHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFwidGV4dFwiOiBcIkFkYXB0aXZlIENhcmQgZGVzaWduIHNlc3Npb25cIixcclxuXHRcdFx0XCJzaXplXCI6IFwibGFyZ2VcIixcclxuXHRcdFx0XCJ3ZWlnaHRcIjogXCJib2xkZXJcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFwidGV4dFwiOiBcIkNvbmYgUm9vbSAxMTIvMzM3NyAoMTApXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG5cdFx0XHRcInRleHRcIjogXCIxMjozMCBQTSAtIDE6MzAgUE1cIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFwidGV4dFwiOiBcIlNub296ZSBmb3JcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwiSW5wdXQuQ2hvaWNlU2V0XCIsXHJcblx0XHRcdFwiaWRcIjogXCJzbm9vemVcIixcclxuXHRcdFx0XCJzdHlsZVwiOlwiY29tcGFjdFwiLFxyXG5cdFx0XHRcImNob2ljZXNcIjogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCI1IG1pbnV0ZXNcIixcclxuXHRcdFx0XHRcdFwidmFsdWVcIjogXCI1XCIsXHJcblx0XHRcdFx0XHRcImlzU2VsZWN0ZWRcIjogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIjE1IG1pbnV0ZXNcIixcclxuXHRcdFx0XHRcdFwidmFsdWVcIjogXCIxNVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiMzAgbWludXRlc1wiLFxyXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIjMwXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHRdLFxyXG5cdFwiYWN0aW9uc1wiOiBbXHJcblx0XHR7XHJcblx0XHRcdFwidHlwZVwiOiBcIkFjdGlvbi5IdHRwXCIsXHJcblx0XHRcdFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG5cdFx0XHRcInVybFwiOiBcImh0dHA6Ly9mb28uY29tXCIsXHJcblx0XHRcdFwidGl0bGVcIjogXCJTbm9vemVcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwiQWN0aW9uLkh0dHBcIixcclxuXHRcdFx0XCJtZXRob2RcIjogXCJQT1NUXCIsXHJcblx0XHRcdFwidXJsXCI6IFwiaHR0cDovL2Zvby5jb21cIixcclxuXHRcdFx0XCJ0aXRsZVwiOiBcIkknbGwgYmUgbGF0ZVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInR5cGVcIjogXCJBY3Rpb24uSHR0cFwiLFxyXG5cdFx0XHRcIm1ldGhvZFwiOiBcIlBPU1RcIixcclxuXHRcdFx0XCJ1cmxcIjogXCJodHRwOi8vZm9vLmNvbVwiLFxyXG5cdFx0XHRcInRpdGxlXCI6IFwiRGlzbWlzc1wiXHJcblx0XHR9XHJcblx0XVxyXG59KVxyXG4iXX0=