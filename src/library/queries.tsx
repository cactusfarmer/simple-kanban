import { BoardData } from '../types/board_data';
import { WallData } from '../types/wall_data';
import {
  getBoardByIndex, getColumnByIndex, logObj, editColumnsPreseveColumnIndexes,
  editCardsPreserveCardIndexes, editBoardsPreserveBoardIndexes,
} from './helpers';
import { CardWithPath } from '../types/card_data_with_path';

export default class Queries {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static addCard = (data:WallData, column : object) => null;

  public static editCard = (
    data: WallData,
    { card, path: { boardIndex, columnIndex, cardIndex } }: CardWithPath,
  ) : WallData => {
    const { boards } = data;
    const board = getBoardByIndex(boards, boardIndex);

    const { columns } = board;
    const column = getColumnByIndex(columns, columnIndex);

    const { cards } = column;
    const editedCards = editCardsPreserveCardIndexes(cards, card, cardIndex);

    const editedColumn = { ...column, cards: editedCards };
    const editedColumns = editColumnsPreseveColumnIndexes(
      columns,
      editedColumn,
      columnIndex,
    );
    const editedBoard = {
      ...board,
      columns: editedColumns,
    };

    const editedBoards = editBoardsPreserveBoardIndexes(boards, editedBoard, boardIndex);

    const update : WallData = {
      ...data,
      boards: editedBoards,
    };
    return update;
  };
}
