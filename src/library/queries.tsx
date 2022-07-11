import { BoardData } from '../types/board_data';
import { WallData } from '../types/wall_data';
import { CardPath, ColumnPath } from '../types/kanban_paths';
import { CardData } from '../types/card_data';
import {
  getBoardByIndex, getColumnByIndex, logObj, editColumnsPreseveColumnIndexes,
  editCardsPreserveCardIndexes, editBoardsPreserveBoardIndexes,
} from './helpers';
import { BoardItem } from '../interfaces/board_item';
import { CardQueryParts } from '../types/card_query_parts';

export default class Queries {
  public static getLastInsertId = (items: BoardItem[]): number => {
    const ids = items.map((item) => item.id);
    return Math.max(...ids);
  };

  public static addBoard = (data: WallData, board: BoardData): WallData => {
    const update = {
      ...data,
      boards:
        [...data.boards, {
          name: board.name, columns: board.columns, id: 1, sortchildrenby: 'id',
        }],
    };
    logObj(update);
    return update;
  };

  public static addCard = (queryParts: CardQueryParts, columnPath: ColumnPath, card: CardData) => {
    const newCards = [...queryParts.ourCards, card];
    return this.updateCards(newCards, queryParts, columnPath);
  };

  public static editCard = (queryParts: CardQueryParts, cardPath: CardPath, card: CardData) => {
    const editedCards = editCardsPreserveCardIndexes(queryParts.ourCards, card, cardPath.cardIndex);
    return this.updateCards(editedCards, queryParts, { ...cardPath } as ColumnPath);
  };

  public static cardQueryParts = (
    data: WallData,
    { boardIndex, columnIndex }: ColumnPath,
  ): CardQueryParts => {
    const { boards } = data;
    const board = getBoardByIndex(boards, boardIndex);
    const { columns } = board;
    const column = getColumnByIndex(columns, columnIndex);
    const { cards } = column;
    return {
      wall: data,
      allBoards: boards,
      ourBoard: board,
      allColumns: columns,
      ourColumn: column,
      ourCards: cards,
    };
  };

  private static updateCards = (
    newCards: CardData[],
    qp: CardQueryParts,
    { columnIndex, boardIndex }: ColumnPath,
  ) => {
    const newColumn = { ...qp.ourColumn, cards: newCards };
    const newColumns = editColumnsPreseveColumnIndexes(
      qp.allColumns,
      newColumn,
      columnIndex,
    );
    const newBoard = {
      ...qp.ourBoard,
      columns: newColumns,
    };

    const newBoards = editBoardsPreserveBoardIndexes(qp.allBoards, newBoard, boardIndex);

    const update: WallData = {
      ...qp.wall,
      boards: newBoards,
    };
    return update;
  };
}
