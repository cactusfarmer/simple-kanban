import { BoardData } from '../types/board_data';
import { WallData } from '../types/wall_data';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getBoard, getCard, getColumn, getOtherBoards, getOtherCards, getOtherColumns, logObj,
} from './helpers';
import { CardWithPath } from '../types/card_data_with_path';
import { BoardItem } from '../interfaces/board_item';

export default class Queries {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static sortItems = (
    data: BoardItem[],
  ) : BoardItem[] => data.sort((a, b) => a.id - b.id);

  public static addBoard = (data: WallData, board: BoardData): WallData => {
    const update = {
      ...data,
      boards:
        [...data.boards, { name: board.name, columns: board.columns, id: 1 }],
    };
    logObj(update);
    return update;
  };

  public static editCard = (data: WallData, { card, path }: CardWithPath) : WallData => {
    const { boards } = data;
    const boardToEdit = getBoard(boards, path.boardId);
    const otherBoards = getOtherBoards(boards, path.boardId);
    const columnToEdit = getColumn(boardToEdit.columns, path.columnId);
    const otherColumns = getOtherColumns(boardToEdit.columns, path.columnId);
    const otherCards = getOtherCards(columnToEdit.cards, path.cardId);

    const update : WallData = {
      // ...data,
      boards: [...otherBoards,
        {
          ...boardToEdit,
          columns: [
            ...otherColumns,
            ...[{
              ...columnToEdit, cards: [...otherCards, card],
            }],
          ],
        }],
    };
    return update;
  };
}
