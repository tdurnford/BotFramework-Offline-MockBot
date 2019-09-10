"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'text': 'Show a plain text message without rendering Markdown'
  };
};

var processor =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(context) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return context.sendActivity({
              text: '** Plain text **\r\n\r\nLine 1\r\nLine 2\r\nLine 3',
              textFormat: 'plain'
            });

          case 2:
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
  name: 'Plain text message',
  pattern: /text$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL1RleHQudHMiXSwibmFtZXMiOlsiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJzZW5kQWN0aXZpdHkiLCJ0ZXh0IiwidGV4dEZvcm1hdCIsIm5hbWUiLCJwYXR0ZXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUNsQixZQUFRO0FBRFUsR0FBUDtBQUFBLENBQWI7O0FBSUEsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1ZBLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQjtBQUN6QkMsY0FBQUEsSUFBSSxFQUFFLG9EQURtQjtBQUV6QkMsY0FBQUEsVUFBVSxFQUFFO0FBRmEsYUFBckIsQ0FEVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUSixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O2VBT2U7QUFDYkQsRUFBQUEsSUFBSSxFQUFKQSxJQURhO0FBRWJNLEVBQUFBLElBQUksRUFBRSxvQkFGTztBQUdiQyxFQUFBQSxPQUFPLEVBQUUsUUFISTtBQUliTixFQUFBQSxTQUFTLEVBQVRBO0FBSmEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlci1jb3JlJztcclxuXHJcbmNvbnN0IGhlbHAgPSAoKSA9PiAoe1xyXG4gICd0ZXh0JzogJ1Nob3cgYSBwbGFpbiB0ZXh0IG1lc3NhZ2Ugd2l0aG91dCByZW5kZXJpbmcgTWFya2Rvd24nXHJcbn0pO1xyXG5cclxuY29uc3QgcHJvY2Vzc29yID0gYXN5bmMgKGNvbnRleHQ6IFR1cm5Db250ZXh0KSA9PiB7XHJcbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xyXG4gICAgdGV4dDogJyoqIFBsYWluIHRleHQgKipcXHJcXG5cXHJcXG5MaW5lIDFcXHJcXG5MaW5lIDJcXHJcXG5MaW5lIDMnLFxyXG4gICAgdGV4dEZvcm1hdDogJ3BsYWluJyxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBoZWxwLFxyXG4gIG5hbWU6ICdQbGFpbiB0ZXh0IG1lc3NhZ2UnLFxyXG4gIHBhdHRlcm46IC90ZXh0JC9pLFxyXG4gIHByb2Nlc3NvclxyXG59XHJcbiJdfQ==