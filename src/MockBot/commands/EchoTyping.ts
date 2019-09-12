import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'Echo Typing': 'Echoes back typing activities from the user'
});

const processor = async (context: TurnContext, { echoTypingAccessor }) => {
  const echoTyping = await echoTypingAccessor.get(context, false);

  if (echoTyping) {
    await context.sendActivity('Will stop echoing `"typing"` event');
  } else {
    await context.sendActivity('Will echo `"typing"` event');
  }

  await echoTypingAccessor.set(context, !echoTyping);
};

export default {
  help,
  name: 'Echo typing',
  pattern: /^echo-typing$/i,
  processor
};
