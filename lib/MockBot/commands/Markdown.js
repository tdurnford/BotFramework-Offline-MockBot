"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var help = function help() {
  return {
    'markdown': 'Show a Markdown-formatted message'
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
              type: 'message',
              textFormat: 'markdown',
              text: "## Basic formatting\r\n\r\nParagraphs can be written like so. A paragraph is the \r\nbasic block of Markdown. \r\nA paragraph is what text will turn \r\ninto when there is no reason it should become anything else.\r\n\r\nParagraphs must be separated by a blank line. Basic formatting of *italics* \nand **bold** is supported. This *can be **nested** like* so.\r\n\r\n## Lists\r\n\r\n### Ordered list\r\n\r\n1. one\r\n2. two\r\n3. three\r\n4. four\r\n\r\n### Unordered list\r\n\r\n* An item\r\n* Another item\r\n* Yet another item\r\n* And there's more...\r\n\r\n## Paragraph modifiers\r\n\r\n### Code block\r\n\r\n```\r\nCode blocks are very useful for developers and other \r\npeople who look at code or other things that are written \r\nin plain text. As you can see, it uses a fixed-width font.\r\n```\r\n\r\nYou can also make `inline code` to add code into other things.\r\n\r\n### Quote\r\n\r\n> Here is a quote. What this is should be self explanatory. \r\n> Quotes are automatically indented when they are used.\r\n\r\n# h1\r\n## h2\r\n### h3\r\n#### h4\r\n\r\n### Headings *can* also contain **formatting**\r\n\r\n## URLs\r\n\r\nURLs can be made in a handful of ways:\r\n\r\n* A named link to [MarkItDown][3]. The easiest way to do these is to\n select what you want to make a link and hit `Ctrl+L`.\r\n* Another named link to [MarkItDown](http://www.markitdown.net/)\r\n* Some links have [query strings](https://bing.com?q=some value) \nthat need encoding\r\n* Sometimes you just want a URL like <http://www.markitdown.net/>.\r\n\r\n## Horizontal rule\r\n\r\nA horizontal rule is a line that goes across the middle of the page.\r\n\r\n---\r\n\r\nIt's sometimes handy for breaking things up.\r\n\r\n\r\n## Table\r\n|header1|header 2|\r\n|----|----|\r\n| cell 1 | cell 2|\r\n| cell three | cell four|\r\n\r\n## Whitespace\r\n\r\nHere's a line.\r\n\r\nThis has the standard two newlines before it.\r\n\r\n\r\n\r\nThis has four newlines before it.\r\n\r\n\r\n\r\n\r\n\r\nThis has six newlines before it.\r\n\r\n<br/><br/><br/><br/>This has two newlines and four &lt;br/&gt; tags before it."
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
  name: 'Markdown',
  pattern: /markdown$/i,
  processor: processor
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2NrQm90L2NvbW1hbmRzL01hcmtkb3duLnRzIl0sIm5hbWVzIjpbImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0Iiwic2VuZEFjdGl2aXR5IiwidHlwZSIsInRleHRGb3JtYXQiLCJ0ZXh0IiwibmFtZSIsInBhdHRlcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUFPO0FBQ2xCLGdCQUFZO0FBRE0sR0FBUDtBQUFBLENBQWI7O0FBS0EsSUFBTUMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVZBLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQjtBQUN6QkMsY0FBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxjQUFBQSxVQUFVLEVBQUUsVUFGYTtBQUd6QkMsY0FBQUEsSUFBSTtBQUhxQixhQUFyQixDQUZVOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRMLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7ZUFTZTtBQUNiRCxFQUFBQSxJQUFJLEVBQUpBLElBRGE7QUFFYk8sRUFBQUEsSUFBSSxFQUFFLFVBRk87QUFHYkMsRUFBQUEsT0FBTyxFQUFFLFlBSEk7QUFJYlAsRUFBQUEsU0FBUyxFQUFUQTtBQUphLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXItY29yZSc7XHJcblxyXG5jb25zdCBoZWxwID0gKCkgPT4gKHtcclxuICAnbWFya2Rvd24nOiAnU2hvdyBhIE1hcmtkb3duLWZvcm1hdHRlZCBtZXNzYWdlJ1xyXG59KTtcclxuXHJcblxyXG5jb25zdCBwcm9jZXNzb3IgPSBhc3luYyAoY29udGV4dDogVHVybkNvbnRleHQpID0+IHtcclxuXHJcbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xyXG4gICAgdHlwZTogJ21lc3NhZ2UnLFxyXG4gICAgdGV4dEZvcm1hdDogJ21hcmtkb3duJyxcclxuICAgIHRleHQ6IGAjIyBCYXNpYyBmb3JtYXR0aW5nXFxyXFxuXFxyXFxuUGFyYWdyYXBocyBjYW4gYmUgd3JpdHRlbiBsaWtlIHNvLiBBIHBhcmFncmFwaCBpcyB0aGUgXFxyXFxuYmFzaWMgYmxvY2sgb2YgTWFya2Rvd24uIFxcclxcbkEgcGFyYWdyYXBoIGlzIHdoYXQgdGV4dCB3aWxsIHR1cm4gXFxyXFxuaW50byB3aGVuIHRoZXJlIGlzIG5vIHJlYXNvbiBpdCBzaG91bGQgYmVjb21lIGFueXRoaW5nIGVsc2UuXFxyXFxuXFxyXFxuUGFyYWdyYXBocyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGJsYW5rIGxpbmUuIEJhc2ljIGZvcm1hdHRpbmcgb2YgKml0YWxpY3MqIFxcbmFuZCAqKmJvbGQqKiBpcyBzdXBwb3J0ZWQuIFRoaXMgKmNhbiBiZSAqKm5lc3RlZCoqIGxpa2UqIHNvLlxcclxcblxcclxcbiMjIExpc3RzXFxyXFxuXFxyXFxuIyMjIE9yZGVyZWQgbGlzdFxcclxcblxcclxcbjEuIG9uZVxcclxcbjIuIHR3b1xcclxcbjMuIHRocmVlXFxyXFxuNC4gZm91clxcclxcblxcclxcbiMjIyBVbm9yZGVyZWQgbGlzdFxcclxcblxcclxcbiogQW4gaXRlbVxcclxcbiogQW5vdGhlciBpdGVtXFxyXFxuKiBZZXQgYW5vdGhlciBpdGVtXFxyXFxuKiBBbmQgdGhlcmVcXCdzIG1vcmUuLi5cXHJcXG5cXHJcXG4jIyBQYXJhZ3JhcGggbW9kaWZpZXJzXFxyXFxuXFxyXFxuIyMjIENvZGUgYmxvY2tcXHJcXG5cXHJcXG5cXGBcXGBcXGBcXHJcXG5Db2RlIGJsb2NrcyBhcmUgdmVyeSB1c2VmdWwgZm9yIGRldmVsb3BlcnMgYW5kIG90aGVyIFxcclxcbnBlb3BsZSB3aG8gbG9vayBhdCBjb2RlIG9yIG90aGVyIHRoaW5ncyB0aGF0IGFyZSB3cml0dGVuIFxcclxcbmluIHBsYWluIHRleHQuIEFzIHlvdSBjYW4gc2VlLCBpdCB1c2VzIGEgZml4ZWQtd2lkdGggZm9udC5cXHJcXG5cXGBcXGBcXGBcXHJcXG5cXHJcXG5Zb3UgY2FuIGFsc28gbWFrZSBcXGBpbmxpbmUgY29kZVxcYCB0byBhZGQgY29kZSBpbnRvIG90aGVyIHRoaW5ncy5cXHJcXG5cXHJcXG4jIyMgUXVvdGVcXHJcXG5cXHJcXG4+IEhlcmUgaXMgYSBxdW90ZS4gV2hhdCB0aGlzIGlzIHNob3VsZCBiZSBzZWxmIGV4cGxhbmF0b3J5LiBcXHJcXG4+IFF1b3RlcyBhcmUgYXV0b21hdGljYWxseSBpbmRlbnRlZCB3aGVuIHRoZXkgYXJlIHVzZWQuXFxyXFxuXFxyXFxuIyBoMVxcclxcbiMjIGgyXFxyXFxuIyMjIGgzXFxyXFxuIyMjIyBoNFxcclxcblxcclxcbiMjIyBIZWFkaW5ncyAqY2FuKiBhbHNvIGNvbnRhaW4gKipmb3JtYXR0aW5nKipcXHJcXG5cXHJcXG4jIyBVUkxzXFxyXFxuXFxyXFxuVVJMcyBjYW4gYmUgbWFkZSBpbiBhIGhhbmRmdWwgb2Ygd2F5czpcXHJcXG5cXHJcXG4qIEEgbmFtZWQgbGluayB0byBbTWFya0l0RG93bl1bM10uIFRoZSBlYXNpZXN0IHdheSB0byBkbyB0aGVzZSBpcyB0b1xcbiBzZWxlY3Qgd2hhdCB5b3Ugd2FudCB0byBtYWtlIGEgbGluayBhbmQgaGl0IFxcYEN0cmwrTFxcYC5cXHJcXG4qIEFub3RoZXIgbmFtZWQgbGluayB0byBbTWFya0l0RG93bl0oaHR0cDovL3d3dy5tYXJraXRkb3duLm5ldC8pXFxyXFxuKiBTb21lIGxpbmtzIGhhdmUgW3F1ZXJ5IHN0cmluZ3NdKGh0dHBzOi8vYmluZy5jb20/cT1zb21lIHZhbHVlKSBcXG50aGF0IG5lZWQgZW5jb2RpbmdcXHJcXG4qIFNvbWV0aW1lcyB5b3UganVzdCB3YW50IGEgVVJMIGxpa2UgPGh0dHA6Ly93d3cubWFya2l0ZG93bi5uZXQvPi5cXHJcXG5cXHJcXG4jIyBIb3Jpem9udGFsIHJ1bGVcXHJcXG5cXHJcXG5BIGhvcml6b250YWwgcnVsZSBpcyBhIGxpbmUgdGhhdCBnb2VzIGFjcm9zcyB0aGUgbWlkZGxlIG9mIHRoZSBwYWdlLlxcclxcblxcclxcbi0tLVxcclxcblxcclxcbkl0XFwncyBzb21ldGltZXMgaGFuZHkgZm9yIGJyZWFraW5nIHRoaW5ncyB1cC5cXHJcXG5cXHJcXG5cXHJcXG4jIyBUYWJsZVxcclxcbnxoZWFkZXIxfGhlYWRlciAyfFxcclxcbnwtLS0tfC0tLS18XFxyXFxufCBjZWxsIDEgfCBjZWxsIDJ8XFxyXFxufCBjZWxsIHRocmVlIHwgY2VsbCBmb3VyfFxcclxcblxcclxcbiMjIFdoaXRlc3BhY2VcXHJcXG5cXHJcXG5IZXJlXFwncyBhIGxpbmUuXFxyXFxuXFxyXFxuVGhpcyBoYXMgdGhlIHN0YW5kYXJkIHR3byBuZXdsaW5lcyBiZWZvcmUgaXQuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuVGhpcyBoYXMgZm91ciBuZXdsaW5lcyBiZWZvcmUgaXQuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuVGhpcyBoYXMgc2l4IG5ld2xpbmVzIGJlZm9yZSBpdC5cXHJcXG5cXHJcXG48YnIvPjxici8+PGJyLz48YnIvPlRoaXMgaGFzIHR3byBuZXdsaW5lcyBhbmQgZm91ciAmbHQ7YnIvJmd0OyB0YWdzIGJlZm9yZSBpdC5gXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGVscCxcclxuICBuYW1lOiAnTWFya2Rvd24nLFxyXG4gIHBhdHRlcm46IC9tYXJrZG93biQvaSxcclxuICBwcm9jZXNzb3JcclxufVxyXG4iXX0=