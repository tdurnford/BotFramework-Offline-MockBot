import sleep from '../utils/sleep';
import { TurnContext } from 'botbuilder-core';

const EVENT_ACTIVITY = {
  type: 'event',
  name: 'sample:backchannel',
  value: {
    message: 'This is one of the content of the "event" activity.'
  }
};

const help = () => ({
    'sample:backchannel': 'Demo for backchannel sample'
});

async function processor(context: TurnContext) {
  await context.sendActivity({
    type: 'message',
    text: `I am sending an \`event\` activity like below:\n\n\`\`\`\n${ JSON.stringify(EVENT_ACTIVITY, null, 2) }\n\`\`\``
  });

  await sleep(1000);

  await context.sendActivity(EVENT_ACTIVITY);
}

export default {
  help,
  name: 'Demo for backchannel sample',
  pattern: 'sample:backchannel',
  processor
 }
