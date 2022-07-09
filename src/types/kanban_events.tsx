import { CardWithPath } from './card_data_with_path';
import { PathToItem } from './kanban_paths';

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
  openEditCardForm: (cardWithPath: CardWithPath) => void,
  editCard: (cardWithPath: CardWithPath) => void,
  openAddCardForm: Function
  addCard: Function
  moveCard: Function,
  deleteCard: Function
};

export type ColumnEvents = {

};
