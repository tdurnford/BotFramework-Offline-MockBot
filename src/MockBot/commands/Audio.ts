import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'audio': 'Show an audio attachment'
});

const processor = async (context: TurnContext) => {


  await context.sendActivity({
    type: 'message',
    text: '',
    attachments: [{
      contentType: 'audio/mpeg',
      contentUrl: `./assets/bftest.mp3`,
      name: 'BotFramework Test'
    }]
  });
};

export default {
  help, 
  name: 'Audio attachment',
  pattern: /^audio$/i,
  processor 
}
