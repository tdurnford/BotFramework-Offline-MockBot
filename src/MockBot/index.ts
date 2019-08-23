import { ActivityHandler, TurnContext, ActivityTypes } from 'botbuilder-core';
import commands, { Default } from './commands';

export default class MockBot extends ActivityHandler {

  constructor(props) {
    super();
    const { conversationState, userState } = props;

    this.conversationState = conversationState;
    this.userState = userState;

    this.echoTypingAccessor = conversationState.createProperty('echoTyping');

    this.onMessage(async (context: TurnContext) => {
      const { activity: { text = '' }} = context;
      const command = commands.find(({ pattern }) => pattern.test(text)) || Default;
      await command.processor(context, { echoTypingAccessor: this.echoTypingAccessor });

      await this.conversationState.saveChanges(context);
      await this.userState.saveChanges(context);
    });

    this.onUnrecognizedActivityType(async (context: TurnContext) => {
      const { activity: { type }} = context;
      
      if (type === ActivityTypes.Typing) {
          const echoTyping = await this.echoTypingAccessor.get(context, false);
          echoTyping && await context.sendActivity({ type: ActivityTypes.Typing });
      }
    });
  }
}
