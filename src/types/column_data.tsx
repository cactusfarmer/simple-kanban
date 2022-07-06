import { BoardItem } from '../interfaces/board_item';
import { CardData } from './card_data';

export type ColumnData = BoardItem & {
  cards: CardData[]
  sortchildrenby : string
};
