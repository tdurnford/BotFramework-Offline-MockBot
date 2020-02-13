import { TurnContext } from 'botbuilder-core';

const help = () => ({
  'arabic markdown': 'Show a Markdown-formatted message for RTL'
});

const processor = async (context: TurnContext) => {
  await context.sendActivity({
    type: 'message',
    textFormat: 'markdown',
    text: `## التنسيق الأساسي \r\n\r\nيمكنك كتابة فقرات بالشكل التالي. الفقرة هي \r\n markdown المكون الرئيسي للغة \r\n\r\n *باستطاعتك استخدام *الخطوط المائلة  \nو**الخطوط العريضة**. يمكن استخدام هذه الخطوط *بشكل **متداخل** ايضا*\r\n\r\n## القوائم\r\n\r\n### القوائم المرتبة\r\n\r\n1.	واحد\r\n2.	إثنان\r\n3. ثلاثة\r\n\r\n### تعليق\r\n\r\n> هذا مثال بسيط لتعليق \r\n> يتم وضع فرجة بشكل تلقائي قبل اي استخدام لتعليق\r\n\r\n## (URLs) عناوين مواقع`
  });
};

export default {
  help,
  name: 'Arabic Markdown',
  pattern: /^arabic markdown$|نص/i,
  processor
};
