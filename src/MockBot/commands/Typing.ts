import { TurnContext } from 'botbuilder-core';
import sleep from '../utils/sleep';

const help = () => ({
  'typing 1': 'Send a typing indicator without ending it',
  'typing': 'Send a typing indicator and end it with a message'
});

const processor = async (context: TurnContext, { args }) => {

  switch (args) {
    case '1':
      await context.sendActivity('Typing indicator should go away after 5 seconds.');
      await context.sendActivity({ type: 'typing' });
      break;

    default:
      await context.sendActivity('I am sending typing, will send another message 2 seconds afterward.');
      await context.sendActivity({ type: 'typing' });
      await sleep();  
      await context.sendActivity('This message should stop the typing indicator.');
  }
};

export default {
  help, 
  name: 'Typing indicator', 
  pattern : /^typing(\s+[\d\w]+)?/i,
  processor
};
