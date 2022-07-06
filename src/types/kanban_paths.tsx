/**  Added some future proofing, might want to be able
 to use the array indecies instead in future */

export type KanbanPathToItem = { viaId: number[], viaIndex: number[], };

export type BoardPathById = { boardId: number };
// export type BoardPathByIndex = { boardIndex: number };

export type CardPathById = { boardId: number, columnId: number, cardId: number };

export type CardPath = {
  boardIndex: number,
  columnIndex: number,
  cardIndex: number,
  boardId: number,
  columnId: number,
  cardId: number
};

export type ColumnPathById = { boardId: number, columnId: number };
// export type ColumnPathByIndex = { boardIndex: number, columnIndex: number };
