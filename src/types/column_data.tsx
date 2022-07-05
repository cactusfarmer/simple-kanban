import { CardData } from './card_data';
// import { SortBy } from './sort_by';

export type ColumnData = {
  id: number
  name: string
  cards: CardData[]
  sortchildrenby : string
};
