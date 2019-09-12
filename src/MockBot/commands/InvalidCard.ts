import { TurnContext } from 'botbuilder-core';

const help = () => ({
  invalidCard: 'This is an invalid card and should fail to display.'
});

async function processor(context: TurnContext) {
  await context.sendActivity({
    type: 'message',
    attachmentLayout: 'carousel',
    attachments: [
      {
        contentType: 'application/vnd.microsoft.card.adaptive',
        content: 5
      }
    ]
  });
}

export default {
  help,
  name: 'Invalid adaptive card',
  pattern: 'invalidcard',
  processor
};
