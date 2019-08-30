import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'thumbnailcard': 'Show a thumbnail card',
  'thumbnailcard long title': 'Show a thumbnail card with a long title'
});

const processor = async (context: TurnContext, { args }) => {

  const thumbnailCard = {
    contentType: 'application/vnd.microsoft.card.thumbnail',
    content: {
      buttons: [],
      images: [{
        alt: 'Microsoft Surface Alt',
        url: `./assets/surface1.jpg`,
      }],
      title: 'Microsoft Surface Pro',
    }
  }

  if (args === 'long title') {
    thumbnailCard.content.title = 'This is a ThumbnailCard with a really, really long title that is intended to test the richCardsWrapTitle style option.';
  }

  await context.sendActivity({ attachments: [thumbnailCard] });
};

export default {
  help,
  name: 'Thumbnail card',
  pattern: /^thumbnailcard(\s+([\d\w]+))?(\s+([\d\w]+))?$/i,
  processor
}
