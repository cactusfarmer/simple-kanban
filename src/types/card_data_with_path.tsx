import { CardData } from './card_data';
import { CardPathById } from './kanban_paths';

export type CardWithPath = {
  card: CardData;
  path: CardPathById;
};
