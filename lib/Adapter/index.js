"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDirectLine = exports.default = exports.BOT_PROFILE = exports.USER_PROFILE = void 0;

var _botframeworkDirectlinejs = require("botframework-directlinejs");

var _botbuilderCore = require("botbuilder-core");

var _observable = _interopRequireDefault(require("core-js/features/observable"));

var _MockBot = _interopRequireDefault(require("../MockBot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var USER_PROFILE = {
  id: 'user',
  name: 'user',
  role: 'user'
};
exports.USER_PROFILE = USER_PROFILE;
var BOT_PROFILE = {
  id: 'bot',
  name: 'bot',
  role: 'bot'
};
/**
 * Custom BotAdapter used for deploying a bot in a browser.
 */

exports.BOT_PROFILE = BOT_PROFILE;

var WebChatAdapter =
/*#__PURE__*/
function (_BotAdapter) {
  _inherits(WebChatAdapter, _BotAdapter);

  function WebChatAdapter() {
    var _this;

    _classCallCheck(this, WebChatAdapter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebChatAdapter).call(this));
    _this.botConnection = {
      connectionStatus$: new _observable.default(function (observer) {
        observer.next(_botframeworkDirectlinejs.ConnectionStatus.Uninitialized);
        observer.next(_botframeworkDirectlinejs.ConnectionStatus.Connecting);
        observer.next(_botframeworkDirectlinejs.ConnectionStatus.Online);
      }),
      activity$: new _observable.default(function (observer) {
        _this.activityObserver = observer;
      }),
      end: function end() {
        // The React component was called to unmount:
        // https://github.com/Microsoft/BotFramework-WebChat/blob/57360e4df92e041d5b0fd4810c1abf96621b5283/src/Chat.tsx#L237-L247
        // Developers will need to decide what behavior the component should implement.
        // For this sample, this.botConnection.componentWillUnmount() and this.botConnection.end()
        // is never called.
        console.log('this.botConnection.componentWillUnmount() called.');
      },
      getSessionId: function getSessionId() {
        return new _observable.default(function (observer) {
          return observer.complete();
        });
      },
      postActivity: function postActivity(activity) {
        var id = Date.now() + Math.random().toString(36);
        return new _observable.default(function (observer) {
          var serverActivity = _objectSpread({}, activity, {
            id: id,
            conversation: {
              id: 'bot'
            },
            channelId: 'WebChat',
            recipient: BOT_PROFILE,
            timestamp: new Date().toISOString()
          });

          _this.onReceive(serverActivity).then(function () {
            observer.next(id);
            observer.complete();

            _this.activityObserver.next(serverActivity);
          });
        });
      }
    };
    return _this;
  }
  /**
   * This WebChatAdapter implements the sendActivities method which is called by the TurnContext class.
   * It's also possible to write a custom TurnContext with different methods of accessing an adapter.
   * @param {TurnContext} context
   * @param {Activity[]} activities
   */


  _createClass(WebChatAdapter, [{
    key: "sendActivities",
    value: function () {
      var _sendActivities = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context, activities) {
        var _this2 = this;

        var activityData, sentActivities;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                activityData = {
                  channelId: 'webchat-adapter',
                  conversation: {
                    id: 'bot'
                  },
                  from: BOT_PROFILE,
                  recipient: USER_PROFILE,
                  timestamp: new Date().toISOString()
                };
                sentActivities = activities.map(function (activity) {
                  return _objectSpread({}, activity, {}, activityData, {
                    id: Date.now() + Math.random().toString(36)
                  });
                });
                return _context.abrupt("return", sentActivities.map(function (activity) {
                  var id = activity.id;

                  _this2.activityObserver.next(activity);

                  return {
                    id: id
                  };
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function sendActivities(_x, _x2) {
        return _sendActivities.apply(this, arguments);
      }

      return sendActivities;
    }()
    /**
     * Registers the business logic for the adapter, it takes a handler that takes a TurnContext object as a parameter.
     * @param {function} logic The driver code of the developer's bot application. This code receives and responds to user messages.
    */

  }, {
    key: "processActivity",
    value: function processActivity(logic) {
      this.logic = logic;
      return this;
    }
    /**
     * Runs the bot's middleware pipeline in addition to any business logic, if `this.logic` is found.
     * @param {Activity} activity
     */

  }, {
    key: "onReceive",
    value: function onReceive(activity) {
      var context = new _botbuilderCore.TurnContext(this, activity); // Runs the middleware pipeline followed by any registered business logic.

      return this.runMiddleware(context, this.logic || function () {});
    }
  }]);

  return WebChatAdapter;
}(_botbuilderCore.BotAdapter);

exports.default = WebChatAdapter;

var createDirectLine = function createDirectLine() {
  var memory = new _botbuilderCore.MemoryStorage();
  var conversationState = new _botbuilderCore.ConversationState(memory);
  var userState = new _botbuilderCore.UserState(memory);
  var mockBot = new _MockBot.default({
    conversationState: conversationState,
    userState: userState
  });
  var mockBotAdapter = new WebChatAdapter();
  mockBotAdapter.processActivity(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(context) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return mockBot.run(context);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }());
  return mockBotAdapter.botConnection;
};

exports.createDirectLine = createDirectLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BZGFwdGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbIlVTRVJfUFJPRklMRSIsImlkIiwibmFtZSIsInJvbGUiLCJCT1RfUFJPRklMRSIsIldlYkNoYXRBZGFwdGVyIiwiYm90Q29ubmVjdGlvbiIsImNvbm5lY3Rpb25TdGF0dXMkIiwiT2JzZXJ2YWJsZSIsIm9ic2VydmVyIiwibmV4dCIsIkNvbm5lY3Rpb25TdGF0dXMiLCJVbmluaXRpYWxpemVkIiwiQ29ubmVjdGluZyIsIk9ubGluZSIsImFjdGl2aXR5JCIsImFjdGl2aXR5T2JzZXJ2ZXIiLCJlbmQiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2Vzc2lvbklkIiwiY29tcGxldGUiLCJwb3N0QWN0aXZpdHkiLCJhY3Rpdml0eSIsIkRhdGUiLCJub3ciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXJ2ZXJBY3Rpdml0eSIsImNvbnZlcnNhdGlvbiIsImNoYW5uZWxJZCIsInJlY2lwaWVudCIsInRpbWVzdGFtcCIsInRvSVNPU3RyaW5nIiwib25SZWNlaXZlIiwidGhlbiIsImNvbnRleHQiLCJhY3Rpdml0aWVzIiwiYWN0aXZpdHlEYXRhIiwiZnJvbSIsInNlbnRBY3Rpdml0aWVzIiwibWFwIiwibG9naWMiLCJUdXJuQ29udGV4dCIsInJ1bk1pZGRsZXdhcmUiLCJCb3RBZGFwdGVyIiwiY3JlYXRlRGlyZWN0TGluZSIsIm1lbW9yeSIsIk1lbW9yeVN0b3JhZ2UiLCJjb252ZXJzYXRpb25TdGF0ZSIsIkNvbnZlcnNhdGlvblN0YXRlIiwidXNlclN0YXRlIiwiVXNlclN0YXRlIiwibW9ja0JvdCIsIk1vY2tCb3QiLCJtb2NrQm90QWRhcHRlciIsInByb2Nlc3NBY3Rpdml0eSIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFlBQVksR0FBRztBQUFFQyxFQUFBQSxFQUFFLEVB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Q0FBaEI7QUFFQSxNQUFNSSxjQUFjLEdBQUcsSUFBSW5ELGNBQUosRUFBdkI7QUFFQW1ELEVBQUFBLGNBQWMsQ0FBQ0MsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQStCLGtCQUFPcEIsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDckJpQixPQUFPLENBQUNJLEdBQVIsQ0FBWXJCLE9BQVosQ0FEcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQSxTQUFPbUIsY0FBYyxDQUFDbEQsYUFBdEI7QUFDSCxDQWRNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuaW1wb3J0IHsgQ29ubmVjdGlvblN0YXR1cyB9IGZyb20gJ2JvdGZyYW1ld29yay1kaXJlY3RsaW5lanMnO1xyXG5pbXBvcnQgeyBCb3RBZGFwdGVyLCBDb252ZXJzYXRpb25TdGF0ZSwgTWVtb3J5U3RvcmFnZSwgVHVybkNvbnRleHQsIFVzZXJTdGF0ZSB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJ2NvcmUtanMvZmVhdHVyZXMvb2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgTW9ja0JvdCBmcm9tICcuLi9Nb2NrQm90JztcclxuXHJcbmV4cG9ydCBjb25zdCBVU0VSX1BST0ZJTEUgPSB7IGlkOiAndXNlcicsIG5hbWU6ICd1c2VyJywgcm9sZTogJ3VzZXInIH07XHJcbmV4cG9ydCBjb25zdCBCT1RfUFJPRklMRSA9IHsgaWQ6ICdib3QnLCBuYW1lOiAnYm90Jywgcm9sZTogJ2JvdCcgfTtcclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gQm90QWRhcHRlciB1c2VkIGZvciBkZXBsb3lpbmcgYSBib3QgaW4gYSBicm93c2VyLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViQ2hhdEFkYXB0ZXIgZXh0ZW5kcyBCb3RBZGFwdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm90Q29ubmVjdGlvbiA9IHtcclxuICAgICAgICAgICAgY29ubmVjdGlvblN0YXR1cyQ6IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoQ29ubmVjdGlvblN0YXR1cy5VbmluaXRpYWxpemVkKTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoQ29ubmVjdGlvblN0YXR1cy5Db25uZWN0aW5nKTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoQ29ubmVjdGlvblN0YXR1cy5PbmxpbmUpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYWN0aXZpdHkkOiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5T2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGVuZCgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBSZWFjdCBjb21wb25lbnQgd2FzIGNhbGxlZCB0byB1bm1vdW50OlxyXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9Cb3RGcmFtZXdvcmstV2ViQ2hhdC9ibG9iLzU3MzYwZTRkZjkyZTA0MWQ1YjBmZDQ4MTBjMWFiZjk2NjIxYjUyODMvc3JjL0NoYXQudHN4I0wyMzctTDI0N1xyXG4gICAgICAgICAgICAgICAgLy8gRGV2ZWxvcGVycyB3aWxsIG5lZWQgdG8gZGVjaWRlIHdoYXQgYmVoYXZpb3IgdGhlIGNvbXBvbmVudCBzaG91bGQgaW1wbGVtZW50LlxyXG4gICAgICAgICAgICAgICAgLy8gRm9yIHRoaXMgc2FtcGxlLCB0aGlzLmJvdENvbm5lY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQoKSBhbmQgdGhpcy5ib3RDb25uZWN0aW9uLmVuZCgpXHJcbiAgICAgICAgICAgICAgICAvLyBpcyBuZXZlciBjYWxsZWQuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5ib3RDb25uZWN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KCkgY2FsbGVkLicpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRTZXNzaW9uSWQ6ICgpID0+IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IG9ic2VydmVyLmNvbXBsZXRlKCkpLFxyXG4gICAgICAgICAgICBwb3N0QWN0aXZpdHk6IGFjdGl2aXR5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyQWN0aXZpdHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFjdGl2aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uOiB7IGlkOiAnYm90JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsSWQ6ICdXZWJDaGF0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50OiBCT1RfUFJPRklMRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUmVjZWl2ZShzZXJ2ZXJBY3Rpdml0eSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eU9ic2VydmVyLm5leHQoc2VydmVyQWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBXZWJDaGF0QWRhcHRlciBpbXBsZW1lbnRzIHRoZSBzZW5kQWN0aXZpdGllcyBtZXRob2Qgd2hpY2ggaXMgY2FsbGVkIGJ5IHRoZSBUdXJuQ29udGV4dCBjbGFzcy5cclxuICAgICAqIEl0J3MgYWxzbyBwb3NzaWJsZSB0byB3cml0ZSBhIGN1c3RvbSBUdXJuQ29udGV4dCB3aXRoIGRpZmZlcmVudCBtZXRob2RzIG9mIGFjY2Vzc2luZyBhbiBhZGFwdGVyLlxyXG4gICAgICogQHBhcmFtIHtUdXJuQ29udGV4dH0gY29udGV4dFxyXG4gICAgICogQHBhcmFtIHtBY3Rpdml0eVtdfSBhY3Rpdml0aWVzXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNlbmRBY3Rpdml0aWVzKGNvbnRleHQsIGFjdGl2aXRpZXMpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZpdHlEYXRhID0ge1xyXG4gICAgICAgICAgICBjaGFubmVsSWQ6ICd3ZWJjaGF0LWFkYXB0ZXInLFxyXG4gICAgICAgICAgICBjb252ZXJzYXRpb246IHsgaWQ6ICdib3QnIH0sXHJcbiAgICAgICAgICAgIGZyb206IEJPVF9QUk9GSUxFLFxyXG4gICAgICAgICAgICByZWNpcGllbnQ6IFVTRVJfUFJPRklMRSxcclxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBzZW50QWN0aXZpdGllcyA9IGFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+ICAoeyAuLi5hY3Rpdml0eSwgLi4uYWN0aXZpdHlEYXRhLCBpZDogRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlbnRBY3Rpdml0aWVzLm1hcChhY3Rpdml0eSA9PiB7IFxyXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBhY3Rpdml0eTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlPYnNlcnZlci5uZXh0KGFjdGl2aXR5KVxyXG4gICAgICAgICAgICByZXR1cm4geyBpZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgdGhlIGJ1c2luZXNzIGxvZ2ljIGZvciB0aGUgYWRhcHRlciwgaXQgdGFrZXMgYSBoYW5kbGVyIHRoYXQgdGFrZXMgYSBUdXJuQ29udGV4dCBvYmplY3QgYXMgYSBwYXJhbWV0ZXIuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsb2dpYyBUaGUgZHJpdmVyIGNvZGUgb2YgdGhlIGRldmVsb3BlcidzIGJvdCBhcHBsaWNhdGlvbi4gVGhpcyBjb2RlIHJlY2VpdmVzIGFuZCByZXNwb25kcyB0byB1c2VyIG1lc3NhZ2VzLlxyXG4gICAgKi9cclxuICAgIHByb2Nlc3NBY3Rpdml0eShsb2dpYykge1xyXG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJ1bnMgdGhlIGJvdCdzIG1pZGRsZXdhcmUgcGlwZWxpbmUgaW4gYWRkaXRpb24gdG8gYW55IGJ1c2luZXNzIGxvZ2ljLCBpZiBgdGhpcy5sb2dpY2AgaXMgZm91bmQuXHJcbiAgICAgKiBAcGFyYW0ge0FjdGl2aXR5fSBhY3Rpdml0eVxyXG4gICAgICovXHJcbiAgICBvblJlY2VpdmUoYWN0aXZpdHkpIHtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFR1cm5Db250ZXh0KHRoaXMsIGFjdGl2aXR5KTtcclxuXHJcbiAgICAgICAgLy8gUnVucyB0aGUgbWlkZGxld2FyZSBwaXBlbGluZSBmb2xsb3dlZCBieSBhbnkgcmVnaXN0ZXJlZCBidXNpbmVzcyBsb2dpYy5cclxuICAgICAgICByZXR1cm4gdGhpcy5ydW5NaWRkbGV3YXJlKGNvbnRleHQsIHRoaXMubG9naWMgfHwgZnVuY3Rpb24oKSB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEaXJlY3RMaW5lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVtb3J5ID0gbmV3IE1lbW9yeVN0b3JhZ2UoKTtcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvblN0YXRlID0gbmV3IENvbnZlcnNhdGlvblN0YXRlKG1lbW9yeSk7XHJcbiAgICBjb25zdCB1c2VyU3RhdGUgPSBuZXcgVXNlclN0YXRlKG1lbW9yeSk7XHJcblxyXG4gICAgY29uc3QgbW9ja0JvdCA9IG5ldyBNb2NrQm90KHsgY29udmVyc2F0aW9uU3RhdGUsIHVzZXJTdGF0ZSB9KTtcclxuXHJcbiAgICBjb25zdCBtb2NrQm90QWRhcHRlciA9IG5ldyBXZWJDaGF0QWRhcHRlcigpO1xyXG5cclxuICAgIG1vY2tCb3RBZGFwdGVyLnByb2Nlc3NBY3Rpdml0eShhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IG1vY2tCb3QucnVuKGNvbnRleHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1vY2tCb3RBZGFwdGVyLmJvdENvbm5lY3Rpb247XHJcbn1cclxuIl19