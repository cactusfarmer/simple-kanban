import { BoardData } from '../types/board_data';
import { WallData } from '../types/wall_data';
import { logObj } from './helpers';
import { CardWithPath } from '../types/card_data_with_path';

export default class Queries {
  public static addBoard = (data: WallData, board: BoardData): WallData => {
    const update = {
      ...data,
      boards:
        [...data.boards, { name: board.name, columns: board.columns, id: 1 }],
    };
    logObj(update);
    return update;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  /* public static getPathType(path: number[], pathType: string) {
    const parts: string[] = [];
    if (pathType === 'byId') {
      parts.push('boardId', 'columnId', 'CardId');
    } else {
      parts.push('boardIndex', 'columnIndex', 'cardIndex');
    }
  } */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static editCard = (data: WallData, { card, path }: CardWithPath) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // public static editCard = (data: WallData, card: CardData) => null;
}
