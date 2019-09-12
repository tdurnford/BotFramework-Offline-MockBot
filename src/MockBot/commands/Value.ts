import { TurnContext } from 'botbuilder-core';

const processor = async (context: TurnContext) => {
  const {
    activity: { text, value }
  } = context;

  const attachments = [];

  text &&
    attachments.push({
      content: text,
      contentType: 'text/plain'
    });

  value &&
    attachments.push({
      content: `\`\`\`\n${JSON.stringify(value, null, 2)}\n\`\`\``,
      contentType: 'text/markdown'
    });

  await context.sendActivity({
    text: 'You posted',
    attachments
  });
};

export default {
  pattern: /^value$/i,
  processor
};
