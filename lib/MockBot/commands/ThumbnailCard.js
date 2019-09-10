"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'thumbnailcard': 'Show a thumbnail card',
    'thumbnailcard long title': 'Show a thumbnail card with a long title'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    var PUBLIC_URL, text, thumbnailCard;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            PUBLIC_URL = process.env.PUBLIC_URL;
            text = context.activity.text;
            thumbnailCard = {
              contentType: 'application/vnd.microsoft.card.thumbnail',
              content: {
                buttons: [],
                images: [{
                  alt: 'Microsoft Surface Alt',
                  url: "./assets/surface1.jpg"
                }],
                title: 'Microsoft Surface Pro'
              }
            };

            if (text.trim().toLowerCase() === 'thumbnailcard long title') {
              thumbnailCard.content.title = 'This is a ThumbnailCard with a really, really long title that is intended to test the richCardsWrapTitle style option.';
            }

            _context.next = 6;
            return context.sendActivity({
              attachments: [thumbnailCard]
            });

          case 6:
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
  name: 'Thumbnail card',
  pattern: /^thumbnailcard(\s+([\d\w]+))?(\s+([\d\w]+))?$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL1RodW1ibmFpbENhcmQudHMiXSwibmFtZXMiOlsiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJQVUJMSUNfVVJMIiwicHJvY2VzcyIsImVudiIsInRleHQiLCJhY3Rpdml0eSIsInRodW1ibmFpbENhcmQiLCJjb250ZW50VHlwZSIsImNvbnRlbnQiLCJidXR0b25zIiwiaW1hZ2VzIiwiYWx0IiwidXJsIiwidGl0bGUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJzZW5kQWN0aXZpdHkiLCJhdHRhY2htZW50cyIsIm5hbWUiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUNsQixxQkFBaUIsdUJBREM7QUFFbEIsZ0NBQTRCO0FBRlYsR0FBUDtBQUFBLENBQWI7O0FBS0EsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLFlBQUFBLFVBRFEsR0FDT0MsT0FBTyxDQUFDQyxHQURmLENBQ1JGLFVBRFE7QUFFSUcsWUFBQUEsSUFGSixHQUVjSixPQUZkLENBRVJLLFFBRlEsQ0FFSUQsSUFGSjtBQUlWRSxZQUFBQSxhQUpVLEdBSU07QUFDcEJDLGNBQUFBLFdBQVcsRUFBRSwwQ0FETztBQUVwQkMsY0FBQUEsT0FBTyxFQUFFO0FBQ1BDLGdCQUFBQSxPQUFPLEVBQUUsRUFERjtBQUVQQyxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFDUEMsa0JBQUFBLEdBQUcsRUFBRSx1QkFERTtBQUVQQyxrQkFBQUEsR0FBRztBQUZJLGlCQUFELENBRkQ7QUFNUEMsZ0JBQUFBLEtBQUssRUFBRTtBQU5BO0FBRlcsYUFKTjs7QUFnQmhCLGdCQUFJVCxJQUFJLENBQUNVLElBQUwsR0FBWUMsV0FBWixPQUE4QiwwQkFBbEMsRUFBOEQ7QUFDNURULGNBQUFBLGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQkssS0FBdEIsR0FBOEIsd0hBQTlCO0FBQ0Q7O0FBbEJlO0FBQUEsbUJBb0JWYixPQUFPLENBQUNnQixZQUFSLENBQXFCO0FBQUVDLGNBQUFBLFdBQVcsRUFBRSxDQUFDWCxhQUFEO0FBQWYsYUFBckIsQ0FwQlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVFAsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmOztlQXVCZTtBQUNiRCxFQUFBQSxJQUFJLEVBQUpBLElBRGE7QUFFYm9CLEVBQUFBLElBQUksRUFBRSxnQkFGTztBQUdiQyxFQUFBQSxPQUFPLEVBQUUsZ0RBSEk7QUFJYnBCLEVBQUFBLFNBQVMsRUFBVEE7QUFKYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyLWNvcmUnO1xyXG5cclxuY29uc3QgaGVscCA9ICgpID0+ICh7XHJcbiAgJ3RodW1ibmFpbGNhcmQnOiAnU2hvdyBhIHRodW1ibmFpbCBjYXJkJyxcclxuICAndGh1bWJuYWlsY2FyZCBsb25nIHRpdGxlJzogJ1Nob3cgYSB0aHVtYm5haWwgY2FyZCB3aXRoIGEgbG9uZyB0aXRsZSdcclxufSk7XHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGNvbnN0IHsgYWN0aXZpdHk6IHsgdGV4dCB9fSA9IGNvbnRleHQ7XHJcblxyXG4gIGNvbnN0IHRodW1ibmFpbENhcmQgPSB7XHJcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC50aHVtYm5haWwnLFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICBidXR0b25zOiBbXSxcclxuICAgICAgaW1hZ2VzOiBbe1xyXG4gICAgICAgIGFsdDogJ01pY3Jvc29mdCBTdXJmYWNlIEFsdCcsXHJcbiAgICAgICAgdXJsOiBgLi9hc3NldHMvc3VyZmFjZTEuanBnYCxcclxuICAgICAgfV0sXHJcbiAgICAgIHRpdGxlOiAnTWljcm9zb2Z0IFN1cmZhY2UgUHJvJyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh0ZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSAndGh1bWJuYWlsY2FyZCBsb25nIHRpdGxlJykge1xyXG4gICAgdGh1bWJuYWlsQ2FyZC5jb250ZW50LnRpdGxlID0gJ1RoaXMgaXMgYSBUaHVtYm5haWxDYXJkIHdpdGggYSByZWFsbHksIHJlYWxseSBsb25nIHRpdGxlIHRoYXQgaXMgaW50ZW5kZWQgdG8gdGVzdCB0aGUgcmljaENhcmRzV3JhcFRpdGxlIHN0eWxlIG9wdGlvbi4nO1xyXG4gIH1cclxuXHJcbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoeyBhdHRhY2htZW50czogW3RodW1ibmFpbENhcmRdIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGhlbHAsXHJcbiAgbmFtZTogJ1RodW1ibmFpbCBjYXJkJyxcclxuICBwYXR0ZXJuOiAvXnRodW1ibmFpbGNhcmQoXFxzKyhbXFxkXFx3XSspKT8oXFxzKyhbXFxkXFx3XSspKT8kL2ksXHJcbiAgcHJvY2Vzc29yXHJcbn1cclxuIl19