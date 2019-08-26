import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'videocard': 'Show a video card'
});

const processor = async (context: TurnContext) => {

  await context.sendActivity({
    type: 'message',
    attachments: [{
      contentType: 'application/vnd.microsoft.card.video',
      content: {
        title: 'Microsoft Band',
        subtitle: 'Large Video',
        text: 'No buttons, No Image, Autoloop, No Sharable',
        media: [{
          url: `./assets/msband.mp4`,
          profile: 'videocard'
        }],
        image: { url: `./assets/ms-band1.jpg` },
        autoloop: true,
        autostart: false
      }
    }]
  });
};

export default {
  help,
  name: 'Video card',
  pattern: /videocard$/i,
  processor
}
