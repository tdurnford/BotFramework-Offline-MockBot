"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'receiptcard': 'Show a receipt card'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    var PUBLIC_URL;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            PUBLIC_URL = process.env.PUBLIC_URL;
            _context.next = 3;
            return context.sendActivity({
              type: 'message',
              text: '',
              attachmentLayout: 'carousel',
              attachments: [{
                contentType: 'application/vnd.microsoft.card.receipt',
                content: {
                  title: 'Surface Pro 4',
                  subtitle: 'This is the subtitle',
                  items: [{
                    title: 'Surface Pro 4',
                    subtitle: 'Surface Pro 4 is a powerful, versatile, lightweight laptop.',
                    text: 'Surface does more. Just like you. For one device that does everything, you need more than a mobile OS.',
                    image: {
                      url: "./assets/surface1.jpg",
                      alt: 'Microsoft Surface Alt',
                      tap: {
                        type: 'openUrl',
                        title: 'Tapped it!',
                        value: "./testurl1.html"
                      }
                    },
                    price: '$XXX'
                  }, {
                    title: 'Surface Pro 4 (2) - No subtitle, No text.',
                    image: {
                      url: "./assets/surface2.jpg",
                      alt: 'Microsoft Surface Alt',
                      tap: {
                        type: 'call',
                        title: 'Call back!',
                        value: '1234567890'
                      }
                    },
                    price: '$XXX'
                  }, {
                    title: 'Surface Pro 4 (3) - No subtitle, No text, No image',
                    price: '$XXX'
                  }],
                  facts: [{
                    key: 'Order Number',
                    value: 'Value 1'
                  }, {
                    key: 'Expected Delivery Time',
                    value: 'Value 2'
                  }, {
                    key: 'Payment Method',
                    value: 'Value 3'
                  }, {
                    key: 'Delivery Address',
                    value: 'Value 4'
                  }],
                  vat: '0.01',
                  total: '0.10',
                  tax: 'XXX.XX',
                  buttons: [{
                    type: 'imBack',
                    title: 'imBack Button',
                    value: 'imBack Action'
                  }, {
                    type: 'postBack',
                    title: 'postBack Button',
                    value: 'postBack Action'
                  }],
                  tap: {
                    type: 'openUrl',
                    title: 'Tapped it!',
                    value: "./testurl2.html"
                  }
                }
              }]
            });

          case 3:
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
  name: 'Receipt card',
  pattern: /receiptcard$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL1JlY2VpcHRDYXJkLnRzIl0sIm5hbWVzIjpbImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0IiwiUFVCTElDX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwidGV4dCIsImF0dGFjaG1lbnRMYXlvdXQiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudCIsInRpdGxlIiwic3VidGl0bGUiLCJpdGVtcyIsImltYWdlIiwidXJsIiwiYWx0IiwidGFwIiwidmFsdWUiLCJwcmljZSIsImZhY3RzIiwia2V5IiwidmF0IiwidG90YWwiLCJ0YXgiLCJidXR0b25zIiwibmFtZSIsInBhdHRlcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUFPO0FBQ2xCLG1CQUFlO0FBREcsR0FBUDtBQUFBLENBQWI7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLFlBQUFBLFVBRFEsR0FDT0MsT0FBTyxDQUFDQyxHQURmLENBQ1JGLFVBRFE7QUFBQTtBQUFBLG1CQUdWRCxPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLGNBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsY0FBQUEsSUFBSSxFQUFFLEVBRm1CO0FBR3pCQyxjQUFBQSxnQkFBZ0IsRUFBRSxVQUhPO0FBSXpCQyxjQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxnQkFBQUEsV0FBVyxFQUFFLHdDQUREO0FBRVpDLGdCQUFBQSxPQUFPLEVBQUU7QUFDUEMsa0JBQUFBLEtBQUssRUFBRSxlQURBO0FBRVBDLGtCQUFBQSxRQUFRLEVBQUUsc0JBRkg7QUFHUEMsa0JBQUFBLEtBQUssRUFBRSxDQUFDO0FBQ05GLG9CQUFBQSxLQUFLLEVBQUUsZUFERDtBQUVOQyxvQkFBQUEsUUFBUSxFQUFFLDZEQUZKO0FBR05OLG9CQUFBQSxJQUFJLEVBQUUsd0dBSEE7QUFJTlEsb0JBQUFBLEtBQUssRUFBRTtBQUNMQyxzQkFBQUEsR0FBRyx5QkFERTtBQUVMQyxzQkFBQUEsR0FBRyxFQUFFLHVCQUZBO0FBR0xDLHNCQUFBQSxHQUFHLEVBQUU7QUFDSFosd0JBQUFBLElBQUksRUFBRSxTQURIO0FBRUhNLHdCQUFBQSxLQUFLLEVBQUUsWUFGSjtBQUdITyx3QkFBQUEsS0FBSztBQUhGO0FBSEEscUJBSkQ7QUFhTkMsb0JBQUFBLEtBQUssRUFBRTtBQWJELG1CQUFELEVBY0o7QUFDRFIsb0JBQUFBLEtBQUssRUFBRSwyQ0FETjtBQUVERyxvQkFBQUEsS0FBSyxFQUFFO0FBQ0xDLHNCQUFBQSxHQUFHLHlCQURFO0FBRUxDLHNCQUFBQSxHQUFHLEVBQUUsdUJBRkE7QUFHTEMsc0JBQUFBLEdBQUcsRUFBRTtBQUNIWix3QkFBQUEsSUFBSSxFQUFFLE1BREg7QUFFSE0sd0JBQUFBLEtBQUssRUFBRSxZQUZKO0FBR0hPLHdCQUFBQSxLQUFLLEVBQUU7QUFISjtBQUhBLHFCQUZOO0FBV0RDLG9CQUFBQSxLQUFLLEVBQUU7QUFYTixtQkFkSSxFQTBCSjtBQUNEUixvQkFBQUEsS0FBSyxFQUFFLG9EQUROO0FBRURRLG9CQUFBQSxLQUFLLEVBQUU7QUFGTixtQkExQkksQ0FIQTtBQWlDUEMsa0JBQUFBLEtBQUssRUFBRSxDQUFDO0FBQ05DLG9CQUFBQSxHQUFHLEVBQUUsY0FEQztBQUVOSCxvQkFBQUEsS0FBSyxFQUFFO0FBRkQsbUJBQUQsRUFHSjtBQUNERyxvQkFBQUEsR0FBRyxFQUFFLHdCQURKO0FBRURILG9CQUFBQSxLQUFLLEVBQUU7QUFGTixtQkFISSxFQU1KO0FBQ0RHLG9CQUFBQSxHQUFHLEVBQUUsZ0JBREo7QUFFREgsb0JBQUFBLEtBQUssRUFBRTtBQUZOLG1CQU5JLEVBU0o7QUFDREcsb0JBQUFBLEdBQUcsRUFBRSxrQkFESjtBQUVESCxvQkFBQUEsS0FBSyxFQUFFO0FBRk4sbUJBVEksQ0FqQ0E7QUE4Q1BJLGtCQUFBQSxHQUFHLEVBQUUsTUE5Q0U7QUErQ1BDLGtCQUFBQSxLQUFLLEVBQUUsTUEvQ0E7QUFnRFBDLGtCQUFBQSxHQUFHLEVBQUUsUUFoREU7QUFpRFBDLGtCQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNScEIsb0JBQUFBLElBQUksRUFBRSxRQURFO0FBRVJNLG9CQUFBQSxLQUFLLEVBQUUsZUFGQztBQUdSTyxvQkFBQUEsS0FBSyxFQUFFO0FBSEMsbUJBQUQsRUFJTjtBQUNEYixvQkFBQUEsSUFBSSxFQUFFLFVBREw7QUFFRE0sb0JBQUFBLEtBQUssRUFBRSxpQkFGTjtBQUdETyxvQkFBQUEsS0FBSyxFQUFFO0FBSE4sbUJBSk0sQ0FqREY7QUEwRFBELGtCQUFBQSxHQUFHLEVBQUU7QUFDSFosb0JBQUFBLElBQUksRUFBRSxTQURIO0FBRUhNLG9CQUFBQSxLQUFLLEVBQUUsWUFGSjtBQUdITyxvQkFBQUEsS0FBSztBQUhGO0FBMURFO0FBRkcsZUFBRDtBQUpZLGFBQXJCLENBSFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVG5CLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7ZUE2RWU7QUFDYkQsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWI0QixFQUFBQSxJQUFJLEVBQUUsY0FGTztBQUdiQyxFQUFBQSxPQUFPLEVBQUUsZUFISTtBQUliNUIsRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAncmVjZWlwdGNhcmQnOiAnU2hvdyBhIHJlY2VpcHQgY2FyZCdcclxufSk7XHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xyXG5cclxuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XHJcbiAgICB0eXBlOiAnbWVzc2FnZScsXHJcbiAgICB0ZXh0OiAnJyxcclxuICAgIGF0dGFjaG1lbnRMYXlvdXQ6ICdjYXJvdXNlbCcsXHJcbiAgICBhdHRhY2htZW50czogW3tcclxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQucmVjZWlwdCcsXHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0aXRsZTogJ1N1cmZhY2UgUHJvIDQnLFxyXG4gICAgICAgIHN1YnRpdGxlOiAnVGhpcyBpcyB0aGUgc3VidGl0bGUnLFxyXG4gICAgICAgIGl0ZW1zOiBbe1xyXG4gICAgICAgICAgdGl0bGU6ICdTdXJmYWNlIFBybyA0JyxcclxuICAgICAgICAgIHN1YnRpdGxlOiAnU3VyZmFjZSBQcm8gNCBpcyBhIHBvd2VyZnVsLCB2ZXJzYXRpbGUsIGxpZ2h0d2VpZ2h0IGxhcHRvcC4nLFxyXG4gICAgICAgICAgdGV4dDogJ1N1cmZhY2UgZG9lcyBtb3JlLiBKdXN0IGxpa2UgeW91LiBGb3Igb25lIGRldmljZSB0aGF0IGRvZXMgZXZlcnl0aGluZywgeW91IG5lZWQgbW9yZSB0aGFuIGEgbW9iaWxlIE9TLicsXHJcbiAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IGAuL2Fzc2V0cy9zdXJmYWNlMS5qcGdgLFxyXG4gICAgICAgICAgICBhbHQ6ICdNaWNyb3NvZnQgU3VyZmFjZSBBbHQnLFxyXG4gICAgICAgICAgICB0YXA6IHtcclxuICAgICAgICAgICAgICB0eXBlOiAnb3BlblVybCcsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdUYXBwZWQgaXQhJyxcclxuICAgICAgICAgICAgICB2YWx1ZTogYC4vdGVzdHVybDEuaHRtbGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByaWNlOiAnJFhYWCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICB0aXRsZTogJ1N1cmZhY2UgUHJvIDQgKDIpIC0gTm8gc3VidGl0bGUsIE5vIHRleHQuJyxcclxuICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogYC4vYXNzZXRzL3N1cmZhY2UyLmpwZ2AsXHJcbiAgICAgICAgICAgIGFsdDogJ01pY3Jvc29mdCBTdXJmYWNlIEFsdCcsXHJcbiAgICAgICAgICAgIHRhcDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdjYWxsJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ0NhbGwgYmFjayEnLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAnMTIzNDU2Nzg5MCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByaWNlOiAnJFhYWCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICB0aXRsZTogJ1N1cmZhY2UgUHJvIDQgKDMpIC0gTm8gc3VidGl0bGUsIE5vIHRleHQsIE5vIGltYWdlJyxcclxuICAgICAgICAgIHByaWNlOiAnJFhYWCdcclxuICAgICAgICB9XSxcclxuICAgICAgICBmYWN0czogW3tcclxuICAgICAgICAgIGtleTogJ09yZGVyIE51bWJlcicsXHJcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlIDEnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAga2V5OiAnRXhwZWN0ZWQgRGVsaXZlcnkgVGltZScsXHJcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlIDInXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAga2V5OiAnUGF5bWVudCBNZXRob2QnLFxyXG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZSAzJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGtleTogJ0RlbGl2ZXJ5IEFkZHJlc3MnLFxyXG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZSA0J1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHZhdDogJzAuMDEnLFxyXG4gICAgICAgIHRvdGFsOiAnMC4xMCcsXHJcbiAgICAgICAgdGF4OiAnWFhYLlhYJyxcclxuICAgICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgICAgdHlwZTogJ2ltQmFjaycsXHJcbiAgICAgICAgICB0aXRsZTogJ2ltQmFjayBCdXR0b24nLFxyXG4gICAgICAgICAgdmFsdWU6ICdpbUJhY2sgQWN0aW9uJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHR5cGU6ICdwb3N0QmFjaycsXHJcbiAgICAgICAgICB0aXRsZTogJ3Bvc3RCYWNrIEJ1dHRvbicsXHJcbiAgICAgICAgICB2YWx1ZTogJ3Bvc3RCYWNrIEFjdGlvbidcclxuICAgICAgICB9XSxcclxuICAgICAgICB0YXA6IHtcclxuICAgICAgICAgIHR5cGU6ICdvcGVuVXJsJyxcclxuICAgICAgICAgIHRpdGxlOiAnVGFwcGVkIGl0IScsXHJcbiAgICAgICAgICB2YWx1ZTogYC4vdGVzdHVybDIuaHRtbGBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1dXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGVscCxcclxuICBuYW1lOiAnUmVjZWlwdCBjYXJkJyxcclxuICBwYXR0ZXJuOiAvcmVjZWlwdGNhcmQkL2ksXHJcbiAgcHJvY2Vzc29yXHJcbn1cclxuIl19