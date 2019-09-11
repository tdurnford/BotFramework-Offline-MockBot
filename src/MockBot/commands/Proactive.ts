import { TurnContext } from 'botbuilder-core';
import sleep from '../utils/sleep';

const WAIT_INTERVAL = 5000;

const help = () => ({
  proactive: 'Proactively send a message later'
});

async function processor(context: TurnContext) {
  const reference = TurnContext.getConversationReference(context.activity);

  await context.sendActivity({
    type: 'message',
    text: `Will send a proactive message after ${WAIT_INTERVAL /
      1000} seconds. Attached is the JSON of the conversation \`reference\` that will be used to reinstantiate the \`TurnContext\`.`,
    attachments: [
      {
        content: `\`\`\`\n${JSON.stringify(reference, null, 2)}\n\`\`\``,
        contentType: 'text/markdown'
      }
    ]
  });

  (async function(reference) {
    // We specifically write this block of code to show how proactive message should work.
    // This block of code should run under another process and it will only have knowledge of adapter setup and conversation reference.
    await sleep(WAIT_INTERVAL);

    await context.adapter.continueConversation(reference, async continuedContext => {
      await continuedContext.sendActivity({
        text: 'This is a proactive message.',
        type: 'message'
      });
    });
  })(reference);
}

export default {
  help,
  name: 'Proactive message',
  pattern: 'proactive',
  processor
};
