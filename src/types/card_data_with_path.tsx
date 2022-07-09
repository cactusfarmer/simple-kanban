import { CardData } from './card_data';
import { CardPath } from './kanban_paths';

export type CardDataWithPath = {
  cardData: CardData;
  cardPath: CardPath;
};
