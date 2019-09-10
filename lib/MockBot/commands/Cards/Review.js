"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "speak": "three of five stars, 856 reviews, Extremely Expensive. Steve G said, \"Another day, another airport\"",
    "body": [{
      "speak": "",
      "type": "ColumnSet",
      "columns": [{
        "type": "Column",
        "width": 2,
        "items": [{
          "type": "TextBlock",
          "text": "Airports"
        }, {
          "type": "TextBlock",
          "text": "Sea-Tac",
          "weight": "bolder",
          "size": "extraLarge",
          "spacing": "none"
        }, {
          "type": "TextBlock",
          "text": "3 ★★★☆☆ (856) · $$$$",
          "isSubtle": true,
          "spacing": "none"
        }, {
          "type": "TextBlock",
          "text": "**Steve G. said** \"Another day, another airport.\"",
          "size": "small",
          "wrap": true
        }]
      }, {
        "type": "Column",
        "width": 1,
        "items": [{
          "type": "Image",
          "url": "http://adaptivecards.io/content/airplane.png",
          "size": "auto"
        }]
      }]
    }],
    "actions": [{
      "type": "Action.OpenUrl",
      "title": "More Info",
      "url": "https://www.portseattle.org/sea-tac"
    }]
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL0NhcmRzL1Jldmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O2VBQWU7QUFBQSxTQUFPO0FBQ3BCLGVBQVcsb0RBRFM7QUFFcEIsWUFBUSxjQUZZO0FBR3BCLGVBQVcsS0FIUztBQUlwQixhQUFTLHVHQUpXO0FBS3BCLFlBQVEsQ0FDTjtBQUNFLGVBQVMsRUFEWDtBQUVFLGNBQVEsV0FGVjtBQUdFLGlCQUFXLENBQ1Q7QUFDRSxnQkFBUSxRQURWO0FBRUUsaUJBQVMsQ0FGWDtBQUdFLGlCQUFTLENBQ1A7QUFDRSxrQkFBUSxXQURWO0FBRUUsa0JBQVE7QUFGVixTQURPLEVBS1A7QUFDRSxrQkFBUSxXQURWO0FBRUUsa0JBQVEsU0FGVjtBQUdFLG9CQUFVLFFBSFo7QUFJRSxrQkFBUSxZQUpWO0FBS0UscUJBQVc7QUFMYixTQUxPLEVBWVA7QUFDRSxrQkFBUSxXQURWO0FBRUUsa0JBQVEsc0JBRlY7QUFHRSxzQkFBWSxJQUhkO0FBSUUscUJBQVc7QUFKYixTQVpPLEVBa0JQO0FBQ0Usa0JBQVEsV0FEVjtBQUVFLGtCQUFRLHFEQUZWO0FBR0Usa0JBQVEsT0FIVjtBQUlFLGtCQUFRO0FBSlYsU0FsQk87QUFIWCxPQURTLEVBOEJUO0FBQ0UsZ0JBQVEsUUFEVjtBQUVFLGlCQUFTLENBRlg7QUFHRSxpQkFBUyxDQUNQO0FBQ0Usa0JBQVEsT0FEVjtBQUVFLGlCQUFPLDhDQUZUO0FBR0Usa0JBQVE7QUFIVixTQURPO0FBSFgsT0E5QlM7QUFIYixLQURNLENBTFk7QUFxRHBCLGVBQVcsQ0FDVDtBQUNFLGNBQVEsZ0JBRFY7QUFFRSxlQUFTLFdBRlg7QUFHRSxhQUFPO0FBSFQsS0FEUztBQXJEUyxHQUFQO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XHJcbiAgXCIkc2NoZW1hXCI6IFwiaHR0cDovL2FkYXB0aXZlY2FyZHMuaW8vc2NoZW1hcy9hZGFwdGl2ZS1jYXJkLmpzb25cIixcclxuICBcInR5cGVcIjogXCJBZGFwdGl2ZUNhcmRcIixcclxuICBcInZlcnNpb25cIjogXCIxLjBcIixcclxuICBcInNwZWFrXCI6IFwidGhyZWUgb2YgZml2ZSBzdGFycywgODU2IHJldmlld3MsIEV4dHJlbWVseSBFeHBlbnNpdmUuIFN0ZXZlIEcgc2FpZCwgXFxcIkFub3RoZXIgZGF5LCBhbm90aGVyIGFpcnBvcnRcXFwiXCIsXHJcbiAgXCJib2R5XCI6IFtcclxuICAgIHtcclxuICAgICAgXCJzcGVha1wiOiBcIlwiLFxyXG4gICAgICBcInR5cGVcIjogXCJDb2x1bW5TZXRcIixcclxuICAgICAgXCJjb2x1bW5zXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5cIixcclxuICAgICAgICAgIFwid2lkdGhcIjogMixcclxuICAgICAgICAgIFwiaXRlbXNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiQWlycG9ydHNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU2VhLVRhY1wiLFxyXG4gICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiZXh0cmFMYXJnZVwiLFxyXG4gICAgICAgICAgICAgIFwic3BhY2luZ1wiOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiMyDimIXimIXimIXimIbimIYgKDg1NikgwrcgJCQkJFwiLFxyXG4gICAgICAgICAgICAgIFwiaXNTdWJ0bGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICBcInNwYWNpbmdcIjogXCJub25lXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxyXG4gICAgICAgICAgICAgIFwidGV4dFwiOiBcIioqU3RldmUgRy4gc2FpZCoqIFxcXCJBbm90aGVyIGRheSwgYW5vdGhlciBhaXJwb3J0LlxcXCJcIixcclxuICAgICAgICAgICAgICBcInNpemVcIjogXCJzbWFsbFwiLFxyXG4gICAgICAgICAgICAgIFwid3JhcFwiOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidHlwZVwiOiBcIkNvbHVtblwiLFxyXG4gICAgICAgICAgXCJ3aWR0aFwiOiAxLFxyXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbWFnZVwiLFxyXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2FkYXB0aXZlY2FyZHMuaW8vY29udGVudC9haXJwbGFuZS5wbmdcIixcclxuICAgICAgICAgICAgICBcInNpemVcIjogXCJhdXRvXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgXCJhY3Rpb25zXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiQWN0aW9uLk9wZW5VcmxcIixcclxuICAgICAgXCJ0aXRsZVwiOiBcIk1vcmUgSW5mb1wiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LnBvcnRzZWF0dGxlLm9yZy9zZWEtdGFjXCJcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbiJdfQ==