import { TurnContext } from 'botbuilder-core';

const processor = async (context: TurnContext) => {
  const { activity: { text }} = context;
  const unknown = text.replace(/\.$/, '');
  await context.sendActivity({
    speak: `Unknown command: I don't know ${ unknown }. You can say "help" to learn more.`,
    text: `Unknown command: \`${ unknown }\`.\r\n\r\nType \`help\` to learn more.`,
  });
};

export default {
  processor
};
