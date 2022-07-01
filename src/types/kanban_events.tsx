import { CardWithPath } from './card_data_with_path';
import { KanbanPathToItem } from './kanban_paths';

export type KanbanEvents = {
  cardEvents: CardEvents
  boardEvents: BoardEvents
  columnEvents: ColumnEvents
};

export type BoardEvents = {
  addBoard: Function,
  viewBoard: (path: KanbanPathToItem) => void
};

export type CardEvents = {
  viewCard: (cardWithPath: CardWithPath) => void,
  updateCard: (cardWithPath: CardWithPath) => void,
  moveCard: Function,
  addCard: Function,
  deleteCard: Function
};

export type ColumnEvents = {};
