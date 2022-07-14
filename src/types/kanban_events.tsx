import { CardData } from './card_data';
import { CardDataWithPath } from './card_data_with_path';
import { ColumnPath, PathToItem } from './kanban_paths';

export type KanbanEvents = {
  cardEvents: CardEvents
  boardEvents: BoardEvents
  columnEvents: ColumnEvents
  navEvents : NavEvents
};

export type BoardEvents = {
  addBoard: Function,
};

export type CardEvents = {
  openEditCardForm: (cardWithPath: CardDataWithPath) => void,
  editCard: (cardWithPath: CardDataWithPath) => void,
  openAddCardForm: (columnPath: ColumnPath, cards: CardData[]) => void,
  addCard: Function
  moveCard: Function,
  deleteCard: Function
};

export type NavEvents = {
  viewBoard: (path: PathToItem) => void
  isSelected: (boardId: number) => Boolean
}

export type ColumnEvents = {

};
