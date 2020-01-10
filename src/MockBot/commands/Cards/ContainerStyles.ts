export default () => ({
  type: 'AdaptiveCard',
  version: '1.0',
  body: [
    {
      type: 'Container',
      style: 'good',
      items: [
        {
          type: 'Container',
          items: [
            {
              type: 'TextBlock',
              text: '"Good" Container Style'
            }
          ]
        }
      ]
    },
    {
      type: 'Container',
      style: 'attention',
      items: [
        {
          type: 'TextBlock',
          text: '"Attention" Container Style'
        }
      ]
    },
    {
      type: 'Container',
      style: 'emphasis',
      items: [
        {
          type: 'TextBlock',
          text: '"Emphasis" Container Style'
        }
      ]
    },
    {
      type: 'Container',
      items: [
        {
          type: 'TextBlock',
          text: '"Accent" Container Style'
        }
      ],
      style: 'accent'
    },
    {
      type: 'Container',
      items: [
        {
          type: 'TextBlock',
          text: '"Warning" Container Style'
        }
      ],
      style: 'warning'
    },
    {
      type: 'Container',
      items: [
        {
          type: 'TextBlock',
          text: '"Default" Container Style'
        }
      ],
      style: 'default'
    }
  ],
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json'
});
