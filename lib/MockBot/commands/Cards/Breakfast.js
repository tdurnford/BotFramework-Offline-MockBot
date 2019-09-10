"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return {
    "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
    "version": "1.0",
    "type": "AdaptiveCard",
    "body": [{
      "type": "Container",
      "items": [{
        "type": "TextBlock",
        "size": "Small",
        "weight": "Lighter",
        "text": "Alarm"
      }]
    }, {
      "type": "Container",
      "items": [{
        "type": "TextBlock",
        "size": "Large",
        "text": "Breakfast",
        "wrap": true
      }]
    }, {
      "type": "TextBlock",
      "size": "Large",
      "weight": "Bolder",
      "text": "10:00 AM"
    }, {
      "type": "Container",
      "items": [{
        "type": "TextBlock",
        "size": "Small",
        "weight": "Lighter",
        "text": "Snooze for"
      }, {
        "id": "time",
        "type": "Input.ChoiceSet",
        "value": "10m",
        "placeholder": "Placeholder text",
        "choices": [{
          "title": "10 minutes",
          "value": "10m"
        }, {
          "title": "30 minutes",
          "value": "30m"
        }]
      }]
    }],
    "actions": [{
      "type": "Action.Submit",
      "title": "Snooze"
    }, {
      "type": "Action.Submit",
      "title": "Dismiss"
    }]
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0NhcmRzL0JyZWFrZmFzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O2VBQWU7QUFBQSxTQUFPO0FBQ2xCLGVBQVcsc0VBRE87QUFFbEIsZUFBVyxLQUZPO0FBR2xCLFlBQVEsY0FIVTtBQUlsQixZQUFRLENBQ0o7QUFDSSxjQUFRLFdBRFo7QUFFSSxlQUFTLENBQ0w7QUFDSSxnQkFBUSxXQURaO0FBRUksZ0JBQVEsT0FGWjtBQUdJLGtCQUFVLFNBSGQ7QUFJSSxnQkFBUTtBQUpaLE9BREs7QUFGYixLQURJLEVBWUo7QUFDSSxjQUFRLFdBRFo7QUFFSSxlQUFTLENBQ0w7QUFDSSxnQkFBUSxXQURaO0FBRUksZ0JBQVEsT0FGWjtBQUdJLGdCQUFRLFdBSFo7QUFJSSxnQkFBUTtBQUpaLE9BREs7QUFGYixLQVpJLEVBdUJKO0FBQ0ksY0FBUSxXQURaO0FBRUksY0FBUSxPQUZaO0FBR0ksZ0JBQVUsUUFIZDtBQUlJLGNBQVE7QUFKWixLQXZCSSxFQTZCSjtBQUNJLGNBQVEsV0FEWjtBQUVJLGVBQVMsQ0FDTDtBQUNJLGdCQUFRLFdBRFo7QUFFSSxnQkFBUSxPQUZaO0FBR0ksa0JBQVUsU0FIZDtBQUlJLGdCQUFRO0FBSlosT0FESyxFQU9MO0FBQ0ksY0FBTSxNQURWO0FBRUksZ0JBQVEsaUJBRlo7QUFHSSxpQkFBUyxLQUhiO0FBSUksdUJBQWUsa0JBSm5CO0FBS0ksbUJBQVcsQ0FDUDtBQUNJLG1CQUFTLFlBRGI7QUFFSSxtQkFBUztBQUZiLFNBRE8sRUFLUDtBQUNJLG1CQUFTLFlBRGI7QUFFSSxtQkFBUztBQUZiLFNBTE87QUFMZixPQVBLO0FBRmIsS0E3QkksQ0FKVTtBQTZEbEIsZUFBVyxDQUNQO0FBQ0ksY0FBUSxlQURaO0FBRUksZUFBUztBQUZiLEtBRE8sRUFLUDtBQUNJLGNBQVEsZUFEWjtBQUVJLGVBQVM7QUFGYixLQUxPO0FBN0RPLEdBQVA7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcclxuICAgIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vbWljcm9zb2Z0LmdpdGh1Yi5pby9BZGFwdGl2ZUNhcmRzL3NjaGVtYXMvYWRhcHRpdmUtY2FyZC5qc29uXCIsXHJcbiAgICBcInZlcnNpb25cIjogXCIxLjBcIixcclxuICAgIFwidHlwZVwiOiBcIkFkYXB0aXZlQ2FyZFwiLFxyXG4gICAgXCJib2R5XCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJTbWFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiTGlnaHRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkFsYXJtXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiTGFyZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJCcmVha2Zhc3RcIixcclxuICAgICAgICAgICAgICAgICAgICBcIndyYXBcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG4gICAgICAgICAgICBcInNpemVcIjogXCJMYXJnZVwiLFxyXG4gICAgICAgICAgICBcIndlaWdodFwiOiBcIkJvbGRlclwiLFxyXG4gICAgICAgICAgICBcInRleHRcIjogXCIxMDowMCBBTVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJTbWFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiTGlnaHRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlNub296ZSBmb3JcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwidGltZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIklucHV0LkNob2ljZVNldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIxMG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGxhY2Vob2xkZXIgdGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hvaWNlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCIxMCBtaW51dGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiMTBtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIjMwIG1pbnV0ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIzMG1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiYWN0aW9uc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJBY3Rpb24uU3VibWl0XCIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTbm9vemVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJBY3Rpb24uU3VibWl0XCIsXHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXNtaXNzXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcbiJdfQ==