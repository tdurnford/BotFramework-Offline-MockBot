import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'file': 'Show a message with a text file and Word document attachments'
});

async function processor(context: TurnContext) {
  const { PUBLIC_URL } = process.env;

  await context.sendActivity({
    type: 'message',
    text: 'The reports are ready, see attached.',
    attachments: [{
      contentType: 'application/octet-stream',
      contentUrl: `${PUBLIC_URL}assets/test.txt`,
      name: 'Plain text'
    }, {
      contentType: 'application/octet-stream',
      contentUrl: `${PUBLIC_URL}assets/test.docx`,
      name: 'Word document'
    }]
  });
}

export default {
  help, 
  name: 'File attachments',
  pattern: /^file$/i,
  processor
}
