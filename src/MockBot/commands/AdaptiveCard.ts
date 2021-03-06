import { TurnContext } from 'botbuilder-core';

import ActionStyles from './Cards/1.1/ActionStyles';
import BingSports from './Cards/1.0/BingSports';
import Breakfast from './Cards/1.0/Breakfast';
import Broken from './Cards/Broken';
import CalendarReminder from './Cards/1.0/CalendarReminder';
import ContainerStyles from './Cards/ContainerStyles';
import FlightTracking from './Cards/1.0/FlightTracking';
import FlightUpdate from './Cards/FlightUpdate';
import ArabicGreeting from './Cards/1.0/ArabicGreeting';
import Inputs from './Cards/1.0/Inputs';
import Markdown from './Cards/1.0/Markdown';
import OrderedList from './Cards/1.0/OrderedList';
import Restaurant from './Cards/1.0/Restaurant';
import Review from './Cards/1.0/Review';
import RichMessage from './Cards/1.0/RichMessage';
import Simple from './Cards/Simple';
import SportsClub from './Cards/1.0/SportsClub';
import UnorderedList from './Cards/1.0/UnorderedList';
import Weather from './Cards/1.0/Weather';
import Agenda from './Cards/1.3/Agenda';
import CardWizard from './Cards/1.3/CardWizard';

const help = () => ({
  'card arabicgreeting': 'Show an Arabic greeing card card for RTL',
  'card bingsports': 'Show Bing sports using Adaptive Card',
  'card breakfast': 'Show breakfast review using Adaptive Card',
  'card broken:lang': 'Show an Adaptive Card that is broken because of invalid language identifier',
  'card broken': 'Show an Adaptive Card that is broken because of invalid version',
  'card flight': 'Show flight update using Adaptive Card',
  'card flighttracking': 'Show flight tracking using Adaptive Card',
  'card inputs': 'Show an Adaptive Card with all types of inputs',
  'card ol': 'Show an ordered list with Markdown',
  'card markdown': 'Show Markdown using Adaptive Card',
  'card reminder': 'Show a reminder using Adaptive Card',
  'card restaurant': 'Show restaurant information using Adaptive Card',
  'card review': 'Show review using Adaptive Card',
  'card richmessage': 'Show a rich message using Adaptive Card',
  'card simple': 'Show a simple Adaptive Card',
  'card sportsclub': 'Show a comprehensive sports club POI using Adaptive Card',
  'card ul': 'Show an unordered list with Markdown',
  'card weather': 'Show weather forecast using Adaptive Card'
});

const getCardJSON = (name: string = ''): any => {
  switch (name.trim().toLowerCase()) {
    case 'actionstyles':
      return ActionStyles();
    case 'agenda':
      return Agenda();

    case 'arabicgreeting':
      return ArabicGreeting();

    case 'bingsports':
    case 'sports':
      return BingSports();

    case 'breakfast':
      return Breakfast();

    case 'broken':
      return Broken();

    case 'broken:1':
    case 'broken:lang':
      return Broken('1');

    case 'calendarreminder':
    case 'calendar':
    case 'reminder':
      return CalendarReminder();

    case 'cardwizard':
    case 'wizard':
      return CardWizard();

    case 'container':
    case 'containerstyles':
      return ContainerStyles();

    case 'flight':
    case 'flightupdate':
      return FlightUpdate();

    case 'flighttracking':
      return FlightTracking();

    case 'inputs':
      return Inputs();

    case 'markdown':
      return Markdown();

    case 'ol':
      return OrderedList();

    case 'restaurant':
      return Restaurant();

    case 'review':
      return Review();

    case 'richmessage':
      return RichMessage();

    case 'simple':
      return Simple();

    case 'sportsclub':
      return SportsClub();

    case 'ul':
      return UnorderedList();

    case 'weather':
      return Weather();
  }
};

const processor = async (context: TurnContext, { args }: { args: string }) => {
  const names = args.split(' ');
  const contents = names.filter(name => name).map(name => getCardJSON(name));

  if (contents && contents.length) {
    let text = `Showing  ${names.filter(name => name).join(', ')}`;

    await context.sendActivity({
      type: 'message',
      text,
      attachmentLayout: 'carousel',
      attachments: contents.map(content => ({
        contentType: 'application/vnd.microsoft.card.adaptive',
        content
      }))
    });
  } else {
    await context.sendActivity({
      type: 'message',
      text: `No card named "${name}"`
    });
  }
};

export default {
  help,
  name: 'Adaptive Card',
  pattern: /^card(\s+[\d\w:]+)(\s+[\d\w:]+)?(\s+[\d\w:]+)?(\s+[\d\w:]+)?(\s+[\d\w:]+)?/i,
  processor
};
