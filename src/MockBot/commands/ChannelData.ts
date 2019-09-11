import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'channel-data': 'Dump channel data from the activity sent by the user'
});

const processor = async (context: TurnContext) => {
  await context.sendActivity({
    type: 'message',
    text: 'Dump of the channel data from the activity sent by the user.',
    attachments: [
      {
        content: `\`\`\`\n${JSON.stringify(context.activity.channelData, null, 2)}\n\`\`\``,
        contentType: 'text/markdown'
      }
    ]
  });
};

export default {
  help,
  name: 'Channel data',
  pattern: /channel-data$/,
  processor
};
