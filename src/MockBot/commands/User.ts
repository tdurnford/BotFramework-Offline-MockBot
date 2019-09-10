import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'user': 'Dump the user ID and username',
  'user id': 'Dump the user ID',
  'user name': 'Dump the username'
});

async function processor(context: TurnContext, { args }: { args: string; }) {
  switch (args) {
    case 'id':
      await context.sendActivity({
        text: `Your user ID is \`${ context.activity.from.id }\`.`,
        type: 'message'
      });

      break;

    case 'name':
      await context.sendActivity({
        text: `Your user name is "${ context.activity.from.name }".`,
        type: 'message'
      });

      break;

    default:
      await context.sendActivity({
        text: `Your user ID is \`${ context.activity.from.id }\`.\n\nAnd your user name is "${ context.activity.from.name }".`,
        type: 'message'
      });

      break;
  }
}

export default {
  help,
  name: 'User ID',
  pattern: /^user(\s+[\d\w]+)?/i,
  processor
}
