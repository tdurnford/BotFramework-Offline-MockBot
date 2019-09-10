"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _botbuilderCore = require("botbuilder-core");

var _commands = _interopRequireWildcard(require("./commands"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MockBot =
/*#__PURE__*/
function (_ActivityHandler) {
  _inherits(MockBot, _ActivityHandler);

  function MockBot(props) {
    var _this;

    _classCallCheck(this, MockBot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MockBot).call(this));
    var conversationState = props.conversationState,
        userState = props.userState;
    _this.conversationState = conversationState;
    _this.userState = userState;
    _this.echoTypingAccessor = conversationState.createProperty('echoTyping');

    _this.onMessage(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context) {
        var _context$activity$tex, text, command;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context$activity$tex = context.activity.text, text = _context$activity$tex === void 0 ? '' : _context$activity$tex;
                command = _commands.default.find(function (_ref2) {
                  var pattern = _ref2.pattern;
                  return pattern.test(text);
                }) || _commands.Default;
                _context.next = 4;
                return command.processor(context, {
                  echoTypingAccessor: _this.echoTypingAccessor
                });

              case 4:
                _context.next = 6;
                return _this.conversationState.saveChanges(context);

              case 6:
                _context.next = 8;
                return _this.userState.saveChanges(context);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.onUnrecognizedActivityType(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(context) {
        var type, echoTyping;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                type = context.activity.type;

                if (!(type === _botbuilderCore.ActivityTypes.Typing)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 4;
                return _this.echoTypingAccessor.get(context, false);

              case 4:
                echoTyping = _context2.sent;
                _context2.t0 = echoTyping;

                if (!_context2.t0) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 9;
                return context.sendActivity({
                  type: _botbuilderCore.ActivityTypes.Typing
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    return _this;
  }

  return MockBot;
}(_botbuilderCore.ActivityHandler);

exports.default = MockBot;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2NrQm90L2luZGV4LnRzIl0sIm5hbWVzIjpbIk1vY2tCb3QiLCJwcm9wcyIsImNvbnZlcnNhdGlvblN0YXRlIiwidXNlclN0YXRlIiwiZWNob1R5cGluZ0FjY2Vzc29yIiwiY3JlYXRlUHJvcGVydHkiLCJvbk1lc3NhZ2UiLCJjb250ZXh0IiwiYWN0aXZpdHkiLCJ0ZXh0IiwiY29tbWFuZCIsImNvbW1hbmRzIiwiZmluZCIsInBhdHRlcm4iLCJ0ZXN0IiwiRGVmYXVsdCIsInByb2Nlc3NvciIsInNhdmVDaGFuZ2VzIiwib25VbnJlY29nbml6ZWRBY3Rpdml0eVR5cGUiLCJ0eXBlIiwiQWN0aXZpdHlUeXBlcyIsIlR5cGluZyIsImdldCIsImVjaG9UeXBpbmciLCJzZW5kQWN0aXZpdHkiLCJBY3Rpdml0eUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7QUFFbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakI7QUFEaUIsUUFFVEMsaUJBRlMsR0FFd0JELEtBRnhCLENBRVRDLGlCQUZTO0FBQUEsUUFFVUMsU0FGVixHQUV3QkYsS0FGeEIsQ0FFVUUsU0FGVjtBQUlqQixVQUFLRCxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFFQSxVQUFLQyxrQkFBTCxHQUEwQkYsaUJBQWlCLENBQUNHLGNBQWxCLENBQWlDLFlBQWpDLENBQTFCOztBQUVBLFVBQUtDLFNBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFlLGlCQUFPQyxPQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FDc0JBLE9BRHRCLENBQ0xDLFFBREssQ0FDT0MsSUFEUCxFQUNPQSxJQURQLHNDQUNjLEVBRGQ7QUFFUEMsZ0JBQUFBLE9BRk8sR0FFR0Msa0JBQVNDLElBQVQsQ0FBYztBQUFBLHNCQUFHQyxPQUFILFNBQUdBLE9BQUg7QUFBQSx5QkFBaUJBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhTCxJQUFiLENBQWpCO0FBQUEsaUJBQWQsS0FBc0RNLGlCQUZ6RDtBQUFBO0FBQUEsdUJBR1BMLE9BQU8sQ0FBQ00sU0FBUixDQUFrQlQsT0FBbEIsRUFBMkI7QUFBRUgsa0JBQUFBLGtCQUFrQixFQUFFLE1BQUtBO0FBQTNCLGlCQUEzQixDQUhPOztBQUFBO0FBQUE7QUFBQSx1QkFLUCxNQUFLRixpQkFBTCxDQUF1QmUsV0FBdkIsQ0FBbUNWLE9BQW5DLENBTE87O0FBQUE7QUFBQTtBQUFBLHVCQU1QLE1BQUtKLFNBQUwsQ0FBZWMsV0FBZixDQUEyQlYsT0FBM0IsQ0FOTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNBLFVBQUtXLDBCQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBZ0Msa0JBQU9YLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1ZZLGdCQUFBQSxJQURVLEdBQ0FaLE9BREEsQ0FDdEJDLFFBRHNCLENBQ1ZXLElBRFU7O0FBQUEsc0JBRzFCQSxJQUFJLEtBQUtDLDhCQUFjQyxNQUhHO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBSUQsTUFBS2pCLGtCQUFMLENBQXdCa0IsR0FBeEIsQ0FBNEJmLE9BQTVCLEVBQXFDLEtBQXJDLENBSkM7O0FBQUE7QUFJcEJnQixnQkFBQUEsVUFKb0I7QUFBQSwrQkFLMUJBLFVBTDBCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBS05oQixPQUFPLENBQUNpQixZQUFSLENBQXFCO0FBQUVMLGtCQUFBQSxJQUFJLEVBQUVDLDhCQUFjQztBQUF0QixpQkFBckIsQ0FMTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFoQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFsQmlCO0FBMEJsQjs7O0VBNUJrQ0ksK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpdml0eUhhbmRsZXIsIFR1cm5Db250ZXh0LCBBY3Rpdml0eVR5cGVzIH0gZnJvbSAnYm90YnVpbGRlci1jb3JlJztcclxuaW1wb3J0IGNvbW1hbmRzLCB7IERlZmF1bHQgfSBmcm9tICcuL2NvbW1hbmRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vY2tCb3QgZXh0ZW5kcyBBY3Rpdml0eUhhbmRsZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGNvbnN0IHsgY29udmVyc2F0aW9uU3RhdGUsIHVzZXJTdGF0ZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgdGhpcy5jb252ZXJzYXRpb25TdGF0ZSA9IGNvbnZlcnNhdGlvblN0YXRlO1xyXG4gICAgdGhpcy51c2VyU3RhdGUgPSB1c2VyU3RhdGU7XHJcblxyXG4gICAgdGhpcy5lY2hvVHlwaW5nQWNjZXNzb3IgPSBjb252ZXJzYXRpb25TdGF0ZS5jcmVhdGVQcm9wZXJ0eSgnZWNob1R5cGluZycpO1xyXG5cclxuICAgIHRoaXMub25NZXNzYWdlKGFzeW5jIChjb250ZXh0OiBUdXJuQ29udGV4dCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGFjdGl2aXR5OiB7IHRleHQgPSAnJyB9fSA9IGNvbnRleHQ7XHJcbiAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kcy5maW5kKCh7IHBhdHRlcm4gfSkgPT4gcGF0dGVybi50ZXN0KHRleHQpKSB8fCBEZWZhdWx0O1xyXG4gICAgICBhd2FpdCBjb21tYW5kLnByb2Nlc3Nvcihjb250ZXh0LCB7IGVjaG9UeXBpbmdBY2Nlc3NvcjogdGhpcy5lY2hvVHlwaW5nQWNjZXNzb3IgfSk7XHJcblxyXG4gICAgICBhd2FpdCB0aGlzLmNvbnZlcnNhdGlvblN0YXRlLnNhdmVDaGFuZ2VzKGNvbnRleHQpO1xyXG4gICAgICBhd2FpdCB0aGlzLnVzZXJTdGF0ZS5zYXZlQ2hhbmdlcyhjb250ZXh0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub25VbnJlY29nbml6ZWRBY3Rpdml0eVR5cGUoYXN5bmMgKGNvbnRleHQ6IFR1cm5Db250ZXh0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYWN0aXZpdHk6IHsgdHlwZSB9fSA9IGNvbnRleHQ7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodHlwZSA9PT0gQWN0aXZpdHlUeXBlcy5UeXBpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IGVjaG9UeXBpbmcgPSBhd2FpdCB0aGlzLmVjaG9UeXBpbmdBY2Nlc3Nvci5nZXQoY29udGV4dCwgZmFsc2UpO1xyXG4gICAgICAgICAgZWNob1R5cGluZyAmJiBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7IHR5cGU6IEFjdGl2aXR5VHlwZXMuVHlwaW5nIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19