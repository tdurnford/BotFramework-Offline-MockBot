import { TurnContext } from 'botbuilder-core';
import onErrorResumeNext from 'on-error-resume-next';

const help = () => ({
  'echo Hello, World!': 'Echo back the message after deserialized as JSON',
  'echo "Hello\nWorld!"': 'Parse the message as JSON and echo back'
});

const processor = async (context: TurnContext, { text }) => {
  const echo = text[0] === '"' ? onErrorResumeNext(() => JSON.parse(text)) || '[Error while parsing the JSON]' : text;

  await context.sendActivity('Echoing back in a separate activity.');
  await context.sendActivity(echo);
};

export default {
  help,
  name: 'Echo',
  pattern: /echo\s/i,
  processor
};
