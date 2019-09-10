"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// http://adaptivecards.io/samples/Inputs.html
var _default = function _default() {
  return {
    "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "speak": "<s>Adaptive Card inputs example</s>",
    "body": [{
      "type": "TextBlock",
      "size": "medium",
      "weight": "bolder",
      "text": "Input.Text elements",
      "horizontalAlignment": "center"
    }, {
      "type": "Input.Text",
      "placeholder": "Name",
      "style": "text",
      "maxLength": 0,
      "id": "SimpleVal",
      "speak": "What is your name?"
    }, {
      "type": "Input.Text",
      "placeholder": "Homepage",
      "style": "url",
      "maxLength": 0,
      "id": "UrlVal",
      "speak": "What is your homepage?"
    }, {
      "type": "Input.Text",
      "placeholder": "Email",
      "style": "email",
      "maxLength": 0,
      "id": "EmailVal",
      "speak": "What is your email address?"
    }, {
      "type": "Input.Text",
      "placeholder": "Phone",
      "style": "tel",
      "maxLength": 0,
      "id": "TelVal",
      "speak": "What is your phone number?"
    }, {
      "type": "Input.Text",
      "placeholder": "Comments",
      "style": "text",
      "isMultiline": true,
      "maxLength": 0,
      "id": "MultiLineVal",
      "speak": "What comments do you have?"
    }, {
      "type": "Input.Number",
      "placeholder": "Quantity",
      "min": -5,
      "max": 5,
      "value": 1,
      "id": "NumVal",
      "speak": "How many do you want?"
    }, {
      "type": "Input.Date",
      "placeholder": "Due Date",
      "id": "DateVal",
      "speak": "What is the due date?"
    }, {
      "type": "Input.Time",
      "placeholder": "Start time",
      "id": "TimeVal",
      "speak": "What time to start?"
    }, {
      "type": "TextBlock",
      "size": "medium",
      "weight": "bolder",
      "text": "Input.ChoiceSet",
      "horizontalAlignment": "center"
    }, {
      "type": "TextBlock",
      "text": "What color do you want?"
    }, {
      "type": "Input.ChoiceSet",
      "style": "compact",
      "choices": [{
        "title": "Red",
        "value": "1",
        "isSelected": true
      }, {
        "title": "Green",
        "value": "2"
      }, {
        "title": "Blue",
        "value": "3"
      }],
      "id": "SingleSelectVal"
    }, {
      "type": "TextBlock",
      "text": "What color do you want?"
    }, {
      "type": "Input.ChoiceSet",
      "choices": [{
        "title": "Red",
        "value": "1",
        "isSelected": true
      }, {
        "title": "Green",
        "value": "2"
      }, {
        "title": "Blue",
        "value": "3"
      }],
      "id": "CompactSelectVal"
    }, {
      "type": "TextBlock",
      "text": "What colors do you want?"
    }, {
      "type": "Input.ChoiceSet",
      "isMultiSelect": true,
      "choices": [{
        "title": "Red",
        "value": "1",
        "isSelected": true
      }, {
        "title": "Green",
        "value": "2"
      }, {
        "title": "Blue",
        "value": "3",
        "isSelected": true
      }],
      "id": "MultiSelectVal"
    }, {
      "type": "TextBlock",
      "size": "medium",
      "weight": "bolder",
      "text": "Input.Toggle",
      "horizontalAlignment": "center"
    }, {
      "type": "Input.Toggle",
      "title": "isCool (True/False)",
      "valueOn": "true",
      "valueOff": "false",
      "id": "IsCool",
      "speak": "Is it cool?"
    }, {
      "type": "Input.Toggle",
      "title": "IsMale (valueOn/valueOff)",
      "valueOn": "Male",
      "valueOff": "Female",
      "id": "gender",
      "speak": "Are you male or female?"
    }],
    "actions": [{
      "type": "Action.OpenUrl",
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "title": "Open Url"
    }, {
      "type": "Action.Submit",
      "data": {
        "id": "1234567890"
      },
      "title": "Submit"
    }, {
      "type": "Action.Http",
      "method": "POST",
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "body": "This is the body with Gender={{gender.value}}",
      "title": "POST"
    }, {
      "type": "Action.ShowCard",
      "card": {
        "type": "AdaptiveCard",
        "body": [{
          "type": "TextBlock",
          "isSubtle": true,
          "text": "Seattle vs Panthers"
        }, {
          "type": "ColumnSet",
          "columns": [{
            "type": "Column",
            "size": "auto",
            "items": [{
              "type": "Image",
              "size": "small",
              "url": "https://www.bing.com/th?id=AR_3934aff63dd6ff941034090a4b9d12e1&w=50&h=50&dpr=2&pid=AppEx",
              "horizontalAlignment": "center"
            }, {
              "type": "TextBlock",
              "weight": "bolder",
              "text": "CAR",
              "horizontalAlignment": "center"
            }]
          }, {
            "type": "Column",
            "size": "stretch",
            "items": [{
              "type": "TextBlock",
              "text": "Dec 4",
              "horizontalAlignment": "center"
            }, {
              "type": "TextBlock",
              "text": "Final",
              "horizontalAlignment": "center"
            }, {
              "type": "TextBlock",
              "size": "large",
              "text": "7 - 40",
              "horizontalAlignment": "center"
            }]
          }, {
            "type": "Column",
            "size": "auto",
            "items": [{
              "type": "Image",
              "size": "small",
              "url": "https://www.bing.com/th?id=AR_95e44d654968e8de2336993a1cf8a3cf&w=50&h=50&dpr=2&pid=AppEx",
              "horizontalAlignment": "center"
            }, {
              "type": "TextBlock",
              "weight": "bolder",
              "text": "SEA",
              "horizontalAlignment": "center"
            }]
          }]
        }, {
          "type": "Input.Text",
          "placeholder": "enter comment",
          "style": "text",
          "maxLength": 0,
          "id": "CommentVal"
        }],
        "actions": [{
          "type": "Action.Submit",
          "title": "OK"
        }],
        "speak": "The Seattle Seahawks beat the Carolina Panters 40-7"
      },
      "title": "Show Card"
    }]
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0NhcmRzL0lucHV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7ZUFFZTtBQUFBLFNBQU87QUFDcEIsZUFBVyxzRUFEUztBQUVwQixZQUFRLGNBRlk7QUFHcEIsZUFBVyxLQUhTO0FBSXBCLGFBQVMscUNBSlc7QUFLcEIsWUFBUSxDQUNOO0FBQ0UsY0FBUSxXQURWO0FBRUUsY0FBUSxRQUZWO0FBR0UsZ0JBQVUsUUFIWjtBQUlFLGNBQVEscUJBSlY7QUFLRSw2QkFBdUI7QUFMekIsS0FETSxFQVFOO0FBQ0UsY0FBUSxZQURWO0FBRUUscUJBQWUsTUFGakI7QUFHRSxlQUFTLE1BSFg7QUFJRSxtQkFBYSxDQUpmO0FBS0UsWUFBTSxXQUxSO0FBTUUsZUFBUztBQU5YLEtBUk0sRUFnQk47QUFDRSxjQUFRLFlBRFY7QUFFRSxxQkFBZSxVQUZqQjtBQUdFLGVBQVMsS0FIWDtBQUlFLG1CQUFhLENBSmY7QUFLRSxZQUFNLFFBTFI7QUFNRSxlQUFTO0FBTlgsS0FoQk0sRUF3Qk47QUFDRSxjQUFRLFlBRFY7QUFFRSxxQkFBZSxPQUZqQjtBQUdFLGVBQVMsT0FIWDtBQUlFLG1CQUFhLENBSmY7QUFLRSxZQUFNLFVBTFI7QUFNRSxlQUFTO0FBTlgsS0F4Qk0sRUFnQ047QUFDRSxjQUFRLFlBRFY7QUFFRSxxQkFBZSxPQUZqQjtBQUdFLGVBQVMsS0FIWDtBQUlFLG1CQUFhLENBSmY7QUFLRSxZQUFNLFFBTFI7QUFNRSxlQUFTO0FBTlgsS0FoQ00sRUF3Q047QUFDRSxjQUFRLFlBRFY7QUFFRSxxQkFBZSxVQUZqQjtBQUdFLGVBQVMsTUFIWDtBQUlFLHFCQUFlLElBSmpCO0FBS0UsbUJBQWEsQ0FMZjtBQU1FLFlBQU0sY0FOUjtBQU9FLGVBQVM7QUFQWCxLQXhDTSxFQWlETjtBQUNFLGNBQVEsY0FEVjtBQUVFLHFCQUFlLFVBRmpCO0FBR0UsYUFBTyxDQUFDLENBSFY7QUFJRSxhQUFP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LyBodHRwOi8vYWRhcHRpdmVjYXJkcy5pby9zYW1wbGVzL0lucHV0cy5odG1sXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xyXG4gIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vbWljcm9zb2Z0LmdpdGh1Yi5pby9BZGFwdGl2ZUNhcmRzL3NjaGVtYXMvYWRhcHRpdmUtY2FyZC5qc29uXCIsXHJcbiAgXCJ0eXBlXCI6IFwiQWRhcHRpdmVDYXJkXCIsXHJcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wXCIsXHJcbiAgXCJzcGVha1wiOiBcIjxzPkFkYXB0aXZlIENhcmQgaW5wdXRzIGV4YW1wbGU8L3M+XCIsXHJcbiAgXCJib2R5XCI6IFtcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgIFwic2l6ZVwiOiBcIm1lZGl1bVwiLFxyXG4gICAgICBcIndlaWdodFwiOiBcImJvbGRlclwiLFxyXG4gICAgICBcInRleHRcIjogXCJJbnB1dC5UZXh0IGVsZW1lbnRzXCIsXHJcbiAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5UZXh0XCIsXHJcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJOYW1lXCIsXHJcbiAgICAgIFwic3R5bGVcIjogXCJ0ZXh0XCIsXHJcbiAgICAgIFwibWF4TGVuZ3RoXCI6IDAsXHJcbiAgICAgIFwiaWRcIjogXCJTaW1wbGVWYWxcIixcclxuICAgICAgXCJzcGVha1wiOiBcIldoYXQgaXMgeW91ciBuYW1lP1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5UZXh0XCIsXHJcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJIb21lcGFnZVwiLFxyXG4gICAgICBcInN0eWxlXCI6IFwidXJsXCIsXHJcbiAgICAgIFwibWF4TGVuZ3RoXCI6IDAsXHJcbiAgICAgIFwiaWRcIjogXCJVcmxWYWxcIixcclxuICAgICAgXCJzcGVha1wiOiBcIldoYXQgaXMgeW91ciBob21lcGFnZT9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiSW5wdXQuVGV4dFwiLFxyXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW1haWxcIixcclxuICAgICAgXCJzdHlsZVwiOiBcImVtYWlsXCIsXHJcbiAgICAgIFwibWF4TGVuZ3RoXCI6IDAsXHJcbiAgICAgIFwiaWRcIjogXCJFbWFpbFZhbFwiLFxyXG4gICAgICBcInNwZWFrXCI6IFwiV2hhdCBpcyB5b3VyIGVtYWlsIGFkZHJlc3M/XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LlRleHRcIixcclxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBob25lXCIsXHJcbiAgICAgIFwic3R5bGVcIjogXCJ0ZWxcIixcclxuICAgICAgXCJtYXhMZW5ndGhcIjogMCxcclxuICAgICAgXCJpZFwiOiBcIlRlbFZhbFwiLFxyXG4gICAgICBcInNwZWFrXCI6IFwiV2hhdCBpcyB5b3VyIHBob25lIG51bWJlcj9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiSW5wdXQuVGV4dFwiLFxyXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiQ29tbWVudHNcIixcclxuICAgICAgXCJzdHlsZVwiOiBcInRleHRcIixcclxuICAgICAgXCJpc011bHRpbGluZVwiOiB0cnVlLFxyXG4gICAgICBcIm1heExlbmd0aFwiOiAwLFxyXG4gICAgICBcImlkXCI6IFwiTXVsdGlMaW5lVmFsXCIsXHJcbiAgICAgIFwic3BlYWtcIjogXCJXaGF0IGNvbW1lbnRzIGRvIHlvdSBoYXZlP1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5OdW1iZXJcIixcclxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlF1YW50aXR5XCIsXHJcbiAgICAgIFwibWluXCI6IC01LFxyXG4gICAgICBcIm1heFwiOiA1LFxyXG4gICAgICBcInZhbHVlXCI6IDEsXHJcbiAgICAgIFwiaWRcIjogXCJOdW1WYWxcIixcclxuICAgICAgXCJzcGVha1wiOiBcIkhvdyBtYW55IGRvIHlvdSB3YW50P1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5EYXRlXCIsXHJcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJEdWUgRGF0ZVwiLFxyXG4gICAgICBcImlkXCI6IFwiRGF0ZVZhbFwiLFxyXG4gICAgICBcInNwZWFrXCI6IFwiV2hhdCBpcyB0aGUgZHVlIGRhdGU/XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LlRpbWVcIixcclxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0IHRpbWVcIixcclxuICAgICAgXCJpZFwiOiBcIlRpbWVWYWxcIixcclxuICAgICAgXCJzcGVha1wiOiBcIldoYXQgdGltZSB0byBzdGFydD9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgIFwic2l6ZVwiOiBcIm1lZGl1bVwiLFxyXG4gICAgICBcIndlaWdodFwiOiBcImJvbGRlclwiLFxyXG4gICAgICBcInRleHRcIjogXCJJbnB1dC5DaG9pY2VTZXRcIixcclxuICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG4gICAgICBcInRleHRcIjogXCJXaGF0IGNvbG9yIGRvIHlvdSB3YW50P1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5DaG9pY2VTZXRcIixcclxuICAgICAgXCJzdHlsZVwiOiBcImNvbXBhY3RcIixcclxuICAgICAgXCJjaG9pY2VzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInRpdGxlXCI6IFwiUmVkXCIsXHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMVwiLFxyXG4gICAgICAgICAgXCJpc1NlbGVjdGVkXCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidGl0bGVcIjogXCJHcmVlblwiLFxyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkJsdWVcIixcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIzXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwiaWRcIjogXCJTaW5nbGVTZWxlY3RWYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgIFwidGV4dFwiOiBcIldoYXQgY29sb3IgZG8geW91IHdhbnQ/XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LkNob2ljZVNldFwiLFxyXG4gICAgICBcImNob2ljZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidGl0bGVcIjogXCJSZWRcIixcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIxXCIsXHJcbiAgICAgICAgICBcImlzU2VsZWN0ZWRcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkdyZWVuXCIsXHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInRpdGxlXCI6IFwiQmx1ZVwiLFxyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjNcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgXCJpZFwiOiBcIkNvbXBhY3RTZWxlY3RWYWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgIFwidGV4dFwiOiBcIldoYXQgY29sb3JzIGRvIHlvdSB3YW50P1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5DaG9pY2VTZXRcIixcclxuICAgICAgXCJpc011bHRpU2VsZWN0XCI6IHRydWUsXHJcbiAgICAgIFwiY2hvaWNlc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlJlZFwiLFxyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjFcIixcclxuICAgICAgICAgIFwiaXNTZWxlY3RlZFwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInRpdGxlXCI6IFwiR3JlZW5cIixcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidGl0bGVcIjogXCJCbHVlXCIsXHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiM1wiLFxyXG4gICAgICAgICAgXCJpc1NlbGVjdGVkXCI6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwiaWRcIjogXCJNdWx0aVNlbGVjdFZhbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuICAgICAgXCJzaXplXCI6IFwibWVkaXVtXCIsXHJcbiAgICAgIFwid2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcbiAgICAgIFwidGV4dFwiOiBcIklucHV0LlRvZ2dsZVwiLFxyXG4gICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiSW5wdXQuVG9nZ2xlXCIsXHJcbiAgICAgIFwidGl0bGVcIjogXCJpc0Nvb2wgKFRydWUvRmFsc2UpXCIsXHJcbiAgICAgIFwidmFsdWVPblwiOiBcInRydWVcIixcclxuICAgICAgXCJ2YWx1ZU9mZlwiOiBcImZhbHNlXCIsXHJcbiAgICAgIFwiaWRcIjogXCJJc0Nvb2xcIixcclxuICAgICAgXCJzcGVha1wiOiBcIklzIGl0IGNvb2w/XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LlRvZ2dsZVwiLFxyXG4gICAgICBcInRpdGxlXCI6IFwiSXNNYWxlICh2YWx1ZU9uL3ZhbHVlT2ZmKVwiLFxyXG4gICAgICBcInZhbHVlT25cIjogXCJNYWxlXCIsXHJcbiAgICAgIFwidmFsdWVPZmZcIjogXCJGZW1hbGVcIixcclxuICAgICAgXCJpZFwiOiBcImdlbmRlclwiLFxyXG4gICAgICBcInNwZWFrXCI6IFwiQXJlIHlvdSBtYWxlIG9yIGZlbWFsZT9cIlxyXG4gICAgfVxyXG4gIF0sXHJcbiAgXCJhY3Rpb25zXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiQWN0aW9uLk9wZW5VcmxcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRXCIsXHJcbiAgICAgIFwidGl0bGVcIjogXCJPcGVuIFVybFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJBY3Rpb24uU3VibWl0XCIsXHJcbiAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgXCJpZFwiOiBcIjEyMzQ1Njc4OTBcIlxyXG4gICAgICB9LFxyXG4gICAgICBcInRpdGxlXCI6IFwiU3VibWl0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwidHlwZVwiOiBcIkFjdGlvbi5IdHRwXCIsXHJcbiAgICAgIFwibWV0aG9kXCI6IFwiUE9TVFwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1FcIixcclxuICAgICAgXCJib2R5XCI6IFwiVGhpcyBpcyB0aGUgYm9keSB3aXRoIEdlbmRlcj17e2dlbmRlci52YWx1ZX19XCIsXHJcbiAgICAgIFwidGl0bGVcIjogXCJQT1NUXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwidHlwZVwiOiBcIkFjdGlvbi5TaG93Q2FyZFwiLFxyXG4gICAgICBcImNhcmRcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIkFkYXB0aXZlQ2FyZFwiLFxyXG4gICAgICAgIFwiYm9keVwiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG4gICAgICAgICAgICBcImlzU3VidGxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlNlYXR0bGUgdnMgUGFudGhlcnNcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uU2V0XCIsXHJcbiAgICAgICAgICAgIFwiY29sdW1uc1wiOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpemVcIjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkltYWdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwic21hbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPUFSXzM5MzRhZmY2M2RkNmZmOTQxMDM0MDkwYTRiOWQxMmUxJnc9NTAmaD01MCZkcHI9MiZwaWQ9QXBwRXhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJib2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJDQVJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5cIixcclxuICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcInN0cmV0Y2hcIixcclxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRGVjIDRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRmluYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCI3IC0gNDBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5cIixcclxuICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJzbWFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vdGg/aWQ9QVJfOTVlNDRkNjU0OTY4ZThkZTIzMzY5OTNhMWNmOGEzY2Ymdz01MCZoPTUwJmRwcj0yJnBpZD1BcHBFeFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcImJvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlNFQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIklucHV0LlRleHRcIixcclxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcImVudGVyIGNvbW1lbnRcIixcclxuICAgICAgICAgICAgXCJzdHlsZVwiOiBcInRleHRcIixcclxuICAgICAgICAgICAgXCJtYXhMZW5ndGhcIjogMCxcclxuICAgICAgICAgICAgXCJpZFwiOiBcIkNvbW1lbnRWYWxcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJhY3Rpb25zXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWN0aW9uLlN1Ym1pdFwiLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiT0tcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJzcGVha1wiOiBcIlRoZSBTZWF0dGxlIFNlYWhhd2tzIGJlYXQgdGhlIENhcm9saW5hIFBhbnRlcnMgNDAtN1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwidGl0bGVcIjogXCJTaG93IENhcmRcIlxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuIl19