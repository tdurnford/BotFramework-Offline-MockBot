import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'image': 'Show an image attachment'
});

const processor = async (context: TurnContext) => {

  await context.sendActivity({
    attachments: [{
      contentType: 'image/jpeg',
      contentUrl: `./assets/surface1.jpg`,
      name: 'Microsoft Surface'
    }]
  });
};

export default {
  help,
  name: 'Image attachment',
  pattern: /image$/i,
  processor
}
