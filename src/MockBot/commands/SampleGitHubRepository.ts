import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'sample:github-repository': 'Demo for GitHub repository sample'
});

async function processor(context: TurnContext) {
  context.sendActivity({
    type: 'message',
    attachmentLayout: 'carousel',
    attachments: [{
      content: {
        owner: 'Microsoft',
        repo: 'BotFramework-WebChat'
      },
      contentType: 'application/vnd.microsoft.botframework.samples.github-repository'
    }, {
      content: {
        owner: 'Microsoft',
        repo: 'BotFramework-Emulator'
      },
      contentType: 'application/vnd.microsoft.botframework.samples.github-repository'
    }, {
      content: {
        owner: 'Microsoft',
        repo: 'BotFramework-DirectLineJS'
      },
      contentType: 'application/vnd.microsoft.botframework.samples.github-repository'
    }]
  });
}

export default {
  help,
  name: 'Demo for GitHub repository sample',
  pattern: 'sample:github-repository',
  processor
 }
