// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import WebChatAdapter, { createDirectLine } from './Adapter';

window['MockBotAdapter'] = {
  WebChatAdapter,
  createDirectLine
};

console.log(process.env.PUBLIC_URL);
