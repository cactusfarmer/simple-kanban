import { CardData } from './card_data';
import { CardPath } from './kanban_paths';

export type CardWithPath = {
  card: CardData;
  path: CardPath;
};
