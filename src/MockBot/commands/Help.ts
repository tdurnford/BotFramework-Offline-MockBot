import { TurnContext } from 'botbuilder-core';
import commands from './';
import reduceMap from '../utils/reduceMap';

const processor = async (context: TurnContext) => {
  const attachments = commands
    .filter(({ help }) => help)
    .map(({ help, name }) => {
      return {
        contentType: 'application/vnd.microsoft.card.thumbnail',
        content: {
          buttons: reduceMap(
            help(),
            (result: [], title: string, value: string) => [
              ...result,
              {
                title,
                type: 'imBack',
                value
              }
            ],
            []
          ).sort(({ title: x }, { title: y }) => (x > y ? 1 : x < y ? -1 : 0)),
          title: name
        }
      };
    });

  await context.sendActivity({
    attachments: attachments.sort(({ content: { title: x } }, { content: { title: y } }) =>
      x > y ? 1 : x < y ? -1 : 0
    )
  });
};

export default {
  pattern: /^help$/i,
  processor
};
