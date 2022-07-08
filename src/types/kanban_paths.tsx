export type PathToItem = { viaId: number[], viaIndex: number[], };

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

export type ColumnPath = {
  boardIndex: number,
  columnIndex: number,
  boardId: number,
  columnId: number
};

// refactor
export const CardPathNames = ['boardId', 'columnId', 'cardId', 'boardIndex', 'columnIndex', 'cardIndex'];
export const ColumnPathNames = ['boardId', 'columnId', 'boardIndex', 'columnIndex'];

export type ColumnPathById = { boardId: number, columnId: number };
