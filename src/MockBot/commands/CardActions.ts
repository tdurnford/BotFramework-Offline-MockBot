import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'card-actions': 'Show a suggested action with different card actions'
});

const processor = async (context: TurnContext) => {
  await context.sendActivity({
    textFormat: 'plain',
    text: 'Please select one of the card actions below',
    suggestedActions: {
      actions: [
        {
          title: '"openUrl"',
          type: 'openUrl',
          value: 'https://microsoft.com/',
        }
      ],
      // TODO: Should we fill in the "to"?
      to: []
    }
  });
};

export default {
  help,
  name: 'Suggested actions',
  pattern: /card-actions$/i,
  processor
}
