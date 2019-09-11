import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'image-svg': 'Show a SVG image attachment'
});

async function processor(context: TurnContext) {
  const { PUBLIC_URL } = process.env;

  await context.sendActivity({
    type: 'message',
    attachments: [
      {
        contentType: 'image/svg+xml',
        contentUrl: `${PUBLIC_URL}assets/bf_square.svg`,
        name: 'Microsoft Bot Framework'
      }
    ]
  });
}

export default {
  help,
  name: 'SVG image attachment',
  pattern: 'image-svg',
  processor
};
