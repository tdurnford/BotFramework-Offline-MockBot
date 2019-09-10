"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _Adapter = _interopRequireWildcard(require("./Adapter"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
window['MockBotAdapter'] = {
  WebChatAdapter: _Adapter.default,
  createDirectLine: _Adapter.createDirectLine
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJXZWJDaGF0QWRhcHRlciIsImNyZWF0ZURpcmVjdExpbmUiXSwibWFwcGluZ3MiOiI7O0FBR0E7O0FBQ0E7O0FBRUE7Ozs7QUFOQTtBQUNBO0FBT0FBLE1BQU0sQ0FBQyxnQkFBRCxDQUFOLEdBQTJCO0FBQ3pCQyxFQUFBQSxjQUFjLEVBQWRBLGdCQUR5QjtBQUV6QkMsRUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUZ5QixDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvc3RhYmxlJztcclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xyXG5cclxuaW1wb3J0IFdlYkNoYXRBZGFwdGVyLCB7IGNyZWF0ZURpcmVjdExpbmUgfSBmcm9tICcuL0FkYXB0ZXInO1xyXG5cclxud2luZG93WydNb2NrQm90QWRhcHRlciddID0ge1xyXG4gIFdlYkNoYXRBZGFwdGVyLFxyXG4gIGNyZWF0ZURpcmVjdExpbmVcclxufTtcclxuIl19