import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'text': 'Show a plain text message without rendering Markdown'
});

const processor = async (context: TurnContext) => {
  await context.sendActivity({
    text: '** Plain text **\r\n\r\nLine 1\r\nLine 2\r\nLine 3',
    textFormat: 'plain',
  });
};

export default {
  help,
  name: 'Plain text message',
  pattern: /text$/i,
  processor
}
