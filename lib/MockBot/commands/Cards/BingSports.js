"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return {
    "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "speak": "The Seattle Seahawks beat the Carolina Panthers 40-7",
    "body": [{
      "type": "TextBlock",
      "text": "Seattle vs Panthers",
      "isSubtle": true
    }, {
      "type": "Container",
      "selectAction": {
        "type": "Action.OpenUrl",
        "url": "http://msn.com",
        "title": "Container action"
      },
      "items": [{
        "type": "ColumnSet",
        "columns": [{
          "type": "Column",
          "size": "auto",
          "items": [{
            "type": "Image",
            "url": "https://www.bing.com/th?id=AR_3934aff63dd6ff941034090a4b9d12e1&w=50&h=50&dpr=2&pid=AppEx",
            "size": "small",
            "horizontalAlignment": "center",
            "selectAction": {
              "type": "Action.OpenUrl",
              "url": "http://so.cl",
              "title": "Image action"
            }
          }, {
            "type": "TextBlock",
            "text": "CAR",
            "horizontalAlignment": "center",
            "size": "normal",
            "weight": "bolder"
          }],
          "selectAction": {
            "type": "Action.OpenUrl",
            "title": "Column action",
            "url": "http://msnbc.com"
          }
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
            "text": "7 - 40",
            "size": "large",
            "horizontalAlignment": "center"
          }]
        }, {
          "type": "Column",
          "size": "auto",
          "items": [{
            "type": "Image",
            "url": "https://www.bing.com/th?id=AR_95e44d654968e8de2336993a1cf8a3cf&w=50&h=50&dpr=2&pid=AppEx",
            "size": "small",
            "horizontalAlignment": "center"
          }, {
            "type": "TextBlock",
            "text": "SEA",
            "horizontalAlignment": "center",
            "size": "normal",
            "weight": "bolder"
          }]
        }]
      }]
    }]
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0NhcmRzL0JpbmdTcG9ydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztlQUFlO0FBQUEsU0FBTztBQUNwQixlQUFXLHNFQURTO0FBRXBCLFlBQVEsY0FGWTtBQUdwQixlQUFXLEtBSFM7QUFJcEIsYUFBUyxzREFKVztBQUtwQixZQUFRLENBQ047QUFDRSxjQUFRLFdBRFY7QUFFRSxjQUFRLHFCQUZWO0FBR0Usa0JBQVk7QUFIZCxLQURNLEVBTU47QUFDRSxjQUFRLFdBRFY7QUFFRSxzQkFBZ0I7QUFDZCxnQkFBUSxnQkFETTtBQUVkLGVBQU8sZ0JBRk87QUFHZCxpQkFBUztBQUhLLE9BRmxCO0FBT0UsZUFBUyxDQUNQO0FBQ0UsZ0JBQVEsV0FEVjtBQUVFLG1CQUFXLENBQ1Q7QUFDRSxrQkFBUSxRQURWO0FBRUUsa0JBQVEsTUFGVjtBQUdFLG1CQUFTLENBQ1A7QUFDRSxvQkFBUSxPQURWO0FBRUUsbUJBQU8sMEZBRlQ7QUFHRSxvQkFBUSxPQUhWO0FBSUUsbUNBQXVCLFFBSnpCO0FBS0UsNEJBQWdCO0FBQ2Qsc0JBQVEsZ0JBRE07QUFFZCxxQkFBTyxjQUZPO0FBR2QsdUJBQVM7QUFISztBQUxsQixXQURPLEVBWVA7QUFDRSxvQkFBUSxXQURWO0FBRUUsb0JBQVEsS0FGVjtBQUdFLG1DQUF1QixRQUh6QjtBQUlFLG9CQUFRLFFBSlY7QUFLRSxzQkFBVTtBQUxaLFdBWk8sQ0FIWDtBQXVCRSwwQkFBZ0I7QUFDZCxvQkFBUSxnQkFETTtBQUVkLHFCQUFTLGVBRks7QUFHZCxtQkFBTztBQUhPO0FBdkJsQixTQURTLEVBOEJUO0FBQ0Usa0JBQVEsUUFEVjtBQUVFLGtCQUFRLFNBRlY7QUFHRSxtQkFBUyxDQUNQO0FBQ0Usb0JBQVEsV0FEVjtBQUVFLG9CQUFRLE9BRlY7QUFHRSxtQ0FBdUI7QUFIekIsV0FETyxFQU1QO0FBQ0Usb0JBQVEsV0FEVjtBQUVFLG9CQUFRLE9BRlY7QUFHRSxtQ0FBdUI7QUFIekIsV0FOTyxFQVdQO0FBQ0Usb0JBQVEsV0FEVjtBQUVFLG9CQUFRLFFBRlY7QUFHRSxvQkFBUSxPQUhWO0FBSUUsbUNBQXVCO0FBSnpCLFdBWE87QUFIWCxTQTlCUyxFQW9EVDtBQUNFLGtCQUFRLFFBRFY7QUFFRSxrQkFBUSxNQUZWO0FBR0UsbUJBQVMsQ0FDUDtBQUNFLG9CQUFRLE9BRFY7QUFFRSxtQkFBTywwRkFGVDtBQUdFLG9CQUFRLE9BSFY7QUFJRSxtQ0FBdUI7QUFKekIsV0FETyxFQU9QO0FBQ0Usb0JBQVEsV0FEVjtBQUVFLG9CQUFRLEtBRlY7QUFHRSxtQ0FBdUIsUUFIekI7QUFJRSxvQkFBUSxRQUpWO0FBS0Usc0JBQVU7QUFMWixXQVBPO0FBSFgsU0FwRFM7QUFGYixPQURPO0FBUFgsS0FOTTtBQUxZLEdBQVA7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcclxuICBcIiRzY2hlbWFcIjogXCJodHRwczovL21pY3Jvc29mdC5naXRodWIuaW8vQWRhcHRpdmVDYXJkcy9zY2hlbWFzL2FkYXB0aXZlLWNhcmQuanNvblwiLFxyXG4gIFwidHlwZVwiOiBcIkFkYXB0aXZlQ2FyZFwiLFxyXG4gIFwidmVyc2lvblwiOiBcIjEuMFwiLFxyXG4gIFwic3BlYWtcIjogXCJUaGUgU2VhdHRsZSBTZWFoYXdrcyBiZWF0IHRoZSBDYXJvbGluYSBQYW50aGVycyA0MC03XCIsXHJcbiAgXCJib2R5XCI6IFtcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgIFwidGV4dFwiOiBcIlNlYXR0bGUgdnMgUGFudGhlcnNcIixcclxuICAgICAgXCJpc1N1YnRsZVwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcInR5cGVcIjogXCJDb250YWluZXJcIixcclxuICAgICAgXCJzZWxlY3RBY3Rpb25cIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIkFjdGlvbi5PcGVuVXJsXCIsXHJcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vbXNuLmNvbVwiLFxyXG4gICAgICAgIFwidGl0bGVcIjogXCJDb250YWluZXIgYWN0aW9uXCJcclxuICAgICAgfSxcclxuICAgICAgXCJpdGVtc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uU2V0XCIsXHJcbiAgICAgICAgICBcImNvbHVtbnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPUFSXzM5MzRhZmY2M2RkNmZmOTQxMDM0MDkwYTRiOWQxMmUxJnc9NTAmaD01MCZkcHI9MiZwaWQ9QXBwRXhcIixcclxuICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwic21hbGxcIixcclxuICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0QWN0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJBY3Rpb24uT3BlblVybFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3NvLmNsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkltYWdlIGFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJDQVJcIixcclxuICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcInNlbGVjdEFjdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJBY3Rpb24uT3BlblVybFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbHVtbiBhY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL21zbmJjLmNvbVwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwic3RyZXRjaFwiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRGVjIDRcIixcclxuICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJGaW5hbFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjcgLSA0MFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJsYXJnZVwiLFxyXG4gICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIkNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICBcIml0ZW1zXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW1hZ2VcIixcclxuICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5iaW5nLmNvbS90aD9pZD1BUl85NWU0NGQ2NTQ5NjhlOGRlMjMzNjk5M2ExY2Y4YTNjZiZ3PTUwJmg9NTAmZHByPTImcGlkPUFwcEV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU0VBXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuIl19