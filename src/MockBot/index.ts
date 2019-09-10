import { ActivityHandler, TurnContext, ActivityTypes } from 'botbuilder-core';
import commands, { Default, Value } from './commands';

export default class MockBot extends ActivityHandler {

  constructor(props) {
    super();
    const { conversationState, userState } = props;

    this.conversationState = conversationState;
    this.userState = userState;

    this.echoTypingAccessor = conversationState.createProperty('echoTyping');

    this.onMessage(async (context: TurnContext) => {
      const { activity: { attachments, text = '', value }} = context;
      const { echoTypingAccessor } = this;

      const cleanedText = text.toLowerCase().trim().replace(/\.$/, '');

      const command = commands.find(({ pattern }) => pattern.test(cleanedText));

      if (command) {
        const options = {
          args: cleanedText.split(' ').slice(1).join(' '),
          echoTypingAccessor
        };
        await command.processor(context, options);
      } else if (attachments) {

      } else if (value) {
        await Value.processor(context);
      } else {
        await Default.processor(context);
      }

      await this.conversationState.saveChanges(context);
      await this.userState.saveChanges(context);
    });

    this.onEvent(async (context: TurnContext) => {
      if (context.activity.name === 'webchat/join') {
        await context.sendActivity(`Got \`webchat/join\` event, your language is \`${ (context.activity.value || {}).language }\``);
      } else if (context.activity.name === 'webchat/ping') {
        await context.sendActivity({ type: 'event', name: 'webchat/pong', value: context.activity.value });
      }
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
