import { TurnContext } from 'botbuilder-core';
import commands from './';

const processor = async (context: TurnContext) => {
  await context.sendActivity(
    `### Commands\r\n\r\n${commands
      .filter(({ help }) => help)
      .map(({ pattern }) => `- \`${pattern.source}\``)
      .sort()
      .join('\r\n')}`
  );
};

export default {
  pattern: /^help simple$/i,
  processor
};
