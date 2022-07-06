import { BoardData } from '../types/board_data';
import { WallData } from '../types/wall_data';
import {
  getBoardByIndex, getColumnByIndex, logObj, restoreBoardsByIndex,
  restoreCardsByIndex, restoreColumnsByIndex,
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

  public static editCard = (data: WallData, { card, path }: CardWithPath) : WallData => {
    const { boards } = data;
    const boardToEdit = getBoardByIndex(boards, path.boardIndex);
    const columnToEdit = getColumnByIndex(boardToEdit.columns, path.columnIndex);
    const { cards } = columnToEdit;

    const updatedCards = restoreCardsByIndex(cards, card, path.cardIndex);
    const updatedColumn = { ...columnToEdit, cards: updatedCards };
    const updatedColumns = restoreColumnsByIndex(
      boardToEdit.columns,
      updatedColumn,
      path.columnIndex,
    );
    const updatedBoard = {
      ...boardToEdit,
      columns: updatedColumns,
    };

    const updatedBoards = restoreBoardsByIndex(boards, updatedBoard, path.boardIndex);

    const update : WallData = {
      ...data,
      boards: updatedBoards,
    };
    return update;
  };
}
