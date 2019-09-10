import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'herocard': 'Show a hero card',
  'herocard long title': 'Show a hero card with a long title'
});

const processor = async (context: TurnContext, { args }) => {

  const heroCard = {
    contentType: 'application/vnd.microsoft.card.hero',
    content: {
      buttons: [{
        title: 'messageBack Action with no display text',
        type: 'messageBack',
        value: 'messageBack Button'
      }],
      images: [{
        alt: 'Microsoft Surface Alt',
        tap: {
          type: 'openUrl',
          title: 'Tapped it!',
          value: `https://webchat-mockbot.azurewebsites.net/public/testurl1.html`
        },
        url: `./assets/surface1.jpg`,
      }],
      tap: {
        type: 'openUrl',
        title: 'Tapped it!',
        value: `https://webchat-mockbot.azurewebsites.net/public/testurl2.html`
      },
      subtitle: 'This is the subtitle',
      text: '',
      title:  '[Details about image 1](https://microsoft.com)'
    }
  };

  if (args == 'long title') {
    heroCard.content.title = 'This is a HeroCard with a really, really long title that is intended to test the richCardsWrapTitle style option.';
  } else {
    heroCard.content.text = '**Price: $XXX.XX USD**\r\n------\n Additional details\r\n1. List item 1 \n2. List item 2 \n3. List item 3';
  }

  await context.sendActivity({ attachments: [heroCard] });
};

export default {
  help,
  name: 'Hero card', 
  pattern:  /^herocard(\s+([\d\w]+))?(\s+([\d\w]+))?$/i,
  processor
};
