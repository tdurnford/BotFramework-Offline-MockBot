import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'emptycard': 'Show a empty message with suggested actions'
});

const processor = async (context: TurnContext) => {
  await context.sendActivity({
    suggestedActions: {
      actions: [{
        type: 'imBack',
        title: 'Blue',
        value: 'Blue',
        image: `https://webchat-mockbot.azurewebsites.net/public/assets/square-icon.png`
      }, {
        type: 'imBack',
        title: 'Red',
        value: 'Red',
        image: `https://webchat-mockbot.azurewebsites.net/public/assets/square-icon-red.png`
      }, {
        type: 'imBack',
        title: 'Green',
        value: 'Green',
        image: `https://webchat-mockbot.azurewebsites.net/public/assets/square-icon-green.png`
      }],
      to: []
    }
  });
};

export default { 
  help,
  name: "Empty card",
  pattern: /emptycard$/i,
  processor
}
