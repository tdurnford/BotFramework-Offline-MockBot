import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'video': 'Show a video attachment of MP4',
  'video vimeo': 'Show a video attachment from Vimeo',
  'video youtube': 'Show a video attachment from YouTube'
});

async function processor(context: TurnContext, { args }: { args: string }) {
  const { PUBLIC_URL } = process.env;

  switch (args) {
    case 'vimeo':
      return await context.sendActivity({
        type: 'message',
        attachments: [{
          contentType: 'video/mp4',
          contentUrl: 'https://vimeo.com/269316124',
          name: 'Microsoft Surface Hub 2 (2018)'
        }]
      });

    case 'youtube':
      return await context.sendActivity({
        type: 'message',
        attachments: [{
          contentType: 'video/mp4',
          contentUrl: 'https://www.youtube.com/watch?v=rIJRFHDr1QE',
          name: 'Vision Keynote Highlights // Microsoft Build 2019'
        }]
      });

    default:
      return await context.sendActivity({
        type: 'message',
        attachments: [{
          contentType: 'video/mp4',
          contentUrl: `${PUBLIC_URL}assets/msband.mp4`,
          name: 'Microsoft Band 2'
        }]
      });
  }
}

export default {
  help,
  name: 'Video attachment',
  pattern: /^video(\s+([\d\w]+))?$/i,
  processor
}
