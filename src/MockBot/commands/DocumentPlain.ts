import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'document-plain': 'Show a plain document as attachment'
});

async function processor(context: TurnContext) {

  await context.sendActivity({
    type: 'message',
    attachments: [{
      contentType: 'text/plain',
      contentUrl: `./assets/test.txt`,
      name: 'test.txt'
    }]
  });
}

export default {
  help,
  name: 'Plain document attachment',
  pattern: /$document-plain/i,
  processor
}
