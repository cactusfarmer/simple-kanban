export type KanbanPathToItem = { viaId: number[], viaIndex: number[], };

export type BoardPathById = { boardId: number };
// export type BoardPathByIndex = { boardIndex: number };

export type CardPath = {
  boardIndex: number,
  columnIndex: number,
  cardIndex: number,
  boardId: number,
  columnId: number,
  cardId: number
};
// refactor
export const KanbanPathNames = ['boardId', 'columnId', 'cardId', 'boardIndex', 'columnIndex', 'cardIndex'];

export type ColumnPathById = { boardId: number, columnId: number };
