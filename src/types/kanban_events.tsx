import { CardData } from './card_data';
import { CardDataWithPath } from './card_data_with_path';
import { ColumnPath, PathToItem } from './kanban_paths';

export type KanbanEvents = {
  cardEvents: CardEvents
  boardEvents: BoardEvents
  columnEvents: ColumnEvents
};

export type BoardEvents = {
  addBoard: Function,
  viewBoard: (path: PathToItem) => void
};

export type CardEvents = {
  openEditCardForm: (cardWithPath: CardDataWithPath) => void,
  editCard: (cardWithPath: CardDataWithPath) => void,
  openAddCardForm: (columnPath: ColumnPath, cards: CardData[]) => void,
  addCard: Function
  moveCard: Function,
  deleteCard: Function
};

export type ColumnEvents = {

};
