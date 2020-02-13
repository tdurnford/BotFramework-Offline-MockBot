import { TurnContext } from 'botbuilder-core';

const help = () => ({
  carousel: 'Show a carousel of product details'
});

const processor = async (context: TurnContext) => {
  const { PUBLIC_URL } = process.env;

  await context.sendActivity({
    type: 'message',
    text: '',
    attachmentLayout: 'carousel',
    attachments: [
      {
        contentType: 'application/vnd.microsoft.card.hero',
        content: {
          title: 'Details about image 1',
          subtitle: 'This is the subtitle',
          text: 'Price: $XXX.XX USD',
          images: [
            {
              url: `${PUBLIC_URL}assets/surface1.jpg`
            }
          ],
          buttons: [
            {
              type: 'imBack',
              value: 'Place to buy',
              title: 'Places To Buy'
            },
            {
              type: 'imBack',
              value: 'Related Products',
              title: 'Related Products'
            }
          ]
        }
      },
      {
        contentType: 'application/vnd.microsoft.card.hero',
        content: {
          title: 'Details about image 2',
          subtitle: 'This is the subtitle',
          text: 'Price: $XXX.XX USD',
          images: [
            {
              url: `${PUBLIC_URL}assets/surface2.jpg`
            }
          ],
          buttons: [
            {
              type: 'imBack',
              value: 'Place to buy',
              title: 'Places To Buy'
            },
            {
              type: 'imBack',
              value: 'Related Products',
              title: 'Related Products'
            }
          ]
        }
      },
      {
        contentType: 'application/vnd.microsoft.card.hero',
        content: {
          title: 'Details about image 3',
          subtitle: 'This is the subtitle',
          text: 'Price: $XXX.XX USD',
          images: [
            {
              url: `${PUBLIC_URL}assets/surface3.jpg`
            }
          ],
          buttons: [
            {
              type: 'imBack',
              value: 'Place to buy',
              title: 'Places To Buy'
            },
            {
              type: 'imBack',
              value: 'Related Products',
              title: 'Related Products'
            }
          ]
        }
      },
      {
        contentType: 'application/vnd.microsoft.card.hero',
        content: {
          title: 'Details about image 4',
          subtitle: 'This is the subtitle',
          text: 'Price: $XXX.XX USD',
          images: [
            {
              url: `${PUBLIC_URL}assets/surface4.jpg`
            }
          ],
          buttons: [
            {
              type: 'imBack',
              value: 'Place to buy',
              title: 'Places To Buy'
            },
            {
              type: 'imBack',
              value: 'Related Products',
              title: 'Related Products'
            }
          ]
        }
      }
    ]
  });
};

export default {
  help,
  name,
  pattern: /^carousel/i,
  processor
};
