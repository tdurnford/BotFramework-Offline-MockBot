import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'arabic markdown': 'Show a Markdown-formatted message for RTL'
});

const processor = async (context: TurnContext) => {
  await context.sendActivity({
    type: 'message',
    textFormat: 'markdown',
    text: `## Arabic<Basic formatting>\r\n\r\nArabic<Paragraphs can be written like so. A paragraph is the> \r\nArabic<basic block of Markdown.> \r\n\r\nArabic<Basic formatting of *italics*> \nArabic<and **bold** is supported. This *can be **nested** like* so.>\r\n\r\n## Arabic<Lists>\r\n\r\n### Arabic<Ordered list>\r\n\r\nArabic<1. one>\r\nArabic<2. two>\r\nArabic<3. three>\r\n\r\n### Arabic<Quote>\r\n\r\n> Arabic<Here is a quote. What this is should be self explanatory.> \r\n> Arabic<Quotes are automatically indented when they are used.`
  });
};

export default {
  help,
  name: 'Arabic Markdown',
  pattern: /^arabic markdown$/i,
  processor
};
