import { TurnContext } from 'botbuilder-core';

const processor = async (context: TurnContext) => {
  const { activity: { text }} = context;
  await context.sendActivity({
    speak: `Unknown command: I don't know ${ text }. You can say "help" to learn more.`,
    text: `Unknown command: \`${ text }\`.\r\n\r\nType \`help\` to learn more.`,
  });
};

export default {
  processor
};
