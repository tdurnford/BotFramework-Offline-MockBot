import { TurnContext } from 'botbuilder-core';

const name = 'Demo for password input sample';

const help = () => ({
  'sample:password-input': 'Demo for password input sample'
});

async function processor(context: TurnContext) {
  context.sendActivity({
    name: 'passwordInput',
    type: 'event'
  });
}

export default {
  help,
  name: 'Demo for password input sample',
  pattern: 'sample:password-input',
  processor
 }
