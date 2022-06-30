import { BoardData } from './board_data';
import { WallData } from './wall_data';

export default class Data {
  public static addBoard = (data: WallData, board: BoardData): WallData => {
    const update = {
      ...data,
      boards:
                [...data.boards, { name: board.name, columns: board.columns, id: 1 }],
    };
    return update;
  };
}
