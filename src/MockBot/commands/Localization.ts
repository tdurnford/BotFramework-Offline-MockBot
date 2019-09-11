import { TurnContext } from 'botbuilder-core';

const help = () => ({
  localization: 'Find out user locale'
});

async function processor(context: TurnContext) {
  await context.sendActivity({
    type: 'message',
    textFormat: 'markdown',
    text: `You are saying in *${context.activity.locale}*`
  });
}

export default {
  help,
  name: 'Localization',
  pattern: 'localization',
  processor
};
