"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// http://adaptivecards.io/samples/FlightUpdate.html
var _default = function _default() {
  return {
    "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "speak": "<s>Flight KL0605 to San Fransisco has been delayed.</s><s>It will not leave until 10:10 AM.</s>",
    "body": [{
      "type": "ColumnSet",
      "columns": [{
        "type": "Column",
        "size": "auto",
        "items": [{
          "type": "Image",
          "size": "small",
          "url": "http://adaptivecards.io/content/airplane.png"
        }]
      }, {
        "type": "Column",
        "size": "stretch",
        "items": [{
          "type": "TextBlock",
          "text": "Flight Status",
          "horizontalAlignment": "right",
          "isSubtle": true
        }, {
          "type": "TextBlock",
          "text": "DELAYED",
          "horizontalAlignment": "right",
          "size": "large",
          "color": "attention"
        }]
      }]
    }, {
      "type": "ColumnSet",
      "separation": "strong",
      "columns": [{
        "type": "Column",
        "size": "stretch",
        "items": [{
          "type": "TextBlock",
          "text": "Passengers",
          "isSubtle": true
        }, {
          "type": "TextBlock",
          "text": "Sarah Hum"
        }, {
          "type": "TextBlock",
          "text": "Jeremy Goldberg"
        }, {
          "type": "TextBlock",
          "text": "Evan Litvak"
        }]
      }, {
        "type": "Column",
        "size": "auto",
        "items": [{
          "type": "TextBlock",
          "text": "Seat",
          "horizontalAlignment": "right",
          "isSubtle": true
        }, {
          "type": "TextBlock",
          "text": "14A",
          "horizontalAlignment": "right"
        }, {
          "type": "TextBlock",
          "text": "14B",
          "horizontalAlignment": "right"
        }, {
          "type": "TextBlock",
          "text": "14C",
          "horizontalAlignment": "right"
        }]
      }]
    }, {
      "type": "ColumnSet",
      "separation": "strong",
      "columns": [{
        "type": "Column",
        "size": 1,
        "items": [{
          "type": "TextBlock",
          "text": "Flight",
          "isSubtle": true
        }, {
          "type": "TextBlock",
          "text": "KL0605"
        }]
      }, {
        "type": "Column",
        "size": "auto",
        "items": [{
          "type": "TextBlock",
          "text": "Departs",
          "isSubtle": true,
          "horizontalAlignment": "center"
        }, {
          "type": "TextBlock",
          "text": "10:10 AM",
          "color": "attention",
          "weight": "bolder",
          "horizontalAlignment": "center"
        }]
      }, {
        "type": "Column",
        "size": 1,
        "items": [{
          "type": "TextBlock",
          "text": "Arrives",
          "isSubtle": true,
          "horizontalAlignment": "right"
        }, {
          "type": "TextBlock",
          "text": "12:00 AM",
          "color": "attention",
          "horizontalAlignment": "right",
          "weight": "bolder"
        }]
      }]
    }, {
      "type": "ColumnSet",
      "separation": "strong",
      "columns": [{
        "type": "Column",
        "size": 1,
        "items": [{
          "type": "TextBlock",
          "text": "Amsterdam",
          "isSubtle": true
        }, {
          "type": "TextBlock",
          "text": "AMS",
          "size": "extraLarge",
          "color": "accent"
        }]
      }, {
        "type": "Column",
        "size": "auto",
        "items": [{
          "type": "TextBlock",
          "text": " "
        }, {
          "type": "Image",
          "url": "http://adaptivecards.io/content/airplane.png",
          "size": "small"
        }]
      }, {
        "type": "Column",
        "size": 1,
        "items": [{
          "type": "TextBlock",
          "text": "San Francisco",
          "isSubtle": true,
          "horizontalAlignment": "right"
        }, {
          "type": "TextBlock",
          "text": "SFO",
          "horizontalAlignment": "right",
          "size": "extraLarge",
          "color": "accent"
        }]
      }]
    }]
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0NhcmRzL0ZsaWdodFVwZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7ZUFFZTtBQUFBLFNBQU87QUFDckIsZUFBVyxzRUFEVTtBQUVyQixZQUFRLGNBRmE7QUFHckIsYUFBUyxpR0FIWTtBQUlyQixZQUFRLENBQ1A7QUFDQyxjQUFRLFdBRFQ7QUFFQyxpQkFBVyxDQUNWO0FBQ0MsZ0JBQVEsUUFEVDtBQUVDLGdCQUFRLE1BRlQ7QUFHQyxpQkFBUyxDQUNSO0FBQ0Msa0JBQVEsT0FEVDtBQUVDLGtCQUFRLE9BRlQ7QUFHQyxpQkFBTztBQUhSLFNBRFE7QUFIVixPQURVLEVBWVY7QUFDQyxnQkFBUSxRQURUO0FBRUMsZ0JBQVEsU0FGVDtBQUdDLGlCQUFTLENBQ1I7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVEsZUFGVDtBQUdDLGlDQUF1QixPQUh4QjtBQUlDLHNCQUFZO0FBSmIsU0FEUSxFQU9SO0FBQ0Msa0JBQVEsV0FEVDtBQUVDLGtCQUFRLFNBRlQ7QUFHQyxpQ0FBdUIsT0FIeEI7QUFJQyxrQkFBUSxPQUpUO0FBS0MsbUJBQVM7QUFMVixTQVBRO0FBSFYsT0FaVTtBQUZaLEtBRE8sRUFvQ1A7QUFDQyxjQUFRLFdBRFQ7QUFFQyxvQkFBYyxRQUZmO0FBR0MsaUJBQVcsQ0FDVjtBQUNDLGdCQUFRLFFBRFQ7QUFFQyxnQkFBUSxTQUZUO0FBR0MsaUJBQVMsQ0FDUjtBQUNDLGtCQUFRLFdBRFQ7QUFFQyxrQkFBUSxZQUZUO0FBR0Msc0JBQVk7QUFIYixTQURRLEVBTVI7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVE7QUFGVCxTQU5RLEVBVVI7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVE7QUFGVCxTQVZRLEVBY1I7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVE7QUFGVCxTQWRRO0FBSFYsT0FEVSxFQXdCVjtBQUNDLGdCQUFRLFFBRFQ7QUFFQyxnQkFBUSxNQUZUO0FBR0MsaUJBQVMsQ0FDUjtBQUNDLGtCQUFRLFdBRFQ7QUFFQyxrQkFBUSxNQUZUO0FBR0MsaUNBQXVCLE9BSHhCO0FBSUMsc0JBQVk7QUFKYixTQURRLEVBT1I7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVEsS0FGVDtBQUdDLGlDQUF1QjtBQUh4QixTQVBRLEVBWVI7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVEsS0FGVDtBQUdDLGlDQUF1QjtBQUh4QixTQVpRLEVBaUJSO0FBQ0Msa0JBQVEsV0FEVDtBQUVDLGtCQUFRLEtBRlQ7QUFHQyxpQ0FBdUI7QUFIeEIsU0FqQlE7QUFIVixPQXhCVTtBQUhaLEtBcENPLEVBNEZQO0FBQ0MsY0FBUSxXQURUO0FBRUMsb0JBQWMsUUFGZjtBQUdDLGlCQUFXLENBQ1Y7QUFDQyxnQkFBUSxRQURUO0FBRUMsZ0JBQVEsQ0FGVDtBQUdDLGlCQUFTLENBQ1I7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVEsUUFGVDtBQUdDLHNCQUFZO0FBSGIsU0FEUSxFQU1SO0FBQ0Msa0JBQVEsV0FEVDtBQUVDLGtCQUFRO0FBRlQsU0FOUTtBQUhWLE9BRFUsRUFnQlY7QUFDQyxnQkFBUSxRQURUO0FBRUMsZ0JBQVEsTUFGVDtBQUdDLGlCQUFTLENBQ1I7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVEsU0FGVDtBQUdDLHNCQUFZLElBSGI7QUFJQyxpQ0FBdUI7QUFKeEIsU0FEUSxFQU9SO0FBQ0Msa0JBQVEsV0FEVDtBQUVDLGtCQUFRLFVBRlQ7QUFHQyxtQkFBUyxXQUhWO0FBSUMsb0JBQVUsUUFKWDtBQUtDLGlDQUF1QjtBQUx4QixTQVBRO0FBSFYsT0FoQlUsRUFtQ1Y7QUFDQyxnQkFBUSxRQURUO0FBRUMsZ0JBQVEsQ0FGVDtBQUdDLGlCQUFTLENBQ1I7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVEsU0FGVDtBQUdDLHNCQUFZLElBSGI7QUFJQyxpQ0FBdUI7QUFKeEIsU0FEUSxFQU9SO0FBQ0Msa0JBQVEsV0FEVDtBQUVDLGtCQUFRLFVBRlQ7QUFHQyxtQkFBUyxXQUhWO0FBSUMsaUNBQXVCLE9BSnhCO0FBS0Msb0JBQVU7QUFMWCxTQVBRO0FBSFYsT0FuQ1U7QUFIWixLQTVGTyxFQXVKUDtBQUNDLGNBQVEsV0FEVDtBQUVDLG9CQUFjLFFBRmY7QUFHQyxpQkFBVyxDQUNWO0FBQ0MsZ0JBQVEsUUFEVDtBQUVDLGdCQUFRLENBRlQ7QUFHQyxpQkFBUyxDQUNSO0FBQ0Msa0JBQVEsV0FEVDtBQUVDLGtCQUFRLFdBRlQ7QUFHQyxzQkFBWTtBQUhiLFNBRFEsRUFNUjtBQUNDLGtCQUFRLFdBRFQ7QUFFQyxrQkFBUSxLQUZUO0FBR0Msa0JBQVEsWUFIVDtBQUlDLG1CQUFTO0FBSlYsU0FOUTtBQUhWLE9BRFUsRUFrQlY7QUFDQyxnQkFBUSxRQURUO0FBRUMsZ0JBQVEsTUFGVDtBQUdDLGlCQUFTLENBQ1I7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVE7QUFGVCxTQURRLEVBS1I7QUFDQyxrQkFBTyxPQURSO0FBRUMsaUJBQU8sOENBRlI7QUFHQyxrQkFBUTtBQUhULFNBTFE7QUFIVixPQWxCVSxFQWlDVjtBQUNDLGdCQUFRLFFBRFQ7QUFFQyxnQkFBUSxDQUZUO0FBR0MsaUJBQVMsQ0FDUjtBQUNDLGtCQUFRLFdBRFQ7QUFFQyxrQkFBUSxlQUZUO0FBR0Msc0JBQVksSUFIYjtBQUlDLGlDQUF1QjtBQUp4QixTQURRLEVBT1I7QUFDQyxrQkFBUSxXQURUO0FBRUMsa0JBQVEsS0FGVDtBQUdDLGlDQUF1QixPQUh4QjtBQUlDLGtCQUFRLFlBSlQ7QUFLQyxtQkFBUztBQUxWLFNBUFE7QUFIVixPQWpDVTtBQUhaLEtBdkpPO0FBSmEsR0FBUDtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vYWRhcHRpdmVjYXJkcy5pby9zYW1wbGVzL0ZsaWdodFVwZGF0ZS5odG1sXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xyXG5cdFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vbWljcm9zb2Z0LmdpdGh1Yi5pby9BZGFwdGl2ZUNhcmRzL3NjaGVtYXMvYWRhcHRpdmUtY2FyZC5qc29uXCIsXHJcblx0XCJ0eXBlXCI6IFwiQWRhcHRpdmVDYXJkXCIsXHJcblx0XCJzcGVha1wiOiBcIjxzPkZsaWdodCBLTDA2MDUgdG8gU2FuIEZyYW5zaXNjbyBoYXMgYmVlbiBkZWxheWVkLjwvcz48cz5JdCB3aWxsIG5vdCBsZWF2ZSB1bnRpbCAxMDoxMCBBTS48L3M+XCIsXHJcblx0XCJib2R5XCI6IFtcclxuXHRcdHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uU2V0XCIsXHJcblx0XHRcdFwiY29sdW1uc1wiOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXHJcblx0XHRcdFx0XHRcInNpemVcIjogXCJhdXRvXCIsXHJcblx0XHRcdFx0XHRcIml0ZW1zXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIkltYWdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJzaXplXCI6IFwic21hbGxcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFwiOiBcImh0dHA6Ly9hZGFwdGl2ZWNhcmRzLmlvL2NvbnRlbnQvYWlycGxhbmUucG5nXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXHJcblx0XHRcdFx0XHRcInNpemVcIjogXCJzdHJldGNoXCIsXHJcblx0XHRcdFx0XHRcIml0ZW1zXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIkZsaWdodCBTdGF0dXNcIixcclxuXHRcdFx0XHRcdFx0XHRcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJyaWdodFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwiaXNTdWJ0bGVcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiREVMQVlFRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJzaXplXCI6IFwibGFyZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcImNvbG9yXCI6IFwiYXR0ZW50aW9uXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uU2V0XCIsXHJcblx0XHRcdFwic2VwYXJhdGlvblwiOiBcInN0cm9uZ1wiLFxyXG5cdFx0XHRcImNvbHVtbnNcIjogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblwiLFxyXG5cdFx0XHRcdFx0XCJzaXplXCI6IFwic3RyZXRjaFwiLFxyXG5cdFx0XHRcdFx0XCJpdGVtc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJQYXNzZW5nZXJzXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJpc1N1YnRsZVwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJTYXJhaCBIdW1cIlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiSmVyZW15IEdvbGRiZXJnXCJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIkV2YW4gTGl0dmFrXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXHJcblx0XHRcdFx0XHRcInNpemVcIjogXCJhdXRvXCIsXHJcblx0XHRcdFx0XHRcIml0ZW1zXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIlNlYXRcIixcclxuXHRcdFx0XHRcdFx0XHRcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJyaWdodFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwiaXNTdWJ0bGVcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiMTRBXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwicmlnaHRcIlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiMTRCXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwicmlnaHRcIlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiMTRDXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwicmlnaHRcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInR5cGVcIjogXCJDb2x1bW5TZXRcIixcclxuXHRcdFx0XCJzZXBhcmF0aW9uXCI6IFwic3Ryb25nXCIsXHJcblx0XHRcdFwiY29sdW1uc1wiOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXHJcblx0XHRcdFx0XHRcInNpemVcIjogMSxcclxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiRmxpZ2h0XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJpc1N1YnRsZVwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJLTDA2MDVcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcInR5cGVcIjogXCJDb2x1bW5cIixcclxuXHRcdFx0XHRcdFwic2l6ZVwiOiBcImF1dG9cIixcclxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiRGVwYXJ0c1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiaXNTdWJ0bGVcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiMTA6MTAgQU1cIixcclxuXHRcdFx0XHRcdFx0XHRcImNvbG9yXCI6IFwiYXR0ZW50aW9uXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ3ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdFx0XHRcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcInR5cGVcIjogXCJDb2x1bW5cIixcclxuXHRcdFx0XHRcdFwic2l6ZVwiOiAxLFxyXG5cdFx0XHRcdFx0XCJpdGVtc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJBcnJpdmVzXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJpc1N1YnRsZVwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIjEyOjAwIEFNXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJjb2xvclwiOiBcImF0dGVudGlvblwiLFxyXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ3ZWlnaHRcIjogXCJib2xkZXJcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInR5cGVcIjogXCJDb2x1bW5TZXRcIixcclxuXHRcdFx0XCJzZXBhcmF0aW9uXCI6IFwic3Ryb25nXCIsXHJcblx0XHRcdFwiY29sdW1uc1wiOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXHJcblx0XHRcdFx0XHRcInNpemVcIjogMSxcclxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiQW1zdGVyZGFtXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJpc1N1YnRsZVwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJBTVNcIixcclxuXHRcdFx0XHRcdFx0XHRcInNpemVcIjogXCJleHRyYUxhcmdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJjb2xvclwiOiBcImFjY2VudFwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblwiLFxyXG5cdFx0XHRcdFx0XCJzaXplXCI6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdFx0XCJpdGVtc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCIgXCJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOlwiSW1hZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFwiOiBcImh0dHA6Ly9hZGFwdGl2ZWNhcmRzLmlvL2NvbnRlbnQvYWlycGxhbmUucG5nXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJzaXplXCI6IFwic21hbGxcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcInR5cGVcIjogXCJDb2x1bW5cIixcclxuXHRcdFx0XHRcdFwic2l6ZVwiOiAxLFxyXG5cdFx0XHRcdFx0XCJpdGVtc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJTYW4gRnJhbmNpc2NvXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJpc1N1YnRsZVwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIlNGT1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJzaXplXCI6IFwiZXh0cmFMYXJnZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwiY29sb3JcIjogXCJhY2NlbnRcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0XVxyXG59KVxyXG4iXX0=