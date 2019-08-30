import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'audiocard': 'Show an audio card'
});

const processor = async (context: TurnContext) => {
  await context.sendActivity({
    attachments: [{
      contentType: 'application/vnd.microsoft.card.audio',
      content: {
        title: 'BotFramework Test',
        subtitle: 'audio test',
        text: 'No buttons, No Image, Autoloop, Sharable',
        media: [{
          profile: 'audiocard',
          url: `https://webchat-mockbot.azurewebsites.net/public/assets/bftest.mp3`
        }],
        autoloop: true,
        autostart: false
      }
    }]
  });
};

export default { 
  help,
  name: 'Audio card', 
  pattern: /audiocard$/i,
  processor
};
