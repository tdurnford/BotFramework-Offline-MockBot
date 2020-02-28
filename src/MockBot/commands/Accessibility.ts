import { TurnContext } from 'botbuilder-core';
import AudioProcessor from './Audio';
import DocumentPlain from './DocumentPlain';
import DocumentWord from './DocumentWord';
import Image from './Image';
import ImageSVG from './ImageSVG';
import Layout from './Layout';
import Markdown from './Markdown';
import SuggestedActions from './SuggestedActionsCard';
import Text from './Text';
import Video from './Video';
import Xml from './Xml';

const help = () => ({
  accessibility: 'Show all activities related to accessibility test'
});

async function processor(context: TurnContext) {
  await AudioProcessor.processor(context);
  await DocumentPlain.processor(context);
  await DocumentWord.processor(context);
  await Image.processor(context);
  await ImageSVG.processor(context);
  await Layout.processor(context, { args: '' });
  await Layout.processor(context, { args: 'single' });
  await Layout.processor(context, { args: 'single carousel' });
  await Layout.processor(context, { args: 'double' });
  await Layout.processor(context, { args: 'carousel' });
  await Markdown.processor(context);
  await Text.processor(context);
  await Video.processor(context, { args: '' });
  await Xml.processor(context);

  // Suggested actions must be the last activity
  await SuggestedActions.processor(context, { args: '' });
}

export default {
  help,
  name,
  pattern: /^accessibility$/,
  processor
};
