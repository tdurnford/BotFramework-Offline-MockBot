import { TurnContext } from 'botbuilder-core';

const help = () => ({
  signin: 'Show a signin card'
});

async function processor(context: TurnContext) {
  await context.sendActivity({
    type: 'message',
    attachments: [
      {
        contentType: 'application/vnd.microsoft.card.signin',
        content: {
          text: 'Login to signin sample',
          buttons: [
            {
              type: 'signin',
              title: 'Signin',
              value: 'https://login.live.com/'
            }
          ]
        }
      }
    ]
  });
}

export default {
  help,
  name: 'Sign-in card',
  pattern: 'signin',
  processor
};
