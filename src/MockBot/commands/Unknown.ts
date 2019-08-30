import { TurnContext } from 'botbuilder-core';

const name = 'Unknown type of activity or attachments';

const help = () => ({
  'unknown activity': 'Show an activity of unknown type',
  'unknown attachment': 'Show an attachment of unknown type'
});

async function processor(context: TurnContext, { args }: { args: string }) {
  switch (args) {
    case 'attachment':
      await context.sendActivity({
        type: 'message',
        attachments: [{
          contentType: 'x-unknown-attachment',
          content: {}
        }]
      });

      break;

    case 'activity':
    default:
      await context.sendActivity({
        type: 'x-unknown-activity',
        attachments: [{
          contentType: 'x-unknown-attachment',
          content: {}
        }]
      });

      break;
  }
}

export default {
  help,
  name,
  pattern: /^unknown(\s+[\d\w]+)?/i,
  processor
 }
